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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/views/ColorMode */ \"./src/components/views/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst theme = {\n    dark: {\n        backgroundBase: \"#111018\",\n        fontColor: \"white\",\n        backgroundContainer: \"#111018\",\n        colorBorder: \"#312F34\",\n        backCargo: \"#312F34\",\n        backgroundTheme: \"white\",\n        colorBallTheme: \"#333333\",\n        cursoFontColor: \"#FFDF6C\"\n    },\n    light: {\n        backgroundBase: \"rgba(0 ,0 ,0 ,0.1)\",\n        fontColor: \"black\",\n        backgroundContainer: \"white\",\n        colorBorder: \"black\",\n        backCargo: \"black\",\n        backgroundTheme: \"#333333\",\n        colorBallTheme: \"white\",\n        cursoFontColor: \"#8b71d1\",\n        colorBarraProgress\n    }\n};\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = ProviderWrapper;\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    var contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme[contexto.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 43,\n        columnNumber: 13\n    }, this);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = MyApp;\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyApp, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"ProviderWrapper\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ3lCO0FBQ0k7QUFDa0M7QUFFeEYsTUFBTUssUUFBUTtJQUNWQyxNQUFLO1FBQ0RDLGdCQUFnQjtRQUNoQkMsV0FBWTtRQUNaQyxxQkFBcUI7UUFDckJDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxpQkFBaUI7UUFDakJDLGdCQUFlO1FBQ2ZDLGdCQUFnQjtJQUNwQjtJQUNBQyxPQUFNO1FBQ0ZSLGdCQUFnQjtRQUNoQkMsV0FBVztRQUNYQyxxQkFBcUI7UUFDckJDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxpQkFBaUI7UUFDakJDLGdCQUFnQjtRQUNoQkMsZ0JBQWdCO1FBQ2hCRTtJQUNKO0FBRUo7QUFFQSxTQUFTQyxnQkFBZ0JDLEtBQUssRUFBQztJQUMzQixxQkFDSSw4REFBQ2YsdUVBQWlCQTtRQUFDZ0IsYUFBYTtrQkFDM0JELE1BQU1FLFFBQVE7Ozs7OztBQUczQjtLQU5TSDtBQVNULFNBQVNJLE1BQU0sS0FBdUIsRUFBQztRQUF4QixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBQyxHQUF2Qjs7SUFDWCxJQUFJQyxXQUFXeEIsdURBQWdCLENBQUNJLDZFQUFnQkE7SUFDaEQscUJBQ1EsOERBQUNILDREQUFhQTtRQUFDSSxPQUFPQSxLQUFLLENBQUNtQixTQUFTRSxJQUFJLENBQUM7OzBCQUN0Qyw4REFBQ3hCLDhEQUFRQTs7Ozs7MEJBQ1QsOERBQUNvQjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FSU0Y7TUFBQUE7QUFVTSxTQUFTTSxLQUFLVCxLQUFLLEVBQUM7SUFDL0IscUJBQ0ksOERBQUNEO2tCQUNHLDRFQUFDSTtZQUFPLEdBQUdILEtBQUs7Ozs7Ozs7Ozs7O0FBRzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ1NTUmVzZXQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ1NTUmVzZXRcIjtcbmltcG9ydCBDb2xvck1vZGVQcm92aWRlciwgeyBDb2xvck1vZGVDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3ZpZXdzL0NvbG9yTW9kZVwiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICBkYXJrOntcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6ICcjMTExMDE4JyxcbiAgICAgICAgZm9udENvbG9yIDogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lcjogJyMxMTEwMTgnLFxuICAgICAgICBjb2xvckJvcmRlcjogJyMzMTJGMzQnLFxuICAgICAgICBiYWNrQ2FyZ286ICcjMzEyRjM0JyxcbiAgICAgICAgYmFja2dyb3VuZFRoZW1lOiBcIndoaXRlXCIsXG4gICAgICAgIGNvbG9yQmFsbFRoZW1lOlwiIzMzMzMzM1wiLFxuICAgICAgICBjdXJzb0ZvbnRDb2xvcjogJyNGRkRGNkMnXG4gICAgfSxcbiAgICBsaWdodDp7XG4gICAgICAgIGJhY2tncm91bmRCYXNlOiAncmdiYSgwICwwICwwICwwLjEpJyxcbiAgICAgICAgZm9udENvbG9yOiAnYmxhY2snLFxuICAgICAgICBiYWNrZ3JvdW5kQ29udGFpbmVyOiAnd2hpdGUnLFxuICAgICAgICBjb2xvckJvcmRlcjogJ2JsYWNrJyxcbiAgICAgICAgYmFja0NhcmdvOiAnYmxhY2snLFxuICAgICAgICBiYWNrZ3JvdW5kVGhlbWU6ICcjMzMzMzMzJyxcbiAgICAgICAgY29sb3JCYWxsVGhlbWU6ICd3aGl0ZScsXG4gICAgICAgIGN1cnNvRm9udENvbG9yOiAnIzhiNzFkMScsXG4gICAgICAgIGNvbG9yQmFycmFQcm9ncmVzc1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlciBpbml0aWFsTW9kZT17XCJkYXJrXCJ9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgIClcbn1cblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSl7XG4gICAgdmFyIGNvbnRleHRvID0gUmVhY3QudXNlQ29udGV4dChDb2xvck1vZGVDb250ZXh0KTtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lW2NvbnRleHRvLm1vZGVdfT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0FwcChwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8UHJvdmlkZXJXcmFwcGVyPlxuICAgICAgICAgICAgPE15QXBwIHsuLi5wcm9wc30vPlxuICAgICAgICA8L1Byb3ZpZGVyV3JhcHBlcj5cbiAgICApXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJDU1NSZXNldCIsIkNvbG9yTW9kZVByb3ZpZGVyIiwiQ29sb3JNb2RlQ29udGV4dCIsInRoZW1lIiwiZGFyayIsImJhY2tncm91bmRCYXNlIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbnRhaW5lciIsImNvbG9yQm9yZGVyIiwiYmFja0NhcmdvIiwiYmFja2dyb3VuZFRoZW1lIiwiY29sb3JCYWxsVGhlbWUiLCJjdXJzb0ZvbnRDb2xvciIsImxpZ2h0IiwiY29sb3JCYXJyYVByb2dyZXNzIiwiUHJvdmlkZXJXcmFwcGVyIiwicHJvcHMiLCJpbml0aWFsTW9kZSIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb250ZXh0byIsInVzZUNvbnRleHQiLCJtb2RlIiwiX0FwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});