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

export interface RpaRoute {
  member: string;
  route: string[];
}

export const teamName = "Equipo Gestión Compartida";

export const siteMeta: SiteMeta = {
  teamName,
  teamLabel: "Portfolio académico multipágina",
  description:
    "Micrositio profesional del equipo Gestión Compartida con equipo, desafíos D3 a D7, RPA, mapa conceptual y TPI integrados en una narrativa única.",
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
    id: "florencia-galarza-maumary",
    name: "Florencia Galarza Maumary",
    role: "Frontend Developer",
    initials: "FG",
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
    id: "bruno-rivero",
    name: "Bruno Rivero",
    role: "Automation Analyst",
    initials: "BR",
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
    id: "renzo-urturi",
    name: "Renzo Urturi",
    role: "Technical Communicator",
    initials: "RU",
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
    id: "fabricio-jerez",
    name: "Fabricio Jerez",
    role: "Project Integrator",
    initials: "FJ",
    accent: "rose",
    tagline: "Conecta el trabajo colectivo con una lectura clara del proceso completo.",
    bio: "Sostiene la integración entre desafíos, RPA y TPI para que el portfolio muestre un recorrido consistente de punta a punta.",
    strengths: ["Coordinación", "Síntesis transversal", "Seguimiento de entregables"],
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
  { value: "1", label: "desafíos documentados" },
  { value: "1", label: "TPI articulado de punta a punta" }
];

export const quickFacts = [
  { value: "+2", label: "semanas de evolución" },
  { value: "5", label: "perfiles listos para presentar" },
  { value: "100%", label: "estructura editable para cierre final" }
];

export const teamIntro =
  "Gestión Compartida combina diseño, desarrollo, automatización y comunicación técnica para transformar aprendizajes en un portfolio claro, profesional y listo para presentar.";

export const teamSectionDescription =
  "Los cinco perfiles comparten una estructura consistente de rol, fortalezas, intereses, competencias y aporte concreto al recorrido del sitio.";

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
    title: "Próximamente",
    detail: "Próximamente"
  },
  {
    period: "Semana 6",
    title: "Próximamente",
    detail: "Próximamente"
  },
  {
    period: "Semana 9",
    title: "Próximamente",
    detail: "Próximamente"
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

const placeholderEvidence = (title: string, type: string): EvidenceItem => ({
  title,
  type,
  status: "placeholder",
  description: "Espacio preparado para reemplazar este material por la evidencia final sin modificar la arquitectura del sitio."
});

export const challengeContent: Challenge[] = [
  {
    slug: "d3",
    code: "D3",
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
  {
    slug: "d4",
    code: "D4",
    title: "Próximamente",
    summary: "Próximamente",
    problem: "Próximamente",
    solution: "Próximamente",
    tools: ["Astro", "CSS", "Figma", "Miro"],
    evidences: [placeholderEvidence("Wireframes de refinamiento D4", "Documento"), placeholderEvidence("Comparativa antes y después", "Galería")],
    learnings: [
      { title: "Próximamente", detail: "Próximamente" },
      { title: "Próximamente", detail: "Próximamente" }
    ],
    wouldDoDifferent: ["Próximamente"],
    competenciesDeveloped: ["-"],
    tpiConnection: "Próximamente"
  },
  {
    slug: "d5",
    code: "D5",
    title: "Próximamente",
    summary: "Próximamente",
    problem: "Próximamente",
    solution: "Próximamente",
    tools: ["Astro", "TypeScript", "Drive", "Canva"],
    evidences: [placeholderEvidence("Listado de evidencias D5", "Documento"), placeholderEvidence("Storyboard del desafío D5", "Presentación")],
    learnings: [
      { title: "Preparar el reemplazo", detail: "Los placeholders bien definidos evitan roturas visuales y facilitan el cierre final del sitio." },
      { title: "Trazabilidad", detail: "Relacionar cada evidencia con su desafío mejora el control del material pendiente." }
    ],
    wouldDoDifferent: ["Asignar responsables por evidencia", "Definir antes los formatos finales esperados"],
    competenciesDeveloped: ["Gestión de evidencias", "QA", "Organización documental"],
    tpiConnection: "D5 aseguró que el TPI pudiera mostrar soportes reales o pendientes sin perder continuidad narrativa."
  },
  {
    slug: "d6",
    code: "D6",
    title: "Integración multipágina",
    summary: "Se conectaron rutas, componentes y datos para consolidar una experiencia coherente entre secciones.",
    problem: "El sitio necesitaba escalar a varias páginas sin duplicar lógica ni fragmentar la información del equipo.",
    solution: "Se centralizó el contenido compartido y se reutilizaron componentes para sostener consistencia técnica y visual.",
    tools: ["Astro", "TypeScript", "CSS", "Git"],
    evidences: [placeholderEvidence("Mapa de rutas D6", "Documento"), placeholderEvidence("Revisión de componentes reutilizados", "Checklist")],
    learnings: [
      { title: "Escalabilidad", detail: "Un módulo de contenido bien definido evita divergencias entre imports, exports y shape de datos." },
      { title: "Mantenibilidad", detail: "Las páginas genéricas aceleran cambios globales y reducen riesgo de inconsistencias." }
    ],
    wouldDoDifferent: ["Tipar aún más el contenido compartido", "Agregar validaciones automatizadas antes del merge"],
    competenciesDeveloped: ["Arquitectura frontend", "Tipado", "Integración"],
    tpiConnection: "D6 fue clave para que el TPI pudiera nutrirse de datos comunes sin depender de contenido duplicado en cada página."
  },
  {
    slug: "d7",
    code: "D7",
    title: "Cierre y preparación final",
    summary: "Se dejó el portfolio listo para presentación, revisión final y carga de material definitivo.",
    problem: "El cierre requería coherencia entre narrativa, datos y preparación para los últimos reemplazos de contenido.",
    solution: "Se ajustó el tono editorial, se consolidaron conexiones con el TPI y se dejó una base estable para el cierre del proyecto.",
    tools: ["Astro", "TypeScript", "Git", "YouTube"],
    evidences: [placeholderEvidence("Video final del equipo", "Video"), placeholderEvidence("Checklist de cierre D7", "Checklist")],
    learnings: [
      { title: "Preparación final", detail: "Cerrar naming y contratos de datos evita bugs visibles al final del proceso." },
      { title: "Entrega profesional", detail: "La coherencia entre secciones es tan importante como el contenido de cada una por separado." }
    ],
    wouldDoDifferent: ["Congelar antes el shape del contenido compartido", "Ejecutar checks después de cada merge relevante"],
    competenciesDeveloped: ["Cierre de proyecto", "Consistencia editorial", "Validación final"],
    tpiConnection: "D7 articula todo el recorrido y deja visible cómo el equipo integra proceso, resultado y próximos pasos en el TPI."
  }
];

export const challengeSlugs = challengeContent.map((challenge) => challenge.slug);

export const rpaRoutes: RpaRoute[] = teamMembers.map((member) => ({
  member: member.name,
  route: member.rpa
}));

export const tpiContent: TpiContent = {
  description:
    "El Trabajo Práctico Integrador reúne el recorrido completo del equipo en una experiencia web multipágina, clara y lista para presentar.",
  focus:
    "Integra identidad de equipo, desafíos, rutas personales de aprendizaje y mapa conceptual en una única narrativa profesional.",
  objectives: [
    "Mostrar el proceso de trabajo del equipo con una lectura clara y ordenada.",
    "Conectar cada desafío con aprendizajes, evidencias y decisiones de diseño e implementación.",
    "Dejar una estructura reutilizable para incorporar materiales finales sin rehacer el sitio."
  ],
  integrations: [
    "Home como síntesis general del portfolio.",
    "Equipo y RPA para explicar roles, evolución y aportes individuales.",
    "Desafíos D3 a D7 como respaldo del proceso.",
    "Mapa conceptual como lectura complementaria de los aprendizajes."
  ],
  result:
    "El resultado es un portfolio académico coherente, responsive y mantenible, preparado para exhibir avances y reemplazar placeholders por evidencias definitivas.",
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
