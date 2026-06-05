let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'ваша_картинка.png';

//let pipeImage = new Image();
//pipeImage.src = 'труба.png';  // если нет картинки, закомментируйте

let playerX = canvas.width / 2 - 25;
let playerY = 100;
let playerWidth = 50;
let playerHeight = 50;
let speed = 5;
let isBraking = false;

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (backgroundImage.complete && backgroundImage.src) 
    {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }
}
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Arial';  
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 3;
    ctx.fillText('Скорость: ' + speed, 20, 40);
    let distanceToBottom = canvas.height - playerY - playerHeight;
    ctx.fillText('До низа: ' + Math.floor(distanceToBottom) + 'px', 20, 70);
    ctx.shadowColor = 'transparent';
draw();
// Запускаем рисование сразу после загрузки
