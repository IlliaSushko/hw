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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/practice5/practice5.js":
/*!************************************!*\
  !*** ./src/practice5/practice5.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practice5_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice5.scss */ "./src/practice5/practice5.scss");
/* harmony import */ var _practice5_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_practice5_scss__WEBPACK_IMPORTED_MODULE_0__);

var container = document.querySelector(".header");
lampSwitcher(container, 1000);
lampSwitcher(container, 300);
lampSwitcher(container, 2000);
lampSwitcher();

function lampSwitcher() {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var wrapper = document.createElement("div");
  var lamp = document.createElement("div");
  var button = document.createElement("button");
  wrapper.classList.add("lamp");
  lamp.classList.add("lamp__light");
  button.classList.add("lamp__button");
  lamp.style.width = size + "px";
  lamp.style.height = size + "px";
  button.textContent = "toggle";
  wrapper.appendChild(lamp);
  wrapper.appendChild(button);
  rootElement.appendChild(wrapper);
  var intervalId;

  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    return "rgb(" + randomValue(0, 255) + "," + randomValue(0, 255) + "," + randomValue(0, 255) + ")";
  }

  function setColor() {
    lamp.style.background = getRandomColor();
  }

  function startInterval() {
    intervalId = setInterval(function () {
      setColor();
    }, speed);
  }

  function start() {
    setColor();
    startInterval();
  }

  function stop() {
    clearInterval(intervalId);
    lamp.style.background = "";
  }

  function toggle() {
    if (lamp.style.background === "") {
      start();
    } else {
      stop();
    }
  }

  button.onclick = toggle;
}

/***/ }),

/***/ "./src/practice5/practice5.scss":
/*!**************************************!*\
  !*** ./src/practice5/practice5.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 14:
/*!******************************************!*\
  !*** multi ./src/practice5/practice5.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/practice5/practice5.js */"./src/practice5/practice5.js");


/***/ })

/******/ });
//# sourceMappingURL=practice5.js.map