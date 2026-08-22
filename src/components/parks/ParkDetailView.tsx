"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Clock,
  Filter,
  MapPin,
  Timer,
  Zap,
} from "lucide-react";
import {
  getStrategyBadge,
  type Attraction,
  type Park,
} from "@/data/parksData";
import { AttractionImage } from "@/components/parks/AttractionImage";
import { cn } from "@/lib/utils";

function passBadgeClass(pass: Attraction["fastPassType"]) {
  switch (pass) {
    case "Lightning Lane Multi Pass":
      return "bg-emerald-600 text-white";
    case "Lightning Lane Single Pass":
      return "bg-sky-600 text-white";
    case "Express Pass":
      return "bg-amber-400 text-navy";
    default:
      return "bg-slate-500 text-white";
  }
}

function typeAccent(type: Attraction["type"]) {
  switch (type) {
    case "Coaster":
      return "text-rose-600 bg-rose-500/10";
    case "Dark Ride":
      return "text-violet-700 bg-violet-500/10";
    case "Simulador":
      return "text-sky-700 bg-sky-500/10";
    case "Acuática":
      return "text-cyan-700 bg-cyan-500/10";
    case "Show":
      return "text-amber-700 bg-amber-500/10";
    case "Interactivo":
      return "text-teal bg-teal/10";
    case "Carrusel":
      return "text-pink-600 bg-pink-500/10";
    case "Paseo":
      return "text-indigo-600 bg-indigo-500/10";
    default:
      return "text-slate-600 bg-slate-500/10";
  }
}

export function ParkDetailView({ park }: { park: Park }) {
  const lands = useMemo(
    () => ["Todas", ...Array.from(new Set(park.attractions.map((a) => a.land)))],
    [park.attractions],
  );
  const passTypes = useMemo(
    () =>
      [
        "Todos",
        ...Array.from(new Set(park.attractions.map((a) => a.fastPassType))),
      ] as const,
    [park.attractions],
  );

  const [land, setLand] = useState<string>("Todas");
  const [pass, setPass] = useState<string>("Todos");

  const sorted = useMemo(
    () => [...park.attractions].sort((a, b) => a.order - b.order),
    [park.attractions],
  );

  const filtered = useMemo(() => {
    return sorted.filter((a) => {
      const landOk = land === "Todas" || a.land === land;
      const passOk = pass === "Todos" || a.fastPassType === pass;
      return landOk && passOk;
    });
  }, [sorted, land, pass]);

  const llCount = park.attractions.filter((a) =>
    a.fastPassType.includes("Lightning") || a.fastPassType === "Express Pass",
  ).length;

  return (
    <div className="min-h-full bg-offwhite">
      <section className="relative min-h-[52vh] overflow-hidden bg-navy sm:min-h-[58vh]">
        <AttractionImage
          src={park.heroImage}
          alt={park.name}
          priority
          sizes="100vw"
          className="rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/35" />

        <div className="relative z-10 mx-auto flex h-full min-h-[52vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[58vh] sm:px-6 sm:pb-14 lg:px-8">
          <Link
            href="/#disney"
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-offwhite backdrop-blur-sm transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portal
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {park.company}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-offwhite sm:text-5xl md:text-6xl">
            {park.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-offwhite/75 sm:text-lg">
            {park.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-offwhite">
              {park.attractions.length} atracciones / shows
            </span>
            <span className="rounded-full bg-teal/30 px-3 py-1.5 text-xs font-semibold text-offwhite">
              {llCount} con pase rápido
            </span>
            <span className="rounded-full bg-gold/90 px-3 py-1.5 text-xs font-semibold text-navy">
              Orden Rope Drop → Noche
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Filter className="h-4 w-4 text-teal" />
            Filtros
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                Área del parque
              </p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {lands.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLand(l)}
                    className={cn(
                      "shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm",
                      land === l
                        ? "bg-navy text-offwhite"
                        : "bg-navy/5 text-navy hover:bg-navy/10",
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                Pase rápido
              </p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {passTypes.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPass(p)}
                    className={cn(
                      "shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm",
                      pass === p
                        ? "bg-gold text-navy"
                        : "bg-navy/5 text-navy hover:bg-navy/10",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-atmosphere grain relative py-10 sm:py-14">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                Lista estratégica
              </h2>
              <p className="mt-1 text-sm text-slate">
                {filtered.length} de {park.attractions.length} ítems · orden de
                recorrido recomendado
              </p>
            </div>
          </div>

          <ol className="mt-8 space-y-4">
            {filtered.map((attraction) => {
              const strategy = getStrategyBadge(
                attraction.order,
                park.attractions.length,
              );
              return (
                <li
                  key={attraction.id}
                  className="overflow-hidden rounded-2xl border border-navy/10 bg-white/90 shadow-sm shadow-navy/5"
                >
                  <article className="grid gap-0 sm:grid-cols-[auto_1fr]">
                    <div className="flex items-center justify-center bg-navy px-5 py-6 sm:w-24 sm:flex-col sm:px-3">
                      <span className="font-display text-3xl font-semibold text-gold-soft sm:text-2xl">
                        #{String(attraction.order).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="grid gap-4 p-4 sm:grid-cols-[150px_1fr] sm:gap-5 sm:p-5 md:grid-cols-[180px_1fr]">
                      <div className="relative mx-auto aspect-[16/10] w-full max-w-[280px] overflow-hidden rounded-xl shadow-sm sm:mx-0 sm:h-32 sm:w-[150px] sm:max-w-none md:w-[180px]">
                        <AttractionImage
                          src={attraction.imageUrl}
                          alt={attraction.name}
                          sizes="(max-width: 640px) 280px, 180px"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy/70">
                            {strategy}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-1 text-[10px] font-semibold",
                              passBadgeClass(attraction.fastPassType),
                            )}
                          >
                            {attraction.fastPassType}
                          </span>
                        </div>

                        <h3 className="mt-2 font-display text-xl font-semibold text-navy sm:text-2xl">
                          {attraction.name}
                        </h3>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate">
                          <MapPin className="h-3.5 w-3.5 text-teal" />
                          {attraction.land}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-navy/75">
                          {attraction.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-2.5 py-1.5 text-xs font-semibold text-navy">
                            <Clock className="h-3.5 w-3.5 text-gold" />
                            Espera {attraction.waitTimeMin} min
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-2.5 py-1.5 text-xs font-semibold text-navy">
                            <Timer className="h-3.5 w-3.5 text-teal" />
                            Duración {attraction.durationMin} min
                          </span>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold",
                              typeAccent(attraction.type),
                            )}
                          >
                            <Zap className="h-3.5 w-3.5" />
                            {attraction.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>

          {filtered.length === 0 && (
            <p className="mt-10 rounded-xl border border-dashed border-navy/20 bg-white/60 p-8 text-center text-sm text-slate">
              No hay atracciones con esos filtros. Probá otra combinación.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
