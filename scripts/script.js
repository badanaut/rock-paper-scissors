function getComputerChoice(){

    //1. define the choices
    let choices = ["rock", "paper", "scissors"]
    //2. select random item from array
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    //3.return selected item
    return computerChoice
}

function getPlayerSelection(){
    //ask player for selection
    let playerSelection = prompt("Your choice: ");
    //convert to lower case to avoid typo errors
    playerSelection = playerSelection.toLocaleLowerCase();
    //check if the choice is valid
    if (!["rock", "paper", "scissors"].includes(playerSelection)){
        playerSelection = prompt("Invalid selection, please select rock, paper or scissors. Your choice: ");
    }

    return playerSelection
}


function playRound(playerSelection = getPlayerSelection(), computerSelection = getComputerChoice()) {

    if (playerSelection===computerSelection){
        console.log("Draw. Both players selected " + playerSelection);
        return "draw";
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        console.log("You Lose! Paper beats Rock");
        return "computer";
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        console.log("You Win! Rock beats Scissors");
        return "player";
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        console.log("You Win! Paper beats Rock");
        return "player"
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        console.log("You Lose! Scissors beats Paper");
        return "computer"
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        console.log("You Lose! Rock beats Scissors");
        return "computer"
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        console.log("You Win! Scissors beats Paper");
        return "player"
    }
    
  }

  function game(){
    let roundNumber=1;
    let playerScore=0;
    let computerScore=0; 

    while(playerScore<5 && computerScore<5){
        // round number
        
        console.log("Round number " + roundNumber +":");
        let roundResult = playRound();
        
        if (roundResult==="draw"){
            roundNumber++;
            console.log("Score: Player " + playerScore + " : " + computerScore + " Computer")
        }
        else if(roundResult==="player"){
            roundNumber++;
            playerScore++;
            console.log("Score: Player " + playerScore + " : " + computerScore + " Computer")
        }
        else if(roundResult==="computer"){
            roundNumber++;
            computerScore++;
            console.log("Score: Player " + playerScore + " : " + computerScore + " Computer")
        }
     }
     if (playerScore>computerScore){
        console.log("Player wins!")
     }
     else{
        console.log("Computer wins!")
     }
  }