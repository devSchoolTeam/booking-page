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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_booking_page_booking_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/booking-page/booking-page.component */ "./src/app/components/booking-page/booking-page.component.ts");
/* harmony import */ var _shared_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/resolvers/data.resolver */ "./src/app/shared/resolvers/data.resolver.ts");
/* harmony import */ var _shared_resolvers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/resolvers/auth.guard */ "./src/app/shared/resolvers/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _shared_resolvers_gapi_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/resolvers/gapi.guard */ "./src/app/shared/resolvers/gapi.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        canActivate: [_shared_resolvers_gapi_guard__WEBPACK_IMPORTED_MODULE_8__["GapiGuard"]],
        resolve: {
            data: _shared_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_5__["DataResolver"]
        },
        children: [
            {
                path: 'book',
                component: _components_booking_page_booking_page_component__WEBPACK_IMPORTED_MODULE_4__["BookingPageComponent"],
                canActivate: [_shared_resolvers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: '',
                component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                canActivate: [_shared_resolvers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'login',
        canActivate: [_shared_resolvers_gapi_guard__WEBPACK_IMPORTED_MODULE_8__["GapiGuard"]],
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'error',
        component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__["ErrorPageComponent"]
    },
    {
        path: '**',
        component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__["ErrorPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            providers: [_shared_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_5__["DataResolver"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet class=\"main\"></router-outlet>\n<app-popup></app-popup>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(gapiService) {
        this.gapiService = gapiService;
        this.gapiIsLoaded = false;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__["GapiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var src_app_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_booking_page_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/booking-page/header/header.component */ "./src/app/components/booking-page/header/header.component.ts");
/* harmony import */ var _components_booking_page_booking_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/booking-page/booking-page.component */ "./src/app/components/booking-page/booking-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_resolvers_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/resolvers/auth.guard */ "./src/app/shared/resolvers/auth.guard.ts");
/* harmony import */ var _components_booking_page_event_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/booking-page/event/event.component */ "./src/app/components/booking-page/event/event.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var gapiClientConfig = src_app_shared_config__WEBPACK_IMPORTED_MODULE_0__["clientConfig"];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _components_booking_page_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_booking_page_booking_page_component__WEBPACK_IMPORTED_MODULE_6__["BookingPageComponent"],
                _components_booking_page_event_event_component__WEBPACK_IMPORTED_MODULE_12__["EventComponent"],
                _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng_gapi__WEBPACK_IMPORTED_MODULE_9__["GoogleApiModule"].forRoot({
                    provide: ng_gapi__WEBPACK_IMPORTED_MODULE_9__["NG_GAPI_CONFIG"],
                    useValue: gapiClientConfig
                })
            ],
            providers: [_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_8__["GapiService"], _shared_resolvers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/booking-page/booking-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/booking-page/booking-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (swiperight)=\"swipe()\" (swipeleft)=\"swipe()\">\n  <app-header [currentStatus]=\"currentStatus\"></app-header>\n  <div class=\"content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"events-container col-lg-6\">\n          <div class=\"events\">\n            <app-time-measure></app-time-measure>\n            <app-event *ngIf=\"events\" #child [event]=\"tempEvent\" [ngStyle]=\"{'width': '600px'}\"></app-event>\n          </div>\n        </div>\n        <div class=\"button-container col-lg-6\">\n          <div class=\"button-row-1\">\n            <button class=\"time-buttons\" *ngFor=\"let availableMeetingDuration of availableMeetingDurations\"\n                    (click)=\"selectMeetingDuration(availableMeetingDuration.value)\"\n                    [ngClass]=\"selectedDuration == availableMeetingDuration.value? ' selected-button': null\"\n                    [class]=\"availableMeetingDuration.value>interval.interval || !interval? 'disabled-button' : null\">\n              <span>\n                {{availableMeetingDuration.label}}\n              </span>\n            </button>\n          </div>\n          <div class=\"button-row-2\">\n            <button class=\"cancel-btn\" (click)=\"selectMeetingDuration(0)\"\n                    [ngClass]=\"{'disabled-button':selectedDuration === 0}\">\n              <span>Cancel</span>\n            </button>\n            <div [class]=\"eventIsCreating ? 'disabled-loader-btn' : null\">\n              <button class=\"book-button book-button-addition\" [ngClass]=\"{'disabled-button':selectedDuration===0}\"\n                      (click)=\"createEvent()\">\n                <span *ngIf=\"!eventIsCreating; else loader\">{{currentStatus.bookButtonSecond}}</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #loader>\n  <div class=\"lds-ring\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/booking-page/booking-page.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/booking-page/booking-page.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  display: none; }\n\n.wrapper {\n  min-width: 450px; }\n\n.events-container {\n  height: 70vh;\n  overflow-y: scroll; }\n\n.events-container:after {\n    width: 100%;\n    height: 100px;\n    background-color: red;\n    position: absolute; }\n\n.events {\n  display: flex;\n  height: 2700px;\n  flex-basis: 135px;\n  flex-grow: 0; }\n\n.content {\n  margin-top: 75px;\n  min-height: 300px;\n  overflow: hidden; }\n\n.row {\n  flex-wrap: wrap-reverse; }\n\n.name {\n  font-family: Ubuntu, sans-serif;\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: -1px;\n  color: #ffffff; }\n\n.center-block {\n  position: absolute; }\n\n.button-container {\n  margin-bottom: 75px; }\n\n.time-buttons {\n  margin: 0 6px 12px 6px;\n  min-width: 126px;\n  cursor: pointer;\n  border-radius: 3px; }\n\n.time-buttons:last-child {\n    margin-right: 0; }\n\n.time-buttons:first-child {\n    margin-left: 0; }\n\n.time-buttons span {\n    color: #526072;\n    font-size: 21px; }\n\n.time-buttons:hover {\n  background-color: #526072; }\n\n.time-buttons:hover span {\n    color: white; }\n\n.selected-button {\n  background-color: #526072;\n  cursor: default; }\n\n.selected-button span {\n    color: white; }\n\n.disabled-button {\n  opacity: 0.5;\n  pointer-events: none; }\n\n.button-row-1 {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: row; }\n\n.red {\n  background-color: red; }\n\n.cancel-btn {\n  margin-right: 16px;\n  width: 158px;\n  font-size: 24px;\n  border-radius: 3px; }\n\n.cancel-btn span {\n    color: #7d7e80; }\n\n.button-row-2 {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  padding-top: 36px; }\n\n.disabled-loader-btn {\n  pointer-events: none; }\n\n.book-button {\n  width: 210px;\n  height: 78px;\n  overflow: hidden;\n  border-radius: 3px; }\n\n.book-button-addition {\n  background-color: #43b799; }\n\n.book-button-addition span {\n    color: white; }\n\n.book-button-addition .loader {\n    border: 16px solid #f3f3f3;\n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite; }\n\n.event {\n  font-color: #526072;\n  width: 100%;\n  background-color: #e0e3e5;\n  margin: 2px; }\n\n.events-block {\n  width: 100%; }\n\n.space {\n  width: 100%; }\n\n.tempEvent {\n  font-color: white;\n  margin: 1px;\n  width: 100%;\n  background-color: #526072; }\n\n.lds-ring {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  padding-left: 80px; }\n\n.lds-ring div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 35px;\n  border: 6px solid;\n  height: 35px;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent; }\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s; }\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s; }\n\n@-webkit-keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.name {\n  font-family: Ubuntu, sans-serif;\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: -1px;\n  color: #ffffff; }\n\n.center-block {\n  position: absolute; }\n\n.title-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 165px; }\n\n.image {\n  height: 320px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  opacity: 0.71;\n  mix-blend-mode: overlay;\n  position: relative;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/booking-page/booking-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/booking-page/booking-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageComponent", function() { return BookingPageComponent; });
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/time/time.service */ "./src/app/services/time/time.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingPageComponent = /** @class */ (function () {
    function BookingPageComponent(route, timeService, router) {
        this.route = route;
        this.timeService = timeService;
        this.router = router;
        this.availableMeetingDurations = _shared_constants__WEBPACK_IMPORTED_MODULE_1__["availableMeetingDurations"];
        this.selectedDuration = 0;
        this.eventIsCreating = false;
    }
    BookingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeService.events$.subscribe({
            next: function (events) {
                _this.events = events;
            }
        });
        this.route.data.subscribe({
            next: function (data) {
                _this.currentStatus = data['data'].status;
                _this.interval = data['data'].intervalForBooking;
            }
        });
        this.subscription = this.timeService.data.subscribe(function (data) {
            _this.currentStatus = data.status;
            _this.interval = data.intervalForBooking;
        });
    };
    BookingPageComponent.prototype.selectMeetingDuration = function (meetingDuration) {
        var _this = this;
        if (meetingDuration > 0) {
            this.selectedDuration = meetingDuration;
            this.tempEvent = {
                start: this.interval.start,
                end: new Date(this.interval.start.getTime() + this.selectedDuration),
                duration: new Date(this.interval.start.getTime() + this.selectedDuration).getTime() - this.interval.start.getTime(),
                timeFromStart: this.interval.start.getTime() -
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9, 0, 0).getTime()
            };
            setTimeout(function () {
                _this.child.scrollToNewEvent();
            });
        }
        else {
            this.selectedDuration = meetingDuration;
            this.tempEvent = undefined;
        }
    };
    BookingPageComponent.prototype.swipe = function () {
        this.router.navigate(['/']);
    };
    BookingPageComponent.prototype.createEvent = function () {
        var _this = this;
        if (this.selectedDuration > 0 && !this.eventIsCreating) {
            this.eventIsCreating = true;
            setTimeout(function () {
                _this.child.scrollToNewEvent();
            }, 0);
            this.timeService
                .createEvent(this.interval.start, this.selectedDuration)
                .then(function (res) {
                _this.timeService.loadEvents().subscribe();
                _this.selectedDuration = 0;
                _this.tempEvent = undefined;
                _this.eventIsCreating = false;
            }, function (err) {
                console.error(err);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('child'),
        __metadata("design:type", Object)
    ], BookingPageComponent.prototype, "child", void 0);
    BookingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-booking-page',
            template: __webpack_require__(/*! ./booking-page.component.html */ "./src/app/components/booking-page/booking-page.component.html"),
            styles: [__webpack_require__(/*! ./booking-page.component.sass */ "./src/app/components/booking-page/booking-page.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_time_time_service__WEBPACK_IMPORTED_MODULE_0__["TimeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookingPageComponent);
    return BookingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/booking-page/event/event.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/booking-page/event/event.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event-blocks\">\n  <div *ngFor=\"let block of blocks; let i = index\" [class]=\"'event'\" (click)=\" onEventClick(i)\"\n       [ngStyle]=\"{'height': calculateHeight(block.duration,'height'), 'top':calculateHeight(block.fromStart,'offset')}\">\n    <span class=\"event-status\">{{block.status}}&nbsp;</span>\n    <span class=\"event-time\">{{block.start | date: 'HH:mm'}} - {{block.end | date: 'HH:mm'}}</span>\n    <span class=\"underblock-line\"></span>\n  </div>\n  <span #currentTime class=\"current-time\" *ngIf=\" lineOffset\" [ngStyle]=\"{'top':  lineOffset}\"></span>\n  <div #newEvent *ngIf=\"event\" class=\"newEvent\"\n       [ngStyle]=\"{'height':  calculateHeight(event.duration, 'height'), 'top':calculateHeight(event.timeFromStart,'offset')}\">\n    <span class=\"newEvent-status\">New meeting, &nbsp;</span>\n    <span class=\"newEvent-time\">{{event.start | date: 'HH:mm'}} - {{event.end | date: 'HH:mm'}}\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/booking-page/event/event.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/components/booking-page/event/event.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  display: none; }\n\n.main {\n  display: flex;\n  height: 2700px; }\n\n.line {\n  background-color: #eaebec;\n  height: 1px;\n  width: 400px;\n  position: absolute;\n  top: 13px;\n  left: 75px; }\n\n.big {\n  width: 100%;\n  color: #52647a;\n  flex-grow: 1;\n  font-size: 21px;\n  font-family: OpenSans, sans-serif;\n  font-weight: 600;\n  position: relative; }\n\n.big:after {\n    content: '';\n    width: 40px;\n    border-bottom: solid 10px black;\n    z-index: 1; }\n\n.small {\n  flex-grow: 1;\n  width: 100%;\n  text-align: right;\n  font-size: 18px;\n  font-family: OpenSans, sans-serif;\n  color: #7b7b7b;\n  padding-right: 22px; }\n\n.event-blocks {\n  margin-top: 5%;\n  position: relative;\n  height: 98.5%;\n  flex-basis: 300px;\n  flex-grow: 3; }\n\n.event {\n  word-wrap: normal;\n  margin: 0 10px;\n  position: absolute;\n  width: 100%;\n  min-width: 320px;\n  background-color: #e0e3e5;\n  border-radius: 2px;\n  padding: 10px 18px;\n  cursor: pointer; }\n\n.event:hover {\n    background-color: #526072; }\n\n.event:hover span {\n      color: white; }\n\n.event .event-status {\n    color: #526072;\n    font-size: 21px; }\n\n.event .event-time {\n    color: #526072;\n    font-size: 21px;\n    font-weight: 600; }\n\n.current-time {\n  width: 100%;\n  position: absolute;\n  height: 2px;\n  z-index: 10;\n  margin: 0 10px;\n  background-color: #c0392b; }\n\n.newEvent {\n  margin: 0 10px;\n  position: absolute;\n  width: 100%;\n  background-color: #526072;\n  border-radius: 2px;\n  min-width: 320px; }\n\n.newEvent .newEvent-status {\n    color: white;\n    font-size: 21px;\n    padding-left: 18px; }\n\n.newEvent .newEvent-time {\n    color: white;\n    font-size: 21px;\n    font-weight: 600; }\n\n.scrolling-block {\n  overflow-y: scroll;\n  height: 700px;\n  width: 500px; }\n"

/***/ }),

/***/ "./src/app/components/booking-page/event/event.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/booking-page/event/event.component.ts ***!
  \******************************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/services/popup/popup.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/time/time.service */ "./src/app/services/time/time.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventComponent = /** @class */ (function () {
    function EventComponent(timeService, popupService) {
        this.timeService = timeService;
        this.popupService = popupService;
        this.updateLineTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(60000);
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollToCurrentTime();
        }, 0);
        this.subscription = this.timeService.events$.subscribe({
            next: function (events) {
                _this.events = events;
                var date = new Date();
                _this.blocks = _this.calculateBlocks(events, date);
                _this.interval = _this.calculateInterval(date);
                _this.lineOffset = _this.calculateCurrentTimeLine(date);
            }
        });
        this.updateLineTimer.subscribe({
            next: function () {
                var date = new Date();
                _this.calculateCurrentTimeLine(date);
            }
        });
    };
    EventComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EventComponent.prototype.calculateHeight = function (milliseconds, type) {
        var x = (milliseconds * 100) / this.interval.interval;
        if (type === 'height') {
            x -= 0.1;
        }
        if (type === 'offset') {
            x += 0.1;
        }
        return x.toString() + '%';
    };
    EventComponent.prototype.scrollToNewEvent = function () {
        this.newEvent.nativeElement.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    };
    EventComponent.prototype.scrollToCurrentTime = function () {
        this.currentTime.nativeElement.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    };
    EventComponent.prototype.calculateBlocks = function (events, currentTime) {
        for (var i = 0; i < events.length; i++) {
            if (new Date(events[i].start).getTime() - new Date(currentTime).getTime() >
                900000) {
                events[i].status = 'Next event, ';
            }
            else if (new Date(events[i].start).getTime() - new Date(currentTime).getTime() <
                900000 &&
                new Date(events[i].start).getTime() - new Date(currentTime).getTime() >
                    0) {
                events[i].status = 'Soon, ';
            }
            else if (new Date(events[i].end).getTime() < new Date(currentTime).getTime()) {
                events[i].status = 'Finished event, ';
            }
            else if (new Date(events[i].start).getTime() < new Date(currentTime).getTime() &&
                new Date(events[i].end).getTime() > new Date(currentTime).getTime()) {
                events[i].status = 'In process, ';
            }
        }
        return events;
    };
    EventComponent.prototype.calculateCurrentTimeLine = function (currentTime) {
        var currentTimeMilliseconds = currentTime.getTime() -
            new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 9, 0, 0).getTime();
        return this.calculateHeight(currentTimeMilliseconds, 'offset');
    };
    EventComponent.prototype.calculateInterval = function (currentTime) {
        var startTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 9, 0, 0);
        var endTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 22, 0, 0);
        return {
            start: startTime,
            end: endTime,
            interval: endTime.getTime() - startTime.getTime()
        };
    };
    EventComponent.prototype.onEventClick = function (index) {
        this.popupService.showPopup({ index: index });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newEvent'),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "newEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currentTime'),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "currentTime", void 0);
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/booking-page/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.sass */ "./src/app/components/booking-page/event/event.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_time_time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"],
            _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_0__["PopupService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/booking-page/header/header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/booking-page/header/header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"title-container\" [ngStyle]=\"{backgroundColor: currentStatus.backgroundColor}\">\n  <div class=\"center-block\">\n    <h1 class=\"name\">Hall Room</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/booking-page/header/header.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/components/booking-page/header/header.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name {\n  font-family: Ubuntu, sans-serif;\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: -1px;\n  color: #ffffff; }\n\n.center-block {\n  position: absolute; }\n\n.title-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 165px; }\n\n.title-container::after {\n    height: 250px;\n    content: \"\";\n    background: url('mesh.png') no-repeat center;\n    opacity: 0.7;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    z-index: 0;\n    mix-blend-mode: overlay; }\n"

/***/ }),

/***/ "./src/app/components/booking-page/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/booking-page/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/time/time.service */ "./src/app/services/time/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(timeService) {
        this.timeService = timeService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeService.data.subscribe(function (data) {
            _this.currentStatus = data.status;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "currentStatus", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/booking-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/booking-page/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_time_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/error-page/error-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-content\">\n  <img class=\"smile\"\n       src=\"../../../assets/images/sadsmile.jpg\">\n  <h1>LOADING ERROR</h1>\n  <button class=\"return\" (click)='returnToMainPage()'>Try again!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 150px; }\n\n.error-content {\n  margin-top: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.return {\n  margin-top: 50px;\n  width: 250px;\n  height: 80px; }\n\n.smile {\n  width: 100px;\n  height: 100px; }\n"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(gapiService, router) {
        this.gapiService = gapiService;
        this.router = router;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent.prototype.returnToMainPage = function () {
        return this.router.navigate(['/']);
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/components/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.sass */ "./src/app/components/error-page/error-page.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__["GapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>Unauthorized</h1>\n  </div>\n  <button class=\"btn btn-success\" (click)=\"onSignIn()\">Sign in</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(gapiService, router) {
        this.gapiService = gapiService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignIn = function () {
        var _this = this;
        this.gapiService.signIn().then(function (res) {
            _this.router.navigate(['/']);
        }, function (rej) {
            console.log(rej);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/components/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_0__["GapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" [ngStyle]=\"{'background-color': currentStatus.backgroundColor}\">\n  <div class=\"container\">\n    <div class=\"content\">\n      <div class=\"time-block\">\n        <div *ngIf=\"timerString; else noEvents\">\n          <h1 class=\"timer\">{{timerString}}</h1>\n          <span class=\"status-name\">{{currentStatus.statusLabel}}</span>\n        </div>\n      </div>\n      <div class=\"title-container\">\n        <h1 class=\"name\">Hall Room</h1>\n        <button\n          routerLink=\"/book\"\n          class=\"book-button\"\n          [ngStyle]=\"{color: currentStatus.fontColor}\">\n          <span>\n            {{currentStatus.bookButton}}\n          </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #noEvents>\n  <h1 class=\"noevents\">Available</h1>\n  <span class=\"status-name\">No upcoming events</span>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  height: 100vh; }\n\n.content {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh; }\n\n.time-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 176px; }\n\n.timer {\n  font-weight: bold;\n  color: #ffffff;\n  text-align: center;\n  font-family: OpenSans, sans-serif;\n  font-size: 90px;\n  letter-spacing: normal; }\n\n.status-name {\n  font-family: OpenSans, sans-serif;\n  font-size: 38px;\n  font-weight: bold;\n  color: #ffffff;\n  display: flex;\n  justify-content: center; }\n\n.name {\n  font-family: Ubuntu, sans-serif;\n  font-size: 80px;\n  font-weight: bold;\n  color: #ffffff; }\n\n.center-block {\n  text-align: center;\n  position: absolute; }\n\n.title-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 222px; }\n\n.title-container::after {\n    content: \"\";\n    background: url('mesh.png') no-repeat center;\n    opacity: 0.7;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    z-index: 0; }\n\n.book-button {\n  background-color: white;\n  width: 210px;\n  height: 78px;\n  z-index: 100;\n  border-radius: 5px; }\n\n.noevents {\n  font-weight: bold;\n  color: white;\n  font-family: OpenSans, sans-serif;\n  font-size: 60px; }\n"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/time/time.service */ "./src/app/services/time/time.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(timeService, route) {
        this.timeService = timeService;
        this.route = route;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe({
            next: function (data) {
                _this.currentStatus = data['data'].status;
                _this.timerString = data['data'].timer;
            }
        });
        this.subscription = this.timeService.data.subscribe(function (data) {
            _this.currentStatus = data.status;
            _this.timerString = data.timer;
        });
    };
    MainPageComponent.prototype.ngOnDestroy = function () {
        if (this.isEventsFoundSubscription) {
            this.isEventsFoundSubscription.unsubscribe();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.sass */ "./src/app/components/main-page/main-page.component.sass")],
        }),
        __metadata("design:paramtypes", [_services_time_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/services/gapi/gapi.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/gapi/gapi.service.ts ***!
  \***********************************************/
/*! exports provided: GapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiService", function() { return GapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
/* harmony import */ var src_app_shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/config */ "./src/app/shared/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GapiService = /** @class */ (function () {
    function GapiService(gapiService) {
        this.gapiService = gapiService;
    }
    GapiService.prototype.handleClientLoad = function () {
        return this.gapiService.onLoad();
    };
    GapiService.prototype.clientLoad = function () {
        return new Promise(function (resolve, reject) {
            gapi.load('client', function () {
                gapi.client.init(src_app_shared_config__WEBPACK_IMPORTED_MODULE_3__["clientConfig"]).then(function (res) {
                    resolve();
                }, function (rej) {
                    reject();
                });
            });
        });
    };
    GapiService.prototype.getSigninStatus = function () {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    };
    GapiService.prototype.signIn = function () {
        return gapi.auth2.getAuthInstance().signIn();
    };
    GapiService.prototype.listUpcomingEvents = function (requiredDate, endTime) {
        return gapi.client['calendar'].events.list({
            calendarId: 'primary',
            timeMin: requiredDate.toISOString(),
            timeMax: endTime.toISOString(),
            showDeleted: false,
            singleEvents: true,
            orderBy: 'startTime'
        });
    };
    GapiService.prototype.createEvent = function (startTime, endTime) {
        var start = startTime.toISOString();
        var end = endTime.toISOString();
        var event = {
            calendarId: 'primary',
            summary: 'Event',
            start: {
                dateTime: start
            },
            end: {
                dateTime: end
            }
        };
        return gapi.client['calendar'].events.insert({
            calendarId: 'primary',
            resource: event
        });
    };
    GapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleApiService"]])
    ], GapiService);
    return GapiService;
}());



/***/ }),

/***/ "./src/app/services/popup/popup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/popup/popup.service.ts ***!
  \*************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popupState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.popupContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PopupService.prototype.hidePopup = function () {
        this.popupState.next(false);
        this.popupContent.next({});
    };
    PopupService.prototype.showPopup = function (popupContent) {
        this.popupState.next(true);
        if (popupContent) {
            this.popupContent.next(popupContent);
        }
    };
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/services/time/time.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/time/time.service.ts ***!
  \***********************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _shared_Event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Event */ "./src/app/shared/Event.ts");
/* harmony import */ var _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/bookingTime */ "./src/app/shared/bookingTime.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimeService = /** @class */ (function () {
    function TimeService(gapiService) {
        var _this = this;
        this.gapiService = gapiService;
        this.intervalForDataUpdate = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.intervalForEventsUpload = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(60000);
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.data = this.dataSubject.asObservable();
        this.eventsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.events$ = this.eventsSource.asObservable();
        this.intervalForDataUpdate.subscribe({
            next: function () {
                _this.updateData();
            }
        });
        this.intervalForEventsUpload.subscribe({
            next: function () {
                _this.loadEvents().subscribe();
            }
        });
    }
    // METHODS FOR WORKING WITH API
    TimeService.prototype.loadEvents = function () {
        var _this = this;
        var requiredDate = new Date();
        var startTime = new Date(requiredDate.getFullYear(), requiredDate.getMonth(), requiredDate.getDate(), 9, 0, 0);
        var endTime = new Date(requiredDate.getFullYear(), requiredDate.getMonth(), requiredDate.getDate(), 22, 0, 0);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.gapiService.listUpcomingEvents(startTime, endTime)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var date = new Date();
            var events = [];
            var gapiEvents = res['result']['items'];
            gapiEvents.map(function (event) {
                events.push(new _shared_Event__WEBPACK_IMPORTED_MODULE_5__["Event"](event, date));
            });
            return events;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.events = res;
            _this.updateData();
            _this.eventsSource.next(res);
        }));
    };
    TimeService.prototype.createEvent = function (startTime, duration) {
        var endTime = new Date(startTime.getTime() + duration);
        return this.gapiService.createEvent(startTime, endTime);
    };
    // METHODS FOR CALCULATING DATA
    TimeService.prototype.changeStatusByTime = function (events, currentTime) {
        var startTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 8, 0, 0);
        if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
                var event_1 = events[i];
                var eventStartTime = new Date(event_1.start), eventEndTime = new Date(event_1.end), timeToStart = eventStartTime.getTime() - currentTime.getTime(), timeToEnd = eventEndTime.getTime() - currentTime.getTime();
                if (timeToEnd > 0) {
                    if (timeToStart >= 900000) {
                        return _shared_constants__WEBPACK_IMPORTED_MODULE_4__["meetingStatuses"].available;
                    }
                    else if (timeToStart < 900000 && timeToStart > 0) {
                        return _shared_constants__WEBPACK_IMPORTED_MODULE_4__["meetingStatuses"].soon;
                    }
                    else if (timeToStart < 0) {
                        return _shared_constants__WEBPACK_IMPORTED_MODULE_4__["meetingStatuses"].inProcess;
                    }
                }
            }
            return _shared_constants__WEBPACK_IMPORTED_MODULE_4__["meetingStatuses"].available;
        }
        else {
            return _shared_constants__WEBPACK_IMPORTED_MODULE_4__["meetingStatuses"].available;
        }
    };
    TimeService.prototype.calculateIntervalForBooking = function (events, currentTime) {
        var todaysMidnight = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 22, 0, 0);
        if (currentTime.getHours() < 9) {
            currentTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 9, 0, 0);
        }
        if (events.length > 0) {
            var timeToFirstEvent = new Date(events[0].start).getTime() - currentTime.getTime();
            if (timeToFirstEvent > 900000) {
                return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](currentTime, new Date(events[0].start));
            }
            for (var i = 0; i < events.length - 1; i++) {
                var timeBetweenEvents = new Date(events[i + 1].start).getTime() -
                    new Date(events[i].end).getTime();
                var timeFromStart = new Date(events[i].end).getTime() - currentTime.getTime();
                var timeFromEnd = new Date(events[i + 1].start).getTime() - currentTime.getTime();
                if (timeBetweenEvents > 900000 && timeFromStart >= 0) {
                    return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](new Date(events[i].end), new Date(events[i + 1].start));
                }
                else if (timeBetweenEvents > 900000 &&
                    timeFromStart < 0 &&
                    timeFromEnd >= 900000) {
                    return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](currentTime, new Date(events[i + 1].start));
                }
            }
            var timeAfterLast = todaysMidnight.getTime() -
                new Date(events[events.length - 1].end).getTime();
            var lastEventStartTime = new Date(events[events.length - 1].end);
            if (timeAfterLast > 900000 &&
                lastEventStartTime.getTime() - currentTime.getTime() >= 0) {
                return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](lastEventStartTime, todaysMidnight);
            }
            else if (timeAfterLast > 900000 &&
                lastEventStartTime.getTime() - currentTime.getTime() < 0) {
                return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](currentTime, todaysMidnight);
            }
            else {
                return false;
            }
        }
        else {
            var timeToDayEnd = todaysMidnight.getTime() - currentTime.getTime();
            if (timeToDayEnd > 900000) {
                return new _shared_bookingTime__WEBPACK_IMPORTED_MODULE_6__["BookingTime"](currentTime, todaysMidnight);
            }
        }
    };
    TimeService.prototype.calculateTimerString = function (events, currentTime) {
        if (events) {
            if (events.length > 0) {
                for (var i = 0; i < events.length; i++) {
                    var event_2 = events[i];
                    var startTime = new Date(event_2.start), endTime = new Date(event_2.end), timeToStart = startTime.getTime() - currentTime.getTime(), timeToEnd = endTime.getTime() - currentTime.getTime();
                    if (timeToStart > 0) {
                        return this.timeConverter(timeToStart);
                    }
                    else {
                        if (timeToEnd > 0) {
                            return this.timeConverter(timeToEnd);
                        }
                    }
                }
            }
            else {
                return undefined;
            }
        }
    };
    TimeService.prototype.timeConverter = function (miliseconds) {
        var hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60)), seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);
        var hoursString = hours.toString(), minutesString = minutes.toString(), secondsString = seconds.toString();
        if (hours < 10) {
            hoursString = '0' + hoursString;
        }
        if (minutes < 10) {
            minutesString = '0' + minutesString;
        }
        if (seconds < 10) {
            secondsString = '0' + secondsString;
        }
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    TimeService.prototype.updateData = function () {
        if (this.events) {
            var currentTime = new Date();
            this.dataSubject.next({
                status: this.changeStatusByTime(this.events, currentTime),
                timer: this.calculateTimerString(this.events, currentTime),
                intervalForBooking: this.calculateIntervalForBooking(this.events, currentTime)
            });
        }
    };
    TimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__["GapiService"]])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "./src/app/shared/Event.ts":
/*!*********************************!*\
  !*** ./src/app/shared/Event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(event, currentTime) {
        this.startTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 9, 0, 0);
        this.creator = event.creator.email;
        this.attendees = event.attendees;
        if (event.description) {
            this.description = event.description;
        }
        else {
            this.description = 'Just event';
        }
        this.status = '';
        if (event.summary) {
            this.title = event.summary;
        }
        else {
            this.title = 'Untitled event';
        }
        this.start = new Date(event.start.dateTime);
        this.end = new Date(event.end.dateTime);
        this.duration =
            new Date(event.end.dateTime).getTime() -
                new Date(event.start.dateTime).getTime();
        this.fromStart =
            new Date(event.start.dateTime).getTime() - this.startTime.getTime();
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/shared/bookingTime.ts":
/*!***************************************!*\
  !*** ./src/app/shared/bookingTime.ts ***!
  \***************************************/
/*! exports provided: BookingTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingTime", function() { return BookingTime; });
var BookingTime = /** @class */ (function () {
    function BookingTime(start, end) {
        this.start = start;
        this.end = end;
        this.interval = this.end.getTime() - this.start.getTime();
    }
    return BookingTime;
}());



/***/ }),

/***/ "./src/app/shared/components/event-block/event-block.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/event-block/event-block.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'block '+ classList\" [ngStyle]=\"{backgroundColor: backgroundColor, height: eventHeight}\">\n  <span [ngStyle]=\"{color: fontColor}\">{{text}}</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/components/event-block/event-block.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/event-block/event-block.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  width: 543px;\n  border-radius: 2px;\n  border: solid 2px #ffffff;\n  margin-top: 5px;\n  padding: 14px 18px; }\n\nspan {\n  font-size: 21px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal; }\n"

/***/ }),

/***/ "./src/app/shared/components/event-block/event-block.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/event-block/event-block.component.ts ***!
  \************************************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventComponent.prototype, "fontColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventComponent.prototype, "classList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "eventHeight", void 0);
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-block',
            template: __webpack_require__(/*! ./event-block.component.html */ "./src/app/shared/components/event-block/event-block.component.html"),
            styles: [__webpack_require__(/*! ./event-block.component.sass */ "./src/app/shared/components/event-block/event-block.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/event-info/event-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/event-info/event-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"event\">\n  <h1 class=\"title\">{{event.title}}</h1>\n  <ul>\n    <li>\n      <span class=\"headline\">Creator:</span>\n      {{event.creator}}\n    </li>\n    <li>\n      <span class=\"headline\">Time: </span>\n      <span>{{event.start | date: 'HH:mm'}} -\n      {{event.end | date: 'HH:mm'}}\n      </span>\n    </li>\n    <li>\n      <span class=\"headline\">Description: </span>\n      <span>{{event.description}}</span>\n    </li>\n    <li>\n      <span class=\"headline\">Attendees:</span>\n      <ul>\n        <li *ngFor=\"let attendee of event.attendees\">\n          {{attendee.email}}\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/event-info/event-info.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/event-info/event-info.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n  font-size: 24px; }\n\n.headline {\n  font-weight: bold; }\n\n.title {\n  text-align: center; }\n\nli, h1 {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/shared/components/event-info/event-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/event-info/event-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInfoComponent", function() { return EventInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Event */ "./src/app/shared/Event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventInfoComponent = /** @class */ (function () {
    function EventInfoComponent() {
    }
    EventInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Event__WEBPACK_IMPORTED_MODULE_1__["Event"])
    ], EventInfoComponent.prototype, "event", void 0);
    EventInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-info',
            template: __webpack_require__(/*! ./event-info.component.html */ "./src/app/shared/components/event-info/event-info.component.html"),
            styles: [__webpack_require__(/*! ./event-info.component.sass */ "./src/app/shared/components/event-info/event-info.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], EventInfoComponent);
    return EventInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/popup/popup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/popup/popup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" *ngIf=\"popUpState\">\n  <div class=\"modal-window\">\n    <div class=\"event-info\"\n         [ngStyle]=\"{'cursor': events.length > 1 ? 'pointer' : default}\"\n         *ngIf=\"eventId!=undefined\"\n         (swiperight)=\"onSwipeRight()\"\n         (swipeleft)=\"onSwipeLeft()\">\n      <span class=\"close\" (click)=\"onCloseClick()\">&times;</span>\n      <div class=\"modal-content\">\n        <app-event-info [event]=\"events[eventId]\"></app-event-info>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/popup/popup.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/popup/popup.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-window {\n  overflow: auto;\n  background-color: #ffffff;\n  margin: auto;\n  padding: 20px;\n  width: 50%;\n  height: 37%;\n  z-index: 801; }\n\n.popup {\n  position: fixed;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.modal-content {\n  z-index: 801;\n  word-wrap: break-word;\n  border: none; }\n\n.close {\n  z-index: 802;\n  color: #aaaaaa;\n  font-size: 28px;\n  font-weight: bold;\n  position: fixed; }\n\n.close:hover, .close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\nli, h1 {\n  color: black; }\n\n.event-info {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/components/popup/popup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/popup/popup.component.ts ***!
  \************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/popup/popup.service */ "./src/app/services/popup/popup.service.ts");
/* harmony import */ var src_app_services_time_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/time/time.service */ "./src/app/services/time/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService, timeService) {
        this.popupService = popupService;
        this.timeService = timeService;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeService.events$.subscribe({
            next: function (events) {
                _this.events = events;
            }
        });
        this.popupService.popupState.subscribe({
            next: function (state) {
                _this.popUpState = state;
            }
        });
        this.popupService.popupContent.subscribe({
            next: function (content) {
                _this.eventId = content.index;
            }
        });
    };
    PopupComponent.prototype.onCloseClick = function () {
        this.popupService.hidePopup();
    };
    PopupComponent.prototype.onSwipeRight = function () {
        if (this.eventId > 0) {
            this.eventId--;
        }
        else {
            this.eventId = this.events.length - 1;
        }
    };
    PopupComponent.prototype.onSwipeLeft = function () {
        if (this.eventId < this.events.length - 1) {
            this.eventId++;
        }
        else {
            this.eventId = 0;
        }
    };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/shared/components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.sass */ "./src/app/shared/components/popup/popup.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"],
            src_app_services_time_time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/time-measure/time-measure.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/time-measure/time-measure.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"measure vertical\">\n  <div\n    *ngFor=\"let time of measure\"\n    [ngStyle]=\"{'height': time.height}\"\n    [class]=\"time.type\"\n  ><span class=\"event-status\">{{time.time | date: 'HH:mm'}}</span>\n    <span class=\"line\"\n          *ngIf=\"time.type == 'big'\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/time-measure/time-measure.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/time-measure/time-measure.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".measure {\n  height: 100%;\n  width: 100%;\n  min-width: 135px;\n  display: flex;\n  overflow: hidden; }\n\n.horizontal {\n  flex-direction: row; }\n\n.vertical {\n  flex-direction: column; }\n\n.big {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  color: #52647a;\n  font-size: 21px;\n  font-family: OpenSans, sans-serif;\n  font-weight: 600;\n  position: relative; }\n\n.big:after {\n    content: '';\n    width: 40%;\n    border-bottom: solid 1px #eaebec;\n    position: absolute;\n    top: 50%;\n    right: 0%;\n    z-index: 1; }\n\n.small {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  text-align: right;\n  font-size: 18px;\n  font-family: OpenSans, sans-serif;\n  color: #7b7b7b; }\n"

/***/ }),

/***/ "./src/app/shared/components/time-measure/time-measure.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/time-measure/time-measure.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimeMeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMeasureComponent", function() { return TimeMeasureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeMeasureComponent = /** @class */ (function () {
    function TimeMeasureComponent() {
    }
    TimeMeasureComponent.prototype.ngOnInit = function () {
        if (this.typeInput) {
            this.type = this.typeInput;
        }
        this.interval = this.calculateInterval();
        this.measure = this.calculateMeasure(this.interval.start, this.interval.end);
    };
    TimeMeasureComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    TimeMeasureComponent.prototype.calculateMeasure = function (startTime, endTime) {
        var objects = [];
        while (startTime <= endTime) {
            if (startTime.getMinutes() !== 0) {
                objects.push({
                    time: startTime,
                    type: 'small'
                });
            }
            else {
                objects.push({
                    time: startTime,
                    type: 'big'
                });
            }
            startTime = new Date(startTime.getTime() + 900000);
        }
        var height = 100 / objects.length;
        objects.forEach(function (elem) {
            elem.height = height.toString() + '%';
        });
        return objects;
    };
    TimeMeasureComponent.prototype.calculateHeight = function (milliseconds, type) {
        var x = (milliseconds * 100) / this.interval.interval;
        if (type === 'height') {
            x -= 0.1;
        }
        if (type === 'offset') {
            x += 0.1;
        }
        return x.toString() + '%';
    };
    TimeMeasureComponent.prototype.calculateInterval = function () {
        var today = new Date();
        var start, end;
        if (this.start) {
            start = this.start;
        }
        else {
            start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0);
        }
        if (this.end) {
            end = this.start;
        }
        else {
            end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 0, 0);
        }
        return {
            start: start,
            end: end,
            interval: end.getTime() - start.getTime()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], TimeMeasureComponent.prototype, "start", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], TimeMeasureComponent.prototype, "end", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TimeMeasureComponent.prototype, "typeInput", void 0);
    TimeMeasureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-measure',
            template: __webpack_require__(/*! ./time-measure.component.html */ "./src/app/shared/components/time-measure/time-measure.component.html"),
            styles: [__webpack_require__(/*! ./time-measure.component.sass */ "./src/app/shared/components/time-measure/time-measure.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeMeasureComponent);
    return TimeMeasureComponent;
}());



/***/ }),

/***/ "./src/app/shared/config.ts":
/*!**********************************!*\
  !*** ./src/app/shared/config.ts ***!
  \**********************************/
/*! exports provided: clientConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientConfig", function() { return clientConfig; });
var clientConfig = {
    clientId: '1021277222775-3k2hkvmlbbh2sd8cok5ps4uin4nbsoj3.apps.googleusercontent.com',
    apiKey: 'AIzaSyCX9rlRKtTdVnl7hmOxfeIZkNreGa1xJ3g',
    discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ],
    scope: "https://www.googleapis.com/auth/calendar"
};


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: meetingStatuses, availableMeetingDurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingStatuses", function() { return meetingStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableMeetingDurations", function() { return availableMeetingDurations; });
var meetingStatuses = {
    available: {
        fontColor: '#31856e',
        backgroundColor: '#43b799',
        statusLabel: 'Available',
        bookButton: 'Book now',
        bookButtonSecond: 'Book now'
    },
    soon: {
        fontColor: '#b38d36',
        backgroundColor: '#f3bf49',
        statusLabel: 'Meeting starts soon',
        bookButton: 'Book later',
        bookButtonSecond: 'Book'
    },
    inProcess: {
        fontColor: '#8c2a1f',
        backgroundColor: '#c0392b',
        statusLabel: 'Meeting in process',
        bookButton: 'Book later',
        bookButtonSecond: 'Book'
    }
};
var availableMeetingDurations = [
    {
        label: '15m',
        value: 900000,
        blockHeight: 50
    },
    {
        label: '30m',
        value: 1800000,
        blockHeight: 100
    },
    {
        label: '45m',
        value: 2700000,
        blockHeight: 150
    },
    {
        label: '1h',
        value: 3600000,
        blockHeight: 200
    },
    {
        label: '1h 30m',
        value: 5400000,
        blockHeight: 300
    }
];


/***/ }),

/***/ "./src/app/shared/resolvers/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/resolvers/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(gapiService, router) {
        this.gapiService = gapiService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        var _this = this;
        var status = this.gapiService.getSigninStatus();
        if (status) {
            return true;
        }
        else {
            return this.gapiService.signIn().then(function (res) {
                return true;
            }, function (rej) {
                console.log(rej);
                _this.router.navigate(['/login']);
                return false;
            });
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__["GapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/resolvers/data.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/resolvers/data.resolver.ts ***!
  \***************************************************/
/*! exports provided: DataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataResolver", function() { return DataResolver; });
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/time/time.service */ "./src/app/services/time/time.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataResolver = /** @class */ (function () {
    function DataResolver(timeService) {
        this.timeService = timeService;
    }
    DataResolver.prototype.resolve = function () {
        var _this = this;
        return this.timeService.loadEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var date = new Date();
            return {
                status: _this.timeService.changeStatusByTime(res, date),
                timer: _this.timeService.calculateTimerString(res, date),
                intervalForBooking: _this.timeService.calculateIntervalForBooking(res, date)
            };
        }));
    };
    DataResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_time_time_service__WEBPACK_IMPORTED_MODULE_0__["TimeService"]])
    ], DataResolver);
    return DataResolver;
}());



/***/ }),

/***/ "./src/app/shared/resolvers/gapi.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/resolvers/gapi.guard.ts ***!
  \************************************************/
/*! exports provided: GapiGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiGuard", function() { return GapiGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gapi/gapi.service */ "./src/app/services/gapi/gapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GapiGuard = /** @class */ (function () {
    function GapiGuard(gapiService, router) {
        this.gapiService = gapiService;
        this.router = router;
    }
    GapiGuard.prototype.canActivate = function (route) {
        var _this = this;
        var obs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.gapiService.handleClientLoad().subscribe(function () {
            _this.gapiService.clientLoad().then(function (res) {
                obs.next(true);
            }, function (rej) {
                obs.next(false);
            });
        });
        return obs.asObservable();
    };
    GapiGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_gapi_gapi_service__WEBPACK_IMPORTED_MODULE_1__["GapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GapiGuard);
    return GapiGuard;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_event_block_event_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/event-block/event-block.component */ "./src/app/shared/components/event-block/event-block.component.ts");
/* harmony import */ var _components_time_measure_time_measure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/time-measure/time-measure.component */ "./src/app/shared/components/time-measure/time-measure.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/shared/components/popup/popup.component.ts");
/* harmony import */ var _components_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/event-info/event-info.component */ "./src/app/shared/components/event-info/event-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _components_event_block_event_block_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
                _components_time_measure_time_measure_component__WEBPACK_IMPORTED_MODULE_3__["TimeMeasureComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
                _components_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_5__["EventInfoComponent"]
            ],
            exports: [
                _components_event_block_event_block_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
                _components_time_measure_time_measure_component__WEBPACK_IMPORTED_MODULE_3__["TimeMeasureComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
                _components_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_5__["EventInfoComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/danil/Documents/booking-room/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map