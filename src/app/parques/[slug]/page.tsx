import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParkDetailView } from "@/components/parks/ParkDetailView";
import { getAllParkSlugs, getParkBySlug } from "@/data/parksData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllParkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const park = getParkBySlug(slug);
  if (!park) return { title: "Parque no encontrado · EEUU2027" };
  return {
    title: `${park.name} · Atracciones · EEUU2027`,
    description: park.description,
  };
}

export default async function ParkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const park = getParkBySlug(slug);
  if (!park) notFound();

  return <ParkDetailView park={park} />;
}
