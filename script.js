    // Grabbing HTML Elements //
var countdownEl = document.querySelector("#timerCountdown")
var startBtn = document.querySelector("button")
var questionNumberEl = document.querySelector("#questionNumEl")
var questionEl = document.querySelector("#questionEl")
var rulesEl = document.querySelector("#rulesEl")
var choicesEl = document.querySelector("#choicesEl")
var submitBtn = document.querySelector("#submitBtn")
var restartBtn = document.querySelector("#restartBtn")
var scoreEl = document.querySelector("#scoreEl")
var timerEl = document.querySelector("#timerEl")
var choiceOne = document.querySelector("#choice1")
var choiceTwo = document.querySelector("#choice2")
var choiceThree = document.querySelector("#choice3")
var choiceFour = document.querySelector("#choice4")
var radioOne = document.querySelector("#radio1")
var radioTwo = document.querySelector("#radio2")
var radioThree = document.querySelector("#radio3")
var radioFour = document.querySelector("#radio4")
var radio1 = document.querySelector("#Radios1")
var radio2 = document.querySelector("#Radios2")
var radio3 = document.querySelector("#Radios3")
var radio4 = document.querySelector("#Radios4")
var body = document.querySelector("body")


    // Global Variables // 
var score = 0;
var quizTime = 60;
var q = 0;
var h = -1;
var questionCount = 0;
var leaderboard = [];
var answer;

    // Reset Function On Page Load //
function resetQuiz() {
    restartBtn.classList.remove("d-flex")
    restartBtn.style.display = "none"
    submitBtn.style.display = "none"
    choicesEl.style.display = "none"
};
resetQuiz();

    // Start Button Event Listener & Quiz Countdown Function //
startBtn.addEventListener("click", function () {
    var timeLeft = 3;

    startBtn.style.display = "none"

    var timeInterval = setInterval(function() {
      countdownEl.textContent = "Quiz starts in " + timeLeft ;
      timeLeft--;

      if (timeLeft === 0) {
        quizTimer();
      }
  
      if (timeLeft === -1) {
        countdownEl.textContent = "";
        clearInterval(timeInterval);
        rulesEl.style.display = "none"
        submitBtn.style.display = "block"
        submitBtn.classList.add("d-flex")
        choicesEl.style.display = "block"
        askQuestions();
      }
    }
    , 1000);
});

    // Quiz Timer Function & End Quiz Function (called on line 87) //
function quizTimer() {
    var timeInterval = setInterval(function() {
      timerEl.textContent = "Time Left: " + quizTime ;
      quizTime--;
  
      if (quizTime <= 0 || questionCount === 5) {
        clearInterval(timeInterval);
        timerEl.textContent = "Time Left: 0";
        rollCredits();
      }
    }
    , 1000);
}

    // Question Sets >> Credit: w3schools js quiz (https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS) //
var questionSets = [ 
    Q1 = {
        question1: "Inside which HTML element do we put the JavaScript?",
        choices1: ["<javaScript>","<script>","<script.js>","<javascript>"],
        answer1: "<script>", 
    },
    Q2 = {
        question2: "What is the correct JavaScript syntax to change the content of the following HTML element? <p id='demo'>This is a demonstration.</p>",
        choices2: ["document.getElementByName('p').innerHTML = 'Hello World!'';","document.getElementById('demo').innerHTML = 'Hello World!';","#demo.innerHTML = 'Hello World!';","document.getElement('p').innerHTML = 'Hello World!';"],
        answer2: "document.getElementById('demo').innerHTML = 'Hello World!';", 
    },
    Q3 = {
        question3: "Where is the correct place to insert a JavaScript?",
        choices3: ["The <body> section","Both the <head> section and the <body> section are correct","The <head> section"],
        answer3: "Both the <head> section and the <body> section are correct", 
    },
    Q4 = {
        question4: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices4: ["<script src='xxx.js'>","<script name='xxx.js'>","<script href='xxx.js'>"],
        answer4: "<script src='xxx.js'>", 
    },
    Q5 = {
        question5: "The external JavaScript file must contain the <script> tag.",
        choices5: ["true","false",],
        answer5: "false", 
    },
    Q6 = {
        question6: "How do you write 'Hello World' in an alert box?",
        choices6: ["alert('Hello World');","msg('Hello World');","alertBox('Hello World');","msgBox('Hello World');"],
        answer6: "alert('Hello World');", 
    },
    Q7 = {
        question7: "How do you create a function in JavaScript?",
        choices7: ["function myFunction()","function:myFunction()","function = myFunction()"],
        answer7: "function myFunction()", 
    },
    Q8 = {
        question8: "How do you call a function named 'myFunction'?",
        choices8: ["call function myFunction()","call myFunction()","myFunction()"],
        answer8: "myFunction()", 
    },
    Q9 = {
        question9: "How to write an IF statement in JavaScript?",
        choices9: ["if i = 5","if i = 5 then","if i == 5 then","if (i == 5)"],
        answer9: "if (i == 5)", 
    },
    Q10 = {
        question10: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices10: ["if i <> 5","if (i != 5)","if i =! 5 then","if (i <> 5)"],
        answer10: "if (i != 5)", 
    },
]

    // Fisher-Yates Shuffle //
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}
var ranNums = shuffle([0,1,2,3,4,5,6,7,8,9]);
    
    // Ask Questions Function (called on line 85) //
function askQuestions(){
    q++;
    h++;
    questionNumberEl.textContent = ("Question " + q)
    var i = ranNums[h]
    theQuestionSet = questionSets[i]
    var question = Object.values(theQuestionSet)[0]
    questionEl.textContent = (question)
    var choicesArray = Object.values(theQuestionSet)[1]
    choiceOne.textContent = (choicesArray[0])
    radio1.value = (choicesArray[0])
    choiceTwo.textContent = (choicesArray[1])
    radio2.value = (choicesArray[1])
    choiceThree.textContent = (choicesArray[2])
    radio3.value = (choicesArray[2])
    choiceFour.textContent = (choicesArray[3])
    radio4.value = (choicesArray[3])
    answer = Object.values(theQuestionSet)[2]
    
    if (choicesArray[2] === undefined) {
        radioThree.style.display = "none"
    } else {
        radioThree.style.display = "block"
    }
    if (choicesArray[3] === undefined) {
        radioFour.style.display = "none"
    } else {
        radioFour.style.display = "block"
    }
}

submitBtn.addEventListener("click", function(){
    var userChoice = document.querySelector("input[type = radio]:checked");
    if (userChoice.value === answer) {
        score = score + 100;
        console.log("Right!");
        rightHighlight(body);
    } else {
        quizTime = quizTime - 10;
        console.log("Incorrect!");
        wrongHighlight(body);
    }

    scoreEl.textContent = "Your Score: " + score 
    
    questionCount++;

    if (questionCount <= 4){
        askQuestions()
    }
})

    // Wrong & Right Effect Functions //
function wrongHighlight(body){
    var orig = body.style.backgroundColor;
    body.style.backgroundColor = '#FF0000';
    setTimeout(function(){
            body.style.backgroundColor = orig;
    }, 375);
}
function rightHighlight(body){
    var orig = body.style.backgroundColor;
    body.style.backgroundColor = '#00FF00';
    setTimeout(function(){
            body.style.backgroundColor = orig;
    }, 375);
}

    // End/Highscore Function (called on line 81) //
function rollCredits(){
    questionEl.style.display = "none"
    choicesEl.style.display = "none"
    var initials = prompt("Enter your initials for the leaderboard.")
    submitBtn.classList.remove("d-flex")
    submitBtn.style.display = "none"
    restartBtn.style.display = "block"
    restartBtn.classList.add("d-flex")
    questionNumberEl.textContent = (initials + " " + score)
    questionEl.textContent = ("The Leaderboard")
    choicesEl.style.display = "none"

    var pastPlayers = JSON.parse(localStorage.getItem("players"))
    var currentPlayer = {
        player:initials,
        playerScore:score 
    }
    leaderboard.push(currentPlayer)
    if (pastPlayers != null){
        for(var l=0 ; l<pastPlayers.length; l++){
            leaderboard.push(pastPlayers[l])
        }
    }
    localStorage.setItem("players",JSON.stringify(leaderboard))

    leaderboard.sort((a,b)=>(a.playerScore < b.playerScore) ? 1 : -1)

    var ul = document.createElement("ul")
    ul.classList.add("col-md-6")
    var liOne = document.createElement("li")
    liOne.textContent = ((leaderboard[0])["player"] + " " + (leaderboard[0])["playerScore"])
    var liTwo = document.createElement("li")
    liTwo.textContent = ((leaderboard[1])["player"] + " " + (leaderboard[1])["playerScore"])
    var liThree = document.createElement("li")
    liThree.textContent = ((leaderboard[2])["player"] + " " + (leaderboard[2])["playerScore"])
    ul.appendChild(liOne)
    ul.appendChild(liTwo)
    ul.appendChild(liThree)
    questionEl.insertAdjacentElement("afterend", ul)
    
}

// TODO: 
// fancy up up the css




