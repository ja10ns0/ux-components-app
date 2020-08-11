(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"length\"\r\n               [pageSize]=\"pageSize\"\r\n               [pageSizeOptions]=\"pageSizeOptions\"\r\n               (page)=\"pageEvent = $event\"\r\n               [ngClass]=\"position\">\r\n</mat-paginator>"

/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-paginator mat-paginator.mat-paginator {\n  display: flex;\n  background-color: transparent; }\n  ntx-paginator mat-paginator.mat-paginator.left {\n    justify-content: flex-start; }\n  ntx-paginator mat-paginator.mat-paginator.center {\n    justify-content: center; }\n  ntx-paginator mat-paginator.mat-paginator.right {\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25ldGV4L3V4LWNvbXBvbmVudHMvc3JjL2xpYi9udHgtcGFnaW5hdG9yL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvcHJvamVjdHNcXG5ldGV4XFx1eC1jb21wb25lbnRzXFxzcmNcXGxpYlxcbnR4LXBhZ2luYXRvclxcbnR4LXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWE7RUFDYiw4QkFBNkIsRUFVaEM7RUFiTDtJQUtZLDRCQUEyQixFQUM5QjtFQU5UO0lBUVksd0JBQXVCLEVBQzFCO0VBVFQ7SUFXWSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoicHJvamVjdHMvbmV0ZXgvdXgtY29tcG9uZW50cy9zcmMvbGliL250eC1wYWdpbmF0b3IvbnR4LXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm50eC1wYWdpbmF0b3Ige1xyXG4gICAgbWF0LXBhZ2luYXRvci5tYXQtcGFnaW5hdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NtxPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtxPaginatorComponent", function() { return NtxPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NtxPaginatorComponent = /** @class */ (function () {
    function NtxPaginatorComponent() {
    }
    NtxPaginatorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NtxPaginatorComponent.prototype, "length", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NtxPaginatorComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NtxPaginatorComponent.prototype, "pageSizeOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtxPaginatorComponent.prototype, "position", void 0);
    NtxPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ntx-paginator',
            template: __webpack_require__(/*! ./ntx-paginator.component.html */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ntx-paginator.component.scss */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NtxPaginatorComponent);
    return NtxPaginatorComponent;
}());



/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module.ts":
/*!************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module.ts ***!
  \************************************************************************************/
/*! exports provided: NtxPaginatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtxPaginatorModule", function() { return NtxPaginatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ntx-paginator.component */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");





var NtxPaginatorModule = /** @class */ (function () {
    function NtxPaginatorModule() {
    }
    NtxPaginatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__["NtxPaginatorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"]
            ],
            exports: [
                _ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__["NtxPaginatorComponent"]
            ]
        })
    ], NtxPaginatorModule);
    return NtxPaginatorModule;
}());



/***/ }),

/***/ "./src/app/shared/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DASHBOARDAPPS, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARDAPPS", function() { return DASHBOARDAPPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DASHBOARDAPPS = [
    {
        name: 'Administrator',
        link: '',
        icon: 'assets/images/app-administrator.png'
    },
    {
        name: 'Anders Pink Reports',
        link: '',
        icon: 'assets/images/app-anders.png'
    },
    {
        name: 'Catalogue',
        link: '',
        icon: 'assets/images/app-catalogue.png'
    },
    {
        name: 'Your community',
        link: '',
        icon: 'assets/images/app-community.png'
    },
    {
        name: 'Library (Student)',
        link: '',
        icon: 'assets/images/app-library-student.png'
    },
    {
        name: 'Notifications',
        link: '',
        icon: 'assets/images/app-notifications.png'
    },
    {
        name: 'OpenSesame',
        link: '',
        icon: 'assets/images/app-opensesame.png'
    },
    {
        name: 'Learning Play',
        link: '',
        icon: 'assets/images/app-play.png'
    },
    {
        name: 'Record',
        link: '',
        icon: 'assets/images/app-record.png'
    },
    {
        name: 'Reports',
        link: '',
        icon: 'assets/images/app-reports.png'
    }
];
var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getDashboardApps = function () {
        return DASHBOARDAPPS;
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map