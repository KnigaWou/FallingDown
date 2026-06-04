// 1. Получить доступ к холсту
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 2. Переменные игры (пока пустые)
let score = 0;

// 3. Функция рисования (пока просто заливка цветом)
function draw() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Игра работает!', 20, 50);
}

// 4. Запустить рисование
draw();

// 5. Проверить консоль
console.log('Игра загружена');
