import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { sendCaseConfirmationEmail } from "./_core/email";
import { sendOwnerNotification } from "./_core/sendgrid";
import { storagePut } from "./storage";
import { insertMedicalReport, insertReferringDoctor } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Case submission endpoint with auto-response email
  case: router({
    submit: publicProcedure
      .input(z.object({
        fullName: z.string().min(1, "Full name is required"),
        country: z.string().min(1, "Country is required"),
        medicalSituation: z.string().min(1, "Medical situation is required"),
      }))
      .mutation(async ({ input }) => {
        const referenceId = nanoid(12).toUpperCase();
        
        console.log('[Case Submission] New submission received:', {
          referenceId,
          fullName: input.fullName,
          country: input.country,
          medicalSituationLength: input.medicalSituation.length,
          timestamp: new Date().toISOString(),
        });
        
        // Extract email from medicalSituation (format: "Email: xxx@xxx.com\nPhone: ...")
        const emailMatch = input.medicalSituation.match(/Email:\s*([^\n]+)/);
        const patientEmail = emailMatch ? emailMatch[1].trim() : null;
        
        // TODO: Store submission in database if needed
        // await db.insert(caseSubmissions).values({
        //   referenceId,
        //   fullName: input.fullName,
        //   country: input.country,
        //   medicalSituation: input.medicalSituation,
        //   createdAt: new Date(),
        // });

        // Send auto-response email to patient (non-blocking)
        if (patientEmail) {
          try {
            const emailSent = await sendCaseConfirmationEmail(
              patientEmail,
              referenceId,
              input.fullName
            );
            
            if (!emailSent) {
              console.warn(`[Case Submission] Failed to send confirmation email to ${patientEmail}`);
            }
          } catch (error) {
            console.error('[Case Submission] Email sending error:', error);
            // Continue anyway - don't block submission
          }
        } else {
          console.warn('[Case Submission] No email found in submission - skipping patient confirmation');
        }

        // Notify owner about new case submission via SendGrid (non-blocking)
        try {
          const ownerNotified = await sendOwnerNotification(
            `New Case Submission — ${referenceId}`,
            `**Reference ID:** ${referenceId}\n\n**Patient:** ${input.fullName}\n**Country:** ${input.country}\n\n**Medical Situation:**\n${input.medicalSituation}\n\n**Patient Email:** ${patientEmail || 'Not provided'}`
          );

          if (!ownerNotified) {
            console.warn('[Case Submission] Failed to send owner notification email');
          }
        } catch (error) {
          console.error('[Case Submission] Owner notification error:', error);
          // Continue anyway - don't block submission
        }

        console.log('[Case Submission] Submission completed successfully:', {
          referenceId,
          patientEmail: patientEmail || 'Not provided',
          timestamp: new Date().toISOString(),
        });
        
        return {
          success: true,
          referenceId,
        };
      }),
  }),

  // Medical reports submission — file upload + DB + owner notification
  medicalReports: router({
    submit: publicProcedure
      .input(z.object({
        patientName: z.string().min(1, "Name is required"),
        country: z.string().min(1, "Country is required"),
        medicalCondition: z.string().min(1, "Medical condition is required"),
        files: z.array(z.object({
          name: z.string(),
          mimeType: z.string(),
          base64: z.string(), // base64-encoded file content
        })).max(10, "Maximum 10 files allowed"),
        isTest: z.boolean().optional().default(false), // If true, prefixes [TEST] to notification subjects
      }))
      .mutation(async ({ input }) => {
        const referenceId = nanoid(12).toUpperCase();

        // Upload each file to S3
        const uploadedFiles: { key: string; url: string; name: string }[] = [];
        for (const file of input.files) {
          const buffer = Buffer.from(file.base64, "base64");
          const ext = file.name.split(".").pop() ?? "bin";
          const key = `medical-reports/${referenceId}/${nanoid(8)}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
          const { url } = await storagePut(key, buffer, file.mimeType);
          uploadedFiles.push({ key, url, name: file.name });
        }

        // Persist to DB
        await insertMedicalReport({
          referenceId,
          patientName: input.patientName,
          country: input.country,
          medicalCondition: input.medicalCondition,
          fileKeys: JSON.stringify(uploadedFiles.map(f => f.key)),
          fileUrls: JSON.stringify(uploadedFiles.map(f => f.url)),
        });

        // Notify owner (non-blocking)
        const fileList = uploadedFiles.length > 0
          ? uploadedFiles.map(f => `• ${f.name}`).join("\n")
          : "No files attached";
        const testPrefix = input.isTest ? "[TEST] " : "";
        notifyOwner({
          title: `${testPrefix}New Medical Report Submission — ${referenceId}`,
          content: `${input.isTest ? "⚠️ THIS IS A TEST SUBMISSION — NOT A REAL PATIENT\n\n" : ""}Reference: ${referenceId}\nPatient: ${input.patientName}\nCountry: ${input.country}\nCondition: ${input.medicalCondition}\n\nFiles:\n${fileList}`,
        }).catch(err => console.warn("[MedicalReports] Owner notification failed:", err));

        // Also notify via SendGrid if available
        sendOwnerNotification(
          `${testPrefix}New Medical Report Submission — ${referenceId}`,
          `${input.isTest ? "⚠️ **THIS IS A TEST SUBMISSION — NOT A REAL PATIENT**\n\n" : ""}**Reference:** ${referenceId}\n\n**Patient:** ${input.patientName}\n**Country:** ${input.country}\n**Condition:** ${input.medicalCondition}\n\n**Files (${uploadedFiles.length}):**\n${fileList}`,
        ).catch(err => console.warn("[MedicalReports] SendGrid notification failed:", err));

        return { success: true, referenceId };
      }),
  }),

  // Referring doctors — physician-to-physician referral with file upload
  referringDoctors: router({
    submit: publicProcedure
      .input(z.object({
        doctorName: z.string().min(1, "Doctor name is required"),
        clinicOrHospital: z.string().min(1, "Clinic or hospital is required"),
        country: z.string().min(1, "Country is required"),
        patientCondition: z.string().min(1, "Patient condition is required"),
        files: z.array(z.object({
          name: z.string(),
          mimeType: z.string(),
          base64: z.string(),
        })).max(10, "Maximum 10 files allowed"),
        isTest: z.boolean().optional().default(false), // If true, prefixes [TEST] to notification subjects
      }))
      .mutation(async ({ input }) => {
        const referenceId = nanoid(12).toUpperCase();

        // Upload each file to S3
        const uploadedFiles: { key: string; url: string; name: string }[] = [];
        for (const file of input.files) {
          const buffer = Buffer.from(file.base64, "base64");
          const key = `referring-doctors/${referenceId}/${nanoid(8)}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
          const { url } = await storagePut(key, buffer, file.mimeType);
          uploadedFiles.push({ key, url, name: file.name });
        }

        // Persist to DB
        await insertReferringDoctor({
          referenceId,
          doctorName: input.doctorName,
          clinicOrHospital: input.clinicOrHospital,
          country: input.country,
          patientCondition: input.patientCondition,
          fileKeys: JSON.stringify(uploadedFiles.map(f => f.key)),
          fileUrls: JSON.stringify(uploadedFiles.map(f => f.url)),
        });

        const fileList = uploadedFiles.length > 0
          ? uploadedFiles.map(f => `• ${f.name}`).join("\n")
          : "No files attached";
        const testPrefixRef = input.isTest ? "[TEST] " : "";

        // Notify owner
        notifyOwner({
          title: `${testPrefixRef}New Physician Referral — ${referenceId}`,
          content: `${input.isTest ? "⚠️ THIS IS A TEST SUBMISSION — NOT A REAL REFERRAL\n\n" : ""}Reference: ${referenceId}\nDoctor: ${input.doctorName}\nClinic/Hospital: ${input.clinicOrHospital}\nCountry: ${input.country}\nPatient Condition: ${input.patientCondition}\n\nFiles:\n${fileList}`,
        }).catch(err => console.warn("[ReferringDoctors] Owner notification failed:", err));

        sendOwnerNotification(
          `${testPrefixRef}New Physician Referral — ${referenceId}`,
          `${input.isTest ? "⚠️ **THIS IS A TEST SUBMISSION — NOT A REAL REFERRAL**\n\n" : ""}**Reference:** ${referenceId}\n\n**Doctor:** ${input.doctorName}\n**Clinic/Hospital:** ${input.clinicOrHospital}\n**Country:** ${input.country}\n**Patient Condition:** ${input.patientCondition}\n\n**Files (${uploadedFiles.length}):**\n${fileList}`,
        ).catch(err => console.warn("[ReferringDoctors] SendGrid notification failed:", err));

        return { success: true, referenceId };
      }),
  }),

  // Test endpoint to diagnose SendGrid integration
  test: router({
    sendEmail: publicProcedure.mutation(async () => {
      try {
        console.log('[Test Email] Starting SendGrid test...');
        
        const result = await sendOwnerNotification(
          'SendGrid Test Email',
          'This is a test email to verify SendGrid integration. If you receive this, the API key and sender are correctly configured.'
        );
        
        console.log('[Test Email] SendGrid test completed successfully');
        
        return {
          success: true,
          message: 'Test email sent successfully! Check OWNER_EMAIL inbox.',
          result,
        };
      } catch (error: any) {
        console.error('[Test Email] SendGrid test failed:', error);
        
        // Extract detailed error information
        const errorDetails = {
          message: error.message || 'Unknown error',
          code: error.code || 'No code',
          statusCode: error.response?.statusCode || error.statusCode || 'No status code',
          body: error.response?.body || error.body || 'No body',
          stack: error.stack,
        };
        
        console.error('[Test Email] Error details:', JSON.stringify(errorDetails, null, 2));
        
        return {
          success: false,
          error: errorDetails,
          diagnosis: errorDetails.statusCode === 401 
            ? '401 Unauthorized - Wrong SendGrid API Key' 
            : errorDetails.statusCode === 403 
            ? '403 Forbidden - Sender email not verified in SendGrid'
            : `Unknown error (Status: ${errorDetails.statusCode})`,
        };
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
