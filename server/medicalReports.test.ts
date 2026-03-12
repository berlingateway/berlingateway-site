import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Context } from "./_core/context";

// Mock external dependencies before importing the router
vi.mock("./storage", () => ({
  storagePut: vi.fn().mockResolvedValue({
    key: "medical-reports/TESTREF/abc-test.pdf",
    url: "https://cdn.example.com/medical-reports/TESTREF/abc-test.pdf",
  }),
}));

vi.mock("./db", () => ({
  insertMedicalReport: vi.fn().mockResolvedValue(undefined),
  getDb: vi.fn().mockResolvedValue(null),
  upsertUser: vi.fn().mockResolvedValue(undefined),
  getUserByOpenId: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./_core/sendgrid", () => ({
  sendOwnerNotification: vi.fn().mockResolvedValue(true),
}));

vi.mock("./_core/email", () => ({
  sendCaseConfirmationEmail: vi.fn().mockResolvedValue(true),
}));

import { appRouter } from "./routers";

const mockContext: Context = {
  req: {} as any,
  res: {} as any,
  user: null,
};

describe("medicalReports.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns success and a referenceId for a valid submission without files", async () => {
    const caller = appRouter.createCaller(mockContext);
    const result = await caller.medicalReports.submit({
      patientName: "Ahmed Al-Rashid",
      country: "Saudi Arabia",
      medicalCondition: "Stage II lung carcinoma requiring specialist evaluation",
      files: [],
    });

    expect(result.success).toBe(true);
    expect(typeof result.referenceId).toBe("string");
    expect(result.referenceId.length).toBeGreaterThan(0);
  });

  it("uploads files to S3 and returns success for a submission with files", async () => {
    const { storagePut } = await import("./storage");
    const { insertMedicalReport } = await import("./db");

    const caller = appRouter.createCaller(mockContext);
    const result = await caller.medicalReports.submit({
      patientName: "Maria Gonzalez",
      country: "Spain",
      medicalCondition: "Neurological assessment required",
      files: [
        {
          name: "mri-scan.pdf",
          mimeType: "application/pdf",
          base64: Buffer.from("fake pdf content").toString("base64"),
        },
      ],
    });

    expect(result.success).toBe(true);
    expect(storagePut).toHaveBeenCalledOnce();
    expect(insertMedicalReport).toHaveBeenCalledOnce();

    const dbCall = (insertMedicalReport as any).mock.calls[0][0];
    expect(dbCall.patientName).toBe("Maria Gonzalez");
    expect(dbCall.country).toBe("Spain");
    expect(dbCall.referenceId).toBe(result.referenceId);
  });

  it("rejects submission with missing required fields", async () => {
    const caller = appRouter.createCaller(mockContext);
    await expect(
      caller.medicalReports.submit({
        patientName: "",
        country: "Germany",
        medicalCondition: "Some condition",
        files: [],
      })
    ).rejects.toThrow();
  });

  it("rejects submission with more than 10 files", async () => {
    const caller = appRouter.createCaller(mockContext);
    const tooManyFiles = Array.from({ length: 11 }, (_, i) => ({
      name: `file-${i}.pdf`,
      mimeType: "application/pdf",
      base64: Buffer.from("content").toString("base64"),
    }));

    await expect(
      caller.medicalReports.submit({
        patientName: "Test Patient",
        country: "France",
        medicalCondition: "Test condition",
        files: tooManyFiles,
      })
    ).rejects.toThrow();
  });
});
