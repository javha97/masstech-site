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

/***/ "./src/components/useAdd_doc.js":
/*!**************************************!*\
  !*** ./src/components/useAdd_doc.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAdd_doc\": function() { return /* binding */ useAdd_doc; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar useAdd_doc = /*#__PURE__*/function () {\n  var _ref2 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {\n    var values, image, arr;\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            values = _ref.values, image = _ref.image;\n\n            if (!(image[0] !== undefined)) {\n              _context2.next = 6;\n              break;\n            }\n\n            arr = [];\n            _context2.next = 5;\n            return Promise.all(image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(el) {\n                var fixedbase64, storageRef, url;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                        ///imgUpload on firebase \n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.storage, el.imgName);\n                        _context.next = 4;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);\n\n                      case 6:\n                        url = _context.sent;\n                        arr.push({\n                          imgName: el.imgName,\n                          imgUrl: url\n                        });\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }()));\n\n          case 5:\n            console.log(arr);\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function useAdd_doc(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VBZGRfZG9jLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1TLFVBQVU7QUFBQSxpVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsWUFBQUEsTUFBVCxRQUFTQSxNQUFULEVBQWlCQyxLQUFqQixRQUFpQkEsS0FBakI7O0FBQUEsa0JBRWxCQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFDLFNBRks7QUFBQTtBQUFBO0FBQUE7O0FBR2RDLFlBQUFBLEdBSGMsR0FHUixFQUhRO0FBQUE7QUFBQSxtQkFJWkMsT0FBTyxDQUFDQyxHQUFSLENBQ0ZKLEtBQUssQ0FBQ0ssR0FBTjtBQUFBLDZVQUFVLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyx3QkFBQUEsV0FEQSxHQUNjRCxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF5QixDQUF6QixDQURkLEVBRU47O0FBQUE7QUFDTUMsd0JBQUFBLFVBSEEsR0FHYWpCLHFEQUFHLENBQUNELDBEQUFELEVBQVVjLEVBQUUsQ0FBQ0ssT0FBYixDQUhoQjtBQUFBO0FBQUEsK0JBSUFqQiw4REFBWSxDQUFDZ0IsVUFBRCxFQUFhSCxXQUFiLEVBQTBCLFFBQTFCLENBSlo7O0FBQUE7QUFBQTtBQUFBLCtCQUtZWixnRUFBYyxDQUFDZSxVQUFELENBTDFCOztBQUFBO0FBS0FFLHdCQUFBQSxHQUxBO0FBTU5WLHdCQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFFRiwwQkFBQUEsT0FBTyxFQUFFTCxFQUFFLENBQUNLLE9BQWQ7QUFBdUJHLDBCQUFBQSxNQUFNLEVBQUVGO0FBQS9CLHlCQUFUOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREUsQ0FKWTs7QUFBQTtBQWFsQkcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlkLEdBQVo7O0FBYmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZKLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdXNlQWRkX2RvYy5qcz82MGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnXHJcbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCB7IHJlZiwgdXBsb2FkU3RyaW5nLCBnZXREb3dubG9hZFVSTCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCB1c2VBZGRfZG9jID0gYXN5bmMgKHsgdmFsdWVzLCBpbWFnZSB9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZSk7XHJcbiAgICBpZiAoaW1hZ2VbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBpbWFnZS5tYXAoYXN5bmMgKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZGJhc2U2NCA9IGVsLmJhc2U2NC5zcGxpdCgvLCguKykvKVsxXVxyXG4gICAgICAgICAgICAgICAgLy8vaW1nVXBsb2FkIG9uIGZpcmViYXNlIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBlbC5pbWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmLCBmaXhlZGJhc2U2NCwgJ2Jhc2U2NCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goeyBpbWdOYW1lOiBlbC5pbWdOYW1lLCBpbWdVcmw6IHVybCB9KVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFyclxyXG4gICAgLy8gY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIiksIHtcclxuICAgIC8vICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxyXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiB2YWx1ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAvLyAgICAgaW1nOiBpbWd1cFxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLCB2YWx1ZXMpO1xyXG59Il0sIm5hbWVzIjpbImRiIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInN0b3JhZ2UiLCJyZWYiLCJ1cGxvYWRTdHJpbmciLCJnZXREb3dubG9hZFVSTCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQWRkX2RvYyIsInZhbHVlcyIsImltYWdlIiwidW5kZWZpbmVkIiwiYXJyIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImVsIiwiZml4ZWRiYXNlNjQiLCJiYXNlNjQiLCJzcGxpdCIsInN0b3JhZ2VSZWYiLCJpbWdOYW1lIiwidXJsIiwicHVzaCIsImltZ1VybCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/useAdd_doc.js\n");

/***/ })

});