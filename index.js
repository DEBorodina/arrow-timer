const stopBtn = document.querySelector('#stop');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

const clock = document.querySelector('.timer');

let $counter = document.querySelector('#time');
let counter = 0;

let flag;

function padNum(num) {
    return num.toString().padStart(2,0);
}

function printTime(counter){
    $counter.innerHTML = `${padNum(Math.floor(counter/60))}:${padNum(counter%60)}`
}

function printClock(counter){
    let sec=counter%60;
    let min=Math.floor(counter/60);
    clock.innerHTML=`<circle class='clock' cy="110" cx="110" r="103"></circle>
    <circle class='clock-strokes' cy="110" cx="110" r="96" stroke-dasharray="0 50.265482457423 0.5 49.765482457423 0.5 49.765482457423" stroke-dashoffset="150.79644737227"></circle>
    <text x="106" y="26" >12</text>
    <text x="200" y="115" >3</text>
    <text x="106" y="206" >6</text>
    <text x="13" y="115" >9</text>
    <circle  cy="110" cx="110" r="3"></circle>
    <line class="second-arrow" x1="110" y1="110" x2="${110+74*Math.sin(sec*Math.PI/30)}" y2="${110-74*Math.cos(sec*Math.PI/30)}"></line>
    <line class="minute-arrow" x1="110" y1="110" x2="${110+54*Math.sin(min*Math.PI/30)}" y2="${110-54*Math.cos(min*Math.PI/30)}"></line>
    <line class="second-arrow" x1="110" y1="110" x2="${110+15*Math.sin(sec*Math.PI/30-Math.PI)}" y2="${110-15*Math.cos(sec*Math.PI/30-Math.PI)}"></line>
    <line class="minute-arrow" x1="110" y1="110" x2="${110+10*Math.sin(min*Math.PI/30-Math.PI)}" y2="${110-10*Math.cos(min*Math.PI/30-Math.PI)}"></line>`;
}

function setNewTime() {
    printTime(counter);
    printClock(counter);
    counter++;
}

setTimeout(function timer() {
    if(flag) {
        setNewTime();
    } 
    setTimeout(timer, 1000);
}, 1000);

startBtn.addEventListener('click', () => {
    flag = true;
});

resetBtn.addEventListener('click', () => {
    flag = false
    counter=0;
    setNewTime(counter);
 });

stopBtn.addEventListener('click', () => {
    flag = false;
});
