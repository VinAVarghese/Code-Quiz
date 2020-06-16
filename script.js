





// var highScore needs to be an object that keeps the top five initials and scores [0-4] (highest to low) with a new entry being added in the line appropriatly if needed
// var score needs to keep record current player's score
// highScores screen
    // var initials = prompt("Please enter your initials")
    // initials + score = VAV 250
// timer 
// start button with event click listener and count down timer
// objects with Qs and As
// subtract time from timer with every incorrect answer
// game over event when time runs out OR if all questions are answered >> highscore screen

// Grabbing Elements //
var countdownEl = document.querySelector("#timerCountdown")
var startBtn = document.querySelector("button")

// Event Listener & Countdown Function //
startBtn.addEventListener("click", function () {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
      countdownEl.textContent = "Quiz starts in " + timeLeft ;
      timeLeft--;
  
      if (timeLeft === -1) {
        countdownEl.textContent = "";
        clearInterval(timeInterval);
        // quiz function starts 
      }
    }
    
    , 1000);
  } );

// Question Sets >> credit: w3schools js quiz (https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS) //
var questionSets = { 
    Q1 : {
        question1: "Inside which HTML element do we put the JavaScript?",
        choices1: ["<javaScript>","<script>","<script.js>","<javascript>"],
        answer1: "<script>", 
    },
    Q2 : {
        question2: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        choices2: ["document.getElementByName('p').innerHTML = 'Hello World!'';","document.getElementById('demo').innerHTML = 'Hello World!';","#demo.innerHTML = 'Hello World!';","document.getElement('p').innerHTML = 'Hello World!';"],
        answer2: "document.getElementById('demo').innerHTML = 'Hello World!';", 
    },
    Q3 : {
        question3: "Where is the correct place to insert a JavaScript?",
        choices3: ["The <body> section","Both the <head> section and the <body> section are correct","The <head> section"],
        answer3: "Both the <head> section and the <body> section are correct", 
    },
    Q4 : {
        question4: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices4: ["<script src='xxx.js'>","<script name='xxx.js'>","<script href='xxx.js'>"],
        answer4: "<script src='xxx.js'>", 
    },
    Q5 : {
        question5: "The external JavaScript file must contain the <script> tag.",
        choices5: ["true","false",],
        answer5: "false", 
    },
    Q6 : {
        question6: "How do you write 'Hello World' in an alert box?",
        choices6: ["alert('Hello World');","msg('Hello World');","alertBox('Hello World');","msgBox('Hello World');"],
        answer6: "alert('Hello World');", 
    },
    Q7 : {
        question7: "How do you create a function in JavaScript?",
        choices7: ["function myFunction()","function:myFunction()","function = myFunction()"],
        answer7: "function myFunction()", 
    },
    Q8 : {
        question8: "How do you call a function named 'myFunction'?",
        choices8: ["call function myFunction()","call myFunction()","myFunction()"],
        answer8: "myFunction()", 
    },
    Q9 : {
        question9: "How do you call a function named 'myFunction'?",
        choices9: ["if i = 5","if i = 5 then","if i == 5 then","if (i == 5)"],
        answer9: "if (i == 5)", 
    },
    Q10 : {
        question10: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices10: ["if i = 5","if i = 5 then","if i == 5 then","if (i == 5)"],
        answer10: "if (i == 5)", 
    },

    
}



