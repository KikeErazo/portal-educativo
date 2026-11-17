    const questions = [
        {
            text: "¿Quién responde si un empleado sufre un accidente laboral?",
            options: [
                "El compañero de trabajo",
                "La EPS",
                "El Ministerio de Trabajo",
                "El empleador",
            ],
            correct: 3
        },
        {
            text: "¿Quién responde si un contratista sufre un accidente laboral?",
            options: [
                "El empleador del contratista",
                "El supervisor directo",
                "El contratista, con apoyo de su ARL",
                "La empresa de seguros del Estado",
            ],
            correct: 2
        },
        {
            text: "¿Quién responde si un empleado sufre un accidente laboral en un vehículo de la empresa?",
            options: [
                "La aseguradora del vehículo personal del empleado",
                "El empleador, si el accidente ocurre durante funciones laborales",
                "El conductor del vehículo",
                "La empresa de transporte público",
            ],
            correct: 1
        },
        {
            text: "¿Qué es el SG-SST?",
            options: [
                "Sistema de Gestión de Salud Ocupacional",
                "Sistema de Gestión de Riesgos Laborales",
                "Sistema de Gestión de Seguridad y Salud en el Trabajo",
                "Sistema General de Seguridad Social",
            ],
            correct: 2
        },
        {
            text: "¿Cuál es el objetivo principal del SG-SST?",
            options: [
                "Prevenir accidentes y enfermedades laborales",
                "Mejorar la calidad del producto",
                "Reducir costos operativos",
                "Aumentar la productividad",
            ],
            correct: 0
        },
        {
            text: "¿Qué entidad regula el SG-SST en Colombia?",
            options: [
                "Ministerio de Salud",
                "Ministerio de Hacienda",
                "Ministerio de Educación",
                "Ministerio de Trabajo",
            ],
            correct: 3
        },
        {
            text: "¿Qué es un riesgo laboral?",
            options: [
                "Cantidad de trabajo que debe realizar un empleado",
                "Número de empleados en una empresa",
                "Probabilidad de que ocurra un accidente o enfermedad en el trabajo",
                "Nivel de satisfacción laboral",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una enfermedad laboral?",
            options: [
                "Enfermedad causada por condiciones del trabajo",
                "Enfermedad que se transmite por contacto físico",
                "Enfermedad común que afecta a cualquier persona",
                "Enfermedad que se cura rápidamente",
            ],
            correct: 0
        },
        {
            text: "¿Qué es un accidente laboral?",
            options: [
                "Conflicto entre empleados",
                "Evento inesperado que causa daño durante el trabajo",
                "Problema técnico en la maquinaria",
                "Falta de insumos en la empresa",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una ARL?",
            options: [
                "Asociación de Recursos Laborales",
                "Agencia de Regulación Laboral",
                "Administradora de Recursos Legales",
                "Administradora de Riesgos Laborales",
            ],
            correct: 3
        },
        {
            text: "¿Qué función tiene una ARL?",
            options: [
                "Administrar recursos financieros",
                "Contratar empleados",
                "Prevenir y atender accidentes y enfermedades laborales",
                "Regular salarios",
            ],
            correct: 2
        },
        {
            text: "¿Qué es un plan de emergencia?",
            options: [
                "Conjunto de acciones para enfrentar situaciones de riesgo",
                "Programa de capacitación",
                "Estrategia de marketing",
                "Plan de vacaciones para empleados",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una inspección de seguridad?",
            options: [
                "Evaluación de condiciones laborales para identificar riesgos",
                "Auditoría de recursos humanos",
                "Revisión de documentos financieros",
                "Control de calidad del producto",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una capacitación en SST?",
            options: [
                "Curso de idiomas",
                "Programa de bienestar emocional",
                "Entrenamiento para prevenir riesgos laborales",
                "Formación en habilidades técnicas",
            ],
            correct: 2
        },
        {
            text: "¿Qué es un EPP?",
            options: [
                "Equipo de Prevención de Pérdidas",
                "Equipo de Protección Personal",
                "Equipo de Producción Profesional",
                "Equipo de Protección Pública",
            ],
            correct: 1
        },
        {
            text: "¿Qué función tiene un EPP?",
            options: [
                "Mejorar la comunicación entre empleados",
                "Proteger al trabajador de riesgos laborales",
                "Reducir costos operativos",
                "Aumentar la eficiencia en el trabajo",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una política de SST?",
            options: [
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
                "Declaración de compromiso de la empresa con la seguridad y salud en el trabajo",
                "Manual de procedimientos técnicos",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una auditoría de SST?",
            options: [
                "Revisión de documentos financieros",
                "Evaluación del cumplimiento de las normas de seguridad y salud en el trabajo",
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
            ],
            correct: 1
        },
        {
            text: "¿Qué es un comité de SST?",
            options: [
                "Grupo de recursos humanos",
                "Asociación de empleados",
                "Grupo de personas encargado de promover la seguridad y salud en el trabajo",
                "Equipo de producción",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una evaluación de riesgos?",
            options: [
                "Revisión de documentos financieros",
                "Proceso de identificar y analizar riesgos laborales",
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una medida de control?",
            options: [
                "Reglamento interno de la empresa",
                "Manual de procedimientos técnicos",
                "Acción para eliminar o reducir riesgos laborales",
                "Plan de desarrollo profesional",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una investigación de accidentes?",
            options: [
                "Revisión de documentos financieros",
                "Auditoría de recursos humanos",
                "Proceso de analizar las causas de un accidente laboral",
                "Control de calidad del producto",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una brigada de emergencia?",
            options: [
                "Grupo de personas entrenadas para actuar en situaciones de emergencia",
                "Equipo de producción",
                "Grupo de recursos humanos",
                "Asociación de empleados",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una señalización de seguridad?",
            options: [
                "Reglamento interno de la empresa",
                "Conjunto de señales para indicar riesgos y medidas de seguridad",
                "Plan de desarrollo profesional",
                "Manual de procedimientos técnicos",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación médica ocupacional?",
            options: [
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Examen médico para determinar la aptitud del trabajador",
                "Revisión de documentos financieros",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una política de prevención?",
            options: [
                "Manual de procedimientos técnicos",
                "Declaración de compromiso de la empresa para prevenir riesgos laborales",
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación de desempeño?",
            options: [
                "Proceso de medir el rendimiento del trabajador",
                "Revisión de documentos financieros",
                "Control de calidad del producto",
                "Auditoría de recursos humanos",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una política de bienestar?",
            options: [
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
                "Manual de procedimientos técnicos",
                "Declaración de compromiso de la empresa con el bienestar de los empleados",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una evaluación de clima laboral?",
            options: [
                "Revisión de documentos financieros",
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Proceso de medir la satisfacción y bienestar de los empleados",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una política de seguridad?",
            options: [
                "Manual de procedimientos técnicos",
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
                "Declaración de compromiso de la empresa con la seguridad en el trabajo",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una evaluación de riesgos psicosociales?",
            options: [
                "Revisión de documentos financieros",
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Proceso de identificar y analizar riesgos psicosociales en el trabajo",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una medida de prevención?",
            options: [
                "Acción para prevenir riesgos laborales",
                "Manual de procedimientos técnicos",
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una investigación de enfermedades laborales?",
            options: [
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Revisión de documentos financieros",
                "Proceso de analizar las causas de una enfermedad laboral",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una brigada de primeros auxilios?",
            options: [
                "Grupo de personas entrenadas para brindar primeros auxilios",
                "Grupo de recursos humanos",
                "Asociación de empleados",
                "Equipo de producción",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una señalización de emergencia?",
            options: [
                "Plan de desarrollo profesional",
                "Conjunto de señales para indicar rutas y medidas de emergencia",
                "Manual de procedimientos técnicos",
                "Reglamento interno de la empresa",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación médica preventiva?",
            options: [
                "Control de calidad del producto",
                "Auditoría de recursos humanos",
                "Revisión de documentos financieros",
                "Examen médico para prevenir enfermedades laborales",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una política de salud?",
            options: [
                "Declaración de compromiso de la empresa con la salud de los empleados",
                "Manual de procedimientos técnicos",
                "Plan de desarrollo profesional",
                "Reglamento interno de la empresa",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una evaluación de satisfacción laboral?",
            options: [
                "Revisión de documentos financieros",
                "Control de calidad del producto",
                "Auditoría de recursos humanos",
                "Proceso de medir la satisfacción de los empleados",
            ],
            correct: 3
        },
        {
            text: "¿Qué es una política de calidad?",
            options: [
                "Declaración de compromiso de la empresa con la calidad del producto",
                "Reglamento interno de la empresa",
                "Manual de procedimientos técnicos",
                "Plan de desarrollo profesional",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una evaluación de desempeño laboral?",
            options: [
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Proceso de medir el rendimiento laboral del trabajador",
                "Revisión de documentos financieros",
            ],
            correct: 2
        },
        {
            text: "¿Qué es una política de prevención de riesgos?",
            options: [
                "Manual de procedimientos técnicos",
                "Declaración de compromiso de la empresa para prevenir riesgos laborales",
                "Reglamento interno de la empresa",
                "Plan de desarrollo profesional",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación de clima organizacional?",
            options: [
                "Revisión de documentos financieros",
                "Proceso de medir la satisfacción y bienestar de los empleados en la organización",
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una política de bienestar laboral?",
            options: [
                "Plan de desarrollo profesional",
                "Declaración de compromiso de la empresa con el bienestar de los empleados",
                "Reglamento interno de la empresa",
                "Manual de procedimientos técnicos",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación de riesgos ergonómicos?",
            options: [
                "Proceso de identificar y analizar riesgos ergonómicos en el trabajo",
                "Control de calidad del producto",
                "Revisión de documentos financieros",
                "Auditoría de recursos humanos",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una medida de control ergonómico?",
            options: [
                "Reglamento interno de la empresa",
                "Acción para eliminar o reducir riesgos ergonómicos",
                "Manual de procedimientos técnicos",
                "Plan de desarrollo profesional",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una investigación de riesgos ergonómicos?",
            options: [
                "Proceso de analizar las causas de riesgos ergonómicos",
                "Control de calidad del producto",
                "Revisión de documentos financieros",
                "Auditoría de recursos humanos",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una brigada de evacuación?",
            options: [
                "Grupo de personas entrenadas para realizar evacuaciones en situaciones de emergencia",
                "Equipo de producción",
                "Grupo de recursos humanos",
                "Asociación de empleados",
            ],
            correct: 0
        },
        {
            text: "¿Qué es una señalización de evacuación?",
            options: [
                "Reglamento interno de la empresa",
                "Conjunto de señales para indicar rutas y medidas de evacuación",
                "Manual de procedimientos técnicos",
                "Plan de desarrollo profesional",
            ],
            correct: 1
        },
        {
            text: "¿Qué es una evaluación médica ocupacional preventiva?",
            options: [
                "Auditoría de recursos humanos",
                "Control de calidad del producto",
                "Examen médico para prevenir enfermedades ocupacionales",
                "Revisión de documentos financieros",
            ],
            correct: 2
        },
    ];


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
    
