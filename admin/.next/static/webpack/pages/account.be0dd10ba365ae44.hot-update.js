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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDocOnFirebase\": function() { return /* binding */ addDocOnFirebase; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nvar addDocOnFirebase = /*#__PURE__*/function () {\n  var _ref2 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {\n    var values, image, id, storageRef, url, docRef;\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            values = _ref.values, image = _ref.image;\n            image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(el) {\n                var fixedbase64;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1];\n                        console.log(fixedbase64);\n\n                      case 2:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            id = crypto.randomBytes(16).toString(\"hex\");\n            storageRef = ref(storage, id);\n            _context2.next = 6;\n            return uploadString(storageRef, img, 'base64');\n\n          case 6:\n            _context2.next = 8;\n            return getDownloadURL(storageRef);\n\n          case 8:\n            url = _context2.sent;\n            _context2.next = 11;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db, \"products\"), {\n              title: values.title,\n              description: values.description,\n              imgName: el.imgName\n            });\n\n          case 11:\n            docRef = _context2.sent;\n            console.log(image, values);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function addDocOnFirebase(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hZGREb2NPbkZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1HLGdCQUFnQjtBQUFBLGlVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxNQUFULFFBQVNBLE1BQVQsRUFBaUJDLEtBQWpCLFFBQWlCQSxLQUFqQjtBQUM1QkEsWUFBQUEsS0FBSyxDQUFDQyxHQUFOO0FBQUEsNlVBQVUsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLHdCQUFBQSxXQURBLEdBQ2NELEVBQUUsQ0FBQ0UsTUFBSCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLENBQXpCLENBRGQ7QUFFTkMsd0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJTUssWUFBQUEsRUFMc0IsR0FLakJDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQixFQUFuQixFQUF1QkMsUUFBdkIsQ0FBZ0MsS0FBaEMsQ0FMaUI7QUFNdEJDLFlBQUFBLFVBTnNCLEdBTVRDLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVTixFQUFWLENBTk07QUFBQTtBQUFBLG1CQU90Qk8sWUFBWSxDQUFDSCxVQUFELEVBQWFJLEdBQWIsRUFBa0IsUUFBbEIsQ0FQVTs7QUFBQTtBQUFBO0FBQUEsbUJBUVZDLGNBQWMsQ0FBQ0wsVUFBRCxDQVJKOztBQUFBO0FBUXRCTSxZQUFBQSxHQVJzQjtBQUFBO0FBQUEsbUJBU1B0QiwwREFBTSxDQUFDQyw4REFBVSxDQUFDRixxREFBRCxFQUFLLFVBQUwsQ0FBWCxFQUE2QjtBQUNwRHdCLGNBQUFBLEtBQUssRUFBRXBCLE1BQU0sQ0FBQ29CLEtBRHNDO0FBRXBEQyxjQUFBQSxXQUFXLEVBQUVyQixNQUFNLENBQUNxQixXQUZnQztBQUdwREMsY0FBQUEsT0FBTyxFQUFFbkIsRUFBRSxDQUFDbUI7QUFId0MsYUFBN0IsQ0FUQzs7QUFBQTtBQVN0QkMsWUFBQUEsTUFUc0I7QUFjNUJoQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWixFQUFtQkQsTUFBbkI7O0FBZDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWRkRG9jT25GaXJlYmFzZS5qcz83ZmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnXHJcbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmV4cG9ydCBjb25zdCBhZGREb2NPbkZpcmViYXNlID0gYXN5bmMgKHsgdmFsdWVzLCBpbWFnZSB9KSA9PiB7XHJcbiAgICBpbWFnZS5tYXAoYXN5bmMgKGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZml4ZWRiYXNlNjQgPSBlbC5iYXNlNjQuc3BsaXQoLywoLispLylbMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhmaXhlZGJhc2U2NCk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBpZCk7XHJcbiAgICBhd2FpdCB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgaW1nLCAnYmFzZTY0JylcclxuICAgIGNvbnN0IHVybCA9IGF3YWl0IGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpXHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJwcm9kdWN0c1wiKSwge1xyXG4gICAgICAgIHRpdGxlOiB2YWx1ZXMudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICBpbWdOYW1lOiBlbC5pbWdOYW1lXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coaW1hZ2UsIHZhbHVlcyk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiYWRkRG9jT25GaXJlYmFzZSIsInZhbHVlcyIsImltYWdlIiwibWFwIiwiZWwiLCJmaXhlZGJhc2U2NCIsImJhc2U2NCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImlkIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInN0b3JhZ2VSZWYiLCJyZWYiLCJzdG9yYWdlIiwidXBsb2FkU3RyaW5nIiwiaW1nIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nTmFtZSIsImRvY1JlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/addDocOnFirebase.js\n");

/***/ })

});