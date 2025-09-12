import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listImages = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("gallery_images").order("desc").collect();
  },
});
