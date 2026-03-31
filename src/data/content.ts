export interface NavLink {
  href: string;
  label: string;
}

export interface SiteMeta {
  teamName: string;
  teamLabel: string;
  description: string;
  logoAlt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  accent: "cyan" | "mint" | "violet" | "amber" | "rose";
  tagline: string;
  bio: string;
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
  status: "available" | "upcoming";
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

export interface RpaRoute {
  member: string;
  route: string[];
}

export const teamName = "Equipo Gestión Compartida";

export const siteMeta: SiteMeta = {
  teamName,
  teamLabel: "Portfolio académico multipágina",
  description:
    "Micrositio profesional del equipo Gestión Compartida con D3 desarrollado, D4 a D7 preparados como próximas etapas, RPA, mapa conceptual y TPI en una narrativa única.",
  logoAlt: "Logo del equipo Gestión Compartida"
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/equipo", label: "Equipo" },
  { href: "/rpa", label: "RPA" },
  { href: "/tpi", label: "TPI" },
  { href: "/mapa-conceptual", label: "Mapa conceptual" },
  { href: "/contacto", label: "Contacto" }
];

export const teamMembers: TeamMember[] = [
  {
    id: "camila-zeniquel",
    name: "Camila Zeniquel",
    role: "UX Strategist",
    initials: "CZ",
    accent: "cyan",
    tagline: "Convierte necesidades difusas en experiencias claras.",
    bio: "Lidera la investigación, la arquitectura de información y los criterios visuales que sostienen el recorrido del sitio.",
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
    id: "florencia-galarza-maumary",
    name: "Florencia Galarza Maumary",
    role: "Frontend Developer",
    initials: "FG",
    accent: "mint",
    tagline: "Transforma el relato del equipo en una interfaz sólida y mantenible.",
    bio: "Diseña la arquitectura del frontend, implementa componentes reutilizables y cuida el rendimiento del sitio en desktop y mobile.",
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
    id: "bruno-rivero",
    name: "Bruno Rivero",
    role: "Automation Analyst",
    initials: "BR",
    accent: "violet",
    tagline: "Ordena procesos y vuelve trazables las evidencias del proyecto.",
    bio: "Se enfoca en la consistencia de entregables, el seguimiento de evidencias y la estandarización de reportes por desafío.",
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
    id: "renzo-urturi",
    name: "Renzo Urturi",
    role: "Technical Communicator",
    initials: "RU",
    accent: "amber",
    tagline: "Da forma narrativa a los resultados, decisiones y aprendizajes.",
    bio: "Integra storytelling, documentación y síntesis para que el sitio exprese claramente qué se hizo, por qué y con qué impacto.",
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
    id: "fabricio-jerez",
    name: "Fabricio Jerez",
    role: "Project Integrator",
    initials: "FJ",
    accent: "rose",
    tagline: "Conecta el trabajo colectivo con una lectura clara del proceso completo.",
    bio: "Sostiene la integración entre desafíos, RPA y TPI para que el portfolio muestre un recorrido consistente de punta a punta.",
    interests: ["Gestión colaborativa", "Mejora continua", "Narrativa de proyecto"],
    competencies: ["Integración de contenidos", "Planificación", "Comunicación interna"],
    rpa: [
      "Conectar el avance individual con los objetivos del equipo.",
      "Mantener coherencia entre desafíos, evidencias y TPI.",
      "Identificar ajustes rápidos sin romper la estructura general."
    ],
    contribution:
      "Ayudó a consolidar una versión presentable del sitio, manteniendo consistencia entre páginas, mensajes y entregables."
  }
];

export const heroHighlights = [
  { value: String(teamMembers.length), label: "integrantes con roles complementarios" },
  { value: "1", label: "desafío desarrollado con contenido real" },
  { value: "4", label: "etapas reservadas para próximas entregas" }
];

export const quickFacts = [
  { value: "1", label: "semana cerrada con contenido publicado" },
  { value: "5", label: "perfiles listos para presentar" },
  { value: "100%", label: "estructura preparada para sumar D4-D7" }
];

export const teamIntro =
  "Gestión Compartida combina diseño, desarrollo, automatización y comunicación técnica para transformar aprendizajes en un portfolio claro, profesional y listo para presentar.";

export const teamSectionDescription =
  "Los cinco perfiles comparten una estructura consistente de rol, intereses, competencias y aporte concreto al recorrido del sitio.";

export const rpaSummary =
  "Cada ruta personal de aprendizaje muestra cómo el crecimiento individual fortaleció la construcción del portfolio y la conexión con el TPI.";

export const timelineItems: TimelineItem[] = [
  {
    period: "Semana 1",
    title: "Identidad y objetivos del equipo",
    detail: "Se definieron roles, criterios de trabajo y la narrativa base del portfolio para sostener una entrega consistente."
  },
  {
    period: "Semana 3",
    title: "Próxima etapa: D4",
    detail: "Espacio reservado para documentar decisiones, evidencias y aprendizajes cuando comience el siguiente desafío."
  },
  {
    period: "Semana 6",
    title: "Próximas etapas: D5 y D6",
    detail: "La narrativa del sitio ya prevé estas instancias sin anticipar contenido que todavía no fue desarrollado."
  },
  {
    period: "Semana 9",
    title: "Próxima etapa: D7",
    detail: "El cierre final se incorporará cuando el proyecto llegue a esa fase y existan materiales reales para publicar."
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

const placeholderEvidence = (title: string, type: string): EvidenceItem => ({
  title,
  type,
  status: "placeholder",
  description: "Espacio preparado para reemplazar este material por la evidencia final sin modificar la arquitectura del sitio."
});

const createUpcomingChallenge = (slug: string, code: string): Challenge => ({
  slug,
  code,
  status: "upcoming",
  title: "Próximamente",
  summary:
    "Esta etapa aún no fue desarrollada. La página queda preparada para incorporar contenido real, evidencias y reflexiones cuando corresponda.",
  problem:
    "El desafío todavía no comenzó, por lo que no hay un problema documentado para comunicar en esta instancia.",
  solution:
    "Se dejó una estructura editorial y visual consistente para publicar la versión definitiva sin rehacer la página cuando llegue el momento.",
  tools: ["Alcance por definir", "Evidencias por incorporar", "Actualización futura"],
  evidences: [
    placeholderEvidence(`Espacio de evidencias ${code}`, "Documento"),
    placeholderEvidence(`Material visual ${code}`, "Galería")
  ],
  learnings: [
    {
      title: "Contenido en preparación",
      detail: "Los aprendizajes de esta etapa se documentarán una vez que el equipo la haya transitado y validado."
    },
    {
      title: "Placeholder editable",
      detail: "La página ya mantiene tono, jerarquía y estructura para reemplazar este contenido de forma rápida y prolija."
    }
  ],
  wouldDoDifferent: ["Definir responsables, materiales y fecha de publicación apenas comience esta etapa."],
  competenciesDeveloped: ["Se completará al desarrollar esta etapa"],
  tpiConnection:
    "Esta sección quedará vinculada al TPI cuando el desafío tenga decisiones, evidencias y resultados reales para integrar."
});

export const challengeContent: Challenge[] = [
  {
    slug: "d3",
    code: "D3",
    status: "available",
    title: "Micrositio inicial",
    summary: "Primera versión del sitio para ordenar identidad, secciones clave y narrativa del equipo.",
    problem: "Era necesario transformar contenido disperso en un micrositio claro, navegable y alineado con la consigna académica.",
    solution: "Se definió una estructura base de páginas, secciones y componentes reutilizables para sostener el crecimiento del portfolio.",
    tools: ["Astro", "TypeScript", "Figma", "Google Drive"],
    evidences: [placeholderEvidence("Presentación del desafío D3", "Presentación"), placeholderEvidence("Capturas del micrositio inicial", "Galería")],
    learnings: [
      { title: "Lo que aprendimos", detail: "Una arquitectura simple y consistente facilita iterar sin reescribir páginas completas." },
      { title: "Qué funcionó mejor", detail: "Centralizar contenido desde un único módulo redujo duplicaciones y errores de sincronización." }
    ],
    wouldDoDifferent: ["Validar antes la estructura final de datos", "Cerrar naming e imports comunes desde el inicio"],
    competenciesDeveloped: ["Arquitectura de información", "Diseño responsive", "Trabajo colaborativo"],
    tpiConnection: "D3 sentó la base estructural que luego permitió conectar equipo, desafíos, RPA y TPI en un solo relato."
  },
  createUpcomingChallenge("d4", "D4"),
  createUpcomingChallenge("d5", "D5"),
  createUpcomingChallenge("d6", "D6"),
  createUpcomingChallenge("d7", "D7")
];

export const challengeSlugs = challengeContent.map((challenge) => challenge.slug);

export const rpaRoutes: RpaRoute[] = teamMembers.map((member) => ({
  member: member.name,
  route: member.rpa
}));

export const tpiContent: TpiContent = {
  description:
    "El Trabajo Práctico Integrador reúne el avance actual del equipo y deja listas las etapas futuras dentro de una experiencia web multipágina, clara y presentable.",
  focus:
    "Integra identidad de equipo, desafío D3, rutas personales de aprendizaje, mapa conceptual y una base preparada para sumar D4 a D7 sin contradicciones.",
  objectives: [
    "Mostrar el proceso de trabajo del equipo con una lectura clara y ordenada.",
    "Conectar cada desafío con aprendizajes, evidencias y decisiones de diseño e implementación.",
    "Dejar una estructura reutilizable para incorporar materiales finales sin rehacer el sitio."
  ],
  integrations: [
    "Home como síntesis general del portfolio.",
    "Equipo y RPA para explicar roles, evolución y aportes individuales.",
    "D3 como etapa actualmente documentada y D4 a D7 como estructura reservada para próximas entregas.",
    "Mapa conceptual como lectura complementaria de los aprendizajes."
  ],
  result:
    "El resultado es un portfolio académico coherente, responsive y mantenible, preparado para exhibir el avance real de la primera semana y sumar nuevas etapas sin rehacer la experiencia.",
  evidences: [
    placeholderEvidence("Documento síntesis del TPI", "Documento"),
    placeholderEvidence("Presentación final del equipo", "Presentación"),
    placeholderEvidence("Mapa conceptual final", "Mapa")
  ]
};

export const closingReflection = {
  title: "Cierre del equipo",
  detail:
    "Gestión Compartida presenta un portfolio que no solo exhibe entregables: también deja visible cómo piensa, aprende, prueba y mejora en conjunto."
};

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challengeContent.find((item) => item.slug === slug);
