let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'pictures/Background.jpg';

let peopleImage = new Image();
peopleImage.src = 'pictures/people.png';

let trampedImage = new Image();
trampedImage.src = 'pictures/tramped.png';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (backgroundImage.complete && backgroundImage.src) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            if (peopleImage.complete && peopleImage.src) {
            let peopleWidth = 500;
            let peopleHeight = 900;
            let peopleX = (canvas.width - peopleWidth) / 2;
            ctx.drawImage(peopleImage, peopleX, 0, peopleWidth, peopleHeight);
                
            if (trampedImage.complete && trampedImage.src) {
            let trampedWidth = 350;
            let trampedX = (canvas.width - trampedWidth) / 2;
            ctx.drawImage(trampedImage, trampedX, 0, trampedWidth, canvas.height);

            }
            }
    }
}

draw();
