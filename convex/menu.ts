import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
  handler: async (ctx, args) => {
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
  handler: async (ctx) => {
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
  handler: async (ctx, args) => {
    return await ctx.db.query("menu_items").collect();
  },
});
