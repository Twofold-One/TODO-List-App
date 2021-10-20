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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.app-container {\n    position:relative;\n    width: 300px;\n    min-height: 600px;\n    border: 5px solid black;\n    border-radius: 10px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.header > h1 {\n    text-align: center;\n    margin: 10px;\n}\n\n.header-menu,\n.header-menu-additional-tasks {\n    max-width:300px;\n    overflow: auto;\n    white-space: nowrap;\n    margin: 5px;\n}\n\n.header-menu-additional-tasks {\n    display: inline;\n}\n\n.header-menu > a,\n.header-menu-additional-tasks > a {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em;\n    margin-right: 1em;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\n.header-menu > a:hover,\n.header-menu-additional-tasks > a:hover {\n    background-color: lightgrey;\n}\n\n.active-list {\n    background-color: lightgray;\n    color:blue;\n}\n\n.tasks-field-container {\n    margin: 10px 5px;\n}\n/* line throuth the text if input is checked */\ninput:checked + label {\n    color: grey;\n    text-decoration: line-through;\n}\n\n/* .o-tasks:hover, */\n.o-tasks > label:hover,\n.o-tasks > input:hover,\n/* .f-tasks:hover, */\n.f-tasks > label:hover,\n.f-tasks > input:hover {\n    background-color: lightgrey;\n    cursor: pointer;\n}\n\n.bottom-elements {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n}\n\n.add-task {\n    display: flex;\n    justify-content: center;\n    bottom: 0px;\n}\n\n.add-task-btn {\n    font-size: 1.5em;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0px 0px 10px lightgrey;\n    cursor: pointer;\n}\n\n.add-task-btn > i {\n    margin: 5px 5px;\n}\n\n.bottom-menu {\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 10px;\n}\n\n.bottom-menu > div {\n    margin: 5px 10px;\n}\n\n.bottom-menu > div > i {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n/* pop-up menu elements styling */\n\n/* create new list menu */\n\n.new-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.new-list-window-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-list-window-header > h1 {\n    margin: 5px;\n}\n\n.new-list-window-header > button {\n    font-size: 1.5em;\n    border: none;\n    background-color: white;\n    color: grey;\n    margin: 5px;\n}\n\n.new-list-window-header > button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.new-list-window > textarea {\n    width: 100%;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n/* create new task menu */\n\n.new-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.new-task-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.new-task-window-menu {\n    position: relative;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.task-window-menu-name > textarea {\n    width: 100%;\n    height: auto;\n    border: none;\n    font-size: 2em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-description > textarea {\n    width: 100%;\n    height: fit-content;\n    border: none;\n    font-size: 1.5em;\n    overflow: hidden;\n    resize: none;\n}\n\n.task-window-menu-buttons {\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-window-menu-buttons > button {\n    font-size: 2em;\n    margin: 5px;\n    padding: 5px;\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n\n/* tasks list menu styling */\n\n.tasks-list-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.tasks-list-window-font {\n    width: 100%;\n    height: 50%;\n    background-color: black;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    opacity: 0.8;\n}\n\n.tasks-list-window-menu,\n.tasks-list-window-menu-additional-tasks {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 50%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.tasks-list-window-menu > a,\n.tasks-list-window-menu-additional-tasks > a {\n   padding: 10px 10px;\n}\n\n.tasks-list-window-menu > .create-new-list {\n    position: absolute;\n    border-top: 1px solid gray;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* current task menu styling */\n\n.this-task-window {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    z-index: 2;\n}\n\n.go-back > i {\n    font-size: 2em;\n    margin: 10px 10px;\n}\n\n.go-back > i:hover {\n    color: lightskyblue;\n    cursor: pointer;\n}\n\n.this-task-name > h1,\n.this-task-description > p,\n.this-task-status > label,\n.this-task-date > i {\n    margin: 5px\n}\n\n.this-task-date {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.this-task-delete {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display:flex;\n    justify-content: center;\n}\n\n.this-task-delete > i {\n    color: black;\n    font-size: 2em;\n}\n\n.this-task-delete > i:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* show class */\n.show {\n    display: block;\n}\n"],"sourceRoot":""}]);
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

const NewListModule = (() => {
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
                newTaskOngoingInputLabel.setAttribute('for', `o-task${index}`);
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

    function displayFinishedTasks(list) {
        list.tasks.forEach((task, index) => {
            if (!task.on) {
                const newTaskFinished = document.createElement('div');
                // newTaskFinished.dataset.status = 'finished';
                newTaskFinished.dataset.taskNumber = `${index}`;
                // newTaskFinished.dataset.thisTask = '';
                newTaskFinished.className = 'f-tasks';

                const newTaskFinishedInput = document.createElement('input');
                newTaskFinishedInput.type = 'checkbox';
                // newTaskFinishedInput.dataset.status = 'finished';
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
                newTaskFinishedInputLabel.dataset.thisTask = '';

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

    function displayChosenTaskWindow(activeList, taskNumber) {
        function taskWindowClear() {
            DOM.newTaskWindow.innerHTML = '';
        }

        const goBackBtn = document.createElement('div');
        goBackBtn.id = 'this-task-go-back';
        goBackBtn.className = 'go-back';
        goBackBtn.insertAdjacentHTML(
            'afterbegin',
            '<i class="fas fa-chevron-left"></i>'
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
        thisTaskStatus.id = 'this-task-status';
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
    }

    return {
        taskListMain,
        taskListWindow,
        displayActiveList,
        displayChosenTaskWindow,
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

/***/ "./src/task_window.js":
/*!****************************!*\
  !*** ./src/task_window.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = (() => {
    const backBtn = document.querySelector('#this-task-go-back > i');
    const taskTitle = document.querySelector('[data-task-title]');
    const taskDescription = document.querySelector('[data-task-descritption]');
    const taskStatus = document.querySelector('[data-task-status]');
    const taskDate = document.querySelector('[data-task-date]');
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
    function closeTaskWindow() {
        return DOM.thisTaskWidnow.classList.remove('show');
    }
    function backBtnClick() {
        DOM.backBtn = document.querySelector('#this-task-go-back > i');
        DOM.backBtn.addEventListener('click', (e) => {
            console.log(e.target);
        });
    }
    return {
        backBtnClick,
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
    function changeTaskStatus() {
        DOM.tasksElInput = document.querySelectorAll('[data-task-tag]');

        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);

        DOM.tasksElInput.forEach((element) => {
            element.addEventListener('input', (e) => {
                const { taskNumber } = e.target.dataset;
                console.log(taskNumber);
                console.log(currentActiveList.tasks[taskNumber].on);
                if (e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = false;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                } else if (!e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = true;
                    _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                }
            });
        });
    }

    function openThisTaskWindow() {
        DOM.thisTask = document.querySelectorAll('[data-this-task]');
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = _task_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasksList.find(listActivityCheck);
        console.log(currentActiveList);
        console.log(DOM.thisTask);
        DOM.thisTask.forEach((element) => {
            element.addEventListener('click', (e) => {
                const thisTaskNumber = e.target.dataset.taskNumber;
                console.log(e.target.dataset.taskNumber);
                DOM.thisTaskWindow.classList.add('show');
                return _display_data__WEBPACK_IMPORTED_MODULE_0__["default"].displayChosenTaskWindow(
                    currentActiveList,
                    thisTaskNumber
                );
            });
        });
    }

    return {
        changeTaskStatus,
        openThisTaskWindow,
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
/* harmony import */ var _task_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task_window */ "./src/task_window.js");
// import _ from 'lodash';







// import NewTaskModule from './add_new_task';
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
    true,
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
// displayModule.displayChosenTaskWindow(DataModule.tasksList[0], 0);
_tasks_field__WEBPACK_IMPORTED_MODULE_5__["default"].openThisTaskWindow();

_task_window__WEBPACK_IMPORTED_MODULE_6__["default"].backBtnClick();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FCO0FBTWE7QUFDbUI7QUFDaEI7QUFDTTtBQUNDO0FBQ0M7QUFDN0M7QUFDQSxZQUFZLDBCQUEwQjs7QUFFdEMsMkVBQWtCO0FBQ2xCLDBFQUFpQjtBQUNqQiw4RUFBcUI7QUFDckIsa0ZBQXlCO0FBQ3pCLDJFQUF5QjtBQUN6Qiw2RUFBMkI7O0FBRTNCLG1FQUEyQjtBQUMzQiwrREFBdUI7QUFDdkIsK0VBQXVDO0FBQ3ZDLHlFQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrRUFBMEI7QUFDMUIsb0VBQTRCO0FBQzVCLHVFQUErQjtBQUMvQixxRUFBZ0M7QUFDaEM7QUFDQSx1RUFBa0M7O0FBRWxDLGlFQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jcmVhdGVfbmV3X2xpc3Rfd2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvZGlzcGxheV9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFpbl93aW5kb3dfYnRuX2NsaWNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tfZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tfd2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGFza3NfZmllbGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIG1heC13aWR0aDozMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYTpob3ZlcixcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnRhc2tzLWZpZWxkLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCA1cHg7XFxufVxcbi8qIGxpbmUgdGhyb3V0aCB0aGUgdGV4dCBpZiBpbnB1dCBpcyBjaGVja2VkICovXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiAuby10YXNrczpob3ZlciwgKi9cXG4uby10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5vLXRhc2tzID4gaW5wdXQ6aG92ZXIsXFxuLyogLmYtdGFza3M6aG92ZXIsICovXFxuLmYtdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uZi10YXNrcyA+IGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib3R0b20tZWxlbWVudHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4gPiBpIHtcXG4gICAgbWFyZ2luOiA1cHggNXB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2IHtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2ID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogcG9wLXVwIG1lbnUgZWxlbWVudHMgc3R5bGluZyAqL1xcblxcbi8qIGNyZWF0ZSBuZXcgbGlzdCBtZW51ICovXFxuXFxuLm5ldy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gaDEge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3cgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiBjcmVhdGUgbmV3IHRhc2sgbWVudSAqL1xcblxcbi5uZXctdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LW1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtbmFtZSA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1kZXNjcmlwdGlvbiA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiB0YXNrcyBsaXN0IG1lbnUgc3R5bGluZyAqL1xcblxcbi50YXNrcy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiBhLFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhIHtcXG4gICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gLmNyZWF0ZS1uZXctbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi8qIGN1cnJlbnQgdGFzayBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGhpcy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmdvLWJhY2sgPiBpIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbn1cXG5cXG4uZ28tYmFjayA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aGlzLXRhc2stbmFtZSA+IGgxLFxcbi50aGlzLXRhc2stZGVzY3JpcHRpb24gPiBwLFxcbi50aGlzLXRhc2stc3RhdHVzID4gbGFiZWwsXFxuLnRoaXMtdGFzay1kYXRlID4gaSB7XFxuICAgIG1hcmdpbjogNXB4XFxufVxcblxcbi50aGlzLXRhc2stZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNob3cgY2xhc3MgKi9cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qixt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SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztBQUNYOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7R0FFRyxrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7OztBQUdBLDhCQUE4Qjs7QUFFOUI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBOzs7O0lBSUk7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIG1heC13aWR0aDozMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYSxcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1tZW51ID4gYTpob3ZlcixcXG4uaGVhZGVyLW1lbnUtYWRkaXRpb25hbC10YXNrcyA+IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnRhc2tzLWZpZWxkLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCA1cHg7XFxufVxcbi8qIGxpbmUgdGhyb3V0aCB0aGUgdGV4dCBpZiBpbnB1dCBpcyBjaGVja2VkICovXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiAuby10YXNrczpob3ZlciwgKi9cXG4uby10YXNrcyA+IGxhYmVsOmhvdmVyLFxcbi5vLXRhc2tzID4gaW5wdXQ6aG92ZXIsXFxuLyogLmYtdGFza3M6aG92ZXIsICovXFxuLmYtdGFza3MgPiBsYWJlbDpob3ZlcixcXG4uZi10YXNrcyA+IGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib3R0b20tZWxlbWVudHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4gPiBpIHtcXG4gICAgbWFyZ2luOiA1cHggNXB4O1xcbn1cXG5cXG4uYm90dG9tLW1lbnUge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2IHtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG59XFxuXFxuLmJvdHRvbS1tZW51ID4gZGl2ID4gaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogcG9wLXVwIG1lbnUgZWxlbWVudHMgc3R5bGluZyAqL1xcblxcbi8qIGNyZWF0ZSBuZXcgbGlzdCBtZW51ICovXFxuXFxuLm5ldy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gaDEge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm5ldy1saXN0LXdpbmRvdy1oZWFkZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3ctaGVhZGVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC13aW5kb3cgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiBjcmVhdGUgbmV3IHRhc2sgbWVudSAqL1xcblxcbi5uZXctdGFzay13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm5ldy10YXNrLXdpbmRvdy1mb250IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmV3LXRhc2std2luZG93LW1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2std2luZG93LW1lbnUtbmFtZSA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1kZXNjcmlwdGlvbiA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay13aW5kb3ctbWVudS1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXdpbmRvdy1tZW51LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiB0YXNrcyBsaXN0IG1lbnUgc3R5bGluZyAqL1xcblxcbi50YXNrcy1saXN0LXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udGFza3MtbGlzdC13aW5kb3ctZm9udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUsXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tzLWxpc3Qtd2luZG93LW1lbnUgPiBhLFxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51LWFkZGl0aW9uYWwtdGFza3MgPiBhIHtcXG4gICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi50YXNrcy1saXN0LXdpbmRvdy1tZW51ID4gLmNyZWF0ZS1uZXctbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi8qIGN1cnJlbnQgdGFzayBtZW51IHN0eWxpbmcgKi9cXG5cXG4udGhpcy10YXNrLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmdvLWJhY2sgPiBpIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbn1cXG5cXG4uZ28tYmFjayA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aGlzLXRhc2stbmFtZSA+IGgxLFxcbi50aGlzLXRhc2stZGVzY3JpcHRpb24gPiBwLFxcbi50aGlzLXRhc2stc3RhdHVzID4gbGFiZWwsXFxuLnRoaXMtdGFzay1kYXRlID4gaSB7XFxuICAgIG1hcmdpbjogNXB4XFxufVxcblxcbi50aGlzLXRhc2stZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4udGhpcy10YXNrLWRlbGV0ZSA+IGk6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNob3cgY2xhc3MgKi9cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3RXbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdC13aW5kb3cnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1idG4nKTtcbiAgICBjb25zdCByZWFkeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeS1idG4nKTtcbiAgICBjb25zdCBuZXdMaXN0TmFtZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QtbmFtZScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3TGlzdFduZG93LFxuICAgICAgICBjbG9zZUJ0bixcbiAgICAgICAgcmVhZHlCdG4sXG4gICAgICAgIG5ld0xpc3ROYW1lVGV4dCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgTmV3TGlzdE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvc2VXaW5kb3coKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgRE9NLm5ld0xpc3RXbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBET00uY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJJbnB1dCgpIHtcbiAgICAgICAgICAgIERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIERPTS5uZXdMaXN0V25kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICBpZiAoRE9NLm5ld0xpc3ROYW1lVGV4dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRGF0YU1vZHVsZS5jcmVhdGVOZXdMaXN0KERPTS5uZXdMaXN0TmFtZVRleHQudmFsdWUpO1xuICAgICAgICAgICAgZGlzcGxheU1vZHVsZS50YXNrTGlzdE1haW4oKTtcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGUudGFza0xpc3RXaW5kb3coKTtcbiAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICBET00ucmVhZHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY2xvc2VXaW5kb3csIGNyZWF0ZU5ld0xpc3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0xpc3RNb2R1bGU7XG4iLCJpbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL3Rhc2tfZGF0YSc7XG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbWVudS1hZGRpdGlvbmFsLXRhc2tzJyk7XG4gICAgY29uc3QgdGFza0xpc3RXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgJ3Rhc2tzLWxpc3Qtd2luZG93LW1lbnUtYWRkaXRpb25hbC10YXNrcydcbiAgICApO1xuICAgIGNvbnN0IHRhc2tzRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtZmllbGQnKTtcbiAgICBjb25zdCB0YXNrc0ZpZWxkT25nb2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1maWVsZC1vbmdvaW5nJyk7XG4gICAgY29uc3QgdGFza3NGaWVsZEZpbmlzaGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWZpZWxkLWZpbmlzaGVkJyk7XG4gICAgY29uc3QgdGFza0xpc3RUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGlzdC10YWddJyk7XG4gICAgY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2std2luZG93Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXJNZW51LFxuICAgICAgICB0YXNrTGlzdFdpbmRvdyxcbiAgICAgICAgdGFza3NGaWVsZCxcbiAgICAgICAgdGFza3NGaWVsZE9uZ29pbmcsXG4gICAgICAgIHRhc2tzRmllbGRGaW5pc2hlZCxcbiAgICAgICAgdGFza0xpc3RUYWdzLFxuICAgICAgICBuZXdUYXNrV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5TW9kdWxlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiB0YXNrTGlzdE1haW4oKSB7XG4gICAgICAgIERPTS5oZWFkZXJNZW51LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBEYXRhTW9kdWxlLnRhc2tzTGlzdC5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIG5ld0xpc3QuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0xpc3QuZGF0YXNldC5saXN0VGFnID0gJyc7XG4gICAgICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gYCR7bGlzdC50aXRsZX1gO1xuICAgICAgICAgICAgaWYgKGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ2FjdGl2ZS1saXN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRE9NLmhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiBET00uaGVhZGVyTWVudTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza0xpc3RXaW5kb3coKSB7XG4gICAgICAgIERPTS50YXNrTGlzdFdpbmRvdy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgRGF0YU1vZHVsZS50YXNrc0xpc3QuZm9yRWFjaCgobGlzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBuZXdMaXN0LmhyZWYgPSAnIyc7XG4gICAgICAgICAgICBuZXdMaXN0LmRhdGFzZXQubGlzdCA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICBuZXdMaXN0LmRhdGFzZXQubGlzdFRhZyA9ICcnO1xuICAgICAgICAgICAgbmV3TGlzdC50ZXh0Q29udGVudCA9IGAke2xpc3QudGl0bGV9YDtcbiAgICAgICAgICAgIGlmIChsaXN0LmFjdGl2ZUxpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0LmNsYXNzTmFtZSA9ICdhY3RpdmUtbGlzdCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIERPTS50YXNrTGlzdFdpbmRvdy5hcHBlbmRDaGlsZChuZXdMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIERPTS50YXNrTGlzdFdpbmRvdztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheU9uZ29pbmdUYXNrc0gyKCkge1xuICAgICAgICBjb25zdCBvbmdvaW5nVGFza3NIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG9uZ29pbmdUYXNrc0gyLnRleHRDb250ZW50ID0gJ09uZ29pbmcgdGFza3MnO1xuICAgICAgICBET00udGFza3NGaWVsZE9uZ29pbmcuYXBwZW5kQ2hpbGQob25nb2luZ1Rhc2tzSDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGaW5pc2hlZFRhc2tzSDIoKSB7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkVGFza3NIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGZpbmlzaGVkVGFza3NIMi50ZXh0Q29udGVudCA9ICdGaW5pc2hlZCB0YXNrcyc7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkRmluaXNoZWQuYXBwZW5kQ2hpbGQoZmluaXNoZWRUYXNrc0gyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5T25nb2luZ1Rhc2tzKGxpc3QpIHtcbiAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sub24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrT25nb2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tPbmdvaW5nLmRhdGFzZXQuc3RhdHVzID0gJ29uZ29pbmcnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgLy8gbmV3VGFza09uZ29pbmcuZGF0YXNldC50aGlzVGFzayA9ICcnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nLmNsYXNzTmFtZSA9ICdvLXRhc2tzJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgLy8gbmV3VGFza09uZ29pbmdJbnB1dC5kYXRhc2V0LnN0YXR1cyA9ICdvbmdvaW5nJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dC5uYW1lID0gYG8tdGFzayR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0LmRhdGFzZXQudGFza1RhZyA9ICcnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tPbmdvaW5nSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tzJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tPbmdvaW5nSW5wdXRMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYG8tdGFzayR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmdJbnB1dExhYmVsLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrT25nb2luZ0lucHV0TGFiZWwuZGF0YXNldC50aGlzVGFzayA9ICcnO1xuXG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dCk7XG4gICAgICAgICAgICAgICAgbmV3VGFza09uZ29pbmcuYXBwZW5kQ2hpbGQobmV3VGFza09uZ29pbmdJbnB1dExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRPbmdvaW5nLmFwcGVuZENoaWxkKG5ld1Rhc2tPbmdvaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBET00udGFza3NGaWVsZE9uZ29pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGaW5pc2hlZFRhc2tzKGxpc3QpIHtcbiAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YXNrLm9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0ZpbmlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gbmV3VGFza0ZpbmlzaGVkLmRhdGFzZXQuc3RhdHVzID0gJ2ZpbmlzaGVkJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC50YXNrTnVtYmVyID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICAvLyBuZXdUYXNrRmluaXNoZWQuZGF0YXNldC50aGlzVGFzayA9ICcnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5jbGFzc05hbWUgPSAnZi10YXNrcyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRmluaXNoZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgLy8gbmV3VGFza0ZpbmlzaGVkSW5wdXQuZGF0YXNldC5zdGF0dXMgPSAnZmluaXNoZWQnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0LmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQubmFtZSA9IGBmLXRhc2ske2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuZGF0YXNldC50YXNrVGFnID0gJyc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tzJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZElucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgZi10YXNrJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsLmRhdGFzZXQudGFza051bWJlciA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICAgICAgbmV3VGFza0ZpbmlzaGVkSW5wdXRMYWJlbC5kYXRhc2V0LnRoaXNUYXNrID0gJyc7XG5cbiAgICAgICAgICAgICAgICBuZXdUYXNrRmluaXNoZWQuYXBwZW5kQ2hpbGQobmV3VGFza0ZpbmlzaGVkSW5wdXQpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWRJbnB1dExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5hcHBlbmRDaGlsZChuZXdUYXNrRmluaXNoZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIERPTS50YXNrc0ZpZWxkRmluaXNoZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgICAgIERPTS50YXNrc0ZpZWxkT25nb2luZy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgRE9NLnRhc2tzRmllbGRGaW5pc2hlZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWN0aXZlTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVMaXN0ID0gRGF0YU1vZHVsZS50YXNrc0xpc3QuZmluZChsaXN0QWN0aXZpdHlDaGVjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0KTtcbiAgICAgICAgcmVzZXRUYXNrcygpO1xuICAgICAgICBkaXNwbGF5T25nb2luZ1Rhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheU9uZ29pbmdUYXNrcyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGRpc3BsYXlGaW5pc2hlZFRhc2tzSDIoKTtcbiAgICAgICAgZGlzcGxheUZpbmlzaGVkVGFza3MoY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaG9zZW5UYXNrV2luZG93KGFjdGl2ZUxpc3QsIHRhc2tOdW1iZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gdGFza1dpbmRvd0NsZWFyKCkge1xuICAgICAgICAgICAgRE9NLm5ld1Rhc2tXaW5kb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnb0JhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ29CYWNrQnRuLmlkID0gJ3RoaXMtdGFzay1nby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmNsYXNzTmFtZSA9ICdnby1iYWNrJztcbiAgICAgICAgZ29CYWNrQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRoaXNUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFza05hbWUuaWQgPSAndGhpcy10YXNrLW5hbWUnO1xuICAgICAgICB0aGlzVGFza05hbWUuY2xhc3NOYW1lID0gJ3RoaXMtdGFzay1uYW1lJztcbiAgICAgICAgY29uc3QgdGhpc1Rhc2tOYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aGlzVGFza05hbWVUaXRsZS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgIHRoaXNUYXNrTmFtZVRpdGxlLmRhdGFzZXQudGFza1RpdGxlID0gJyc7XG4gICAgICAgIHRoaXNUYXNrTmFtZVRpdGxlLnRleHRDb250ZW50ID0gYCR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS50aXRsZX1gO1xuICAgICAgICB0aGlzVGFza05hbWUuYXBwZW5kQ2hpbGQodGhpc1Rhc2tOYW1lVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRoaXNUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpc1Rhc2tEZXNjcmlwdGlvbi5pZCA9ICd0aGlzLXRhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICBjb25zdCB0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGhpc1Rhc2tEZXNjcmlwdGlvblRleHQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dC5kYXRhc2V0LnRhc2tEZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICB0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGAke2FjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGhpc1Rhc2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aGlzVGFza0Rlc2NyaXB0aW9uVGV4dCk7XG5cbiAgICAgICAgY29uc3QgdGhpc1Rhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpc1Rhc2tTdGF0dXMuaWQgPSAndGhpcy10YXNrLXN0YXR1cyc7XG4gICAgICAgIHRoaXNUYXNrU3RhdHVzLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stc3RhdHVzJztcblxuICAgICAgICBjb25zdCB0aGlzVGFza09uID0gYWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tUYXNrT24oKSB7XG4gICAgICAgICAgICBpZiAodGhpc1Rhc2tPbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIm9uZ29pbmdcIiBzZWxlY3RlZD5PbmdvaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmluaXNoZWRcIj5GaW5pc2hlZDwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCJvbmdvaW5nXCI+T25nb2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbmlzaGVkXCIgc2VsZWN0ZWQ+RmluaXNoZWQ8L29wdGlvbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1Rhc2tTdGF0dXMuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgYDxsYWJlbCBmb3I9XCJ0aGlzLXRhc2stc3RhdHVzXCI+VGFzayBzdGF0dXM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRoaXMtdGFzay1zdGF0dXNcIiBpZD1cInRoaXMtdGFzay1zdGF0dXNcIj5cbiAgICAgICAgICAgICR7Y2hlY2tUYXNrT24oKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PmBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0aGlzVGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmlkID0gJ3RoaXMtdGFzay1kYXRlJztcbiAgICAgICAgdGhpc1Rhc2tEYXRlLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGF0ZSc7XG4gICAgICAgIHRoaXNUYXNrRGF0ZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgICBgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItYWx0XCI+PC9pPiBcbiAgICAgICAgICAgIDxwIGlkPVwiZGF0ZS12YWx1ZVwiPiR7YWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5kYXRlfTwvcD5gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5pZCA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0aGlzLXRhc2stZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXG4gICAgICAgICk7XG5cbiAgICAgICAgdGFza1dpbmRvd0NsZWFyKCk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGdvQmFja0J0bik7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrTmFtZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBET00ubmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZCh0aGlzVGFza1N0YXR1cyk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKHRoaXNUYXNrRGF0ZSk7XG4gICAgICAgIERPTS5uZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza0xpc3RNYWluLFxuICAgICAgICB0YXNrTGlzdFdpbmRvdyxcbiAgICAgICAgZGlzcGxheUFjdGl2ZUxpc3QsXG4gICAgICAgIGRpc3BsYXlDaG9zZW5UYXNrV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW9kdWxlO1xuIiwiY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ0bicpO1xuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2std2luZG93Jyk7XG4gICAgY29uc3QgbmV3VGFza1dpbmRvd01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2std2luZG93LW1lbnUnKTtcbiAgICBjb25zdCB0YXNrc0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtbGlzdC1idG4nKTtcbiAgICBjb25zdCB0YXNrc0xpc3RXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtbGlzdC13aW5kb3cnKTtcbiAgICBjb25zdCB0YXNrc0xpc3RXaW5kb3dNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICd0YXNrcy1saXN0LXdpbmRvdy1tZW51J1xuICAgICk7XG4gICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbmV3LWxpc3QnKTtcbiAgICBjb25zdCBuZXdMaXN0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0LXdpbmRvdycpO1xuICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RNZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICdjcmVhdGUtbmV3LWxpc3QtbWVudSdcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3cpIHtcbiAgICAgICAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUYXNrQnRuLFxuICAgICAgICBuZXdUYXNrV2luZG93LFxuICAgICAgICBuZXdUYXNrV2luZG93TWVudSxcbiAgICAgICAgdGFza3NMaXN0QnRuLFxuICAgICAgICB0YXNrc0xpc3RXaW5kb3csXG4gICAgICAgIHRhc2tzTGlzdFdpbmRvd01lbnUsXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdG4sXG4gICAgICAgIG5ld0xpc3RXaW5kb3csXG4gICAgICAgIGNyZWF0ZU5ld0xpc3RNZW51QnRuLFxuICAgICAgICBvcGVuV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBhZGROZXdUYXNrQnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3Blbk5ld1Rhc2tXaW5kb3cgPSAoKSA9PiBET00ub3BlbldpbmRvdyhET00ubmV3VGFza1dpbmRvdyk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZU5ld1Rhc2tXaW5kb3coZSkge1xuICAgICAgICBpZiAoIURPTS5uZXdUYXNrV2luZG93TWVudS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIERPTS5uZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERPTS5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1Rhc2tXaW5kb3cpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xvc2VOZXdUYXNrV2luZG93KTtcbn1cblxuZnVuY3Rpb24gdGFza3NMaXN0QnRuQ2xpY2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2tzTGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS50YXNrc0xpc3RXaW5kb3cpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrc0xpc3QoZSkge1xuICAgICAgICBpZiAoIURPTS50YXNrc0xpc3RXaW5kb3dNZW51LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgRE9NLnRhc2tzTGlzdFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBET00udGFza3NMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tzTGlzdFdpbmRvdyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbG9zZVRhc2tzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RCdG5DbGljaygpIHtcbiAgICBjb25zdCBvcGVuTmV3TGlzdFdpbmRvdyA9ICgpID0+IERPTS5vcGVuV2luZG93KERPTS5uZXdMaXN0V2luZG93KTtcblxuICAgIERPTS5jcmVhdGVOZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0xpc3RXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrKCkge1xuICAgIGNvbnN0IG9wZW5OZXdMaXN0V2luZG93ID0gKCkgPT4ge1xuICAgICAgICBET00udGFza3NMaXN0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgRE9NLm9wZW5XaW5kb3coRE9NLm5ld0xpc3RXaW5kb3cpO1xuICAgIH07XG5cbiAgICBET00uY3JlYXRlTmV3TGlzdE1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTmV3TGlzdFdpbmRvdyk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkTmV3VGFza0J0bkNsaWNrLFxuICAgIHRhc2tzTGlzdEJ0bkNsaWNrLFxuICAgIGNyZWF0ZU5ld0xpc3RCdG5DbGljayxcbiAgICBjcmVhdGVOZXdMaXN0TWVudUJ0bkNsaWNrLFxufTtcbiIsImNvbnN0IERhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vIGFsbCB0YXNrcyBkYXRhIGFycmF5XG4gICAgY29uc3QgdGFza3NMaXN0ID0gW107XG5cbiAgICAvLyBuZXcgbGlzdCBmYWN0b3J5XG4gICAgY29uc3QgbmV3TGlzdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCB0YXNrcywgYWN0aXZlTGlzdCB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0KHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3QucHVzaChuZXdMaXN0KHRpdGxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlTGlzdChsaXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBuZXcgdGFzayBmYWN0b3J5XG4gICAgY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIG9uLCBkYXRlKSA9PiAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIG9uLFxuICAgICAgICBkYXRlLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0luVGhlTGlzdChsaXN0SW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb24sIGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdFtsaXN0SW5kZXhdLnRhc2tzLnB1c2goXG4gICAgICAgICAgICBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgb24sIGRhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayhsaXN0SW5kZXgsIHRhc2tJbmRleCkge1xuICAgICAgICByZXR1cm4gdGFza3NMaXN0W2xpc3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRhc2tzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5wdXNoKG5ld0xpc3QoJ015IHRhc2tzJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUYXNrcygpIHtcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAnT25nb2luZyB0YXNrIDEnLFxuICAgICAgICAgICAgJ015IG9uZ29pbmcgdGFzayAxJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAnRmluaXNoZWQgdGFzayAxJyxcbiAgICAgICAgICAgICdNeSBmaW5pc2hlZCB0YXNrIDEnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VGFza3NMaXN0QWN0aXZlU3RhdHVzKCkge1xuICAgICAgICB0YXNrc0xpc3RbMF0uYWN0aXZlTGlzdCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFza09uU3RhdHVzKHRhc2spIHtcbiAgICAgICAgcmV0dXJuICF0YXNrLm9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tzTGlzdCxcbiAgICAgICAgY3JlYXRlTmV3TGlzdCxcbiAgICAgICAgZGVsZXRlTGlzdCxcbiAgICAgICAgY3JlYXRlTmV3VGFza0luVGhlTGlzdCxcbiAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgZGVmYXVsdFRhc2tzTGlzdCxcbiAgICAgICAgZGVmYXVsdFRhc2tzLFxuICAgICAgICBkZWZhdWx0VGFza3NMaXN0QWN0aXZlU3RhdHVzLFxuICAgICAgICBjaGFuZ2VUYXNrT25TdGF0dXMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFNb2R1bGU7XG4iLCJjb25zdCBET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy10YXNrLWdvLWJhY2sgPiBpJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay10aXRsZV0nKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWRlc2NyaXRwdGlvbl0nKTtcbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1zdGF0dXNdJyk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWRhdGVdJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtdGFzay1kZWxldGUnKTtcbiAgICBjb25zdCB0aGlzVGFza1dpZG5vdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2std2luZG93Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrQnRuLFxuICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgdGFza1N0YXR1cyxcbiAgICAgICAgdGFza0RhdGUsXG4gICAgICAgIGRlbGV0ZUJ0bixcbiAgICAgICAgdGhpc1Rhc2tXaWRub3csXG4gICAgfTtcbn0pKCk7XG5cbi8vIFRPRE8gdGhpcyB0YXNrIHdpbmRvdyBmdW5jdGlvbmFsbGl0eVxuY29uc3QgdGFza1dpbmRvd01vZHVsZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrV2luZG93KCkge1xuICAgICAgICByZXR1cm4gRE9NLnRoaXNUYXNrV2lkbm93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFja0J0bkNsaWNrKCkge1xuICAgICAgICBET00uYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzLXRhc2stZ28tYmFjayA+IGknKTtcbiAgICAgICAgRE9NLmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFja0J0bkNsaWNrLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrV2luZG93TW9kdWxlO1xuIiwiaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICAgIC8vIEkgaGF2ZSB0byByZWFzc2luZyBkeW5hbWljYWxseSBjcmVhdGVkIG5vZGVzLCBiZWFjdXNlXG4gICAgLy8gb2YgaW5pdGlhbCB2YWx1ZSBpbiB0aGUgRE9NIGVsZW1lbnQgaXMgZXZhbHVhdGVkIHVwb25cbiAgICAvLyBmaXJzdCBleHBhbmRpbmdcbiAgICBjb25zdCB0YXNrc0VsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXNrLXRhZ10nKTtcbiAgICBjb25zdCB0aGlzVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRoaXMtdGFza10nKTtcbiAgICBjb25zdCB0aGlzVGFza1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXRhc2std2luZG93Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrc0VsSW5wdXQsXG4gICAgICAgIHRoaXNUYXNrLFxuICAgICAgICB0aGlzVGFza1dpbmRvdyxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgVGFza0ZpZWxkTW9kdWxlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjaGFuZ2VUYXNrU3RhdHVzKCkge1xuICAgICAgICBET00udGFza3NFbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFzay10YWddJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9IERhdGFNb2R1bGUudGFza3NMaXN0LmZpbmQobGlzdEFjdGl2aXR5Q2hlY2spO1xuXG4gICAgICAgIERPTS50YXNrc0VsSW5wdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YXNrTnVtYmVyIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVMaXN0LnRhc2tzW3Rhc2tOdW1iZXJdLm9uKTtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlTGlzdC50YXNrc1t0YXNrTnVtYmVyXS5vbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUxpc3QudGFza3NbdGFza051bWJlcl0ub24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlLmRpc3BsYXlBY3RpdmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuVGhpc1Rhc2tXaW5kb3coKSB7XG4gICAgICAgIERPTS50aGlzVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRoaXMtdGFza10nKTtcbiAgICAgICAgZnVuY3Rpb24gbGlzdEFjdGl2aXR5Q2hlY2sobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYWN0aXZlTGlzdCA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlTGlzdCA9IERhdGFNb2R1bGUudGFza3NMaXN0LmZpbmQobGlzdEFjdGl2aXR5Q2hlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QWN0aXZlTGlzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKERPTS50aGlzVGFzayk7XG4gICAgICAgIERPTS50aGlzVGFzay5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzVGFza051bWJlciA9IGUudGFyZ2V0LmRhdGFzZXQudGFza051bWJlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRhc2tOdW1iZXIpO1xuICAgICAgICAgICAgICAgIERPTS50aGlzVGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlNb2R1bGUuZGlzcGxheUNob3NlblRhc2tXaW5kb3coXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVMaXN0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzVGFza051bWJlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cyxcbiAgICAgICAgb3BlblRoaXNUYXNrV2luZG93LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrRmllbGRNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgICBhZGROZXdUYXNrQnRuQ2xpY2ssXG4gICAgdGFza3NMaXN0QnRuQ2xpY2ssXG4gICAgY3JlYXRlTmV3TGlzdEJ0bkNsaWNrLFxuICAgIGNyZWF0ZU5ld0xpc3RNZW51QnRuQ2xpY2ssXG59IGZyb20gJy4vbWFpbl93aW5kb3dfYnRuX2NsaWNrcyc7XG5pbXBvcnQgTmV3TGlzdE1vZHVsZSBmcm9tICcuL2NyZWF0ZV9uZXdfbGlzdF93aW5kb3cnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi90YXNrX2RhdGEnO1xuaW1wb3J0IGRpc3BsYXlNb2R1bGUgZnJvbSAnLi9kaXNwbGF5X2RhdGEnO1xuaW1wb3J0IFRhc2tGaWVsZE1vZHVsZSBmcm9tICcuL3Rhc2tzX2ZpZWxkJztcbmltcG9ydCB0YXNrV2luZG93TW9kdWxlIGZyb20gJy4vdGFza193aW5kb3cnO1xuLy8gaW1wb3J0IE5ld1Rhc2tNb2R1bGUgZnJvbSAnLi9hZGRfbmV3X3Rhc2snO1xuLy8gaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmFkZE5ld1Rhc2tCdG5DbGljaygpO1xudGFza3NMaXN0QnRuQ2xpY2soKTtcbmNyZWF0ZU5ld0xpc3RCdG5DbGljaygpO1xuY3JlYXRlTmV3TGlzdE1lbnVCdG5DbGljaygpO1xuTmV3TGlzdE1vZHVsZS5jbG9zZVdpbmRvdygpO1xuTmV3TGlzdE1vZHVsZS5jcmVhdGVOZXdMaXN0KCk7XG5cbkRhdGFNb2R1bGUuZGVmYXVsdFRhc2tzTGlzdCgpO1xuRGF0YU1vZHVsZS5kZWZhdWx0VGFza3MoKTtcbkRhdGFNb2R1bGUuZGVmYXVsdFRhc2tzTGlzdEFjdGl2ZVN0YXR1cygpO1xuRGF0YU1vZHVsZS5jcmVhdGVOZXdUYXNrSW5UaGVMaXN0KFxuICAgIDAsXG4gICAgJ015IG5ldyB0YXNrJyxcbiAgICAnbXkgbmV3IHRhc2sgZGVzY3JpcHRpb24nLFxuICAgIHRydWUsXG4gICAgJ2FueSdcbik7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QxJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QyJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3QzJyk7XG4vLyBEYXRhTW9kdWxlLmNyZWF0ZU5ld0xpc3QoJ2xpc3Q0Jyk7XG5cbi8vIGNvbnNvbGUubG9nKERhdGFNb2R1bGUudGFza3NMaXN0KTtcblxuZGlzcGxheU1vZHVsZS50YXNrTGlzdE1haW4oKTtcbmRpc3BsYXlNb2R1bGUudGFza0xpc3RXaW5kb3coKTtcbmRpc3BsYXlNb2R1bGUuZGlzcGxheUFjdGl2ZUxpc3QoKTtcblRhc2tGaWVsZE1vZHVsZS5jaGFuZ2VUYXNrU3RhdHVzKCk7XG4vLyBkaXNwbGF5TW9kdWxlLmRpc3BsYXlDaG9zZW5UYXNrV2luZG93KERhdGFNb2R1bGUudGFza3NMaXN0WzBdLCAwKTtcblRhc2tGaWVsZE1vZHVsZS5vcGVuVGhpc1Rhc2tXaW5kb3coKTtcblxudGFza1dpbmRvd01vZHVsZS5iYWNrQnRuQ2xpY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==