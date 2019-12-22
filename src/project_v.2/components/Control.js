import { createNode } from './utils.js';

export class Control {
  constructor(root, title, onClick, style) {
    this._root = root;
    this._title = title;
    this._clickHandler = onClick;
    this._style = style;
    this.render();
  }

  render() {
    this._control = document.createElement("button");
    this._control.classList.add(this._style);
    this._control.innerHTML = `<span>${this._title}<span>`;
    if (this._clickHandler) {
      this._control.addEventListener("click", e => this._clickHandler(e));
    };
    this._root.appendChild(this._control);
  }
}
