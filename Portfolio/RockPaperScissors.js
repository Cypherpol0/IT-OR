const choices = document.querySelectorAll("#rock, #paper, #scissors");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
let userScore = 0;
let computerScore = 0;
const computerChoices = ["rock", "paper", "scissors"];
const resetButton = document.getElementById("reset");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
         if (userScore < 5 && computerScore < 5) {
            const userChoice = choice.id;
            const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            determineWinner(userChoice, computerChoice);
        }
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper") && (userScore < 6 && computerScore < 6)
    ) {
        resultDisplay.textContent = "You win this round!";
        userScore++;
    } else {
        resultDisplay.textContent = "You lose this round!";
        computerScore++;
    }
    updateScore();
    if (userScore === 5 || computerScore === 5) {
        choices.forEach(choice => choice.disabled = true);
        
        if (userScore === 5) {
            resultDisplay.textContent = "Congratulations! You won the game! Click Reset to play again.";
        } else {
            resultDisplay.textContent = "Sorry, you lost the game. Click Reset to try again.";
        }
        
        resetButton.style.display = "block";

        resetButton.addEventListener("click", () => {
            resetGame();
            choices.forEach(choice => choice.disabled = false);
            resetButton.style.display = "none";
        });
    }
}

function updateScore() {
    scoreDisplay.textContent = `User: ${userScore} - Computer: ${computerScore}`;
}

function resetGame() {
        userScore = 0;
        computerScore = 0;
        updateScore();
        resultDisplay.textContent = "Make your move!";
}