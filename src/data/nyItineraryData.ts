export type NycStop = {
  id: string;
  order: number;
  name: string;
  time: string;
  lat: number;
  lng: number;
  imageUrl: string;
  walkFromPrev: string | null;
  tip: string;
  note?: string;
  isFreeTour?: boolean;
  dayId?: string;
  dayLabel?: string;
  pinColor?: string;
};

export type NycFreeTour = {
  name: string;
  providerHint: string;
  meetingArea: string;
  duration: string;
};

export type NycDay = {
  id: string;
  tabLabel: string;
  dateLabel: string;
  dayName: string;
  title: string;
  summary: string;
  distanceKm: string;
  theme: string;
  startHint?: string;
  freeTour?: NycFreeTour;
  stops: NycStop[];
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Stable Wikimedia Commons thumbs (verified 200) */
const wiki = {
  grandCentral:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg/1280px-Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg",
  highLine:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/High_Line_New_York_August_2013.jpg/1280px-High_Line_New_York_August_2013.jpg",
  bowBridge:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bow_Bridge_over_the_Lake%2C_Central_Park%2C_Manhattan%2C_New_York.jpg/1280px-Bow_Bridge_over_the_Lake%2C_Central_Park%2C_Manhattan%2C_New_York.jpg",
  belvedere:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Belvedere_Castle%2C_Central_Park.jpg/1280px-Belvedere_Castle%2C_Central_Park.jpg",
  freeTour:
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80",
  memorial911:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/North_reflecting_pool_of_the_National_September_11_Memorial%2C_New_York_City.jpg/1280px-North_reflecting_pool_of_the_National_September_11_Memorial%2C_New_York_City.jpg",
  batteryPark:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Battery_Park_from_New_York_Harbor_01_%289441158603%29.jpg/1280px-Battery_Park_from_New_York_Harbor_01_%289441158603%29.jpg",
  statueOfLiberty:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/1280px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg",
  dumboWashington:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Manhattan_Bridge_and_Empire_State_Building_from_Washington_Street%2C_Dumbo%2C_Brooklyn%2C_New_York.jpg/1280px-Manhattan_Bridge_and_Empire_State_Building_from_Washington_Street%2C_Dumbo%2C_Brooklyn%2C_New_York.jpg",
  brooklynBridge:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Brooklyn_Bridge_as_viewed_from_pedestrian_walkway.jpg/1280px-Brooklyn_Bridge_as_viewed_from_pedestrian_walkway.jpg",
  brooklynHeights:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Brooklyn_Heights_Promenade_December_2021.jpg/1280px-Brooklyn_Heights_Promenade_December_2021.jpg",
  janesCarousel:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jane%27s_Carousel_2019_%28Manhattan_Bridge_in_background%29.jpg/1280px-Jane%27s_Carousel_2019_%28Manhattan_Bridge_in_background%29.jpg",
  wallStreet:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wall_Street_-_New_York_Stock_Exchange.jpg/1280px-Wall_Street_-_New_York_Stock_Exchange.jpg",
} as const;

/** One distinct color per itinerary day (Mapa General) */
export const nycDayColors: Record<string, string> = {
  "day-1": "#0284C7", // sky — Midtown Central
  "day-2": "#0D9488", // teal — Midtown West / High Line
  "day-3": "#059669", // emerald — Central Park
  "day-4": "#D97706", // gold — Lower Manhattan
  "day-5": "#7C3AED", // violet — Brooklyn
};

export const nycDays: NycDay[] = [
  {
    id: "day-1",
    tabLabel: "Día 1 (15/04)",
    dateLabel: "15 de Abril de 2027",
    dayName: "Jueves",
    title: "Llegada & Midtown Central",
    summary:
      "Arranque a las 14:30: circuito compacto Grand Central → Rockefeller → Times Square de noche.",
    distanceKm: "~3.2 km",
    theme: "Llegada · Midtown caminable",
    startHint: "Inicio 14:30 hs",
    stops: [
      {
        id: "d1-1",
        order: 1,
        name: "Grand Central Terminal",
        time: "14:30",
        lat: 40.7527,
        lng: -73.9772,
        imageUrl: wiki.grandCentral,
        walkFromPrev: null,
        tip: "Punto de inicio. Main Concourse y techo astronómico (~20–30 min).",
        note: "Inicio 14:30",
      },
      {
        id: "d1-2",
        order: 2,
        name: "The SUMMIT One Vanderbilt",
        time: "15:15",
        lat: 40.753,
        lng: -73.9786,
        imageUrl: u("photo-1496442226666-8d4d0e62e6e9"),
        walkFromPrev: "🚶 3 min a pie (200 m)",
        tip: "Pegado a Grand Central. Ticket timed; ventanas inmersivas con vista a Midtown.",
      },
      {
        id: "d1-3",
        order: 3,
        name: "NY Public Library & Bryant Park",
        time: "16:30",
        lat: 40.7532,
        lng: -73.9822,
        imageUrl: u("photo-1520250497591-112f2f40a3f4"),
        walkFromPrev: "🚶 6 min a pie (450 m)",
        tip: "Leones Patience & Fortitude + cruce a Bryant Park para un café corto.",
      },
      {
        id: "d1-4",
        order: 4,
        name: "5ta Avenida (hacia Rockefeller)",
        time: "17:15",
        lat: 40.758,
        lng: -73.9776,
        imageUrl: u("photo-1441986300917-64674bd600d8"),
        walkFromPrev: "🚶 10 min a pie (750 m)",
        tip: "Caminata al norte por 5th Ave hasta Rockefeller Center.",
      },
      {
        id: "d1-5",
        order: 5,
        name: "Top of the Rock",
        time: "18:00",
        lat: 40.759,
        lng: -73.9795,
        imageUrl: u("photo-1518391846015-55a9cc003b25"),
        walkFromPrev: "🚶 4 min a pie (300 m)",
        tip: "Mejor vista al Empire State. Ideal con luz de atardecer.",
        note: "Atardecer",
      },
      {
        id: "d1-6",
        order: 6,
        name: "Times Square de Noche",
        time: "20:00",
        lat: 40.758,
        lng: -73.9855,
        imageUrl: u("photo-1534430480872-3498386e7856"),
        walkFromPrev: "🚶 8 min a pie (600 m)",
        tip: "Cierre del día con las luces. Evitá restaurantes del cruce principal.",
        note: "Noche",
      },
    ],
  },
  {
    id: "day-2",
    tabLabel: "Día 2 (16/04)",
    dateLabel: "16 de Abril de 2027",
    dayName: "Viernes",
    title: "Midtown West, High Line & Hudson Yards",
    summary:
      "De Empire State a Little Island por Hudson Yards y la High Line — todo a pie.",
    distanceKm: "~5.5 km",
    theme: "West Side elevado + skyline",
    freeTour: {
      name: "Midtown & Hudson Yards",
      providerHint: "Freetour.com / GuruWalk / New York Free Walking Tour",
      meetingArea: "Cerca de Empire State / Herald Square",
      duration: "2–2.5 h",
    },
    stops: [
      {
        id: "d2-0",
        order: 1,
        name: "Free Tour · Midtown & Hudson Yards",
        time: "10:00",
        lat: 40.7486,
        lng: -73.988,
        imageUrl: wiki.freeTour,
        walkFromPrev: null,
        tip: "Reservá cupo online (tips al guía). Punto de encuentro cerca de Herald Square / ESB.",
        note: "Free Tour",
        isFreeTour: true,
      },
      {
        id: "d2-1",
        order: 2,
        name: "Empire State Building",
        time: "12:30",
        lat: 40.7484,
        lng: -73.9857,
        imageUrl: u("photo-1546436836-07a91091f160"),
        walkFromPrev: "🚶 4 min a pie (300 m)",
        tip: "Si preferís vista de noche, podés posponer y priorizar High Line de día.",
      },
      {
        id: "d2-2",
        order: 3,
        name: "Madison Square Garden & Penn Station",
        time: "14:00",
        lat: 40.7505,
        lng: -73.9934,
        imageUrl: u("photo-1477959858617-67f85cf4f1df"),
        walkFromPrev: "🚶 10 min a pie (750 m)",
        tip: "Pasá por el exterior/lobby camino a Hudson Yards.",
      },
      {
        id: "d2-3",
        order: 4,
        name: "Hudson Yards & The Vessel",
        time: "14:45",
        lat: 40.7538,
        lng: -74.0022,
        imageUrl: u("photo-1514565131-fce0801e5785"),
        walkFromPrev: "🚶 12 min a pie (850 m)",
        tip: "The Edge opcional. Subí a la High Line desde aquí hacia el sur.",
      },
      {
        id: "d2-4",
        order: 5,
        name: "High Line Park",
        time: "15:45",
        lat: 40.748,
        lng: -74.0048,
        imageUrl: wiki.highLine,
        walkFromPrev: "🚶 Acceso High Line desde Hudson Yards (~5 min)",
        tip: "Caminá elevada hacia Chelsea / Meatpacking (~25–40 min con fotos).",
      },
      {
        id: "d2-5",
        order: 6,
        name: "Chelsea Market & Meatpacking District",
        time: "17:00",
        lat: 40.7424,
        lng: -74.0061,
        imageUrl: u("photo-1555507036-ab1f4038808a"),
        walkFromPrev: "🚶 12 min por High Line (900 m)",
        tip: "Snack o late lunch en Chelsea Market; Meatpacking queda al bajar.",
      },
      {
        id: "d2-6",
        order: 7,
        name: "Little Island",
        time: "18:30",
        lat: 40.7421,
        lng: -74.0101,
        imageUrl: u("photo-1507525428034-b723cf961d3e"),
        walkFromPrev: "🚶 8 min a pie (600 m)",
        tip: "Cierre con vistas al Hudson. Ideal al atardecer.",
        note: "Atardecer",
      },
    ],
  },
  {
    id: "day-3",
    tabLabel: "Día 3 (17/04)",
    dateLabel: "17 de Abril de 2027",
    dayName: "Sábado",
    title: "Central Park & Upper West Side",
    summary:
      "Free tour + circuito icónico del parque hacia el AMNH y cafeterías del Upper West.",
    distanceKm: "~5 km",
    theme: "Parque · museo · UWS",
    freeTour: {
      name: "Central Park & Upper West Side",
      providerHint: "Freetour.com / Central Park Free Tour",
      meetingArea: "Columbus Circle / W 59th St",
      duration: "2–2.5 h",
    },
    stops: [
      {
        id: "d3-0",
        order: 1,
        name: "Free Tour · Central Park & Upper West Side",
        time: "10:00",
        lat: 40.7681,
        lng: -73.9819,
        imageUrl: wiki.freeTour,
        walkFromPrev: null,
        tip: "Encuentro habitual en Columbus Circle. Confirmá punto exacto al reservar.",
        note: "Free Tour",
        isFreeTour: true,
      },
      {
        id: "d3-1",
        order: 2,
        name: "Strawberry Fields (Imagine)",
        time: "12:30",
        lat: 40.7756,
        lng: -73.975,
        imageUrl: u("photo-1568515387631-8b650bbcdb90"),
        walkFromPrev: "🚶 15 min a pie (1.1 km) desde Columbus Circle",
        tip: "Entrada por 72nd St / West Drive.",
        note: "Central Park",
      },
      {
        id: "d3-2",
        order: 3,
        name: "Bow Bridge",
        time: "13:00",
        lat: 40.7759,
        lng: -73.9718,
        imageUrl: wiki.bowBridge,
        walkFromPrev: "🚶 6 min a pie (450 m)",
        tip: "Foto clásica sobre el lago; seguí hacia Bethesda.",
        note: "Central Park",
      },
      {
        id: "d3-3",
        order: 4,
        name: "Bethesda Terrace / Fountain & The Mall",
        time: "13:30",
        lat: 40.7738,
        lng: -73.971,
        imageUrl: u("photo-1496442226666-8d4d0e62e6e9"),
        walkFromPrev: "🚶 5 min a pie (350 m)",
        tip: "Terraza + fuente + The Mall (calle arbolada).",
        note: "Central Park",
      },
      {
        id: "d3-4",
        order: 5,
        name: "Belvedere Castle & Shakespeare Garden",
        time: "14:15",
        lat: 40.7794,
        lng: -73.9692,
        imageUrl: wiki.belvedere,
        walkFromPrev: "🚶 12 min a pie (900 m)",
        tip: "Vistas al Great Lawn antes de salir hacia UWS.",
        note: "Central Park",
      },
      {
        id: "d3-5",
        order: 6,
        name: "Museo Americano de Historia Natural",
        time: "15:00",
        lat: 40.7813,
        lng: -73.974,
        imageUrl: u("photo-1566127444979-b3d2b654e3d7"),
        walkFromPrev: "🚶 8 min a pie (550 m)",
        tip: "Priorizá 2–3 salas. Timed ticket recomendado.",
      },
      {
        id: "d3-6",
        order: 7,
        name: "Recorrido Upper West Side",
        time: "17:00",
        lat: 40.779,
        lng: -73.9825,
        imageUrl: u("photo-1441986300917-64674bd600d8"),
        walkFromPrev: "🚶 6 min a pie (400 m)",
        tip: "Calles residenciales, brownstones y Amsterdam / Columbus Ave.",
      },
      {
        id: "d3-7",
        order: 8,
        name: "Levain Bakery o Zabar's",
        time: "17:45",
        lat: 40.7798,
        lng: -73.9801,
        imageUrl: u("photo-1555507036-ab1f4038808a"),
        walkFromPrev: "🚶 5 min a pie (350 m)",
        tip: "Cookie Levain (74th) o deli Zabar's (Broadway) — clásicos UWS.",
        note: "Café",
      },
    ],
  },
  {
    id: "day-4",
    tabLabel: "Día 4 (18/04)",
    dateLabel: "18 de Abril de 2027",
    dayName: "Domingo",
    title: "Lower Manhattan & Distrito Financiero",
    summary:
      "Free tour del Financial District, ferry a Liberty/Ellis y cierre en One World.",
    distanceKm: "~3.5 km a pie (+ ferry)",
    theme: "Historia · downtown · observatorio",
    freeTour: {
      name: "Distrito Financiero & 11/09",
      providerHint: "Freetour.com / Wall Street Free Tour",
      meetingArea: "Charging Bull / Bowling Green",
      duration: "2 h",
    },
    stops: [
      {
        id: "d4-0",
        order: 1,
        name: "Free Tour · Distrito Financiero & 11/09",
        time: "09:00",
        lat: 40.7056,
        lng: -74.0134,
        imageUrl: wiki.freeTour,
        walkFromPrev: null,
        tip: "Empezá temprano en Bowling Green / Charging Bull. Luego bajá a Battery para el ferry.",
        note: "Free Tour",
        isFreeTour: true,
      },
      {
        id: "d4-1",
        order: 2,
        name: "Battery Park (embarcadero)",
        time: "11:15",
        lat: 40.7033,
        lng: -74.017,
        imageUrl: wiki.batteryPark,
        walkFromPrev: "🚶 8 min a pie (600 m)",
        tip: "Ticket oficial Statue City Cruises. Seguridad tipo aeropuerto.",
      },
      {
        id: "d4-2",
        order: 3,
        name: "Estatua de la Libertad & Ellis Island",
        time: "11:45",
        lat: 40.6892,
        lng: -74.0445,
        imageUrl: wiki.statueOfLiberty,
        walkFromPrev: "⛴️ Ferry desde Battery (~15–20 min)",
        tip: "Sin pedestal/corona igual vale la pena. Volvé con margen a downtown.",
      },
      {
        id: "d4-3",
        order: 4,
        name: "Wall Street · Charging Bull, NYSE & Trinity Church",
        time: "15:00",
        lat: 40.7075,
        lng: -74.0113,
        imageUrl: wiki.wallStreet,
        walkFromPrev: "⛴️ Regreso + 🚶 10 min (700 m)",
        tip: "NYSE solo fachada; Trinity Church a 2 cuadras de Wall St.",
      },
      {
        id: "d4-4",
        order: 5,
        name: "Memorial 11-S · Museo & Oculus",
        time: "16:15",
        lat: 40.7115,
        lng: -74.0134,
        imageUrl: wiki.memorial911,
        walkFromPrev: "🚶 8 min a pie (600 m)",
        tip: "Pools del Memorial gratis. Museo con ticket; Oculus para fotos/baño.",
      },
      {
        id: "d4-5",
        order: 6,
        name: "One World Observatory",
        time: "18:00",
        lat: 40.7127,
        lng: -74.0134,
        imageUrl: u("photo-1496442226666-8d4d0e62e6e9"),
        walkFromPrev: "🚶 3 min a pie (200 m)",
        tip: "Cierre con 360°. Ticket timed; mejor hacia el atardecer.",
        note: "Atardecer / noche",
      },
    ],
  },
  {
    id: "day-5",
    tabLabel: "Día 5 (19/04)",
    dateLabel: "19 de Abril de 2027",
    dayName: "Lunes",
    title: "Inmersión completa en Brooklyn",
    summary:
      "Puente de Brooklyn, Heights, DUMBO, Williamsburg y rooftop con skyline — día entero en BK.",
    distanceKm: "~7 km + metro/ferry a Williamsburg",
    theme: "DUMBO · Heights · Williamsburg",
    freeTour: {
      name: "DUMBO & Brooklyn Heights",
      providerHint: "Freetour.com / Brooklyn Free Walking Tour",
      meetingArea: "Entrada Brooklyn Bridge (lado Manhattan) o DUMBO",
      duration: "2–2.5 h",
    },
    stops: [
      {
        id: "d5-0",
        order: 1,
        name: "Free Tour · DUMBO & Brooklyn Heights",
        time: "10:00",
        lat: 40.7061,
        lng: -73.9969,
        imageUrl: wiki.freeTour,
        walkFromPrev: null,
        tip: "Muchos tours arrancan en la entrada del puente (Manhattan). Confirmá el pin.",
        note: "Free Tour",
        isFreeTour: true,
      },
      {
        id: "d5-1",
        order: 2,
        name: "Cruce a pie del Puente de Brooklyn",
        time: "10:15",
        lat: 40.7061,
        lng: -73.9969,
        imageUrl: wiki.brooklynBridge,
        walkFromPrev: "🚶 Inicio del paseo peatonal",
        tip: "25–40 min Manhattan → Brooklyn según fotos. Carril peatonal central.",
      },
      {
        id: "d5-2",
        order: 3,
        name: "Brooklyn Heights Promenade",
        time: "11:15",
        lat: 40.696,
        lng: -73.9972,
        imageUrl: wiki.brooklynHeights,
        walkFromPrev: "🚶 12 min a pie (900 m) desde salida del puente",
        tip: "Mirador clásico al skyline y al puente. Ideal antes o después de DUMBO.",
      },
      {
        id: "d5-3",
        order: 4,
        name: "DUMBO · Washington St, Jane's Carousel & Pebble Beach",
        time: "12:15",
        lat: 40.7033,
        lng: -73.9903,
        imageUrl: wiki.dumboWashington,
        walkFromPrev: "🚶 15 min a pie (1.1 km)",
        tip: "Foto en Washington St + carrusel + orilla (Pebble Beach).",
      },
      {
        id: "d5-4",
        order: 5,
        name: "Time Out Market DUMBO (almuerzo)",
        time: "13:30",
        lat: 40.7035,
        lng: -73.9914,
        imageUrl: wiki.janesCarousel,
        walkFromPrev: "🚶 3 min a pie (200 m)",
        tip: "Food hall con terraza. Buen punto para descansar antes de Williamsburg.",
        note: "Almuerzo",
      },
      {
        id: "d5-5",
        order: 6,
        name: "Williamsburg & Domino Park",
        time: "16:00",
        lat: 40.7145,
        lng: -73.967,
        imageUrl: u("photo-1514565131-fce0801e5785"),
        walkFromPrev: "🚇 L / ferry East River (~20–30 min) — evitar caminar todo",
        tip: "Domino Park sobre el East River. Calles de Bedford Ave para boutiques.",
      },
      {
        id: "d5-6",
        order: 7,
        name: "Rooftop · Westlight / Harriet's",
        time: "18:30",
        lat: 40.7221,
        lng: -73.9575,
        imageUrl: u("photo-1514933651103-005eec06c04b"),
        walkFromPrev: "🚶 12–15 min a pie (1 km) o short Uber",
        tip: "Cierre con skyline. Westlight (William Vale) o Harriet's — reservá mesa.",
        note: "Rooftop · cierre",
      },
    ],
  },
];

export function getAllNycStops(): NycStop[] {
  return nycDays.flatMap((day) =>
    day.stops.map((stop) => ({
      ...stop,
      dayId: day.id,
      dayLabel: day.tabLabel,
      pinColor: nycDayColors[day.id] ?? "#0F172A",
    })),
  );
}

export function getNycDayById(id: string): NycDay | undefined {
  return nycDays.find((d) => d.id === id);
}

export function getNycFreeTours() {
  return nycDays
    .filter((d) => d.freeTour)
    .map((d) => ({
      dayId: d.id,
      tabLabel: d.tabLabel,
      title: d.title,
      color: nycDayColors[d.id],
      freeTour: d.freeTour!,
    }));
}
