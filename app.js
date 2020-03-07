let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBase_div = document.querySelector(".score-base");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(playerSelection, computerSelection) {
    const userWord = "(user)🤓".fontsize(3).sub();
    const compWord = "(comp)🖥".fontsize(3).sub();   
    const playerSelection_div = document.getElementById(playerSelection);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerSelection}${userWord} beats ${computerSelection}${compWord}. You win! 😍`.fontsize(6);
    playerSelection_div.classList.add('green-animation');
    setTimeout(() => playerSelection_div.classList.remove('green-animation'), 1000);
}

function lose(playerSelection, computerSelection) {
    const userWord = "(user)🤓".fontsize(4).sub();
    const compWord = "(comp)🖥".fontsize(4).sub();
    const playerSelection_div = document.getElementById(playerSelection);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerSelection}${userWord} loses to ${computerSelection}${compWord}. You lose! 👎`.fontsize(6);
    playerSelection_div.classList.add('red-animation');
    setTimeout(() => playerSelection_div.classList.remove('red-animation'), 1000);
}

function draw(playerSelection, computerSelection) {
    const userWord = "(user)🤓".fontsize(4).sub();
    const compWord = "(comp)🖥".fontsize(4).sub();
    const playerSelection_div = document.getElementById(playerSelection);
    result_p.innerHTML = `${playerSelection}${userWord} and ${computerSelection}${compWord}. It's a draw.`.fontsize(6);
    playerSelection_div.classList.add('grey-animation');
    setTimeout(() => playerSelection_div.classList.remove('grey-animation'), 1000);
}

function game(playerSelection) {
   const computerSelection = computerPlay();
   switch (playerSelection + computerSelection) {
       case "RockScissors":
       case "PaperRock":
       case "ScissorsPaper":
           win(playerSelection, computerSelection);
           break;
       case "RockPaper":
       case "PaperScissors":
       case "ScissorsRock":
           lose(playerSelection, computerSelection);
           break;
       case "RockRock":
       case "PaperPaper":
       case "ScissorsScissors":
           draw(playerSelection, computerSelection);
           break;                               
   }
}

function main() {
rock_div.addEventListener('click', () => game("Rock"));

paper_div.addEventListener('click', () => game("Paper"));

scissors_div.addEventListener('click', () => game("Scissors"));
}

main();