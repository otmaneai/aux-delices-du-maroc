import { v } from "convex/values";
import { mutation, query, QueryCtx } from "./_generated/server";

export const listSections = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    return await ctx.db.query("menu_sections").withIndex("by_order").collect();
  },
});
