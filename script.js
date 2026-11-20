// Catálogo completo de 26 actividades: Ambiental (10), SST (7) y Otras / GitHub (9)
// Autor: Enrique Erazo (2026)
const ACTIVITIES = [
  // ======================== MÓDULO AMBIENTAL (10) ========================
  {
    id: "amb-generalidades",
    category: "Ambiental",
    type: "Guía y Conceptos",
    folder: "Ambiental/generalidades_ambientales",
    url: "./Ambiental/generalidades_ambientales/index.html",
    title: "Generalidades Ambientales",
    shortDesc: "Conceptos base: ecosistemas, servicios ambientales y normas esenciales para cuidar nuestro entorno.",
    fullDesc:
      "Actividad introductoria diseñada para comprender los principios básicos del medio ambiente, los servicios ambientales, la interacción entre el ser humano y los ecosistemas y la normativa esencial.",
    topics: [
      "Conceptos clave de ecología y medio ambiente",
      "Servicios ambientales y componentes de los ecosistemas",
      "Normas esenciales para la protección del entorno"
    ],
    colors: ["#14532d", "#22c55e"],
    icon: "🌍"
  },
  {
    id: "amb-recursos-1",
    category: "Ambiental",
    type: "Actividad Interactiva",
    folder: "Ambiental/recursos_naturales",
    url: "./Ambiental/recursos_naturales/index.html",
    title: "Recursos Naturales (Parte 1)",
    shortDesc: "Identifica recursos renovables y no renovables. ¡Aplica buenas prácticas de uso responsable!",
    fullDesc:
      "Explora la diferencia entre recursos naturales renovables, no renovables e inagotables, analizando buenas prácticas de uso responsable en la vida cotidiana y los sectores productivos.",
    topics: [
      "Recursos renovables y no renovables",
      "Uso racional del agua, suelo y biodiversidad",
      "Buenas prácticas de aprovechamiento responsable"
    ],
    colors: ["#065f46", "#10b981"],
    icon: "🌲"
  },
  {
    id: "amb-recursos-2",
    category: "Ambiental",
    type: "Taller Aplicado",
    folder: "Ambiental/recursos_naturales2",
    url: "./Ambiental/recursos_naturales2/index.html",
    title: "Recursos Naturales (Parte 2)",
    shortDesc: "Profundiza en estrategias de conservación y en el rol ciudadano para proteger los recursos.",
    fullDesc:
      "Segunda fase de aprendizaje con ejercicios dinámicos para evaluar estrategias de conservación y fortalecer el rol ciudadano en la protección de los recursos naturales.",
    topics: [
      "Estrategias de conservación ambiental",
      "Rol ciudadano y corresponsabilidad ecológica",
      "Cuestionario interactivo de refuerzo"
    ],
    colors: ["#047857", "#34d399"],
    icon: "💧"
  },
  {
    id: "amb-ozono",
    category: "Ambiental",
    type: "Módulo Temático",
    folder: "Ambiental/calentamiento_ozono",
    url: "./Ambiental/calentamiento_ozono/index.html",
    title: "Calentamiento y Capa de Ozono",
    shortDesc: "Explora causas y efectos del calentamiento, el papel de la capa de ozono y acciones para mitigar impactos.",
    fullDesc:
      "Analiza las causas y consecuencias del calentamiento global frente al papel protector de la capa de ozono estratosférico, identificando acciones de mitigación y adaptación.",
    topics: [
      "Causas y efectos del calentamiento global",
      "Función y protección de la capa de ozono",
      "Acciones prácticas para mitigar impactos climáticos"
    ],
    colors: ["#1e3a8a", "#38bdf8"],
    icon: "☀️"
  },
  {
    id: "amb-residuos-1",
    category: "Ambiental",
    type: "Taller y Evaluación",
    folder: "Ambiental/residuos_solidos",
    url: "./Ambiental/residuos_solidos/index.html",
    answersUrl: "./Ambiental/residuos_solidos/respuestas.html",
    title: "Residuos Sólidos (Parte 1)",
    shortDesc: "Clasificación, colores y separación en la fuente. ¡Empieza por casa y multiplica el impacto!",
    fullDesc:
      "Aprende a clasificar correctamente los residuos sólidos según el código de colores vigente y a realizar una adecuada separación en la fuente desde el hogar y el trabajo.",
    topics: [
      "Clasificación de residuos y código de colores",
      "Separación en la fuente en casa y empresa",
      "Incluye hoja de verificación de respuestas"
    ],
    colors: ["#166534", "#84cc16"],
    icon: "♻️"
  },
  {
    id: "amb-residuos-2",
    category: "Ambiental",
    type: "GitHub Pages · Taller",
    folder: "kikeerazo.github.io/ambiental",
    url: "https://kikeerazo.github.io/ambiental/",
    answersUrl: "./Ambiental/residuos_solidos2/respuestas.html",
    title: "Residuos Sólidos (Parte 2)",
    shortDesc: "Rutas selectivas, aprovechamiento y economía circular. ¡Pasa del reciclaje a la valorización!",
    fullDesc:
      "Actividad alojada en GitHub Pages enfocada en rutas selectivas de recolección, aprovechamiento de materiales y modelos de economía circular para pasar del reciclaje a la valorización.",
    topics: [
      "Rutas selectivas y aprovechamiento de residuos",
      "Economía circular y valorización de materiales",
      "Incluye hoja de respuestas de apoyo"
    ],
    colors: ["#3f6212", "#a3e635"],
    icon: "🗑️"
  },
  {
    id: "amb-sostenibilidad",
    category: "Ambiental",
    type: "GitHub Pages · Guía",
    folder: "kikeerazo.github.io/sostenibilidad",
    url: "https://kikeerazo.github.io/sostenibilidad/",
    title: "Sostenibilidad",
    shortDesc: "Conecta lo social, ambiental y económico para decisiones sostenibles en tu comunidad y trabajo.",
    fullDesc:
      "Recurso interactivo en GitHub Pages que conecta las dimensiones social, ambiental y económica para promover decisiones sostenibles en la comunidad y el entorno laboral.",
    topics: [
      "Equilibrio entre los pilares social, ambiental y económico",
      "Objetivos de Desarrollo Sostenible (ODS)",
      "Toma de decisiones sostenibles en el trabajo y la comunidad"
    ],
    colors: ["#115e59", "#2dd4bf"],
    icon: "🌱"
  },
  {
    id: "amb-bhopal-1",
    category: "Ambiental",
    type: "Caso",
    folder: "Ambiental/bhopal",
    url: "./Ambiental/bhopal/index.html",
    title: "Caso Ambiental Bhopal (Nivel 1)",
    shortDesc: "Estudio histórico y ambiental del desastre químico de Bhopal de 1984.",
    fullDesc:
      "Analiza los antecedentes, el escape de isocianato de metilo y la contaminación persistente en suelo y fuentes hídricas tras la tragedia industrial de Bhopal.",
    topics: [
      "Contexto del accidente industrial en Bhopal",
      "Contaminación atmosférica, hídrica y del suelo",
      "Lecciones ambientales para la industria química"
    ],
    colors: ["#7c2d12", "#f97316"],
    icon: "🏭"
  },
  {
    id: "amb-bhopal-2",
    category: "Ambiental",
    type: "Caso",
    folder: "Ambiental/bhopal2",
    url: "./Ambiental/bhopal2/index.html",
    title: "Caso Ambiental Bhopal (Nivel 2)",
    shortDesc: "Análisis de causas raíz, protocolos de emergencia y responsabilidad ambiental.",
    fullDesc:
      "Profundiza en las fallas de mantenimiento, ausencia de planes de contingencia comunitaria y evaluación de daños ecológicos a largo plazo.",
    topics: [
      "Evaluación de riesgos químico-ambientales",
      "Planes de emergencia y respuesta comunitaria",
      "Responsabilidad social y ambiental empresarial"
    ],
    colors: ["#9a3412", "#fb923c"],
    icon: "⚠️"
  },
  {
    id: "amb-bhopal-3",
    category: "Ambiental",
    type: "Simulador",
    folder: "Ambiental/bhopal3",
    url: "./Ambiental/bhopal3/index.html",
    title: "Caso Ambiental Bhopal (Nivel 3 · Simulador)",
    shortDesc: "Juego interactivo de prevención y toma de decisiones críticas en planta.",
    fullDesc:
      "Simulador práctico donde deberás identificar alertas tempranas y ejecutar medidas preventivas para evitar una catástrofe ambiental.",
    topics: [
      "Detección temprana de fallas críticas",
      "Toma de decisiones bajo presión",
      "Prevención de desastres tecnológicos y ambientales"
    ],
    colors: ["#991b1b", "#f87171"],
    icon: "🎮"
  },
  {
    id: "amb-residuos-3-reto",
    category: "Ambiental",
    type: "Simulador · Juego",
    folder: "Ambiental/reto-residuos",
    url: "./Ambiental/reto-residuos/index.html",
    title: "Gestión Integral de Residuos Sólidos (Reto Interactivo)",
    shortDesc: "Trivia competitiva con cronómetro en vivo y podio global: GTC 24, Res. 2184, GTC 86, Serie GTC 53, RESPEL y 9R.",
    fullDesc:
      "Desafío interactivo de 12 preguntas escalonadas sobre separación en la fuente (GTC 24 / Resolución 2184 de 2019), implementación (GTC 86), ecomapas, aprovechamiento (Serie GTC 53), gestión de residuos peligrosos (RESPEL) y Economía Circular (9R). Incluye comodines, cronómetro visual y tabla de posiciones sincronizada en tiempo real.",
    topics: [
      "Separación en la fuente (GTC 24 / Res. 2184 de 2019) y GTC 86",
      "Ecomapas, cuantificación y aprovechamiento (Serie GTC 53)",
      "Gestión de RESPEL, Convenio de Basilea, SGA y Economía Circular (9R)"
    ],
    colors: ["#065f46", "#fbbf24"],
    icon: "🏆"
  },

  // ======================== MÓDULO SST (7) ========================
  {
    id: "sst-generalidades",
    category: "SST",
    type: "Guía y Conceptos",
    folder: "SST/generalidades_sst",
    url: "./SST/generalidades_sst/index.html",
    title: "Generalidades SST",
    shortDesc: "Fundamentos del SG-SST: roles, normativa clave y cultura de prevención en el trabajo.",
    fullDesc:
      "Domina la terminología esencial de la Seguridad y Salud en el Trabajo, los roles y responsabilidades, la normativa clave y la cultura de prevención en el trabajo.",
    topics: [
      "Fundamentos y ciclo PHVA del SG-SST",
      "Roles, responsabilidades y normativa aplicable",
      "Fomento de la cultura de prevención en el trabajo"
    ],
    colors: ["#0c4a6e", "#0284c7"],
    icon: "🦺"
  },
  {
    id: "sst-preguntas-generalidades",
    category: "SST",
    type: "Autoevaluación",
    folder: "SST/preguntas_generalidades_sst",
    url: "./SST/preguntas_generalidades_sst/index.html",
    title: "Preguntas de Generalidades SST",
    shortDesc: "Autoevaluación lúdica: valida tus conocimientos base y descubre áreas por reforzar.",
    fullDesc:
      "Cuestionario interactivo de autoevaluación para comprobar tu dominio de los conceptos fundamentales de Seguridad y Salud en el Trabajo e identificar temas de refuerzo.",
    topics: [
      "Validación de conceptos base del SG-SST",
      "Retroalimentación inmediata por pregunta",
      "Diagnóstico de áreas por reforzar"
    ],
    colors: ["#075985", "#38bdf8"],
    icon: "❓"
  },
  {
    id: "sst-medidas-control",
    category: "SST",
    type: "Actividad Interactiva",
    folder: "SST/medidas_control",
    url: "./SST/medidas_control/index.html",
    title: "Medidas de Control",
    shortDesc: "Jerarquía de controles, EPP y permisos de trabajo. ¡Elige el control correcto para cada peligro!",
    fullDesc:
      "Aprende a seleccionar e implementar medidas de intervención eficaces siguiendo la jerarquía de controles, el uso adecuado de EPP y los permisos de trabajo seguro.",
    topics: [
      "Jerarquía de controles (eliminación, sustitución, ingeniería, administrativos, EPP)",
      "Selección de Elementos de Protección Personal (EPP)",
      "Permisos de trabajo y control operativo"
    ],
    colors: ["#1e40af", "#3b82f6"],
    icon: "🛡️"
  },
  {
    id: "sst-casos",
    category: "SST",
    type: "Caso",
    folder: "SST/casos_sst",
    url: "./SST/casos_sst/index.html",
    answersUrl: "./SST/casos_sst/respuestas.html",
    title: "Casos SST",
    shortDesc: "Analiza casos de incidentes y accidentes para practicar investigación y medidas de prevención.",
    fullDesc:
      "Banco interactivo de casos sobre incidentes y accidentes laborales para practicar el análisis de causas, investigación y formulación de medidas preventivas.",
    topics: [
      "Análisis de incidentes y accidentes de trabajo",
      "Identificación de causas básicas e inmediatas",
      "Incluye hoja de respuestas de estudio"
    ],
    colors: ["#1d4ed8", "#60a5fa"],
    icon: "📋"
  },
  {
    id: "sst-aprendiz-sena",
    category: "SST",
    type: "Caso",
    folder: "SST/caso_aprendiz_sena",
    url: "./SST/caso_aprendiz_sena/index.html",
    title: "Caso Aprendiz SENA (Lúdica SST)",
    shortDesc: "Argumenta y puntúa mientras fortaleces tu comprensión del SG-SST con un caso realista.",
    fullDesc:
      "Estudio de caso lúdico contextualizado para aprendices SENA donde argumentas decisiones y sumas puntos mientras fortaleces tu comprensión del SG-SST.",
    topics: [
      "Deberes, derechos y cobertura ARL del aprendiz SENA",
      "Argumentación y toma de decisiones preventivas",
      "Evaluación dinámica por puntuación"
    ],
    colors: ["#0369a1", "#22d3ee"],
    icon: "🎓"
  },
  {
    id: "sst-palabras",
    category: "SST",
    type: "Simulador",
    folder: "SST/palabras_sst",
    url: "./SST/palabras_sst/index.html",
    title: "Palabras SST (Dinámica)",
    shortDesc: "Refuerza conceptos SST con juegos de palabras y retos de vocabulario aplicado.",
    fullDesc:
      "Dinámica lúdica para reforzar la terminología técnica de Seguridad y Salud en el Trabajo mediante juegos de palabras y asociación de definiciones.",
    topics: [
      "Vocabulario aplicado de higiene y seguridad industrial",
      "Retos interactivos de definiciones y conceptos",
      "Aprendizaje activo y gamificado"
    ],
    colors: ["#3730a3", "#818cf8"],
    icon: "🔤"
  },
  {
    id: "sst-bhopal",
    category: "SST",
    type: "Caso",
    folder: "SST/bhopal",
    url: "./SST/bhopal/index.html",
    title: "Caso Seguridad Industrial: Bhopal",
    shortDesc: "Enfoque de seguridad de procesos, mantenimiento preventivo y protección al trabajador.",
    fullDesc:
      "Analiza desde la perspectiva de la Seguridad y Salud en el Trabajo las fallas en sistemas de seguridad, alarmas, capacitación del personal y gestión del riesgo químico.",
    topics: [
      "Seguridad de procesos y mantenimiento preventivo",
      "Sistemas de alarma y barreras de contención",
      "Protección de la salud de los trabajadores"
    ],
    colors: ["#7f1d1d", "#ef4444"],
    icon: "⛑️"
  },

  // ======================== MÓDULO OTRAS / GITHUB (9) ========================
  {
    id: "otras-1-rm-musica",
    category: "Otras",
    type: "Multimedia · GitHub",
    folder: "kikeerazo.github.io/rm",
    url: "https://kikeerazo.github.io/rm/",
    title: "1. RM — Reproductor de Música",
    shortDesc: "Reproductor de Música con varios generos, Rock - 80's y 90´s - Pop - Dance - Salsa - Baladas - Instrumental",
    fullDesc:
      "Reproductor web multi-género desarrollado por Enrique Erazo con emisoras y listas de Rock, 80's y 90's, Pop, Dance, Salsa, Baladas e Instrumental.",
    topics: [
      "Géneros: Rock, 80's y 90's, Pop, Dance, Salsa, Baladas e Instrumental",
      "Controles de reproducción web interactivos",
      "Alojado en kikeerazo.github.io/rm"
    ],
    colors: ["#4c1d95", "#8b5cf6"],
    icon: "🎵"
  },
  {
    id: "otras-2-musica",
    category: "Otras",
    type: "Multimedia · GitHub",
    folder: "kikeerazo.github.io/musica",
    url: "https://kikeerazo.github.io/musica/",
    title: "2. Música",
    shortDesc: "Pequeño reproductor musical para ambientar actividades.",
    fullDesc:
      "Reproductor musical ligero diseñado para ambientar talleres, pausas activas y sesiones de aprendizaje.",
    topics: [
      "Ambientación musical rápida y sencilla",
      "Interfaz minimalista para navegador",
      "Alojado en kikeerazo.github.io/musica"
    ],
    colors: ["#5b21b6", "#a78bfa"],
    icon: "🎶"
  },
  {
    id: "otras-3-drive",
    category: "Otras",
    type: "Herramienta · GitHub",
    folder: "kikeerazo.github.io/reproductorgoogledrive",
    url: "https://kikeerazo.github.io/reproductorgoogledrive/",
    title: "3. Reproductor Google Drive",
    shortDesc: "Reproduce contenidos almacenados en Drive de forma sencilla.",
    fullDesc:
      "Utilidad web diseñada para cargar y reproducir directamente archivos audiovisuales almacenados en Google Drive.",
    topics: [
      "Reproducción directa desde enlaces de Google Drive",
      "Interfaz clara y accesible",
      "Alojado en kikeerazo.github.io/reproductorgoogledrive"
    ],
    colors: ["#1d4ed8", "#38bdf8"],
    icon: "▶️"
  },
  {
    id: "otras-4-calculadora",
    category: "Otras",
    type: "Herramienta · GitHub",
    folder: "kikeerazo.github.io/CalculadoraIndependiente",
    url: "https://kikeerazo.github.io/CalculadoraIndependiente/",
    title: "4. Calculadora Independiente",
    shortDesc: "Calcula de forma clara y confiable tus aportes a seguridad social como trabajador independiente o contratista en Colombia, conforme a la normativa vigente.",
    fullDesc:
      "Calculadora especializada para determinar el Ingreso Base de Cotización (IBC) y liquidar aportes a Salud, Pensión y ARL de trabajadores independientes y contratistas en Colombia según la normativa vigente.",
    topics: [
      "Liquidación de IBC, Salud, Pensión y Riesgos Laborales (ARL)",
      "Conforme a la normativa vigente en Colombia para independientes y contratistas",
      "Alojado en kikeerazo.github.io/CalculadoraIndependiente"
    ],
    colors: ["#0f766e", "#14b8a6"],
    icon: "🧮"
  },
  {
    id: "otras-5-ahorcado",
    category: "Otras",
    type: "Simulador · Juego",
    folder: "kikeerazo.github.io/juegoAhorcado",
    url: "https://kikeerazo.github.io/juegoAhorcado/",
    title: "5. Juego del Ahorcado",
    shortDesc: "Ahorcado clásico para reforzar vocabulario y conceptos.",
    fullDesc:
      "Juego interactivo del ahorcado creado para practicar vocabulario, ortografía y conceptos clave mediante retos dinámicos.",
    topics: [
      "Dinámica lúdica de palabras y pistas",
      "Refuerzo de vocabulario y conceptos",
      "Alojado en kikeerazo.github.io/juegoAhorcado"
    ],
    colors: ["#b45309", "#f59e0b"],
    icon: "🎯"
  },
  {
    id: "otras-6-encriptador",
    category: "Otras",
    type: "Herramienta · GitHub",
    folder: "kikeerazo.github.io/encriptadorDesencriptador",
    url: "https://kikeerazo.github.io/encriptadorDesencriptador/",
    title: "6. Encriptador / Desencriptador",
    shortDesc: "Cifra y descifra mensajes. Perfecto para retos y dinámicas.",
    fullDesc:
      "Aplicación web interactiva para cifrar y descifrar textos de forma instantánea, ideal para dinámicas de grupo, acertijos y ejercicios de lógica.",
    topics: [
      "Cifrado y descifrado rápido de mensajes",
      "Ideal para retos educativos y dinámicas",
      "Alojado en kikeerazo.github.io/encriptadorDesencriptador"
    ],
    colors: ["#1e293b", "#64748b"],
    icon: "🔐"
  },
  {
    id: "otras-7-portafolio",
    category: "Otras",
    type: "Acceso Protegido",
    folder: "kikeerazo.github.io/portafolio",
    url: "https://kikeerazo.github.io/portafolio/",
    requirePassword: true,
    password: "76327133",
    title: "7. Portafolio (Protegido)",
    shortDesc: "Presentación profesional. Acceso restringido desde este menú.",
    fullDesc:
      "Portafolio profesional de Enrique Erazo. Requiere ingresar la contraseña de autorización para visualizar su contenido.",
    topics: [
      "Presentación profesional y proyectos desarrollados",
      "Protegido mediante contraseña de acceso",
      "Alojado en kikeerazo.github.io/portafolio"
    ],
    colors: ["#334155", "#94a3b8"],
    icon: "🔒"
  },
  {
    id: "otras-8-eai-dane",
    category: "Otras",
    type: "Recurso Ambiental · DANE",
    folder: "kikeerazo.github.io/eai",
    url: "https://kikeerazo.github.io/eai/",
    title: "8. ENCUESTA AMBIENTAL INDUSTRIAL EAI",
    shortDesc: "DEPARTAMENTO ADMINISTRATIVO NACIONAL DE ESTADÍSTICA - DANE",
    fullDesc:
      "Aplicación de consulta y apoyo sobre la Encuesta Ambiental Industrial (EAI) del Departamento Administrativo Nacional de Estadística (DANE) en Colombia.",
    topics: [
      "Indicadores y variables de la Encuesta Ambiental Industrial (EAI)",
      "Referencia institucional DANE - Colombia",
      "Alojado en kikeerazo.github.io/eai"
    ],
    colors: ["#166534", "#10b981"],
    icon: "📊"
  },
  {
    id: "otras-9-formulario",
    category: "Otras",
    type: "Práctica Web · GitHub",
    folder: "kikeerazo.github.io/formulario",
    url: "https://kikeerazo.github.io/formulario/",
    title: "9. Formulario",
    shortDesc: "Formulario simple para registro y práctica de validaciones.",
    fullDesc:
      "Formulario web interactivo diseñado para el registro de información y la práctica de validaciones de campos en tiempo real.",
    topics: [
      "Registro estructurado de datos",
      "Validación de campos y formatos en HTML/JS",
      "Alojado en kikeerazo.github.io/formulario"
    ],
    colors: ["#4338ca", "#6366f1"],
    icon: "📝"
  },
  {
    id: "otras-10-portafolio-2026",
    category: "Otras",
    type: "Portafolio Actualizado · 2026",
    folder: "kikeerazo.github.io/portafolioEnriquev2",
    url: "https://kikeerazo.github.io/portafolioEnriquev2/",
    requirePassword: true,
    password: "76327133",
    title: "10. Portafolio Profesional Actualizado (2026)",
    shortDesc: "Hoja de vida actualizada a 2026, línea de tiempo (2002–2026), formación, competencias y catálogo completo de actividades.",
    fullDesc:
      "Versión actualizada del portafolio profesional de River Enrique Erazo Benítez (Ecólogo, Especialista en SGC, Instructor Ambiental y SST), con trayectoria certificada, cursos recientes y acceso directo a las aplicaciones educativas.",
    topics: [
      "Perfil profesional, experiencia SENA, DANE, COLNADE y ANEC",
      "Línea de tiempo de avances (2002–2026) y certificaciones actualizadas",
      "Acceso directo al portal unificado de actividades"
    ],
    colors: ["#064e3b", "#10b981"],
    icon: "💼"
  }
];

// Estado de la aplicación
const STORAGE_KEY = "home01_completed_activities_v4";
let completedIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
let activeFilter = "all";
let searchQuery = "";
let currentViewerActivity = null;
let viewingAnswers = false;

// Estado para modal de contraseña
let pendingPwActivity = null;
let pendingPwOpenAnswers = false;

// Referencias DOM
const gridAmbiental = document.getElementById("gridAmbiental");
const gridSst = document.getElementById("gridSst");
const gridOtras = document.getElementById("gridOtras");

const tocAmbiental = document.getElementById("tocAmbiental");
const tocSst = document.getElementById("tocSst");
const tocOtras = document.getElementById("tocOtras");

const seccionAmbiental = document.getElementById("seccion-ambiental");
const seccionSst = document.getElementById("seccion-sst");
const seccionOtras = document.getElementById("seccion-otras");

const countAmbiental = document.getElementById("countAmbiental");
const countSst = document.getElementById("countSst");
const countOtras = document.getElementById("countOtras");

const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");

// Visor integrado
const activityViewer = document.getElementById("activityViewer");
const activityFrame = document.getElementById("activityFrame");
const viewerCategory = document.getElementById("viewerCategory");
const viewerTitle = document.getElementById("viewerTitle");
const viewerCompleteBtn = document.getElementById("viewerCompleteBtn");
const viewerToggleAnswersBtn = document.getElementById("viewerToggleAnswersBtn");
const viewerExternalLink = document.getElementById("viewerExternalLink");

// Actualizar contadores globales dinámicamente
function updateCategoryCounters() {
  const total = ACTIVITIES.length;
  const ambTotal = ACTIVITIES.filter((a) => a.category === "Ambiental").length;
  const sstTotal = ACTIVITIES.filter((a) => a.category === "SST").length;
  const otrasTotal = ACTIVITIES.filter((a) => a.category === "Otras").length;

  document.getElementById("navTotalCount").textContent = total;
  document.getElementById("navAmbCount").textContent = ambTotal;
  document.getElementById("navSstCount").textContent = sstTotal;
  document.getElementById("navOtrasCount").textContent = otrasTotal;

  document.getElementById("tocAmbCount").textContent = ambTotal;
  document.getElementById("tocSstCount").textContent = sstTotal;
  document.getElementById("tocOtrasCount").textContent = otrasTotal;

  document.getElementById("btnAllCount").textContent = total;
  document.getElementById("btnAmbCount").textContent = ambTotal;
  document.getElementById("btnSstCount").textContent = sstTotal;
  document.getElementById("btnOtrasCount").textContent = otrasTotal;
}

// Generador de imagen SVG personalizada por actividad
function createCoverSVG(item) {
  const [c1, c2] = item.colors;
  return `
    <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${item.title}">
      <defs>
        <linearGradient id="grad-${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c2}" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#grad-${item.id})" />
      <circle cx="340" cy="30" r="75" fill="rgba(255,255,255,0.10)" />
      <circle cx="55" cy="145" r="65" fill="rgba(255,255,255,0.08)" />
      <text x="200" y="96" font-size="56" text-anchor="middle" dominant-baseline="middle">${item.icon}</text>
    </svg>
  `;
}

// Guardar y actualizar progreso
function toggleComplete(id) {
  if (completedIds.includes(id)) {
    completedIds = completedIds.filter((item) => item !== id);
  } else {
    completedIds.push(id);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
  renderAll();
  updateViewerHeaderState();
}

function updateProgressUI() {
  const total = ACTIVITIES.length;
  const done = completedIds.filter((id) => ACTIVITIES.some((a) => a.id === id)).length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  document.getElementById("progressCount").textContent = `${done} / ${total}`;
  document.getElementById("progressBarFill").style.width = `${percent}%`;
  document.getElementById("progressPercent").textContent = `${percent}% completado`;
}

// Renderizar Tabla de Contenidos lateral
function renderTOC() {
  tocAmbiental.innerHTML = "";
  tocSst.innerHTML = "";
  tocOtras.innerHTML = "";

  ACTIVITIES.forEach((act) => {
    const isDone = completedIds.includes(act.id);
    const li = document.createElement("li");
    li.className = `toc-item ${isDone ? "done" : ""}`;
    li.innerHTML = `
      <a href="${act.url}" data-open-id="${act.id}" title="${act.requirePassword ? "Requiere contraseña" : "Abrir " + act.title}">
        <span>${act.icon} ${act.title}</span>
        <span>${act.requirePassword ? "🔒" : isDone ? "✅" : "→"}</span>
      </a>
    `;

    if (act.category === "Ambiental") {
      tocAmbiental.appendChild(li);
    } else if (act.category === "SST") {
      tocSst.appendChild(li);
    } else {
      tocOtras.appendChild(li);
    }
  });
}

// Crear tarjeta individual
function createActivityCard(act) {
  const isDone = completedIds.includes(act.id);
  const isSst = act.category === "SST";
  const isOtras = act.category === "Otras";
  const isExternal = /^https?:\/\//i.test(act.url);

  let badgeClass = "badge-amb";
  let btnClass = "";
  if (isSst) {
    badgeClass = "badge-sst";
    btnClass = "sst-btn";
  } else if (isOtras) {
    badgeClass = "badge-otras";
    btnClass = "otras-btn";
  }

  const card = document.createElement("article");
  card.className = `activity-card ${isDone ? "completed" : ""}`;
  card.innerHTML = `
    <div class="card-cover">
      ${createCoverSVG(act)}
      <div class="card-badges">
        <span class="badge ${badgeClass}">${act.category} · ${act.type}</span>
        <button class="check-btn ${isDone ? "is-done" : ""}" data-id="${act.id}" title="Marcar actividad como realizada">
          ${isDone ? "✔ Realizada" : "○ Marcar"}
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-folder">${isExternal ? "🌐" : "📁"} ${act.folder}</div>
      <h3 class="card-title">${act.title}</h3>
      <p class="card-desc">${act.shortDesc}</p>
      <div class="card-actions">
        <a href="${act.url}" data-open-id="${act.id}" class="btn-primary ${btnClass}">
          ${act.requirePassword ? "🔒 Desbloquear y abrir →" : "Abrir actividad →"}
        </a>
        <button class="btn-secondary info-btn" data-id="${act.id}" title="Vista previa e información">
          ℹ️ Vista previa
        </button>
        ${
          act.answersUrl
            ? `<a href="${act.answersUrl}" data-open-id="${act.id}" data-answers="true" class="btn-answers">📝 Ver hoja de respuestas</a>`
            : ""
        }
        ${
          isExternal && !act.requirePassword
            ? `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="btn-github">🌐 Abrir enlace GitHub ↗</a>`
            : ""
        }
      </div>
    </div>
  `;

  return card;
}

// Filtrar y renderizar cuadrículas
function renderGrids() {
  const q = searchQuery.trim().toLowerCase();

  const filtered = ACTIVITIES.filter((act) => {
    const matchesCategory =
      activeFilter === "all" ||
      act.category === activeFilter ||
      act.type.toLowerCase().includes(activeFilter.toLowerCase());

    const matchesSearch =
      !q ||
      act.title.toLowerCase().includes(q) ||
      act.shortDesc.toLowerCase().includes(q) ||
      act.folder.toLowerCase().includes(q) ||
      act.topics.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const ambList = filtered.filter((a) => a.category === "Ambiental");
  const sstList = filtered.filter((a) => a.category === "SST");
  const otrasList = filtered.filter((a) => a.category === "Otras");

  gridAmbiental.innerHTML = "";
  gridSst.innerHTML = "";
  gridOtras.innerHTML = "";

  ambList.forEach((act) => gridAmbiental.appendChild(createActivityCard(act)));
  sstList.forEach((act) => gridSst.appendChild(createActivityCard(act)));
  otrasList.forEach((act) => gridOtras.appendChild(createActivityCard(act)));

  seccionAmbiental.classList.toggle("hidden", ambList.length === 0);
  seccionSst.classList.toggle("hidden", sstList.length === 0);
  seccionOtras.classList.toggle("hidden", otrasList.length === 0);
  emptyState.classList.toggle("hidden", filtered.length > 0);

  countAmbiental.textContent = `${ambList.length} ${ambList.length === 1 ? "actividad" : "actividades"}`;
  countSst.textContent = `${sstList.length} ${sstList.length === 1 ? "actividad" : "actividades"}`;
  countOtras.textContent = `${otrasList.length} ${otrasList.length === 1 ? "actividad" : "actividades"}`;
}

// Visor Integrado (Iframe)
function updateViewerHeaderState() {
  if (!currentViewerActivity) return;
  const act = currentViewerActivity;
  const isDone = completedIds.includes(act.id);

  viewerCategory.textContent = `${act.category} · ${act.type}`;
  viewerTitle.textContent = viewingAnswers ? `${act.title} — Hoja de Respuestas` : act.title;

  viewerCompleteBtn.textContent = isDone ? "✔ Realizada" : "○ Marcar como realizada";
  viewerCompleteBtn.classList.toggle("is-done", isDone);

  if (act.answersUrl) {
    viewerToggleAnswersBtn.classList.remove("hidden");
    viewerToggleAnswersBtn.textContent = viewingAnswers
      ? "📄 Volver a la actividad"
      : "📝 Ver respuestas";
  } else {
    viewerToggleAnswersBtn.classList.add("hidden");
  }

  viewerExternalLink.href = viewingAnswers && act.answersUrl ? act.answersUrl : act.url;
}

function launchActivityInViewer(act, openAnswers = false) {
  const targetUrl = openAnswers && act.answersUrl ? act.answersUrl : act.url;

  closeModal();
  closeMobileSidebar();

  currentViewerActivity = act;
  viewingAnswers = Boolean(openAnswers && act.answersUrl);
  activityFrame.src = targetUrl;

  updateViewerHeaderState();
  activityViewer.classList.remove("hidden");
  document.body.classList.add("viewer-open");
}

function openActivityViewer(id, openAnswers = false) {
  const act = ACTIVITIES.find((item) => item.id === id);
  if (!act) return;

  if (act.requirePassword) {
    openPwModal(act, openAnswers);
    return;
  }

  launchActivityInViewer(act, openAnswers);
}

function closeActivityViewer() {
  activityViewer.classList.add("hidden");
  document.body.classList.remove("viewer-open");
  activityFrame.src = "about:blank";
  currentViewerActivity = null;
  viewingAnswers = false;
}

// Modal de contraseña
function openPwModal(act, openAnswers = false) {
  pendingPwActivity = act;
  pendingPwOpenAnswers = openAnswers;
  document.getElementById("pwActivityName").textContent = act.title;
  const input = document.getElementById("pwInput");
  input.value = "";
  document.getElementById("pwError").classList.add("hidden");
  document.getElementById("pwModal").classList.remove("hidden");
  setTimeout(() => input.focus(), 50);
}

function closePwModal() {
  document.getElementById("pwModal").classList.add("hidden");
  pendingPwActivity = null;
  pendingPwOpenAnswers = false;
}

function validatePw() {
  if (!pendingPwActivity) return;
  const val = (document.getElementById("pwInput").value || "").trim();
  if (val === (pendingPwActivity.password || "")) {
    const act = pendingPwActivity;
    const ans = pendingPwOpenAnswers;
    closePwModal();
    launchActivityInViewer(act, ans);
  } else {
    document.getElementById("pwError").classList.remove("hidden");
    document.getElementById("pwInput").focus();
  }
}

// Modal de información / Vista previa
function openModal(id) {
  const act = ACTIVITIES.find((item) => item.id === id);
  if (!act) return;

  const isSst = act.category === "SST";
  const isOtras = act.category === "Otras";
  const btnClass = isSst ? "sst-btn" : isOtras ? "otras-btn" : "";
  const isExternal = /^https?:\/\//i.test(act.url);

  document.getElementById("modalImage").innerHTML = createCoverSVG(act);
  document.getElementById("modalCategory").textContent = act.category;
  document.getElementById("modalType").textContent = act.type;
  document.getElementById("modalTitle").textContent = act.title;
  document.getElementById("modalDescription").textContent = act.fullDesc;
  document.getElementById("modalPath").textContent = act.requirePassword
    ? `${act.url} (Protegido con contraseña)`
    : act.url;

  const topicsList = document.getElementById("modalTopics");
  topicsList.innerHTML = act.topics.map((t) => `<li>${t}</li>`).join("");

  const actionsDiv = document.getElementById("modalActions");
  actionsDiv.innerHTML = `
    <a href="${act.url}" data-open-id="${act.id}" class="btn-primary ${btnClass}">
      ${act.requirePassword ? "🔒 Desbloquear y abrir →" : "Abrir actividad ahora →"}
    </a>
    ${
      act.answersUrl
        ? `<a href="${act.answersUrl}" data-open-id="${act.id}" data-answers="true" class="btn-answers">📝 Abrir respuestas</a>`
        : ""
    }
    ${
      isExternal && !act.requirePassword
        ? `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="btn-github">🌐 Abrir enlace GitHub ↗</a>`
        : ""
    }
  `;

  document.getElementById("infoModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("infoModal").classList.add("hidden");
}

function renderAll() {
  updateCategoryCounters();
  renderTOC();
  renderGrids();
  updateProgressUI();
}

// Eventos
document.addEventListener("click", (e) => {
  const openLink = e.target.closest("a[data-open-id]");
  if (openLink && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
    e.preventDefault();
    const id = openLink.dataset.openId;
    const isAnswers = openLink.dataset.answers === "true";
    openActivityViewer(id, isAnswers);
    return;
  }

  const checkBtn = e.target.closest(".check-btn");
  if (checkBtn) {
    toggleComplete(checkBtn.dataset.id);
    return;
  }

  const infoBtn = e.target.closest(".info-btn");
  if (infoBtn) {
    openModal(infoBtn.dataset.id);
    return;
  }

  const filterBtn = e.target.closest(".filter-btn");
  if (filterBtn) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    filterBtn.classList.add("active");
    activeFilter = filterBtn.dataset.category;
    renderGrids();
  }
});

// Controles del Visor Integrado
document.getElementById("viewerBackBtn").addEventListener("click", closeActivityViewer);

viewerCompleteBtn.addEventListener("click", () => {
  if (currentViewerActivity) {
    toggleComplete(currentViewerActivity.id);
  }
});

viewerToggleAnswersBtn.addEventListener("click", () => {
  if (!currentViewerActivity || !currentViewerActivity.answersUrl) return;
  viewingAnswers = !viewingAnswers;
  activityFrame.src = viewingAnswers ? currentViewerActivity.answersUrl : currentViewerActivity.url;
  updateViewerHeaderState();
});

// Controles del Modal de Contraseña
document.getElementById("pwOk").addEventListener("click", validatePw);
document.getElementById("pwCancel").addEventListener("click", closePwModal);
document.getElementById("pwCloseBtn").addEventListener("click", closePwModal);
document.getElementById("pwBackdrop").addEventListener("click", closePwModal);
document.getElementById("pwInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") validatePw();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrids();
});

document.getElementById("clearFiltersBtn").addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  activeFilter = "all";
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.category === "all");
  });
  renderGrids();
});

document.getElementById("resetProgressBtn").addEventListener("click", () => {
  completedIds = [];
  localStorage.removeItem(STORAGE_KEY);
  renderAll();
});

// Sidebar móvil/tableta y modal
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openMobileSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.remove("hidden");
}

function closeMobileSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.add("hidden");
}

document.getElementById("toggleSidebarBtn").addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
});
document.getElementById("closeSidebarBtn").addEventListener("click", closeMobileSidebar);
sidebarOverlay.addEventListener("click", closeMobileSidebar);
document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!document.getElementById("pwModal").classList.contains("hidden")) {
      closePwModal();
    } else if (!activityViewer.classList.contains("hidden")) {
      closeActivityViewer();
    } else if (!document.getElementById("infoModal").classList.contains("hidden")) {
      closeModal();
    } else {
      closeMobileSidebar();
    }
  }
});

// Inicializar
renderAll();