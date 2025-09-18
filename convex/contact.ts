import { v } from "convex/values";
import {
  action,
  mutation,
  query,
  ActionCtx,
  MutationCtx,
} from "./_generated/server";
import { api } from "./_generated/api";
import { Doc, Id } from "./_generated/dataModel";
import { Resend } from "resend";

// Utilities
function sanitize(input: string) {
  return input.replace(/[<>]/g, "");
}

// Mutation: create a contact/reservation message with simple rate limit and honeypot
export const createMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    ip: v.optional(v.string()),
    userId: v.optional(v.string()),
    hp: v.optional(v.string()), // honeypot: if filled, we silently drop email
    consent: v.optional(v.boolean()),
    consentVersion: v.optional(v.string()),
  },
  handler: async (ctx: MutationCtx, args: any) => {
    const now = Date.now();

    // Simple rate limit: max 5 attempts per 10 minutes per ip/user
    const windowMs = 10 * 60 * 1000;
    const since = now - windowMs;
    const recent = await ctx.db
      .query("contact_messages")
      .withIndex("by_createdAt", (q: any) => q.gte("createdAt", since))
      .collect();
    const key = args.userId || args.ip || "anon";
    const attempts = recent.filter(
      (r: Doc<"contact_messages">) => (r.userId || r.ip || "anon") === key
    ).length;
    if (attempts >= 5) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }

    // Insert record
    const id = await ctx.db.insert("contact_messages", {
      name: sanitize(args.name),
      email: sanitize(args.email),
      phone: args.phone ? sanitize(args.phone) : undefined,
      subject: sanitize(args.subject),
      message: sanitize(args.message),
      createdAt: now,
      ip: args.ip,
      userId: args.userId,
      consent: Boolean(args.consent),
      consentVersion: args.consentVersion,
      consentTimestamp: args.consent ? now : undefined,
    });

    // If honeypot is filled, skip email sending but report success
    if (args.hp && args.hp.trim().length > 0) {
      return { id, emailed: false, honeypot: true };
    }

    // Schedule email notification using Convex action
    await ctx.scheduler.runAfter(0, api.contact.sendNotificationEmail, {
      name: args.name,
      email: args.email,
      phone: args.phone || "",
      subject: args.subject,
      message: args.message,
      consentVersion: args.consentVersion || "N/A",
    });

    return { id, emailed: true };
  },
});

const sendNotificationEmailArgs = {
  name: v.string(),
  email: v.string(),
  phone: v.string(),
  subject: v.string(),
  message: v.string(),
  consentVersion: v.optional(v.string()),
};

// Action: send email via Resend
export const sendNotificationEmail = action({
  args: sendNotificationEmailArgs,
  handler: async (_ctx: ActionCtx, args: any) => {
    const apiKey = process.env.RESEND_API_KEY;
    const target = process.env.CONTACT_TARGET_EMAIL || "resa.addm@gmail.com";
    if (!apiKey) throw new Error("RESEND_API_KEY not configured");

    const resend = new Resend(apiKey);

    const html = `
      <div>
        <h2>New Website Message</h2>
        <p><strong>Name:</strong> ${sanitize(args.name)}</p>
        <p><strong>Email:</strong> ${sanitize(args.email)}</p>
        <p><strong>Phone:</strong> ${sanitize(args.phone)}</p>
        <p><strong>Subject:</strong> ${sanitize(args.subject)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap">${sanitize(args.message)}</pre>
        <hr style="margin:16px 0; border:none; border-top:1px solid #eee" />
        <p style="font-size:14px; color:#555">
          Vous recevez cet email car un utilisateur a rempli un formulaire sur auxdelicesdumaroc.com.
          Le consentement RGPD associé est enregistré (version ${sanitize(
            args.consentVersion || "N/A"
          )}). Pour supprimer ou modifier cette demande, contactez le client ou écrivez à
          <a href="mailto:dpo@auxdelicesdumaroc.com"> dpo@auxdelicesdumaroc.com</a>.
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: [target],
      subject: `New website message: ${args.subject} — ${args.name}`,
      html,
    });

    if (error) throw error;
    return { delivered: true };
  },
});
