"use client";

import React from "react";
import { convexReact, api } from "@/lib/convex";

export default function ActiveHeroBanner() {
  const fn = api?.hero?.getActiveHero;
  const hero =
    convexReact.useQuery && fn
      ? (convexReact.useQuery(fn, {}) as
          | {
              title: string;
              subtitle?: string;
              body?: string;
              imageUrl?: string;
            }
          | null
          | undefined)
      : undefined;

  if (typeof hero === "undefined") return null;
  if (!hero) return null;

  return (
    <section className="w-full pt-6">
      <div className="section-shell">
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(255,255,255,0.85)] px-5 py-4 text-center text-sm text-[var(--muted)] shadow-[0_20px_50px_-40px_rgba(24,16,12,0.7)] backdrop-blur">
          <h2 className="text-lg md:text-xl font-serif text-[var(--primary)]">
            {hero.title}
          </h2>
          {hero.subtitle ? <p className="mt-1">{hero.subtitle}</p> : null}
          {hero.body ? (
            <p className="mt-2 text-xs md:text-sm text-[var(--muted)]/90">
              {hero.body}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
