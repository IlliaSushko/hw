import { renderMainBox } from "./components/mainBox/renderMainBox.js";
import { create } from "domain";
const ACTIVE_CLASS_NAME = 'contentContainer-active';


export class AdvertisitingBlock {
  constructor(rootElement = document.querySelector("body")) {
    this.rootElement = rootElement;
    this.tasks = [];
    this.init();
    this.activeSlide = 0;
  }

  init() {
    this.getTasks();
    this.render();
    // this.toggleSlideByActiveSlide();
  }

  getTasks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/ads");
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.tasks = JSON.parse(xhr.response);
          this.renderContent();
        } else {
          this.rootElement.innerHTML = "ERROR";
        }
      }
    };
  }

  render() {
    this.infoBox = renderMainBox();
  }

  renderContent() {
    for (let task of this.tasks) {
      this.contentContainer = document.createElement("div");
      this.contentContainer.classList.add("contentContainer");
      this.infoBox.appendChild(this.contentContainer);

      this.imgContainer = document.createElement("div");
      this.imgContainer.classList.add("imgContainer");
      this.contentContainer.appendChild(this.imgContainer);
      const image = document.createElement("img");
      image.classList.add("imgContainer__img");
      image.src = task.img;
      this.imgContainer.appendChild(image);

      this.textContainer = document.createElement("div");
      this.textContainer.classList.add("textContainer");
      this.contentContainer.appendChild(this.textContainer);

      this.title = document.createElement("div");
      this.title.classList.add("textContainer__title");
      this.title.innerHTML = task.title;
      this.textContainer.appendChild(this.title);

      this.description = document.createElement("p");
      this.description.classList.add("textContainer__description");
      this.description.innerHTML = task.description.slice(0,50) + "...";
      this.textContainer.appendChild(this.description);
      this.span = document.createElement('span')
      this.span.classList.add('textContainer__segment');
      this.span.innerHTML = task.description.slice(50);
      this.description.appendChild(this.span);
      

      this.btnBox = document.createElement("div");
      this.btnBox.classList.add("toggleBox");
      this.contentContainer.appendChild(this.btnBox);
      this.btnToggle = document.createElement("button");
      this.btnToggle.classList.add("toggleBox__button");
      this.btnToggle.innerHTML = "Toggle";
      this.btnBox.appendChild(this.btnToggle);


    }
  }
 
  // toggleSlideByActiveSlide() {
  //   this.contentContainer[this.activeSlide].classList.add('contentContainer-active');
  // }
}
