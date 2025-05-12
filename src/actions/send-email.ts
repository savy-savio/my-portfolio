'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'okwolig60@gmail.com',
      subject: 'Message from portolio contact form',
      reply_to: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  }
};
