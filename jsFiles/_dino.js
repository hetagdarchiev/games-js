const objects = {
    capy: document.querySelector("#capyBara"),
    jaguar: document.querySelector("#jaguar"),
    sun: document.querySelector(".sun"),
    sunCircle: document.querySelector(".sun__circle"),
    place: document.querySelector(".dino__scene-earth"),
    mainPlace: document.querySelector(".dino__scene")
};

const KEY_SPACE = 32;
const RED_MOON_TRIGGER = 666;

function capyJump(capyBara) {
    capyBara.classList.add("capyBaraAnimate");
    capyBara.addEventListener("animationend", () => {
        capyBara.classList.remove("capyBaraAnimate");
    }, { once: true });
}

function animateJaguar() {
    objects.jaguar.classList.add("jaguarAnumate");
    objects.jaguar.addEventListener("animationend", () => {
        objects.jaguar.classList.remove("jaguarAnumate");
    }, { once: true });
}

function checkCollision() {
    const capyPos = objects.capy.getBoundingClientRect();
    const jaguPos = objects.jaguar.getBoundingClientRect();

    if (jaguPos.left < capyPos.right && jaguPos.right > capyPos.left &&
        jaguPos.top < capyPos.bottom) {
        let conf = confirm("Вы проиграли! Хотите попробывать ещё раз?")
        if (!conf) {
            document.querySelector(".game__monitor--dino")
                .classList.remove("active");
        }
    }

}

function handleSunAnimation() {
    const redMoon = Math.round(Math.random() * 1000);
    if (redMoon === RED_MOON_TRIGGER) {
        objects.sunCircle.style.color = "#560319";
    }

    objects.mainPlace.classList.toggle("dino__scene-dark");
    objects.sun.style.animation = 'none';
    void objects.sun.offsetWidth; // Принудительный reflow
    objects.sun.style.animation = '';
}

document.addEventListener("keydown", (event) => {
    if (event.code === 'Space' || event.keyCode === 32) {
        event.preventDefault();
        capyJump(objects.capy);
    }
});
objects.mainPlace.addEventListener("click", (event) => {
    capyJump(objects.capy);
});

setInterval(animateJaguar, 20);
setInterval(checkCollision, 50);

objects.sun.addEventListener("animationend", handleSunAnimation);