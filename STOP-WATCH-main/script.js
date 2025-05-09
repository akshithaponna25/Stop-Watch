const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('stopwatch');
let isRunning = false;
let timerInterval;
let seconds = 0;

startStopButton.addEventListener('click', function() {
    if (isRunning) {
        startStopButton.textContent = 'Start';
        clearInterval(timerInterval);
    } else {
        startStopButton.textContent = 'Stop';
        timerInterval = setInterval(updateTime, 1000);
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = 'Start';
    seconds = 0;
    timeDisplay.textContent = '00:00:00';
});

function updateTime() {
    seconds++;
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${secs}`;
}
