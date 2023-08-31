const prompt = require("prompt-sync")();

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}

function youLose(){
    return "You lose.";
}

function youWin(){
    return "You win!";
}

function playRound(userChoice, computerChoice){
    switch(userChoice){
        case userChoice == 'rock' && computerChoice == 'scissors':
            console.log(youWin());
            break;
        case userChoice == 'scissors' && computerChoice == 'rock':
            console.log(youLose());
            break;
        case userChoice == 'paper' && computerChoice == 'rock':
            console.log(youWin());
            break;
        case userChoice == 'paper' && computerChoice == 'scissors':
            console.log(youLose());
            break;
        default:
            console.log("Invalid choice.");
            break;
    }
}

const userChoice = prompt("Choose between rock, paper and scissors (Exactly like this!) ");
const computerChoice = getComputerChoice();

console.log(playRound(userChoice, computerChoice));