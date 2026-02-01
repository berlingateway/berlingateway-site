import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";

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
        fullName: z.string().optional(),
        country: z.string().optional(),
        medicalSituation: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const referenceId = nanoid(12).toUpperCase();
        
        // TODO: Store submission in database if needed
        // await db.insert(caseSubmissions).values({
        //   referenceId,
        //   fullName: input.fullName,
        //   country: input.country,
        //   medicalSituation: input.medicalSituation,
        //   createdAt: new Date(),
        // });

        // Send auto-response email (placeholder - requires email service integration)
        // In production, integrate with your email service (e.g., SendGrid, AWS SES, Resend)
        console.log('[Case Submission] Auto-response email would be sent:', {
          referenceId,
          subject: `Case Submission Confirmation — Reference ID: ${referenceId}`,
          body: `Your case file has been formally received by the Senior Medical Leadership of Berlin Medical Care.

The submission has entered our structured clinical governance process and is currently undergoing preliminary strategic evaluation.

A formal status notification will be issued within 24–48 hours.

No further action is required at this stage.

—
This communication is system-generated to ensure the integrity of our case intake protocol.`,
        });

        return {
          success: true,
          referenceId,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
