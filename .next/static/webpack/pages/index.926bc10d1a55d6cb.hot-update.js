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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyledHeader */ \"./src/components/styles/StyledHeader.js\");\n\n\nfunction Header(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StyledHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            className: \"cabecalho\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"principal active\",\n                            id: \"principal\",\n                            onClick: ()=>principal(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Principal\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 10,\n                                columnNumber: 106\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-sobre\",\n                            onClick: ()=>sobre(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 11,\n                                columnNumber: 78\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 11,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"a-projetos\",\n                            onClick: ()=>projetos(props),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Projetos\"\n                            }, void 0, false, {\n                                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                                lineNumber: 12,\n                                columnNumber: 84\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/src/components/views/Header.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\nasync function principal(props) {\n    await props.setVisible(false);\n    var largura = window.innerWidth;\n    if (largura <= 1314) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal = document.querySelector(\".principal\");\n        const sobre = document.getElementById(\"container-sobre\");\n        const formacao = document.querySelector(\".container-formacao\");\n        const menuSobre = document.querySelector(\".a-sobre\");\n        const menuProjetos = document.querySelector(\".a-projetos\");\n        sobre.style.display = \"none\";\n        formacao.style.display = \"none\";\n        menuPrincipal.classList.add(\"active\");\n        menuSobre.classList.remove(\"active\");\n        menuProjetos.classList.remove(\"active\");\n        principal.style.display = \"flex\";\n    }\n}\nasync function sobre(props) {\n    await props.setVisible(false);\n    var largura = window.innerWidth;\n    if (largura <= 1314) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal = document.querySelector(\".principal\");\n        const sobre = document.getElementById(\"container-sobre\");\n        const formacao = document.querySelector(\".container-formacao\");\n        const menuSobre = document.querySelector(\".a-sobre\");\n        const menuProjetos = document.querySelector(\".a-projetos\");\n        sobre.style.display = \"flex\";\n        formacao.style.display = \"flex\";\n        menuPrincipal.classList.remove(\"active\");\n        menuSobre.classList.add(\"active\");\n        menuProjetos.classList.remove(\"active\");\n        principal.style.display = \"none\";\n    }\n}\nasync function projetos(props) {\n    await props.setVisible(true);\n    var largura = window.innerWidth;\n    console.log(largura);\n    if (largura <= 1314) {\n        const principal = document.getElementById(\"c-principal\");\n        const menuPrincipal = document.querySelector(\".principal\");\n        const menuSobre = document.querySelector(\".a-sobre\");\n        const menuProjetos = document.querySelector(\".a-projetos\");\n        menuPrincipal.classList.remove(\"active\");\n        menuSobre.classList.remove(\"active\");\n        menuProjetos.classList.add(\"active\");\n        principal.style.display = \"none\";\n        console.log(menuPrincipal.style.display);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlTixTQUFTRyxhQUFhLENBQUM7UUFDNUNELGNBQWNPLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQy9CTixVQUFVSSxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUMzQkwsYUFBYUcsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDM0JsQixVQUFVZSxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUMxQkksUUFBUUMsR0FBRyxDQUFDWCxjQUFjSyxLQUFLLENBQUNDLE9BQU87SUFFM0MsQ0FBQztBQUNMO0FBRUEsK0RBQWV4QixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL0hlYWRlci5qcz9jYmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWRIZWFkZXIgZnJvbSBcIi4uL3N0eWxlcy9TdHlsZWRIZWFkZXJcIlxuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpe1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPFN0eWxlZEhlYWRlciBjbGFzc05hbWU9XCJjYWJlY2FsaG9cIj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaW5jaXBhbCBhY3RpdmVcIiBpZD1cInByaW5jaXBhbFwiIG9uQ2xpY2s9eygpID0+IHByaW5jaXBhbChwcm9wcyl9PjxhPlByaW5jaXBhbDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImEtc29icmVcIiBvbkNsaWNrPXsoKSA9PiBzb2JyZShwcm9wcyl9PjxhPlNvYnJlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYS1wcm9qZXRvc1wiIG9uQ2xpY2s9eygpID0+IHByb2pldG9zKHByb3BzKX0+PGE+UHJvamV0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9TdHlsZWRIZWFkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmFzeW5jIGZ1bmN0aW9uIHByaW5jaXBhbChwcm9wcyl7XG4gICAgYXdhaXQgcHJvcHMuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHZhciBsYXJndXJhID0gd2luZG93LmlubmVyV2lkdGhcblxuICAgIGlmKGxhcmd1cmEgPD0gMTMxNCl7XG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLXByaW5jaXBhbCcpXG4gICAgICAgIGNvbnN0IG1lbnVQcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbmNpcGFsJylcbiAgICAgICAgY29uc3Qgc29icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXNvYnJlJylcbiAgICAgICAgY29uc3QgZm9ybWFjYW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZvcm1hY2FvJylcbiAgICAgICAgY29uc3QgbWVudVNvYnJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtc29icmUnKVxuICAgICAgICBjb25zdCBtZW51UHJvamV0b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1wcm9qZXRvcycpXG4gICAgICAgIHNvYnJlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBmb3JtYWNhby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIG1lbnVQcmluY2lwYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBtZW51U29icmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgbWVudVByb2pldG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIHByaW5jaXBhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gc29icmUocHJvcHMpe1xuICAgIGF3YWl0IHByb3BzLnNldFZpc2libGUoZmFsc2UpXG5cbiAgICB2YXIgbGFyZ3VyYSA9IHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICBpZihsYXJndXJhIDw9IDEzMTQpe1xuICAgICAgICBjb25zdCBwcmluY2lwYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYy1wcmluY2lwYWwnKVxuICAgICAgICBjb25zdCBtZW51UHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW5jaXBhbCcpXG4gICAgICAgIGNvbnN0IHNvYnJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1zb2JyZScpXG4gICAgICAgIGNvbnN0IGZvcm1hY2FvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1mb3JtYWNhbycpXG4gICAgICAgIGNvbnN0IG1lbnVTb2JyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hLXNvYnJlJylcbiAgICAgICAgY29uc3QgbWVudVByb2pldG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtcHJvamV0b3MnKVxuICAgICAgICBzb2JyZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgZm9ybWFjYW8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICBtZW51UHJpbmNpcGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgbWVudVNvYnJlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIG1lbnVQcm9qZXRvcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBwcmluY2lwYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvamV0b3MocHJvcHMpe1xuICAgIGF3YWl0IHByb3BzLnNldFZpc2libGUodHJ1ZSlcblxuICAgIHZhciBsYXJndXJhID0gd2luZG93LmlubmVyV2lkdGhcbiAgICBjb25zb2xlLmxvZyhsYXJndXJhKVxuICAgIGlmKGxhcmd1cmEgPD0gMTMxNCl7XG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLXByaW5jaXBhbCcpXG4gICAgICAgIGNvbnN0IG1lbnVQcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbmNpcGFsJylcbiAgICAgICAgY29uc3QgbWVudVNvYnJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtc29icmUnKVxuICAgICAgICBjb25zdCBtZW51UHJvamV0b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1wcm9qZXRvcycpXG4gICAgICAgIG1lbnVQcmluY2lwYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICBtZW51U29icmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgbWVudVByb2pldG9zLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIHByaW5jaXBhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVQcmluY2lwYWwuc3R5bGUuZGlzcGxheSlcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJsaSIsImlkIiwib25DbGljayIsInByaW5jaXBhbCIsImEiLCJzb2JyZSIsInByb2pldG9zIiwic2V0VmlzaWJsZSIsImxhcmd1cmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnVQcmluY2lwYWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybWFjYW8iLCJtZW51U29icmUiLCJtZW51UHJvamV0b3MiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/views/Header.js\n"));

/***/ })

});