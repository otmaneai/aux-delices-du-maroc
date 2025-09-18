/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as contact from "../contact.js";
import type * as cookieConsents from "../cookieConsents.js";
import type * as gallery from "../gallery.js";
import type * as hero from "../hero.js";
import type * as menu from "../menu.js";
import type * as menuSections from "../menuSections.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  contact: typeof contact;
  cookieConsents: typeof cookieConsents;
  gallery: typeof gallery;
  hero: typeof hero;
  menu: typeof menu;
  menuSections: typeof menuSections;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
