// buttons
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

// work timer;
var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");

// break timer;
var bm = document.getElementById("b_minutes")
var bs = document.getElementById("b_seconds");

var startTimer;

start.addEventListener("click", function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer, 1);
  } else {
    alert("Timer is already running.");
  }
});

stop.addEventListener("click", function(){
    clear(startTimer);
    startTimer = undefined;
  });
  
  reset.addEventListener("click", function(){
    wm.innerText = 30;
    ws.innerText = "00";
  
    bs.innerText = "00";
    bm.innerText = 10;
  
    document.getElementById("count").innerText = 0;
    startTimer = undefined;
  });
  
  function timer(){
  //   work timer 
    if(ws.innerText != 0){
      ws.innerText--;
    } else if(wm.innerText !=0 && ws.innerText == 0){
      ws.innerText = 59;
      wm.innerText--;
    }
  
  //   break timer
    if(wm.innerText == 0 && ws.innerText == 0){
      if(bs.innerText != 0){
        bs.innerText--;
      } else if(bm.innerText !=0 && bs.innerText == 0){
        bs.innerText = 59;
        bm.innerText--;
      }
    }
  
  //   counter
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
      wm.innerText = 30;
      ws.innerText = "00";
  
      bm.innerText = 10;
      bs.innerText = "00";
  
      document.getElementById("count").innerText++;
    }
  }
  
  function clear(){
    clearInterval(startTimer);
  }