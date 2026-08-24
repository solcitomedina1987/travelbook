"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Plane,
  Building2,
  Sparkles,
  Palmtree,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  ListOrdered,
  LayoutGrid,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import {
  buildTripWindowGrid,
  calendarDays,
  typeStyles,
  type DestinationType,
  type CalendarDay,
} from "@/data/trip";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"] as const;

type FilterType = "all" | DestinationType;

const cityIcons: Record<DestinationType, typeof Plane> = {
  ny: Building2,
  orlando: Sparkles,
  miami: Palmtree,
  transit: Plane,
};

const filterTabs: { id: FilterType; label: string; count: number }[] = [
  { id: "all", label: "Todo el viaje", count: 23 },
  { id: "ny", label: "Nueva York", count: 5 },
  { id: "orlando", label: "Orlando (Disney & Universal)", count: 10 },
  { id: "miami", label: "Miami", count: 3 },
  { id: "transit", label: "Viajes & Traslados", count: 5 },
];

export function CalendarGrid() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  // Default to "auto" (grid on md+, list on mobile) or explicit user preference
  const [manualViewMode, setManualViewMode] = useState<"grid" | "timeline" | null>(null);

  const cells = useMemo(() => buildTripWindowGrid(), []);

  // Selected day for modal
  const selectedDay = useMemo(() => {
    if (!selectedDate) return null;
    return calendarDays.find((d) => d.date === selectedDate) || null;
  }, [selectedDate]);

  // Navigate next/prev in modal
  const currentTripDayIndex = selectedDay ? selectedDay.tripDayIndex : -1;
  const prevDay = useMemo(() => {
    if (currentTripDayIndex <= 1) return null;
    return calendarDays.find((d) => d.tripDayIndex === currentTripDayIndex - 1) || null;
  }, [currentTripDayIndex]);

  const nextDay = useMemo(() => {
    if (currentTripDayIndex >= 23 || currentTripDayIndex === -1) return null;
    return calendarDays.find((d) => d.tripDayIndex === currentTripDayIndex + 1) || null;
  }, [currentTripDayIndex]);

  // Filtered timeline days
  const filteredDays = useMemo(() => {
    if (activeFilter === "all") return calendarDays;
    return calendarDays.filter((d) => d.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="calendario" className="relative overflow-hidden bg-sand/60 py-12 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy backdrop-blur-sm shadow-sm">
              <CalendarDays className="h-4 w-4 text-gold" />
              13 de Abril al 05 de Mayo de 2027 · 23 Días
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Calendario & Hoja de Ruta
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base lg:text-lg">
              Itinerario estructurado semana a semana. Toca cualquier fecha para ver el detalle de actividades, traslados y accesos directos.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-navy/15 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setManualViewMode("grid")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition min-h-[38px]",
                  (manualViewMode === "grid" || manualViewMode === null)
                    ? "bg-navy text-offwhite shadow-sm"
                    : "text-navy/70 hover:text-navy",
                )}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">Cuadrícula</span> (4 Semanas)
              </button>
              <button
                type="button"
                onClick={() => setManualViewMode("timeline")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition min-h-[38px]",
                  manualViewMode === "timeline"
                    ? "bg-navy text-offwhite shadow-sm"
                    : "text-navy/70 hover:text-navy",
                )}
              >
                <ListOrdered className="h-4 w-4" />
                <span>Lista Día por Día</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills (Horizontal scrollable on mobile) */}
        <div className="mt-6 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition shadow-sm min-h-[38px]",
                    isActive
                      ? "bg-navy text-offwhite ring-2 ring-gold/40"
                      : "bg-white border border-navy/15 text-navy/80 hover:bg-white/90 hover:border-navy/30",
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 text-[10px]",
                      isActive ? "bg-gold text-navy font-bold" : "bg-sand text-navy/70",
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< 768px): Vertical Card List / Accordion (Shown on mobile when manualViewMode is not forced to grid) */}
        {/* ========================================================================= */}
        <div className={cn(
          "mt-6 space-y-3.5",
          manualViewMode === "grid" ? "hidden" : "block md:hidden",
        )}>
          {filteredDays.map((day) => {
            const style = typeStyles[day.type];
            const Icon = cityIcons[day.type];
            return (
              <div
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                role="button"
                tabIndex={0}
                className={cn(
                  "group relative flex flex-col gap-3 rounded-2xl border p-4 shadow-sm transition-all active:scale-[0.99] bg-white cursor-pointer",
                  "hover:border-navy/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold",
                  style.border,
                )}
              >
                {/* Header Row: Disambiguated [Día X] and Date without overlap */}
                <div className="flex items-center justify-between gap-2 border-b border-navy/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center rounded-lg bg-navy px-2.5 py-1 text-xs font-bold text-gold">
                      Día {day.tripDayIndex}
                    </span>
                    <span className="text-xs font-bold text-navy">
                      {day.dayName} {day.dayNumber} {day.monthLabel === "Abr" ? "Abril" : "Mayo"}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold shrink-0",
                      style.badge,
                    )}
                  >
                    <Icon className="h-3 w-3" />
                    {day.city}
                  </span>
                </div>

                {/* Body Content */}
                <div>
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-gold-dark transition leading-snug">
                    {day.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy/70 line-clamp-2">
                    {day.focus}
                  </p>
                </div>

                {/* Footer Tag & CTA */}
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-navy/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {day.label}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-navy group-hover:text-gold-dark text-xs">
                    <span>Ver detalle</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4-Week Grid or Grid Forced on Mobile */}
        {/* ========================================================================= */}
        <div className={cn(
          "mt-6 overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-xl",
          manualViewMode === "timeline" ? "hidden" : "hidden md:block",
          manualViewMode === "grid" && "block",
        )}>
          {/* Grid Top Banner */}
          <div className="flex flex-wrap items-center justify-between border-b border-navy/10 bg-navy px-5 py-4 text-offwhite sm:px-6">
            <div>
              <h3 className="font-display text-lg font-bold sm:text-xl">
                Abril – Mayo 2027
              </h3>
              <p className="text-xs text-offwhite/60">
                Semana 1 a 4 · San Luis, Nueva York, Orlando & Miami
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gold-soft font-medium">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span>Haz clic en cualquier día para abrir detalles</span>
            </div>
          </div>

          {/* Weekdays Bar */}
          <div className="grid grid-cols-7 border-b border-navy/10 bg-sand/40 text-center">
            {WEEKDAYS.map((d, i) => (
              <div
                key={d}
                className={cn(
                  "py-3 text-xs font-bold uppercase tracking-wider text-navy/70",
                  i >= 5 && "text-amber-800",
                )}
              >
                {d}
              </div>
            ))}
          </div>

          {/* 7-Column Grid Matrix (4 Rows x 7 Cols = 28 Cells) */}
          <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-navy/10 bg-navy/5">
            {cells.map((cell) => {
              const entry = cell.entry;
              const isTrip = cell.isTripDay && entry;
              const isDimmedByFilter =
                isTrip && activeFilter !== "all" && entry.type !== activeFilter;

              if (!isTrip) {
                return (
                  <div
                    key={cell.date}
                    className="relative flex flex-col justify-between min-h-[110px] md:min-h-[130px] lg:min-h-[140px] p-2.5 md:p-3 bg-slate-100/40 text-navy/30 select-none"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] font-bold uppercase text-navy/30">
                        {cell.dayShort}
                      </span>
                      <span className="text-xs font-bold text-navy/30">
                        {cell.dayNumber} {cell.monthLabel}
                      </span>
                    </div>
                    <div className="my-auto text-center">
                      <span className="text-[11px] font-medium italic text-navy/30">
                        {cell.dayNumber < 13 ? "Pre-viaje" : "Post-viaje"}
                      </span>
                    </div>
                    <div />
                  </div>
                );
              }

              const style = typeStyles[entry.type];
              const Icon = cityIcons[entry.type];
              const isSelected = selectedDate === entry.date;

              return (
                <button
                  key={entry.date}
                  type="button"
                  onClick={() => setSelectedDate(entry.date)}
                  className={cn(
                    "group relative flex flex-col justify-between min-h-[110px] md:min-h-[130px] lg:min-h-[140px] p-2.5 md:p-3 text-left transition-all",
                    "hover:z-20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold",
                    style.soft,
                    isSelected && "ring-2 ring-gold z-30 shadow-md",
                    isDimmedByFilter && "opacity-25 grayscale-[60%]",
                  )}
                >
                  {/* Top Row: Disambiguated [Día X] and Date with flex justify-between */}
                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="flex items-center rounded-md bg-navy px-1.5 py-0.5 text-[10px] md:text-[11px] font-bold text-gold shrink-0">
                      Día {entry.tripDayIndex}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-navy shrink-0">
                      {entry.dayNumber}/{entry.monthLabel}
                    </span>
                  </div>

                  {/* Middle Row: Destination City with Icon */}
                  <div className="my-1.5 flex items-center gap-1.5 overflow-hidden">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-navy/70" />
                    <p className="truncate text-xs font-bold text-navy">
                      {entry.city}
                    </p>
                  </div>

                  {/* Bottom Row: Activity Label Badge */}
                  <div className="w-full">
                    <span
                      className={cn(
                        "block w-full truncate rounded-lg px-2 py-1 text-[10px] md:text-xs font-semibold transition group-hover:brightness-95 shadow-sm",
                        style.badge,
                      )}
                      title={entry.label}
                    >
                      {entry.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE VIEW (When user explicitly chooses Timeline mode) */}
        {/* ========================================================================= */}
        {manualViewMode === "timeline" && (
          <div className="mt-6 space-y-4">
            {filteredDays.map((day) => {
              const style = typeStyles[day.type];
              const Icon = cityIcons[day.type];
              return (
                <div
                  key={day.date}
                  onClick={() => setSelectedDate(day.date)}
                  role="button"
                  tabIndex={0}
                  className={cn(
                    "flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border p-5 shadow-sm transition hover:shadow-md bg-white cursor-pointer",
                    style.border,
                  )}
                >
                  <div className="flex items-start gap-4">
                    {/* Day Square Badge */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-navy text-offwhite shadow-sm">
                      <span className="text-[10px] font-bold uppercase text-gold">
                        Día {day.tripDayIndex}
                      </span>
                      <span className="text-base font-bold leading-tight">
                        {day.dayNumber}
                      </span>
                      <span className="text-[9px] uppercase text-offwhite/70">
                        {day.monthLabel}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                            style.badge,
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {day.city}
                        </span>
                        <span className="text-xs text-navy/60 font-medium">
                          {day.dayName} {day.date}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-base font-bold text-navy sm:text-lg">
                        {day.title}
                      </h3>
                      <p className="mt-1 text-xs text-navy/70 sm:text-sm max-w-2xl leading-relaxed">
                        {day.focus}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/15 bg-sand/60 px-4 py-2 text-xs font-bold text-navy transition group-hover:bg-navy group-hover:text-offwhite shrink-0">
                    <span>Ver Detalles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SUMMARY STATS BAR */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-sky-600 font-display sm:text-3xl">5 Días</p>
            <p className="text-xs font-semibold text-navy/70 mt-0.5">Nueva York (15–19/04)</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-amber-600 font-display sm:text-3xl">10 Días</p>
            <p className="text-xs font-semibold text-navy/70 mt-0.5">Disney & Universal (21–29/04)</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-teal font-display sm:text-3xl">3 Días</p>
            <p className="text-xs font-semibold text-navy/70 mt-0.5">Miami (30/04–02/05)</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-700 font-display sm:text-3xl">23 Días</p>
            <p className="text-xs font-semibold text-navy/70 mt-0.5">Total de Viaje (13/04–05/05)</p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE DAY DETAIL POPUP MODAL (Touch-friendly & Responsive) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedDay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDate(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-navy text-offwhite p-6 shadow-2xl sm:p-8 my-auto"
            >
              {/* Close Button (Min 44x44px touch target) */}
              <button
                type="button"
                onClick={() => setSelectedDate(null)}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-offwhite/80 transition hover:bg-white/20 hover:text-white"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 pr-12">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  Día {selectedDay.tripDayIndex} de 23
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    typeStyles[selectedDay.type].badge,
                  )}
                >
                  {selectedDay.city}
                </span>
                <span className="text-xs text-offwhite/60">
                  {selectedDay.dayName} {selectedDay.dayNumber} de {selectedDay.monthLabel === "Abr" ? "Abril" : "Mayo"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-xl font-bold text-offwhite sm:text-3xl leading-snug">
                {selectedDay.title}
              </h3>

              {/* Focus / Plan */}
              <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-soft mb-1.5 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gold" />
                  Plan & Enfoque del Día:
                </p>
                <p className="text-sm leading-relaxed text-offwhite/90">
                  {selectedDay.focus}
                </p>
              </div>

              {/* Highlights */}
              {selectedDay.highlights && selectedDay.highlights.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-offwhite/60 mb-2">
                    Atracciones & Puntos Destacados:
                  </p>
                  <ul className="space-y-2">
                    {selectedDay.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-offwhite/85">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Route Action Link */}
              {selectedDay.link && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <Link
                    href={selectedDay.link}
                    onClick={() => setSelectedDate(null)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-navy transition hover:bg-gold-soft shadow-lg min-h-[44px]"
                  >
                    <span>{selectedDay.linkLabel || "Ver más detalles"}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}

              {/* Prev / Next Day Navigator (Min 44x44px target) */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                {prevDay ? (
                  <button
                    type="button"
                    onClick={() => setSelectedDate(prevDay.date)}
                    className="inline-flex items-center gap-1.5 text-offwhite/70 hover:text-gold transition font-medium py-2 pr-3 min-h-[44px]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Día {prevDay.tripDayIndex}: {prevDay.dayNumber}/{prevDay.monthLabel}</span>
                  </button>
                ) : (
                  <div />
                )}

                {nextDay ? (
                  <button
                    type="button"
                    onClick={() => setSelectedDate(nextDay.date)}
                    className="inline-flex items-center gap-1.5 text-offwhite/70 hover:text-gold transition font-medium py-2 pl-3 min-h-[44px] ml-auto"
                  >
                    <span>Día {nextDay.tripDayIndex}: {nextDay.dayNumber}/{nextDay.monthLabel}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
