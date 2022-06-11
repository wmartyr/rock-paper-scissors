console.log('Test');

// create a function called computerPlay
  // return 'rock', 'paper', or 'scissors' randomly
    // get a random number between 1 and 3 inclusive
    // if number is 1, return 'rock
    // if number is 2, return 'paper'
    // if number is 3, return 'scissors'

function computerPlay() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return 'Rock';
  } else if (randNum === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// create a function called playerSelection
  // get player choice
  // return player choice

// create a function called playRound
  // compare player selection with computer random selection
  // display result

console.log(computerPlay());