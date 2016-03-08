////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move;
var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    var playerMove = (move || getInput());
        console.log('Player chose ' + playerMove)
        return playerMove;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

function getComputerMove(move) {
    var computerMove = randomPlay();
    console.log('Computer chose ' + computerMove);
    return computerMove;
}

function getWinner(getInput,randomPlay) {
    if (getInput === randomPlay) {
      return "It's a tie.";

    } else if (getInput === "rock" && randomPlay === "scissors") {
        winner = 'Player';
        console.log("You win!");

    } else if (getInput === "rock" && randomPlay === "paper") {
        winner = 'Computer';
        console.log ("Computer wins!");

    } else if (getInput === "paper" && randomPlay === "rock") {
      winner = 'Player';
      console.log("You win!");

    } else if (getInput === "paper" && randomPlay === "scissors") {
        winner = 'Computer';
        console.log ("Computer wins!");

    } else if (getInput === "scissors" && randomPlay === "paper") {
        winner = 'Player';
        console.log("You win!");

    } else if (getInput === "scissors" && randomPlay === "paper") {
        winner = 'Computer';
        console.log ("Computer wins!");

    } return winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of getInput and randomPlay.
    // Assume that the only values getInput and randomPlay can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors. First to five gets to live.");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
while (playerWins < 5 && computerWins < 5) {

  var userChoice = getPlayerMove();
  var computerChoice = getComputerMove();
  var winner = getWinner(userChoice, computerChoice);
  console.log(winner);

if (winner === 'Computer') {
  computerWins += 1;
  console.log("The computer wins! You will be exterminated!");

} else if (winner === 'Player') {
  playerWins += 1;
  console.log("You win!");

} else {
  console.log("It's a tie.");

}

    console.log ("player: " + playerWins + "computer: " + computerWins);
} if (playerWins === 5) {
    return "You have won this time, human!";
} else if (computerWins === 5) {
    return "Prepare to be eliminated!";
}
}

playToFive();
