"use client";

import { useMemo } from "react";
import {
  Trophy,
  Sparkles,
  Clock,
  Timer,
  Zap,
  MapPin,
  Route,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Star,
} from "lucide-react";
import { type ParkTopData, type TopAttraction } from "@/data/parkTopData";
import { ParkRouteMap } from "@/components/parks/ParkRouteMap";
import { AttractionImage } from "@/components/parks/AttractionImage";
import { cn } from "@/lib/utils";

interface TopAttractionsSectionProps {
  data: ParkTopData;
}

function thrillBadge(level: TopAttraction["thrillLevel"]) {
  switch (level) {
    case "Extremo":
      return "bg-rose-500/15 text-rose-700 border-rose-400/30";
    case "Moderado":
      return "bg-amber-500/15 text-amber-800 border-amber-400/30";
    case "Familiar":
      return "bg-sky-500/15 text-sky-800 border-sky-400/30";
    case "Tranquilo":
      return "bg-emerald-500/15 text-emerald-800 border-emerald-400/30";
    default:
      return "bg-navy/10 text-navy border-navy/20";
  }
}

export function TopAttractionsSection({ data }: TopAttractionsSectionProps) {
  // Sorted by popularity / expert rank 1 to 10
  const rankedAttractions = useMemo(() => {
    return [...data.topAttractions].sort((a, b) => a.rank - b.rank);
  }, [data.topAttractions]);

  return (
    <section id="top-atracciones" className="relative py-12 sm:py-16 bg-sand/30 border-b border-navy/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-950 backdrop-blur-sm shadow-sm">
            <Trophy className="h-4 w-4 text-gold" />
            Top 10 & Recorrido Estratégico
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Top Atracciones & Mapa de Recorrido
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy/75 sm:text-lg">
            Las 10 experiencias imprescindibles de {data.parkName} según popularidad, valoraciones y tiempos de espera, acompañadas por la secuencia óptima para recorrer el parque minimizando filas.
          </p>
        </div>

        {/* 1. Interactive Route Map */}
        <div className="mt-8">
          <ParkRouteMap data={data} />
        </div>

        {/* 2. Top 10 Ranked List */}
        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-navy/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">
                Ranking Oficial
              </p>
              <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Top 10 Atracciones de {data.parkName}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy/60">
              Ordenadas por relevancia, adrenalina y calificación de visitantes
            </p>
          </div>

          {/* Grid of Top 10 Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rankedAttractions.map((attraction) => {
              return (
                <div
                  key={attraction.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Card Media Header */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy">
                      <AttractionImage
                        src={attraction.imageUrl}
                        alt={attraction.name}
                        fallbackSrc={attraction.fallbackUrl}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                      {/* Rank Crown Pill */}
                      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-navy/90 border border-gold/40 px-3 py-1 text-xs font-bold text-gold backdrop-blur-md shadow-lg">
                        <Trophy className="h-3.5 w-3.5 text-gold" />
                        <span>TOP #{attraction.rank}</span>
                      </div>

                      {/* Step in Optimal Route Pill */}
                      <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy shadow-lg">
                        Paso {attraction.routeStep} de Ruta
                      </div>

                      {/* Land & Category on bottom of photo */}
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 font-semibold text-white/90">
                          <MapPin className="h-3.5 w-3.5 text-gold" />
                          {attraction.land}
                        </span>
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 text-xs font-bold backdrop-blur-md",
                            thrillBadge(attraction.thrillLevel),
                          )}
                        >
                          {attraction.category} · {attraction.thrillLevel}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6">
                      <h4 className="font-display text-xl font-bold text-navy group-hover:text-gold-dark transition leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy/75">
                        {attraction.description}
                      </p>

                      {/* Metrics: Wait & Duration */}
                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                        <span className="inline-flex items-center gap-1.5 rounded-xl bg-sand/60 border border-navy/10 px-3 py-1.5 text-navy">
                          <Clock className="h-3.5 w-3.5 text-gold" />
                          Espera promedio: <strong>{attraction.waitTimeAvg}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-xl bg-sand/60 border border-navy/10 px-3 py-1.5 text-navy">
                          <Timer className="h-3.5 w-3.5 text-teal" />
                          Duración: <strong>{attraction.duration}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-xl bg-navy/5 border border-navy/10 px-3 py-1.5 text-navy">
                          <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                          {attraction.fastPass}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strategy Tip Footer */}
                  <div className="border-t border-navy/10 bg-sand/40 p-4 sm:px-6">
                    <div className="flex items-start gap-2 text-xs">
                      <Sparkles className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                      <p className="text-navy/85 leading-relaxed">
                        <strong className="text-navy">Consejo Rope Drop:</strong>{" "}
                        {attraction.strategyTip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
