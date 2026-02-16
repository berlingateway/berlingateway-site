import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { sendCaseConfirmationEmail } from "./_core/email";
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

        // Notify owner about new case submission (non-blocking)
        try {
          const ownerNotified = await notifyOwner({
            title: `New Case Submission — ${referenceId}`,
            content: `**Reference ID:** ${referenceId}\n\n**Patient:** ${input.fullName}\n**Country:** ${input.country}\n\n**Medical Situation:**\n${input.medicalSituation}\n\n**Patient Email:** ${patientEmail || 'Not provided'}`,
          });

          if (!ownerNotified) {
            console.warn('[Case Submission] Failed to notify owner - notification service unavailable');
          }
        } catch (error) {
          console.error('[Case Submission] Owner notification error:', error);
          // Continue anyway - don't block submission
        }

        return {
          success: true,
          referenceId,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
