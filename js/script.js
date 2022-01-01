const pingPongCanvas = document.getElementById("pingPongCanvas");
const ctx = pingPongCanvas.getContext("2d");

const canvasHeight = pingPongCanvas.height;
const canvasWidth = pingPongCanvas.width;

const paddleWidth = 30;
const paddleHeight = 100;
const paddleP1_X = 10;
const paddleP1_Y = 300;
const paddleP2_X = 860;
const paddleP2_Y = 100;
const paddleStart_Y = (canvasHeight - paddleHeight) / 2;
const ball_R = 10;
const ballStart_X = canvasWidth / 2;
const ballStart_Y = canvasHeight / 2;
const ballSpeedStart_X = 3;
const ballSpeedStart_Y = 2;

let ball_X = ballStart_X;
let ball_Y = ballStart_Y;
let ballSpeed_X = ballSpeedStart_X;
let ballSpeed_Y = ballSpeedStart_Y;
let P1points = 0;
let P2points = 0;

drawPaddle = (x, y) => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, paddleWidth, paddleHeight);
}

drawPaddle(paddleP1_X, paddleP1_Y);
drawPaddle(paddleP2_X, paddleP2_Y);

drawBall = (ballStart_X, ballStart_Y, ball_R) => {
    ctx.beginPath();
    ctx.arc(ballStart_X, ballStart_Y, ball_R, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = "#000000";
    ctx.fill();
}

drawBall(ballStart_X, ballStart_Y, ball_R);

clearCanvas = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}