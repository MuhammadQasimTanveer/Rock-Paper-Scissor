// Initialize score object (simple version without localStorage)
let score = {
    wins: 0,
    lose: 0,
    tie: 0
};

// Add event listeners for buttons
document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissor-button').addEventListener('click', () => {
    playGame('scissors');
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', () => {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    scoreUpdate();
    
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = "Make your move!";
    resultElement.className = 'result';  // Ye line add karo
    
    document.querySelector('.moves').innerHTML = "";
});

// Update score display
scoreUpdate();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
            score.lose++;
        } else if (computerMove === 'paper') {
            result = 'You win.';
            score.wins++;
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
            score.tie++;
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
            score.wins++;
        } else if (computerMove === 'paper') {
            result = 'Tie.';
            score.tie++;
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
            score.lose++;
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
            score.tie++;
        } else if (computerMove === 'paper') {
            result = 'You lose.';
            score.lose++;
        } else if (computerMove === 'scissors') {
            result = 'You win.';
            score.wins++;
        }
    }
    
    // Display result with colors
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = result;
    resultElement.className = 'result'; // Reset classes
    
    if (result === 'You win.') {
        resultElement.classList.add('win');
    } else if (result === 'You lose.') {
        resultElement.classList.add('lose');
    } else if (result === 'Tie.') {
        resultElement.classList.add('draw');
    }
    
    // Display moves with images - image upar, text neeche
    document.querySelector('.moves').innerHTML = 
        `<div class="player-choice">
            <img class="symbols" src="Images/${playerMove}-emoji.png">
            <span>You picked ${playerMove}</span>
        </div>
        <div class="computer-choice">
            <img class="symbols" src="Images/${computerMove}-emoji.png">
            <span>Computer picked ${computerMove}</span>
        </div>`;
    
    // Update score display
    scoreUpdate();
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    
    return computerMove;
}

function scoreUpdate() {
    document.querySelector('.Game-Stats').innerHTML = 
        `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`;
}