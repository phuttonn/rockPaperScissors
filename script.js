function computerChoice() {
    let rpsArray = ["Rock", "Paper", "Scissors"]; // create array to use for computerChoice
    let randomNumber = Math.floor(Math.random() * rpsArray.length); //takes random number and multiplies it by the length of rpsArray (3)
     return rpsArray[randomNumber]; // returns the string at that array position
}

let playerSelection = prompt("Make your Choice"); 

