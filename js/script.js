const pingPongCanvas = document.getElementById("pingPongCanvas");
const ctx = pingPongCanvas.getContext("2d");

function drawPaddle(x, y) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 30, 100);
}

drawPaddle(860, 100);
drawPaddle(10, 300);