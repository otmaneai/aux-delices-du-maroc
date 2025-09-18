import { v } from "convex/values";
import { query, mutation, QueryCtx } from "./_generated/server";

export const getActiveHero = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    return await ctx.db
      .query("hero_events")
      .withIndex("by_active", (q: any) => q.eq("active", true))
      .first();
  },
});
