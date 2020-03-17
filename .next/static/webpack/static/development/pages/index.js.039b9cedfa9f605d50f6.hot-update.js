webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/login/input.js":
/*!**********************************!*\
  !*** ./component/login/input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\login\\input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Input = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (_ref, ref) {
  var event = _ref.event,
      buevent = _ref.buevent,
      type = _ref.type;

  //MG事件
  var focusevent = function focusevent(e) {
    var preElem = e.target.previousElementSibling;
    preElem.classList.add('inputstatus');
    event(1);
  };

  var blurevent = function blurevent(e) {
    event(0);
    var input = e.target;

    if (input.value === '') {
      input.previousElementSibling.classList.remove('inputstatus');
    }
  };

  var inputevent = function inputevent(e) {
    if (e.target.value !== '') {
      buevent(1);
    } else {
      buevent(0);
      console.log(e.target.parentElement);
    }
  }; //定义消失事件


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var transi = function transi(e) {
      if (!e.currentTarget.classList.contains('account')) {
        return;
      } //是否账号输入框 检测


      var opacity = getComputedStyle(e.currentTarget).opacity;
      if (opacity == 0) e.currentTarget.style.display = 'none';
    };

    ref.current.addEventListener('transitionend', transi);
  }, []);
  return __jsx("div", {
    ref: ref,
    className: "jsx-1250353993" + " " + (type || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("label", {
    htmlFor: type,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, type == 'account' ? 'Email or account' : 'password'), __jsx("input", {
    type: type == 'account' ? 'text' : 'password',
    name: type,
    id: type,
    required: true,
    onFocus: focusevent,
    onInput: inputevent,
    onBlur: blurevent,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1250353993",
    __self: this
  }, ".account.jsx-1250353993{opacity:1;-webkit-transition:all 0.7s;transition:all 0.7s;}.password.jsx-1250353993{opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;position:absolute;width:100%;top:0;}input.jsx-1250353993{width:100%;height:5vh;border:none;background:none;outline:none;font-size:3vh;position:relative;color:white;display:block;z-index:2;}.account.jsx-1250353993 input.jsx-1250353993{z-index:10;}label.jsx-1250353993{color:#eee;font-size:3vh;position:absolute;top:0;-webkit-transition:all 0.3s;transition:all 0.3s;display:block;}.inputstatus.jsx-1250353993{top:-3.5vh;font-size:2vh;margin:0.5vh 0;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBRytCLEFBSUEsQUFPQyxBQVlELEFBR0MsQUFRRCxVQWpDVSxBQUlBLENBT1QsQUFZZCxBQUdpQixBQVFELFdBdEJELEdBZU0sQUFRSixTQXRCRSxNQXVCTCxHQVJMLE1BQ2MsQ0FmUCxFQXVCTSxNQXBDdEIsQUFJcUIsS0FVSixhQVRILENBVU8sVUFUWixNQUNULEVBU2UsRUFhRSxHQVFqQixPQXBCaUIsSUFhakIsVUFaYSxVQUNiIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0ICBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHtldmVudCxidWV2ZW50LHR5cGV9LHJlZikgPT4ge1xyXG4gICAgICAgIC8vTUfkuovku7ZcclxuICAgIGNvbnN0IGZvY3VzZXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmVFbGVtID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBwcmVFbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgZXZlbnQoMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJsdXJldmVudCA9KGUpID0+IHtcclxuICAgICAgICBldmVudCgwKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRldmVudCA9IChlKSA9PiB7XHJcbiAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/lrprkuYnmtojlpLHkuovku7ZcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBjb25zdCB0cmFuc2kgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZighZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICB9IC8v5piv5ZCm6LSm5Y+36L6T5YWl5qGGIOajgOa1i1xyXG4gICAgICAgICAgIGxldCBvcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShlLmN1cnJlbnRUYXJnZXQpLm9wYWNpdHk7XHJcbiAgICAgICAgICAgaWYob3BhY2l0eSA9PSAwKSBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJyx0cmFuc2kpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0gIHJlZiA9IHtyZWZ9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dHlwZX0+XHJcbiAgICAgICAgICAgICAgIHt0eXBlPT0nYWNjb3VudCc/J0VtYWlsIG9yIGFjY291bnQnOidwYXNzd29yZCd9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlPT0nYWNjb3VudCc/J3RleHQnOidwYXNzd29yZCd9IG5hbWU9e3R5cGV9IGlkPXt0eXBlfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtmb2N1c2V2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25JbnB1dD17aW5wdXRldmVudH1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj0ge2JsdXJldmVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC43cztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLnBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjdzO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrOyBcclxuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgIC5hY2NvdW50IGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwOyAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlucHV0c3RhdHVzIHsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOi0zLjV2aDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowLjV2aCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\input.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.039b9cedfa9f605d50f6.hot-update.js.map