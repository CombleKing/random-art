var canvasObject = document.getElementById("myCanvas");
var canvas = canvasObject.getContext("2d");

setInterval(drawShapes, 50);

function getRandomInt(min,max){
    return Math.floor(Math.random() *(max-min+1) + min);
}

function getRandomColor(alpha)
{
    var red = Math.floor(getRandomInt(0, 255));
    var green = Math.floor(getRandomInt(0,255));
    var blue = Math.floor(getRandomInt(0,255));
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha +")";
}

function drawShapes(){
    drawCircle();
}

function drawCircle(){
    var color = getRandomColor(1,0);
    var circleSize = getRandomInt(5,20);
    var randomXPosition = getRandomInt(0, canvasObject.width);
    var randomYposition = getRandomInt(0, canvasObject.height);
    canvas.beginPath();
    canvas.arc(randomXPosition, randomYposition, circleSize, 0, Math.PI *2);
    canvas.fillStyle = color;
    canvas.fill();
}
