import {burgerMenuActive as burger} from "./_burgerMenu.js"
burger.burgerMenu;

import { Game as rockScissorsPaper } from "./knb.js";
rockScissorsPaper.Process();

let games = document.querySelectorAll(".game");
let btn = document.querySelectorAll(".button");

btn.forEach((item,index) => {
    item.addEventListener("click", ()=>
    {
        games.forEach(game => {
            game.classList.remove("active");
            game.classList.remove("active-g");
        })
        if (games[index].classList.contains("game__monitor--krestnol"))
        {
            games[index].classList.add("active-g");
        }
        else if (games[index].classList.contains("game__monitor--snake"))
        {
            alert("Игра не готова!")
        }
        else
        {
            games[index].classList.add("active");
        }

    });
})