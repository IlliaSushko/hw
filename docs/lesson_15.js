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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_15/clock.js":
/*!********************************!*\
  !*** ./src/lesson_15/clock.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/illiasushko/Desktop/WebAcademy/homework-master/src/lesson_15/clock.js: Unexpected token (55:4)\n\n\u001b[0m \u001b[90m 53 | \u001b[39m    \u001b[36mconst\u001b[39m currentDate \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mDate\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 54 | \u001b[39m    \u001b[36mconst\u001b[39m month\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 55 | \u001b[39m    hourseElement\u001b[33m.\u001b[39mtextContent \u001b[33m=\u001b[39m normalisedDate(currentDate\u001b[33m.\u001b[39mgetDate())\u001b[33m;\u001b[39m\u001b[90m//показать день\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 56 | \u001b[39m    minElement\u001b[33m.\u001b[39mtextContent \u001b[33m=\u001b[39m normalisedDate(currentDate\u001b[33m.\u001b[39mgetMonth() \u001b[33m+\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[90m//показать месяц\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 57 | \u001b[39m    secElement\u001b[33m.\u001b[39mtextContent \u001b[33m=\u001b[39m normalisedDate(currentDate\u001b[33m.\u001b[39mgetFullYear())\u001b[33m;\u001b[39m\u001b[90m//показать полный год\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 58 | \u001b[39m  }\u001b[0m\n    at Object.raise (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Object.unexpected (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:5167:16)\n    at Object.parseVar (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7947:18)\n    at Object.parseVarStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7762:10)\n    at Object.parseStatementContent (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7358:21)\n    at Object.parseStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseBlock (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7839:10)\n    at Object.parseFunctionBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:6909:24)\n    at Object.parseFunctionBodyAndFinish (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:6879:10)\n    at withTopicForbiddingContext (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:8006:12)\n    at Object.withTopicForbiddingContext (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7185:14)\n    at Object.parseFunction (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:8005:10)\n    at Object.parseFunctionStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7639:17)\n    at Object.parseStatementContent (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7329:21)\n    at Object.parseStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseBlock (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7839:10)\n    at Object.parseFunctionBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:6909:24)\n    at Object.parseFunctionBodyAndFinish (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:6879:10)\n    at withTopicForbiddingContext (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:8006:12)\n    at Object.withTopicForbiddingContext (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7185:14)\n    at Object.parseFunction (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:8005:10)\n    at Object.parseFunctionStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7639:17)\n    at Object.parseStatementContent (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7329:21)\n    at Object.parseStatement (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/Users/illiasushko/Desktop/WebAcademy/homework-master/node_modules/@babel/parser/lib/index.js:7855:10)");

/***/ }),

/***/ "./src/lesson_15/lesson_15.js":
/*!************************************!*\
  !*** ./src/lesson_15/lesson_15.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_15.scss */ "./src/lesson_15/lesson_15.scss");
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "./src/lesson_15/clock.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);



function myAnalitic() {
  var clickCounts = 0;
  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      clickCounts++;
      console.log(clickCounts);
    });
  }
}

Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])(undefined, 'SHORT');
Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])();
Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])();
myAnalitic();

/***/ }),

/***/ "./src/lesson_15/lesson_15.scss":
/*!**************************************!*\
  !*** ./src/lesson_15/lesson_15.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/*!******************************************!*\
  !*** multi ./src/lesson_15/lesson_15.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_15/lesson_15.js */"./src/lesson_15/lesson_15.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_15.js.map