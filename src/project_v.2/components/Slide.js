import { createNode } from "./utils.js";
import { Control } from "./Control.js";

const ACTIVE_CLASS_NAME = "active";

export class Slide {
  constructor(root, slideData, styles = {}, isActive = false, isEnable = true) {
    this._root = root;
    this._slideData = slideData;
    this._styles = styles;
    this._isActive = isActive;
    this._isEnable = isEnable;
    this.render();
  }

  get isActive() {
    return this._container.classList.contains(ACTIVE_CLASS_NAME);
  }

  _renderContainer() {
    this._container = createNode("li", ["slide"]);
    if (this._isActive) {
      this.setActive();
    }
    this._setStyles();
  }

  _renderImg() {
    const img = createNode("img", ["slide__img"]);
    img.src = this._slideData.img;
    this._container.appendChild(img);
  }

  _renderTitle() {
    const title = createNode("h2", ["textContainer__title"]);
    title.innerHTML = this._slideData.title;
    this._textContainer.appendChild(title);
  }

  _renderDescription() {
    this.description = createNode("p", ["textContainer__description"]);
    this.description.innerHTML = this._slideData.description;
    const segment = createNode("span", ["textContainer__segment"]);
    segment.innerHTML = this._slideData.description;
    this.description.appendChild(segment);
    this._textContainer.appendChild(this.description);
  }

  _renderTextContainer() {
    this._textContainer = createNode("div", ["textContainer"]);
    this._container.appendChild(this._textContainer);
    this._renderTitle();
    this._renderDescription();
  }

  _renderBtnToggle() {
    this.toggleWrapper = createNode("div", ["toggleWrapper"]);
    const toggles = [
      {
        title: "Toggle",
        onClick: () => this.toggleByClass(),
        style: "toggleWrapper__btn"
      }
    ];
    toggles.forEach(
      ({ title, onClick, style }) =>
        new Control(this.toggleWrapper, title, onClick, style)
    );
    this._container.appendChild(this.toggleWrapper);
  }

  _setStyles() {
    for (let style in this._styles) {
      this._container.style[style] = this._styles[style];
    }
  }

  render() {
    this._renderContainer();
    this._renderImg();
    this._renderTextContainer();
    this._renderBtnToggle();
    this._root.appendChild(this._container);
  }

  toggleByClass() {
    if (this._isEnable) {
      this.activeToggle();
    } else {
      this.removeToggle();
    }
  }

  activeToggle() {
    this.isEnable = false;
    this._textContainer.classList.add(ACTIVE_CLASS_NAME);
    this.description.classList.add(ACTIVE_CLASS_NAME);
  }

  removeToggle() {
    this.isEnable = true;
    this._textContainer.classList.remove(ACTIVE_CLASS_NAME);
    this.description.classList.remove(ACTIVE_CLASS_NAME);
  }

  setActive() {
    this._container.classList.add(ACTIVE_CLASS_NAME);
  }

  removeActive() {
    this._container.classList.remove(ACTIVE_CLASS_NAME);
  }
}
