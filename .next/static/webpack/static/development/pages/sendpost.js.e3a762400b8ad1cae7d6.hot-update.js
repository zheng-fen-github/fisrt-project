webpackHotUpdate("static\\development\\pages\\sendpost.js",{

/***/ "./component/home/addcontent/addPhoto/addphoto.js":
/*!********************************************************!*\
  !*** ./component/home/addcontent/addPhoto/addphoto.js ***!
  \********************************************************/
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
/* harmony import */ var _addPhototop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPhototop */ "./component/home/addcontent/addPhoto/addPhototop.js");
/* harmony import */ var _addphotolist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addphotolist */ "./component/home/addcontent/addPhoto/addphotolist.js");
/* harmony import */ var _postform_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postform/form */ "./component/home/addcontent/addPhoto/postform/form.js");
/* harmony import */ var _addbu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbu */ "./component/home/addcontent/addPhoto/addbu.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var require;
var _jsxFileName = "C:\\test\\component\\home\\addcontent\\addPhoto\\addphoto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function AddPhoto() {
  var data = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      PhotoFiles = _useState[0],
      setPhotoFiles = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var fileRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef(); // file Dom 定义

  var canvasRef;

  var fileClick = function fileClick() {
    // 添加图片FileDOM 点击事件
    fileRef.current.click();
  };

  var uploadPhoto = function uploadPhoto(e) {
    var reming, formData, filesPromises, files;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadPhoto$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();

            if (!(PhotoFiles.length < 1)) {
              _context3.next = 6;
              break;
            }

            // 检测是否有照片添加
            reming = document.querySelector('.remind');
            reming.hidden = false;
            setTimeout(function () {
              return reming.hidden = true;
            }, 2000);
            return _context3.abrupt("return");

          case 6:
            // 添加信息和照片到服务器
            formData = new FormData(e.target);
            formData["delete"]('photoFile');
            filesPromises = PhotoFiles.map(function _callee(photo) {
              var img, promise, blob, file;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      img = new Image(); //裁减图片1比1。

                      img.src = URL.createObjectURL(photo.file);
                      promise = new Promise(function (resolve) {
                        img.onload = function () {
                          var _canvasRef$getContext;

                          var width = img.width,
                              height = img.height;
                          var size = width > height ? height : width;
                          var count = width > height ? width - size : height - size;
                          var countAr = width > height ? [-count, 0] : [0, -count];
                          canvasRef.width = size;
                          canvasRef.height = size;

                          (_canvasRef$getContext = canvasRef.getContext('2d')).drawImage.apply(_canvasRef$getContext, [img].concat(countAr));

                          canvasRef.toBlob(function (blob) {
                            resolve(blob);
                          });
                        };
                      });
                      _context.next = 5;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise.then(function (result) {
                        return blob = result;
                      }));

                    case 5:
                      file = new File([blob], photo.file.name, {
                        type: photo.file.type
                      });
                      return _context.abrupt("return", file);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, null, null, null, Promise);
            });
            _context3.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(filesPromises).then(function (file) {
              return files = file;
            }));

          case 11:
            files.forEach(function (file) {
              formData.append('photoFile', file);
            }); // if(!data.account) return alert('未获取作者 程序错误');

            formData.append('name', name.textContent);

            (function _callee2() {
              var require, res;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('http://localhost:3001/getphoto/post', {
                        method: 'POST',
                        body: formData
                      }));

                    case 2:
                      require = _context2.sent;
                      _context2.next = 5;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(require.json());

                    case 5:
                      res = _context2.sent;
                      if (res) console.log(res);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, null, null, null, Promise);
            })();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-2222252425" + " " + 'add-photo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2222252425" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_addPhototop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("form", {
    onSubmit: uploadPhoto,
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_addphotolist__WEBPACK_IMPORTED_MODULE_4__["default"], {
    click: fileClick,
    setPhotoFiles: setPhotoFiles,
    PhotoFiles: PhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), PhotoFiles.length > 0 && __jsx(_addbu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    click: fileClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_postform_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: fileRef,
    setFile: setPhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      return e.target.hidden = true;
    },
    hidden: true,
    className: "jsx-2222252425" + " " + "remind",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u8BF7\u6DFB\u52A0\u81F3\u5C11\u4E00\u5F20\u7167\u7247")))), __jsx("canvas", {
    ref: function ref(_ref) {
      return canvasRef = _ref;
    },
    hidden: true,
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 99
    },
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2222252425",
    __self: this
  }, ".add-photo.jsx-2222252425{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#f4f7f9;z-index:10;}.user.jsx-2222252425{position:fixed;top:50%;left:40px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}.container.jsx-2222252425::-webkit-scrollbar{display:none;}.container.jsx-2222252425{height:100%;width:980px;margin:0 auto;background:white;box-shadow:0 0 4px #eee;overflow:auto;padding-bottom:40vh;}.remind.jsx-2222252425{width:90%;height:50px;border-radius:12px;color:white;text-align:center;line-height:50px;font-size:20px;background:red;-webkit-animation:go-jsx-2222252425 .2s;animation:go-jsx-2222252425 .2s;}@-webkit-keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGFkZGNvbnRlbnRcXGFkZFBob3RvXFxhZGRwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRnlCLEFBRytDLEFBU0EsQUFNRixBQUdELEFBU0YsQUFZZSxBQUdGLFVBZFgsRUFUQSxDQUhmLEVBZlMsQUFTRSxNQVJELENBMkJZLENBbEJULENBU0ksSUFqQkQsS0FTZSxLQVNYLEdBakJMLEFBMEJBLFlBekJPLEFBMEJELEVBVE0sY0FxQnZCLEVBWGdCLENBMUJOLEdBa0NWLElBakJhLElBaEJqQixLQTBCa0IsS0FUSyxVQVVMLFVBVGxCLEtBVXFCLFdBdEJyQiw2REF1QkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcYWRkY29udGVudFxcYWRkUGhvdG9cXGFkZHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9hZGRQaG90b3RvcCdcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9hZGRwaG90b2xpc3QnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vcG9zdGZvcm0vZm9ybSdcclxuaW1wb3J0IEFkZEJ1IGZyb20gJy4vYWRkYnUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIEFkZFBob3RvKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW1Bob3RvRmlsZXMsIHNldFBob3RvRmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZldGNoaW5nLHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGZpbGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTsgLy8gZmlsZSBEb20g5a6a5LmJXHJcbiAgICBsZXQgY2FudmFzUmVmOyBcclxuXHJcbiAgICBjb25zdCBmaWxlQ2xpY2sgPSAoKSA9PiB7ICAgICAgLy8g5re75Yqg5Zu+54mHRmlsZURPTSDngrnlh7vkuovku7ZcclxuICAgICAgICBmaWxlUmVmLmN1cnJlbnQuY2xpY2soKTsgXHJcbiAgICB9IFxyXG4gICAgY29uc3QgdXBsb2FkUGhvdG8gPWFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKFBob3RvRmlsZXMubGVuZ3RoPDEpIHsgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuacieeFp+eJh+a3u+WKoFxyXG4gICAgICAgICAgICBsZXQgcmVtaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWluZCcpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZW1pbmcuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVtaW5nLmhpZGRlbiA9IHRydWUsMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIOa3u+WKoOS/oeaBr+WSjOeFp+eJh+WIsOacjeWKoeWZqFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcclxuICAgICAgICBmb3JtRGF0YS5kZWxldGUoJ3Bob3RvRmlsZScpO1xyXG4gICAgICAgIGxldCBmaWxlc1Byb21pc2VzID0gUGhvdG9GaWxlcy5tYXAoIGFzeW5jIChwaG90bykgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KOB5YeP5Zu+54mHMeavlDHjgIJcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChwaG90by5maWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7d2lkdGgsaGVpZ2h0fSAgPSBpbWc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHdpZHRoPmhlaWdodD9oZWlnaHQ6d2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSB3aWR0aD5oZWlnaHQ/d2lkdGgtc2l6ZTpoZWlnaHQtc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudEFyID0gd2lkdGg+aGVpZ2h0P1stY291bnQsMF06WzAsLWNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYuaGVpZ2h0ID0gc2l6ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzUmVmLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltZywuLi5jb3VudEFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJsb2IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9iO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb21pc2UudGhlbihyZXN1bHQgPT4gYmxvYiA9IHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBuZXcgRmlsZShbYmxvYl0scGhvdG8uZmlsZS5uYW1lLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpwaG90by5maWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTsgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmlsZXM7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXNQcm9taXNlcykudGhlbiggZmlsZSA9PiBmaWxlcyA9ZmlsZSk7XHJcbiAgICAgICBcclxuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG9GaWxlJyxmaWxlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmKCFkYXRhLmFjY291bnQpIHJldHVybiBhbGVydCgn5pyq6I635Y+W5L2c6ICFIOeoi+W6j+mUmeivrycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsbmFtZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWlyZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2V0cGhvdG8vcG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXRob2Q6J1BPU1QnLGJvZHk6Zm9ybURhdGF9KTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcXVpcmUuanNvbigpO1xyXG4gICAgICAgICAgICBpZihyZXMpY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH0pKCkgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtcGhvdG8nPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgPFRvcC8+XHJcbiAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGxvYWRQaG90b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgY2xpY2s9e2ZpbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG9GaWxlcz17c2V0UGhvdG9GaWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9GaWxlcz17UGhvdG9GaWxlc30vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7UGhvdG9GaWxlcy5sZW5ndGg+MCAmJiA8QWRkQnUgY2xpY2s9e2ZpbGVDbGlja30vPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gcmVmPXtmaWxlUmVmfSBzZXRGaWxlPXtzZXRQaG90b0ZpbGVzfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaW5kXCIgb25DbGljaz17KGUpID0+ZS50YXJnZXQuaGlkZGVuID0gdHJ1ZSB9IGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor7fmt7vliqDoh7PlsJHkuIDlvKDnhafniYdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17cmVmID0+IGNhbnZhc1JlZiA9IHJlZn0gaGlkZGVuIHN0eWxlPXt7cG9zaXRpb246J2ZpeGVkJyxsZWZ0OjAsdG9wOjAsekluZGV4Ojk5fX0+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvY2FudmFzPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZC1waG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNGY3Zjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMCwtNTAlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgNHB4ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbWluZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ28gLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBnbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\addcontent\\\\addPhoto\\\\addphoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AddPhoto);

/***/ })

})
//# sourceMappingURL=sendpost.js.e3a762400b8ad1cae7d6.hot-update.js.map