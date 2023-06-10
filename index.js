let round = 0;
const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // an integer between 0 and 2
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    // Convert the player selection to standard to make it case insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

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
        round++;
    }
}

// First we shall get the buttons elements as a nodelist
const buttonsList = document.querySelectorAll("button");

// 
function play(e) {
    const choice = e.target.getAttribute("data-key");
    const message = playRound(choice, getComputerChoice());
    console.log(message);

    round++;
}
// Then we will apply to all buttons an eventlistener to get the moove that's been played
buttonsList.forEach((button) => {
    button.addEventListener("click", play)
});
/*
printInfo();
game(2);
*/
