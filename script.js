let CHOICES = ["rock", "paper", "scissor"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return CHOICES[getRandomInt(3)];
}

function getHumanChoice() {
  return prompt("Enter your choice (Rock, Paper, Scissor)");
}

function getWinner(humanChoice, computerChoice) {
  // Returns 0 if draw, 1 if human wins, -1 if computer wins
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return 0;
        case "paper":
          return -1;
        case "scissor":
          return 1;
      }
    case "paper":
      switch (computerChoice) {
        case "rock":
          return 1;
        case "paper":
          return 0;
        case "scissor":
          return -1;
      }
    case "scissor":
      switch (computerChoice) {
        case "rock":
          return -1;
        case "paper":
          return 1;
        case "scissor":
          return 0;
      }
  }
}

function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
  console.log(`You chose '${humanChoice}'`);

  let computerChoice = getComputerChoice();
  console.log(`The computer chose '${computerChoice}'`);

  return getWinner(humanChoice, computerChoice);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Playing round ${i + 1}...`);

    let result = playRound();

    if (result == 1) {
      console.log("You Win!");
      humanScore += 1;
    } else if (result == -1) {
      console.log("You Lose!");
      computerScore += 1;
    } else {
      console.log("It was a draw!");
    }

    // Print a blank line
    console.log("\n");
  }
}

playGame();
