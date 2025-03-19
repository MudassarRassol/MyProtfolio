import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
});

// Function to Send Email
const sendEmail = async (name: string, email: string, message: string): Promise<boolean> => {
  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your email
      replyTo: email, // Allow replies from user
      subject: `New Contact Us Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
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

// Handle Contact Form Submission
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate Fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // Send Email
    const emailSent = await sendEmail(name, email, message);
    if (!emailSent) {
      return NextResponse.json({ error: "Failed to send email. Try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
