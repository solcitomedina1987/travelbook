import type { Metadata } from "next";
import { NycItineraryPage } from "./NycItineraryClient";

export const metadata: Metadata = {
  title: "Itinerario Nueva York 2027 · EEUU2027",
  description:
    "Itinerario caminable de Nueva York 15–19 Abril 2027: Midtown, Central Park, Lower Manhattan, Brooklyn Bridge y día libre. Mapa interactivo día a día.",
};

export default function ItinerarioNyPage() {
  return <NycItineraryPage />;
}
