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

/***/ "./src/components/views/Header.js":
/*!****************************************!*\
  !*** ./src/components/views/Header.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyledHeader */ \"./src/components/styles/StyledHeader.js\");\n\n\nfunction Header(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            className: \"cabecalho\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"principal active\",\n                            id: \"principal\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Principal\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 10,\n                                columnNumber: 73\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-sobre\",\n                            onClick: ()=>sobre(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 11,\n                                columnNumber: 78\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 11,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-projetos\",\n                            onClick: ()=>props.setVisible(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Projetos\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 12,\n                                columnNumber: 91\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\nfunction sobre(props) {\n    props.setVisible(false);\n    var largura = window.screen.width;\n    if (largura == 1440) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal = document.querySelector(\".principal\");\n        const menuSobre = document.querySelector(\"\");\n        menuPrincipal.classList.remove(\"active\");\n        principal.style.display = \"none\";\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92aWV3cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQWlEO0FBRWpELFNBQVNDLE9BQU9DLEtBQUssRUFBQztJQUVsQixxQkFDSTtrQkFDQSw0RUFBQ0YsNERBQVlBO1lBQUNHLFdBQVU7c0JBQ2hCLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0U7O3NDQUNHLDhEQUFDQzs0QkFBR0gsV0FBVTs0QkFBbUJJLElBQUc7c0NBQVksNEVBQUNDOzBDQUFFOzs7Ozs7Ozs7OztzQ0FDbkQsOERBQUNGOzRCQUFHSCxXQUFVOzRCQUFVTSxTQUFTLElBQU1DLE1BQU1SO3NDQUFRLDRFQUFDTTswQ0FBRTs7Ozs7Ozs7Ozs7c0NBQ3hELDhEQUFDRjs0QkFBR0gsV0FBVTs0QkFBYU0sU0FBUyxJQUFNUCxNQUFNUyxVQUFVLENBQUMsSUFBSTtzQ0FBRyw0RUFBQ0g7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Y7S0FmU1A7QUFpQlQsU0FBU1MsTUFBTVIsS0FBSyxFQUFDO0lBQ2pCQSxNQUFNUyxVQUFVLENBQUMsS0FBSztJQUV0QixJQUFJQyxVQUFVQyxPQUFPQyxNQUFNLENBQUNDLEtBQUs7SUFFakMsSUFBR0gsV0FBVyxNQUFLO1FBQ2YsTUFBTUksWUFBWUMsU0FBU0MsY0FBYyxDQUFDO1FBQzFDLE1BQU1DLGdCQUFnQkYsU0FBU0csYUFBYSxDQUFDO1FBQzdDLE1BQU1DLFlBQVlKLFNBQVNHLGFBQWEsQ0FBQztRQUN6Q0QsY0FBY0csU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDL0JQLFVBQVVRLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO0lBQzlCLENBQUM7QUFDTDtBQUVBLCtEQUFleEIsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3cy9IZWFkZXIuanM/Y2JiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkSGVhZGVyIGZyb20gXCIuLi9zdHlsZXMvU3R5bGVkSGVhZGVyXCJcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKXtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxTdHlsZWRIZWFkZXIgY2xhc3NOYW1lPVwiY2FiZWNhbGhvXCI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcmluY2lwYWwgYWN0aXZlXCIgaWQ9XCJwcmluY2lwYWxcIj48YT5QcmluY2lwYWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhLXNvYnJlXCIgb25DbGljaz17KCkgPT4gc29icmUocHJvcHMpfT48YT5Tb2JyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImEtcHJvamV0b3NcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRWaXNpYmxlKHRydWUpfT48YT5Qcm9qZXRvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L1N0eWxlZEhlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBzb2JyZShwcm9wcyl7XG4gICAgcHJvcHMuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHZhciBsYXJndXJhID0gd2luZG93LnNjcmVlbi53aWR0aFxuXG4gICAgaWYobGFyZ3VyYSA9PSAxNDQwKXtcbiAgICAgICAgY29uc3QgcHJpbmNpcGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MtcHJpbmNpcGFsJylcbiAgICAgICAgY29uc3QgbWVudVByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmluY2lwYWwnKVxuICAgICAgICBjb25zdCBtZW51U29icmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKVxuICAgICAgICBtZW51UHJpbmNpcGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgcHJpbmNpcGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJTdHlsZWRIZWFkZXIiLCJIZWFkZXIiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibGkiLCJpZCIsImEiLCJvbkNsaWNrIiwic29icmUiLCJzZXRWaXNpYmxlIiwibGFyZ3VyYSIsIndpbmRvdyIsInNjcmVlbiIsIndpZHRoIiwicHJpbmNpcGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnVQcmluY2lwYWwiLCJxdWVyeVNlbGVjdG9yIiwibWVudVNvYnJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/views/Header.js\n"));

/***/ })

});