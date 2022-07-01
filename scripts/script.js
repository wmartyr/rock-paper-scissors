let resultString;
let playerScore = 0;
let computerScore = 0;
let computerSelection;

// generate the computer's choice

function computerPlay() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return "Rock";
  } else if (randNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection) {
  computerSelection = computerPlay();
  switch (playerSelection) {
    case computerSelection:
      playerScore++;
      computerScore++;
      resultString = "It's a tie!";
      break;
    case "Rock":
      if (computerSelection == "Paper") {
        computerScore++;
        resultString = "You lose! Paper beats Rock.";
      } else {
        playerScore++;
        resultString = "You win! Rock beats Scissors";
      }
      break;
    case "Paper":
      if (computerSelection == "Rock") {
        playerScore++;
        resultString = "You win! Paper beats Rock.";
      } else {
        computerScore++;
        resultString = "You lose! Scissors beats Paper";
      }
      break;
    case "Scissors":
      if (computerSelection == "Rock") {
        computerScore++;
        resultString = "You lose! Rock beats Scissors";
      } else {
        playerScore++;
        resultString = "You win! Scissors beats Paper"
      }
      break;
  }
  const roundResult = document.querySelector("#roundResult");
  const runningScore = document.querySelector("#runningScore");
  const winner = document.querySelector("#winner");
  roundResult.textContent = resultString;
  runningScore.textContent = `Computer: ${computerScore}  Player: ${playerScore}`;
  if (playerScore === 5 && computerScore === 5) {
    winner.textContent = "It's a tie! 5 - 5"
  } else if (playerScore === 5) {
    winner.textContent = `Player wins 5 - ${computerScore}!`;
  } else if (computerScore === 5) {
    winner.textContent = `Computer wins 5 - ${playerScore}`;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "teal";
    setTimeout(() => { button.style.backgroundColor = "aquamarine"; }, 100);
    if (playerScore < 5 && computerScore < 5) {
      playRound(button.id);
    }
  });
});
