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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework9/homework9.js":
/*!************************************!*\
  !*** ./src/homework9/homework9.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework9_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework9.scss */ "./src/homework9/homework9.scss");
/* harmony import */ var _homework9_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework9_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _traffic_lighter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traffic_lighter.js */ "./src/homework9/traffic_lighter.js");
/* harmony import */ var _traffic_lighter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_traffic_lighter_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/homework9/homework9.scss":
/*!**************************************!*\
  !*** ./src/homework9/homework9.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/homework9/traffic_lighter.js":
/*!******************************************!*\
  !*** ./src/homework9/traffic_lighter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var trafficLighterRed = document.querySelector('.traffic__lighter-red');
var trafficLighterYellow = document.querySelector('.traffic__lighter-yellow');
var trafficLighterGreen = document.querySelector('.traffic__lighter-green');
var trafficTextStop = document.querySelector('.traffic__text-stop');
var trafficTextReady = document.querySelector('.traffic__text-ready');
var trafficTextGo = document.querySelector('.traffic__text-go');

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

/***/ }),

/***/ 10:
/*!******************************************!*\
  !*** multi ./src/homework9/homework9.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework9/homework9.js */"./src/homework9/homework9.js");


/***/ })

/******/ });
//# sourceMappingURL=homework9.js.map