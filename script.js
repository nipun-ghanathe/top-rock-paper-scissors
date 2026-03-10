let choices = ["rock", "paper", "scissors"];

let wins_against = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound() {
  let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(`Your choice: ${playerChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);

  if (playerChoice == computerChoice) {
    console.log("It's a tie");
  } else if (wins_against[playerChoice] === computerChoice) {
    console.log("You win");
  } else {
    console.log("Computer wins");
  }
}
