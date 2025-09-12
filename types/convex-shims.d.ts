// Temporary shims to avoid TypeScript errors until Convex is installed/initialized.
// Remove after installing `convex` and running `npx convex dev`.
declare module "convex/values" {
  export const v: any;
}
declare module "convex/server" {
  export const defineSchema: any;
  export const defineTable: any;
}
declare module "convex/_generated/server" {
  export const action: any;
  export const mutation: any;
  export const query: any;
}

