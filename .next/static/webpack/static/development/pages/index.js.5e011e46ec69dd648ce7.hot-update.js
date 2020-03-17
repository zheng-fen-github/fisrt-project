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
    console.log(e.target);
    var bu = document.querySelector('#accform button');

    if (e.target.value !== '') {
      buevent(1);
    } else {
      buevent(0);
      bu.disabled = true;
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
      lineNumber: 40
    },
    __self: this
  }, __jsx("label", {
    htmlFor: type,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, type == 'account' ? 'Email or account' : 'password'), __jsx("input", {
    type: type == 'account' ? 'text' : 'password',
    name: type,
    id: type,
    onFocus: focusevent,
    onInput: inputevent,
    onBlur: blurevent,
    className: "jsx-1250353993",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1250353993",
    __self: this
  }, ".account.jsx-1250353993{opacity:1;-webkit-transition:all 0.7s;transition:all 0.7s;}.password.jsx-1250353993{opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;position:absolute;width:100%;top:0;}input.jsx-1250353993{width:100%;height:5vh;border:none;background:none;outline:none;font-size:3vh;position:relative;color:white;display:block;z-index:2;}.account.jsx-1250353993 input.jsx-1250353993{z-index:10;}label.jsx-1250353993{color:#eee;font-size:3vh;position:absolute;top:0;-webkit-transition:all 0.3s;transition:all 0.3s;display:block;}.inputstatus.jsx-1250353993{top:-3.5vh;font-size:2vh;margin:0.5vh 0;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDRCLEFBRytCLEFBSUEsQUFPQyxBQVlELEFBR0MsQUFRRCxVQWpDVSxBQUlBLENBT1QsQUFZZCxBQUdpQixBQVFELFdBdEJELEdBZU0sQUFRSixTQXRCRSxNQXVCTCxHQVJMLE1BQ2MsQ0FmUCxFQXVCTSxNQXBDdEIsQUFJcUIsS0FVSixhQVRILENBVU8sVUFUWixNQUNULEVBU2UsRUFhRSxHQVFqQixPQXBCaUIsSUFhakIsVUFaYSxVQUNiIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0ICBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHtldmVudCxidWV2ZW50LHR5cGV9LHJlZikgPT4ge1xyXG4gICAgICAgIC8vTUfkuovku7ZcclxuICAgIGNvbnN0IGZvY3VzZXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmVFbGVtID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBwcmVFbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgZXZlbnQoMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJsdXJldmVudCA9KGUpID0+IHtcclxuICAgICAgICBldmVudCgwKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRldmVudCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgbGV0IGJ1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY2Zvcm0gYnV0dG9uJyk7XHJcbiAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMCk7XHJcbiAgICAgICAgICAgIGJ1LmRpc2FibGVkID10cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5a6a5LmJ5raI5aSx5LqL5Lu2XHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgY29uc3QgdHJhbnNpID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYoIWUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY291bnQnKSkge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgfSAvL+aYr+WQpui0puWPt+i+k+WFpeahhiDmo4DmtYtcclxuICAgICAgICAgICBsZXQgb3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoZS5jdXJyZW50VGFyZ2V0KS5vcGFjaXR5O1xyXG4gICAgICAgICAgIGlmKG9wYWNpdHkgPT0gMCkgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsdHJhbnNpKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9ICByZWYgPSB7cmVmfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICB7dHlwZT09J2FjY291bnQnPydFbWFpbCBvciBhY2NvdW50JzoncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT17dHlwZT09J2FjY291bnQnPyd0ZXh0JzoncGFzc3dvcmQnfSBuYW1lPXt0eXBlfSBpZD17dHlwZX0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17Zm9jdXNldmVudH1cclxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2lucHV0ZXZlbnR9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9IHtibHVyZXZlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuN3M7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC5wYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC43cztcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jazsgXHJcbiAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MjsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAuYWNjb3VudCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnB1dHN0YXR1cyB7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDotMy41dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MC41dmggMDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\input.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.5e011e46ec69dd648ce7.hot-update.js.map