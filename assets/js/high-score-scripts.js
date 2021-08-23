var pageContentEl = document.querySelector("#high-scores");

// loads the high score from local storage and parse's it into an array
highScore = localStorage.getItem("high-score");
highScore = JSON.parse(highScore);

// set highScore to empty array if localstorage is empty to prevent errors
if (!highScore) {
    highScore = []
}

// sorts the high score array
highScore = highScore.sort((a,b) => {
    return b.score - a.score;
});

// checks for which button is clicked
var buttonEvent = function(event) {
    var targetEl = event.target;

    // if "Go Back" clicked, goes to main page
    if (targetEl.matches("#go-back")) {
        location.href = "index.html";
    }

    // if "Clear high score" is clicked, clears the localstorage
    else if (targetEl.matches("#clear-scores")) {
        localStorage.clear();
        var listEl = document.querySelector(".high-score-list");
        listEl.remove();
    }
}

// creates an ordered list of high scores to display on the page
var loadHighScore = function() {
    var listEl = document.querySelector(".high-score-list");
    var highScoreEl = document.createElement("ol");

    // iterates over the highScore to display all high scores
    for (var i=0; i < highScore.length; i++) {
        var highScoreName = document.createElement("li");
        highScoreName.textContent = (highScore[i].initials + " - " + highScore[i].score);
        highScoreEl.appendChild(highScoreName);
    }
    
    listEl.appendChild(highScoreEl);    
}

// call the high score function on page load
loadHighScore();

pageContentEl.addEventListener("click", buttonEvent);