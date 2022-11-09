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

/***/ "./src/components/styles/StyleMain.js":
/*!********************************************!*\
  !*** ./src/components/styles/StyleMain.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 341px;\\nheight: 996px;\\ndisplay: flex;\\nflex-direction: column;\\nbackground-color: #111018;\\nborder: 2px solid #312F34;\\nborder-radius: 20px;\\ncolor:white;\\n\\n.container-info-perfil{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 15px;\\n}\\n\\n.container-perfil{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 20px;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    height: 340px;\\n    padding: 0px 20px;\\n}\\n\\n.container-perfil figure{\\n    max-width: 158px;\\n}\\n\\n.container-perfil figure img {\\n    width: 100%;\\n    border-radius: 50%;\\n}\\n.nome {\\n    font-size: 26px;\\n    color: #C18C92;\\n}\\n\\n.cargo {\\n    width: 289px;\\n    height: 37px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 20px;\\n    background: #312F34;\\n    border-radius: 20px;\\n    font-size: 13px;\\n    text-transform: uppercase;\\n}\\n.container-links{\\n    width: 100%;\\n    padding: 10px 20px;\\n    border-bottom:2px solid #312F34;\\n    border-top: 2px solid #312F34;\\n    font-size: 25px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    column-gap: 45px;\\n}\\n.container-links a{\\n    color: white;\\n    text-decoration: none;\\n}\\n.container-links a:hover{\\n    color: #C18C92;   \\n}\\n.container-location{\\n    display: flex;\\n    column-gap: 10px;\\n}\\n.container-skills{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 20px;\\n    padding: 0px 20px;\\n}\\n.skill{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    row-gap: 10px;\\n}\\n.barra{\\n    width: 100%;\\n    height: 9px;\\n    background-color: #2b2a33;\\n    border-radius: 10px;\\n}\\n.progresso{\\n    width: 0%;\\n    height: 9px;\\n    border-radius: 10px;\\n    \\n}\\n\\n.html, .css, .js, .git, .github, .php, .csharp, .python{\\n    background-color: #C18C92;\\n}\\n.html{\\n    animation: barraHtml ease-in-out 2s forwards;\\n}\\n.css{\\n    animation: barraCss ease-in-out 2s forwards;\\n}\\n.js{\\n    animation: barraJs ease-in-out 2s forwards;\\n}\\n.git{\\n    animation: barraGit ease-in-out 2s forwards;\\n}\\n.github{\\n    animation: barraGithub ease-in-out 2s forwards;\\n}\\n.php{\\n    animation: barraPhp ease-in-out 2s forwards;\\n}\\n.csharp{\\n    animation: barraCsharp ease-in-out 2s forwards;\\n}\\n.python{\\n    animation: barraPython ease-in-out 2s forwards;\\n}\\n\\n@keyframes barraHtml{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 80%;\\n    }\\n}\\n@keyframes barraCss{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 60%;\\n    }\\n}\\n@keyframes barraJs{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 40%;\\n    }\\n}\\n@keyframes barraGit{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 20%;\\n    }\\n}\\n@keyframes barraGithub{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 60%;\\n    }\\n}\\n@keyframes barraPhp{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 15%;\\n    }\\n}\\n@keyframes barraCsharp{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 25%;\\n    }\\n}\\n@keyframes barraPython{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 10%;\\n    }\\n}\\n.container-email{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n    padding: 15px 20px 0px 20px;\\n    height: 30px;\\n    align-items: center;\\n    justify-content: center;\\n    border-top: 2px solid #312F34;\\n}\\n.email{\\n    display: flex;\\n    column-gap: 10px;\\n    align-items: center;\\n}\\n.container-desenvolvedores{\\n    padding: 0px 20px;\\n    height: 60px;\\n    display: flex;\\n    border-top: 2px solid #312F34;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.container-desenvolvedores p{\\n    font-size: 14px;\\n}\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.withConfig({\n    displayName: \"StyleMain__StyledMain\",\n    componentId: \"sc-d37af8db-0\"\n})(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3R5bGVNYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWFELHlFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdHlsZU1haW4uanM/NDFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmNvbnN0IFN0eWxlZE1haW4gPSBzdHlsZWQubWFpbmBcbndpZHRoOiAzNDFweDtcbmhlaWdodDogOTk2cHg7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmJhY2tncm91bmQtY29sb3I6ICMxMTEwMTg7XG5ib3JkZXI6IDJweCBzb2xpZCAjMzEyRjM0O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbmNvbG9yOndoaXRlO1xuXG4uY29udGFpbmVyLWluZm8tcGVyZmlse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAxNXB4O1xufVxuXG4uY29udGFpbmVyLXBlcmZpbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzQwcHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5jb250YWluZXItcGVyZmlsIGZpZ3VyZXtcbiAgICBtYXgtd2lkdGg6IDE1OHB4O1xufVxuXG4uY29udGFpbmVyLXBlcmZpbCBmaWd1cmUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm9tZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiAjQzE4QzkyO1xufVxuXG4uY2FyZ28ge1xuICAgIHdpZHRoOiAyODlweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzMxMkYzNDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbnRhaW5lci1saW5rc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzMxMkYzNDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzMxMkYzNDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDQ1cHg7XG59XG4uY29udGFpbmVyLWxpbmtzIGF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250YWluZXItbGlua3MgYTpob3ZlcntcbiAgICBjb2xvcjogI0MxOEM5MjsgICBcbn1cbi5jb250YWluZXItbG9jYXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xufVxuLmNvbnRhaW5lci1za2lsbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uc2tpbGx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcm93LWdhcDogMTBweDtcbn1cbi5iYXJyYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYTMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZ3Jlc3Nve1xuICAgIHdpZHRoOiAwJTtcbiAgICBoZWlnaHQ6IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxufVxuXG4uaHRtbCwgLmNzcywgLmpzLCAuZ2l0LCAuZ2l0aHViLCAucGhwLCAuY3NoYXJwLCAucHl0aG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMThDOTI7XG59XG4uaHRtbHtcbiAgICBhbmltYXRpb246IGJhcnJhSHRtbCBlYXNlLWluLW91dCAycyBmb3J3YXJkcztcbn1cbi5jc3N7XG4gICAgYW5pbWF0aW9uOiBiYXJyYUNzcyBlYXNlLWluLW91dCAycyBmb3J3YXJkcztcbn1cbi5qc3tcbiAgICBhbmltYXRpb246IGJhcnJhSnMgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4uZ2l0e1xuICAgIGFuaW1hdGlvbjogYmFycmFHaXQgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4uZ2l0aHVie1xuICAgIGFuaW1hdGlvbjogYmFycmFHaXRodWIgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4ucGhwe1xuICAgIGFuaW1hdGlvbjogYmFycmFQaHAgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4uY3NoYXJwe1xuICAgIGFuaW1hdGlvbjogYmFycmFDc2hhcnAgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4ucHl0aG9ue1xuICAgIGFuaW1hdGlvbjogYmFycmFQeXRob24gZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgYmFycmFIdG1se1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuQGtleWZyYW1lcyBiYXJyYUNzc3tcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmFycmFKc3tcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmFycmFHaXR7XG4gICAgZnJvbXtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGJhcnJhR2l0aHVie1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxufVxuQGtleWZyYW1lcyBiYXJyYVBocHtcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmFycmFDc2hhcnB7XG4gICAgZnJvbXtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGJhcnJhUHl0aG9ue1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxufVxuLmNvbnRhaW5lci1lbWFpbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMTJGMzQ7XG59XG4uZW1haWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyLWRlc2Vudm9sdmVkb3Jlc3tcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzMxMkYzNDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lci1kZXNlbnZvbHZlZG9yZXMgcHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmA7XG5cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRNYWluIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/styles/StyleMain.js\n"));

/***/ })

});