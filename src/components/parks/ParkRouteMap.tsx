"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Timer,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  Route,
  Award,
  Footprints,
  Compass,
  X,
  CheckCircle2,
} from "lucide-react";
import { type ParkTopData, type TopAttraction } from "@/data/parkTopData";
import { AttractionImage } from "@/components/parks/AttractionImage";
import { cn } from "@/lib/utils";

interface ParkRouteMapProps {
  data: ParkTopData;
}

export function ParkRouteMap({ data }: ParkRouteMapProps) {
  const [selectedAttractionId, setSelectedAttractionId] = useState<string>(
    data.topAttractions[0]?.id || "",
  );
  const [markerDisplayMode, setMarkerDisplayMode] = useState<"rank" | "route">("route");
  const [showPath, setShowPath] = useState<boolean>(true);

  // Sorted by optimal route sequence
  const routeSortedAttractions = useMemo(() => {
    return [...data.topAttractions].sort((a, b) => a.routeStep - b.routeStep);
  }, [data.topAttractions]);

  // Currently selected attraction
  const selectedAttraction = useMemo(() => {
    return (
      data.topAttractions.find((a) => a.id === selectedAttractionId) ||
      data.topAttractions[0]
    );
  }, [data.topAttractions, selectedAttractionId]);

  // Current route step index
  const currentStep = selectedAttraction.routeStep;

  // Next / Prev step navigation
  const prevStepAttraction = useMemo(() => {
    if (currentStep <= 1) return null;
    return routeSortedAttractions.find((a) => a.routeStep === currentStep - 1) || null;
  }, [routeSortedAttractions, currentStep]);

  const nextStepAttraction = useMemo(() => {
    if (currentStep >= 10) return null;
    return routeSortedAttractions.find((a) => a.routeStep === currentStep + 1) || null;
  }, [routeSortedAttractions, currentStep]);

  // Generate SVG path coordinate string following routeStep 1 -> 2 -> ... -> 10
  const pathD = useMemo(() => {
    if (routeSortedAttractions.length < 2) return "";
    return routeSortedAttractions
      .map((item, idx) => {
        const cmd = idx === 0 ? "M" : "L";
        return `${cmd} ${item.mapCoords.x * 8} ${item.mapCoords.y * 5.6}`;
      })
      .join(" ");
  }, [routeSortedAttractions]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-navy/15 bg-gradient-to-b from-navy to-[#0a192f] text-offwhite shadow-2xl">
      
      {/* Map Control Header */}
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold backdrop-blur-sm">
            <Route className="h-3.5 w-3.5 text-gold" />
            Mapa Interactivo de Ruta Óptima
          </div>
          <h3 className="mt-2 font-display text-lg font-bold sm:text-xl text-offwhite">
            {data.routeTitle}
          </h3>
          <p className="mt-1 text-xs text-offwhite/70 max-w-xl">
            {data.routeStrategyDescription}
          </p>
        </div>

        {/* Display Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setMarkerDisplayMode("route")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition",
                markerDisplayMode === "route"
                  ? "bg-gold text-navy shadow-sm"
                  : "text-offwhite/70 hover:text-white",
              )}
            >
              <Footprints className="h-3 w-3" />
              <span>Orden de Ruta (1–10)</span>
            </button>
            <button
              type="button"
              onClick={() => setMarkerDisplayMode("rank")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition",
                markerDisplayMode === "rank"
                  ? "bg-gold text-navy shadow-sm"
                  : "text-offwhite/70 hover:text-white",
              )}
            >
              <Award className="h-3 w-3" />
              <span>Ranking Top 10</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowPath(!showPath)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold transition",
              showPath ? "bg-white/20 text-gold" : "bg-white/5 text-offwhite/60 hover:bg-white/10",
            )}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>{showPath ? "Ruta Visible" : "Ocultar Línea"}</span>
          </button>
        </div>
      </div>

      {/* Main Map View Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* SVG Interactive Canvas (8 Cols on Desktop) */}
        <div className="relative lg:col-span-8 min-h-[380px] sm:min-h-[460px] md:min-h-[500px] w-full overflow-hidden bg-[#0c1f38] p-4 select-none">
          
          {/* Subtle Grid Lines & Thematic Water Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Park Lands Blueprint Blocks */}
          <div className="absolute inset-0 pointer-events-none">
            {data.mapLands.map((land, idx) => (
              <div
                key={idx}
                style={{
                  left: `${land.x - land.width / 2}%`,
                  top: `${land.y - land.height / 2}%`,
                  width: `${land.width}%`,
                  height: `${land.height}%`,
                  backgroundColor: land.color,
                }}
                className="absolute rounded-3xl border border-white/10 backdrop-blur-[2px] transition-all flex items-center justify-center p-2 text-center"
              >
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/40 drop-shadow-sm line-clamp-2">
                  {land.name}
                </span>
              </div>
            ))}
          </div>

          {/* Central Landmark Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-gold/30 shadow-inner backdrop-blur-md">
              <Sparkles className="h-6 w-6 text-gold/80 animate-pulse" />
            </div>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gold-soft/60">
              {data.mapCenterLand}
            </p>
          </div>

          {/* SVG Vector Path for Walking Route */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none z-10"
            viewBox="0 0 800 560"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {showPath && (
              <>
                {/* Glow layer */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="6"
                  strokeOpacity="0.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Main animated dashed path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-[dash_20s_linear_infinite]"
                />
              </>
            )}
          </svg>

          {/* Numbered Attraction Markers on Canvas */}
          <div className="relative z-20 h-full w-full min-h-[360px] sm:min-h-[440px]">
            {data.topAttractions.map((attraction) => {
              const isSelected = attraction.id === selectedAttractionId;
              const displayNum =
                markerDisplayMode === "route" ? attraction.routeStep : attraction.rank;
              const badgePrefix = markerDisplayMode === "route" ? "P" : "#";

              return (
                <div
                  key={attraction.id}
                  style={{
                    left: `${attraction.mapCoords.x}%`,
                    top: `${attraction.mapCoords.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAttractionId(attraction.id)}
                    className={cn(
                      "group relative flex items-center justify-center rounded-full font-bold shadow-xl transition-transform",
                      "focus:outline-none focus:ring-4 focus:ring-gold/60",
                      isSelected
                        ? "scale-125 z-40 ring-4 ring-gold bg-gold text-navy h-9 w-9 sm:h-10 sm:w-10 text-xs sm:text-sm"
                        : "h-7 w-7 sm:h-8 sm:w-8 text-[10px] sm:text-xs bg-navy border-2 border-gold/70 text-offwhite hover:scale-115 hover:bg-gold hover:text-navy",
                    )}
                    aria-label={`Ver ${attraction.name}`}
                  >
                    {/* Pulsing ring for selected item */}
                    {isSelected && (
                      <span className="absolute -inset-1.5 rounded-full bg-gold/40 animate-ping pointer-events-none" />
                    )}
                    <span>
                      {badgePrefix}
                      {displayNum}
                    </span>
                  </button>

                  {/* Marker Tooltip Label */}
                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-bold shadow-lg transition-all",
                      isSelected
                        ? "bg-gold text-navy opacity-100 z-50"
                        : "bg-navy/90 text-offwhite opacity-0 group-hover:opacity-100 z-30",
                    )}
                  >
                    {attraction.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Attraction Detail Sidebar Panel (4 Cols on Desktop) */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-navy/90 p-5 sm:p-6 backdrop-blur-md">
          
          <div>
            {/* Top Bar: Route Step & Rank */}
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-navy">
                  Paso {selectedAttraction.routeStep} de 10
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold text-gold-soft">
                  Rank #{selectedAttraction.rank}
                </span>
              </div>
              <span className="text-xs font-semibold text-sky-400">
                {selectedAttraction.timeOfDay}
              </span>
            </div>

            {/* Thumbnail Image */}
            <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-md">
              <AttractionImage
                src={selectedAttraction.imageUrl}
                alt={selectedAttraction.name}
                fallbackSrc={selectedAttraction.fallbackUrl}
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 rounded-md bg-navy/80 px-2 py-1 font-semibold text-white backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-gold" />
                  {selectedAttraction.land}
                </span>
                <span className="rounded-md bg-gold/90 px-2 py-1 font-bold text-navy backdrop-blur-sm">
                  {selectedAttraction.category}
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <h4 className="mt-3.5 font-display text-xl font-bold text-offwhite leading-snug">
              {selectedAttraction.name}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-offwhite/80">
              {selectedAttraction.description}
            </p>

            {/* Quick Metrics */}
            <div className="mt-3.5 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 p-2 text-offwhite/90">
                <Clock className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Espera: {selectedAttraction.waitTimeAvg}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 p-2 text-offwhite/90">
                <Timer className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>Duración: {selectedAttraction.duration}</span>
              </div>
            </div>

            {/* Strategy / Pro Tip Alert */}
            <div className="mt-3.5 rounded-2xl bg-gold/10 border border-gold/30 p-3 text-xs">
              <p className="font-bold text-gold flex items-center gap-1.5 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                Consejo Estratégico de Visita:
              </p>
              <p className="text-offwhite/90 leading-relaxed">
                {selectedAttraction.strategyTip}
              </p>
            </div>
          </div>

          {/* Step Navigator (Next / Prev) */}
          <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between gap-2">
            {prevStepAttraction ? (
              <button
                type="button"
                onClick={() => setSelectedAttractionId(prevStepAttraction.id)}
                className="inline-flex items-center gap-1 text-xs font-bold text-offwhite/80 hover:text-gold transition py-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Paso {prevStepAttraction.routeStep}</span>
              </button>
            ) : (
              <div />
            )}

            <span className="text-[11px] text-offwhite/50 font-medium">
              {selectedAttraction.routeStep} / 10
            </span>

            {nextStepAttraction ? (
              <button
                type="button"
                onClick={() => setSelectedAttractionId(nextStepAttraction.id)}
                className="inline-flex items-center gap-1 text-xs font-bold text-offwhite/80 hover:text-gold transition py-2 ml-auto"
              >
                <span>Paso {nextStepAttraction.routeStep}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Step Slider Bar at bottom */}
      <div className="border-t border-white/10 bg-navy/95 p-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-soft mr-2 pl-2">
            Recorrido:
          </span>
          {routeSortedAttractions.map((attraction) => {
            const isSelected = attraction.id === selectedAttractionId;
            return (
              <button
                key={attraction.id}
                type="button"
                onClick={() => setSelectedAttractionId(attraction.id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition",
                  isSelected
                    ? "bg-gold text-navy shadow-md ring-2 ring-gold/40"
                    : "bg-white/10 text-offwhite/80 hover:bg-white/20 hover:text-white",
                )}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-navy/40 text-[10px] text-white">
                  {attraction.routeStep}
                </span>
                <span className="truncate max-w-[140px]">{attraction.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
