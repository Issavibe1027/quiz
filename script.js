// QuerySelectors
var startButtonEl = document.getElementById("start")
var clockEl = document.getElementById("time")
var startScreenEl = document.querySelector(".start-screen")
var questionScreenEl = document.querySelector(".question-screen")
var scoreScreenEl = document.querySelector(".score-screen")
var questionEl = document.querySelector("#question")
// Fun Variables
var count = 29
var timeInterval;
var qIndex = 0;

function start(){
    timeInterval = setInterval(tiktok, 1000);
    startScreenEl.classList.add("hide");
    questionScreenEl.classList.remove("hide");
    renderQuestion()
}

function renderQuestion() {
    questionEl.textContent = questions[qIndex].question
}





function tiktok(){
    count--;
    clockEl.textContent= count

    if (count <= 0) {
        endQuiz()
    }
  
}

function endQuiz() {
    clearInterval(timeInterval)
}

startButtonEl.addEventListener("click", start)