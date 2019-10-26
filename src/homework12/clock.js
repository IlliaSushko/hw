clock();

function clock(rootElement = document.querySelector("body")) {
  const wrapper = document.createElement("div");
  const display = document.createElement("div");
  const button = document.createElement("div");
  let intervalId;

  wrapper.classList.add("box");
  display.classList.add("box__display");
  button.classList.add("box__button");
  display.textContent = getTime();
  wrapper.appendChild(display);
  wrapper.appendChild(button);
  rootElement.appendChild(wrapper);

  function normalisedDate(num) {
    return num < 10 ? "0" + num : num;
  }

  function getTime() {
    const currentTime = new Date();
    return (
      normalisedDate(currentTime.getHours()) +
      ":" +
      normalisedDate(currentTime.getMinutes()) +
      ":" +
      normalisedDate(currentTime.getSeconds())
    );
  }


  setInterval(function() {
    display.textContent = getTime();
  }, 1000);
}
