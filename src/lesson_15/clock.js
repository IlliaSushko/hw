function clock(
  rootElement = document.querySelector('body'),
  startState = 'FULL',
) {
  let clockElement;
  let hourseElement;
  let minElement;
  let secElement;
  let state = startState;
  let intervalTime;
  let intervalDate;

  function renderContainer() {
    clockElement = document.createElement('button');
    clockElement.id = 'ID' + Date.now() + '' + Math.floor(Math.random() * 1000);
    clockElement.classList.add('clock');
    const stopEventButton = document.createElement('button');
    stopEventButton.innerText = 'DELETE EVENT LISTENER';

    function clickHandler(e) {
      switchTimeState();
      initContent();
    }

    clockElement.addEventListener('click', clickHandler); //показывает дату
    clockElement.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      showDate();
    });
    stopEventButton.addEventListener('click', function() {
      clockElement.removeEventListener('click', clickHandler);
    });
    rootElement.appendChild(clockElement);
    rootElement.appendChild(stopEventButton);
  }

  function normalisedDate(num) {
    return num < 10 ? '0' + num : num;
  }

  function setTime() {
    const currentTime = new Date();

    hourseElement.textContent = normalisedDate(currentTime.getHours());
    minElement.textContent = normalisedDate(currentTime.getMinutes());

    if (secElement) {
      secElement.textContent = normalisedDate(currentTime.getSeconds());
    }
  }

  function setDate() {
    const currentDate = new Date();
    const month
    hourseElement.textContent = normalisedDate(currentDate.getDate());//показать день
    minElement.textContent = normalisedDate(currentDate.getMonth() +1);//показать месяц
    secElement.textContent = normalisedDate(currentDate.getFullYear());//показать полный год
  }

  function renderContent() {
    clockElement.innerHTML = '';
    clearInterval(intervalTime);
    clearInterval(intervalDate);

    hourseElement = document.createElement('div');
    minElement = document.createElement('div');

    hourseElement.classList.add('clock__hourse');
    minElement.classList.add('clock__min');

    clockElement.appendChild(hourseElement);
    clockElement.appendChild(minElement);

    if (state === 'FULL') {
      secElement = document.createElement('div');
      secElement.classList.add('clock__sec');
      clockElement.appendChild(secElement);
    }
  }

  function showDate() {
    clearInterval(intervalTime);
    setDate();
  }

  function switchTimeState() {
    if (state === 'SHORT') {
      state = 'FULL';
    } else {
      state = 'SHORT';
    } 
  }

  function initContent() {
    renderContent();
    setTime();
    intervalTime = setInterval(() => {
      setTime();
    }, 1000);
  }

  renderContainer();
  initContent();
}

export { clock }; //
