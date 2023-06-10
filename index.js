const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // an integer between 0 and 2
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // Convert the player selection to standard to make it case insensitive
    const result = choices.indexOf(playerSelection) - choices.indexOf(computerSelection);
    if (result === 0) {
        return `Draw! You both chose ${playerSelection}`;
    } else if (result === 1 || result === -2) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (result === -1 || result === 2) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Invalid selection. Please choose 'rock', 'paper', or 'scissors'.";
    }
}

function game(x) {
    let round = 0;
    while (round < x) {
        let choice = prompt("Your moov : ");
        console.log(playRound(choice, getComputerChoice()));
        round++;
    }
}

function printInfo() {
    console.log("Avaible moov : Rock, Paper, Scissors")
}

printInfo();
game(2);
