/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./mock/index.js":
/*!***********************!*\
  !*** ./mock/index.js ***!
  \***********************/
/***/ ((module) => {

eval("module.exports=\"import helloWorld from './hello.js';\\n\\nfunction component() {\\n  const element = document.createElement('div'); \\n  element.innerHTML = helloWorld();\\n  return element;\\n}\\n\\ndocument.body.appendChild(component());\"\n\n//# sourceURL=webpack:///./mock/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./mock/index.js"));
/******/ }
]);