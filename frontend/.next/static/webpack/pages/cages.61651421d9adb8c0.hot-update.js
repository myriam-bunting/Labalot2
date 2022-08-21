"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cages",{

/***/ "./components/UpdateAnimal.js":
/*!************************************!*\
  !*** ./components/UpdateAnimal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction UpdateAnimal(props) {\n    _s();\n    var tagRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var genderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var dobRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var genotypeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var phenotypeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var experimentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    console.log(props.animalData);\n    // ============ Update: Cage ========\n    var updateAnimal = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(updatedAnimalData) {\n            var url, res;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/cages/\".concat(props.animalData.id);\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"PATCH\",\n                            body: JSON.stringify(updatedAnimalData),\n                            headers: {\n                                \"content-type\": \"application/json\"\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function updateAnimal(updatedAnimalData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var animalData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        animalData = {\n                            tag: Number(tagRef.current.value),\n                            gender: genderRef.current.value,\n                            birth_date: dobRef.current.value,\n                            genotype: genotypeRef.current.value,\n                            phenotype: phenotypeRef.current.value,\n                            experiment_id: Number(experimentIdRef.current.value)\n                        };\n                        // console.log(animalData);\n                        updateAnimal(animalData);\n                        props.handleSubmit();\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"styles.update\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                children: \"Update Animal: \"\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-tag\",\n                label: \"tag\",\n                inputRef: tagRef,\n                defaultValue: props.animalData.tag\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-gender\",\n                label: \"gender\",\n                inputRef: genderRef,\n                defaultValue: props.cageData.gender\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-birth_date\",\n                label: \"DOB\",\n                inputRef: dobRef,\n                defaultValue: props.cageData.birth_date\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-experiementID\",\n                label: \"Experiment ID\",\n                inputRef: experimentIdRef,\n                defaultValue: props.cageData.experiment_id\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                onClick: handleSubmit,\n                children: \"UPDATE CAGE\"\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateAnimal.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(UpdateAnimal, \"IaMyQg4OlBZeJpTIi2elqWWKXLE=\");\n_c = UpdateAnimal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateAnimal);\nvar _c;\n$RefreshReg$(_c, \"UpdateAnimal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUN4QnNCLEtBQUssRUFBQyxLQUFLO2dCQUNYQyxRQUFRLEVBQUVsQyxNQUFNO2dCQUNoQm1DLFlBQVksRUFBRXRDLEtBQUssQ0FBQ3VDLFFBQVEsQ0FBQ1QsVUFBVTs7Ozs7b0JBQ3ZDOzBCQUNGLDhEQUFDakMsb0RBQVM7Z0JBQ1JpQixFQUFFLEVBQUMsd0JBQXdCO2dCQUMzQnNCLEtBQUssRUFBQyxlQUFlO2dCQUNyQkMsUUFBUSxFQUFFL0IsZUFBZTtnQkFDekJnQyxZQUFZLEVBQUV0QyxLQUFLLENBQUN1QyxRQUFRLENBQUNOLGFBQWE7Ozs7O29CQUMxQzswQkFDRiw4REFBQ25DLGlEQUFNO2dCQUFDMEMsT0FBTyxFQUFFbEIsWUFBWTswQkFBRSxhQUFXOzs7OztvQkFBUzs7Ozs7O1lBQy9DLENBQ047Q0FDSDtHQXRFUXZCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXdFckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwZGF0ZUFuaW1hbC5qcz9kMGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gVXBkYXRlQW5pbWFsKHByb3BzKSB7XG4gIGNvbnN0IHRhZ1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBnZW5kZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZG9iUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGdlbm90eXBlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHBoZW5vdHlwZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBleHBlcmltZW50SWRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zb2xlLmxvZyhwcm9wcy5hbmltYWxEYXRhKTtcblxuICAvLyA9PT09PT09PT09PT0gVXBkYXRlOiBDYWdlID09PT09PT09XG5cbiAgY29uc3QgdXBkYXRlQW5pbWFsID0gYXN5bmMgKHVwZGF0ZWRBbmltYWxEYXRhKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jYWdlcy8ke3Byb3BzLmFuaW1hbERhdGEuaWR9YDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEFuaW1hbERhdGEpLFxuICAgICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH0pO1xuICAgIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL29uIFN1Ym1pdCwgZGF0YSBpcyBwYXNzZWQgdG8gdGhlIGRhdGFiYXNlXG5cbiAgICBjb25zdCBhbmltYWxEYXRhID0ge1xuICAgICAgdGFnOiBOdW1iZXIodGFnUmVmLmN1cnJlbnQudmFsdWUpLFxuICAgICAgZ2VuZGVyOiBnZW5kZXJSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgIGJpcnRoX2RhdGU6IGRvYlJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgZ2Vub3R5cGU6IGdlbm90eXBlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICBwaGVub3R5cGU6IHBoZW5vdHlwZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgZXhwZXJpbWVudF9pZDogTnVtYmVyKGV4cGVyaW1lbnRJZFJlZi5jdXJyZW50LnZhbHVlKSxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKGFuaW1hbERhdGEpO1xuICAgIHVwZGF0ZUFuaW1hbChhbmltYWxEYXRhKTtcbiAgICBwcm9wcy5oYW5kbGVTdWJtaXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3R5bGVzLnVwZGF0ZVwiPlxuICAgICAgPFR5cG9ncmFwaHk+VXBkYXRlIEFuaW1hbDogPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGlkPVwib3V0bGluZWQtdGFnXCJcbiAgICAgICAgbGFiZWw9XCJ0YWdcIlxuICAgICAgICBpbnB1dFJlZj17dGFnUmVmfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmFuaW1hbERhdGEudGFnfVxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJvdXRsaW5lZC1nZW5kZXJcIlxuICAgICAgICBsYWJlbD1cImdlbmRlclwiXG4gICAgICAgIGlucHV0UmVmPXtnZW5kZXJSZWZ9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FnZURhdGEuZ2VuZGVyfVxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJvdXRsaW5lZC1iaXJ0aF9kYXRlXCJcbiAgICAgICAgbGFiZWw9XCJET0JcIlxuICAgICAgICBpbnB1dFJlZj17ZG9iUmVmfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhZ2VEYXRhLmJpcnRoX2RhdGV9XG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBpZD1cIm91dGxpbmVkLWV4cGVyaWVtZW50SURcIlxuICAgICAgICBsYWJlbD1cIkV4cGVyaW1lbnQgSURcIlxuICAgICAgICBpbnB1dFJlZj17ZXhwZXJpbWVudElkUmVmfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhZ2VEYXRhLmV4cGVyaW1lbnRfaWR9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlVQREFURSBDQUdFPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUFuaW1hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJVcGRhdGVBbmltYWwiLCJwcm9wcyIsInRhZ1JlZiIsImdlbmRlclJlZiIsImRvYlJlZiIsImdlbm90eXBlUmVmIiwicGhlbm90eXBlUmVmIiwiZXhwZXJpbWVudElkUmVmIiwiY29uc29sZSIsImxvZyIsImFuaW1hbERhdGEiLCJ1cGRhdGVBbmltYWwiLCJ1cGRhdGVkQW5pbWFsRGF0YSIsInVybCIsInJlcyIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhZyIsIk51bWJlciIsImN1cnJlbnQiLCJ2YWx1ZSIsImdlbmRlciIsImJpcnRoX2RhdGUiLCJnZW5vdHlwZSIsInBoZW5vdHlwZSIsImV4cGVyaW1lbnRfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0UmVmIiwiZGVmYXVsdFZhbHVlIiwiY2FnZURhdGEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpdateAnimal.js\n"));

/***/ })

});