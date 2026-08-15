"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Castle, Clapperboard, FerrisWheel, Trees } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getParksByCompany, type Park } from "@/data/parksData";

const disneyIcons: Record<string, LucideIcon> = {
  "magic-kingdom": Castle,
  epcot: FerrisWheel,
  "hollywood-studios": Clapperboard,
  "animal-kingdom": Trees,
};

const universalIcons: Record<string, LucideIcon> = {
  "universal-studios": Clapperboard,
  "islands-of-adventure": FerrisWheel,
  "epic-universe": Castle,
};

const visitDates: Record<string, string> = {
  "magic-kingdom": "21 de Abril",
  epcot: "22 de Abril",
  "hollywood-studios": "23 de Abril",
  "animal-kingdom": "24 de Abril",
  "universal-studios": "26 de Abril",
  "islands-of-adventure": "27 de Abril",
  "epic-universe": "28 de Abril",
};

function ParkCards({
  parks,
  icons,
  accent,
  dark,
}: {
  parks: Park[];
  icons: Record<string, LucideIcon>;
  accent: "gold" | "teal";
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-8 grid gap-4 sm:grid-cols-2 ${
        dark ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {parks.map((park, i) => {
        const Icon = icons[park.slug] ?? Castle;
        return (
          <motion.div
            key={park.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              href={`/parques/${park.slug}`}
              className={`group flex h-full flex-col border-t-2 p-5 transition ${
                dark
                  ? "border-teal bg-navy-soft/50 hover:bg-navy-soft"
                  : "border-navy/10 bg-white/70 backdrop-blur-sm hover:border-navy/30 hover:bg-white"
              }`}
              style={{
                borderTopColor: accent === "gold" ? "#D97706" : "#0D9488",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    dark
                      ? "bg-teal/20 text-teal-soft"
                      : accent === "gold"
                        ? "bg-amber-500/15 text-amber-700"
                        : "bg-teal/15 text-teal"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    dark
                      ? "bg-white/5 text-offwhite/50"
                      : "bg-navy/5 text-slate"
                  }`}
                >
                  {park.attractions.length} atracciones
                </span>
              </div>
              <h3
                className={`mt-4 font-display text-lg font-semibold ${
                  dark ? "text-offwhite" : "text-navy"
                }`}
              >
                {park.name}
              </h3>
              <p
                className={`mt-1 text-sm font-semibold ${
                  dark ? "text-gold-soft" : "text-gold"
                }`}
              >
                {visitDates[park.slug]}
              </p>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed ${
                  dark ? "text-offwhite/65" : "text-slate"
                }`}
              >
                {park.description}
              </p>
              <span
                className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition ${
                  dark
                    ? "text-teal-soft group-hover:text-gold-soft"
                    : "text-teal group-hover:text-navy"
                }`}
              >
                Ver lista completa de atracciones
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ParksSection() {
  const disney = getParksByCompany("Disney");
  const universal = getParksByCompany("Universal");

  return (
    <>
      <section id="disney" className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Walt Disney World
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Parques Disney
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Cuatro días de parque (21–24 Abr). Entrá a cada parque para ver el
              orden estratégico de atracciones y shows.
            </p>
          </div>
          <ParkCards parks={disney} icons={disneyIcons} accent="gold" />
        </div>
      </section>

      <section id="universal" className="bg-navy py-20 text-offwhite sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-soft">
              Universal Orlando
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Parques Universal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-offwhite/70 sm:text-lg">
              Tres parques (26–28 Abr). Listas con Express Pass, Rope Drop y
              cierre nocturno.
            </p>
          </div>
          <ParkCards
            parks={universal}
            icons={universalIcons}
            accent="teal"
            dark
          />
        </div>
      </section>
    </>
  );
}
