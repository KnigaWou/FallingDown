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
        ctx.drawImage(trampedImage, 0, 0, canvas.width, canvas.height);
            }
    }
}

draw();
