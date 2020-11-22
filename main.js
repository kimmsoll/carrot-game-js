const gameBtn = document.querySelector(".game-btn");
const timer = document.querySelector(".timer");
let sec = 10;

gameBtn.addEventListener('click', ()=>{setInterval(()=>{ 
  gameBtn.innerHTML = `<i class="fas fa-stop"></i>`     
    if(sec === 10){
      timer.innerHTML = '00'+':'+`${sec}`;
  } else if(sec > 0 && sec !== 10){
      timer.innerHTML = '00'+':'+`0${sec}`;
  } else if(sec === 0){
      timer.innerHTML = '00:00';
  }
  sec--;
  },1000)});

gameBtn.addEventListener('click', appearItems());

function appearItems(){
    
}