import { v } from "convex/values";
import { mutation, query, QueryCtx } from "./_generated/server";

export const listImages = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    return await ctx.db.query("gallery_images").order("desc").collect();
  },
});
