"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import {
  nycDayColors,
  nycDays,
  type NycStop,
} from "@/data/nyItineraryData";

type NYMapProps = {
  stops: NycStop[];
  dayTitle?: string;
  mapKey?: string;
  /** Color pins/routes by itinerary day (Mapa General) */
  colorByDay?: boolean;
};

const DEFAULT_PIN = "#0F172A";
const DEFAULT_ROUTE = "#0D9488";

function numberedIcon(n: number, color: string) {
  return L.divIcon({
    className: "nyc-numbered-pin",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -14],
    html: `<span class="nyc-numbered-pin__badge" style="background:${color};border-color:#F8FAFC;box-shadow:0 2px 10px rgba(15,23,42,.35)">${n}</span>`,
  });
}

function MapController({ stops }: { stops: NycStop[] }) {
  const map = useMap();

  useEffect(() => {
    const t1 = window.setTimeout(() => map.invalidateSize(), 50);
    const t2 = window.setTimeout(() => map.invalidateSize(), 250);

    if (stops.length === 1) {
      map.setView([stops[0].lat, stops[0].lng], 15);
    } else if (stops.length > 1) {
      const bounds = L.latLngBounds(
        stops.map((s) => [s.lat, s.lng] as [number, number]),
      );
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14 });
    }

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [map, stops]);

  return null;
}

export default function NYMap({
  stops,
  dayTitle,
  mapKey,
  colorByDay = false,
}: NYMapProps) {
  const center = useMemo<[number, number]>(() => {
    if (!stops.length) return [40.758, -73.9855];
    const lat = stops.reduce((a, s) => a + s.lat, 0) / stops.length;
    const lng = stops.reduce((a, s) => a + s.lng, 0) / stops.length;
    return [lat, lng];
  }, [stops]);

  const dayRoutes = useMemo(() => {
    if (!colorByDay) {
      return [
        {
          dayId: "single",
          color: DEFAULT_ROUTE,
          positions: stops.map((s) => [s.lat, s.lng] as [number, number]),
        },
      ];
    }

    const byDay = new Map<string, NycStop[]>();
    for (const stop of stops) {
      const id = stop.dayId ?? "unknown";
      if (!byDay.has(id)) byDay.set(id, []);
      byDay.get(id)!.push(stop);
    }

    return [...byDay.entries()].map(([dayId, dayStops]) => ({
      dayId,
      color: dayStops[0]?.pinColor ?? nycDayColors[dayId] ?? DEFAULT_ROUTE,
      positions: dayStops.map((s) => [s.lat, s.lng] as [number, number]),
    }));
  }, [stops, colorByDay]);

  const legend = useMemo(() => {
    if (!colorByDay) return [];
    return nycDays
      .filter((d) => stops.some((s) => s.dayId === d.id))
      .map((d) => ({
        id: d.id,
        label: d.tabLabel,
        color: nycDayColors[d.id] ?? DEFAULT_PIN,
      }));
  }, [stops, colorByDay]);

  const instanceKey =
    mapKey ?? stops.map((s) => s.id).join("-") ?? "nyc-map";

  if (!stops.length) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-navy/10 bg-navy/5 text-sm text-slate">
        Sin puntos para mostrar
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      {dayTitle && (
        <div className="border-b border-navy/10 px-4 py-3">
          <p className="text-sm font-semibold text-navy">{dayTitle}</p>
          <p className="text-xs text-slate">
            {colorByDay
              ? `Pines por color de día · ${stops.length} paradas`
              : `Ruta a pie proyectada · ${stops.length} paradas`}
          </p>
        </div>
      )}

      {legend.length > 0 && (
        <div className="flex flex-wrap gap-2 border-b border-navy/10 bg-offwhite/80 px-4 py-2.5">
          {legend.map((item) => (
            <span
              key={item.id}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-navy shadow-sm"
            >
              <span
                className="h-2.5 w-2.5 rounded-full ring-2 ring-white"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
      )}

      <div className="relative w-full" style={{ height: 420 }}>
        <MapContainer
          key={instanceKey}
          center={center}
          zoom={13}
          scrollWheelZoom
          dragging
          style={{ height: "100%", width: "100%" }}
          className="nyc-leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
          />
          <MapController stops={stops} />
          {dayRoutes.map((route) => (
            <Polyline
              key={`route-${route.dayId}`}
              positions={route.positions}
              pathOptions={{
                color: route.color,
                weight: 4,
                opacity: 0.85,
                dashArray: "10 8",
                lineCap: "round",
              }}
            />
          ))}
          {stops.map((stop) => {
            const color = colorByDay
              ? (stop.pinColor ?? DEFAULT_PIN)
              : DEFAULT_PIN;
            return (
              <Marker
                key={`${instanceKey}-${stop.id}`}
                position={[stop.lat, stop.lng]}
                icon={numberedIcon(stop.order, color)}
              >
                <Popup>
                  {stop.dayLabel && (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: 10,
                          fontWeight: 700,
                          color,
                          marginBottom: 2,
                        }}
                      >
                        {stop.dayLabel}
                      </span>
                      <br />
                    </>
                  )}
                  <strong>
                    #{String(stop.order).padStart(2, "0")} {stop.name}
                  </strong>
                  <br />
                  <span style={{ fontSize: 12 }}>{stop.time}</span>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
