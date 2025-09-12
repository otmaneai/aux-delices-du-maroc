import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listSections = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("menu_sections").withIndex("by_order").collect();
  },
});
