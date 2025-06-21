let timer = null;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

function updateDisplay() {
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    running = false;
    clearInterval(timer);
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

document.getElementById('startBtn').onclick = start;
document.getElementById('stopBtn').onclick = stop;
document.getElementById('resetBtn').onclick = reset;

// Space tuşu ile başlat/durdur
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        if (running) {
            stop();
        } else {
            start();
        }
    }
});

updateDisplay();