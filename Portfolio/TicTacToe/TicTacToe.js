const cells = document.getElementsByClassName("cell");
const reset = document.getElementById("reset");
const resultDisplay = document.getElementById("result");

let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        if (!cells[i].classList.contains("played")) {
            cells[i].textContent = currentPlayer;
            cells[i].classList.add("played");
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
        }
    });
    cells[i].addEventListener("click", checkWin);
}

reset.addEventListener("click", () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("played");
    }
    currentPlayer = "X";
    resultDisplay.textContent = "";
    document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
});

function checkWin() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
            resultDisplay.textContent = `Player ${cells[a].textContent} wins!`;
            disableCells();
            return;
        }
    }
    if (Array.from(cells).every(cell => cell.classList.contains("played"))) {
        resultDisplay.textContent = "It's a draw!";
    }
}

function disableCells() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add("played");
    }
}