var startButtonEl = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var time = 10;
var questionsEl = document.getElementById("question");
var startGameTextEl = document.getElementById("start-game-text");
var answerChoicesEl = document.querySelector(".answer-choices");
var questionTextEl = document.getElementById("question-text");
var questionIndex = 0

//timer starts when start button clicked 
function startGame() {
    timerEl.textContent=time;
    setInterval(countdown, 1000);
    startGameTextEl.setAttribute("class", "hide");
    startQuestions();
}

function countdown() {
    timerEl.textContent=time;
    if (time>0) {
        time--
    };
}

function startQuestions() {
    questionTextEl.textContent=questions[questionIndex].question;
    var choices = answerChoicesEl.textContent=questions[questionIndex].answers;
    console.log(choices.forEach((choice)=>{
        console.log(choice)
    }));
}

startButtonEl.addEventListener("click", startGame);

// when user clicks a button, make questionIndex ++ --function for that 
//create element button and assign to each answer 
//for each loop !! look up 
//create a button and for each button set equal to the choice 
// use hide class 
// removeAttribute? 


//question data 
const questions = [
    {
        question: "Which operator means 'equal in value and type?",
        answers: ["=", "==", "===", "=&="], 
        correctAnswerIndex: 3
    },
    {
        question: "Which type of variable is allowed to be redeclared?",
        answers: ["var", "let", "const", "all of the above"], 
        correctAnswerIndex: 1
    },
    {
        question: "What type of brackets are used to enclose an array?",
        answers: ["curly brackets", "straight brackets", "quotes", "parenthesis"], 
        correctAnswerIndex: 2
    },
    {
        question: "Which math method rounds a number down to its nearest integer?",
        answers: ["Math.round(x)", "Math.ceil(x)", "Math.trunc(x)", "Math.floor(x)"], 
        correctAnswerIndex: 4
    },
    {
        question: "Which of these is not a common data type? ",
        answers: ["boolean", "word", "string", "number"], 
        correctAnswerIndex: 2
    }
  ]; 



// create somewhere on html a div that can hold the questions
// somewhere for buttons for answer choices in html 
// timerEl **logic to go here later 
// start button 
// store high score to local storage w initials 
// end game div -- All done your final score is... 