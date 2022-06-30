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

// format the player's answer and return it or "Error" if invalid

// function formatAnswer(choice) {
//   choiceFormatted = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//   if (choiceFormatted == "Rock" || choiceFormatted == "Paper" || choiceFormatted == "Scissors") {
//     return choiceFormatted;
//   } else {
//     return "Error";
//   }
// }

// play 1 round comparing player and computer choices

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
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});









// play 5 rounds and output the result

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playerSelection = "Error";
//     computerSelection = computerPlay();
//     while (playerSelection == "Error") {
//       playerChoice = prompt("Enter a choice between Rock, Paper, or Scissors");
//       playerSelection = formatAnswer(playerChoice);
//     }
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   if (playerScore > computerScore) {
//     console.log("Congratulations! You won " + playerScore + " to " + computerScore + "!")
//   } else {
//     console.log("Better luck next time. You lost " + computerScore + " to " + playerScore + "!")
//   }
// }

// let playerSelection;
// let computerSelection;
// game();