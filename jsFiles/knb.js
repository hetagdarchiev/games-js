let variable =
    {
        buttons: document.querySelectorAll(".game__monitor--knb--btn div"),
        computerMonitor: document.querySelector(".knb__monitor--right"),
        playerMonitor: document.querySelector(".knb__monitor--left"),
    }

function computerProcess(random, display) {
    if (random <= 33) {
        display.style.backgroundImage = "url(../images/rockPaperScissors/kamen.png)";
    } else if (random >= 66) {
        display.style.backgroundImage = "url(../images/rockPaperScissors/bum.png)";
    } else {
        display.style.backgroundImage = "url(../images/rockPaperScissors/noz.png)";
    }
}

function computerPlayer(random, display) {
    if (random === 0) {
        display.style.backgroundImage = "url(../images/rockPaperScissors/kamen.png)";
    } else if (random === 2) {
        display.style.backgroundImage = "url(../images/rockPaperScissors/bum.png)";
    } else if (random === 1) {
        display.style.backgroundImage = "url(../images/rockPaperScissors/noz.png)";
    }
}

function GameProcess(buttons, computerMonitor, playerMonitor) {
    this.buttons = buttons;
    this.computerMonitor = computerMonitor;
    this.playerMonitor = playerMonitor;

    this.Process = () => {
        this.buttons.forEach((el, index) => {
            el.addEventListener("click", () => {
                this.randomComputer = Math.round(Math.random() * 100);
                computerProcess(this.randomComputer, this.computerMonitor)
                computerPlayer(index, this.playerMonitor);
            })
        })
    }
}

export let Game = new GameProcess(
    variable.buttons,
    variable.computerMonitor,
    variable.playerMonitor,
);