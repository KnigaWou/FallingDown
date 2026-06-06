// Переменная для высоты человечка
let peopleStateHeight = 700;
 let isBraking = false;

let a = 333; // ШИРИНА РУК
let b = 333; // ВЫСОТА РУК
let c = 130; // Переменная высоты рук

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'pictures/Background.jpg';

let peopleImage = new Image();
peopleImage.src = 'pictures/people.png';

let trampedImage = new Image();
trampedImage.src = 'pictures/tramped.png';

let peopleBrakingImage = new Image();
peopleBrakingImage.src = 'pictures/people_braking.png';

let buttonNormalImage = new Image();
buttonNormalImage.src = 'pictures/button_normal.png';

let buttonActiveImage = new Image();
buttonActiveImage.src = 'pictures/button_active.png';


function draw() //Рисуем
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем
    
    if (backgroundImage.complete && backgroundImage.src) 
    {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //ФОН

        if (trampedImage.complete && trampedImage.src) {
            let trampedWidth = 350;
            let trampedX = (canvas.width - trampedWidth) / 2;
            ctx.drawImage(trampedImage, trampedX, 0, trampedWidth, canvas.height); //ТРУБА

            if (peopleImage.complete && peopleImage.src) {
                let peopleWidth = 370;
                let peopleHeight = 800;
                let peopleX = (canvas.width - peopleWidth) / 2;  
                let peopleY = (canvas.height - peopleStateHeight) / 2; // ЧЕЛОВЕК 1
                // Если кнопка нажата И картинка с руками загружена
                if (isBraking && peopleBrakingImage.complete) 
                {
                ctx.drawImage(peopleBrakingImage, peopleX, peopleY, peopleWidth, peopleHeight); // ЧЕЛОВЕК 2
                } else 
                {
                ctx.drawImage(peopleImage, peopleX, peopleY, peopleWidth, peopleHeight);
                }
            }
        }
    }
                    let handsWidth = a;
                let handsHeight = b;
                let handsX = (canvas.width - handsWidth) / 2; 
                let handsY = (canvas.height - c) / 2;
        // Рисуем руки, выбираем картинку в зависимости от isBraking
                if (isBraking && buttonActiveImage.complete) 
                {
                ctx.drawImage(buttonActiveImage, handsX, handsY, handsWidth, handsHeight); // РУКИ 1
                } 
                else if (buttonNormalImage.complete) 
                {
                ctx.drawImage(buttonNormalImage, handsX, handsY, handsWidth, handsHeight); //РУКИ 2
                }
}

// Функция ожидания загрузки всех изображений
let imagesLoaded = 0;
const totalImages = 6;

// Проверка, попал ли клик в область рук
function isClickOnHands(clickX, clickY) 
{
    let handsWidth = a; // ШИРИНА РУК
    let handsHeight = b; // ВЫСОТА РУК
    let handsX = (canvas.width - handsWidth) / 2; 
    let handsY = (canvas.height - c) / 2;
    
    return (clickX >= handsX && clickX <= handsX + handsWidth &&
            clickY >= handsY && clickY <= handsY + handsHeight);
}
// Нажатие мыши на холсте
canvas.addEventListener('mousedown', function(e) {
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    let mouseX = (e.clientX - rect.left) * scaleX;
    let mouseY = (e.clientY - rect.top) * scaleY;
    
    if (isClickOnHands(mouseX, mouseY)) {
        isBraking = true;
        draw();
    }
});
// Отпускание мыши
canvas.addEventListener('mouseup', function() {
    if (isBraking) {
        isBraking = false;
        draw();
    }
});
// Клавиша Пробел (нажатие)
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Space') {
        isBraking = true;
        draw();
        e.preventDefault(); // чтобы страница не прокручивалась
    }
});

// Клавиша Пробел (отпускание)
document.addEventListener('keyup', function(e) {
    if (e.key === ' ' || e.key === 'Space') {
        isBraking = false;
        draw();
    }
});

function tryDraw() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) 
    {
        draw();
    }
}

backgroundImage.onload = tryDraw;
peopleImage.onload = tryDraw;
trampedImage.onload = tryDraw;
peopleBrakingImage.onload = tryDraw;
buttonNormalImage.onload = tryDraw;
buttonActiveImage.onload = tryDraw;
