let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'pictures/Background.jpg';

let trampedImage = new Image();
trampedImage.src = 'pictures/tramped.jpg';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (backgroundImage.complete && backgroundImage.src) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            if (trampedImage.complete && trampedImage.src) {
            let pipeWidth = 60;
            let pipeX = (canvas.width - pipeWidth) / 2;
            ctx.drawImage(trampedImage, pipeX, 0, pipeWidth, canvas.height);
            }
    }
}

draw();
