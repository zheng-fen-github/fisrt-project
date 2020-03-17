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
    var reming, formData, filesPromises;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadPhoto$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();

            if (!(PhotoFiles.length < 1)) {
              _context2.next = 6;
              break;
            }

            // 检测是否有照片添加
            reming = document.querySelector('.remind');
            reming.hidden = false;
            setTimeout(function () {
              return reming.hidden = true;
            }, 2000);
            return _context2.abrupt("return");

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
                          console.log(countAr);
                          canvasRef.width = size;
                          canvasRef.height = size;

                          (_canvasRef$getContext = canvasRef.getContext('2d')).drawImage.apply(_canvasRef$getContext, [img].concat(countAr));

                          canvasRef.toBlob(function (blob) {
                            //  const a = document.createElement('a');
                            //  a.href = URL.createObjectURL(blob);
                            //  a.click();   
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
            }); // let files;
            // await Promise.all(filesPromises).then( file => files =file);
            // files.forEach(file =>{
            //     formData.append('photoFile',file)
            // });
            // // if(!data.account) return alert('未获取作者 程序错误');
            // formData.append('name',name.textContent);
            // (async () => {
            //     // setFetching(true);
            //     let require = await fetch('http://localhost:3001/getphoto/post',
            //                 {method:'POST',body:formData});
            //     let res = await require.json();
            //     if(res)console.log(res)
            // })() 

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-2222252425" + " " + 'add-photo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, !fetching ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2222252425" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_addPhototop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("form", {
    onSubmit: uploadPhoto,
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_addphotolist__WEBPACK_IMPORTED_MODULE_4__["default"], {
    click: fileClick,
    setPhotoFiles: setPhotoFiles,
    PhotoFiles: PhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), PhotoFiles.length > 0 && __jsx(_addbu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    click: fileClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_postform_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: fileRef,
    setFile: setPhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 92
    },
    __self: this
  }, "\u8BF7\u6DFB\u52A0\u81F3\u5C11\u4E00\u5F20\u7167\u7247")))), __jsx("canvas", {
    ref: function ref(_ref) {
      return canvasRef = _ref;
    },
    width: "400",
    height: "400",
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 99
    },
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })) : __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2222252425",
    __self: this
  }, ".add-photo.jsx-2222252425{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#f4f7f9;z-index:10;}.user.jsx-2222252425{position:fixed;top:50%;left:40px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}.container.jsx-2222252425::-webkit-scrollbar{display:none;}.container.jsx-2222252425{height:100%;width:980px;margin:0 auto;background:white;box-shadow:0 0 4px #eee;overflow:auto;padding-bottom:40vh;}.remind.jsx-2222252425{width:90%;height:50px;border-radius:12px;color:white;text-align:center;line-height:50px;font-size:20px;background:red;-webkit-animation:go-jsx-2222252425 .2s;animation:go-jsx-2222252425 .2s;}@-webkit-keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGFkZGNvbnRlbnRcXGFkZFBob3RvXFxhZGRwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR3lCLEFBRytDLEFBU0EsQUFNRixBQUdELEFBU0YsQUFZZSxBQUdGLFVBZFgsRUFUQSxDQUhmLEVBZlMsQUFTRSxNQVJELENBMkJZLENBbEJULENBU0ksSUFqQkQsS0FTZSxLQVNYLEdBakJMLEFBMEJBLFlBekJPLEFBMEJELEVBVE0sY0FxQnZCLEVBWGdCLENBMUJOLEdBa0NWLElBakJhLElBaEJqQixLQTBCa0IsS0FUSyxVQVVMLFVBVGxCLEtBVXFCLFdBdEJyQiw2REF1QkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcYWRkY29udGVudFxcYWRkUGhvdG9cXGFkZHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9hZGRQaG90b3RvcCdcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9hZGRwaG90b2xpc3QnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vcG9zdGZvcm0vZm9ybSdcclxuaW1wb3J0IEFkZEJ1IGZyb20gJy4vYWRkYnUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBBZGRQaG90bygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtQaG90b0ZpbGVzLCBzZXRQaG90b0ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmaWxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7IC8vIGZpbGUgRG9tIOWumuS5iVxyXG4gICAgbGV0IGNhbnZhc1JlZjsgXHJcblxyXG4gICAgY29uc3QgZmlsZUNsaWNrID0gKCkgPT4geyAgICAgIC8vIOa3u+WKoOWbvueJh0ZpbGVET00g54K55Ye75LqL5Lu2XHJcbiAgICAgICAgZmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7IFxyXG4gICAgfSBcclxuICAgIGNvbnN0IHVwbG9hZFBob3RvID1hc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihQaG90b0ZpbGVzLmxlbmd0aDwxKSB7ICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnhafniYfmt7vliqBcclxuICAgICAgICAgICAgbGV0IHJlbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmQnKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVtaW5nLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlbWluZy5oaWRkZW4gPSB0cnVlLDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDmt7vliqDkv6Hmga/lkoznhafniYfliLDmnI3liqHlmahcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgZm9ybURhdGEuZGVsZXRlKCdwaG90b0ZpbGUnKTtcclxuICAgICAgICBsZXQgZmlsZXNQcm9taXNlcyA9IFBob3RvRmlsZXMubWFwKCBhc3luYyAocGhvdG8pID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ijgeWHj+WbvueJhzHmr5Qx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3dpZHRoLGhlaWdodH0gID0gaW1nOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gd2lkdGg+aGVpZ2h0P2hlaWdodDp3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHdpZHRoPmhlaWdodD93aWR0aC1zaXplOmhlaWdodC1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50QXIgPSB3aWR0aD5oZWlnaHQ/Wy1jb3VudC8yLDBdOlswLC1jb3VudC8yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50QXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYud2lkdGggPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzUmVmLmhlaWdodCA9IHNpemU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLC4uLmNvdW50QXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzUmVmLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgYS5jbGljaygpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmxvYilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2I7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBibG9iID0gcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSxwaG90by5maWxlLm5hbWUse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOnBob3RvLmZpbGUudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGxldCBmaWxlcztcclxuICAgICAgICAvLyBhd2FpdCBQcm9taXNlLmFsbChmaWxlc1Byb21pc2VzKS50aGVuKCBmaWxlID0+IGZpbGVzID1maWxlKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGZpbGVzLmZvckVhY2goZmlsZSA9PntcclxuICAgICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90b0ZpbGUnLGZpbGUpXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLy8gaWYoIWRhdGEuYWNjb3VudCkgcmV0dXJuIGFsZXJ0KCfmnKrojrflj5bkvZzogIUg56iL5bqP6ZSZ6K+vJyk7XHJcbiAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCduYW1lJyxuYW1lLnRleHRDb250ZW50KTtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLy8gKGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gc2V0RmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCByZXF1aXJlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nZXRwaG90by9wb3N0JyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAge21ldGhvZDonUE9TVCcsYm9keTpmb3JtRGF0YX0pO1xyXG4gICAgICAgIC8vICAgICBsZXQgcmVzID0gYXdhaXQgcmVxdWlyZS5qc29uKCk7XHJcbiAgICAgICAgLy8gICAgIGlmKHJlcyljb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gfSkoKSBcclxuICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZC1waG90byc+XHJcbiAgICAgICAgICB7IWZldGNoaW5nPzw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9wLz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBsb2FkUGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgY2xpY2s9e2ZpbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQaG90b0ZpbGVzPXtzZXRQaG90b0ZpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvRmlsZXM9e1Bob3RvRmlsZXN9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UGhvdG9GaWxlcy5sZW5ndGg+MCAmJiA8QWRkQnUgY2xpY2s9e2ZpbGVDbGlja30vPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSByZWY9e2ZpbGVSZWZ9IHNldEZpbGU9e3NldFBob3RvRmlsZXN9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWluZFwiIG9uQ2xpY2s9eyhlKSA9PmUudGFyZ2V0LmhpZGRlbiA9IHRydWUgfSBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor7fmt7vliqDoh7PlsJHkuIDlvKDnhafniYdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3JlZiA9PiBjYW52YXNSZWYgPSByZWZ9IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBzdHlsZT17e3Bvc2l0aW9uOidmaXhlZCcsbGVmdDowLHRvcDowLHpJbmRleDo5OX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgICA8Lz46PExvYWRpbmcvPn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkLXBob3RvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2Y0ZjdmOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC01MCUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjk4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCA0cHggI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjQwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtaW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnbyAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBob3RvXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\addcontent\\\\addPhoto\\\\addphoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AddPhoto);

/***/ })

})
//# sourceMappingURL=sendpost.js.bab865aa9741557d0adb.hot-update.js.map