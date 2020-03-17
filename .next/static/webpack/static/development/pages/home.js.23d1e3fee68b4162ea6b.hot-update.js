webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/main/postlist/list/list.js":
/*!***************************************************!*\
  !*** ./component/home/main/postlist/list/list.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _acthor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acthor.js */ "./component/home/main/postlist/list/acthor.js");
/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.js */ "./component/home/main/postlist/list/title.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.js */ "./component/home/main/postlist/list/features.js");
/* harmony import */ var _postphoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postphoto */ "./component/home/main/postlist/list/postphoto.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\test\\component\\home\\main\\postlist\\list\\list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function List(_ref) {
  var data = _ref.data,
      index = _ref.index,
      Smessage = _ref.Smessage;
  var postRef;

  var lookEv = function lookEv() {
    //查看事件定义
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
      pathname: '/post'
    });
  };

  var userName = data.userName,
      message = data.message,
      title = data.title,
      postTime = data.postTime,
      description = data.description,
      acthorPhotoId = data.acthorPhotoId,
      _id = data._id,
      comment = data.comment;
  return __jsx("div", {
    ref: function ref(_ref2) {
      return postRef = _ref2;
    },
    className: "jsx-2089415552" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2089415552" + " " + "postContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_acthor_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: userName,
    time: postTime,
    id: acthorPhotoId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_postphoto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Ev: lookEv,
    photoId: message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_title_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_features_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    index: index,
    comment: comment,
    id: _id,
    message: Smessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2089415552",
    __self: this
  }, ".post.jsx-2089415552{width:calc(50vw-12vh);height:auto;background:white;overflow:auto;border-radius:26px;margin-bottom:6vh;box-shadow:0 0 6px #f4f4f4;position:relative;-webkit-transition:.4s;transition:.4s;z-index:4;-webkit-animation:go-jsx-2089415552 .5s;animation:go-jsx-2089415552 .5s;}@-webkit-keyframes go-jsx-2089415552{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2089415552{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.post.jsx-2089415552::-webkit-scrollbar{display:none;}.postContainer.jsx-2089415552{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCeUIsQUFHMkMsQUFjSSxBQUdBLEFBSzlCLEFBRWUsV0FDQyxFQUhmLFNBckJlLENBeUJmLFdBeEJvQixpQkFDSCxjQUNLLElBV2YsQUFHQSxlQWJjLGtCQUNTLDJCQUNULGtCQUNILHNDQUNMLFVBQ08sd0VBQ3BCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWN0aG9yIGZyb20gJy4vYWN0aG9yLmpzJ1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZS5qcydcclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gJy4vZmVhdHVyZXMuanMnXHJcbmltcG9ydCBQb3N0UGhvdG8gZnJvbSAnLi9wb3N0cGhvdG8nXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuZnVuY3Rpb24gTGlzdCh7ZGF0YSxpbmRleCxTbWVzc2FnZX0pIHtcclxuICAgIGxldCBwb3N0UmVmO1xyXG4gICBcclxuICAgIGNvbnN0IGxvb2tFdiA9ICgpID0+IHsgICAvL+afpeeci+S6i+S7tuWumuS5iVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOicvcG9zdCdcclxuICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICB9XHJcbiAgIFxyXG4gICAgbGV0IHt1c2VyTmFtZSxtZXNzYWdlLHRpdGxlLHBvc3RUaW1lLGRlc2NyaXB0aW9uLGFjdGhvclBob3RvSWQsX2lkLGNvbW1lbnR9ID0gZGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3RgfSByZWY9eyByZWYgPT4gcG9zdFJlZj1yZWYgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rob3IgbmFtZT17dXNlck5hbWV9IHRpbWU9e3Bvc3RUaW1lfSBpZD17YWN0aG9yUGhvdG9JZH0vPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0UGhvdG8gRXY9e2xvb2tFdn0gcGhvdG9JZD17bWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZXMgaW5kZXg9e2luZGV4fSBjb21tZW50PXtjb21tZW50fSBpZCA9IHtfaWR9IG1lc3NhZ2U9e1NtZXNzYWdlfS8+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOmNhbGMoNTB2dy0xMnZoKTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDZweCAjZjRmNGY0O1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6NDtcclxuICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmdvIC41cztcclxuICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC5wb3N0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAucG9zdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\list.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=home.js.23d1e3fee68b4162ea6b.hot-update.js.map