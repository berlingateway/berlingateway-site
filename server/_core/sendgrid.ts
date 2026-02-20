import sgMail from '@sendgrid/mail';
import { ENV } from './env';

/**
 * SendGrid Email Service
 * 
 * Sends emails directly using SendGrid API
 * Requires SENDGRID_API_KEY and FROM_EMAIL environment variables
 */

export type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Initialize SendGrid with API key
 */
function initializeSendGrid(): boolean {
  if (!ENV.sendgridApiKey) {
    console.error('[SendGrid] SENDGRID_API_KEY is not configured');
    return false;
  }

  if (!ENV.fromEmail) {
    console.error('[SendGrid] FROM_EMAIL is not configured');
    return false;
  }

  try {
    sgMail.setApiKey(ENV.sendgridApiKey);
    return true;
  } catch (error) {
    console.error('[SendGrid] Failed to initialize:', error);
    return false;
  }
}

/**
 * Send an email using SendGrid
 * 
 * @param payload - Email payload with to, subject, text, and optional html
 * @returns Promise<boolean> - true if email was sent successfully, false otherwise
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  // Initialize SendGrid
  if (!initializeSendGrid()) {
    return false;
  }

  try {
    const msg = {
      to: payload.to,
      from: ENV.fromEmail!,
      subject: payload.subject,
      text: payload.text,
      html: payload.html || payload.text.replace(/\n/g, '<br>'),
    };

    await sgMail.send(msg);
    
    console.log(`[SendGrid] Email sent successfully to ${payload.to}`);
    return true;
  } catch (error: any) {
    console.error('[SendGrid] Failed to send email:', {
      error: error.message,
      code: error.code,
      response: error.response?.body,
    });
    return false;
  }
}

/**
 * Send owner notification email
 * 
 * @param title - Email subject
 * @param content - Email content (markdown-style text)
 * @returns Promise<boolean> - true if email was sent successfully
 */
export async function sendOwnerNotification(title: string, content: string): Promise<boolean> {
  if (!ENV.ownerEmail) {
    console.warn('[SendGrid] OWNER_EMAIL is not configured - cannot send owner notification');
    return false;
  }

  return sendEmail({
    to: ENV.ownerEmail,
    subject: title,
    text: content,
    html: content.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
  });
}
