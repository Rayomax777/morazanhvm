let questions = [
    {
        question: "¿En qué año nació Francisco Morazán?",
        options: ["1789", "1792", "1800", "1810"],
        answer: 1
    },
    {
        question: "¿En qué ciudad centroamericana fue ejecutado Francisco Morazán en 1842?",
        options: ["San José", "Tegucigalpa", "San Salvador", "Managua"],
        answer: 0
    },
    {
        question: "¿Qué batalla fue decisiva para consolidar el liderazgo de Morazán en 1827?",
        options: ["Batalla de La Trinidad", "Batalla de Ayacucho", "Batalla de Waterloo", "Batalla de Pichincha"],
        answer: 0
    },
    {
        question: "¿Cuál era el principal objetivo político de Morazán?",
        options: ["Dividir Centroamérica en varios países", "Integrar Centroamérica en una federación", "Anexionarse a México", "Unir Centroamérica con Estados Unidos"],
        answer: 1
    },
    {
        question: "¿Qué país centroamericano gobernó Morazán entre 1838 y 1839?",
        options: ["El Salvador", "Honduras", "Guatemala", "Costa Rica"],
        answer: 0
    },
    {
        question: "¿Qué reforma liberal promovió Morazán durante su gobierno?",
        options: ["Abolición del diezmo", "Censura de prensa", "Limitación de la educación", "Monopolio de la religión"],
        answer: 0
    },
    {
        question: "¿En qué año fue electo presidente de la República Federal de Centroamérica?",
        options: ["1824", "1827", "1830", "1835"],
        answer: 2
    },
    {
        question: "¿A quién tuvo que enfrentarse Morazán en su intento de unificar Centroamérica?",
        options: ["Simón Bolívar", "Justo Milla", "Rafael Carrera", "José Cecilio del Valle"],
        answer: 2
    },
    {
        question: "¿Qué título se le ha otorgado en muchas ocasiones debido a su contribución a Centroamérica?",
        options: ["Héroe Nacional", "Libertador de Centroamérica", "Presidente Vitalicio", "Padre de la Patria"],
        answer: 1
    },
    {
        question: "¿Qué país intentó anexarse a Centroamérica en 1821, contra lo cual luchó Morazán?",
        options: ["México", "Colombia", "Perú", "Estados Unidos"],
        answer: 0
    },
    {
        question: "¿Qué tipo de ideales promovió Morazán durante su gobierno?",
        options: ["Conservadores", "Liberales", "Comunistas", "Monárquicos"],
        answer: 1
    },
    {
        question: "¿Qué evento internacional influenció las reformas de Morazán en Centroamérica?",
        options: ["Revolución Francesa", "Revolución Industrial", "Primera Guerra Mundial", "La Ilustración"],
        answer: 3
    },
    {
        question: "¿Qué ocurrió con la República Federal de Centroamérica bajo el mandato de Morazán?",
        options: ["Se fortaleció", "Se disolvió", "Fue anexada a México", "Se independizó de Centroamérica"],
        answer: 1
    },
    {
        question: "¿Qué elemento cultural limitó Morazán durante su presidencia?",
        options: ["El uso de uniformes", "El diezmo", "Las procesiones", "La educación superior"],
        answer: 1
    },
    {
        question: "¿Cuál fue el principal rival político y militar de Morazán en Centroamérica?",
        options: ["José Cecilio del Valle", "Justo Milla", "Rafael Carrera", "Juan Lindo"],
        answer: 2
    }
];

// Randomize the order of questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
let lastScrollTop = 0; // Variable para controlar la dirección del scroll

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Desplazándose hacia abajo
        document.body.classList.add('scrolling-down');
    } else {
        // Desplazándose hacia arriba
        document.body.classList.remove('scrolling-down');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar números negativos
});

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("option0").innerText = questions[currentQuestion].options[0];
    document.getElementById("option1").innerText = questions[currentQuestion].options[1];
    document.getElementById("option2").innerText = questions[currentQuestion].options[2];
    document.getElementById("option3").innerText = questions[currentQuestion].options[3];
}

function selectAnswer(selectedOption) {
    let resultMessage = '';
    let isCorrect = selectedOption === questions[currentQuestion].answer;
    
    // Show result message
    const resultBox = document.getElementById("result-box");
    if (isCorrect) {
        score += 10;
        resultMessage = "¡Correcto!";
        resultBox.classList.remove("incorrect");
        resultBox.classList.add("correct");
    } else {
        score -= 5;
        resultMessage = "Incorrecto.";
        resultBox.classList.remove("correct");
        resultBox.classList.add("incorrect");
    }
    resultBox.innerText = resultMessage;
    resultBox.style.display = "block";
    resultBox.classList.add("animate");

    // Update score
    document.getElementById("score").innerText = "Puntaje: " + score;

    // Auto move to next question
    setTimeout(() => {
        resultBox.style.display = "none";  // Hide result box
        resultBox.classList.remove("animate");  // Remove animation
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    let resultText;
    if (score >= 180) {
        resultText = "¡Excelente! Has ganado el gran premio: un reconocimiento como héroe centroamericano.";
    } else if (score >= 90) {
        resultText = "Bien hecho. Has ganado un premio honorífico.";
    } else {
        resultText = "Necesitas mejorar. Tu premio es un libro de historia para estudiar más.";
    }
    document.getElementById("result").innerText = resultText;
    document.getElementById("result").style.display = "block";
}

// Initialize the game
window.onload = function() {
    shuffleQuestions();
    loadQuestion();
};
