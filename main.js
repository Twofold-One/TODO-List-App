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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks:hover,\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n.f-tasks:hover,\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > p,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n.o-tasks:hover,\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n.f-tasks:hover,\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > p,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n"],"sourceRoot":""}]);
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
    const taskListTags = document.querySelectorAll('[data-list-tag]');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
        taskListTags,
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
        list.tasks.forEach((task, index) => {
            if (task.on) {
                const newTaskOngoing = document.createElement('div');
                newTaskOngoing.dataset.status = 'ongoing';
                newTaskOngoing.dataset.taskNumber = `${index}`;
                newTaskOngoing.className = 'o-tasks';

                const newTaskOngoingInput = document.createElement('input');
                newTaskOngoingInput.type = 'checkbox';
                newTaskOngoingInput.dataset.status = 'ongoing';
                newTaskOngoingInput.dataset.taskNumber = `${index}`;
                newTaskOngoingInput.name = `o-task${index}`;
                newTaskOngoingInput.dataset.taskTag = '';
                newTaskOngoingInput.className = 'tasks';

                const newTaskOngoingInputLabel =
                    document.createElement('label');
                newTaskOngoingInputLabel.setAttribute('for', `o-task${index}`);
                newTaskOngoingInputLabel.dataset.taskNumber = `${index}`;
                newTaskOngoingInputLabel.textContent = task.title;

                newTaskOngoing.appendChild(newTaskOngoingInput);
                newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
            }
            return DOM.tasksFieldOngoing;
        });
    }

    function displayFinishedTasks(list) {
        list.tasks.forEach((task, index) => {
            if (!task.on) {
                const newTaskFinished = document.createElement('div');
                newTaskFinished.dataset.status = 'finished';
                newTaskFinished.dataset.taskNumber = `${index}`;
                newTaskFinished.className = 'f-tasks';

                const newTaskFinishedInput = document.createElement('input');
                newTaskFinishedInput.type = 'checkbox';
                newTaskFinishedInput.dataset.status = 'finished';
                newTaskFinishedInput.dataset.taskNumber = `${index}`;
                newTaskFinishedInput.name = `f-task${index}`;
                newTaskFinishedInput.dataset.taskTag = '';
                newTaskFinishedInput.className = 'tasks';
                newTaskFinishedInput.checked = true;

                const newTaskFinishedInputLabel =
                    document.createElement('label');
                newTaskFinishedInputLabel.setAttribute('for', `f-task${index}`);
                newTaskFinishedInputLabel.dataset.taskNumber = `${index}`;
                newTaskFinishedInputLabel.textContent = task.title;

                newTaskFinished.appendChild(newTaskFinishedInput);
                newTaskFinished.appendChild(newTaskFinishedInputLabel);
                return DOM.tasksFieldFinished.appendChild(newTaskFinished);
            }
            return DOM.tasksFieldFinished;
        });
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

    return {
        taskListMain,
        taskListWindow,
        displayActiveList,
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
/* harmony export */   "addNewTaskBtnClick": () => (/* binding */ addNewTaskBtnClick),
/* harmony export */   "tasksListBtnClick": () => (/* binding */ tasksListBtnClick),
/* harmony export */   "createNewListBtnClick": () => (/* binding */ createNewListBtnClick),
/* harmony export */   "createNewListMenuBtnClick": () => (/* binding */ createNewListMenuBtnClick)
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
    const createNewListMenuBtn = document.getElementById(
        'create-new-list-menu'
    );

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

function createNewListMenuBtnClick() {
    const openNewListWindow = () => {
        DOM.tasksListWindow.classList.remove('show');
        DOM.openWindow(DOM.newListWindow);
    };

    DOM.createNewListMenuBtn.addEventListener('click', openNewListWindow);
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



const DOM = (() => {
    // I have to reassing dynamically created nodes, beacuse
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const tasksEl = document.querySelectorAll('[data-task-tag]');

    return {
        tasksEl,
    };
})();

const TaskFieldModule = (() => {
    function changeTaskStatus() {
        DOM.tasksEl = document.querySelectorAll('[data-task-tag]');

        function listActivityCheck(list) {
            return list.activeList === true;
        }

        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);

        DOM.tasksEl.forEach((element) => {
            element.addEventListener('input', (e) => {
                const { taskNumber } = e.target.dataset;
                console.log(taskNumber);
                console.log(currentActiveList.tasks[taskNumber].on);
                if (e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = false;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                } else if (!e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = true;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                }
            });
        });
    }

    return {
        changeTaskStatus,
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
// import _ from 'lodash';






// import { formatDistance, subDays } from 'date-fns';

(0,_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__.addNewTaskBtnClick)();
(0,_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__.tasksListBtnClick)();
(0,_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__.createNewListBtnClick)();
(0,_main_window_btn_clicks__WEBPACK_IMPORTED_MODULE_1__.createNewListMenuBtnClick)();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].closeWindow();
_create_new_list_window__WEBPACK_IMPORTED_MODULE_2__["default"].createNewList();

_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasksList();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasks();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTasksListActiveStatus();
_task_data__WEBPACK_IMPORTED_MODULE_3__["default"].createNewTaskInTheList(
    0,
    'My new task',
    'my new task description',
    false,
    'any'
);
// DataModule.createNewList('list1');
// DataModule.createNewList('list2');
// DataModule.createNewList('list3');
// DataModule.createNewList('list4');

// console.log(DataModule.tasksList);

_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListMain();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].taskListWindow();
_display_data__WEBPACK_IMPORTED_MODULE_4__["default"].displayActiveList();
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].changeTaskStatus();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdB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YTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNxQjtBQU1hO0FBQ21CO0FBQ2hCO0FBQ007QUFDQztBQUM1QyxZQUFZLDBCQUEwQjs7QUFFdEMsMkVBQWtCO0FBQ2xCLDBFQUFpQjtBQUNqQiw4RUFBcUI7QUFDckIsa0ZBQXlCO0FBQ3pCLDJFQUF5QjtBQUN6Qiw2RUFBMkI7O0FBRTNCLG1FQUEyQjtBQUMzQiwrREFBdUI7QUFDdkIsK0VBQXVDO0FBQ3ZDLHlFQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrRUFBMEI7QUFDMUIsb0VBQTRCO0FBQzVCLHVFQUErQjtBQUMvQixxRUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY3JlYXRlX25ld19saXN0X3dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2Rpc3BsYXlfZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21haW5fd2luZG93X2J0bl9jbGlja3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrc19maWVsZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlci1tZW51LFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhOmhvdmVyLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBjb2xvcjpibHVlO1xcbn1cXG5cXG4udGFza3MtZmllbGQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG59XFxuLyogbGluZSB0aHJvdXRoIHRoZSB0ZXh0IGlmIGlucHV0IGlzIGNoZWNrZWQgKi9cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5vLXRhc2tzOmhvdmVyLFxcbi5vLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLm8tdGFza3MgPiBpbnB1dDpob3ZlcixcXG4uZi10YXNrczpob3ZlcixcXG4uZi10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5mLXRhc2tzID4gaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvdHRvbS1lbGVtZW50cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biA+IGkge1xcbiAgICBtYXJnaW46IDVweCA1cHg7XFxufVxcblxcbi5ib3R0b20tbWVudSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYge1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYgPiBpIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwb3AtdXAgbWVudSBlbGVtZW50cyBzdHlsaW5nICovXFxuXFxuLyogY3JlYXRlIG5ldyBsaXN0IG1lbnUgKi9cXG5cXG4ubmV3LWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBoMSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdyA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIGNyZWF0ZSBuZXcgdGFzayBtZW51ICovXFxuXFxuLm5ldy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctbWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1uYW1lID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHRhc2tzIGxpc3QgbWVudSBzdHlsaW5nICovXFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IGEsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiAuY3JlYXRlLW5ldy1saXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyogY3VycmVudCB0YXNrIG1lbnUgc3R5bGluZyAqL1xcblxcbi50aGlzLXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uZ28tYmFjayA+IGkge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxufVxcblxcbi5nby1iYWNrID4gaTpob3ZlciB7XFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1uYW1lID4gaDEsXFxuLnRoaXMtdGFzay1kZXNjcmlwdGlvbiA+IHAsXFxuLnRoaXMtdGFzay1zdGF0dXMgPiBwLFxcbi50aGlzLXRhc2stZGF0ZSA+IGkge1xcbiAgICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhpcy10YXNrLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc2hvdyBjbGFzcyAqL1xcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0EsOENBQThDO0FBQzlDO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTs7Ozs7O0lBTUksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7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IixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlci1tZW51LFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgPiBhOmhvdmVyLFxcbi5oZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzID4gYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBjb2xvcjpibHVlO1xcbn1cXG5cXG4udGFza3MtZmllbGQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG59XFxuLyogbGluZSB0aHJvdXRoIHRoZSB0ZXh0IGlmIGlucHV0IGlzIGNoZWNrZWQgKi9cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5vLXRhc2tzOmhvdmVyLFxcbi5vLXRhc2tzID4gbGFiZWw6aG92ZXIsXFxuLm8tdGFza3MgPiBpbnB1dDpob3ZlcixcXG4uZi10YXNrczpob3ZlcixcXG4uZi10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5mLXRhc2tzID4gaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvdHRvbS1lbGVtZW50cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBsaWdodGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biA+IGkge1xcbiAgICBtYXJnaW46IDVweCA1cHg7XFxufVxcblxcbi5ib3R0b20tbWVudSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYge1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUgPiBkaXYgPiBpIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwb3AtdXAgbWVudSBlbGVtZW50cyBzdHlsaW5nICovXFxuXFxuLyogY3JlYXRlIG5ldyBsaXN0IG1lbnUgKi9cXG5cXG4ubmV3LWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBoMSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubmV3LWxpc3Qtd2luZG93LWhlYWRlciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdyA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIGNyZWF0ZSBuZXcgdGFzayBtZW51ICovXFxuXFxuLm5ldy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LWZvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5uZXctdGFzay13aW5kb3ctbWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1uYW1lID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHRhc2tzIGxpc3QgbWVudSBzdHlsaW5nICovXFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSxcXG4udGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctbWVudSA+IGEsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiAuY3JlYXRlLW5ldy1saXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyogY3VycmVudCB0YXNrIG1lbnUgc3R5bGluZyAqL1xcblxcbi50aGlzLXRhc2std2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uZ28tYmFjayA+IGkge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxufVxcblxcbi5nby1iYWNrID4gaTpob3ZlciB7XFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRoaXMtdGFzay1uYW1lID4gaDEsXFxuLnRoaXMtdGFzay1kZXNjcmlwdGlvbiA+IHAsXFxuLnRoaXMtdGFzay1zdGF0dXMgPiBwLFxcbi50aGlzLXRhc2stZGF0ZSA+IGkge1xcbiAgICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhpcy10YXNrLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc2hvdyBjbGFzcyAqL1xcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5pbXBvcnQgZGlzcGxheU1vZHVsZSBmcm9tICcuL2Rpc3BsYXlfZGF0YSc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdFduZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0LXdpbmRvdycpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJ0bicpO1xuICAgIGNvbnN0IHJlYWR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWR5LWJ0bicpO1xuICAgIGNvbnN0IG5ld0xpc3ROYW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC1uYW1lJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdMaXN0V25kb3csXG4gICAgICAgIGNsb3NlQnRuLFxuICAgICAgICByZWFkeUJ0bixcbiAgICAgICAgbmV3TGlzdE5hbWVUZXh0LFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBuZXdMaXN0TW9kdWxlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjbG9zZVdpbmRvdygpIHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICBET00ubmV3TGlzdFduZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERPTS5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0KCkge1xuICAgICAgICBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICAgICAgICAgRE9NLm5ld0xpc3ROYW1lVGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgRE9NLm5ld0xpc3RXbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgIGlmIChET00ubmV3TGlzdE5hbWVUZXh0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoRE9NLm5ld0xpc3ROYW1lVGV4dC52YWx1ZSk7XG4gICAgICAgICAgICBkaXNwbGF5TW9kdWxlLnRhc2tMaXN0TWFpbigpO1xuICAgICAgICAgICAgZGlzcGxheU1vZHVsZS50YXNrTGlzdFdpbmRvdygpO1xuICAgICAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIERPTS5yZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjbG9zZVdpbmRvdywgY3JlYXRlTmV3TGlzdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3TGlzdE1vZHVsZTtcbiIsImltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWFkZGl0aW9uYWwtdGFza3MnKTtcbiAgICBjb25zdCB0YXNrTGlzdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAndGFza3MtbGlzdC13aW5kb3ctbWVudS1hZGRpdGlvbmFsLXRhc2tzJ1xuICAgICk7XG4gICAgY29uc3QgdGFza3NGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1maWVsZCcpO1xuICAgIGNvbnN0IHRhc2tzRmllbGRPbmdvaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWZpZWxkLW9uZ29pbmcnKTtcbiAgICBjb25zdCB0YXNrc0ZpZWxkRmluaXNoZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtZmllbGQtZmluaXNoZWQnKTtcbiAgICBjb25zdCB0YXNrTGlzdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXN0LXRhZ10nKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlck1lbnUsXG4gICAgICAgIHRhc2tMaXN0V2luZG93LFxuICAgICAgICB0YXNrc0ZpZWxkLFxuICAgICAgICB0YXNrc0ZpZWxkT25nb2luZyxcbiAgICAgICAgdGFza3NGaWVsZEZpbmlzaGVkLFxuICAgICAgICB0YXNrTGlzdFRhZ3MsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRhc2tMaXN0TWFpbigpIHtcbiAgICAgICAgRE9NLmhlYWRlck1lbnUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIERhdGFNb2R1bGUudGFza3NMaXN0LmZvckVhY2goKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbmV3TGlzdC5ocmVmID0gJyMnO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgbmV3TGlzdC5kYXRhc2V0Lmxpc3RUYWcgPSAnJztcbiAgICAgICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRpdGxlfWA7XG4gICAgICAgICAgICBpZiAobGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5jbGFzc05hbWUgPSAnYWN0aXZlLWxpc3QnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBET00uaGVhZGVyTWVudS5hcHBlbmRDaGlsZChuZXdMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXJNZW51O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrTGlzdFdpbmRvdygpIHtcbiAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0VGFnID0gJyc7XG4gICAgICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gYCR7bGlzdC50aXRsZX1gO1xuICAgICAgICAgICAgaWYgKGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ2FjdGl2ZS1saXN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRE9NLnRhc2tMaXN0V2luZG93LmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tMaXN0V2luZG93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKSB7XG4gICAgICAgIGNvbnN0IG9uZ29pbmdUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb25nb2luZ1Rhc2tzSDIudGV4dENvbnRlbnQgPSAnT25nb2luZyB0YXNrcyc7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5hcHBlbmRDaGlsZChvbmdvaW5nVGFza3NIMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUZpbmlzaGVkVGFza3NIMigpIHtcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZmluaXNoZWRUYXNrc0gyLnRleHRDb250ZW50ID0gJ0ZpbmlzaGVkIHRhc2tzJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChmaW5pc2hlZFRhc2tzSDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlPbmdvaW5nVGFza3MobGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5vbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuZGF0YXNldC5zdGF0dXMgPSAnb25nb2luZyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuZGF0YXNldC50YXNrTnVtYmVyID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5jbGFzc05hbWUgPSAnby10YXNrcyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrT25nb2luZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQuZGF0YXNldC5zdGF0dXMgPSAnb25nb2luZyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQubmFtZSA9IGBvLXRhc2ske2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnRhc2tUYWcgPSAnJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmNsYXNzTmFtZSA9ICd0YXNrcyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrT25nb2luZ0lucHV0TGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBvLXRhc2ske2luZGV4fWApO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5hcHBlbmRDaGlsZChuZXdUYXNrT25nb2luZ0lucHV0KTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZy5hcHBlbmRDaGlsZChuZXdUYXNrT25nb2luZ0lucHV0TGFiZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZE9uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIERPTS50YXNrc0ZpZWxkT25nb2luZztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUZpbmlzaGVkVGFza3MobGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhc2sub24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC5zdGF0dXMgPSAnZmluaXNoZWQnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5kYXRhc2V0LnRhc2tOdW1iZXIgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5jbGFzc05hbWUgPSAnZi10YXNrcyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRmluaXNoZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuZGF0YXNldC5zdGF0dXMgPSAnZmluaXNoZWQnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQubmFtZSA9IGBmLXRhc2ske2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuZGF0YXNldC50YXNrVGFnID0gJyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tzJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgZi10YXNrJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXQpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIERPTS50YXNrc0ZpZWxkRmluaXNoZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWN0aXZlTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgcmVzZXRUYXNrcygpO1xuICAgICAgICBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheU9uZ29pbmdUYXNrcyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGRpc3BsYXlGaW5pc2hlZFRhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheUZpbmlzaGVkVGFza3MoY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tMaXN0TWFpbixcbiAgICAgICAgdGFza0xpc3RXaW5kb3csXG4gICAgICAgIGRpc3BsYXlBY3RpdmVMaXN0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW9kdWxlO1xuIiwiY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ0bicpO1xuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2std2luZG93Jyk7XG4gICAgY29uc3QgbmV3VGFza1dpbmRvd01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2std2luZG93LW1lbnUnKTtcbiAgICBjb25zdCB0YXNrc0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtbGlzdC1idG4nKTtcbiAgICBjb25zdCB0YXNrc0xpc3RXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtbGlzdC13aW5kb3cnKTtcbiAgICBjb25zdCB0YXNrc0xpc3RXaW5kb3dNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICd0YXNrcy1saXN0LXdpbmRvdy1tZW51J1xuICAgICk7XG4gICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbmV3LWxpc3QnKTtcbiAgICBjb25zdCBuZXdMaXN0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0LXdpbmRvdycpO1xuICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RNZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICdjcmVhdGUtbmV3LWxpc3QtbWVudSdcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3cpIHtcbiAgICAgICAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUYXNrQnRuLFxuICAgICAgICBuZXdUYXNrV2luZG93LFxuICAgICAgICBuZXdUYXNrV2luZG93TWVudSxcbiAgICAgICAgdGFza3NMaXN0QnRuLFxuICAgICAgICB0YXNrc0xpc3RXaW5kb3csXG4gICAgICAgIHRhc2tzTGlzdFdpbmRvd01lbnUsXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdG4sXG4gICAgICAgIG5ld0xpc3RXaW5kb3csXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RNZW51QnRuLFxuICAgICAgICBvcGVuV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBhZGROZXdUYXNrQnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3Blbk5ld1Rhc2tXaW5kb3cgPSAoKSA9PiBET00ub3BlbldpbmRvdyhET00ubmV3VGFza1dpbmRvdyk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZU5ld1Rhc2tXaW5kb3coZSkge1xuICAgICAgICBpZiAoIURPTS5uZXdUYXNrV2luZG93TWVudS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIERPTS5uZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERPTS5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1Rhc2tXaW5kb3cpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xvc2VOZXdUYXNrV2luZG93KTtcbn1cblxuZnVuY3Rpb24gdGFza3NMaXN0QnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2tzTGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS50YXNrc0xpc3RXaW5kb3cpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrc0xpc3QoZSkge1xuICAgICAgICBpZiAoIURPTS50YXNrc0xpc3RXaW5kb3dNZW51LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgRE9NLnRhc2tzTGlzdFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBET00udGFza3NMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tzTGlzdFdpbmRvdyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbG9zZVRhc2tzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RCdG5DbGljaygpIHtcbiAgICBjb25zdCBvcGVuTmV3TGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS5uZXdMaXN0V2luZG93KTtcblxuICAgIERPTS5jcmVhdGVOZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0xpc3RXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrKCkge1xuICAgIGNvbnN0IG9wZW5OZXdMaXN0V2luZG93ID0gKCkgPT4ge1xuICAgICAgICBET00udGFza3NMaXN0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgRE9NLm9wZW5XaW5kb3coRE9NLm5ld0xpc3RXaW5kb3cpO1xuICAgIH07XG5cbiAgICBET00uY3JlYXRlTmV3TGlzdE1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTmV3TGlzdFdpbmRvdyk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkTmV3VGFza0J0bkNsaWNrLFxuICAgIHRhc2tzTGlzdEJ0bkNsaWNrLFxuICAgIGNyZWF0ZU5ld0xpc3RCdG5DbGljayxcbiAgICBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrLFxufTtcbiIsImNvbnN0IERhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vIGFsbCB0YXNrcyBkYXRhIGFycmF5XG4gICAgY29uc3QgdGFza3NMaXN0ID0gW107XG5cbiAgICAvLyBuZXcgbGlzdCBmYWN0b3J5XG4gICAgY29uc3QgbmV3TGlzdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCB0YXNrcywgYWN0aXZlTGlzdCB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0KHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3QucHVzaChuZXdMaXN0KHRpdGxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlTGlzdChsaXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBuZXcgdGFzayBmYWN0b3J5XG4gICAgY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIG9uLCBkYXRlKSA9PiAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIG9uLFxuICAgICAgICBkYXRlLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0luVGhlTGlzdChsaXN0SW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb24sIGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdFtsaXN0SW5kZXhdLnRhc2tzLnB1c2goXG4gICAgICAgICAgICBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgb24sIGRhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayhsaXN0SW5kZXgsIHRhc2tJbmRleCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0W2xpc3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRhc2tzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5wdXNoKG5ld0xpc3QoJ015IHRhc2tzJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUYXNrcygpIHtcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAnT25nb2luZyB0YXNrIDEnLFxuICAgICAgICAgICAgJ015IG9uZ29pbmcgdGFzayAxJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAnRmluaXNoZWQgdGFzayAxJyxcbiAgICAgICAgICAgICdNeSBmaW5pc2hlZCB0YXNrIDEnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VGFza3NMaXN0QWN0aXZlU3RhdHVzKCkge1xuICAgICAgICB0YXNrc0xpc3RbMF0uYWN0aXZlTGlzdCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFza09uU3RhdHVzKHRhc2spIHtcbiAgICAgICAgcmV0dXJuICF0YXNrLm9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tzTGlzdCxcbiAgICAgICAgY3JlYXRlTmV3TGlzdCxcbiAgICAgICAgZGVsZXRlTGlzdCxcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdCxcbiAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgZGVmYXVsdFRhc2tzTGlzdCxcbiAgICAgICAgZGVmYXVsdFRhc2tzLFxuICAgICAgICBkZWZhdWx0VGFza3NMaXN0QWN0aXZlU3RhdHVzLFxuICAgICAgICBjaGFuZ2VUYXNrT25TdGF0dXMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFNb2R1bGU7XG4iLCJpbXBvcnQgZGlzcGxheU1vZHVsZSBmcm9tICcuL2Rpc3BsYXlfZGF0YSc7XG5pbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgLy8gSSBoYXZlIHRvIHJlYXNzaW5nIGR5bmFtaWNhbGx5IGNyZWF0ZWQgbm9kZXMsIGJlYWN1c2VcbiAgICAvLyBvZiBpbml0aWFsIHZhbHVlIGluIHRoZSBET00gZWxlbWVudCBpcyBldmFsdWF0ZWQgdXBvblxuICAgIC8vIGZpcnN0IGV4cGFuZGluZ1xuICAgIGNvbnN0IHRhc2tzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXNrLXRhZ10nKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tzRWwsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IFRhc2tGaWVsZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2hhbmdlVGFza1N0YXR1cygpIHtcbiAgICAgICAgRE9NLnRhc2tzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXNrLXRhZ10nKTtcblxuICAgICAgICBmdW5jdGlvbiBsaXN0QWN0aXZpdHlDaGVjayhsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hY3RpdmVMaXN0ID09PSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUxpc3QgPSBEYXRhTW9kdWxlLnRhc2tzTGlzdC5maW5kKGxpc3RBY3Rpdml0eUNoZWNrKTtcblxuICAgICAgICBET00udGFza3NFbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhc2tOdW1iZXIgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza051bWJlcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24pO1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLm9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0ZpZWxkTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gICAgYWRkTmV3VGFza0J0bkNsaWNrLFxuICAgIHRhc2tzTGlzdEJ0bkNsaWNrLFxuICAgIGNyZWF0ZU5ld0xpc3RCdG5DbGljayxcbiAgICBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrLFxufSBmcm9tICcuL21haW5fd2luZG93X2J0bl9jbGlja3MnO1xuaW1wb3J0IG5ld0xpc3RNb2R1bGUgZnJvbSAnLi9jcmVhdGVfbmV3X2xpc3Rfd2luZG93JztcbmltcG9ydCBEYXRhTW9kdWxlIGZyb20gJy4vdGFza19kYXRhJztcbmltcG9ydCBkaXNwbGF5TW9kdWxlIGZyb20gJy4vZGlzcGxheV9kYXRhJztcbmltcG9ydCBUYXNrRmllbGRNb2R1bGUgZnJvbSAnLi90YXNrc19maWVsZCc7XG4vLyBpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuYWRkTmV3VGFza0J0bkNsaWNrKCk7XG50YXNrc0xpc3RCdG5DbGljaygpO1xuY3JlYXRlTmV3TGlzdEJ0bkNsaWNrKCk7XG5jcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrKCk7XG5uZXdMaXN0TW9kdWxlLmNsb3NlV2luZG93KCk7XG5uZXdMaXN0TW9kdWxlLmNyZWF0ZU5ld0xpc3QoKTtcblxuRGF0YU1vZHVsZS5kZWZhdWx0VGFza3NMaXN0KCk7XG5EYXRhTW9kdWxlLmRlZmF1bHRUYXNrcygpO1xuRGF0YU1vZHVsZS5kZWZhdWx0VGFza3NMaXN0QWN0aXZlU3RhdHVzKCk7XG5EYXRhTW9kdWxlLmNyZWF0ZU5ld1Rhc2tJblRoZUxpc3QoXG4gICAgMCxcbiAgICAnTXkgbmV3IHRhc2snLFxuICAgICdteSBuZXcgdGFzayBkZXNjcmlwdGlvbicsXG4gICAgZmFsc2UsXG4gICAgJ2FueSdcbik7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QxJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QyJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QzJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3Q0Jyk7XG5cbi8vIGNvbnNvbGUubG9nKERhdGFNb2R1bGUudGFza3NMaXN0KTtcblxuZGlzcGxheU1vZHVsZS50YXNrTGlzdE1haW4oKTtcbmRpc3BsYXlNb2R1bGUudGFza0xpc3RXaW5kb3coKTtcbmRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcblRhc2tGaWVsZE1vZHVsZS5jaGFuZ2VUYXNrU3RhdHVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=