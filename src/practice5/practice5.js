import "./practice5.scss";
const container = document.querySelector(".header");
lampSwitcher(container, 1000);
lampSwitcher(container, 300);
lampSwitcher(container, 2000);
lampSwitcher();

function lampSwitcher(
  rootElement = document.querySelector("body"),
  speed = 1500,
  size = 80
) {
  const wrapper = document.createElement("div");
  const lamp = document.createElement("div");
  const button = document.createElement("button");

  wrapper.classList.add("lamp");
  lamp.classList.add("lamp__light");
  button.classList.add("lamp__button");
  lamp.style.width = size + "px";
  lamp.style.height = size + "px";
  button.textContent = "toggle";
  wrapper.appendChild(lamp);
  wrapper.appendChild(button);
  rootElement.appendChild(wrapper);
  
  let intervalId;
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
    lamp.style.background = getRandomColor();
  }

  function startInterval() {
    intervalId = setInterval(function() {
      setColor();
    }, speed);
  }

  function start() {
    setColor();
    startInterval();
  }
  function stop() {
    clearInterval(intervalId);
    lamp.style.background = "";
  }

  function toggle() {
    if (lamp.style.background === "") {
      start();
    } else {
      stop();
    }
  }

  button.onclick = toggle;
}
