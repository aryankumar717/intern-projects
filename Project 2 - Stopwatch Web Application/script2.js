let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById('stopwatchDuration');
const startBtn = document.getElementById('Start');
const stopBtn = document.getElementById('Stop');
const resetBtn = document.getElementById('reset');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formatted =
        `${hh.toString().padStart(2, '0')}:` +
        `${mm.toString().padStart(2, '0')}:` +
        `${ss.toString().padStart(2, '0')}.` +
        `${ms.toString().padStart(2, '0')}`;
    return formatted;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00.00");
    elapsedTime = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Initialize display
print("00:00:00.00");
stopBtn.disabled = true;