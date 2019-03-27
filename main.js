(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\r\n  About\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  width: 75%;\n  height: 500px;\n  margin: 10px auto 10px;\n  background-color: transparent;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRTpcXE1hcmNoMTFXZWJBcHBcXGNsaWVudC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWNvbnRhaW5lclxyXG57XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Coffee Products - About Us');
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");










var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container class=\"clr-main-container\">\r\n  <clr-header class=\"header-6 header-navigation\">\r\n    <div class=\"branding\">\r\n      <a routerLink=\"/\" class=\"nav-link\" (click)=\"activeNavLink('home')\">\r\n        <clr-icon shape=\"bundle\"></clr-icon>\r\n        <span class=\"title\">{{ 'TITLE' | translate }}</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\r\n      <a routerLink=\"/\" class=\"nav-link nav-text\" (click)=\"activeNavLink('home')\"\r\n         [ngClass]=\"{'active': navLinkTitle == 'home'}\">{{ 'HOME' | translate }}</a>\r\n      <a routerLink=\"/news\" class=\"active nav-link nav-text\" (click)=\"activeNavLink('news')\"\r\n         [ngClass]=\"{'active': navLinkTitle == 'news'}\">{{ 'NEWS' | translate }}</a>\r\n      <a routerLink=\"/products\" class=\"nav-link nav-text\" (click)=\"activeNavLink('products')\"\r\n         [ngClass]=\"{'active': navLinkTitle == 'products'}\">{{ 'PRODUCTS' | translate }}</a>\r\n      <a routerLink=\"/about\" class=\"nav-link nav-text\" (click)=\"activeNavLink('about')\"\r\n         [ngClass]=\"{'active': navLinkTitle == 'about'}\">{{ 'ABOUT' | translate }}</a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <clr-dropdown>\r\n        <button class=\"nav-icon\" clrDropdownTrigger>\r\n          <clr-icon shape=\"language\"></clr-icon>\r\n          <clr-icon shape=\"caret down\"></clr-icon>\r\n        </button>\r\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\" class=\"langSelector\">\r\n          <span clrDropdownItem (click)=\"setLanguage('en')\" class=\"langSwitch\">{{ 'ENGLISH' | translate }}</span>\r\n          <!--<span (click)=\"setLanguage('ua')\" class=\"nav-link nav-text langSwitch langSwitchUA\">{{ 'UKRAINIAN' | translate}}</span>-->\r\n          <span clrDropdownItem (click)=\"setLanguage('pl')\" class=\"langSwitch\">{{ 'POLISH' | translate}}</span>\r\n        </clr-dropdown-menu>\r\n      </clr-dropdown>\r\n      <clr-dropdown>\r\n        <button class=\"nav-icon\" clrDropdownTrigger>\r\n          <clr-icon shape=\"user\"></clr-icon>\r\n          <clr-icon shape=\"caret down\"></clr-icon>\r\n        </button>\r\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\" class=\"userTools\">\r\n          <a href=\"...\" clrDropdownItem>{{ 'ABOUT_USER' | translate }}</a>\r\n          <a href=\"...\" clrDropdownItem>{{ 'PREFERENCES' | translate }}</a>\r\n          <a routerLink=\"/login\" clrDropdownItem>{{ 'LOG_IN' | translate }}</a>\r\n        </clr-dropdown-menu>\r\n      </clr-dropdown>\r\n      <a class=\"nav-link nav-icon\" (click)=\"basic = true\">\r\n        <clr-icon shape=\"cog\"></clr-icon>\r\n      </a>\r\n    </div>\r\n  </clr-header>\r\n  <router-outlet></router-outlet>\r\n</clr-main-container>\r\n<clr-modal [(clrModalOpen)]=\"basic\">\r\n  <h3 class=\"modal-title\">I have a nice title</h3>\r\n  <div class=\"modal-body\">\r\n    <p>But not much to say...</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"basic = false\">Ok</button>\r\n  </div>\r\n</clr-modal>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr-main-container {\n  overflow: auto; }\n\n.header-navigation {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXE1hcmNoMTFXZWJBcHBcXGNsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUUsY0FBYyxFQUFBOztBQUVoQjtFQUVFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKlxyXG4vL3tcclxuLy8gIGZvbnQtZmFtaWx5OiAnWkNPT0wgUWluZ0tlIEh1YW5nWW91JywgY3Vyc2l2ZTtcclxuLy99XHJcbi5jbHItbWFpbi1jb250YWluZXJcclxue1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5oZWFkZXItbmF2aWdhdGlvblxyXG57XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.activeNavLink('home');
    };
    AppComponent.prototype.setLanguage = function (lang) {
        this.translate.use(lang);
    };
    AppComponent.prototype.activeNavLink = function (linkTitle) {
        this.navLinkTitle = linkTitle;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");


















function setupTranslateFactory(service) {
    return function () { return service.use('en'); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_17__["ScrollToModule"].forRoot()
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                _services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  article works!\n</p>\n"

/***/ }),

/***/ "./src/app/article/article.component.scss":
/*!************************************************!*\
  !*** ./src/app/article/article.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  Home\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  width: 75%;\n  height: 500px;\n  margin: 10px auto 10px;\n  background-color: transparent;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcTWFyY2gxMVdlYkFwcFxcY2xpZW50L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lclxyXG57XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Coffee Products - Home');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <form class=\"login\">\n    <section class=\"title\">\n      <h3 class=\"welcome\">{{ 'LOGIN_WELCOME' | translate }}</h3>\n      {{ 'LOGIN_TITLE' | translate }}\n      <h5 class=\"hint\">{{ 'LOGIN_HELP' | translate }}</h5>\n    </section>\n    <div class=\"login-group\">\n      <clr-input-container>\n        <input type=\"text\" name=\"username\" class=\"userName\" clrInput placeholder=\"{{ 'USERNAME' | translate }}\" autocomplete=\"off\"/>\n      </clr-input-container>\n      <clr-password-container>\n        <input type=\"password\" name=\"password\" class=\"userPass\" clrPassword placeholder=\"{{ 'PASSWORD' | translate }}\"/>\n      </clr-password-container>\n      <clr-checkbox-wrapper>\n        <label>{{ 'REMEMBER_ME' | translate }}</label>\n        <input type=\"checkbox\" name=\"rememberMe\" clrCheckbox/>\n      </clr-checkbox-wrapper>\n      <div class=\"error error-message\">\n        Invalid user name or password\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">{{ 'LOG_IN' | translate }}</button>\n      <a href=\"\" class=\"signup\">{{ 'REGISTER' | translate }}</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  display: none; }\n\n.login-wrapper {\n  min-height: calc(100vh - 60px) !important; }\n\n.login {\n  min-height: calc(100vh - 60px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXE1hcmNoMTFXZWJBcHBcXGNsaWVudC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBYSxFQUFBOztBQUVmO0VBRUUseUNBQXlDLEVBQUE7O0FBRTNDO0VBRUUseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbi13cmFwcGVyXHJcbntcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCkgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5cclxue1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyTmFtZSxcclxuLnVzZXJQYXNzXHJcbntcclxuICAvL2ZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-container\">\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\r\n        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\r\n        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\r\n        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.\r\n      </p>\r\n    </div>\r\n  </a>\r\n  <a href=\"...\" class=\"card clickable\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/news.png\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,\r\n        magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\n        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique\r\n        senectus et netus et malesuada fames ac turpis egestas.\r\n        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor.\r\n      </p>\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-container {\n  width: 75%;\n  margin: 0 auto 10px;\n  padding: 5px;\n  background-color: transparent;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center; }\n\n.card {\n  display: block;\n  margin: 5px;\n  width: calc(33.33333% - 10px); }\n\n@media screen and (max-width: 1200px) {\n  .card {\n    width: calc(50% - 10px); } }\n\n@media screen and (max-width: 768px) {\n  .card {\n    width: calc(100% - 10px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9FOlxcTWFyY2gxMVdlYkFwcFxcY2xpZW50L3NyY1xcYXBwXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNkJBQTZCO0VBRTdCLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUV6QjtFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBRS9CO0VBRUU7SUFFRSx1QkFBdUIsRUFBQSxFQUN4Qjs7QUFFSDtFQUVFO0lBRUUsd0JBQXdCLEVBQUEsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1jb250YWluZXJcclxue1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjOWFhOGUyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FyZFxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IGNhbGMoMzMuMzMzMzMlIC0gMTBweCk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KVxyXG57XHJcbiAgLmNhcmRcclxuICB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXHJcbntcclxuICAuY2FyZFxyXG4gIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Coffee Products - News');
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found-container\">\n  <h2>Page not found</h2>\n</div>\n\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found-container {\n  width: 75%;\n  height: 500px;\n  margin: 70px auto 10px;\n  background-color: transparent;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvRTpcXE1hcmNoMTFXZWJBcHBcXGNsaWVudC9zcmNcXGFwcFxccGFnZS1ub3QtZm91bmRcXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utbm90LWZvdW5kLWNvbnRhaW5lclxyXG57XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogNzBweCBhdXRvIDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key] || key;
    };
    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"subnav\" [clr-nav-level]=\"2\">\r\n  <ul class=\"nav\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" [ngx-scroll-to-offset]=\"-106\" [ngx-scroll-to]=\"'#product-item1'\" (click)=\"activeProduct('something1')\" [ngClass] = \"{'active': productsLink == 'something1'}\">Something1</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [ngx-scroll-to-offset]=\"-106\" [ngx-scroll-to]=\"'#product-item2'\" (click)=\"activeProduct('something2')\" [ngClass] = \"{'active': productsLink == 'something2'}\">Something2</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [ngx-scroll-to-offset]=\"-106\" [ngx-scroll-to]=\"'#product-item3'\" (click)=\"activeProduct('something3')\" [ngClass] = \"{'active': productsLink == 'something3'}\">Something3</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [ngx-scroll-to-offset]=\"-106\" [ngx-scroll-to]=\"'#product-item4'\" (click)=\"activeProduct('something4')\" [ngClass] = \"{'active': productsLink == 'something4'}\">Something4</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<div class=\"products-container\">\r\n  <div class=\"product-item product-item-1\" id=\"product-item1\">\r\n    Something1\r\n  </div>\r\n  <div class=\"product-item product-item-2\" id=\"product-item2\">\r\n    Something2\r\n  </div>\r\n  <div class=\"product-item product-item-3\" id=\"product-item3\">\r\n    Something3\r\n  </div>\r\n  <div class=\"product-item product-item-4\" id=\"product-item4\">\r\n    Something4\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  width: 75%;\n  margin: 10px auto 10px;\n  background-color: transparent; }\n\n.subnav {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 60px; }\n\n.product-item {\n  width: 100%;\n  height: 1500px;\n  font-size: 30px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background-color: #22343c !important; }\n\n.product-item-1 {\n  background-color: transparent;\n  margin-bottom: 10px;\n  border: 1px solid cadetblue;\n  color: cadetblue; }\n\n.product-item-2 {\n  background-color: transparent;\n  margin-bottom: 10px;\n  border: 1px solid coral;\n  color: coral; }\n\n.product-item-3 {\n  background-color: transparent;\n  margin-bottom: 10px;\n  border: 1px solid darkolivegreen;\n  color: darkolivegreen; }\n\n.product-item-4 {\n  background-color: transparent;\n  border: 1px solid darkslateblue;\n  color: darkslateblue; }\n\n.nav-item {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRTpcXE1hcmNoMTFXZWJBcHBcXGNsaWVudC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFFRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTs7QUFFWDtFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9DQUFvQyxFQUFBOztBQUV0QztFQUVFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBOztBQUVsQjtFQUVFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFFZDtFQUVFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHFCQUFxQixFQUFBOztBQUV2QjtFQUVFLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0Isb0JBQW9CLEVBQUE7O0FBRXRCO0VBRUUsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtY29udGFpbmVyXHJcbntcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN1Ym5hdlxyXG57XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDYwcHg7XHJcbn1cclxuLnByb2R1Y3QtaXRlbVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTAwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjM0M2MgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHVjdC1pdGVtLTFcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY2FkZXRibHVlO1xyXG4gIGNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuLnByb2R1Y3QtaXRlbS0yXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvcmFsO1xyXG4gIGNvbG9yOiBjb3JhbDtcclxufVxyXG4ucHJvZHVjdC1pdGVtLTNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya29saXZlZ3JlZW47XHJcbiAgY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG59XHJcbi5wcm9kdWN0LWl0ZW0tNFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya3NsYXRlYmx1ZTtcclxuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcclxufVxyXG4ubmF2LWl0ZW1cclxue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Coffee Products - Products');
    };
    ProductsComponent.prototype.activeProduct = function (product) {
        this.productsLink = product;
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/page-title.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/page-title.service.ts ***!
  \************************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PageTitleService = /** @class */ (function () {
    function PageTitleService(pageTitleService) {
        this.pageTitleService = pageTitleService;
    }
    PageTitleService.prototype.setTitle = function (newTitle) {
        this.pageTitleService.setTitle(newTitle);
    };
    PageTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TranslateService = /** @class */ (function () {
    function TranslateService(_http) {
        this._http = _http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var langPath = "assets/locale/" + (lang || 'en') + ".json";
            _this._http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error1) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\March11WebApp\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map