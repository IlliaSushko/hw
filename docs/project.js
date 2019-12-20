/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"project": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([20,"vendors~project"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/project/app.js":
/*!****************************!*\
  !*** ./src/project/app.js ***!
  \****************************/
/*! exports provided: AdvertisitingBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisitingBlock", function() { return AdvertisitingBlock; });
/* harmony import */ var _components_mainBox_renderMainBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mainBox/renderMainBox.js */ "./src/project/components/mainBox/renderMainBox.js");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domain */ "./node_modules/domain-browser/source/index.js");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ACTIVE_CLASS_NAME = 'contentContainer-active';
var AdvertisitingBlock =
/*#__PURE__*/
function () {
  function AdvertisitingBlock() {
    var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, AdvertisitingBlock);

    this.rootElement = rootElement;
    this.tasks = [];
    this.init();
    this.activeSlide = 0;
  }

  _createClass(AdvertisitingBlock, [{
    key: "init",
    value: function init() {
      this.getTasks();
      this.render();
      this.toggleSlideByActiveSlide();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3000/ads");
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this.tasks = JSON.parse(xhr.response);

            _this.renderContent();
          } else {
            _this.rootElement.innerHTML = "ERROR";
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.infoBox = Object(_components_mainBox_renderMainBox_js__WEBPACK_IMPORTED_MODULE_0__["renderMainBox"])();
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          this.contentContainer = document.createElement("div");
          this.contentContainer.classList.add("contentContainer");
          this.infoBox.appendChild(this.contentContainer);
          this.imgContainer = document.createElement("div");
          this.imgContainer.classList.add("imgContainer");
          this.contentContainer.appendChild(this.imgContainer);
          var image = document.createElement("img");
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
          this.description.innerHTML = task.description.slice(0, 50) + "...";
          this.textContainer.appendChild(this.description);
          this.span = document.createElement('span');
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
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "toggleSlideByActiveSlide",
    value: function toggleSlideByActiveSlide() {
      this.contentContainer[this.activeSlide].classList.add('contentContainer-active');
    }
  }]);

  return AdvertisitingBlock;
}();

/***/ }),

/***/ "./src/project/components/mainBox/renderMainBox.js":
/*!*********************************************************!*\
  !*** ./src/project/components/mainBox/renderMainBox.js ***!
  \*********************************************************/
/*! exports provided: renderMainBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMainBox", function() { return renderMainBox; });
function renderMainBox() {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var wrapper = document.createElement("div");
  var infoBox = document.createElement("div");
  var footerBox = document.createElement("div");
  var skipFirst = document.createElement("button");
  var prew = document.createElement("button");
  var next = document.createElement("button");
  var skipLast = document.createElement("button");
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
  return infoBox;
}

/***/ }),

/***/ "./src/project/project.js":
/*!********************************!*\
  !*** ./src/project/project.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.scss */ "./src/project/project.scss");
/* harmony import */ var _project_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/project/app.js");



var advertisitingBlock = new _app_js__WEBPACK_IMPORTED_MODULE_1__["AdvertisitingBlock"]();

/***/ }),

/***/ "./src/project/project.scss":
/*!**********************************!*\
  !*** ./src/project/project.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 20:
/*!**************************************!*\
  !*** multi ./src/project/project.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/project/project.js */"./src/project/project.js");


/***/ })

/******/ });
//# sourceMappingURL=project.js.map