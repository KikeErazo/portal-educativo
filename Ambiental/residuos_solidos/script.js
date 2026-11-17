const questions = [
    "1. ¿Qué tipos de residuos sólidos se generan en la fabricación de productos plásticos por inyección y soplado?",
    "2. ¿Cuál es la importancia de clasificar los residuos sólidos en peligrosos y no peligrosos?",
    "3. ¿Qué métodos de almacenamiento temporal de residuos sólidos se utilizan en la industria de plásticos?",
    "4. ¿Cómo se realiza la disposición final de los residuos sólidos no aprovechables?",
    "5. ¿Qué normativas ambientales regulan el manejo de residuos sólidos en Colombia?",
    "6. ¿Qué es el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible 1076 de 2015?",
    "7. ¿Cómo contribuye la Ley 99 de 1993 a la gestión ambiental en Colombia?",
    "8. ¿Qué papel juega la Autoridad Nacional de Licencias Ambientales (ANLA) en la regulación de residuos sólidos?",
    "9. ¿Qué medidas se deben tomar para prevenir la contaminación ambiental por residuos plásticos?",
    "10. ¿Qué es el Sistema Nacional Ambiental (SINA) y cómo se relaciona con la gestión de residuos?",
    "11. ¿Qué técnicas se utilizan para reducir la cantidad de residuos sólidos generados en la industria de plásticos?",
    "12. ¿Cómo se realiza la capacitación de los empleados en el manejo adecuado de residuos sólidos?",
    "13. ¿Qué impacto tiene la fabricación de productos plásticos en el medio ambiente?",
    "14. ¿Qué estrategias se pueden implementar para mejorar la gestión de residuos sólidos en la industria de plásticos?",
    "15. ¿Cómo se realiza la recolección de residuos sólidos en la industria de plásticos?",
    "16. ¿Qué es la economía circular y cómo se aplica en la gestión de residuos plásticos?",
    "17. ¿Qué normativas específicas regulan la disposición de residuos peligrosos en Colombia?",
    "18. ¿Cómo se realiza el seguimiento y control de la gestión de residuos sólidos en la industria de plásticos?",
    "19. ¿Qué es el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente?",
    "20. ¿Qué acciones pueden tomar las empresas para cumplir con la normatividad ambiental vigente en Colombia?",
    "21. ¿Qué es el Plan de Gestión Integral de Residuos Sólidos (PGIRS) y cómo se aplica en la industria de plásticos?",
    "22. ¿Cómo se realiza la segregación de residuos sólidos en la fuente?",
    "23. ¿Qué es la Resolución 1402 de 2006 y cómo regula el manejo de residuos peligrosos?",
    "24. ¿Qué impacto tiene la disposición inadecuada de residuos sólidos en el medio ambiente?",
    "25. ¿Cómo se realiza el tratamiento de residuos sólidos en la industria de plásticos?",
    "26. ¿Qué es la Ley 430 de 1998 y cómo contribuye a la gestión de residuos peligrosos?",
    "27. ¿Qué medidas se deben tomar para garantizar la seguridad en el manejo de residuos peligrosos?",
    "28. ¿Cómo se realiza la valorización de residuos sólidos en la industria de plásticos?",
    "29. ¿Qué es el Decreto 2811 de 1974 y cómo regula la gestión ambiental en Colombia?",
    "30. ¿Qué acciones pueden tomar las empresas para reducir la generación de residuos sólidos?",
    "31. ¿Cómo se realiza la gestión de residuos sólidos en el marco de la economía circular?",
    "32. ¿Qué es la Resolución 472 de 2017 y cómo regula la gestión de residuos sólidos?",
    "33. ¿Qué impacto tiene la gestión adecuada de residuos sólidos en la salud pública?",
    "34. ¿Qué es el Registro de Generadores de Residuos o Desechos Peligrosos y cómo se utiliza?",
    "35. ¿Cómo se realiza la auditoría ambiental en la gestión de residuos sólidos?",
    "36. ¿Qué es la Resolución 1362 de 2007 y cómo regula la gestión de residuos peligrosos?",
    "37. ¿Qué impacto tiene el reciclaje de plásticos en la reducción de residuos sólidos?",
    "38. ¿Cómo se realiza la gestión de residuos sólidos en pequeñas y medianas empresas de plásticos?",
    "39. ¿Qué es el Protocolo de Kioto y cómo influye en la gestión de residuos sólidos?",
    "40. ¿Qué es la Ley 1252 de 2008 y cómo regula la gestión de residuos peligrosos?",
    "41. ¿Cómo se realiza la gestión de residuos sólidos en el contexto de la responsabilidad extendida del productor?",
    "42. ¿Qué es la Resolución 2184 de 2019 y cómo regula la gestión de residuos sólidos?",
    "43. ¿Qué impacto tiene la gestión de residuos sólidos en la biodiversidad?",
    "44. ¿Cómo se realiza la gestión de residuos sólidos en el marco de la sostenibilidad empresarial?",
    "45. ¿Qué es la Ley 1672 de 2013 y cómo regula la gestión de residuos de aparatos eléctricos y electrónicos?",
    "46. ¿Qué medidas se deben tomar para garantizar la trazabilidad de los residuos sólidos?",
    "47. ¿Cómo se realiza la gestión de residuos sólidos en el contexto de la economía verde?",
    "48. ¿Qué es la Resolución 1111 de 2018 y cómo regula la gestión de residuos sólidos?",
    "49. ¿Qué impacto tiene la gestión de residuos sólidos en la calidad del aire?",
    "50. ¿Cómo se realiza la gestión de residuos sólidos en el contexto de la transición energética?"
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 300; // Tiempo en segundos (5 minutos)
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
    showQuestion();
    startTimer();
}

function showQuestion() {
    document.getElementById("question").innerHTML = `<strong>${questions[currentQuestionIndex]}</strong>`;
    updateGroupsDisplay();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Tiempo terminado. Turno para el siguiente grupo.");
            nextGroup();
        }
    }, 1000);
}

function nextGroup() {
    clearInterval(timer);
    timeLeft = 300; // Reiniciar el tiempo a 5 minutos
    currentGroupIndex = (currentGroupIndex + 1) % groups.length;
    startTimer();
    updateGroupsDisplay();
}

function nextQuestion() {
    clearInterval(timer);
    timeLeft = 300; // Reiniciar el tiempo a 5 minutos
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
        timeLeft = 300; // Reiniciar el tiempo a 5 minutos
        currentQuestionIndex--;
        showQuestion();
        startTimer();
    }
}

function resetActivity() {
    clearInterval(timer);
    currentQuestionIndex = 0;
    timeLeft = 300;
    groups = [];
    currentGroupIndex = 0;
    document.getElementById("group-input").classList.remove("hidden");
    document.getElementById("start-button").classList.remove("hidden");
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("group-name").value = "";
    document.getElementById("groups-container").innerHTML = "";
    document.getElementById("score").innerHTML = "";
}

function updateScore(points) {
    groups[currentGroupIndex].score += points;
    document.getElementById(`group-score-${currentGroupIndex}`).innerText = groups[currentGroupIndex].score;
    nextGroup();
}

function scorePoints(points) {
    updateScore(points);
    nextQuestion();
}