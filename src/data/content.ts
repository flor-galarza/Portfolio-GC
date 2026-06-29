import camiAvatar from "../assets/cami.jpeg";
import florAvatar from "../assets/flor.jpeg";
import BrunoAvatar from "../assets/Bruno.jpeg";
import renzoAvatar from "../assets/Renzo.jpg";
import fabriAvatar from "../assets/fabri.jpeg";
import mapaUnidad1 from "../assets/Mapas Mentales/Unidad 1.png";
import mapaUnidad2 from "../assets/Mapas Mentales/Unidad 2.png";
import mapaUnidad3 from "../assets/Mapas Mentales/Unidad 3.png";
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

export interface LearningUnit {
  id: number;
  title: string;                   // Nombre de la unidad, ej. "Unidad 1 – Introducción"
  subtitle: string;                // Tema o foco principal de la unidad
  color?: "cyan" | "mint" | "violet" | "amber" | "rose";
  newConcepts: string[];           // Conceptos nuevos adquiridos
  interestConcepts: string[];      // Conceptos de interés (lo que más llamó la atención)
  reflection: string;              // Reflexión personal libre
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
  contribution: string;
  avatar?: string;
  note?: string;
  learningUnits: LearningUnit[];   // ← reemplaza a rpa
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
  imageSrc?: string;
  imageAlt?: string;
}

export interface TpiContent {
  description: string;
  focus: string;
  objectives: string[];
  integrations: string[];
  result: string;
  evidences: EvidenceItem[];
}


export interface PresentationVideo {
  title: string;
  embedUrl: string;
  note: string;
}

export const teamName = "Equipo Gestión Compartida";

export const siteMeta: SiteMeta = {
  teamName,
  teamLabel: "Portfolio académico",
  description:
    "Micrositio profesional del equipo Gestión Compartida con todos los desafíos (D3 a D8) completamente desarrollados, RPA, mapa conceptual y TPI en una narrativa única.",
  logoAlt: "Logo del equipo Gestión Compartida"
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/equipo", label: "Equipo" },
  { href: "/tpi", label: "TPI" },
  { href: "/actividades", label: "Actividades" },
  { href: "/mapa-conceptual", label: "Mapa conceptual" },
];

const UNIT_PLACEHOLDER = (id: number): LearningUnit => ({
  id,
  title: `Unidad ${id}`,
  subtitle: "Tema o foco de la unidad — completar",
  color: undefined,                // hereda el accent del miembro si no se define
  newConcepts: [
    "Concepto nuevo 1 — completar",
    "Concepto nuevo 2 — completar",
  ],
  interestConcepts: [
    "Concepto de interés 1 — completar",
    "Concepto de interés 2 — completar",
  ],
  reflection:
    "Reflexión personal sobre la unidad — completar con la experiencia propia.",
});
 
// ── Datos del equipo ──────────────────────────────────────────────────────────
 
export const teamMembers: TeamMember[] = [
  // ── Camila Zeniquel ────────────────────────────────────────────────────────
  {
    id: "camila-zeniquel",
    name: "Camila Zeniquel",
    role: "Functional Analyst",
    initials: "CZ",
    accent: "cyan",
    tagline: "Convierte necesidades difusas en experiencias claras.",
    bio: "Lidera la investigación, la arquitectura de información y los criterios visuales que sostienen el recorrido del sitio.",
    interests: ["Service design", "Design systems", "Validación con usuarios"],
    competencies: ["UX research", "Security", "Arquitectura de información"],
    contribution:
      "Actualizaciones del micrositio con los objetivos académicos y aseguró que cada sección tuviera sentido para docentes y pares.",
    avatar: camiAvatar.src,
    learningUnits: [
      {
        id: 1,
        title: "Unidad 1",
        subtitle: "LAS ORGANIZACIONES Y SU ADMINISTRACIÓN",
        color: "cyan",
        newConcepts: [
          "Roles de gerencia",
          "Punto de equilibrio",
        ],
        interestConcepts: [
          "Usos del proceso administrativo",
          "Teorías modernas de gestión",
        ],
        reflection:
          "La unidad sirvió como una manera de refrescar conceptos clave de administración, esto nos ayudó a orientarnos en el desarrollo del TPI y entender el contexto administrativo de la organización. Personalmente, me interesa el liderazgo desde el papel del gerente, y me ayuda a ponerle nombre a dinámicas que veo en el día a día de las organizaciones, aún siendo un rol al que actualmente no aspiro. Me pareció interesante la discusión sobre el proceso administrativo como una guía flexible, no un manual rígido, y cómo se adapta a diferentes contextos organizacionales.",
      },
      {
        id: 2,
        title: "Unidad 2",
        subtitle: "ESTRATEGIA EMPRESARIAL",
        color: "cyan",
        newConcepts: [
          "Análisis de situación",
          "Cuadro de mando integral",
          "Mapa estratégico"
        ],
        interestConcepts: [
          "Gestión del conocimiento",
          "Elementos de la estrategia",
        ],
        reflection:
          "Esta unidad me pareció interesante por su manera de analizar la organización desde distintos puntos de vista y niveles de detalle. Me ayudó a entender mejor cómo se toman decisiones estratégicas en las organizaciones y cómo se pueden medir los resultados de esas decisiones. Personalmente, me llamó la atención el concepto de gestión del conocimiento y cómo las organizaciones pueden aprovechar su experiencia interna para mejorar su desempeño.",
      },
      {
        id: 3,
        title: "Unidad 3",
        subtitle: "LA CONDUCTA HUMANA EN LA ORGANIZACIÓN",
        color: "cyan",
        newConcepts: [
          "People Analytics",
        ],
        interestConcepts: [
          "Gestión del Clima y la Cultura Organizacional",
          "Talento 4.0",
        ],
        reflection:
          "Es la unidad que más me interesó, debido a que la gestión de equipos es un tema que me llama mucho la atención. Me ayudó a entender mejor cómo se pueden gestionar los equipos de trabajo para mejorar su desempeño y cómo se pueden medir los resultados de esa gestión. Personalmente, me pareció interesante el concepto de People Analytics y cómo se puede utilizar para tomar decisiones informadas sobre la gestión de personas en las organizaciones.",
      },
    ],
  },
 
  // ── Florencia Galarza Maumary ──────────────────────────────────────────────
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
    contribution:
      "Convirtió el portfolio en una experiencia multipágina coherente, con una estructura lista para futuras entregas y ajustes rápidos.",
    avatar: florAvatar.src,
    learningUnits: [
      {
        id: 1,
        title: "Unidad 1",
        subtitle: "LAS ORGANIZACIONES Y SU ADMINISTRACIÓN",
        color: "mint",
        newConcepts: [
          "Roles de gerencia",
          "Punto de equilibrio",
        ],
        interestConcepts: [
          "Usos del proceso administrativo",
          "Teorías modernas de gestión",
        ],
        reflection:
          "En esta unidad, lo más valioso es comprender que la administración no es solo un conjunto de tareas, sino un proceso dinámico de planificación, organización, dirección y control orientado a alcanzar metas de manera eficiente y eficaz. He aprendido que las organizaciones son sistemas sociales complejos que operan en un entorno cambiante, lo que exige que el administrador moderno actúe como un facilitador capaz de coordinar el esfuerzo humano. Me queda claro que la labor gerencial es indispensable para transformar recursos aislados en resultados colectivos con propósito.",
      },
      {
        id: 2,
        title: "Unidad 2",
        subtitle: "ESTRATEGIA EMPRESARIAL",
        color: "mint",
        newConcepts: [
          "Análisis de situación",
          "Cuadro de mando integral",
          "Mapa estratégico",
        ],
        interestConcepts: [
          "Gestión del conocimiento",
          "Elementos de la estrategia",
        ],
        reflection:
          "Esta sección me ha permitido valorar la administración como una disciplina en constante evolución, desde el enfoque científico de Taylor y la teoría clásica de Fayol hasta las visiones humanistas y sistémicas. Reflexiono sobre cómo cada escuela de pensamiento aportó herramientas que aún son vigentes: mientras que la eficiencia técnica es vital, el factor humano y la comprensión de las organizaciones como sistemas abiertos son los que realmente garantizan la sostenibilidad a largo plazo. No se puede liderar hoy sin entender los cimientos teóricos que construyeron las mejores prácticas del pasado.",
      },
      {
        id: 3,
        title: "Unidad 3",
        subtitle: "LA CONDUCTA HUMANA EN LA ORGANIZACIÓN",
        color: "mint",
        newConcepts: [
          "People Analytics",
        ],
        interestConcepts: [
          "Gestión del Clima y la Cultura Organizacional",
          "Talento 4.0",
        ],
        reflection:
          "Lo aprendido en esta unidad resalta que ninguna empresa es una isla; el administrador debe ser un analista agudo del entorno ético, global y social. He reflexionado sobre la importancia de la Responsabilidad Social Empresarial (RSE) y la ética, entendiendo que el éxito financiero no debe estar reñido con el bienestar de la comunidad y el respeto al medio ambiente. En un mundo donde la globalización conecta mercados y culturas, la capacidad de adaptarse a la diversidad y actuar con integridad se convierte en la mayor ventaja competitiva de cualquier profesional de la gestión.",
      },
    ],
  },
 
  // ── Bruno Rivero ───────────────────────────────────────────────────────────
  {
    id: "bruno-rivero",
    name: "Bruno Rivero",
    role: "Automation Analyst",
    initials: "BR",
    accent: "violet",
    tagline: "Ordena procesos y vuelve trazables las evidencias del proyecto.",
    bio: "Se enfoca en la consistencia de entregables, el seguimiento de evidencias y la estandarización de reportes por desafío.",
    interests: ["Resolución de conflictos","Redes de información", "DevOps", "Seguridad de la información"],
    competencies: ["Process mapping", "Infraestructura"],
    contribution:
      "Diseñó el marco de control que permite mostrar avances, respaldos y aprendizajes sin romper la claridad del portfolio.",
    avatar: BrunoAvatar.src,
    learningUnits: [
      {
        id: 1,
        title: "Unidad 1",
        subtitle: "LAS ORGANIZACIONES Y SU ADMINISTRACIÓN",
        color: "violet",
        newConcepts: [
          "Habilidades gerenciales",
          "Teorías sobre liderazgo",
          "Punto de equilibrio"
        ],
        interestConcepts: [
          "Características de un líder",
          "Roles del gerente",
        ],
        reflection:
          "Esta unidad me resultó útil para reforzar conceptos organizacionales y de administración que fui incorporando desde el inicio de la carrera y relacionarlos con una mirada más práctica. Además, me permitió sumar conocimientos sobre gerencia y liderazgo, entendiendo mejor cómo la toma de decisiones, la comunicación y la coordinación de equipos influyen en el funcionamiento de una organización. Considero que estos contenidos amplían mi visión profesional y ayudan a comprender la importancia de gestionar no solo recursos, sino también a las personas.",
      },
      {
        id: 2,
        title: "Unidad 2",
        subtitle: "ESTRATEGIA EMPRESARIAL",
        color: "violet",
        newConcepts: [
          "Cuadro de mando integral",
          "Análisis PESTEL",
        ],
        interestConcepts: [
          "Estrategias del análisis CAME",
          "Análisis del entorno mediante escenarios futuros",
        ],
        reflection:
          "Esta unidad me permitió comprender la importancia de analizar el contexto y el entorno antes de definir cualquier estrategia, ya que las decisiones no pueden tomarse de manera aislada ni pensando únicamente en el presente. Además, encontré muy útil el concepto de cuadro de mando integral, porque muestra cómo una visión estratégica puede traducirse en objetivos, indicadores y acciones concretas aplicables al trabajo cotidiano de una organización.",
      },
      {
        id: 3,
        title: "Unidad 3",
        subtitle: "LA CONDUCTA HUMANA EN LA ORGANIZACIÓN",
        color: "violet",
        newConcepts: [
          "Nuevas formas de trabajo",
          "Talento 4.0",
        ],
        interestConcepts: [
          "Gestión del talento",
          "Habilidades STEAM",
        ],
        reflection:
          "Estudiar esta unidad me hizo reflexionar sobre algo que vivo de cerca: la forma en que nuestra generación se relaciona con el trabajo es realmente distinta a la de generaciones anteriores, y no por capricho, sino porque el contexto tecnológico y social cambió las reglas de juego. En ese contexto, el concepto de Talento 4.0 me resultó revelador, porque pone nombre a algo que intuía pero no sabía cómo articular: que adaptarse al mundo digital no es solo saber usar herramientas, sino desarrollar una mentalidad crítica, autónoma y orientada al aprendizaje continuo.",
      },
    ],
  },
 
  // ── Renzo Urturi ───────────────────────────────────────────────────────────
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
    contribution:
      "Aportó cohesión editorial a la experiencia, haciendo que cada página comunique proceso, valor y próximos pasos.",
    avatar: renzoAvatar.src,
    learningUnits: [
      {
        id: 1,
        title: "Unidad 1",
        subtitle: "LAS ORGANIZACIONES Y SU ADMINISTRACIÓN",
        color: "amber",
        newConcepts: [
          "Roles de Mintzberg",
          "Autoridad y poder",
        ],
        interestConcepts: [
          "Liderazgo",
          "Rol del gerente",
        ],
        reflection:
          "La unidad permitió comprender cómo el perfil gerencial actual no se limita únicamente a planificar, organizar, dirigir y controlar, sino que también requiere habilidades blandas, comunicación efectiva y capacidad para coordinar personas en distintos contextos organizacionales. Desde una mirada vinculada a sistemas, me resultó interesante entender al gerente como alguien que interpreta información, toma decisiones y articula recursos, personas y tecnología para alcanzar objetivos. También me permitió reconocer que el rol del gerente se vuelve cada vez más dinámico, especialmente en organizaciones que necesitan adaptarse al cambio.",
      },
      {
        id: 2,
        title: "Unidad 2",
        subtitle: "ESTRATEGIA EMPRESARIAL",
        color: "amber",
        newConcepts: [
          "Escenarios futuros",
          "Mapa estratégico",
        ],
        interestConcepts: [
          "FODA / CAME",
          "Estrategia empresarial",
        ],
        reflection:
          "Esta unidad me ayudó a comprender la utilidad de las herramientas de análisis estratégico para ordenar la información y guiar la toma de decisiones dentro de una organización. Me pareció valioso ver cómo instrumentos como FODA, CAME, escenarios futuros o mapas estratégicos permiten analizar situaciones complejas de forma más clara y práctica. Desde el enfoque de sistemas, la estrategia puede entenderse como una forma de orientar recursos, procesos e información hacia objetivos concretos, evitando decisiones aisladas o improvisadas.",
      },
      {
        id: 3,
        title: "Unidad 3",
        subtitle: "LA CONDUCTA HUMANA EN LA ORGANIZACIÓN",
        color: "amber",
        newConcepts: [
          "STEAM",
          "Nuevas formas de trabajo",
        ],
        interestConcepts: [
          "Talento 4.0",
        ],
        reflection:
          "La unidad permitió observar cómo cambiaron las formas de trabajo y las habilidades que actualmente demanda el mercado laboral. Me resultó interesante la relación entre tecnología, personas y organización, especialmente porque la transformación digital no depende solo de herramientas, sino también de capacidades humanas como adaptación, aprendizaje continuo, colaboración y pensamiento crítico. Desde una perspectiva vinculada a sistemas, esta unidad muestra que las organizaciones necesitan perfiles capaces de integrarse a entornos digitales, flexibles y en constante cambio.",
      },
    ],
  },
 
  // ── Fabricio Jerez ─────────────────────────────────────────────────────────
  {
    id: "fabricio-jerez",
    name: "Fabricio Jerez",
    role: "Project Integrator",
    initials: "FJ",
    accent: "rose",
    tagline: "Conecta el trabajo colectivo con una lectura clara del proceso completo.",
    bio: "Sostiene la integración entre desafíos y TPI para que el portfolio muestre un recorrido consistente de punta a punta.",
    interests: ["Gestión colaborativa", "Mejora continua", "Narrativa de proyecto"],
    competencies: ["Integración de contenidos", "Planificación", "Comunicación interna"],
    contribution:
      "Ayudó a consolidar una versión presentable del sitio, manteniendo consistencia entre páginas, mensajes y entregables.",
    avatar: fabriAvatar.src,
    learningUnits: [
      {
        id: 1,
        title: "Unidad 1",
        subtitle: "LAS ORGANIZACIONES Y SU ADMINISTRACIÓN",
        color: "rose",
        newConcepts: [
          "Procesos gerenciales",
          "Herramientas de gestión gerencial",
        ],
        interestConcepts: [
          "Organización como sistemas",
          "Rol del gerente en una organización",
        ],
        reflection:
          "Esta unidad me permitió los procesos y responsabilidades que involucra estar en la posición del gerente y las estrategias para tener una visión transversal de la organización",
      },
      {
        id: 2,
        title: "Unidad 2",
        subtitle: "ESTRATEGIA EMPRESARIAL",
        color: "rose",
        newConcepts: [
          "Objetivos SMART",
          "Análisis CAME",
        ],
        interestConcepts: [
          "Análisis PESTEL",
          "Cuadro de Mando Integral",
        ],
        reflection:
          "Esta unidad me permitió ver las herramientas con las que cuenta un gerente a la hora de analizar el contexto de la organización para definir el objetivo y la estrategia que se llevará a cabo",
      },
      {
        id: 3,
        title: "Unidad 3",
        subtitle: "LA CONDUCTA HUMANA EN LA ORGANIZACIÓN",
        color: "rose",
        newConcepts: [
          "Talento 4.0",
          "STEAM"
        ],
        interestConcepts: [
          "Modelo de negoocio",
          "Modelo Canvas",
        ],
        reflection:
         "Esta unidad me permitió ver tanto la forma en que hay que enfocar nuestro talento para el nuevo mercado laboral, como las herramientas para definir el modelo de negocio de una organización",
      },
    ],
  },
];

export const heroHighlights = [
  { value: String(teamMembers.length), label: "integrantes con roles complementarios" },
  { value: "6", label: "desafíos desarrollados con contenido real" },
  { value: "100%", label: "de las etapas del recorrido completadas" }
];

export const quickFacts = [
  { value: "100%", label: "desafíos documentados y funcionales" },
  { value: "5", label: "perfiles listos para presentar" },
  { value: "6", label: "desafíos con evidencias reales publicadas" }
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
    title: "Identidad y objetivos del equipo (D3)",
    detail: "Se definieron roles, criterios de trabajo y el micrositio inicial para ordenar la narrativa base del portfolio."
  },
  {
    period: "Semana 3",
    title: "Cálculo del Punto de Equilibrio (D4)",
    detail: "Desarrollo del modelo de punto de equilibrio financiero y de la hoja de cálculo interactiva."
  },
  {
    period: "Semana 5",
    title: "Talento 4.0 (D5)",
    detail: "Proyección profesional del equipo al 2030 analizando competencias clave y resolución de problemáticas con habilidades tecnológicas."
  },
  {
    period: "Semana 6",
    title: "Gestión del Cambio (D6)",
    detail: "Análisis estratégico de un escenario organizacional para mitigar la resistencia y liderar el cambio."
  },
  {
    period: "Semana 8",
    title: "Visita de Experto (D8)",
    detail: "Charla y entrevista con un experto corporativo para responder la guía y resolver el entregable en PDF."
  },
  {
    period: "Semana 9",
    title: "Causa y Efecto (D7)",
    detail: "Elaboración de un diagrama de Ishikawa para identificar causas raíz y diagnosticar desvíos operativos."
  }
];

export const presentationVideo: PresentationVideo = {
  title: "Video de presentación del equipo",
  embedUrl: "https://www.youtube.com/embed/2a_obX6rFCA",
  note: "Este video resume la identidad del equipo y como se conectan desafios, evidencias y objetivos dentro de una narrativa profesional.\n\nContexto del proyecto y objetivo general.\nRoles complementarios y forma de trabajo.\nRecorrido actual y proximas etapas del portfolio."
};

export const conceptLevels: ConceptLevel[] = [
  {
    level: "Nivel 1",
    title: "Comprensión del contexto",
    description: "Base conceptual para entender usuarios, consignas, necesidades y criterios del curso.",
    nodes: ["Usuario", "Problema", "Contexto académico", "Requerimientos", "Priorización"],
    outcome: "Permite alinear al equipo antes de prototipar o implementar.",
    imageSrc: mapaUnidad1.src,
    imageAlt: "Mapa conceptual de la Unidad 1"
  },
  {
    level: "Nivel 2",
    title: "Diseño de la solución",
    description: "Relaciona experiencia, contenidos, arquitectura visual y decisiones del sistema multipágina.",
    nodes: ["UX", "Flujos", "Componentes", "Responsive", "Accesibilidad"],
    outcome: "Hace visible cómo se pasó del análisis a una propuesta navegable y consistente.",
    imageSrc: mapaUnidad2.src,
    imageAlt: "Mapa conceptual de la Unidad 2"
  },
  {
    level: "Nivel 3",
    title: "Ejecución y mejora continua",
    description: "Conecta implementación, automatización, evidencia y reflexión para cerrar el aprendizaje.",
    nodes: ["Implementación", "QA", "Evidencias", "TPI", "Aprendizajes"],
    outcome: "Resume cómo el equipo convierte entregas parciales en conocimiento integrado.",
    imageSrc: mapaUnidad3.src,
    imageAlt: "Mapa conceptual de la Unidad 3"
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
    solution: "Se definió una estructura base de páginas, secciones y componentes reutilizables; el micrositio publicado funciona además como la evidencia principal de que el desafío fue resuelto.",
    tools: ["Astro", "TypeScript", "Figma", "Google Drive"],
    evidences: [
      {
        title: "Micrositio publicado",
        description:
          "La evidencia central del desafío es el propio micrositio multipágina ya implementado. Reúne identidad, navegación, páginas por sección y una narrativa consistente del trabajo del equipo.",
        type: "Sitio web",
        href: "/",
        status: "available"
      },
      // La evidencia 'Investigación Unidad 1' fue movida a la sección Actividades.
    ],
    learnings: [
      { title: "Lo que aprendimos", detail: "Una arquitectura simple y consistente facilita iterar sin reescribir páginas completas." },
      { title: "Qué funcionó mejor", detail: "Centralizar contenido desde un único módulo redujo duplicaciones y errores de sincronización." }
    ],
    wouldDoDifferent: ["Validar antes la estructura final de datos", "Cerrar naming e imports comunes desde el inicio"],
    competenciesDeveloped: ["Arquitectura de información", "Diseño responsive", "Trabajo colaborativo"],
    tpiConnection: "D3 sentó la base estructural del micrositio publicado y permitió conectar equipo, desafíos, RPA y TPI en un solo relato verificable desde la propia experiencia web."
  },
  {
    slug: "d4",
    code: "D4",
    status: "available",
    title: "Cálculo del Punto de Equilibrio",
    summary: "Análisis financiero para determinar el volumen de ventas necesario donde los ingresos igualan exactamente a los costos totales, sin generar ganancias ni pérdidas.",
    problem: "Determinar el punto exacto donde una empresa alcanza el equilibrio financiero, permitiendo tomar decisiones estratégicas sobre precios, inventarios y proyecciones de ventas.",
    solution: "Implementación de fórmulas y herramientas de cálculo para determinar el punto de equilibrio, con aplicación práctica en una hoja de cálculo interactiva.",
    tools: ["Google Sheets", "Fórmulas financieras", "Análisis de costos"],
    evidences: [
      {
        title: "Hoja de cálculo del Punto de Equilibrio",
        description: "Herramienta interactiva que permite calcular el punto de equilibrio, fijar precios técnicos, valorar inventarios y proyectar ventas futuras.",
        type: "Hoja de cálculo",
        href: "https://docs.google.com/spreadsheets/d/15l6oDHL5kPS5TgdEisktE3R5G1aHjOA2LoYIVLjB-mk/edit?gid=778115137#gid=778115137",
        status: "available"
      }
    ],
    learnings: [
      { title: "Fijación técnica de precios", detail: "Aprender a establecer precios basados en costos reales y objetivos de rentabilidad." },
      { title: "Control de inventarios", detail: "Valorar existencias y optimizar la eficiencia operativa mediante análisis del punto de equilibrio." },
      { title: "Planificación estratégica", detail: "Proyectar volúmenes de venta necesarios para alcanzar utilidades deseadas." }
    ],
    wouldDoDifferent: ["Incluir más variables en el modelo", "Agregar gráficos visuales para mejor comprensión"],
    competenciesDeveloped: ["Análisis financiero", "Modelado matemático", "Toma de decisiones"],
    tpiConnection: "D4 aporta herramientas prácticas de gestión financiera que complementan el análisis organizacional del TPI, permitiendo evaluar la viabilidad económica de la organización estudiada."
  },
  {
    slug: "d5",
    code: "D5",
    status: "available",
    title: "Talento 4.0 y Futuro 2030",
    summary: "Visualización del equipo hacia el año 2030, definiendo el perfil de Talento 4.0 de cada integrante y los desafíos globales a resolver.",
    problem: "Proyectar la evolución profesional individual del equipo hacia el año 2030, identificando competencias clave y el rol del Talento 4.0 en la resolución de problemas tecnológicos.",
    solution: "Análisis y definición de perfiles futuristas por integrante, conectando sus habilidades con problemas concretos del mercado y plasmando las visualizaciones en perfiles gráficos interactivos.",
    tools: ["Planificación de Carrera", "Análisis de Competencias", "Diseño Gráfico", "Futurismo Tecnológico"],
    evidences: [
      {
        title: "Perfiles de Talento 4.0 - Resultados",
        description: "Visualizaciones y perfiles de los integrantes proyectados al 2030, detallando roles, habilidades y problemas a resolver.",
        type: "Interactiva",
        href: "/desafios/d5",
        status: "available"
      }
    ],
    learnings: [
      { title: "Planificación de carrera 4.0", detail: "Proyectar competencias a largo plazo nos permite orientar el aprendizaje actual hacia necesidades futuras del mercado." },
      { title: "Complementariedad futura", detail: "Verificar cómo los roles del equipo continuarán integrándose en escenarios tecnológicos complejos del mañana." }
    ],
    wouldDoDifferent: ["Incluir más herramientas de autodiagnóstico de competencias", "Realizar un taller interactivo de co-diseño de perfiles"],
    competenciesDeveloped: ["Visión estratégica", "Autogestión del desarrollo", "Alineación profesional"],
    tpiConnection: "Este desafío proyecta las habilidades de los integrantes hacia el futuro, sirviendo como marco para las competencias que se aplican activamente en la resolución técnica del TPI."
  },
  {
    slug: "d6",
    code: "D6",
    status: "available",
    title: "Gestión del cambio",
    summary: "Análisis detallado de un escenario organizacional y la implementación de estrategias para la gestión eficaz del cambio cultural y operativo.",
    problem: "Evaluar la resistencia al cambio en un escenario de transformación y proponer un plan estructurado para facilitar la transición organizacional sin afectar la continuidad.",
    solution: "Desarrollo de un marco estratégico para la gestión del cambio, identificando agentes promotores, canales de comunicación y planes de capacitación detallados en el PDF.",
    tools: ["Gestión del cambio", "Análisis de Stakeholders", "Planes de Comunicación", "Liderazgo"],
    evidences: [
      {
        title: "Trabajo Práctico - Gestión del Cambio (PDF)",
        description: "Documento en formato PDF con el análisis completo del escenario y las propuestas para mitigar la resistencia y liderar el cambio.",
        type: "Documento",
        href: "/desafios/d6/E8 - Desafío 6.pdf",
        status: "available"
      }
    ],
    learnings: [
      { title: "Mitigación de resistencia", detail: "Comprender los factores psicológicos y operativos que generan barreras en los equipos ante procesos de transformación." },
      { title: "Estrategias de comunicación", detail: "Diseñar planes de comunicación transparentes que involucren a los stakeholders clave como aliados." }
    ],
    wouldDoDifferent: ["Profundizar en la adopción temprana con métricas", "Diseñar dinámicas de feedback continuo más participativas"],
    competenciesDeveloped: ["Liderazgo transformacional", "Gestión del cambio", "Diseño organizacional"],
    tpiConnection: "Este análisis ayuda a comprender cómo la organización bajo estudio en el TPI podría absorber nuevas tecnologías o procesos con una menor resistencia."
  },
  {
    slug: "d7",
    code: "D7",
    status: "available",
    title: "Causa y efecto",
    summary: "Identificación de las causas raíz de problemas en un escenario mediante la aplicación práctica del diagrama de Ishikawa (causa y efecto).",
    problem: "Determinar las variables críticas y causas raíz que originan desvíos u anomalías operativas en un escenario organizacional propuesto.",
    solution: "Elaboración de un diagrama de Ishikawa detallando las categorías principales (Mano de obra, Método, Maquinaria, Materiales, Medio ambiente, Medición) para trazar y mitigar desvíos.",
    tools: ["Diagrama de Ishikawa", "Lluvia de ideas", "Análisis Causa Raíz (RCA)"],
    evidences: [
      {
        title: "Diagrama de Ishikawa - Causa y Efecto (PDF)",
        description: "Documento con el análisis de Ishikawa aplicado al escenario del Desafío 7, detallando causas principales y secundarias.",
        type: "Documento",
        href: "/desafios/d7/E8 - Desafio 7.pdf",
        status: "available"
      }
    ],
    learnings: [
      { title: "Desglose de problemas complejos", detail: "Aprender a estructurar un problema general en múltiples categorías causales para evitar diagnósticos superficiales." },
      { title: "Priorización de soluciones", detail: "Distinguir entre síntomas visibles y las verdaderas causas fundamentales que requieren intervención directa." }
    ],
    wouldDoDifferent: ["Combinar la espina de pescado con la técnica de los 5 porqués", "Involucrar a más perfiles técnicos en el debate de causas raíz"],
    competenciesDeveloped: ["Pensamiento analítico", "Análisis causa-raíz", "Calidad y mejora de procesos"],
    tpiConnection: "El análisis causa-efecto provee herramientas analíticas indispensables para diagnosticar desvíos de procesos en el Trabajo Práctico Integrador."
  },
  {
    slug: "d8",
    code: "D8",
    status: "available",
    title: "Visita experto",
    summary: "Charla brindada por un experto de una empresa que aportó conocimientos prácticos y testimonios clave para responder las preguntas de la guía y resolver el trabajo práctico del PDF E8-Desafio 8.pdf.",
    problem: "Comprender dinámicas operacionales y resolver las consignas del Desafío 8 basándonos en la experiencia real compartida por un profesional de la industria.",
    solution: "Asistencia activa a la charla del experto externo, formulación de consultas específicas y elaboración de las respuestas del entregable, consolidando la información en un informe PDF.",
    tools: ["Entrevista", "Charla técnica", "Análisis organizacional", "Caso de estudio"],
    evidences: [
      {
        title: "Trabajo Práctico - Visita de Experto (PDF)",
        description: "Documento oficial del Desafío 8 que compila las respuestas y conclusiones obtenidas de la charla con el experto corporativo.",
        type: "Documento",
        href: "/desafios/d8/E8-Desafio 8.pdf",
        status: "available"
      }
    ],
    learnings: [
      { title: "Perspectiva del mercado real", detail: "Comprender cómo se aplican la administración y la cultura organizacional en grandes corporaciones de boca de sus propios líderes." },
      { title: "Resolución dirigida por datos", detail: "Aprovechar testimonios estructurados de visitas técnicas para responder consignas y validar hipótesis del curso." }
    ],
    wouldDoDifferent: ["Profundizar las preguntas en aspectos de clima organizacional", "Solicitar material complementario adicional antes de la visita"],
    competenciesDeveloped: ["Comunicación y entrevista", "Análisis de negocios", "Elaboración de informes técnicos"],
    tpiConnection: "Este desafío complementa el diagnóstico del TPI al contrastar el relevamiento interno con la visión de un experto de la industria."
  }
];

export const challengeSlugs = challengeContent.map((challenge) => challenge.slug);

// rpaRoutes removed: routes are available via each member's `rpa` field on `teamMembers`.

export const tpiContent: TpiContent = {
  description:
    "El Trabajo Práctico Integrador reúne el avance actual del equipo, incorpora el diagnóstico de la primera entrevista al cliente y deja listas las etapas futuras dentro de una experiencia web multipágina, clara y presentable.",
  focus:
    "Integra identidad de equipo, desafíos D3 a D8 completamente desarrollados, rutas personales de aprendizaje, mapa conceptual y el diagnóstico organizacional.",
  objectives: [
    "Mostrar el proceso de trabajo del equipo con una lectura clara y ordenada.",
    "Conectar cada desafío con aprendizajes, evidencias y decisiones de diseño e implementación.",
    "Dejar una estructura reutilizable para incorporar materiales finales sin rehacer el sitio."
  ],
  integrations: [
    "Home como síntesis general del portfolio.",
    "Equipo y RPA para explicar roles, evolución y aportes individuales.",
    "Desafíos D3 a D8 completamente documentados con sus respectivas evidencias.",
    "Mapa conceptual como lectura complementaria de los aprendizajes."
  ],
  result:
    "El resultado es un portfolio académico coherente, responsive y mantenible, preparado para exhibir el avance real de la primera semana, documentar la primera entrevista de diagnóstico al cliente y sumar nuevas etapas sin rehacer la experiencia.",
  evidences: [
    {
      title: "Diagnóstico organizacional · primera entrevista al cliente",
      description:
        "Documento PDF con el relevamiento inicial realizado al cliente, utilizado como base para entender el contexto de trabajo y orientar las próximas decisiones del TPI.",
      type: "Documento",
      href: "/tpi/diagnostico-organizacion-tpi-2026-gg.pdf",
      status: "available"
    },
    {
      title: "Documento principal · análisis y desarrollo de plan de trabajo",
      description:
        "Documento de trabajo en formato Word (DOCX) que engloba el análisis organizacional de Esnal Seguros y el desarrollo detallado del plan de trabajo.",
      type: "Documento de trabajo",
      href: "/tpi/TPI-Gestión Compartida.docx",
      status: "available"
    },
    {
      title: "Infografía gráfica · información general del TPI",
      description:
        "Infografía visual en formato de imagen (JPEG) que resume de manera gráfica la información general y aspectos clave del Trabajo Práctico Integrador.",
      type: "Infografía",
      href: "/tpi/InfografiaTPI.jpeg",
      status: "available"
    }
  ]
};

export const closingReflection = {
  title: "Cierre del equipo",
  detail:
    "Gestión Compartida presenta un portfolio que no solo exhibe entregables: también deja visible cómo piensa, aprende, prueba y mejora en conjunto."
};

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challengeContent.find((item) => item.slug === slug);
