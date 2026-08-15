"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPinned } from "lucide-react";
import { nycItinerary } from "@/data/trip";

export function NycItinerary() {
  return (
    <section id="itinerario-ny" className="bg-atmosphere grain relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Nueva York
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Itinerario Nueva York
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Del 15/04 al 19/04 — circuitos caminables por cercanía, con mapa
              interactivo y horarios sugeridos.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white">
              <Building2 className="h-3.5 w-3.5" />
              15 – 19 Abril
            </span>
            <Link
              href="/itinerario-ny"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition hover:text-navy"
            >
              Ver mapa e itinerario completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {nycItinerary.map((day, index) => (
            <motion.article
              key={day.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="grid gap-4 border-l-4 border-sky-600 bg-white/75 p-5 backdrop-blur-sm sm:grid-cols-[140px_1fr] sm:gap-8 sm:p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {day.dayLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-slate">{day.dayName}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-navy">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                  {day.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">
                  {day.focus}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {day.stops.map((stop) => (
                    <li
                      key={stop}
                      className="flex items-start gap-2 text-sm text-navy-soft"
                    >
                      <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/itinerario-ny"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Abrir itinerario NY con mapa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
