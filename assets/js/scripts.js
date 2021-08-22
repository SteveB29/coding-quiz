var startButton = document.querySelector("#start-button");
var questionNumber = 0;
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["strings", "booleans","alerts","numbers"],
        correct: 2
    },{
        question: "The condition in an if / else statement is enclosed with _____.",
        choices: ["quotes","curly brackets","parenthesis","square brackets"],
        correct: 2
    },{
        question: "Arrays in JavaScript can be used to store",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        correct: 3
    },{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","parenthesis"],
        correct: 2
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","for loops","console.log"],
        correct: 3
    }
];


var startGame = function() {
    var clearIntro = document.querySelector(".starter-display");
    clearIntro.remove();
    displayQuestion();
}

var displayQuestion = function() {
    var mainScreen = document.querySelector(".main-screen");

    // creates elements
    var displayEl = document.createElement("div");
    var questionEl = document.createElement("h3");
    var testEl = document.createElement("p")

    // set element attributes
    displayEl.className = "starter-display";
    questionEl.innerText = questions[questionNumber].question;
    testEl.innerText = "This is a test";

    // appends elements to the main display div
    mainScreen.appendChild(displayEl);
    displayEl.appendChild(questionEl);
    displayEl.appendChild(testEl);

    console.log(questions[0].choices.length);
}

startButton.addEventListener("click", startGame);