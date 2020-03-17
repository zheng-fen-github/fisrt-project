webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/main/index.js":
/*!**************************************!*\
  !*** ./component/home/main/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _postcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postcontent */ "./component/home/main/postcontent.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./component/home/main/search.js");
/* harmony import */ var _postlist_postindex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postlist/postindex */ "./component/home/main/postlist/postindex.js");
/* harmony import */ var _editusermessage_context_ins_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../editusermessage/context/ins-context */ "./component/editusermessage/context/ins-context.js");
/* harmony import */ var _public_useDateGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/useDateGet */ "./component/public/useDateGet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/action */ "./component/home/main/redux/action.js");
/* harmony import */ var _public_loading_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/loading.js */ "./component/public/loading.js");
/* harmony import */ var _style_test_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../style/test.css */ "./style/test.css");
/* harmony import */ var _style_test_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_test_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\test\\component\\home\\main\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











function Index(props) {
  var url = 'http://localhost:3001/getphotos';

  var _UseGetData = Object(_public_useDateGet__WEBPACK_IMPORTED_MODULE_7__["default"])(undefined, url),
      _UseGetData2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseGetData, 3),
      state = _UseGetData2[0],
      fetching = _UseGetData2[1],
      error = _UseGetData2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (Array.isArray(state)) props.action(Object(_redux_action__WEBPACK_IMPORTED_MODULE_9__["GET"])(state));
  });

  var scrollEv = function scrollEv(e) {
    //滚动按钮显示事件
    var gotop = document.querySelector('.gotop');

    if (e.target.scrollTop > window.innerHeight / 2) {
      gotop.hidden = false;
    } else {
      gotop.hidden = true;
    }
  };

  var scrollTOP = function scrollTOP(e) {
    // 滚动到顶部事件
    e.target.closest('.main').scrollTop = 0;
    e.target.closest('.gotop').hidden = true;
  };

  return __jsx("div", {
    onScroll: scrollEv,
    className: "jsx-2643797549" + " " + 'main testm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_editusermessage_context_ins_context__WEBPACK_IMPORTED_MODULE_6__["Context"].Provider, {
    value: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, error ? __jsx("div", {
    className: "jsx-2643797549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "something is wrong") : props.data[0] ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_postcontent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    account: props.account,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_postlist_postindex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: props.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    hidden: true,
    onClick: scrollTOP,
    className: "jsx-2643797549" + " " + "gotop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2643797549" + " " + "iconfont icon-rising",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))) : __jsx(_public_loading_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2643797549",
    __self: this
  }, ".main.jsx-2643797549{height:100%;width:50%;background:#eeeef4;overflow:auto;padding:2vh 3vw 0 3vw;position:relative;}.main.jsx-2643797549::-webkit-scrollbar{display:none;}.gotop.jsx-2643797549{position:fixed;top:49vh;right:29vw;width:60px;height:60px;-webkit-animation:bu-jsx-2643797549 .5s 1;animation:bu-jsx-2643797549 .5s 1;}@-webkit-keyframes bu-jsx-2643797549{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes bu-jsx-2643797549{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.gotop.jsx-2643797549>i.jsx-2643797549{font-size:2rem;color:#1a79ff;background:white;border-radius:0.5rem;box-shadow:0 0 2px rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEeUIsQUFHd0MsQUFTQyxBQUdFLEFBVWYsQUFHQSxBQUdhLFlBM0JILENBU2IsRUFHWSxBQWdCRyxPQTNCTyxFQVlSLEtBZ0JJLE1BZkosTUFaRyxLQWFGLEFBZU8sU0EzQkcsR0FhSCxTQWVlLEVBVmpDLEFBR0EsUUFwQmlCLGtCQUNyQixPQTJCQSxnQ0FmQSIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxtYWluXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL3Bvc3Rjb250ZW50J1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL3Bvc3RsaXN0L3Bvc3RpbmRleCdcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tICcuLi8uLi9lZGl0dXNlcm1lc3NhZ2UvY29udGV4dC9pbnMtY29udGV4dCdcclxuaW1wb3J0IFVzZUdldERhdGEgZnJvbSAnLi4vLi4vcHVibGljL3VzZURhdGVHZXQnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7R0VUfSBmcm9tICcuL3JlZHV4L2FjdGlvbidcclxuaW1wb3J0ICBMb2FkaW5nIGZyb20gJy4uLy4uL3B1YmxpYy9sb2FkaW5nLmpzJ1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlL3Rlc3QuY3NzJ1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nZXRwaG90b3MnO1xyXG4gICAgY29uc3QgW3N0YXRlLGZldGNoaW5nLGVycm9yXSA9IFVzZUdldERhdGEodW5kZWZpbmVkLHVybCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICBpZihBcnJheS5pc0FycmF5KHN0YXRlKSkgcHJvcHMuYWN0aW9uKEdFVChzdGF0ZSkpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3Qgc2Nyb2xsRXYgPSAoZSkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rua5Yqo5oyJ6ZKu5pi+56S65LqL5Lu2XHJcbiAgICAgICAgbGV0IGdvdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvdG9wJyk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuc2Nyb2xsVG9wPndpbmRvdy5pbm5lckhlaWdodC8yKXtcclxuICAgICAgICAgICBnb3RvcC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ290b3AuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVE9QID0gKGUpID0+IHsgICAgICAgICAgICAgICAgLy8g5rua5Yqo5Yiw6aG26YOo5LqL5Lu2XHJcbiAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubWFpbicpLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZ290b3AnKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbiB0ZXN0bScgb25TY3JvbGw9e3Njcm9sbEV2fT4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wcy5kYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPzxkaXY+c29tZXRoaW5nIGlzIHdyb25nPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5kYXRhWzBdPzw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdCBhY2NvdW50PXtwcm9wcy5hY2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBtZXNzYWdlPXtwcm9wcy5tZXNzYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdG9wXCIgaGlkZGVuIG9uQ2xpY2s9e3Njcm9sbFRPUH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1yaXNpbmdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz46IDxMb2FkaW5nLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2VlZWVmNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjJ2aCAzdncgMCAzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdvdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQ5dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoyOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmJ1IC41cyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdvdG9wPmkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxYTc5ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgc3RhdGUgPSAoc3RvcmUpID0+KCB7ZGF0YTpzdG9yZX0pO1xyXG5jb25zdCBkaXNwYXRjaCA9IGRpc3BhdGNoID0+KCB7YWN0aW9uOmRpc3BhdGNofSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUsZGlzcGF0Y2gpKEluZGV4KVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\index.js */"));
}

var state = function state(store) {
  return {
    data: store
  };
};

var dispatch = function dispatch(_dispatch) {
  return {
    action: _dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(state, dispatch)(Index));

/***/ })

})
//# sourceMappingURL=home.js.4ad4c11b31008dc00bf4.hot-update.js.map