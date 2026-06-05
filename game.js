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
 } else 
    {
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.fillText('Загрузите картинку в папку', 50, 300);
        ctx.fillText('И измените имя файла в game.js', 50, 330);
    }
}

draw();
