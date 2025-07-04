let sum = 0;
let playerOne = 1;
let playerTwo = 2;

let arrayCheker = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function krestik(krest) {
    let div = document.createElement("div");
    let divRight = document.createElement("div");

    div.style.position = "absolute";
    div.style.top = "52%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%,-50%) rotate(45deg)";
    div.style.width = "5%";
    div.style.height = "60%";
    div.style.backgroundColor = "#ffd0fe";
    div.style.border = "2px solid #ffd0fe";

    divRight.style.position = "absolute";
    divRight.style.top = "50%";
    divRight.style.left = "50%";
    divRight.style.transform = "translateX(-50%) rotate(45deg)";
    divRight.style.width = "60%";
    divRight.style.height = "5%";
    divRight.style.backgroundColor = "#fe8eff";
    divRight.style.border = "2px solid #fe8eff";

    krest.appendChild(divRight);
    krest.appendChild(div);
    return krest;
}

function nolik(nol) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "10px";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "10px";
    div.style.backgroundImage = "linear-gradient(to left, #fe8eff, #ffd0fe)";
    div.style.borderColor = "#a12d91";
    div.style.borderRadius = "50%";
    div.style.width = "80%";
    div.style.height = "80%";
    nol.appendChild(div);
    return nol;
}

function arrCompletion(index, arr, perem) {
    let row = Math.floor(index / 3);
    let col = index % 3;
    if (arr[row][col] === 0) {
        arr[row][col] = perem;
        return true;
    }
    return false;
}

function checkWinner() {

    for (let i = 0; i < 3; i++) {
        if (arrayCheker[i][0] !== 0 && arrayCheker[i][0] === arrayCheker[i][1] && arrayCheker[i][1] === arrayCheker[i][2]) {
            return arrayCheker[i][0];
        }
        if (arrayCheker[0][i] !== 0 && arrayCheker[0][i] === arrayCheker[1][i] && arrayCheker[1][i] === arrayCheker[2][i]) {
            return arrayCheker[0][i];
        }
    }


    if (arrayCheker[0][0] !== 0 && arrayCheker[0][0] === arrayCheker[1][1] && arrayCheker[1][1] === arrayCheker[2][2]) {
        return arrayCheker[0][0];
    }
    if (arrayCheker[0][2] !== 0 && arrayCheker[0][2] === arrayCheker[1][1] && arrayCheker[1][1] === arrayCheker[2][0]) {
        return arrayCheker[0][2];
    }

    return 0;
}

function displayWinner(winner) {
    const message = winner === playerOne ? "Игрок 2 победил!" : "Игрок 1 победил!";
    alert(message);


    groupCell.forEach(el => {
        el.removeEventListener("click", handleClick);
    });


    if (confirm("Хотите сыграть еще раз?")) {
        resetGame();
    }
}

function handleClick(el, index) {
    if (arrCompletion(index, arrayCheker, (sum % 2 === 1) ? playerOne : playerTwo)) {
        if (sum % 2 === 1) {
            nolik(el);
        } else {
            krestik(el);
        }
        sum++;
        const winner = checkWinner();
        if (winner !== 0) {
            setTimeout(() => {
                displayWinner(winner);
            }, 50);
        }
    }
}

let groupCell = document.querySelectorAll(".game__monitor--krestnol div");
groupCell.forEach((el, index) => {
    el.addEventListener("click", function() {
        handleClick(el, index);
    });
});
function resetGame() {

    groupCell.forEach(el => {
        el.innerHTML = '';
        el.addEventListener("click", function() {
            handleClick(el, index);
        });
    });


    arrayCheker = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    sum = 0;
}