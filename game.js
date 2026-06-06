// Переменная для высоты человечка
let peopleStateHeight = 700;
const NEW_IMAGE_SCALE = 0.232;  // Изменить размер изображений
 let isBraking = false;

let trampedFrames = [];      // массив для хранения кадров трубы
let currentFrame = 0;        // какой кадр сейчас показываем (0, 1 или 2)
let frameCounter = 0;        // счётчик для задержки между кадрами

let frameDelay = 100;      // СКОЛЬЖЕНИЕ: кадр меняется каждые 30 циклов (медленно)
let fastFrameDelay = 10;   // ПАДЕНИЕ: максимальная скорость — каждые 5 циклов (быстро)
let maxSpeedFrames = 300;  // Через 50 циклов падения достигаем максимальной скорости

let a = 333; // ШИРИНА РУК
let b = 600; // ВЫСОТА РУК
let c = 600; // Переменная высоты рук

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

function drawScaled(img) 
{
    if (img.complete) 
    {
        let w = img.width * NEW_IMAGE_SCALE;
        let h = img.height * NEW_IMAGE_SCALE;
        let x = (canvas.width - w) / 2;
        let y = (canvas.height - h) / 2;
        ctx.drawImage(img, x, y, w, h);
    }
}

let backgroundImage = new Image();
backgroundImage.src = 'pictures/Background.jpg';

let peopleImage = new Image();
peopleImage.src = 'pictures/people.png';

let trampedFrame0 = new Image();
trampedFrame0.src = 'pictures/tramped.png';

let trampedFrame1 = new Image();
trampedFrame1.src = 'pictures/tramped1.png';

let trampedFrame2 = new Image();
trampedFrame2.src = 'pictures/tramped2.png';

// Добавляем все кадры в массив trampedFrames
trampedFrames.push(trampedFrame0, trampedFrame1, trampedFrame2);

let peopleBrakingImage = new Image();
peopleBrakingImage.src = 'pictures/people_braking.png';

let buttonNormalImage = new Image();
buttonNormalImage.src = 'pictures/button_normal.png';

let buttonActiveImage = new Image();
buttonActiveImage.src = 'pictures/button_active.png';
//
let tableImage = new Image();
tableImage.src = 'pictures/flought_table.png';

let airoplaneImage = new Image();
airoplaneImage.src = 'pictures/flought_airoplane.png';

let mImage = new Image();
mImage.src = 'pictures/flought_m.png';

let msImage = new Image();
msImage.src = 'pictures/flought_ms.png';

let lineBImage = new Image();
lineBImage.src = 'pictures/lineB.png';

let lineSImage = new Image();
lineSImage.src = 'pictures/lineS.png';

let nmImage = new Image();
nmImage.src = 'pictures/nm.png';

function draw() //Рисуем
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем
    
    if (backgroundImage.complete && backgroundImage.src) 
    {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //ФОН

drawScaled(tableImage);
drawScaled(airoplaneImage);
drawScaled(mImage);
drawScaled(msImage);
drawScaled(lineBImage);
drawScaled(lineSImage);
drawScaled(nmImage);
     
let currentTramped = trampedFrames[currentFrame];
if (currentTramped && currentTramped.complete) {
    let trampedWidth = 350;
    let trampedX = (canvas.width - trampedWidth) / 2;
    ctx.drawImage(currentTramped, trampedX, 0, trampedWidth, canvas.height); //ТРУБА

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
const totalImages = 15;

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
peopleBrakingImage.onload = tryDraw;
buttonNormalImage.onload = tryDraw;
buttonActiveImage.onload = tryDraw;
tableImage.onload = tryDraw;
airoplaneImage.onload = tryDraw;
mImage.onload = tryDraw;
msImage.onload = tryDraw;
lineBImage.onload = tryDraw;
lineSImage.onload = tryDraw;
nmImage.onload = tryDraw;
trampedFrame0.onload = tryDraw;
trampedFrame1.onload = tryDraw;
trampedFrame2.onload = tryDraw;

// ФУНКЦИЯ АНИМАЦИИ ТРУБЫ
let brakingStartCounter = 0;

function updateAnimation() 
{
    let currentDelay;
    
    if (isBraking) {
        // РЕЖИМ ПАДЕНИЯ: плавное ускорение
        let speed = Math.min(brakingStartCounter / maxSpeedFrames, 1);
        currentDelay = frameDelay - (frameDelay - fastFrameDelay) * speed;
        brakingStartCounter++;
    } else {
        // РЕЖИМ СКОЛЬЖЕНИЯ: постоянная скорость
        currentDelay = frameDelay;
        brakingStartCounter = 0;
    }
    
    frameCounter++;
    if (frameCounter >= currentDelay) {
        frameCounter = 0;
        currentFrame = (currentFrame + 1) % trampedFrames.length;
        draw();
    }
}
// ЗАПУСКАЕМ АНИМАЦИЮ (каждые 50 миллисекунд)
setInterval(updateAnimation, 50);
