let burgMenu =
    {
        burgerMenu: document.querySelector(".menu__open"),
        burgerMenuActivate: document.querySelector(".menu__open--line"),
        burgOpen: document.querySelector(".header__inside--bottom"),
        burgBtn: document.querySelectorAll(".header__inside--bottom a")

    }
let opened = document.querySelector(".header__inside--bottom");

function burgMenuAcrivated(burgerMenu, activate) {
    this.activate = activate;
    burgerMenu.addEventListener("click", () => {
        opened.classList.toggle("active");
        this.activate.classList.toggle("menu__open--line--active");

    })
}
export let burgerMenuActive = new burgMenuAcrivated(
    burgMenu.burgerMenu, burgMenu.burgerMenuActivate);