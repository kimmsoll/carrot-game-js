"use strict"

const body = document.querySelector("body");
const popUp = body.querySelector(".pop-up");
const gameBtn = document.querySelector(".game-btn");
const timer = document.querySelector(".game-timer");
const gameField = document.querySelector(".game-field");
let remains = document.querySelector(".game-remains");

const CARROT_SIZE = 80;
let sec = 10;
let remainNum = 10;
let clock;
let started = false;

const popUpLost = () => {
  popUp.setAttribute("id", "pop-up");
  popUp.innerHTML = `<span>You Lost!💩</span>
  <button class="pop-up-btn">
  <i class="fas fa-reply" onClick="window.location.reload()"></i>
  </button>`;
}

const popUpWin =() => {
  popUp.setAttribute("id", "pop-up");
  popUp.innerHTML = `<span>You Win!🎉</span>
  <button class="pop-up-btn">
  <i class="fas fa-reply" onClick="window.location.reload()"></i>
  </button>`;
}

const popUpReplay = () => {
  popUp.setAttribute("id", "pop-up");
  popUp.innerHTML = `<span>Replay?😀</span>
  <button class="pop-up-btn">
  <i class="fas fa-reply" onClick="window.location.reload()"></i>
  </button>`;
}

const randomNum = (min, max) => {
  return Math.random()*(max - min) + min;
}

const initGame = () => {
  addItem("carrot", 10, "images/carrot.png");
  addItem("bug", 10, "images/bug.png");
}

const addItem = (className, count, imgPath) => {
  const fieldRect = gameField.getBoundingClientRect();
  for(let i = 0; i<count; i++){
    const y1 = 0;
    const x1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNum(x1, x2);
    const y = randomNum(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    gameField.appendChild(item);
    item.addEventListener("click", (e) => {
      removeItems(e);
    });
  }
}

const removeItems = (e) => {
  if(e.target.className === "carrot"){
    gameField.removeChild(e.target);
    remainNum--;
    remains.innerHTML = `${remainNum}`;
    if(remainNum === 0 && sec > 0){
      stopGame();
      popUpWin();
    }
  } else if(e.target.className === "bug"){
    stopGame();
    popUpLost();
  }
}

const startGame = () => {
  clock = setInterval(() => {
    if (sec <= 0) {
      stopGame();
      popUpLost();
    } else {
      --sec;
      timer.innerHTML = sec<10 ? `00:0${sec}` : `00:${sec}`;
    }
  }, 1000);
  gameBtn.innerHTML = `<i class="fas fa-stop"></i>`;
}

const stopGame = () => {
  if(sec > 0) {
    popUpReplay();
  }
  clearInterval(clock);
  gameBtn.innerHTML = `<i class="fas fa-play"></i>`;
  gameField.innerHTML = "";
  sec = 10;
  remainNum = 10;
  remains.innerHTML = remainNum;
  timer.innerHTML = sec<10 ? `00:0${sec}` : `00:${sec}`;
}

gameBtn.addEventListener("click", () => {
  if(!started){
    startGame();
    initGame();
  }else{
    stopGame();
  }
  started = !started;
})