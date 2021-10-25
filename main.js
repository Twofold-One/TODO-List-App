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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks > label,\n.f-tasks > label {\n    margin: 5px;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks > label,\n.f-tasks > label {\n    margin: 5px;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n"],"sourceRoot":""}]);
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
        _tasks_field__WEBPACK_IMPORTED_MODULE_2__["default"].initTaskFieldModule();
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

/***/ "./src/date_module.js":
/*!****************************!*\
  !*** ./src/date_module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


const DateModule = (() => {
    const todayDate = new Date();

    return {
        todayDate,
    };
})();

// use input type date to choos the date
// use date-fns to display distance from current date.
console.log(DateModule.todayDate);
console.log('2');


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
/* harmony import */ var _tasks_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks_field */ "./src/tasks_field.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");




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
                _task_data__WEBPACK_IMPORTED_MODULE_2__["default"].tasksList.forEach((list) => {
                    const everyList = list;
                    everyList.activeList = false;
                });
            }
            clearListsActivity();
            console.log(_task_data__WEBPACK_IMPORTED_MODULE_2__["default"].tasksList);
            const clickedListNumber = e.target.dataset.list;
            _task_data__WEBPACK_IMPORTED_MODULE_2__["default"].tasksList[clickedListNumber].activeList = true;
            _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].initDisplayModule();
            _tasks_field__WEBPACK_IMPORTED_MODULE_1__["default"].initTaskFieldModule();
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
                _task_data__WEBPACK_IMPORTED_MODULE_2__["default"].tasksList.find(listActivityCheck);
            const currentActiveListIndex =
                _task_data__WEBPACK_IMPORTED_MODULE_2__["default"].tasksList.indexOf(currentActiveList);
            _task_data__WEBPACK_IMPORTED_MODULE_2__["default"].deleteList(currentActiveListIndex);
            _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].initDisplayModule();
            changeActiveListOnClick();
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
/* harmony import */ var _date_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date_module */ "./src/date_module.js");
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
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListMain();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListWindow();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].displayActiveList();
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].changeTaskStatus();
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].openThisTaskWindow();
_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__["default"].changeActiveListOnClick();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FCO0FBQ2dDO0FBQ0E7QUFDaEI7QUFDTTtBQUNDO0FBQ0Q7QUFDRTtBQUNOOztBQUV2QyxZQUFZLDBCQUEwQjs7QUFFdEMsa0ZBQWdDO0FBQ2hDLGlGQUErQjtBQUMvQixxRkFBbUM7QUFDbkMseUZBQXVDO0FBQ3ZDLDJFQUF5QjtBQUN6Qiw2RUFBMkI7O0FBRTNCLG1FQUEyQjtBQUMzQiwrREFBdUI7QUFDdkIsK0VBQXVDO0FBQ3ZDLGtFQUEwQjtBQUMxQixvRUFBNEI7QUFDNUIsdUVBQStCO0FBQy9CLHFFQUFnQztBQUNoQyx1RUFBa0M7QUFDbEMsdUZBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2FkZF9uZXdfdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NyZWF0ZV9uZXdfbGlzdF93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9kYXRlX21vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2Rpc3BsYXlfZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21haW5fd2luZG93X2J0bl9jbGlja3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrX3dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tzX2ZpZWxkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBtYXgtd2lkdGg6MzAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5oZWFkZXItbWVudSA+IGEsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXItbWVudSA+IGE6aG92ZXIsXFxuLmhlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGNvbG9yOmJsdWU7XFxufVxcblxcbi50YXNrcy1maWVsZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbn1cXG4vKiBsaW5lIHRocm91dGggdGhlIHRleHQgaWYgaW5wdXQgaXMgY2hlY2tlZCAqL1xcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm8tdGFza3MgPiBsYWJlbCxcXG4uZi10YXNrcyA+IGxhYmVsIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi8qIC5vLXRhc2tzOmhvdmVyLCAqL1xcbi5vLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLm8tdGFza3MgPiBpbnB1dDpob3ZlcixcXG4vKiAuZi10YXNrczpob3ZlciwgKi9cXG4uZi10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5mLXRhc2tzID4gaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm90dG9tLWVsZW1lbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuID4gaSB7XFxuICAgIG1hcmdpbjogNXB4IDVweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiA+IGkge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBvcC11cCBtZW51IGVsZW1lbnRzIHN0eWxpbmcgKi9cXG5cXG4vKiBjcmVhdGUgbmV3IGxpc3QgbWVudSAqL1xcblxcbi5uZXctbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGgxIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93ID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogY3JlYXRlIG5ldyB0YXNrIG1lbnUgKi9cXG5cXG4ubmV3LXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1tZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LW5hbWUgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogdGFza3MgbGlzdCBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGFza3MtbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gYSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IC5jcmVhdGUtbmV3LWxpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiBjdXJyZW50IHRhc2sgbWVudSBzdHlsaW5nICovXFxuXFxuLnRoaXMtdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5nby1iYWNrID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG59XFxuXFxuLmdvLWJhY2sgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLW5hbWUgPiBoMSxcXG4udGhpcy10YXNrLWRlc2NyaXB0aW9uID4gcCxcXG4udGhpcy10YXNrLXN0YXR1cyA+IGxhYmVsLFxcbi50aGlzLXRhc2stZGF0ZSA+IGkge1xcbiAgICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhpcy10YXNrLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUgPiBpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLnRoaXMtdGFzay1kZWxldGUgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBzaG93IGNsYXNzICovXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lB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KiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlci1tZW51LFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhOmhvdmVyLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBjb2xvcjpibHVlO1xcbn1cXG5cXG4udGFza3MtZmllbGQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG59XFxuLyogbGluZSB0aHJvdXRoIHRoZSB0ZXh0IGlmIGlucHV0IGlzIGNoZWNrZWQgKi9cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5vLXRhc2tzID4gbGFiZWwsXFxuLmYtdGFza3MgPiBsYWJlbCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4vKiAuby10YXNrczpob3ZlciwgKi9cXG4uby10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5vLXRhc2tzID4gaW5wdXQ6aG92ZXIsXFxuLyogLmYtdGFza3M6aG92ZXIsICovXFxuLmYtdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uZi10YXNrcyA+IGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvdHRvbS1lbGVtZW50cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biA+IGkge1xcbiAgICBtYXJnaW46IDVweCA1cHg7XFxufVxcblxcbi5ib3R0b20tbWVudSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYge1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYgPiBpIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwb3AtdXAgbWVudSBlbGVtZW50cyBzdHlsaW5nICovXFxuXFxuLyogY3JlYXRlIG5ldyBsaXN0IG1lbnUgKi9cXG5cXG4ubmV3LWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBoMSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdyA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIGNyZWF0ZSBuZXcgdGFzayBtZW51ICovXFxuXFxuLm5ldy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctbWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1uYW1lID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHRhc2tzIGxpc3QgbWVudSBzdHlsaW5nICovXFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IGEsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiAuY3JlYXRlLW5ldy1saXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyogY3VycmVudCB0YXNrIG1lbnUgc3R5bGluZyAqL1xcblxcbi50aGlzLXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uZ28tYmFjayA+IGkge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxufVxcblxcbi5nby1iYWNrID4gaTpob3ZlciB7XFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1uYW1lID4gaDEsXFxuLnRoaXMtdGFzay1kZXNjcmlwdGlvbiA+IHAsXFxuLnRoaXMtdGFzay1zdGF0dXMgPiBsYWJlbCxcXG4udGhpcy10YXNrLWRhdGUgPiBpIHtcXG4gICAgbWFyZ2luOiA1cHhcXG59XFxuXFxuLnRoaXMtdGFzay1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aGlzLXRhc2stZGVsZXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aGlzLXRhc2stZGVsZXRlID4gaSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi50aGlzLXRhc2stZGVsZXRlID4gaTpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogc2hvdyBjbGFzcyAqL1xcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGlzcGxheU1vZHVsZSBmcm9tICcuL2Rpc3BsYXlfZGF0YSc7XG5pbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5pbXBvcnQgVGFza0ZpZWxkTW9kdWxlIGZyb20gJy4vdGFza3NfZmllbGQnO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICAgIC8vIEkgaGF2ZSB0byByZWFzc2luZyBkeW5hbWljYWxseSBjcmVhdGVkIG5vZGVzLCBiZWNhdXNlXG4gICAgLy8gb2YgaW5pdGlhbCB2YWx1ZSBpbiB0aGUgRE9NIGVsZW1lbnQgaXMgZXZhbHVhdGVkIHVwb25cbiAgICAvLyBmaXJzdCBleHBhbmRpbmdcbiAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1uYW1lJyk7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ1dHRvbicpO1xuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2std2luZG93Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdUYXNrTmFtZSxcbiAgICAgICAgbmV3VGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICBzYXZlQnRuLFxuICAgICAgICBuZXdUYXNrV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBOZXdUYXNrTW9kdWxlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICAgICBET00ubmV3VGFza05hbWUudmFsdWUgPSAnJztcbiAgICAgICAgRE9NLm5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Rhc2soKSB7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RBY3Rpdml0eUNoZWNrKGxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3QgPSBEYXRhTW9kdWxlLnRhc2tzTGlzdC5maW5kKGxpc3RBY3Rpdml0eUNoZWNrKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdEluZGV4ID1cbiAgICAgICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0LmluZGV4T2YoY3VycmVudEFjdGl2ZUxpc3QpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gRE9NLm5ld1Rhc2tOYW1lLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBET00ubmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBpZiAodGFza05hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBEYXRhTW9kdWxlLmNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3RJbmRleCxcbiAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgIFRhc2tGaWVsZE1vZHVsZS5jaGFuZ2VUYXNrU3RhdHVzKCk7XG4gICAgICAgIFRhc2tGaWVsZE1vZHVsZS5pbml0VGFza0ZpZWxkTW9kdWxlKCk7XG4gICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgRE9NLm5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cblxuICAgIERPTS5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXdUYXNrKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBuZXdUYXNrIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgTmV3VGFza01vZHVsZTtcbiIsImltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBtYWluV2luZG93QnRuIGZyb20gJy4vbWFpbl93aW5kb3dfYnRuX2NsaWNrcyc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC13aW5kb3cnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1idG4nKTtcbiAgICBjb25zdCByZWFkeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeS1idG4nKTtcbiAgICBjb25zdCBuZXdMaXN0TmFtZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QtbmFtZScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3TGlzdFdpbmRvdyxcbiAgICAgICAgY2xvc2VCdG4sXG4gICAgICAgIHJlYWR5QnRuLFxuICAgICAgICBuZXdMaXN0TmFtZVRleHQsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IE5ld0xpc3RNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsb3NlV2luZG93KCkge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgIERPTS5uZXdMaXN0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBET00uY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJJbnB1dCgpIHtcbiAgICAgICAgICAgIERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIERPTS5uZXdMaXN0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgaWYgKERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdChET00ubmV3TGlzdE5hbWVUZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUudGFza0xpc3RNYWluKCk7XG4gICAgICAgICAgICBkaXNwbGF5TW9kdWxlLnRhc2tMaXN0V2luZG93KCk7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICBtYWluV2luZG93QnRuLmNoYW5nZUFjdGl2ZUxpc3RPbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnJlYWR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNsb3NlV2luZG93LCBjcmVhdGVOZXdMaXN0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBOZXdMaXN0TW9kdWxlO1xuIiwiaW1wb3J0IHNldCBmcm9tICdkYXRlLWZucy9zZXQnO1xuXG5jb25zdCBEYXRlTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kYXlEYXRlLFxuICAgIH07XG59KSgpO1xuXG4vLyB1c2UgaW5wdXQgdHlwZSBkYXRlIHRvIGNob29zIHRoZSBkYXRlXG4vLyB1c2UgZGF0ZS1mbnMgdG8gZGlzcGxheSBkaXN0YW5jZSBmcm9tIGN1cnJlbnQgZGF0ZS5cbmNvbnNvbGUubG9nKERhdGVNb2R1bGUudG9kYXlEYXRlKTtcbmNvbnNvbGUubG9nKCcyJyk7XG4iLCJpbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5pbXBvcnQgdGFza1dpbmRvd01vZHVsZSBmcm9tICcuL3Rhc2tfd2luZG93JztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MnKTtcbiAgICBjb25zdCB0YXNrTGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzJ1xuICAgICk7XG4gICAgY29uc3QgdGFza3NGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1maWVsZCcpO1xuICAgIGNvbnN0IHRhc2tzRmllbGRPbmdvaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWZpZWxkLW9uZ29pbmcnKTtcbiAgICBjb25zdCB0YXNrc0ZpZWxkRmluaXNoZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtZmllbGQtZmluaXNoZWQnKTtcbiAgICBjb25zdCB0YXNrTGlzdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXN0LXRhZ10nKTtcbiAgICBjb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay13aW5kb3cnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlck1lbnUsXG4gICAgICAgIHRhc2tMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0ZpZWxkLFxuICAgICAgICB0YXNrc0ZpZWxkT25nb2luZyxcbiAgICAgICAgdGFza3NGaWVsZEZpbmlzaGVkLFxuICAgICAgICB0YXNrTGlzdFRhZ3MsXG4gICAgICAgIG5ld1Rhc2tXaW5kb3csXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRhc2tMaXN0TWFpbigpIHtcbiAgICAgICAgRE9NLmhlYWRlck1lbnUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0LmZvckVhY2goKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbmV3TGlzdC5ocmVmID0gJyMnO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3RUYWcgPSAnJztcbiAgICAgICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRpdGxlfWA7XG4gICAgICAgICAgICBpZiAobGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5jbGFzc05hbWUgPSAnYWN0aXZlLWxpc3QnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBET00uaGVhZGVyTWVudS5hcHBlbmRDaGlsZChuZXdMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXJNZW51O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrTGlzdFdpbmRvdygpIHtcbiAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0VGFnID0gJyc7XG4gICAgICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gYCR7bGlzdC50aXRsZX1gO1xuICAgICAgICAgICAgaWYgKGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ2FjdGl2ZS1saXN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tMaXN0V2luZG93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKSB7XG4gICAgICAgIGNvbnN0IG9uZ29pbmdUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb25nb2luZ1Rhc2tzSDIudGV4dENvbnRlbnQgPSAnT25nb2luZyB0YXNrcyc7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5hcHBlbmRDaGlsZChvbmdvaW5nVGFza3NIMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUZpbmlzaGVkVGFza3NIMigpIHtcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZmluaXNoZWRUYXNrc0gyLnRleHRDb250ZW50ID0gJ0ZpbmlzaGVkIHRhc2tzJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChmaW5pc2hlZFRhc2tzSDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlPbmdvaW5nVGFza3MobGlzdCkge1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tPbmdvaW5nLmRhdGFzZXQuc3RhdHVzID0gJ29uZ29pbmcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrT25nb2luZy5kYXRhc2V0LnRoaXNUYXNrID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmNsYXNzTmFtZSA9ICdvLXRhc2tzJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrT25nb2luZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnN0YXR1cyA9ICdvbmdvaW5nJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0Lm5hbWUgPSBgby10YXNrJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmRhdGFzZXQudGFza1RhZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmNsYXNzTmFtZSA9ICd0YXNrcyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGBvLXRhc2ske2luZGV4fWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5kYXRhc2V0LnRoaXNUYXNrID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmFwcGVuZENoaWxkKG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZE9uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRPbmdvaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGaW5pc2hlZFRhc2tzKGxpc3QpIHtcbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2sub24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0ZpbmlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tGaW5pc2hlZC5kYXRhc2V0LnN0YXR1cyA9ICdmaW5pc2hlZCc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC50aGlzVGFzayA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuY2xhc3NOYW1lID0gJ2YtdGFza3MnO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGaW5pc2hlZElucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrRmluaXNoZWRJbnB1dC5kYXRhc2V0LnN0YXR1cyA9ICdmaW5pc2hlZCc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0Lm5hbWUgPSBgZi10YXNrJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC5kYXRhc2V0LnRhc2tUYWcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tzJztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgYGYtdGFzayR7aW5kZXh9YFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGhpc1Rhc2sgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZEZpbmlzaGVkLmFwcGVuZENoaWxkKG5ld1Rhc2tGaW5pc2hlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZEZpbmlzaGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWN0aXZlTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgcmVzZXRUYXNrcygpO1xuICAgICAgICBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheU9uZ29pbmdUYXNrcyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGRpc3BsYXlGaW5pc2hlZFRhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheUZpbmlzaGVkVGFza3MoY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaG9zZW5UYXNrV2luZG93KGFjdGl2ZUxpc3QsIHRhc2tOdW1iZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gdGFza1dpbmRvd0NsZWFyKCkge1xuICAgICAgICAgICAgRE9NLm5ld1Rhc2tXaW5kb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnb0JhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ29CYWNrQnRuLmlkID0gJ3RoaXMtdGFzay1nby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmNsYXNzTmFtZSA9ICdnby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgIGA8aSBpZD1cInRoaXMtdGFzay1nby1iYWNrLWJ0blwiIGRhdGEtdGFzay1udW1iZXI9JyR7dGFza051bWJlcn0nIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdGhpc1Rhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5pZCA9ICd0aGlzLXRhc2stbmFtZSc7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5jbGFzc05hbWUgPSAndGhpcy10YXNrLW5hbWUnO1xuICAgICAgICBjb25zdCB0aGlzVGFza05hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRoaXNUYXNrTmFtZVRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgdGhpc1Rhc2tOYW1lVGl0bGUuZGF0YXNldC50YXNrVGl0bGUgPSAnJztcbiAgICAgICAgdGhpc1Rhc2tOYW1lVGl0bGUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLnRpdGxlfWA7XG4gICAgICAgIHRoaXNUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzVGFza05hbWVUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGhpc1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uLmlkID0gJ3RoaXMtdGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3RoaXMtdGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0LmRhdGFzZXQudGFza0Rlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYCR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXNUYXNrRGVzY3JpcHRpb25UZXh0KTtcblxuICAgICAgICBjb25zdCB0aGlzVGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFza1N0YXR1cy5pZCA9ICd0aGlzLXRhc2stc3RhdHVzLWNvbnRhaW5lcic7XG4gICAgICAgIHRoaXNUYXNrU3RhdHVzLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stc3RhdHVzJztcblxuICAgICAgICBjb25zdCB0aGlzVGFza09uID0gYWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tUYXNrT24oKSB7XG4gICAgICAgICAgICBpZiAodGhpc1Rhc2tPbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIm9uZ29pbmdcIiBzZWxlY3RlZD5PbmdvaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmluaXNoZWRcIj5GaW5pc2hlZDwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCJvbmdvaW5nXCI+T25nb2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbmlzaGVkXCIgc2VsZWN0ZWQ+RmluaXNoZWQ8L29wdGlvbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1Rhc2tTdGF0dXMuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgYDxsYWJlbCBmb3I9XCJ0aGlzLXRhc2stc3RhdHVzXCI+VGFzayBzdGF0dXM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRoaXMtdGFzay1zdGF0dXNcIiBpZD1cInRoaXMtdGFzay1zdGF0dXNcIj5cbiAgICAgICAgICAgICR7Y2hlY2tUYXNrT24oKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PmBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0aGlzVGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmlkID0gJ3RoaXMtdGFzay1kYXRlJztcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGF0ZSc7XG4gICAgICAgIHRoaXNUYXNrRGF0ZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgICBgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItYWx0XCI+PC9pPiBcbiAgICAgICAgICAgIDxwIGlkPVwiZGF0ZS12YWx1ZVwiPiR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kYXRlfTwvcD5gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5pZCA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXG4gICAgICAgICk7XG5cbiAgICAgICAgdGFza1dpbmRvd0NsZWFyKCk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGdvQmFja0J0bik7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrTmFtZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBET00ubmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZCh0aGlzVGFza1N0YXR1cyk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGF0ZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tXaW5kb3dNb2R1bGUuYmFja0J0bkNsaWNrKCk7XG4gICAgICAgIHRhc2tXaW5kb3dNb2R1bGUuZGVsZXRlVGFza0Zyb21MaXN0QnRuQ2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0RGlzcGxheU1vZHVsZSgpIHtcbiAgICAgICAgdGFza0xpc3RNYWluKCk7XG4gICAgICAgIHRhc2tMaXN0V2luZG93KCk7XG4gICAgICAgIGRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza0xpc3RNYWluLFxuICAgICAgICB0YXNrTGlzdFdpbmRvdyxcbiAgICAgICAgZGlzcGxheUFjdGl2ZUxpc3QsXG4gICAgICAgIGRpc3BsYXlDaG9zZW5UYXNrV2luZG93LFxuICAgICAgICBpbml0RGlzcGxheU1vZHVsZSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1vZHVsZTtcbiIsImltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBUYXNrRmllbGRNb2R1bGUgZnJvbSAnLi90YXNrc19maWVsZCc7XG5pbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idG4nKTtcbiAgICBjb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLXdpbmRvdycpO1xuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3dNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLXdpbmRvdy1tZW51Jyk7XG4gICAgY29uc3QgdGFza3NMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWxpc3QtYnRuJyk7XG4gICAgY29uc3QgdGFza3NMaXN0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWxpc3Qtd2luZG93Jyk7XG4gICAgY29uc3QgdGFza3NMaXN0V2luZG93TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudSdcbiAgICApO1xuICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLW5ldy1saXN0Jyk7XG4gICAgY29uc3QgbmV3TGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC13aW5kb3cnKTtcbiAgICBjb25zdCBjcmVhdGVOZXdMaXN0TWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAnY3JlYXRlLW5ldy1saXN0LW1lbnUnXG4gICAgKTtcbiAgICBjb25zdCB0YXNrTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXN0LXRhZ10nKTtcbiAgICBjb25zdCBkZWxldGVMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1saXN0LWJ0bicpO1xuXG4gICAgZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3cpIHtcbiAgICAgICAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUYXNrQnRuLFxuICAgICAgICBuZXdUYXNrV2luZG93LFxuICAgICAgICBuZXdUYXNrV2luZG93TWVudSxcbiAgICAgICAgdGFza3NMaXN0QnRuLFxuICAgICAgICB0YXNrc0xpc3RXaW5kb3csXG4gICAgICAgIHRhc2tzTGlzdFdpbmRvd01lbnUsXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdG4sXG4gICAgICAgIG5ld0xpc3RXaW5kb3csXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RNZW51QnRuLFxuICAgICAgICBvcGVuV2luZG93LFxuICAgICAgICB0YXNrTGlzdHMsXG4gICAgICAgIGRlbGV0ZUxpc3RCdG4sXG4gICAgfTtcbn0pKCk7XG5cbi8vIGNoZWNrcG9pbnRcbmNvbnN0IG1haW5XaW5kb3dCdG4gPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGFkZE5ld1Rhc2tCdG5DbGljaygpIHtcbiAgICAgICAgY29uc3Qgb3Blbk5ld1Rhc2tXaW5kb3cgPSAoKSA9PiBET00ub3BlbldpbmRvdyhET00ubmV3VGFza1dpbmRvdyk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VOZXdUYXNrV2luZG93KGUpIHtcbiAgICAgICAgICAgIGlmICghRE9NLm5ld1Rhc2tXaW5kb3dNZW51LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIERPTS5uZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIERPTS5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1Rhc2tXaW5kb3cpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNsb3NlTmV3VGFza1dpbmRvdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza3NMaXN0QnRuQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG9wZW5UYXNrc0xpc3RXaW5kb3cgPSAoKSA9PiBET00ub3BlbldpbmRvdyhET00udGFza3NMaXN0V2luZG93KTtcblxuICAgICAgICBmdW5jdGlvbiBjbG9zZVRhc2tzTGlzdChlKSB7XG4gICAgICAgICAgICBpZiAoIURPTS50YXNrc0xpc3RXaW5kb3dNZW51LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIERPTS50YXNrc0xpc3RXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRE9NLnRhc2tzTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrc0xpc3RXaW5kb3cpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNsb3NlVGFza3NMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0QnRuQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG9wZW5OZXdMaXN0V2luZG93ID0gKCkgPT4gRE9NLm9wZW5XaW5kb3coRE9NLm5ld0xpc3RXaW5kb3cpO1xuXG4gICAgICAgIERPTS5jcmVhdGVOZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0xpc3RXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RNZW51QnRuQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG9wZW5OZXdMaXN0V2luZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgRE9NLnRhc2tzTGlzdFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICBET00ub3BlbldpbmRvdyhET00ubmV3TGlzdFdpbmRvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgRE9NLmNyZWF0ZU5ld0xpc3RNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0xpc3RXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUxpc3RPbkNsaWNrKCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXN0LXRhZ10nKTtcbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlTGlzdChlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0Lmxpc3QpO1xuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJMaXN0c0FjdGl2aXR5KCkge1xuICAgICAgICAgICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlcnlMaXN0ID0gbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgZXZlcnlMaXN0LmFjdGl2ZUxpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyTGlzdHNBY3Rpdml0eSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coRGF0YU1vZHVsZS50YXNrc0xpc3QpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZExpc3ROdW1iZXIgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3Q7XG4gICAgICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdFtjbGlja2VkTGlzdE51bWJlcl0uYWN0aXZlTGlzdCA9IHRydWU7XG4gICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmluaXREaXNwbGF5TW9kdWxlKCk7XG4gICAgICAgICAgICBUYXNrRmllbGRNb2R1bGUuaW5pdFRhc2tGaWVsZE1vZHVsZSgpO1xuICAgICAgICAgICAgbWFpbldpbmRvd0J0bi5jaGFuZ2VBY3RpdmVMaXN0T25DbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQWN0aXZlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFjdGl2ZUxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUN1cnJlbnRMaXN0KCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9XG4gICAgICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdEluZGV4ID1cbiAgICAgICAgICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5pbmRleE9mKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgICAgIERhdGFNb2R1bGUuZGVsZXRlTGlzdChjdXJyZW50QWN0aXZlTGlzdEluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuaW5pdERpc3BsYXlNb2R1bGUoKTtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUxpc3RPbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgRE9NLmRlbGV0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVDdXJyZW50TGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkTmV3VGFza0J0bkNsaWNrLFxuICAgICAgICB0YXNrc0xpc3RCdG5DbGljayxcbiAgICAgICAgY3JlYXRlTmV3TGlzdEJ0bkNsaWNrLFxuICAgICAgICBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrLFxuICAgICAgICBjaGFuZ2VBY3RpdmVMaXN0T25DbGljayxcbiAgICAgICAgZGVsZXRlQWN0aXZlTGlzdCxcbiAgICB9O1xufSkoKTtcbm1haW5XaW5kb3dCdG4uZGVsZXRlQWN0aXZlTGlzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluV2luZG93QnRuO1xuIiwiY29uc3QgRGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy8gYWxsIHRhc2tzIGRhdGEgYXJyYXlcbiAgICBjb25zdCB0YXNrc0xpc3QgPSBbXTtcblxuICAgIC8vIG5ldyBsaXN0IGZhY3RvcnlcbiAgICBjb25zdCBuZXdMaXN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIHRhc2tzLCBhY3RpdmVMaXN0IH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5wdXNoKG5ld0xpc3QodGl0bGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVMaXN0KGxpc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0LnNwbGljZShsaXN0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIG5ldyB0YXNrIGZhY3RvcnlcbiAgICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgb24sIGRhdGUpID0+ICh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgb24sXG4gICAgICAgIGRhdGUsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrSW5UaGVMaXN0KGxpc3RJbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBvbiwgZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0W2xpc3RJbmRleF0udGFza3MucHVzaChcbiAgICAgICAgICAgIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBvbiwgZGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKGxpc3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3RbbGlzdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VGFza3NMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0LnB1c2gobmV3TGlzdCgnTXkgdGFza3MnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRhc2tzKCkge1xuICAgICAgICBjcmVhdGVOZXdUYXNrSW5UaGVMaXN0KFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICdPbmdvaW5nIHRhc2sgMScsXG4gICAgICAgICAgICAnTXkgb25nb2luZyB0YXNrIDEnLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuICAgICAgICBjcmVhdGVOZXdUYXNrSW5UaGVMaXN0KFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICdGaW5pc2hlZCB0YXNrIDEnLFxuICAgICAgICAgICAgJ015IGZpbmlzaGVkIHRhc2sgMScsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUYXNrc0xpc3RBY3RpdmVTdGF0dXMoKSB7XG4gICAgICAgIHRhc2tzTGlzdFswXS5hY3RpdmVMaXN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUYXNrT25TdGF0dXModGFzaykge1xuICAgICAgICByZXR1cm4gIXRhc2sub247XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza3NMaXN0LFxuICAgICAgICBjcmVhdGVOZXdMaXN0LFxuICAgICAgICBkZWxldGVMaXN0LFxuICAgICAgICBjcmVhdGVOZXdUYXNrSW5UaGVMaXN0LFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBkZWZhdWx0VGFza3NMaXN0LFxuICAgICAgICBkZWZhdWx0VGFza3MsXG4gICAgICAgIGRlZmF1bHRUYXNrc0xpc3RBY3RpdmVTdGF0dXMsXG4gICAgICAgIGNoYW5nZVRhc2tPblN0YXR1cyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YU1vZHVsZTtcbiIsImltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBUYXNrRmllbGRNb2R1bGUgZnJvbSAnLi90YXNrc19maWVsZCc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2stZ28tYmFjay1idG4nKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLXRpdGxlXScpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stZGVzY3JpcHRpb25dJyk7XG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2stc3RhdHVzJyk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS12YWx1ZScpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2stZGVsZXRlJyk7XG4gICAgY29uc3QgdGhpc1Rhc2tXaWRub3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLXdpbmRvdycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFja0J0bixcbiAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tTdGF0dXMsXG4gICAgICAgIHRhc2tEYXRlLFxuICAgICAgICBkZWxldGVCdG4sXG4gICAgICAgIHRoaXNUYXNrV2lkbm93LFxuICAgIH07XG59KSgpO1xuXG4vLyBUT0RPIHRoaXMgdGFzayB3aW5kb3cgZnVuY3Rpb25hbGxpdHlcbmNvbnN0IHRhc2tXaW5kb3dNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vIFRPRE8gdGhpc1Rhc2tFZGl0IGZ1bmN0aW9uYWxpdHlcbiAgICBmdW5jdGlvbiB0aGlzVGFza0VkaXQoYWN0aXZlTGlzdCwgdGFza051bWJlcikge1xuICAgICAgICBjb25zdCBlZGl0ZWRBY3RpdmVMaXN0ID0gYWN0aXZlTGlzdDtcbiAgICAgICAgZWRpdGVkQWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS50aXRsZSA9IERPTS50YXNrVGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGVkaXRlZEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0uZGVzY3JpdHB0aW9uID1cbiAgICAgICAgICAgIERPTS50YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHsgdGFza1N0YXR1cyB9ID0gRE9NO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrU3RhdHVzKTtcbiAgICAgICAgY29uc3QgdGFza09uU3RhdHVzID1cbiAgICAgICAgICAgIHRhc2tTdGF0dXMub3B0aW9uc1t0YXNrU3RhdHVzLnNlbGVjdGVkSW5kZXhdLnZhbHVlID09PSAnb25nb2luZyc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tPblN0YXR1cyk7XG4gICAgICAgIGVkaXRlZEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24gPSB0YXNrT25TdGF0dXM7XG4gICAgICAgIGVkaXRlZEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0uZGF0ZSA9IERPTS50YXNrRGF0ZS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGVkaXRlZEFjdGl2ZUxpc3Q7XG4gICAgfVxuXG4gICAgLy8gVE9ETyB0aGlzVGFza051bWJlciB3aWxsIGJlIHRha2VuIGZyb20gYmFjayBidXR0b24gZGF0YSBhdHRyaWJ1dGVcbiAgICBmdW5jdGlvbiB0aGlzQWN0aXZlTGlzdFRhc2tzRWRpdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9IERhdGFNb2R1bGUudGFza3NMaXN0LmZpbmQobGlzdEFjdGl2aXR5Q2hlY2spO1xuICAgICAgICBjb25zdCB7IHRhc2tOdW1iZXIgfSA9IERPTS5iYWNrQnRuLmRhdGFzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzVGFza0VkaXQoY3VycmVudEFjdGl2ZUxpc3QsIHRhc2tOdW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlVGFza1dpbmRvdygpIHtcbiAgICAgICAgcmV0dXJuIERPTS50aGlzVGFza1dpZG5vdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21MaXN0KCkge1xuICAgICAgICBmdW5jdGlvbiBsaXN0QWN0aXZpdHlDaGVjayhsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0SW5kZXggPVxuICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3QuaW5kZXhPZihjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGNvbnN0IHsgdGFza051bWJlciB9ID0gRE9NLmJhY2tCdG4uZGF0YXNldDtcbiAgICAgICAgRGF0YU1vZHVsZS5kZWxldGVUYXNrKGN1cnJlbnRBY3RpdmVMaXN0SW5kZXgsIHRhc2tOdW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tTGlzdEJ0bkNsaWNrKCkge1xuICAgICAgICBET00uZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1kZWxldGUnKTtcbiAgICAgICAgaWYgKERPTS5kZWxldGVCdG4pIHtcbiAgICAgICAgICAgIERPTS5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFza0Zyb21MaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlVGFza1dpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tGaWVsZE1vZHVsZS5pbml0VGFza0ZpZWxkTW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhY2tCdG5DbGljaygpIHtcbiAgICAgICAgRE9NLmJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLWdvLWJhY2stYnRuJyk7XG4gICAgICAgIERPTS50YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLXRpdGxlXScpO1xuICAgICAgICBET00udGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1kZXNjcmlwdGlvbl0nKTtcbiAgICAgICAgRE9NLnRhc2tTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy10YXNrLXN0YXR1cycpO1xuICAgICAgICAvLyBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1zdGF0dXMnKTtcbiAgICAgICAgRE9NLnRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdmFsdWUnKTtcbiAgICAgICAgaWYgKERPTS5iYWNrQnRuKSB7XG4gICAgICAgICAgICBET00uYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVRhc2tXaW5kb3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0FjdGl2ZUxpc3RUYXNrc0VkaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1vZHVsZS5kaXNwbGF5QWN0aXZlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBUYXNrRmllbGRNb2R1bGUuaW5pdFRhc2tGaWVsZE1vZHVsZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrQnRuQ2xpY2ssXG4gICAgICAgIGRlbGV0ZVRhc2tGcm9tTGlzdEJ0bkNsaWNrLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrV2luZG93TW9kdWxlO1xuIiwiaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuLy8gaW1wb3J0IHRhc2tXaW5kb3dNb2R1bGUgZnJvbSAnLi90YXNrX3dpbmRvdyc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgLy8gSSBoYXZlIHRvIHJlYXNzaW5nIGR5bmFtaWNhbGx5IGNyZWF0ZWQgbm9kZXMsIGJlYWN1c2VcbiAgICAvLyBvZiBpbml0aWFsIHZhbHVlIGluIHRoZSBET00gZWxlbWVudCBpcyBldmFsdWF0ZWQgdXBvblxuICAgIC8vIGZpcnN0IGV4cGFuZGluZ1xuICAgIGNvbnN0IHRhc2tzRWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhc2stdGFnXScpO1xuICAgIGNvbnN0IHRoaXNUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGhpcy10YXNrXScpO1xuICAgIGNvbnN0IHRoaXNUYXNrV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay13aW5kb3cnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tzRWxJbnB1dCxcbiAgICAgICAgdGhpc1Rhc2ssXG4gICAgICAgIHRoaXNUYXNrV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBUYXNrRmllbGRNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9wZW5UaGlzVGFza1dpbmRvdygpIHtcbiAgICAgICAgRE9NLnRoaXNUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGhpcy10YXNrXScpO1xuICAgICAgICBmdW5jdGlvbiBsaXN0QWN0aXZpdHlDaGVjayhsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG5cbiAgICAgICAgRE9NLnRoaXNUYXNrLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNUYXNrTnVtYmVyID0gZS50YXJnZXQuZGF0YXNldC50YXNrTnVtYmVyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgICAgICAgICBET00udGhpc1Rhc2tXaW5kb3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlNb2R1bGUuZGlzcGxheUNob3NlblRhc2tXaW5kb3coXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVMaXN0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzVGFza051bWJlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFza1N0YXR1cygpIHtcbiAgICAgICAgRE9NLnRhc2tzRWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhc2stdGFnXScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxpc3RBY3Rpdml0eUNoZWNrKGxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3QgPSBEYXRhTW9kdWxlLnRhc2tzTGlzdC5maW5kKGxpc3RBY3Rpdml0eUNoZWNrKTtcblxuICAgICAgICBET00udGFza3NFbElucHV0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFza051bWJlciB9ID0gZS50YXJnZXQuZGF0YXNldDtcblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLm9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5UaGlzVGFza1dpbmRvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuVGhpc1Rhc2tXaW5kb3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFRhc2tGaWVsZE1vZHVsZSgpIHtcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xuICAgICAgICBvcGVuVGhpc1Rhc2tXaW5kb3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VUYXNrU3RhdHVzLFxuICAgICAgICBvcGVuVGhpc1Rhc2tXaW5kb3csXG4gICAgICAgIGluaXRUYXNrRmllbGRNb2R1bGUsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tGaWVsZE1vZHVsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWFpbldpbmRvd0J0biBmcm9tICcuL21haW5fd2luZG93X2J0bl9jbGlja3MnO1xuaW1wb3J0IE5ld0xpc3RNb2R1bGUgZnJvbSAnLi9jcmVhdGVfbmV3X2xpc3Rfd2luZG93JztcbmltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBUYXNrRmllbGRNb2R1bGUgZnJvbSAnLi90YXNrc19maWVsZCc7XG5pbXBvcnQgTmV3VGFza01vZHVsZSBmcm9tICcuL2FkZF9uZXdfdGFzayc7XG5pbXBvcnQgdGFza1dpbmRvd01vZHVsZSBmcm9tICcuL3Rhc2tfd2luZG93JztcbmltcG9ydCBEYXRlTW9kdWxlIGZyb20gJy4vZGF0ZV9tb2R1bGUnO1xuXG4vLyBpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxubWFpbldpbmRvd0J0bi5hZGROZXdUYXNrQnRuQ2xpY2soKTtcbm1haW5XaW5kb3dCdG4udGFza3NMaXN0QnRuQ2xpY2soKTtcbm1haW5XaW5kb3dCdG4uY3JlYXRlTmV3TGlzdEJ0bkNsaWNrKCk7XG5tYWluV2luZG93QnRuLmNyZWF0ZU5ld0xpc3RNZW51QnRuQ2xpY2soKTtcbk5ld0xpc3RNb2R1bGUuY2xvc2VXaW5kb3coKTtcbk5ld0xpc3RNb2R1bGUuY3JlYXRlTmV3TGlzdCgpO1xuXG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrc0xpc3QoKTtcbkRhdGFNb2R1bGUuZGVmYXVsdFRhc2tzKCk7XG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrc0xpc3RBY3RpdmVTdGF0dXMoKTtcbmRpc3BsYXlNb2R1bGUudGFza0xpc3RNYWluKCk7XG5kaXNwbGF5TW9kdWxlLnRhc2tMaXN0V2luZG93KCk7XG5kaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG5UYXNrRmllbGRNb2R1bGUuY2hhbmdlVGFza1N0YXR1cygpO1xuVGFza0ZpZWxkTW9kdWxlLm9wZW5UaGlzVGFza1dpbmRvdygpO1xubWFpbldpbmRvd0J0bi5jaGFuZ2VBY3RpdmVMaXN0T25DbGljaygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9