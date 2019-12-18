export function renderMainBox(rootElement = document.querySelector("body")) {
    
  const wrapper = document.createElement("div");
  const infoBox = document.createElement("div");
  const footerBox = document.createElement("div");
  const skipFirst = document.createElement("button");
  const prew = document.createElement("button");
  const next = document.createElement("button");
  const skipLast = document.createElement("button");

  wrapper.appendChild(infoBox);
  footerBox.appendChild(skipFirst);
  footerBox.appendChild(prew);
  footerBox.appendChild(next);
  footerBox.appendChild(skipLast);
  wrapper.appendChild(footerBox);
  rootElement.appendChild(wrapper);

  skipFirst.innerHTML = "<<<";
  prew.innerHTML = "<";
  next.innerHTML = ">";
  skipLast.innerHTML = ">>>";

  wrapper.classList.add("wrapper");
  infoBox.classList.add("infoBox");
  footerBox.classList.add("footerBox");
  skipFirst.classList.add("footerBox__button");
  prew.classList.add("footerBox__button");
  next.classList.add("footerBox__button");
  skipLast.classList.add("footerBox__button");

  return infoBox
}


