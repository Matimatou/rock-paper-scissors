const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // an integer between 0 and 2
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // Convert the player selection to standard to make it case insensitive
    const result = choices.indexOf(playerSelection) - choices.indexOf(computerSelection);
    return result === 0
        ? `Draw ! You both choosed ${playerSelection}`
        : result === 1 || result === -2
            ? `You Won ! ${playerSelection} beats ${computerSelection}`
            : `You Lose ! ${computerSelection} beats ${playerSelection}`;
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
