import { v } from "convex/values";
import { mutation, query, MutationCtx, QueryCtx } from "./_generated/server";

// Create a new menu item
export const createMenuItem = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.string()),
    category: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      name: string;
      description?: string;
      price?: string;
      category?: string;
      imageUrl?: string;
      order?: number;
    }
  ) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const menuItem = await ctx.db.insert("menu_items", {
      ...args,
      createdAt: Date.now(),
      userId: identity.subject,
    });
    return menuItem;
  },
});

// Delete all menu items
export const deleteAllMenuItems = mutation({
  handler: async (ctx: MutationCtx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const items = await ctx.db.query("menu_items").collect();
    for (const item of items) {
      await ctx.db.delete(item._id);
    }
  },
});

// List all menu items
export const listMenuItems = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    return await ctx.db.query("menu_items").collect();
  },
});
