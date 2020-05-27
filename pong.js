// select canvas
const canvas = document.getElementById("pong");

// Get the context of the canvas
const context = canvas.getContext("2d");

//draw rectangle 
function drawRect( x, y, w, h, color){

    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

drawRect( 100, 200, canvas.width, canvas.height, "Black");

//draw Circle
function drawCircle(x,y,r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}

drawCircle(100,100,50, "White")