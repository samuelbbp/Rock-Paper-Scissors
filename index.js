const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

// Función para obtener la elección del ordenador
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

// Función para mostrar el resultado en el div "show"
function displayResult(message) {
  show.textContent = message;
}

// Función que controla cada ronda
function playRound(humanChoice, computerChoice) {
  let resultMessage = "";

  if (humanChoice === rock && computerChoice === scissors) {
    humanScore++;
  } else if (humanChoice === rock && computerChoice === paper) {
    computerScore++;
  } else if (humanChoice === paper && computerChoice === rock) {
    humanScore++;
  } else if (humanChoice === paper && computerChoice === scissors) {
    computerScore++;
  } else if (humanChoice === scissors && computerChoice === paper) {
    humanScore++;
  } else if (humanChoice === scissors && computerChoice === rock) {
    computerScore++;
  } else if (humanChoice === computerChoice) {
  }
}

// Función que controla el juego completo
function playGame() {
  let gameResult = "";

  if (humanScore > computerScore) {
    gameResult =
      "¡Has ganado!, vuestra puntuación es de: " +
      humanScore +
      "," +
      computerScore;
  } else if (humanScore == computerScore) {
    gameResult =
      "¡Empate!, vuestra puntuación es de:" + humanScore + "," + computerScore;
  } else {
    gameResult =
      "¡Has perdido!, vuestra puntuación es de:" +
      humanScore +
      "," +
      computerScore;
  }

  displayResult(gameResult);

  // Condición para finalizar el juego cuando uno llega a 5 puntos
  if (humanScore == 5 || computerScore == 5) {
    displayResult(
      "Se acabó. " + (humanScore == 5 ? "¡Ganaste!" : "Has perdido.")
    );
    removeButtons(); // Desactivar botones cuando el juego termina
  }
}

// Función para desactivar los botones
function removeButtons() {
  rockButton.remove();
  paperButton.remove();
  scissorsButton.remove();
}

// Selección del DOM y creación de botones
const container = document.querySelector(".buttons");
const show = document.createElement("div");
const body = document.querySelector("body");
const container2 = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// Configuración de los botones y el contenedor
container.appendChild(rockButton);
container2.appendChild(show);
body.appendChild(container2);
container2.classList.add("container");
show.classList.add("show");
rockButton.textContent = "Piedra";
container.appendChild(paperButton);
paperButton.textContent = "Papel";
container.appendChild(scissorsButton);
scissorsButton.textContent = "Tijeras";

// Event listeners para los botones
rockButton.addEventListener("click", function () {
  humanChoice = rock;
  playRound(humanChoice, getComputerChoice());
  playGame();
});

paperButton.addEventListener("click", function () {
  humanChoice = paper;
  playRound(humanChoice, getComputerChoice());
  playGame();
});

scissorsButton.addEventListener("click", function () {
  humanChoice = scissors;
  playRound(humanChoice, getComputerChoice());
  playGame();
});
