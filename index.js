
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}

const result = document.querySelector('.result');

function playRound(userChoice, computerChoice){
    if(userChoice == 'rock' && computerChoice == 'scissors'){
        result.innerHTML = "You win!";
    }else if(userChoice == 'rock' && computerChoice == 'paper'){
        result.innerHTML = "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'rock'){
        result.innerHTML = "You win!";
    }else if(userChoice == 'paper' && computerChoice == 'scissors'){
        result.innerHTML = "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'paper'){
        result.innerHTML = "Draw!";
    }else if(userChoice == 'rock' && computerChoice == 'rock'){
        result.innerHTML = "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'scissors'){
        result.innerHTML = "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'paper'){
        result.innerHTML = "You win!";
    }else if(userChoice == 'scissors' && computerChoice == 'rock'){
        result.innerHTML = "You lose.";
    }else{
        result.innerHTML = "Invalid choice.";
    }

}

let btn_paper = document.querySelector('.btn-paper');
let btn_rock = document.querySelector('.btn-rock');
let btn_scissors = document.querySelector('.btn-scissors');


const userSelection = window.prompt("Please choose between rock, paper and scissors! ").toLowerCase();
const computerSelection = getComputerChoice();

btn_paper.addEventListener('click', () => {
    playRound(userSelection, computerSelection);
})
