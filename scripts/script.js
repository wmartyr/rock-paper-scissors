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
    document.getElementById("result").innerHTML = "Please choose rock, paper, or scissors. Try again.";
  }

}

// create a function called playRound
  // create a variable named playerSelection and assign the return value of playerPlay
  // create a variable named computerSelection and assign the return value of computerPlay
  // compare playerSelection with computerSelection based on the rules i.e. paper beats rock, rock beats scissors, scissors beats paper
  // display result

// console.log(computerPlay());