var pageContentEl = document.querySelector("#main-screen")
var timerEl = document.getElementById("timer");
var gameTime = 75;
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


var eventDelegator = function(event) {
    var targetEl = event.target;
    if (targetEl.matches("#start-button")) {
        // clears starter screen text
        var clearIntro = document.querySelector(".starter-display");
        clearIntro.remove();

        // starts the game
        startGame();
    }
    else if (targetEl.matches(".game-button")) {
        console.log("This works");
    }
    console.log(targetEl);
}

var startGame = function() {
    
    // starts the game timer
    gameTime--;
    var gameTimer = setInterval(function() {
        if (gameTime > 0){
            timerEl.textContent = gameTime;
            gameTime--;
        }
        else{
            timerEl.textContent = gameTime;
            clearInterval(gameTimer);
        }
    }, 1000);

    displayQuestion();
}

var displayQuestion = function() {
    var mainScreen = document.querySelector(".main-screen");

    // creates elements
    var displayEl = document.createElement("div");
    var questionEl = document.createElement("h3");

    // set element attributes
    displayEl.className = "game-display";
    displayEl.setAttribute("id", "game-display");
    questionEl.innerText = questions[questionNumber].question;

    // appends elements to the main display div
    mainScreen.appendChild(displayEl);
    displayEl.appendChild(questionEl);

    for (var i = 0; i < questions[questionNumber].choices.length; i++) {
        var answerButtonEl = document.createElement("button");
        answerButtonEl.className = "game-button";
        answerButtonEl.setAttribute("id", i);
        answerButtonEl.innerText = (i+1) + ": " + questions[0].choices[i];
        displayEl.appendChild(answerButtonEl);
    }
};

pageContentEl.addEventListener("click", eventDelegator);