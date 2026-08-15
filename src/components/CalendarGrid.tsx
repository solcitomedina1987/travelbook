"use client";

import { motion } from "framer-motion";
import {
  buildMultiMonthGrid,
  calendarDays,
  typeStyles,
  type DestinationType,
} from "@/data/trip";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"] as const;

const legend: { type: DestinationType; label: string }[] = [
  { type: "ny", label: "Nueva York" },
  { type: "orlando", label: "Orlando / Parques" },
  { type: "miami", label: "Miami" },
  { type: "transit", label: "Viaje" },
];

const cells = buildMultiMonthGrid(2027, 4, 5);

export function CalendarGrid() {
  return (
    <section id="calendario" className="bg-atmosphere grain relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Hoja de ruta
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Calendario del viaje
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Abril y Mayo 2027 en una sola vista. Cada día con nombre, fecha,
            ciudad y etiqueta por tipo de destino.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {legend.map((item) => (
            <span
              key={item.type}
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold",
                typeStyles[item.type].badge,
              )}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-navy/10 bg-white/80 shadow-sm backdrop-blur-sm">
          <div className="border-b border-navy/10 bg-navy px-4 py-4 sm:px-5">
            <h3 className="font-display text-xl font-semibold text-offwhite sm:text-2xl">
              Abril – Mayo 2027
            </h3>
          </div>

          <div className="grid grid-cols-7 border-b border-navy/10 bg-offwhite">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="px-1 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wide text-slate sm:text-xs"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 auto-rows-fr">
            {cells.map((cell, idx) => {
              if (cell.day === null) {
                return (
                  <div
                    key={`empty-${idx}`}
                    className="min-h-[72px] border-b border-r border-navy/5 bg-slate-50/50 sm:min-h-[100px]"
                  />
                );
              }

              const entry = cell.entry;
              if (!entry) {
                return (
                  <div
                    key={`${cell.month}-${cell.day}`}
                    className="min-h-[72px] border-b border-r border-navy/5 p-2 sm:min-h-[100px] sm:p-2.5"
                  >
                    {cell.isMonthStart ? (
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="text-[10px] font-semibold uppercase text-navy/50 sm:text-xs">
                          {cell.monthLabel}
                        </span>
                        <span className="text-xs font-medium text-slate/40">
                          {cell.day}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-medium text-slate/40">
                        {cell.day}
                      </span>
                    )}
                  </div>
                );
              }

              const style = typeStyles[entry.type];

              return (
                <motion.div
                  key={entry.date}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "relative flex min-h-[72px] flex-col gap-1 border-b border-r border-navy/5 p-1.5 sm:min-h-[100px] sm:p-2.5",
                    style.soft,
                  )}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[10px] font-semibold uppercase text-navy/60 sm:text-xs">
                      {entry.dayShort}
                    </span>
                    <span className="text-xs font-bold text-navy sm:text-sm">
                      {entry.dayNumber}/{entry.monthLabel}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-[10px] font-semibold leading-snug text-navy sm:text-xs">
                    {entry.city}
                  </p>
                  <span
                    className={cn(
                      "mt-auto inline-flex max-w-full truncate rounded-full px-1.5 py-0.5 text-[9px] font-semibold sm:text-[10px]",
                      style.badge,
                    )}
                    title={entry.label}
                  >
                    {entry.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile-friendly list fallback for scanning */}
        <div className="mt-12 md:hidden">
          <h3 className="font-display text-xl font-semibold text-navy">
            Lista día a día
          </h3>
          <ul className="mt-4 space-y-2">
            {calendarDays.map((e) => (
              <li
                key={e.date}
                className={cn(
                  "rounded-xl border p-3",
                  typeStyles[e.type].border,
                  typeStyles[e.type].soft,
                )}
              >
                <p className="text-sm font-bold text-navy">
                  {e.dayName}, {e.dayNumber}/{String(e.month).padStart(2, "0")}
                </p>
                <p className="mt-0.5 text-xs font-medium text-navy/70">
                  {e.city}
                </p>
                <p className="mt-1 text-xs font-semibold">{e.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
