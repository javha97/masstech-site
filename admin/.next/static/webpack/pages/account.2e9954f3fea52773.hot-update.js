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

/***/ "./src/components/account/account-profile.js":
/*!***************************************************!*\
  !*** ./src/components/account/account-profile.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountProfile\": function() { return /* binding */ AccountProfile; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Pro\\\\Desktop\\\\sda\\\\team1\\\\admin\\\\src\\\\components\\\\account\\\\account-profile.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar user = {\n  avatar: \"\"\n};\nvar AccountProfile = function AccountProfile(props) {\n  _s();\n\n  function srcset(image, size) {\n    var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n    var cols = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n    return {\n      src: \"\".concat(image, \"?w=\").concat(size * cols, \"&h=\").concat(size * rows, \"&fit=crop&auto=format\"),\n      srcSet: \"\".concat(image, \"?w=\").concat(size * cols, \"&h=\").concat(size * rows, \"&fit=crop&auto=format&dpr=2 2x\")\n    };\n  }\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      image = _useState[0],\n      setimage = _useState[1];\n\n  var imgbtn = function imgbtn(e) {\n    e.preventDefault();\n    var m = e.target.files;\n    Array.from(m).map(function (el, i) {\n      var file = e.target.files[i];\n      var reader = new FileReader();\n      reader.readAsDataURL(file);\n\n      reader.onload = function () {\n        setimage(function (image) {\n          return [].concat((0,C_Users_Pro_Desktop_sda_team1_admin_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(image), [reader.result]);\n        });\n      };\n    });\n  };\n\n  var Input = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('input')({\n    display: 'none'\n  });\n  console.log(image);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, _objectSpread(_objectSpread({}, props), {}, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n          src: image,\n          style: {\n            alignItems: \"center\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            height: \"300px\",\n            border: \"1px solid black\",\n            backgroundColor: \"Grey\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardActions, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          direction: \"row\",\n          alignItems: \"center\",\n          spacing: 2,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            htmlFor: \"contained-button-file\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Input, {\n              accept: \"image/*\",\n              id: \"contained-button-file\",\n              multiple: true,\n              type: \"file\",\n              onChange: function onChange(e) {\n                return imgbtn(e);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              color: \"primary\",\n              fullWidth: true,\n              variant: \"text\",\n              component: \"span\",\n              children: \"Upload picture\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(AccountProfile, \"3sRXrx6WIFs+od+5ZPJ0YGgScG4=\");\n\n_c = AccountProfile;\n\nvar _c;\n\n$RefreshReg$(_c, \"AccountProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTVksSUFBSSxHQUFHO0FBQ1hDLEVBQUFBLE1BQU0sRUFBRTtBQURHLENBQWI7QUFJTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QyxXQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBaUQ7QUFBQSxRQUFwQkMsSUFBb0IsdUVBQWIsQ0FBYTtBQUFBLFFBQVZDLElBQVUsdUVBQUgsQ0FBRztBQUMvQyxXQUFPO0FBQ0xDLE1BQUFBLEdBQUcsWUFBS0osS0FBTCxnQkFBZ0JDLElBQUksR0FBR0UsSUFBdkIsZ0JBQWlDRixJQUFJLEdBQUdDLElBQXhDLDBCQURFO0FBRUxHLE1BQUFBLE1BQU0sWUFBS0wsS0FBTCxnQkFBZ0JDLElBQUksR0FBR0UsSUFBdkIsZ0JBQ0pGLElBQUksR0FBR0MsSUFESDtBQUZELEtBQVA7QUFNRDs7QUFDRCxrQkFBMEJWLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9RLEtBQVA7QUFBQSxNQUFjTSxRQUFkOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNwQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBbkI7QUFDQUMsSUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdKLENBQVgsRUFBY0ssR0FBZCxDQUFrQixVQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUMzQixVQUFJQyxJQUFJLEdBQUdWLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFULENBQWVLLENBQWYsQ0FBWDtBQUNBLFVBQUlFLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsTUFBQUEsTUFBTSxDQUFDRSxhQUFQLENBQXFCSCxJQUFyQjs7QUFDQUMsTUFBQUEsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLFlBQU07QUFDcEJoQixRQUFBQSxRQUFRLENBQUMsVUFBQ04sS0FBRDtBQUFBLHVMQUFlQSxLQUFmLElBQXNCbUIsTUFBTSxDQUFDSSxNQUE3QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQVBEO0FBUUQsR0FYRDs7QUFZQSxNQUFNQyxLQUFLLEdBQUduQyw0REFBTSxDQUFDLE9BQUQsQ0FBTixDQUFnQjtBQUM1Qm9DLElBQUFBLE9BQU8sRUFBRTtBQURtQixHQUFoQixDQUFkO0FBR0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZM0IsS0FBWjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsK0NBQUQsa0NBQVVGLEtBQVY7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFRSxLQUFWO0FBQWlCLGVBQUssRUFBRTtBQUN0QjRCLFlBQUFBLFVBQVUsRUFBRSxRQURVO0FBRXRCSCxZQUFBQSxPQUFPLEVBQUUsTUFGYTtBQUd0QkksWUFBQUEsYUFBYSxFQUFFLFFBSE87QUFJdEJDLFlBQUFBLE1BQU0sRUFBRSxPQUpjO0FBS3RCQyxZQUFBQSxNQUFNLEVBQUUsaUJBTGM7QUFNdEJDLFlBQUFBLGVBQWUsRUFBRTtBQU5LO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFZRSw4REFBQyxzREFBRDtBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBQU8sbUJBQVMsRUFBQyxLQUFqQjtBQUF1QixvQkFBVSxFQUFDLFFBQWxDO0FBQTJDLGlCQUFPLEVBQUUsQ0FBcEQ7QUFBQSxpQ0FDRTtBQUFPLG1CQUFPLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRSw4REFBQyxLQUFEO0FBQU8sb0JBQU0sRUFBQyxTQUFkO0FBQXdCLGdCQUFFLEVBQUMsdUJBQTNCO0FBQW1ELHNCQUFRLE1BQTNEO0FBQTRELGtCQUFJLEVBQUMsTUFBakU7QUFBd0Usc0JBQVEsRUFBRSxrQkFBQ3hCLENBQUQ7QUFBQSx1QkFBT0QsTUFBTSxDQUFDQyxDQUFELENBQWI7QUFBQTtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsaURBQUQ7QUFBUSxtQkFBSyxFQUFDLFNBQWQ7QUFBd0IsdUJBQVMsTUFBakM7QUFBa0MscUJBQU8sRUFBQyxNQUExQztBQUFpRCx1QkFBUyxFQUFDLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyQkQsQ0FyRE07O0dBQU1YOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtcHJvZmlsZS5qcz9mZTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0ltYWdlTGlzdCc7XHJcbmltcG9ydCBJbWFnZUxpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW1hZ2VMaXN0SXRlbSc7XHJcbmNvbnN0IHVzZXIgPSB7XHJcbiAgYXZhdGFyOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRQcm9maWxlID0gKHByb3BzKSA9PiB7XHJcbiAgZnVuY3Rpb24gc3Jjc2V0KGltYWdlLCBzaXplLCByb3dzID0gMSwgY29scyA9IDEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNyYzogYCR7aW1hZ2V9P3c9JHtzaXplICogY29sc30maD0ke3NpemUgKiByb3dzfSZmaXQ9Y3JvcCZhdXRvPWZvcm1hdGAsXHJcbiAgICAgIHNyY1NldDogYCR7aW1hZ2V9P3c9JHtzaXplICogY29sc30maD0ke1xyXG4gICAgICAgIHNpemUgKiByb3dzXHJcbiAgICAgIH0mZml0PWNyb3AmYXV0bz1mb3JtYXQmZHByPTIgMnhgLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRpbWFnZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBpbWdidG4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBtID0gZS50YXJnZXQuZmlsZXNcclxuICAgIEFycmF5LmZyb20obSkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xyXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aW1hZ2UoKGltYWdlKSA9PiBbLi4uaW1hZ2UsIHJlYWRlci5yZXN1bHRdKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKSh7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJHcmV5XCJcclxuICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFpbmVkLWJ1dHRvbi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IGFjY2VwdD1cImltYWdlLypcIiBpZD1cImNvbnRhaW5lZC1idXR0b24tZmlsZVwiIG11bHRpcGxlIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiBpbWdidG4oZSl9IC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBmdWxsV2lkdGggdmFyaWFudD1cInRleHRcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgcGljdHVyZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkRpdmlkZXIiLCJzdHlsZWQiLCJTdGFjayIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZUxpc3QiLCJJbWFnZUxpc3RJdGVtIiwidXNlciIsImF2YXRhciIsIkFjY291bnRQcm9maWxlIiwicHJvcHMiLCJzcmNzZXQiLCJpbWFnZSIsInNpemUiLCJyb3dzIiwiY29scyIsInNyYyIsInNyY1NldCIsInNldGltYWdlIiwiaW1nYnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwibSIsInRhcmdldCIsImZpbGVzIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZWwiLCJpIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0IiwiSW5wdXQiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/account/account-profile.js\n");

/***/ })

});