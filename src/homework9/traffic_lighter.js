const trafficLighterRed = document.querySelector('.traffic__lighter-red');
const trafficLighterYellow = document.querySelector('.traffic__lighter-yellow');
const trafficLighterGreen = document.querySelector('.traffic__lighter-green');
const trafficTextStop = document.querySelector('.traffic__text-stop');
const trafficTextReady = document.querySelector('.traffic__text-ready');
const trafficTextGo = document.querySelector('.traffic__text-go');


function showColorRed() {
    trafficLighterRed.style.backgroundColor = 'red';
    trafficLighterYellow.style.backgroundColor = 'white';
    trafficLighterGreen.style.backgroundColor = 'white';
    trafficTextStop.style.color = 'black';
    trafficTextReady.style.color = 'white';
    trafficTextGo.style.color = 'white';
}

function showColorYellow() {
    trafficLighterRed.style.backgroundColor = 'white';
    trafficLighterYellow.style.backgroundColor = 'yellow';
    trafficLighterGreen.style.backgroundColor = 'white';
    trafficTextStop.style.color = 'white';
    trafficTextReady.style.color = 'black';
    trafficTextGo.style.color = 'white';
}

function showColorGreen() {
    trafficLighterRed.style.backgroundColor = 'white';
    trafficLighterYellow.style.backgroundColor = 'white';
    trafficLighterGreen.style.backgroundColor = 'green';
    trafficTextStop.style.color = 'white';
    trafficTextReady.style.color = 'white';
    trafficTextGo.style.color = 'black';
}

trafficLighterRed.onclick = showColorRed;
trafficLighterYellow.onclick = showColorYellow;
trafficLighterGreen.onclick = showColorGreen;

