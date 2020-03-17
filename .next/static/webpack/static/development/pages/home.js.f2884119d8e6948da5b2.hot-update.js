webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/main/postlist/list/features.js":
/*!*******************************************************!*\
  !*** ./component/home/main/postlist/list/features.js ***!
  \*******************************************************/
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
/* harmony import */ var _features_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features-comment */ "./component/home/main/postlist/list/features-comment.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\test\\component\\home\\main\\postlist\\list\\features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Features(_ref) {
  var id = _ref.id,
      comment = _ref.comment,
      message = _ref.message;
  var formRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  var buAllRef;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //判断帖子中是否收藏 点赞过
    console.log(message);

    if (message) {
      var result = message.like.findIndex(function (e) {
        return e.postId == id;
      });

      if (result != -1) {
        buAllRef.children[0].children[0].classList.add('icon-dianzan1');
      }

      var result2 = message.save.findIndex(function (e) {
        return e.postId == id;
      });

      if (result2 != -1) {
        buAllRef.children[1].children[0].classList.add('icon-shoucang1');
      }
    }
  }, []);

  var commentEv = function commentEv() {
    //打开评论界面按钮事件
    var form = formRef.current;

    if (getComputedStyle(form).display == 'none') {
      form.style.display = 'flex';
      if (!form.hidden) form.children[0].focus();
    } else {
      form.style.display = 'none';
    }
  };

  var saveEv = function saveEv(e) {
    var target, request, res, _request, _res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function saveEv$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            target = e.target.closest('.save').children[0]; //定义save按钮元素

            target.classList.toggle('icon-shoucang1');

            if (!target.classList.contains('icon-shoucang1')) {
              _context.next = 14;
              break;
            }

            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/post/save/".concat(id), {
              method: 'POST',
              credentials: "include"
            }));

          case 5:
            request = _context.sent;
            if (request.status == 404) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
            if (request.status == 303) target.classList.remove('icon-shoucang1');
            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request.json());

          case 10:
            res = _context.sent;
            alert(res);
            _context.next = 22;
            break;

          case 14:
            _context.next = 16;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/post/save/remove/".concat(id), {
              method: 'POST',
              credentials: "include"
            }));

          case 16:
            _request = _context.sent;
            if (_request.status == 404) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
            _context.next = 20;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_request.json());

          case 20:
            _res = _context.sent;
            alert(_res);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var likeEv = function likeEv(e) {
    var target, request, res, _request2, _res2;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function likeEv$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            target = e.target.closest('.like').children[0]; //定义like按钮元素

            target.classList.toggle('icon-dianzan1');

            if (!target.classList.contains('icon-dianzan1')) {
              _context2.next = 14;
              break;
            }

            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/post/like/".concat(id), {
              method: 'POST',
              credentials: "include"
            }));

          case 5:
            request = _context2.sent;
            if (request.status == 404) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
            if (request.status == 303) target.classList.remove('icon-dianzan1');
            _context2.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request.json());

          case 10:
            res = _context2.sent;
            alert(res);
            _context2.next = 22;
            break;

          case 14:
            _context2.next = 16;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/post/like/remove/".concat(id), {
              method: 'POST',
              credentials: "include"
            }));

          case 16:
            _request2 = _context2.sent;
            if (_request2.status == 404) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
            _context2.next = 20;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_request2.json());

          case 20:
            _res2 = _context2.sent;
            alert(_res2);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-917502157" + " " + "features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_features_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: formRef,
    id: id,
    comment: comment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("div", {
    ref: function ref(_ref2) {
      return buAllRef = _ref2;
    },
    className: "jsx-917502157" + " " + "button-All",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    onClick: likeEv,
    className: "jsx-917502157" + " " + "like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-dianzan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Like")), __jsx("div", {
    onClick: saveEv,
    className: "jsx-917502157" + " " + "save",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-shoucang',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "save")), __jsx("div", {
    onClick: commentEv,
    className: "jsx-917502157" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-pinglun',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "comment")), __jsx("div", {
    className: "jsx-917502157" + " " + "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-fenxiang',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "share"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "917502157",
    __self: this
  }, "i.jsx-917502157{font-size:30px;margin-right:6px;}.icon-dianzan1.jsx-917502157{color:#E84F43;-webkit-animation:click-jsx-917502157 0.5s 1;animation:click-jsx-917502157 0.5s 1;}.icon-shoucang1.jsx-917502157{color:#FFF710;-webkit-animation:click-jsx-917502157 0.5s 1;animation:click-jsx-917502157 0.5s 1;}@-webkit-keyframes click-jsx-917502157{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes click-jsx-917502157{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.button-All.jsx-917502157{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:8vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.button-All.jsx-917502157>div.jsx-917502157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;height:6vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4vh;opacity:0.5;}.button-All.jsx-917502157>div.jsx-917502157:hover{opacity:1;}.like.jsx-917502157{margin-left:4vh;}.share.jsx-917502157 svg.jsx-917502157{margin-right:0.4vh;}svg.jsx-917502157{height:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3lCLEFBR3FDLEFBSUQsQUFJQSxBQVFkLEFBR0EsQUFHVyxBQU9HLEFBU0osQUFHTSxBQUdLLEFBR1YsVUFSZCxDQWhCZ0IsQUF5QmhCLEdBM0MwQixBQUlBLENBUk4sQ0F5Q3BCLEdBR0EsYUEzQ0EscUNBY0ksQUFHQSxLQVdPLFdBTkcsV0FsQmQsQUFJQSxBQWVzQixXQU1QLFdBQ1ksdUVBTk0sNEJBT1YsdUZBTnZCLE1BT3FCLGlCQUNMLFlBQ2hCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vZmVhdHVyZXMtY29tbWVudCdcclxuaW1wb3J0IFJvdXRlciAgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlcyh7aWQsY29tbWVudCxtZXNzYWdlfSkge1xyXG4gICAgbGV0IGZvcm1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIGxldCBidUFsbFJlZjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreW4luWtkOS4reaYr+WQpuaUtuiXjyDngrnotZ7ov4dcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG4gICAgICAgaWYobWVzc2FnZSl7ICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1lc3NhZ2UubGlrZS5maW5kSW5kZXgoZSA9PiBlLnBvc3RJZCA9PSBpZCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCAhPSAtMSApe1xyXG4gICAgICAgICAgICBidUFsbFJlZi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdpY29uLWRpYW56YW4xJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBtZXNzYWdlLnNhdmUuZmluZEluZGV4KGUgPT4gZS5wb3N0SWQgPT0gaWQpO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQyICE9IC0xICl7XHJcbiAgICAgICAgICAgIGJ1QWxsUmVmLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ljb24tc2hvdWNhbmcxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0gICAgICAgXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgY29tbWVudEV2ID0gKCkgPT4geyAgICAgICAgLy/miZPlvIDor4TorrrnlYzpnaLmjInpkq7kuovku7ZcclxuICAgICAgICAgICBsZXQgZm9ybSA9IGZvcm1SZWYuY3VycmVudDtcclxuICAgICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKGZvcm0pLmRpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIWZvcm0uaGlkZGVuKSBmb3JtLmNoaWxkcmVuWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlRXYgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2F2ZScpLmNoaWxkcmVuWzBdOyAvL+WumuS5iXNhdmXmjInpkq7lhYPntKBcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1zaG91Y2FuZzEnKTtcclxuICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXNob3VjYW5nMScpKXsgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdC9zYXZlLyR7aWR9YCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PSA0MDQpIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT0gMzAzKSB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1zaG91Y2FuZzEnKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9YXdhaXQgIHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgICAgICBhbGVydChyZXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3Qvc2F2ZS9yZW1vdmUvJHtpZH1gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDQwNCkgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBsZXQgcmVzID1hd2FpdCAgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbGlrZUV2ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpa2UnKS5jaGlsZHJlblswXTsgLy/lrprkuYlsaWtl5oyJ6ZKu5YWD57SgXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb24tZGlhbnphbjEnKTtcclxuICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWRpYW56YW4xJykpeyAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0L2xpa2UvJHtpZH1gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDQwNCkgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PSAzMDMpIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWRpYW56YW4xJyk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPWF3YWl0ICByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgICAgICAgYWxlcnQocmVzKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0L2xpa2UvcmVtb3ZlLyR7aWR9YCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PSA0MDQpIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgbGV0IHJlcyA9YXdhaXQgIHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgICAgICBhbGVydChyZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgPENvbW1lbnRMaXN0IHJlZiA9e2Zvcm1SZWZ9IGlkID17aWR9IGNvbW1lbnQ9e2NvbW1lbnR9Lz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1BbGxcIiByZWY9e3JlZiA9PiBidUFsbFJlZiA9IHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VcIiBvbkNsaWNrPXtsaWtlRXZ9PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1kaWFuemFuJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pkxpa2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhdmVcIiBvbkNsaWNrPXtzYXZlRXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1zaG91Y2FuZyc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5zYXZlPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCIgb25DbGljaz17Y29tbWVudEV2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tcGluZ2x1bic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5jb21tZW50PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1mZW54aWFuZyc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5zaGFyZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjZweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuaWNvbi1kaWFuemFuMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojRTg0RjQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmNsaWNrIDAuNXMgMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuaWNvbi1zaG91Y2FuZzF7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojRkZGNzEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmNsaWNrIDAuNXMgMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY2xpY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmJ1dHRvbi1BbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo4dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuYnV0dG9uLUFsbD5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjZ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5idXR0b24tQWxsPmRpdjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmxpa2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NHZoO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5zaGFyZSBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MC40dmg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXNcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\features.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ })

})
//# sourceMappingURL=home.js.f2884119d8e6948da5b2.hot-update.js.map