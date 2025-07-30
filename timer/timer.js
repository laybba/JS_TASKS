
const timeBox  = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn  = document.getElementById('stop');
const resBtn   = document.getElementById('restart');

//initial  state
let secs = 0;         
let timer = null;      

//update time on screen 
function show() {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  timeBox.textContent = `${m}:${s}`;
}

function startTimer() {
  if (timer!==null) return;             
  timer = setInterval(() => {
    secs++;
    show();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function restartTimer() {
  stopTimer();
  secs = 0;
  show();
}


