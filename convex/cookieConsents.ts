import { mutation, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

const recordArgs = {
  analytics: v.boolean(),
  marketing: v.boolean(),
  method: v.string(),
  consentVersion: v.string(),
  ip: v.optional(v.string()),
  userAgent: v.optional(v.string()),
};

export const record = mutation({
  args: recordArgs,
  handler: async (
    ctx: MutationCtx,
    args: {
      analytics: boolean;
      marketing: boolean;
      method: string;
      consentVersion: string;
      ip?: string;
      userAgent?: string;
    }
  ) => {
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
