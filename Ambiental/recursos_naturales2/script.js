const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultMessageElement = document.getElementById('result-message');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    resultMessageElement.classList.add('hide');
    resultMessageElement.innerText = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (correct) {
        resultMessageElement.innerText = 'Correcto';
        resultMessageElement.classList.add('correct');
    } else {
        resultMessageElement.innerText = 'Error';
        resultMessageElement.classList.add('wrong');
    }
    resultMessageElement.classList.remove('hide');
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Reiniciar';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: '¿Qué son los recursos renovables?',
        answers: [
            { text: 'Recursos que se regeneran naturalmente', correct: true },
            { text: 'Recursos que no se pueden regenerar', correct: false },
            { text: 'Recursos que se encuentran en el espacio', correct: false },
            { text: 'Recursos que se crean artificialmente', correct: false }
        ]
    },


        {
            question: 'Explique las principales diferencias entre recursos renovables y no renovables.',
            answers: [
                { text: 'Los recursos renovables se regeneran naturalmente y los no renovables se agotan', correct: true },
                { text: 'Los recursos no renovables se regeneran naturalmente y los renovables se agotan', correct: false },
                { text: 'Ambos se regeneran naturalmente', correct: false },
                { text: 'Ambos se agotan rápidamente', correct: false }
            ]
        },
        {
            question: '¿Qué es la sostenibilidad y por qué es importante en el uso de recursos naturales?',
            answers: [
                { text: 'Es el uso responsable de recursos para no comprometer el futuro', correct: true },
                { text: 'Es el uso ilimitado de recursos', correct: false },
                { text: 'Es el uso de recursos no renovables', correct: false },
                { text: 'Es el uso de recursos solo para el presente', correct: false }
            ]
        },
        {
            question: 'Describa las características del aire como componente ambiental clave.',
            answers: [
                { text: 'Es esencial para la vida y compuesto principalmente de nitrógeno y oxígeno', correct: true },
                { text: 'Es un recurso no renovable', correct: false },
                { text: 'Es un componente sólido', correct: false },
                { text: 'No es esencial para la vida', correct: false }
            ]
        },
        {
            question: '¿Cómo se puede contaminar el aire y cuáles son las consecuencias de esta contaminación?',
            answers: [
                { text: 'Emisiones industriales y vehículos causan problemas respiratorios y cambio climático', correct: true },
                { text: 'Solo las emisiones industriales contaminan el aire', correct: false },
                { text: 'La contaminación del aire no tiene consecuencias', correct: false },
                { text: 'El aire no se puede contaminar', correct: false }
            ]
        },
        {
            question: 'Describa las características del agua como componente ambiental clave.',
            answers: [
                { text: 'Es esencial para la vida y utilizada en consumo humano, agricultura e industria', correct: true },
                { text: 'Es un recurso no renovable', correct: false },
                { text: 'No es esencial para la vida', correct: false },
                { text: 'Solo se utiliza en la industria', correct: false }
            ]
        },
        {
            question: '¿Cuáles son las principales fuentes de contaminación del agua?',
            answers: [
                { text: 'Vertidos industriales, residuos agrícolas y aguas residuales', correct: true },
                { text: 'Solo los vertidos industriales contaminan el agua', correct: false },
                { text: 'El agua no se puede contaminar', correct: false },
                { text: 'La contaminación del agua no tiene fuentes', correct: false }
            ]
        },
        {
            question: 'Describa las características del suelo como componente ambiental clave.',
            answers: [
                { text: 'Es la capa superficial de la Tierra donde crecen las plantas', correct: true },
                { text: 'Es un recurso no renovable', correct: false },
                { text: 'No es esencial para la agricultura', correct: false },
                { text: 'Es un componente líquido', correct: false }
            ]
        },
        {
            question: '¿Qué prácticas pueden llevar a la degradación del suelo?',
            answers: [
                { text: 'Deforestación, agricultura intensiva y contaminación', correct: true },
                { text: 'Solo la deforestación degrada el suelo', correct: false },
                { text: 'El suelo no se puede degradar', correct: false },
                { text: 'La degradación del suelo no tiene causas', correct: false }
            ]
        },
        {
            question: '¿Qué papel juega la flora en el mantenimiento del equilibrio ambiental?',
            answers: [
                { text: 'Producción de oxígeno y absorción de CO2', correct: true },
                { text: 'No tiene ningún papel', correct: false },
                { text: 'Solo produce oxígeno', correct: false },
                { text: 'Solo absorbe CO2', correct: false }
            ]
        },
        {
            question: '¿Cómo afecta la deforestación a la biodiversidad y al clima?',
            answers: [
                { text: 'Reduce la biodiversidad y contribuye al cambio climático', correct: true },
                { text: 'No afecta a la biodiversidad ni al clima', correct: false },
                { text: 'Solo reduce la biodiversidad', correct: false },
                { text: 'Solo contribuye al cambio climático', correct: false }
            ]
        },
        {
            question: 'Describa la importancia de la fauna en los ecosistemas.',
            answers: [
                { text: 'Mantiene el equilibrio mediante la polinización y control de plagas', correct: true },
                { text: 'No tiene importancia', correct: false },
                { text: 'Solo poliniza las plantas', correct: false },
                { text: 'Solo controla las plagas', correct: false }
            ]
        },
        {
            question: '¿Cuáles son las principales amenazas para la fauna debido a la actividad humana?',
            answers: [
                { text: 'Pérdida de hábitat, caza furtiva y contaminación', correct: true },
                { text: 'No hay amenazas para la fauna', correct: false },
                { text: 'Solo la pérdida de hábitat', correct: false },
                { text: 'Solo la caza furtiva', correct: false }
            ]
        },
        {
            question: 'Defina contaminación ambiental y proporcione ejemplos de diferentes tipos de contaminación.',
            answers: [
                { text: 'Introducción de sustancias nocivas al medio ambiente, como contaminación del aire y agua', correct: true },
                { text: 'No existe la contaminación ambiental', correct: false },
                { text: 'Solo la contaminación del aire', correct: false },
                { text: 'Solo la contaminación del agua', correct: false }
            ]
        },
        {
            question: '¿Cuáles son los efectos de la contaminación del aire en la salud humana y en el medio ambiente?',
            answers: [
                { text: 'Problemas respiratorios y enfermedades cardiovasculares', correct: true },
                { text: 'No tiene efectos', correct: false },
                { text: 'Solo problemas respiratorios', correct: false },
                { text: 'Solo enfermedades cardiovasculares', correct: false }
            ]
        },
        {
            question: '¿Cómo afecta la contaminación del agua a los ecosistemas acuáticos y a la salud humana?',
            answers: [
                { text: 'Muerte de organismos acuáticos y enfermedades en humanos', correct: true },
                { text: 'No afecta a los ecosistemas acuáticos ni a la salud humana', correct: false },
                { text: 'Solo afecta a los ecosistemas acuáticos', correct: false },
                { text: 'Solo afecta a la salud humana', correct: false }
            ]
        },
        {
            question: '¿Qué medidas se pueden tomar para reducir la contaminación del suelo?',
            answers: [
                { text: 'Prácticas agrícolas sostenibles y tratamiento adecuado de desechos', correct: true },
                { text: 'No se pueden tomar medidas', correct: false },
                { text: 'Solo prácticas agrícolas sostenibles', correct: false },
                { text: 'Solo tratamiento adecuado de desechos', correct: false }
            ]
        },
        {
            question: 'Explique la importancia de la conservación de los recursos naturales.',
            answers: [
                { text: 'Mantener la biodiversidad y asegurar la disponibilidad de recursos', correct: true },
                { text: 'No es importante', correct: false },
                { text: 'Solo mantener la biodiversidad', correct: false },
                { text: 'Solo asegurar la disponibilidad de recursos', correct: false }
            ]
        },
        {
            question: '¿Qué estrategias se pueden implementar para el uso sostenible de los recursos renovables y no renovables?',
            answers: [
                { text: 'Energías renovables, reciclaje y eficiencia energética', correct: true },
                { text: 'No se pueden implementar estrategias', correct: false },
                { text: 'Solo energías renovables', correct: false },
                { text: 'Solo reciclaje', correct: false }
            ]
        }
    ];
