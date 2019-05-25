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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





var routes = [
    { path: 'issues', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n\n<html lang=\"en\">\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n  <title>The HTML5 Herald</title>\n</head>\n\n<body>\n\n<nav class=\"navbar navbar-light bg-light container\">\n    <h1 class=\"navbar-brand\">{{title}}</h1>\n</nav>\n\n<div class=\"filter-header container my-4\">\n  <h6 style=\"display: inline;\">Filter by:</h6>\n  <button type=\"button\" class=\"btn btn-dark\"  (click)=\"getIssues()\">All</button>\n  <button type=\"button\" class=\"btn btn-dark\"  (click)=\"filterOpen()\">Open</button>\n  <button type=\"button\" class=\"btn btn-dark\">My issues</button>\n  <button type=\"button\" class=\"btn btn-dark\">Watching</button>\n</div>\n\n<table class=\"container table table-striped\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"sortTitle()\">Title</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortKind()\">Kind</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortPriority()\">Priority</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortStatus()\">Status</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortUserID()\">User ID</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortCreated()\">Created</button></th>\n      <th><button type=\"button\" class=\"btn\" style=\"background-color:transparent\"  (click)=\"sortUpdated()\">Updated</button></th>\n      <th colspan=\"3\"></th>\n    </tr>\n  </thead>\n\n  <tbody class=\"issue-table-body\">\n    <tr *ngFor=\"let issue of issues\">\n      <td>#{{issue.id}} {{issue.title}}</td>\n        <td>\n          <div *ngIf=\"issue.issue_kind_id == 1\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showKind(issue.issue_kind_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/bug-0cef5be35522ed02d898f1f65e95c3be9c0d09d214b7013cee6eb30a7118b2a5.svg\" />\n            </button>\n          </div>\n          <div *ngIf=\"issue.issue_kind_id == 2\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showKind(issue.issue_kind_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/enhancement-8b1bac2d78457489b5b3d91ad2bcd66edd9d5e2d5860c63225b1747a76294f74.svg\" />\n            </button>\n          </div>\n          <div *ngIf=\"issue.issue_kind_id == 3\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showKind(issue.issue_kind_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/proposal-6d98b00edfa7d872da75aa3ce27bc14967e350f6ef8f94d2a4700ad9f21f3f18.svg\" />\n            </button>\n          </div>\n          <div *ngIf=\"issue.issue_kind_id == 4\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showKind(issue.issue_kind_id)\">\n              <img src=\"\" />\n            </button>\n          </div>\n        </td>\n          \n        <td>\n          <div *ngIf=\"issue.issue_priority_id == 1\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showPriority(issue.issue_priority_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/trivial-5518244345e00cd4a5fa6f15d2e06d8bdd5a59ec56af8bc9de73694242e91ba3.svg\" />\n            </button> \n          </div>\n          <div *ngIf=\"issue.issue_priority_id == 2\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showPriority(issue.issue_priority_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/minor-3b9ec8225b7e2d8e072b7a21707a1aeece95500fe92a183fd780f9fd91ba4527.svg\" />\n            </button> \n          </div>\n          <div *ngIf=\"issue.issue_priority_id == 3\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showPriority(issue.issue_priority_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/major-3989ecbc723ed029e25331900c2a95cac2676920dbbb41b2f6a3d475f4c39c9c.svg\" />\n            </button> \n          </div>\n          <div *ngIf=\"issue.issue_priority_id == 4\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showPriority(issue.issue_priority_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/critical-bff267ee5aa80285d388bc70e126dee7bf5d86e4024a6c5915aa2d1d48d1dcbf.svg\" />\n            </button> \n          </div>\n          <div *ngIf=\"issue.issue_priority_id == 5\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showPriority(issue.issue_priority_id)\">\n              <img src=\"https://safe-ridge-41224.herokuapp.com/assets/blocker-deaf6c1ddc85299cf40032f76fbcfa105d2fc7df43e2b72cba51b09019879ef0.svg\" />\n            </button> \n          </div>\n        </td>\n        <td>\n          <div *ngIf=\"issue.issue_status_id == 1\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">NEW</button>\n          </div>\n          <div *ngIf=\"issue.issue_status_id == 2\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">OPEN</button> \n          </div>\n          <div *ngIf=\"issue.issue_status_id == 3\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">ON HOLD</button>\n          </div>\n          <div *ngIf=\"issue.issue_status_id == 4\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">RESOLVED</button> \n          </div>\n          <div *ngIf=\"issue.issue_status_id == 5\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">DUPLICATED</button> \n          </div>\n          <div *ngIf=\"issue.issue_status_id == 6\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">INVALID</button> \n          </div>\n          <div *ngIf=\"issue.issue_status_id == 7\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">WON'T FIX</button> \n          </div>\n          <div *ngIf=\"issue.issue_status_id == 8\">\n            <button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showStatus(issue.issue_status_id)\">CLOSED</button> \n          </div>\n        </td>\n        <td><button type=\"button\" class=\"btn\" style=\"background-color:transparent\" (click)=\"showUser(issue.user_id.id)\">{{issue.user_id.name}}</button></td>\n        <td><button type=\"button\" class=\"btn\" style=\"background-color:transparent\" >{{issue.created_at}}</button></td>\n        <td><button type=\"button\" class=\"btn\" style=\"background-color:transparent\" >{{issue.updated_at}}</button></td>\n    </tr>\n  </tbody>\n</table>\n\n  <script src=\"js/scripts.js\"></script>\n  <!-- Optional JavaScript -->\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n</body>\n</html>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(issueService) {
        this.issueService = issueService;
        this.title = 'Issue Tracker';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getIssues();
    };
    AppComponent.prototype.getIssues = function () {
        var _this = this;
        this.issueService.getIssues()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.filterOpen = function () {
        var _this = this;
        this.issueService.getOpen()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.sortTitle = function () {
        var _this = this;
        this.issueService.sortTitle()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.sortKind = function () {
        var _this = this;
        this.issueService.sortKind()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.sortPriority = function () {
        var _this = this;
        this.issueService.sortPriority()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.sortStatus = function () {
        var _this = this;
        this.issueService.sortStatus()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.sortUserID = function () {
        var _this = this;
        this.issueService.sortUserID()
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.showKind = function (idKind) {
        var _this = this;
        this.issueService.showKind(idKind)
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.showPriority = function (idPriority) {
        var _this = this;
        this.issueService.showPriority(idPriority)
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.showStatus = function (idStatus) {
        var _this = this;
        this.issueService.showStatus(idStatus)
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent.prototype.showUser = function (idUser) {
        var _this = this;
        this.issueService.showUser(idUser)
            .subscribe(function (issues) { return _this.issues = issues; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");









var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]("177262102705-a3rl45n31isg6g5k59f7rpkfv0cnc6bu.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IssueService = /** @class */ (function () {
    /* sortCreated(): Observable<Issue[]> {
      this.sortKindBool = !this.sortKindBool;
      if (this.sortKindBool){
        return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
          headers: new HttpHeaders()
              .set('Accept', 'application/json')
        });
      }
      else{
        return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
          headers: new HttpHeaders()
              .set('Accept', 'application/json')
        });
      }
    }
  
    sortUpdated(): Observable<Issue[]> {
      this.sortKindBool = !this.sortKindBool;
      if (this.sortKindBool){
        return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
          headers: new HttpHeaders()
              .set('Accept', 'application/json')
        });
      }
      else{
        return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
          headers: new HttpHeaders()
              .set('Accept', 'application/json')
        });
      }
    } */
    function IssueService(http) {
        this.http = http;
        this.sortTitleBool = true;
        this.sortKindBool = true;
        this.sortKindPriority = true;
        this.sortKindStatus = true;
        this.sortKindUser = true;
    }
    IssueService.prototype.getIssues = function () {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService.prototype.getOpen = function () {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?issue_status_id=2', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService.prototype.sortTitle = function () {
        this.sortTitleBool = !this.sortTitleBool;
        if (this.sortTitleBool) {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
        else {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
    };
    IssueService.prototype.sortKind = function () {
        this.sortKindBool = !this.sortKindBool;
        if (this.sortKindBool) {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
        else {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
    };
    IssueService.prototype.sortPriority = function () {
        this.sortKindPriority = !this.sortKindPriority;
        if (this.sortKindPriority) {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_priority_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
        else {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_priority_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
    };
    IssueService.prototype.sortStatus = function () {
        this.sortKindStatus = !this.sortKindStatus;
        if (this.sortKindStatus) {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_status_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
        else {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_status_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
    };
    IssueService.prototype.sortUserID = function () {
        this.sortKindUser = !this.sortKindUser;
        if (this.sortKindUser) {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=user_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
        else {
            return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=user_id', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Accept', 'application/json')
            });
        }
    };
    IssueService.prototype.showKind = function (idKind) {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?issue_kind_id=' + idKind, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService.prototype.showStatus = function (idStatus) {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?issue_status_id=' + idStatus, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService.prototype.showPriority = function (idPriority) {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?issue_priority_id=' + idPriority, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService.prototype.showUser = function (idUser) {
        return this.http.get('https://safe-ridge-41224.herokuapp.com/issues?user_id=' + idUser, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Accept', 'application/json')
        });
    };
    IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n<button (click)=\"signinWithGoogle()\">Sign in with Google</button>\n"

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
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(socialAuthService, http) {
        this.socialAuthService = socialAuthService;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signinWithGoogle = function () {
        var _this = this;
        var socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider)
            .then(function (userData) {
            //on success
            //this will return user data from google. What you need is a user token which you will send it to the server
            _this.sendToRestApiMethod(userData.id, userData.authToken);
        });
    };
    LoginComponent.prototype.sendToRestApiMethod = function (user_id, token) {
        console.log("Angular token: " + token);
        this.http.post("https://safe-ridge-41224.herokuapp.com/updateAndVerifyToken", {
            user_id: user_id,
            token: token
        }).subscribe(function (onSuccess) {
            console.log("Success - " + token);
            //login was successful
            //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
        }, function (onFail) {
            console.log("Fail");
            //login was unsuccessful
            //show an error message
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = __webpack_require__(/*! /home/carla/UNI/4t/ASW/ASW/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map