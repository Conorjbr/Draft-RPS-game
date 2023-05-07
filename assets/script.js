const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.center-select')
let userChoice
let computerChoice
let result
let userScore
let computerScore = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!';
    incrementWin();
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!';
    incrementLose();
    
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!';
    incrementWin();  
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lost!';
    incrementLose();
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!';
    incrementWin();
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lost!';
    incrementLose();
  }
  resultDisplay.innerHTML = result
}
    resultDisplay.innerHTML = result
  
/*Takes current user score from the DOM and increments it by */
function incrementWin(){
      
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  }

  /*Takes current computer score from the DOM and increments it by */
function incrementLose(){
      
  let oldScore = parseInt(document.getElementById("c-score").innerText);
  document.getElementById("c-score").innerText = ++oldScore;
}
