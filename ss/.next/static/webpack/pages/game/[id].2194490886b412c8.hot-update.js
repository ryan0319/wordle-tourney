"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[id]",{

/***/ "./common/utils/functions.ts":
/*!***********************************!*\
  !*** ./common/utils/functions.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxGuesses\": function() { return /* binding */ maxGuesses; },\n/* harmony export */   \"dictionarySet\": function() { return /* binding */ dictionarySet; },\n/* harmony export */   \"pick\": function() { return /* binding */ pick; }\n/* harmony export */ });\n/* harmony import */ var _libraries_dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libraries/dictionary */ \"./common/libraries/dictionary.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar maxGuesses = 6;\nvar dictionarySet = new Set(_libraries_dictionary__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction pick(array) {\n    return array[Math.floor(array.length * Math.random())];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vdXRpbHMvZnVuY3Rpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBRXpDLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUM7QUFFcEIsR0FBSyxDQUFDQyxhQUFhLEdBQWdCLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDSCw2REFBVTtBQUVyRCxTQUFTSSxJQUFJLENBQUlDLEtBQWUsRUFBSyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0EsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsS0FBSyxDQUFDRyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csTUFBTTtBQUNwRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbW1vbi91dGlscy9mdW5jdGlvbnMudHM/NDQ5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuLi9saWJyYXJpZXMvZGljdGlvbmFyeSc7XG5cbmV4cG9ydCBjb25zdCBtYXhHdWVzc2VzID0gNjtcblxuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnlTZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldChkaWN0aW9uYXJ5KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2s8VD4oYXJyYXk6IEFycmF5PFQ+KTogVCB7XG4gIHJldHVybiBhcnJheVtNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcbn1cblxuIl0sIm5hbWVzIjpbImRpY3Rpb25hcnkiLCJtYXhHdWVzc2VzIiwiZGljdGlvbmFyeVNldCIsIlNldCIsInBpY2siLCJhcnJheSIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/utils/functions.ts\n");

/***/ })

});