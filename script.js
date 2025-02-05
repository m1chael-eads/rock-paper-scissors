
humanScore = 0;
computerScore = 0;


const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
const container = document.querySelector("#container");
const results = document.createElement("div");
const gameMessage = document.createElement("h1");
gameMessage.textContent = "...";
const runningScore = document.createElement("h2");

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(results);

results.appendChild(gameMessage);
results.appendChild(runningScore);

rockBtn.addEventListener("click",() => {playRound("rock",getComputerChoice())});
paperBtn.addEventListener("click",() => {playRound("paper",getComputerChoice())});
scissorsBtn.addEventListener("click",() => {playRound("scissors",getComputerChoice())}); 



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
                gameMessage.textContent = "Tie!";
                updateRunningScore();
                }
            else if (computerChoice == 'paper') {
                computerScore++;
                gameMessage.textContent = "Computer Wins!";
                updateRunningScore();
                }
            else if (computerChoice == 'scissors') {
                humanScore++;
                gameMessage.textContent = "Human Wins!";
                updateRunningScore();
                }
            }
            else if (humanChoice == 'paper') 
             { 
                if (computerChoice == 'rock') {
                    humanScore++;
                    gameMessage.textContent = "Human Wins!";
                    updateRunningScore();
                }
                else if (computerChoice == 'paper') {
                    gameMessage.textContent = "Tie!";
                    updateRunningScore();
                }
                else if (computerChoice == 'scissors') {
                    computerScore++;
                    gameMessage.textContent = "Computer Wins!";
                    updateRunningScore();
                }
             }
            else if (humanChoice == 'scissors') 
            { 
                if (computerChoice == 'rock') {
                    computerScore++;
                    gameMessage.textContent = "Computer Wins!";
                    updateRunningScore();
                }
                else if (computerChoice == 'paper') {
                    humanScore++;
                    gameMessage.textContent = "Human Wins!";
                    updateRunningScore();
                }
                else if (computerChoice == 'scissors') {
                    gameMessage.textContent = "Tie!";
                    updateRunningScore();
                }
            } 
            
            if (isGameOver()) {
                if (humanScore > computerScore) 
                { 
                    gameMessage.textContent = "You Win The Game!";
                }
                else {
                    gameMessage.textContent = "Computer Wins The Game!";
                }
                humanScore = 0;
                computerScore = 0;
                console.log(humanScore);
                console.log(computerScore);
            }
            
    }


function isGameOver() {
    if (humanScore == 5 || computerScore == 5) return true;
    else return false;
}

function updateRunningScore() {
    runningScore.textContent = `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
    return runningScore
}



