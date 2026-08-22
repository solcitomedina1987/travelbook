export type DestinationType = "ny" | "orlando" | "miami" | "transit";

export type CalendarDay = {
  date: string; // YYYY-MM-DD
  dayName: string;
  dayShort: string;
  dayNumber: number;
  month: number;
  monthLabel: string;
  tripDayIndex: number; // 1 to 23
  city: string;
  label: string;
  type: DestinationType;
  icon?: string;
  title: string;
  focus: string;
  highlights?: string[];
  link?: string;
  linkLabel?: string;
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
  endLabel: "05 de Mayo de 2027",
  dateRange: "13 de Abril al 05 de Mayo de 2027",
  durationDays: 23,
} as const;

export type NavSubItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavSubItem[];
};

export const navLinks: NavItem[] = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#calendario", label: "Calendario" },
  {
    label: "Nueva York",
    children: [
      {
        label: "Itinerario",
        href: "/itinerario-ny",
        description: "Recorrido diario de 5 días con mapas, horarios y atracciones",
      },
      {
        label: "Alojamiento",
        href: "/nueva-york/alojamiento",
        description: "Hotel seleccionado y comparativa detallada en Times Square",
      },
    ],
  },
  { href: "/#disney", label: "Disney" },
  { href: "/#universal", label: "Universal" },
  { href: "/#itinerario-miami", label: "Itinerario Miami" },
];

/** Exact updated trip roadmap — 13/04/2027 to 05/05/2027 (23 full days) */
export const calendarDays: CalendarDay[] = [
  {
    date: "2027-04-13",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 13,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 1,
    city: "San Luis → Bs As",
    label: "Viaje de SL a BS AS",
    type: "transit",
    title: "Inicio del Viaje: San Luis a Buenos Aires",
    focus: "Salida desde San Luis rumbo a Buenos Aires para conectar con el vuelo internacional.",
    highlights: ["Traslado San Luis → Buenos Aires", "Noche previa al vuelo internacional"],
  },
  {
    date: "2027-04-14",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 14,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 2,
    city: "Bs As → NY (JFK)",
    label: "Viaje de Bs As a NY",
    type: "transit",
    title: "Vuelo Internacional a Nueva York",
    focus: "Check-in en Ezeiza y vuelo directo/escala con destino al Aeropuerto Internacional JFK de Nueva York.",
    highlights: ["Aeropuerto Internacional Ezeiza (EZE)", "Vuelo internacional rumbo a JFK"],
  },
  {
    date: "2027-04-15",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 15,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 3,
    city: "Nueva York",
    label: "Llegada a NY · Midtown",
    type: "ny",
    title: "Llegada a NY & Primer Recorrido por Midtown",
    focus: "Aterrizaje en JFK, traslado al hotel Courtyard Times Square y arranque a las 14:30 hs por Grand Central, SUMMIT, Bryant Park, Top of the Rock y Times Square iluminado.",
    highlights: ["Grand Central Terminal & SUMMIT One Vanderbilt", "Bryant Park & 5ta Avenida", "Top of the Rock Observation Deck", "Times Square de noche"],
    link: "/itinerario-ny",
    linkLabel: "Ver Itinerario NY Día 1",
  },
  {
    date: "2027-04-16",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 16,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 4,
    city: "Nueva York",
    label: "NY · Midtown West & High Line",
    type: "ny",
    title: "Midtown West, High Line & Chelsea",
    focus: "Free Walking Tour Midtown/Hudson Yards por la mañana, Empire State, caminata elevada por High Line, almuerzo en Chelsea Market y atardecer en Little Island.",
    highlights: ["Free Tour Midtown & Hudson Yards ($25)", "Empire State Building & The Vessel", "High Line & Chelsea Market", "Little Island & Pier 57 Rooftop"],
    link: "/itinerario-ny",
    linkLabel: "Ver Itinerario NY Día 2",
  },
  {
    date: "2027-04-17",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 17,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 5,
    city: "Nueva York",
    label: "NY · Central Park & UWS",
    type: "ny",
    title: "Central Park en Bici & Museo de Historia Natural",
    focus: "Alquiler de bicicletas a las 8am, circuito icónico por Central Park (The Plaza, Gapstow, Bethesda, Strawberry Fields, Belvedere), devolución y entrada al Museo de Historia Natural (13-14hs) y merienda en Levain Bakery.",
    highlights: ["Circuito completo Central Park en Bici", "The Plaza, Bow Bridge & Bethesda Terrace", "Museo Americano de Historia Natural ($28)", "Galletas en Levain Bakery / Zabar's"],
    link: "/itinerario-ny",
    linkLabel: "Ver Itinerario NY Día 3",
  },
  {
    date: "2027-04-18",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 18,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 6,
    city: "Nueva York",
    label: "NY · Lower Manhattan & 9/11",
    type: "ny",
    title: "Lower Manhattan, Estatua de la Libertad & Memorial 9/11",
    focus: "Friends Apartment, Wall Street & Charging Bull, embarcadero Battery Park hacia Estatua de la Libertad, Free Tour Distrito Financiero, Memorial 11-S y Oculus.",
    highlights: ["Friends Apartment Building (Greenwich Village)", "Wall Street, Charging Bull & Trinity Church", "Estatua de la Libertad & Ellis Island ($25.50)", "Memorial 11-S, Oculus & One World Observatory"],
    link: "/itinerario-ny",
    linkLabel: "Ver Itinerario NY Día 4",
  },
  {
    date: "2027-04-19",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 19,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 7,
    city: "Nueva York",
    label: "NY · Brooklyn & DUMBO",
    type: "ny",
    title: "Brooklyn Bridge, DUMBO & Williamsburg",
    focus: "Cruce peatonal del Puente de Brooklyn, Free Tour DUMBO & Heights, Time Out Market con vistas al skyline, compras vintage y atardecer en rooftop de Williamsburg.",
    highlights: ["Puente de Brooklyn a pie", "DUMBO (Washington St view) & Jane's Carousel", "Time Out Market & Brooklyn Heights Promenade", "Williamsburg & Rooftop The Westlight"],
    link: "/itinerario-ny",
    linkLabel: "Ver Itinerario NY Día 5",
  },
  {
    date: "2027-04-20",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 20,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 8,
    city: "NY → Orlando",
    label: "Viaje NY a Orlando",
    type: "transit",
    title: "Vuelo de Nueva York a Orlando & Check-in",
    focus: "Despedida de Nueva York, traslado al aeropuerto, vuelo doméstico hacia Orlando (MCO), check-in en el resort y compras de provisiones.",
    highlights: ["Vuelo doméstico Nueva York → Orlando", "Llegada al resort en Orlando", "Descanso y preparación para los parques temáticos"],
  },
  {
    date: "2027-04-21",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 21,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 9,
    city: "Orlando · Disney",
    label: "Disney · Magic Kingdom",
    type: "orlando",
    title: "Walt Disney World: Magic Kingdom",
    focus: "Rope drop en TRON Lightcycle / Run y Space Mountain, clásicos de Fantasyland, desfile Festival of Fantasy y cierre con fuegos artificiales Happily Ever After.",
    highlights: ["TRON Lightcycle / Run", "Seven Dwarfs Mine Train & Space Mountain", "Haunted Mansion & Pirates of the Caribbean", "Happily Ever After Fireworks"],
    link: "/parques/magic-kingdom",
    linkLabel: "Ver Guía Magic Kingdom (33 atracciones)",
  },
  {
    date: "2027-04-22",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 22,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 10,
    city: "Orlando · Disney",
    label: "Disney · EPCOT",
    type: "orlando",
    title: "Walt Disney World: EPCOT",
    focus: "Cosmic Rewind y Test Track por la mañana, Soarin' y acuario en World Nature, recorrido gastronómico por World Showcase y show Luminous The Symphony of Us.",
    highlights: ["Guardians of the Galaxy: Cosmic Rewind", "Remy's Ratatouille Adventure & Frozen Ever After", "Soarin' Around the World & Test Track", "Luminous The Symphony of Us"],
    link: "/parques/epcot",
    linkLabel: "Ver Guía EPCOT (37 atracciones)",
  },
  {
    date: "2027-04-23",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 23,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 11,
    city: "Orlando · Disney",
    label: "Disney · Hollywood Studios",
    type: "orlando",
    title: "Walt Disney World: Disney's Hollywood Studios",
    focus: "Inmersión total en Star Wars: Galaxy's Edge (Rise of the Resistance, Millennium Falcon), Toy Story Land (Slinky Dog Dash), Tower of Terror y el show nocturno Fantasmic!.",
    highlights: ["Star Wars: Rise of the Resistance", "Slinky Dog Dash & Toy Story Mania!", "The Twilight Zone Tower of Terror", "Fantasmic! Espectáculo Nocturno"],
    link: "/parques/hollywood-studios",
    linkLabel: "Ver Guía Hollywood Studios (37 atracciones)",
  },
  {
    date: "2027-04-24",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 24,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 12,
    city: "Orlando · Disney",
    label: "Disney · Animal Kingdom",
    type: "orlando",
    title: "Walt Disney World: Disney's Animal Kingdom",
    focus: "Vuelo en banshee en Avatar Flight of Passage, expedición en todoterreno por Kilimanjaro Safaris, Festival of the Lion King y Expedition Everest.",
    highlights: ["Avatar Flight of Passage & Na'vi River Journey", "Kilimanjaro Safaris a primera hora", "Expedition Everest & Kali River Rapids", "Festival of the Lion King Musical"],
    link: "/parques/animal-kingdom",
    linkLabel: "Ver Guía Animal Kingdom (30 atracciones)",
  },
  {
    date: "2027-04-25",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 25,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 13,
    city: "Orlando · Disney",
    label: "Disney · Día Adicional / Relax",
    type: "orlando",
    title: "Disney: Día Adicional, Repetición de Favoritos & Disney Springs",
    focus: "Jornada flexible para repetir las mejores atracciones de Disney, disfrutar de la piscina del resort y paseo nocturno de compras en Disney Springs.",
    highlights: ["Parque favorito para repetir atracciones", "Piscina y relax en el resort", "Disney Springs (World of Disney, restaurantes temáticos)"],
  },
  {
    date: "2027-04-26",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 26,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 14,
    city: "Orlando · Universal",
    label: "Disney / Universal · Traspaso",
    type: "orlando",
    title: "Traspaso a Universal & Universal Studios Florida",
    focus: "Check-out Disney, check-in en Universal Resort y primer contacto con Diagon Alley, Harry Potter and the Escape from Gringotts y Revenge of the Mummy.",
    highlights: ["The Wizarding World of Harry Potter - Diagon Alley", "Harry Potter and the Escape from Gringotts", "Revenge of the Mummy & Men in Black", "Universal CityWalk al anochecer"],
    link: "/parques/universal-studios",
    linkLabel: "Ver Guía Universal Studios Florida",
  },
  {
    date: "2027-04-27",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 27,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 15,
    city: "Orlando · Universal",
    label: "Universal · Islands of Adventure",
    type: "orlando",
    title: "Universal: Islands of Adventure",
    focus: "Las montañas rusas más intensas de Orlando: Jurassic World VelociCoaster, Hagrid's Magical Creatures Motorbike Adventure, The Incredible Hulk e Hogsmeade.",
    highlights: ["Jurassic World VelociCoaster", "Hagrid's Magical Creatures Motorbike Adventure", "Harry Potter and the Forbidden Journey (Hogsmeade)", "The Incredible Hulk Coaster"],
    link: "/parques/islands-of-adventure",
    linkLabel: "Ver Guía Islands of Adventure",
  },
  {
    date: "2027-04-28",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 28,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 16,
    city: "Orlando · Universal",
    label: "Universal · Epic Universe",
    type: "orlando",
    title: "Universal: Epic Universe (Nuevo Mega Parque)",
    focus: "Exploración del parque más nuevo y tecnológico de Orlando: Celestial Park, Super Nintendo World (Mario Kart), Dark Universe, How to Train Your Dragon y Harry Potter.",
    highlights: ["Super Nintendo World (Mario Kart & Donkey Kong)", "Dark Universe (Classic Monsters)", "The Wizarding World of Harry Potter - Ministry of Magic", "How to Train Your Dragon - Isle of Berk"],
    link: "/parques/epic-universe",
    linkLabel: "Ver Guía Universal Epic Universe",
  },
  {
    date: "2027-04-29",
    dayName: "Jueves",
    dayShort: "Jue",
    dayNumber: 29,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 17,
    city: "Orlando · Universal",
    label: "Universal · Día Libre / Volcano Bay",
    type: "orlando",
    title: "Universal: Volcano Bay / Día Libre de Compras",
    focus: "Jornada de descanso acuático en Volcano Bay o shopping en Orlando International Premium Outlets y Mall at Millenia.",
    highlights: ["Universal's Volcano Bay (parque acuático tropical)", "Orlando Premium Outlets (compras y descuentos)", "Cena en Universal CityWalk"],
  },
  {
    date: "2027-04-30",
    dayName: "Viernes",
    dayShort: "Vie",
    dayNumber: 30,
    month: 4,
    monthLabel: "Abr",
    tripDayIndex: 18,
    city: "Orlando → Miami",
    label: "Viaje Orlando a Miami",
    type: "miami",
    title: "Viaje Orlando a Miami & South Beach",
    focus: "Check-out en Orlando, viaje por autopista/tren Brightline hacia Miami, check-in, caminata por Ocean Drive y distrito Art Deco.",
    highlights: ["Traslado Orlando → Miami", "Check-in hotel en Miami Beach", "Caminata por Ocean Drive & Distrito Art Deco", "Atardecer frente al mar en South Beach"],
  },
  {
    date: "2027-05-01",
    dayName: "Sábado",
    dayShort: "Sáb",
    dayNumber: 1,
    month: 5,
    monthLabel: "May",
    tripDayIndex: 19,
    city: "Miami",
    label: "Miami · Wynwood & Bayside",
    type: "miami",
    title: "Miami: Wynwood Walls & Bayside Marketplace",
    focus: "Arte urbano y murales en Wynwood Walls por la mañana, almuerzo gastronómico y paseo en barco/compras en Bayside Marketplace y Downtown.",
    highlights: ["Wynwood Walls & Galerías de Arte Urbano", "Almuerzo en Wynwood Art District", "Bayside Marketplace & Paseo en barco por la bahía", "Skyline nocturno de Downtown Miami"],
  },
  {
    date: "2027-05-02",
    dayName: "Domingo",
    dayShort: "Dom",
    dayNumber: 2,
    month: 5,
    monthLabel: "May",
    tripDayIndex: 20,
    city: "Miami",
    label: "Miami · Key Biscayne & Shopping",
    type: "miami",
    title: "Miami: Key Biscayne, Design District & Cena Despedida",
    focus: "Naturaleza en Key Biscayne (faro de Bill Baggs), compras en Design District o Dolphin Mall y cena especial de despedida en Miami.",
    highlights: ["Key Biscayne (Parque Bill Baggs Cape Florida)", "Miami Design District & Lincoln Road Mall", "Cena de despedida del viaje en Miami"],
  },
  {
    date: "2027-05-03",
    dayName: "Lunes",
    dayShort: "Lun",
    dayNumber: 3,
    month: 5,
    monthLabel: "May",
    tripDayIndex: 21,
    city: "Miami → Bs As",
    label: "Viaje Miami a Bs As",
    type: "transit",
    title: "Vuelo Internacional Miami a Buenos Aires",
    focus: "Últimas compras por la mañana, traslado al Aeropuerto Internacional de Miami (MIA) y embarque en el vuelo nocturno hacia Argentina.",
    highlights: ["Check-out en Miami", "Aeropuerto Internacional de Miami (MIA)", "Vuelo internacional de regreso hacia Buenos Aires"],
  },
  {
    date: "2027-05-04",
    dayName: "Martes",
    dayShort: "Mar",
    dayNumber: 4,
    month: 5,
    monthLabel: "May",
    tripDayIndex: 22,
    city: "Bs As → San Luis",
    label: "Llegada a Bs As y Viaje a SL",
    type: "transit",
    title: "Llegada a Buenos Aires & Conexión a San Luis",
    focus: "Arribo al Aeropuerto de Ezeiza, trámites de aduana, conexión terrestre/aérea rumbo a la provincia de San Luis.",
    highlights: ["Arribo a Ezeiza (EZE), Buenos Aires", "Conexión y traslado rumbo a San Luis"],
  },
  {
    date: "2027-05-05",
    dayName: "Miércoles",
    dayShort: "Mié",
    dayNumber: 5,
    month: 5,
    monthLabel: "May",
    tripDayIndex: 23,
    city: "San Luis",
    label: "Llegada a SL / Fin",
    type: "transit",
    title: "Llegada a San Luis · Fin del Viaje",
    focus: "Llegada a los hogares en San Luis con el equipaje lleno de recuerdos y cierre de una experiencia inolvidable en familia.",
    highlights: ["Llegada final a San Luis", "Cierre y balance del viaje EEUU 2027"],
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

export type TripWindowCell = {
  date: string; // YYYY-MM-DD
  dayNumber: number;
  month: number;
  monthLabel: string;
  dayName: string;
  dayShort: string;
  isTripDay: boolean;
  weekIndex: number; // 0, 1, 2, 3
  entry?: CalendarDay;
};

/** Exact 4-week window covering 12/04/2027 to 09/05/2027 (28 days, Mon-Sun) */
export function buildTripWindowGrid(): TripWindowCell[] {
  const cells: TripWindowCell[] = [];
  const startDate = new Date(Date.UTC(2027, 3, 12)); // 12 April 2027 (Monday)

  const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const dayShorts = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  for (let i = 0; i < 28; i++) {
    const d = new Date(startDate.getTime() + i * 86400000);
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    const dayOfWeek = d.getUTCDay();
    const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const entry = getDayByDate(iso);

    cells.push({
      date: iso,
      dayNumber: day,
      month,
      monthLabel: monthShortEs[month],
      dayName: dayNames[dayOfWeek],
      dayShort: dayShorts[dayOfWeek],
      isTripDay: Boolean(entry),
      weekIndex: Math.floor(i / 7),
      entry,
    });
  }
  return cells;
}
