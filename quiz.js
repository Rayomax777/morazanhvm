let currentQuestion = 0;
let score = 0;

// Las preguntas y respuestas
const questions = [
    {
        question: "¿Dónde nació Francisco Morazán?",
        options: ["Tegucigalpa", "Comayagua", "Santa Rosa de Copán", "La Paz"],
        correct: 0
    },
    {
        question: "¿Qué puesto ocupó Morazán en la República Federal de Centroamérica?",
        options: ["Presidente", "Vicepresidente", "Ministro de Defensa", "General de Ejército"],
        correct: 0
    },
    {
        question: "¿En qué año murió Francisco Morazán?",
        options: ["1842", "1844", "1850", "1839"],
        correct: 0
    },
    {
        question: "¿Qué país fue clave en la formación de la República Federal Centroamericana?",
        options: ["Honduras", "Costa Rica", "El Salvador", "Guatemala"],
        correct: 0
    },
    {
        question: "¿En qué batalla murió Francisco Morazán?",
        options: ["Batalla de la Trinidad", "Batalla de La Ciudadela", "Batalla de San Pedro Sula", "Batalla de la Convención"],
        correct: 0
    },
    {
        question: "¿En qué año fue proclamada la República Federal de Centroamérica?",
        options: ["1823", "1821", "1838", "1830"],
        correct: 0
    },
    {
        question: "¿Cuál era el apodo de Francisco Morazán?",
        options: ["El Héroe de la Federación", "El Libertador", "El Padre de la Patria", "El General Supremo"],
        correct: 0
    },
    {
        question: "¿En qué ciudad vivió Francisco Morazán durante su exilio en Costa Rica?",
        options: ["San José", "Cartago", "Heredia", "Alajuela"],
        correct: 0
    },
    {
        question: "¿Qué ideología política promovía Francisco Morazán?",
        options: ["Liberalismo", "Conservadurismo", "Monarquismo", "Socialismo"],
        correct: 0
    },
    {
        question: "¿Qué evento marcó el fin de la República Federal de Centroamérica?",
        options: ["La disolución de la federación", "La independencia de El Salvador", "La invasión de Guatemala", "La firma del Tratado de Paz"],
        correct: 0
    },
    {
        question: "¿Qué función cumplió Morazán durante la presidencia de la República de Honduras?",
        options: ["Presidente", "Vicepresidente", "Ministro de Defensa", "Comandante del Ejército"],
        correct: 0
    },
    {
        question: "¿Cuál fue el principal motivo de las confrontaciones entre Morazán y los conservadores?",
        options: ["La lucha por el poder centralizado", "La defensa del sistema monárquico", "La creación de nuevas leyes", "La cuestión religiosa"],
        correct: 0
    }
];
// Función para mezclar el arreglo de preguntas
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]; // Intercambia las posiciones
    }
}

// Variables globales
let currentQuestionIndex = 0;
let score = 0;

// Mostrar una pregunta
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option-btn");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
    });
}

// Manejar la selección de la respuesta
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultBox = document.getElementById("result-box");
    
    // Verificar si la respuesta es correcta
    if (currentQuestion.options[selectedIndex] === currentQuestion.answer) {
        score++; // Sumar puntos por respuesta correcta
        resultBox.textContent = "¡Correcto!";
        resultBox.className = "correct";
    } else {
        score--; // Restar puntos por respuesta incorrecta
        resultBox.textContent = "Incorrecto!";
        resultBox.className = "incorrect";
    }

    // Mostrar el puntaje
    document.getElementById("score").textContent = `Puntaje: ${score}`;

    // Ocultar la caja de resultados después de 1.5 segundos
    setTimeout(() => {
        resultBox.style.display = "none";
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            resultBox.textContent = "¡Has terminado el quiz!";
            resultBox.style.display = "block";
        }
    }, 1500);
}

// Inicializar el juego
function startGame() {
    shuffleQuestions(); // Mezcla las preguntas
    showQuestion();
}

// Llamar a startGame cuando la página cargue
window.onload = startGame;
