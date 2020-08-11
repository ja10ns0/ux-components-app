(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card10-card10-module"],{

/***/ "./src/app/ui-pages/card10/card10-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card10/card10-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card10RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card10RoutingModule", function() { return Card10RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card10/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card10/documentation/documentation.component.ts");





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
var Card10RoutingModule = /** @class */ (function () {
    function Card10RoutingModule() {
    }
    Card10RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card10RoutingModule);
    return Card10RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card10/card10.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card10/card10.module.ts ***!
  \**************************************************/
/*! exports provided: Card10Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card10Module", function() { return Card10Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card10_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card10-routing.module */ "./src/app/ui-pages/card10/card10-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card10/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card10/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Card10Module = /** @class */ (function () {
    function Card10Module() {
    }
    Card10Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _card10_routing_module__WEBPACK_IMPORTED_MODULE_3__["Card10RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ]
        })
    ], Card10Module);
    return Card10Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card10/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card10/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-card is a content container for text, photos, and actions in the context of a single subject.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 10</h1>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card10</span> if you need to enter a title and a descripction in the card, a counter number and a progress bar.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card10 v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Refactor to simplify css styles.</li>\r\n      <li>Add close icon to component.</li>\r\n      <li>Replace input field with textarea input.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card10/card10.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card10/card10.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card10/card10.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card10/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card10/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxMC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card10/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card10/documentation/documentation.component.ts ***!
  \**************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n    <div class=\"card card--outlined card10\">\n    <div class=\"card10__badge\">\n      <span class=\"utils--centered utils--text-14 utils--text-grey-700\">10</span>\n    </div>\n    <div class=\"card10__content\">\n      <div class=\"title utils--margin-top-8 utils--text-grey-700\">\n        <ntx-input-no-label [placeholder]=\"'Add a text'\"></ntx-input-no-label>\n      </div>\n      <div class=\"subtitle utils--margin-bottom-20 utils--text-grey-800\">\n        <ntx-textarea-no-label [placeholder]=\"'Add a description...'\"></ntx-textarea-no-label>\n      </div>\n      <div class=\"progress utils--margin-bottom-24\">\n        <ntx-progress-bar-level value=\"78\"></ntx-progress-bar-level>\n      </div>\n    </div>\n    <div class=\"card10__close-button\">\n      <button mat-icon-button class=\"utils--margin-top-12\" (click)=\"onClose()\">\n        <span class=\"icon-netex icon-cross\"></span>\n      </button>\n    </div>\n    </div>\n  ";
        this.code2 = "\n    import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';\n    import { ViewEncapsulation } from '@angular/core';\n    import { FormControl } from '@angular/forms';\n\n    @Component({\n    selector: 'ntx-card10',\n    templateUrl: './card10.component.html',\n    styleUrls: ['./card10.component.scss']\n    })\n    export class Card10Component implements OnInit {\n\n    @Output() close = new EventEmitter();\n\n    constructor() { }\n\n    ngOnInit() {}\n\n    public onClose() {\n      this.close.emit();\n    }\n    }\n  ";
        this.code3 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"card10\";\n\n    .#{$block} {\n    display: flex;\n    .#{$block}__badge{\n      width: 92px;\n      position: relative;\n      font-family: LatoSemibold;\n      span {\n        @include badge($color-grey-200, 32px);\n      }\n    }\n    .#{$block}__content{\n      box-sizing: border-box;\n      width: calc(100% - 92px - 32px);\n      font-family: Lato;\n      .title  {\n        font-style: italic;\n      }\n    }\n    .#{$block}__close-button {\n      width: 32px;\n      button {\n        width: 20px;\n        height: 20px;\n        line-height: 20px;\n        &:hover {\n          background-color: $icon-button-hover;\n        }\n      }\n    }\n    }\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card10/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card10/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card10/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card10/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card10 class=\"utils--margin-bottom-24\"></ntx-card10>\r\n    <ntx-card10 class=\"utils--margin-bottom-24\"></ntx-card10>\r\n    <ntx-card10 class=\"utils--margin-bottom-24\"></ntx-card10>\r\n    <ntx-card10></ntx-card10>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card10/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card10/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .page-container ntx-card10 {\n    width: 496px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDEwL2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTBcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CLEVBSXRCO0VBUEQ7SUFLUSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC91aS1wYWdlcy9jYXJkMTAvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbnR4LWNhcmQxMCB7XHJcbiAgICAgICAgd2lkdGg6IDQ5NnB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/ui-pages/card10/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card10/examples/examples.component.ts ***!
  \****************************************************************/
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card10/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card10/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card10-card10-module.js.map