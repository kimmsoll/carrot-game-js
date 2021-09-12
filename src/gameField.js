export default class GameField {
    constructor() {
        this.field = document.querySelector(".game-field");
    }

    randomNum = (min, max) => {
        return Math.random()*(max - min) + min;
    }
    
    initGame = () => {
        this.addItem("carrot", 10, "images/carrot.png");
        this.addItem("bug", 10, "images/bug.png");
    }
    
    addItem = (className, count, imgPath) => {
        const CARROT_SIZE = 80;
        const fieldRect = this.field.getBoundingClientRect();
        for(let i = 0; i<count; i++){
        const y1 = 0;
        const x1 = 0;
        const x2 = fieldRect.width - CARROT_SIZE;
        const y2 = fieldRect.height - CARROT_SIZE;
        const item = document.createElement("img");
        item.setAttribute("class", className);
        item.setAttribute("src", imgPath);
        item.style.position = "absolute";
        const x = this.randomNum(x1, x2);
        const y = this.randomNum(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        this.field.appendChild(item);
        }
    }
}