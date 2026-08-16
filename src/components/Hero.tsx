"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { tripMeta } from "@/data/trip";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy"
    >
      <Image
        src="/images/header-banner.jpg"
        alt="Portada panorámica EEUU 2027 — skyline de Nueva York"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay oscuro para máxima legibilidad del título */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold tracking-tight text-gold-soft sm:text-4xl md:text-5xl"
        >
          {tripMeta.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {tripMeta.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-white/80 sm:text-lg"
        >
          {tripMeta.dateRange}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#calendario"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-gold-soft"
          >
            <CalendarDays className="h-4 w-4" />
            Ver Calendario
          </a>
        </motion.div>
      </div>
    </section>
  );
}
