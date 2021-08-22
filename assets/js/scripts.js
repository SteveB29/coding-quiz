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

        // starts the timer and game
        startTimer();
        displayQuestion();
    }
    else if (targetEl.matches(".game-button")) {
        checkAnswer(targetEl);
    }
}

var startTimer = function() {
    
    // starts the game timer
    gameTime--;
    var gameTimer = setInterval(function() {
        if (questionNumber === questions.length) {
            clearInterval(gameTimer);
        }
        else if (gameTime > 0){
            timerEl.textContent = gameTime;
            gameTime--;
        }
        else{
            timerEl.textContent = gameTime;
            clearInterval(gameTimer);
        }
    }, 1000);
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
        answerButtonEl.innerText = (i+1) + ": " + questions[questionNumber].choices[i];
        displayEl.appendChild(answerButtonEl);
    }
}

var checkAnswer = function(targetEl) {

    // changes id of selected answer button to integer so it can check if correct
    answerNum = parseInt(targetEl.id);

    // clear screen for the next question or end screen
    var clearScreen = document.querySelector(".game-display");
    clearScreen.remove();
    
    // if the answer is correct
    if (answerNum === questions[questionNumber].correct) {
        var answerCorrect = true;
        answerNotification(answerCorrect);
        // if all questions are answered, stops timer and call end screen
        if (questionNumber === questions.length-1) {
            questionNumber++;
            endScreen();
        }
        // calls end screen if time is up
        else if (gameTime === 0) {
            endScreen();
        }
        // displays next question
        else {
            questionNumber++;
            displayQuestion();
        }
    }
    // if the answer is incorrect
    else {
        // subtracts 15 seconds or sets gameTime to 0 if out of time
        gameTime = Math.max(0, gameTime - 15)
        timerEl.textContent = gameTime;

        var answerCorrect = false;
        answerNotification(answerCorrect);

        // if all questions are answered, stops timer and call end screen
        if (questionNumber === questions.length-1) {
            questionNumber++;
            endScreen();
        }
        // call end screen if time is up
        else if (gameTime === 0) {
            endScreen();
        }
        // displays next question
        else {
            questionNumber++;
            displayQuestion();
        }
    }
}

var endScreen = function() {
    var mainScreen = document.querySelector(".main-screen");

    // creates elements
    var displayEl = document.createElement("div");
    var endInputEl = document.createElement("div");
    var questionEl = document.createElement("h1");
    var endText = document.createElement("p");
    var endLabel = document.createElement("label");
    var endInput = document.createElement("input");
    var submitScore = document.createElement("button");

    // set element attributes
    displayEl.className = "game-display";
    endInputEl.className = "input-form";
    questionEl.innerText = "All done!";
    endText.innerText = "Your final score is " + gameTime + ".";
    endLabel.setAttribute("for", "initials");
    endLabel.innerText = "Enter initials:";
    endInput.setAttribute("type", "text");
    endInput.setAttribute("id", "initials");
    endInput.setAttribute("name", "initials");
    submitScore.innerText = "Submit";

    // appends elements to the main display div
    mainScreen.appendChild(displayEl);
    displayEl.appendChild(questionEl);
    displayEl.appendChild(endText);
    displayEl.appendChild(endInputEl);
    endInputEl.appendChild(endLabel);
    endInputEl.appendChild(endInput);
    endInputEl.appendChild(submitScore);

    // submit press store to localStorage

}

var answerNotification = function(answerCorrect) {
    answerText = "";
    if (answerCorrect) {
        answerText = "Correct!";
    }
    else {
        answerText = "Wrong!"
    }

    var wholePAge = document.querySelector("body");

    var displayNotificationEl = document.createElement("footer");
    var correctOrWrong = document.createElement("h2");

    correctOrWrong.innerText = answerText

    wholePAge.appendChild(displayNotificationEl);
    displayNotificationEl.appendChild(correctOrWrong);

    var clearAnswerNotification = function () {
        var clearFooter = document.querySelector("footer");
        clearFooter.remove();
    }

    setTimeout(clearAnswerNotification, 800);

}

pageContentEl.addEventListener("click", eventDelegator);