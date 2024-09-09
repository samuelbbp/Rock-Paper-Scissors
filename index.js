const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let choice;
    let randomNumber = Math.random() * 3;

    if (randomNumber < 1) {
        choice = rock;
    } else if (randomNumber >= 1 && randomNumber < 2) {
        choice = paper;
    } else {
        choice = scissors;
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper or scissors");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === rock && computerChoice === scissors) {
            console.log("You win! rock beats scissors");
            humanScore = humanScore + 1;
        } else if (humanChoice === rock && computerChoice === paper) {
            console.log("You lose! paper beats rock");
            computerScore = computerScore + 1;
        } else if (humanChoice === rock && computerChoice === rock) {
            console.log("It's a draw!");
        } else if (humanChoice === paper && computerChoice === rock) {
            console.log("You win! paper beats rock");
            humanScore = humanScore + 1;
        } else if (humanChoice === paper && computerChoice === scissors) {
            console.log("You lose! scissors beats paper");
            computerScore = computerScore + 1;
        } else if (humanChoice === paper && computerChoice === paper) {
            console.log("It's a draw!");
        } else if (humanChoice === scissors && computerChoice === rock) {
            console.log("You lose! rock beats scissors");
            computerScore = computerScore + 1;
        } else if (humanChoice === scissors && computerChoice === paper) {
            console.log("You win! scissors beats paper");
            humanScore = humanScore + 1;
        } else if (humanChoice === scissors && computerChoice === scissors) {
            console.log("It's a draw!");
        }
    }

    // Llamadas a playRound cinco veces
    let humanChoice1 = getHumanChoice();
    let computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);

    let humanChoice2 = getHumanChoice();
    let computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

    let humanChoice3 = getHumanChoice();
    let computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);

    let humanChoice4 = getHumanChoice();
    let computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);

    let humanChoice5 = getHumanChoice();
    let computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame();
