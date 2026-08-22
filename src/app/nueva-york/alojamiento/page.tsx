import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  XCircle,
  Coffee,
  Refrigerator,
  Volume2,
  Train,
  Star,
  MapPin,
  ShieldCheck,
  DollarSign,
  VolumeX,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Info,
  Award,
} from "lucide-react";
import { hotelsList, hotelSelectionRationale } from "@/data/hotelsData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alojamiento en Nueva York · Hotel Seleccionado & Comparativa | EEUU 2027",
  description:
    "Análisis comparativo de 5 hoteles en Times Square y justificación oficial de la elección de Courtyard by Marriott New York Manhattan/Times Square.",
};

const subwayLineColors: Record<string, string> = {
  "1": "bg-red-600 text-white",
  "2": "bg-red-600 text-white",
  "3": "bg-red-600 text-white",
  "4": "bg-emerald-600 text-white",
  "5": "bg-emerald-600 text-white",
  "6": "bg-emerald-600 text-white",
  "7": "bg-purple-600 text-white",
  "A": "bg-blue-600 text-white",
  "C": "bg-blue-600 text-white",
  "E": "bg-blue-600 text-white",
  "B": "bg-orange-500 text-white",
  "D": "bg-orange-500 text-white",
  "F": "bg-orange-500 text-white",
  "M": "bg-orange-500 text-white",
  "N": "bg-amber-400 text-black",
  "Q": "bg-amber-400 text-black",
  "R": "bg-amber-400 text-black",
  "W": "bg-amber-400 text-black",
  "S": "bg-slate-500 text-white",
};

export default function AlojamientoPage() {
  const chosenHotel = hotelsList.find((h) => h.selected) || hotelsList[0];

  return (
    <div className="min-h-screen bg-sand text-navy">
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-offwhite sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,119,6,0.25),rgba(15,23,42,0))]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-offwhite/60 sm:text-sm">
            <Link href="/" className="hover:text-gold-soft transition">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-offwhite/80">Nueva York</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold font-medium">Alojamiento</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-soft backdrop-blur-sm sm:text-sm">
              <Award className="h-4 w-4 text-gold" />
              Decisión de Hospedaje · Nueva York 2027
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
              Alojamiento & Comparativa de Hoteles
            </h1>
            <p className="mt-4 text-base leading-relaxed text-offwhite/75 sm:text-lg">
              Evaluación integral de 5 hoteles estratégicos en Manhattan (zona Times Square / Bryant Park) y justificación de la selección oficial de <span className="font-semibold text-gold">Courtyard by Marriott New York Manhattan/Times Square</span>.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Selected Hotel Winner Spotlight Card */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/60 bg-gradient-to-br from-navy via-slate-900 to-navy text-offwhite p-6 shadow-2xl shadow-gold/10 sm:p-10">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  <Award className="h-4 w-4" />
                  Hotel Seleccionado Oficial
                </div>
                <h2 className="font-display text-2xl font-bold text-offwhite sm:text-4xl">
                  {chosenHotel.name}
                </h2>
                <p className="flex items-center gap-2 text-sm text-gold-soft font-medium sm:text-base">
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  {chosenHotel.address} · <span className="text-offwhite/80">A {chosenHotel.timesSquareDistance} de Times Square ({chosenHotel.walkTimeMin} mins a pie)</span>
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                    <span>{chosenHotel.googleRating} / 5</span>
                    <span className="text-offwhite/60">({chosenHotel.reviewsCount})</span>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 text-xs font-semibold">
                    Insonorización: {chosenHotel.acousticInsulation.rating}
                  </div>
                  <div className="rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 px-3 py-1 text-xs font-semibold">
                    Frigobar & Cafetera Incluidos
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md lg:max-w-xs shrink-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-offwhite/60">
                  Estilo & Ambiente
                </p>
                <p className="mt-1 text-sm text-offwhite/90">
                  {chosenHotel.styleAtmosphere}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-offwhite/70">
                  <span>Conexión Metro:</span>
                  <span className="font-semibold text-gold-soft">~100m a pie</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Decision */}
            <div className="mt-10 pt-8 border-t border-white/15">
              <h3 className="font-display text-lg font-bold text-gold sm:text-xl flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-gold" />
                ¿Por qué elegimos Courtyard? (4 Pilares Decisivos)
              </h3>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {hotelSelectionRationale.pillars.map((pillar, idx) => {
                  const icons = [
                    <Refrigerator key="1" className="h-5 w-5 text-gold" />,
                    <DollarSign key="2" className="h-5 w-5 text-gold" />,
                    <Train key="3" className="h-5 w-5 text-gold" />,
                    <VolumeX key="4" className="h-5 w-5 text-gold" />,
                  ];
                  return (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold border border-gold/30">
                          {icons[idx]}
                        </div>
                        <h4 className="font-display text-sm font-bold text-offwhite leading-tight">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs font-medium text-gold-soft mb-2">
                        {pillar.summary}
                      </p>
                      <p className="text-xs text-offwhite/70 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subway bullet badges */}
            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold-soft">
                  Líneas de Metro Accesibles a Pie (~100m a 150m):
                </p>
                <p className="text-xs text-offwhite/70 mt-0.5">
                  Estaciones <strong>42 St - Bryant Park</strong> y <strong>Times Sq - 42 St</strong>:
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {chosenHotel.subwayLines.map((line) => (
                  <span
                    key={line}
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-bold text-xs shadow-sm ${
                      subwayLineColors[line] || "bg-slate-600 text-white"
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix Table Section */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy/80">
                <Building2 className="h-3.5 w-3.5" />
                Matriz Comparativa de Hoteles
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Comparación Completa de los 5 Hoteles
              </h2>
            </div>
            <p className="text-xs text-navy/60">
              * Datos recopilados y verificados para el viaje 2027
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-navy/15 bg-white shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-navy/15 bg-navy text-offwhite font-semibold">
                  <th className="py-3.5 px-4">Hotel</th>
                  <th className="py-3.5 px-3">Frigobar</th>
                  <th className="py-3.5 px-3">Cafetera</th>
                  <th className="py-3.5 px-3">Distancia Times Sq</th>
                  <th className="py-3.5 px-3">Metro Cercano</th>
                  <th className="py-3.5 px-3">Rating Google</th>
                  <th className="py-3.5 px-3">Insonorización</th>
                  <th className="py-3.5 px-4">Ventajas Clave</th>
                  <th className="py-3.5 px-4">Críticas / Contras</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {hotelsList.map((hotel) => {
                  const isSelected = hotel.selected;
                  return (
                    <tr
                      key={hotel.id}
                      className={`transition ${
                        isSelected
                          ? "bg-gold/10 font-medium hover:bg-gold/15"
                          : "hover:bg-sand/40"
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-navy">
                        <div className="flex items-center gap-2">
                          {isSelected && (
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy font-bold text-[10px]" title="Seleccionado">
                              ✓
                            </span>
                          )}
                          <div>
                            <p className={`${isSelected ? "text-navy font-bold" : "text-navy/90"}`}>
                              {hotel.name}
                            </p>
                            {isSelected && (
                              <span className="inline-block rounded bg-gold/30 px-1.5 py-0.5 text-[10px] font-bold text-navy mt-0.5">
                                ELECCIÓN OFICIAL
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Frigobar */}
                      <td className="py-4 px-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            hotel.miniFridge.available === "included"
                              ? "bg-emerald-100 text-emerald-800"
                              : hotel.miniFridge.available === "not_available"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {hotel.miniFridge.available === "included" ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : hotel.miniFridge.available === "not_available" ? (
                            <XCircle className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                          {hotel.miniFridge.label}
                        </span>
                      </td>

                      {/* Cafetera */}
                      <td className="py-4 px-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            hotel.coffeeMaker.available === "included"
                              ? "bg-emerald-100 text-emerald-800"
                              : hotel.coffeeMaker.available === "not_available"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {hotel.coffeeMaker.available === "included" ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : hotel.coffeeMaker.available === "not_available" ? (
                            <XCircle className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                          {hotel.coffeeMaker.label}
                        </span>
                      </td>

                      {/* Distancia Times Sq */}
                      <td className="py-4 px-3 text-navy/80 whitespace-nowrap">
                        <strong>{hotel.timesSquareDistance}</strong>
                        <span className="block text-[11px] text-navy/60">({hotel.walkTimeMin} min a pie)</span>
                      </td>

                      {/* Metro */}
                      <td className="py-4 px-3 text-navy/80">
                        <span className="font-medium">{hotel.nearestSubway}</span>
                        <span className="block text-[11px] text-navy/60">({hotel.subwayDistance})</span>
                      </td>

                      {/* Rating Google */}
                      <td className="py-4 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-1 font-semibold text-navy">
                          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                          <span>{hotel.googleRating}</span>
                          <span className="text-[11px] text-navy/60 font-normal">/ 5</span>
                        </div>
                        <span className="block text-[10px] text-navy/50">{hotel.reviewsCount}</span>
                      </td>

                      {/* Insonorización */}
                      <td className="py-4 px-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                            hotel.acousticInsulation.rating === "Excelente"
                              ? "bg-emerald-100 text-emerald-800"
                              : hotel.acousticInsulation.rating === "Muy Buena"
                              ? "bg-teal/15 text-teal"
                              : hotel.acousticInsulation.rating === "Buena"
                              ? "bg-sky-100 text-sky-800"
                              : hotel.acousticInsulation.rating === "Aceptable"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {hotel.acousticInsulation.rating}
                        </span>
                      </td>

                      {/* Ventajas */}
                      <td className="py-4 px-4 text-xs text-navy/80 min-w-[200px]">
                        <ul className="list-disc list-inside space-y-1">
                          {hotel.pros.slice(0, 3).map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </td>

                      {/* Contras */}
                      <td className="py-4 px-4 text-xs text-navy/70 min-w-[180px]">
                        <ul className="list-disc list-inside space-y-1 text-navy/65">
                          {hotel.cons.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Breakdown for each of the 5 hotels */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Fichas Detalladas por Hotel
            </h2>
            <p className="mt-1 text-sm text-navy/70">
              Análisis pormenorizado de las características, servicios, pros y contras de cada opción evaluada.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hotelsList.map((hotel) => {
              const isSelected = hotel.selected;
              return (
                <div
                  key={hotel.id}
                  className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                    isSelected
                      ? "border-2 border-gold ring-4 ring-gold/10"
                      : "border-navy/15"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        {isSelected && (
                          <span className="inline-block rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
                            ★ SELECCIONADO OFICIAL
                          </span>
                        )}
                        <h3 className="font-display text-lg font-bold text-navy leading-snug">
                          {hotel.name}
                        </h3>
                        <p className="text-xs text-navy/60 flex items-center gap-1 mt-1">
                          <MapPin className="h-3.5 w-3.5 text-navy/40 shrink-0" />
                          {hotel.address}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-navy/70 italic mb-4">
                      "{hotel.tagline}"
                    </p>

                    {/* Fast Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl bg-sand/50 p-3 text-xs">
                      <div>
                        <span className="text-navy/50 block text-[10px] uppercase font-bold">Frigobar:</span>
                        <span className="font-semibold text-navy">{hotel.miniFridge.label}</span>
                      </div>
                      <div>
                        <span className="text-navy/50 block text-[10px] uppercase font-bold">Cafetera:</span>
                        <span className="font-semibold text-navy">{hotel.coffeeMaker.label}</span>
                      </div>
                      <div>
                        <span className="text-navy/50 block text-[10px] uppercase font-bold">Times Sq:</span>
                        <span className="font-semibold text-navy">{hotel.timesSquareDistance} ({hotel.walkTimeMin}m)</span>
                      </div>
                      <div>
                        <span className="text-navy/50 block text-[10px] uppercase font-bold">Insonorización:</span>
                        <span className="font-semibold text-navy">{hotel.acousticInsulation.rating}</span>
                      </div>
                    </div>

                    {/* Metro Lines */}
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-navy/70 mb-1.5 flex items-center gap-1">
                        <Train className="h-3.5 w-3.5 text-navy/50" />
                        Metro: {hotel.nearestSubway} ({hotel.subwayDistance})
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {hotel.subwayLines.map((line) => (
                          <span
                            key={line}
                            className={`flex h-5 w-5 items-center justify-center rounded-full font-bold text-[10px] ${
                              subwayLineColors[line] || "bg-slate-600 text-white"
                            }`}
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros */}
                    <div className="mb-3">
                      <p className="text-xs font-bold text-emerald-800 flex items-center gap-1 mb-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Ventajas Principales
                      </p>
                      <ul className="space-y-1 text-xs text-navy/80">
                        {hotel.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-rose-800 flex items-center gap-1 mb-1.5">
                        <XCircle className="h-3.5 w-3.5 text-rose-600" />
                        Críticas & Desventajas
                      </p>
                      <ul className="space-y-1 text-xs text-navy/70">
                        {hotel.cons.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-rose-600 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="pt-3 border-t border-navy/10 text-xs text-navy/70">
                    <p className="leading-relaxed">
                      <strong>Resumen:</strong> {hotel.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA to NYC Itinerary */}
        <section className="rounded-3xl bg-navy text-offwhite p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold text-offwhite sm:text-3xl">
              ¿Listo para recorrer Nueva York?
            </h3>
            <p className="mt-2 text-sm text-offwhite/75 sm:text-base">
              Descubre el itinerario detallado día por día (con horarios, mapas, atracciones y precios) partiendo desde nuestro hotel seleccionado.
            </p>
          </div>
          <Link
            href="/itinerario-ny"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-gold-soft hover:shadow-lg shrink-0"
          >
            Ver Itinerario Completo NY
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
