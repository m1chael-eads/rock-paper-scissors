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
            console.log('Tie!')
        }
        else if (computerChoice == 'paper') {
            computerScore++;
            console.log('Computer wins!')
        }
        else if (computerChoice == 'scissors') {
            humanScore++;
            console.log('Human wins!')
        }
    }
    else if (humanChoice == 'paper') 
     { 
        if (computerChoice == 'rock') {
            humanScore++;
            console.log('Human wins!')
        }
        else if (computerChoice == 'paper') {
            console.log('Tie!')
        }
        else if (computerChoice == 'scissors') {
            computerScore++;
            console.log('Computer wins!')
        }
     }
    else if (humanChoice == 'scissors') 
    { 
        if (computerChoice == 'rock') {
            computerScore++;
            console.log('Computer wins!')
        }
        else if (computerChoice == 'paper') {
            humanScore++;
            console.log('Human wins!')
        }
        else if (computerChoice == 'scissors') {
            console.log('Tie!')
        }
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log(humanScore);
    console.log(computerScore);
}
playGame();
