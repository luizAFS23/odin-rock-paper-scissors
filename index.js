function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}   


let show = document.querySelector('div.show');
let btn_paper = document.querySelector('.btn-paper');
let btn_rock = document.querySelector('.btn-rock');
let btn_scissors = document.querySelector('.btn-scissors');


function playRound(userSelection) {
    let computerSelection = getComputerChoice();

    if(computerSelection === userSelection) {
        show.textContent = 'Drawn';
        userSelection = undefined;
    }

    if(userSelection === 'rock' && computerSelection === 'paper'){
        show.textContent = 'You lose.';
        userSelection = undefined;
    }else if(userSelection === 'rock' && computerSelection === 'scissors') {
        show.textContent = 'You win.';
        userSelection = undefined;
    }

    if(userSelection === 'paper' && computerSelection === 'rock'){
        show.textContent = 'You win.';
        userSelection = undefined;
    }else if(userSelection === 'paper' && computerSelection === 'scissors') {
        show.textContent = 'You lose.';
        userSelection = undefined;
    }

    if(userSelection === 'scissors' && computerSelection === 'paper'){
        show.textContent = 'You win.';
        userSelection = undefined;
    }else if(userSelection === 'scissors' && computerSelection === 'rock') {
        show.textContent = 'You lose.';
        userSelection = undefined;
    }
}

btn_scissors.addEventListener('click', () => {
    playRound('scissors');
});
btn_paper.addEventListener('click', () => {
    playRound('paper');
});
btn_rock.addEventListener('click', () => {
    playRound('rock');
});







