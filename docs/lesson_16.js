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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_16/button.js":
/*!*********************************!*\
  !*** ./src/lesson_16/button.js ***!
  \*********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/lesson_16/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Button =
/*#__PURE__*/
function () {
  function Button() {
    var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '!TEST!';
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var clickHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
      return console.log('@@EMPTY@@');
    };

    _classCallCheck(this, Button);

    this.targetElement = targetElement;
    this.title = title;
    this.type = type;
    this.clickHandler = clickHandler;
    this.render();
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.button = document.createElement('button');
      this.button.classList.add('btn'); // this.addType()

      this.button.textContent = 'Title';
      this.targetElement.appendChild(this.button);
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./src/lesson_16/button.scss":
/*!***********************************!*\
  !*** ./src/lesson_16/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/lamp.js":
/*!*******************************!*\
  !*** ./src/lesson_16/lamp.js ***!
  \*******************************/
/*! exports provided: Lamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp.scss */ "./src/lesson_16/lamp.scss");
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lamp_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Lamp =
/*#__PURE__*/
function () {
  function Lamp() {
    var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Lamp);

    this.targetElement = targetElement;
    this.render();
  }

  _createClass(Lamp, [{
    key: "render",
    value: function render() {
      this.lamp = document.createElement("div");
      this.lamp.classList.add("lamp");
      this.lamp.style.backgroundColor === "";
      this.targetElement.appendChild(this.lamp);
    }
  }, {
    key: "start",
    value: function start() {
      function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      function getRandomColor() {
        return "rgb(" + randomValue(0, 255) + "," + randomValue(0, 255) + "," + randomValue(0, 255) + ")";
      }

      function setColor() {
        this.lamp.style.backgroundColor = getRandomColor();
      }

      function startInterval() {
        intervalId = setInterval(function () {
          setColor();
        }, 1500);
      }

      setColor();
      startInterval();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.lamp.style.backgroundColor === "";
      clearInterval(this.intervalId);
    }
  }]);

  return Lamp;
}();



/***/ }),

/***/ "./src/lesson_16/lamp.scss":
/*!*********************************!*\
  !*** ./src/lesson_16/lamp.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/lesson_16/button.js");
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp */ "./src/lesson_16/lamp.js");



var btn = new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector('body'), 'Click me');
var lamp = new _lamp__WEBPACK_IMPORTED_MODULE_2__["Lamp"](document.querySelector('body'));

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 17:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16.js.map