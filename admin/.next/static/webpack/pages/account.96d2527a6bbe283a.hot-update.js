"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./src/components/Add_doc.js":
/*!***********************************!*\
  !*** ./src/components/Add_doc.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add_doc\": function() { return /* binding */ Add_doc; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\nvar Add_doc = /*#__PURE__*/function () {\n  var _ref2 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {\n    var values, image, arr, docRef;\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            values = _ref.values, image = _ref.image;\n\n            if (!(image[0] !== undefined)) {\n              _context2.next = 8;\n              break;\n            }\n\n            arr = [];\n            _context2.next = 5;\n            return Promise.all(image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(el) {\n                var fixedbase64, storageRef, url;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                        ///imgUpload on firebase \n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.storage, el.imgName);\n                        _context.next = 4;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);\n\n                      case 6:\n                        url = _context.sent;\n                        arr.push({\n                          imgName: el.imgName,\n                          imgUrl: url\n                        });\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }()));\n\n          case 5:\n            _context2.next = 7;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db, \"products\"), {\n              title: values.title,\n              description: values.description,\n              img: arr\n            });\n\n          case 7:\n            docRef = _context2.sent;\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function Add_doc(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n_c = Add_doc;\n\nvar _c;\n\n$RefreshReg$(_c, \"Add_doc\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRfZG9jLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTU8sT0FBTztBQUFBLGlVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxNQUFULFFBQVNBLE1BQVQsRUFBaUJDLEtBQWpCLFFBQWlCQSxLQUFqQjs7QUFBQSxrQkFFZkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhQyxTQUZFO0FBQUE7QUFBQTtBQUFBOztBQUdYQyxZQUFBQSxHQUhXLEdBR0wsRUFISztBQUFBO0FBQUEsbUJBSVRDLE9BQU8sQ0FBQ0MsR0FBUixDQUNGSixLQUFLLENBQUNLLEdBQU47QUFBQSw2VUFBVSxpQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUMsd0JBQUFBLFdBREEsR0FDY0QsRUFBRSxDQUFDRSxNQUFILENBQVVDLEtBQVYsQ0FBZ0IsT0FBaEIsRUFBeUIsQ0FBekIsQ0FEZCxFQUVOOztBQUFBO0FBQ01DLHdCQUFBQSxVQUhBLEdBR2FmLHFEQUFHLENBQUNELDBEQUFELEVBQVVZLEVBQUUsQ0FBQ0ssT0FBYixDQUhoQjtBQUFBO0FBQUEsK0JBSUFmLDhEQUFZLENBQUNjLFVBQUQsRUFBYUgsV0FBYixFQUEwQixRQUExQixDQUpaOztBQUFBO0FBQUE7QUFBQSwrQkFLWVYsZ0VBQWMsQ0FBQ2EsVUFBRCxDQUwxQjs7QUFBQTtBQUtBRSx3QkFBQUEsR0FMQTtBQU1OVix3QkFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBRUYsMEJBQUFBLE9BQU8sRUFBRUwsRUFBRSxDQUFDSyxPQUFkO0FBQXVCRywwQkFBQUEsTUFBTSxFQUFFRjtBQUEvQix5QkFBVDs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURFLENBSlM7O0FBQUE7QUFBQTtBQUFBLG1CQWFNcEIsMERBQU0sQ0FBQ0MsOERBQVUsQ0FBQ0YscURBQUQsRUFBSyxVQUFMLENBQVgsRUFBNkI7QUFDcER3QixjQUFBQSxLQUFLLEVBQUVoQixNQUFNLENBQUNnQixLQURzQztBQUVwREMsY0FBQUEsV0FBVyxFQUFFakIsTUFBTSxDQUFDaUIsV0FGZ0M7QUFHcERDLGNBQUFBLEdBQUcsRUFBRWY7QUFIK0MsYUFBN0IsQ0FiWjs7QUFBQTtBQWFUZ0IsWUFBQUEsTUFiUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQcEIsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiO0tBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZF9kb2MuanM/NDFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmpzJ1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnO1xyXG5pbXBvcnQgeyByZWYsIHVwbG9hZFN0cmluZywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5leHBvcnQgY29uc3QgQWRkX2RvYyA9IGFzeW5jICh7IHZhbHVlcywgaW1hZ2UgfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gICAgaWYgKGltYWdlWzBdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgaW1hZ2UubWFwKGFzeW5jIChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRiYXNlNjQgPSBlbC5iYXNlNjQuc3BsaXQoLywoLispLylbMV1cclxuICAgICAgICAgICAgICAgIC8vL2ltZ1VwbG9hZCBvbiBmaXJlYmFzZSBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgZWwuaW1nTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgZml4ZWRiYXNlNjQsICdiYXNlNjQnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZilcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHsgaW1nTmFtZTogZWwuaW1nTmFtZSwgaW1nVXJsOiB1cmwgfSlcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIiksIHtcclxuICAgICAgICAgICAgdGl0bGU6IHZhbHVlcy50aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaW1nOiBhcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UsIHZhbHVlcyk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwic3RvcmFnZSIsInJlZiIsInVwbG9hZFN0cmluZyIsImdldERvd25sb2FkVVJMIiwiQWRkX2RvYyIsInZhbHVlcyIsImltYWdlIiwidW5kZWZpbmVkIiwiYXJyIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImVsIiwiZml4ZWRiYXNlNjQiLCJiYXNlNjQiLCJzcGxpdCIsInN0b3JhZ2VSZWYiLCJpbWdOYW1lIiwidXJsIiwicHVzaCIsImltZ1VybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJkb2NSZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Add_doc.js\n");

/***/ }),

/***/ "./src/components/Addproducts.js":
/*!***************************************!*\
  !*** ./src/components/Addproducts.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProduct\": function() { return /* binding */ AddProduct; }\n/* harmony export */ });\n/* harmony import */ var _account_account_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account-profile */ \"./src/components/account/account-profile.js\");\n/* harmony import */ var _account_account_profile_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account-profile-details */ \"./src/components/account/account-profile-details.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _Add_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add_doc */ \"./src/components/Add_doc.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Pro\\\\Desktop\\\\sda\\\\team1\\\\admin\\\\src\\\\components\\\\Addproducts.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AddProduct = function AddProduct(_ref) {\n  _s();\n\n  var setaddproduct = _ref.setaddproduct,\n      num = _ref.num;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      image = _useState[0],\n      setimage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    title: \"\",\n    description: \"\"\n  }),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var fn = function fn() {\n    (0,_Add_doc__WEBPACK_IMPORTED_MODULE_2__.Add_doc)({\n      values: values,\n      image: image\n    });\n  };\n\n  var click = function click() {\n    setaddproduct(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxWidth: \"lg\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n          alignItems: 'center',\n          display: 'flex',\n          justifyContent: 'space-between',\n          flexWrap: 'wrap',\n          m: -1\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n          sx: {\n            m: 1\n          },\n          variant: \"h4\",\n          children: \"Add\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, _this), num === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n          sx: {\n            m: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n            color: \"primary\",\n            variant: \"contained\",\n            onClick: click,\n            children: \"x\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n        container: true,\n        spacing: 3,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n          item: true,\n          lg: 4,\n          md: 6,\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_account_account_profile__WEBPACK_IMPORTED_MODULE_0__.AccountProfile, {\n            image: image,\n            setimage: setimage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n          item: true,\n          lg: 8,\n          md: 6,\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_account_account_profile_details__WEBPACK_IMPORTED_MODULE_1__.AccountProfileDetails, {\n            setValues: setValues,\n            values: values,\n            fn: fn\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(AddProduct, \"dmFAQlLyqXgZsW2V/WmuFMqU7x8=\");\n\n_c = AddProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddProduct\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBc0RILENBbEVNOztHQUFNVDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkcHJvZHVjdHMuanM/N2IzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50UHJvZmlsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50LXByb2ZpbGUnO1xyXG5pbXBvcnQgeyBBY2NvdW50UHJvZmlsZURldGFpbHMgfSBmcm9tICcuL2FjY291bnQvYWNjb3VudC1wcm9maWxlLWRldGFpbHMnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFkZF9kb2MgfSBmcm9tICcuL0FkZF9kb2MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEFkZFByb2R1Y3QgPSAoeyBzZXRhZGRwcm9kdWN0LCBudW0gfSkgPT4ge1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRpbWFnZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xyXG4gICAgICAgIEFkZF9kb2MoeyB2YWx1ZXMsIGltYWdlIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRhZGRwcm9kdWN0KGZhbHNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtOiAtMVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtudW0gPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXszfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFByb2ZpbGUgaW1hZ2U9e2ltYWdlfSBzZXRpbWFnZT17c2V0aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFByb2ZpbGVEZXRhaWxzIHNldFZhbHVlcz17c2V0VmFsdWVzfSB2YWx1ZXM9e3ZhbHVlc30gZm49e2ZufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQWNjb3VudFByb2ZpbGUiLCJBY2NvdW50UHJvZmlsZURldGFpbHMiLCJCb3giLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkFkZF9kb2MiLCJ1c2VTdGF0ZSIsIkFkZFByb2R1Y3QiLCJzZXRhZGRwcm9kdWN0IiwibnVtIiwiaW1hZ2UiLCJzZXRpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJmbiIsImNsaWNrIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Addproducts.js\n");

/***/ })

});