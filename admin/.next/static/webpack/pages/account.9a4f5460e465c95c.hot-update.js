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

/***/ "./src/components/addDocOnFirebase.js":
/*!********************************************!*\
  !*** ./src/components/addDocOnFirebase.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDocOnFirebase\": function() { return /* binding */ addDocOnFirebase; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\nvar arr = [];\nvar addDocOnFirebase = /*#__PURE__*/function () {\n  var _ref2 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {\n    var values, image;\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            values = _ref.values, image = _ref.image;\n            image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(el) {\n                var fixedbase64, storageRef, url;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.storage, el.imgName);\n                        _context.next = 4;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);\n\n                      case 6:\n                        url = _context.sent;\n                        arr.push({\n                          imgName: el.imgName,\n                          imgUrl: url\n                        });\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            console.log(arr); // const docRef = await addDoc(collection(db, \"products\"), {\n            //     title: values.title,\n            //     description: values.description,\n            //     img: imgup\n            // })\n            // console.log(image, values);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function addDocOnFirebase(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hZGREb2NPbkZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSU8sR0FBRyxHQUFHLEVBQVY7QUFDTyxJQUFNQyxnQkFBZ0I7QUFBQSxpVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsWUFBQUEsTUFBVCxRQUFTQSxNQUFULEVBQWlCQyxLQUFqQixRQUFpQkEsS0FBakI7QUFDeEJBLFlBQUFBLEtBQUssQ0FBQ0MsR0FBTjtBQUFBLDZVQUFVLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyx3QkFBQUEsV0FEQSxHQUNjRCxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF5QixDQUF6QixDQURkLEVBRU47O0FBQ01DLHdCQUFBQSxVQUhBLEdBR2FaLHFEQUFHLENBQUNELDBEQUFELEVBQVVTLEVBQUUsQ0FBQ0ssT0FBYixDQUhoQjtBQUFBO0FBQUEsK0JBSUFaLDhEQUFZLENBQUNXLFVBQUQsRUFBYUgsV0FBYixFQUEwQixRQUExQixDQUpaOztBQUFBO0FBQUE7QUFBQSwrQkFLWVAsZ0VBQWMsQ0FBQ1UsVUFBRCxDQUwxQjs7QUFBQTtBQUtBRSx3QkFBQUEsR0FMQTtBQU1OWCx3QkFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBRUYsMEJBQUFBLE9BQU8sRUFBRUwsRUFBRSxDQUFDSyxPQUFkO0FBQXVCRywwQkFBQUEsTUFBTSxFQUFFRjtBQUEvQix5QkFBVDs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUpHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZixHQUFaLEVBVDRCLENBVTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJDLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hZGREb2NPbkZpcmViYXNlLmpzPzdmYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS5qcydcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmpzJztcclxuaW1wb3J0IHsgcmVmLCB1cGxvYWRTdHJpbmcsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxubGV0IGFyciA9IFtdXHJcbmV4cG9ydCBjb25zdCBhZGREb2NPbkZpcmViYXNlID0gYXN5bmMgKHsgdmFsdWVzLCBpbWFnZSB9KSA9PiB7XHJcbiAgICAgICAgaW1hZ2UubWFwKGFzeW5jIChlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaXhlZGJhc2U2NCA9IGVsLmJhc2U2NC5zcGxpdCgvLCguKykvKVsxXVxyXG4gICAgICAgICAgICAvLy9pbWdVcGxvYWQgb24gZmlyZWJhc2UgXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgZWwuaW1nTmFtZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmLCBmaXhlZGJhc2U2NCwgJ2Jhc2U2NCcpXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpXHJcbiAgICAgICAgICAgIGFyci5wdXNoKHsgaW1nTmFtZTogZWwuaW1nTmFtZSwgaW1nVXJsOiB1cmwgfSlcclxuICAgICAgICB9KVxyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgIC8vIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpLCB7XHJcbiAgICAvLyAgICAgdGl0bGU6IHZhbHVlcy50aXRsZSxcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgLy8gICAgIGltZzogaW1ndXBcclxuICAgIC8vIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZSwgdmFsdWVzKTtcclxufSJdLCJuYW1lcyI6WyJkYiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJzdG9yYWdlIiwicmVmIiwidXBsb2FkU3RyaW5nIiwiZ2V0RG93bmxvYWRVUkwiLCJhcnIiLCJhZGREb2NPbkZpcmViYXNlIiwidmFsdWVzIiwiaW1hZ2UiLCJtYXAiLCJlbCIsImZpeGVkYmFzZTY0IiwiYmFzZTY0Iiwic3BsaXQiLCJzdG9yYWdlUmVmIiwiaW1nTmFtZSIsInVybCIsInB1c2giLCJpbWdVcmwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/addDocOnFirebase.js\n");

/***/ })

});