export interface NavLink {
  href: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  accent: "cyan" | "mint" | "violet" | "amber" | "rose";
  tagline: string;
  bio: string;
  strengths: string[];
  interests: string[];
  competencies: string[];
  rpa: string[];
  contribution: string;
  note?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

export interface StrengthHighlight {
  title: string;
  value: string;
  detail: string;
}

export interface EvidenceItem {
  title: string;
  description: string;
  type: string;
  href?: string;
  status?: "available" | "placeholder";
}

export interface ReflectionItem {
  title: string;
  detail: string;
}

export interface Challenge {
  slug: string;
  code: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  tools: string[];
  evidences: EvidenceItem[];
  learnings: ReflectionItem[];
  wouldDoDifferent: string[];
  competenciesDeveloped: string[];
  tpiConnection: string;
}

export interface ConceptLevel {
  level: string;
  title: string;
  description: string;
  nodes: string[];
  outcome: string;
}

export interface TpiContent {
  description: string;
  focus: string;
  objectives: string[];
  integrations: string[];
  result: string;
  evidences: EvidenceItem[];
}

export const teamName = "Equipo Gestión Compartida";

export const teamMembers: TeamMember[] = [
  {
    name: "Camila Zeniquel",
    role: "UX Strategist",
    initials: "CR",
    accent: "cyan",
    tagline: "Convierte necesidades difusas en experiencias claras.",
    bio: "Lidera la investigación, la arquitectura de información y los criterios visuales que sostienen el recorrido del sitio.",
    strengths: ["Investigación aplicada", "Jerarquía visual", "Síntesis de hallazgos"],
    interests: ["Service design", "Design systems", "Validación con usuarios"],
    competencies: ["UX research", "Wireframing", "Arquitectura de información"],
    rpa: [
      "Detectar necesidades reales del usuario antes de diseñar.",
      "Traducir insights en decisiones de navegación y contenido.",
      "Documentar hallazgos para mejorar iteraciones futuras."
    ],
    contribution:
      "Alineó la experiencia del micrositio con los objetivos académicos y aseguró que cada sección tuviera sentido para docentes y pares."
  },
  {
    name: "Florencia Galarza Maumary",
    role: "Frontend Developer",
    initials: "MS",
    accent: "mint",
    tagline: "Transforma el relato del equipo en una interfaz sólida y mantenible.",
    bio: "Diseña la arquitectura del frontend, implementa componentes reutilizables y cuida el rendimiento del sitio en desktop y mobile.",
    strengths: ["Arquitectura Astro", "Responsive design", "Accesibilidad"],
    interests: ["Performance web", "Semántica HTML", "Componentización"],
    competencies: ["Astro", "TypeScript", "Optimización frontend"],
    rpa: [
      "Escalar una base multipágina sin duplicar lógica ni contenido.",
      "Mejorar accesibilidad y motion con degradación elegante.",
      "Preparar una base flexible para evidencias definitivas."
    ],
    contribution:
      "Convirtió el portfolio en una experiencia multipágina coherente, con una estructura lista para futuras entregas y ajustes rápidos."
  },
  {
    name: "Bruno Rivero",
    role: "Automation Analyst",
    initials: "VP",
    accent: "violet",
    tagline: "Ordena procesos y vuelve trazables las evidencias del proyecto.",
    bio: "Se enfoca en la consistencia de entregables, el seguimiento de evidencias y la estandarización de reportes por desafío.",
    strengths: ["Mapeo de procesos", "QA liviano", "Trazabilidad"],
    interests: ["Automatización operativa", "Analítica", "Gestión visual"],
    competencies: ["RPA", "Process mapping", "Control de calidad"],
    rpa: [
      "Estructurar evidencia para evitar pérdidas de contexto.",
      "Definir rutinas repetibles de revisión por desafío.",
      "Conectar documentación con decisiones del TPI."
    ],
    contribution:
      "Diseñó el marco de control que permite mostrar avances, respaldos y aprendizajes sin romper la claridad del portfolio."
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
    initials: "LD",
    accent: "amber",
    tagline: "Da forma narrativa a los resultados, decisiones y aprendizajes.",
    bio: "Integra storytelling, documentación y síntesis para que el sitio exprese claramente qué se hizo, por qué y con qué impacto.",
    strengths: ["Storytelling técnico", "Documentación", "Síntesis ejecutiva"],
    interests: ["Comunicación digital", "Presentaciones", "Narrativas de producto"],
    competencies: ["Documentación técnica", "Presentación de evidencias", "Métricas"],
    rpa: [
      "Traducir contenido técnico a un lenguaje claro y profesional.",
      "Jerarquizar aprendizajes para la presentación final.",
      "Vincular evidencias con resultados concretos del equipo."
    ],
    contribution:
      "Aportó cohesión editorial a la experiencia, haciendo que cada página comunique proceso, valor y próximos pasos."
  },
  {
    id: "integrante-05",
    name: "Integrante 05",
    role: "Rol en definición",
    initials: "05",
    accent: "rose",
    tagline: "Espacio listo para completar el quinto perfil sin rehacer la estructura del sitio.",
    bio: "Este bloque mantiene una quinta ficha consistente para que el equipo pueda cargar nombre, rol, fortalezas y aporte final cuando cuente con la información definitiva.",
    strengths: ["Perfil editable", "Estructura consistente", "Carga pendiente"],
    interests: ["Completar nombre", "Definir rol", "Agregar evidencias"],
    competencies: ["Competencia 1", "Competencia 2", "Competencia 3"],
    rpa: [
      "Documentar objetivos y responsabilidades del nuevo integrante.",
      "Completar la ruta personal de aprendizaje con avances reales.",
      "Vincular su aporte con desafíos, TPI y evidencias finales."
    ],
    contribution:
      "Placeholder editorial listo para reemplazar con contenido final sin afectar cards, grids ni consistencia visual.",
    note: "Completar este perfil cuando el equipo confirme los datos del quinto integrante."
  }
  
];

export const heroHighlights = [
  { value: String(teamMembers.length), label: "integrantes con roles complementarios" },
  { value: "5", label: "desafíos documentados" },
  { value: "1", label: "TPI articulado de punta a punta" }
];

export const quickFacts = [
  { value: "+9", label: "semanas de evolución" },
  { value: "5", label: "perfiles listos para presentar" },
  { value: "100%", label: "estructura editable para cierre final" }
];

export const teamIntro =
  "Gestión Compartida combina diseño, desarrollo, automatización y comunicación técnica para transformar aprendizajes en un portfolio claro, profesional y listo para presentar.";

export const teamSectionDescription =
  "Los cinco perfiles comparten una estructura consistente de rol, fortalezas, intereses, competencias y aporte concreto al recorrido del sitio.";

export const timelineItems: TimelineItem[] = [
  {
    period: "Semana 1",
    title: "Identidad y objetivos del equipo",
    detail: "Se definieron roles, criterios de trabajo y la narrativa base del portfolio para sostener una entrega consistente."
  },
  {
    period: "Semana 3",
    title: "Mapa del problema y primeras evidencias",
    detail: "El equipo priorizó necesidades, consolidó hallazgos y comenzó a ordenar material verificable por desafío."
  },
  {
    period: "Semana 6",
    title: "Prototipado, implementación y control",
    detail: "Se unificaron componentes, se mejoró la experiencia responsive y se reforzó la trazabilidad de las entregas."
  },
  {
    period: "Semana 9",
    title: "Integración final con el TPI",
    detail: "Los desafíos, las RPA y los mapas conceptuales se conectaron en un relato profesional listo para exposición final."
  }
];

export const strengthHighlights: StrengthHighlight[] = [
  {
    title: "Diseño y claridad",
    value: "82%",
    detail: "El sitio prioriza jerarquía visual, lectura guiada y componentes consistentes para sostener una experiencia profesional."
  },
  {
    title: "Desarrollo reusable",
    value: "88%",
    detail: "La arquitectura multipágina se apoya en datos centralizados y plantillas reutilizables para crecer sin fricción."
  },
  {
    title: "Gestión de evidencias",
    value: "79%",
    detail: "Cada desafío queda respaldado con placeholders elegantes o material disponible, siempre listo para reemplazo."
  },
  {
    title: "Comunicación técnica",
    value: "91%",
    detail: "El portfolio conecta problema, solución, reflexión y TPI para que el proceso sea entendible de punta a punta."
  }
];

export const presentationVideo = {
  title: "Video de presentación del equipo",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  note: "Placeholder profesional: reemplazar por el video final del equipo cuando esté disponible."
};

export const conceptLevels: ConceptLevel[] = [
  {
    level: "Nivel 1",
    title: "Comprensión del contexto",
    description: "Base conceptual para entender usuarios, consignas, necesidades y criterios del curso.",
    nodes: ["Usuario", "Problema", "Contexto académico", "Requerimientos", "Priorización"],
    outcome: "Permite alinear al equipo antes de prototipar o implementar."
  },
  {
    level: "Nivel 2",
    title: "Diseño de la solución",
    description: "Relaciona experiencia, contenidos, arquitectura visual y decisiones del sistema multipágina.",
    nodes: ["UX", "Flujos", "Componentes", "Responsive", "Accesibilidad"],
    outcome: "Hace visible cómo se pasó del análisis a una propuesta navegable y consistente."
  },
  {
    level: "Nivel 3",
    title: "Ejecución y mejora continua",
    description: "Conecta implementación, automatización, evidencia y reflexión para cerrar el aprendizaje.",
    nodes: ["Implementación", "QA", "Evidencias", "TPI", "Aprendizajes"],
    outcome: "Resume cómo el equipo convierte entregas parciales en conocimiento integrado."
  }
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

export const closingReflection = {
  title: "Cierre del equipo",
  detail:
    "Gestión Compartida presenta un portfolio que no solo exhibe entregables: también deja visible cómo piensa, aprende, prueba y mejora en conjunto."
};

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challengeContent.find((item) => item.slug === slug);
