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

/***/ "./src/components/Add_doc.js":
/*!***********************************!*\
  !*** ./src/components/Add_doc.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add_doc\": function() { return /* binding */ Add_doc; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\nvar Add_doc = /*#__PURE__*/function () {\n  var _ref2 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {\n    var values, image, time, arr, docRef;\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            values = _ref.values, image = _ref.image;\n            console.log(image);\n            time = new Date().getTime();\n\n            if (!(image[0] !== undefined)) {\n              _context2.next = 10;\n              break;\n            }\n\n            arr = [];\n            _context2.next = 7;\n            return Promise.all(image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(el) {\n                var fixedbase64, storageRef, url;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                        ///imgUpload on firebase \n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.storage, el.imgName);\n                        _context.next = 4;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);\n\n                      case 6:\n                        url = _context.sent;\n                        arr.push({\n                          imgName: el.imgName,\n                          imgUrl: url\n                        });\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }()));\n\n          case 7:\n            _context2.next = 9;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db, \"products\"), {\n              title: values.title,\n              description: values.description,\n              img: arr,\n              date: new Date().getTime()\n            });\n\n          case 9:\n            docRef = _context2.sent;\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function Add_doc(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n_c = Add_doc;\n\nvar _c;\n\n$RefreshReg$(_c, \"Add_doc\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRfZG9jLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTU8sT0FBTztBQUFBLGlVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxNQUFULFFBQVNBLE1BQVQsRUFBaUJDLEtBQWpCLFFBQWlCQSxLQUFqQjtBQUNuQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDS0csWUFBQUEsSUFGYyxHQUVULElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUZTOztBQUFBLGtCQUdmTCxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFNLFNBSEU7QUFBQTtBQUFBO0FBQUE7O0FBSVhDLFlBQUFBLEdBSlcsR0FJTCxFQUpLO0FBQUE7QUFBQSxtQkFLVEMsT0FBTyxDQUFDQyxHQUFSLENBQ0ZULEtBQUssQ0FBQ1UsR0FBTjtBQUFBLDZVQUFVLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyx3QkFBQUEsV0FEQSxHQUNjRCxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF5QixDQUF6QixDQURkLEVBRU47O0FBQUE7QUFDTUMsd0JBQUFBLFVBSEEsR0FHYXBCLHFEQUFHLENBQUNELDBEQUFELEVBQVVpQixFQUFFLENBQUNLLE9BQWIsQ0FIaEI7QUFBQTtBQUFBLCtCQUlBcEIsOERBQVksQ0FBQ21CLFVBQUQsRUFBYUgsV0FBYixFQUEwQixRQUExQixDQUpaOztBQUFBO0FBQUE7QUFBQSwrQkFLWWYsZ0VBQWMsQ0FBQ2tCLFVBQUQsQ0FMMUI7O0FBQUE7QUFLQUUsd0JBQUFBLEdBTEE7QUFNTlYsd0JBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUVGLDBCQUFBQSxPQUFPLEVBQUVMLEVBQUUsQ0FBQ0ssT0FBZDtBQUF1QkcsMEJBQUFBLE1BQU0sRUFBRUY7QUFBL0IseUJBQVQ7O0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERSxDQUxTOztBQUFBO0FBQUE7QUFBQSxtQkFjTXpCLDBEQUFNLENBQUNDLDhEQUFVLENBQUNGLHFEQUFELEVBQUssVUFBTCxDQUFYLEVBQTZCO0FBQ3BENkIsY0FBQUEsS0FBSyxFQUFFckIsTUFBTSxDQUFDcUIsS0FEc0M7QUFFcERDLGNBQUFBLFdBQVcsRUFBRXRCLE1BQU0sQ0FBQ3NCLFdBRmdDO0FBR3BEQyxjQUFBQSxHQUFHLEVBQUVmLEdBSCtDO0FBSXBEZ0IsY0FBQUEsSUFBSSxFQUFFLElBQUluQixJQUFKLEdBQVdDLE9BQVg7QUFKOEMsYUFBN0IsQ0FkWjs7QUFBQTtBQWNUbUIsWUFBQUEsTUFkUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQMUIsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiO0tBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZF9kb2MuanM/NDFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmpzJ1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnO1xyXG5pbXBvcnQgeyByZWYsIHVwbG9hZFN0cmluZywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5leHBvcnQgY29uc3QgQWRkX2RvYyA9IGFzeW5jICh7IHZhbHVlcywgaW1hZ2UgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gICBjb25zdCB0aW1lPW5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICBpZiAoaW1hZ2VbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBpbWFnZS5tYXAoYXN5bmMgKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZGJhc2U2NCA9IGVsLmJhc2U2NC5zcGxpdCgvLCguKykvKVsxXVxyXG4gICAgICAgICAgICAgICAgLy8vaW1nVXBsb2FkIG9uIGZpcmViYXNlIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBlbC5pbWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmLCBmaXhlZGJhc2U2NCwgJ2Jhc2U2NCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goeyBpbWdOYW1lOiBlbC5pbWdOYW1lLCBpbWdVcmw6IHVybCB9KVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJwcm9kdWN0c1wiKSwge1xyXG4gICAgICAgICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBpbWc6IGFycixcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UsIHZhbHVlcyk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwic3RvcmFnZSIsInJlZiIsInVwbG9hZFN0cmluZyIsImdldERvd25sb2FkVVJMIiwiQWRkX2RvYyIsInZhbHVlcyIsImltYWdlIiwiY29uc29sZSIsImxvZyIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInVuZGVmaW5lZCIsImFyciIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJlbCIsImZpeGVkYmFzZTY0IiwiYmFzZTY0Iiwic3BsaXQiLCJzdG9yYWdlUmVmIiwiaW1nTmFtZSIsInVybCIsInB1c2giLCJpbWdVcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiZGF0ZSIsImRvY1JlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Add_doc.js\n");

/***/ })

});