/* =========================================================
 ACTIVIDAD — Taller Medio Ambiente (20 Q&A)
 Funciones: grupos clicables + resaltado, +2/+1/0,
 bloqueo sin puntaje, mostrar/ocultar respuesta, temporizador 30s (+10s),
 Top 3, diseño adaptativo.
========================================================= */

/* =================== Banco de 20 preguntas y respuestas =================== */
const bancoPreguntas = [
  {
    id: 1,
    pregunta: "¿Por qué es importante ahorrar agua?",
    respuesta:
      "Porque es un recurso limitado y esencial para la vida; ahorrar reduce el estrés hídrico, protege ecosistemas y baja costos y energía asociada al bombeo y tratamiento."
  },
  {
    id: 2,
    pregunta: "¿Qué es la energía renovable?",
    respuesta:
      "Energía obtenida de fuentes que se regeneran naturalmente en plazos humanos, como solar, eólica, hidráulica, geotérmica y biomasa."
  },
  {
    id: 3,
    pregunta: "¿Cómo podemos reducir la contaminación del aire?",
    respuesta:
      "Usando transporte limpio, eficiencia energética, control de emisiones industriales, reforestación y evitando la quema a cielo abierto."
  },
  {
    id: 4,
    pregunta: "¿Qué es la biodiversidad?",
    respuesta:
      "La variedad de vida en genes, especies y ecosistemas; sostiene servicios ecosistémicos como polinización, agua y suelos fértiles."
  },
  {
    id: 5,
    pregunta: "¿Qué es el cambio climático?",
    respuesta:
      "Variaciones significativas y duraderas del clima de la Tierra, hoy impulsadas principalmente por gases de efecto invernadero de origen humano."
  },
  {
    id: 6,
    pregunta: "¿Cómo afecta la deforestación al medio ambiente?",
    respuesta:
      "Libera CO₂, reduce hábitats y biodiversidad, altera ciclos del agua y aumenta la erosión del suelo."
  },
  {
    id: 7,
    pregunta: "¿Qué es el compostaje?",
    respuesta:
      "Proceso biológico que descompone restos orgánicos para producir compost, un abono que mejora suelos y reduce residuos."
  },
  {
    id: 8,
    pregunta: "¿Por qué importante proteger los océanos?",
    respuesta:
      "Regulan el clima, absorben CO₂, albergan gran biodiversidad y proveen alimento y medios de vida a millones de personas."
  },
  {
    id: 9,
    pregunta: "¿Qué es la huella de carbono?",
    respuesta:
      "La cantidad total de gases de efecto invernadero emitidos por una actividad, producto o persona; se mide en CO₂ equivalente."
  },
  {
    id: 10,
    pregunta: "¿Qué es la energía solar?",
    respuesta:
      "La energía obtenida del Sol mediante tecnologías como paneles fotovoltaicos o colectores térmicos."
  },
  {
    id: 11,
    pregunta: "¿Qué es la energía eólica?",
    respuesta:
      "Energía que aprovecha la fuerza del viento para generar electricidad con aerogeneradores."
  },
  {
    id: 12,
    pregunta: "¿Qué es el efecto invernadero?",
    respuesta:
      "Fenómeno natural por el cual gases atmosféricos retienen calor; el exceso de GEI por actividades humanas lo intensifica."
  },
  {
    id: 13,
    pregunta: "¿Cómo podemos reducir el uso de plástico?",
    respuesta:
      "Eligiendo reutilizables, comprando a granel, reciclando correctamente y evitando plásticos de un solo uso."
  },
  {
    id: 14,
    pregunta: "¿Qué es la sostenibilidad?",
    respuesta:
      "Satisfacer necesidades presentes sin comprometer la capacidad de las futuras generaciones, equilibrando lo ambiental, social y económico."
  },
  {
    id: 15,
    pregunta: "¿Qué es la energía hidroeléctrica?",
    respuesta:
      "Electricidad generada aprovechando la energía del agua en movimiento mediante turbinas y generadores."
  },
  {
    id: 16,
    pregunta: "¿Qué es la contaminación del agua?",
    respuesta:
      "La presencia de sustancias o energía que degradan la calidad del agua, afectando la salud y los ecosistemas."
  },
  {
    id: 17,
    pregunta: "¿Qué es la energía geotérmica?",
    respuesta:
      "Energía obtenida del calor interno de la Tierra para producir electricidad o calefacción."
  },
  {
    id: 18,
    pregunta: "¿Qué es la agricultura sostenible?",
    respuesta:
      "Producción de alimentos que conserva recursos, reduce impactos ambientales y mejora el bienestar de agricultores y comunidades."
  },
  {
    id: 19,
    pregunta: "¿Cómo podemos proteger la vida silvestre?",
    respuesta:
      "Conservando hábitats, controlando especies invasoras, evitando la caza ilegal y promoviendo corredores biológicos."
  },
  {
    id: 20,
    pregunta: "¿Qué es Ecología?",
    respuesta:
      "La ciencia que estudia las relaciones entre los seres vivos y su ambiente, y cómo fluyen energía y materia en los ecosistemas."
  }
];

/* =================== Estado y referencias =================== */
let usadas = new Set();        // ids de preguntas ya calificadas
let indiceSecuencial = 0;      // puntero para modo secuencial
let preguntaActualId = null;
let preguntaPendiente = false; // true si falta asignar 2,1,0
const grupos = [];             // { id, nombre, puntaje }
let grupoIdAutoinc = 1;

/* Temporizador */
let timerInterval = null;
let remainingSeconds = 0;

/* DOM */
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
  // quitar énfasis si quedó
  const preguntaBox3 = document.getElementById('texto-pregunta');
  if(preguntaBox3){ preguntaBox3.classList.remove('en-curso'); }
  preguntaActualId = null;
  preguntaPendiente = false;
}

/* =================== Temporizador =================== */
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

/* Sumar +10s si el tiempo está corriendo */
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
    item.setAttribute("role", "button"); // accesible
    item.setAttribute("aria-pressed", g.id === activo ? "true" : "false");
    item.tabIndex = 0; // navegable con teclado
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

  // Resaltar caja de pregunta y llevarla a la vista
  const preguntaBox = document.getElementById("texto-pregunta");
  if(preguntaBox){
    preguntaBox.classList.add('en-curso');
    try{ preguntaBox.scrollIntoView({behavior:'smooth', block:'center'}); }catch(e){}
  }

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

/* Calificar */
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
  // quitar énfasis al detener
  const preguntaBox2 = document.getElementById('texto-pregunta');
  if(preguntaBox2){ preguntaBox2.classList.remove('en-curso'); }

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
// Mantener compatibilidad: si cambias en el select, se refresca el resaltado
selectGrupoActivo.addEventListener("change", renderGrupos);

/* =================== Inicialización =================== */
(function init(){
  actualizarRestantes();
  renderGrupos();
  limpiarTarjeta();
  mostrarMensaje("Configura los grupos, elige el modo y presiona “Nueva pregunta”.");
})();