import sgMail from '@sendgrid/mail';
import { ENV } from './env';

// Initialize SendGrid
if (ENV.sendgridApiKey) {
  sgMail.setApiKey(ENV.sendgridApiKey);
}

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send email via SendGrid
 * @param options Email options (to, subject, text/html)
 * @returns Promise<boolean> - true if sent successfully, false otherwise
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!ENV.sendgridApiKey || !ENV.fromEmail) {
    console.error('[Email] SendGrid not configured - missing API key or FROM_EMAIL');
    return false;
  }

  try {
    const msg: sgMail.MailDataRequired = {
      to: options.to,
      from: ENV.fromEmail,
      subject: options.subject,
      text: options.text || '',
      html: options.html,
    };

    await sgMail.send(msg);
    console.log(`[Email] Sent successfully to ${options.to}`);
    return true;
  } catch (error) {
    console.error('[Email] Failed to send:', error);
    return false;
  }
}

/**
 * Send case submission confirmation email to patient
 */
export async function sendCaseConfirmationEmail(
  patientEmail: string,
  referenceId: string,
  patientName?: string
): Promise<boolean> {
  const greeting = patientName ? `Dear ${patientName},` : 'Dear Patient,';
  
  const html = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1e293b;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="font-size: 24px; font-weight: 600; margin: 0; color: #0f172a;">Medical Care Germany</h1>
        <p style="font-size: 14px; color: #64748b; margin-top: 8px;">Cross-Border Clinical Coordination</p>
      </div>
      
      <div style="background: #f8fafc; border-left: 4px solid #0f172a; padding: 24px; margin-bottom: 32px;">
        <p style="font-size: 18px; font-weight: 600; margin: 0 0 8px 0; color: #0f172a;">Case Submission Confirmed</p>
        <p style="font-size: 14px; color: #64748b; margin: 0;">Reference ID: <strong>${referenceId}</strong></p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 20px;">${greeting}</p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
        Your case file has been formally received by the Senior Medical Leadership of Berlin Medical Care.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
        The submission has entered our structured clinical governance process and is currently undergoing preliminary strategic evaluation.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
        <strong>A formal status notification will be issued within 24–48 hours.</strong>
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 32px;">
        No further action is required at this stage.
      </p>
      
      <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; margin-top: 40px;">
        <p style="font-size: 13px; color: #94a3b8; line-height: 1.5;">
          This communication is system-generated to ensure the integrity of our case intake protocol.
        </p>
        <p style="font-size: 13px; color: #94a3b8; margin-top: 16px;">
          Medical Care Germany<br/>
          Berlin, Germany<br/>
          info@medicalcaregermany.com
        </p>
      </div>
    </div>
  `;

  const text = `
${greeting}

Your case file has been formally received by the Senior Medical Leadership of Berlin Medical Care.

Reference ID: ${referenceId}

The submission has entered our structured clinical governance process and is currently undergoing preliminary strategic evaluation.

A formal status notification will be issued within 24–48 hours.

No further action is required at this stage.

—
This communication is system-generated to ensure the integrity of our case intake protocol.

Medical Care Germany
Berlin, Germany
info@medicalcaregermany.com
  `.trim();

  return sendEmail({
    to: patientEmail,
    subject: `Case Submission Confirmation — Reference ID: ${referenceId}`,
    text,
    html,
  });
}
