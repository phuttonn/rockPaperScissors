let computerScore = 0;
let playerScore = 0;

function computerChoice() {
    let rpsArray = ["rock", "paper", "scissors"]; // create array to use for computerChoice
    let randomNumber = Math.floor(Math.random() * rpsArray.length); //takes random number and multiplies it by the length of rpsArray (3)
     return rpsArray[randomNumber]; // returns the string at that array position
}

let playerChoice;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    // and for each button we add a 'click' listener that stores its id in playerChoice variable
    
    button.addEventListener('click', () => {
      playerChoice = button.id;
      playRound();
    });
  });


function playRound() {
    let playerSelection = playerChoice;
    let computerSelection = computerChoice();
    // Paper covers Rock
    // Rock smashes Scissors
    // Scissors cut paper
    if (computerSelection === playerSelection) {
        return console.log("Stalemate");

    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("Paper covers rock! You Win!");
        return playerScore++;

    } else if ( computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose. Rock smashes scissors.");
        return computerScore++;

    } else if (computerSelection === "scissors" && playerSelection === "rock") { 
        console.log("Rock smashes scissors! You Win!");
        return playerScore++;

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose. Scissors cut paper.");
        return computerScore++;

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("Scissors cut paper! You win!");
        return playerScore++;

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose. Paper covers Rock");
        return computerScore++;  
}
}



//function game() {
   //for ( let i = 0; i < 5; i++) {
        //playRound();
  // } 
//}
//game();

//console.log(`After 5 rounds the score is player: ${playerScore} and computer: ${computerScore}`);