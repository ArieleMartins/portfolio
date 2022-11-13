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

/***/ "./src/components/CSSReset.js":
/*!************************************!*\
  !*** ./src/components/CSSReset.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSSReset\": function() { return /* binding */ CSSReset; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');\\n  /* Reset */\\n  * {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n  body {\\n    font-family: sans-serif;\\n    //background-color: #111018;\\n    background-color: \",\n        \";\\n    color: \",\n        \";\\n    transition: background 1s;\\n    font-family: 'Merriweather Sans', sans-serif;\\n  }\\n  /* NextJS */\\n  /* Globals */\\n  button,\\n  a {\\n    text-decoration: none;\\n    opacity: 1;\\n    transition: .3s;\\n    \\n  }\\n  .cabecalho, .container-sobre, .container-formacao, .container-desc-links{\\n    background-color: 4{({theme})};\\n    border: 2px solid #312F34;\\n    border-radius: 20px;\\n    \\n  } \\n\\n  @media(max-width:1325px){\\n    .container-formacao, .container-sobre{\\n        display: none;\\n    }\\n\\n    body{\\n        padding: 0;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst CSSReset = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundBase;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.fontColor;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1DLFdBQVdELG9FQUFpQkEsb0JBV2pCLFNBQWVFO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLGNBQWM7QUFBRCxHQUM3QyxTQUFlRDtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNRSxTQUFTO0FBQUQsR0E2QnhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0LmpzPzAyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENTU1Jlc2V0ID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXIrU2FucyZkaXNwbGF5PXN3YXAnKTtcbiAgLyogUmVzZXQgKi9cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxMTEwMTg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kQmFzZX07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udENvbG9yfTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC8qIE5leHRKUyAqL1xuICAvKiBHbG9iYWxzICovXG4gIGJ1dHRvbixcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIFxuICB9XG4gIC5jYWJlY2FsaG8sIC5jb250YWluZXItc29icmUsIC5jb250YWluZXItZm9ybWFjYW8sIC5jb250YWluZXItZGVzYy1saW5rc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA0eyh7dGhlbWV9KX07XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMxMkYzNDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIFxuICB9IFxuXG4gIEBtZWRpYShtYXgtd2lkdGg6MTMyNXB4KXtcbiAgICAuY29udGFpbmVyLWZvcm1hY2FvLCAuY29udGFpbmVyLXNvYnJle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5gOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkNTU1Jlc2V0IiwidGhlbWUiLCJiYWNrZ3JvdW5kQmFzZSIsImZvbnRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CSSReset.js\n"));

/***/ })

});