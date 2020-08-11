(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card15-card15-module"],{

/***/ "./src/app/ui-pages/card15/card15-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card15/card15-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card15RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card15RoutingModule", function() { return Card15RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card15/documentation/documentation.component */ "./src/app/ui-pages/card15/documentation/documentation.component.ts");
/* harmony import */ var _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card15/examples/examples.component */ "./src/app/ui-pages/card15/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card15RoutingModule = /** @class */ (function () {
    function Card15RoutingModule() {
    }
    Card15RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card15RoutingModule);
    return Card15RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/card15.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card15/card15.module.ts ***!
  \**************************************************/
/*! exports provided: Card15Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card15Module", function() { return Card15Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card15/documentation/documentation.component */ "./src/app/ui-pages/card15/documentation/documentation.component.ts");
/* harmony import */ var _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card15/examples/examples.component */ "./src/app/ui-pages/card15/examples/examples.component.ts");
/* harmony import */ var _card15_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card15-routing.module */ "./src/app/ui-pages/card15/card15-routing.module.ts");








var Card15Module = /** @class */ (function () {
    function Card15Module() {
    }
    Card15Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card15_routing_module__WEBPACK_IMPORTED_MODULE_7__["Card15RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]
            ]
        })
    ], Card15Module);
    return Card15Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 15 v4.1.3</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card15</span> if you need to show in a card typical user information and  a group of actions.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            {{ code3 }}\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.ts ***!
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
        this.code1 = "\n<div class=\"wrapper\">\n\t<div class=\"header\" [ngStyle]=\"{'background-image':'url(' + user.background + ')'}\">\n\t\t<div class=\"avatar\" [ngStyle]=\"{'background-image':'url(' + user.avatar + ')'}\"></div>\n\t</div>\n\t<div class=\"content\">\n\t\t<span matTooltip=\"{{user.name}}\">{{user.name}}</span> \n\t\t<span matTooltip=\"{{user.mail}}\">{{user.mail}}</span>\n\t\t<span matTooltip=\"{{user.phone}}\">{{user.phone}}</span>\n\t\t<span matTooltip=\"{{user.location}}\">{{user.location}}</span>\n\t</div>\n\t<div class=\"actions\" *ngIf=\"user.actions.length\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let action of user.actions\">\n\t\t\t<a routerLink=\"{{action.link}}\">{{action.label}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>";
        this.code2 = "\nimport { Component, OnInit, Input } from '@angular/core';\n@Component({\n\tselector: 'ntx-card15',\n\ttemplateUrl: './card15.component.html',\n\tstyleUrls: ['./card15.component.scss']\n})\nexport class Card15Component implements OnInit {\n\n\t@Input() user: any;\n\n\tconstructor() { }\n\n\tngOnInit() {\n\t}\n\n}";
        this.code3 = "\n.wrapper {\n    border-radius: 4px;\n    font-family: Lato;\n    padding-bottom: 32px;\n    width: 300px;\n    box-shadow: 0 0 8px 0 rgba(0,0,0,.16);\n    .header, .avatar {\n        background-position: center;\n        background-size: cover;\n    }\n    .header{\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n        height: 130px;\n        background-color: #F2F2F2;\n    }\n    .avatar {\n        background-color: #cccccc;\n        border-radius: 75px;\n        height: 150px;\n        margin: 0 auto;\n        position: relative;\n        top: 55px;\n        width: 150px;\n    }\n    .content{\n        font-size: 14px;\n        padding: 90px 0 0 0;\n        span{\n            display: block;\n            text-align: center;\n            max-width: 212px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            margin: 0 auto 4px;\n            color: #999999;\n            white-space: nowrap;\n            &:first-child {\n                font-size: 24px;\n                font-weight: bold;\n                margin-bottom: 8px;\n                color: #333333;\n            }\n        }\n    }\n    .actions{\n        margin-top: 40px;\n        ul{\n            list-style-type: none;\n            margin: 0 20px 0 0;\n            padding: 0;\n            li{\n                padding: 0px 20px;\n                line-height: 42px;\n                border-top-right-radius: 21px;\n                border-bottom-right-radius: 21px;\n                color: #666666;\n                &:hover {\n                    background-color: #F2F2F2 ;\n                }\n                a{\n                    color: #666666;\n                    &:link,&:visited,&:hover,&:active {\n                        text-decoration: none;\n                    }\n                    &:active {\n                        color:#1AA9E2 ;\n                    }\n                }\n            }\n        }\n    }\n}";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card15/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card15/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n\r\n  <div class=\"page-container\">\r\n        <ntx-card15 [user] =\"user\"></ntx-card15>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNS9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var USER = {
    background: 'assets/images/background-profile-header.jpg',
    avatar: 'assets/images/perfil.jpg',
    name: 'Bernice Greaves',
    mail: 'berni.graves@netexlearning.com',
    phone: '+34 765432190',
    location: 'A Coruña',
    actions: [
        {
            label: 'Profile',
            link: '#'
        },
        {
            label: 'Evaluation',
            link: '#'
        },
        {
            label: 'Another action',
            link: '#'
        }
    ]
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.user = USER;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card15/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card15/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card15-card15-module.js.map