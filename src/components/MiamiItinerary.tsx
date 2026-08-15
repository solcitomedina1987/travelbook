"use client";

import { motion } from "framer-motion";
import { MapPinned, Palmtree } from "lucide-react";
import { miamiItinerary } from "@/data/trip";

export function MiamiItinerary() {
  return (
    <section id="itinerario-miami" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Miami
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Itinerario Miami
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Del 30/04 al 02/05 — playa, street art y naturaleza antes del
              regreso.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-teal px-3 py-1.5 text-xs font-semibold text-white sm:self-auto">
            <Palmtree className="h-3.5 w-3.5" />
            30 Abr – 02 May
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {miamiItinerary.map((day, index) => (
            <motion.article
              key={day.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col border-t-2 border-teal bg-white p-6 shadow-sm shadow-navy/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                {day.dayLabel}
              </p>
              <p className="mt-1 text-sm text-slate">{day.dayName}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                {day.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{day.focus}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {day.stops.map((stop) => (
                  <li
                    key={stop}
                    className="flex items-start gap-2 text-sm text-navy-soft"
                  >
                    <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {stop}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
