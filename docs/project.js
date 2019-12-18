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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/project/app.js":
/*!****************************!*\
  !*** ./src/project/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mainBox_renderMainBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mainBox/renderMainBox */ "./src/project/components/mainBox/renderMainBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var AdvertisitingBlock =
/*#__PURE__*/
function () {
  function AdvertisitingBlock() {
    var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    _classCallCheck(this, AdvertisitingBlock);

    this.rootElement = rootElement;
    this.tasks = [{
      "title": "Time to Share: 6 for $3.99*",
      "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png"
    }, {
      "title": "Rise 'n shine",
      "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png"
    }, {
      "title": "PM Snackers: Brownie Bites",
      "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png"
    }];
    this.render();
  }

  _createClass(AdvertisitingBlock, [{
    key: "render",
    value: function render() {
      this.infoBox = Object(_components_mainBox_renderMainBox__WEBPACK_IMPORTED_MODULE_2__["renderMainBox"])();
      this.renderImages();
    }
  }, {
    key: "renderImages",
    value: function renderImages() {
      this.imgContainer = document.createElement('div');
      this.imgContainer.classList.add('imgContainer');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          var image = document.createElement('img');
          image.src = task.img;
          image.classList.add('imgContainer__img');
          this.imgContainer.appendChild(image);
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

      this.infoBox.appendChild(this.imgContainer);
    }
  }]);

  return AdvertisitingBlock;
}();

var advertistingBlock = new AdvertisitingBlock();

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