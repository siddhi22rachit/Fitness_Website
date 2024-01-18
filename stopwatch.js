let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});

let startTime;
let elapsedTime = 0;
let timerInterval;
let records = [];

const timerDisplay = document.querySelector('.timer-display');
const recordsList = document.getElementById('records-list');

function displayTimer() {
  const milliseconds = elapsedTime % 1000;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  timerDisplay.innerHTML = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(3, '0')}`;
}

function startTimer() {
  if (!startTime) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      displayTimer();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  startTime = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  displayTimer();
}

function saveRecord() {
  records.push(elapsedTime);
  const recordItem = document.createElement('li');
  recordItem.textContent = timerDisplay.innerHTML;
  recordsList.appendChild(recordItem);
  resetTimer();
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);
document.getElementById('save-record').addEventListener('click', saveRecord);
