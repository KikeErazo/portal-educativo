// PEGA ENTRE LAS COMILLAS LA URL QUE COPIASTE DE GOOGLE APPS SCRIPT (termina en /exec)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwV1vfRSuFfrob1MViii9O7PNMoAXvxE6fk1mwQw1QpeTcyoVyMPJubPezpFvtJC-BN/exec";

const MAIN_QUESTIONS = [
  {
    level: "Nivel 1 • Separación en la Fuente (GTC 24 / Res. 2184 de 2019)",
    points: 100,
    text: "Según la Resolución 2184 de 2019 (que actualiza el código de colores de la GTC 24 en Colombia), ¿de qué color debe ser el recipiente para depositar residuos aprovechables como plástico, vidrio, papel, cartón y metales limpios y secos?",
    options: ["Verde", "Blanco", "Negro", "Rojo"],
    answer: 1,
    hint: "El código unificado nacional asigna el color blanco para aprovechables, verde para orgánicos aprovechables y negro para no aprovechables."
  },
  {
    level: "Nivel 1 • Implementación (GTC 86:2003)",
    points: 100,
    text: "¿Cuál es el objetivo técnico principal de la Guía Técnica Colombiana GTC 86:2003 en el diagnóstico ambiental?",
    options: [
      "Establecer límites permisibles de ruido ambiental",
      "Brindar directrices para la implementación de la gestión integral de residuos",
      "Definir los parámetros físico-químicos del agua potable",
      "Regular únicamente el transporte marítimo internacional"
    ],
    answer: 1,
    hint: "La GTC 86 orienta paso a paso la implementación de la gestión integral de residuos en organizaciones."
  },
  {
    level: "Nivel 1 • Balance de Proceso (Inputs / Outputs)",
    points: 100,
    text: "Al analizar un proceso productivo mediante el diagrama de entradas (inputs) y salidas (outputs) en el diagnóstico ambiental, los residuos sólidos generados se clasifican como:",
    options: [
      "Entradas de materia prima",
      "Insumos energéticos",
      "Salidas (outputs) del proceso",
      "Mano de obra directa"
    ],
    answer: 2,
    hint: "Todo lo que resulta tras la transformación de materias primas e insumos (productos, subproductos, emisiones y residuos) constituye una salida."
  },
  {
    level: "Nivel 1 • Conceptos Fundamentales",
    points: 100,
    text: "Técnicamente, ¿en qué consiste el 'Aprovechamiento' dentro de la gestión integral de residuos sólidos?",
    options: [
      "Recolección de residuos separados en la fuente, transporte selectivo hasta la estación o planta, clasificación y pesaje",
      "Enterrar todos los residuos mezclados en celdas de seguridad",
      "Incinerar residuos a cielo abierto para reducir su volumen",
      "Almacenar envases químicos indefinidamente en el área operativa"
    ],
    answer: 0,
    hint: "Es la actividad complementaria del servicio de aseo enfocada en residuos separados en la fuente para su reincorporación productiva."
  },
  {
    level: "Nivel 2 • Diagnóstico Gráfico (Ecomapas)",
    points: 200,
    text: "¿Qué elementos son indispensables para zonificar correctamente un Ecomapa de residuos en una organización?",
    options: [
      "El avalúo catastral y los linderos prediales",
      "La característica, el tipo de residuo generado en cada punto y convenciones establecidas",
      "Únicamente la dirección del viento predominante",
      "La profundidad del nivel freático del terreno"
    ],
    answer: 1,
    hint: "Un ecomapa permite visualizar espacialmente los puntos críticos mediante convenciones claras según el tipo y característica del residuo."
  },
  {
    level: "Nivel 2 • Aprovechamiento Técnico (Serie GTC 53)",
    points: 200,
    text: "Si una organización desea implementar técnicas de compostaje o lombricultura para aprovechar sus residuos sólidos orgánicos no peligrosos, ¿qué documento técnico de la serie GTC 53 debe aplicar?",
    options: ["GTC 53-2", "GTC 53-4", "GTC 53-7", "GTC 53-3"],
    answer: 2,
    hint: "GTC 53-2 es plásticos, 53-3 vidrio, 53-4 papel/cartón, 53-5 metales y GTC 53-7 corresponde a residuos sólidos orgánicos no peligrosos."
  },
  {
    level: "Nivel 2 • Evaluación Ambiental",
    points: 200,
    text: "¿Cuál es la diferencia técnica entre 'Aspecto Ambiental' e 'Impacto Ambiental'?",
    options: [
      "Son términos exactamente iguales",
      "El aspecto es el elemento de la actividad que interactúa con el ambiente y el impacto es cualquier cambio (adverso o beneficioso) resultante en el ambiente",
      "El impacto siempre es positivo y el aspecto siempre es negativo",
      "El aspecto solo ocurre en ecosistemas acuáticos"
    ],
    answer: 1,
    hint: "Relación causa-efecto: Generación de residuos (Aspecto) -> Contaminación del suelo o agua (Impacto)."
  },
  {
    level: "Nivel 2 • Cuantificación y Pesaje",
    points: 200,
    text: "Durante la práctica de cuantificación y caracterización de residuos sólidos, ¿qué requisito técnico debe garantizarse en los equipos de pesaje antes de registrar datos?",
    options: [
      "La verificación de calibración del equipo de pesaje",
      "Mezclar residuos peligrosos con ordinarios antes de pesar",
      "Realizar el pesaje exclusivamente en horas de la noche",
      "Utilizar básculas sin plataforma de soporte"
    ],
    answer: 0,
    hint: "Para garantizar la confiabilidad y trazabilidad de la captura de datos se exige verificar la calibración de básculas y balanzas."
  },
  {
    level: "Nivel 3 • Gestión de RESPEL (Generadores)",
    points: 300,
    text: "En la gestión de residuos peligrosos (RESPEL), ¿qué cálculo estadístico se emplea con los registros mensuales para clasificar a una entidad como pequeño, mediano o gran generador?",
    options: [
      "La temperatura promedio anual",
      "Las medias móviles de los datos de generación de residuos peligrosos",
      "El porcentaje de humedad relativa",
      "El pH de los lixiviados"
    ],
    answer: 1,
    hint: "La normativa colombiana exige calcular las medias móviles mensuales de los últimos periodos para determinar la categoría del generador."
  },
  {
    level: "Nivel 3 • Normativa Internacional (RESPEL)",
    points: 300,
    text: "¿Qué tratado internacional regula el control de los movimientos transfronterizos de los desechos peligrosos y su eliminación?",
    options: [
      "Protocolo de Kioto",
      "Convenio de Basilea",
      "Convenio de Ramsar",
      "Protocolo de Montreal"
    ],
    answer: 1,
    hint: "El Convenio de Basilea controla el transporte entre fronteras de desechos peligrosos y otros desechos."
  },
  {
    level: "Nivel 3 • Etiquetado y Seguridad Química",
    points: 300,
    text: "¿Qué norma técnica colombiana y qué sistema internacional se articulan para el etiquetado, rotulado y clasificación de sustancias y residuos peligrosos?",
    options: [
      "NTC 1692 y el Sistema Globalmente Armonizado (SGA / GHS)",
      "Resolución 0627 y NTC 5667",
      "Decreto 3930 y NTC 4113",
      "Resolución 2115 y GTC 53-3"
    ],
    answer: 0,
    hint: "La NTC 1692 regula el transporte y rotulado de mercancías peligrosas y el SGA clasifica los peligros químicos."
  },
  {
    level: "Nivel 3 • Economía Circular (9R) y RAEE",
    points: 300,
    text: "Dentro de la jerarquía de las 9R de la Economía Circular y la gestión integral de RAEE, ¿qué estrategias tienen mayor prioridad preventiva antes de reciclar o disponer?",
    options: [
      "Disponer en celda de seguridad",
      "Rechazar, repensar y reducir desde el diseño y el consumo",
      "Triturar sin separación previa",
      "Recuperar energía mediante combustión"
    ],
    answer: 1,
    hint: "La prevención en la fuente (Rechazar, Repensar, Reducir) es el pilar superior de la economía circular."
  }
];

const BACKUP_QUESTION = {
  level: "Pregunta Comodín • Emergencias y Almacenamiento",
  points: 200,
  text: "¿Cómo se denomina el documento técnico internacional que orienta la respuesta inicial ante incidentes durante el transporte de mercancías y materiales peligrosos?",
  options: [
    "Libro Verde de Biodiversidad",
    "Guía de Respuesta a Emergencias (Libro Naranja)",
    "Manual de Caudales Hidrológicos",
    "Protocolo de Calidad del Aire"
  ],
  answer: 1,
  hint: "Conocido en seguridad química y transporte como el 'Libro Naranja' de Naciones Unidas."
};

const QUESTION_TIME = 45;
const RING_CIRCUMFERENCE = 264;
const STORAGE_KEY = "erazo_residuos_ranking_2026";

let cachedRecords = [];
let state = {
  ficha: "",
  name: "",
  mode: "Individual",
  questions: [],
  currentIndex: 0,
  score: 0,
  hits: 0,
  totalSeconds: 0,
  timeLeft: QUESTION_TIME,
  timerId: null,
  locked: false,
  used5050: false,
  usedHint: false,
  usedSwap: false
};

// Inyectar botón de actualización en vivo y barra de estado de nube
document.addEventListener("DOMContentLoaded", () => {
  const filterGroup = document.querySelector(".filter-group");
  if (filterGroup) {
    const refreshBtn = document.createElement("button");
    refreshBtn.className = "btn-outline";
    refreshBtn.innerHTML = "🔄 Actualizar";
    refreshBtn.onclick = () => fetchCloudLeaderboard();
    filterGroup.prepend(refreshBtn);
  }

  const controls = document.querySelector(".leaderboard-controls");
  if (controls) {
    const statusBar = document.createElement("div");
    statusBar.id = "cloud-status";
    statusBar.style.cssText = "width:100%; font-size:0.82rem; color:#38bdf8; margin-top:0.2rem;";
    controls.appendChild(statusBar);
  }
});

function isCloudConfigured() {
  return GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/");
}

function setCloudStatus(msg, color = "#38bdf8") {
  const el = document.getElementById("cloud-status");
  if (el) {
    el.textContent = msg;
    el.style.color = color;
  }
}

function formatTime(sec) {
  const mins = Math.floor(sec / 60).toString().padStart(2, "0");
  const secs = (sec % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function showSection(id) {
  ["view-home", "view-game", "view-results"].forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function goHome() {
  clearInterval(state.timerId);
  showSection("view-home");
}

async function showLeaderboardView() {
  clearInterval(state.timerId);
  document.getElementById("final-summary").classList.add("hidden");
  showSection("view-results");
  await fetchCloudLeaderboard();
}

function startGame(e) {
  e.preventDefault();
  const ficha = document.getElementById("ficha").value.trim();
  const name = document.getElementById("player-name").value.trim();
  const mode = document.getElementById("mode").value;

  if (!ficha || !name) return;

  state = {
    ficha,
    name,
    mode,
    questions: JSON.parse(JSON.stringify(MAIN_QUESTIONS)),
    currentIndex: 0,
    score: 0,
    hits: 0,
    totalSeconds: 0,
    timeLeft: QUESTION_TIME,
    timerId: null,
    locked: false,
    used5050: false,
    usedHint: false,
    usedSwap: false
  };

  document.getElementById("hud-ficha").textContent = state.ficha;
  document.getElementById("hud-name").textContent = `${state.name} (${state.mode})`;
  document.getElementById("hud-score").textContent = "0";
  document.getElementById("hud-elapsed").textContent = "00:00";
  document.getElementById("life-5050").disabled = false;
  document.getElementById("life-hint").disabled = false;
  document.getElementById("life-swap").disabled = false;

  buildLadder();
  showSection("view-game");
  loadQuestion();
}

function buildLadder() {
  const list = document.getElementById("ladder-list");
  list.innerHTML = "";
  state.questions.forEach((q, idx) => {
    const li = document.createElement("li");
    li.className = "ladder-item" + ((idx + 1) % 4 === 0 ? " milestone" : "");
    li.id = `ladder-${idx}`;
    li.innerHTML = `<span>Pregunta ${idx + 1}</span><span>+${q.points} pts</span>`;
    list.appendChild(li);
  });
}

function updateLadder() {
  state.questions.forEach((_, idx) => {
    const el = document.getElementById(`ladder-${idx}`);
    el.classList.remove("active", "done");
    if (idx < state.currentIndex) el.classList.add("done");
    if (idx === state.currentIndex) el.classList.add("active");
  });
}

function updateChronoVisual() {
  const timerEl = document.getElementById("hud-timer");
  const elapsedEl = document.getElementById("hud-elapsed");
  const chronoBox = document.getElementById("chrono-box");
  const circle = document.getElementById("chrono-circle");

  timerEl.textContent = state.timeLeft;
  elapsedEl.textContent = formatTime(state.totalSeconds);

  const offset = RING_CIRCUMFERENCE * (1 - state.timeLeft / QUESTION_TIME);
  circle.style.strokeDashoffset = offset;

  if (state.timeLeft <= 10) {
    chronoBox.classList.add("warning");
  } else {
    chronoBox.classList.remove("warning");
  }
}

function loadQuestion() {
  state.locked = false;
  state.timeLeft = QUESTION_TIME;
  updateLadder();
  updateChronoVisual();

  const q = state.questions[state.currentIndex];
  document.getElementById("q-level").textContent = `Pregunta ${state.currentIndex + 1}/12 • ${q.level}`;
  document.getElementById("q-text").textContent = q.text;

  const hintBox = document.getElementById("q-hint");
  hintBox.textContent = "💡 " + q.hint;
  hintBox.classList.add("hidden");

  const container = document.getElementById("options-container");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.id = `opt-${idx}`;
    btn.innerHTML = `<span class="option-letter">${letters[idx]}:</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(idx);
    container.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.timeLeft--;
    state.totalSeconds++;
    updateChronoVisual();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  if (state.locked) return;
  state.locked = true;
  const q = state.questions[state.currentIndex];
  document.getElementById(`opt-${q.answer}`).classList.add("correct");
  setTimeout(nextStep, 1600);
}

function selectOption(selectedIdx) {
  if (state.locked) return;
  state.locked = true;
  clearInterval(state.timerId);

  const q = state.questions[state.currentIndex];
  const selectedBtn = document.getElementById(`opt-${selectedIdx}`);
  const correctBtn = document.getElementById(`opt-${q.answer}`);

  if (selectedIdx === q.answer) {
    selectedBtn.classList.add("correct");
    const timeBonus = state.timeLeft * 2;
    state.score += q.points + timeBonus;
    state.hits++;
    document.getElementById("hud-score").textContent = state.score;
  } else {
    selectedBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
  }

  setTimeout(nextStep, 1500);
}

function nextStep() {
  state.currentIndex++;
  if (state.currentIndex < state.questions.length) {
    loadQuestion();
  } else {
    finishGame();
  }
}

// COMODINES
function use5050() {
  if (state.used5050 || state.locked) return;
  state.used5050 = true;
  document.getElementById("life-5050").disabled = true;

  const q = state.questions[state.currentIndex];
  const wrongIndices = [0, 1, 2, 3].filter(i => i !== q.answer);
  wrongIndices.sort(() => Math.random() - 0.5);
  wrongIndices.slice(0, 2).forEach(idx => {
    document.getElementById(`opt-${idx}`).classList.add("eliminated");
  });
}

function useHint() {
  if (state.usedHint || state.locked) return;
  state.usedHint = true;
  document.getElementById("life-hint").disabled = true;
  document.getElementById("q-hint").classList.remove("hidden");
}

function useSwap() {
  if (state.usedSwap || state.locked) return;
  state.usedSwap = true;
  document.getElementById("life-swap").disabled = true;
  BACKUP_QUESTION.points = state.questions[state.currentIndex].points;
  state.questions[state.currentIndex] = BACKUP_QUESTION;
  loadQuestion();
}

// FINALIZACIÓN Y SINCRONIZACIÓN CON GOOGLE SHEETS
async function finishGame() {
  clearInterval(state.timerId);

  const record = {
    action: "save",
    ficha: state.ficha,
    name: state.name,
    mode: state.mode,
    hits: state.hits,
    totalQuestions: state.questions.length,
    time: state.totalSeconds,
    score: state.score,
    date: new Date().toLocaleString("es-CO")
  };

  // Respaldo local inmediato
  const localRecords = getLocalRecords();
  localRecords.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localRecords));

  let medal = "🌱";
  let title = "¡Buen intento, sigue fortaleciendo tus conocimientos!";
  if (state.hits >= 10) {
    medal = "🏆";
    title = "¡Excelente! Dominio Sobresaliente en Gestión de Residuos";
  } else if (state.hits >= 7) {
    medal = "🥈";
    title = "¡Muy bien! Desempeño Técnico Sólido";
  }

  document.getElementById("res-medal").textContent = medal;
  document.getElementById("res-title").textContent = title;
  document.getElementById("res-subtitle").textContent = `Ficha / Grupo: ${state.ficha} • ${state.name} (${state.mode})`;
  document.getElementById("res-score").textContent = `${state.score} pts`;
  document.getElementById("res-hits").textContent = `${state.hits} / ${state.questions.length}`;
  document.getElementById("res-time").textContent = formatTime(state.totalSeconds);

  document.getElementById("final-summary").classList.remove("hidden");
  showSection("view-results");

  if (isCloudConfigured()) {
    setCloudStatus("⏳ Enviando tu puntaje al podio global en Google Sheets...", "#fbbf24");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(record)
      });
    } catch (err) {
      console.error("Error al guardar en Google Sheets:", err);
    }
  }

  await fetchCloudLeaderboard();
}

function getLocalRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

async function fetchCloudLeaderboard() {
  if (!isCloudConfigured()) {
    cachedRecords = getLocalRecords();
    setCloudStatus("ℹ️ Modo local activo (pega tu URL de Google Apps Script en app.js para sincronizar todos los celulares).", "#94a3b8");
    renderLeaderboard();
    return;
  }

  setCloudStatus("🔄 Sincronizando posiciones en tiempo real...", "#38bdf8");
  const tbody = document.getElementById("leaderboard-body");
  if (cachedRecords.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#38bdf8;">Cargando resultados desde Google Sheets...</td></tr>`;
  }

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL);
    const data = await res.json();
    if (data && Array.isArray(data.records)) {
      cachedRecords = data.records;
      setCloudStatus(`🟢 Podio global sincronizado en vivo (${cachedRecords.length} registros totales).`, "#34d399");
    }
  } catch (err) {
    console.error("Error leyendo Google Sheets:", err);
    cachedRecords = getLocalRecords();
    setCloudStatus("⚠️ Sin conexión a la nube: mostrando resultados guardados en este dispositivo.", "#fca5a5");
  }

  renderLeaderboard();
}

function renderLeaderboard() {
  const filter = document.getElementById("filter-ficha").value.trim().toLowerCase();
  let records = [...cachedRecords];

  if (filter) {
    records = records.filter(r => String(r.ficha).toLowerCase().includes(filter));
  }

  records.sort((a, b) => Number(b.score) - Number(a.score) || Number(a.time) - Number(b.time));

  const tbody = document.getElementById("leaderboard-body");
  tbody.innerHTML = "";

  if (records.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#94a3b8;">Aún no hay resultados registrados para este filtro.</td></tr>`;
    return;
  }

  records.forEach((r, idx) => {
    const tr = document.createElement("tr");
    if (idx === 0) tr.className = "top-1";
    if (idx === 1) tr.className = "top-2";
    if (idx === 2) tr.className = "top-3";

    const badge = idx === 0 ? "🥇 1°" : idx === 1 ? "🥈 2°" : idx === 2 ? "🥉 3°" : `#${idx + 1}`;
    tr.innerHTML = `
      <td>${badge}</td>
      <td><strong>${r.ficha}</strong></td>
      <td>${r.name}</td>
      <td>${r.mode}</td>
      <td>${r.hits}/${r.totalQuestions}</td>
      <td>${formatTime(Number(r.time))}</td>
      <td><strong style="color: var(--gold);">${r.score} pts</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

function exportCSV() {
  if (cachedRecords.length === 0) {
    alert("No hay resultados registrados para exportar.");
    return;
  }
  const records = [...cachedRecords].sort((a, b) => Number(b.score) - Number(a.score) || Number(a.time) - Number(b.time));
  let csv = "Puesto;Ficha_Grupo;Participante;Modalidad;Aciertos;Tiempo_Seg;Puntaje;Fecha\n";
  records.forEach((r, i) => {
    csv += `${i + 1};"${r.ficha}";"${r.name}";"${r.mode}";"${r.hits}/${r.totalQuestions}";${r.time};${r.score};"${r.date}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Resultados_Gestion_Residuos_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

async function clearLeaderboard() {
  const pin = prompt("Ingresa el PIN de Instructor para reiniciar la tabla (2026):");
  if (pin === "2026") {
    localStorage.removeItem(STORAGE_KEY);
    if (isCloudConfigured()) {
      setCloudStatus("⏳ Reiniciando hoja de cálculo...", "#fbbf24");
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({ action: "clear", pin: "2026" })
        });
      } catch (err) {
        console.error(err);
      }
      await fetchCloudLeaderboard();
    } else {
      cachedRecords = [];
      renderLeaderboard();
    }
  } else if (pin !== null) {
    alert("PIN incorrecto.");
  }
}