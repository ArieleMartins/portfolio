"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/views/DarkModeSwitch.js":
/*!************************************************!*\
  !*** ./src/components/views/DarkModeSwitch.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkModeSwitch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_StyleSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyleSwitch */ \"./src/components/styles/StyleSwitch.js\");\n/* harmony import */ var _ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorMode */ \"./src/components/views/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DarkModeSwitch() {\n    _s();\n    const contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StyleSwitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"darkmode\",\n                type: \"checkbox\",\n                onChange: ()=>{\n                    if (contexto.mode === \"dark\") {\n                        contexto.mode = \"light\";\n                    } else {\n                        contexto.mode = \"dark\";\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/src/components/views/DarkModeSwitch.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"darkmode\",\n                className: \"darkmode-switch\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"\\uD83C\\uDF19\"\n                    }, void 0, false, {\n                        fileName: \"/home/tilinux/portfolio/src/components/views/DarkModeSwitch.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"☀️\"\n                    }, void 0, false, {\n                        fileName: \"/home/tilinux/portfolio/src/components/views/DarkModeSwitch.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tilinux/portfolio/src/components/views/DarkModeSwitch.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tilinux/portfolio/src/components/views/DarkModeSwitch.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(DarkModeSwitch, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c = DarkModeSwitch;\nvar _c;\n$RefreshReg$(_c, \"DarkModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92aWV3cy9EYXJrTW9kZVN3aXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBQTBCO0FBQ3FCO0FBQ0E7QUFFaEMsU0FBU0csaUJBQWlCOztJQUNyQyxNQUFNQyxXQUFXSix1REFBZ0IsQ0FBQ0Usd0RBQWdCQTtJQUNsRCxxQkFDSSw4REFBQ0QsMkRBQVdBOzswQkFDUiw4REFBQ0s7Z0JBQU1DLElBQUc7Z0JBQVdDLE1BQUs7Z0JBQVdDLFVBQVUsSUFBTTtvQkFDakQsSUFBR0wsU0FBU00sSUFBSSxLQUFLLFFBQU87d0JBQ3hCTixTQUFTTSxJQUFJLEdBQUc7b0JBQ3BCLE9BQUs7d0JBQ0ROLFNBQVNNLElBQUksR0FBRztvQkFDcEIsQ0FBQztnQkFDTDs7Ozs7OzBCQUNBLDhEQUFDQztnQkFDR0MsU0FBUTtnQkFDUkMsV0FBVTs7a0NBRVYsOERBQUNDO2tDQUFLOzs7Ozs7a0NBQ04sOERBQUNBO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEIsQ0FBQztHQXBCdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL0RhcmtNb2RlU3dpdGNoLmpzPzhmYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGVTd2l0Y2ggZnJvbSAnLi4vc3R5bGVzL1N0eWxlU3dpdGNoJ1xuaW1wb3J0IHsgQ29sb3JNb2RlQ29udGV4dCB9IGZyb20gXCIuL0NvbG9yTW9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrTW9kZVN3aXRjaCgpIHtcbiAgICBjb25zdCBjb250ZXh0byA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JNb2RlQ29udGV4dClcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVTd2l0Y2g+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXJrbW9kZVwiIHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29udGV4dG8ubW9kZSA9PT0gJ2RhcmsnKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dG8ubW9kZSA9ICdsaWdodCdcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dG8ubW9kZSA9ICdkYXJrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZGFya21vZGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcmttb2RlLXN3aXRjaFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+8J+MmTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7imIDvuI88L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L1N0eWxlU3dpdGNoPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZVN3aXRjaCIsIkNvbG9yTW9kZUNvbnRleHQiLCJEYXJrTW9kZVN3aXRjaCIsImNvbnRleHRvIiwidXNlQ29udGV4dCIsImlucHV0IiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtb2RlIiwibGFiZWwiLCJodG1sRm9yIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/views/DarkModeSwitch.js\n"));

/***/ })

});