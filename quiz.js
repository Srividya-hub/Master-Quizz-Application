const questions = [
    {
        question: "HTML stands for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hypertext Transfer Protocol", correct: false },
            { text: "Hyperlink and Transfer Protocol", correct: false },
            { text: "Hypertext Transmitt Protocol", correct: false },
        ]
    },
    {
        question: "HTML element for the largest headings?",
        answers: [
            { text: "h6", correct: false },
            { text: "heading", correct: false },
            { text: "h1", correct: true },
            { text: "head", correct: false },
        ]
    },
    {
        question: "HTML element for strating a webpage is?",
        answers: [
            { text: "Head,Title,HTML,Body", correct: false },
            { text: "HTML,Head,Title,Body", correct: true },
            { text: "HTML,Body,Title,Head", correct: false },
            { text: "HTML,Head,Body,Title", correct: false },
        ]
    },
    {
        question: "Which character is used to indicate an end tag?",
        answers: [
            { text: "^", correct: false },
            { text: "*", correct: false },
            { text: "<", correct: false },
            { text: "/", correct: true },
        ]
    },
    {
        question: "HTML was developed by?",
        answers: [
            { text: "Tim Berners-Lee", correct: true },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
            { text: "Brendan Eich", correct: false },
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            { text: "CSS is a style sheet languages", correct: false },
            { text: "CSS is designed to separate the presentation and content,incluing layout,colors,and fonts", correct: false },
            { text: "CSS is the language used to a style the HTML", correct: false },
            { text: "All of the mentioned", correct: true },
        ]
    },
    {
        question: "CSS framework is used to create a responsive design ?",
        answers: [
            { text: "booststrap", correct: true },
            { text: "digango", correct: false },
            { text: "larawell", correct: false },
            { text: "rails", correct: false },
        ]
    },
    {
        question: "which of the following  CSS selector are used to specify a group of elements?",
        answers: [
            { text: "tag", correct: false },
            { text: "universal", correct: false },
            { text: "id", correct: false },
            { text: "class", correct: true },
        ]
    },
    {
        question: "CSS used to change the background color of an element is?",
        answers: [
            { text: "bgcolor", correct: false },
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "CSS used to change the text color of an element is?",
        answers: [
            { text: "bgcolor", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
            { text: "background-text", correct: false },
        ]
    },
    {
        question: "which type of javascript language is?",
        answers: [
            { text: "object-oriented", correct: false },
            { text: "assembly language", correct: false },
            { text: "object-based", correct: true },
            { text: "High-level", correct: false },
        ]
    },
    {
        question: "Javascript code can be written in?",
        answers: [
            { text: "javascript file", correct: false },
            { text: "javascript file and in HTML document directly", correct: true },
            { text: "HTML document directly", correct: false },
            { text: "In style sheets", correct: false },
        ]
    },
    {
        question: "which symbol is used sperate javascript statements?",
        answers: [
            { text: ";", correct: true },
            { text: ",", correct: false },
            { text: ":", correct: false },
            { text: "_", correct: false },
        ]
    },
    {
        question: "which javascript method is used to write on browser's console?",
        answers: [
            { text: "console.write()", correct: false },
            { text: "console.log()", correct: true },
            { text: "console.output()", correct: false },
            { text: "console.HTML()", correct: false },
        ]
    },
    {
        question: "In javascript, single line comment begins with?",
        answers: [
            { text: "#", correct: false },
            { text: "//", correct: true },
            { text: "$", correct: false },
            { text: "/*", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


