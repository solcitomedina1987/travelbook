export type DestinationType = "ny" | "orlando" | "miami" | "transit";

export type CalendarDay = {
  date: string; // YYYY-MM-DD
  dayName: string;
  dayShort: string;
  dayNumber: number;
  month: number;
  monthLabel: string;
  city: string;
  label: string;
  type: DestinationType;
};

export type CityDayPlan = {
  id: string;
  date: string;
  dayName: string;
  dayLabel: string;
  title: string;
  focus: string;
  stops: string[];
};

export const tripMeta = {
  name: "EEUU2027",
  portalName: "EEUU2027 - Travel Portal",
  heroTitle: "EEUU 2027: Nueva York, Orlando & Miami",
  startLabel: "13 de Abril",
  endLabel: "04 de Mayo de 2027",
  dateRange: "13 de Abril al 04 de Mayo de 2027",
} as const;

export const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#calendario", label: "Calendario" },
  { href: "/#disney", label: "Disney" },
  { href: "/#universal", label: "Universal" },
  { href: "/itinerario-ny", label: "Itinerario NY" },
  { href: "/#itinerario-miami", label: "Itinerario Miami" },
] as const;

/** Exact trip roadmap — 13/04/2027 to 04/05/2027 */
export const calendarDays: CalendarDay[] = [
  {
    date: "2027-04-13",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 13,
    month: 4,
    monthLabel: "Abr",
    city: "San Luis",
    label: "San Luis → BS AS",
    type: "transit",
  },
  {
    date: "2027-04-14",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 14,
    month: 4,
    monthLabel: "Abr",
    city: "Viaje",
    label: "Vuelo NY",
    type: "transit",
  },
  {
    date: "2027-04-15",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 15,
    month: 4,
    monthLabel: "Abr",
    city: "Nueva York",
    label: "NY · Atracciones Principales",
    type: "ny",
  },
  {
    date: "2027-04-16",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 16,
    month: 4,
    monthLabel: "Abr",
    city: "Nueva York",
    label: "NY · Atracciones Principales",
    type: "ny",
  },
  {
    date: "2027-04-17",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 17,
    month: 4,
    monthLabel: "Abr",
    city: "Nueva York",
    label: "NY · Atracciones Principales",
    type: "ny",
  },
  {
    date: "2027-04-18",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 18,
    month: 4,
    monthLabel: "Abr",
    city: "Nueva York",
    label: "NY · Atracciones Principales",
    type: "ny",
  },
  {
    date: "2027-04-19",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 19,
    month: 4,
    monthLabel: "Abr",
    city: "Nueva York",
    label: "NY · Atracciones Principales",
    type: "ny",
  },
  {
    date: "2027-04-20",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 20,
    month: 4,
    monthLabel: "Abr",
    city: "Viaje",
    label: "NY → Orlando",
    type: "transit",
  },
  {
    date: "2027-04-21",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 21,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Disney · Magic Kingdom",
    type: "orlando",
  },
  {
    date: "2027-04-22",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 22,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Disney · EPCOT",
    type: "orlando",
  },
  {
    date: "2027-04-23",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 23,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Disney · Hollywood Studios",
    type: "orlando",
  },
  {
    date: "2027-04-24",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 24,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Disney · Animal Kingdom",
    type: "orlando",
  },
  {
    date: "2027-04-25",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 25,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Disney / Universal · Traspaso/Descanso",
    type: "orlando",
  },
  {
    date: "2027-04-26",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 26,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Universal · Universal Studios",
    type: "orlando",
  },
  {
    date: "2027-04-27",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 27,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Universal · Islands of Adventure",
    type: "orlando",
  },
  {
    date: "2027-04-28",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 28,
    month: 4,
    monthLabel: "Abr",
    city: "Orlando",
    label: "Universal · Epic Universe",
    type: "orlando",
  },
  {
    date: "2027-04-29",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 29,
    month: 4,
    monthLabel: "Abr",
    city: "Viaje",
    label: "Orlando → Miami",
    type: "transit",
  },
  {
    date: "2027-04-30",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 30,
    month: 4,
    monthLabel: "Abr",
    city: "Miami",
    label: "Miami · South Beach & Art Deco",
    type: "miami",
  },
  {
    date: "2027-05-01",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 1,
    month: 5,
    monthLabel: "May",
    city: "Miami",
    label: "Miami · Wynwood & Bayside",
    type: "miami",
  },
  {
    date: "2027-05-02",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 2,
    month: 5,
    monthLabel: "May",
    city: "Miami",
    label: "Miami · Key Biscayne & Shopping",
    type: "miami",
  },
  {
    date: "2027-05-03",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 3,
    month: 5,
    monthLabel: "May",
    city: "Viaje",
    label: "Miami → BS AS",
    type: "transit",
  },
  {
    date: "2027-05-04",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 4,
    month: 5,
    monthLabel: "May",
    city: "San Luis",
    label: "BS AS → San Luis",
    type: "transit",
  },
];

export const nycItinerary: CityDayPlan[] = [
  {
    id: "ny-1",
    date: "2027-04-15",
    dayName: "Jueves",
    dayLabel: "Día 1 · 15/04",
    title: "Llegada & Midtown Central",
    focus: "Inicio 14:30 — Grand Central → SUMMIT → Top of the Rock → Times Square de noche.",
    stops: [
      "Grand Central & SUMMIT One Vanderbilt",
      "NYPL / Bryant Park & 5ta Ave",
      "Top of the Rock",
      "Times Square de noche",
    ],
  },
  {
    id: "ny-2",
    date: "2027-04-16",
    dayName: "Viernes",
    dayLabel: "Día 2 · 16/04",
    title: "Midtown West & High Line",
    focus: "Free tour Midtown/Hudson Yards + ESB, High Line, Chelsea Market y Little Island.",
    stops: [
      "Free Tour Midtown & Hudson Yards",
      "Empire State · MSG · Hudson Yards",
      "High Line & Chelsea Market",
      "Little Island",
    ],
  },
  {
    id: "ny-3",
    date: "2027-04-17",
    dayName: "Sábado",
    dayLabel: "Día 3 · 17/04",
    title: "Central Park & Upper West",
    focus: "Free tour + Strawberry Fields, Bethesda, Belvedere, AMNH y Levain/Zabar's.",
    stops: [
      "Free Tour Central Park & UWS",
      "Circuito icónico de Central Park",
      "Museo de Historia Natural",
      "Levain Bakery o Zabar's",
    ],
  },
  {
    id: "ny-4",
    date: "2027-04-18",
    dayName: "Domingo",
    dayLabel: "Día 4 · 18/04",
    title: "Lower Manhattan & Financial District",
    focus: "Free tour Financial District, Liberty/Ellis, 9/11 Memorial y One World.",
    stops: [
      "Free Tour Distrito Financiero & 11/09",
      "Battery Park · Liberty & Ellis",
      "Wall Street · Memorial · Oculus",
      "One World Observatory",
    ],
  },
  {
    id: "ny-5",
    date: "2027-04-19",
    dayName: "Lunes",
    dayLabel: "Día 5 · 19/04",
    title: "Brooklyn completo",
    focus: "Free tour DUMBO/Heights, puente, Domino Park y rooftop en Williamsburg.",
    stops: [
      "Free Tour DUMBO & Brooklyn Heights",
      "Puente de Brooklyn · Promenade · DUMBO",
      "Time Out Market & Williamsburg",
      "Rooftop Westlight / Harriet's",
    ],
  },
];

export const miamiItinerary: CityDayPlan[] = [
  {
    id: "mia-1",
    date: "2027-04-30",
    dayName: "Viernes",
    dayLabel: "Día 1 · 30/04",
    title: "South Beach & Ocean Drive",
    focus: "Art Deco, playa y el malecón de Miami Beach.",
    stops: [
      "Caminata por Ocean Drive (distrito Art Deco)",
      "Playa South Beach",
      "Lincoln Road (paseo corto)",
      "Atardecer en el waterfront",
    ],
  },
  {
    id: "mia-2",
    date: "2027-05-01",
    dayName: "Sábado",
    dayLabel: "Día 2 · 01/05",
    title: "Wynwood Walls & Bayside Marketplace",
    focus: "Street art por la mañana y bahía por la tarde.",
    stops: [
      "Wynwood Walls y galerías",
      "Almuerzo en Wynwood",
      "Bayside Marketplace",
      "Paseo por el downtown / bayfront",
    ],
  },
  {
    id: "mia-3",
    date: "2027-05-02",
    dayName: "Domingo",
    dayLabel: "Día 3 · 02/05",
    title: "Key Biscayne, Design District & Lincoln Road",
    focus: "Naturaleza + shopping premium en un día equilibrado.",
    stops: [
      "Key Biscayne (Crandon o Bill Baggs)",
      "Design District",
      "Lincoln Road Mall",
      "Cena de despedida en Miami",
    ],
  },
];

export const typeStyles: Record<
  DestinationType,
  { badge: string; border: string; soft: string; label: string }
> = {
  ny: {
    badge: "bg-sky-600 text-white",
    border: "border-sky-500/40",
    soft: "bg-sky-500/10 text-sky-800",
    label: "Nueva York",
  },
  orlando: {
    badge: "bg-amber-500 text-navy",
    border: "border-amber-400/50",
    soft: "bg-amber-400/15 text-amber-800",
    label: "Orlando / Parques",
  },
  miami: {
    badge: "bg-teal text-white",
    border: "border-teal/40",
    soft: "bg-teal/10 text-teal",
    label: "Miami",
  },
  transit: {
    badge: "bg-slate-500 text-white",
    border: "border-slate-400/40",
    soft: "bg-slate-500/10 text-slate-700",
    label: "Viaje",
  },
};

export function getDayByDate(iso: string): CalendarDay | undefined {
  return calendarDays.find((d) => d.date === iso);
}

/** Monday = 0 … Sunday = 6 (ISO-style for grid) */
export function getMondayBasedWeekday(year: number, month: number, day: number) {
  const jsDay = new Date(Date.UTC(year, month - 1, day)).getUTCDay(); // 0 Sun
  return jsDay === 0 ? 6 : jsDay - 1;
}

export type CalendarCell = {
  day: number | null;
  month?: number;
  monthLabel?: string;
  entry?: CalendarDay;
  isMonthStart?: boolean;
};

const monthShortEs: Record<number, string> = {
  1: "Ene",
  2: "Feb",
  3: "Mar",
  4: "Abr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Ago",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dic",
};

export function buildMonthGrid(year: number, month: number): CalendarCell[] {
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const startPad = getMondayBasedWeekday(year, month, 1);
  const cells: CalendarCell[] = [];

  for (let i = 0; i < startPad; i++) {
    cells.push({ day: null });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({
      day: d,
      month,
      monthLabel: monthShortEs[month],
      entry: getDayByDate(iso),
      isMonthStart: d === 1,
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: null });
  }

  return cells;
}

/** Continuous Monday-based grid spanning startMonth…endMonth in the same year. */
export function buildMultiMonthGrid(
  year: number,
  startMonth: number,
  endMonth: number,
): CalendarCell[] {
  const startPad = getMondayBasedWeekday(year, startMonth, 1);
  const cells: CalendarCell[] = [];

  for (let i = 0; i < startPad; i++) {
    cells.push({ day: null });
  }

  for (let month = startMonth; month <= endMonth; month++) {
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({
        day: d,
        month,
        monthLabel: monthShortEs[month],
        entry: getDayByDate(iso),
        isMonthStart: d === 1,
      });
    }
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: null });
  }

  return cells;
}
