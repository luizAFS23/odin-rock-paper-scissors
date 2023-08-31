function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomchoice = Math.floor(Math.random() * (choice.length - 1 - 0 + 1)) + 0;
    return choice[randomchoice];
}

const userChoice = prompt("Choose between rock, paper and scissors (Exactly like this!");
console.log(getComputerChoice());