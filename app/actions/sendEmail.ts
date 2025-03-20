"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
});

export const sendEmail = async (name: string, email: string, subject: string, message: string): Promise<boolean> => {
  try {
    await transporter.sendMail({
      from: `Contact Form <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your email
      replyTo: email, // Allow replies from user
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
