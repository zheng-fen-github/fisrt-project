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
      lineNumber: 81
    },
    __self: this
  }, __jsx(_features_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: formRef,
    id: id,
    comment: comment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("div", {
    ref: function ref(_ref2) {
      return buAllRef = _ref2;
    },
    className: "jsx-917502157" + " " + "button-All",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    onClick: likeEv,
    className: "jsx-917502157" + " " + "like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-dianzan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Like")), __jsx("div", {
    onClick: saveEv,
    className: "jsx-917502157" + " " + "save",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-shoucang',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "save")), __jsx("div", {
    onClick: commentEv,
    className: "jsx-917502157" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-pinglun',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "comment")), __jsx("div", {
    className: "jsx-917502157" + " " + "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-917502157" + " " + 'iconfont icon-fenxiang',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-917502157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "share"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "917502157",
    __self: this
  }, "i.jsx-917502157{font-size:30px;margin-right:6px;}.icon-dianzan1.jsx-917502157{color:#E84F43;-webkit-animation:click-jsx-917502157 0.5s 1;animation:click-jsx-917502157 0.5s 1;}.icon-shoucang1.jsx-917502157{color:#FFF710;-webkit-animation:click-jsx-917502157 0.5s 1;animation:click-jsx-917502157 0.5s 1;}@-webkit-keyframes click-jsx-917502157{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes click-jsx-917502157{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.button-All.jsx-917502157{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:8vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.button-All.jsx-917502157>div.jsx-917502157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;height:6vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4vh;opacity:0.5;}.button-All.jsx-917502157>div.jsx-917502157:hover{opacity:1;}.like.jsx-917502157{margin-left:4vh;}.share.jsx-917502157 svg.jsx-917502157{margin-right:0.4vh;}svg.jsx-917502157{height:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR3lCLEFBR3FDLEFBSUQsQUFJQSxBQVFkLEFBR0EsQUFHVyxBQU9HLEFBU0osQUFHTSxBQUdLLEFBR1YsVUFSZCxDQWhCZ0IsQUF5QmhCLEdBM0MwQixBQUlBLENBUk4sQ0F5Q3BCLEdBR0EsYUEzQ0EscUNBY0ksQUFHQSxLQVdPLFdBTkcsV0FsQmQsQUFJQSxBQWVzQixXQU1QLFdBQ1ksdUVBTk0sNEJBT1YsdUZBTnZCLE1BT3FCLGlCQUNMLFlBQ2hCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vZmVhdHVyZXMtY29tbWVudCdcclxuaW1wb3J0IFJvdXRlciAgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlcyh7aWQsY29tbWVudCxtZXNzYWdlfSkge1xyXG4gICAgbGV0IGZvcm1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIGxldCBidUFsbFJlZjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreW4luWtkOS4reaYr+WQpuaUtuiXjyDngrnotZ7ov4cgICAgICAgXHJcbiAgICAgICBpZihtZXNzYWdlKXsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbWVzc2FnZS5saWtlLmZpbmRJbmRleChlID0+IGUucG9zdElkID09IGlkKTtcclxuICAgICAgICAgICAgaWYocmVzdWx0ICE9IC0xICl7XHJcbiAgICAgICAgICAgIGJ1QWxsUmVmLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ljb24tZGlhbnphbjEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MiA9IG1lc3NhZ2Uuc2F2ZS5maW5kSW5kZXgoZSA9PiBlLnBvc3RJZCA9PSBpZCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdDIgIT0gLTEgKXtcclxuICAgICAgICAgICAgYnVBbGxSZWYuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnaWNvbi1zaG91Y2FuZzEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSAgICAgICBcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBjb21tZW50RXYgPSAoKSA9PiB7ICAgICAgICAvL+aJk+W8gOivhOiuuueVjOmdouaMiemSruS6i+S7tlxyXG4gICAgICAgICAgIGxldCBmb3JtID0gZm9ybVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUoZm9ybSkuZGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZighZm9ybS5oaWRkZW4pIGZvcm0uY2hpbGRyZW5bMF0uZm9jdXMoKTtcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHNhdmVFdiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zYXZlJykuY2hpbGRyZW5bMF07IC8v5a6a5LmJc2F2ZeaMiemSruWFg+e0oFxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLXNob3VjYW5nMScpO1xyXG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tc2hvdWNhbmcxJykpeyAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0L3NhdmUvJHtpZH1gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDQwNCkgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PSAzMDMpIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLXNob3VjYW5nMScpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID1hd2FpdCAgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdC9zYXZlL3JlbW92ZS8ke2lkfWAse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT0gNDA0KSBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIGxldCByZXMgPWF3YWl0ICByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgICAgICAgYWxlcnQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaWtlRXYgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcubGlrZScpLmNoaWxkcmVuWzBdOyAvL+WumuS5iWxpa2XmjInpkq7lhYPntKBcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1kaWFuemFuMScpO1xyXG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tZGlhbnphbjEnKSl7ICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3QvbGlrZS8ke2lkfWAse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT0gNDA0KSBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDMwMykgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tZGlhbnphbjEnKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9YXdhaXQgIHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgICAgICBhbGVydChyZXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3QvbGlrZS9yZW1vdmUvJHtpZH1gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDQwNCkgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBsZXQgcmVzID1hd2FpdCAgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICAgICA8Q29tbWVudExpc3QgcmVmID17Zm9ybVJlZn0gaWQgPXtpZH0gY29tbWVudD17Y29tbWVudH0vPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLUFsbFwiIHJlZj17cmVmID0+IGJ1QWxsUmVmID0gcmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiIG9uQ2xpY2s9e2xpa2VFdn0+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLWRpYW56YW4nPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+TGlrZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZVwiIG9uQ2xpY2s9e3NhdmVFdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLXNob3VjYW5nJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PnNhdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIiBvbkNsaWNrPXtjb21tZW50RXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1waW5nbHVuJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PmNvbW1lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLWZlbnhpYW5nJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PnNoYXJlPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2AgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NnB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5pY29uLWRpYW56YW4xIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNFODRGNDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246Y2xpY2sgMC41cyAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5pY29uLXNob3VjYW5nMXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNGRkY3MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246Y2xpY2sgMC41cyAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjbGljayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuYnV0dG9uLUFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojh2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5idXR0b24tQWxsPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmJ1dHRvbi1BbGw+ZGl2OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAubGlrZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0dmg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLnNoYXJlIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDowLjR2aDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlc1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\features.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ })

})
//# sourceMappingURL=home.js.95ee4bd01eac4a29b79d.hot-update.js.map