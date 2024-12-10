
// script.js
const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const quizSection = document.getElementById('quiz-section');
const feedbackSection = document.getElementById('feedback-section');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');
const restartBtn = document.getElementById('restart-btn');

// Sample quiz data
const quizData = [
    { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Home Tool Markup Language"], correct: 0 },
    { question: "Which language is used for styling web pages?", answers: ["HTML", "CSS", "JavaScript"], correct: 1 },
    { question: "What does JS stand for?", answers: ["JavaScript", "JavaSource", "JustScript"], correct: 0 },
];

let currentQuestion = 0;
let score = 0;

// Show quiz
function startQuiz() {
    loginSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    loadQuestion();
}

// Load a question
function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    answersEl.innerHTML = '';
    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });
}

// Check the answer
function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End quiz
function endQuiz() {
    quizSection.classList.add('hidden');
    feedbackSection.classList.remove('hidden');
    feedbackEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Restart quiz
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    feedbackSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    startQuiz();
});

