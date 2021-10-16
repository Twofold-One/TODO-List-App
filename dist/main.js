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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks:hover,\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n.f-tasks:hover,\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-task {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > p,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks:hover,\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n.f-tasks:hover,\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-task {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > p,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n"],"sourceRoot":""}]);
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



const DOM = (() => {
    const newListWndow = document.getElementById('new-list-window');
    const closeBtn = document.getElementById('close-btn');
    const readyBtn = document.getElementById('ready-btn');
    const newListNameText = document.getElementById('new-list-name');

    return {
        newListWndow,
        closeBtn,
        readyBtn,
        newListNameText,
    };
})();

const newListModule = (() => {
    function closeWindow() {
        function handleClick() {
            DOM.newListWndow.classList.remove('show');
        }

        DOM.closeBtn.addEventListener('click', handleClick);
    }

    function createNewList() {
        function clearInput() {
            DOM.newListNameText.value = '';
            DOM.newListWndow.classList.remove('show');
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
        }
        DOM.readyBtn.addEventListener('click', handleClick);
    }
    return { closeWindow, createNewList };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newListModule);


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


const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );
    const tasksField = document.getElementById('tasks-field');
    const tasksFieldOngoing = document.getElementById('tasks-field-ongoing');
    const tasksFieldFinished = document.getElementById('tasks-field-finished');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
    };
})();

const displayModule = (() => {
    function taskListMain() {
        DOM.headerMenu.innerHTML = '';
        _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.textContent = `${list.title}`;

            DOM.headerMenu.append(newList);

            return DOM.headerMenu;
        });
    }

    function taskListWindow() {
        DOM.taskListWindow.innerHTML = '';
        _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.textContent = `${list.title}`;

            DOM.taskListWindow.append(newList);

            return DOM.taskListWindow;
        });
    }

    function defaultTasks() {
        function ongoingTasks() {
            _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList[0].ongoingTaskList.forEach((task, index) => {
                const newTaskOngoing = document.createElement('div');
                newTaskOngoing.id = 'o-tasks';
                newTaskOngoing.className = 'o-tasks';
                newTaskOngoing.dataset.task = `${index}`;

                const newTaskOngoingInput = document.createElement('input');
                newTaskOngoingInput.type = 'checkbox';
                newTaskOngoingInput.id = 'o-task';
                newTaskOngoingInput.name = `o-task${index}`;
                newTaskOngoingInput.className = 'tasks';

                const newTaskOngoingInputLabel =
                    document.createElement('label');
                newTaskOngoingInputLabel.setAttribute('for', `o-task${index}`);
                newTaskOngoingInputLabel.textContent = task.title;

                newTaskOngoing.appendChild(newTaskOngoingInput);
                newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
            });
        }

        function finishedTasks() {
            _task_data__WEBPACK_IMPORTED_MODULE_0__["default"].tasksList[0].finishedTaskList.forEach((task, index) => {
                const newTaskFinished = document.createElement('div');
                newTaskFinished.id = 'f-tasks';
                newTaskFinished.className = 'f-tasks';
                newTaskFinished.dataset.task = `${index}`;

                const newTaskFinishedInput = document.createElement('input');
                newTaskFinishedInput.type = 'checkbox';
                newTaskFinishedInput.id = 'f-task';
                newTaskFinishedInput.name = `f-task${index}`;
                newTaskFinishedInput.className = 'tasks';
                newTaskFinishedInput.checked = true;

                const newTaskFinishedInputLabel =
                    document.createElement('label');
                newTaskFinishedInputLabel.setAttribute('for', `f-task${index}`);
                newTaskFinishedInputLabel.textContent = task.title;

                newTaskFinished.appendChild(newTaskFinishedInput);
                newTaskFinished.appendChild(newTaskFinishedInputLabel);
                return DOM.tasksFieldFinished.appendChild(newTaskFinished);
            });
        }

        ongoingTasks();
        finishedTasks();
    }

    return {
        taskListMain,
        taskListWindow,
        defaultTasks,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModule);


/***/ }),

/***/ "./src/main_window.js":
/*!****************************!*\
  !*** ./src/main_window.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTaskBtnClick": () => (/* binding */ addNewTaskBtnClick),
/* harmony export */   "tasksListBtnClick": () => (/* binding */ tasksListBtnClick),
/* harmony export */   "createNewListBtnClick": () => (/* binding */ createNewListBtnClick)
/* harmony export */ });
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
        openWindow,
    };
})();

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
        const ongoingTaskList = [];
        const finishedTaskList = [];
        return { title, ongoingTaskList, finishedTaskList };
    };

    function createNewList(title) {
        return tasksList.push(newList(title));
    }

    function deleteList(listIndex) {
        return tasksList.splice(listIndex, 1);
    }

    // new task factory
    const newTask = (title, description, status, date) => ({
        title,
        description,
        status,
        date,
    });

    function createNewTaskInTheList(
        listIndex,
        title,
        description,
        status,
        date
    ) {
        if (status === 'ongoing') {
            return tasksList[listIndex].ongoingTaskList.push(
                newTask(title, description, status, date)
            );
        }
        return tasksList[listIndex].finishedTaskList.push(
            newTask(title, description, status, date)
        );
    }

    function deleteTask(listIndex, taskIndex, status) {
        if (status === 'ongoing') {
            return tasksList[listIndex].ongoingTaskList.splice(taskIndex, 1);
        }
        return tasksList[listIndex].finishedTaskList.splice(taskIndex, 1);
    }

    function defaultTasksList() {
        return tasksList.push(newList('My tasks'));
    }

    function defaultTasks() {
        createNewTaskInTheList(
            0,
            'Ongoing task 1',
            'My ongoing task 1',
            'ongoing',
            'none'
        );
        createNewTaskInTheList(
            0,
            'Finished task 1',
            'My finished task 1',
            'finished',
            'none'
        );
    }

    return {
        tasksList,
        createNewList,
        deleteList,
        createNewTaskInTheList,
        deleteTask,
        defaultTasksList,
        defaultTasks,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataModule);


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
/* harmony import */ var _main_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_window */ "./src/main_window.js");
/* harmony import */ var _create_new_list_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_new_list_window */ "./src/create_new_list_window.js");
/* harmony import */ var _task_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task_data */ "./src/task_data.js");
/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display_data */ "./src/display_data.js");
// import _ from 'lodash';





// import { formatDistance, subDays } from 'date-fns';

(0,_main_window__WEBPACK_IMPORTED_MODULE_1__.addNewTaskBtnClick)();
(0,_main_window__WEBPACK_IMPORTED_MODULE_1__.tasksListBtnClick)();
(0,_main_window__WEBPACK_IMPORTED_MODULE_1__.createNewListBtnClick)();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].closeWindow();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].createNewList();

_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasksList();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasks();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].createNewTaskInTheList(
    0,
    'My new task',
    'my new task description',
    'finished',
    'any'
);
// DataModule.createNewList('list1');
// DataModule.createNewList('list2');
// DataModule.createNewList('list3');
// DataModule.createNewList('list4');

console.log(_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].tasksList);

_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListMain();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListWindow();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].defaultTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FB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QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdFOzs7Ozs7Ozs7Ozs7Ozs7QUM3RHhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ25GMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNxQjtBQUtFO0FBQzhCO0FBQ2hCO0FBQ007QUFDM0MsWUFBWSwwQkFBMEI7O0FBRXRDLGdFQUFrQjtBQUNsQiwrREFBaUI7QUFDakIsbUVBQXFCO0FBQ3JCLDJFQUF5QjtBQUN6Qiw2RUFBMkI7O0FBRTNCLG1FQUEyQjtBQUMzQiwrREFBdUI7QUFDdkIseUVBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksNERBQW9COztBQUVoQyxrRUFBMEI7QUFDMUIsb0VBQTRCO0FBQzVCLGtFQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jcmVhdGVfbmV3X2xpc3Rfd2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvZGlzcGxheV9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFpbl93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIG1heC13aWR0aDozMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYTpob3ZlcixcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi50YXNrcy1maWVsZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbn1cXG4vKiBsaW5lIHRocm91dGggdGhlIHRleHQgaWYgaW5wdXQgaXMgY2hlY2tlZCAqL1xcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm8tdGFza3M6aG92ZXIsXFxuLm8tdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uby10YXNrcyA+IGlucHV0OmhvdmVyLFxcbi5mLXRhc2tzOmhvdmVyLFxcbi5mLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLmYtdGFza3MgPiBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm90dG9tLWVsZW1lbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuID4gaSB7XFxuICAgIG1hcmdpbjogNXB4IDVweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiA+IGkge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBvcC11cCBtZW51IGVsZW1lbnRzIHN0eWxpbmcgKi9cXG5cXG4vKiBjcmVhdGUgbmV3IGxpc3QgbWVudSAqL1xcblxcbi5uZXctbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGgxIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93ID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogY3JlYXRlIG5ldyB0YXNrIG1lbnUgKi9cXG5cXG4ubmV3LXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1tZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LW5hbWUgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogdGFza3MgbGlzdCBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGFza3MtbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gYSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IC5jcmVhdGUtbmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiBjdXJyZW50IHRhc2sgbWVudSBzdHlsaW5nICovXFxuXFxuLnRoaXMtdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5nby1iYWNrID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG59XFxuXFxuLmdvLWJhY2sgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLW5hbWUgPiBoMSxcXG4udGhpcy10YXNrLWRlc2NyaXB0aW9uID4gcCxcXG4udGhpcy10YXNrLXN0YXR1cyA+IHAsXFxuLnRoaXMtdGFzay1kYXRlID4gaSB7XFxuICAgIG1hcmdpbjogNXB4XFxufVxcblxcbi50aGlzLXRhc2stZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzaG93IGNsYXNzICovXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLDhDQUE4QztBQUM5QztJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7Ozs7OztJQU1JLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JB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Q2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIG1heC13aWR0aDozMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYTpob3ZlcixcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi50YXNrcy1maWVsZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbn1cXG4vKiBsaW5lIHRocm91dGggdGhlIHRleHQgaWYgaW5wdXQgaXMgY2hlY2tlZCAqL1xcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm8tdGFza3M6aG92ZXIsXFxuLm8tdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uby10YXNrcyA+IGlucHV0OmhvdmVyLFxcbi5mLXRhc2tzOmhvdmVyLFxcbi5mLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLmYtdGFza3MgPiBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm90dG9tLWVsZW1lbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuID4gaSB7XFxuICAgIG1hcmdpbjogNXB4IDVweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R0b20tbWVudSA+IGRpdiA+IGkge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBvcC11cCBtZW51IGVsZW1lbnRzIHN0eWxpbmcgKi9cXG5cXG4vKiBjcmVhdGUgbmV3IGxpc3QgbWVudSAqL1xcblxcbi5uZXctbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGgxIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93ID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogY3JlYXRlIG5ldyB0YXNrIG1lbnUgKi9cXG5cXG4ubmV3LXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1tZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LW5hbWUgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogdGFza3MgbGlzdCBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGFza3MtbGlzdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gYSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IC5jcmVhdGUtbmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiBjdXJyZW50IHRhc2sgbWVudSBzdHlsaW5nICovXFxuXFxuLnRoaXMtdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5nby1iYWNrID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG59XFxuXFxuLmdvLWJhY2sgPiBpOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLW5hbWUgPiBoMSxcXG4udGhpcy10YXNrLWRlc2NyaXB0aW9uID4gcCxcXG4udGhpcy10YXNrLXN0YXR1cyA+IHAsXFxuLnRoaXMtdGFzay1kYXRlID4gaSB7XFxuICAgIG1hcmdpbjogNXB4XFxufVxcblxcbi50aGlzLXRhc2stZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzaG93IGNsYXNzICovXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0V25kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3Qtd2luZG93Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnRuJyk7XG4gICAgY29uc3QgcmVhZHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZHktYnRuJyk7XG4gICAgY29uc3QgbmV3TGlzdE5hbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0LW5hbWUnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld0xpc3RXbmRvdyxcbiAgICAgICAgY2xvc2VCdG4sXG4gICAgICAgIHJlYWR5QnRuLFxuICAgICAgICBuZXdMaXN0TmFtZVRleHQsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IG5ld0xpc3RNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsb3NlV2luZG93KCkge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgIERPTS5uZXdMaXN0V25kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFySW5wdXQoKSB7XG4gICAgICAgICAgICBET00ubmV3TGlzdE5hbWVUZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBET00ubmV3TGlzdFduZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgaWYgKERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdChET00ubmV3TGlzdE5hbWVUZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUudGFza0xpc3RNYWluKCk7XG4gICAgICAgICAgICBkaXNwbGF5TW9kdWxlLnRhc2tMaXN0V2luZG93KCk7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnJlYWR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH1cbiAgICByZXR1cm4geyBjbG9zZVdpbmRvdywgY3JlYXRlTmV3TGlzdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3TGlzdE1vZHVsZTtcbiIsImltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MnKTtcbiAgICBjb25zdCB0YXNrTGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzJ1xuICAgICk7XG4gICAgY29uc3QgdGFza3NGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1maWVsZCcpO1xuICAgIGNvbnN0IHRhc2tzRmllbGRPbmdvaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWZpZWxkLW9uZ29pbmcnKTtcbiAgICBjb25zdCB0YXNrc0ZpZWxkRmluaXNoZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtZmllbGQtZmluaXNoZWQnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlck1lbnUsXG4gICAgICAgIHRhc2tMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0ZpZWxkLFxuICAgICAgICB0YXNrc0ZpZWxkT25nb2luZyxcbiAgICAgICAgdGFza3NGaWVsZEZpbmlzaGVkLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5TW9kdWxlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiB0YXNrTGlzdE1haW4oKSB7XG4gICAgICAgIERPTS5oZWFkZXJNZW51LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRpdGxlfWA7XG5cbiAgICAgICAgICAgIERPTS5oZWFkZXJNZW51LmFwcGVuZChuZXdMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXJNZW51O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrTGlzdFdpbmRvdygpIHtcbiAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRpdGxlfWA7XG5cbiAgICAgICAgICAgIERPTS50YXNrTGlzdFdpbmRvdy5hcHBlbmQobmV3TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiBET00udGFza0xpc3RXaW5kb3c7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUYXNrcygpIHtcbiAgICAgICAgZnVuY3Rpb24gb25nb2luZ1Rhc2tzKCkge1xuICAgICAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3RbMF0ub25nb2luZ1Rhc2tMaXN0LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza09uZ29pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5pZCA9ICdvLXRhc2tzJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5jbGFzc05hbWUgPSAnby10YXNrcyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuZGF0YXNldC50YXNrID0gYCR7aW5kZXh9YDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5pZCA9ICdvLXRhc2snO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQubmFtZSA9IGBvLXRhc2ske2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5jbGFzc05hbWUgPSAndGFza3MnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgby10YXNrJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0TGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dCk7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRPbmdvaW5nLmFwcGVuZENoaWxkKG5ld1Rhc2tPbmdvaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluaXNoZWRUYXNrcygpIHtcbiAgICAgICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0WzBdLmZpbmlzaGVkVGFza0xpc3QuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuaWQgPSAnZi10YXNrcyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkLmNsYXNzTmFtZSA9ICdmLXRhc2tzJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC50YXNrID0gYCR7aW5kZXh9YDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGaW5pc2hlZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC5pZCA9ICdmLXRhc2snO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0Lm5hbWUgPSBgZi10YXNrJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LmNsYXNzTmFtZSA9ICd0YXNrcyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGYtdGFzayR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXQpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbmdvaW5nVGFza3MoKTtcbiAgICAgICAgZmluaXNoZWRUYXNrcygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tMaXN0TWFpbixcbiAgICAgICAgdGFza0xpc3RXaW5kb3csXG4gICAgICAgIGRlZmF1bHRUYXNrcyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1vZHVsZTtcbiIsImNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idG4nKTtcbiAgICBjb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLXdpbmRvdycpO1xuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3dNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLXdpbmRvdy1tZW51Jyk7XG4gICAgY29uc3QgdGFza3NMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWxpc3QtYnRuJyk7XG4gICAgY29uc3QgdGFza3NMaXN0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWxpc3Qtd2luZG93Jyk7XG4gICAgY29uc3QgdGFza3NMaXN0V2luZG93TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudSdcbiAgICApO1xuICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLW5ldy1saXN0Jyk7XG4gICAgY29uc3QgbmV3TGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC13aW5kb3cnKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5XaW5kb3cod2luZG93KSB7XG4gICAgICAgIHdpbmRvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVGFza0J0bixcbiAgICAgICAgbmV3VGFza1dpbmRvdyxcbiAgICAgICAgbmV3VGFza1dpbmRvd01lbnUsXG4gICAgICAgIHRhc2tzTGlzdEJ0bixcbiAgICAgICAgdGFza3NMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0xpc3RXaW5kb3dNZW51LFxuICAgICAgICBjcmVhdGVOZXdMaXN0QnRuLFxuICAgICAgICBuZXdMaXN0V2luZG93LFxuICAgICAgICBvcGVuV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBhZGROZXdUYXNrQnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3Blbk5ld1Rhc2tXaW5kb3cgPSAoKSA9PiBET00ub3BlbldpbmRvdyhET00ubmV3VGFza1dpbmRvdyk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZU5ld1Rhc2tXaW5kb3coZSkge1xuICAgICAgICBpZiAoIURPTS5uZXdUYXNrV2luZG93TWVudS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIERPTS5uZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERPTS5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1Rhc2tXaW5kb3cpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xvc2VOZXdUYXNrV2luZG93KTtcbn1cblxuZnVuY3Rpb24gdGFza3NMaXN0QnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2tzTGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS50YXNrc0xpc3RXaW5kb3cpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrc0xpc3QoZSkge1xuICAgICAgICBpZiAoIURPTS50YXNrc0xpc3RXaW5kb3dNZW51LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgRE9NLnRhc2tzTGlzdFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBET00udGFza3NMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tzTGlzdFdpbmRvdyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbG9zZVRhc2tzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RCdG5DbGljaygpIHtcbiAgICBjb25zdCBvcGVuTmV3TGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS5uZXdMaXN0V2luZG93KTtcblxuICAgIERPTS5jcmVhdGVOZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0xpc3RXaW5kb3cpO1xufVxuXG5leHBvcnQgeyBhZGROZXdUYXNrQnRuQ2xpY2ssIHRhc2tzTGlzdEJ0bkNsaWNrLCBjcmVhdGVOZXdMaXN0QnRuQ2xpY2sgfTtcbiIsImNvbnN0IERhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vIGFsbCB0YXNrcyBkYXRhIGFycmF5XG4gICAgY29uc3QgdGFza3NMaXN0ID0gW107XG5cbiAgICAvLyBuZXcgbGlzdCBmYWN0b3J5XG4gICAgY29uc3QgbmV3TGlzdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBvbmdvaW5nVGFza0xpc3QgPSBbXTtcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrTGlzdCA9IFtdO1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgb25nb2luZ1Rhc2tMaXN0LCBmaW5pc2hlZFRhc2tMaXN0IH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5wdXNoKG5ld0xpc3QodGl0bGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVMaXN0KGxpc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0LnNwbGljZShsaXN0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIG5ldyB0YXNrIGZhY3RvcnlcbiAgICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBkYXRlKSA9PiAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGF0ZSxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgICAgIGxpc3RJbmRleCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRhdGVcbiAgICApIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ29uZ29pbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza3NMaXN0W2xpc3RJbmRleF0ub25nb2luZ1Rhc2tMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXR1cywgZGF0ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdFtsaXN0SW5kZXhdLmZpbmlzaGVkVGFza0xpc3QucHVzaChcbiAgICAgICAgICAgIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIGRhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayhsaXN0SW5kZXgsIHRhc2tJbmRleCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdvbmdvaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tzTGlzdFtsaXN0SW5kZXhdLm9uZ29pbmdUYXNrTGlzdC5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza3NMaXN0W2xpc3RJbmRleF0uZmluaXNoZWRUYXNrTGlzdC5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VGFza3NMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0LnB1c2gobmV3TGlzdCgnTXkgdGFza3MnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRhc2tzKCkge1xuICAgICAgICBjcmVhdGVOZXdUYXNrSW5UaGVMaXN0KFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICdPbmdvaW5nIHRhc2sgMScsXG4gICAgICAgICAgICAnTXkgb25nb2luZyB0YXNrIDEnLFxuICAgICAgICAgICAgJ29uZ29pbmcnLFxuICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgJ0ZpbmlzaGVkIHRhc2sgMScsXG4gICAgICAgICAgICAnTXkgZmluaXNoZWQgdGFzayAxJyxcbiAgICAgICAgICAgICdmaW5pc2hlZCcsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrc0xpc3QsXG4gICAgICAgIGNyZWF0ZU5ld0xpc3QsXG4gICAgICAgIGRlbGV0ZUxpc3QsXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QsXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGRlZmF1bHRUYXNrc0xpc3QsXG4gICAgICAgIGRlZmF1bHRUYXNrcyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YU1vZHVsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICAgIGFkZE5ld1Rhc2tCdG5DbGljayxcbiAgICB0YXNrc0xpc3RCdG5DbGljayxcbiAgICBjcmVhdGVOZXdMaXN0QnRuQ2xpY2ssXG59IGZyb20gJy4vbWFpbl93aW5kb3cnO1xuaW1wb3J0IG5ld0xpc3RNb2R1bGUgZnJvbSAnLi9jcmVhdGVfbmV3X2xpc3Rfd2luZG93JztcbmltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbi8vIGltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5hZGROZXdUYXNrQnRuQ2xpY2soKTtcbnRhc2tzTGlzdEJ0bkNsaWNrKCk7XG5jcmVhdGVOZXdMaXN0QnRuQ2xpY2soKTtcbm5ld0xpc3RNb2R1bGUuY2xvc2VXaW5kb3coKTtcbm5ld0xpc3RNb2R1bGUuY3JlYXRlTmV3TGlzdCgpO1xuXG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrc0xpc3QoKTtcbkRhdGFNb2R1bGUuZGVmYXVsdFRhc2tzKCk7XG5EYXRhTW9kdWxlLmNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgMCxcbiAgICAnTXkgbmV3IHRhc2snLFxuICAgICdteSBuZXcgdGFzayBkZXNjcmlwdGlvbicsXG4gICAgJ2ZpbmlzaGVkJyxcbiAgICAnYW55J1xuKTtcbi8vIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdCgnbGlzdDEnKTtcbi8vIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdCgnbGlzdDInKTtcbi8vIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdCgnbGlzdDMnKTtcbi8vIERhdGFNb2R1bGUuY3JlYXRlTmV3TGlzdCgnbGlzdDQnKTtcblxuY29uc29sZS5sb2coRGF0YU1vZHVsZS50YXNrc0xpc3QpO1xuXG5kaXNwbGF5TW9kdWxlLnRhc2tMaXN0TWFpbigpO1xuZGlzcGxheU1vZHVsZS50YXNrTGlzdFdpbmRvdygpO1xuZGlzcGxheU1vZHVsZS5kZWZhdWx0VGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==