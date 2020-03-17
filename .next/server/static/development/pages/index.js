module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/login/form.js":
/*!*********************************!*\
  !*** ./component/login/form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "./component/login/input.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/loading */ "./component/public/loading.js");
var _jsxFileName = "C:\\test\\component\\login\\form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Form({
  Ev
}) {
  const {
    0: accountOk,
    1: setAccountOk
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // 账号检测状态

  let buttonRef; // 按钮Ref定义

  let animaRef; // 动画Ref

  let accountRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  let passwordRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(); //提交事件     

  const submitevent = async e => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    setFetching(true);
    let request = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: formdata,
      credentials: "include"
    });

    if (request.ok) {
      let a = document.querySelector('a');
      a.click();
    } else {
      Ev('密码错误');
    }
  }; //账号验证事件


  const ACCright = e => {
    if (accountRef.current.children[1].value === '') return Ev('请输入账号');

    if (!accountOk) {
      e.preventDefault();
      animaRef.classList.add('require');
      let account = accountRef.current.children[1].value;
      fetch(`http://localhost:3001/login/${account}`, {
        method: 'GET'
      }).then(res => {
        try {
          if (res.ok) {
            anima();
            setAccountOk(true);
          } else {
            animaRef.classList.remove('require');
            Ev('账号不存在');
          }
        } catch (err) {
          console.log(err);
        }
      });

      const anima = () => {
        accountRef.current.style.opacity = 0;
        passwordRef.current.style.opacity = 1;
        passwordRef.current.style.visibility = true;
        animaRef.classList.remove('require');
        buttonRef.classList.remove('buttonstatus');
      };
    }
  }; //动画事件 线条渐变效果


  const LineColor = select => {
    if (select < 1) {
      animaRef.classList.remove('require');
    } else {
      animaRef.classList.add('require');
    }
  }; //动画事件 线条渐变效果


  const buttonColor = select => {
    if (select < 1) {
      buttonRef.classList.remove('buttonstatus');
    } else {
      buttonRef.classList.add('buttonstatus');
    }
  };

  return __jsx("div", {
    id: "accform",
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    href: "http://localhost:3000/home",
    style: {
      display: 'none'
    },
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, " click"), __jsx("form", {
    onSubmit: submitevent,
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3028285870" + " " + "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_input_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "account",
    ref: accountRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_input_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "password",
    ref: passwordRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx("div", {
    ref: ref => animaRef = ref,
    className: "jsx-3028285870" + " " + 'anima',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("button", {
    ref: ref => buttonRef = ref,
    onClick: ACCright,
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, !fetching ? 'continue' : __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3028285870",
    __self: this
  }, "#accform.jsx-3028285870{width:30%;margin:0 auto;margin-top:10vh;position:relative;-webkit-transition:display 1s;transition:display 1s;}#accform.jsx-3028285870 .div.jsx-3028285870{min-height:5vh;}#accform.jsx-3028285870 form.jsx-3028285870{position:relative;}#accform.jsx-3028285870 button.jsx-3028285870{margin-top:3vh;width:100%;height:6vh;border-radius:6px;font-size:3vh;color:#5c52ff;background:#eee;display:block;opacity:0.2;border:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .buttonstatus.jsx-3028285870{background:#5c52ff;color:white;opacity:1;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .require.jsx-3028285870{-webkit-animation:account-jsx-3028285870 1.5s infinite;animation:account-jsx-3028285870 1.5s infinite;}#accform.jsx-3028285870 div.anima.jsx-3028285870{width:100%;height:2px;background:white;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:right 50%;-ms-transform-origin:right 50%;transform-origin:right 50%;}#accform.jsx-3028285870 div.go.jsx-3028285870{height:2px;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:left 50%;-ms-transform-origin:left 50%;transform-origin:left 50%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}@-webkit-keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}@keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHeUIsQUFHK0IsQUFPSyxBQUdHLEFBSUgsQUFhSSxBQU1hLEFBR3JCLEFBUUQsQUFRYSxBQUdELEFBR0EsVUF6RFIsQ0FvQ0gsQUFRUyxJQXJDdkIsQUFPYyxHQUhkLENBZ0JlLEFBeUJYLEFBR0EsQUFHQSxHQXJCZ0IsRUFwQ0QsRUFjTCxLQWFELE1BWlEsRUFzQk0sQ0FwQ04sQ0EyQkcsY0FaUCxHQWRTLFdBZVQsY0FDRSxHQTBCUyxHQWY1QixVQVZpQixHQWFqQixRQTdCQSxHQWlCZSxZQUNBLFVBaUJTLEVBaEJBLHVDQXVCSSxTQXRCNUIseUJBZ0I4QixvRUFPOUIseUJBTkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcbG9naW5cXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQuanMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3B1YmxpYy9sb2FkaW5nJ1xyXG5cclxuZnVuY3Rpb24gRm9ybSh7RXZ9KSB7XHJcbiAgICBjb25zdCBbYWNjb3VudE9rLCBzZXRBY2NvdW50T2tdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyDotKblj7fmo4DmtYvnirbmgIFcclxuICAgIGxldCBidXR0b25SZWY7ICAvLyDmjInpkq5SZWblrprkuYlcclxuICAgIGxldCBhbmltYVJlZjsgIC8vIOWKqOeUu1JlZlxyXG4gICAgbGV0IGFjY291bnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIGxldCBwYXNzd29yZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q5Lqk5LqL5Lu2ICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdGV2ZW50ID0gYXN5bmMgKGUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG4gICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpbicse1xyXG4gICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICBib2R5OmZvcm1kYXRhLFxyXG4gICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICBpZihyZXF1ZXN0Lm9rKSB7ICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYScpOyAgICAgXHJcbiAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgRXYoJ+WvhueggemUmeivrycpO1xyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL+i0puWPt+mqjOivgeS6i+S7tlxyXG4gICAgY29uc3QgQUNDcmlnaHQgPSAoZSkgPT4geyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlmKGFjY291bnRSZWYuY3VycmVudC5jaGlsZHJlblsxXS52YWx1ZSA9PT0gJycpIHJldHVybiBFdign6K+36L6T5YWl6LSm5Y+3JylcclxuICAgICAgICAgICAgICAgICBpZighYWNjb3VudE9rKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBhY2NvdW50UmVmLmN1cnJlbnQuY2hpbGRyZW5bMV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW4vJHthY2NvdW50fWAse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMub2speyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hKCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjY291bnRPayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2KCfotKblj7fkuI3lrZjlnKgnKSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50UmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRSZWYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5ID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbnN0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v5Yqo55S75LqL5Lu2IOe6v+adoea4kOWPmOaViOaenFxyXG4gICAgY29uc3QgTGluZUNvbG9yID0gKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYoc2VsZWN0PDEpe1xyXG4gICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlJylcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QuYWRkKCdyZXF1aXJlJylcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yqo55S75LqL5Lu2IOe6v+adoea4kOWPmOaViOaenFxyXG4gICAgY29uc3QgYnV0dG9uQ29sb3IgPSAoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgaWYoc2VsZWN0PDEpe1xyXG4gICAgICAgICAgICBidXR0b25SZWYuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uc3RhdHVzJylcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBidXR0b25SZWYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3RhdHVzJylcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD0nYWNjZm9ybSc+ICAgICAgIFxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ob21lXCIgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319PiBjbGljazwvYT5cclxuICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRldmVudH0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e0xpbmVDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBidWV2ZW50PXtidXR0b25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdhY2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHthY2NvdW50UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtMaW5lQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgYnVldmVudD17YnV0dG9uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0ge3Bhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hJyByZWY9e3JlZiA9PiBhbmltYVJlZiA9IHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKiDliqjnlLvnur/mnaEgKi99XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiByZWYgPSB7cmVmID0+IGJ1dHRvblJlZiA9IHJlZn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtBQ0NyaWdodH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICB7IWZldGNoaW5nPydjb250aW51ZSc6PExvYWRpbmcgY29sb3I9J3doaXRlJy8+fVxyXG4gICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ZGlzcGxheSAxcyA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIC5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjV2aDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjZ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gLmJ1dHRvbnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzVjNTJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSAucmVxdWlyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjphY2NvdW50IDEuNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIGRpdi5hbmltYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLDEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjpyaWdodCA1MCU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIGRpdi5nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCwxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzVjNTJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDFjNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzVjNTJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\form.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./component/login/input.js":
/*!**********************************!*\
  !*** ./component/login/input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\login\\input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Input = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({
  event,
  buevent,
  type
}, ref) => {
  //MG事件
  const focusevent = e => {
    let preElem = e.target.previousElementSibling;
    preElem.classList.add('inputstatus');
    event(1);
  };

  const blurevent = e => {
    event(0);
    let input = e.target;

    if (input.value === '') {
      input.previousElementSibling.classList.remove('inputstatus');
    }
  };

  const inputevent = e => {
    e.target.value !== '' ? buevent(1) : buevent(0);
    ;
  }; //定义消失事件


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const transi = e => {
      if (!e.currentTarget.classList.contains('account')) {
        return;
      } //是否账号输入框 检测


      let opacity = getComputedStyle(e.currentTarget).opacity;
      if (opacity == 0) e.currentTarget.style.display = 'none';
    };

    ref.current.addEventListener('transitionend', transi);
  }, []);
  return __jsx("div", {
    ref: ref,
    className: "jsx-1250353993" + " " + (type || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: type,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, type == 'account' ? 'Email or account' : 'password'), __jsx("input", {
    type: type == 'account' ? 'text' : 'password',
    name: type,
    id: type,
    onFocus: focusevent,
    onInput: inputevent,
    onBlur: blurevent,
    required: true,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1250353993",
    __self: undefined
  }, ".account.jsx-1250353993{opacity:1;-webkit-transition:all 0.7s;transition:all 0.7s;}.password.jsx-1250353993{opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;position:absolute;width:100%;top:0;}input.jsx-1250353993{width:100%;height:5vh;border:none;background:none;outline:none;font-size:3vh;position:relative;color:white;display:block;z-index:2;}.account.jsx-1250353993 input.jsx-1250353993{z-index:10;}label.jsx-1250353993{color:#eee;font-size:3vh;position:absolute;top:0;-webkit-transition:all 0.3s;transition:all 0.3s;display:block;}.inputstatus.jsx-1250353993{top:-3.5vh;font-size:2vh;margin:0.5vh 0;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzRCLEFBRytCLEFBSUEsQUFPQyxBQVlELEFBR0MsQUFRRCxVQWpDVSxBQUlBLENBT1QsQUFZZCxBQUdpQixBQVFELFdBdEJELEdBZU0sQUFRSixTQXRCRSxNQXVCTCxHQVJMLE1BQ2MsQ0FmUCxFQXVCTSxNQXBDdEIsQUFJcUIsS0FVSixhQVRILENBVU8sVUFUWixNQUNULEVBU2UsRUFhRSxHQVFqQixPQXBCaUIsSUFhakIsVUFaYSxVQUNiIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0ICBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHtldmVudCxidWV2ZW50LHR5cGV9LHJlZikgPT4ge1xyXG4gICAgICAgIC8vTUfkuovku7ZcclxuICAgIGNvbnN0IGZvY3VzZXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmVFbGVtID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBwcmVFbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgZXZlbnQoMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJsdXJldmVudCA9KGUpID0+IHtcclxuICAgICAgICBldmVudCgwKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRldmVudCA9IChlKSA9PiB7ICAgICAgXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSAnJz9idWV2ZW50KDEpOmJ1ZXZlbnQoMCk7OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL+WumuS5iea2iOWkseS6i+S7tlxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRyYW5zaSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50JykpIHtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgIH0gLy/mmK/lkKbotKblj7fovpPlhaXmoYYg5qOA5rWLXHJcbiAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGUuY3VycmVudFRhcmdldCkub3BhY2l0eTtcclxuICAgICAgICAgICBpZihvcGFjaXR5ID09IDApIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLHRyYW5zaSlcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSAgcmVmID0ge3JlZn0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0eXBlfT5cclxuICAgICAgICAgICAgICAge3R5cGU9PSdhY2NvdW50Jz8nRW1haWwgb3IgYWNjb3VudCc6J3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGU9PSdhY2NvdW50Jz8ndGV4dCc6J3Bhc3N3b3JkJ30gbmFtZT17dHlwZX0gaWQ9e3R5cGV9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e2ZvY3VzZXZlbnR9XHJcbiAgICAgICAgICAgICAgICBvbklucHV0PXtpbnB1dGV2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPSB7Ymx1cmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC43cztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLnBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjdzO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrOyBcclxuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgIC5hY2NvdW50IGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwOyAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlucHV0c3RhdHVzIHsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOi0zLjV2aDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowLjV2aCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\input.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./component/login/logo.js":
/*!*********************************!*\
  !*** ./component/login/logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\login\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Logo() {
  return __jsx("div", {
    id: "logo",
    className: "jsx-3920023039",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3920023039" + " " + "logobox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3920023039" + " " + 'logo-left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/logo-left.png",
    alt: "logo-left",
    className: "jsx-3920023039",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3920023039" + " " + 'logo-right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: "/logo-right.png",
    alt: "logo-right",
    className: "jsx-3920023039",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3920023039",
    __self: this
  }, "#logo.jsx-3920023039{height:10%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20vh;}.logobox.jsx-3920023039{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.logo-left.jsx-3920023039,.logo-right.jsx-3920023039{height:100%;}.logo-left.jsx-3920023039>img.jsx-3920023039,.logo-right.jsx-3920023039>img.jsx-3920023039{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxsb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQUcrQixBQU9FLEFBS0EsQUFHQSxXQWRGLENBUUcsQUFJaEIsQUFJQSxVQWZlLGdFQVFmLFVBUHlCLG1HQUNQLGdCQUNuQiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxsb2dpblxcbG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIExvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9J2xvZ28nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvLWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tbGVmdC5wbmdcIiBhbHQ9XCJsb2dvLWxlZnRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvLXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLXJpZ2h0LnBuZ1wiIGFsdD1cImxvZ28tcmlnaHRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICNsb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHZoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC5sb2dvYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC5sb2dvLWxlZnQsLmxvZ28tcmlnaHQgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAubG9nby1sZWZ0PmltZywubG9nby1yaWdodD5pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\logo.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./component/public/loading.js":
/*!*************************************!*\
  !*** ./component/public/loading.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\public\\loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Loading({
  color
}) {
  let rgba = color ? color : '#72BDE8';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2100974694", [rgba]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2100974694", [rgba]]]) + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2100974694", [rgba]]]) + " " + "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2100974694", [rgba]]]) + " " + "three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2100974694",
    dynamic: [rgba],
    __self: this
  }, `.content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:40px;height:40px;border-radius:20px;background:${rgba};margin:0 6px;}.one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}.two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}.three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xcbG9hZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUIsQUFJb0MsQUFPRCxBQU9nQixBQUdJLEFBR0EsQUFJUixBQUdBLEFBR0EsV0F0QlgsQ0FQRCxXQUNFLEFBT00sbUJBQ3FCLDJCQWV2QyxBQUdBLEFBR0EsYUFwQlksYUFDaEIsRUFUMEIsbUJBWTFCLFVBR0EsQUFHQSxzRUFqQnNCLDZGQUN0QiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxwdWJsaWNcXGxvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKHtjb2xvcn0pIHtcclxuICAgIGxldCByZ2JhID0gY29sb3I/Y29sb3I6JyM3MkJERTgnO1xyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCI+PC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudD5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiR7cmdiYX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDZweDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ28gMnMgIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudHdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnbyAycyAwLjJzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGhyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvIDJzIDAuNHMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xyXG4iXX0= */
/*@ sourceURL=C:\\test\\component\\public\\loading.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./component/signup/error.js":
/*!***********************************!*\
  !*** ./component/signup/error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\signup\\error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Error({
  error,
  errorEv,
  aaastyle
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (error && error != 'ok') setTimeout(() => errorEv(''), 2000);
  });

  if (error) {
    return __jsx("div", {
      onClick: () => errorEv(''),
      className: "jsx-1099435979" + " " + (aaastyle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1099435979",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, error), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1099435979",
      __self: this
    }, "div.jsx-1099435979{background:black;height:50px;width:80%;box-sizing:border-box;-webkit-transform:translateX(13%);-ms-transform:translateX(13%);transform:translateX(13%);margin-top:20px;padding:5px;color:white;text-align:center;border-radius:8px;position:relative;}.errorStyle.jsx-1099435979{background:red;width:30%;position:absolute;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWlCLEFBR3VDLEFBYUEsZUFDTCxFQWJBLFFBY1EsSUFiVixVQUNZLElBYVgsU0FDbUIsU0FiSix1RkFjN0IsR0FibUIsZ0JBQ0osWUFDQSxZQUNNLGtCQUNBLGtCQUNBLGtCQUNyQiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxzaWdudXBcXGVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gRXJyb3Ioe2Vycm9yLGVycm9yRXYsYWFhc3R5bGV9KSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yICE9ICdvaycpIHNldFRpbWVvdXQoKCkgPT4gZXJyb3JFdignJyksMjAwMCk7XHJcbiAgICB9KVxyXG4gICAgaWYoZXJyb3Ipe3JldHVybiAoXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBlcnJvckV2KCcnKX0gY2xhc3NOYW1lPXthYWFzdHlsZX0+XHJcbiAgICAgICAgICAgIDxoMT57ZXJyb3J9PC9oMT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDEzJSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuZXJyb3JTdHlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\signup\\\\error.js */"));
  } else {
    return null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./component/signup/form.js":
/*!**********************************!*\
  !*** ./component/signup/form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\signup\\form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Form({
  errorEv
}) {
  const submit = e => {
    e.preventDefault();
    let form = e.currentTarget;
    fetch('http://localhost:3001/login/registered', {
      method: 'POST',
      body: new FormData(e.currentTarget) //自动格式选择 form格式

    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then(error => {
          //请求错误处理
          console.log(error);

          if (error.includes('account')) {
            form.account.closest('.account').classList.add('error');
            errorEv(error);
          }

          if (error.includes('email')) {
            form.email.closest('.email').classList.add('error');
            errorEv(error);
          }
        });
      }
    }).then(result => {
      //请求成功处理
      if (result) {
        try {
          Array.from(form.querySelectorAll('.error')).forEach(item => item.classList.remove('error'));
          errorEv('');
          setTimeout(() => errorEv('ok'), 0);
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return __jsx("form", {
    onSubmit: submit,
    className: "jsx-3531505121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3531505121" + " " + "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "account",
    id: "account",
    placeholder: "account",
    required: true,
    className: "jsx-3531505121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3531505121" + " " + "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "email",
    required: true,
    className: "jsx-3531505121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3531505121" + " " + "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("input", {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "password",
    required: true,
    className: "jsx-3531505121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3531505121" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Continue",
    className: "jsx-3531505121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3531505121",
    __self: this
  }, "form.jsx-3531505121{width:80%;background:white;margin:0 auto;margin-top:8vh;padding:4vh 0;border-radius:12px;box-shadow:0 0 2px #eee;}form.jsx-3531505121>div.jsx-3531505121{width:80%;margin:0 auto;margin-bottom:4vh;border-radius:12px;}form.jsx-3531505121 .submit.jsx-3531505121{margin-bottom:0;}form.jsx-3531505121 input.jsx-3531505121{width:100%;height:6vh;font-size:3vh;border:solid #eee 2px;border-radius:12px;box-shadow:0 0 4px #eee;box-sizing:border-box;padding:2vh;outline:none;-webkit-animation:load-jsx-3531505121 1s;animation:load-jsx-3531505121 1s;}form.jsx-3531505121 input[type='submit'].jsx-3531505121{color:white;background:#5c52ff;padding:0;border:none;}.error.jsx-3531505121{box-shadow:0 0px 4px red;}form.jsx-3531505121 input[type='submit'].jsx-3531505121:hover{box-shadow:0 0 8px #888;}form.jsx-3531505121 input[type='submit'].jsx-3531505121:active{box-shadow:0 0 0;}@-webkit-keyframes load-jsx-3531505121{0%{opacity:0;-webkit-transform:translate(100px,0);-ms-transform:translate(100px,0);transform:translate(100px,0);}100%{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@keyframes load-jsx-3531505121{0%{opacity:0;-webkit-transform:translate(100px,0);-ms-transform:translate(100px,0);transform:translate(100px,0);}100%{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDRCLEFBR2dDLEFBU0UsQUFNTSxBQUdKLEFBWUEsQUFNYyxBQUdGLEFBR04sQUFJTCxBQUlDLFVBakRDLEFBU0QsQUFzQ2QsQUFJQSxDQWpDWSxDQVlPLElBZnRCLENBMkJBLEtBdkJrQixFQVRHLEFBNkJyQixDQUhBLEVBbkNlLElBOEJGLEtBWGEsS0FsQlYsQUE4QkQsQ0FyQk8sV0FzQnRCLEdBOUJlLEVBa0JRLEdBVHZCLFNBUm9CLE9Ba0JRLFlBakJILFFBOENyQixJQTVCc0IsUUF3QnRCLElBekNKLFVBa0JnQixZQUNDLGFBQ0ssMEVBQ3RCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEZvcm0oe2Vycm9yRXZ9KSB7XHJcbiAgICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luL3JlZ2lzdGVyZWQnLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KSAvL+iHquWKqOagvOW8j+mAieaLqSBmb3Jt5qC85byPXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKCBlcnJvciA9PiB7ICAvL+ivt+axgumUmeivr+WkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5pbmNsdWRlcygnYWNjb3VudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uYWNjb3VudC5jbG9zZXN0KCcuYWNjb3VudCcpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRXYoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5pbmNsdWRlcygnZW1haWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmVtYWlsLmNsb3Nlc3QoJy5lbWFpbCcpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRXYoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PnsgICAgICAvL+ivt+axguaIkOWKn+WkhOeQhlxyXG4gICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgIHRyeXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJykpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJykpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JFdignJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVycm9yRXYoJ29rJyksMClcclxuICAgICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50XCIgaWQ9XCJhY2NvdW50XCIgcGxhY2Vob2xkZXI9J2FjY291bnQncmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj0nZW1haWwnIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbnRpbnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjR2aCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMnB4ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODAlOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gLnN1Ym1pdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjZ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgI2VlZSAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCA0cHggI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmxvYWQgMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCA0cHggcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgOHB4ICM4ODg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J106YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMCA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\signup\\\\form.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./component/signup/index.js":
/*!***********************************!*\
  !*** ./component/signup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign */ "./component/signup/sign.js");
/* harmony import */ var _signupopen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signupopen.js */ "./component/signup/signupopen.js");
var _jsxFileName = "C:\\test\\component\\signup\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  let windowRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // 注册窗口Ref定义

  const {
    0: openStatus,
    1: setOpenStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openE = () => {
    if (!openStatus) {
      setOpenStatus(preState => !preState);
    } else {
      windowRef.current.hidden = false;
      windowRef.current.style.transform = 'translate(-50%,0)';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, openStatus && __jsx(_sign__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: windowRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_signupopen_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    event: openE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./component/signup/sign.js":
/*!**********************************!*\
  !*** ./component/signup/sign.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./component/signup/form.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./component/signup/title.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./component/signup/error.js");
var _jsxFileName = "C:\\test\\component\\signup\\sign.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SignUp = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const closeE = () => {
    //关闭窗口事件
    let elem = ref.current;
    elem.style.transform = 'translate(-50%,-1000px)';

    const transEv = e => {
      e.target.hidden = true;
    };

    elem.addEventListener('transitionend', transEv);
  };

  const errorEv = value => {
    setError(value);
  };

  return __jsx("div", {
    ref: ref,
    className: "jsx-883396449" + " " + 'signUP',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    onClick: closeE,
    className: "jsx-883396449" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("svg", {
    t: "1577522468145",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2589",
    width: "50",
    height: "50",
    className: "jsx-883396449" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("path", {
    d: "M633.749333 390.250667a21.333333 21.333333 0 0 0-30.165333 0L512 481.834667l-91.584-91.584a21.333333 21.333333 0 0 0-30.165333 30.165333L481.834667 512l-91.584 91.584a21.333333 21.333333 0 1 0 30.165333 30.165333L512 542.165333l91.584 91.584a21.333333 21.333333 0 0 0 30.165333-30.165333L542.165333 512l91.584-91.584a21.333333 21.333333 0 0 0 0-30.165333z",
    fill: "#2c2c2c",
    "p-id": "2591",
    className: "jsx-883396449",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))), __jsx(_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), error == 'ok' ? __jsx("div", {
    className: "jsx-883396449" + " " + 'ok',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "OK") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_form_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errorEv: errorEv,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_error__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error,
    errorEv: errorEv,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "883396449",
    __self: undefined
  }, ".signUP.jsx-883396449{width:800px;height:100vh;position:fixed;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:#5c52ff;padding:4vh;box-sizing:border-box;overflow:hidden;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;-webkit-animation:open-jsx-883396449 0.2s;animation:open-jsx-883396449 0.2s;z-index:11;}.ok.jsx-883396449{width:40vw;background:white;height:20vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5vh;margin:10vh 0 0 2vh;border-radius:25px;-webkit-animation:ok-jsx-883396449 0.5s;animation:ok-jsx-883396449 0.5s;}.close.jsx-883396449{height:5vh;width:5vh;position:absolute;top:10px;right:10px;}.close.jsx-883396449:hover{background:white;border-radius:50%;}.close.jsx-883396449 svg.jsx-883396449{height:100%;width:100%;}@-webkit-keyframes open-jsx-883396449{0%{-webkit-transform:translate(-50%,-1000px);-ms-transform:translate(-50%,-1000px);transform:translate(-50%,-1000px);}100%{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}@keyframes open-jsx-883396449{0%{-webkit-transform:translate(-50%,-1000px);-ms-transform:translate(-50%,-1000px);transform:translate(-50%,-1000px);}100%{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}@-webkit-keyframes ok-jsx-883396449{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes ok-jsx-883396449{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcc2lnbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3dCLEFBSWdDLEFBZUQsQUFZQSxBQU9NLEFBSUwsQUFLWixBQUdBLEFBS0EsQUFHQSxXQXRDaUIsQUFZUCxDQTNCRyxBQXFDUyxLQUhKLElBTkEsRUFVckIsRUFyQ2tCLEdBZUgsT0FtQmYsSUFOWSxDQTNCSCxBQWVPLE1BZEosRUEyQkUsT0ExQmdCLElBMkI5QixVQW1CSSxNQUdBLHFCQVJBLGtCQTNCc0IsQUF3QnRCLGtDQXJDa0IsbUJBQ1AsWUFDVSxzQkFDTixZQVdHLElBVk8seUZBV1osYUFWTSxDQVdBLG9CQUNELG1CQUNELG9DQVpQLFdBQ2QseUJBWUEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcc2lnbnVwXFxzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0uanMnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9lcnJvcidcclxuXHJcbmNvbnN0ICBTaWduVXAgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcyxyZWYpPT4ge1xyXG4gICAgY29uc3QgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNsb3NlRSA9ICgpID0+IHsgLy/lhbPpl63nqpflj6Pkuovku7ZcclxuICAgICAgICAgbGV0IGVsZW0gPSByZWYuY3VycmVudDsgXHJcbiAgICAgICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLC0xMDAwcHgpJztcclxuICAgICAgICAgY29uc3QgdHJhbnNFdiA9IChlKSA9PiB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgZS50YXJnZXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLHRyYW5zRXYpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJyb3JFdiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKHZhbHVlKTtcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWduVVAnIHJlZiA9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtjbG9zZUV9PlxyXG4gICAgICAgICAgICAgICA8c3ZnIHQ9XCIxNTc3NTIyNDY4MTQ1XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjU4OVwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiPjxwYXRoIGQ9XCJNNjMzLjc0OTMzMyAzOTAuMjUwNjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAtMzAuMTY1MzMzIDBMNTEyIDQ4MS44MzQ2NjdsLTkxLjU4NC05MS41ODRhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMC0zMC4xNjUzMzMgMzAuMTY1MzMzTDQ4MS44MzQ2NjcgNTEybC05MS41ODQgOTEuNTg0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDAgMzAuMTY1MzMzIDMwLjE2NTMzM0w1MTIgNTQyLjE2NTMzM2w5MS41ODQgOTEuNTg0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMzAuMTY1MzMzLTMwLjE2NTMzM0w1NDIuMTY1MzMzIDUxMmw5MS41ODQtOTEuNTg0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMC0zMC4xNjUzMzN6XCIgZmlsbD1cIiMyYzJjMmNcIiBwLWlkPVwiMjU5MVwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUaXRsZS8+XHJcbiAgICAgICAgICAgIHtlcnJvciA9PSAnb2snPyg8ZGl2IGNsYXNzTmFtZT0nb2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBlcnJvckV2PXtlcnJvckV2fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IGVycm9yRXY9e2Vycm9yRXZ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc2lnblVQIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcztcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246b3BlbiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjB2aDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjV2aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTB2aCAwIDAgMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246b2sgMC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjV2aDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MTBweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jbG9zZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jbG9zZSBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO3dpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG9wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC0xMDAwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG9rIHtcclxuICAgICAgICAgICAgICAgICAgICAwJXtcclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEsMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\signup\\\\sign.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./component/signup/signupopen.js":
/*!****************************************!*\
  !*** ./component/signup/signupopen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\signup\\signupopen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Signup({
  event
}) {
  return __jsx("div", {
    className: "jsx-4237363173" + " " + 'signuoOpen',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4237363173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Don't have an account ?", __jsx("p", {
    onClick: event,
    className: "jsx-4237363173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Sign up")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4237363173",
    __self: this
  }, ".signuoOpen.jsx-4237363173{position:fixed;bottom:20px;right:40px;color:white;}p.jsx-4237363173{color:#5c52ff;margin-left:10px;display:inline-block;padding:5px;}p.jsx-4237363173:hover{background:white;border-radius:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcc2lnbnVwb3Blbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTd0IsQUFHb0MsQUFNRCxBQU1FLGNBTEMsQ0FOTCxFQVlLLFVBWE4sSUFNVSxJQU14QixHQVhlLFlBQ2YsRUFLZSxZQUNmIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcc2lnbnVwb3Blbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCh7ZXZlbnR9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWdudW9PcGVuJz5cclxuICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQgPyBcclxuICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtldmVudH0+U2lnbiB1cDwvcD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgLnNpZ251b09wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzVjNTJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBwOmhvdmVyICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\signup\\\\signupopen.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./component/signup/title.js":
/*!***********************************!*\
  !*** ./component/signup/title.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\signup\\title.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Title() {
  return __jsx("div", {
    className: "jsx-3954397040" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3954397040",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Create Your Account"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3954397040",
    __self: this
  }, ".title.jsx-3954397040{color:white;font-size:2vh;width:100%;text-align:center;margin-top:10vh;-webkit-animation:scale-jsx-3954397040 0.6s;animation:scale-jsx-3954397040 0.6s;}@-webkit-keyframes scale-jsx-3954397040{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes scale-jsx-3954397040{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHNpZ251cFxcdGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTTRCLEFBR29DLEFBVWhCLEFBR0EsWUFaa0IsY0FDSCxXQUNPLGtCQUNGLGdCQUNNLElBS3pCLEFBR0EsNEVBUEEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcc2lnbnVwXFx0aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q3JlYXRlIFlvdXIgQWNjb3VudDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToydmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2NhbGUgMC42cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCwwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEsMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\signup\\\\title.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_login_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/login/logo */ "./component/login/logo.js");
/* harmony import */ var _component_login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/login/form */ "./component/login/form.js");
/* harmony import */ var _component_signup_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/signup/index */ "./component/signup/index.js");
/* harmony import */ var _component_signup_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/signup/error */ "./component/signup/error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\test\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Index() {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const Ev = value => {
    setError(value);
  };

  return __jsx("div", {
    id: "BG",
    className: "jsx-3571645351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3571645351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "cool next"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3571645351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(_component_login_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3571645351" + " " + 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3571645351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "sign in to zf.zom")), __jsx(_component_login_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Ev: Ev,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_component_signup_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_component_signup_error__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: error,
    errorEv: Ev,
    aaastyle: "errorStyle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1455064530",
    __self: this
  }, "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkIrQixBQUU2QixTQUNDLFVBQ2IiLCJmaWxlIjoiQzpcXHRlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50L2xvZ2luL2xvZ28nXHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudC9sb2dpbi9mb3JtJ1xyXG5pbXBvcnQgU2lnblVwQWxsIGZyb20gJy4uL2NvbXBvbmVudC9zaWdudXAvaW5kZXgnXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnQvc2lnbnVwL2Vycm9yJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IEV2ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBpZD0nQkcnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5jb29sIG5leHQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxwPnNpZ24gaW4gdG8gemYuem9tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0gRXY9e0V2fS8+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U2lnblVwQWxsLz4gICAgXHJcbiAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IGVycm9yRXY9e0V2fSBhYWFzdHlsZT0nZXJyb3JTdHlsZScvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICogeyAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgICAjQkcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGJnLmpwZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJ2aDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzozcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1220966908",
    __self: this
  }, "#BG.jsx-3571645351{padding-top:0;background-image:url(bg.jpg);background-position:center;width:100vw;height:100vh;overflow:hidden;position:relative;}.text.jsx-3571645351{color:white;font-weight:800;margin:0 auto;margin-top:2vh;font-size:3vh;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUk4QixBQVNGLFlBQ0ksRUFUYSxjQVVmLGNBQ0MsQ0FWWSxjQVdiLGFBVkYsQ0FXTyxXQVZOLGFBQ0csZ0JBQ0Usa0JBQ3JCLG1DQVFxQixrQkFDckIiLCJmaWxlIjoiQzpcXHRlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50L2xvZ2luL2xvZ28nXHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudC9sb2dpbi9mb3JtJ1xyXG5pbXBvcnQgU2lnblVwQWxsIGZyb20gJy4uL2NvbXBvbmVudC9zaWdudXAvaW5kZXgnXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnQvc2lnbnVwL2Vycm9yJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IEV2ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBpZD0nQkcnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5jb29sIG5leHQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxwPnNpZ24gaW4gdG8gemYuem9tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0gRXY9e0V2fS8+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U2lnblVwQWxsLz4gICAgXHJcbiAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IGVycm9yRXY9e0V2fSBhYWFzdHlsZT0nZXJyb3JTdHlsZScvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICogeyAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgICAjQkcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGJnLmpwZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJ2aDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzozcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\pages\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\test\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map