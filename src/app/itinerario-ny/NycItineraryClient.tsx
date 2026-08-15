"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Clock3,
  Footprints,
  Lightbulb,
  Map as MapIcon,
  Route,
  Users,
} from "lucide-react";
import {
  getAllNycStops,
  getNycFreeTours,
  nycDayColors,
  nycDays,
} from "@/data/nyItineraryData";
import { cn } from "@/lib/utils";

const NYMap = dynamic(() => import("@/components/NYMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-2xl border border-navy/10 bg-navy/5 text-sm text-slate">
      Cargando mapa…
    </div>
  ),
});

type TabId = (typeof nycDays)[number]["id"] | "map-all";

export function NycItineraryPage() {
  const [tab, setTab] = useState<TabId>("day-1");
  const freeTours = useMemo(() => getNycFreeTours(), []);

  const activeDay = useMemo(
    () => nycDays.find((d) => d.id === tab) ?? null,
    [tab],
  );

  const mapStops = useMemo(() => {
    if (tab === "map-all") return getAllNycStops();
    return activeDay?.stops ?? [];
  }, [tab, activeDay]);

  const mapTitle =
    tab === "map-all"
      ? "Mapa general · 5 días en Nueva York"
      : activeDay
        ? `${activeDay.tabLabel} · ${activeDay.title}`
        : undefined;

  return (
    <div className="min-h-full bg-offwhite">
      <section className="relative overflow-hidden bg-navy pt-24 pb-14 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.28),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,119,6,0.18),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#itinerario-ny"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-offwhite backdrop-blur-sm transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portal
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Nueva York · 15–19 Abr 2027
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-offwhite sm:text-5xl md:text-6xl">
            Itinerario Nueva York 2027
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Diseñado para caminar y conectar atracciones por cercanía — Día 1
            desde las 14:30, Free Walking Tours y un día completo en Brooklyn.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-offwhite">
              <Footprints className="h-3.5 w-3.5 text-teal-soft" />
              Prioridad a pie
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-offwhite">
              <Users className="h-3.5 w-3.5 text-gold-soft" />
              Free Walking Tours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-offwhite">
              <Route className="h-3.5 w-3.5 text-teal-soft" />
              5 días geográficos
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Recomendados
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Free Walking Tours
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate">
                Tours a tip (reservá cupo online). Ideales para contexto local
                antes de recorrer cada zona a pie.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {freeTours.map((item) => (
              <button
                key={item.dayId}
                type="button"
                onClick={() => setTab(item.dayId as TabId)}
                className="border-t-2 bg-offwhite/80 p-4 text-left transition hover:bg-offwhite"
                style={{ borderTopColor: item.color }}
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <Users className="h-3 w-3" />
                  Free Tour
                </span>
                <p className="mt-3 text-xs font-semibold" style={{ color: item.color }}>
                  {item.tabLabel}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-navy">
                  {item.freeTour.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  {item.freeTour.meetingArea} · {item.freeTour.duration}
                </p>
                <p className="mt-1 text-[11px] text-navy/45">
                  {item.freeTour.providerHint}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
          {nycDays.map((day) => (
            <button
              key={day.id}
              type="button"
              onClick={() => setTab(day.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition",
                tab === day.id
                  ? "text-white"
                  : "bg-navy/5 text-navy hover:bg-navy/10",
              )}
              style={
                tab === day.id
                  ? { backgroundColor: nycDayColors[day.id] }
                  : undefined
              }
            >
              {day.tabLabel}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setTab("map-all")}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition",
              tab === "map-all"
                ? "bg-navy text-white"
                : "bg-navy/5 text-navy hover:bg-navy/10",
            )}
          >
            <MapIcon className="h-4 w-4" />
            Mapa General
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {tab === "map-all" ? (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                Mapa general
              </h2>
              <p className="mt-2 text-sm text-slate sm:text-base">
                Todas las paradas de los 5 días, con un color de pin por día.
              </p>
            </div>
            <NYMap
              stops={mapStops}
              dayTitle={mapTitle}
              mapKey="map-all"
              colorByDay
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {nycDays.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setTab(day.id)}
                  className="border-t-2 bg-white p-4 text-left shadow-sm transition hover:bg-offwhite"
                  style={{ borderTopColor: nycDayColors[day.id] }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: nycDayColors[day.id] }}
                  >
                    {day.tabLabel}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-navy">
                    {day.title}
                  </p>
                  <p className="mt-1 text-xs text-slate">
                    {day.stops.length} paradas
                    {day.freeTour ? " · Free Tour" : ""}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : activeDay ? (
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(280px,380px)] lg:items-start">
            <div>
              <div className="max-w-2xl">
                <p
                  className="text-sm font-semibold"
                  style={{ color: nycDayColors[activeDay.id] }}
                >
                  {activeDay.dayName} · {activeDay.dateLabel}
                  {activeDay.startHint ? ` · ${activeDay.startHint}` : ""}
                </p>
                <h2 className="mt-1 font-display text-3xl font-semibold text-navy sm:text-4xl">
                  {activeDay.title}
                </h2>
                <p className="mt-3 text-base text-slate">{activeDay.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                    {activeDay.distanceKm}
                  </span>
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                    {activeDay.theme}
                  </span>
                  {activeDay.freeTour && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: nycDayColors[activeDay.id] }}
                    >
                      <Users className="h-3.5 w-3.5" />
                      Free Tour: {activeDay.freeTour.name}
                    </span>
                  )}
                </div>
              </div>

              <ol className="mt-10 space-y-5">
                {activeDay.stops.map((stop) => (
                  <li
                    key={stop.id}
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-white shadow-sm",
                      stop.isFreeTour
                        ? "border-teal/30 ring-1 ring-teal/20"
                        : "border-navy/10",
                    )}
                  >
                    <article className="grid gap-0 sm:grid-cols-[140px_1fr]">
                      <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[140px]">
                        <Image
                          src={stop.imageUrl}
                          alt={stop.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 140px"
                        />
                        <span
                          className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                          style={{
                            backgroundColor: nycDayColors[activeDay.id],
                          }}
                        >
                          {stop.order}
                        </span>
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                            <Clock3 className="h-3.5 w-3.5" />
                            {stop.time}
                          </span>
                          {stop.isFreeTour && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                              <Users className="h-3 w-3" />
                              Free Walking Tour
                            </span>
                          )}
                          {stop.note && !stop.isFreeTour && (
                            <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal">
                              {stop.note}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1.5 font-display text-xl font-semibold text-navy">
                          {stop.name}
                        </h3>
                        {stop.walkFromPrev && (
                          <p className="mt-2 text-sm font-medium text-navy/80">
                            {stop.walkFromPrev}
                          </p>
                        )}
                        <p className="mt-3 flex gap-2 text-sm leading-relaxed text-slate">
                          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{stop.tip}</span>
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:sticky lg:top-24">
              <NYMap
                stops={mapStops}
                dayTitle={mapTitle}
                mapKey={activeDay.id}
              />
              <p className="mt-3 text-xs leading-relaxed text-slate">
                La línea une las paradas en orden sugerido. Tiempos a pie
                estimados; en Midtown/Downtown el ritmo real depende del
                tráfico peatonal.
              </p>
            </aside>
          </div>
        ) : null}
      </div>
    </div>
  );
}
