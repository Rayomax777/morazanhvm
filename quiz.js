// Array de preguntas con opciones
const questions = [
    {
        question: "¿En qué año nació Francisco Morazán?",
        options: ["1792", "1800", "1810", "1830"],
        answer: "1792"
    },
    {
        question: "¿Cuál fue el cargo de Morazán en la República Federal de Centroamérica?",
        options: ["Presidente", "Vicepresidente", "General", "Rey"],
        answer: "Presidente"
    },
    {
        question: "¿En qué país fue exiliado Francisco Morazán?",
        options: ["Costa Rica", "Nicaragua", "Guatemala", "El Salvador"],
        answer: "Costa Rica"
    },
    {
        question: "¿En qué año murió Francisco Morazán?",
        options: ["1842", "1839", "1840", "1850"],
        answer: "1842"
    },
    {
        question: "¿Qué ejército derrotó a Morazán en la batalla de la Sabana?",
        options: ["Ejército de El Salvador", "Ejército de Nicaragua", "Ejército de Guatemala", "Ejército de Honduras"],
        answer: "Ejército de Honduras"
    },
    {
        question: "¿Qué ideología política defendió Morazán?",
        options: ["Liberalismo", "Conservadurismo", "Monarquía", "Comunismo"],
        answer: "Liberalismo"
    },
    {
        question: "¿Qué evento histórico provocó la disolución de la República Federal de Centroamérica?",
        options: ["Las Guerras de Independencia", "La Revolución Francesa", "Las Batallas de Morazán", "La Guerra de Secesión"],
        answer: "Las Batallas de Morazán"
    },
    {
        question: "¿Qué le ocurrió a Morazán después de su muerte?",
        options: ["Fue olvidado", "Su legado fue reconocido en Honduras", "Fue reconocido como héroe en toda América Central", "Fue enterrado en Costa Rica"],
        answer: "Fue enterrado en Costa Rica"
    },
    {
        question: "¿Cuál fue el objetivo principal de Morazán como líder político?",
        options: ["Promover la independencia de los países centroamericanos", "Mantener la unidad de Centroamérica", "Consolidar un gobierno monárquico", "Defender el sistema colonial"],
        answer: "Mantener la unidad de Centroamérica"
    },
    {
        question: "¿En qué batalla murió Francisco Morazán?",
        options: ["Batalla de la Sabana", "Batalla de Ayacucho", "Batalla de Puebla", "Batalla de San Salvador"],
        answer: "Batalla de la Sabana"
    },
    {
        question: "¿Quién fue el principal rival político de Morazán durante su gobierno?",
        options: ["José Francisco Barrundia", "José Cecilio del Valle", "Rafael Carrera", "Antonio José de Irisarri"],
        answer: "Rafael Carrera"
    },
    {
        question: "¿Qué instrumento utilizó Morazán para intentar lograr la unidad centroamericana?",
        options: ["La diplomacia", "La guerra", "La monarquía", "La negociación con los conservadores"],
        answer: "La guerra"
    },
    {
        question: "¿Qué lugar ocupa Morazán en la historia de Honduras?",
        options: ["Es considerado el máximo héroe nacional", "Es un presidente más", "Es un político olvidado", "Es una figura polémica"],
        answer: "Es considerado el máximo héroe nacional"
    },
    {
        question: "¿Quién ayudó a Morazán en su lucha por la unidad centroamericana?",
        options: ["José Francisco Barrundia", "Juan José Flores", "Francisco de Paula Santander", "Andrés Bello"],
        answer: "José Francisco Barrundia"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Función para mostrar la pregunta actual
function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    const questionText = document.getElementById("question");
    const options = document.querySelectorAll(".option-btn");

    questionText.textContent = questionObj.question;

    // Asignar las opciones aleatoriamente
    const shuffledOptions = [...questionObj.options];
    shuffledOptions.sort(() => Math.random() - 0.5);

    options.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
        btn.disabled = false;  // Habilitar los botones de respuesta
    });

    // Mostrar la caja de resultado (si está visible, la ocultamos al cambiar la pregunta)
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "none";
}

// Función para manejar la selección de la respuesta
function selectAnswer(selectedIndex) {
    const questionObj = questions[currentQuestionIndex];
    const selectedOption = document.getElementById(`option${selectedIndex}`).textContent;

    const resultBox = document.getElementById("result-box");
    const scoreDisplay = document.getElementById("score");

    // Comprobar si la respuesta es correcta
    if (selectedOption === questionObj.answer) {
        score += 10;
        resultBox.textContent = "¡Correcto!";
        resultBox.className = "correct";
    } else {
        score -= 5;
        resultBox.textContent = "Incorrecto";
        resultBox.className = "incorrect";
    }

    // Mostrar el puntaje actualizado
    scoreDisplay.textContent = `Puntaje: ${score}`;
    resultBox.style.display = "block";

    // Deshabilitar los botones después de responder
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(button => button.disabled = true);

    // Esperar 2 segundos antes de mostrar la siguiente pregunta
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion();
    }, 2000);
}

// Llamar a la función para mostrar la primera pregunta
window.onload = showQuestion;
