import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getActiveHero = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db
      .query("hero_events")
      .withIndex("by_active", (q: any) => q.eq("active", true))
      .first();
  },
});
