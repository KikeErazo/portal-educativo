/*
  🎯 Enrique:
  - Banco de preguntas/respuestas editable aquí abajo.
  - Al presionar INICIAR: revela la pregunta y arranca el tiempo (por defecto 3:00 min).
  - Al calificar (+2/+1/0): se prepara la siguiente (según modo) y solo inicia al presionar INICIAR de nuevo.
*/

const bankQA = [
  { q: "1. ¿Qué ocurrió con el aprendiz del SENA durante su etapa práctica?",
    a: "El aprendiz sufrió una caída desde una altura de 9 metros mientras realizaba el cambio de luminarias en las instalaciones de la empresa patrocinadora durante su etapa práctica, en agosto de 2015." },

  { q: "2. ¿Cuál fue el diagnóstico médico que recibió el aprendiz tras el accidente?",
    a: "Recibió diagnóstico de trauma craneoencefálico, fractura del hueso frontal, equimosis en el ojo izquierdo y deterioro neurológico y respiratorio." },

  { q: "3. ¿Cuál fue el porcentaje de pérdida de capacidad laboral determinado?",
    a: "Fue calificado con una pérdida de capacidad laboral del 41.32% en enero de 2018." },

  { q: "4. ¿Qué artículos legales reclamaron el aprendiz y sus padres en su demanda?",
    a: "Invocaron el artículo 26 de la Ley 361 de 1997, el artículo 216 del Código Sustantivo del Trabajo, solicitaron indemnización por incapacidad permanente parcial según la Ley 776 de 2002 y denunciaron la falta de autorización del Ministerio de Trabajo para terminar el contrato de aprendizaje." },

  { q: "5. ¿Qué argumentos usó la empresa patrocinadora para rechazar la responsabilidad?",
    a: "Alegó que el aprendiz no era trabajador y que el accidente fue causado por culpa exclusiva de la víctima debido a una maniobra insegura." },

  { q: "6. ¿Cuál fue la posición del SENA frente al accidente del aprendiz?",
    a: "El SENA sostuvo que no tenía posición de garante ni obligación de seguridad, dado que el contrato de aprendizaje es una forma especial que no lo convierte en responsable directo de los riesgos en la empresa patrocinadora." },

  { q: "7. ¿Qué decisión tomó el juzgado de primera instancia en este caso?",
    a: "Declaró la culpa patronal de la empresa, la condenó a pagar indemnización plena de perjuicios, y absolvió al SENA y a la ARL." },

{
  q: "8. ¿Qué montos indemnizatorios se reconocieron al aprendiz y a sus padres?",
  a: "► PARA EL APRENDIZ: $16.424.544 por lucro cesante consolidado, $65.595.522 por lucro cesante futuro, 30 SMLMV por daño a la vida de relación, 30 SMLMV por perjuicios morales y $6.585.351 por agencias en derecho. ► PARA CADA PADRE: 20 SMLMV por perjuicios morales y $828.116 por agencias en derecho. ► AGENCIAS EN CASACIÓN: $10.600.000. ★ TOTAL APROXIMADO DE LA CONDENA EN 2023: $216.861.649 COP."
},
  { q: "9. ¿Qué concluyó la Corte Suprema en relación con la responsabilidad del empleador?",
    a: "Que aunque el contrato de aprendizaje no es laboral, sí genera deberes de seguridad; la empresa no suministró la línea de vida obligatoria, incumplió sus propios procedimientos y no adoptó medidas reales de prevención, configurándose culpa patronal." },

  { q: "10. ¿Consideras que la empresa patrocinadora actuó con negligencia? ¿Por qué?",
    a: "Sí. No suministró la línea de vida requerida, permitió trabajo en altura sin protección completa, no aplicó sus propios protocolos y omitió detener la actividad pese al riesgo evidente." },

  { q: "11. ¿Debería el SENA tener más responsabilidad en la supervisión de sus aprendices en etapa práctica?",
    a: "Sí, debería fortalecer el seguimiento, verificaciones de SG-SST en las empresas y mecanismos de control, aunque la responsabilidad primaria es del patrocinador." },

  { q: "12. ¿Qué enseñanzas deja esta sentencia para la implementación del SG-SST en las empresas que reciben aprendices?",
    a: "Que los aprendices deben recibir el mismo nivel de protección que un trabajador; los procedimientos deben cumplirse, no solo existir; los trabajos en alturas requieren medidas estrictas; y las empresas deben suspender tareas si no hay condiciones seguras." },

  { q: "13. ¿Crees que las sanciones impuestas fueron proporcionales al daño sufrido por el aprendiz?",
    a: "Sí, considerando la gravedad del accidente, la PCL del 41.32%, la negligencia demostrada y el impacto permanente en la vida del aprendiz y su familia." },
];

// --- Estado global ---
let currentIndex = 0;
let nextPreparedIndex = null;
let groups = [];       // {id, name, score}
let activeGroupId = null;

// Timer
const DEFAULT_MINUTES = 3;
let durationSec = DEFAULT_MINUTES * 60; // segundos
let timeLeft = durationSec;
let tick = null;
let isRunning = false;
let questionVisible = false; // solo se revela al iniciar la ronda

// Modo de preguntas
let mode = "continua"; // "continua" | "aleatoria"

// --- Utilidades ---
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function toast(msg){
  const n = document.createElement("div");
  n.className = "toast";
  n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(()=> n.remove(), 1600);
}

// --- Persistencia simple ---
function saveState(){
  const state = {
    currentIndex,
    groups,
    activeGroupId,
    durationSec,
    mode,
  };
  localStorage.setItem("sst_game_state_v2", JSON.stringify(state));
}
function loadState(){
  try{
    const raw = localStorage.getItem("sst_game_state_v2");
    if(!raw) return;
    const s = JSON.parse(raw);
    if(Array.isArray(s.groups)) groups = s.groups;
    if(typeof s.currentIndex === 'number') currentIndex = clampIndex(s.currentIndex);
    if(typeof s.activeGroupId !== 'undefined') activeGroupId = s.activeGroupId;
    if(typeof s.durationSec === 'number' && s.durationSec >= 60) {
      durationSec = s.durationSec;
      $("#durationMinutes").value = (durationSec/60);
    }
    if(s.mode === "aleatoria" || s.mode === "continua") {
      mode = s.mode;
      setModeUI(mode);
    }
  }catch(e){}
}

function clampIndex(i){ return Math.min(Math.max(0, i), bankQA.length - 1); }

// --- Renderizado de UI ---
function renderQuestion(){
  $("#qIndexLabel").textContent = `Pregunta ${currentIndex+1} / ${bankQA.length}`;
  $("#questionText").textContent = bankQA[currentIndex].q;
  $("#answerText").textContent = bankQA[currentIndex].a;
}

function setRoundStatus(text){
  const rs = $("#roundStatus");
  rs.innerHTML = text;
  rs.classList.remove("hidden");
}

function hideRoundStatus(){
  $("#roundStatus").classList.add("hidden");
}

function showQuestion(){
  questionVisible = true;
  hideRoundStatus();
  $("#questionText").classList.remove("hidden");
  $("#toggleAnswerBtn").disabled = false;
  renderQuestion();
  hideAnswer();
}

function hideQuestionPrepareNext(){
  questionVisible = false;
  $("#questionText").classList.add("hidden");
  $("#toggleAnswerBtn").disabled = true;
  hideAnswer();
  setRoundStatus(`<strong>Siguiente pregunta lista.</strong> Pulsa <em>Iniciar</em> para revelar y comenzar la ronda.`);
}

function renderGroups(){
  const wrap = $("#groupsList");
  wrap.innerHTML = "";
  if(groups.length === 0){
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Agrega grupos para comenzar.";
    wrap.appendChild(empty);
    return;
  }
  groups.forEach(g=>{
    const card = document.createElement("div");
    card.className = "group-card" + (g.id === activeGroupId ? " active":"");
    card.tabIndex = 0;
    card.setAttribute("role","button");
    card.setAttribute("aria-pressed", g.id === activeGroupId ? "true":"false");
    card.addEventListener("click", ()=> selectGroup(g.id));
    card.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" ") selectGroup(g.id) });

    const main = document.createElement("div");
    main.className = "group-main";
    main.innerHTML = `
      <span class="group-dot" aria-hidden="true"></span>
      <span class="group-name">${g.name}</span>
    `;

    const score = document.createElement("div");
    score.className = "group-score";
    score.innerHTML = `<span>⭐ ${g.score}</span>`;

    const actions = document.createElement("div");
    actions.className = "group-actions";
    const delBtn = document.createElement("button");
    delBtn.className = "btn small";
    delBtn.title = "Eliminar grupo";
    delBtn.textContent = "🗑";
    delBtn.addEventListener("click", (e)=>{ e.stopPropagation(); removeGroup(g.id); });

    const minusBtn = document.createElement("button");
    minusBtn.className = "btn small";
    minusBtn.title = "Restar 1 punto";
    minusBtn.textContent = "−1";
    minusBtn.addEventListener("click", (e)=>{ e.stopPropagation(); addScore(g.id, -1); });

    actions.append(minusBtn, delBtn);

    card.append(main, score, actions);
    wrap.appendChild(card);
  });
  saveState();
}

function selectGroup(id){
  activeGroupId = id;
  renderGroups();
}

function removeGroup(id){
  groups = groups.filter(g=> g.id !== id);
  if(activeGroupId === id) activeGroupId = null;
  renderGroups();
}

function addScore(targetGroupId, delta){
  const id = (typeof targetGroupId === 'number' || typeof targetGroupId === 'string') ? targetGroupId : activeGroupId;
  if(id == null){
    toast("Primero selecciona un grupo.");
    return;
  }
  const g = groups.find(x=> x.id===id);
  if(!g) return;
  g.score = Math.max(0, g.score + delta);
  renderGroups();
  celebrateScore(delta);
  // Al calificar, preparar la siguiente pregunta (modo continuo o aleatorio)
  prepareNextQuestion();
}

function celebrateScore(delta){
  // Feedback visual simple con icono SST flotante
  const icon = document.createElement("div");
  icon.style.position = "fixed";
  icon.style.left = "50%";
  icon.style.top = "60%";
  icon.style.transform = "translate(-50%, -50%)";
  icon.style.fontSize = "28px";
  icon.style.zIndex = "9999";
  icon.textContent = delta === 2 ? "🦺" : (delta === 1 ? "⚠️" : "⛔");
  document.body.appendChild(icon);
  setTimeout(()=> icon.remove(), 600);
}

function computeNextIndex(){
  if(mode === "aleatoria"){
    let r = Math.floor(Math.random() * bankQA.length);
    if(r === currentIndex) r = (r+1) % bankQA.length;
    return r;
  }
  // continua
  return (currentIndex + 1) % bankQA.length;
}

function prepareNextQuestion(){
  pauseTimer();
  nextPreparedIndex = computeNextIndex();
  hideQuestionPrepareNext();
  updateTimeLabel(); // deja el tiempo visible parado
  saveState();
}

// --- Respuesta ---
function showAnswer(){
  $("#answerBox").hidden = false;
  $("#toggleAnswerBtn").textContent = "Ocultar respuesta";
}
function hideAnswer(){
  $("#answerBox").hidden = true;
  $("#toggleAnswerBtn").textContent = "Mostrar respuesta";
}
function toggleAnswer(){
  const box = $("#answerBox");
  box.hidden ? showAnswer() : hideAnswer();
}

// --- Navegación manual (no afecta al flujo por rondas) ---
function prevQuestion(){
  currentIndex = (currentIndex - 1 + bankQA.length) % bankQA.length;
  if(questionVisible) renderQuestion();
  else setRoundStatus(`<strong>Pregunta preparada:</strong> #${currentIndex+1}. Pulsa <em>Iniciar</em> para comenzar.`);
  saveState();
}
function nextQuestion(){
  currentIndex = (currentIndex + 1) % bankQA.length;
  if(questionVisible) renderQuestion();
  else setRoundStatus(`<strong>Pregunta preparada:</strong> #${currentIndex+1}. Pulsa <em>Iniciar</em> para comenzar.`);
  saveState();
}
function randomQuestion(){
  let r = Math.floor(Math.random() * bankQA.length);
  if(r === currentIndex) r = (r+1) % bankQA.length;
  currentIndex = r;
  if(questionVisible) renderQuestion();
  else setRoundStatus(`<strong>Pregunta preparada:</strong> #${currentIndex+1}. Pulsa <em>Iniciar</em> para comenzar.`);
  saveState();
}

// --- Temporizador ---
function minutesToSec(min){ return Math.round(min * 60); }
function secToLabel(s){
  const m = Math.floor(s/60);
  const r = s % 60;
  return `${m.toString().padStart(2,'0')}:${r.toString().padStart(2,'0')}`;
}
function updateTimeLabel(){
  $("#timeLabel").textContent = secToLabel(timeLeft);
}

function updateProgress(){
  const pct = Math.max(0, Math.min(1, timeLeft / durationSec));
  updateTimeLabel();
  $("#progressBar").style.width = `${(1-pct)*100}%`;
  // Cambiar colores y pulso según umbrales
  const timerCard = document.querySelectorAll(".left-panel .panel.card")[1]; // panel del timer
  if(timeLeft <= Math.max(8, Math.floor(durationSec*0.12))){
    timerCard.classList.add("pulse-danger");
    // Vibración si corresponde
    if($("#vibrateToggle").checked && 'vibrate' in navigator){
      navigator.vibrate([100, 60, 100]);
    }
  }else{
    timerCard.classList.remove("pulse-danger");
  }
}

function tickTimer(){
  if(!isRunning) return;
  timeLeft -= 1;
  if(timeLeft <= 0){
    timeLeft = 0;
    isRunning = false;
    clearInterval(tick);
    updateProgress();
    if($("#vibrateToggle").checked && 'vibrate' in navigator){
      navigator.vibrate([200,80,200,80,200]);
    }
    toast("⏰ ¡Tiempo!");
    return;
  }
  updateProgress();
}

function startTimer(){
  if(isRunning) return;
  isRunning = true;
  clearInterval(tick);
  tick = setInterval(tickTimer, 1000);
}
function pauseTimer(){
  isRunning = false;
  clearInterval(tick);
}
function resetTimer(withDuration = false){
  pauseTimer();
  if(withDuration){
    // toma los minutos del input
    const mins = Math.max(1, parseFloat($("#durationMinutes").value || DEFAULT_MINUTES));
    durationSec = minutesToSec(mins);
  }
  timeLeft = durationSec;
  updateProgress();
}

// --- Flujo de ronda ---
function startRound(){
  // Si hay una siguiente preparada, avanza el índice
  if(nextPreparedIndex !== null){
    currentIndex = clampIndex(nextPreparedIndex);
    nextPreparedIndex = null;
  }
  // Revela pregunta y arranca tiempo desde minutos configurados
  resetTimer(true); // lee input (3 por defecto)
  showQuestion();
  startTimer();
  saveState();
}

// --- Eventos ---
function bindEvents(){
  // Grupos
  $("#groupForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = ($("#groupName").value || "").trim();
    if(!name) return;
    const id = Date.now() + Math.random();
    groups.push({id, name, score:0});
    $("#groupName").value = "";
    activeGroupId = id;
    renderGroups();
  });

  $$(".btn.score").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const s = parseInt(btn.dataset.score, 10);
      addScore(activeGroupId, s); // s=2/1/0
    });
  });

  // Navegación
  $("#prevBtn").addEventListener("click", prevQuestion);
  $("#nextBtn").addEventListener("click", nextQuestion);
  $("#randomBtn").addEventListener("click", randomQuestion);

  // Respuesta
  $("#toggleAnswerBtn").addEventListener("click", toggleAnswer);

  // Timer
  $("#startRoundBtn").addEventListener("click", startRound);
  $("#pauseBtn").addEventListener("click", pauseTimer);
  $("#resetBtn").addEventListener("click", ()=> resetTimer(true));
  $("#addTimeBtn").addEventListener("click", ()=>{
    timeLeft += 30;
    durationSec += 30; // mantiene coherencia del porcentaje
    updateProgress();
  });
  $("#durationMinutes").addEventListener("change", ()=>{
    // no reinicia la ronda, solo ajusta el próximo inicio
    const mins = Math.max(1, parseFloat($("#durationMinutes").value || DEFAULT_MINUTES));
    durationSec = minutesToSec(mins);
    if(!isRunning){
      timeLeft = durationSec;
      updateProgress();
    }
    saveState();
  });

  // Modo (continua/aleatoria)
  $$("input[name='mode']").forEach(r=>{
    r.addEventListener("change", (e)=>{
      mode = e.target.value;
      saveState();
    });
  });

  window.addEventListener("beforeunload", saveState);
}

function setModeUI(m){
  $$("input[name='mode']").forEach(r=>{
    r.checked = (r.value === m);
  });
}

// --- Init ---
function init(){
  loadState();
  renderGroups();
  // Al cargar: no se muestra pregunta hasta iniciar
  hideQuestionPrepareNext();
  // Ajusta tiempo inicial a 3:00 si no hay persistencia previa
  if(!localStorage.getItem("sst_game_state_v2")){
    $("#durationMinutes").value = DEFAULT_MINUTES;
  }
  resetTimer(false);
  // Muestra etiqueta de pregunta de índice actual (sin revelar texto)
  $("#qIndexLabel").textContent = `Pregunta ${currentIndex+1} / ${bankQA.length}`;
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);