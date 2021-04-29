'use strict'

const body = document.querySelector("body");
const popUp = body.querySelector(".pop");
const gameBtn = document.querySelector(".game-btn");
const timer = document.querySelector(".timer");
let sec = 10;

const CARROT_SIZE = 80;
const gameField = document.querySelector(".images");
const fieldRect = gameField.getBoundingClientRect();

let remains = document.querySelector(".remains");
let remainNum = 15;

function initGame(){
  addItem('carrot', 15, 'images/carrot.png');
  addItem('bug', 15, 'images/bug.png');
}

function randomNum(min, max){
  return Math.random()*(max - min) + min;
}

function popUpLost(){
  popUp.setAttribute("id", "pop");
  popUp.innerHTML = `<span>You Lost!💩</span>
  <i class="fas fa-reply" onClick="window.location.reload()"></i>`
}

function popUpWin(){   
  popUp.setAttribute("id", "pop");
  popUp.innerHTML = `<span>You Win!🎉</span>
  <i class="fas fa-reply" onClick="window.location.reload()"></i>`
}

function popUpReplay(){
  popUp.setAttribute("id", "pop");
  popUp.innerHTML = `<span>Replay?😀</span>
  <i class="fas fa-reply" onClick="window.location.reload()"></i>`
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
      if(item.className === 'carrot'){
      gameField.removeChild(item);
      remainNum--;
      remains.innerHTML = `${remainNum}`
      if(remainNum === 0){
        popUpWin();
      }
    }
      else{       
        popUpLost();       
    }
    });
  }
}

gameBtn.addEventListener('click', ()=>{setInterval(()=>{
  if(gameBtn.innerHTML = `<i class="fas fa-play"></i>`){  
      gameBtn.innerHTML = `<i class="fas fa-stop" onClick="popUpReplay()"></i>`;     
      if(sec === 10){
        initGame();
        timer.innerHTML = '00'+':'+`${sec}`;
        sec--;
    } else if(sec > 0 && sec !== 10){
        timer.innerHTML = '00'+':'+`0${sec}`;
        sec--;
    } else if(sec === 0){
      timer.innerHTML = '00:00';
      if(remainNum !== 0){
      popUpLost(); 
      }
    }
    }},1000)    
  });


