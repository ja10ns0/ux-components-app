(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-tree-check-tree-check-module"],{

/***/ "./src/app/ui-pages/tree-check/documentation/documentation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/documentation/documentation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Tree check</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-tree-with-checks is a component that can be used to display hierarchy data. These trees use the nested structure o organize the content hierarchically.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Trees types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are two types of nxt-trees: use <span class=\"documentation-code\">ntx-tree-with-checks</span> for trees that need to be able to select their content to perform different actions.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Each tree has its own configuration in the .ts file. The tree data is being shown in this file but feel free to move this content to a external json file.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/tree-check/documentation/documentation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/documentation/documentation.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RyZWUtY2hlY2svZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/tree-check/documentation/documentation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/documentation/documentation.component.ts ***!
  \******************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/tree-check/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/tree-check/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/tree-check/examples/examples.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/examples/examples.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <div class=\"tree-container-example\">\r\n      <div class=\"tree-box-example\">\r\n          <ntx-tree-with-checks></ntx-tree-with-checks>\r\n      </div>\r\n      <div class=\"tree-content-example\">\r\n        <p>Click on the deepest sub folder to see the content</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/tree-check/examples/examples.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/examples/examples.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-container-example {\n  display: flex;\n  height: calc(100vh - 180px);\n  justify-content: flex-start; }\n  .tree-container-example .tree-box-example {\n    height: 100%;\n    min-width: 356px;\n    max-width: 356px;\n    overflow-x: hidden;\n    overflow-y: auto; }\n  .tree-container-example .tree-content-example {\n    color: #999;\n    height: 100%;\n    overflow: hidden;\n    text-align: center;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvdHJlZS1jaGVjay9leGFtcGxlcy9DOlxccHJveWVjdG9zXFx1eC1jb21wb25lbnRzL3NyY1xcYXBwXFx1aS1wYWdlc1xcdHJlZS1jaGVja1xcZXhhbXBsZXNcXGV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLDRCQUEyQjtFQUMzQiw0QkFBMkIsRUFlNUI7RUFsQkQ7SUFLSSxhQUFZO0lBQ1osaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBQ2pCO0VBVkg7SUFZSSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvdHJlZS1jaGVjay9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLWNvbnRhaW5lci1leGFtcGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAudHJlZS1ib3gtZXhhbXBsZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzU2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1NnB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgLnRyZWUtY29udGVudC1leGFtcGxle1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/tree-check/examples/examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/examples/examples.component.ts ***!
  \********************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/tree-check/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/tree-check/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/tree-check/tree-check-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/tree-check/tree-check-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TreeCheckRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeCheckRoutingModule", function() { return TreeCheckRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/tree-check/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/tree-check/documentation/documentation.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var TreeCheckRoutingModule = /** @class */ (function () {
    function TreeCheckRoutingModule() {
    }
    TreeCheckRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TreeCheckRoutingModule);
    return TreeCheckRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/tree-check/tree-check.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/tree-check/tree-check.module.ts ***!
  \**********************************************************/
/*! exports provided: TreeCheckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeCheckModule", function() { return TreeCheckModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _tree_check_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-check-routing.module */ "./src/app/ui-pages/tree-check/tree-check-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/tree-check/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/tree-check/examples/examples.component.ts");







var TreeCheckModule = /** @class */ (function () {
    function TreeCheckModule() {
    }
    TreeCheckModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tree_check_routing_module__WEBPACK_IMPORTED_MODULE_4__["TreeCheckRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxTreesModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"]
            ],
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]]
        })
    ], TreeCheckModule);
    return TreeCheckModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-tree-check-tree-check-module.js.map