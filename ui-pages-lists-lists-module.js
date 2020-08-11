(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-lists-lists-module"],{

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Lists</p>\r\n    <p class=\"documentation-text\">\r\n      ntx-list is a component that wraps and formats a series of line items.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Lists types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are several types of nxt-list: use <span class=\"documentation-code\">ntx-list-one-line-avatar</span> for lists that need just one image and one line of content. Use <span class=\"documentation-code\">ntx-list-two-lines-avatar</span> for lists that need have an image and two lines of content: title and subtitle. Use <span class=\"documentation-code\">ntx-list-two-multilines-icon</span> for lists that represent sections, where the elements to show are its image, title and an indeterminate number of links to the different subsections. Use <span class=\"documentation-code\">ntx-list-one-line-options</span> for lists that have a loading process and options. Use <span class=\"documentation-code\">ntx-list-one-line-navigable</span> for lists that are clicable and navigable. You can use <span class=\"documentation-code\">ntx-list-horizontal</span> for lists that have title and subtitle displayed in a horizontal way.  And use <span class=\"documentation-code\">ntx-list-sidemenu</span> for lists that allows us to navigate between different views of a side menu.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      The content of each list is being shown in its own .ts file, feel free to move this content to a external json file.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line with avatar v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Enclose the image in a parent container with class <span class=\"documentation-code\">list-one-line-avatar__item--image</span> that gives the size of the image.</li>\r\n      <li>The <span class=\"documentation-code\">matListAvatar</span> attribute is added to the parent container instead of the image.</li>\r\n      <li>The class <span class=\"documentation-code\">list-one-line-avatar__item--image</span> is removed from the image and the class <span class=\"documentation-code\">utils--vertical-align</span> is added.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-avatar/list-one-line-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-avatar/list-one-line-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List two lines with avatar v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Enclose the image in a parent container with class <span class=\"documentation-code\">list-two-lines__item--image</span> that gives the size of the image.</li>\r\n      <li>The <span class=\"documentation-code\">matListAvatar</span> attribute is added to the parent container instead of the image.</li>\r\n      <li>The class <span class=\"documentation-code\">utils--vertical-align</span> is added to the image.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code4 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line with options or data v4.1.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Attribute added<span class=\"documentation-code\">level</span> that hides options icon and show number value.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-options/list-one-line-options.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code5 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-options/list-one-line-options.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code6 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List two lines with avatar v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>A link has been added in the paragrap with class <span class=\"documentation-code\">list-two-lines__item--subtitle</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code7 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code8 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List1 new component v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list1</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code9 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code10 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code11 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line component v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list-one-line</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code12 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code13 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code14 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2xpc3RzL2RvY3VtZW50YXRpb24vbGlzdHMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsDocComponent", function() { return ListsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListsDocComponent = /** @class */ (function () {
    function ListsDocComponent() {
        this.code1 = "\n    <mat-list-item *ngFor=\"let text of texts\" class=\"list-one-line-avatar__item\">\n      <div matListAvatar class=\"list-one-line-avatar__item--image\">\n        <img class=\"utils--vertical-align\" src=\"assets/images/perfil.jpg\" alt=\"user image\">\n      </div>\n      <p mat-line class=\"list-one-line-avatar__item--title\">{{text.title}}</p>\n    </mat-list-item>\n  ";
        this.code2 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-one-line-avatar\";\n\n    .#{$block}{\n      &.mat-list-base{\n        padding: 0;\n        .#{$block}__item{\n          height: 48px;\n          .mat-list-item-content{\n            padding: 0;\n            .#{$block}__item--image{\n              border-radius: 50%;\n              height: 32px;\n              overflow: hidden;\n              position: relative;\n              width: 32px;\n              img{\n                height: 100%;\n              }\n            }\n            .#{$block}__item--title{\n              color: $color-grey-700;\n              font-family: Lato;\n              font-size: $font-size-14;\n            }\n          }\n        }\n      }\n    }\n  ";
        this.code3 = "\n    <mat-list-item *ngFor=\"let text of texts\" class=\"list-two-lines__item\">\n      <div matListAvatar class=\"list-two-lines__item--image\">\n        <img class=\"utils--vertical-align\" src=\"assets/images/perfil.jpg\" alt=\"user image\">\n      </div>\n      <h4 mat-line class=\"list-two-lines__item--title\">{{text.title}}</h4>\n      <p mat-line class=\"list-two-lines__item--subtitle\"> {{text.subtitle}} </p>\n    </mat-list-item>\n  ";
        this.code4 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-two-lines\";\n\n    .#{$block}{\n      padding: 0;\n      .#{$block}__item{\n        .#{$block}__item--image{\n          border-radius: 50%;\n          height: 40px;\n          overflow: hidden;\n          position: relative;\n          width: 40px;\n          img{\n            height: 100%;\n          }\n        }\n        .#{$block}__item--title{\n          color: $color-grey-800;\n          font-family: LatoBold;\n          font-size: 16px;\n        }\n        .#{$block}__item--subtitle{\n          color: $color-grey-600;\n          font-family: Lato;\n        }\n      }\n    }\n  ";
        this.code5 = "\n  <mat-list class=\"list-one-line-options\">\n  <mat-list-item *ngFor=\"let text of texts\" class=\"list-one-line-options__item\">\n    <div matListAvatar class=\"list-one-line-options__item--image\">\n      <span class=\"list-one-line-options__item--initial\">L</span>\n    </div>\n    <div class=\"list-one-line-options__item--content\">\n      <h4 mat-line class=\"list-one-line-options__item--title\">{{text.title}}</h4>\n      <ntx-progress-bar [color]=\"'primary'\" [value]=\"'52'\"></ntx-progress-bar>\n      <div *ngIf=\"level; else optionsBlock\" class=\"list-one-line-options__item--level\">\n        <span>{{level}}</span>\n      </div>\n      <ng-template #optionsBlock>\n        <ntx-menu-options></ntx-menu-options>\n      </ng-template>\n    </div>\n  </mat-list-item>\n</mat-list>";
        this.code6 = "\n  import { Component, OnInit, Input } from '@angular/core';\n  import { ViewEncapsulation } from '@angular/core';\n\n  export interface Section {\n    title: string;\n  }\n\n  @Component({\n    selector: 'ntx-list-one-line-options',\n    templateUrl: './list-one-line-options.component.html',\n    styleUrls: ['./list-one-line-options.component.scss'],\n    encapsulation: ViewEncapsulation.None\n  })\n\n  export class ListOneLineOptionsComponent implements OnInit {\n\n    @Input() level: string;\n    constructor() { }\n\n    texts: Section[] = [\n      {\n        title: 'List name with a very large name and three dots'\n      }\n    ];\n\n    ngOnInit() { }\n  }";
        this.code7 = "\n  <p mat-line class=\"list-two-lines__item--subtitle\">\n    {{text.subtitle}}\n    <a matLine *ngIf=\"showLink\" href=\"...\" class=\"list-two-lines__item--subtitle-link utils--margin-left-12\">{{text.link}}</a>\n  </p>\n  ";
        this.code8 = "\n  .#{$block}__item--subtitle{\n    color: $color-grey-600;\n    display: flex;\n    font-family: Lato;\n  }\n  ";
        this.code9 = "\n    <div class=\"list1\">\n    <div class=\"list1__item\" *ngFor=\"let item of data\">\n      <div class=\"list1__item--badge\">\n        <img \n          *ngIf=\"item.avatar; else elseBlock\"\n          src=\"{{item.avatar}}\"\n          alt=\"{{item.label + '&#32;image'}}\">\n        <ng-template #elseBlock>\n          <span \n            [style.background-color]=\"item.color\"\n            class=\"list1__item--alias utils--align-center-text\">{{item.label | slice:0:1}}</span>\n        </ng-template>\n      </div>\n      <div class=\"list1__item--wrapper\">\n        <div class=\"text utils--margin-right-24 utils--truncate\">\n          <span class=\"utils--text-16 utils--text-grey-800\" matTooltip=\"{{item.label}}\">{{item.label}}</span>\n        </div>\n        <ntx-progress-bar-level \n          value=\"{{item.progress.value}}\"\n          class=\"progress-bar\"></ntx-progress-bar-level>\n        <span class=\"level utils--text-16 utils--align-center-text utils--text-grey-800\">{{item.progress.level}}</span>\n        <ntx-menu-options class=\"options\"></ntx-menu-options>\n      </div>\n    </div>\n</div>\n  ";
        this.code10 = "\n    import { Component, OnInit, Input } from '@angular/core';\n\n    export interface Item {\n    label: string;\n    avatar: string;\n    color: string;\n    progress: {\n      value: number,\n      level: string\n    };\n    }\n\n    @Component({\n    selector: 'ntx-list1',\n    templateUrl: './list1.component.html',\n    styleUrls: ['./list1.component.scss'],\n    })\n\n    export class List1Component implements OnInit {\n\n    @Input() data: Item[];\n\n    constructor() { }\n\n    ngOnInit() { }\n\n    }\n  ";
        this.code11 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list1\";\n\n    .#{$block} {\n    > * {\n      box-sizing: border-box;\n    }\n\n    font-family: Lato;\n\n    .#{$block}__item {\n      display: flex;\n      height: 68px;\n      &--badge {\n        align-self: center;\n        img,span {\n          width: 36px;\n          height: 36px;\n          margin-right: 24px;\n        }\n        img {\n          object-fit: cover;\n        }\n        span {\n          display: block;\n          line-height: 36px;\n          font-size: 23px;\n          color: rgba(255,255,255,0.4);\n        }\n      }\n      &--wrapper {\n        flex-basis: calc(100% - 60px);\n        max-width: calc(100% - 60px);\n        display: flex;\n        align-items: center;\n        .text {\n          flex-basis: 60%;\n        }\n        .progress-bar {\n          flex-basis: calc(40% - 48px - 48px);\n        }\n        .level,.options {\n          flex-basis: 48px;\n        }\n      }\n      &:not(:last-child) .#{$block}__item--wrapper{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n    }\n  ";
        this.code12 = "\n    <div class=\"list-one-line\">\n    <div class=\"list-one-line__item\" *ngFor=\"let item of data\">\n      <img \n        *ngIf=\"item.avatar; else elseBlock\"\n        src=\"{{item.avatar}}\"\n        alt=\"{{item.label + '&#32;image'}}\">\n      <ng-template #elseBlock>\n        <span \n          [style.background-color]=\"item.color\"\n          class=\"list-one-line__item--alias\">{{item.label | slice:0:1}}</span>\n      </ng-template>\n      <div class=\"list-one-line__item--text utils--text-grey-800 utils--truncate\">\n        <span matTooltip=\"{{item.label}}\">{{item.label}}</span>\n      </div>\n    </div>\n    </div>\n  ";
        this.code13 = "\n    import { Component, OnInit, Input } from '@angular/core';\n\n    export interface Item {\n    label: string;\n    avatar: string;\n    color: string;\n    }\n\n    @Component({\n    selector: 'ntx-list-one-line',\n    templateUrl: './list-one-line.component.html',\n    styleUrls: ['./list-one-line.component.scss'],\n    })\n\n    export class ListOneLineComponent implements OnInit {\n\n    @Input() data: Item[];\n\n    constructor() { }\n\n    ngOnInit() { }\n\n    }\n  ";
        this.code14 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-one-line\";\n\n    .#{$block} {\n    font-family: Lato;\n    &__item {\n      display: flex;\n      align-items: center;\n      height: 68px;\n      img, span {\n        width: 36px;\n        height: 36px;\n        margin-right: 24px;\n      }\n      img {\n        object-fit: cover;\n      }\n      &--alias {\n        line-height: 36px;\n        text-align: center;\n        font-size: 23px;\n        color: rgba(255,255,255,0.4);\n      }\n      &--text {\n        flex-basis: calc(100% - 60px);\n        max-width: calc(100% - 60px);\n        font-size: 16px;\n        height: 100%;\n        line-height: 68px;\n      }\n      &:not(:last-child) .#{$block}__item--text{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n    }\n  ";
    }
    ListsDocComponent.prototype.ngOnInit = function () {
    };
    ListsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lists-doc',
            template: __webpack_require__(/*! ./lists-doc.component.html */ "./src/app/ui-pages/lists/documentation/lists-doc.component.html"),
            styles: [__webpack_require__(/*! ./lists-doc.component.scss */ "./src/app/ui-pages/lists/documentation/lists-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListsDocComponent);
    return ListsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List sidemenu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-sidemenu>' }}\">\r\n      <ntx-list-sidemenu [user] =\"user\"></ntx-list-sidemenu>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List 1' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list1>' }}\">\r\n        <ntx-list1 [data]=list1></ntx-list1>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-avatar>' }}\">\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Two lines list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-lines-avatar>' }}\">\r\n        <ntx-list-two-lines-avatar showLink=\"true\"></ntx-list-two-lines-avatar>\r\n        <ntx-list-two-lines-avatar></ntx-list-two-lines-avatar>\r\n        <ntx-list-two-lines-avatar></ntx-list-two-lines-avatar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Multi list with icon' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-multilines-icon>' }}\">\r\n        <ntx-list-multilines-icon></ntx-list-multilines-icon>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line>' }}\">\r\n      <ntx-list-one-line [data]=list></ntx-list-one-line>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list with options' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-options>' }}\">\r\n      <ntx-list-one-line-options></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options [level]=\"'3/5'\"></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options [level]=\"'3/5'\"></ntx-list-one-line-options>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line navigable list' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-navigable>' }}\">\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List horizontal' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-horizontal>' }}\">\r\n        <ntx-list-horizontal></ntx-list-horizontal>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List horizontal with icons' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-horizontal-icon>' }}\">\r\n        <ntx-list-horizontal-icon></ntx-list-horizontal-icon>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      class=\"horizontal-cards\"\r\n      title=\"{{'Two lines vertical list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-lines-avatar-vertical>' }}\">\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-cards .card-simple.mat-card .mat-card-content {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvbGlzdHMvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy9zcmNcXGFwcFxcdWktcGFnZXNcXGxpc3RzXFxleGFtcGxlc1xcbGlzdHMtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJUSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC91aS1wYWdlcy9saXN0cy9leGFtcGxlcy9saXN0cy1leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWNhcmRze1xyXG4gIC5jYXJkLXNpbXBsZXtcclxuICAgICYubWF0LWNhcmR7XHJcbiAgICAgIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsExamplesComponent", function() { return ListsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var USER = {
    actions: [
        {
            label: 'Recibidas',
            state: 'active',
            icon: 'icon-inbox-solid',
            link: '#',
            showBadge: true
        },
        {
            label: 'Papelera',
            state: '',
            icon: 'icon-archive-solid',
            link: '#',
            showBadge: false
        }
    ]
};
var ListsExamplesComponent = /** @class */ (function () {
    function ListsExamplesComponent() {
        this.user = USER;
        this.list = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B'
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88'
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37'
            },
            {
                label: 'Verbal communication',
                avatar: undefined,
                color: '#5cce88'
            },
            {
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                avatar: undefined,
                color: '#41545D'
            },
            {
                label: 'Critical thinking & problem solving',
                avatar: 'assets/images/background-profile-header.jpg',
                color: '#1D5D93'
            }
        ];
        this.list1 = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B',
                progress: {
                    value: 40,
                    level: '3/5'
                }
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88',
                progress: {
                    value: 80,
                    level: '4/7'
                }
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37',
                progress: {
                    value: 75,
                    level: '3/7'
                }
            },
            {
                label: 'Verbal communication',
                avatar: undefined,
                color: '#5cce88',
                progress: {
                    value: 68,
                    level: '4/9'
                }
            },
            {
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                avatar: undefined,
                color: '#41545D',
                progress: {
                    value: 33,
                    level: '2/5'
                }
            },
            {
                label: 'Critical thinking & problem solving',
                avatar: 'assets/images/background-profile-header.jpg',
                color: '#1D5D93',
                progress: {
                    value: 88,
                    level: '5/8'
                }
            }
        ];
    }
    ListsExamplesComponent.prototype.ngOnInit = function () {
    };
    ListsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lists-examples',
            template: __webpack_require__(/*! ./lists-examples.component.html */ "./src/app/ui-pages/lists/examples/lists-examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lists-examples.component.scss */ "./src/app/ui-pages/lists/examples/lists-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListsExamplesComponent);
    return ListsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/lists-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/lists/lists-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ListsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsRoutingModule", function() { return ListsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/lists-examples.component */ "./src/app/ui-pages/lists/examples/lists-examples.component.ts");
/* harmony import */ var _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/lists-doc.component */ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_3__["ListsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_4__["ListsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var ListsRoutingModule = /** @class */ (function () {
    function ListsRoutingModule() {
    }
    ListsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListsRoutingModule);
    return ListsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/lists.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/lists/lists.module.ts ***!
  \************************************************/
/*! exports provided: ListsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsModule", function() { return ListsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists-routing.module */ "./src/app/ui-pages/lists/lists-routing.module.ts");
/* harmony import */ var _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/lists-doc.component */ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts");
/* harmony import */ var _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/lists-examples.component */ "./src/app/ui-pages/lists/examples/lists-examples.component.ts");








var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListsRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxMenusModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxListsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: [
                _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_7__["ListsExamplesComponent"],
                _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_6__["ListsDocComponent"]
            ]
        })
    ], ListsModule);
    return ListsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-lists-lists-module.js.map