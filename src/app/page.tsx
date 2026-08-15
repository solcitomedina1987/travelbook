import { CalendarGrid } from "@/components/CalendarGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MiamiItinerary } from "@/components/MiamiItinerary";
import { NycItinerary } from "@/components/NycItinerary";
import { ParksSection } from "@/components/ParksSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CalendarGrid />
        <ParksSection />
        <NycItinerary />
        <MiamiItinerary />
      </main>
      <Footer />
    </>
  );
}
