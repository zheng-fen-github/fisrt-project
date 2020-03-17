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
                          console.log(size);
                          var count = width > height ? width - size : height - size;
                          var countAr = width > height ? [-count, 0] : [0, -count];
                          console.log(typeof countAr[0]);
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
      lineNumber: 81
    },
    __self: this
  }, !fetching ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2222252425" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_addPhototop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("form", {
    onSubmit: uploadPhoto,
    className: "jsx-2222252425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_addphotolist__WEBPACK_IMPORTED_MODULE_4__["default"], {
    click: fileClick,
    setPhotoFiles: setPhotoFiles,
    PhotoFiles: PhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), PhotoFiles.length > 0 && __jsx(_addbu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    click: fileClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_postform_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: fileRef,
    setFile: setPhotoFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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
      lineNumber: 93
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
      lineNumber: 99
    },
    __self: this
  })) : __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2222252425",
    __self: this
  }, ".add-photo.jsx-2222252425{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#f4f7f9;z-index:10;}.user.jsx-2222252425{position:fixed;top:50%;left:40px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}.container.jsx-2222252425::-webkit-scrollbar{display:none;}.container.jsx-2222252425{height:100%;width:980px;margin:0 auto;background:white;box-shadow:0 0 4px #eee;overflow:auto;padding-bottom:40vh;}.remind.jsx-2222252425{width:90%;height:50px;border-radius:12px;color:white;text-align:center;line-height:50px;font-size:20px;background:red;-webkit-animation:go-jsx-2222252425 .2s;animation:go-jsx-2222252425 .2s;}@-webkit-keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes go-jsx-2222252425{0%{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGFkZGNvbnRlbnRcXGFkZFBob3RvXFxhZGRwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3lCLEFBRytDLEFBU0EsQUFNRixBQUdELEFBU0YsQUFZZSxBQUdGLFVBZFgsRUFUQSxDQUhmLEVBZlMsQUFTRSxNQVJELENBMkJZLENBbEJULENBU0ksSUFqQkQsS0FTZSxLQVNYLEdBakJMLEFBMEJBLFlBekJPLEFBMEJELEVBVE0sY0FxQnZCLEVBWGdCLENBMUJOLEdBa0NWLElBakJhLElBaEJqQixLQTBCa0IsS0FUSyxVQVVMLFVBVGxCLEtBVXFCLFdBdEJyQiw2REF1QkEiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcYWRkY29udGVudFxcYWRkUGhvdG9cXGFkZHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9hZGRQaG90b3RvcCdcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9hZGRwaG90b2xpc3QnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vcG9zdGZvcm0vZm9ybSdcclxuaW1wb3J0IEFkZEJ1IGZyb20gJy4vYWRkYnUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBBZGRQaG90bygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtQaG90b0ZpbGVzLCBzZXRQaG90b0ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmZXRjaGluZyxzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmaWxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7IC8vIGZpbGUgRG9tIOWumuS5iVxyXG4gICAgbGV0IGNhbnZhc1JlZjsgXHJcblxyXG4gICAgY29uc3QgZmlsZUNsaWNrID0gKCkgPT4geyAgICAgIC8vIOa3u+WKoOWbvueJh0ZpbGVET00g54K55Ye75LqL5Lu2XHJcbiAgICAgICAgZmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7IFxyXG4gICAgfSBcclxuICAgIGNvbnN0IHVwbG9hZFBob3RvID1hc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihQaG90b0ZpbGVzLmxlbmd0aDwxKSB7ICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnhafniYfmt7vliqBcclxuICAgICAgICAgICAgbGV0IHJlbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmQnKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVtaW5nLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlbWluZy5oaWRkZW4gPSB0cnVlLDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDmt7vliqDkv6Hmga/lkoznhafniYfliLDmnI3liqHlmahcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgZm9ybURhdGEuZGVsZXRlKCdwaG90b0ZpbGUnKTtcclxuICAgICAgICBsZXQgZmlsZXNQcm9taXNlcyA9IFBob3RvRmlsZXMubWFwKCBhc3luYyAocGhvdG8pID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ijgeWHj+WbvueJhzHmr5Qx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3dpZHRoLGhlaWdodH0gID0gaW1nOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNpemUgPSB3aWR0aD5oZWlnaHQ/aGVpZ2h0OndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSB3aWR0aD5oZWlnaHQ/d2lkdGgtc2l6ZTpoZWlnaHQtc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudEFyID0gd2lkdGg+aGVpZ2h0P1stY291bnQsMF06WzAsLWNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjb3VudEFyWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYuaGVpZ2h0ID0gc2l6ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1JlZi5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWcsLi4uY291bnRBcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNSZWYudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBhLmNsaWNrKCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShibG9iKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IGJsb2IgPSByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gbmV3IEZpbGUoW2Jsb2JdLHBob3RvLmZpbGUubmFtZSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6cGhvdG8uZmlsZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gbGV0IGZpbGVzO1xyXG4gICAgICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKGZpbGVzUHJvbWlzZXMpLnRoZW4oIGZpbGUgPT4gZmlsZXMgPWZpbGUpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gZmlsZXMuZm9yRWFjaChmaWxlID0+e1xyXG4gICAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvRmlsZScsZmlsZSlcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyAvLyBpZighZGF0YS5hY2NvdW50KSByZXR1cm4gYWxlcnQoJ+acquiOt+WPluS9nOiAhSDnqIvluo/plJnor68nKTtcclxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLG5hbWUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAvLyAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICAvLyAgICAgbGV0IHJlcXVpcmUgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2dldHBob3RvL3Bvc3QnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7bWV0aG9kOidQT1NUJyxib2R5OmZvcm1EYXRhfSk7XHJcbiAgICAgICAgLy8gICAgIGxldCByZXMgPSBhd2FpdCByZXF1aXJlLmpzb24oKTtcclxuICAgICAgICAvLyAgICAgaWYocmVzKWNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAvLyB9KSgpIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkLXBob3RvJz5cclxuICAgICAgICAgIHshZmV0Y2hpbmc/PD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb3AvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGxvYWRQaG90b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBjbGljaz17ZmlsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob3RvRmlsZXM9e3NldFBob3RvRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9GaWxlcz17UGhvdG9GaWxlc30vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtQaG90b0ZpbGVzLmxlbmd0aD4wICYmIDxBZGRCdSBjbGljaz17ZmlsZUNsaWNrfS8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIHJlZj17ZmlsZVJlZn0gc2V0RmlsZT17c2V0UGhvdG9GaWxlc30+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaW5kXCIgb25DbGljaz17KGUpID0+ZS50YXJnZXQuaGlkZGVuID0gdHJ1ZSB9IGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOivt+a3u+WKoOiHs+WwkeS4gOW8oOeFp+eJh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cmVmID0+IGNhbnZhc1JlZiA9IHJlZn0gd2lkdGg9JzQwMCcgaGVpZ2h0PSc0MDAnIHN0eWxlPXt7cG9zaXRpb246J2ZpeGVkJyxsZWZ0OjAsdG9wOjAsekluZGV4Ojk5fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgIDwvPjo8TG9hZGluZy8+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQtcGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZjRmN2Y5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTUwJSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDRweCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1pbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\addcontent\\\\addPhoto\\\\addphoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AddPhoto);

/***/ })

})
//# sourceMappingURL=sendpost.js.933e52b11bc552dd8e48.hot-update.js.map