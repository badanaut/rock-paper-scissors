let playerScore=0;
let computerScore=0; 

const player_card = document.querySelector('#player-card')
const computer_card = document.querySelector('#computer-card')
const round_result = document.querySelector('#round-result')


const player_score = document.createElement("p");
const computer_score = document.createElement("p");
//set initial score
player_score.textContent = "0";
computer_score.textContent = "0";

player_card.appendChild(player_score);
computer_card.appendChild(computer_score);

// const btn = document.querySelectorAll(".btn")
// let playerSelection;
// btn.forEach((button => {
//     button.addEventListener('click',() => {
//         playerSelection = button.id;
//     });
// }));



function getComputerChoice(){

    //1. define the choices
    let choices = ["rock", "paper", "scissors"]
    //2. select random item from array
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    //3.return selected item
    return computerChoice
}

function playRound(playerSelection) {
    
    computerSelection = getComputerChoice()

    if (playerSelection===computerSelection){
        round_result.textContent = "Draw. Both players selected " + playerSelection;
        return
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        round_result.textContent = "You Lose! Rock is beaten by Paper";
        return
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        round_result.textContent = "You Win! Rock beats Scissors";
        return
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        round_result.textContent = "You Win! Paper beats Rock";
        return
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        computerScore++;
        round_result.textContent = "You Lose! Paper is beaten by Scissors";
        return
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        round_result.textContent = "You Lose! Scissors are beaten by Rock";
        return
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        playerScore++;
        round_result.textContent = "You Win! Scissors beats Paper";
        return
    }
    
 }

function scoreReset(){
    playerScore=0;
    computerScore=0; 
    player_score.textContent = "0";
    computer_score.textContent = "0";
    round_result.textContent = ""
}
// Get the modal
let modal = document.getElementById("myModal");
let modal_btn = document.getElementById("modal-btn");
let modal_message = document.getElementById("modal-message");

function displayWinner(winner){
    modal_message.textContent = winner;
    modal.style.display = "flex";
    modal.style.flex = center;
}

function game(playerSelection){
    if(playerScore<5 && computerScore<5){

        playRound(playerSelection);
        
        player_score.textContent = playerScore;
        computer_score.textContent = computerScore;
     }
     if (playerScore==5){
        displayWinner("You win!");
     }
     else if(computerScore==5){
        displayWinner("Computer win!");
     }
     
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      scoreReset();
    }
  }
// When the user clicks on button, close the modal
modal_btn.onclick = function() {
    modal.style.display = "none";
    scoreReset();
  }

  