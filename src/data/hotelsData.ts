export interface HotelComparisonItem {
  id: string;
  name: string;
  selected?: boolean;
  tagline: string;
  address: string;
  timesSquareDistance: string;
  walkTimeMin: number;
  nearestSubway: string;
  subwayDistance: string;
  subwayLines: string[];
  googleRating: number;
  reviewsCount: string;
  miniFridge: {
    available: "included" | "on_request" | "not_available" | "extra_fee";
    label: string;
    detail: string;
  };
  coffeeMaker: {
    available: "included" | "by_category" | "not_available";
    label: string;
    detail: string;
  };
  acousticInsulation: {
    rating: "Excelente" | "Muy Buena" | "Buena" | "Aceptable" | "Regular / Deficiente";
    detail: string;
  };
  styleAtmosphere: string;
  priceTier: "$" | "$$" | "$$$" | "$$$$";
  priceNote: string;
  pros: string[];
  cons: string[];
  summary: string;
}

export const hotelSelectionRationale = {
  chosenHotelId: "courtyard-times-square",
  chosenHotelName: "Courtyard by Marriott New York Manhattan/Times Square",
  pillars: [
    {
      title: "1. Frigobar & Amenidades Garantizadas",
      summary:
        "Garantiza tanto frigobar (mini-nevera) como cafetera Keurig/estándar en todas las habitaciones sin costo adicional ni necesidad de solicitarlo previamente.",
      detail:
        "A diferencia de Moxy (sin frigobar ni cafetera), Aura (sujeto a disponibilidad o costo extra) o Millennium (bajo petición según categoría), Courtyard asegura estas comodidades esenciales de serie para guardar bebidas, alimentos y preparar café al comenzar cada jornada.",
    },
    {
      title: "2. Relación Precio-Calidad & Valor Económico",
      summary:
        "Tarifas significativamente más accesibles que Margaritaville Resort ofreciendo prestaciones ejecutivas de alta gama.",
      detail:
        "Brinda habitaciones notablemente más amplias que el formato micro-room de Moxy, camas de confort superior y ambiente ordenado, optimizando al máximo el presupuesto del viaje sin resignar confort ni espacio para equipaje.",
    },
    {
      title: "3. Ubicación Estratégica & Conectividad Peatonal/Metro",
      summary:
        "Ubicado estratégicamente entre dos de los nodos de transporte más importantes de Manhattan: 42 St - Bryant Park y Times Sq - 42 St.",
      detail:
        "Acceso peatonal directo a prácticamente todas las líneas del metro de NYC (1, 2, 3, 7, N, Q, R, W, B, D, F, M y S Shuttle) a solo 100-150 m, y a solo 2 cuadras cortas de Times Square pero resguardado del epicentro caótico y ruidoso.",
    },
    {
      title: "4. Insonorización Superior & Calidad de Descanso",
      summary:
        "Calificación destacada por huéspedes en aislamiento acústico y tranquilidad nocturna.",
      detail:
        "Permite un descanso reparador tras extensas caminatas diarias por la ciudad, contrastando positivamente con el ambiente de fiesta nocturna de Moxy (terraza Magic Hour) o la masividad y tránsito continuo de Millennium.",
    },
  ],
};

export const hotelsList: HotelComparisonItem[] = [
  {
    id: "courtyard-times-square",
    name: "Courtyard by Marriott New York Manhattan/Times Square",
    selected: true,
    tagline: "Hotel Seleccionado · Confort Ejecutivo, Frigobar Incluido & Doble Conexión de Metro",
    address: "114 W 40th St, New York, NY 10018",
    timesSquareDistance: "~150 m",
    walkTimeMin: 2,
    nearestSubway: "42 St - Bryant Park & Times Sq - 42 St",
    subwayDistance: "~100 m - 150 m",
    subwayLines: ["1", "2", "3", "7", "N", "Q", "R", "W", "B", "D", "F", "M", "S"],
    googleRating: 4.1,
    reviewsCount: "~1,650+ reseñas",
    miniFridge: {
      available: "included",
      label: "Sí (Incluido)",
      detail: "Mini-refrigerador de serie en todas las habitaciones sin costo extra.",
    },
    coffeeMaker: {
      available: "included",
      label: "Sí (Keurig/Estándar)",
      detail: "Cafetera Keurig individual con cápsulas de reposición diaria.",
    },
    acousticInsulation: {
      rating: "Excelente",
      detail: "Habitaciones tranquilas y bien aisladas del ruido exterior de Manhattan.",
    },
    styleAtmosphere: "Ejecutivo, sobrio, clásico y confortable.",
    priceTier: "$$",
    priceNote: "Excelente relación precio-calidad con amenidades completas.",
    pros: [
      "Excelente ubicación entre Times Square y Bryant Park",
      "Frigobar y cafetera asegurados en cada habitación",
      "Habitaciones más espaciosas para valijas y descanso",
      "Relación precio-calidad superior en Midtown",
      "Insonorización eficaz que garantiza descanso óptimo",
      "Acceso inmediato a 13 líneas de metro a pie",
    ],
    cons: [
      "Decoración sobria/tradicional (sin encanto boutique moderno)",
      "Lentitud ocasional en ascensores durante horas punta de check-out",
    ],
    summary:
      "La opción ganadora indiscutida del viaje: combina ubicación hiper-céntrica y conectada, frigobar y cafetera garantizados, insonorización de primer nivel y un precio equilibrado.",
  },
  {
    id: "margaritaville-times-square",
    name: "Margaritaville Resort Times Square",
    selected: false,
    tagline: "Resort Urbano Tropical con Piscina Climatizada en Rooftop",
    address: "560 7th Ave, New York, NY 10018",
    timesSquareDistance: "~100 m",
    walkTimeMin: 1,
    nearestSubway: "Times Sq - 42 St",
    subwayDistance: "~100 m",
    subwayLines: ["1", "2", "3", "7", "N", "Q", "R", "W", "S"],
    googleRating: 4.3,
    reviewsCount: "~3,250+ reseñas",
    miniFridge: {
      available: "included",
      label: "Sí (Incluido)",
      detail: "Mini-refrigerador disponible en todas las habitaciones.",
    },
    coffeeMaker: {
      available: "included",
      label: "Sí (Keurig)",
      detail: "Cafetera Keurig individual en habitación.",
    },
    acousticInsulation: {
      rating: "Muy Buena",
      detail: "Ventanales dobles de alta calidad acústica que aíslan bien la 7ma Avenida.",
    },
    styleAtmosphere: "Resort urbano temático caribeño/tropical, alegre y festivo.",
    priceTier: "$$$$",
    priceNote: "Tarifas por noche significativamente más elevadas (+ resort fees).",
    pros: [
      "Única piscina exterior climatizada en rooftop de la zona",
      "Vistas panorámicas espectaculares del skyline",
      "Instalaciones modernas, luminosas e impecables",
      "Excelente aislamiento acústico en ventanales",
    ],
    cons: [
      "Precio por noche sensiblemente más alto",
      "Demoras en ascensores por bares y público externo que sube a terrazas",
      "Sin zona amplia de descenso/taxis (drop-off complicado en 7ma Ave)",
    ],
    summary:
      "Experiencia tipo resort muy atractiva con su piscina, pero su costo elevado y movimiento constante en ascensores lo tornan menos práctico para el presupuesto.",
  },
  {
    id: "moxy-times-square",
    name: "Moxy NYC Times Square",
    selected: false,
    tagline: "Boutique Micro-Urbano, Juvenil y de Intensa Vida Nocturna",
    address: "485 7th Ave, New York, NY 10018",
    timesSquareDistance: "~500 m",
    walkTimeMin: 6,
    nearestSubway: "34 St - Herald Sq / 34 St - Penn Station",
    subwayDistance: "~200 m",
    subwayLines: ["B", "D", "F", "M", "N", "Q", "R", "W", "1", "2", "3", "A", "C", "E"],
    googleRating: 4.1,
    reviewsCount: "~6,500+ reseñas",
    miniFridge: {
      available: "not_available",
      label: "No disponible",
      detail: "Las habitaciones estándar no cuentan con mini-refrigerador.",
    },
    coffeeMaker: {
      available: "not_available",
      label: "No disponible",
      detail: "Sin cafetera en habitación (café disponible en lobby).",
    },
    acousticInsulation: {
      rating: "Regular / Deficiente",
      detail: "Ruido perceptible entre habitaciones, pasillos y de la terraza Magic Hour.",
    },
    styleAtmosphere: "Boutique micro-urbano, industrial, juvenil, con intensa vida nocturna.",
    priceTier: "$$",
    priceNote: "Tarifas competitivas pero con habitaciones sumamente compactas.",
    pros: [
      "Gran ambiente social y de diseño contemporáneo",
      "Famoso rooftop bar (Magic Hour) muy concurrido",
      "Espacios de co-working y estética instagrameable",
      "Diseño vanguardista",
    ],
    cons: [
      "Habitaciones ultracompactas (estilo micro-room con mobiliario plegable)",
      "Sin frigobar ni cafetera en habitación",
      "Sin armario tradicional",
      "Ruido nocturno elevado por eventos y vida nocturna",
    ],
    summary:
      "Atractivo para público joven que prioriza el ambiente social y la fiesta nocturna, pero poco recomendable para descanso familiar o estancias prolongadas.",
  },
  {
    id: "millennium-broadway-times-square",
    name: "Millennium Hotel Broadway Times Square",
    selected: false,
    tagline: "Rascacielos Masivo en el Corazón del Distrito de Teatros",
    address: "145 W 44th St, New York, NY 10036",
    timesSquareDistance: "~150 m",
    walkTimeMin: 2,
    nearestSubway: "Times Sq - 42 St",
    subwayDistance: "~150 m",
    subwayLines: ["1", "2", "3", "7", "N", "Q", "R", "W", "S"],
    googleRating: 3.6,
    reviewsCount: "~7,000+ reseñas",
    miniFridge: {
      available: "on_request",
      label: "Bajo petición",
      detail: "No garantizado por defecto; requiere solicitud especial en recepción.",
    },
    coffeeMaker: {
      available: "by_category",
      label: "Según categoría",
      detail: "Disponible únicamente en ciertas categorías superiores.",
    },
    acousticInsulation: {
      rating: "Aceptable",
      detail: "Insonorización estándar en pisos altos; más ruido en pisos bajos.",
    },
    styleAtmosphere: "Rascacielos clásico, hotel masivo de gran escala.",
    priceTier: "$$",
    priceNote: "Precios moderados pero instalaciones que requieren modernización.",
    pros: [
      "Ubicación hiper-céntrica con salida directa al Theater District",
      "Habitaciones de buen tamaño en pisos altos con vistas a la ciudad",
    ],
    cons: [
      "Servicio impersonal debido a la alta concurrencia masiva",
      "Instalaciones con desgaste perceptible y mantenimiento dispar",
      "Frigobar no asegurado por defecto",
      "Rating general menor (3.6/5)",
    ],
    summary:
      "Ubicación envidiable para los teatros de Broadway, pero con servicio impersonal y mobiliario que no garantiza el estándar de calidad y confort buscado.",
  },
  {
    id: "aura-hotel-times-square",
    name: "Aura Hotel Times Square",
    selected: false,
    tagline: "Boutique Elegante de Inspiración Italiana en Calle 44",
    address: "120 W 44th St, New York, NY 10036",
    timesSquareDistance: "~200 m",
    walkTimeMin: 3,
    nearestSubway: "42 St - Bryant Park / 47-50 Sts - Rockefeller",
    subwayDistance: "~200 m",
    subwayLines: ["B", "D", "F", "M", "1", "2", "3", "7", "N", "Q", "R", "W"],
    googleRating: 3.9,
    reviewsCount: "~2,500+ reseñas",
    miniFridge: {
      available: "extra_fee",
      label: "Bajo petición / Costo extra",
      detail: "No incluido de entrada en habitaciones estándar.",
    },
    coffeeMaker: {
      available: "by_category",
      label: "Según categoría",
      detail: "Disponible en suites o categorías premium.",
    },
    acousticInsulation: {
      rating: "Buena",
      detail: "Aislamiento correcto en una calle secundaria más calmada.",
    },
    styleAtmosphere: "Boutique elegante, de inspiración italiana, sobrio e íntimo.",
    priceTier: "$$$",
    priceNote: "Tarifas de nivel boutique medio-alto.",
    pros: [
      "Entorno ligeramente más tranquilo sobre la calle 44",
      "Gran cercanía a Broadway y la 5ta Avenida",
      "Diseño contemporáneo e íntimo",
    ],
    cons: [
      "Menor cantidad de instalaciones y áreas comunes",
      "Frigobar no asegurado de entrada en habitación estándar",
      "Espacio de habitación variable según planta",
    ],
    summary:
      "Hotel boutique agradable y mejor situado para evitar aglomeraciones, pero la falta de frigobar asegurado y amenidades estándar le restan conveniencia frente a Courtyard.",
  },
];
