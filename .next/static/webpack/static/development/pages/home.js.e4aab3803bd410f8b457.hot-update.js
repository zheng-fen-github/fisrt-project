webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/main/postlist/list/features-comment.js":
/*!***************************************************************!*\
  !*** ./component/home/main/postlist/list/features-comment.js ***!
  \***************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./component/home/main/redux/action.js");

var _jsxFileName = "C:\\test\\component\\home\\main\\postlist\\list\\features-comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var FeaturesComment = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.comment),
      commentList = _useState2[0],
      setCommentList = _useState2[1];

  var addComment = function addComment(e) {
    var commentData, request, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addComment$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 添加评论事件
            e.preventDefault();
            commentData = new FormData();
            commentData.append('comment', message);
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:3001/post/comment/".concat(props.id), {
              method: 'POST',
              body: commentData,
              credentials: "include"
            }));

          case 5:
            request = _context.sent;
            _context.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request.json());

          case 8:
            res = _context.sent;

            if (typeof res == 'object') {
              setCommentList(res);
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var inputEv = function inputEv(e) {
    if (e.target.value.length > 0) {
      ref.current.children[1].classList.add('pink');
    } else {
      ref.current.children[1].classList.remove('pink');
    }

    setMessage(e.target.value);
  };

  return __jsx("div", {
    className: "jsx-2690350881" + " " + "comment-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2690350881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, commentList.map(function (e) {
    return __jsx("li", {
      className: "jsx-2690350881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, e.comment, "\uD83D\uDC97");
  })), __jsx("form", {
    ref: ref,
    onSubmit: addComment,
    hidden: true,
    className: "jsx-2690350881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "comment",
    onInput: inputEv,
    value: message,
    required: true,
    placeholder: "\u8F93\u5165\u5185\u5BB9",
    className: "jsx-2690350881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick(e) {
      e.target.closest('.button').nextElementSibling.click();
    },
    className: "jsx-2690350881" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2690350881" + " " + 'iconfont icon-send',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "add",
    hidden: true,
    className: "jsx-2690350881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2690350881",
    __self: this
  }, ".button.jsx-2690350881{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;}.button.jsx-2690350881:hover>i.jsx-2690350881{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);background:#1a79ff;color:white;}.button.jsx-2690350881>i.jsx-2690350881{font-size:1.6rem;padding:10px;border-radius:50%;}form.jsx-2690350881{width:100%;height:6vh;background:white;border-radius:24px;margin:4vh 0 0;display:none;}input[type=submit].jsx-2690350881{color:white;}.pink.jsx-2690350881{background:pink;}form.jsx-2690350881>input.jsx-2690350881{-webkit-flex:9;-ms-flex:9;flex:9;text-align:center;height:100%;border:2px solid #f4f6f8;font-size:3vh;padding:0 2vh;outline:none;}input[type=text].jsx-2690350881{color:white;}form.jsx-2690350881>input.jsx-2690350881:focus{background:#eeeef4;}.comment-list.jsx-2690350881{width:100%;margin:4vh 0 2vh;}ul.jsx-2690350881{width:80%;margin-left:10%;list-style:none;}li.jsx-2690350881{width:100%;height:2vh;margin:1vh;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy1jb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHNkIsQUFPYyxBQUtKLEFBS04sQUFRRCxBQUdNLEFBR1QsQUFTSyxBQUdPLEFBR1IsQUFJRCxBQUtDLFVBSkssQ0FqQ0wsQUE2Qk8sQUFTUCxDQTlCZCxBQWVBLElBWkEsQ0FoQmdCLEVBK0JoQixHQXpCb0IsQUFzQ04sSUFMSyxFQUpuQixFQWxDcUIsR0FiTCxBQStCSyxBQTBCQSxNQXRDQyxHQWlDdEIsTUF0Q0EsR0FrQmUsQUEwQmYsT0F0Q21CLEtBYVUsVUFaYixFQWRNLFdBZXRCLEVBWWlCLE1BMUJGLFFBMkJFLElBMUJqQixDQVIwQixTQW1DVixhQUNoQiw2RUFuQ3NCLDZGQUNELGtCQUNyQiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxtYWluXFxwb3N0bGlzdFxcbGlzdFxcZmVhdHVyZXMtY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge0FERH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uJ1xyXG5cclxuXHJcbmNvbnN0ICBGZWF0dXJlc0NvbW1lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICAgIGNvbnN0IFtjb21tZW50TGlzdCxzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZShwcm9wcy5jb21tZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoZSkgPT4geyAgICAvLyDmt7vliqDor4Torrrkuovku7ZcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGNvbW1lbnREYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBjb21tZW50RGF0YS5hcHBlbmQoJ2NvbW1lbnQnLG1lc3NhZ2UpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdC9jb21tZW50LyR7cHJvcHMuaWR9YCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6Y29tbWVudERhdGEsICAgIFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgICBpZih0eXBlb2YgcmVzID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRMaXN0KHJlcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnB1dEV2ID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICByZWYuY3VycmVudC5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdwaW5rJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3BpbmsnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAge2NvbW1lbnRMaXN0Lm1hcChlID0+IDxsaT57ZS5jb21tZW50ffCfkpc8L2xpPil9XHJcbiAgICAgICAgICAgICAgICAgICB7LyogPGxpPiDtlZHtgawg8J+SlzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+IHNvIGJlYXV0aWZ1bDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+IO2Vke2BrCDwn5KXPC9saT5cclxuICAgICAgICAgICAgICAgICAgIDxsaT4gWUEgQUxMQUhISCBERUtFVCBCQU5HRVRUVFQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgPGxpPiDtlZHtgawg8J+SlzwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8Zm9ybSByZWY9e3JlZn0gb25TdWJtaXQ9IHthZGRDb21tZW50fSBoaWRkZW4gPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbW1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17aW5wdXRFdn1cclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPXsgbWVzc2FnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfovpPlhaXlhoXlrrknXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5idXR0b24nKS5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLXNlbmQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJhZGRcIiBoaWRkZW4vPlxyXG4gICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICB7YCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuYnV0dG9uIHsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmJ1dHRvbjpob3Zlcj5pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMWE3OWZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmJ1dHRvbj5pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjZyZW07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjZ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NHZoIDAgMCA7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAucGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnBpbms7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtPmlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg6OTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjZmODtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZm9ybT5pbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlZWVlZjQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmNvbW1lbnQtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjR2aCAwIDJ2aCA7XHJcbiAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIH0pXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBDbGljayhwb3N0KSB7XHJcbiAgICAgICAgZGlzcGF0Y2goQUREKHBvc3QpKVxyXG4gICAgfVxyXG59KVxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBjb25uZWN0KG51bGwsZGlzcGF0Y2hUb1Byb3BzLG51bGwse2ZvcndhcmRSZWY6IHRydWV9KShGZWF0dXJlc0NvbW1lbnQpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\features-comment.js */"));
});

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    Click: function Click(post) {
      dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_4__["ADD"])(post));
    }
  };
};

var stateToProps = function stateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, dispatchToProps, null, {
  forwardRef: true
})(FeaturesComment));

/***/ })

})
//# sourceMappingURL=home.js.e4aab3803bd410f8b457.hot-update.js.map