let computerScore = 0;
let playerScore = 0;

const results = document.querySelector('.rps-results');
const buttons = document.querySelectorAll('button');

function computerChoice() {
    let rpsArray = ["rock", "paper", "scissors"]; // create array to use for computerChoice
    let randomNumber = Math.floor(Math.random() * rpsArray.length); //takes random number and multiplies it by the length of rpsArray (3)
     return rpsArray[randomNumber]; // returns the string at that array position
}

buttons.forEach((button) => {
    
    // and for each button we add a 'click' listener that stores its id in playerChoice variable
    
    button.addEventListener('click', () => {
      playerChoice = button.id;
      playRound();
    });
  });

function reset() {
    playerScore = 0;
    computerScore = 0;
    results.textContent = "";
}

function endGame() {
    if (playerScore > computerScore) {
        finalResults.textContent = (`You Win! ${playerScore}-${computerScore}.`);
        reset();
    } else if (computerScore > playerScore) {
        finalResults.textContent = (`You lose. ${computerScore}-${playerScore}.`);
        reset();
    }

}
function checkScore() {
    const finalResults = document.createElement('p');
    finalResults.classList.add('finalResults');
      
    if (playerScore === 5 || computerScore === 5) {
        endGame();
     }
  
     results.appendChild(finalResults);
  }

function playRound() {
    let playerSelection = playerChoice;
    let computerSelection = computerChoice();
    
    // Paper covers Rock
    // Rock smashes Scissors
    // Scissors cut paper

    if (computerSelection === playerSelection) {
        results.textContent = ("Stalemate");

    } else if (computerSelection === "rock" && playerSelection === "paper") {
        results.textContent = ("Paper covers rock! You Win!");
        ++playerScore;

    } else if ( computerSelection === "rock" && playerSelection === "scissors") {
        results.textContent = ("You lose. Rock smashes scissors.");
        ++computerScore;

    } else if (computerSelection === "scissors" && playerSelection === "rock") { 
        results.textContent = ("Rock smashes scissors! You Win!");
        ++playerScore;

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        results.textContent = ("You lose. Scissors cut paper.");
        ++computerScore;

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        results.textContent = ("Scissors cut paper! You win!");
        ++playerScore;

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        results.textContent = ("You lose. Paper covers Rock");
        ++computerScore;  
}
checkScore();
}