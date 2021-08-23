var pageContentEl = document.querySelector("#high-scores");
highScore = localStorage.getItem("high-score");
highScore = JSON.parse(highScore);
if (!highScore) {
    highScore = []
}
highScore = highScore.sort((a,b) => {
    return b.score - a.score;
});
console.log(highScore);

var eventDelegator = function(event) {
    var targetEl = event.target;
    if (targetEl.matches("#go-back")) {
        location.href = "index.html";
    }
    else if (targetEl.matches("#clear-scores")) {
        localStorage.clear();
        var listEl = document.querySelector(".high-score-list");
        listEl.remove();
    }
}

var loadHighScore = function() {
    var listEl = document.querySelector(".high-score-list");
    var highScoreEl = document.createElement("ol");

    for (var i=0; i < highScore.length; i++) {
        var highScoreName = document.createElement("li");
        highScoreName.textContent = (highScore[i].initials + " - " + highScore[i].score);
        highScoreEl.appendChild(highScoreName);
    }
    console.log(highScoreEl);
    listEl.appendChild(highScoreEl);    
}

loadHighScore();
pageContentEl.addEventListener("click", eventDelegator);