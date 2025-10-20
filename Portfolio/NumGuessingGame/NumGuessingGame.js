const randomNumber = Math.floor(Math.random() * 100) + 1;
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

submitButton.addEventListener("click", () => {
    const userGuess = parseInt(document.getElementById("guess").value);
    if (userGuess === randomNumber) {
        resultDisplay.textContent = "Congratulations! You guessed the number!";
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = "Too low! Try again.";
    } else {
        resultDisplay.textContent = "Too high! Try again.";
    }
});
