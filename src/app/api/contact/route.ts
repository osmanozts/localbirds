import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message, company } = body;

    // Honeypot gegen einfache Bots
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Local Bird Kontaktformular <info@local-bird.de>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "info@local-bird.de",
      subject: `Neue Kontaktanfrage von ${name}`,
      replyTo: email,
      text: `
Neue Kontaktanfrage über local-bird.de

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "-"}

Nachricht:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fehler beim Senden der Kontaktanfrage:", error);

    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 500 },
    );
  }
}
