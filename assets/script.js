var startButtonEl = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var time = 60;
function startTimer() {
    timerEl.textContent=time;
}
startButtonEl.addEventListener("click", startTimer);
// setInterval(startGame, 60000)



const questions = [
    {
        id: "1",
        question: "Which operator means 'equal in value and type?",
        answers: ["=", "==", "===", "=&="], 
        correctAnswerIndex: 3
    },
    {
        id: "2",
        question: "Which type of variable is allowed to be redeclared?",
        answers: ["var", "let", "const", "all of the above"], 
        correctAnswerIndex: 1
    },
    {
        id: "3",
        question: "What type of brackets are used to enclose an array?",
        answers: ["curly brackets", "straight brackets", "quotes", "parenthesis"], 
        correctAnswerIndex: 2
    },
    {
        id: "4",
        question: "Which math method rounds a number down to its nearest integer?",
        answers: ["Math.round(x)", "Math.ceil(x)", "Math.trunc(x)", "Math.floor(x)"], 
        correctAnswerIndex: 4
    },
    {
        id: "5",
        question: "Which of these is not a common data type? ",
        answers: ["boolean", "word", "string", "number"], 
        correctAnswerIndex: 2
    }
  ]; 

//                      

// const question = questions.map(
//     function(q) {
//         document.getElementById("question-text").innerText = q.question
//         console.log(q.answers[0])
//         // const answer = q.answers.map(
//         //     function(a) {
//         //         // console.log(a)
//         //         document.createElement("button").className = "answer-button"
//         //         document.createElement("h3").innerHTML = a
//         //     }
//         // )
//     });

// var titleText = document.getElementById()

// create somewhere on html a div that can hold the questions
// somewhere for buttons for answer choices in html 
// timerEl **logic to go here later 
// start button 
// store high score to local storage w initials 
// end game div -- All done your final score is... 