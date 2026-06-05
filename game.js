let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let playerX = 100;
let playerY = 100;

function draw() 
{

    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, 50, 50);
}
draw();

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') playerX = playerX - 10;
    if (event.key === 'ArrowRight') playerX = playerX + 10;
    if (event.key === 'ArrowUp') playerY = playerY - 10;
    if (event.key === 'ArrowDown') playerY = playerY + 10;
    
    draw();
});
