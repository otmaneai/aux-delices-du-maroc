// Safe wrappers to access Convex React hooks and generated API without
// hard-failing when Convex isn't configured.
// Tries local convex/_generated first, then package fallback.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let convexReact: any = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let api: any = {};

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  convexReact = require("convex/react");
} catch {}

try {
  // Prefer local generated API (works without package export)
  // Path from src/lib → project root/convex/_generated
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  api = require("../../convex/_generated/api").api;
} catch {
  try {
    // Fallback to package path if exported by the version in use
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    api = require("convex/_generated/api").api;
  } catch {}
}

export { convexReact, api };
