/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks > label,\n.f-tasks > label {\n    margin: 5px;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;IAEI,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,SAAS;IACT,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;AACA,8CAA8C;AAC9C;IACI,WAAW;IACX,6BAA6B;AACjC;;AAEA;;IAEI,WAAW;AACf;;AAEA,oBAAoB;AACpB;;;;;IAKI,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA,iCAAiC;;AAEjC,yBAAyB;;AAEzB;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;AACX;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,MAAM;IACN,QAAQ;IACR,OAAO;IACP,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,OAAO;IACP,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA,4BAA4B;;AAE5B;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;AACX;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,MAAM;IACN,QAAQ;IACR,OAAO;IACP,UAAU;IACV,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,OAAO;IACP,UAAU;IACV,cAAc;IACd,mBAAmB;AACvB;;AAEA;;GAEG,kBAAkB;AACrB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,SAAS;IACT,WAAW;AACf;;;AAGA,8BAA8B;;AAE9B;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;;;IAII;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA,eAAe;AACf;IACI,cAAc;AAClB","sourcesContent":["*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks > label,\n.f-tasks > label {\n    margin: 5px;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add_new_task.js":
/*!*****************************!*\
  !*** ./src/add_new_task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _tasks_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks_field */ "./src/tasks_field.js");




const DOM = (() => {
    // I have to reassing dynamically created nodes, because
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const newTaskName = document.getElementById('new-task-name');
    const newTaskDescription = document.getElementById('new-task-description');
    const saveBtn = document.getElementById('save-button');
    const newTaskWindow = document.getElementById('new-task-window');

    return {
        newTaskName,
        newTaskDescription,
        saveBtn,
        newTaskWindow,
    };
})();

const NewTaskModule = (() => {
    function clearInput() {
        DOM.newTaskName.value = '';
        DOM.newTaskDescription.value = '';
    }

    function newTask() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);

        const currentActiveListIndex =
            _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.indexOf(currentActiveList);

        const taskName = DOM.newTaskName.value;
        const taskDescription = DOM.newTaskDescription.value;
        if (taskName !== '') {
            _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].createNewTaskInTheList(
                currentActiveListIndex,
                taskName,
                taskDescription,
                true,
                'none'
            );
        }

        _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
        _tasks_field__WEBPACK_IMPORTED_MODULE_2__["default"].changeTaskStatus();
        clearInput();
        DOM.newTaskWindow.classList.remove('show');
    }

    DOM.saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newTask();
    });

    return { newTask };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskModule);


/***/ }),

/***/ "./src/create_new_list_window.js":
/*!***************************************!*\
  !*** ./src/create_new_list_window.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_window_btn_clicks */ "./src/main_window_btn_clicks.js");




const DOM = (() => {
    const newListWindow = document.getElementById('new-list-window');
    const closeBtn = document.getElementById('close-btn');
    const readyBtn = document.getElementById('ready-btn');
    const newListNameText = document.getElementById('new-list-name');

    return {
        newListWindow,
        closeBtn,
        readyBtn,
        newListNameText,
    };
})();

const NewListModule = (() => {
    function closeWindow() {
        function handleClick() {
            DOM.newListWindow.classList.remove('show');
        }
        DOM.closeBtn.addEventListener('click', handleClick);
    }

    function createNewList() {
        function clearInput() {
            DOM.newListNameText.value = '';
            DOM.newListWindow.classList.remove('show');
        }

        function handleClick() {
            if (DOM.newListNameText.value === '') {
                clearInput();
                return;
            }
            _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].createNewList(DOM.newListNameText.value);
            _display_data__WEBPACK_IMPORTED_MODULE_1__["default"].taskListMain();
            _display_data__WEBPACK_IMPORTED_MODULE_1__["default"].taskListWindow();
            clearInput();
            _main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_2__["default"].changeActiveListOnClick();
        }
        DOM.readyBtn.addEventListener('click', handleClick);
    }

    return { closeWindow, createNewList };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewListModule);


/***/ }),

/***/ "./src/display_data.js":
/*!*****************************!*\
  !*** ./src/display_data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _task_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_window */ "./src/task_window.js");



const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );
    const tasksField = document.getElementById('tasks-field');
    const tasksFieldOngoing = document.getElementById('tasks-field-ongoing');
    const tasksFieldFinished = document.getElementById('tasks-field-finished');
    const taskListTags = document.querySelectorAll('[data-list-tag]');
    const newTaskWindow = document.getElementById('this-task-window');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
        taskListTags,
        newTaskWindow,
    };
})();

const displayModule = (() => {
    function taskListMain() {
        DOM.headerMenu.innerHTML = '';
        _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.dataset.listTag = '';
            newList.textContent = `${list.title}`;
            if (list.activeList === true) {
                newList.className = 'active-list';
            }

            DOM.headerMenu.appendChild(newList);

            return DOM.headerMenu;
        });
    }

    function taskListWindow() {
        DOM.taskListWindow.innerHTML = '';
        _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.dataset.listTag = '';
            newList.textContent = `${list.title}`;
            if (list.activeList === true) {
                newList.className = 'active-list';
            }

            DOM.taskListWindow.appendChild(newList);

            return DOM.taskListWindow;
        });
    }

    function displayOngoingTasksH2() {
        const ongoingTasksH2 = document.createElement('h2');
        ongoingTasksH2.textContent = 'Ongoing tasks';
        DOM.tasksFieldOngoing.appendChild(ongoingTasksH2);
    }

    function displayFinishedTasksH2() {
        const finishedTasksH2 = document.createElement('h2');
        finishedTasksH2.textContent = 'Finished tasks';
        DOM.tasksFieldFinished.appendChild(finishedTasksH2);
    }

    function displayOngoingTasks(list) {
        if (list) {
            list.tasks.forEach((task, index) => {
                if (task.on) {
                    const newTaskOngoing = document.createElement('div');
                    // newTaskOngoing.dataset.status = 'ongoing';
                    newTaskOngoing.dataset.taskNumber = `${index}`;
                    // newTaskOngoing.dataset.thisTask = '';
                    newTaskOngoing.className = 'o-tasks';

                    const newTaskOngoingInput = document.createElement('input');
                    newTaskOngoingInput.type = 'checkbox';
                    // newTaskOngoingInput.dataset.status = 'ongoing';
                    newTaskOngoingInput.dataset.taskNumber = `${index}`;
                    newTaskOngoingInput.name = `o-task${index}`;
                    newTaskOngoingInput.dataset.taskTag = '';
                    newTaskOngoingInput.className = 'tasks';

                    const newTaskOngoingInputLabel =
                        document.createElement('label');
                    newTaskOngoingInputLabel.setAttribute(
                        'for',
                        `o-task${index}`
                    );
                    newTaskOngoingInputLabel.dataset.taskNumber = `${index}`;
                    newTaskOngoingInputLabel.textContent = task.title;
                    newTaskOngoingInputLabel.dataset.thisTask = '';

                    newTaskOngoing.appendChild(newTaskOngoingInput);
                    newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                    return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
                }
                return DOM.tasksFieldOngoing;
            });
        }
        return '';
    }

    function displayFinishedTasks(list) {
        if (list) {
            list.tasks.forEach((task, index) => {
                if (!task.on) {
                    const newTaskFinished = document.createElement('div');
                    // newTaskFinished.dataset.status = 'finished';
                    newTaskFinished.dataset.taskNumber = `${index}`;
                    // newTaskFinished.dataset.thisTask = '';
                    newTaskFinished.className = 'f-tasks';

                    const newTaskFinishedInput =
                        document.createElement('input');
                    newTaskFinishedInput.type = 'checkbox';
                    // newTaskFinishedInput.dataset.status = 'finished';
                    newTaskFinishedInput.dataset.taskNumber = `${index}`;
                    newTaskFinishedInput.name = `f-task${index}`;
                    newTaskFinishedInput.dataset.taskTag = '';
                    newTaskFinishedInput.className = 'tasks';
                    newTaskFinishedInput.checked = true;

                    const newTaskFinishedInputLabel =
                        document.createElement('label');
                    newTaskFinishedInputLabel.setAttribute(
                        'for',
                        `f-task${index}`
                    );
                    newTaskFinishedInputLabel.dataset.taskNumber = `${index}`;
                    newTaskFinishedInputLabel.textContent = task.title;
                    newTaskFinishedInputLabel.dataset.thisTask = '';

                    newTaskFinished.appendChild(newTaskFinishedInput);
                    newTaskFinished.appendChild(newTaskFinishedInputLabel);
                    return DOM.tasksFieldFinished.appendChild(newTaskFinished);
                }
                return DOM.tasksFieldFinished;
            });
        }
        return '';
    }

    function resetTasks() {
        DOM.tasksFieldOngoing.innerHTML = '';
        DOM.tasksFieldFinished.innerHTML = '';
    }

    function displayActiveList() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }

        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.find(listActivityCheck);
        // console.log(currentActiveList);
        resetTasks();
        displayOngoingTasksH2();
        displayOngoingTasks(currentActiveList);
        displayFinishedTasksH2();
        displayFinishedTasks(currentActiveList);
    }

    function displayChosenTaskWindow(activeList, taskNumber) {
        function taskWindowClear() {
            DOM.newTaskWindow.innerHTML = '';
        }

        const goBackBtn = document.createElement('div');
        goBackBtn.id = 'this-task-go-back';
        goBackBtn.className = 'go-back';
        goBackBtn.insertAdjacentHTML(
            'afterbegin',
            `<i id="this-task-go-back-btn" data-task-number='${taskNumber}' class="fas fa-chevron-left"></i>`
        );

        const thisTaskName = document.createElement('div');
        thisTaskName.id = 'this-task-name';
        thisTaskName.className = 'this-task-name';
        const thisTaskNameTitle = document.createElement('h1');
        thisTaskNameTitle.contentEditable = 'true';
        thisTaskNameTitle.dataset.taskTitle = '';
        thisTaskNameTitle.textContent = `${activeList.tasks[taskNumber].title}`;
        thisTaskName.appendChild(thisTaskNameTitle);

        const thisTaskDescription = document.createElement('div');
        thisTaskDescription.id = 'this-task-description';
        thisTaskDescription.className = 'this-task-description';
        const thisTaskDescriptionText = document.createElement('p');
        thisTaskDescriptionText.contentEditable = 'true';
        thisTaskDescriptionText.dataset.taskDescription = '';
        thisTaskDescriptionText.textContent = `${activeList.tasks[taskNumber].description}`;
        thisTaskDescription.appendChild(thisTaskDescriptionText);

        const thisTaskStatus = document.createElement('div');
        thisTaskStatus.id = 'this-task-status-container';
        thisTaskStatus.className = 'this-task-status';

        const thisTaskOn = activeList.tasks[taskNumber].on;
        function checkTaskOn() {
            if (thisTaskOn) {
                return `<option value="ongoing" selected>Ongoing</option>
                        <option value="finished">Finished</option>`;
            }
            return `<option value="ongoing">Ongoing</option>
                        <option value="finished" selected>Finished</option>`;
        }

        thisTaskStatus.insertAdjacentHTML(
            'afterbegin',
            `<label for="this-task-status">Task status:</label>
            <select name="this-task-status" id="this-task-status">
            ${checkTaskOn()}
            </select>`
        );

        const thisTaskDate = document.createElement('div');
        thisTaskDate.id = 'this-task-date';
        thisTaskDate.className = 'this-task-date';
        thisTaskDate.insertAdjacentHTML(
            'afterbegin',
            `<i class="fas fa-calendar-alt"></i> 
            <p id="date-value">${activeList.tasks[taskNumber].date}</p>`
        );

        const deleteBtn = document.createElement('div');
        deleteBtn.id = 'this-task-delete';
        deleteBtn.className = 'this-task-delete';
        deleteBtn.insertAdjacentHTML(
            'afterbegin',
            '<i class="fas fa-trash"></i>'
        );

        taskWindowClear();
        DOM.newTaskWindow.appendChild(goBackBtn);
        DOM.newTaskWindow.appendChild(thisTaskName);
        DOM.newTaskWindow.appendChild(thisTaskDescription);
        DOM.newTaskWindow.appendChild(thisTaskStatus);
        DOM.newTaskWindow.appendChild(thisTaskDate);
        DOM.newTaskWindow.appendChild(deleteBtn);
        _task_window__WEBPACK_IMPORTED_MODULE_1__["default"].backBtnClick();
        _task_window__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTaskFromListBtnClick();
    }

    function initDisplayModule() {
        taskListMain();
        taskListWindow();
        displayActiveList();
        // TODO
        // add chosenTaskWindow functionality for newly created lists after delete
        // displayChosenTaskWindow();
    }

    return {
        taskListMain,
        taskListWindow,
        displayActiveList,
        displayChosenTaskWindow,
        initDisplayModule,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModule);


/***/ }),

/***/ "./src/main_window_btn_clicks.js":
/*!***************************************!*\
  !*** ./src/main_window_btn_clicks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");



const DOM = (() => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskWindow = document.getElementById('new-task-window');
    const newTaskWindowMenu = document.getElementById('new-task-window-menu');
    const tasksListBtn = document.getElementById('tasks-list-btn');
    const tasksListWindow = document.getElementById('tasks-list-window');
    const tasksListWindowMenu = document.getElementById(
        'tasks-list-window-menu'
    );
    const createNewListBtn = document.getElementById('create-new-list');
    const newListWindow = document.getElementById('new-list-window');
    const createNewListMenuBtn = document.getElementById(
        'create-new-list-menu'
    );
    const taskLists = document.querySelectorAll('[data-list-tag]');
    const deleteListBtn = document.getElementById('delete-list-btn');

    function openWindow(window) {
        window.classList.add('show');
    }

    return {
        addTaskBtn,
        newTaskWindow,
        newTaskWindowMenu,
        tasksListBtn,
        tasksListWindow,
        tasksListWindowMenu,
        createNewListBtn,
        newListWindow,
        createNewListMenuBtn,
        openWindow,
        taskLists,
        deleteListBtn,
    };
})();

// checkpoint
const mainWindowBtn = (() => {
    function addNewTaskBtnClick() {
        const openNewTaskWindow = () => DOM.openWindow(DOM.newTaskWindow);

        function closeNewTaskWindow(e) {
            if (!DOM.newTaskWindowMenu.contains(e.target)) {
                DOM.newTaskWindow.classList.remove('show');
            }
        }

        DOM.addTaskBtn.addEventListener('click', openNewTaskWindow);
        window.addEventListener('mouseup', closeNewTaskWindow);
    }

    function tasksListBtnClick() {
        const openTasksListWindow = () => DOM.openWindow(DOM.tasksListWindow);

        function closeTasksList(e) {
            if (!DOM.tasksListWindowMenu.contains(e.target)) {
                DOM.tasksListWindow.classList.remove('show');
            }
        }

        DOM.tasksListBtn.addEventListener('click', openTasksListWindow);
        window.addEventListener('mouseup', closeTasksList);
    }

    function createNewListBtnClick() {
        const openNewListWindow = () => DOM.openWindow(DOM.newListWindow);

        DOM.createNewListBtn.addEventListener('click', openNewListWindow);
    }

    function createNewListMenuBtnClick() {
        const openNewListWindow = () => {
            DOM.tasksListWindow.classList.remove('show');
            DOM.openWindow(DOM.newListWindow);
        };

        DOM.createNewListMenuBtn.addEventListener('click', openNewListWindow);
    }

    function changeActiveListOnClick() {
        const taskLists = document.querySelectorAll('[data-list-tag]');
        function changeActiveList(e) {
            // console.log(e.target.dataset.list);
            function clearListsActivity() {
                _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.forEach((list) => {
                    const everyList = list;
                    everyList.activeList = false;
                });
            }
            clearListsActivity();
            console.log(_task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList);
            const clickedListNumber = e.target.dataset.list;
            _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList[clickedListNumber].activeList = true;
            _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].initDisplayModule();
            mainWindowBtn.changeActiveListOnClick();
        }
        taskLists.forEach((list) => {
            list.addEventListener('click', changeActiveList);
        });
    }

    function deleteActiveList() {
        function deleteCurrentList() {
            function listActivityCheck(list) {
                return list.activeList === true;
            }
            const currentActiveList =
                _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);
            const currentActiveListIndex =
                _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.indexOf(currentActiveList);
            _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].deleteList(currentActiveListIndex);
            _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].initDisplayModule();
        }
        DOM.deleteListBtn.addEventListener('click', deleteCurrentList);
    }

    return {
        addNewTaskBtnClick,
        tasksListBtnClick,
        createNewListBtnClick,
        createNewListMenuBtnClick,
        changeActiveListOnClick,
        deleteActiveList,
    };
})();
mainWindowBtn.deleteActiveList();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainWindowBtn);


/***/ }),

/***/ "./src/task_data.js":
/*!**************************!*\
  !*** ./src/task_data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DataModule = (() => {
    // all tasks data array
    const tasksList = [];

    // new list factory
    const newList = (title) => {
        const tasks = [];
        const activeList = false;
        return { title, tasks, activeList };
    };

    function createNewList(title) {
        return tasksList.push(newList(title));
    }

    function deleteList(listIndex) {
        return tasksList.splice(listIndex, 1);
    }

    // new task factory
    const newTask = (title, description, on, date) => ({
        title,
        description,
        on,
        date,
    });

    function createNewTaskInTheList(listIndex, title, description, on, date) {
        return tasksList[listIndex].tasks.push(
            newTask(title, description, on, date)
        );
    }

    function deleteTask(listIndex, taskIndex) {
        return tasksList[listIndex].tasks.splice(taskIndex, 1);
    }

    function defaultTasksList() {
        return tasksList.push(newList('My tasks'));
    }

    function defaultTasks() {
        createNewTaskInTheList(
            0,
            'Ongoing task 1',
            'My ongoing task 1',
            true,
            'none'
        );
        createNewTaskInTheList(
            0,
            'Finished task 1',
            'My finished task 1',
            false,
            'none'
        );
    }

    function defaultTasksListActiveStatus() {
        tasksList[0].activeList = true;
    }

    function changeTaskOnStatus(task) {
        return !task.on;
    }

    return {
        tasksList,
        createNewList,
        deleteList,
        createNewTaskInTheList,
        deleteTask,
        defaultTasksList,
        defaultTasks,
        defaultTasksListActiveStatus,
        changeTaskOnStatus,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataModule);


/***/ }),

/***/ "./src/task_window.js":
/*!****************************!*\
  !*** ./src/task_window.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _tasks_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks_field */ "./src/tasks_field.js");




const DOM = (() => {
    const backBtn = document.getElementById('this-task-go-back-btn');
    const taskTitle = document.querySelector('[data-task-title]');
    const taskDescription = document.querySelector('[data-task-description]');
    const taskStatus = document.getElementById('this-task-status');
    const taskDate = document.getElementById('date-value');
    const deleteBtn = document.getElementById('this-task-delete');
    const thisTaskWidnow = document.getElementById('this-task-window');

    return {
        backBtn,
        taskTitle,
        taskDescription,
        taskStatus,
        taskDate,
        deleteBtn,
        thisTaskWidnow,
    };
})();

// TODO this task window functionallity
const taskWindowModule = (() => {
    // TODO thisTaskEdit functionality
    function thisTaskEdit(activeList, taskNumber) {
        const editedActiveList = activeList;
        editedActiveList.tasks[taskNumber].title = DOM.taskTitle.textContent;
        editedActiveList.tasks[taskNumber].descritption =
            DOM.taskDescription.textContent;
        const { taskStatus } = DOM;
        console.log(taskStatus);
        const taskOnStatus =
            taskStatus.options[taskStatus.selectedIndex].value === 'ongoing';
        console.log(taskOnStatus);
        editedActiveList.tasks[taskNumber].on = taskOnStatus;
        editedActiveList.tasks[taskNumber].date = DOM.taskDate.textContent;
        return editedActiveList;
    }

    // TODO thisTaskNumber will be taken from back button data attribute
    function thisActiveListTasksEdit() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.find(listActivityCheck);
        const { taskNumber } = DOM.backBtn.dataset;
        return thisTaskEdit(currentActiveList, taskNumber);
    }

    function closeTaskWindow() {
        return DOM.thisTaskWidnow.classList.remove('show');
    }

    function deleteTaskFromList() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.find(listActivityCheck);
        const currentActiveListIndex =
            _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.indexOf(currentActiveList);
        const { taskNumber } = DOM.backBtn.dataset;
        _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(currentActiveListIndex, taskNumber);
    }

    function deleteTaskFromListBtnClick() {
        DOM.deleteBtn = document.getElementById('this-task-delete');
        if (DOM.deleteBtn) {
            DOM.deleteBtn.addEventListener(
                'click',
                (e) => {
                    console.log(e.target);
                    deleteTaskFromList();
                    closeTaskWindow();
                    _display_data__WEBPACK_IMPORTED_MODULE_1__["default"].displayActiveList();
                    _tasks_field__WEBPACK_IMPORTED_MODULE_2__["default"].initTaskFieldModule();
                },
                false
            );
        }
    }

    function backBtnClick() {
        DOM.backBtn = document.getElementById('this-task-go-back-btn');
        DOM.taskTitle = document.querySelector('[data-task-title]');
        DOM.taskDescription = document.querySelector('[data-task-description]');
        DOM.taskStatus = document.getElementById('this-task-status');
        // const taskStatus = document.getElementById('this-task-status');
        DOM.taskDate = document.getElementById('date-value');
        if (DOM.backBtn) {
            DOM.backBtn.addEventListener(
                'click',
                () => {
                    closeTaskWindow();
                    thisActiveListTasksEdit();
                    _display_data__WEBPACK_IMPORTED_MODULE_1__["default"].displayActiveList();
                    _tasks_field__WEBPACK_IMPORTED_MODULE_2__["default"].initTaskFieldModule();
                },
                false
            );
        }
    }

    return {
        backBtnClick,
        deleteTaskFromListBtnClick,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskWindowModule);


/***/ }),

/***/ "./src/tasks_field.js":
/*!****************************!*\
  !*** ./src/tasks_field.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");


// import taskWindowModule from './task_window';

const DOM = (() => {
    // I have to reassing dynamically created nodes, beacuse
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const tasksElInput = document.querySelectorAll('[data-task-tag]');
    const thisTask = document.querySelectorAll('[data-this-task]');
    const thisTaskWindow = document.getElementById('this-task-window');

    return {
        tasksElInput,
        thisTask,
        thisTaskWindow,
    };
})();

const TaskFieldModule = (() => {
    function openThisTaskWindow() {
        DOM.thisTask = document.querySelectorAll('[data-this-task]');
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);

        DOM.thisTask.forEach((element) => {
            element.addEventListener('click', (e) => {
                const thisTaskNumber = e.target.dataset.taskNumber;
                console.log(currentActiveList);
                DOM.thisTaskWindow.classList.add('show');

                return _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayChosenTaskWindow(
                    currentActiveList,
                    thisTaskNumber
                );
            });
        });
    }

    function changeTaskStatus() {
        DOM.tasksElInput = document.querySelectorAll('[data-task-tag]');

        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);

        DOM.tasksElInput.forEach((element) => {
            element.addEventListener('input', (e) => {
                const { taskNumber } = e.target.dataset;

                if (e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = false;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                    openThisTaskWindow();
                } else if (!e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = true;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                    openThisTaskWindow();
                }
            });
        });
    }

    function initTaskFieldModule() {
        changeTaskStatus();
        openThisTaskWindow();
    }

    return {
        changeTaskStatus,
        openThisTaskWindow,
        initTaskFieldModule,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskFieldModule);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_window_btn_clicks */ "./src/main_window_btn_clicks.js");
/* harmony import */ var _create_new_list_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_new_list_window */ "./src/create_new_list_window.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
/* harmony import */ var _tasks_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks_field */ "./src/tasks_field.js");
/* harmony import */ var _add_new_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add_new_task */ "./src/add_new_task.js");
/* harmony import */ var _task_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task_window */ "./src/task_window.js");
// import _ from 'lodash';









// import { formatDistance, subDays } from 'date-fns';

_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].addNewTaskBtnClick();
_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].tasksListBtnClick();
_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].createNewListBtnClick();
_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].createNewListMenuBtnClick();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].closeWindow();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].createNewList();

_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasksList();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasks();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasksListActiveStatus();
// DataModule.createNewTaskInTheList(
//     0,
//     'My new task',
//     'my new task description',
//     true,
//     'any'
// );
// DataModule.createNewList('list1');
// DataModule.createNewList('list2');
// DataModule.createNewList('list3');
// DataModule.createNewList('list4');

// console.log(DataModule.tasksList);

_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListMain();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListWindow();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].displayActiveList();
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].changeTaskStatus();
// displayModule.displayChosenTaskWindow(DataModule.tasksList[0], 0);
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].openThisTaskWindow();
_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].changeActiveListOnClick();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDcUI7QUFDZ0M7QUFDQTtBQUNoQjtBQUNNO0FBQ0M7QUFDRDtBQUNFOztBQUU3QyxZQUFZLDBCQUEwQjs7QUFFdEMsa0ZBQWdDO0FBQ2hDLGlGQUErQjtBQUMvQixxRkFBbUM7QUFDbkMseUZBQXVDO0FBQ3ZDLDJFQUF5QjtBQUN6Qiw2RUFBMkI7O0FBRTNCLG1FQUEyQjtBQUMzQiwrREFBdUI7QUFDdkIsK0VBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0VBQTBCO0FBQzFCLG9FQUE0QjtBQUM1Qix1RUFBK0I7QUFDL0IscUVBQWdDO0FBQ2hDO0FBQ0EsdUVBQWtDO0FBQ2xDLHVGQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9hZGRfbmV3X3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jcmVhdGVfbmV3X2xpc3Rfd2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvZGlzcGxheV9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFpbl93aW5kb3dfYnRuX2NsaWNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tfZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tfd2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGFza3NfZmllbGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIG1heC13aWR0aDozMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYTpob3ZlcixcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnRhc2tzLWZpZWxkLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCA1cHg7XFxufVxcbi8qIGxpbmUgdGhyb3V0aCB0aGUgdGV4dCBpZiBpbnB1dCBpcyBjaGVja2VkICovXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uby10YXNrcyA+IGxhYmVsLFxcbi5mLXRhc2tzID4gbGFiZWwge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLyogLm8tdGFza3M6aG92ZXIsICovXFxuLm8tdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uby10YXNrcyA+IGlucHV0OmhvdmVyLFxcbi8qIC5mLXRhc2tzOmhvdmVyLCAqL1xcbi5mLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLmYtdGFza3MgPiBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib3R0b20tZWxlbWVudHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4gPiBpIHtcXG4gICAgbWFyZ2luOiA1cHggNXB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2IHtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2ID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogcG9wLXVwIG1lbnUgZWxlbWVudHMgc3R5bGluZyAqL1xcblxcbi8qIGNyZWF0ZSBuZXcgbGlzdCBtZW51ICovXFxuXFxuLm5ldy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gaDEge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3cgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiBjcmVhdGUgbmV3IHRhc2sgbWVudSAqL1xcblxcbi5uZXctdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LW1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtbmFtZSA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1kZXNjcmlwdGlvbiA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiB0YXNrcyBsaXN0IG1lbnUgc3R5bGluZyAqL1xcblxcbi50YXNrcy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiBhLFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhIHtcXG4gICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gLmNyZWF0ZS1uZXctbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi8qIGN1cnJlbnQgdGFzayBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGhpcy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmdvLWJhY2sgPiBpIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbn1cXG5cXG4uZ28tYmFjayA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aGlzLXRhc2stbmFtZSA+IGgxLFxcbi50aGlzLXRhc2stZGVzY3JpcHRpb24gPiBwLFxcbi50aGlzLXRhc2stc3RhdHVzID4gbGFiZWwsXFxuLnRoaXMtdGFzay1kYXRlID4gaSB7XFxuICAgIG1hcmdpbjogNXB4XFxufVxcblxcbi50aGlzLXRhc2stZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNob3cgY2xhc3MgKi9cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJ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QU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0dBRUcsa0JBQWtCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsV0FBVztBQUNmOzs7QUFHQSw4QkFBOEI7O0FBRTlCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBtYXgtd2lkdGg6MzAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5oZWFkZXItbWVudSA+IGEsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXItbWVudSA+IGE6aG92ZXIsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGNvbG9yOmJsdWU7XFxufVxcblxcbi50YXNrcy1maWVsZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbn1cXG4vKiBsaW5lIHRocm91dGggdGhlIHRleHQgaWYgaW5wdXQgaXMgY2hlY2tlZCAqL1xcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm8tdGFza3MgPiBsYWJlbCxcXG4uZi10YXNrcyA+IGxhYmVsIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi8qIC5vLXRhc2tzOmhvdmVyLCAqL1xcbi5vLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLm8tdGFza3MgPiBpbnB1dDpob3ZlcixcXG4vKiAuZi10YXNrczpob3ZlciwgKi9cXG4uZi10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5mLXRhc2tzID4gaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm90dG9tLWVsZW1lbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuID4gaSB7XFxuICAgIG1hcmdpbjogNXB4IDVweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiA+IGkge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBvcC11cCBtZW51IGVsZW1lbnRzIHN0eWxpbmcgKi9cXG5cXG4vKiBjcmVhdGUgbmV3IGxpc3QgbWVudSAqL1xcblxcbi5uZXctbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGgxIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93ID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogY3JlYXRlIG5ldyB0YXNrIG1lbnUgKi9cXG5cXG4ubmV3LXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1tZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LW5hbWUgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogdGFza3MgbGlzdCBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGFza3MtbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gYSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IC5jcmVhdGUtbmV3LWxpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiBjdXJyZW50IHRhc2sgbWVudSBzdHlsaW5nICovXFxuXFxuLnRoaXMtdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5nby1iYWNrID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG59XFxuXFxuLmdvLWJhY2sgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLW5hbWUgPiBoMSxcXG4udGhpcy10YXNrLWRlc2NyaXB0aW9uID4gcCxcXG4udGhpcy10YXNrLXN0YXR1cyA+IGxhYmVsLFxcbi50aGlzLXRhc2stZGF0ZSA+IGkge1xcbiAgICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhpcy10YXNrLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUgPiBpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBzaG93IGNsYXNzICovXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBUYXNrRmllbGRNb2R1bGUgZnJvbSAnLi90YXNrc19maWVsZCc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgLy8gSSBoYXZlIHRvIHJlYXNzaW5nIGR5bmFtaWNhbGx5IGNyZWF0ZWQgbm9kZXMsIGJlY2F1c2VcbiAgICAvLyBvZiBpbml0aWFsIHZhbHVlIGluIHRoZSBET00gZWxlbWVudCBpcyBldmFsdWF0ZWQgdXBvblxuICAgIC8vIGZpcnN0IGV4cGFuZGluZ1xuICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLW5hbWUnKTtcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay13aW5kb3cnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1Rhc2tOYW1lLFxuICAgICAgICBuZXdUYXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHNhdmVCdG4sXG4gICAgICAgIG5ld1Rhc2tXaW5kb3csXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IE5ld1Rhc2tNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXQoKSB7XG4gICAgICAgIERPTS5uZXdUYXNrTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBET00ubmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VGFzaygpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9IERhdGFNb2R1bGUudGFza3NMaXN0LmZpbmQobGlzdEFjdGl2aXR5Q2hlY2spO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0SW5kZXggPVxuICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3QuaW5kZXhPZihjdXJyZW50QWN0aXZlTGlzdCk7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBET00ubmV3VGFza05hbWUudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IERPTS5uZXdUYXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGlmICh0YXNrTmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIERhdGFNb2R1bGUuY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlTGlzdEluZGV4LFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICdub25lJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcbiAgICAgICAgVGFza0ZpZWxkTW9kdWxlLmNoYW5nZVRhc2tTdGF0dXMoKTtcbiAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICBET00ubmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgRE9NLnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1Rhc2soKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IG5ld1Rhc2sgfTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrTW9kdWxlO1xuIiwiaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IG1haW5XaW5kb3dCdG4gZnJvbSAnLi9tYWluX3dpbmRvd19idG5fY2xpY2tzJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0LXdpbmRvdycpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJ0bicpO1xuICAgIGNvbnN0IHJlYWR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWR5LWJ0bicpO1xuICAgIGNvbnN0IG5ld0xpc3ROYW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC1uYW1lJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdMaXN0V2luZG93LFxuICAgICAgICBjbG9zZUJ0bixcbiAgICAgICAgcmVhZHlCdG4sXG4gICAgICAgIG5ld0xpc3ROYW1lVGV4dCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgTmV3TGlzdE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvc2VXaW5kb3coKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgRE9NLm5ld0xpc3RXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIERPTS5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0KCkge1xuICAgICAgICBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICAgICAgICAgRE9NLm5ld0xpc3ROYW1lVGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgRE9NLm5ld0xpc3RXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICBpZiAoRE9NLm5ld0xpc3ROYW1lVGV4dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUpO1xuICAgICAgICAgICAgZGlzcGxheU1vZHVsZS50YXNrTGlzdE1haW4oKTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUudGFza0xpc3RXaW5kb3coKTtcbiAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIG1haW5XaW5kb3dCdG4uY2hhbmdlQWN0aXZlTGlzdE9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBET00ucmVhZHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY2xvc2VXaW5kb3csIGNyZWF0ZU5ld0xpc3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0xpc3RNb2R1bGU7XG4iLCJpbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5pbXBvcnQgdGFza1dpbmRvd01vZHVsZSBmcm9tICcuL3Rhc2tfd2luZG93JztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MnKTtcbiAgICBjb25zdCB0YXNrTGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzJ1xuICAgICk7XG4gICAgY29uc3QgdGFza3NGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1maWVsZCcpO1xuICAgIGNvbnN0IHRhc2tzRmllbGRPbmdvaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWZpZWxkLW9uZ29pbmcnKTtcbiAgICBjb25zdCB0YXNrc0ZpZWxkRmluaXNoZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtZmllbGQtZmluaXNoZWQnKTtcbiAgICBjb25zdCB0YXNrTGlzdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXN0LXRhZ10nKTtcbiAgICBjb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay13aW5kb3cnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlck1lbnUsXG4gICAgICAgIHRhc2tMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0ZpZWxkLFxuICAgICAgICB0YXNrc0ZpZWxkT25nb2luZyxcbiAgICAgICAgdGFza3NGaWVsZEZpbmlzaGVkLFxuICAgICAgICB0YXNrTGlzdFRhZ3MsXG4gICAgICAgIG5ld1Rhc2tXaW5kb3csXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRhc2tMaXN0TWFpbigpIHtcbiAgICAgICAgRE9NLmhlYWRlck1lbnUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0LmZvckVhY2goKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbmV3TGlzdC5ocmVmID0gJyMnO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3RUYWcgPSAnJztcbiAgICAgICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRpdGxlfWA7XG4gICAgICAgICAgICBpZiAobGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5jbGFzc05hbWUgPSAnYWN0aXZlLWxpc3QnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBET00uaGVhZGVyTWVudS5hcHBlbmRDaGlsZChuZXdMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXJNZW51O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrTGlzdFdpbmRvdygpIHtcbiAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0VGFnID0gJyc7XG4gICAgICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gYCR7bGlzdC50aXRsZX1gO1xuICAgICAgICAgICAgaWYgKGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ2FjdGl2ZS1saXN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tMaXN0V2luZG93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKSB7XG4gICAgICAgIGNvbnN0IG9uZ29pbmdUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb25nb2luZ1Rhc2tzSDIudGV4dENvbnRlbnQgPSAnT25nb2luZyB0YXNrcyc7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5hcHBlbmRDaGlsZChvbmdvaW5nVGFza3NIMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUZpbmlzaGVkVGFza3NIMigpIHtcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZmluaXNoZWRUYXNrc0gyLnRleHRDb250ZW50ID0gJ0ZpbmlzaGVkIHRhc2tzJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChmaW5pc2hlZFRhc2tzSDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlPbmdvaW5nVGFza3MobGlzdCkge1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tPbmdvaW5nLmRhdGFzZXQuc3RhdHVzID0gJ29uZ29pbmcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrT25nb2luZy5kYXRhc2V0LnRoaXNUYXNrID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmNsYXNzTmFtZSA9ICdvLXRhc2tzJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrT25nb2luZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnN0YXR1cyA9ICdvbmdvaW5nJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0Lm5hbWUgPSBgby10YXNrJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmRhdGFzZXQudGFza1RhZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmNsYXNzTmFtZSA9ICd0YXNrcyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGBvLXRhc2ske2luZGV4fWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5kYXRhc2V0LnRoaXNUYXNrID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmFwcGVuZENoaWxkKG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZE9uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRPbmdvaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGaW5pc2hlZFRhc2tzKGxpc3QpIHtcbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2sub24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0ZpbmlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tGaW5pc2hlZC5kYXRhc2V0LnN0YXR1cyA9ICdmaW5pc2hlZCc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC50aGlzVGFzayA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuY2xhc3NOYW1lID0gJ2YtdGFza3MnO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGaW5pc2hlZElucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrRmluaXNoZWRJbnB1dC5kYXRhc2V0LnN0YXR1cyA9ICdmaW5pc2hlZCc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0Lm5hbWUgPSBgZi10YXNrJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC5kYXRhc2V0LnRhc2tUYWcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tzJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgYGYtdGFzayR7aW5kZXh9YFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGhpc1Rhc2sgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZEZpbmlzaGVkLmFwcGVuZENoaWxkKG5ld1Rhc2tGaW5pc2hlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZEZpbmlzaGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWN0aXZlTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgcmVzZXRUYXNrcygpO1xuICAgICAgICBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheU9uZ29pbmdUYXNrcyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGRpc3BsYXlGaW5pc2hlZFRhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheUZpbmlzaGVkVGFza3MoY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaG9zZW5UYXNrV2luZG93KGFjdGl2ZUxpc3QsIHRhc2tOdW1iZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gdGFza1dpbmRvd0NsZWFyKCkge1xuICAgICAgICAgICAgRE9NLm5ld1Rhc2tXaW5kb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnb0JhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ29CYWNrQnRuLmlkID0gJ3RoaXMtdGFzay1nby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmNsYXNzTmFtZSA9ICdnby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgIGA8aSBpZD1cInRoaXMtdGFzay1nby1iYWNrLWJ0blwiIGRhdGEtdGFzay1udW1iZXI9JyR7dGFza051bWJlcn0nIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdGhpc1Rhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5pZCA9ICd0aGlzLXRhc2stbmFtZSc7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5jbGFzc05hbWUgPSAndGhpcy10YXNrLW5hbWUnO1xuICAgICAgICBjb25zdCB0aGlzVGFza05hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRoaXNUYXNrTmFtZVRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgdGhpc1Rhc2tOYW1lVGl0bGUuZGF0YXNldC50YXNrVGl0bGUgPSAnJztcbiAgICAgICAgdGhpc1Rhc2tOYW1lVGl0bGUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLnRpdGxlfWA7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzVGFza05hbWVUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGhpc1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uLmlkID0gJ3RoaXMtdGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3RoaXMtdGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0LmRhdGFzZXQudGFza0Rlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYCR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0KTtcblxuICAgICAgICBjb25zdCB0aGlzVGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFza1N0YXR1cy5pZCA9ICd0aGlzLXRhc2stc3RhdHVzLWNvbnRhaW5lcic7XG4gICAgICAgIHRoaXNUYXNrU3RhdHVzLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stc3RhdHVzJztcblxuICAgICAgICBjb25zdCB0aGlzVGFza09uID0gYWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tUYXNrT24oKSB7XG4gICAgICAgICAgICBpZiAodGhpc1Rhc2tPbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIm9uZ29pbmdcIiBzZWxlY3RlZD5PbmdvaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmluaXNoZWRcIj5GaW5pc2hlZDwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCJvbmdvaW5nXCI+T25nb2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbmlzaGVkXCIgc2VsZWN0ZWQ+RmluaXNoZWQ8L29wdGlvbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1Rhc2tTdGF0dXMuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgYDxsYWJlbCBmb3I9XCJ0aGlzLXRhc2stc3RhdHVzXCI+VGFzayBzdGF0dXM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRoaXMtdGFzay1zdGF0dXNcIiBpZD1cInRoaXMtdGFzay1zdGF0dXNcIj5cbiAgICAgICAgICAgICR7Y2hlY2tUYXNrT24oKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PmBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0aGlzVGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmlkID0gJ3RoaXMtdGFzay1kYXRlJztcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGF0ZSc7XG4gICAgICAgIHRoaXNUYXNrRGF0ZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgICBgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItYWx0XCI+PC9pPiBcbiAgICAgICAgICAgIDxwIGlkPVwiZGF0ZS12YWx1ZVwiPiR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kYXRlfTwvcD5gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5pZCA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXG4gICAgICAgICk7XG5cbiAgICAgICAgdGFza1dpbmRvd0NsZWFyKCk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGdvQmFja0J0bik7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrTmFtZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBET00ubmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZCh0aGlzVGFza1N0YXR1cyk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGF0ZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tXaW5kb3dNb2R1bGUuYmFja0J0bkNsaWNrKCk7XG4gICAgICAgIHRhc2tXaW5kb3dNb2R1bGUuZGVsZXRlVGFza0Zyb21MaXN0QnRuQ2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0RGlzcGxheU1vZHVsZSgpIHtcbiAgICAgICAgdGFza0xpc3RNYWluKCk7XG4gICAgICAgIHRhc2tMaXN0V2luZG93KCk7XG4gICAgICAgIGRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8gYWRkIGNob3NlblRhc2tXaW5kb3cgZnVuY3Rpb25hbGl0eSBmb3IgbmV3bHkgY3JlYXRlZCBsaXN0cyBhZnRlciBkZWxldGVcbiAgICAgICAgLy8gZGlzcGxheUNob3NlblRhc2tXaW5kb3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrTGlzdE1haW4sXG4gICAgICAgIHRhc2tMaXN0V2luZG93LFxuICAgICAgICBkaXNwbGF5QWN0aXZlTGlzdCxcbiAgICAgICAgZGlzcGxheUNob3NlblRhc2tXaW5kb3csXG4gICAgICAgIGluaXREaXNwbGF5TW9kdWxlLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW9kdWxlO1xuIiwiaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay13aW5kb3cnKTtcbiAgICBjb25zdCBuZXdUYXNrV2luZG93TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay13aW5kb3ctbWVudScpO1xuICAgIGNvbnN0IHRhc2tzTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1saXN0LWJ0bicpO1xuICAgIGNvbnN0IHRhc2tzTGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1saXN0LXdpbmRvdycpO1xuICAgIGNvbnN0IHRhc2tzTGlzdFdpbmRvd01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgJ3Rhc2tzLWxpc3Qtd2luZG93LW1lbnUnXG4gICAgKTtcbiAgICBjb25zdCBjcmVhdGVOZXdMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1uZXctbGlzdCcpO1xuICAgIGNvbnN0IG5ld0xpc3RXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3Qtd2luZG93Jyk7XG4gICAgY29uc3QgY3JlYXRlTmV3TGlzdE1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgJ2NyZWF0ZS1uZXctbGlzdC1tZW51J1xuICAgICk7XG4gICAgY29uc3QgdGFza0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGlzdC10YWddJyk7XG4gICAgY29uc3QgZGVsZXRlTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtbGlzdC1idG4nKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5XaW5kb3cod2luZG93KSB7XG4gICAgICAgIHdpbmRvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVGFza0J0bixcbiAgICAgICAgbmV3VGFza1dpbmRvdyxcbiAgICAgICAgbmV3VGFza1dpbmRvd01lbnUsXG4gICAgICAgIHRhc2tzTGlzdEJ0bixcbiAgICAgICAgdGFza3NMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0xpc3RXaW5kb3dNZW51LFxuICAgICAgICBjcmVhdGVOZXdMaXN0QnRuLFxuICAgICAgICBuZXdMaXN0V2luZG93LFxuICAgICAgICBjcmVhdGVOZXdMaXN0TWVudUJ0bixcbiAgICAgICAgb3BlbldpbmRvdyxcbiAgICAgICAgdGFza0xpc3RzLFxuICAgICAgICBkZWxldGVMaXN0QnRuLFxuICAgIH07XG59KSgpO1xuXG4vLyBjaGVja3BvaW50XG5jb25zdCBtYWluV2luZG93QnRuID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrQnRuQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG9wZW5OZXdUYXNrV2luZG93ID0gKCkgPT4gRE9NLm9wZW5XaW5kb3coRE9NLm5ld1Rhc2tXaW5kb3cpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTmV3VGFza1dpbmRvdyhlKSB7XG4gICAgICAgICAgICBpZiAoIURPTS5uZXdUYXNrV2luZG93TWVudS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBET00ubmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBET00uYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OZXdUYXNrV2luZG93KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbG9zZU5ld1Rhc2tXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tzTGlzdEJ0bkNsaWNrKCkge1xuICAgICAgICBjb25zdCBvcGVuVGFza3NMaXN0V2luZG93ID0gKCkgPT4gRE9NLm9wZW5XaW5kb3coRE9NLnRhc2tzTGlzdFdpbmRvdyk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VUYXNrc0xpc3QoZSkge1xuICAgICAgICAgICAgaWYgKCFET00udGFza3NMaXN0V2luZG93TWVudS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBET00udGFza3NMaXN0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIERPTS50YXNrc0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza3NMaXN0V2luZG93KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbG9zZVRhc2tzTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdEJ0bkNsaWNrKCkge1xuICAgICAgICBjb25zdCBvcGVuTmV3TGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS5uZXdMaXN0V2luZG93KTtcblxuICAgICAgICBET00uY3JlYXRlTmV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OZXdMaXN0V2luZG93KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrKCkge1xuICAgICAgICBjb25zdCBvcGVuTmV3TGlzdFdpbmRvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIERPTS50YXNrc0xpc3RXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgRE9NLm9wZW5XaW5kb3coRE9NLm5ld0xpc3RXaW5kb3cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIERPTS5jcmVhdGVOZXdMaXN0TWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OZXdMaXN0V2luZG93KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVMaXN0T25DbGljaygpIHtcbiAgICAgICAgY29uc3QgdGFza0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGlzdC10YWddJyk7XG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUxpc3QoZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5saXN0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyTGlzdHNBY3Rpdml0eSgpIHtcbiAgICAgICAgICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5TGlzdCA9IGxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGV2ZXJ5TGlzdC5hY3RpdmVMaXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckxpc3RzQWN0aXZpdHkoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKERhdGFNb2R1bGUudGFza3NMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRMaXN0TnVtYmVyID0gZS50YXJnZXQuZGF0YXNldC5saXN0O1xuICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3RbY2xpY2tlZExpc3ROdW1iZXJdLmFjdGl2ZUxpc3QgPSB0cnVlO1xuICAgICAgICAgICAgZGlzcGxheU1vZHVsZS5pbml0RGlzcGxheU1vZHVsZSgpO1xuICAgICAgICAgICAgbWFpbldpbmRvd0J0bi5jaGFuZ2VBY3RpdmVMaXN0T25DbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQWN0aXZlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFjdGl2ZUxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUN1cnJlbnRMaXN0KCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9XG4gICAgICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdEluZGV4ID1cbiAgICAgICAgICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5pbmRleE9mKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgICAgIERhdGFNb2R1bGUuZGVsZXRlTGlzdChjdXJyZW50QWN0aXZlTGlzdEluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuaW5pdERpc3BsYXlNb2R1bGUoKTtcbiAgICAgICAgfVxuICAgICAgICBET00uZGVsZXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUN1cnJlbnRMaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGROZXdUYXNrQnRuQ2xpY2ssXG4gICAgICAgIHRhc2tzTGlzdEJ0bkNsaWNrLFxuICAgICAgICBjcmVhdGVOZXdMaXN0QnRuQ2xpY2ssXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RNZW51QnRuQ2xpY2ssXG4gICAgICAgIGNoYW5nZUFjdGl2ZUxpc3RPbkNsaWNrLFxuICAgICAgICBkZWxldGVBY3RpdmVMaXN0LFxuICAgIH07XG59KSgpO1xubWFpbldpbmRvd0J0bi5kZWxldGVBY3RpdmVMaXN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5XaW5kb3dCdG47XG4iLCJjb25zdCBEYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgICAvLyBhbGwgdGFza3MgZGF0YSBhcnJheVxuICAgIGNvbnN0IHRhc2tzTGlzdCA9IFtdO1xuXG4gICAgLy8gbmV3IGxpc3QgZmFjdG9yeVxuICAgIGNvbnN0IG5ld0xpc3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICAgICAgY29uc3QgYWN0aXZlTGlzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgdGFza3MsIGFjdGl2ZUxpc3QgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0LnB1c2gobmV3TGlzdCh0aXRsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUxpc3QobGlzdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3Quc3BsaWNlKGxpc3RJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gbmV3IHRhc2sgZmFjdG9yeVxuICAgIGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBvbiwgZGF0ZSkgPT4gKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBvbixcbiAgICAgICAgZGF0ZSxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QobGlzdEluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIG9uLCBkYXRlKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3RbbGlzdEluZGV4XS50YXNrcy5wdXNoKFxuICAgICAgICAgICAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIG9uLCBkYXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2sobGlzdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdFtsaXN0SW5kZXhdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUYXNrc0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3QucHVzaChuZXdMaXN0KCdNeSB0YXNrcycpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VGFza3MoKSB7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgJ09uZ29pbmcgdGFzayAxJyxcbiAgICAgICAgICAgICdNeSBvbmdvaW5nIHRhc2sgMScsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgJ0ZpbmlzaGVkIHRhc2sgMScsXG4gICAgICAgICAgICAnTXkgZmluaXNoZWQgdGFzayAxJyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRhc2tzTGlzdEFjdGl2ZVN0YXR1cygpIHtcbiAgICAgICAgdGFza3NMaXN0WzBdLmFjdGl2ZUxpc3QgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRhc2tPblN0YXR1cyh0YXNrKSB7XG4gICAgICAgIHJldHVybiAhdGFzay5vbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrc0xpc3QsXG4gICAgICAgIGNyZWF0ZU5ld0xpc3QsXG4gICAgICAgIGRlbGV0ZUxpc3QsXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QsXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGRlZmF1bHRUYXNrc0xpc3QsXG4gICAgICAgIGRlZmF1bHRUYXNrcyxcbiAgICAgICAgZGVmYXVsdFRhc2tzTGlzdEFjdGl2ZVN0YXR1cyxcbiAgICAgICAgY2hhbmdlVGFza09uU3RhdHVzLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhTW9kdWxlO1xuIiwiaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IFRhc2tGaWVsZE1vZHVsZSBmcm9tICcuL3Rhc2tzX2ZpZWxkJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1nby1iYWNrLWJ0bicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stdGl0bGVdJyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1kZXNjcmlwdGlvbl0nKTtcbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1zdGF0dXMnKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXZhbHVlJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1kZWxldGUnKTtcbiAgICBjb25zdCB0aGlzVGFza1dpZG5vdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2std2luZG93Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrQnRuLFxuICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgdGFza1N0YXR1cyxcbiAgICAgICAgdGFza0RhdGUsXG4gICAgICAgIGRlbGV0ZUJ0bixcbiAgICAgICAgdGhpc1Rhc2tXaWRub3csXG4gICAgfTtcbn0pKCk7XG5cbi8vIFRPRE8gdGhpcyB0YXNrIHdpbmRvdyBmdW5jdGlvbmFsbGl0eVxuY29uc3QgdGFza1dpbmRvd01vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy8gVE9ETyB0aGlzVGFza0VkaXQgZnVuY3Rpb25hbGl0eVxuICAgIGZ1bmN0aW9uIHRoaXNUYXNrRWRpdChhY3RpdmVMaXN0LCB0YXNrTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZEFjdGl2ZUxpc3QgPSBhY3RpdmVMaXN0O1xuICAgICAgICBlZGl0ZWRBY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLnRpdGxlID0gRE9NLnRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgZWRpdGVkQWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kZXNjcml0cHRpb24gPVxuICAgICAgICAgICAgRE9NLnRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgeyB0YXNrU3RhdHVzIH0gPSBET007XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tTdGF0dXMpO1xuICAgICAgICBjb25zdCB0YXNrT25TdGF0dXMgPVxuICAgICAgICAgICAgdGFza1N0YXR1cy5vcHRpb25zW3Rhc2tTdGF0dXMuc2VsZWN0ZWRJbmRleF0udmFsdWUgPT09ICdvbmdvaW5nJztcbiAgICAgICAgY29uc29sZS5sb2codGFza09uU3RhdHVzKTtcbiAgICAgICAgZWRpdGVkQWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbiA9IHRhc2tPblN0YXR1cztcbiAgICAgICAgZWRpdGVkQWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kYXRlID0gRE9NLnRhc2tEYXRlLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gZWRpdGVkQWN0aXZlTGlzdDtcbiAgICB9XG5cbiAgICAvLyBUT0RPIHRoaXNUYXNrTnVtYmVyIHdpbGwgYmUgdGFrZW4gZnJvbSBiYWNrIGJ1dHRvbiBkYXRhIGF0dHJpYnV0ZVxuICAgIGZ1bmN0aW9uIHRoaXNBY3RpdmVMaXN0VGFza3NFZGl0KCkge1xuICAgICAgICBmdW5jdGlvbiBsaXN0QWN0aXZpdHlDaGVjayhsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIGNvbnN0IHsgdGFza051bWJlciB9ID0gRE9NLmJhY2tCdG4uZGF0YXNldDtcbiAgICAgICAgcmV0dXJuIHRoaXNUYXNrRWRpdChjdXJyZW50QWN0aXZlTGlzdCwgdGFza051bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrV2luZG93KCkge1xuICAgICAgICByZXR1cm4gRE9NLnRoaXNUYXNrV2lkbm93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RBY3Rpdml0eUNoZWNrKGxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3QgPSBEYXRhTW9kdWxlLnRhc2tzTGlzdC5maW5kKGxpc3RBY3Rpdml0eUNoZWNrKTtcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3RJbmRleCA9XG4gICAgICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5pbmRleE9mKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgY29uc3QgeyB0YXNrTnVtYmVyIH0gPSBET00uYmFja0J0bi5kYXRhc2V0O1xuICAgICAgICBEYXRhTW9kdWxlLmRlbGV0ZVRhc2soY3VycmVudEFjdGl2ZUxpc3RJbmRleCwgdGFza051bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21MaXN0QnRuQ2xpY2soKSB7XG4gICAgICAgIERPTS5kZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLWRlbGV0ZScpO1xuICAgICAgICBpZiAoRE9NLmRlbGV0ZUJ0bikge1xuICAgICAgICAgICAgRE9NLmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrRnJvbUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VUYXNrV2luZG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgVGFza0ZpZWxkTW9kdWxlLmluaXRUYXNrRmllbGRNb2R1bGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFja0J0bkNsaWNrKCkge1xuICAgICAgICBET00uYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2stZ28tYmFjay1idG4nKTtcbiAgICAgICAgRE9NLnRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stdGl0bGVdJyk7XG4gICAgICAgIERPTS50YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWRlc2NyaXB0aW9uXScpO1xuICAgICAgICBET00udGFza1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2stc3RhdHVzJyk7XG4gICAgICAgIC8vIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLXN0YXR1cycpO1xuICAgICAgICBET00udGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS12YWx1ZScpO1xuICAgICAgICBpZiAoRE9NLmJhY2tCdG4pIHtcbiAgICAgICAgICAgIERPTS5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlVGFza1dpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzQWN0aXZlTGlzdFRhc2tzRWRpdCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tGaWVsZE1vZHVsZS5pbml0VGFza0ZpZWxkTW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tCdG5DbGljayxcbiAgICAgICAgZGVsZXRlVGFza0Zyb21MaXN0QnRuQ2xpY2ssXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tXaW5kb3dNb2R1bGU7XG4iLCJpbXBvcnQgZGlzcGxheU1vZHVsZSBmcm9tICcuL2Rpc3BsYXlfZGF0YSc7XG5pbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG4vLyBpbXBvcnQgdGFza1dpbmRvd01vZHVsZSBmcm9tICcuL3Rhc2tfd2luZG93JztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICAvLyBJIGhhdmUgdG8gcmVhc3NpbmcgZHluYW1pY2FsbHkgY3JlYXRlZCBub2RlcywgYmVhY3VzZVxuICAgIC8vIG9mIGluaXRpYWwgdmFsdWUgaW4gdGhlIERPTSBlbGVtZW50IGlzIGV2YWx1YXRlZCB1cG9uXG4gICAgLy8gZmlyc3QgZXhwYW5kaW5nXG4gICAgY29uc3QgdGFza3NFbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFzay10YWddJyk7XG4gICAgY29uc3QgdGhpc1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aGlzLXRhc2tdJyk7XG4gICAgY29uc3QgdGhpc1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLXdpbmRvdycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza3NFbElucHV0LFxuICAgICAgICB0aGlzVGFzayxcbiAgICAgICAgdGhpc1Rhc2tXaW5kb3csXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IFRhc2tGaWVsZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb3BlblRoaXNUYXNrV2luZG93KCkge1xuICAgICAgICBET00udGhpc1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aGlzLXRhc2tdJyk7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RBY3Rpdml0eUNoZWNrKGxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3QgPSBEYXRhTW9kdWxlLnRhc2tzTGlzdC5maW5kKGxpc3RBY3Rpdml0eUNoZWNrKTtcblxuICAgICAgICBET00udGhpc1Rhc2suZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc1Rhc2tOdW1iZXIgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tOdW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgICAgIERPTS50aGlzVGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheU1vZHVsZS5kaXNwbGF5Q2hvc2VuVGFza1dpbmRvdyhcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNUYXNrTnVtYmVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUYXNrU3RhdHVzKCkge1xuICAgICAgICBET00udGFza3NFbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFzay10YWddJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9IERhdGFNb2R1bGUudGFza3NMaXN0LmZpbmQobGlzdEFjdGl2aXR5Q2hlY2spO1xuXG4gICAgICAgIERPTS50YXNrc0VsSW5wdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YXNrTnVtYmVyIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1vZHVsZS5kaXNwbGF5QWN0aXZlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUYXNrU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgb3BlblRoaXNUYXNrV2luZG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5UaGlzVGFza1dpbmRvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0VGFza0ZpZWxkTW9kdWxlKCkge1xuICAgICAgICBjaGFuZ2VUYXNrU3RhdHVzKCk7XG4gICAgICAgIG9wZW5UaGlzVGFza1dpbmRvdygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5nZVRhc2tTdGF0dXMsXG4gICAgICAgIG9wZW5UaGlzVGFza1dpbmRvdyxcbiAgICAgICAgaW5pdFRhc2tGaWVsZE1vZHVsZSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0ZpZWxkTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtYWluV2luZG93QnRuIGZyb20gJy4vbWFpbl93aW5kb3dfYnRuX2NsaWNrcyc7XG5pbXBvcnQgTmV3TGlzdE1vZHVsZSBmcm9tICcuL2NyZWF0ZV9uZXdfbGlzdF93aW5kb3cnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IFRhc2tGaWVsZE1vZHVsZSBmcm9tICcuL3Rhc2tzX2ZpZWxkJztcbmltcG9ydCBOZXdUYXNrTW9kdWxlIGZyb20gJy4vYWRkX25ld190YXNrJztcbmltcG9ydCB0YXNrV2luZG93TW9kdWxlIGZyb20gJy4vdGFza193aW5kb3cnO1xuXG4vLyBpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxubWFpbldpbmRvd0J0bi5hZGROZXdUYXNrQnRuQ2xpY2soKTtcbm1haW5XaW5kb3dCdG4udGFza3NMaXN0QnRuQ2xpY2soKTtcbm1haW5XaW5kb3dCdG4uY3JlYXRlTmV3TGlzdEJ0bkNsaWNrKCk7XG5tYWluV2luZG93QnRuLmNyZWF0ZU5ld0xpc3RNZW51QnRuQ2xpY2soKTtcbk5ld0xpc3RNb2R1bGUuY2xvc2VXaW5kb3coKTtcbk5ld0xpc3RNb2R1bGUuY3JlYXRlTmV3TGlzdCgpO1xuXG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrc0xpc3QoKTtcbkRhdGFNb2R1bGUuZGVmYXVsdFRhc2tzKCk7XG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrc0xpc3RBY3RpdmVTdGF0dXMoKTtcbi8vIERhdGFNb2R1bGUuY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbi8vICAgICAwLFxuLy8gICAgICdNeSBuZXcgdGFzaycsXG4vLyAgICAgJ215IG5ldyB0YXNrIGRlc2NyaXB0aW9uJyxcbi8vICAgICB0cnVlLFxuLy8gICAgICdhbnknXG4vLyApO1xuLy8gRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KCdsaXN0MScpO1xuLy8gRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KCdsaXN0MicpO1xuLy8gRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KCdsaXN0MycpO1xuLy8gRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KCdsaXN0NCcpO1xuXG4vLyBjb25zb2xlLmxvZyhEYXRhTW9kdWxlLnRhc2tzTGlzdCk7XG5cbmRpc3BsYXlNb2R1bGUudGFza0xpc3RNYWluKCk7XG5kaXNwbGF5TW9kdWxlLnRhc2tMaXN0V2luZG93KCk7XG5kaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG5UYXNrRmllbGRNb2R1bGUuY2hhbmdlVGFza1N0YXR1cygpO1xuLy8gZGlzcGxheU1vZHVsZS5kaXNwbGF5Q2hvc2VuVGFza1dpbmRvdyhEYXRhTW9kdWxlLnRhc2tzTGlzdFswXSwgMCk7XG5UYXNrRmllbGRNb2R1bGUub3BlblRoaXNUYXNrV2luZG93KCk7XG5tYWluV2luZG93QnRuLmNoYW5nZUFjdGl2ZUxpc3RPbkNsaWNrKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=