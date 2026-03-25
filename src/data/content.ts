// Fuente centralizada de contenido editable para el micrositio (evita duplicaciones entre páginas).
export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  competencies: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

export interface LearningProgressItem {
  label: string;
  value: number;
}

export interface Challenge {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  evidences: string[];
  tools: string[];
  reflections: string[];
}

export interface RpaRoute {
  member: string;
  route: string[];
}

export interface TpiContent {
  description: string;
  objectives: string[];
  result: string;
  evidences: string[];
}

export const teamName = "Equipo Atlas UTN";

export const teamMembers: TeamMember[] = [
  {
    name: "Camila Rojas",
    role: "UX Strategist",
    avatar: "/assets/avatars/camila.svg",
    competencies: ["Research", "Wireframes", "Design System"]
  },
  {
    name: "Mateo Silva",
    role: "Frontend Developer",
    avatar: "/assets/avatars/mateo.svg",
    competencies: ["Astro", "Accessibility", "Performance"]
  },
  {
    name: "Valentina Perez",
    role: "Automation Analyst",
    avatar: "/assets/avatars/valentina.svg",
    competencies: ["RPA", "Process Mapping", "Testing"]
  },
  {
    name: "Lucas Diaz",
    role: "Technical Communicator",
    avatar: "/assets/avatars/lucas.svg",
    competencies: ["Documentation", "Storytelling", "Metrics"]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    period: "Semana 1",
    title: "Alineacion del equipo",
    detail: "Definimos roles, objetivos y una forma de trabajo basada en feedback rapido."
  },
  {
    period: "Semana 3",
    title: "Primer prototipo funcional",
    detail: "Armamos la estructura base y validamos la navegacion con usuarios internos."
  },
  {
    period: "Semana 6",
    title: "Automatizacion y evidencias",
    detail: "Integramos reportes de desafios y mejoramos la calidad de entregables."
  },
  {
    period: "Semana 9",
    title: "Consolidacion profesional",
    detail: "Publicamos un portfolio coherente que muestra evolucion tecnica y humana."
  }
];

export const learningProgress: LearningProgressItem[] = [
  { label: "UX", value: 82 },
  { label: "Desarrollo Web", value: 88 },
  { label: "Automatizacion", value: 79 },
  { label: "Comunicacion Tecnica", value: 91 }
];

export const challengeContent: Challenge[] = [
  {
    slug: "d3",
    title: "Desafio D3 - Descubrimiento",
    problem:
      "El equipo necesitaba entender con precision el problema del usuario y ordenar las necesidades del curso.",
    solution:
      "Aplicamos entrevistas cortas, un mapa de afinidad y priorizacion MoSCoW para enfocar el trabajo.",
    evidences: [
      "Mapa de afinidad validado por docentes",
      "Documento de hallazgos iniciales",
      "Checklist de requisitos priorizados"
    ],
    tools: ["Miro", "Notion", "Google Meet"],
    reflections: [
      "Entender el problema antes de construir evita retrabajo.",
      "La escucha activa mejoro la calidad de decisiones.",
      "Una buena priorizacion acelera todo el proyecto."
    ]
  },
  {
    slug: "d4",
    title: "Desafio D4 - Prototipado",
    problem:
      "Habia ideas dispersas para la interfaz y faltaba una experiencia unificada para todas las paginas.",
    solution:
      "Creamos un lenguaje visual comun, componentes reutilizables y flujos de prueba rapida.",
    evidences: [
      "Sistema de componentes en Figma",
      "Mapa de navegacion validado",
      "Prueba de usabilidad interna"
    ],
    tools: ["Figma", "Astro", "Loom"],
    reflections: [
      "Disenar por componentes mejoro consistencia.",
      "Prototipar temprano redujo incertidumbre tecnica.",
      "Los test rapidos nos ayudaron a simplificar."
    ]
  },
  {
    slug: "d5",
    title: "Desafio D5 - Implementacion",
    problem:
      "Se necesitaba construir el micrositio completo sin perder claridad de contenido ni rendimiento.",
    solution:
      "Adoptamos Astro con layout base, paginas modulares y estilos con variables CSS para escalar rapido.",
    evidences: [
      "Repositorio con arquitectura multipagina",
      "Componentes compartidos de navegacion y cards",
      "Validacion de build sin errores"
    ],
    tools: ["Astro", "CSS", "JavaScript"],
    reflections: [
      "Una arquitectura clara facilita iteraciones.",
      "La separacion de contenido y presentacion mejora mantenimiento.",
      "Mobile first fue clave para decisiones de layout."
    ]
  },
  {
    slug: "d6",
    title: "Desafio D6 - Automatizacion",
    problem:
      "Faltaba una forma repetible de revisar avances y evidencias para cada entrega intermedia.",
    solution:
      "Definimos plantillas estandar de evidencia y una rutina de control de calidad semanal.",
    evidences: [
      "Plantilla de reporte por desafio",
      "Bitacora de validaciones",
      "Matriz de calidad del equipo"
    ],
    tools: ["Google Sheets", "Notion", "Checklist QA"],
    reflections: [
      "Documentar proceso simplifico las revisiones.",
      "La automatizacion no siempre es codigo, tambien es metodo.",
      "Los indicadores compartidos fortalecen el trabajo colaborativo."
    ]
  },
  {
    slug: "d7",
    title: "Desafio D7 - Presentacion Final",
    problem:
      "Debiamos comunicar el proceso completo con una narrativa clara y evidencia verificable.",
    solution:
      "Organizamos el portfolio como historia de evolucion, con hitos, resultados y reflexiones concretas.",
    evidences: [
      "Guion de presentacion final",
      "Dashboard de resultados",
      "Feedback de docentes y pares"
    ],
    tools: ["Canva", "Astro", "YouTube"],
    reflections: [
      "La narrativa tecnica necesita foco y simplicidad.",
      "Mostrar evidencias concretas genera confianza.",
      "El equipo termino con una vision profesional comun."
    ]
  }
];

export const rpaRoutes: RpaRoute[] = [
  {
    member: "Camila Rojas",
    route: [
      "Investigacion UX aplicada a contextos academicos",
      "Modelado de journeys y heuristicas",
      "Escalado de sistemas de interfaz"
    ]
  },
  {
    member: "Mateo Silva",
    route: [
      "Fundamentos de Astro y arquitectura de componentes",
      "Optimizacion de performance frontend",
      "Accesibilidad y semantica web"
    ]
  },
  {
    member: "Valentina Perez",
    route: [
      "Mapeo de procesos repetitivos",
      "Diseno de controles de calidad",
      "Automatizacion ligera orientada a evidencia"
    ]
  },
  {
    member: "Lucas Diaz",
    route: [
      "Redaccion tecnica orientada a audiencias mixtas",
      "Storytelling de decisiones de producto",
      "Sintesis de hallazgos y resultados"
    ]
  }
];

export const tpiContent: TpiContent = {
  description:
    "El Trabajo Practico Integrador consolida aprendizajes de UX, desarrollo web y comunicacion tecnica en un portfolio profesional.",
  objectives: [
    "Construir una narrativa de evolucion del equipo",
    "Demostrar aplicacion de herramientas y metodologias",
    "Presentar evidencias con trazabilidad"
  ],
  result:
    "Se obtuvo un micrositio multipagina responsivo, con identidad visual consistente y contenido editable para futuras iteraciones.",
  evidences: [
    "Arquitectura de paginas y componentes",
    "Registro cronologico de decisiones",
    "Matriz de evaluacion con criterios academicos"
  ]
};

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challengeContent.find((item) => item.slug === slug);
