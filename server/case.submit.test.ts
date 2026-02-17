import { describe, it, expect, vi, beforeEach } from 'vitest';
import { appRouter } from './routers';
import type { Context } from './_core/context';

// Mock email and notification modules
vi.mock('./_core/email', () => ({
  sendCaseConfirmationEmail: vi.fn().mockResolvedValue(true),
}));

vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

describe('Case Submission Endpoint', () => {
  let mockContext: Context;

  beforeEach(() => {
    // Create mock context
    mockContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };
  });

  it('should successfully submit a case with valid data', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    const result = await caller.case.submit({
      fullName: 'Test Patient',
      country: 'Germany',
      medicalSituation: 'Email: test@example.com\nPhone: +49 123 456789\nTest medical condition',
    });

    expect(result.success).toBe(true);
    expect(result.referenceId).toBeDefined();
    expect(result.referenceId).toHaveLength(12);
  });

  it('should reject submission with missing full name', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    await expect(
      caller.case.submit({
        fullName: '',
        country: 'Germany',
        medicalSituation: 'Test medical condition',
      })
    ).rejects.toThrow('Full name is required');
  });

  it('should reject submission with missing country', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    await expect(
      caller.case.submit({
        fullName: 'Test Patient',
        country: '',
        medicalSituation: 'Test medical condition',
      })
    ).rejects.toThrow('Country is required');
  });

  it('should reject submission with missing medical situation', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    await expect(
      caller.case.submit({
        fullName: 'Test Patient',
        country: 'Germany',
        medicalSituation: '',
      })
    ).rejects.toThrow('Medical situation is required');
  });

  it('should generate unique reference IDs for multiple submissions', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    const result1 = await caller.case.submit({
      fullName: 'Patient 1',
      country: 'Germany',
      medicalSituation: 'Condition 1',
    });

    const result2 = await caller.case.submit({
      fullName: 'Patient 2',
      country: 'Saudi Arabia',
      medicalSituation: 'Condition 2',
    });

    expect(result1.referenceId).not.toBe(result2.referenceId);
  });

  it('should handle submissions without email gracefully', async () => {
    const caller = appRouter.createCaller(mockContext);
    
    const result = await caller.case.submit({
      fullName: 'Test Patient',
      country: 'Germany',
      medicalSituation: 'Test medical condition without email',
    });

    expect(result.success).toBe(true);
    expect(result.referenceId).toBeDefined();
  });
});
