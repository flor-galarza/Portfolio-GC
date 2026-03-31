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

export const siteMeta = {
  teamName: "Gestión Compartida",
  teamLabel: "Portfolio académico del equipo",
  description:
    "Sitio multipágina que conecta desafíos, TPI, rutas de aprendizaje y evidencias del equipo Gestión Compartida.",
  logoAlt: "Logo del equipo Gestión Compartida"
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/equipo", label: "Equipo" },
  { href: "/rpa", label: "RPA" },
  { href: "/tpi", label: "TPI" },
  { href: "/mapa-conceptual", label: "Mapa conceptual" }
];

export const challengeSlugs = ["d3", "d4", "d5", "d6", "d7"];

export const teamMembers: TeamMember[] = [
  {
    id: "camila-rojas",
    name: "Camila Rojas",
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
    id: "mateo-silva",
    name: "Mateo Silva",
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
    id: "valentina-perez",
    name: "Valentina Perez",
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
    id: "lucas-diaz",
    name: "Lucas Diaz",
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
    code: "D3",
    title: "Descubrimiento y definición del problema",
    summary: "Se investigó el contexto inicial para entender necesidades, actores y oportunidades de mejora del proyecto.",
    problem:
      "El equipo necesitaba evitar decisiones basadas en supuestos y construir una base común sobre qué problema valía la pena resolver primero.",
    solution:
      "Se organizaron entrevistas breves, afinidad de hallazgos y priorización MoSCoW para convertir información dispersa en un enfoque accionable.",
    tools: ["Miro", "Notion", "Google Meet", "Matrices de priorización"],
    evidences: [
      {
        title: "Mapa de afinidad",
        description: "Documento visual con agrupación de hallazgos y primeras oportunidades detectadas.",
        type: "Documento",
        status: "placeholder"
      },
      {
        title: "Resumen de entrevistas",
        description: "Síntesis lista para cargar con observaciones reales del equipo o de docentes.",
        type: "Documento",
        status: "placeholder"
      },
      {
        title: "Priorización inicial",
        description: "Registro de criterios y decisiones que guiaron el resto de los desafíos.",
        type: "Presentación",
        status: "placeholder"
      }
    ],
    learnings: [
      {
        title: "Aprendizaje principal",
        detail: "Entender el problema con profundidad redujo retrabajos posteriores y permitió discutir con más foco."
      },
      {
        title: "Qué funcionó bien",
        detail: "Tener evidencia temprana ayudó a justificar decisiones frente a docentes y al propio equipo."
      },
      {
        title: "Competencias desarrolladas",
        detail: "Se fortalecieron investigación, análisis crítico y gestión colaborativa del alcance."
      }
    ],
    wouldDoDifferent: [
      "Registrar más citas textuales para enriquecer las evidencias cualitativas.",
      "Incorporar antes un tablero compartido para seguimiento de hallazgos."
    ],
    competenciesDeveloped: ["Investigación UX", "Priorización", "Análisis de contexto"],
    tpiConnection:
      "D3 definió la base conceptual del TPI: el resto del sitio retoma los problemas, necesidades y decisiones priorizadas en esta etapa."
  },
  {
    slug: "d4",
    code: "D4",
    title: "Prototipado y experiencia",
    summary: "El desafío consolidó una propuesta visual y de navegación capaz de ordenar el contenido del portfolio.",
    problem:
      "Existían ideas valiosas pero dispersas; faltaba una estructura visual común para mostrar equipo, desafíos, TPI y evidencias sin saturar la experiencia.",
    solution:
      "Se prototiparon recorridos, se definieron patrones de cards y se validó una experiencia multipágina enfocada en claridad y legibilidad.",
    tools: ["Figma", "Loom", "Diagramas de flujo", "Revisión heurística"],
    evidences: [
      {
        title: "Wireframes del recorrido",
        description: "Placeholder para capturas de baja y media fidelidad del sitio.",
        type: "Imagen",
        status: "placeholder"
      },
      {
        title: "Mapa de navegación",
        description: "Estructura que conecta home, páginas temáticas y desafíos del D3 al D7.",
        type: "Documento",
        status: "placeholder"
      },
      {
        title: "Feedback interno",
        description: "Resumen breve de observaciones surgidas en la validación entre integrantes.",
        type: "Video/nota",
        status: "placeholder"
      }
    ],
    learnings: [
      {
        title: "Aprendizaje principal",
        detail: "Prototipar temprano volvió visibles los cuellos de lectura y mejoró la jerarquía visual del portfolio."
      },
      {
        title: "Qué funcionó bien",
        detail: "Pensar en componentes desde el diseño facilitó la implementación posterior en Astro."
      },
      {
        title: "Competencias desarrolladas",
        detail: "Se reforzaron UX, prototipado, comunicación visual y validación rápida."
      }
    ],
    wouldDoDifferent: [
      "Probar más variantes del home antes de fijar la composición final.",
      "Agregar una instancia corta de test con usuarios externos al equipo."
    ],
    competenciesDeveloped: ["Prototipado", "Diseño UI", "Arquitectura de información"],
    tpiConnection:
      "D4 estableció el lenguaje visual que luego el TPI usa para mostrar relaciones entre personas, procesos, desafíos y resultados."
  },
  {
    slug: "d5",
    code: "D5",
    title: "Implementación del micrositio",
    summary: "Se llevó el prototipo a un sitio funcional, reusable y preparado para completar con contenido real.",
    problem:
      "La dificultad era construir una experiencia multipágina profesional sin duplicar contenido ni perder flexibilidad para cambios de última hora.",
    solution:
      "Se adoptó Astro con páginas file-based, layout compartido, componentes reutilizables y un archivo central de datos para contenido editable.",
    tools: ["Astro", "TypeScript", "Tailwind CSS 4", "CSS custom properties"],
    evidences: [
      {
        title: "Repositorio funcional",
        description: "Base del proyecto con navegación, páginas dedicadas y estilos consistentes.",
        type: "Código",
        status: "available"
      },
      {
        title: "Build validado",
        description: "Evidencia del sitio estático generado sin errores de chequeo o compilación.",
        type: "Reporte",
        status: "available"
      },
      {
        title: "Capturas responsive",
        description: "Espacio listo para anexar vistas mobile y desktop de la entrega final.",
        type: "Imagen",
        status: "placeholder"
      }
    ],
    learnings: [
      {
        title: "Aprendizaje principal",
        detail: "Separar contenido y presentación permitió escalar el proyecto sin rehacer secciones enteras."
      },
      {
        title: "Qué funcionó bien",
        detail: "La reutilización de plantillas redujo inconsistencias entre desafíos y páginas globales."
      },
      {
        title: "Competencias desarrolladas",
        detail: "Se fortalecieron desarrollo frontend, arquitectura de información y mantenimiento de contenido."
      }
    ],
    wouldDoDifferent: [
      "Automatizar aún más la generación de capturas o estados de entrega.",
      "Sumar contenido definitivo del equipo desde etapas más tempranas."
    ],
    competenciesDeveloped: ["Desarrollo web", "Componentización", "Responsive design"],
    tpiConnection:
      "D5 materializa el TPI: convierte el proceso conceptual y metodológico en una interfaz navegable y verificable."
  },
  {
    slug: "d6",
    code: "D6",
    title: "Automatización y control de calidad",
    summary: "Se definieron rutinas y soportes para que cada entrega tuviera evidencia consistente y fácil de revisar.",
    problem:
      "El equipo necesitaba una forma repetible de revisar avances, consolidar evidencias y sostener calidad sin depender de memoria individual.",
    solution:
      "Se construyeron plantillas de revisión, criterios compartidos y una lógica de trazabilidad que ordena qué material falta y cómo reemplazarlo.",
    tools: ["Google Sheets", "Notion", "Checklist QA", "Documentación compartida"],
    evidences: [
      {
        title: "Checklist de QA",
        description: "Guía reusable para controlar consistencia de contenido, diseño y entregables.",
        type: "Documento",
        status: "placeholder"
      },
      {
        title: "Matriz de seguimiento",
        description: "Registro de estado por desafío y por tipo de evidencia esperada.",
        type: "Planilla",
        status: "placeholder"
      },
      {
        title: "Rutina semanal de revisión",
        description: "Resumen breve de cómo se ordenaban ajustes y pendientes entre integrantes.",
        type: "Nota operativa",
        status: "placeholder"
      }
    ],
    learnings: [
      {
        title: "Aprendizaje principal",
        detail: "La automatización no fue solo técnica: también implicó normalizar procesos y criterios compartidos."
      },
      {
        title: "Qué funcionó bien",
        detail: "La trazabilidad redujo pérdidas de contexto y volvió más simple el reemplazo de placeholders por contenido real."
      },
      {
        title: "Competencias desarrolladas",
        detail: "Se trabajaron gestión, control de calidad, automatización ligera y seguimiento colaborativo."
      }
    ],
    wouldDoDifferent: [
      "Relacionar antes las evidencias con responsables concretos por integrante.",
      "Agregar métricas de avance visibles dentro del proceso de revisión."
    ],
    competenciesDeveloped: ["QA", "Automatización operativa", "Gestión de evidencias"],
    tpiConnection:
      "D6 sostiene al TPI al garantizar que cada sección del sitio tenga respaldo, orden y capacidad de actualización rápida."
  },
  {
    slug: "d7",
    code: "D7",
    title: "Presentación final y síntesis profesional",
    summary: "El equipo integró proceso, evidencias y resultados en una narrativa lista para exposición académica.",
    problem:
      "Hacía falta cerrar el recorrido con una presentación clara, convincente y alineada con el valor real generado durante la cursada.",
    solution:
      "Se diseñó un relato final que organiza hitos, aprendizajes y resultados alrededor del portfolio, el TPI y la evolución del equipo.",
    tools: ["Canva", "Astro", "YouTube", "Presentación final"],
    evidences: [
      {
        title: "Guion de exposición",
        description: "Estructura editable para articular qué se cuenta en vivo y cómo se navega el sitio durante la presentación.",
        type: "Documento",
        status: "placeholder"
      },
      {
        title: "Demo navegable del portfolio",
        description: "El propio sitio funciona como respaldo de la exposición y del proceso completo del equipo.",
        type: "Sitio web",
        status: "available"
      },
      {
        title: "Feedback final",
        description: "Espacio para incorporar devoluciones de docentes y aprendizajes posteriores a la entrega.",
        type: "Nota",
        status: "placeholder"
      }
    ],
    learnings: [
      {
        title: "Aprendizaje principal",
        detail: "La síntesis final fue más sólida cuando cada evidencia quedó vinculada a una decisión o un aprendizaje del equipo."
      },
      {
        title: "Qué funcionó bien",
        detail: "El portfolio permitió mostrar no solo el resultado, sino también la lógica detrás de cada elección."
      },
      {
        title: "Competencias desarrolladas",
        detail: "Se reforzaron presentación oral, storytelling técnico, análisis retrospectivo y trabajo interdisciplinario."
      }
    ],
    wouldDoDifferent: [
      "Grabar antes una versión preliminar de la presentación para iterar el guion.",
      "Cerrar con material audiovisual definitivo de todos los desafíos."
    ],
    competenciesDeveloped: ["Storytelling", "Presentación", "Reflexión crítica"],
    tpiConnection:
      "D7 es el cierre del TPI: muestra cómo los contenidos del sitio se integran para construir una evidencia profesional de aprendizaje."
  }
];

export const rpaSummary =
  "Las rutas personales de aprendizaje muestran cómo cada integrante de Gestión Compartida conectó intereses, fortalezas y competencias con los desafíos reales del proyecto.";

export const tpiContent: TpiContent = {
  description:
    "El Trabajo Práctico Integrador consolida investigación, experiencia, implementación, automatización y comunicación técnica en un solo portfolio digital.",
  focus:
    "El foco del TPI es demostrar trazabilidad: cada decisión visual o técnica del sitio está vinculada con un desafío, una evidencia y una reflexión del equipo.",
  objectives: [
    "Construir una narrativa profesional y verificable del proceso del equipo.",
    "Conectar desafíos, competencias y resultados en una experiencia de navegación clara.",
    "Mantener una base fácil de actualizar cuando se agreguen videos, mapas o documentos finales."
  ],
  integrations: [
    "Home sintetiza identidad, equipo, accesos y visión general del TPI.",
    "Cada desafío muestra problema, solución, evidencias y reflexión con relación directa al TPI.",
    "Las RPA explican la evolución individual que sostiene el logro colectivo.",
    "Los mapas conceptuales traducen el aprendizaje en una estructura visual por niveles."
  ],
  result:
    "El resultado es un sitio web multipágina, responsive y orientado a modo oscuro, con componentes reutilizables, placeholders elegantes y una arquitectura preparada para el cierre académico final.",
  evidences: [
    {
      title: "Arquitectura multipágina",
      description: "Navegación clara entre Home, Equipo, RPA, TPI, Mapa conceptual y desafíos D3 a D7.",
      type: "Sitio web",
      status: "available"
    },
    {
      title: "Contenido centralizado",
      description: "Fuente única de datos para mantener consistencia y reemplazar placeholders sin romper layouts.",
      type: "Código",
      status: "available"
    },
    {
      title: "Material final pendiente",
      description: "Videos, mapas finales y documentos definitivos pueden cargarse luego sobre una base ya lista.",
      type: "Placeholder",
      status: "placeholder"
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
