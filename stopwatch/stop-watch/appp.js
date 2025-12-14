const secondE =document.getElementById("second");
const splitE = document.getElementById("split");


const btnStart = document.querySelector(".start");
const btnStop =document.querySelector(".stop");
const btnReset = document.querySelector(".reset");


let seconds=0;
let splits=0;
let interval;

btnStart.addEventListener("click",()=>{
    clearInterval(interval);
    interval =setInterval(startTimer,10);
});

btnStop.addEventListener("click",()=>{
    clearInterval(interval);
});

btnReset.addEventListener("click",()=>{
    clearInterval(interval);
    splits=0;
    seconds=0;

    secondE.innerHTML="00";
    splitE.innerHTML="00";
});

function startTimer(){
    splits++;

    if(splits <= 9){
        splitE.innerHTML ="0"+splits;
    }else{
        splitE.innerHTML = splits;
    }

    if(splits>99){
        seconds++;
        splits=0;
        splitE.innerHTML="00";

        if(seconds<= 9){
            secondE.innerHTML ="0" +seconds;
        }else{
            secondE.innerHTML=seconds;
        }
    }
}