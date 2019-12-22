import { Slide } from "./Slide.js";
import { Control } from "./Control.js";
import { createNode } from "./utils.js";
const SOURCE_URL = "http://localhost:3000/ads";

export class Slideshow {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 0;
    this._data = [];
    this._slides = [];
  }

  init() {
    this._renderWrapper();
    this._renderControls();
    this._fetchData();
  }

  _renderSlides() {
    const fragment = document.createDocumentFragment();
    this._slides = this._data.map(
      (item, i) =>
        new Slide(
          fragment,
          item,
          {
            transform: `translateX(-${100 * i}%)`
          },
          i === this._activeSlide
        )
    );
    this._lastIndex = this._slides.length - 1;
    this._wrapper.appendChild(
      createNode("ul", ["sliderContainer"], undefined, fragment)
    );
  }

  _renderWrapper() {
    this._wrapper = createNode("div", ["wrapper"]);
    this._root.appendChild(this._wrapper);
  }

  _renderControls() {
    this.controlsWrapper = createNode("div", ["controlsWrapper"]);
    const controls = [
      {
        title: "<<<",
        onClick: () => this._showFirst(),
        style: "control"
      },
      {
        title: "<",
        onClick: () => this.previousSlide(),
        style: "control"
      },
      {
        title: ">",
        onClick: () => this.nextSlide(),
        style: "control"
      },
      {
        title: ">>>",
        onClick: () => this._showLast(),
        style: "control"
      }
    ];
    controls.forEach(
      ({ title, onClick, style }) =>
        new Control(this.controlsWrapper, title, onClick, style)
    );
    this._wrapper.appendChild(this.controlsWrapper);
  }

  _fetchData() {
    fetch(SOURCE_URL)
      .then(response => response.json())
      .then(item => {
        this._data = item;
        this._renderSlides();
      });
  }

  _increaseIndex() {
    if (this._activeSlide + 1 <= this._lastIndex) {
      this._activeSlide += 1;
    } else {
      this._activeSlide = 0;
    }
  }

  _decreaseIndex() {
    if (this._activeSlide - 1 >= 0) {
      this._activeSlide -= 1;
    } else {
      this._activeSlide = this._lastIndex;
    }
  }

  previousSlide() {
    this._hideSlide();
    this._decreaseIndex();
    this._showSlide();
  }

  nextSlide() {
    this._hideSlide();
    this._increaseIndex();
    this._showSlide();
  }

  _showSlide() {
    this._slides[this._activeSlide].setActive();
  }

  _hideSlide() {
    this._slides[this._activeSlide].removeActive();
  }

  _showLast() {
    this._hideSlide();
    this._activeSlide = this._lastIndex;
    this._showSlide();
  }

  _showFirst() {
    this._hideSlide();
    this._activeSlide = 0;
    this._showSlide();
  }
}
