const MAXROUND = 5;
const board = document.querySelector('.board');
const boardParentElement = document.querySelector('body');
let round = 1;
const choices = ['Rock', 'Paper', 'Scissors']
let score = { player: 0, computer: 0 };
function scoreToText(score) {
    return `Player : ${score["player"]} - Computer : ${score["computer"]}`;
}
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // an integer between 0 and 2
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    // Convert the player selection to standard to make it case insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    const result = choices.indexOf(playerSelection) - choices.indexOf(computerSelection);
    if (result === 0) {
        return { message: `Draw! You both chose ${playerSelection}`, winner: "null" };
    } else if (result === 1 || result === -2) {
        return { message: `You Won! ${playerSelection} beats ${computerSelection}`, winner: "player" };
    } else if (result === -1 || result === 2) {
        return { message: `You Lose! ${computerSelection} beats ${playerSelection}`, winner: "computer" };
    } else {
        return "Invalid selection. Please choose 'rock', 'paper', or 'scissors'.";
    }
}


// First we shall get the buttons elements as a nodelist
const buttonsList = document.querySelectorAll("button");

// Creating the displayDiv
const displayDiv = document.createElement('div');
// Create the two nodes element
const resultParagraph = document.createElement('p');
const scoreParagraph = document.createElement('p');
function createDisplayDiv() {
    // Style the main div 
    displayDiv.style.display = "flex";
    displayDiv.style.flexDirection = "column";
    displayDiv.style.alignItems = "center";
    displayDiv.style.gap = "5px";

    // Style the paragraph to get them closer
    resultParagraph.style.margin = scoreParagraph.style.margin = "5px";
    //displayDiv.style.pading = "10px";
    // Append the node
    displayDiv.appendChild(scoreParagraph);
    displayDiv.appendChild(resultParagraph);
    boardParentElement.insertBefore(displayDiv, board);

}
function displayDivInit() {
    // Add initial text
    resultParagraph.textContent = "No moov played";
    scoreParagraph.textContent = scoreToText(score);
}
function displayDivUpdate(dico) {
    const winner = dico["winner"]
    resultParagraph.textContent = dico["message"];
    if (!winner)
        return;
    score[winner]++
    scoreParagraph.textContent = scoreToText(score);
}
function isFinished() {
    if (score["computer"] == MAXROUND || score["player"] == MAXROUND) {
        let message;
        console.log("We entered the dunjeon");
        if (score["player"] == score["computer"])
            message = "Draw no one win";
        else {
            message = `The winner is ${score["player"] > score["computer"] ? "Player" : "Computer"}`;
        }
        console.log(message);
        resultParagraph.textContent = message;
        score = { player: 0, computer: 0 };
        round = 0;
        return true;
    }
    return false;
}
// 
function play(e) {
    console.log("Round : ", round);
    const choice = e.target.getAttribute("data-key");
    const dico = playRound(choice, getComputerChoice());
    console.log(dico["message"]);
    displayDivUpdate(dico);
    round++;
    if (isFinished(round))
        return;
    return;
}
createDisplayDiv();
displayDivInit();
// Display the running score 
// Then we will apply to all buttons an eventlistener to get the moove that's been played
buttonsList.forEach((button) => {
    button.addEventListener("click", play)
});
/*
printInfo();
game(2);
*/
