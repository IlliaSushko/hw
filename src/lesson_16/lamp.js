import "./lamp.scss";

class Lamp {
  constructor(targetElement = document.querySelector("body")) 
  {
    this.targetElement = targetElement;
    this.render();
  }

  render() {
    this.lamp = document.createElement("div");
    this.lamp.classList.add("lamp");
    this.lamp.style.backgroundColor === "";
    this.targetElement.appendChild(this.lamp);
    
  }

  start() {
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
      this.lamp.style.backgroundColor = getRandomColor();
    }


    function startInterval() {
      intervalId = setInterval(function() {
        setColor();
      }, 1500);
    }
    setColor();
    startInterval();
  }

  stop() {
    this.lamp.style.backgroundColor === "";
    clearInterval(this.intervalId)
  }
}

export { Lamp };
