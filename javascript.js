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

// Function to play five rounds.
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rockButton = document.querySelector('.rock-button');
  const paperButton = document.querySelector('.paper-button');
  const scissorsButton = document.querySelector('.scissors-button');
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

    const resultDisplay = document.querySelector('.result');
    const scoreDisplay = document.querySelector('.score');
    if (humanScore === 5) {
      resultDisplay.textContent = `Victory! The Score has been reset.`;
      humanScore = 0;
      computerScore = 0;
      scoreDisplay.textContent = `Player Score: ${humanScore}, Computer Score: ${computerScore}`;
      return;
    } else if (computerScore === 5) {
      resultDisplay.textContent = `You have been defeated! The Score has been reset.`;
      humanScore = 0;
      computerScore = 0;
      scoreDisplay.textContent = `Player Score: ${humanScore}, Computer Score: ${computerScore}`;
      return;
    }

    if (result === 'Win') {
      humanScore++;
      resultDisplay.textContent = `You ${result}! ${humanChoice} beats ${computerChoice}`;
      scoreDisplay.textContent = `Player Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else if (result === 'Lose') {
      computerScore++;
      resultDisplay.textContent = `You ${result}! ${computerChoice} beats ${humanChoice}`;
      scoreDisplay.textContent = `Player Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else {
      resultDisplay.textContent = `${result}! ${computerChoice} can't beat ${humanChoice}`;
      scoreDisplay.textContent = `Player Score: ${humanScore}, Computer Score: ${computerScore}`;
    }
  }
  rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
  });
  paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  });
  scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
  });
}

playGame();