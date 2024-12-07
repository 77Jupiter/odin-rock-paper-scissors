let humanScore = 0;
let computerScore = 0;

// This function generates a computer choice by using Math.random() to generate a random number between 0 and 1 and then using that random number to determine which move is picked with a if statement
function getComputerChoice() { 
  const randomNumber = Math.random(); 
  let computerMove;
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper'; 
  } else if (randomNumber > 2 / 3 && randomNumber <= 3 / 3) {
    computerMove = 'scissors';
  }
  return computerMove;
}

// This function uses the prompt to allow a user to insert a player move. If the move does not equal to a valid move then the function logs a console message and returns. If the move is valid then it returns the playerChoice.
function getHumanChoice() {
  const playerChoice = prompt('Pick a move');
  console.log(playerChoice.toLowerCase());
  if (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors') {
    console.log('Please pick a valid move');
    return;
  }
  return playerChoice;
}
 
