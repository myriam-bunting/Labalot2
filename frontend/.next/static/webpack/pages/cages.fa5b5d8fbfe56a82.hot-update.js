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

/***/ "./components/CagesTable.js":
/*!**********************************!*\
  !*** ./components/CagesTable.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CagesTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"../node_modules/@mui/x-data-grid/index.js\");\n\n\n\nfunction CagesTable(param) {\n    var cageData = param.cageData;\n    var columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 80\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 80\n        },\n        {\n            field: \"experiment_id\",\n            headerName: \"Experiment\",\n            width: 80\n        }, \n    ];\n    var rows = [];\n    var cageDataRow = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = cageData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                cage = _step.value;\n                rows.push(id = cage.id, name = cage.name, experiment_id = cage.experiment_id);\n            //add number of animals\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        console.log(\"rows \".concat(rows));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"90vh\",\n            width: \"90vw\",\n            paddingRight: 8\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            pageSize: 80,\n            rowsPerPageOptions: [\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_c = CagesTable;\nvar _c;\n$RefreshReg$(_c, \"CagesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhZ2VzVGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDYTtBQUU3QixTQUFTRSxVQUFVLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTtJQUMzQyxJQUFNQyxPQUFPLEdBQUc7UUFDZDtZQUFFQyxLQUFLLEVBQUUsSUFBSTtZQUFFQyxVQUFVLEVBQUUsSUFBSTtZQUFFQyxLQUFLLEVBQUUsRUFBRTtTQUFFO1FBQzVDO1lBQUVGLEtBQUssRUFBRSxNQUFNO1lBQUVDLFVBQVUsRUFBRSxNQUFNO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUU7UUFDaEQ7WUFBRUYsS0FBSyxFQUFFLGVBQWU7WUFBRUMsVUFBVSxFQUFFLFlBQVk7WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBRTtLQUNoRTtJQUVELElBQU1DLElBQUksR0FBRyxFQUFFO0lBRWYsSUFBTUMsV0FBVyxHQUFHLFdBQU07WUFDbkJDLHlCQUFJLFNBQUpBLGlCQUFJLFVBQUpBLGNBQUk7O1lBQVQsUUFBS0EsU0FBSSxHQUFJUCxRQUFRLHFCQUFoQk8sS0FBSSxJQUFKQSx5QkFBSSxJQUFKQSxLQUFJLEdBQUpBLFNBQUksZ0JBQUpBLHlCQUFJLFFBQWM7Z0JBQWxCQSxJQUFJLEdBQUpBLEtBQUk7Z0JBQ1BGLElBQUksQ0FBQ0csSUFBSSxDQUNOQyxFQUFFLEdBQUdGLElBQUksQ0FBQ0UsRUFBRSxFQUNaQyxJQUFJLEdBQUdILElBQUksQ0FBQ0csSUFBSSxFQUNoQkMsYUFBYSxHQUFHSixJQUFJLENBQUNJLGFBQWEsQ0FDcEMsQ0FBQztZQUNGLHVCQUF1QjthQUN4Qjs7WUFQSUosaUJBQUk7WUFBSkEsY0FBSTs7O3FCQUFKQSx5QkFBSSxJQUFKQSxTQUFJO29CQUFKQSxTQUFJOzs7b0JBQUpBLGlCQUFJOzBCQUFKQSxjQUFJOzs7O1FBUVRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU0sQ0FBTyxPQUFMUixJQUFJLENBQUUsQ0FBQyxDQUFDO0tBQzdCO0lBRUQscUJBQ0UsOERBQUNTLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLE1BQU0sRUFBRSxNQUFNO1lBQUVaLEtBQUssRUFBRSxNQUFNO1lBQUVhLFlBQVksRUFBRSxDQUFDO1NBQUU7a0JBQzVELDRFQUFDbkIsc0RBQVE7WUFDUE8sSUFBSSxFQUFFQSxJQUFJO1lBQ1ZKLE9BQU8sRUFBRUEsT0FBTztZQUNoQmlCLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLGtCQUFrQixFQUFFO0FBQUMsa0JBQUU7YUFBQztZQUN4QkMsaUJBQWlCOzs7OztnQkFDakI7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0FBaEN1QnJCLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWdlc1RhYmxlLmpzPzIwODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhZ2VzVGFibGUoeyBjYWdlRGF0YSB9KSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyBmaWVsZDogXCJpZFwiLCBoZWFkZXJOYW1lOiBcIklEXCIsIHdpZHRoOiA4MCB9LFxuICAgIHsgZmllbGQ6IFwibmFtZVwiLCBoZWFkZXJOYW1lOiBcIk5hbWVcIiwgd2lkdGg6IDgwIH0sXG4gICAgeyBmaWVsZDogXCJleHBlcmltZW50X2lkXCIsIGhlYWRlck5hbWU6IFwiRXhwZXJpbWVudFwiLCB3aWR0aDogODAgfSxcbiAgXTtcblxuICBjb25zdCByb3dzID0gW107XG5cbiAgY29uc3QgY2FnZURhdGFSb3cgPSAoKSA9PiB7XG4gICAgZm9yIChjYWdlIG9mIGNhZ2VEYXRhKSB7XG4gICAgICByb3dzLnB1c2goXG4gICAgICAgIChpZCA9IGNhZ2UuaWQpLFxuICAgICAgICAobmFtZSA9IGNhZ2UubmFtZSksXG4gICAgICAgIChleHBlcmltZW50X2lkID0gY2FnZS5leHBlcmltZW50X2lkKVxuICAgICAgKTtcbiAgICAgIC8vYWRkIG51bWJlciBvZiBhbmltYWxzXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGByb3dzICR7cm93c31gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwdmhcIiwgd2lkdGg6IFwiOTB2d1wiLCBwYWRkaW5nUmlnaHQ6IDggfX0+XG4gICAgICA8RGF0YUdyaWRcbiAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgcGFnZVNpemU9ezgwfVxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMF19XG4gICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YUdyaWQiLCJDYWdlc1RhYmxlIiwiY2FnZURhdGEiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyb3dzIiwiY2FnZURhdGFSb3ciLCJjYWdlIiwicHVzaCIsImlkIiwibmFtZSIsImV4cGVyaW1lbnRfaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJwYWRkaW5nUmlnaHQiLCJwYWdlU2l6ZSIsInJvd3NQZXJQYWdlT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CagesTable.js\n"));

/***/ })

});