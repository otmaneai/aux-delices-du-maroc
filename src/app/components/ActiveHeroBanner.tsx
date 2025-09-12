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

  const bg = hero?.imageUrl;
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden">
        {bg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={bg} alt={hero.title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-28 bg-primary" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white drop-shadow">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              {hero.title}
            </h2>
            {hero.subtitle && (
              <p className="text-sm md:text-base text-gray-200 mt-1">
                {hero.subtitle}
              </p>
            )}
            {hero.body && (
              <p className="text-xs md:text-sm text-gray-100 mt-2 line-clamp-2">
                {hero.body}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
