let teams = [];
let scores = {};
let turno = 0;
let firstCard = null;
let lockBoard = false;
let timeLeft = 0;
let timerInterval;

/* CONCEPTOS EDUCATIVOS */
const concepts = [
    "☣️ MIC gas letal",
    "⚠️ Fallo de seguridad",
    "🏭 Mala gestión operativa",
    "🛠️ No había mantenimiento",
    "🧯 Sin medidas de contención",
    "🚨 Sistema de emergencia fallido",
    "🌊 Contaminación de aguas",
    "🧬 Impactos crónicos de salud",
    "😷 Enfermedades respiratorias",
    "👷 Falta de EPP",
    "💨 Escapes no controlados",
    "📡 Sin monitoreo ambiental",
    "🏘️ Vulnerabilidad comunitaria",
    "🏛️ Inacción gubernamental",
    "⚙️ Falta de cultura de seguridad",
    "🔥 Riesgo químico extremo",
    "🧪 Procesos inestables",
    "📉 Descontrol operacional"
];

function addTeam() {
    const name = document.getElementById("teamName").value.trim();
    if (!name) return alert("Ingresa un nombre.");
    teams.push(name);
    scores[name] = 0;

    document.getElementById("teamList").innerHTML =
        teams.map(t => `<li>${t}</li>`).join("");

    document.getElementById("teamName").value = "";
}

function startGame() {
    if (teams.length === 0) return alert("Registra al menos un equipo.");

    document.getElementById("setup").style.display = "none";
    document.getElementById("panel").style.display = "flex";

    timeLeft = parseInt(document.getElementById("timeSelect").value);
    updateScoreList();
    updateTurn();

    startTimer();
    buildBoard();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById("timer").textContent =
            `⏱ Tiempo: ${min}:${sec.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) endGame();
    }, 1000);
}

function buildBoard() {
    const grid = document.getElementById("gridSelect").value;
    const board = document.getElementById("gameBoard");

    let rows, cols, totalPairs;

    if (grid === "4x4") { rows = 4; cols = 4; totalPairs = 8; }
    if (grid === "6x6") { rows = 6; cols = 6; totalPairs = 18; }
    if (grid === "9x4") { rows = 4; cols = 9; totalPairs = 18; }

    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    let selected = concepts.slice(0, totalPairs);
    let cards = [...selected, ...selected];

    cards.sort(() => Math.random() - 0.5);

    board.innerHTML = "";

    cards.forEach(text => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = text;
        card.textContent = text;
        card.onclick = () => revealCard(card);
        board.appendChild(card);
    });
}

function revealCard(card) {
    if (lockBoard || card.classList.contains("revealed") || card.classList.contains("matched")) return;

    card.classList.add("revealed");

    if (!firstCard) {
        firstCard = card;
    } else {
        lockBoard = true;

        if (firstCard.dataset.value === card.dataset.value) {
            scores[teams[turno]] += 10;
            firstCard.classList.add("matched");
            card.classList.add("matched");

            firstCard = null;
            lockBoard = false;
            updateScoreList();
        } else {
            setTimeout(() => {
                firstCard.classList.remove("revealed");
                card.classList.remove("revealed");
                firstCard = null;
                lockBoard = false;

                turno = (turno + 1) % teams.length;
                updateTurn();
            }, 800);
        }
    }
}

function updateTurn() {
    document.getElementById("teamTurn").textContent =
        "🎯 Turno: " + teams[turno];
}

function updateScoreList() {
    document.getElementById("scoreList").innerHTML =
        teams.map(t => `<li><b>${t}:</b> ${scores[t]} pts</li>`).join("");
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById("gameBoard").innerHTML = "";
    document.getElementById("finalScreen").classList.remove("hidden");

    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    document.getElementById("top3").innerHTML =
        sorted.map(([team, score]) => `<li>${team}: ${score} pts</li>`).join("");
}