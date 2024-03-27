// Iteration 8: Making scoreboard functional
const scoreBoard = document.getElementById("score-board");
scoreBoard.textContent = JSON.parse(localStorage.getItem("score"));

document.getElementById("play-again-button").onclick = () => {
    window.location.href = "index.html"
}