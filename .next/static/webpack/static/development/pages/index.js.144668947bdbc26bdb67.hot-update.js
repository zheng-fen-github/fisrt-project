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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
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
  }, "#accform.jsx-3028285870{width:30%;margin:0 auto;margin-top:10vh;position:relative;-webkit-transition:display 1s;transition:display 1s;}#accform.jsx-3028285870 .div.jsx-3028285870{min-height:5vh;}#accform.jsx-3028285870 form.jsx-3028285870{position:relative;}#accform.jsx-3028285870 button.jsx-3028285870{margin-top:3vh;width:100%;height:6vh;border-radius:6px;font-size:3vh;color:#5c52ff;background:#eee;display:block;opacity:0.2;border:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .buttonstatus.jsx-3028285870{background:#5c52ff;color:white;opacity:1;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .require.jsx-3028285870{-webkit-animation:account-jsx-3028285870 1.5s infinite;animation:account-jsx-3028285870 1.5s infinite;}#accform.jsx-3028285870 div.anima.jsx-3028285870{width:100%;height:2px;background:white;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:right 50%;-ms-transform-origin:right 50%;transform-origin:right 50%;}#accform.jsx-3028285870 div.go.jsx-3028285870{height:2px;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:left 50%;-ms-transform-origin:left 50%;transform-origin:left 50%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}@-webkit-keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}@keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHeUIsQUFHK0IsQUFPSyxBQUdHLEFBSUgsQUFhSSxBQU1hLEFBR3JCLEFBUUQsQUFRYSxBQUdELEFBR0EsVUF6RFIsQ0FvQ0gsQUFRUyxJQXJDdkIsQUFPYyxHQUhkLENBZ0JlLEFBeUJYLEFBR0EsQUFHQSxHQXJCZ0IsRUFwQ0QsRUFjTCxLQWFELE1BWlEsRUFzQk0sQ0FwQ04sQ0EyQkcsY0FaUCxHQWRTLFdBZVQsY0FDRSxHQTBCUyxHQWY1QixVQVZpQixHQWFqQixRQTdCQSxHQWlCZSxZQUNBLFVBaUJTLEVBaEJBLHVDQXVCSSxTQXRCNUIseUJBZ0I4QixvRUFPOUIseUJBTkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcbG9naW5cXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQuanMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3B1YmxpYy9sb2FkaW5nJ1xyXG5cclxuZnVuY3Rpb24gRm9ybSh7RXZ9KSB7XHJcbiAgICBjb25zdCBbYWNjb3VudE9rLCBzZXRBY2NvdW50T2tdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyDotKblj7fmo4DmtYvnirbmgIFcclxuICAgIGxldCBidXR0b25SZWY7ICAvLyDmjInpkq5SZWblrprkuYlcclxuICAgIGxldCBhbmltYVJlZjsgIC8vIOWKqOeUu1JlZlxyXG4gICAgbGV0IGFjY291bnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIGxldCBwYXNzd29yZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q5Lqk5LqL5Lu2ICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdGV2ZW50ID0gYXN5bmMgKGUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG4gICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0ICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luJyx7XHJcbiAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgIGJvZHk6Zm9ybWRhdGEsXHJcbiAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIGlmKHJlcXVlc3Qub2spIHsgICAgICBcclxuICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhJyk7ICAgICBcclxuICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBFdign5a+G56CB6ZSZ6K+vJyk7XHJcbiAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v6LSm5Y+36aqM6K+B5LqL5Lu2XHJcbiAgICBjb25zdCBBQ0NyaWdodCA9IChlKSA9PiB7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaWYoYWNjb3VudFJlZi5jdXJyZW50LmNoaWxkcmVuWzFdLnZhbHVlID09PSAnJykgcmV0dXJuIEV2KCfor7fovpPlhaXotKblj7cnKVxyXG4gICAgICAgICAgICAgICAgIGlmKCFhY2NvdW50T2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LmFkZCgncmVxdWlyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudCA9IGFjY291bnRSZWYuY3VycmVudC5jaGlsZHJlblsxXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpbi8ke2FjY291bnR9YCx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5vayl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWEoKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjb3VudE9rKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXYoJ+i0puWPt+S4jeWtmOWcqCcpICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFJlZi5jdXJyZW50LnN0eWxlLnZpc2liaWxpdHkgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25SZWYuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uc3RhdHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/liqjnlLvkuovku7Yg57q/5p2h5riQ5Y+Y5pWI5p6cXHJcbiAgICBjb25zdCBMaW5lQ29sb3IgPSAoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZihzZWxlY3Q8MSl7XHJcbiAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmUnKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmUnKVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liqjnlLvkuovku7Yg57q/5p2h5riQ5Y+Y5pWI5p6cXHJcbiAgICBjb25zdCBidXR0b25Db2xvciA9IChzZWxlY3QpID0+IHtcclxuICAgICAgICBpZihzZWxlY3Q8MSl7XHJcbiAgICAgICAgICAgIGJ1dHRvblJlZi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25zdGF0dXMnKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ1dHRvblJlZi5jbGFzc0xpc3QuYWRkKCdidXR0b25zdGF0dXMnKVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPSdhY2Nmb3JtJz4gICAgICAgXHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2hvbWVcIiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0+IGNsaWNrPC9hPlxyXG4gICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdGV2ZW50fT5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBldmVudD17TGluZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZXZlbnQ9e2J1dHRvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2FjY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0ge2FjY291bnRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e0xpbmVDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBidWV2ZW50PXtidXR0b25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7cGFzc3dvcmRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW5pbWEnIHJlZj17cmVmID0+IGFuaW1hUmVmID0gcmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgey8qIOWKqOeUu+e6v+adoSAqL31cclxuICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIHJlZiA9IHtyZWYgPT4gYnV0dG9uUmVmID0gcmVmfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0FDQ3JpZ2h0fSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgIHshZmV0Y2hpbmc/J2NvbnRpbnVlJzo8TG9hZGluZyBjb2xvcj0nd2hpdGUnLz59XHJcbiAgICAgICAgICAgICAgICAgPC9idXR0b24+ICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpkaXNwbGF5IDFzIDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gLmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6NXZoO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzVjNTJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSAuYnV0dG9uc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIC5yZXF1aXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmFjY291bnQgMS41cyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gZGl2LmFuaW1hIHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcztcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEsMSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IDUwJTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gZGl2LmdvIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46bGVmdCA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBhY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMWM1MDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\form.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.144668947bdbc26bdb67.hot-update.js.map