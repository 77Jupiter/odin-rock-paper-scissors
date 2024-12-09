// Function to generate a computer move.
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

// Function for player to insert a player move.
function getHumanChoice() {
  const playerChoice = prompt('Pick a move: rock, paper, scissors').toLowerCase();
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    return playerChoice;
  } else {
    console.log('Please pick a valid move: rock, paper or scissors');
    return;
  }
}

// Function to play five rounds.
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a round, update and log a result and score.
  function playRound(humanChoice, computerChoice) {
    let result = '';
    if (humanChoice === 'rock') {
      switch (computerChoice) {
        case 'rock':
          result = 'Tie';
          break;
        case 'paper':
          result = 'Lose';
          break;
        case 'scissors':
          result = 'Win';
      }
    } else if (humanChoice === 'paper') {
      switch (computerChoice) {
        case 'rock':
          result = 'Win';
          break;
        case 'paper': 
          result = 'Tie';
          break;
        case 'scissors':
          result = 'Lose';
          break;
      }
    } else if (humanChoice === 'scissors') {
      switch (computerChoice) {
        case 'rock':
          result = 'Lose';
          break;
        case 'paper': 
          result = 'Win';
          break;
        case 'scissors':
          result = 'Tie';
          break;
      }
    }

    if (result === 'Win') {
      humanScore++;
      console.log(`You ${result}! ${humanChoice} beats ${computerChoice}`);
      console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    } else if (result === 'Lose') {
      computerScore++;
      console.log(`You ${result}! ${computerChoice} beats ${humanChoice}`);
      console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    } else {
      console.log(`${result}! ${computerChoice} can't beat ${humanChoice}`);
      console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
  } 
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === undefined) {
      return;
    } else {
      playRound(humanChoice, computerChoice);
    }   
  }
}

playGame();