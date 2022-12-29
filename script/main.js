let Year = prompt("Enter countdownyear here:");

const newYear = "1/1/" + Year;
const Title = document.getElementById("Countdown")
const Ctitle = document.getElementById("Ctitle")
const daysEl = document.getElementById("Days");
const hourEl = document.getElementById("Hours");
const minuteEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Seconds");

function timeCountDown() {
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    Title.innerHTML =  `Countdown to ${Year}`;
    Ctitle.innerHTML =  Year;
    daysEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);

