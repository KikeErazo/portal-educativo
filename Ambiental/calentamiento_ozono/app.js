/* =========================================================
 ACTIVIDAD — Calentamiento Global y Capa de Ozono (20 Q&A)
 Funciones: grupos clicables + resaltado rojo, +1 parcial,
 bloqueo sin puntaje, mostrar/ocultar respuesta, temporizador 30s (+10s),
 Top 3, diseño adaptativo.
========================================================= */

/* =================== Banco de 20 preguntas y respuestas =================== */
const bancoPreguntas = [
  {
    id: 1,
    pregunta: "¿Qué es el calentamiento global?",
    respuesta:
      "Es el aumento sostenido de la temperatura promedio del sistema climático de la Tierra debido, principalmente, al incremento de gases de efecto invernadero (GEI) por actividades humanas como la quema de combustibles fósiles, la deforestación y ciertos procesos industriales."
  },
  {
    id: 2,
    pregunta: "¿En qué se diferencia calentamiento global de cambio climático?",
    respuesta:
      "El calentamiento global se refiere al aumento de la temperatura media del planeta. El cambio climático engloba ese calentamiento y otras alteraciones a largo plazo del clima (patrones de lluvia, eventos extremos, nivel del mar, etc.), causadas por factores naturales y humanos."
  },
  {
    id: 3,
    pregunta: "¿Cuáles son los principales gases de efecto invernadero de origen humano?",
    respuesta:
      "Dióxido de carbono (CO₂), metano (CH₄), óxido nitroso (N₂O), gases fluorados (como HFCs, PFCs, SF₆ y NF₃). El CO₂ proviene sobre todo de combustibles fósiles y deforestación; el CH₄ de energía, agricultura y residuos; el N₂O de suelos agrícolas; los fluorados de usos industriales."
  },
  {
    id: 4,
    pregunta: "¿Qué es el efecto invernadero y por qué es necesario?",
    respuesta:
      "Es un fenómeno natural en el que ciertos gases atrapan parte del calor emitido por la superficie, manteniendo una temperatura compatible con la vida. El problema surge cuando se intensifica por excesos de GEI antrópicos, elevando la temperatura más allá de los rangos naturales."
  },
  {
    id: 5,
    pregunta: "Menciona algunas evidencias del calentamiento global.",
    respuesta:
      "Aumento de temperaturas medias del aire y océanos; retroceso de glaciares; pérdida de hielo marino en el Ártico; elevación del nivel del mar; incremento de olas de calor; cambios en la fenología y distribución de especies; acidificación del océano (por mayor CO₂ disuelto)."
  },
  {
    id: 6,
    pregunta: "¿Por qué el CO₂ tiene tanto peso en el calentamiento global?",
    respuesta:
      "Porque se emite en grandes cantidades, permanece mucho tiempo en la atmósfera y su concentración ha aumentado con la quema de carbón, petróleo y gas. Cada molécula tiene efecto invernadero moderado, pero su volumen total y persistencia lo hacen dominante en el forzamiento radiativo."
  },
  {
    id: 7,
    pregunta: "¿Por qué el metano (CH₄) es relevante si hay menos que CO₂?",
    respuesta:
      "Porque tiene un potencial de calentamiento global superior al del CO₂ en horizontes temporales de 20–100 años. Aunque su vida atmosférica es menor, su capacidad de atrapar calor por molécula es alta; por eso su reducción ofrece beneficios climáticos relativamente rápidos."
  },
  {
    id: 8,
    pregunta: "¿Qué relación tiene el óxido nitroso (N₂O) con la capa de ozono?",
    respuesta:
      "Además de ser un GEI, el N₂O participa en reacciones que destruyen ozono estratosférico. Hoy es uno de los compuestos con mayor contribución neta a la pérdida de ozono de origen humano, a pesar de no estar regulado por el Protocolo de Montreal como ODS tradicional."
  },
  {
    id: 9,
    pregunta: "¿Qué papel juegan los aerosoles en el clima?",
    respuesta:
      "Los aerosoles pueden enfriar (al reflejar radiación solar) o calentar (al absorberla). También influyen en nubes y precipitaciones. Su efecto total es complejo y regionalmente variable, y en algunos casos contrarresta parcialmente el calentamiento causado por GEI."
  },
  {
    id: 10,
    pregunta: "¿Qué es la capa de ozono y qué función cumple?",
    respuesta:
      "Es una zona de la estratosfera con alta concentración de ozono (O₃) que absorbe la mayor parte de la radiación ultravioleta B (UV‑B) del Sol, protegiendo la vida al reducir riesgos de cáncer de piel, cataratas, daños al ADN y afectaciones en ecosistemas."
  },
  {
    id: 11,
    pregunta: "¿Qué causó el adelgazamiento de la capa de ozono?",
    respuesta:
      "Principalmente sustancias agotadoras del ozono (ODS) como CFCs, halones, tetracloruro de carbono y bromuro de metilo. En la estratosfera, la radiación UV libera átomos de cloro o bromo que catalizan la destrucción del O₃, especialmente bajo condiciones frías y soleadas."
  },
  {
    id: 12,
    pregunta: "¿Qué es el ‘agujero de ozono’ antártico y cuándo ocurre?",
    respuesta:
      "Es un episodio estacional de pérdida intensa de ozono sobre la Antártida durante la primavera austral. Se favorece por bajas temperaturas invernales, nubes estratosféricas polares y el vórtice polar, que aisla el aire; al regresar el Sol, se activan reacciones que destruyen O₃."
  },
  {
    id: 13,
    pregunta: "¿Qué es el Protocolo de Montreal y por qué es un éxito?",
    respuesta:
      "Es un acuerdo internacional (1987) que eliminó gradualmente la producción y consumo de ODS. Ha logrado reducciones drásticas de CFCs y halones, sentando la base para la recuperación gradual de la capa de ozono durante el siglo XXI, si se mantiene el cumplimiento."
  },
  {
    id: 14,
    pregunta: "¿Cómo se relacionan ODS, HFCs y el clima (Enmienda de Kigali)?",
    respuesta:
      "Los CFCs agotan ozono y son potentes GEI. Los HFCs, usados como reemplazos, no destruyen ozono pero muchos tienen alto potencial de calentamiento. La Enmienda de Kigali promueve su reducción global, ayudando al clima sin comprometer la protección del ozono."
  },
  {
    id: 15,
    pregunta: "¿Qué efectos tiene una mayor radiación UV por menor ozono?",
    respuesta:
      "Incremento del riesgo de cáncer de piel y cataratas; daños en el fitoplancton y ecosistemas acuáticos; afectación de plantas y cultivos sensibles; posibles impactos en la cadena alimentaria y en materiales (degradación más rápida)."
  },
  {
    id: 16,
    pregunta: "Cita medidas clave para mitigar el calentamiento global.",
    respuesta:
      "Descarbonizar la energía (solar, eólica, geotermia), electrificar usos finales, eficiencia energética, movilidad sostenible, economía circular, reducir metano, proteger y restaurar bosques, suelos y humedales, y promover innovación y políticas climáticas ambiciosas."
  },
  {
    id: 17,
    pregunta: "¿Qué es la adaptación al cambio climático y por qué importa?",
    respuesta:
      "Es el ajuste de sistemas humanos y naturales para moderar daños o aprovechar oportunidades. Incluye gestión de riesgos, infraestructura resiliente, alertas tempranas, agricultura climáticamente inteligente, salud pública y planificación territorial."
  },
  {
    id: 18,
    pregunta: "¿Qué es la huella de carbono y cómo podemos reducirla?",
    respuesta:
      "Es la cantidad total de GEI emitida por una actividad o producto. Se reduce con eficiencia, ahorro energético, energías limpias, movilidad activa o compartida, consumo responsable, menor desperdicio de alimentos, y compras con criterios ambientales."
  },
  {
    id: 19,
    pregunta: "¿Cómo se mide la cantidad de ozono en la atmósfera?",
    respuesta:
      "Con Unidades Dobson (DU), que representan el espesor del ozono si se comprimiera a presión y temperatura estándar. Por ejemplo, 300 DU equivalen a una capa de 3 mm de O₃ en la superficie."
  },
  {
    id: 20,
    pregunta: "¿Proteger la capa de ozono resuelve el calentamiento global?",
    respuesta:
      "No. Son problemas distintos aunque relacionados. Proteger el ozono evita mayor UV y también contribuye al clima al reducir CFCs; pero limitar el calentamiento requiere acciones específicas para recortar CO₂, CH₄, N₂O y otros GEI a gran escala y a largo plazo."
  }
];

/* =================== Estado y referencias =================== */
let usadas = new Set();      // ids de preguntas ya calificadas
let indiceSecuencial = 0;    // puntero para modo secuencial
let preguntaActualId = null;
let preguntaPendiente = false; // true si falta asignar 2,1,0
const grupos = [];           // { id, nombre, puntaje }
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
    item.setAttribute("role", "button");   // accesible
    item.setAttribute("aria-pressed", g.id === activo ? "true" : "false");
    item.tabIndex = 0;                      // navegable con teclado

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