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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDocOnFirebase\": function() { return /* binding */ addDocOnFirebase; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.js */ \"./src/firebase/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar addDocOnFirebase = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref2 = _s((0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_s( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(_ref) {\n    var values, image, _useState, arr, setarr;\n\n    return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _s();\n\n            values = _ref.values, image = _ref.image;\n            _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), arr = _useState[0], setarr = _useState[1];\n            image.map( /*#__PURE__*/function () {\n              var _ref3 = (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(el) {\n                var fixedbase64, storageRef, url;\n                return C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        fixedbase64 = el.base64.split(/,(.+)/)[1]; ///imgUpload on firebase \n\n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__.storage, el.imgName);\n                        _context.next = 4;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadString)(storageRef, fixedbase64, 'base64');\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(storageRef);\n\n                      case 6:\n                        url = _context.sent;\n                        setarr(function (arr) {\n                          return [].concat((0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr), [{\n                            imgName: el.imgName,\n                            imgUrl: url\n                          }]);\n                        });\n\n                      case 8:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x2) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            console.log(arr); // const docRef = await addDoc(collection(db, \"products\"), {\n            //     title: values.title,\n            //     description: values.description,\n            //     img: imgup\n            // })\n            // console.log(image, values);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }), \"OpE3ySijeFZqjKjxm0lbshummGg=\")), \"OpE3ySijeFZqjKjxm0lbshummGg=\");\n\n  return function addDocOnFirebase(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hZGREb2NPbkZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVEsZ0JBQWdCO0FBQUE7O0FBQUEsdVVBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFTQyxZQUFBQSxNQUFULFFBQVNBLE1BQVQsRUFBaUJDLEtBQWpCLFFBQWlCQSxLQUFqQjtBQUFBLHdCQUNOSCwrQ0FBUSxDQUFDLEVBQUQsQ0FERixFQUNyQkksR0FEcUIsaUJBQ2hCQyxNQURnQjtBQUU1QkYsWUFBQUEsS0FBSyxDQUFDRyxHQUFOO0FBQUEsNlVBQVUsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLHdCQUFBQSxXQURBLEdBQ2NELEVBQUUsQ0FBQ0UsTUFBSCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLENBQXpCLENBRGQsRUFFTjs7QUFDTUMsd0JBQUFBLFVBSEEsR0FHYWQscURBQUcsQ0FBQ0QsMERBQUQsRUFBVVcsRUFBRSxDQUFDSyxPQUFiLENBSGhCO0FBQUE7QUFBQSwrQkFJQWQsOERBQVksQ0FBQ2EsVUFBRCxFQUFhSCxXQUFiLEVBQTBCLFFBQTFCLENBSlo7O0FBQUE7QUFBQTtBQUFBLCtCQUtZVCxnRUFBYyxDQUFDWSxVQUFELENBTDFCOztBQUFBO0FBS0FFLHdCQUFBQSxHQUxBO0FBTU5SLHdCQUFBQSxNQUFNLENBQUMsVUFBQ0QsR0FBRDtBQUFBLHVNQUFhQSxHQUFiLElBQWtCO0FBQUVRLDRCQUFBQSxPQUFPLEVBQUVMLEVBQUUsQ0FBQ0ssT0FBZDtBQUF1QkUsNEJBQUFBLE1BQU0sRUFBRUQ7QUFBL0IsMkJBQWxCO0FBQUEseUJBQUQsQ0FBTjs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUFFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaLEVBVjRCLENBVzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCSCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWRkRG9jT25GaXJlYmFzZS5qcz83ZmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuanMnXHJcbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCB7IHJlZiwgdXBsb2FkU3RyaW5nLCBnZXREb3dubG9hZFVSTCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgYWRkRG9jT25GaXJlYmFzZSA9IGFzeW5jICh7IHZhbHVlcywgaW1hZ2UgfSkgPT4ge1xyXG4gICAgY29uc3QgW2Fyciwgc2V0YXJyXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgaW1hZ2UubWFwKGFzeW5jIChlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpeGVkYmFzZTY0ID0gZWwuYmFzZTY0LnNwbGl0KC8sKC4rKS8pWzFdXHJcbiAgICAgICAgLy8vaW1nVXBsb2FkIG9uIGZpcmViYXNlIFxyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgZWwuaW1nTmFtZSk7XHJcbiAgICAgICAgYXdhaXQgdXBsb2FkU3RyaW5nKHN0b3JhZ2VSZWYsIGZpeGVkYmFzZTY0LCAnYmFzZTY0JylcclxuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgIHNldGFycigoYXJyKSA9PiBbLi4uYXJyLCB7IGltZ05hbWU6IGVsLmltZ05hbWUsIGltZ1VybDogdXJsIH1dKVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAvLyBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJwcm9kdWN0c1wiKSwge1xyXG4gICAgLy8gICAgIHRpdGxlOiB2YWx1ZXMudGl0bGUsXHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgIC8vICAgICBpbWc6IGltZ3VwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UsIHZhbHVlcyk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwic3RvcmFnZSIsInJlZiIsInVwbG9hZFN0cmluZyIsImdldERvd25sb2FkVVJMIiwidXNlU3RhdGUiLCJhZGREb2NPbkZpcmViYXNlIiwidmFsdWVzIiwiaW1hZ2UiLCJhcnIiLCJzZXRhcnIiLCJtYXAiLCJlbCIsImZpeGVkYmFzZTY0IiwiYmFzZTY0Iiwic3BsaXQiLCJzdG9yYWdlUmVmIiwiaW1nTmFtZSIsInVybCIsImltZ1VybCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/addDocOnFirebase.js\n");

/***/ })

});