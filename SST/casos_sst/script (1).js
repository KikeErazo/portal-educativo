
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;
let groups = [];
let currentGroupIndex = 0;

function addGroup() {
    const groupName = document.getElementById("group-name").value;
    if (groupName.trim() === "") {
        alert("Por favor, ingrese el nombre del grupo.");
        return;
    }
    groups.push({ name: groupName, score: 0 });
    document.getElementById("group-name").value = "";
    updateGroupsDisplay();
}

function updateGroupsDisplay() {
    const groupsContainer = document.getElementById("groups-container");
    groupsContainer.innerHTML = "";
    groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.innerHTML = `<span class="group-name ${index === currentGroupIndex ? 'active-group' : ''}">${group.name}</span> Puntos: <span id="group-score-${index}">${group.score}</span>`;
        groupsContainer.appendChild(groupDiv);
    });
}

function startActivity() {
    if (groups.length === 0) {
        alert("Por favor, agregue al menos un grupo.");
        return;
    }
    document.getElementById("group-input").classList.add("hidden");
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("score-container").classList.remove("hidden");
    currentQuestionIndex = 0;
    showQuestion();
    startTimer();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = `<strong>${q.text}</strong>`;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, index) => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.innerText = String.fromCharCode(65 + index) + ") " + opt;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    updateGroupsDisplay();
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        updateScore(2);
        alert("¡Correcto! Se sumaron 2 puntos.");
    } else {
        alert("Incorrecto. Turno para el siguiente grupo.");
        nextGroup();
    }
    nextQuestion();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Tiempo terminado. Turno para el siguiente grupo.");
            nextGroup();
            nextQuestion();
        }
    }, 1000);
}

function nextGroup() {
    clearInterval(timer);
    currentGroupIndex = (currentGroupIndex + 1) % groups.length;
    startTimer();
    updateGroupsDisplay();
}

function nextQuestion() {
    clearInterval(timer);
    timeLeft = 60;
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert("Actividad terminada.");
        return;
    }
    showQuestion();
    startTimer();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        clearInterval(timer);
        timeLeft = 60;
        currentQuestionIndex--;
        showQuestion();
        startTimer();
    }
}

function resetActivity() {
    clearInterval(timer);
    currentQuestionIndex = 0;
    timeLeft = 60;
    groups = [];
    currentGroupIndex = 0;
    document.getElementById("group-input").classList.remove("hidden");
    document.getElementById("start-button").classList.remove("hidden");
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("group-name").value = "";
    document.getElementById("groups-container").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById("options").innerHTML = "";
}

function updateScore(points) {
    groups[currentGroupIndex].score += points;
    document.getElementById(`group-score-${currentGroupIndex}`).innerText = groups[currentGroupIndex].score;
}

function showRandomQuestion() {
    clearInterval(timer);
    timeLeft = 60;
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    showQuestion();
    startTimer();
}

function scorePoints(points) {
    updateScore(points);
    alert(`Se sumaron ${points} punto${points !== 1 ? 's' : ''} al grupo activo.`);
    nextGroup();
    nextQuestion();
}
