'use strict'

const gameBtn = document.querySelector(".game-btn");
const timer = document.querySelector(".timer");
let sec = 10;

const CARROT_SIZE = 80;
const gameField = document.querySelector(".images");
const fieldRect = gameField.getBoundingClientRect();

function initGame(){
  addItem('carrot', 8, 'images/carrot.png');
  addItem('bug', 8, 'images/bug.png');
}

function randomNum(min, max){
  return Math.random()*(max - min) + min;
}

function addItem(className, count, imgPath){
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width;
  const y2 = fieldRect.height;
  for(let i = 0; i<count; i++){
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNum(x1, x2) - CARROT_SIZE;
    const y = randomNum(y1, y2) - CARROT_SIZE;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    gameField.appendChild(item); 
    item.addEventListener('click', ()=>{
      gameField.removeChild(item);
    });
  }
}

gameBtn.addEventListener('click', ()=>{setInterval(()=>{
  gameBtn.innerHTML = `<i class="fas fa-stop"></img>`     
    if(sec === 10){
      initGame();
      timer.innerHTML = '00'+':'+`${sec}`;
  } else if(sec > 0 && sec !== 10){
      timer.innerHTML = '00'+':'+`0${sec}`;
  } else if(sec === 0){
      timer.innerHTML = '00:00';
  }
  sec--;
},1000)});