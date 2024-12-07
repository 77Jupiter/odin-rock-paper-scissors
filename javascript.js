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
 
function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock') {
    switch (computerChoice) {
      case 'rock':
        console.log("Tie! Rock can't beat Rock");
        break;
      case 'paper':
        computerScore++;
        console.log('You lose! Paper beats Rock');
        break;
      case 'scissors':
        humanScore++;
        console.log('You win! Rock beats Scissors');
    }
  } else if (humanChoice === 'paper') {
    switch (computerChoice) {
      case 'rock':
        humanScore++;
        console.log('You win! Paper beats Rock');
        break;
      case 'paper': 
        console.log("Tie! Paper can't beat Paper");
        break;
      case 'scissors':
        computerScore++;
        console.log('You lose! Scissors beats Paper');
        break;
    }
  } else if (humanChoice === 'scissors') {
    switch (computerChoice) {
      case 'rock':
        computerScore++;
        console.log('You lose! Rock beats Scissors');
        break;
      case 'paper': 
        humanScore++;
        console.log('You win! Scissors beats Paper');
        break;
      case 'scissors':
        console.log("Tie! Scissors can't beat Scissors");
        break;
    }
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);


