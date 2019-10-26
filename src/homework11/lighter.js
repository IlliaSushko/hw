const light = document.querySelector(".lighter__light");
const button = document.querySelector(".lighter__button");
let intervalId;

function startInterval() {
  intervalId = setInterval(function() {
    setColor();
  }, 1500);
}

function start() {
  setColor();
  startInterval();
}

function stop() {
  clearInterval(intervalId);
  light.style.backgroundColor = "";
}

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  return (
    "rgb(" +
    randomValue(0, 255) +
    "," +
    randomValue(0, 255) +
    "," +
    randomValue(0, 255) +
    ")"
  );
}

function setColor() {
  light.style.backgroundColor = getRandomColor();
}

function toggle() {
  if (light.style.backgroundColor === "") {
    start();
  } else {
    stop();
  }
}

button.onclick = toggle;
