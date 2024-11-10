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
        question: "¿Dónde murió Francisco Morazán?",
        options: ["Tegucigalpa", "Guatemala", "San Salvador", "Managua"],
        answer: "San Salvador"
    },
    {
        question: "¿Cuál era el objetivo principal de Morazán?",
        options: ["Unir a Centroamérica", "Obtener la independencia", "Defender el cristianismo", "Fundar una nueva república"],
        answer: "Unir a Centroamérica"
    },
    {
        question: "¿En qué país Francisco Morazán tuvo su exilio?",
        options: ["México", "Guatemala", "Costa Rica", "Nicaragua"],
        answer: "Costa Rica"
    },
    {
        question: "¿Qué batalla decisiva ganó Morazán durante la guerra de la Confederación Centroamericana?",
        options: ["Batalla de la Puerta de la Luna", "Batalla de La Trinidad", "Batalla de Ayutla", "Batalla de San Antonio"],
        answer: "Batalla de La Trinidad"
    },
    {
        question: "¿Qué hizo Morazán para modernizar la República Federal?",
        options: ["Creó un ejército centralizado", "Abogó por la independencia total de Centroamérica", "Fundó una nueva constitución", "Fomentó la educación y la libertad de prensa"],
        answer: "Fomentó la educación y la libertad de prensa"
    },
    {
        question: "¿Qué sucedió con Morazán después de su derrota?",
        options: ["Fue ejecutado", "Fue desterrado de Centroamérica", "Se retiró a la vida privada", "Se exilió en Europa"],
        answer: "Fue ejecutado"
    },
    {
        question: "¿A qué edad murió Francisco Morazán?",
        options: ["40 años", "45 años", "50 años", "35 años"],
        answer: "39 años"
    },
    {
        question: "¿En qué año se firmó la primera constitución de la República Federal de Centroamérica?",
        options: ["1824", "1830", "1821", "1825"],
        answer: "1824"
    },
    {
        question: "¿Cómo se llama el tratado firmado en 1830 que buscaba la paz entre los estados de Centroamérica?",
        options: ["Tratado de Paz de 1830", "Tratado de la Concordia", "Tratado de la Independencia", "Tratado de la Federación"],
        answer: "Tratado de la Concordia"
    },
    {
        question: "¿Cuál fue el legado de Francisco Morazán para Centroamérica?",
        options: ["La consolidación de la independencia de los países centroamericanos", "La unificación de Centroamérica bajo un solo gobierno", "La creación de una unión económica entre los países", "La creación de una confederación con Europa"],
        answer: "La unificación de Centroamérica bajo un solo gobierno"
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
