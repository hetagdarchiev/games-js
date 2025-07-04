let apple = document.querySelector(".apple");
let snakeHead = document.querySelector(".snake__head");
let monitor = document.querySelector(".game__monitor--snake");
let inputSnake = document.querySelector(".snake__input");

let windowWidth = monitor.offsetWidth;

let leftPos = Math.ceil(Math.random() * (windowWidth - 10) + 10);
let TopPos = Math.ceil(Math.random() * 500);

apple.style.left = `${leftPos}px`;
apple.style.top = `${TopPos}px`;


let x = 0;
let y = 0;
const speed = 5;

inputSnake.addEventListener("keydown", function (e) {
    if (e.keyCode === 68) {
        obj.moveCharacterRight()
    } else if (e.keyCode === 65) {
        obj.moveCharacterLeft()
    }
})

let obj =
    {
        moveCharacterRight: function () {
            x += speed;
            snakeHead.style.left = x + 'px';
            if (x > window.innerWidth - snakeHead.offsetWidth) {
                x = window.innerWidth - snakeHead.offsetWidth;
            }
        },
        moveCharacterLeft: function () {
            x -= speed;
            snakeHead.style.left = x + 'px';
            if (x > window.innerWidth - snakeHead.offsetWidth) {
                x = window.innerWidth - snakeHead.offsetWidth;
            }
        }
    }




