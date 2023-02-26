// select DOM elements
const timerElement = document.querySelector('.timer');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// set control variables
let intervalId;
let startTime;
let elapsedTime = 0;

// function that updates the stopwatch time
function updateTime() {
  const ms = Date.now() - startTime + elapsedTime;
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 1000 / 60) % 60;
  const h = Math.floor(ms / 1000 / 60 / 60);
  const msRounded = Math.floor((ms % 1000) / 10);
  hoursElement.innerText = h.toString().padStart(2, '0');
  minutesElement.innerText = m.toString().padStart(2, '0');
  secondsElement.innerText = s.toString().padStart(2, '0');
  millisecondsElement.innerText = `.${msRounded.toString().padStart(2, '0')}`;
}

// function for the Start button
function startTimer() {
  startTime = Date.now() - elapsedTime; // update the start time of the stopwatch
  intervalId = setInterval(updateTime, 10);
  startButton.classList.add('disabled');
  stopButton.classList.remove('disabled');
}

// function for the Stop button
function stopTimer() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime; // update the elapsed time
  startButton.classList.remove('disabled');
  stopButton.classList.add('disabled');
}

// function for the Reset button
function resetTimer() {
  clearInterval(intervalId);
  elapsedTime = 0;
  startTime = Date.now(); // update the start time of the stopwatch
  updateTime();
  startButton.classList.remove('disabled');
  stopButton.classList.add('disabled');
}

// add listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
