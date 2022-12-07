let computerScore = 0;
let playerScore = 0;

function computerChoice() {
    let rpsArray = ["rock", "paper", "scissors"]; // create array to use for computerChoice
    let randomNumber = Math.floor(Math.random() * rpsArray.length); //takes random number and multiplies it by the length of rpsArray (3)
     return rpsArray[randomNumber]; // returns the string at that array position
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    // and for each button we add a 'click' listener that stores its id in playerChoice variable
    
    button.addEventListener('click', () => {
      playerChoice = button.id;
      playRound();
    });
  });


  const results = document.querySelector('.rps-results');

  function game() {
      const finalResults = document.createElement('p');
      finalResults.classList.add('finalResults');
      
     if (playerScore === 5 || computerScore === 5) {
          if (playerScore > computerScore) {
              finalResults.textContent = (`You Win! ${playerScore}-${computerScore}.`);
           } else {
              finalResults.textContent = (`You lose. ${computerScore}-${playerScore}.`)
      }
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
        return playerScore++;

    } else if ( computerSelection === "rock" && playerSelection === "scissors") {
        results.textContent = ("You lose. Rock smashes scissors.");
        return computerScore++;

    } else if (computerSelection === "scissors" && playerSelection === "rock") { 
        results.textContent = ("Rock smashes scissors! You Win!");
        return playerScore++;

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        results.textContent = ("You lose. Scissors cut paper.");
        return computerScore++;

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        results.textContent = ("Scissors cut paper! You win!");
        return playerScore++;

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        results.textContent = ("You lose. Paper covers Rock");
        return computerScore++;  
}
game();
}


