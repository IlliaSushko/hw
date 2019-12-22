/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/project_v.2/components/Control.js":
/*!***********************************************!*\
  !*** ./src/project_v.2/components/Control.js ***!
  \***********************************************/
/*! exports provided: Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/project_v.2/components/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Control =
/*#__PURE__*/
function () {
  function Control(root, title, onClick, style) {
    _classCallCheck(this, Control);

    this._root = root;
    this._title = title;
    this._clickHandler = onClick;
    this._style = style;
    this.render();
  }

  _createClass(Control, [{
    key: "render",
    value: function render() {
      var _this = this;

      this._control = document.createElement("button");

      this._control.classList.add(this._style);

      this._control.innerHTML = "<span>".concat(this._title, "<span>");

      if (this._clickHandler) {
        this._control.addEventListener("click", function (e) {
          return _this._clickHandler(e);
        });
      }

      ;

      this._root.appendChild(this._control);
    }
  }]);

  return Control;
}();

/***/ }),

/***/ "./src/project_v.2/components/Slide.js":
/*!*********************************************!*\
  !*** ./src/project_v.2/components/Slide.js ***!
  \*********************************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/project_v.2/components/utils.js");
/* harmony import */ var _Control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Control.js */ "./src/project_v.2/components/Control.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ACTIVE_CLASS_NAME = "active";
var Slide =
/*#__PURE__*/
function () {
  function Slide(root, slideData) {
    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var isActive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var isEnable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _classCallCheck(this, Slide);

    this._root = root;
    this._slideData = slideData;
    this._styles = styles;
    this._isActive = isActive;
    this._isEnable = isEnable;
    this.render();
  }

  _createClass(Slide, [{
    key: "_renderContainer",
    value: function _renderContainer() {
      this._container = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("li", ["slide"]);

      if (this._isActive) {
        this.setActive();
      }

      this._setStyles();
    }
  }, {
    key: "_renderImg",
    value: function _renderImg() {
      var img = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("img", ["slide__img"]);
      img.src = this._slideData.img;

      this._container.appendChild(img);
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var title = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h2", ["textContainer__title"]);
      title.innerHTML = this._slideData.title;

      this._textContainer.appendChild(title);
    }
  }, {
    key: "_renderDescription",
    value: function _renderDescription() {
      this.description = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", ["textContainer__description"]);
      this.description.innerHTML = this._slideData.description;
      var segment = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("span", ["textContainer__segment"]);
      segment.innerHTML = this._slideData.description;
      this.description.appendChild(segment);

      this._textContainer.appendChild(this.description);
    }
  }, {
    key: "_renderTextContainer",
    value: function _renderTextContainer() {
      this._textContainer = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("div", ["textContainer"]);

      this._container.appendChild(this._textContainer);

      this._renderTitle();

      this._renderDescription();
    }
  }, {
    key: "_renderBtnToggle",
    value: function _renderBtnToggle() {
      var _this = this;

      this.toggleWrapper = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createNode"])("div", ["toggleWrapper"]);
      var toggles = [{
        title: "Toggle",
        onClick: function onClick() {
          return _this.toggleByClass();
        },
        style: "toggleWrapper__btn"
      }];
      toggles.forEach(function (_ref) {
        var title = _ref.title,
            onClick = _ref.onClick,
            style = _ref.style;
        return new _Control_js__WEBPACK_IMPORTED_MODULE_1__["Control"](_this.toggleWrapper, title, onClick, style);
      });

      this._container.appendChild(this.toggleWrapper);
    }
  }, {
    key: "_setStyles",
    value: function _setStyles() {
      for (var style in this._styles) {
        this._container.style[style] = this._styles[style];
      }
    }
  }, {
    key: "render",
    value: function render() {
      this._renderContainer();

      this._renderImg();

      this._renderTextContainer();

      this._renderBtnToggle();

      this._root.appendChild(this._container);
    }
  }, {
    key: "toggleByClass",
    value: function toggleByClass() {
      if (this._isEnable) {
        this.activeToggle();
      } else {
        this.removeToggle();
      }
    }
  }, {
    key: "activeToggle",
    value: function activeToggle() {
      this.isEnable = false;

      this._textContainer.classList.add(ACTIVE_CLASS_NAME);

      this.description.classList.add(ACTIVE_CLASS_NAME);
    }
  }, {
    key: "removeToggle",
    value: function removeToggle() {
      this.isEnable = true;

      this._textContainer.classList.remove(ACTIVE_CLASS_NAME);

      this.description.classList.remove(ACTIVE_CLASS_NAME);
    }
  }, {
    key: "setActive",
    value: function setActive() {
      this._container.classList.add(ACTIVE_CLASS_NAME);
    }
  }, {
    key: "removeActive",
    value: function removeActive() {
      this._container.classList.remove(ACTIVE_CLASS_NAME);
    }
  }, {
    key: "isActive",
    get: function get() {
      return this._container.classList.contains(ACTIVE_CLASS_NAME);
    }
  }]);

  return Slide;
}();

/***/ }),

/***/ "./src/project_v.2/components/Slideshow.js":
/*!*************************************************!*\
  !*** ./src/project_v.2/components/Slideshow.js ***!
  \*************************************************/
/*! exports provided: Slideshow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slideshow", function() { return Slideshow; });
/* harmony import */ var _Slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide.js */ "./src/project_v.2/components/Slide.js");
/* harmony import */ var _Control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Control.js */ "./src/project_v.2/components/Control.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/project_v.2/components/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SOURCE_URL = "http://localhost:3000/ads";
var Slideshow =
/*#__PURE__*/
function () {
  function Slideshow() {
    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Slideshow);

    this._root = root;
    this._activeSlide = 0;
    this._data = [];
    this._slides = [];
  }

  _createClass(Slideshow, [{
    key: "init",
    value: function init() {
      this._renderWrapper();

      this._renderControls();

      this._fetchData();
    }
  }, {
    key: "_renderSlides",
    value: function _renderSlides() {
      var _this = this;

      var fragment = document.createDocumentFragment();
      this._slides = this._data.map(function (item, i) {
        return new _Slide_js__WEBPACK_IMPORTED_MODULE_0__["Slide"](fragment, item, {
          transform: "translateX(-".concat(100 * i, "%)")
        }, i === _this._activeSlide);
      });
      this._lastIndex = this._slides.length - 1;

      this._wrapper.appendChild(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["createNode"])("ul", ["sliderContainer"], undefined, fragment));
    }
  }, {
    key: "_renderWrapper",
    value: function _renderWrapper() {
      this._wrapper = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["createNode"])("div", ["wrapper"]);

      this._root.appendChild(this._wrapper);
    }
  }, {
    key: "_renderControls",
    value: function _renderControls() {
      var _this2 = this;

      this.controlsWrapper = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["createNode"])("div", ["controlsWrapper"]);
      var controls = [{
        title: "<<<",
        onClick: function onClick() {
          return _this2._showFirst();
        },
        style: "control"
      }, {
        title: "<",
        onClick: function onClick() {
          return _this2.previousSlide();
        },
        style: "control"
      }, {
        title: ">",
        onClick: function onClick() {
          return _this2.nextSlide();
        },
        style: "control"
      }, {
        title: ">>>",
        onClick: function onClick() {
          return _this2._showLast();
        },
        style: "control"
      }];
      controls.forEach(function (_ref) {
        var title = _ref.title,
            onClick = _ref.onClick,
            style = _ref.style;
        return new _Control_js__WEBPACK_IMPORTED_MODULE_1__["Control"](_this2.controlsWrapper, title, onClick, style);
      });

      this._wrapper.appendChild(this.controlsWrapper);
    }
  }, {
    key: "_fetchData",
    value: function _fetchData() {
      var _this3 = this;

      fetch(SOURCE_URL).then(function (response) {
        return response.json();
      }).then(function (item) {
        _this3._data = item;

        _this3._renderSlides();
      });
    }
  }, {
    key: "_increaseIndex",
    value: function _increaseIndex() {
      if (this._activeSlide + 1 <= this._lastIndex) {
        this._activeSlide += 1;
      } else {
        this._activeSlide = 0;
      }
    }
  }, {
    key: "_decreaseIndex",
    value: function _decreaseIndex() {
      if (this._activeSlide - 1 >= 0) {
        this._activeSlide -= 1;
      } else {
        this._activeSlide = this._lastIndex;
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      this._hideSlide();

      this._decreaseIndex();

      this._showSlide();
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this._hideSlide();

      this._increaseIndex();

      this._showSlide();
    }
  }, {
    key: "_showSlide",
    value: function _showSlide() {
      this._slides[this._activeSlide].setActive();
    }
  }, {
    key: "_hideSlide",
    value: function _hideSlide() {
      this._slides[this._activeSlide].removeActive();
    }
  }, {
    key: "_showLast",
    value: function _showLast() {
      this._hideSlide();

      this._activeSlide = this._lastIndex;

      this._showSlide();
    }
  }, {
    key: "_showFirst",
    value: function _showFirst() {
      this._hideSlide();

      this._activeSlide = 0;

      this._showSlide();
    }
  }]);

  return Slideshow;
}();

/***/ }),

/***/ "./src/project_v.2/components/utils.js":
/*!*********************************************!*\
  !*** ./src/project_v.2/components/utils.js ***!
  \*********************************************/
/*! exports provided: createNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
var createNode = function createNode() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var children = arguments.length > 3 ? arguments[3] : undefined;
  var node = document.createElement(type);
  classNames.forEach(function (className) {
    return node.classList.add(className);
  });

  for (var style in styles) {
    node.style[style] = style[styles];
  }

  if (!children) {
    return node;
  }

  if (typeof children === 'string') {
    node.innerHTML = children;
  } else {
    node.appendChild(children);
  }

  return node;
};

/***/ }),

/***/ "./src/project_v.2/project_v.2.js":
/*!****************************************!*\
  !*** ./src/project_v.2/project_v.2.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_v_2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_v.2.scss */ "./src/project_v.2/project_v.2.scss");
/* harmony import */ var _project_v_2_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_v_2_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Slideshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Slideshow.js */ "./src/project_v.2/components/Slideshow.js");


var slideShow = new _components_Slideshow_js__WEBPACK_IMPORTED_MODULE_1__["Slideshow"]();
slideShow.init();

/***/ }),

/***/ "./src/project_v.2/project_v.2.scss":
/*!******************************************!*\
  !*** ./src/project_v.2/project_v.2.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 22:
/*!**********************************************!*\
  !*** multi ./src/project_v.2/project_v.2.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/project_v.2/project_v.2.js */"./src/project_v.2/project_v.2.js");


/***/ })

/******/ });
//# sourceMappingURL=project_v.2.js.map