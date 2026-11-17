/* =========================================================
 ACTIVIDAD DE PREGUNTAS — SST
 Ajustes: grupo activo con clic, grupo activo rojo, botón +1,
 bloqueo sin puntaje, estado centrado, Top 3,
 botón Mostrar/Ocultar respuesta, temporizador 30s + botón +10s
========================================================= */
/* =================== Datos: 20 preguntas y respuestas =================== */
const bancoPreguntas = [
  { id: 1,  pregunta: "¿Qué es la seguridad y salud en el trabajo (SST)?",
    respuesta: "Es el conjunto de políticas, actividades y medidas orientadas a proteger y promover la salud física, mental y social de los trabajadores, prevenir accidentes y enfermedades laborales y mejorar las condiciones de trabajo. En Colombia se gestiona mediante el SG-SST." },
  { id: 2,  pregunta: "¿Cuáles son los objetivos principales de la SST?",
    respuesta: "Prevenir accidentes y enfermedades laborales; controlar los riesgos; cumplir la normativa; promover el bienestar y los ambientes de trabajo saludables; fortalecer la cultura de prevención y, con ello, mejorar productividad y calidad." },
  { id: 3,  pregunta: "¿Qué ley regula la SST en Colombia?",
    respuesta: "La Ley 1562 de 2012, que modificó el Sistema General de Riesgos Laborales y dio marco al SG-SST, complementada principalmente por el Decreto 1072 de 2015 (Libro 2, Parte 2, Título 4, Capítulo 6) y otras resoluciones como la 0312 de 2019." },
  { id: 4,  pregunta: "¿Qué es el Sistema General de Riesgos Laborales?",
    respuesta: "Es el conjunto de entidades, normas y procedimientos orientados a prevenir, proteger y atender a los trabajadores contra los efectos de los riesgos laborales (accidentes y enfermedades). Incluye funciones de afiliación, cotización, prestaciones y gestión del riesgo (ARL, empleadores y Estado)." },
  { id: 5,  pregunta: "¿Cuáles son los componentes del Sistema de Gestión de SST?",
    respuesta: "Se estructura en el ciclo PHVA: Planear (política, identificación de peligros y evaluación de riesgos, objetivos y plan anual), Hacer (implementación de controles, capacitación, comunicaciones), Verificar (medición, seguimiento, indicadores, auditorías) y Actuar (mejoras, acciones correctivas y preventivas)." },
  { id: 6,  pregunta: "¿Qué es un riesgo laboral?",
    respuesta: "Es la combinación de la probabilidad de que un peligro materialice un evento dañino y la severidad de sus consecuencias sobre la seguridad o la salud del trabajador." },
  { id: 7,  pregunta: "¿Qué es un peligro en el contexto de SST?",
    respuesta: "Es una fuente, situación o acto con el potencial de causar daño a las personas, a los equipos o al ambiente. Puede ser físico, químico, biológico, ergonómico, psicosocial, de seguridad, entre otros." },
  { id: 8,  pregunta: "¿Qué es una matriz de riesgos?",
    respuesta: "Herramienta que identifica peligros, evalúa y valora los riesgos con criterios de probabilidad y consecuencia, considera controles existentes y define acciones para eliminarlos o reducirlos según una jerarquía de controles." },
  { id: 9,  pregunta: "¿Qué es un plan de emergencia?",
    respuesta: "Conjunto organizado de procedimientos, recursos, roles y responsabilidades para prevenir, preparar y responder ante incidentes y desastres (alarma, evacuación, primeros auxilios, brigadas, comunicación y simulacros)." },
  { id: 10, pregunta: "¿Qué es la normatividad legal aplicable a la SST?",
    respuesta: "Es el conjunto de leyes, decretos y resoluciones que regulan la SST y que la empresa debe identificar, mantener actualizada y cumplir (matriz legal). Incluye, entre otras, Ley 1562/2012, Decreto 1072/2015, Resolución 0312/2019, Resolución 1401/2007 (investigación de accidentes), Resolución 2346/2007 (exámenes médicos), Decreto 1072/2015, Resolución 2400/1979, etc." },
  { id: 11, pregunta: "¿Qué es la promoción de la salud en el trabajo?",
    respuesta: "Conjunto de acciones para desarrollar hábitos y capacidades saludables, crear ambientes de trabajo sanos y favorecer estilos de vida que protejan y mejoren la salud de la población trabajadora." },
  { id: 12, pregunta: "¿Qué es la prevención de riesgos laborales?",
    respuesta: "Es la adopción de medidas para eliminar los peligros o minimizar los riesgos antes de que ocurran eventos dañinos, aplicando la jerarquía de controles (eliminación, sustitución, controles de ingeniería, administrativos y EPP)." },
  { id: 13, pregunta: "¿Qué es la vigilancia epidemiológica en SST?",
    respuesta: "Proceso sistemático de recolección, análisis e interpretación de información sobre eventos de salud relacionados con el trabajo, para orientar intervenciones y evaluar su eficacia (p. ej., programas de vigilancia de hipoacusia, TME, exposición a químicos)." },
  { id: 14, pregunta: "¿Qué es la evaluación de riesgos?",
    respuesta: "Proceso para estimar el nivel de riesgo de cada peligro identificado, decidir si es aceptable o no y priorizar controles y acciones para su tratamiento." },
  { id: 15, pregunta: "¿Qué es la capacitación en SST?",
    respuesta: "Formación planificada y continua para que los trabajadores conozcan peligros, procedimientos seguros, uso de EPP, emergencias y obligaciones legales. Debe tener plan, evidencias y evaluación de efectividad." },
  { id: 16, pregunta: "¿Qué es la inspección de seguridad?",
    respuesta: "Revisión sistemática de áreas, procesos, equipos y comportamientos para identificar condiciones y actos inseguros, documentar hallazgos y definir acciones de mejora y seguimiento." },
  { id: 17, pregunta: "¿Qué es la investigación de accidentes laborales?",
    respuesta: "Procedimiento para identificar causas inmediatas y básicas de accidentes e incidentes con el fin de prevenir su recurrencia. En Colombia está regulada por la Resolución 1401 de 2007." },
  { id: 18, pregunta: "¿Qué es la ergonomía en el trabajo?",
    respuesta: "Disciplina que adapta el trabajo a las personas (diseño de puestos, herramientas y organización) para mejorar seguridad, salud y desempeño, reduciendo trastornos musculoesqueléticos." },
  { id: 19, pregunta: "¿Qué es la higiene industrial?",
    respuesta: "Especialidad que anticipa, reconoce, evalúa y controla agentes ambientales (químicos, físicos y biológicos) que pueden causar enfermedades o malestares en el trabajo." },
  { id: 20, pregunta: "¿Qué es la medicina del trabajo?",
    respuesta: "Especialidad que previene, diagnostica y gestiona enfermedades y lesiones relacionadas con el trabajo; incluye exámenes de ingreso, periódicos y de egreso, vigilancia de la salud, rehabilitación y recomendaciones de reubicación." }
];

/* =================== Estado de la aplicación =================== */
let usadas = new Set();      // ids de preguntas ya calificadas
let indiceSecuencial = 0;    // puntero para modo secuencial
let preguntaActualId = null;
let preguntaPendiente = false; // true si falta asignar 2,1,0
const grupos = [];           // { id, nombre, puntaje }
let grupoIdAutoinc = 1;

/* Temporizador */
let timerInterval = null;
let remainingSeconds = 0;

/* =================== Referencias del DOM =================== */
const formGrupo = document.getElementById("form-grupo");
const inputNombreGrupo = document.getElementById("nombre-grupo");
const contenedorGrupos = document.getElementById("contenedor-grupos");
const selectGrupoActivo = document.getElementById("grupo-activo");
const btnNuevaPregunta = document.getElementById("btn-nueva-pregunta");
const btnNuevoJuego = document.getElementById("btn-nuevo-juego");
const btnMostrarRespuesta = document.getElementById("btn-mostrar-respuesta");
const btnCorrecto = document.getElementById("btn-correcto");
const btnParcial = document.getElementById("btn-parcial");
const btnIncorrecto = document.getElementById("btn-incorrecto");
const btnExtraTiempo = document.getElementById("btn-extra-tiempo");
const numeroPregunta = document.getElementById("numero-pregunta");
const textoPregunta = document.getElementById("texto-pregunta");
const bloqueRespuesta = document.getElementById("bloque-respuesta");
const textoRespuesta = document.getElementById("texto-respuesta");
const restantes = document.getElementById("restantes");
const mensaje = document.getElementById("mensaje");
const tiempoEl = document.getElementById("tiempo");
const top3Box = document.getElementById("top3");
const listaTop3 = document.getElementById("lista-top3");

/* =================== Utilidades =================== */
function getModo(){
  const checked = document.querySelector('input[name="modo"]:checked');
  return checked ? checked.value : "aleatorio";
}
function actualizarRestantes(){
  // Restantes = total - calificadas (usadas). La pregunta pendiente no descuenta.
  restantes.textContent = (bancoPreguntas.length - usadas.size).toString();
}
function mostrarMensaje(text, tipo = "info"){
  mensaje.textContent = text;
  mensaje.style.color = tipo === "error" ? "#8D4B4B" : "#6d625b";
}
function limpiarTarjeta(){
  numeroPregunta.textContent = "—";
  textoPregunta.textContent = "Presiona Nueva pregunta para iniciar.";
  textoRespuesta.textContent = "";
  bloqueRespuesta.classList.add("oculto");
  btnMostrarRespuesta.textContent = "Mostrar respuesta";
  btnMostrarRespuesta.disabled = true;
  btnCorrecto.disabled = true;
  btnParcial.disabled = true;
  btnIncorrecto.disabled = true;
  btnExtraTiempo.disabled = true;
  detenerTimer(true);
  preguntaActualId = null;
  preguntaPendiente = false;
}

/* =================== Timer =================== */
function formatearTiempo(s){
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
}
function pintarTiempo(){
  tiempoEl.textContent = formatearTiempo(remainingSeconds);
  tiempoEl.classList.toggle("critico", remainingSeconds > 0 && remainingSeconds <= 10);
}
function iniciarTimer(inicioEnSegundos = 30){
  detenerTimer();
  remainingSeconds = inicioEnSegundos;
  tiempoEl.classList.remove("agotado","critico");
  pintarTiempo();
  btnExtraTiempo.disabled = false;

  timerInterval = setInterval(() => {
    remainingSeconds = Math.max(0, remainingSeconds - 1);
    pintarTiempo();
    if (remainingSeconds === 0){
      detenerTimer();
      tiempoEl.classList.add("agotado");
      btnExtraTiempo.disabled = true;
      mostrarMensaje("⏰ Tiempo agotado. Puedes calificar la pregunta.", "info");
    }
  }, 1000);
}
function detenerTimer(silencioso = false){
  if (timerInterval){
    clearInterval(timerInterval);
    timerInterval = null;
  }
  if (!silencioso){
    tiempoEl.classList.remove("critico");
  }
}
function agregar10Segundos(){
  if (remainingSeconds === 0 || timerInterval === null) return;
  remainingSeconds += 10;
  pintarTiempo();
}

/* =================== Gestión de grupos =================== */
function renderGrupos(){
  contenedorGrupos.innerHTML = "";

  const activo = Number(selectGrupoActivo.value);

  grupos.forEach(g => {
    const item = document.createElement("div");
    item.className = "item-grupo" + (g.id === activo ? " activo" : "");
    item.setAttribute("role", "button");
    item.setAttribute("aria-pressed", g.id === activo ? "true" : "false");
    item.tabIndex = 0;

    item.innerHTML = `
      <span class="nombre" title="Grupo">${g.nombre}</span>
      <span class="puntaje" title="Puntaje">${g.puntaje} pts</span>
    `;

    // Activar por CLIC
    item.addEventListener("click", () => {
      selectGrupoActivo.value = String(g.id);
      renderGrupos();
    });
    // Activar con TECLADO (Enter o Espacio)
    item.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        selectGrupoActivo.value = String(g.id);
        renderGrupos();
      }
    });

    contenedorGrupos.appendChild(item);
  });

  // Reconstruir el selector manteniendo el valor actual
  const seleccionado = selectGrupoActivo.value;
  selectGrupoActivo.innerHTML = "";
  grupos.forEach(g => {
    const opt = document.createElement("option");
    opt.value = String(g.id);
    opt.textContent = g.nombre;
    selectGrupoActivo.appendChild(opt);
  });
  if (seleccionado && [...selectGrupoActivo.options].some(o => o.value === seleccionado)){
    selectGrupoActivo.value = seleccionado;
  }
}
function agregarGrupo(nombre){
  if (!nombre || !nombre.trim()){
    mostrarMensaje("Escribe un nombre de grupo.", "error");
    return;
  }
  const yaExiste = grupos.some(g => g.nombre.toLowerCase() === nombre.trim().toLowerCase());
  if (yaExiste){
    mostrarMensaje("Ese nombre de grupo ya existe.", "error");
    return;
  }
  grupos.push({ id: grupoIdAutoinc++, nombre: nombre.trim(), puntaje: 0 });
  inputNombreGrupo.value = "";
  renderGrupos();
  mostrarMensaje("Grupo agregado.");
}

/* =================== Lógica de preguntas =================== */
function tomarPreguntaAleatoria(){
  const disponibles = bancoPreguntas.filter(p => !usadas.has(p.id) && p.id !== preguntaActualId);
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  return disponibles[idx];
}
function tomarPreguntaSecuencial(){
  // Avanza hasta encontrar una no usada ni la misma actual
  while (indiceSecuencial < bancoPreguntas.length &&
         (usadas.has(bancoPreguntas[indiceSecuencial].id) ||
          bancoPreguntas[indiceSecuencial].id === preguntaActualId)){
    indiceSecuencial++;
  }
  if (indiceSecuencial >= bancoPreguntas.length) return null;
  return bancoPreguntas[indiceSecuencial++];
}
function nuevaPregunta(){
  if (preguntaPendiente){
    mostrarMensaje("Primero califica la pregunta actual (2, 1 o 0 puntos) antes de continuar.", "error");
    return; // No deja pasar sin puntaje
  }
  const modo = getModo();
  const pregunta = (modo === "aleatorio") ? tomarPreguntaAleatoria() : tomarPreguntaSecuencial();
  if (!pregunta){
    if (usadas.size >= bancoPreguntas.length){
      finalizarJuego();
    } else {
      mostrarMensaje("No hay más preguntas disponibles.");
    }
    return;
  }
  // Pintar
  preguntaActualId = pregunta.id;
  preguntaPendiente = true; // debe calificarse
  numeroPregunta.textContent = `#${pregunta.id}`;
  textoPregunta.textContent = pregunta.pregunta;
  textoRespuesta.textContent = "";
  bloqueRespuesta.classList.add("oculto");
  btnMostrarRespuesta.textContent = "Mostrar respuesta";

  // Habilitar controles
  btnMostrarRespuesta.disabled = false;
  btnCorrecto.disabled = true;
  btnParcial.disabled = true;
  btnIncorrecto.disabled = true;
  btnExtraTiempo.disabled = false;

  // Temporizador: 30s
  iniciarTimer(30);

  actualizarRestantes(); // aún no descuenta
  mostrarMensaje("Pregunta asignada. ¡Tienen 30 segundos! Puedes regalar +10s si lo consideras.");
}

/* Mostrar/Ocultar respuesta (toggle) */
function alternarRespuesta(){
  if (!preguntaActualId) return;

  const estaOculta = bloqueRespuesta.classList.contains("oculto");

  if (estaOculta) {
    // Mostrar
    const p = bancoPreguntas.find(x => x.id === preguntaActualId);
    if (!p) return;
    textoRespuesta.textContent = p.respuesta;
    bloqueRespuesta.classList.remove("oculto");

    // Habilitar calificación
    btnCorrecto.disabled = false;
    btnParcial.disabled = false;
    btnIncorrecto.disabled = false;

    // Cambiar texto del botón
    btnMostrarRespuesta.textContent = "Ocultar respuesta";
  } else {
    // Ocultar
    bloqueRespuesta.classList.add("oculto");

    // Deshabilitar calificación (evita calificar sin ver la respuesta)
    btnCorrecto.disabled = true;
    btnParcial.disabled = true;
    btnIncorrecto.disabled = true;

    // Volver a texto original del botón
    btnMostrarRespuesta.textContent = "Mostrar respuesta";
  }
}

function calificarCon(puntos){
  if (!preguntaActualId) return;
  const idGrupo = Number(selectGrupoActivo.value);
  const grupo = grupos.find(g => g.id === idGrupo);
  if (!grupo){
    mostrarMensaje("Selecciona un grupo para asignar el puntaje.", "error");
    return;
  }
  grupo.puntaje += puntos;
  // Marcar como usada sólo cuando se califica (evita saltar sin puntuar)
  usadas.add(preguntaActualId);
  preguntaPendiente = false;

  // Detener temporizador
  detenerTimer();

  renderGrupos();
  actualizarRestantes();

  const msg = puntos === 2
    ? `¡Correcto! +${puntos} puntos para ${grupo.nombre}.`
    : puntos === 1
    ? `Parcialmente correcto. +${puntos} punto para ${grupo.nombre}.`
    : `Respuesta incorrecta. +${puntos} puntos.`;
  mostrarMensaje(msg);

  // Bloquear calificación doble y extra tiempo
  btnCorrecto.disabled = true;
  btnParcial.disabled = true;
  btnIncorrecto.disabled = true;
  btnExtraTiempo.disabled = true;

  // ¿Se acabaron las preguntas?
  if (usadas.size >= bancoPreguntas.length){
    finalizarJuego();
  }
}

/* =================== Top 3 y fin de juego =================== */
function finalizarJuego(){
  // Mostrar Top 3
  renderTop3();
  mostrarMensaje("¡Juego finalizado! Revisa el Top 3.");
  // Deshabilitar controles de pregunta y tiempo
  btnMostrarRespuesta.disabled = true;
  btnCorrecto.disabled = true;
  btnParcial.disabled = true;
  btnIncorrecto.disabled = true;
  btnExtraTiempo.disabled = true;
  detenerTimer();
}
function renderTop3(){
  if (grupos.length === 0){
    top3Box.classList.add("oculto");
    return;
  }
  const orden = [...grupos].sort((a,b)=> b.puntaje - a.puntaje || a.nombre.localeCompare(b.nombre));
  const top = orden.slice(0,3);
  listaTop3.innerHTML = "";
  top.forEach((g,i)=>{
    const li = document.createElement("li");
    const clase = i===0?"oro": i===1?"plata":"bronce";
    const medalla = i===0?"🥇": i===1?"🥈":"🥉";
    li.className = clase;
    li.textContent = `${medalla} ${g.nombre} — ${g.puntaje} pts`;
    listaTop3.appendChild(li);
  });
  top3Box.classList.remove("oculto");
}

/* =================== Nuevo juego =================== */
function nuevoJuego(){
  usadas = new Set();
  indiceSecuencial = 0;
  preguntaActualId = null;
  preguntaPendiente = false;
  grupos.forEach(g => g.puntaje = 0);
  renderGrupos();
  actualizarRestantes();
  limpiarTarjeta();
  top3Box.classList.add("oculto");
  listaTop3.innerHTML = "";
  mostrarMensaje("Nuevo juego iniciado. ¡Agrega grupos y saca la primera pregunta!");
}

/* =================== Eventos =================== */
formGrupo.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarGrupo(inputNombreGrupo.value);
});
btnNuevaPregunta.addEventListener("click", nuevaPregunta);
btnMostrarRespuesta.addEventListener("click", alternarRespuesta);
btnCorrecto.addEventListener("click", () => calificarCon(2));
btnParcial.addEventListener("click", () => calificarCon(1));
btnIncorrecto.addEventListener("click", () => calificarCon(0));
btnNuevoJuego.addEventListener("click", nuevoJuego);
btnExtraTiempo.addEventListener("click", agregar10Segundos);
// Mantener compatibilidad: si cambias en el select, se refresca resaltado
selectGrupoActivo.addEventListener("change", renderGrupos);

/* Inicialización */
(function init(){
  actualizarRestantes();
  renderGrupos();
  limpiarTarjeta();
  mostrarMensaje("Configura los grupos, elige el modo y presiona “Nueva pregunta”.");
})();