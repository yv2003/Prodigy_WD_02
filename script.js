let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let container = document.getElementById("container");

let timer = null;
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    // if([hours,minutes,seconds]<9){
    // hours = "0" + hours;
    // minutes = "0" + minutes;
    // seconds = "0" + seconds;
    // }
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}
function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function watchStop() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    displayTime.innerHTML = "00" + ":" + "00" + ":" + "00";
}
function watchLap() {
    var lapTime = h + ":" + m + ":" + s;
    var li = document.createElement("li");
    li.textContent = lapTime;
    container.appendChild(li);
}
