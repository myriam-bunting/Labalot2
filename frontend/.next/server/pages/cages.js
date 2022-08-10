"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cages";
exports.ids = ["pages/cages"];
exports.modules = {

/***/ "./components/CagesTable.js":
/*!**********************************!*\
  !*** ./components/CagesTable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CagesTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"@mui/x-data-grid\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CagesTable({ cageData  }) {\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 80\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 80\n        },\n        {\n            field: \"experiment_id\",\n            headerName: \"Experiment\",\n            width: 80\n        }, \n    ];\n    const rows = [];\n    console.log(cageData);\n    const cageDataRow = (cage, count)=>{\n        count = 0;\n        for (cage of cageData){\n            rows.push({\n                id: cage.id,\n                name: cage.name,\n                experiment_id: cage.experiment_id\n            });\n            count += 1;\n        //add number of animals\n        }\n        console.log(`rows ${rows}, ${count}`);\n    };\n    cageDataRow();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"90vh\",\n            width: \"90vw\",\n            paddingRight: 8\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            pageSize: 80,\n            rowsPerPageOptions: [\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhZ2VzVGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ2E7QUFFN0IsU0FBU0UsVUFBVSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQy9DLE1BQU1DLE9BQU8sR0FBRztRQUNkO1lBQUVDLEtBQUssRUFBRSxJQUFJO1lBQUVDLFVBQVUsRUFBRSxJQUFJO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUU7UUFDNUM7WUFBRUYsS0FBSyxFQUFFLE1BQU07WUFBRUMsVUFBVSxFQUFFLE1BQU07WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBRTtRQUNoRDtZQUFFRixLQUFLLEVBQUUsZUFBZTtZQUFFQyxVQUFVLEVBQUUsWUFBWTtZQUFFQyxLQUFLLEVBQUUsRUFBRTtTQUFFO0tBQ2hFO0lBRUQsTUFBTUMsSUFBSSxHQUFHLEVBQUU7SUFFZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLE1BQU1RLFdBQVcsR0FBRyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssR0FBSztRQUNuQ0EsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUtELElBQUksSUFBSVQsUUFBUSxDQUFFO1lBQ3JCSyxJQUFJLENBQUNNLElBQUksQ0FBQztnQkFDUkMsRUFBRSxFQUFFSCxJQUFJLENBQUNHLEVBQUU7Z0JBQ1hDLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJO2dCQUNmQyxhQUFhLEVBQUVMLElBQUksQ0FBQ0ssYUFBYTthQUNsQyxDQUFDLENBQUM7WUFDSEosS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNYLHVCQUF1QjtTQUN4QjtRQUNESixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRUYsSUFBSSxDQUFDLEVBQUUsRUFBRUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0RGLFdBQVcsRUFBRSxDQUFDO0lBRWQscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLE1BQU0sRUFBRSxNQUFNO1lBQUViLEtBQUssRUFBRSxNQUFNO1lBQUVjLFlBQVksRUFBRSxDQUFDO1NBQUU7a0JBQzVELDRFQUFDcEIsc0RBQVE7WUFDUE8sSUFBSSxFQUFFQSxJQUFJO1lBQ1ZKLE9BQU8sRUFBRUEsT0FBTztZQUNoQmtCLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLGtCQUFrQixFQUFFO0FBQUMsa0JBQUU7YUFBQztZQUN4QkMsaUJBQWlCOzs7OztnQkFDakI7Ozs7O1lBQ0UsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhZ2VzVGFibGUuanM/MjA4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FnZXNUYWJsZSh7IGNhZ2VEYXRhIH0pIHtcbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7IGZpZWxkOiBcImlkXCIsIGhlYWRlck5hbWU6IFwiSURcIiwgd2lkdGg6IDgwIH0sXG4gICAgeyBmaWVsZDogXCJuYW1lXCIsIGhlYWRlck5hbWU6IFwiTmFtZVwiLCB3aWR0aDogODAgfSxcbiAgICB7IGZpZWxkOiBcImV4cGVyaW1lbnRfaWRcIiwgaGVhZGVyTmFtZTogXCJFeHBlcmltZW50XCIsIHdpZHRoOiA4MCB9LFxuICBdO1xuXG4gIGNvbnN0IHJvd3MgPSBbXTtcblxuICBjb25zb2xlLmxvZyhjYWdlRGF0YSk7XG5cbiAgY29uc3QgY2FnZURhdGFSb3cgPSAoY2FnZSwgY291bnQpID0+IHtcbiAgICBjb3VudCA9IDA7XG4gICAgZm9yIChjYWdlIG9mIGNhZ2VEYXRhKSB7XG4gICAgICByb3dzLnB1c2goe1xuICAgICAgICBpZDogY2FnZS5pZCxcbiAgICAgICAgbmFtZTogY2FnZS5uYW1lLFxuICAgICAgICBleHBlcmltZW50X2lkOiBjYWdlLmV4cGVyaW1lbnRfaWQsXG4gICAgICB9KTtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgICAvL2FkZCBudW1iZXIgb2YgYW5pbWFsc1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgcm93cyAke3Jvd3N9LCAke2NvdW50fWApO1xuICB9O1xuICBjYWdlRGF0YVJvdygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTB2aFwiLCB3aWR0aDogXCI5MHZ3XCIsIHBhZGRpbmdSaWdodDogOCB9fT5cbiAgICAgIDxEYXRhR3JpZFxuICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBwYWdlU2l6ZT17ODB9XG4gICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwXX1cbiAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEYXRhR3JpZCIsIkNhZ2VzVGFibGUiLCJjYWdlRGF0YSIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJvd3MiLCJjb25zb2xlIiwibG9nIiwiY2FnZURhdGFSb3ciLCJjYWdlIiwiY291bnQiLCJwdXNoIiwiaWQiLCJuYW1lIiwiZXhwZXJpbWVudF9pZCIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwicGFkZGluZ1JpZ2h0IiwicGFnZVNpemUiLCJyb3dzUGVyUGFnZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CagesTable.js\n");

/***/ }),

/***/ "./pages/cages.js":
/*!************************!*\
  !*** ./pages/cages.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CagesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CagesTable */ \"./components/CagesTable.js\");\n\n\n\nfunction Cages() {\n    const { 0: cages , 1: setCages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCages();\n    }, []);\n    const fetchCages = async ()=>{\n        const url = \"/api/cages\";\n        const res = await fetch(url, {\n            method: \"GET\"\n        });\n        console.log(res);\n        const cageData = await res.json();\n        console.log(res.status);\n        // console.log(cageData);\n        setCages(cageData);\n    //passing cage data down in the state\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: cages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CagesTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cageData: cages\n        }, void 0, false, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n            lineNumber: 27,\n            columnNumber: 25\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWdlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNEO0FBRWxELFNBQVNJLEtBQUssR0FBRztJQUNmLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXRDQyxnREFBUyxDQUFDLElBQU07UUFDZEssVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUEsVUFBVSxHQUFHLFVBQVk7UUFDN0IsTUFBTUMsR0FBRyxHQUFHLFlBQVk7UUFDeEIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxFQUFFO1lBQzNCRyxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE1BQU1LLFFBQVEsR0FBRyxNQUFNTCxHQUFHLENBQUNNLElBQUksRUFBRTtRQUVqQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLENBQUM7UUFDeEIseUJBQXlCO1FBRXpCVixRQUFRLENBQUNRLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLHFDQUFxQztLQUN0QztJQUVELHFCQUFPLDhEQUFDRyxLQUFHO2tCQUFFWixLQUFLLGtCQUFJLDhEQUFDRiw4REFBVTtZQUFDVyxRQUFRLEVBQUVULEtBQUs7Ozs7O2dCQUFlOzs7OztZQUFPLENBQUM7Q0FDekU7QUFFRCxpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9jYWdlcy5qcz8wZDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FnZXNUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWdlc1RhYmxlXCI7XG5cbmZ1bmN0aW9uIENhZ2VzKCkge1xuICBjb25zdCBbY2FnZXMsIHNldENhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2FnZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoQ2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCIvYXBpL2NhZ2VzXCI7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGNvbnN0IGNhZ2VEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhZ2VEYXRhKTtcblxuICAgIHNldENhZ2VzKGNhZ2VEYXRhKTtcbiAgICAvL3Bhc3NpbmcgY2FnZSBkYXRhIGRvd24gaW4gdGhlIHN0YXRlXG4gIH07XG5cbiAgcmV0dXJuIDxkaXY+e2NhZ2VzICYmIDxDYWdlc1RhYmxlIGNhZ2VEYXRhPXtjYWdlc30+PC9DYWdlc1RhYmxlPn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhZ2VzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYWdlc1RhYmxlIiwiQ2FnZXMiLCJjYWdlcyIsInNldENhZ2VzIiwiZmV0Y2hDYWdlcyIsInVybCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImNhZ2VEYXRhIiwianNvbiIsInN0YXR1cyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cages.js\n");

/***/ }),

/***/ "@mui/x-data-grid":
/*!***********************************!*\
  !*** external "@mui/x-data-grid" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/x-data-grid");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cages.js"));
module.exports = __webpack_exports__;

})();