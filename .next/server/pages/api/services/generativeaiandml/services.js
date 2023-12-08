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
exports.id = "pages/api/services/generativeaiandml/services";
exports.ids = ["pages/api/services/generativeaiandml/services"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/services/generativeaiandml/services.js":
/*!**********************************************************!*\
  !*** ./pages/api/services/generativeaiandml/services.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"data/services/generativeaiandml/\");\n    try {\n        const files = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(filePath);\n        let allServices = [];\n        for (const file of files){\n            const fileContent = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(filePath, file), \"utf-8\");\n            allServices.push(JSON.parse(fileContent));\n        }\n        res.status(200).json(allServices);\n    } catch (error) {\n        console.error(\"Error reading files:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\",\n            details: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvc2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFDcEQ7QUFDRDtBQUVULGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFdBQVdKLG1EQUFZLENBQUM7SUFFOUIsSUFBSTtRQUNGLE1BQU1NLFFBQVEsTUFBTVAsZ0RBQW1CLENBQUNLO1FBQ3hDLElBQUlLLGNBQWMsRUFBRTtRQUVwQixLQUFLLE1BQU1DLFFBQVFKLE1BQU87WUFDeEIsTUFBTUssY0FBYyxNQUFNWixpREFBb0IsQ0FDNUNDLGdEQUFTLENBQUNJLFVBQVVNLE9BQ3BCO1lBRUZELFlBQVlLLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDTDtRQUM5QjtRQUVBUixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVDtJQUN2QixFQUFFLE9BQU9VLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdENoQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87WUFBeUJFLFNBQVNGLE1BQU1HLE9BQU87UUFBQztJQUNoRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZWVuYS1yZWFjdC8uL3BhZ2VzL2FwaS9zZXJ2aWNlcy9nZW5lcmF0aXZlYWlhbmRtbC9zZXJ2aWNlcy5qcz9lY2FlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoJ2RhdGEvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvJyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoZmlsZVBhdGgpO1xyXG4gICAgbGV0IGFsbFNlcnZpY2VzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoXHJcbiAgICAgICAgcGF0aC5qb2luKGZpbGVQYXRoLCBmaWxlKSxcclxuICAgICAgICAndXRmLTgnXHJcbiAgICAgICk7XHJcbiAgICAgIGFsbFNlcnZpY2VzLnB1c2goSlNPTi5wYXJzZShmaWxlQ29udGVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbFNlcnZpY2VzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBmaWxlczonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsInJlc29sdmUiLCJmaWxlcyIsInByb21pc2VzIiwicmVhZGRpciIsImFsbFNlcnZpY2VzIiwiZmlsZSIsImZpbGVDb250ZW50IiwicmVhZEZpbGUiLCJqb2luIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkZXRhaWxzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/generativeaiandml/services.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/generativeaiandml/services.js"));
module.exports = __webpack_exports__;

})();