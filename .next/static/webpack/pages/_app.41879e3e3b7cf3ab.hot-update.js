"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/views/ColorMode */ \"./src/components/views/ColorMode.js\");\n\n\n\n\nconst theme = {\n    dark: {\n        backgroundBase: \"#111018\",\n        fontColor: \"white\",\n        backgroundContainer: \"#111018\",\n        colorBorder: \"#312F34\",\n        backCargo: \"#312F34\"\n    },\n    light: {\n        backgroundBase: \"rgba(0 ,0 ,0 ,0.1)\",\n        fontColor: \"black\",\n        backgroundContainer: \"white\",\n        colorBorder: \"black\",\n        backCargo: \"black\"\n    }\n};\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme.dark,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_1__.CSSReset, {}, void 0, false, {\n                    fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWtEO0FBQ0k7QUFDWTtBQUVsRSxNQUFNRyxRQUFRO0lBQ1ZDLE1BQUs7UUFDREMsZ0JBQWdCO1FBQ2hCQyxXQUFZO1FBQ1pDLHFCQUFxQjtRQUNyQkMsYUFBYTtRQUNiQyxXQUFXO0lBQ2Y7SUFDQUMsT0FBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLFdBQVc7UUFDWEMscUJBQXFCO1FBQ3JCQyxhQUFhO1FBQ2JDLFdBQVc7SUFDZjtBQUVKO0FBRUEsU0FBU0UsTUFBTSxLQUF1QixFQUFDO1FBQXhCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFDLEdBQXZCO0lBRVgscUJBQ0ksOERBQUNYLHVFQUFpQkE7a0JBQ2QsNEVBQUNGLDREQUFhQTtZQUFDRyxPQUFPQSxNQUFNQyxJQUFJOzs4QkFDNUIsOERBQUNILDhEQUFRQTs7Ozs7OEJBQ1QsOERBQUNXO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDO0tBWFNGO0FBYVQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0XCI7XG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3ZpZXdzL0NvbG9yTW9kZVwiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICBkYXJrOntcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6ICcjMTExMDE4JyxcbiAgICAgICAgZm9udENvbG9yIDogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lcjogJyMxMTEwMTgnLFxuICAgICAgICBjb2xvckJvcmRlcjogJyMzMTJGMzQnLFxuICAgICAgICBiYWNrQ2FyZ286ICcjMzEyRjM0J1xuICAgIH0sXG4gICAgbGlnaHQ6e1xuICAgICAgICBiYWNrZ3JvdW5kQmFzZTogJ3JnYmEoMCAsMCAsMCAsMC4xKScsXG4gICAgICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3JCb3JkZXI6ICdibGFjaycsXG4gICAgICAgIGJhY2tDYXJnbzogJ2JsYWNrJ1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wc30pe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlcj5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZS5kYXJrfT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJDU1NSZXNldCIsIkNvbG9yTW9kZVByb3ZpZGVyIiwidGhlbWUiLCJkYXJrIiwiYmFja2dyb3VuZEJhc2UiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29udGFpbmVyIiwiY29sb3JCb3JkZXIiLCJiYWNrQ2FyZ28iLCJsaWdodCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});