// ========== 1. НАХОДИМ ХОЛСТ И КИСТОЧКУ ==========

let canvas = document.getElementById('gameCanvas');
// Находим на странице элемент с id="gameCanvas" и кладём в переменную canvas

let ctx = canvas.getContext('2d');
// Берём у холста "кисточку" для 2D рисования

// ========== 2. ЗАГРУЖАЕМ ВАШИ КАРТИНКИ ==========

// ЗАМЕНИТЕ 'ваша_картинка.png' на точное имя вашего файла!
let backgroundImage = new Image();
// Создаём новый объект "картинка"

backgroundImage.src = 'ваша_картинка.png';
// Указываем путь к файлу с картинкой

// Можно добавить вторую картинку для трубы (если есть)
let pipeImage = new Image();
pipeImage.src = 'труба.png';  // если нет картинки, закомментируйте

// ========== 3. ПЕРЕМЕННЫЕ ИГРОКА ==========

let playerX = canvas.width / 2 - 25;
// X-координата игрока: ширина холста / 2, минус половина ширины игрока = центр

let playerY = 100;
// Y-координата игрока: 100 пикселей от верха

let playerWidth = 50;
// Ширина игрока в пикселях

let playerHeight = 50;
// Высота игрока в пикселях

let speed = 5;
// Скорость скольжения вниз (пикселей за 50мс)

let isBraking = false;
// Переменная: тормозит ли игрок? (true = да, false = нет)

// ========== 4. ФУНКЦИЯ РИСОВАНИЯ ==========

function draw() {
    // Очищаем холст (стираем всё, что было нарисовано раньше)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // ========== РИСУЕМ ФОН (ВАША КАРТИНКА) ==========
    
    if (backgroundImage.complete && backgroundImage.src) {
        // Если картинка загрузилась (complete = true) и путь не пустой
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        // Рисуем картинку: (картинка, x, y, ширина, высота)
        // 0,0 — левый верхний угол, растягиваем на весь холст
    } else {
        // Если картинка не загрузилась — рисуем запасной фон
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // ========== РИСУЕМ ТРУБУ (если есть картинка) ==========
    
    if (pipeImage.complete && pipeImage.src) {
        // Левая стена трубы
        ctx.drawImage(pipeImage, 0, 0, 50, canvas.height);
        // Правая стена трубы
        ctx.drawImage(pipeImage, canvas.width - 50, 0, 50, canvas.height);
    } else {
        // Запасной вариант — серые прямоугольники
        ctx.fillStyle = '#555';
        ctx.fillRect(0, 0, 50, canvas.height);
        ctx.fillRect(canvas.width - 50, 0, 50, canvas.height);
    }
    
    // ========== РИСУЕМ ИГРОКА ==========
    
    // ВРЕМЕННО: красный квадрат (потом заменим на вашу картинку)
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    
    // ========== РИСУЕМ ТЕКСТ (скорость, расстояние) ==========
    
    ctx.fillStyle = 'white';
    // Цвет текста белый
    
    ctx.font = 'bold 16px Arial';
    // Шрифт: жирный, 16 пикселей, Arial
    
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 3;
    // Тень для текста (чтобы было видно на любом фоне)
    
    ctx.fillText('Скорость: ' + speed, 20, 40);
    // Рисуем текст: (текст, x, y)
    
    let distanceToBottom = canvas.height - playerY - playerHeight;
    // Вычисляем расстояние до низа (от низа игрока до низа холста)
    
    ctx.fillText('До низа: ' + Math.floor(distanceToBottom) + 'px', 20, 70);
    
    // Отключаем тень
    ctx.shadowColor = 'transparent';
    
    // ========== РИСУЕМ КНОПКУ "РУКИ" ==========
    
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    // Полупрозрачный чёрный цвет (0.6 = 60% непрозрачности)
    
    ctx.fillRect(canvas.width - 90, canvas.height - 70, 80, 60);
    // Кнопка в правом нижнем углу: (x, y, ширина, высота)
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('🖐️ РУКИ', canvas.width - 75, canvas.height - 30);
    // Текст на кнопке
}

// ========== 5. ДВИЖЕНИЕ ИГРОКА ==========

let gameInterval = setInterval(function() {
    // Этот код выполняется каждые 50 миллисекунд (20 раз в секунду)
    
    if (isBraking) {
        // Если игрок тормозит (зажал пробел/кнопку)
        playerY = playerY + speed * 0.3;
        // Двигаемся медленнее (30% от скорости)
    } else {
        // Если не тормозит
        playerY = playerY + speed;
        // Двигаемся с нормальной скоростью
    }
    
    // Проверяем, не достиг ли игрок низа
    if (playerY + playerHeight >= canvas.height) {
        // Если низ игрока коснулся или пересёк нижний край
        alert('ПОБЕДА! Вы достигли низа!');
        clearInterval(gameInterval);
        // Останавливаем игру
    }
    
    draw();
    // Перерисовываем экран с новыми координатами
}, 50);
// 50 миллисекунд = 0.05 секунды

// ========== 6. УПРАВЛЕНИЕ (КЛАВИАТУРА + МЫШЬ + ТЕЛЕФОН) ==========

// --- Клавиатура: ПРОБЕЛ ---
document.addEventListener('keydown', function(event) {
    // Когда нажали любую клавишу
    if (event.key === ' ' || event.key === 'Space') {
        // Если это пробел
        isBraking = true;
        // Начинаем тормозить
        event.preventDefault();
        // Отменяем стандартное действие пробела (прокрутку страницы)
    }
});

document.addEventListener('keyup', function(event) {
    // Когда отпустили клавишу
    if (event.key === ' ' || event.key === 'Space') {
        isBraking = false;
        // Перестаём тормозить
    }
});

// --- Мышь: зажатие левой кнопки на холсте ---
canvas.addEventListener('mousedown', function() {
    isBraking = true;
    // Зажали кнопку мыши → тормозим
});

canvas.addEventListener('mouseup', function() {
    isBraking = false;
    // Отпустили кнопку → не тормозим
});

// --- Телефон: касание экрана ---
canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    // Отменяем стандартное поведение (прокрутку)
    isBraking = true;
    // Палец на экране → тормозим
});

canvas.addEventListener('touchend', function(e) {
    e.preventDefault();
    isBraking = false;
    // Убрали палец → не тормозим
});

// ========== 7. ПЕРВЫЙ РИСУНОК ==========

draw();
// Запускаем рисование сразу после загрузки
