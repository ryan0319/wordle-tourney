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

/***/ "./common/utils/clue.ts":
/*!******************************!*\
  !*** ./common/utils/clue.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clue\": function() { return /* binding */ Clue; },\n/* harmony export */   \"clue\": function() { return /* binding */ clue; },\n/* harmony export */   \"clueClass\": function() { return /* binding */ clueClass; },\n/* harmony export */   \"clueWord\": function() { return /* binding */ clueWord; },\n/* harmony export */   \"describeClue\": function() { return /* binding */ describeClue; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Clue;\n(function(Clue) {\n    Clue[Clue[\"Absent\"] = 0] = \"Absent\";\n    Clue[Clue[\"Elsewhere\"] = 1] = \"Elsewhere\";\n    Clue[Clue[\"Correct\"] = 2] = \"Correct\";\n})(Clue || (Clue = {}));\nfunction clue(word, target) {\n    var elusive = [];\n    target.split('').forEach(function(letter, i) {\n        if (word[i] !== letter) {\n            elusive.push(letter);\n        }\n    });\n    return word.split('').map(function(letter, i) {\n        var j;\n        if (target[i] === letter) {\n            return {\n                clue: Clue.Correct,\n                letter: letter\n            };\n        } else if ((j = elusive.indexOf(letter)) > -1) {\n            // \"use it up\" so we don't clue at it twice\n            elusive[j] = '';\n            return {\n                clue: Clue.Elsewhere,\n                letter: letter\n            };\n        } else {\n            return {\n                clue: Clue.Absent,\n                letter: letter\n            };\n        }\n    });\n}\nfunction clueClass(clue1) {\n    if (clue1 === Clue.Absent) {\n        return 0;\n    } else if (clue1 === Clue.Elsewhere) {\n        return 1;\n    } else if (clue1 === Clue.Correct) {\n        return 2;\n    }\n    return -1;\n}\nfunction clueWord(clue2) {\n    if (clue2 === Clue.Absent) {\n        return 'no';\n    } else if (clue2 === Clue.Elsewhere) {\n        return 'elsewhere';\n    } else {\n        return 'correct';\n    }\n}\nfunction describeClue(clue3) {\n    return clue3.map(function(param) {\n        var letter = param.letter, clue4 = param.clue;\n        return letter.toUpperCase() + ' ' + clueWord(clue4);\n    }).join(', ');\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FDUlMsR0FBRyxDQUFDLFFBQVE7WUFBTEgsTUFBTSxTQUFOQSxNQUFNLEVBQUVOLEtBQUksU0FBSkEsSUFBSTtRQUFPTSxNQUFNLENBQU5BLE1BQU0sQ0FBQ1MsV0FBVyxLQUFLLENBQUcsS0FBR0YsUUFBUSxDQUFDYixLQUFJO09BQ3BFZ0IsSUFBSSxDQUFDLENBQUk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbW1vbi91dGlscy9jbHVlLnRzPzRkOTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2x1ZSB7XG4gIEFic2VudCxcbiAgRWxzZXdoZXJlLFxuICBDb3JyZWN0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsdWVkTGV0dGVyIHtcbiAgY2x1ZT86IENsdWU7XG4gIGxldHRlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2x1ZSh3b3JkOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nKTogQ2x1ZWRMZXR0ZXJbXSB7XG4gIGNvbnN0IGVsdXNpdmU6IHN0cmluZ1tdID0gW107XG4gIHRhcmdldC5zcGxpdCgnJykuZm9yRWFjaCgobGV0dGVyLCBpKSA9PiB7XG4gICAgaWYgKHdvcmRbaV0gIT09IGxldHRlcikge1xuICAgICAgZWx1c2l2ZS5wdXNoKGxldHRlcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHdvcmQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgbGV0IGo6IG51bWJlcjtcbiAgICBpZiAodGFyZ2V0W2ldID09PSBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiB7IGNsdWU6IENsdWUuQ29ycmVjdCwgbGV0dGVyIH07XG4gICAgfSBlbHNlIGlmICgoaiA9IGVsdXNpdmUuaW5kZXhPZihsZXR0ZXIpKSA+IC0xKSB7XG4gICAgICAvLyBcInVzZSBpdCB1cFwiIHNvIHdlIGRvbid0IGNsdWUgYXQgaXQgdHdpY2VcbiAgICAgIGVsdXNpdmVbal0gPSAnJztcbiAgICAgIHJldHVybiB7IGNsdWU6IENsdWUuRWxzZXdoZXJlLCBsZXR0ZXIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgY2x1ZTogQ2x1ZS5BYnNlbnQsIGxldHRlciB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbHVlQ2xhc3MoY2x1ZTogQ2x1ZSB8IHVuZGVmaW5lZCk6IG51bWJlciB7XG4gIGlmIChjbHVlID09PSBDbHVlLkFic2VudCkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGNsdWUgPT09IENsdWUuRWxzZXdoZXJlKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoY2x1ZSA9PT0gQ2x1ZS5Db3JyZWN0KSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2x1ZVdvcmQoY2x1ZTogQ2x1ZSk6IHN0cmluZyB7XG4gIGlmIChjbHVlID09PSBDbHVlLkFic2VudCkge1xuICAgIHJldHVybiAnbm8nO1xuICB9IGVsc2UgaWYgKGNsdWUgPT09IENsdWUuRWxzZXdoZXJlKSB7XG4gICAgcmV0dXJuICdlbHNld2hlcmUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnY29ycmVjdCc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlQ2x1ZShjbHVlOiBDbHVlZExldHRlcltdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNsdWVcbiAgICAubWFwKCh7IGxldHRlciwgY2x1ZSB9KSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSArICcgJyArIGNsdWVXb3JkKGNsdWUhKSlcbiAgICAuam9pbignLCAnKTtcbn1cbiJdLCJuYW1lcyI6WyJDbHVlIiwiQWJzZW50IiwiRWxzZXdoZXJlIiwiQ29ycmVjdCIsImNsdWUiLCJ3b3JkIiwidGFyZ2V0IiwiZWx1c2l2ZSIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsImkiLCJwdXNoIiwibWFwIiwiaiIsImluZGV4T2YiLCJjbHVlQ2xhc3MiLCJjbHVlV29yZCIsImRlc2NyaWJlQ2x1ZSIsInRvVXBwZXJDYXNlIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/utils/clue.ts\n");

/***/ })

});