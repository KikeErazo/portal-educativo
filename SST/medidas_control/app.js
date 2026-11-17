/* ==========================================================
   Evaluación SST — Casos por Grupos (HTML+CSS+JS puro)
   Autor: Enrique (SENA - ASTIN) con apoyo de M365 Copilot
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /** Estado global */
  const state = {
    groupName: "",
    timePerCase: 180,
    enableHints: true,     // ✅ Ayuda por defecto
    avoidRepeat: false,    // ✅ No bloquear casos por defecto
    isTeacher: false,

    timeBonusEnabled: true,
    timeBonusMax: 2,

    currentCaseIndex: null,
    timer: { id: null, remaining: 0, started: false, beeped:false },
    usedHintThisCase: false,

    pendingResult: null,
    scoreboard: loadFromStorage("sst_scoreboard", []),
    usedCases: loadFromStorage("sst_used_cases", []),
  };

  /** UI refs */
  const UI = {
    screens: { intro: $("#screenIntro"), case: $("#screenCase"), board: $("#screenScoreboard") },
    header: {
      btnNew: $("#btnNewRun"), btnBoard: $("#btnScoreboard"), btnTeacher: $("#btnTeacherMode"),
      groupBadge: $("#groupNameBadge"), scoreBadge: $("#scoreBadge"), timerBadge: $("#timerBadge"), caseBadge: $("#caseBadge")
    },
    // Intro
    introForm: $("#introForm"), groupName: $("#groupName"), timeMin: $("#timePerCaseMin"),
    enableHints: $("#enableHints"), selectCase: $("#selectCase"), avoidRepeat: $("#avoidRepeat"),
    enableTimeBonus: $("#enableTimeBonus"), bonusMax: $("#bonusMax"),
    // Case
    caseTitle: $("#caseTitle"), caseDesc: $("#caseDescription"),
    btnExpandCase: $("#btnExpandCase"), btnStartCase: $("#btnStartCase"), questionsWrap: $("#questionsWrap"),
    selectClasificacion: $("#selectClasificacion"), risksOptions: $("#risksOptions"),
    panelFuente: $("#panel-fuente"), panelMedio: $("#panel-medio"), panelPersona: $("#panel-persona"),
    feedbackClas: $("#feedbackClasificacion"), feedbackRisks: $("#feedbackRiesgos"), feedbackMed: $("#feedbackMedidas"),
    btnHint: $("#btnHint"), btnTeacherAddMin: $("#btnTeacherAddMin"), btnTeacherAdd5Min: $("#btnTeacherAdd5Min"),
    btnFinish: $("#btnFinish"), btnCancel: $("#btnCancel"),
    toast: $("#toast"), tabs: $$(".tab"),
    // Modals
    modalHint: $("#modalHint"), modalHintText: $("#modalHintText"),
    modalCase: $("#modalCase"), modalCaseTitle: $("#modalCaseTitle"), modalCaseText: $("#modalCaseText"),
    modalFeedback: $("#modalFeedback"), feedbackBody: $("#feedbackBody"), btnSaveToBoard: $("#btnSaveToBoard"),
    // Scoreboard
    scoreboardTbody: $("#scoreboardTable")?.querySelector("tbody"),
    scoreboardSummary: $("#scoreboardSummary"),
    podium: $("#podium"),
    podiumItems: { gold: $("#podium")?.querySelector(".gold"), silver: $("#podium")?.querySelector(".silver"), bronze: $("#podium")?.querySelector(".bronze") },
    btnDownloadCSV: $("#btnDownloadCSV"), btnResetBoard: $("#btnResetBoard"),
    btnStartAnother: $("#btnStartAnother"), btnCloseBoard: $("#btnCloseBoard"),
    // Teacher
    teacherPanel: $("#teacherPanel"), toggleKey: $("#toggleKey"), answerKey: $("#answerKey"), downloadKey: $("#downloadKey"),
    panelAddMin: $("#panelAddMin"), panelAdd5Min: $("#panelAdd5Min"),
    panelAvoidRepeat: $("#panelAvoidRepeat"), panelTimeBonus: $("#panelTimeBonus"), panelBonusMax: $("#panelBonusMax"),
    confetti: $("#confetti"), beep: $("#beep"),
  };

  /** Topes y banco de casos */
  const MAX_PTS = { clas: 2, riesgos: 3, medidas: { fuente: 3, medio: 3, persona: 3 } };
  const MAX_PER_CASE = MAX_PTS.clas + MAX_PTS.riesgos + MAX_PTS.medidas.fuente + MAX_PTS.medidas.medio + MAX_PTS.medidas.persona; // 14

  const CASES = [
    {
      id: 1, color: "🟧",
      title: "Herramienta eléctrica deteriorada",
      description: "En un taller de metalmecánica, un operario utiliza un taladro eléctrico cuyo cable está pelado y presenta chispas ocasionales. El trabajador asegura que “todavía funciona bien” y continúa la tarea sin reportar el daño.",
      clasificacionOptions: ["Seguridad — Mecánico","Seguridad — Eléctrico (exposición a energía)","Físico — Temperatura","Químico"],
      clasificacionCorrect: "Seguridad — Eléctrico (exposición a energía)",
      riesgosOptions: ["Choque/descarga eléctrica","Incendio por cortocircuito","Electrocución","Exposición a solventes","Quemaduras térmicas por radiación solar"],
      riesgosCorrect: ["Choque/descarga eléctrica","Incendio por cortocircuito","Electrocución"],
      medidas: {
        fuente: {
          options: ["Retirar de servicio y reemplazar/ reparar cableado","Instalar protección diferencial (GFCI)","Mantenimiento preventivo del taladro","Agregar ventiladores al área"],
          correct: ["Retirar de servicio y reemplazar/ reparar cableado","Instalar protección diferencial (GFCI)","Mantenimiento preventivo del taladro"]
        },
        medio: {
          options: ["Aplicar LOTO (bloqueo y etiquetado) para equipos defectuosos","Señalizar 'Fuera de servicio'","Orden y rutas para cables","Poner música ambiental"],
          correct: ["Aplicar LOTO (bloqueo y etiquetado) para equipos defectuosos","Señalizar 'Fuera de servicio'","Orden y rutas para cables"]
        },
        persona: {
          options: ["Guantes dieléctricos y gafas","Calzado con puntera de aluminio","Capacitación en reporte de actos/condiciones inseguras"],
          correct: ["Guantes dieléctricos y gafas","Capacitación en reporte de actos/condiciones inseguras"]
        }
      },
      hint: "Prioriza cortar la energía y retirar de servicio. El peligro central es eléctrico."
    },
    {
      id: 2, color: "🟩",
      title: "Trabajo en altura sin puntos de anclaje",
      description: "En una bodega, un auxiliar de mantenimiento sube a limpiar canaletas ubicadas a 3 metros de altura. Solo usa una escalera portátil apoyada en la pared y no cuenta con arnés ni línea de vida.",
      clasificacionOptions: ["Seguridad — Trabajo en alturas","Ergonómico","Físico — Iluminación","Psicosocial"],
      clasificacionCorrect: "Seguridad — Trabajo en alturas",
      riesgosOptions: ["Caída a distinto nivel","Golpeado por caída de objetos","Intoxicación química","Fracturas/lesiones graves"],
      riesgosCorrect: ["Caída a distinto nivel","Golpeado por caída de objetos","Fracturas/lesiones graves"],
      medidas: {
        fuente: {
          options: ["Instalar puntos de anclaje certificados / línea de vida","Usar plataforma elevadora o andamio con barandas","Agregar más iluminación","Aumentar la velocidad del trabajo"],
          correct: ["Instalar puntos de anclaje certificados / línea de vida","Usar plataforma elevadora o andamio con barandas"]
        },
        medio: {
          options: ["Permiso de trabajo en alturas","Demarcar/aislar área inferior","Inspección de escaleras y procedimiento seguro","Reproducir música para concentración"],
          correct: ["Permiso de trabajo en alturas","Demarcar/aislar área inferior","Inspección de escaleras y procedimiento seguro"]
        },
        persona: {
          options: ["Arnés de cuerpo completo + eslinga con absorbedor","Casco con barbuquejo y calzado antideslizante","Capacitación/certificación vigente en alturas","Uso de guantes criogénicos"],
          correct: ["Arnés de cuerpo completo + eslinga con absorbedor","Casco con barbuquejo y calzado antideslizante","Capacitación/certificación vigente en alturas"]
        }
      },
      hint: "Reemplaza escalera por plataforma segura y establece anclajes."
    },
    {
      id: 3, color: "🟧",
      title: "Mezcla de productos de limpieza",
      description: "Una auxiliar de aseo mezcla hipoclorito con un desengrasante para “potenciar” la limpieza del piso de una cocina industrial. No utiliza guantes, gafas ni tapabocas, y el área tiene poca ventilación.",
      clasificacionOptions: ["Químico (sustancias peligrosas)","Físico — Ruido","Biológico","Seguridad — Tránsito interno"],
      clasificacionCorrect: "Químico (sustancias peligrosas)",
      riesgosOptions: ["Inhalación de gases irritantes (cloro/cloraminas)","Dermatitis / quemaduras químicas","Daño ocular","Hipoacusia neurosensorial"],
      riesgosCorrect: ["Inhalación de gases irritantes (cloro/cloraminas)","Dermatitis / quemaduras químicas","Daño ocular"],
      medidas: {
        fuente: {
          options: ["Prohibir mezcla; usar productos compatibles y dosificadores","Sustituir por producto multiuso menos peligroso","Agregar silenciadores a máquinas","Eliminar limpieza"],
          correct: ["Prohibir mezcla; usar productos compatibles y dosificadores","Sustituir por producto multiuso menos peligroso"]
        },
        medio: {
          options: ["Ventilación adecuada (natural/mecánica)","SDS y etiquetado GHS; almacenamiento segregado","Ducha/lavaojos disponible","Señalización de área"],
          correct: ["Ventilación adecuada (natural/mecánica)","SDS y etiquetado GHS; almacenamiento segregado","Ducha/lavaojos disponible","Señalización de área"]
        },
        persona: {
          options: ["Guantes de nitrilo, gafas y delantal químico","Respirador con cartucho adecuado","Capacitación en manipulación segura","Orejeras"],
          correct: ["Guantes de nitrilo, gafas y delantal químico","Respirador con cartucho adecuado","Capacitación en manipulación segura"]
        }
      },
      hint: "Hipoclorito + otros productos puede liberar cloro. Ventilación y EPP son clave."
    },
    {
      id: 4, color: "🟨",
      title: "Exposición prolongada a ruido industrial",
      description: "En el área de producción de una fábrica, una máquina genera ruido permanente. El nivel sonoro es alto y los trabajadores pasan turnos completos en ese espacio. No se observan controles de ruido ni protectores auditivos.",
      clasificacionOptions: ["Físico — Ruido","Físico — Iluminación","Ergonómico","Psicosocial"],
      clasificacionCorrect: "Físico — Ruido",
      riesgosOptions: ["Hipoacusia / tinnitus","Estrés, fatiga y errores","Intoxicación por cloro","Aumento de accidentes"],
      riesgosCorrect: ["Hipoacusia / tinnitus","Estrés, fatiga y errores","Aumento de accidentes"],
      medidas: {
        fuente: {
          options: ["Aislamiento acústico de la fuente, silenciadores","Cabinas/acústicas y mantenimiento","Bajar las luces del área"],
          correct: ["Aislamiento acústico de la fuente, silenciadores","Cabinas/acústicas y mantenimiento"]
        },
        medio: {
          options: ["Mediciones y mapa de ruido; señalización de zona","Rotación y pausas; programa conservación auditiva","Permiso de alturas"],
          correct: ["Mediciones y mapa de ruido; señalización de zona","Rotación y pausas; programa conservación auditiva"]
        },
        persona: {
          options: ["Protectores auditivos (NRR adecuado)","Audiometrías periódicas","Capacitación en uso y cuidado"],
          correct: ["Protectores auditivos (NRR adecuado)","Audiometrías periódicas","Capacitación en uso y cuidado"]
        }
      },
      hint: "Controles de ingeniería + programa de conservación auditiva."
    },
    {
      id: 5, color: "🟪",
      title: "Mala ergonomía en puesto de oficina",
      description: "Una asistente administrativa permanece 8 horas sentada frente al computador. Su silla no tiene soporte lumbar, el monitor está muy bajo y la trabajadora reporta dolor en la espalda y en el cuello.",
      clasificacionOptions: ["Ergonómico / Biomecánico","Físico — Iluminación","Químico","Seguridad — Eléctrico"],
      clasificacionCorrect: "Ergonómico / Biomecánico",
      riesgosOptions: ["Dolor lumbar/cervical y TME","Fatiga visual","Dermatitis química"],
      riesgosCorrect: ["Dolor lumbar/cervical y TME","Fatiga visual"],
      medidas: {
        fuente: {
          options: ["Silla ergonómica con soporte lumbar y ajustes","Elevar monitor a altura ocular; soporte de portátil","Teclado/ratón ergonómicos"],
          correct: ["Silla ergonómica con soporte lumbar y ajustes","Elevar monitor a altura ocular; soporte de portátil","Teclado/ratón ergonómicos"]
        },
        medio: {
          options: ["Evaluación ergonómica; pausas activas programadas","Plan de orden del puesto (5S)","Medición de iluminancia con luxómetro"],
          correct: ["Evaluación ergonómica; pausas activas programadas","Plan de orden del puesto (5S)"]
        },
        persona: {
          options: ["Higiene postural y micro-pausas","Regla 20-20-20 para vista","Uso de EPP químico"],
          correct: ["Higiene postural y micro-pausas","Regla 20-20-20 para vista"]
        }
      },
      hint: "Ajustes del puesto + pausas activas son la base."
    },
    {
      id: 6, color: "🟨",
      title: "Derrame de aceite en el piso de producción",
      description: "En una planta de manufactura, una máquina pierde aceite y genera un charco en el piso. Los operarios continúan transitando por el área sin delimitarla ni limpiarla de inmediato. Uno de ellos casi resbala mientras transportaba una caja pesada.",
      clasificacionOptions: ["Seguridad — Locativo (superficies de tránsito)","Químico","Físico — Ruido"],
      clasificacionCorrect: "Seguridad — Locativo (superficies de tránsito)",
      riesgosOptions: ["Resbalón/caída al mismo nivel","Golpes/contusiones","Atropellamiento por montacargas","Intoxicación por vapores"],
      riesgosCorrect: ["Resbalón/caída al mismo nivel","Golpes/contusiones"],
      medidas: {
        fuente: {
          options: ["Reparar fuga; mantenimiento de máquina","Bandejas de contención; kits absorbentes","Aumentar el volumen de la música"],
          correct: ["Reparar fuga; mantenimiento de máquina","Bandejas de contención; kits absorbentes"]
        },
        medio: {
          options: ["Demarcar/aislar área; señal de 'Piso resbaloso'","Procedimiento de respuesta a derrames","Orden y limpieza (5S)"],
          correct: ["Demarcar/aislar área; señal de 'Piso resbaloso'","Procedimiento de respuesta a derrames","Orden y limpieza (5S)"]
        },
        persona: {
          options: ["Calzado antideslizante","Capacitación en atención de derrames","Protector auditivo"],
          correct: ["Calzado antideslizante","Capacitación en atención de derrames"]
        }
      },
      hint: "Aísla la zona, controla la fuente y limpia con absorbentes."
    },
    {
      id: 7, color: "🟩",
      title: "Carga manual de objetos pesados",
      description: "En un almacén, un trabajador levanta bultos de 40 kg sin ayuda mecánica ni técnica de levantamiento. Realiza el movimiento repetitivamente durante varias horas, inclinando la espalda de manera incorrecta.",
      clasificacionOptions: ["Ergonómico / Biomecánico","Físico — Iluminación","Seguridad — Eléctrico"],
      clasificacionCorrect: "Ergonómico / Biomecánico",
      riesgosOptions: ["Lumbalgias/hernias","Lesiones musculoesqueléticas","Quemaduras químicas"],
      riesgosCorrect: ["Lumbalgias/hernias","Lesiones musculoesqueléticas"],
      medidas: {
        fuente: {
          options: ["Ayudas mecánicas (carretillas, elevadores)","Rediseñar altura/recorridos y dividir cargas","Incrementar ritmo de trabajo"],
          correct: ["Ayudas mecánicas (carretillas, elevadores)","Rediseñar altura/recorridos y dividir cargas"]
        },
        medio: {
          options: ["Límites de peso; rotación de tareas","Evaluación (ej. método NIOSH)","Permiso de alturas"],
          correct: ["Límites de peso; rotación de tareas","Evaluación (ej. método NIOSH)"]
        },
        persona: {
          options: ["Técnica de levantamiento seguro","Capacitación y acondicionamiento físico","Faja lumbar como apoyo secundario"],
          correct: ["Técnica de levantamiento seguro","Capacitación y acondicionamiento físico","Faja lumbar como apoyo secundario"]
        }
      },
      hint: "Primero reduce la exigencia con ayudas y rediseño."
    },
    {
      id: 8, color: "🟧",
      title: "Exposición a calor en exteriores",
      description: "Un grupo de trabajadores realiza labores de jardinería bajo el sol durante toda la mañana. No cuentan con descansos programados, hidratación frecuente ni áreas de sombra. Uno de ellos presenta mareo y sudor excesivo.",
      clasificacionOptions: ["Físico — Estrés térmico (calor)","Químico","Biológico"],
      clasificacionCorrect: "Físico — Estrés térmico (calor)",
      riesgosOptions: ["Golpe de calor / agotamiento por calor","Deshidratación y calambres","Dermatitis química"],
      riesgosCorrect: ["Golpe de calor / agotamiento por calor","Deshidratación y calambres"],
      medidas: {
        fuente: {
          options: ["Sombras/ carpas; cambiar horario a menor radiación","Reducir esfuerzo con herramientas adecuadas","Instalar más tomas eléctricas"],
          correct: ["Sombras/ carpas; cambiar horario a menor radiación","Reducir esfuerzo con herramientas adecuadas"]
        },
        medio: {
          options: ["Plan de hidratación y pausas programadas","Monitoreo de índice de calor / WBGT","Procedimiento ante síntomas de calor"],
          correct: ["Plan de hidratación y pausas programadas","Monitoreo de índice de calor / WBGT","Procedimiento ante síntomas de calor"]
        },
        persona: {
          options: ["Hidratación frecuente; sales orales","Ropa transpirable/colores claros; sombrero","Bloqueador solar; capacitación"],
          correct: ["Hidratación frecuente; sales orales","Ropa transpirable/colores claros; sombrero","Bloqueador solar; capacitación"]
        }
      },
      hint: "Alterna horarios y establece pausas + hidratación; la sombra es clave."
    },
    {
      id: 9, color: "🟨",
      title: "Uso de montacargas en pasillo congestionado",
      description: "En una bodega, un operador conduce un montacargas por un pasillo donde circulan trabajadores a pie. No existe señalización ni rutas definidas para peatones. La visibilidad es limitada por estibas apiladas.",
      clasificacionOptions: ["Seguridad — Tránsito interno / Vehículos industriales","Físico — Ruido","Ergonómico"],
      clasificacionCorrect: "Seguridad — Tránsito interno / Vehículos industriales",
      riesgosOptions: ["Atropellamiento / colisión","Atrapamiento / golpes por carga","Fatiga visual","Caída a distinto nivel"],
      riesgosCorrect: ["Atropellamiento / colisión","Atrapamiento / golpes por carga"],
      medidas: {
        fuente: {
          options: ["Rediseño de lay-out; espejos convexos","Alarmas luminosas/sonoras; limitador de velocidad","Cambiar luminarias a LED"],
          correct: ["Rediseño de lay-out; espejos convexos","Alarmas luminosas/sonoras; limitador de velocidad"]
        },
        medio: {
          options: ["Rutas separadas y demarcadas; señalización","Gestión de tráfico interno; altura de estibas","Permisos y licencias para operar montacargas"],
          correct: ["Rutas separadas y demarcadas; señalización","Gestión de tráfico interno; altura de estibas","Permisos y licencias para operar montacargas"]
        },
        persona: {
          options: ["Operador certificado; checklist diario","Chaleco reflectivo para peatones","No uso de celular; mantener distancia"],
          correct: ["Operador certificado; checklist diario","Chaleco reflectivo para peatones","No uso de celular; mantener distancia"]
        }
      },
      hint: "Separa flujos (peatones/vehículos) y mejora visibilidad/alertas."
    },
    {
      id: 10, color: "🟪",
      title: "Oficina con mala iluminación",
      description: "En un área administrativa, varias lámparas están dañadas y la iluminación natural es insuficiente. Los trabajadores fuerzan la vista para leer documentos y usar el computador, generando fatiga visual.",
      clasificacionOptions: ["Físico — Iluminación","Ergonómico","Químico"],
      clasificacionCorrect: "Físico — Iluminación",
      riesgosOptions: ["Fatiga visual / cefaleas","Errores y accidentes","Intoxicación química"],
      riesgosCorrect: ["Fatiga visual / cefaleas","Errores y accidentes"],
      medidas: {
        fuente: {
          options: ["Reparar luminarias; mejorar niveles de iluminancia (LED)","Control de deslumbramiento","Instalar silenciadores de ruido"],
          correct: ["Reparar luminarias; mejorar niveles de iluminancia (LED)","Control de deslumbramiento"]
        },
        medio: {
          options: ["Medición con luxómetro; redistribuir puestos","Mantenimiento programado de iluminación","Plan de hidratación"],
          correct: ["Medición con luxómetro; redistribuir puestos","Mantenimiento programado de iluminación"]
        },
        persona: {
          options: ["Pausas visuales; ajuste brillo/contraste","Uso de ayudas ópticas si aplica","Guantes dieléctricos"],
          correct: ["Pausas visuales; ajuste brillo/contraste","Uso de ayudas ópticas si aplica"]
        }
      },
      hint: "Mide iluminancia, repara luminarias y evita deslumbramiento."
    }
  ];

  /* ====== Scoring con normalización por sección ====== */
  function scoreSection(correctArr, selectedArr, sectionMax) {
    const correct = new Set(correctArr);
    let hits = 0, wrongs = 0;
    selectedArr.forEach(s => { if (correct.has(s)) hits++; else wrongs++; });

    // Suma bruta con penalización por errores
    const raw = Math.max(0, hits - 0.5 * wrongs);

    // Normaliza contra la cantidad de correctas definidas en ese bloque
    const denom = Math.max(1, correctArr.length);
    const normalized = sectionMax * (raw / denom);

    // Limita [0, sectionMax]
    return Math.min(sectionMax, Math.max(0, normalized));
  }

  function showScreen(name) { Object.values(UI.screens).forEach(s => s?.classList.remove("active")); UI.screens[name]?.classList.add("active"); }
  function updateHeader() {
    UI.header.groupBadge && (UI.header.groupBadge.textContent = state.groupName ? `Equipo: ${state.groupName}` : "");
    UI.header.scoreBadge && (UI.header.scoreBadge.textContent = `Puntaje: 0`);
    const label = (state.currentCaseIndex !== null && CASES[state.currentCaseIndex]) ? `Caso ${CASES[state.currentCaseIndex].id}/${CASES.length}` : "—";
    UI.header.caseBadge && (UI.header.caseBadge.textContent = label);
  }

  /* ====== Timer ====== */
  function setTimer(seconds) {
    clearInterval(state.timer.id);
    state.timer.remaining = seconds;
    state.timer.started = true;
    state.timer.beeped = false;
    renderTimer();
    state.timer.id = setInterval(() => {
      state.timer.remaining--;
      renderTimer();
      if (state.timer.remaining <= 0) {
        clearInterval(state.timer.id);
        showToast("⏰ Tiempo agotado. Se calificará lo marcado.", 6000);
        onFinish();
      }
    }, 1000);
  }
  function renderTimer() {
    const t = Math.max(0, state.timer.remaining);
    const mm = String(Math.floor(t/60)).padStart(2,"0");
    const ss = String(t%60).padStart(2,"0");
    if (UI.header.timerBadge) {
      UI.header.timerBadge.textContent = `⏱ ${mm}:${ss}`;
      const pct = (t/(state.timePerCase || 1));
      UI.header.timerBadge.classList.remove("timer-green","timer-orange","timer-red","timer-shake");
      if (pct > 0.5){ UI.header.timerBadge.classList.add("timer-green"); }
      else if (pct > 0.10){ UI.header.timerBadge.classList.add("timer-orange"); }
      else {
        UI.header.timerBadge.classList.add("timer-red","timer-shake");
        if (!state.timer.beeped && UI.beep) { state.timer.beeped = true; UI.beep.currentTime = 0; UI.beep.play?.().catch(()=>{}); }
      }
    }
  }
  function addOneMinute(){ state.timer.remaining += 60; renderTimer(); }
  function addFiveMinutes(){ state.timer.remaining += 300; renderTimer(); }

  function showToast(msg, ms = 5500) { if (!UI.toast) return; UI.toast.textContent = msg; UI.toast.classList.add("show"); setTimeout(()=>UI.toast.classList.remove("show"), ms); }
  function openModal(el) { el?.classList.add("show"); }
  function closeModalById(id) { document.getElementById(id)?.classList.remove("show"); }
  document.addEventListener("click", (e) => { const closeId = e.target?.getAttribute?.("data-close"); if (closeId) closeModalById(closeId); });

  function makeOptionCheckbox(id, text, checked=false) {
    const label = document.createElement("label");
    label.className = "option";
    const input = document.createElement("input");
    input.type = "checkbox"; input.id = id; input.checked = checked; input.setAttribute("data-text", text);
    const span = document.createElement("span"); span.textContent = text;
    label.appendChild(input); label.appendChild(span);
    return {label, input};
  }

  function renderTabs() {
    UI.tabs.forEach(btn => {
      btn.addEventListener("click", () => {
        UI.tabs.forEach(x => { x.classList.remove("active"); x.setAttribute("aria-selected","false"); });
        btn.classList.add("active"); btn.setAttribute("aria-selected","true");
        $$(".tab-panel").forEach(p => p.classList.remove("active"));
        document.getElementById(`panel-${btn.dataset.tab}`)?.classList.add("active");
      });
    });
  }

  /* ====== Intro ====== */
  function populateCaseSelector() {
    if (!UI.selectCase) return;
    UI.selectCase.innerHTML = "";
    let available = 0;

    CASES.forEach((c, idx) => {
      const opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = `${c.color} Caso ${c.id}. ${c.title}`;
      const isUsed = state.usedCases.includes(idx);
      if (state.avoidRepeat && isUsed) { opt.disabled = true; opt.textContent += " — (usado)"; }
      else { available++; }
      UI.selectCase.appendChild(opt);
    });

    if (available === 0 && state.avoidRepeat) {
      state.avoidRepeat = false;
      UI.avoidRepeat && (UI.avoidRepeat.checked = false);
      UI.panelAvoidRepeat && (UI.panelAvoidRepeat.checked = false);
      showToast("Todos los casos ya fueron usados. Se desactivó 'Evitar repetir casos' para continuar.", 6000);
      UI.selectCase.innerHTML = "";
      CASES.forEach((c, idx) => {
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = `${c.color} Caso ${c.id}. ${c.title}`;
        UI.selectCase.appendChild(opt);
      });
    }

    const firstAvailable = Array.from(UI.selectCase.options).find(o => !o.disabled);
    if (firstAvailable) {
      UI.selectCase.value = firstAvailable.value;
      state.currentCaseIndex = parseInt(firstAvailable.value, 10);
    }
  }

  function prepareIntro() {
    UI.groupName && (UI.groupName.value = "");
    UI.timeMin && (UI.timeMin.value = "3");
    UI.enableHints && (UI.enableHints.checked = true);
    UI.enableTimeBonus && (UI.enableTimeBonus.checked = state.timeBonusEnabled);
    UI.bonusMax && (UI.bonusMax.value = String(state.timeBonusMax));
    UI.avoidRepeat && (UI.avoidRepeat.checked = state.avoidRepeat);
    UI.panelAvoidRepeat && (UI.panelAvoidRepeat.checked = state.avoidRepeat);
    UI.panelTimeBonus && (UI.panelTimeBonus.checked = state.timeBonusEnabled);
    UI.panelBonusMax && (UI.panelBonusMax.value = String(state.timeBonusMax));

    populateCaseSelector();
    updateHeader();

    UI.selectCase?.addEventListener("change", (e) => {
      const v = parseInt(e.target.value, 10);
      state.currentCaseIndex = isNaN(v) ? null : v;
      updateHeader();
    }, { once: false });
  }

  /* ====== Flujo del caso ====== */
  function startSingleCase() {
    const caseObj = CASES[state.currentCaseIndex]; if (!caseObj) return;
    updateHeader();

    UI.caseTitle && (UI.caseTitle.textContent = `🪖 ${caseObj.color} Caso ${caseObj.id}. ${caseObj.title}`);
    UI.caseDesc && (UI.caseDesc.textContent = caseObj.description);

    UI.modalCaseTitle && (UI.modalCaseTitle.textContent = `${caseObj.color} Caso ${caseObj.id}. ${caseObj.title}`);
    UI.modalCaseText && (UI.modalCaseText.textContent = caseObj.description);

    // Clasificación
    if (UI.selectClasificacion) {
      UI.selectClasificacion.innerHTML = "";
      caseObj.clasificacionOptions.forEach(opt => {
        const o = document.createElement("option"); o.value = opt; o.textContent = opt;
        UI.selectClasificacion.appendChild(o);
      });
      UI.selectClasificacion.selectedIndex = -1;
      UI.selectClasificacion.onchange = () => {
        const val = UI.selectClasificacion.value || "";
        if (!val) UI.feedbackClas.innerHTML = `<span class="warn">⚠ No seleccionado</span>`;
        else if (val === caseObj.clasificacionCorrect) UI.feedbackClas.innerHTML = `<span class="ok">✔ Correcto</span>`;
        else UI.feedbackClas.innerHTML = `<span class="bad">✖ Incorrecto</span>`;
      };
    }
    UI.feedbackClas && (UI.feedbackClas.innerHTML = "");

    // Riesgos
    if (UI.risksOptions) {
      UI.risksOptions.innerHTML = "";
      caseObj.riesgosOptions.forEach((txt, idx) => {
        const {label, input} = makeOptionCheckbox(`risk-${idx}`, txt);
        UI.risksOptions.appendChild(label);
        input.addEventListener("change", () => {
          const risksSelected = $$("#risksOptions input:checked").map(i => i.getAttribute("data-text"));
          UI.feedbackRisks.innerHTML = buildFeedbackList("Riesgos", caseObj.riesgosCorrect, risksSelected, false); // ⛔ sin “Sugeridas”
        });
      });
    }
    UI.feedbackRisks && (UI.feedbackRisks.innerHTML = "");

    // Medidas (Fuente/Medio/Persona) — feedback mínimo
    ["fuente","medio","persona"].forEach(key=>{
      const panel = key === "fuente" ? UI.panelFuente : key === "medio" ? UI.panelMedio : UI.panelPersona;
      if (!panel) return;
      panel.innerHTML = "";
      caseObj.medidas[key].options.forEach((txt, idx) => {
        const {label, input} = makeOptionCheckbox(`${key}-${idx}`, txt);
        panel.appendChild(label);
        input.addEventListener("change", () => {
          const fSel = $$("#panel-fuente input:checked").map(i => i.getAttribute("data-text"));
          const mSel = $$("#panel-medio input:checked").map(i => i.getAttribute("data-text"));
          const pSel = $$("#panel-persona input:checked").map(i => i.getAttribute("data-text"));
          UI.feedbackMed.innerHTML = [
            buildFeedbackList("Fuente", caseObj.medidas.fuente.correct,  fSel, false),
            buildFeedbackList("Medio",  caseObj.medidas.medio .correct,  mSel, false),
            buildFeedbackList("Persona",caseObj.medidas.persona.correct, pSel, false),
          ].join("");
        });
      });
    });
    UI.feedbackMed && (UI.feedbackMed.innerHTML = "");

    // Controles
    UI.questionsWrap?.classList.add("hidden");
    state.timer.started = false; state.timer.beeped = false; state.usedHintThisCase = false;
    UI.btnHint && (UI.btnHint.disabled = true);
    UI.btnTeacherAddMin?.classList.toggle("hidden", !state.isTeacher);
    UI.btnTeacherAdd5Min?.classList.toggle("hidden", !state.isTeacher);
    UI.header.timerBadge && (UI.header.timerBadge.textContent = "⏱ 00:00");
    UI.header.timerBadge && UI.header.timerBadge.classList.remove("timer-green","timer-orange","timer-red","timer-shake");

    showScreen("case");
  }

  /* ====== Finalizar (aquí SÍ mostramos SUGERIDAS) ====== */
  function onFinish() {
    const caseObj = CASES[state.currentCaseIndex]; if (!caseObj) return;

    // 1) Clasificación (2 pts)
    const clasSel = UI.selectClasificacion?.value || "";
    const ptsClas = (clasSel === caseObj.clasificacionCorrect) ? MAX_PTS.clas : 0;

    // 2) Riesgos (3 pts, normalizado por #correctas)
    const risksSelected = $$("#risksOptions input:checked").map(i => i.getAttribute("data-text"));
    const ptsRiesgos = scoreSection(caseObj.riesgosCorrect, risksSelected, MAX_PTS.riesgos);

    // 3) Medidas F/M/P (3 pts c/u, normalizado por #correctas)
    const fSel = $$("#panel-fuente input:checked").map(i => i.getAttribute("data-text"));
    const mSel = $$("#panel-medio input:checked").map(i => i.getAttribute("data-text"));
    const pSel = $$("#panel-persona input:checked").map(i => i.getAttribute("data-text"));
    const ptsF = scoreSection(caseObj.medidas.fuente.correct,  fSel, MAX_PTS.medidas.fuente);
    const ptsM = scoreSection(caseObj.medidas.medio .correct,  mSel, MAX_PTS.medidas.medio);
    const ptsP = scoreSection(caseObj.medidas.persona.correct, pSel, MAX_PTS.medidas.persona);

    // Base
    const baseScoreRaw = ptsClas + ptsRiesgos + ptsF + ptsM + ptsP; // 0..14

    // Penalización por ayuda (solo si hubo aciertos)
    const baseScore = (state.usedHintThisCase && baseScoreRaw > 0) ? baseScoreRaw * 0.9 : baseScoreRaw;

    // Bono por rapidez escalado por acierto
    const timeRemaining = Math.max(0, state.timer.remaining);
    const timeTotal = state.timePerCase || 1;
    const ratioTiempo = Math.max(0, Math.min(1, timeRemaining / timeTotal));
    const ratioAcierto = Math.max(0, Math.min(1, (ptsClas + ptsRiesgos + ptsF + ptsM + ptsP) / MAX_PER_CASE)); // usa base bruta de secciones normalizadas
    const timeBonus = state.timeBonusEnabled ? (ratioTiempo * state.timeBonusMax * ratioAcierto) : 0;

    const finalPoints = baseScore + timeBonus;

    // Guardar pendiente para Scoreboard
    state.pendingResult = {
      group: state.groupName, caseId: caseObj.id, caseTitle: caseObj.title,
      baseScore: Number(baseScore.toFixed(2)), baseRaw: Number(baseScoreRaw.toFixed(2)),
      timeBonus: Number(timeBonus.toFixed(2)), score: Number(finalPoints.toFixed(2)),
      usedHint: state.usedHintThisCase, timeUsedSec: state.timer.started ? (state.timePerCase - Math.max(0, state.timer.remaining)) : 0,
      dateISO: new Date().toISOString(), bonusCfg: state.timeBonusEnabled ? `ON (máx ${state.timeBonusMax})` : "OFF"
    };

    // Retroalimentación — aquí SÍ mostramos "Sugeridas:" (showOmitted=true)
    if (UI.feedbackBody) {
      const fbClas = (!clasSel) ? `<span class="warn">⚠ No seleccionado</span>`
                  : (clasSel === caseObj.clasificacionCorrect) ? `<span class="ok">✔ Correcto</span>`
                  : `<span class="bad">✖ Incorrecto</span> — <i>Correcta:</i> ${escapeHTML(caseObj.clasificacionCorrect)}`;

      const risksHTML  = buildFeedbackList("Riesgos",              caseObj.riesgosCorrect,               risksSelected, true);
      const fuenteHTML = buildFeedbackList("Medidas - Fuente",     caseObj.medidas.fuente .correct,      fSel,          true);
      const medioHTML  = buildFeedbackList("Medidas - Medio",      caseObj.medidas.medio  .correct,      mSel,          true);
      const personaHTML= buildFeedbackList("Medidas - Persona",    caseObj.medidas.persona.correct,      pSel,          true);

      UI.feedbackBody.innerHTML = `
        <p><strong>Grupo:</strong> ${escapeHTML(state.groupName)}</p>
        <p><strong>${escapeHTML(caseObj.color)} Caso ${caseObj.id} — ${escapeHTML(caseObj.title)}</strong></p>
        <p class="muted">${escapeHTML(caseObj.description)}</p>
        <hr/>
        <p><b>Puntaje base:</b> ${state.pendingResult.baseScore.toFixed(2)} / ${MAX_PER_CASE} ${state.usedHintThisCase ? '(con ayuda: −10% aplicado)' : ''}</p>
        <p><b>Bono por rapidez:</b> ${state.pendingResult.timeBonus.toFixed(2)} (máx ${state.timeBonusMax}, escalado por acierto)</p>
        <p><b>Puntaje final:</b> ${state.pendingResult.score.toFixed(2)}</p>
        <hr/>
        <div class="feedback"><strong>Clasificación:</strong> ${fbClas}</div>
        ${risksHTML}
        ${fuenteHTML}
        ${medioHTML}
        ${personaHTML}
      `;
    }
    openModal(UI.modalFeedback);
  }

  /* ====== Guardar en Scoreboard ====== */
  UI.btnSaveToBoard?.addEventListener("click", () => {
    if (!state.pendingResult) { showToast("No hay resultado para guardar.", 4000); return; }
    state.scoreboard.push(state.pendingResult);
    saveToStorage("sst_scoreboard", state.scoreboard);

    if (state.avoidRepeat) {
      if (!state.usedCases.includes(state.currentCaseIndex)) state.usedCases.push(state.currentCaseIndex);
      saveToStorage("sst_used_cases", state.usedCases);
    }

    fireConfetti();
    closeModalById("modalFeedback");
    clearInterval(state.timer.id);
    forceShowBoard();
    state.pendingResult = null;
  });

  function forceShowBoard(){ renderScoreboard(); showScreen("board"); }

  /* ====== Scoreboard (orden y Top 3) ====== */
  function renderScoreboard() {
    const tbody = UI.scoreboardTbody; if (!tbody) return;
    const sorted = [...state.scoreboard].sort((a,b) => (b.score !== a.score) ? (b.score - a.score) : ((a.timeUsedSec || 0) - (b.timeUsedSec || 0)));

    tbody.innerHTML = "";
    const total = sorted.length; let sum = 0;

    if (UI.podium) {
      if (sorted.length >= 1) {
        UI.podium.classList.remove("hidden");
        const top = sorted.slice(0,3);
        const slots = [
          {slot: UI.podiumItems.gold, label:"🥇"},
          {slot: UI.podiumItems.silver, label:"🥈"},
          {slot: UI.podiumItems.bronze, label:"🥉"},
        ];
        slots.forEach((obj, i) => {
          const item = obj.slot; if (!item) return;
          if (top[i]) {
            item.querySelector(".name").textContent = `${top[i].group} — Caso ${top[i].caseId}`;
            item.querySelector(".score").textContent = `${top[i].score.toFixed(2)} pts`;
            item.style.display = "inline-flex";
          } else item.style.display = "none";
        });
      } else UI.podium.classList.add("hidden");
    }

    sorted.forEach((r, idx) => {
      sum += r.score;
      const tr = document.createElement("tr");
      if (idx === 0) tr.classList.add("top1");
      if (idx === 1) tr.classList.add("top2");
      if (idx === 2) tr.classList.add("top3");

      const timeMin = Math.floor((r.timeUsedSec||0)/60);
      const timeSec = String((r.timeUsedSec||0)%60).padStart(2,"0");

      tr.innerHTML = `
        <td>${idx+1}</td>
        <td>${escapeHTML(r.group)}</td>
        <td>${r.caseId}. ${escapeHTML(r.caseTitle)}</td>
        <td>${r.baseScore.toFixed(2)} / ${MAX_PER_CASE} ${r.usedHint ? '<span class="badge ok">Con ayuda</span>' : ''}</td>
        <td>${(r.timeBonus ?? 0).toFixed(2)} <span class="muted">(${r.bonusCfg || ''})</span></td>
        <td><b>${r.score.toFixed(2)}</b></td>
        <td>${timeMin}:${timeSec}</td>
        <td>${r.usedHint ? 'Sí' : 'No'}</td>
        <td>${new Date(r.dateISO).toLocaleString()}</td>
      `;
      tbody.appendChild(tr);
    });

    const avg = total ? (sum/total).toFixed(2) : "0.00";
    UI.scoreboardSummary && (UI.scoreboardSummary.textContent = `Participaciones: ${total} | Promedio final: ${avg} (base máx ${MAX_PER_CASE} + bono)`);
  }

  /* ====== Clave y utilidades ====== */
  function buildAnswerKeyText() {
    return CASES.map(c => [
      `${c.color} Caso ${c.id} — ${c.title}`,
      `Clasificación: ${c.clasificacionCorrect}`,
      `Riesgos: ${c.riesgosCorrect.join(" | ")}`,
      `Medidas Fuente: ${c.medidas.fuente.correct.join(" | ")}`,
      `Medidas Medio: ${c.medidas.medio.correct.join(" | ")}`,
      `Medidas Persona: ${c.medidas.persona.correct.join(" | ")}`,
      `Pista: ${c.hint}`
    ].join("\n")).join("\n\n");
  }

  function buildFeedbackList(label, correctArr, selectedArr, showOmitted=false) {
    const correct = new Set(correctArr);
    const items = [];
    selectedArr.forEach(s => items.push(correct.has(s) ? `✔ ${escapeHTML(s)}` : `✖ ${escapeHTML(s)}`));
    const omitted = correctArr.filter(x => !selectedArr.includes(x));
    const detail = items.length ? items.join(" · ") : "<em>sin selección</em>";
    const note = (showOmitted && omitted.length) ? `<br/><span class="warn">Sugeridas: ${omitted.map(escapeHTML).join(" · ")}</span>` : "";
    return `<div class="feedback"><strong>${label}:</strong> ${detail}${note}</div>`;
  }
  function fireConfetti() {
    if (!UI.confetti) return;
    for (let i=0;i<32;i++){
      const d = document.createElement("div");
      d.className = "confetti-piece";
      d.style.left = Math.random()*100 + "vw";
      d.style.background = ["#22c55e","#38bdf8","#f59e0b","#ef4444","#a78bfa"][Math.floor(Math.random()*5)];
      d.style.animationDuration = (1.4 + Math.random()*1.2) + "s";
      d.style.transform = `rotate(${Math.random()*360}deg)`;
      UI.confetti.appendChild(d);
      setTimeout(()=>d.remove(), 2800);
    }
  }
  function saveToStorage(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch {} }
  function loadFromStorage(key, fallback) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
  function escapeHTML(str){ return String(str ?? "").replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s])); }

  /* ====== Listeners ====== */
  UI.header.btnNew?.addEventListener("click", ()=>{ showScreen("intro"); prepareIntro(); });
  UI.header.btnBoard?.addEventListener("click", ()=>{ forceShowBoard(); });
  UI.header.btnTeacher?.addEventListener("click", toggleTeacherMode);

  UI.introForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // No repoblar aquí para no perder la selección actual
    state.groupName = (UI.groupName?.value || "").trim();
    const min = Math.max(1, Math.min(60, parseInt(UI.timeMin?.value,10) || 3));
    state.timePerCase = min * 60;
    state.enableHints = !!UI.enableHints?.checked;
    state.avoidRepeat = !!UI.avoidRepeat?.checked;
    state.timeBonusEnabled = !!UI.enableTimeBonus?.checked;
    state.timeBonusMax = Math.max(0, Math.min(5, parseFloat(UI.bonusMax?.value) || 2));

    const caseIdx = parseInt(UI.selectCase?.value,10);
    state.currentCaseIndex = isNaN(caseIdx) ? null : caseIdx;

    startSingleCase();
  });

  UI.selectCase?.addEventListener("change", (e) => {
    const v = parseInt(e.target.value, 10);
    state.currentCaseIndex = isNaN(v) ? null : v;
    updateHeader();
  });

  UI.btnExpandCase?.addEventListener("click", ()=> openModal(UI.modalCase));
  UI.btnStartCase?.addEventListener("click", () => {
    UI.questionsWrap?.classList.remove("hidden");
    UI.btnHint && (UI.btnHint.disabled = !state.enableHints);
    setTimer(state.timePerCase);

    // 🔒 Borrar cualquier rastro previo (anti-spoiler)
    UI.feedbackClas && (UI.feedbackClas.innerHTML = "");
    UI.feedbackRisks && (UI.feedbackRisks.innerHTML = "");
    UI.feedbackMed && (UI.feedbackMed.innerHTML = "");
  });

  UI.btnHint?.addEventListener("click", () => {
    if (!state.enableHints) return;
    const c = CASES[state.currentCaseIndex];
    state.usedHintThisCase = true;
    addOneMinute();
    UI.modalHintText && (UI.modalHintText.textContent = c?.hint || "");
    openModal(UI.modalHint);
  });
  UI.btnTeacherAddMin?.addEventListener("click", addOneMinute);
  UI.btnTeacherAdd5Min?.addEventListener("click", addFiveMinutes);

  UI.btnFinish?.addEventListener("click", onFinish);
  UI.btnCancel?.addEventListener("click", () => { clearInterval(state.timer.id); showToast("Participación cancelada.", 3500); showScreen("intro"); });

  UI.btnDownloadCSV?.addEventListener("click", downloadCSV);
  UI.btnResetBoard?.addEventListener("click", () => {
    if (confirm("¿Reiniciar todo el Scoreboard?")) {
      state.scoreboard = []; saveToStorage("sst_scoreboard", state.scoreboard);
      state.usedCases = [];  saveToStorage("sst_used_cases", state.usedCases);
      forceShowBoard(); prepareIntro(); showToast("Scoreboard reiniciado.", 3500);
    }
  });
  UI.btnStartAnother?.addEventListener("click", () => { showScreen("intro"); prepareIntro(); });
  UI.btnCloseBoard?.addEventListener("click", () => { showScreen("intro"); prepareIntro(); });

  function toggleTeacherMode() {
    state.isTeacher = !state.isTeacher;
    UI.teacherPanel && (UI.teacherPanel.style.display = state.isTeacher ? "block" : "none");
    UI.btnTeacherAddMin?.classList.toggle("hidden", !state.isTeacher);
    UI.btnTeacherAdd5Min?.classList.toggle("hidden", !state.isTeacher);
    UI.answerKey && (UI.answerKey.textContent = buildAnswerKeyText());
    UI.panelAvoidRepeat && (UI.panelAvoidRepeat.checked = state.avoidRepeat);
    UI.panelTimeBonus && (UI.panelTimeBonus.checked = state.timeBonusEnabled);
    UI.panelBonusMax && (UI.panelBonusMax.value = String(state.timeBonusMax));
    showToast(state.isTeacher ? "Modo docente ACTIVADO" : "Modo docente DESACTIVADO", 3000);
  }

  function downloadCSV() {
    const headers = ["Grupo","CasoId","Caso","Base (0-14)","Base sin penalización","Bono tiempo","Final","Usó ayuda","Tiempo usado (s)","Fecha ISO","Bono config"];
    const sorted = [...state.scoreboard].sort((a,b)=> b.score - a.score || (a.timeUsedSec - b.timeUsedSec));
    const rows = sorted.map(r => [r.group, r.caseId, r.caseTitle, r.baseScore, r.baseRaw, (r.timeBonus ?? 0), r.score, r.usedHint ? "Sí" : "No", r.timeUsedSec, r.dateISO, r.bonusCfg || ""]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v ?? "").replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"}); const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `scoreboard_SST.csv`; a.click(); URL.revokeObjectURL(a.href);
  }

  renderTabs();
  prepareIntro();
  renderScoreboard();
});