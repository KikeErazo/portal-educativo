
const words = [
    "PELIGRO", "RIESGO", "INCIDENTE", "ENFERMEDAD LABORAL", "ACCIDENTE LABORAL", "ATEL", "COPASST", "EPP",
    "PELIGRO BIOLÓGICO", "PELIGRO FÍSICO", "PELIGRO QUÍMICO", "PELIGRO PSICOSOCIAL", "PELIGRO BIOMECÁNICO",
    "PELIGRO CONDICIONES DE SEGURIDAD", "VIRUS", "BACTERIAS", "HONGOS", "PARÁSITOS", "PICADURAS", "MORDEDURAS",
    "FLUIDOS", "EXCREMENTO", "RADIACIÓN", "TEMPERATURA EXTREMA", "VIBRACIÓN", "ILUMINACIÓN", "RUIDO", "POLVO",
    "FIBRAS", "LÍQUIDOS", "NIEBLAS", "ROCÍOS", "GASES", "VAPORES", "HUMOS", "MATERIAL PARTICULADO", "ESTRÉS",
    "ACOSO", "CONFLICTOS", "CARGA LABORAL", "INSEGURIDAD LABORAL", "DESMOTIVACIÓN", "ANSIEDAD", "DEPRESIÓN",
    "POSTURA", "ESFUERZO", "MECÁNICO", "ELÉCTRICO", "TECNOLÓGICO",
    "ACCIDENTES DE TRANSITO", "ROBOS", "ASALTOS", "TRABAJO EN ALTURAS", "ESPACIOS CONFINADOS",
    "FENÓMENOS NATURALES", "PRECIPITACIONES", "DERRUMBE", "INUNDACIÓN", "TERREMOTO", "SISMO",
    "SEGURIDAD INDUSTRIAL", "SALUD OCUPACIONAL", "INSPECCIÓN", "AUDITORÍA", "PLAN DE EMERGENCIA",
    "BRIGADA DE EMERGENCIA", "EVACUACIÓN", "EXTINTOR", "SEÑALIZACIÓN", "BOTIQUÍN", "PRIMEROS AUXILIOS",
    "REANIMACIÓN", "RCP", "ZONA DE SEGURIDAD", "SIMULACRO", "RUTA DE EVACUACIÓN", "PUNTO DE ENCUENTRO",
    "MATRIZ DE PELIGROS", "IDENTIFICACIÓN DE PELIGROS", "VALORACIÓN DE RIESGOS", "CONTROLES", "MITIGACIÓN",
    "PREVENCIÓN", "PROTECCIÓN", "VIGILANCIA EPIDEMIOLÓGICA", "FACTOR DE RIESGO", "ACTO INSEGURO",
    "CONDICIÓN INSEGURA", "INVESTIGACIÓN DE ACCIDENTES", "RECOMENDACIONES", "PLAN DE MEJORAMIENTO",
    "SUPERVISIÓN", "AUTO CUIDADO", "PREVENCIÓN", "COMPORTAMIENTO SEGURO", "TRABAJO EN EQUIPO",
    "COMUNICACIÓN EFECTIVA", "CAPACITACIÓN", "REENTRENAMIENTO", "RESPONSABILIDAD", "SENA", "SST", "ARL", "GTC45", "ISO 45001"
];

let groups = [];
let currentGroupIndex = 0;
let currentMode = '';
let timer;

function addGroup() {
    const name = document.getElementById('group-name').value;
    if (name) {
        groups.push({ name: name, points: 0 });
        updateGroups();
        document.getElementById('group-name').value = '';
    }
}

function updateGroups() {
    const container = document.getElementById('groups');
    container.innerHTML = '';
    groups.forEach((group, index) => {
        const div = document.createElement('div');
        div.textContent = `${group.name}: ${group.points} puntos`;
        if (index === currentGroupIndex) div.classList.add('active');
        container.appendChild(div);
    });
}

let currentWord = ''; // 👉 guardamos la palabra actual

function startTurn() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('current-word').textContent = currentWord;
    document.getElementById('current-definition').textContent = ''; // limpiamos la definición
    document.getElementById('timer').textContent = '';
    currentMode = '';
}

function setMode(mode) {
    currentMode = mode;
    let time = mode === 'dibujar' ? 180 : 120;
    clearInterval(timer);
    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        document.getElementById('timer').textContent = `Tiempo restante: ${minutes}m ${seconds}s`;
        time--;
        if (time < 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = '¡Tiempo terminado!';
            
            // 👉 al terminar el tiempo mostramos la definición
            document.getElementById('current-definition').textContent =
                definitions[currentWord] || 'Definición no disponible.';
        }
    }, 1000);
}



function addPoint() {
    groups[currentGroupIndex].points++;
    updateGroups();
}

function nextGroup() {
    currentGroupIndex = (currentGroupIndex + 1) % groups.length;
    updateGroups();
    document.getElementById('current-word').textContent = '';
    document.getElementById('timer').textContent = '';
    clearInterval(timer);
}
