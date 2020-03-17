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
    className: "jsx-2061813821" + " " + "comment-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2061813821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, commentList.map(function (e) {
    return __jsx("li", {
      key: e,
      className: "jsx-2061813821",
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
    className: "jsx-2061813821",
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
    className: "jsx-2061813821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick(e) {
      e.target.closest('.button').nextElementSibling.click();
    },
    className: "jsx-2061813821" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2061813821" + " " + 'iconfont icon-send',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "add",
    hidden: true,
    className: "jsx-2061813821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2061813821",
    __self: this
  }, ".button.jsx-2061813821{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;}.button.jsx-2061813821:hover>i.jsx-2061813821{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);background:#1a79ff;color:white;}.button.jsx-2061813821>i.jsx-2061813821{font-size:1.6rem;padding:10px;border-radius:50%;}form.jsx-2061813821{width:100%;height:6vh;background:white;border-radius:24px;margin:4vh 0 0;display:none;}input[type=submit].jsx-2061813821{color:white;}form.jsx-2061813821>input.jsx-2061813821{-webkit-flex:9;-ms-flex:9;flex:9;text-align:center;height:100%;border:2px solid #f4f6f8;font-size:3vh;padding:0 2vh;outline:none;}input[type=text].jsx-2061813821{color:white;}form.jsx-2061813821>input.jsx-2061813821:focus{background:#eeeef4;}.comment-list.jsx-2061813821{width:100%;margin:4vh 0 2vh;}ul.jsx-2061813821{width:80%;margin-left:10%;list-style:none;}li.jsx-2061813821{width:100%;height:2vh;margin:1vh;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy1jb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHNkIsQUFPYyxBQUtKLEFBS04sQUFRRCxBQUlILEFBU0ssQUFHTyxBQUdSLEFBSUQsQUFLQyxVQUpLLENBL0JMLEFBMkJPLEFBU1AsQ0E1QmQsQUFhQSxLQTFCZ0IsRUE2QmhCLEdBdkJvQixBQW9DTixJQUxLLEVBSm5CLEVBaENxQixHQWJMLEFBNkJLLEFBMEJBLE1BcENDLEdBK0J0QixNQXBDQSxHQWdCZSxBQTBCZixPQXBDbUIsS0FXVSxVQVZiLEVBZE0sV0FldEIsRUFVaUIsTUF4QkYsUUF5QkUsSUF4QmpCLENBUjBCLFNBaUNWLGFBQ2hCLDZFQWpDc0IsNkZBQ0Qsa0JBQ3JCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxmZWF0dXJlcy1jb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7QUREfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb24nXHJcblxyXG5cclxuY29uc3QgIEZlYXR1cmVzQ29tbWVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpOyBcclxuICAgICAgY29uc3QgW2NvbW1lbnRMaXN0LHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKHByb3BzLmNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChlKSA9PiB7ICAgIC8vIOa3u+WKoOivhOiuuuS6i+S7tlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY29tbWVudERhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIGNvbW1lbnREYXRhLmFwcGVuZCgnY29tbWVudCcsbWVzc2FnZSk7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0L2NvbW1lbnQvJHtwcm9wcy5pZH1gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpjb21tZW50RGF0YSwgICAgXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgIGlmKHR5cGVvZiByZXMgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgc2V0Q29tbWVudExpc3QocmVzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0RXYgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgIHJlZi5jdXJyZW50LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoJ3BpbmsnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnJlbW92ZSgncGluaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICB7Y29tbWVudExpc3QubWFwKGUgPT4gPGxpIGtleT17ZX0+e2UuY29tbWVudH3wn5KXPC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgey8qIDxsaT4g7ZWR7YGsIPCfkpc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgPGxpPiBzbyBiZWF1dGlmdWw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgPGxpPiDtlZHtgawg8J+SlzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+IFlBIEFMTEFISEggREVLRVQgQkFOR0VUVFRUPC9saT5cclxuICAgICAgICAgICAgICAgICAgIDxsaT4g7ZWR7YGsIPCfkpc8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgPGZvcm0gcmVmPXtyZWZ9IG9uU3VibWl0PSB7YWRkQ29tbWVudH0gaGlkZGVuID5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21tZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2lucHV0RXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlID17IG1lc3NhZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n6L6T5YWl5YaF5a65J1xyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuYnV0dG9uJykubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1zZW5kJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYWRkXCIgaGlkZGVuLz5cclxuICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAge2AgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmJ1dHRvbiB7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5idXR0b246aG92ZXI+aSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzFhNzlmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5idXR0b24+aSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS42cmVtOyBcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjR2aCAwIDAgOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGZvcm0+aW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleDo5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNmY4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAydmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtPmlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2VlZWVmNDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuY29tbWVudC1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NHZoIDAgMnZoIDtcclxuICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjF2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfSlcclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIENsaWNrKHBvc3QpIHtcclxuICAgICAgICBkaXNwYXRjaChBREQocG9zdCkpXHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7ICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGNvbm5lY3QobnVsbCxkaXNwYXRjaFRvUHJvcHMsbnVsbCx7Zm9yd2FyZFJlZjogdHJ1ZX0pKEZlYXR1cmVzQ29tbWVudClcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\features-comment.js */"));
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
//# sourceMappingURL=home.js.c6110d1b0c5c8a351d49.hot-update.js.map