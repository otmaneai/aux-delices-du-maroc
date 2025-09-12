import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listMenuItems = query({
  args: {},
  handler: async (ctx: any, args: any) => {
    return await ctx.db.query("menu_items").collect();
  },
});
