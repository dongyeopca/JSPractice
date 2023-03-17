const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(20, 40, 50, 50); //도형 (좌상단 모서리로부터의 좌표,가로,세로)
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

//ball
let ballRadius = 10;
let x = ballRadius;
let y = ballRadius;
let dx = 3;
let dy = 3;

//paddle
let paddleHeight = 10;
let paddleWidth = 70;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleSpeed = 5;

//bricks
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 10;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawball();
  drawPaddle();
  collisionDetection();
  drawScore();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx *= -1;
  }
  if (y + dy < ballRadius) {
    dy *= -1;
  } else if (y + dy > canvas.height - paddleHeight - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy *= -1;
    } else {
      live--;
      x = 30;
      y = 40;
      if (live == 0) {
        alert('you dead');
        document.location.reload();
        return;
      }
    }
  }
  x += dx;
  y += dy;
  if (paddleX > 0 && leftPressed) {
    paddleX -= paddleSpeed;
  } else if (paddleX < canvas.width - paddleWidth && rightPressed) {
    paddleX += paddleSpeed;
  }
  requestAnimationFrame(draw);
}

function drawball() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2); //x,y좌표,반지름,라디안,그리는 방향
  ctx.fillStyle = 'orange'; //도형 색
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight * 2, paddleWidth, paddleHeight);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();
}

let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

for (let i = 0; i < brickColumnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRowCount; j++) {
    bricks[i].push({ x: 0, y: 0, status: 1 });
  }
  bricks.push(bricks[i]);
}
console.log(bricks);
function drawBricks() {
  for (let i = 0; i < brickColumnCount; i++) {
    for (let j = 0; j < brickRowCount; j++) {
      if (bricks[i][j].status) {
        bricks[i][j].x = i * (brickWidth + brickPadding) + brickOffsetLeft;
        bricks[i][j].y = j * (brickHeight + brickPadding) + brickOffsetTop;
        ctx.beginPath();
        ctx.rect(bricks[i][j].x, bricks[i][j].y, brickWidth, brickHeight);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  bricks.forEach((rows) =>
    rows.forEach((item) => {
      if (item.status && x > item.x && x < item.x + brickWidth && y > item.y && y < item.y + brickHeight) {
        dy *= -1;
        item.status = 0;
        score++;
        if (score == brickRowCount * brickColumnCount) {
          alert('you win');
          document.location.reload();
        }
      }
    })
  );
}
let score = 0;

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Score:' + score, 8, 20);
  ctx.fillText('Lives:' + live, 100, 20);
}

let live = 3;

draw();
