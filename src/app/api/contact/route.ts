import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <noreply@kunalkhandelwal.dev>", // Replace with your verified domain
      to: ["me@kunalkhandelwal.dev", "kunalkhandelwal108@gmail.com"], // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #5b78f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5b78f6; margin-bottom: 5px;">From:</h3>
              <p style="margin: 0; font-size: 16px; color: #333;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5b78f6; margin-bottom: 5px;">Email:</h3>
              <p style="margin: 0; font-size: 16px; color: #333;">
                <a href="mailto:${email}" style="color: #5b78f6; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5b78f6; margin-bottom: 5px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #5b78f6;">
                <p style="margin: 0; font-size: 16px; color: #333; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
              <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
              <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email, // Allow replying directly to the sender
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
