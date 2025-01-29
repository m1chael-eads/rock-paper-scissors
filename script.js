console.log('Hello World!')
humanScore = 0;
computerScore = 0;
function getComputerChoice() {
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1)
    { 
        choice = 'rock';
        return choice;
    }
    else if (number == 2)
    { 
        choice = 'paper';
        return choice;
    }
    else if (number == 3)
    { 
        choice = 'scissors';
        return choice;
    }
}
function getHumanChoice() {
    keepGoing = true;
    while (keepGoing) {
        playerChoice = prompt('Make your move').toLowerCase().trim();
        if (playerChoice == 'rock')
        { 
            return playerChoice;
        }
        else if (playerChoice == 'paper')
        { 
            return playerChoice;
        }
        else if (playerChoice == 'scissors')
        { 
            return playerChoice;
        }
        else {

        }
    }
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') 
    { 
        if (computerChoice == 'rock') {
            
        }
        else if (computerChoice == 'paper') {
            computerScore++;
        }
        else if (computerChoice == 'scissors') {
            humanScore++;
        }
    }
    else if (humanChoice == 'paper') 
     { 
        if (computerChoice == 'rock') {
            humanScore++;
        }
        else if (computerChoice == 'paper') {
            
        }
        else if (computerChoice == 'scissors') {
            computerScore++;
        }
     }
    else if (humanChoice == 'scissors') 
    { 
        if (computerChoice == 'rock') {
            computerScore++;
        }
        else if (computerChoice == 'paper') {
            humanScore++;
        }
        else if (computerChoice == 'scissors') {
            
        }
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection,computerSelection);
    }
    console.log(humanScore);
    console.log(computerScore);
}
playGame();
