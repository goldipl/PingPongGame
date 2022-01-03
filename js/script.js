const pingPongCanvas = document.getElementById("pingPongCanvas");
const ctx = pingPongCanvas.getContext("2d");
const p1points = document.querySelector("span.p1points");
const p2points = document.querySelector("span.p2points");

const canvasHeight = pingPongCanvas.height;
const canvasWidth = pingPongCanvas.width;

const paddleWidth = 30;
const paddleHeight = 100;
const paddleP1_X = 10;
let paddleP1_Y = 300;
const paddleP2_X = 860;
let paddleP2_Y = 100;
const paddleStart_Y = (canvasHeight - paddleHeight) / 2;
const ball_R = 10;
const ballStart_X = canvasWidth / 2;
const ballStart_Y = canvasHeight / 2;
const ballSpeedStart_X = 3;
const ballSpeedStart_Y = 2;
const changeState = 20;

let ball_X = ballStart_X;
let ball_Y = ballStart_Y;
let ballPosition_X = ballSpeedStart_X;
let ballPosition_Y = ballSpeedStart_Y;

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

clearCanvas = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

drawActualState = () => {
    clearCanvas();
    drawBall(ball_X, ball_Y, ball_R);
    drawPaddle(paddleP1_X, paddleP1_Y);
    drawPaddle(paddleP2_X, paddleP2_Y);
}

//Ball moving
ballOutsideLeft = () => ball_X + ball_R <= 0;
ballOutsideRight = () => ball_X - ball_R >= canvasWidth;
ballBounceFromBottom = () => ball_Y + ball_R >= canvasHeight;
ballBounceFromTop = () => ball_Y - ball_R <= 0;
// ballBounceFromPaddleP1 = () => // TO DO;
// ballBounceFromPaddleP2 = () => // TO DO;

updateState = () => {
    ball_X += ballPosition_X;
    ball_Y += ballPosition_Y;

    if (ballOutsideLeft()) {
        moveBalltoStartPosition();
        p2points.innerText++;
    } else if (ballOutsideRight()) {
        moveBalltoStartPosition();
        p1points.innerText++;
    }
    if (ballBounceFromBottom()) {
        ballPosition_X = -ballPosition_X + 5;
        ballPosition_Y = -ballPosition_Y;
    }
    if (ballBounceFromTop()) {
        ballPosition_X = -ballPosition_X + 5;
        ballPosition_Y = -ballPosition_Y;
    }
    // if (ballBounceFromPaddleP1() || ballBounceFromPaddleP2()) {
    //     // TO DO
    // }
}

moveBalltoStartPosition = () => {
    ball_X = ballStart_X;
    ball_Y = ballStart_Y;
}

setInterval(updateStateAndDrawState = () => {
    updateState();
    drawActualState();
}, changeState);



//Paddle moving
const paddle_Y_max = 450;
const paddle_Y_min = 0;
const paddle_Y_steps = 10;
let keys;

document.addEventListener("keydown", function(e) {
    keys = (keys || []);
    keys[e.keyCode] = true;
    //KeyA
    if (keys[65] && paddleP1_Y !== paddle_Y_min) {
        paddleP1_Y -= paddle_Y_steps;
    }
    //KeyZ
    if (keys[90] && paddleP1_Y !== paddle_Y_max) {
        paddleP1_Y += paddle_Y_steps;
    }
    //KeyK
    if (keys[75] && paddleP2_Y !== paddle_Y_min) {
        paddleP2_Y -= paddle_Y_steps;
    }
    //KeyM
    if (keys[77] && paddleP2_Y !== paddle_Y_max) {
        paddleP2_Y += paddle_Y_steps;
    }
}, false);

document.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
    stop();
}, false);