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
/* harmony import */ var _public_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/loading */ "./component/public/loading.js");
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
                          var countAr = width > height ? [-count / 2, 0] : [0, -count / 2];
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
      lineNumber: 76
    },
    __self: this
  }, !fetching ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2222252425" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_addPhototop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("form", {
    onSubmit: uploadPhoto,
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_addphotolist__WEBPACK_IMPORTED_MODULE_4__["default"], {
    click: fileClick,
    setPhotoFiles: setPhotoFiles,
    PhotoFiles: PhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), PhotoFiles.length > 0 && __jsx(_addbu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    click: fileClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_postform_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: fileRef,
    setFile: setPhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
      lineNumber: 88
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
      lineNumber: 94
    },
    __self: this
  })) : __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2222252425",
    __self: this
  }, ".add-photo.jsx-2222252425{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#f4f7f9;z-index:10;}.user.jsx-2222252425{position:fixed;top:50%;left:40px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}.container.jsx-2222252425::-webkit-scrollbar{display:none;}.container.jsx-2222252425{height:100%;width:980px;margin:0 auto;background:white;box-shadow:0 0 4px #eee;overflow:auto;padding-bottom:40vh;}.remind.jsx-2222252425{width:90%;height:50px;border-radius:12px;color:white;text-align:center;line-height:50px;font-size:20px;background:red;-webkit-animation:go-jsx-2222252425 .2s;animation:go-jsx-2222252425 .2s;}@-webkit-keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGFkZGNvbnRlbnRcXGFkZFBob3RvXFxhZGRwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3lCLEFBRytDLEFBU0EsQUFNRixBQUdELEFBU0YsQUFZZSxBQUdGLFVBZFgsRUFUQSxDQUhmLEVBZlMsQUFTRSxNQVJELENBMkJZLENBbEJULENBU0ksSUFqQkQsS0FTZSxLQVNYLEdBakJMLEFBMEJBLFlBekJPLEFBMEJELEVBVE0sY0FxQnZCLEVBWGdCLENBMUJOLEdBa0NWLElBakJhLElBaEJqQixLQTBCa0IsS0FUSyxVQVVMLFVBVGxCLEtBVXFCLFdBdEJyQiw2REF1QkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcYWRkY29udGVudFxcYWRkUGhvdG9cXGFkZHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9hZGRQaG90b3RvcCdcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9hZGRwaG90b2xpc3QnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vcG9zdGZvcm0vZm9ybSdcclxuaW1wb3J0IEFkZEJ1IGZyb20gJy4vYWRkYnUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBBZGRQaG90bygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtQaG90b0ZpbGVzLCBzZXRQaG90b0ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmaWxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7IC8vIGZpbGUgRG9tIOWumuS5iVxyXG4gICAgbGV0IGNhbnZhc1JlZjsgXHJcblxyXG4gICAgY29uc3QgZmlsZUNsaWNrID0gKCkgPT4geyAgICAgIC8vIOa3u+WKoOWbvueJh0ZpbGVET00g54K55Ye75LqL5Lu2XHJcbiAgICAgICAgZmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7IFxyXG4gICAgfSBcclxuICAgIGNvbnN0IHVwbG9hZFBob3RvID1hc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihQaG90b0ZpbGVzLmxlbmd0aDwxKSB7ICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnhafniYfmt7vliqBcclxuICAgICAgICAgICAgbGV0IHJlbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmQnKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVtaW5nLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlbWluZy5oaWRkZW4gPSB0cnVlLDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDmt7vliqDkv6Hmga/lkoznhafniYfliLDmnI3liqHlmahcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgZm9ybURhdGEuZGVsZXRlKCdwaG90b0ZpbGUnKTtcclxuICAgICAgICBsZXQgZmlsZXNQcm9taXNlcyA9IFBob3RvRmlsZXMubWFwKCBhc3luYyAocGhvdG8pID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ijgeWHj+WbvueJhzHmr5Qx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3dpZHRoLGhlaWdodH0gID0gaW1nOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gd2lkdGg+aGVpZ2h0P2hlaWdodDp3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHdpZHRoPmhlaWdodD93aWR0aC1zaXplOmhlaWdodC1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50QXIgPSB3aWR0aD5oZWlnaHQ/Wy1jb3VudC8yLDBdOlswLC1jb3VudC8yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYuaGVpZ2h0ID0gc2l6ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWcsLi4uY291bnRBcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYudG9CbG9iKGJsb2IgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJsb2IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9iO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb21pc2UudGhlbihyZXN1bHQgPT4gYmxvYiA9IHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBuZXcgRmlsZShbYmxvYl0scGhvdG8uZmlsZS5uYW1lLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpwaG90by5maWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTsgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmlsZXM7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXNQcm9taXNlcykudGhlbiggZmlsZSA9PiBmaWxlcyA9ZmlsZSk7XHJcbiAgICAgICBcclxuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG9GaWxlJyxmaWxlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmKCFkYXRhLmFjY291bnQpIHJldHVybiBhbGVydCgn5pyq6I635Y+W5L2c6ICFIOeoi+W6j+mUmeivrycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsbmFtZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWlyZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2V0cGhvdG8vcG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXRob2Q6J1BPU1QnLGJvZHk6Zm9ybURhdGF9KTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcXVpcmUuanNvbigpO1xyXG4gICAgICAgICAgICBpZihyZXMpY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH0pKCkgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtcGhvdG8nPlxyXG4gICAgICAgICAgeyFmZXRjaGluZz88PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvcC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwbG9hZFBob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50IGNsaWNrPXtmaWxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG9GaWxlcz17c2V0UGhvdG9GaWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b0ZpbGVzPXtQaG90b0ZpbGVzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1Bob3RvRmlsZXMubGVuZ3RoPjAgJiYgPEFkZEJ1IGNsaWNrPXtmaWxlQ2xpY2t9Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gcmVmPXtmaWxlUmVmfSBzZXRGaWxlPXtzZXRQaG90b0ZpbGVzfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1pbmRcIiBvbkNsaWNrPXsoZSkgPT5lLnRhcmdldC5oaWRkZW4gPSB0cnVlIH0gaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6K+35re75Yqg6Iez5bCR5LiA5byg54Wn54mHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtyZWYgPT4gY2FudmFzUmVmID0gcmVmfSBoaWRkZW4gc3R5bGU9e3twb3NpdGlvbjonZml4ZWQnLGxlZnQ6MCx0b3A6MCx6SW5kZXg6OTl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgPC8+OjxMb2FkaW5nLz59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZC1waG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNGY3Zjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMCwtNTAlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgNHB4ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbWluZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ28gLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBnbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\addcontent\\\\addPhoto\\\\addphoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AddPhoto);

/***/ })

})
//# sourceMappingURL=sendpost.js.30f2a12b2c8bee01021a.hot-update.js.map