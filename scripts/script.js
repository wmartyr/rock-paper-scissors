console.log("Test");

// create a function called computerPlay
// return 'rock', 'paper', or 'scissors' randomly
// get a random number between 1 and 3 inclusive
// if number is 1, return 'rock
// if number is 2, return 'paper'
// if number is 3, return 'scissors'

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

// create a function called playerSelection
// check if selection is valid
// return formatted answer
// return "Error" if answer is not valid.

function formatAnswer(choice) {
  choiceFormatted = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  if (choiceFormatted == "Rock" || choiceFormatted == "Paper" || choiceFormatted == "Scissors") {
    return choiceFormatted;
  } else {
    return "Error";
  }
}

// create a function called playRound
  // compare playerSelection with computerSelection based on the rules i.e. paper beats rock, rock beats scissors, scissors beats paper
  // increment score of the winner
  // return result

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

// create a function named game
  // create a variable named playerScore with an initial value of 0 that would keep track of player's score.
  // create a variable named computerScore with an initial value of 0 that would keep track of computer's score.
  // create a loop that would run 5 times
    // run computerPlay and save in computerSelection
    // prompt user for choice.
    // run formatAnswer to format choice.
    // if choice is in the wrong format, prompt user again.
    // save player's choice in playerSelection.
    // run playRound
    // display result of round
  // determine the final winner and display the final result.

function game() {
  playerSelection = "Error";
  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    while (playerSelection == "Error") {
      choice = prompt("Enter a choice between Rock, Paper, or Scissors");
      playerSelection = formatAnswer(choice);
    }
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You won " + playerScore + " to " + computerScore + "!")
  } else {
    console.log ("Better luck next time. You lost " + computerScore + " to " + playerScore + "!")
  }
}

// create a variable named playerSelection.
// create a variable named computerSelection.
// create a variable named choice
// create a variable named playerScore and set to 0;
// create a variable named computerScore and set to 0;
let playerSelection;
let computerSelection;
let choice;
let playerScore = 0;
let computerScore = 0;
game();