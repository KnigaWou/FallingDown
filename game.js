let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'pictures/Background.jpg';

let trampedImage = new Image();
trampedImage.src = 'pictures/tramped.png';

let peopleImage = new Image();
peopleImage.src = 'pictures/people.png';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (backgroundImage.complete && backgroundImage.src) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            if (trampedImage.complete && trampedImage.src) {
            let pipeWidth = 350;
            let pipeX = (canvas.width - pipeWidth) / 2;
            ctx.drawImage(trampedImage, pipeX, 0, pipeWidth, canvas.height);

            if (peopleImage.complete && peopleImage.src) {
            let pipeWidth = 300;
            let pipeHeigh = 900;
            let pipeX = (canvas.width - pipeWidth) / 2;
            ctx.drawImage(peopleImage, pipeX, 0, pipeWidth, pipeHeigh);
            }
            }
    }
}

draw();
