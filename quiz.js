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

// Función para cargar la pregunta actual
function loadQuestion() {
    let questionData = questions[currentQuestion];
    document.getElementById('question').innerText = questionData.question;
    
    // Mostrar las opciones de respuesta
    let buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((button, index) => {
        button.innerText = questionData.options[index];
    });
    
    // Actualizar puntaje
    document.getElementById('score').innerText = `Puntaje: ${score}`;
    document.getElementById('result-box').style.display = 'none';
}

// Función para verificar la respuesta seleccionada
function selectAnswer(answerIndex) {
    let questionData = questions[currentQuestion];
    let resultBox = document.getElementById('result-box');
    
    // Si la respuesta es correcta
    if (answerIndex === questionData.correct) {
        score += 10;
        resultBox.innerText = "¡Correcto!";
        resultBox.className = "correct";
    } else {
        resultBox.innerText = "Incorrecto";
        resultBox.className = "incorrect";
    }
    
    // Mostrar el resultado
    resultBox.style.display = 'block';
    
    // Avanzar a la siguiente pregunta
    currentQuestion++;
    
    // Si quedan preguntas
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            loadQuestion();
        }, 1000); // Espera 1 segundo antes de cargar la siguiente pregunta
    } else {
        setTimeout(() => {
            alert(`Juego terminado. Tu puntaje final es: ${score}`);
        }, 1000);
    }
}

// Iniciar el juego
window.onload = () => {
    loadQuestion();
};
