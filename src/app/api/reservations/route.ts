import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ReservationEmail from "@/emails/ReservationEmail";

const CONTACT_TARGET_EMAIL =
  process.env.CONTACT_TARGET_EMAIL || "resa.addm@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      message,
      consent,
      consentVersion,
    } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consentement requis" },
        { status: 400 }
      );
    }

    const policyVersion =
      typeof consentVersion === "string" && consentVersion.length > 0
        ? consentVersion
        : "2025-09-17";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    try {
      const { data, error } = await resend.emails.send({
        from: "Reservation <onboarding@resend.dev>",
        to: [CONTACT_TARGET_EMAIL],
        subject: `Nouvelle Réservation de ${name} - ${date}`,
        react: ReservationEmail({
          name,
          email,
          phone,
          date,
          time,
          guests: String(guests),
          message,
          consentVersion: policyVersion,
        }),
      });

      if (error) {
        console.error("Resend API Error:", error);
        const devError = (() => {
          try {
            return JSON.stringify(error);
          } catch {
            return String((error as any)?.message || error);
          }
        })();
        return NextResponse.json(
          {
            error:
              process.env.NODE_ENV === "production"
                ? "Error sending email"
                : devError,
          },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Resend API Exception:", err);
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "production"
              ? "Error sending email"
              : String((err as any)?.message || err),
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Reservation submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    const message = (() => {
      try {
        return JSON.stringify(error);
      } catch {
        return typeof error === "string"
          ? error
          : (error as any)?.message || "Internal server error";
      }
    })();
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "production"
            ? "Internal server error"
            : String(message),
      },
      { status: 500 }
    );
  }
}
