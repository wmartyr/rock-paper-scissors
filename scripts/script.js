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
// get player choice
// check if selection is valid
// make player choose again if invalid
// format selection to correct case
// return player choice

function playerPlay() {
  let choice = document.getElementById("playerChoice").value;
  choiceFormatted = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  if (choiceFormatted == "Rock" || choiceFormatted == "Paper" || choiceFormatted == "Scissors") {
    document.getElementById("result").innerHTML = "";
    return choiceFormatted;
  } else {
    return "Error";
  }

}

// create a function called playRound
  // compare playerSelection with computerSelection based on the rules i.e. paper beats rock, rock beats scissors, scissors beats paper
  // display result

function playRound(playerSelection, computerSelection) { 
  switch (playerSelection) {
    case computerSelection:
      return "It's a tie!";
      break;
    case "Rock":
      if (computerSelection == "Paper") {
        return "You lose! Paper beats Rock.";
      } else {
        return "You win! Rock beats Scissors";
      }
      break;
    case "Paper":
      if (computerSelection == "Rock") {
        return "You win! Paper beats Rock.";
      } else {
        return "You lose! Scissors beats Paper";
      }
      break;
    case "Scissors":
      if (computerSelection == "Rock") {
        return "You lose! Rock beats Scissors";
      } else {
        return "You win! Scissors beats Paper"
      }
      break;
  }
}

// create a function named startPlay that would run playerPlay and save the result in playerSelection. And run computerPlay and save in computerSelection.
function startPlay() {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  console.log("player: " + playerSelection);
  console.log("computer: " + computerSelection);
  if (playerSelection == "Error") {
    document.getElementById("result").innerHTML = "Please choose rock, paper, or scissors. Try again.";
  } else {
    resultMessage = playRound(playerSelection, computerSelection);
    document.getElementById("result").innerHTML = resultMessage;
  }
}

// create a variable named playerSelection.
// create a variable named computerSelection.
let playerSelection;
let computerSelection;
let resultMessage;

// create a function named game
  // create a variable named playerScore with an initial value of 0 that would keep track of player's score.
  // create a variable named computerScore with an initial value of 0 that would keep track of computer's score.
  // create a loop that would run 5 times
    // run playRound
    // increment the score of the winner.
  // determine the final winner and display the result.