"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/components/useAdd_doc.js":
/*!**************************************!*\
  !*** ./src/components/useAdd_doc.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAdd_doc\": function() { return /* binding */ useAdd_doc; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar useAdd_doc = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref2 = _s((0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_s( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(_ref) {\n    var values, image, _useState, arr, setarr;\n\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _s();\n\n            values = _ref.values, image = _ref.image;\n            // console.log(image);\n            _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), arr = _useState[0], setarr = _useState[1];\n            (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n              if (image[0] !== undefined) {\n                image.map( /*#__PURE__*/function () {\n                  var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(el) {\n                    var fixedbase64, storageRef, url;\n                    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                            storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__.storage, el.imgName);\n                            _context.next = 4;\n                            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                          case 4:\n                            _context.next = 6;\n                            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(storageRef);\n\n                          case 6:\n                            url = _context.sent;\n                            setarr(function (arr) {\n                              return [].concat((0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr), [{\n                                imgName: el.imgName,\n                                imgUrl: url\n                              }]);\n                            });\n\n                          case 8:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x2) {\n                    return _ref3.apply(this, arguments);\n                  };\n                }());\n              }\n            }, [image]);\n            console.log(arr);\n            return _context2.abrupt(\"return\", arr);\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }), \"k7tNLh7HWv1JYwWVBDeK6YF3hVg=\")), \"k7tNLh7HWv1JYwWVBDeK6YF3hVg=\");\n\n  return function useAdd_doc(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VBZGRfZG9jLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVMsVUFBVTtBQUFBOztBQUFBLHVVQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBU0MsWUFBQUEsTUFBVCxRQUFTQSxNQUFULEVBQWlCQyxLQUFqQixRQUFpQkEsS0FBakI7QUFDdEI7QUFEc0Isd0JBRUFKLCtDQUFRLENBQUMsRUFBRCxDQUZSLEVBRWZLLEdBRmUsaUJBRVZDLE1BRlU7QUFHdEJMLFlBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLGtCQUFJRyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFHLFNBQWpCLEVBQTRCO0FBQ3hCSCxnQkFBQUEsS0FBSyxDQUFDSSxHQUFOO0FBQUEsaVZBQVUsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLDRCQUFBQSxXQURBLEdBQ2NELEVBQUUsQ0FBQ0UsTUFBSCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLENBQXpCLENBRGQsRUFFTjs7QUFDTUMsNEJBQUFBLFVBSEEsR0FHYWhCLHFEQUFHLENBQUNELDBEQUFELEVBQVVhLEVBQUUsQ0FBQ0ssT0FBYixDQUhoQjtBQUFBO0FBQUEsbUNBSUFoQiw4REFBWSxDQUFDZSxVQUFELEVBQWFILFdBQWIsRUFBMEIsUUFBMUIsQ0FKWjs7QUFBQTtBQUFBO0FBQUEsbUNBS1lYLGdFQUFjLENBQUNjLFVBQUQsQ0FMMUI7O0FBQUE7QUFLQUUsNEJBQUFBLEdBTEE7QUFNTlQsNEJBQUFBLE1BQU0sQ0FBQyxVQUFDRCxHQUFEO0FBQUEsMk1BQWFBLEdBQWIsSUFBa0I7QUFBRVMsZ0NBQUFBLE9BQU8sRUFBRUwsRUFBRSxDQUFDSyxPQUFkO0FBQXVCRSxnQ0FBQUEsTUFBTSxFQUFFRDtBQUEvQiwrQkFBbEI7QUFBQSw2QkFBRCxDQUFOOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUg7QUFDSixhQVhRLEVBV04sQ0FBQ1gsS0FBRCxDQVhNLENBQVQ7QUFZQWEsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLEdBQVo7QUFmc0IsOENBZ0JmQSxHQWhCZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWSCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VzZUFkZF9kb2MuanM/NjBlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmpzJ1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnO1xyXG5pbXBvcnQgeyByZWYsIHVwbG9hZFN0cmluZywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgdXNlQWRkX2RvYyA9IGFzeW5jICh7IHZhbHVlcywgaW1hZ2UgfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gICAgY29uc3QgW2Fyciwgc2V0YXJyXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW1hZ2VbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbWFnZS5tYXAoYXN5bmMgKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZGJhc2U2NCA9IGVsLmJhc2U2NC5zcGxpdCgvLCguKykvKVsxXVxyXG4gICAgICAgICAgICAgICAgLy8vaW1nVXBsb2FkIG9uIGZpcmViYXNlIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBlbC5pbWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmLCBmaXhlZGJhc2U2NCwgJ2Jhc2U2NCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgICAgICAgICAgc2V0YXJyKChhcnIpID0+IFsuLi5hcnIsIHsgaW1nTmFtZTogZWwuaW1nTmFtZSwgaW1nVXJsOiB1cmwgfV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ltYWdlXSlcclxuICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgICAvLyBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJwcm9kdWN0c1wiKSwge1xyXG4gICAgLy8gICAgIHRpdGxlOiB2YWx1ZXMudGl0bGUsXHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgIC8vICAgICBpbWc6IGltZ3VwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UsIHZhbHVlcyk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwic3RvcmFnZSIsInJlZiIsInVwbG9hZFN0cmluZyIsImdldERvd25sb2FkVVJMIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VBZGRfZG9jIiwidmFsdWVzIiwiaW1hZ2UiLCJhcnIiLCJzZXRhcnIiLCJ1bmRlZmluZWQiLCJtYXAiLCJlbCIsImZpeGVkYmFzZTY0IiwiYmFzZTY0Iiwic3BsaXQiLCJzdG9yYWdlUmVmIiwiaW1nTmFtZSIsInVybCIsImltZ1VybCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/useAdd_doc.js\n");

/***/ })

});