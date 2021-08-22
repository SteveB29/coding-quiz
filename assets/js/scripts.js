var startButton = document.querySelector("#start-button");

var startGame = function() {
    var clearIntro = document.querySelector(".starter-display");
    clearIntro.remove();
}

startButton.addEventListener("click", startGame);