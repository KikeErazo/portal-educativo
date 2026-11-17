// 1. Almacenar todas las preguntas y respuestas
const preguntasSST = [
    {
        pregunta: "¿Qué es la Seguridad y Salud en el Trabajo (SST)?",
        respuesta: "La SST es la disciplina que trata la prevención de lesiones y enfermedades causadas por las condiciones de trabajo, y la protección y promoción de la salud de los trabajadores."
    },
    {
        pregunta: "¿Cuáles son los objetivos principales de la SST?",
        respuesta: "Los objetivos principales son prevenir accidentes y enfermedades laborales, proteger la salud de los trabajadores y promover un ambiente de trabajo seguro y saludable."
    },
    {
        pregunta: "¿Qué ley regula la SST en Colombia?",
        respuesta: "La ley que regula la SST en Colombia es la Ley 1562 de 2012."
    },
    // **Añade aquí las 17 preguntas restantes en el mismo formato { pregunta: "...", respuesta: "..." }**
    // Ejemplo de la cuarta:
    {
        pregunta: "¿Qué es el Sistema General de Riesgos Laborales?",
        respuesta: "Es el conjunto de normas, entidades y procedimientos destinados a prevenir, proteger y atender a los trabajadores frente a los riesgos derivados de su actividad laboral."
    }
    // ... hasta la pregunta 20
];

// 2. Variables de estado y referencias a elementos HTML
let indiceActual = 0;
const preguntaTexto = document.getElementById('pregunta-texto');
const respuestaArea = document.getElementById('respuesta-area');
const respuestaTexto = document.getElementById('respuesta-texto');
const btnMostrar = document.getElementById('mostrar-respuesta');
const btnSiguiente = document.getElementById('siguiente-pregunta');


// 3. Función para cargar la pregunta
function cargarPregunta() {
    if (indiceActual < preguntasSST.length) {
        // Muestra la pregunta actual
        preguntaTexto.textContent = preguntasSST[indiceActual].pregunta;
        
        // Oculta la respuesta y el botón 'Siguiente'
        respuestaArea.style.display = 'none';
        btnSiguiente.style.display = 'none';
        
        // Muestra el botón 'Mostrar Respuesta'
        btnMostrar.style.display = 'block';
    } else {
        // Muestra un mensaje cuando termina el cuestionario
        preguntaTexto.textContent = "¡Cuestionario Terminado! Has repasado todos los temas.";
        btnMostrar.style.display = 'none';
        btnSiguiente.style.display = 'none';
        respuestaArea.style.display = 'none';
    }
}


// 4. Función para mostrar la respuesta
function mostrarRespuesta() {
    // Rellena la respuesta y la muestra
    respuestaTexto.textContent = preguntasSST[indiceActual].respuesta;
    respuestaArea.style.display = 'block';
    
    // Oculta el botón 'Mostrar Respuesta'
    btnMostrar.style.display = 'none';
    
    // Muestra el botón 'Siguiente Pregunta'
    btnSiguiente.style.display = 'block';
}


// 5. Función para pasar a la siguiente pregunta
function siguientePregunta() {
    indiceActual++; // Incrementa el índice
    cargarPregunta();
}


// 6. Asignar los eventos (clics) a los botones
btnMostrar.addEventListener('click', mostrarRespuesta);
btnSiguiente.addEventListener('click', siguientePregunta);


// 7. Iniciar la aplicación
cargarPregunta();