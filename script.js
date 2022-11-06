function computerChoice() {
    let rpsArray = ["rock", "paper", "scissors"]; // create array to use for computerChoice
    let randomNumber = Math.floor(Math.random() * rpsArray.length); //takes random number and multiplies it by the length of rpsArray (3)
     return rpsArray[randomNumber]; // returns the string at that array position
}

let playerChoice = prompt("Make your Choice");

function playRound() {
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = computerChoice();
    // Paper covers Rock
    // Rock smashes Scissors
    // Scissors cut paper
    if (computerSelection === playerSelection) {
        return console.log("Stalemate");

    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return console.log("Paper covers rock! You Win!");

    } else if ( computerSelection === "rock" && playerSelection === "scissors") {
        return console.log("You lose. Rock smashes scissors.");

    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return console.log("Rock smashes scissors! You Win!");

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return console.log("You lose. Scissors cut paper.");

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return console.log("Scissors cut paper! You win!");

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return console.log("You lose. Paper covers Rock")

    } else {
        console.log("Oops! Something went wrong");
    }     
}
playRound();