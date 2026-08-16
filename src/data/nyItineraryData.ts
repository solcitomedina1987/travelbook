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
  price?: string;
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
  plazaHotel:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_Plaza_Hotel_NYC_edit1.jpg/1280px-The_Plaza_Hotel_NYC_edit1.jpg",
  gapstowBridge:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Gapstow_Bridge_%2850989%29.jpg/1280px-Gapstow_Bridge_%2850989%29.jpg",
  umpireRock:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rat_Rock_%2848123018861%29.jpg/1280px-Rat_Rock_%2848123018861%29.jpg",
  carousel:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Central_Park_Carousel%2C_NYC_%2832560877990%29.jpg/1280px-Central_Park_Carousel%2C_NYC_%2832560877990%29.jpg",
  sheepMeadow:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sheep_Meadow_-_Central_Park_-_New_York_City.jpg/1280px-Sheep_Meadow_-_Central_Park_-_New_York_City.jpg",
  cherryHill:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cherry_Hill_Fountain_in_Central_Park.jpg/1280px-Cherry_Hill_Fountain_in_Central_Park.jpg",
  pilgrimHill:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Pilgrim_statue_Central_Park_01.jpg/1280px-Pilgrim_statue_Central_Park_01.jpg",
  theRamble:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Ramble_in_Central_Park_-_autumn.jpg/1280px-The_Ramble_in_Central_Park_-_autumn.jpg",
  greatLawn:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Great_Lawn%2C_Central_Park_NY_edit1.jpg/1280px-Great_Lawn%2C_Central_Park_NY_edit1.jpg",
  bikeRental:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
  friendsBuilding:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Friends_building_in_New_York.jpg/1280px-Friends_building_in_New_York.jpg",
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
        price: "Gratis",
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
        price: "$42 - $46 USD",
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
        price: "Gratis",
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
        price: "Gratis",
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
        price: "$40 - $44 USD",
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
        tip: "Cierre del día con las luces. Evitá restaurantes del cruce principal. Visitar cerca: Radio City Music Hall, M&M world, Toys 'R' Us, Central Perk, etc",
        note: "Noche",
        price: "Gratis",
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
      name: "Midtown & Hudson Yards & The Vessel",
      providerHint: "Freetour.com / GuruWalk / New York Free Walking Tour",
      meetingArea: "Cerca de Empire State / Herald Square",
      duration: "2–2.5 h",
    },
    stops: [
      {
        id: "d2-0",
        order: 1,
        name: "Free Tour · Midtown & Hudson Yards & The Vessel",
        time: "10:00",
        lat: 40.7486,
        lng: -73.988,
        imageUrl: wiki.freeTour,
        walkFromPrev: null,
        tip: "Reservá cupo online (tips al guía). Punto de encuentro cerca de Herald Square / ESB.",
        note: "Free Tour",
        isFreeTour: true,
        price: "$25 USD (Propina sugerida)",
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
        price: "$44 USD",
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
        price: "Gratis (Exterior)",
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
        price: "Gratis (The Edge opt. $40)",
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
        price: "Gratis",
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
        price: "Pago por consumo",
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
        price: "Gratis",
      },
    ],
  },
  {
    id: "day-3",
    tabLabel: "Día 3 (17/04)",
    dateLabel: "17 de Abril de 2027",
    dayName: "Sábado",
    title: "Central Park en Bici & Museo de Historia Natural",
    summary:
      "Alquiler de bicis a las 8:00 hs, circuito completo por Central Park en bici a partir de las 9:00 hs, devolución al mediodía y tarde extendida en el AMNH y Upper West Side.",
    distanceKm: "~8 km (bici + a pie)",
    theme: "Central Park en Bici · AMNH · UWS",
    startHint: "Alquiler de bicis 08:00 hs",
    stops: [
      {
        id: "d3-1",
        order: 1,
        name: "Bike Rental Central Park (Retiro de bicicletas)",
        time: "08:00",
        lat: 40.7654,
        lng: -73.9798,
        imageUrl: wiki.bikeRental,
        walkFromPrev: null,
        tip: "Retiro de bicicletas a las 8:00 AM (Zona The Plaza Hotel)para ingresar al parque puntuales a las 9:00 AM. https://bikerent.nyc/locations",
        note: "Inicio 08:00 hs · Bicis",
        price: "$20 - $25 USD (3-4 hs)",
      },
      {
        id: "d3-2",
        order: 2,
        name: "The Plaza Hotel (Mi Pobre Angelito 2)",
        time: "09:00",
        lat: 40.7645,
        lng: -73.9744,
        imageUrl: wiki.plazaHotel,
        walkFromPrev: "🚲 5 min en bici desde el rental hacia 5th Ave & 59th St",
        tip: "El mítico hotel de 'Mi Pobre Angelito 2: Perdido en Nueva York'. Foto clásica en la fachada antes de ingresar al parque por Grand Army Plaza.",
        note: "Cine · Mi Pobre Angelito",
        price: "Gratis (Exterior)",
      },
      {
        id: "d3-3",
        order: 3,
        name: "Gapstow Bridge (Puente de Mi Pobre Angelito)",
        time: "09:15",
        lat: 40.7667,
        lng: -73.9734,
        imageUrl: wiki.gapstowBridge,
        walkFromPrev: "🚲 3 min en bici (300 m) sobre The Pond",
        tip: "El icónico puente de piedra sobre el estanque donde Kevin se encuentra con la mujer de las palomas. Vista postal con The Plaza de fondo.",
        note: "Cine · Spot icónico",
        price: "Gratis",
      },
      {
        id: "d3-4",
        order: 4,
        name: "Umpire Rock (Rat Rock)",
        time: "09:35",
        lat: 40.7687,
        lng: -73.9774,
        imageUrl: wiki.umpireRock,
        walkFromPrev: "🚲 5 min en bici (600 m) cruzando hacia el sudoeste",
        tip: "Enorme formación rocosa de esquisto de Manhattan con excelentes vistas panorámicas de los rascacielos de Central Park South y Midtown.",
        price: "Gratis",
      },
      {
        id: "d3-5",
        order: 5,
        name: "Central Park Carousel",
        time: "09:55",
        lat: 40.7705,
        lng: -73.9744,
        imageUrl: wiki.carousel,
        walkFromPrev: "🚲 4 min en bici (450 m)",
        tip: "Histórico carrusel de 1908 con 57 caballos tallados a mano y órgano de música mecánica tradicional.",
        price: "$3.50 USD",
      },
      {
        id: "d3-6",
        order: 6,
        name: "Sheep Meadow",
        time: "10:10",
        lat: 40.7725,
        lng: -73.9752,
        imageUrl: wiki.sheepMeadow,
        walkFromPrev: "🚲 3 min en bici (350 m)",
        tip: "6 hectáreas de pradera abierta perfecta para descansar y admirar el contraste de la naturaleza con los rascacielos de Billionaires' Row.",
        price: "Gratis",
      },
      {
        id: "d3-7",
        order: 7,
        name: "Strawberry Fields (Mosaico Imagine)",
        time: "10:30",
        lat: 40.7756,
        lng: -73.975,
        imageUrl: u("photo-1568515387631-8b650bbcdb90"),
        walkFromPrev: "🚲 4 min en bici (400 m) hacia 72nd St West",
        tip: "Memorial a John Lennon frente al histórico edificio Dakota. Zona de meditación y música en vivo con el mosaico de 'Imagine'.",
        note: "Memorial",
        price: "Gratis",
      },
      {
        id: "d3-8",
        order: 8,
        name: "Cherry Hill (Fuente y vista al Lago)",
        time: "10:50",
        lat: 40.7745,
        lng: -73.973,
        imageUrl: wiki.cherryHill,
        walkFromPrev: "🚲 3 min en bici (300 m)",
        tip: "Mirador circular con su clásica fuente ornamental victoriana diseñada originalmente como bebedero de caballos; postal directa hacia The Lake.",
        price: "Gratis",
      },
      {
        id: "d3-9",
        order: 9,
        name: "Bow Bridge",
        time: "11:05",
        lat: 40.7759,
        lng: -73.9718,
        imageUrl: wiki.bowBridge,
        walkFromPrev: "🚲 3 min en bici / a pie (250 m)",
        tip: "El puente de hierro fundido más romántico y fotografiado de Central Park, uniendo Cherry Hill con The Ramble sobre el lago.",
        note: "Spot fotográfico",
        price: "Gratis",
      },
      {
        id: "d3-10",
        order: 10,
        name: "Bethesda Terrace & Fountain (Ángel de las Aguas)",
        time: "11:20",
        lat: 40.7738,
        lng: -73.971,
        imageUrl: u("photo-1496442226666-8d4d0e62e6e9"),
        walkFromPrev: "🚲 3 min en bici (250 m)",
        tip: "El corazón de Central Park: arcada con azulejos Minton, la fuente del Ángel de las Aguas y el paseo The Mall.",
        price: "Gratis",
      },
      {
        id: "d3-11",
        order: 11,
        name: "Pilgrim Hill",
        time: "11:45",
        lat: 40.773,
        lng: -73.968,
        imageUrl: wiki.pilgrimHill,
        walkFromPrev: "🚲 4 min en bici (400 m) hacia el lado Este (East 72nd St)",
        tip: "Hermosa colina suave con la estatua del Peregrino de 1885 y vistas abiertas cerca de Conservatory Water.",
        price: "Gratis",
      },
      {
        id: "d3-12",
        order: 12,
        name: "The Ramble (Bosque silvestre)",
        time: "12:00",
        lat: 40.7778,
        lng: -73.9712,
        imageUrl: wiki.theRamble,
        walkFromPrev: "🚲 5 min hacia el norte del lago (500 m)",
        tip: "15 hectáreas de bosque denso y laberíntico con arroyos, senderos de tierra y avistamiento de aves.",
        price: "Gratis",
      },
      {
        id: "d3-13",
        order: 13,
        name: "Castillo Belvedere & Shakespeare Garden",
        time: "12:20",
        lat: 40.7794,
        lng: -73.9692,
        imageUrl: wiki.belvedere,
        walkFromPrev: "🚲 4 min en bici (400 m)",
        tip: "Castillo de estilo victoriano de 1869 en lo alto de Vista Rock con las mejores vistas panorámicas de The Great Lawn y Turtle Pond.",
        note: "Castillo · Vistas",
        price: "Gratis",
      },
      {
        id: "d3-14",
        order: 14,
        name: "The Great Lawn",
        time: "12:35",
        lat: 40.7815,
        lng: -73.9675,
        imageUrl: wiki.greatLawn,
        walkFromPrev: "🚲 3 min en bici (300 m)",
        tip: "Enorme césped central de 22 hectáreas donde se realizan los clásicos conciertos al aire libre de la Filarmónica de NY.",
        price: "Gratis",
      },
      {
        id: "d3-15",
        order: 15,
        name: "Devolución de bicicletas (Bike Rental)",
        time: "13:00",
        lat: 40.7654,
        lng: -73.9798,
        imageUrl: wiki.bikeRental,
        walkFromPrev: "🚲 15–20 min pedaleando por West Drive de regreso al rental en la zona del Museo de Historia Natural",
        tip: "Entrega de bicicletas y cascos. Tiempo libre para almuerzo rápido camino al museo.",
        note: "Devolución bicis",
        price: "Incluido en alquiler",
      },
      {
        id: "d3-16",
        order: 16,
        name: "Museo Americano de Historia Natural (AMNH)",
        time: "13:45",
        lat: 40.7813,
        lng: -73.974,
        imageUrl: u("photo-1566127444979-b3d2b654e3d7"),
        walkFromPrev: "🚇 Metro C/B o 🚶 15 min por Central Park West",
        tip: "Entrada alrededor de las 13:45 hs para aprovechar ~3.5 horas completas. Salas imperdibles: Dinosaurios, Ballena Azul y Planetario Hayden (Gilder Center).",
        note: "Visita principal (3.5 h)",
        price: "$28 USD",
      },
      {
        id: "d3-17",
        order: 17,
        name: "Recorrido Upper West Side",
        time: "17:15",
        lat: 40.779,
        lng: -73.9825,
        imageUrl: u("photo-1441986300917-64674bd600d8"),
        walkFromPrev: "🚶 6 min a pie (400 m) al salir del museo",
        tip: "Calles residenciales arboladas, clásicos brownstones y paseo por Amsterdam y Columbus Avenue.",
        price: "Gratis",
      },
      {
        id: "d3-18",
        order: 18,
        name: "Levain Bakery o Zabar's (Merienda / Café)",
        time: "18:00",
        lat: 40.7798,
        lng: -73.9801,
        imageUrl: u("photo-1555507036-ab1f4038808a"),
        walkFromPrev: "🚶 5 min a pie (350 m)",
        tip: "Las famosas cookies tibias de Levain Bakery (W 74th St) o el deli tradicional Zabar's (Broadway & 80th).",
        note: "Café / Merienda",
        price: "Pago por consumo (~$5 USD)",
      },
    ],
  },
  {
    id: "day-4",
    tabLabel: "Día 4 (18/04)",
    dateLabel: "18 de Abril de 2027",
    dayName: "Domingo",
    title: "Friends Building, Wall Street, Estatua de la Libertad & Memorial 11-S",
    summary:
      "Arranque en Friends (Greenwich Village), Wall Street matutino, ferry a la Estatua de la Libertad, Free Tour del Financial District por la tarde, Memorial 11-S y cierre optativo en One World Observatory.",
    distanceKm: "~4.5 km a pie (+ metro y ferry)",
    theme: "Friends · Wall St · Estatua Libertad · 11-S",
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
        name: "Friends Apartment Building (Greenwich Village)",
        time: "08:15",
        lat: 40.7324,
        lng: -74.0054,
        imageUrl: wiki.friendsBuilding,
        walkFromPrev: null,
        tip: "El famoso edificio del departamento de Monica, Rachel, Chandler y Joey (esquina Bedford St & Grove St en Greenwich Village). En la planta baja está 'The Little Owl'. Desde allí, tomar metro Línea 1 en Christopher St hacia Wall St.",
        note: "Serie Friends · Inicio 08:15",
        price: "Gratis (Exterior)",
      },
      {
        id: "d4-1",
        order: 2,
        name: "Wall Street · Charging Bull, NYSE & Trinity Church",
        time: "09:00",
        lat: 40.7075,
        lng: -74.0113,
        imageUrl: wiki.wallStreet,
        walkFromPrev: "🚇 Metro Línea 1 desde Christopher St hasta Rector St / Wall St (~15 min)",
        tip: "Paseo matutino por el corazón financiero: foto en Charging Bull antes de las filas, fachada de la Bolsa (NYSE) y la histórica Trinity Church.",
        note: "Distrito Financiero",
        price: "Gratis",
      },
      {
        id: "d4-2",
        order: 3,
        name: "Battery Park (embarcadero)",
        time: "10:15",
        lat: 40.7033,
        lng: -74.017,
        imageUrl: wiki.batteryPark,
        walkFromPrev: "🚶 8 min a pie (600 m) al sur por Broadway",
        tip: "Caminata al extremo sur hacia Castle Clinton para el control de seguridad y embarque del ferry de Statue City Cruises.",
        price: "Gratis (Acceso)",
      },
      {
        id: "d4-3",
        order: 4,
        name: "Estatua de la Libertad & Ellis Island",
        time: "10:45",
        lat: 40.6892,
        lng: -74.0445,
        imageUrl: wiki.statueOfLiberty,
        walkFromPrev: "⛴️ Ferry oficial desde Battery (~15–20 min)",
        tip: "Ticket oficial Statue City Cruises. Paseo en barco con desembarco en Liberty Island y Museo de Inmigración en Ellis Island. Regreso a Battery ~13:30 hs.",
        note: "Ferry & Monumento",
        price: "$25.50 - $31.50 USD",
      },
      {
        id: "d4-4",
        order: 5,
        name: "Free Tour · Distrito Financiero & 11/09",
        time: "14:00",
        lat: 40.7056,
        lng: -74.0134,
        imageUrl: wiki.freeTour,
        walkFromPrev: "🚶 5 min a pie (400 m) desde Battery Park hacia el punto de encuentro",
        tip: "Free tour guiado a pie por la tarde conectando la historia de New Amsterdam, George Washington, Wall Street y los eventos del 11 de Septiembre.",
        note: "Free Tour",
        isFreeTour: true,
        price: "$25 USD (Propina sugerida)",
      },
      {
        id: "d4-5",
        order: 6,
        name: "Memorial 11-S · Museo & Oculus",
        time: "16:15",
        lat: 40.7115,
        lng: -74.0134,
        imageUrl: wiki.memorial911,
        walkFromPrev: "🚶 3 min a pie desde el final del tour",
        tip: "Momento de reflexión en las piscinas conmemorativas North y South Pools (acceso libre). Visita a la arquitectura futurista de The Oculus (Santiago Calatrava).",
        note: "Memorial & Oculus",
        price: "Gratis (Museo optativo $33 USD)",
      },
      {
        id: "d4-6",
        order: 7,
        name: "One World Observatory (Opcional)",
        time: "18:00",
        lat: 40.7127,
        lng: -74.0134,
        imageUrl: u("photo-1496442226666-8d4d0e62e6e9"),
        walkFromPrev: "🚶 2 min a pie (150 m)",
        tip: "Observatorio en el piso 102 con vistas 360° panorámicas al atardecer. Opcional si ya se subió a otros miradores de la ciudad.",
        note: "Opcional · Atardecer",
        price: "$44 USD (Opcional)",
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
        price: "$25 USD (Propina sugerida)",
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
        price: "Gratis",
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
        price: "Gratis",
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
        price: "Gratis (Jane's Carousel $3 USD)",
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
        price: "Pago por consumo",
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
        price: "Gratis (Metro/Ferry $2.90 USD)",
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
        price: "Pago por consumo (~$20-25 USD)",
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
