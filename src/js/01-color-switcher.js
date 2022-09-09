const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.addEventListener('click', getColorBody);
stoptBtn.addEventListener('click', stopColorBody);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getColorBody() {
  startBtn.disabled = true;
  stoptBtn.disabled = false;

  timerId = setInterval(() => {
    let currentColorBody = getRandomHexColor();
    bodyEl.style.backgroundColor = currentColorBody;
  }, 1000);
}

function stopColorBody() {
  startBtn.disabled = false;
  stoptBtn.disabled = true;

  clearInterval(timerId);
}
