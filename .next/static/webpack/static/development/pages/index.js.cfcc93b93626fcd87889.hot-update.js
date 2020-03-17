webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/login/form.js":
/*!*********************************!*\
  !*** ./component/login/form.js ***!
  \*********************************/
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
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ "./component/login/input.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/loading */ "./component/public/loading.js");

var _jsxFileName = "C:\\test\\component\\login\\form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Form(_ref) {
  var Ev = _ref.Ev;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      accountOk = _useState[0],
      setAccountOk = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      fetching = _useState2[0],
      setFetching = _useState2[1]; // 账号检测状态


  var buttonRef; // 按钮Ref定义

  var animaRef; // 动画Ref

  var accountRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  var passwordRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef(); //提交事件     

  var submitevent = function submitevent(e) {
    var formdata, request, a;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitevent$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formdata = new FormData(e.target);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('http://localhost:3001/login', {
              method: 'POST',
              body: formdata,
              credentials: "include"
            }));

          case 4:
            request = _context.sent;

            if (request.ok) {
              a = document.querySelector('a');
              a.click();
            } else {
              Ev('密码错误');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }; //账号验证事件


  var ACCright = function ACCright(e) {
    if (accountRef.current.children[1].value === '') return Ev('请输入账号');

    if (!accountOk) {
      e.preventDefault();
      animaRef.classList.add('require');
      var account = accountRef.current.children[1].value;
      fetch("http://localhost:3001/login/".concat(account), {
        method: 'GET'
      }).then(function (res) {
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

      var anima = function anima() {
        accountRef.current.style.opacity = 0;
        passwordRef.current.style.opacity = 1;
        passwordRef.current.style.visibility = true;
        animaRef.classList.remove('require');
        buttonRef.classList.remove('buttonstatus');
      };
    }
  }; //动画事件 线条渐变效果


  var LineColor = function LineColor(select) {
    if (select < 1) {
      animaRef.classList.remove('require');
    } else {
      animaRef.classList.add('require');
    }
  }; //动画事件 线条渐变效果


  var buttonColor = function buttonColor(select) {
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
      lineNumber: 83
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
      lineNumber: 84
    },
    __self: this
  }, " click"), __jsx("form", {
    onSubmit: submitevent,
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3028285870" + " " + "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_input_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "account",
    ref: accountRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_input_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "password",
    ref: passwordRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx("div", {
    ref: function ref(_ref2) {
      return animaRef = _ref2;
    },
    className: "jsx-3028285870" + " " + 'anima',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("button", {
    ref: function ref(_ref3) {
      return buttonRef = _ref3;
    },
    onClick: ACCright,
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, !fetching ? 'continue' : __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3028285870",
    __self: this
  }, "#accform.jsx-3028285870{width:30%;margin:0 auto;margin-top:10vh;position:relative;-webkit-transition:display 1s;transition:display 1s;}#accform.jsx-3028285870 .div.jsx-3028285870{min-height:5vh;}#accform.jsx-3028285870 form.jsx-3028285870{position:relative;}#accform.jsx-3028285870 button.jsx-3028285870{margin-top:3vh;width:100%;height:6vh;border-radius:6px;font-size:3vh;color:#5c52ff;background:#eee;display:block;opacity:0.2;border:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .buttonstatus.jsx-3028285870{background:#5c52ff;color:white;opacity:1;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .require.jsx-3028285870{-webkit-animation:account-jsx-3028285870 1.5s infinite;animation:account-jsx-3028285870 1.5s infinite;}#accform.jsx-3028285870 div.anima.jsx-3028285870{width:100%;height:2px;background:white;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:right 50%;-ms-transform-origin:right 50%;transform-origin:right 50%;}#accform.jsx-3028285870 div.go.jsx-3028285870{height:2px;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:left 50%;-ms-transform-origin:left 50%;transform-origin:left 50%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}@-webkit-keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}@keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHeUIsQUFHK0IsQUFPSyxBQUdHLEFBSUgsQUFhSSxBQU1hLEFBR3JCLEFBUUQsQUFRYSxBQUdELEFBR0EsVUF6RFIsQ0FvQ0gsQUFRUyxJQXJDdkIsQUFPYyxHQUhkLENBZ0JlLEFBeUJYLEFBR0EsQUFHQSxHQXJCZ0IsRUFwQ0QsRUFjTCxLQWFELE1BWlEsRUFzQk0sQ0FwQ04sQ0EyQkcsY0FaUCxHQWRTLFdBZVQsY0FDRSxHQTBCUyxHQWY1QixVQVZpQixHQWFqQixRQTdCQSxHQWlCZSxZQUNBLFVBaUJTLEVBaEJBLHVDQXVCSSxTQXRCNUIseUJBZ0I4QixvRUFPOUIseUJBTkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcbG9naW5cXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQuanMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3B1YmxpYy9sb2FkaW5nJ1xyXG5cclxuZnVuY3Rpb24gRm9ybSh7RXZ9KSB7XHJcbiAgICBjb25zdCBbYWNjb3VudE9rLCBzZXRBY2NvdW50T2tdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vIOi0puWPt+ajgOa1i+eKtuaAgVxyXG4gICAgbGV0IGJ1dHRvblJlZjsgIC8vIOaMiemSrlJlZuWumuS5iVxyXG4gICAgbGV0IGFuaW1hUmVmOyAgLy8g5Yqo55S7UmVmXHJcbiAgICBsZXQgYWNjb3VudFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgbGV0IHBhc3N3b3JkUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DkuqTkuovku7YgICAgIFxyXG4gICAgY29uc3Qgc3VibWl0ZXZlbnQgPSBhc3luYyAoZSkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW4nLHtcclxuICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgYm9keTpmb3JtZGF0YSxcclxuICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgaWYocmVxdWVzdC5vaykgeyAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTsgICAgIFxyXG4gICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIEV2KCflr4bnoIHplJnor68nKTtcclxuICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/otKblj7fpqozor4Hkuovku7ZcclxuICAgIGNvbnN0IEFDQ3JpZ2h0ID0gKGUpID0+IHsgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBpZihhY2NvdW50UmVmLmN1cnJlbnQuY2hpbGRyZW5bMV0udmFsdWUgPT09ICcnKSByZXR1cm4gRXYoJ+ivt+i+k+WFpei0puWPtycpXHJcbiAgICAgICAgICAgICAgICAgaWYoIWFjY291bnRPayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QuYWRkKCdyZXF1aXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gYWNjb3VudFJlZi5jdXJyZW50LmNoaWxkcmVuWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luLyR7YWNjb3VudH1gLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLm9rKXsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYSgpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50T2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdign6LSm5Y+35LiN5a2Y5ZyoJykgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eSA9IHRydWU7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblJlZi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25zdGF0dXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL+WKqOeUu+S6i+S7tiDnur/mnaHmuJDlj5jmlYjmnpxcclxuICAgIGNvbnN0IExpbmVDb2xvciA9IChzZWxlY3QpID0+IHtcclxuICAgICAgICAgIGlmKHNlbGVjdDwxKXtcclxuICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZScpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LmFkZCgncmVxdWlyZScpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WKqOeUu+S6i+S7tiDnur/mnaHmuJDlj5jmlYjmnpxcclxuICAgIGNvbnN0IGJ1dHRvbkNvbG9yID0gKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbGVjdDwxKXtcclxuICAgICAgICAgICAgYnV0dG9uUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbnN0YXR1cycpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYnV0dG9uUmVmLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0YXR1cycpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9J2FjY2Zvcm0nPiAgICAgICBcclxuICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvaG9tZVwiIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fT4gY2xpY2s8L2E+XHJcbiAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0ZXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtMaW5lQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgYnVldmVudD17YnV0dG9uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYWNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7YWNjb3VudFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBldmVudD17TGluZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZXZlbnQ9e2J1dHRvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHtwYXNzd29yZFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYScgcmVmPXtyZWYgPT4gYW5pbWFSZWYgPSByZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7Lyog5Yqo55S757q/5p2hICovfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgIDxidXR0b24gcmVmID0ge3JlZiA9PiBidXR0b25SZWYgPSByZWZ9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17QUNDcmlnaHR9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgeyFmZXRjaGluZz8nY29udGludWUnOjxMb2FkaW5nIGNvbG9yPSd3aGl0ZScvPn1cclxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmRpc3BsYXkgMXMgO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSAuZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDo1dmg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIC5idXR0b25zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gLnJlcXVpcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246YWNjb3VudCAxLjVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBkaXYuYW5pbWEge1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46cmlnaHQgNTAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBkaXYuZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAxYzUwO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1cclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\form.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.cfcc93b93626fcd87889.hot-update.js.map