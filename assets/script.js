//question data 
var questions = [
    {
        question: "Which operator means 'equal in value and type?",
        answers: ["a. =", "b. ==", "c. ===", "d. =&="], 
        correctAnswerIndex: 2
    },
    {
        question: "Which type of variable is allowed to be redeclared?",
        answers: ["a. var", "b. let", "c. const", "d. all of the above"], 
        correctAnswerIndex: 0
    },
    {
        question: "What type of brackets are used to enclose an array?",
        answers: ["a. curly brackets", "b. straight brackets", "c. quotes", "d. parenthesis"], 
        correctAnswerIndex: 1
    },
    {
        question: "Which math method rounds a number down to its nearest integer?",
        answers: ["a. Math.round(x)", "b. Math.ceil(x)", "c. Math.trunc(x)", "d. Math.floor(x)"], 
        correctAnswerIndex: 3
    },
    {
        question: "Which of these is not a common data type? ",
        answers: ["a. boolean", "b. word", "c. string", "d. number"], 
        correctAnswerIndex: 1
    }
  ]; 
var startButtonEl = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var time = 60;
var questionsEl = document.getElementById("question");
var startGameTextEl = document.getElementById("start-game-text");
var answerChoicesEl = document.querySelector(".answer-choices");
var questionTextEl = document.getElementById("question-text");
var questionIndex = 0
var endGameTextEl = document.querySelector(".end-game");
var finalScoreEl = document.getElementById("final-score");
var stopTimer = false;
var submitScoreEl = document.getElementById("submit-score");
var highScorePage = document.getElementById("high-score-page");
var scoresEl = document.getElementById("scores");

//timer starts when start button clicked 
function startGame() {
    timerEl.textContent=time;
    setInterval(countdown, 1000);
    startGameTextEl.setAttribute("class", "hide");
    startButtonEl.setAttribute("class", "hide");
    startQuestions();
}

function countdown() {
    timerEl.textContent=time;
    if (stopTimer) {
        return;
    }
    if (time>0) {
        time--
    };
    if (time === 0) {
        endGame();
    };
    
}

startButtonEl.addEventListener("click", startGame);

//start game
function startQuestions() {
    questionTextEl.textContent=questions[questionIndex].question;
    var choices = questions[questionIndex].answers;
    while (answerChoicesEl.lastChild) {
        answerChoicesEl.removeChild(answerChoicesEl.lastChild)
    }
    choices.forEach((choice)=>{
        var answerButtonEl = document.createElement("button");
        answerButtonEl.textContent=choice;
        answerChoicesEl.appendChild(answerButtonEl);
        answerButtonEl.addEventListener("click", answerQuestion)
   
    });
}

//handle answer input
function answerQuestion(event) {
    // console.log(event.target.textContent);
    var correctAnswer = (event.target.textContent === questions[questionIndex].answers[questions[questionIndex].correctAnswerIndex])
    if (!correctAnswer) {
        time = time - 10;
    }
    questionIndex++;
    if (questionIndex < questions.length) startQuestions();
    else endGame();
}

//end game 
function endGame() {
    stopTimer = true;
    console.log(stopTimer);
    questionTextEl.setAttribute("class", "hide");
    answerChoicesEl.setAttribute("class", "hide");
    endGameTextEl.classList.remove("hide"); 
    finalScoreEl.textContent=time; 
}

// store high score to local storage w initials 
submitScoreEl.addEventListener("click", highScores)
function highScores() {
    console.log("clicked!");
    endGameTextEl.classList.add("hide");
    highScorePage.classList.remove("hide");
    var scoreEl = document.createElement("div")
    scoreEl.textContent=initials.value + " : " + time;
    scoresEl.appendChild(scoreEl);
    localStorage.setItem("high-score", time);
    localStorage.setItem("name", initials.value)
    
}


// var answerButtonEl = document.createElement("button");
//         answerButtonEl.textContent=choice;
//         answerChoicesEl.appendChild(answerButtonEl);
//         answerButtonEl.addEventListener("click", answerQuestion)




