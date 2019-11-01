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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_17/commentList.js":
/*!**************************************!*\
  !*** ./src/lesson_17/commentList.js ***!
  \**************************************/
/*! exports provided: commentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentList", function() { return commentList; });
/* harmony import */ var _commentList_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentList.scss */ "./src/lesson_17/commentList.scss");
/* harmony import */ var _commentList_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commentList_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var getRandomId = function getRandomId() {
  return Math.floor(Math.random() * 9999);
};

var commentList =
/*#__PURE__*/
function () {
  function commentList() {
    var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, commentList);

    this.rootElement = rootElement;
    this.comments = [];
    this.init();
  }

  _createClass(commentList, [{
    key: "init",
    value: function init() {
      this.getComments();
      this.render();
    }
  }, {
    key: "getComments",
    value: function getComments() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:4001/comments");
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this.comments = JSON.parse(xhr.response);
            console.log(_this.comments);

            _this.renderList();
          } else {
            _this.rootElement.innerHTML = "ERROR";
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.renderWrapper();
      this.renderInputAuthor(); // this.renderInputText();
    }
  }, {
    key: "renderInputAuthor",
    value: function renderInputAuthor() {
      var _this2 = this;

      this.form = document.createElement("form");
      this.input = document.createElement("input");
      this.input.classList.add('name');
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2.addAuthor();
      });
      this.form.appendChild(this.input);
      this.wrapper.appendChild(this.form);
    } //   renderInputText() {
    //       this.form = document.createElement('form');
    //       this.input = document.createElement('input');
    //       this.input.classList.add('comment');
    //       this.form.addEventListener('submit', e => {
    //           e.preventDefault();
    //           this.addText();
    //       });
    //       this.form.appendChild(this.input);
    //       this.wrapper.appendChild(this.form);
    //   }
    //   addText() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("POST", "http://localhost:4001/comments");
    //     const text = {
    //         text: this.input.value,
    //     };
    //     xhr.setRequestHeader('Content-Type', 'application/json')
    //     xhr.send(JSON.stringify(text));
    //     xhr.onreadystatechange = () => {
    //       if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //           this.comments.push(JSON.parse(xhr.response));
    //           this.renderItem(JSON.parse(xhr.response));
    //           this.input.value = '';
    //         } else {
    //           this.rootElement.innerHTML = "ERROR";
    //         }
    //       }
    //     };
    //   }

  }, {
    key: "addAuthor",
    value: function addAuthor() {
      var _this3 = this;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:4001/comments");
      var author = {
        author: this.input.value
      };
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(author));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this3.comments.push(JSON.parse(xhr.response));

            _this3.renderItem(JSON.parse(xhr.response));

            _this3.input.value = '';
          } else {
            _this3.rootElement.innerHTML = "ERROR";
          }
        }
      };
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper() {
      this.wrapper = document.createElement("div");
      this.rootElement.appendChild(this.wrapper);
    }
  }, {
    key: "renderList",
    value: function renderList() {
      if (this.ul) {
        this.ul.innerHTML = '';
      } else {
        this.ul = document.createElement('ul');
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var comment = _step.value;
          this.renderItem(comment);
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

      this.wrapper.appendChild(this.ul);
    }
  }, {
    key: "renderItem",
    value: function renderItem(comment) {
      var li = document.createElement("li");
      li.innerHTML = comment.author;
      li.id = comment.id;
      this.ul.appendChild(li);
    }
  }, {
    key: "getDate",
    value: function getDate() {
      this.currentDate = new Date();
    }
  }]);

  return commentList;
}();

/***/ }),

/***/ "./src/lesson_17/commentList.scss":
/*!****************************************!*\
  !*** ./src/lesson_17/commentList.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_17/lesson_17.js":
/*!************************************!*\
  !*** ./src/lesson_17/lesson_17.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_17.scss */ "./src/lesson_17/lesson_17.scss");
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentList */ "./src/lesson_17/commentList.js");


var commentLsit = new _commentList__WEBPACK_IMPORTED_MODULE_1__["commentList"]();

/***/ }),

/***/ "./src/lesson_17/lesson_17.scss":
/*!**************************************!*\
  !*** ./src/lesson_17/lesson_17.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 18:
/*!******************************************!*\
  !*** multi ./src/lesson_17/lesson_17.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_17/lesson_17.js */"./src/lesson_17/lesson_17.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_17.js.map