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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyledHeader */ \"./src/components/styles/StyledHeader.js\");\n\n\nfunction Header(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            className: \"cabecalho\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"principal active\",\n                            id: \"principal\",\n                            onClick: ()=>principal(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Principal\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 10,\n                                columnNumber: 106\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-sobre\",\n                            onClick: ()=>sobre(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 11,\n                                columnNumber: 78\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 11,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-projetos\",\n                            onClick: ()=>projetos(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Projetos\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 12,\n                                columnNumber: 84\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\nasync function principal(props) {\n    await props.setVisible(false);\n    var largura = window.innerWidth;\n    if (largura <= 1314) {\n        sobre.style.display = \"none\";\n        formacao.style.display = \"none\";\n        menuPrincipal.classList.add(\"active\");\n        menuSobre.classList.remove(\"active\");\n        menuProjetos.classList.remove(\"active\");\n        principal.style.display = \"flex\";\n    } else {}\n}\nasync function sobre(props) {\n    await props.setVisible(false);\n    var largura = window.innerWidth;\n    if (largura <= 1314) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal1 = document.querySelector(\".principal\");\n        const sobre = document.getElementById(\"container-sobre\");\n        const formacao1 = document.querySelector(\".container-formacao\");\n        const menuSobre1 = document.querySelector(\".a-sobre\");\n        const menuProjetos1 = document.querySelector(\".a-projetos\");\n        sobre.style.display = \"flex\";\n        formacao1.style.display = \"flex\";\n        menuPrincipal1.classList.remove(\"active\");\n        menuSobre1.classList.add(\"active\");\n        menuProjetos1.classList.remove(\"active\");\n        principal.style.display = \"none\";\n    }\n}\nasync function projetos(props) {\n    await props.setVisible(true);\n    var largura = window.innerWidth;\n    if (largura <= 1314) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal1 = document.querySelector(\".principal\");\n        const menuSobre1 = document.querySelector(\".a-sobre\");\n        const menuProjetos1 = document.querySelector(\".a-projetos\");\n        menuPrincipal1.classList.remove(\"active\");\n        menuSobre1.classList.remove(\"active\");\n        menuProjetos1.classList.add(\"active\");\n        principal.style.display = \"none\";\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3cy9IZWFkZXIuanM/Y2JiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkSGVhZGVyIGZyb20gXCIuLi9zdHlsZXMvU3R5bGVkSGVhZGVyXCJcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKXtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxTdHlsZWRIZWFkZXIgY2xhc3NOYW1lPVwiY2FiZWNhbGhvXCI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcmluY2lwYWwgYWN0aXZlXCIgaWQ9XCJwcmluY2lwYWxcIiBvbkNsaWNrPXsoKSA9PiBwcmluY2lwYWwocHJvcHMpfT48YT5QcmluY2lwYWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhLXNvYnJlXCIgb25DbGljaz17KCkgPT4gc29icmUocHJvcHMpfT48YT5Tb2JyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImEtcHJvamV0b3NcIiBvbkNsaWNrPXsoKSA9PiBwcm9qZXRvcyhwcm9wcyl9PjxhPlByb2pldG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvU3R5bGVkSGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gcHJpbmNpcGFsKHByb3BzKXtcbiAgICBhd2FpdCBwcm9wcy5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdmFyIGxhcmd1cmEgPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgaWYobGFyZ3VyYSA8PSAxMzE0KXtcbiAgICAgICAgXG4gICAgICAgIHNvYnJlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBmb3JtYWNhby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIG1lbnVQcmluY2lwYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBtZW51U29icmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgbWVudVByb2pldG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIHByaW5jaXBhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgfWVsc2V7XG5cbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBzb2JyZShwcm9wcyl7XG4gICAgYXdhaXQgcHJvcHMuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHZhciBsYXJndXJhID0gd2luZG93LmlubmVyV2lkdGhcblxuICAgIGlmKGxhcmd1cmEgPD0gMTMxNCl7XG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLXByaW5jaXBhbCcpXG4gICAgICAgIGNvbnN0IG1lbnVQcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbmNpcGFsJylcbiAgICAgICAgY29uc3Qgc29icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXNvYnJlJylcbiAgICAgICAgY29uc3QgZm9ybWFjYW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZvcm1hY2FvJylcbiAgICAgICAgY29uc3QgbWVudVNvYnJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtc29icmUnKVxuICAgICAgICBjb25zdCBtZW51UHJvamV0b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1wcm9qZXRvcycpXG4gICAgICAgIHNvYnJlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBmb3JtYWNhby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIG1lbnVQcmluY2lwYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICBtZW51U29icmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgbWVudVByb2pldG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIHByaW5jaXBhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9qZXRvcyhwcm9wcyl7XG4gICAgYXdhaXQgcHJvcHMuc2V0VmlzaWJsZSh0cnVlKVxuXG4gICAgdmFyIGxhcmd1cmEgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGlmKGxhcmd1cmEgPD0gMTMxNCl7XG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLXByaW5jaXBhbCcpXG4gICAgICAgIGNvbnN0IG1lbnVQcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbmNpcGFsJylcbiAgICAgICAgY29uc3QgbWVudVNvYnJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtc29icmUnKVxuICAgICAgICBjb25zdCBtZW51UHJvamV0b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1wcm9qZXRvcycpXG4gICAgICAgIG1lbnVQcmluY2lwYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICBtZW51U29icmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgbWVudVByb2pldG9zLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIHByaW5jaXBhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJTdHlsZWRIZWFkZXIiLCJIZWFkZXIiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibGkiLCJpZCIsIm9uQ2xpY2siLCJwcmluY2lwYWwiLCJhIiwic29icmUiLCJwcm9qZXRvcyIsInNldFZpc2libGUiLCJsYXJndXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlIiwiZGlzcGxheSIsImZvcm1hY2FvIiwibWVudVByaW5jaXBhbCIsImNsYXNzTGlzdCIsImFkZCIsIm1lbnVTb2JyZSIsInJlbW92ZSIsIm1lbnVQcm9qZXRvcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/views/Header.js\n"));

/***/ })

});