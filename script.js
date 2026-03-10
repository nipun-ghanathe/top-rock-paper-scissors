let choices = ["rock", "paper", "scissors"];

let wins_against = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

let playerScore = 0;
let computerScore = 0;

/**
 * @param {"rock" | "paper" | "scissor"} playerChoice
 */
function playRound(playerChoice) {
  // Get computerChoice
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update choices on page
  const playerChoicePara = document.querySelector("p.player-choice");
  playerChoicePara.textContent = `Your choice: ${playerChoice}`;
  const computerChoicePara = document.querySelector("p.computer-choice");
  computerChoicePara.textContent = `Computer choice: ${computerChoice}`;

  // Get result and update score and resultPara
  const resultPara = document.querySelector("p.result");
  const playerScoreSpan = document.querySelector("span.player-score");
  const computerScoreSpan = document.querySelector("span.computer-score");

  if (playerChoice === computerChoice) {
    resultPara.textContent = "It's a tie";
  } else if (wins_against[playerChoice] === computerChoice) {
    resultPara.textContent = "You win";
    playerScoreSpan.textContent = ++playerScore;
  } else {
    resultPara.textContent = "Computer wins";
    computerScoreSpan.textContent = ++computerScore;
  }
}

// Add event listeners to choice buttons
const choiceButtons = document.querySelectorAll("button.choice");
for (let choiceButton of choiceButtons) {
  choiceButton.addEventListener("click", () => {
    playRound(choiceButton.textContent.toLowerCase());
  });
}

// Add event listener to reset button
const resetButton = document.querySelector("button.reset");
resetButton.addEventListener("click", () => {
  const playerScoreSpan = document.querySelector("span.player-score");
  const computerScoreSpan = document.querySelector("span.computer-score");

  playerScoreSpan.textContent = playerScore = 0;
  computerScoreSpan.textContent = computerScore = 0;
});
