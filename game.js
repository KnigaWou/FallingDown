let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');


let backgroundImage = new Image();
backgroundImage.src = 'имя_вашего_файла.png';

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (backgroundImage.complete && backgroundImage.src) 
 {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
 }

draw();
