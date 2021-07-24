
/* computerPlay() returns a choice of "rock/paper/scissors"
playerSelection() takes input and converts string to lowercase "rock/paper/scissors"
if input is not a choice, send error message to "Try again" */
function computerPlay() {
    var play = ['rock', 'paper', 'scissor'];
    var random = play[Math.floor(Math.random() * play.length)];
    return random;
}

function playerInput(string) {
    var lowered = string.toLowerCase();
    return lowered;
}

// Runs one single round 
function playRound(playerSelection) {
    loweredInput = playerSelection;
    computerSelection = computerPlay();
        compChoice = `The computer chose ${computerSelection} as its choice.`;
        document.querySelector('#compChoice').innerHTML = compChoice;
    gameTest();
    scoreBoard();
    checkGame();
}

function checkGame() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            result = `You won the game!`;
            document.querySelector('#result').innerHTML = result;
            restartGame();
        } else {
            result = `The computer won the game!`;
            document.querySelector('#result').innerHTML = result;
            restartGame();
        }
    }
}

var playerScore = 0;
var computerScore = 0;

function scoreBoard() {
    boardMessage = `The player has won ${playerScore} times while the computer has won ${computerScore} times`;
        console.log(boardMessage);
        document.querySelector('#score').innerHTML = boardMessage;
}
  
/*  function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playerScore > computerScore ? console.log("You won the game") : console.log("You lost the game");
    restartGame();
}*/
function restartGame() {
    playerScore = 0;
    computerScore = 0;
}
function restartText() {
    let empty = ``;
        document.querySelector('#compChoice').innerHTML = empty;
        document.querySelector('#score').innerHTML = empty;
    let result = `The game has been restarted`;
        document.querySelector('#result').innerHTML = result;
        divResult.style.color = 'black';
} 

// Codes for the three possible outcomes: Win, lose, or invalid
var divResult = document.querySelector('#result')

function win() {
    let result = `You won the round!`;
    playerScore ++;
    divResult.innerHTML = result;
    divResult.style.color = 'green';
    return playerScore;
}
function lose() {
    let result = `You lost the round!`;
    computerScore ++;
    divResult.innerHTML = result;
    divResult.style.color = 'red';
    return computerScore;
}
function tie() {
    let result = `This was a tie!`;
    divResult.innerHTML = result; 
    divResult.style.color = 'gray'
}
function invalidAnswer() {
    let result = `This is not an option, try again!`;
    divResult.innerHTML = result;
    divResult.style.color = 'red';
    playRound();
}

// Function compares loweredInput vs computerSelection to give a game outcome
function gameTest() {
    if (loweredInput === 'rock') 
        computerSelection === 'scissor' ? win() 
        : computerSelection === 'rock' ? tie() 
        : lose();
    else if (loweredInput === 'paper')
        computerSelection === 'rock' ? win() 
        : computerSelection === 'paper' ? tie()
        : lose();
    else if (loweredInput === 'scissor')
        computerSelection === 'paper' ? win()
        : computerSelection === 'scissor' ? tie()
        : lose();
    else   
        invalidAnswer();
}

const rockBtn = document.querySelector("#rockButton");
    rockBtn.addEventListener('click', () => {
        playRound("rock");
    });
const paperBtn = document.querySelector("#paperButton");
    paperBtn.addEventListener('click', () => {
        playRound("paper");
    });
const scissorBtn = document.querySelector("#scissorButton");
    scissorBtn.addEventListener('click', () => {
        playRound("scissor");
    });
const restartBtn = document.querySelector("#restartButton");
    restartBtn.addEventListener('click', () => {
        restartGame();
        restartText();
    })


