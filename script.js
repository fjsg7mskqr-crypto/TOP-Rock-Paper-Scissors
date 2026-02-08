
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}



function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}








function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Human Wins, Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Human Wins, Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Human Wins, Scissors beats Paper";
    } else if(computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "Computer Wins, Rock beats Scissors";
    } else if(computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "Computer Wins, Paper beats Rock";
    } else if(computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "Computer Wins, Scissors beats Paper";
    }
}
    for (let i = 0; i < 5; i++) {
       
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Score - Human " + humanScore + " Computer " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("Human Wins");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins");
    } else {
        console.log("Tie");
    }
}

playGame();

