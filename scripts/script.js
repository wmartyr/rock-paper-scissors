console.log("Test");

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

function formatAnswer(choice) {
  choiceFormatted = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  if (choiceFormatted == "Rock" || choiceFormatted == "Paper" || choiceFormatted == "Scissors") {
    return choiceFormatted;
  } else {
    return "Error";
  }
}

// play 1 round comparing player and computer choices

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case computerSelection:
      return "It's a tie!";
      break;
    case "Rock":
      if (computerSelection == "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
      } else {
        playerScore++;
        return "You win! Rock beats Scissors";
      }
      break;
    case "Paper":
      if (computerSelection == "Rock") {
        playerScore++;
        return "You win! Paper beats Rock.";
      } else {
        computerScore++;
        return "You lose! Scissors beats Paper";
      }
      break;
    case "Scissors":
      if (computerSelection == "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
      } else {
        playerScore++;
        return "You win! Scissors beats Paper"
      }
      break;
  }
}

// play 5 rounds and output the result

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = "Error";
    computerSelection = computerPlay();
    while (playerSelection == "Error") {
      playerChoice = prompt("Enter a choice between Rock, Paper, or Scissors");
      playerSelection = formatAnswer(playerChoice);
    }
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You won " + playerScore + " to " + computerScore + "!")
  } else {
    console.log("Better luck next time. You lost " + computerScore + " to " + playerScore + "!")
  }
}

let playerSelection;
let computerSelection;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
game();