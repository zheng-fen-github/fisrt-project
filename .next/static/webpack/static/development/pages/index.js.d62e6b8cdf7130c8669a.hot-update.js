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
      console.log(e.target.parentElement.nextElementSibling.nextElementSibling);
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
  }, ".account.jsx-1250353993{opacity:1;-webkit-transition:all 0.7s;transition:all 0.7s;}.password.jsx-1250353993{opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;position:absolute;width:100%;top:0;}input.jsx-1250353993{width:100%;height:5vh;border:none;background:none;outline:none;font-size:3vh;position:relative;color:white;display:block;z-index:2;}.account.jsx-1250353993 input.jsx-1250353993{z-index:10;}label.jsx-1250353993{color:#eee;font-size:3vh;position:absolute;top:0;-webkit-transition:all 0.3s;transition:all 0.3s;display:block;}.inputstatus.jsx-1250353993{top:-3.5vh;font-size:2vh;margin:0.5vh 0;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBRytCLEFBSUEsQUFPQyxBQVlELEFBR0MsQUFRRCxVQWpDVSxBQUlBLENBT1QsQUFZZCxBQUdpQixBQVFELFdBdEJELEdBZU0sQUFRSixTQXRCRSxNQXVCTCxHQVJMLE1BQ2MsQ0FmUCxFQXVCTSxNQXBDdEIsQUFJcUIsS0FVSixhQVRILENBVU8sVUFUWixNQUNULEVBU2UsRUFhRSxHQVFqQixPQXBCaUIsSUFhakIsVUFaYSxVQUNiIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0ICBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHtldmVudCxidWV2ZW50LHR5cGV9LHJlZikgPT4ge1xyXG4gICAgICAgIC8vTUfkuovku7ZcclxuICAgIGNvbnN0IGZvY3VzZXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmVFbGVtID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBwcmVFbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgZXZlbnQoMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJsdXJldmVudCA9KGUpID0+IHtcclxuICAgICAgICBldmVudCgwKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0c3RhdHVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRldmVudCA9IChlKSA9PiB7XHJcbiAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ1ZXZlbnQoMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WumuS5iea2iOWkseS6i+S7tlxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRyYW5zaSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50JykpIHtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgIH0gLy/mmK/lkKbotKblj7fovpPlhaXmoYYg5qOA5rWLXHJcbiAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGUuY3VycmVudFRhcmdldCkub3BhY2l0eTtcclxuICAgICAgICAgICBpZihvcGFjaXR5ID09IDApIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLHRyYW5zaSlcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSAgcmVmID0ge3JlZn0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0eXBlfT5cclxuICAgICAgICAgICAgICAge3R5cGU9PSdhY2NvdW50Jz8nRW1haWwgb3IgYWNjb3VudCc6J3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGU9PSdhY2NvdW50Jz8ndGV4dCc6J3Bhc3N3b3JkJ30gbmFtZT17dHlwZX0gaWQ9e3R5cGV9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e2ZvY3VzZXZlbnR9XHJcbiAgICAgICAgICAgICAgICBvbklucHV0PXtpbnB1dGV2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPSB7Ymx1cmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjdzO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAucGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuN3M7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7IFxyXG4gICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjI7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgLmFjY291bnQgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5wdXRzdGF0dXMgeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0b3A6LTMuNXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToydmg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAuNXZoIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\input.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.d62e6b8cdf7130c8669a.hot-update.js.map