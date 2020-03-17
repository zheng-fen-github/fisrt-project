webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/public/photo.js":
/*!***********************************!*\
  !*** ./component/public/photo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useDateGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDateGet */ "./component/public/useDateGet.js");
/* harmony import */ var _public_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/loading */ "./component/public/loading.js");

var _jsxFileName = "C:\\test\\component\\public\\photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Photo(_ref) {
  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      blob = _useState[0],
      setBlob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      src = _useState2[0],
      setSrc = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      uncount = _useState4[0],
      setUncount = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function _callee() {
      var request, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/getphoto/".concat(id)));

            case 3:
              request = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request.blob());

            case 6:
              result = _context.sent;

              if (!uncount) {
                setBlob(result);
                setSrc(URL.createObjectURL(result));
                setLoading(false);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    })();

    return function () {
      setUncount(true);
      URL.revokeObjectURL(blob);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3895593802" + " " + 'test has',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, loading ? __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : __jsx("img", {
    src: src,
    alt: "\u7167\u7247",
    className: "jsx-3895593802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3895593802",
    __self: this
  }, "div.jsx-3895593802{height:100%;width:100%;}img.jsx-3895593802{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:go-jsx-3895593802 .5s;animation:go-jsx-3895593802 .5s;}@-webkit-keyframes go-jsx-3895593802{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-3895593802{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xccGhvdG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdpQyxBQUlGLEFBTWdCLEFBR0EsV0FSVixDQUpMLFdBQ2QsOENBU08sQUFHQSwyQkFSWSx3RUFDbEIiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxccHVibGljXFxwaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZURhdGFHZXQgZnJvbSAnLi91c2VEYXRlR2V0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9wdWJsaWMvbG9hZGluZydcclxuXHJcbmZ1bmN0aW9uIFBob3RvKHtpZH0pIHtcclxuICAgIGNvbnN0IFtibG9iLHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3JjLHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VuY291bnQsc2V0VW5jb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2V0cGhvdG8vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICBsZXQgcmVzdWx0ID1hd2FpdCByZXF1ZXN0LmJsb2IoKTtcclxuICAgICAgICAgICAgICAgaWYoIXVuY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgIHNldEJsb2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgIHNldFNyYyhVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3VsdCkpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKClcclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VW5jb3VudCh0cnVlKTtcclxuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rlc3QgaGFzJz4gICAgICAgICAgXHJcbiAgICAgICAgICAgICB7LyogeyBibG9iICYmICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKX0gYWx0PVwi54Wn54mHXCIvPn0gICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8TG9hZGluZy8+IDogPGltZyBzcmM9e3NyY30gYWx0PVwi54Wn54mHXCIvPlxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmdvIC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\public\\\\photo.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

})
//# sourceMappingURL=home.js.46a6485a5893a0d75abe.hot-update.js.map