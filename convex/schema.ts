import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Convex schema for contact and reservation messages
export default defineSchema({
  contact_messages: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
    ip: v.optional(v.string()),
    userId: v.optional(v.string()), // Clerk user id if signed in
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_email", ["email"]),
  menu_items: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.string()),
    category: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    order: v.optional(v.number()),
    createdAt: v.number(),
    userId: v.optional(v.string()),
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_category", ["category"]),
  gallery_images: defineTable({
    url: v.string(),
    caption: v.optional(v.string()),
    createdAt: v.number(),
    userId: v.optional(v.string()),
  }).index("by_createdAt", ["createdAt"]),
  hero_events: defineTable({
    title: v.string(),
    subtitle: v.optional(v.string()),
    body: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    active: v.boolean(),
    createdAt: v.number(),
    userId: v.optional(v.string()),
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_active", ["active"]),
  menu_sections: defineTable({
    name: v.string(),
    imageUrl: v.optional(v.string()),
    order: v.optional(v.number()),
    description: v.optional(v.string()),
    createdAt: v.number(),
    userId: v.optional(v.string()),
  })
    .index("by_title", ["name"])
    .index("by_order", ["order"]),
});
