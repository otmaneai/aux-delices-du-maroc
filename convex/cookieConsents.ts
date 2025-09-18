import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const record = mutation({
  args: {
    analytics: v.boolean(),
    marketing: v.boolean(),
    method: v.string(),
    consentVersion: v.string(),
    ip: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("cookie_consents", {
      analytics: args.analytics,
      marketing: args.marketing,
      method: args.method,
      consentVersion: args.consentVersion,
      createdAt: Date.now(),
      ip: args.ip,
      userAgent: args.userAgent,
    });
  },
});
