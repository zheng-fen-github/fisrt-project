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
    className: "jsx-2714131307" + " " + 'test has',
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
    className: "jsx-2714131307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2714131307",
    __self: this
  }, "div.jsx-2714131307{min-height:100%;min-width:100%;}img.jsx-2714131307{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:go-jsx-2714131307 .5s;animation:go-jsx-2714131307 .5s;}@-webkit-keyframes go-jsx-2714131307{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2714131307{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xccGhvdG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdxQyxBQUlOLEFBTWdCLEFBR0EsV0FSVixLQUpELGVBQ2xCLHNDQVNPLEFBR0EsMkJBUlksd0VBQ2xCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xccGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVc2VEYXRhR2V0IGZyb20gJy4vdXNlRGF0ZUdldCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vcHVibGljL2xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBQaG90byh7aWR9KSB7XHJcbiAgICBjb25zdCBbYmxvYixzZXRCbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NyYyxzZXRTcmNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1bmNvdW50LHNldFVuY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2dldHBob3RvLyR7aWR9YClcclxuICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9YXdhaXQgcmVxdWVzdC5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgIGlmKCF1bmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICBzZXRCbG9iKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICBzZXRTcmMoVVJMLmNyZWF0ZU9iamVjdFVSTChyZXN1bHQpKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSgpXHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVuY291bnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0IGhhcyc+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgey8qIHsgYmxvYiAmJiAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYmxvYil9IGFsdD1cIueFp+eJh1wiLz59ICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBsb2FkaW5nID8gPExvYWRpbmcvPiA6IDxpbWcgc3JjPXtzcmN9IGFsdD1cIueFp+eJh1wiLz5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmdvIC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\public\\\\photo.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

})
//# sourceMappingURL=home.js.3e6f7f8208fc06501df3.hot-update.js.map