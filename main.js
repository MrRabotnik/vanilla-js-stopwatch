/*///////////////////////////////////////////////////*/
/*///////////////// DECLARE VARIABLES ///////////////*/
/*///////////////////////////////////////////////////*/

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timeDiv = document.getElementById("time");
let timeInterval;
let seconds = 1;
let minutes = 0;
let houres = 0;
let started = false;

/*///////////////////////////////////////////////////*/
/*///////////////// DECLARE FUCNTIONS ///////////////*/
/*///////////////////////////////////////////////////*/

function startWatch() {
    if (started) return;
    started = true;
    timeInterval = setInterval(() => {
        timeDiv.innerHTML = `${checkForHoures(houres)}:${checkForMinutes(minutes)}:${checkForSeconds(seconds)}`
        seconds++;
    }, 1000);
}

function stopWatch() {
    clearInterval(timeInterval);
    started = false;
}

function resetWatch() {
    timeDiv.innerHTML = "00:00:00";
    started = false;
    seconds = 0;
    minutes = 0;
    houres = 0;
    stopWatch();
}

function checkForSeconds(s) {
    if (s == 59) {
        seconds = 0
        s = 0
        minutes++
    }
    
    return s > 9 ? s : "0" + s;
}

function checkForMinutes(m) {
    if (m == 59) {
        m = 0;
        minutes = 0;
        houres++;
    }
    return m > 9 ? m : "0" + m;
}

function checkForHoures(h) {
    if (h == 24) {
        h = 0
        houres = 0
        resetWatch();
    };
    return h > 9 ? h : '0' + h
}

/*///////////////////////////////////////////////////*/
/*////////////////// CALL FUCNTIONS /////////////////*/
/*///////////////////////////////////////////////////*/

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
