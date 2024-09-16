const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      choice = rock;
      break;
    case 1:
      choice = paper;
      break;
    case 2:
      choice = scissors;
      break;
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Elige piedra, papel o tijeras:");
  switch (choice.toLowerCase()) {
    case "piedra":
      choice = rock;
      break;
    case "papel":
      choice = paper;
      break;
    case "tijeras":
      choice = scissors;
      break;
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === rock && computerChoice === scissors) {
    humanScore++;
    console.log("¡Ganas esta ronda, genio! 🏆");
  } else if (humanChoice === rock && computerChoice === paper) {
    computerScore++;
    console.log("Pierdes, pringado. 💩");
  } else if (humanChoice === paper && computerChoice === rock) {
    humanScore++;
    console.log("¡Ganas esta ronda, crack! 🏆");
  } else if (humanChoice === paper && computerChoice === scissors) {
    computerScore++;
    console.log("Te han cortado con las tijeras. Pierdes. 💩");
  } else if (humanChoice === scissors && computerChoice === paper) {
    humanScore++;
    console.log("¡Cortas el papel! Ganas la ronda. 🏆");
  } else if (humanChoice === scissors && computerChoice === rock) {
    computerScore++;
    console.log("La roca te aplasta, palurdo. Pierdes. 💩");
  } else if (humanChoice === computerChoice) {
    console.log("Empate");
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(
      "¡Has ganado!, habeis quedado: " + humanScore + "," + computerScore
    );
  } else if (humanScore == computerScore) {
    console.log(
      "¡Empate!, habeis quedado: " + humanScore + "," + computerScore
    );
  } else {
    console.log(
      "¡Has perdido!, habeis quedado: " + humanScore + "," + computerScore
    );
  }
}

playGame();
