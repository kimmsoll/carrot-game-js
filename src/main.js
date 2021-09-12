"use strict";

import PopUp from "./popUp.js";
import GameField from "./gameField.js";

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(()=>{
  window.location.reload();
});

const gameField = new GameField();
gameField.field.addEventListener("click", (event)=>{
  removeItem(event);
})

const gameBtn = document.querySelector(".game-btn");
const remains = document.querySelector(".game-remains");
const timer = document.querySelector(".game-timer");

let sec = 10;
let remainNum = 10;
let clock;
let started = false;

const countRemains = () => {
  remainNum--;
  remains.innerHTML = `${remainNum}`;
  if(remainNum === 0 && sec > 0){
    stopGame();
    gameFinishBanner.showWithText("You Win! 🎉");
  }
}
  
const removeItem = (event) => {
    const target = event.target;
    if(target.matches(".carrot")){
      gameField.field.removeChild(target);
      countRemains();
    }else if(target.matches(".bug")){
      stopGame();
      gameFinishBanner.showWithText("You Lost! 💩");
    }else{
      event.preventDefault();
    }
}

const startGame = () => {
  sec = 10;
  remainNum = 10;
  remains.innerHTML = remainNum;
  timer.innerHTML = sec<10 ? `00:0${sec}` : `00:${sec}`;
  clock = setInterval(() => {
    if (sec <= 0) {
      stopGame();
      gameFinishBanner.showWithText("You Lost! 💩");
    } else {
      --sec;
      timer.innerHTML = sec<10 ? `00:0${sec}` : `00:${sec}`;
    }
  }, 1000);
  gameBtn.innerHTML = `<i class="fas fa-stop"></i>`;
}

const stopGame = () => {
  if(sec > 0) {
    gameFinishBanner.showWithText("Replay? 👀");
  }
  clearInterval(clock);
  gameBtn.innerHTML = `<i class="fas fa-play"></i>`;
  gameField.field.innerHTML = "";
}

gameBtn.addEventListener("click", () => {
  if(!started){
    startGame();
    gameField.initGame();
  }else{
    stopGame();
  }
  started = !started;
})