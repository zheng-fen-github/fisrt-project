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

var _jsxFileName = "C:\\test\\component\\login\\form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Form(_ref) {
  var Ev = _ref.Ev;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      accountOk = _useState[0],
      setAccountOk = _useState[1]; // 账号检测状态


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
    console.log(accountRef.current.children[1].value == '');

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
      lineNumber: 81
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
      lineNumber: 82
    },
    __self: this
  }, " click"), __jsx("form", {
    onSubmit: submitevent,
    className: "jsx-3028285870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3028285870" + " " + "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_input_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "account",
    ref: accountRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_input_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: LineColor,
    buevent: buttonColor,
    type: "password",
    ref: passwordRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("div", {
    ref: function ref(_ref2) {
      return animaRef = _ref2;
    },
    className: "jsx-3028285870" + " " + 'anima',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
      lineNumber: 101
    },
    __self: this
  }, "continue")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3028285870",
    __self: this
  }, "#accform.jsx-3028285870{width:30%;margin:0 auto;margin-top:10vh;position:relative;-webkit-transition:display 1s;transition:display 1s;}#accform.jsx-3028285870 .div.jsx-3028285870{min-height:5vh;}#accform.jsx-3028285870 form.jsx-3028285870{position:relative;}#accform.jsx-3028285870 button.jsx-3028285870{margin-top:3vh;width:100%;height:6vh;border-radius:6px;font-size:3vh;color:#5c52ff;background:#eee;display:block;opacity:0.2;border:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .buttonstatus.jsx-3028285870{background:#5c52ff;color:white;opacity:1;-webkit-transition:all 0.4s;transition:all 0.4s;}#accform.jsx-3028285870 .require.jsx-3028285870{-webkit-animation:account-jsx-3028285870 1.5s infinite;animation:account-jsx-3028285870 1.5s infinite;}#accform.jsx-3028285870 div.anima.jsx-3028285870{width:100%;height:2px;background:white;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:right 50%;-ms-transform-origin:right 50%;transform-origin:right 50%;}#accform.jsx-3028285870 div.go.jsx-3028285870{height:2px;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:left 50%;-ms-transform-origin:left 50%;transform-origin:left 50%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}@-webkit-keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}@keyframes account-jsx-3028285870{0%{background:#5c52ff;}50%{background:#001c50;}100%{background:#5c52ff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGxvZ2luXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHeUIsQUFHK0IsQUFPSyxBQUdHLEFBSUgsQUFhSSxBQU1hLEFBR3JCLEFBUUQsQUFRYSxBQUdELEFBR0EsVUF6RFIsQ0FvQ0gsQUFRUyxJQXJDdkIsQUFPYyxHQUhkLENBZ0JlLEFBeUJYLEFBR0EsQUFHQSxHQXJCZ0IsRUFwQ0QsRUFjTCxLQWFELE1BWlEsRUFzQk0sQ0FwQ04sQ0EyQkcsY0FaUCxHQWRTLFdBZVQsY0FDRSxHQTBCUyxHQWY1QixVQVZpQixHQWFqQixRQTdCQSxHQWlCZSxZQUNBLFVBaUJTLEVBaEJBLHVDQXVCSSxTQXRCNUIseUJBZ0I4QixvRUFPOUIseUJBTkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcbG9naW5cXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQuanMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBGb3JtKHtFdn0pIHtcclxuICAgIGNvbnN0IFthY2NvdW50T2ssIHNldEFjY291bnRPa10gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgLy8g6LSm5Y+35qOA5rWL54q25oCBXHJcbiAgICBsZXQgYnV0dG9uUmVmOyAgLy8g5oyJ6ZKuUmVm5a6a5LmJXHJcbiAgICBsZXQgYW5pbWFSZWY7ICAvLyDliqjnlLtSZWZcclxuICAgIGxldCBhY2NvdW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICBsZXQgcGFzc3dvcmRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOS6pOS6i+S7tiAgICAgXHJcbiAgICBjb25zdCBzdWJtaXRldmVudCA9IGFzeW5jIChlKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcclxuICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpbicse1xyXG4gICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICBib2R5OmZvcm1kYXRhLFxyXG4gICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICBpZihyZXF1ZXN0Lm9rKSB7ICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYScpOyAgICAgXHJcbiAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgRXYoJ+WvhueggemUmeivrycpO1xyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL+i0puWPt+mqjOivgeS6i+S7tlxyXG4gICAgY29uc3QgQUNDcmlnaHQgPSAoZSkgPT4geyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRSZWYuY3VycmVudC5jaGlsZHJlblsxXS52YWx1ZSA9PSAnJylcclxuICAgICAgICAgICAgICAgICBpZighYWNjb3VudE9rKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hUmVmLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBhY2NvdW50UmVmLmN1cnJlbnQuY2hpbGRyZW5bMV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW4vJHthY2NvdW50fWAse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMub2speyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hKCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjY291bnRPayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2KCfotKblj7fkuI3lrZjlnKgnKSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50UmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRSZWYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5ID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWFSZWYuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uUmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbnN0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v5Yqo55S75LqL5Lu2IOe6v+adoea4kOWPmOaViOaenFxyXG4gICAgY29uc3QgTGluZUNvbG9yID0gKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYoc2VsZWN0PDEpe1xyXG4gICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlJylcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbmltYVJlZi5jbGFzc0xpc3QuYWRkKCdyZXF1aXJlJylcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yqo55S75LqL5Lu2IOe6v+adoea4kOWPmOaViOaenFxyXG4gICAgY29uc3QgYnV0dG9uQ29sb3IgPSAoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgaWYoc2VsZWN0PDEpe1xyXG4gICAgICAgICAgICBidXR0b25SZWYuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uc3RhdHVzJylcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBidXR0b25SZWYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3RhdHVzJylcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD0nYWNjZm9ybSc+ICAgICAgIFxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ob21lXCIgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319PiBjbGljazwvYT5cclxuICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRldmVudH0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e0xpbmVDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBidWV2ZW50PXtidXR0b25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdhY2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHthY2NvdW50UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtMaW5lQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgYnVldmVudD17YnV0dG9uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0ge3Bhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hJyByZWY9e3JlZiA9PiBhbmltYVJlZiA9IHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKiDliqjnlLvnur/mnaEgKi99XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiByZWYgPSB7cmVmID0+IGJ1dHRvblJlZiA9IHJlZn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtBQ0NyaWdodH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmRpc3BsYXkgMXMgO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSAuZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDo1dmg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjojNWM1MmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICNhY2Nmb3JtIC5idXR0b25zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgI2FjY2Zvcm0gLnJlcXVpcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246YWNjb3VudCAxLjVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBkaXYuYW5pbWEge1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46cmlnaHQgNTAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAjYWNjZm9ybSBkaXYuZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAxYzUwO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM1YzUyZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1cclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\login\\\\form.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.a80b6904ae2b3206ffdd.hot-update.js.map