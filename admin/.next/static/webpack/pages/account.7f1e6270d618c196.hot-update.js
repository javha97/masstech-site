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

/***/ "./src/components/Addproducts.js":
/*!***************************************!*\
  !*** ./src/components/Addproducts.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProduct\": function() { return /* binding */ AddProduct; }\n/* harmony export */ });\n/* harmony import */ var _account_account_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account-profile */ \"./src/components/account/account-profile.js\");\n/* harmony import */ var _account_account_profile_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account-profile-details */ \"./src/components/account/account-profile-details.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _Add_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add_doc */ \"./src/components/Add_doc.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Pro\\\\Desktop\\\\sda\\\\team1\\\\admin\\\\src\\\\components\\\\Addproducts.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AddProduct = function AddProduct(_ref) {\n  _s();\n\n  var setaddproduct = _ref.setaddproduct,\n      num = _ref.num;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      image = _useState[0],\n      setimage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    title: \"\",\n    description: \"\"\n  }),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var fn = function fn() {\n    (0,_Add_doc__WEBPACK_IMPORTED_MODULE_2__.Add_doc)({\n      values: values,\n      image: image\n    });\n    setimage('');\n    values({\n      title: \"\",\n      description: \"\"\n    });\n  };\n\n  var click = function click() {\n    setaddproduct(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxWidth: \"lg\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n          alignItems: 'center',\n          display: 'flex',\n          justifyContent: 'space-between',\n          flexWrap: 'wrap',\n          m: -1\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n          sx: {\n            m: 1\n          },\n          variant: \"h4\",\n          children: \"Add\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, _this), num === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n          sx: {\n            m: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n            color: \"primary\",\n            variant: \"contained\",\n            onClick: click,\n            children: \"x\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n        container: true,\n        spacing: 3,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n          item: true,\n          lg: 4,\n          md: 6,\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_account_account_profile__WEBPACK_IMPORTED_MODULE_0__.AccountProfile, {\n            image: image,\n            setimage: setimage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n          item: true,\n          lg: 8,\n          md: 6,\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_account_account_profile_details__WEBPACK_IMPORTED_MODULE_1__.AccountProfileDetails, {\n            setValues: setValues,\n            values: values,\n            fn: fn\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(AddProduct, \"dmFAQlLyqXgZsW2V/WmuFMqU7x8=\");\n\n_c = AddProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddProduct\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFRCxNQUFyRDtBQUE2RCxjQUFFLEVBQUVFO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXNESCxDQXJFTTs7R0FBTVQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZHByb2R1Y3RzLmpzPzdiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFByb2ZpbGUgfSBmcm9tICcuL2FjY291bnQvYWNjb3VudC1wcm9maWxlJztcclxuaW1wb3J0IHsgQWNjb3VudFByb2ZpbGVEZXRhaWxzIH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQtcHJvZmlsZS1kZXRhaWxzJztcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBZGRfZG9jIH0gZnJvbSAnLi9BZGRfZG9jJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBZGRQcm9kdWN0ID0gKHsgc2V0YWRkcHJvZHVjdCwgbnVtIH0pID0+IHtcclxuICAgIGNvbnN0IFtpbWFnZSwgc2V0aW1hZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgICAgICBBZGRfZG9jKHsgdmFsdWVzLCBpbWFnZSB9KVxyXG4gICAgICAgIHNldGltYWdlKCcnKVxyXG4gICAgICAgIHZhbHVlcyh7IHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRhZGRwcm9kdWN0KGZhbHNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtOiAtMVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtudW0gPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXszfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFByb2ZpbGUgaW1hZ2U9e2ltYWdlfSBzZXRpbWFnZT17c2V0aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFByb2ZpbGVEZXRhaWxzIHNldFZhbHVlcz17c2V0VmFsdWVzfSB2YWx1ZXM9e3ZhbHVlc30gZm49e2ZufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQWNjb3VudFByb2ZpbGUiLCJBY2NvdW50UHJvZmlsZURldGFpbHMiLCJCb3giLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkFkZF9kb2MiLCJ1c2VTdGF0ZSIsIkFkZFByb2R1Y3QiLCJzZXRhZGRwcm9kdWN0IiwibnVtIiwiaW1hZ2UiLCJzZXRpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJmbiIsImNsaWNrIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Addproducts.js\n");

/***/ })

});