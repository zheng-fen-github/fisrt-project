webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./component/home/main/postlist/list/photocontent2.js":
/*!************************************************************!*\
  !*** ./component/home/main/postlist/list/photocontent2.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/photo */ "./component/public/photo.js");
var _jsxFileName = "C:\\test\\component\\home\\main\\postlist\\list\\photocontent2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Photocontent(_ref) {
  var data = _ref.data;
  var scrRef; //容器元素变量定义            

  var scrollEv = function scrollEv(e) {
    // 按钮事件 图片切换
    var size = scrRef.children.length;
    var leftBu = scrRef.parentElement.children[0];
    var rightBu = scrRef.parentElement.children[1];
    var width = scrRef.offsetWidth;
    var who = e.target.closest('div').matches('.right');
    who ? scrRef.dataset.src++ : scrRef.dataset.src--;
    var count = scrRef.dataset.src;

    if (who) {
      scrRef.style.transform = "translateX(-".concat(count * width, "px)");
      if (+count + 1 == size) rightBu.style.display = 'none';
      if (count > 0) leftBu.style.display = '';
    } else {
      if (count == 0) leftBu.style.display = 'none';
      scrRef.style.transform = "translateX(-".concat(count * width, "px)");
      if (+count + 1 != size) rightBu.style = '';
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (scrRef.children.length > 1) scrRef.previousElementSibling.style.display = '';
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var dom = scrRef.parentElement;
    var cool = scrRef; //    window.addEventListener('resize',() => {                            
    //        dom.style.width = (window.innerWidth/2 - window.innerHeight/7.15) + 'px';
    //        dom.style.height = (window.innerWidth/2 - window.innerHeight/7.15) + 'px';
    //        cool.classList.remove('transition');
    //        let count = +cool.dataset.src;
    //        cool.style.transform = `translateX(-${count*cool.offsetWidth}px)`
    //        setTimeout(()=>cool.classList.add('transition'),200);
    //    })
  }, []);
  return __jsx("div", {
    className: "jsx-3018370054" + " " + "postphoto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    onClick: scrollEv,
    style: {
      display: 'none'
    },
    className: "jsx-3018370054" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("svg", {
    t: "1578822263166",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "601",
    width: "30",
    height: "30",
    className: "jsx-3018370054" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("path", {
    d: "M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z",
    fill: "#2c2c2c",
    "p-id": "602",
    className: "jsx-3018370054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx("div", {
    onClick: scrollEv,
    style: {
      display: 'none'
    },
    className: "jsx-3018370054" + " " + "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("svg", {
    t: "1578822263166",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "601",
    width: "30",
    height: "30",
    className: "jsx-3018370054" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("path", {
    d: "M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z",
    fill: "#2c2c2c",
    "p-id": "602",
    className: "jsx-3018370054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx("div", {
    "data-src": 0,
    ref: function ref(_ref2) {
      return scrRef = _ref2;
    },
    className: "jsx-3018370054" + " " + "photocontainer transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, data && data.map(function (e) {
    return __jsx(_public_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: e.id,
      id: e.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3018370054",
    __self: this
  }, ".postphoto.jsx-3018370054{width:100%;height:100%;margin:0;padding:0;box-sizing:border-box;position:relative;}.postphoto.jsx-3018370054:hover .right.jsx-3018370054{right:1.5%;}.postphoto.jsx-3018370054:hover .left.jsx-3018370054{left:1.5%;}.photocontainer.jsx-3018370054{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.transition.jsx-3018370054{-webkit-transition:.5s;transition:.5s;}.left.jsx-3018370054,.right.jsx-3018370054{position:absolute;width:40px;height:40px;background:white;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.4s;transition:.4s;box-shadow:0 0 4px #adadad;z-index:2;}.left.jsx-3018370054{left:-12%;}.right.jsx-3018370054{-webkit-transform:rotate(180deg) translateY(50%);-ms-transform:rotate(180deg) translateY(50%);transform:rotate(180deg) translateY(50%);right:-12%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxwaG90b2NvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEeUIsQUFHMkIsQUFRQSxBQUdELEFBR0EsQUFLSyxBQUdRLEFBZVQsQUFHZ0MsVUE1QmpELEFBMEJLLENBckNVLEFBUWYsQUFNYyxPQVFLLEtBckJQLEFBY0csTUFRSyxHQXJCUCxNQWlCWixHQUt3QixDQXJCQSxnQkFzQkMsTUFyQkwsWUFzQkEsTUFyQnJCLGVBV0Msc0NBd0JrQixXQUNkLElBZDBCLG1HQUNKLDZGQUNYLFFBQ21CLDZGQUNaLHNDQUNZLDJCQUNqQixVQUNiIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXG1haW5cXHBvc3RsaXN0XFxsaXN0XFxwaG90b2NvbnRlbnQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBob3RvIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9waG90bydcclxuXHJcbmZ1bmN0aW9uIFBob3RvY29udGVudCh7ZGF0YX0pIHtcclxuICAgICAgICAgICAgbGV0IHNjclJlZjsgLy/lrrnlmajlhYPntKDlj5jph4/lrprkuYkgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRXYgPSAoZSkgPT4geyAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5oyJ6ZKu5LqL5Lu2IOWbvueJh+WIh+aNolxyXG4gICAgICAgICAgICAgICAgbGV0IHNpemUgPSBzY3JSZWYuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnRCdSA9IHNjclJlZi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0QnUgPSBzY3JSZWYucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHNjclJlZi5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCB3aG8gPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5tYXRjaGVzKCcucmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2hvP3NjclJlZi5kYXRhc2V0LnNyYysrOnNjclJlZi5kYXRhc2V0LnNyYy0tO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ICA9IHNjclJlZi5kYXRhc2V0LnNyYzsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHdobykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjclJlZi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjb3VudCp3aWR0aH1weClgOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCtjb3VudCsxID09IHNpemUpICByaWdodEJ1LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY291bnQgPiAwKSAgICAgICAgIGxlZnRCdS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb3VudCA9PSAwKSBsZWZ0QnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBzY3JSZWYuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y291bnQqd2lkdGh9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICBpZigrY291bnQrMSAhPSBzaXplKSAgIHJpZ2h0QnUuc3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICBpZihzY3JSZWYuY2hpbGRyZW4ubGVuZ3RoID4gMSkgc2NyUmVmLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICB9LFtdKVxyXG4gICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvbSA9IHNjclJlZi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvb2wgPSBzY3JSZWY7XHJcbiAgICAgICAgICAgIC8vICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkb20uc3R5bGUud2lkdGggPSAod2luZG93LmlubmVyV2lkdGgvMiAtIHdpbmRvdy5pbm5lckhlaWdodC83LjE1KSArICdweCc7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lcldpZHRoLzIgLSB3aW5kb3cuaW5uZXJIZWlnaHQvNy4xNSkgKyAncHgnO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgY29vbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBsZXQgY291bnQgPSArY29vbC5kYXRhc2V0LnNyYztcclxuICAgICAgICAgICAgLy8gICAgICAgIGNvb2wuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y291bnQqY29vbC5vZmZzZXRXaWR0aH1weClgXHJcbiAgICAgICAgICAgIC8vICAgICAgICBzZXRUaW1lb3V0KCgpPT5jb29sLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKSwyMDApO1xyXG4gICAgICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgICAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RwaG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiIG9uQ2xpY2s9e3Njcm9sbEV2fSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU3ODgyMjI2MzE2NlwiICBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI2MDFcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48cGF0aCBkPVwiTTY2Ni42MjQgMTcxLjY5MDY2N2EyNS42IDI1LjYgMCAwIDAtMzYuMTgxMzMzLTM2LjE4MTMzNGwtMzU4LjQgMzU4LjRhMjUuNiAyNS42IDAgMCAwIDAgMzYuMTgxMzM0bDM1OC40IDM1OC40YTI1LjYgMjUuNiAwIDAgMCAzNi4xODEzMzMtMzYuMTgxMzM0TDMyNi4zMTQ2NjcgNTEybDM0MC4zMDkzMzMtMzQwLjMwOTMzM3pcIiBmaWxsPVwiIzJjMmMyY1wiIHAtaWQ9XCI2MDJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiIG9uQ2xpY2s9e3Njcm9sbEV2fSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU3ODgyMjI2MzE2NlwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjYwMVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPjxwYXRoIGQ9XCJNNjY2LjYyNCAxNzEuNjkwNjY3YTI1LjYgMjUuNiAwIDAgMC0zNi4xODEzMzMtMzYuMTgxMzM0bC0zNTguNCAzNTguNGEyNS42IDI1LjYgMCAwIDAgMCAzNi4xODEzMzRsMzU4LjQgMzU4LjRhMjUuNiAyNS42IDAgMCAwIDM2LjE4MTMzMy0zNi4xODEzMzRMMzI2LjMxNDY2NyA1MTJsMzQwLjMwOTMzMy0zNDAuMzA5MzMzelwiIGZpbGw9XCIjMmMyYzJjXCIgcC1pZD1cIjYwMlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvY29udGFpbmVyIHRyYW5zaXRpb25cIiBkYXRhLXNyYyA9ezB9IHJlZj17cmVmID0+IHNjclJlZj1yZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcChlID0+IDxQaG90byBrZXkgPSB7ZS5pZH0gaWQ9e2UuaWR9Lz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAucG9zdHBob3RvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc3RwaG90bzpob3ZlciAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICByaWdodDoxLjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3N0cGhvdG86aG92ZXIgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjEuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBob3RvY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNXM7XHJcbiAgICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAubGVmdCwucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246LjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCA0cHggI2FkYWRhZDtcclxuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDotMTIlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSg1MCUpOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICByaWdodDotMTIlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvY29udGVudFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\main\\\\postlist\\\\list\\\\photocontent2.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Photocontent);

/***/ })

})
//# sourceMappingURL=home.js.9c9e975bccc11a7de5f1.hot-update.js.map