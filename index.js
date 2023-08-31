
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}


function playRound(userChoice, computerChoice){
    if(userChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You win!");
    }else if(userChoice == 'rock' && computerChoice == 'paper'){
        console.log("You lose.");
    }else if(userChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win!");
    }else if(userChoice == 'paper' && computerChoice == 'scissors'){
        console.log("You lose.");
    }else if(userChoice == 'paper' && computerChoice == 'paper'){
        console.log("Draw!");
    }else if(userChoice == 'rock' && computerChoice == 'rock'){
        console.log("Draw!");
    }else if(userChoice == 'scissors' && computerChoice == 'scissors'){
        console.log("Draw!");
    }else if(userChoice == 'scissors' && computerChoice == 'paper'){
        console.log("You win!");
    }else if(userChoice == 'scissors' && computerChoice == 'rock'){
        console.log("You lose.");
    }else{
        console.log("Invalid choice.");
    }

}


const userSelection = window.prompt("Please choose between rock, paper and scissors! ").toLowerCase();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);