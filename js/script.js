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

drawActualState = () => {
    clearCanvas();
    drawPoints(P1points.toString(), p1points);
    drawPoints(P2points.toString(), p2points);
    drawBall(ball_X, ball_Y);
    drawPaddle(paddleP1_X, paddleP1_Y);
    drawPaddle(paddleP2_X, paddleP2_Y);
}

updateState = () => {
    ball_X += ballPosition_X;
    ball_Y += ballPosition_Y;
}

setInterval(updateStateAndDrawState = () => {
    updateState();
    drawActualState();
}, changeState);

drawPoints = () => {

}

//Paddle moving
window.addEventListener('keydown', (e) => {
    let code = e.code;
    if (code === "KeyA" && paddleP1_Y !== 0) {
        paddleP1_Y -= 10;
    } else if (code === "KeyZ" && paddleP1_Y !== 450) {
        paddleP1_Y += 10;
    } else if (code === "KeyK" && paddleP2_Y !== 0) {
        paddleP2_Y -= 10;
    } else if (code === "KeyM" && paddleP2_Y !== 450) {
        paddleP2_Y += 10;
    }
});