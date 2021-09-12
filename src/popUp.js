"use strict";

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector(".pop-up");
        this.popUpText = document.querySelector(".pop-up-text");
        this.popUpBtn = document.querySelector(".pop-up-btn");
        this.popUpBtn.addEventListener("click", () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove("hidden");
    }

    hide() {
        this.popUp.classList.add("hidden");
    }
}