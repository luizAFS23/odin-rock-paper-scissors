
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}

const result = document.querySelector('.result');
const show = document.querySelector('.show');

function playRound(userChoice, computerChoice){
    if(userChoice == 'rock' && computerChoice == 'scissors'){
        show.textContent = "You win!";
    }else if(userChoice == 'rock' && computerChoice == 'paper'){
        show.textContent = "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'rock'){
        show.textContent = "You win!";
    }else if(userChoice == 'paper' && computerChoice == 'scissors'){
        show.textContent = "You lose.";
    }else if(userChoice == 'paper' && computerChoice == 'paper'){
        show.textContent = "Draw!";
    }else if(userChoice == 'rock' && computerChoice == 'rock'){
        show.textContent = "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'scissors'){
        show.textContent = "Draw!";
    }else if(userChoice == 'scissors' && computerChoice == 'paper'){
        show.textContent = "You win!";
    }else if(userChoice == 'scissors' && computerChoice == 'rock'){
        show.textContent = "You lose.";
    }else{
        show.textContent = "Invalid choice.";
    }

}

let btn_paper = document.querySelector('.btn-paper');
let btn_rock = document.querySelector('.btn-rock');
let btn_scissors = document.querySelector('.btn-scissors');

let userSelection;
let computerSelection = getComputerChoice();

btn_paper.addEventListener('click', () => {
    userSelection = 'paper';
    playRound(userSelection, computerSelection);
})


btn_rock.addEventListener('click', () => {
    userSelection = 'rock';
    playRound(userSelection, computerSelection);
})

btn_scissors.addEventListener('click', () => {
    userSelection = 'scissors';
    playRound(userSelection, computerSelection);
})