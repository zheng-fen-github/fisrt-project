webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./component/home/sidebar/sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebartop_sidebartop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebartop/sidebartop */ "./component/home/sidebar/sidebartop/sidebartop.js");
/* harmony import */ var _sidebarbottom_sidebarbottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarbottom/sidebarbottom.js */ "./component/home/sidebar/sidebarbottom/sidebarbottom.js");
/* harmony import */ var _savepost_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./savepost/save */ "./component/home/sidebar/savepost/save.js");
/* harmony import */ var _likepost_like__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./likepost/like */ "./component/home/sidebar/likepost/like.js");
var _jsxFileName = "C:\\test\\component\\home\\sidebar\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Sidebar(_ref) {
  var postData = _ref.postData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      SaveStatus = _useState[0],
      setSaveStatus = _useState[1]; //收藏窗口状态定义


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      LikeStatus = _useState2[0],
      setLikeStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      eventID = _useState3[0],
      setEventID = _useState3[1]; //收藏窗口状态定义


  var notRef;
  var SaveRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(); //收藏窗口元素Ref定义

  var LikeRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(); //喜欢窗口元素Ref定义

  var openSave = function openSave() {
    // 收藏窗口打开关闭事件
    var DOM = notRef;

    if (postData.message.save.length == 0) {
      console.log(eventID);
      if (eventID) clearTimeout(eventID);
      notRef.hidden = false;
      var ID = setTimeout(function () {
        DOM.hidden = true;
        setEventID(false);
      }, 1000);
      setEventID(ID);
    } // if(LikeRef.current) {
    //     if(!LikeRef.current.classList.contains('back')) LikeRef.current.classList.add('back');        
    // }
    // !SaveStatus ? setSaveStatus(true) :SaveRef.current.classList.remove('back');            

  };

  var openLike = function openLike() {
    // 收藏窗口打开关闭事件
    if (postData.message.like.length == 0) {
      var DOM = notRef;
      if (eventID) clearTimeout(eventID);
      notRef.hidden = false;
      var ID = setTimeout(function () {
        DOM.hidden = true;
        setEventID(false);
      }, 1000);
      setEventID(ID);
    } // if(SaveRef.current) {
    //     if(!SaveRef.current.classList.contains('back')) SaveRef.current.classList.add('back');        
    // }
    // !LikeStatus ?  setLikeStatus(true) : LikeRef.current.classList.remove('back');    

  };

  return __jsx("div", {
    className: "jsx-3609054860" + " " + 'sidebar testsi',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_sidebartop_sidebartop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), SaveStatus && __jsx(_savepost_save__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: SaveRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), LikeStatus && __jsx(_likepost_like__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: LikeRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("div", {
    hidden: true,
    ref: function ref(_ref2) {
      return notRef = _ref2;
    },
    className: "jsx-3609054860" + " " + 'notPost',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "not post"), __jsx("div", {
    className: "jsx-3609054860" + " " + "click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3609054860" + " " + 'iconfont icon-jiantou',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3609054860",
    __self: this
  }, ".sidebar.jsx-3609054860{width:20%;height:100%;position:relative;}.click.jsx-3609054860{width:60px;height:60px;position:absolute;right:-60px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:none;}.click.jsx-3609054860 i.jsx-3609054860{font-size:2rem;}.notPost.jsx-3609054860{height:40px;width:200px;color:white;text-align:center;background:red;border-radius:24px;line-height:40px;position:fixed;top:70%;font-size:20px;left:5%;z-index:99;-webkit-animation:not-jsx-3609054860 1 .3s;animation:not-jsx-3609054860 1 .3s;}@-webkit-keyframes not-jsx-3609054860{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes not-jsx-3609054860{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXHNpZGViYXJcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER5QixBQUc4QixBQU1HLEFBU0ksQUFHSixBQWdCYyxBQUdGLFVBcENiLENBTUUsQ0FZRCxHQUhkLE9BZG1CLENBTUUsQ0FZUCxZQUNNLElBbEJwQixDQU1lLFlBQ0osQ0FZTSxPQVhhLFFBWVQsQUFlakIsTUFIQSxhQVhlLGlCQUNGLGVBQ1AsUUFDTyxlQUNQLFFBQ0csR0FqQkcsUUFrQk0sS0FqQnRCLHlFQWtCQSIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxzaWRlYmFyXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9zaWRlYmFydG9wL3NpZGViYXJ0b3AnXHJcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9zaWRlYmFyYm90dG9tL3NpZGViYXJib3R0b20uanMnXHJcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZXBvc3Qvc2F2ZSdcclxuaW1wb3J0IExpa2UgZnJvbSAnLi9saWtlcG9zdC9saWtlJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcih7cG9zdERhdGF9KSB7XHJcbiAgICBjb25zdCBbU2F2ZVN0YXR1cywgc2V0U2F2ZVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7IC8v5pS26JeP56qX5Y+j54q25oCB5a6a5LmJXHJcbiAgICBjb25zdCBbTGlrZVN0YXR1cywgc2V0TGlrZVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXZlbnRJRCwgc2V0RXZlbnRJRF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8v5pS26JeP56qX5Y+j54q25oCB5a6a5LmJXHJcbiAgICBsZXQgIG5vdFJlZjsgICBcclxuICAgIGNvbnN0IFNhdmVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTsgICAgLy/mlLbol4/nqpflj6PlhYPntKBSZWblrprkuYlcclxuICAgIGNvbnN0IExpa2VSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTsgICAgLy/llpzmrKLnqpflj6PlhYPntKBSZWblrprkuYlcclxuICAgIGNvbnN0IG9wZW5TYXZlID0gKCkgPT4geyAgICAgICAgICAgICAvLyDmlLbol4/nqpflj6PmiZPlvIDlhbPpl63kuovku7ZcclxuICAgICAgICBsZXQgRE9NID0gbm90UmVmO1xyXG4gICAgICAgIGlmKHBvc3REYXRhLm1lc3NhZ2Uuc2F2ZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50SUQpO1xyXG4gICAgICAgICAgICBpZihldmVudElEKSBjbGVhclRpbWVvdXQoZXZlbnRJRCk7ICAgIFxyXG4gICAgICAgICAgICBub3RSZWYuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBJRCA9IHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgICAgICBET00uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNldEV2ZW50SUQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgICAgICBzZXRFdmVudElEKElEKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihMaWtlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAvLyAgICAgaWYoIUxpa2VSZWYuY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2JhY2snKSkgTGlrZVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2JhY2snKTsgICAgICAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAhU2F2ZVN0YXR1cyA/IHNldFNhdmVTdGF0dXModHJ1ZSkgOlNhdmVSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrJyk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcGVuTGlrZSA9ICgpID0+IHsgICAgICAgICAgICAgLy8g5pS26JeP56qX5Y+j5omT5byA5YWz6Zet5LqL5Lu2XHJcbiAgICAgICAgaWYocG9zdERhdGEubWVzc2FnZS5saWtlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgbGV0IERPTSA9IG5vdFJlZjtcclxuICAgICAgICAgICAgaWYoZXZlbnRJRCkgY2xlYXJUaW1lb3V0KGV2ZW50SUQpOyAgICBcclxuICAgICAgICAgICAgbm90UmVmLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgSUQgPSBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICAgICAgRE9NLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudElEKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICAgICAgc2V0RXZlbnRJRChJRClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoU2F2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgLy8gICAgIGlmKCFTYXZlUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiYWNrJykpIFNhdmVSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdiYWNrJyk7ICAgICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gIUxpa2VTdGF0dXMgPyAgc2V0TGlrZVN0YXR1cyh0cnVlKSA6IExpa2VSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrJyk7ICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhciB0ZXN0c2knPlxyXG4gICAgICAgICAgICA8VG9wLz5cclxuICAgICAgICAgICAgey8qIDxCb3R0b20gc2F2ZT17b3BlblNhdmV9IGxpa2UgPXtvcGVuTGlrZX0vPiAqL31cclxuICAgICAgICAgICAgeyBTYXZlU3RhdHVzICYmIDxTYXZlIHJlZj17U2F2ZVJlZn0vPiB9XHJcbiAgICAgICAgICAgIHsgTGlrZVN0YXR1cyAmJiA8TGlrZSByZWY9e0xpa2VSZWZ9Lz4gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm90UG9zdCcgaGlkZGVuIHJlZj17cmVmID0+IG5vdFJlZiA9IHJlZn0+XHJcbiAgICAgICAgICAgICAgICBub3QgcG9zdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlja1wiPiBcclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1qaWFudG91Jz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jbGljayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjYwcHg7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDotNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuY2xpY2sgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLm5vdFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvcDo3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBsZWZ0OjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246bm90IDEgLjNzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbm90IHtcclxuICAgICAgICAgICAgICAgICAgICAgIDAle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\sidebar\\\\sidebar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=home.js.39ec0fac1d4c1319af88.hot-update.js.map