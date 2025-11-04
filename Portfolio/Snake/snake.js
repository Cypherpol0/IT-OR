const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const cellSize = 20;

let snake = [{ x: 150, y: 150 }];
let direction = { x: 0, y: 0 };
let food = { x: 300, y: 300 };
const scoreElement = document.getElementById("score");
let score = 0;
const startButton = document.getElementById("startButton");

let gameInterval = null;

// place food at a random grid-aligned position
function placeFood() {
  food = {
    x: Math.floor(Math.random() * ((canvas.width - 10) / cellSize)) * cellSize,
    y: Math.floor(Math.random() * ((canvas.height - 10) / cellSize)) * cellSize
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 0.5 * cellSize, 0.5 * cellSize);

  // Draw snake
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
  });
}

function update() {
  const head = {
    x: snake[0].x + direction.x * cellSize,
    y: snake[0].y + direction.y * cellSize
  };

  // move head
  snake.unshift(head);

  // check collision with food
  const foodW = 0.5 * cellSize;
  const foodH = 0.5 * cellSize;

  const headLeft = head.x;
  const headRight = head.x + cellSize;
  const headTop = head.y;
  const headBottom = head.y + cellSize;

  const foodLeft = food.x;
  const foodRight = food.x + foodW;
  const foodTop = food.y;
  const foodBottom = food.y + foodH;

  const collided =
    headLeft < foodRight &&
    headRight > foodLeft &&
    headTop < foodBottom &&
    headBottom > foodTop;

  if (collided) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    placeFood(); // generate new food; snake grows because we don't pop()
  } else {
    // normal move: remove tail
    snake.pop();
  }

  // boundary collision => game over
  if (
    head.x < 0 || head.y < 0 ||
    head.x >= canvas.width || head.y >= canvas.height
  ) {
    endGame("Hit the wall!");
  }

  // self collision => game over
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      endGame("You ran into yourself!");
    }
  }
}

function gameTick() {
  // only update when direction is non-zero (optional)
  if (direction.x !== 0 || direction.y !== 0) {
    update();
  }
  draw();
}

function startGame() {
  // initialise state
  snake = [{ x: 150, y: 150 }];
  direction = { x: 0, y: 0 };
  placeFood();
  score = 0;
  scoreElement.textContent = `Score: ${score}`;

  // clear any existing interval
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(gameTick, 100);

  startButton.disabled = true;
}

function endGame(message) {
  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
  }
  startButton.disabled = false;
  // show message (you can change this to a DOM element instead of alert)
  alert(`${message} Final score: ${score}`);
}

// prevent immediate reverse direction
function setDirection(newX, newY) {
  if (snake.length > 1) {
    const currentHead = snake[0];
    const next = { x: currentHead.x + direction.x * cellSize, y: currentHead.y + direction.y * cellSize };
    // disallow reversing direction if it would immediately collide with second segment
    if (snake[1] && snake[1].x === next.x && snake[1].y === next.y) {
      return;
    }
  }
  direction = { x: newX, y: newY };
}

// keyboard controls
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      setDirection(0, -1);
      break;
    case "ArrowDown":
    case "s":
      setDirection(0, 1);
      break;
    case "ArrowLeft":
    case "a":
      setDirection(-1, 0);
      break;
    case "ArrowRight":
    case "d":
      setDirection(1, 0);
      break;
    case " ":
      if (!gameInterval) startGame();
      break;
  }
});

startButton.addEventListener("click", startGame);

// initial draw
draw();