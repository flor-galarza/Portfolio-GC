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

export const teamName = "Equipo Gestión Compartida";

export const teamMembers: TeamMember[] = [
  {
    name: "Camila Zeniquel",
    role: "UX Strategist",
    avatar: "/assets/avatars/camila.svg",
    competencies: ["Research", "Wireframes", "Design System"]
  },
  {
    name: "Florencia Galarza Maumary",
    role: "Frontend Developer",
    avatar: "/assets/avatars/mateo.svg",
    competencies: ["Astro", "Accessibility", "Performance"]
  },
  {
    name: "Bruno Rivero",
    role: "Automation Analyst",
    avatar: "/assets/avatars/valentina.svg",
    competencies: ["RPA", "Process Mapping", "Testing"]
  },
  {
    name: "Renzo Urturi",
    role: "Technical Communicator",
    avatar: "/assets/avatars/lucas.svg",
    competencies: ["Documentation", "Storytelling", "Metrics"]
  },
  {
    name: "Fabricio Jerez",
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
    title: "Desafio D3 - Micrositio",
    problem:
      "El problema del desafío.",
    solution:
      "La solución del desafío",
    evidences: [
      "Lista de evidencias de la solución (documentos, presentaciones, etc.)"
    ],
    tools: ["una herramienta", "otra herramienta"],
    reflections: [
      "Lista de reflexiones del desafío."
    ]
  },
  {
    slug: "d4",
    title: "Desafio D4",
    problem:
      "El problema del desafío.",
    solution:
      "La solución del desafío",
    evidences: [
      "Lista de evidencias de la solución (documentos, presentaciones, etc.)"
    ],
    tools: ["una herramienta", "otra herramienta"],
    reflections: [
      "Lista de reflexiones del desafío."
    ]
  },
  {
    slug: "d5",
    title: "Desafio D5",
    problem:
      "El problema del desafío.",
    solution:
      "La solución del desafío",
    evidences: [
      "Lista de evidencias de la solución (documentos, presentaciones, etc.)"
    ],
    tools: ["una herramienta", "otra herramienta"],
    reflections: [
      "Lista de reflexiones del desafío."
    ]
  },
  {
    slug: "d6",
    title: "Desafio D6",
    problem:
      "El problema del desafío.",
    solution:
      "La solución del desafío",
    evidences: [
      "Lista de evidencias de la solución (documentos, presentaciones, etc.)"
    ],
    tools: ["una herramienta", "otra herramienta"],
    reflections: [
      "Lista de reflexiones del desafío."
    ]
  },
  {
    slug: "d7",
    title: "Desafio D7",
    problem:
      "El problema del desafío.",
    solution:
      "La solución del desafío",
    evidences: [
      "Lista de evidencias de la solución (documentos, presentaciones, etc.)"
    ],
    tools: ["una herramienta", "otra herramienta"],
    reflections: [
      "Lista de reflexiones del desafío."
    ]
  }
];

export const rpaRoutes: RpaRoute[] = [
  {
    member: "Camila Zeniquel",
    route: [
      "Espacio para RPA de Camila."
    ]
  },
  {
    member: "Florencia Galarza Maumary",
    route: [
      "Espacio para RPA de Florencia."
    ]
  },
  {
    member: "Bruno Rivero",
    route: [
      "Espacio para RPA de Bruno."
    ]
  },
  {
    member: "Renzo Urturi",
    route: [
      "Espacio para RPA de Renzo."
    ]
  },
  {
    member: "Fabricio Jerez",
    route: [
      "Espacio para RPA de Fabricio."
    ]
  }
];

export const tpiContent: TpiContent = {
  description:
    "Descripción de Trabajo Práctico Integrador",
  objectives: [
    "Objetivos del Trabajo Práctico Integrador"
  ],
  result:
    "Resultados del Trabajo Práctico Integrador",
  evidences: [
    "Evidencias del Trabajo Práctico Integrador"
  ]
};

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challengeContent.find((item) => item.slug === slug);
