const prompt = require("prompt-sync")({sigint: true});

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}


function playRound(userChoice, computerChoice){
    if(userChoice == 'rock' && computerChoice == 'scissors'){
        return "You win!";
    }else if(userChoice == 'rock' && computerChoice == 'paper'){
        return "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'rock'){
        return "You win!";
    }else if(userChoice == 'paper' && computerChoice == 'scissors'){
        return "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'paper'){
        return "Draw!";
    }else if(userChoice == 'rock' && computerChoice == 'rock'){
        return "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'scissors'){
        return "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'paper'){
        return "You win!";
    }else if(userChoice == 'scissors' && computerChoice == 'rock'){
        return "You lose.";
    }else{
        return "Invalid choice.";
    }

}

const userSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(userSelection, computerSelection));