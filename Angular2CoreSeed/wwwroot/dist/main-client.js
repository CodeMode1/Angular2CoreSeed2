/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	__webpack_require__(3);
	var core_1 = __webpack_require__(4);
	var angular2_universal_1 = __webpack_require__(5);
	var app_module_1 = __webpack_require__(6);
	__webpack_require__(77);
	// Enable either Hot Module Reloading or production mode
	if (module['hot']) {
	    module['hot'].accept();
	    module['hot'].dispose(function () { platform.destroy(); });
	}
	else {
	    core_1.enableProdMode();
	}
	// Boot the application, either now or when the DOM content is loaded
	var platform = angular2_universal_1.platformUniversalDynamic();
	var bootApplication = function () { platform.bootstrapModule(app_module_1.AppModule); };
	if (document.readyState === 'complete') {
	    bootApplication();
	}
	else {
	    document.addEventListener('DOMContentLoaded', bootApplication);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(268);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_177c80f56096e54053b0;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(294);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(6);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(297);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(8);
	// login
	var login_component_1 = __webpack_require__(9);
	var auth_guard_1 = __webpack_require__(18);
	// main components
	var app_component_1 = __webpack_require__(19);
	var navmenu_component_1 = __webpack_require__(24);
	var home_component_1 = __webpack_require__(28);
	var delete_component_1 = __webpack_require__(30);
	var weather_component_1 = __webpack_require__(35);
	var weatherform_component_1 = __webpack_require__(41);
	var weatherdetail_component_1 = __webpack_require__(45);
	var weatherconstraints_component_1 = __webpack_require__(47);
	var weatherconstraint_component_1 = __webpack_require__(49);
	var trip_component_1 = __webpack_require__(52);
	var tripdetail_component_1 = __webpack_require__(57);
	var tripuser_component_1 = __webpack_require__(62);
	var stop_component_1 = __webpack_require__(66);
	var stopedit_component_1 = __webpack_require__(69);
	// services
	var login_service_1 = __webpack_require__(11);
	var trip_service_1 = __webpack_require__(53);
	var tripdetail_service_1 = __webpack_require__(33);
	var stop_service_1 = __webpack_require__(32);
	var weather_service_1 = __webpack_require__(31);
	var weatherconstraint_service_1 = __webpack_require__(50);
	// pipes, external modules
	var kendo_angular_dateinputs_1 = __webpack_require__(73);
	var weatherform_pipe_1 = __webpack_require__(74);
	var trip_pipe_1 = __webpack_require__(75);
	var kendo_angular_dialog_1 = __webpack_require__(76);
	//import { PopupModule } from '@progress/kendo-angular-popup';
	//import { LocalStorageModule } from 'angular-2-local-storage';
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            home_component_1.HomeComponent,
	            delete_component_1.DeleteComponent,
	            weather_component_1.WeatherComponent,
	            weatherdetail_component_1.WeatherDetailComponent,
	            weatherform_component_1.WeatherFormComponent,
	            weatherconstraints_component_1.WeatherConstraintsComponent,
	            weatherconstraint_component_1.WeatherConstraintComponent,
	            trip_component_1.TripComponent,
	            tripdetail_component_1.TripDetailComponent,
	            tripuser_component_1.TripUserComponent,
	            stopedit_component_1.EditStopComponent,
	            stop_component_1.StopComponent,
	            login_component_1.LoginComponent,
	            // pipes
	            weatherform_pipe_1.FormatHour,
	            trip_pipe_1.TripDate
	        ],
	        providers: [
	            auth_guard_1.AuthGuard,
	            login_service_1.LoginService,
	            trip_service_1.TripService,
	            tripdetail_service_1.TripDetailService,
	            stop_service_1.StopService,
	            weather_service_1.WeatherService,
	            weatherconstraint_service_1.WeatherConstraintsService
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            kendo_angular_dateinputs_1.DateInputsModule,
	            kendo_angular_dialog_1.DialogModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'login', component: login_component_1.LoginComponent },
	                { path: 'trips', component: trip_component_1.TripComponent, canActivate: [auth_guard_1.AuthGuard] },
	                { path: 'trips/perso', component: tripuser_component_1.TripUserComponent, canActivate: [auth_guard_1.AuthGuard] },
	                {
	                    path: 'trips/:id', component: tripdetail_component_1.TripDetailComponent, children: [
	                        { path: '', component: stop_component_1.StopComponent },
	                        { path: 'stop', component: stop_component_1.StopComponent },
	                        { path: 'edit', component: stopedit_component_1.EditStopComponent }
	                    ]
	                },
	                {
	                    path: 'weathers', component: weather_component_1.WeatherComponent, children: [
	                        { path: '', component: weatherdetail_component_1.WeatherDetailComponent },
	                        { path: 'detail/:id', component: weatherdetail_component_1.WeatherDetailComponent }
	                    ]
	                },
	                { path: 'weatherConstraints', component: weatherconstraints_component_1.WeatherConstraintsComponent },
	                { path: 'weatherConstraints/:id', component: weatherconstraint_component_1.WeatherConstraintComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(271);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(56);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var User_1 = __webpack_require__(10);
	var login_service_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(7);
	var LoginComponent = (function () {
	    function LoginComponent(_loginService, _router) {
	        this._loginService = _loginService;
	        this._router = _router;
	        this.user = new User_1.User("DaphDC", "daph@daph.com", "P@ssw0rd!");
	        this.loading = false;
	        this.error = "";
	    }
	    LoginComponent.prototype.ngOnInit = function () {
	        // reset login status
	        this._loginService.logout();
	    };
	    LoginComponent.prototype.onSubmit = function (form) {
	        this.user = form.value;
	        //console.log(form.value);
	        console.log(form.valid);
	        this.loginService();
	    };
	    LoginComponent.prototype.loginService = function () {
	        var _this = this;
	        this.loading = true;
	        return this._loginService.loginAPI(this.user)
	            .subscribe(function (data) {
	            var strippedToken = data.token;
	            console.log("succes login user " + JSON.stringify(_this.user));
	            _this._loginService.userName = _this.user.userName;
	            _this._loginService.token = strippedToken;
	            console.log("token du service : ");
	            console.log(_this._loginService.token);
	            _this._router.navigateByUrl("/trips");
	        }, function (error) {
	            _this.error = "Impossible de loguer le user : " + _this.user.userName;
	            _this.user.email = "";
	            _this.user.password = "";
	            _this.user.userName = "";
	            _this.loading = false;
	            console.log("error log user  : " + _this.user);
	        });
	    };
	    return LoginComponent;
	}());
	LoginComponent = __decorate([
	    core_1.Component({
	        selector: 'login',
	        template: __webpack_require__(17)
	    }),
	    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User(userName, email, password) {
	        this.userName = userName;
	        this.email = email;
	        this.password = password;
	    }
	    return User;
	}());
	exports.User = User;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	//import { LocalStorageService } from 'angular-2-local-storage';
	var LoginService = (function () {
	    function LoginService(_http) {
	        this._http = _http;
	        this._urlLogin = 'api/auth/token';
	        if (this.userName != null && typeof (this.userName) != "undefined") {
	            this.userName = this.userName;
	        }
	        else {
	            this.userName = null;
	        }
	    }
	    LoginService.prototype.loginAPI = function (user) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var body = JSON.stringify(user);
	        return this._http.post(this._urlLogin, body, { headers: headers })
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    LoginService.prototype.logout = function () {
	        this.token = null;
	        this.userName = null;
	        console.log("logout");
	    };
	    return LoginService;
	}());
	LoginService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], LoginService);
	exports.LoginService = LoginService;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(82);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(391);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(234);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(232);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(379);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h3>Login</h3>\r\n    <form #login=\"ngForm\" (ngSubmit)=\"onSubmit(login)\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"userName\">User Name</label>\r\n            <input type=\"text\" name=\"userName\" id=\"userName\" class=\"form-control\" [(ngModel)]=\"user.userName\" required />\r\n            <div *ngIf=\"login.submitted && !user.userName.valid\" class=\"help-block\">Username est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Courriel</label>\r\n            <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" required />\r\n            <div *ngIf=\"login.submitted && !user.email.valid\" class=\"help-block\">Email est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Mot Passe</label>\r\n            <input type=\"text\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required />\r\n            <div *ngIf=\"login.submitted && !user.password.valid\" class=\"help-block\">Mot Passe est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-lg btn-success\">Se Loguer</button>\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var login_service_1 = __webpack_require__(11);
	var AuthGuard = (function () {
	    function AuthGuard(_router, LoginService) {
	        this._router = _router;
	        this.LoginService = LoginService;
	    }
	    AuthGuard.prototype.canActivate = function () {
	        if (this.LoginService.token != null && typeof (this.LoginService.token != "undefined")) {
	            // logged in so return true
	            console.log("guard : " + this.LoginService.token);
	            return true;
	        }
	        console.log("guard " + this.LoginService.token);
	        // not logged in so redirect to login page
	        this._router.navigateByUrl("/login");
	        return false;
	    };
	    return AuthGuard;
	}());
	AuthGuard = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService])
	], AuthGuard);
	exports.AuthGuard = AuthGuard;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(20),
	        styles: [__webpack_require__(21)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(22);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n\n    a{\r\n        cursor: pointer;\r\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(25),
	        styles: [__webpack_require__(26)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2CoreSeed</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li routerLinkActive=\"link-active\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\r\n                    <a>\r\n                        <span class=\"glyphicon glyphicon-user\"></span> Sign Up\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Sign In\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/trips']\">\n                        <span class=\"glyphicon glyphicon-road\"></span> Trips\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/weathers']\">\r\n                        <span class=\"glyphicon glyphicon-th-list\"></span> Weathers\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/weatherConstraints']\">\n                        <span class=\"glyphicon glyphicon-star-empty\"></span> Weather Constraints\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-out\"></span> LogOut\r\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(27);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\na{\r\n    cursor: pointer;\r\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(29)
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello World</h1>\n\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var weather_service_1 = __webpack_require__(31);
	var stop_service_1 = __webpack_require__(32);
	var router_1 = __webpack_require__(7);
	__webpack_require__(16);
	var tripdetail_service_1 = __webpack_require__(33);
	var DeleteComponent = (function () {
	    function DeleteComponent(_weatherService, _route, _stopService, _tripDetailService) {
	        this._weatherService = _weatherService;
	        this._route = _route;
	        this._stopService = _stopService;
	        this._tripDetailService = _tripDetailService;
	        this.idToDelete = null;
	        this.isShowNotif = false;
	        this.deleteSuccess = new core_1.EventEmitter();
	    }
	    DeleteComponent.prototype.ngOnInit = function () {
	    };
	    DeleteComponent.prototype.ngOnChanges = function () {
	        if (this.isDelete) {
	            // pop up open
	            console.log("in delete : " + this.isDelete);
	        }
	    };
	    DeleteComponent.prototype.hideNotif = function () {
	        this.isShowNotif = false;
	    };
	    DeleteComponent.prototype.onDeleteData = function () {
	        this.idToDelete = this.weatherToDeleteId;
	        if (this.objectToDelete == "stopAdmin") {
	            this.deleteStopById(this.idToDelete);
	        }
	        else if (this.objectToDelete == "weather") {
	            this.deleterWeatherById(this.idToDelete);
	        }
	        else if (this.objectToDelete == "usertrip") {
	            this.deleteUserTrip(this.tripToDelete);
	        }
	        return;
	    };
	    DeleteComponent.prototype.cancelDelete = function () {
	        this.deleteSuccess.emit(false);
	    };
	    DeleteComponent.prototype.deleteStopById = function (id) {
	        var _this = this;
	        this._stopService.deleteStopByIdAPI(id)
	            .subscribe(function (result) {
	            _this.deleteSuccess.emit(true);
	            _this.isShowNotif = true;
	            console.log("SUCCESS DELETE stop in delete component");
	        }, function (error) {
	            console.log("ERROR DELETE stop in delete component");
	        });
	    };
	    DeleteComponent.prototype.deleterWeatherById = function (id) {
	        var _this = this;
	        this._weatherService.deleteWeatherByIdAPI(id)
	            .subscribe(function (result) {
	            _this.deleteSuccess.emit(true);
	            _this.isShowNotif = true;
	            console.log("SUCCESS DELETE in component");
	        }, function (error) {
	            console.log("ERROR DELETE in component");
	        });
	    };
	    DeleteComponent.prototype.deleteUserTrip = function (trip) {
	        var _this = this;
	        return this._tripDetailService.deleteTripAPI(trip)
	            .subscribe(function (data) {
	            _this.deleteSuccess.emit(true);
	            _this.isShowNotif = true;
	            console.log("deleted trip successful");
	        }, function (error) { return console.log("error deleting trip"); });
	    };
	    return DeleteComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], DeleteComponent.prototype, "isDelete", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], DeleteComponent.prototype, "weatherToDeleteId", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], DeleteComponent.prototype, "objectToDelete", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], DeleteComponent.prototype, "tripToDelete", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], DeleteComponent.prototype, "deleteSuccess", void 0);
	DeleteComponent = __decorate([
	    core_1.Component({
	        selector: 'delete',
	        template: __webpack_require__(34)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService,
	        router_1.ActivatedRoute, stop_service_1.StopService, tripdetail_service_1.TripDetailService])
	], DeleteComponent);
	exports.DeleteComponent = DeleteComponent;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	var login_service_1 = __webpack_require__(11);
	var WeatherService = (function () {
	    function WeatherService(_http, _loginService) {
	        this._http = _http;
	        this._loginService = _loginService;
	        this._urlWeather = "api/weather";
	    }
	    // GET:     all weather objects
	    WeatherService.prototype.getAllWeathersAPI = function () {
	        return this._http.get(this._urlWeather)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // POST:    1 weather object
	    WeatherService.prototype.postWeatherAPI = function (weather) {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(weather);
	        return this._http.post(this._urlWeather, body, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // PUT:     1 weather object
	    WeatherService.prototype.putWeatherAPI = function (weather) {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(weather);
	        return this._http.put(this._urlWeather, body, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // GET:     1 weather object by id
	    WeatherService.prototype.getWeatherByIdAPI = function (id) {
	        return this._http.get(this._urlWeather + "/" + id)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // GET:     1 weather object details by name
	    WeatherService.prototype.getWeatherByNameAPI = function (name) {
	        return this._http.get(this._urlWeather + "/ByName/" + name)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // GET:     1 weather object details by id
	    WeatherService.prototype.deleteWeatherByIdAPI = function (id) {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.delete(this._urlWeather + "/" + id, options)
	            .map(function (response) {
	            console.log("succes delete weather, resp we get in service : ");
	            console.log(response);
	        })
	            .catch(function (error) { return console.log("succes delete weather, resp we get in service : " + error); });
	    };
	    return WeatherService;
	}());
	WeatherService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], WeatherService);
	exports.WeatherService = WeatherService;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var login_service_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	var StopService = (function () {
	    function StopService(_http, _loginService) {
	        this._http = _http;
	        this._loginService = _loginService;
	        this._urlStop = 'api/stop';
	    }
	    StopService.prototype.getHeaders = function () {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return options;
	    };
	    StopService.prototype.postStopByIdAPI = function (id, stop) {
	        console.log("token du login service");
	        console.log(this._loginService.token);
	        var options = this.getHeaders();
	        var body = JSON.stringify(stop);
	        return this._http.post(this._urlStop + "/" + id, body, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    StopService.prototype.deleteStopByIdAPI = function (id) {
	        console.log("token du login service");
	        console.log(this._loginService.token);
	        var options = this.getHeaders();
	        return this._http.delete(this._urlStop + "/" + id, options)
	            .map(function (response) { return console.log("delete stop with id : " + id); })
	            .catch(function (error) { return console.log("error delete stop " + error); });
	    };
	    return StopService;
	}());
	StopService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], StopService);
	exports.StopService = StopService;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var login_service_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	var TripDetailService = (function () {
	    function TripDetailService(_http, _loginService) {
	        this._http = _http;
	        this._loginService = _loginService;
	        this._urlTrip = "api/trip";
	    }
	    // GET  : get trip by.
	    TripDetailService.prototype.getTripByIdAPI = function (id) {
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip + "/" + id, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // GET:     get trips for logged in user.
	    TripDetailService.prototype.getUserTripAPI = function () {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip + "/user", options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // POST:    1 trip object.
	    TripDetailService.prototype.postTripAPI = function (trip) {
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(trip);
	        return this._http.post(this._urlTrip, body, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    TripDetailService.prototype.deleteTripAPI = function (trip) {
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.delete(this._urlTrip + "/" + trip.id, options)
	            .map(function (response) { return console.log(response); })
	            .catch(function (error) { return error.json(); });
	    };
	    return TripDetailService;
	}());
	TripDetailService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], TripDetailService);
	exports.TripDetailService = TripDetailService;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"isShowNotif\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <p>Action effectuée.</p>        \r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"idToDelete\">\r\n        <h3>Succès supprimer #</h3>\r\n        <h4>{{idToDelete}}</h4>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"hideNotif()\">Hide</button>\r\n</div>\r\n\r\n<kendo-dialog *ngIf=\"isDelete\" (close)=\"cancelDelete()\">\r\n    <kendo-dialog-titlebar>\r\n        <div style=\"font-size: 18px; line-height: 1.3em;\">\r\n            <span class=\"k-icon k-i-warning\"></span> Supprimer donnée\r\n        </div>\r\n    </kendo-dialog-titlebar>\r\n    <p style=\"margin: 30px; text-align: center;\">Action irrévocable.</p>\r\n\r\n    <kendo-dialog-actions>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"cancelDelete()\">Cancel</button>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"onDeleteData()\">Delete</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(12);
	var router_1 = __webpack_require__(7);
	var weather_1 = __webpack_require__(36);
	var weather_service_1 = __webpack_require__(31);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	var moment = __webpack_require__(37);
	var WeatherComponent = (function () {
	    function WeatherComponent(_http, _route, _weatherService, _router) {
	        this._http = _http;
	        this._route = _route;
	        this._weatherService = _weatherService;
	        this._router = _router;
	        this.editForm = false;
	        this.inputDelete = false;
	        this.inputIdDelete = null;
	        this.titreWeather = "Weather Check";
	        this.objectName = "";
	        this.showForm = false;
	        // moment js format a date with a string format, returns a date.
	        moment.locale('en-ca');
	        this.fmDate = moment(new Date()).format('HH:mm');
	        console.log(this.fmDate);
	    }
	    WeatherComponent.prototype.ngOnInit = function () {
	        // class weather object to bind to.
	        this.weather1 = new weather_1.Weather(1, "AutomnWeather", this.fmDate, 14, "Température Automne");
	        // Method to get weather objects
	        this.getAllWeathers();
	    };
	    // GET : all weather objects from db
	    WeatherComponent.prototype.getAllWeathers = function () {
	        var _this = this;
	        this._weatherService
	            .getAllWeathersAPI()
	            .subscribe(function (data) {
	            console.log("Get all weather objets : " + JSON.stringify(data));
	            _this.weathers = data;
	        }, function (error) {
	            console.log("Erreur du service :  " + error);
	        });
	    };
	    WeatherComponent.prototype.showWeatherForm = function () {
	        this.showForm = !this.showForm;
	        this.editForm = false;
	        console.log(this.showForm);
	    };
	    WeatherComponent.prototype.goDelete = function (idToDelete) {
	        this.inputDelete = true;
	        console.log("in go delete : " + idToDelete);
	        this.inputIdDelete = idToDelete;
	        this.objectName = "weather";
	    };
	    // refresh the results after the child component has emitted the deletion was successfull.
	    WeatherComponent.prototype.refreshResults = function ($event) {
	        if ($event == true) {
	            // delete the weather client side :
	            this.weathers.splice(this.inputIdDelete, 1);
	            this.getAllWeathers();
	        }
	        this.inputDelete = false;
	        this.objectName = "";
	    };
	    Object.defineProperty(WeatherComponent.prototype, "diagnostic", {
	        // take a js object  (usually object or array) convert it to JSON string notation
	        // to get JSON object use parse method
	        get: function () {
	            return JSON.stringify(this.weather1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // Get the payload weather object from children component weatherform
	    WeatherComponent.prototype.postWeather = function ($event) {
	        this.weather1 = $event;
	        console.log("new weather to post : ");
	        console.log(this.weather1);
	        // Method to save new weather object
	        this.saveWeather(this.weather1);
	    };
	    // edit a weather
	    WeatherComponent.prototype.editWeather = function ($event) {
	        this.weather1 = $event;
	        console.log("editing a weather : ");
	        console.log(this.weather1);
	        // method to edit a weather
	        this.putWeather(this.weather1);
	    };
	    // edit a weather when clicking a link on weather objects table.
	    WeatherComponent.prototype.goEdit = function (weather) {
	        this.weather1 = weather;
	        this.showForm = true;
	        this.editForm = true;
	    };
	    // POST : call the post action on backend to create new weather object.
	    WeatherComponent.prototype.saveWeather = function (weather) {
	        var _this = this;
	        return this._weatherService
	            .postWeatherAPI(weather)
	            .subscribe(function (data) {
	            _this.weather1.id = data.id;
	            _this.weather1.name = data.name;
	            _this.weather1.hour = data.hour;
	            _this.weather1.tempC = data.tempC;
	            _this.weather1.summary = data.summary;
	            _this.weather1.temperatureF = data.temperatureF;
	            console.log("saved new weather : ");
	            console.log(data);
	            // refresh the data in the browser to get he newly sabed weather object.
	            _this.getAllWeathers();
	            console.log("type of date sent back to client : ");
	            console.log(typeof (_this.weather1.hour));
	        }, function (error) {
	            console.log("error saving weather : " + error);
	        });
	    };
	    WeatherComponent.prototype.putWeather = function (weather) {
	        var _this = this;
	        return this._weatherService
	            .putWeatherAPI(weather)
	            .subscribe(function (data) {
	            _this.weather1.hour = data.hour;
	            _this.weather1.id = data.id;
	            _this.weather1.name = data.name;
	            _this.weather1.summary = data.summary;
	            _this.weather1.tempC = data.tempC;
	            console.log("edited weather : ");
	            console.log(data);
	            _this.getAllWeathers();
	        }, function (error) {
	            console.log("error editing weather : " + error);
	        });
	    };
	    return WeatherComponent;
	}());
	WeatherComponent = __decorate([
	    core_1.Component({
	        selector: 'weather',
	        template: __webpack_require__(38),
	        styles: [__webpack_require__(39)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute,
	        weather_service_1.WeatherService, router_1.Router])
	], WeatherComponent);
	exports.WeatherComponent = WeatherComponent;


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	var Weather = (function () {
	    function Weather(id, name, hour, tempC, summary, temperatureF, constraints) {
	        this.id = id;
	        this.name = name;
	        this.hour = hour;
	        this.tempC = tempC;
	        this.summary = summary;
	        this.temperatureF = temperatureF;
	        this.constraints = constraints;
	    }
	    return Weather;
	}());
	exports.Weather = Weather;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Create new Weather</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n                <th>Delete</th>\r\n                <th>Edit</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\">Delete</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\">Edit</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(40);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var weather_1 = __webpack_require__(36);
	var WeatherFormComponent = (function () {
	    //form1: NgForm;
	    function WeatherFormComponent() {
	        this.onEdit = false;
	        this.submitted = false;
	        this.newWeather = new core_1.EventEmitter();
	        this.edWeather = new core_1.EventEmitter();
	        //this.form1 = new NgForm([], []);
	    }
	    // on veut soumettre on edit.
	    WeatherFormComponent.prototype.ngOnChanges = function () {
	    };
	    // renvoyer le weatherform object au weather component
	    WeatherFormComponent.prototype.onSubmit = function (weatherForm) {
	        console.log(weatherForm.value);
	        console.log(weatherForm.valid);
	        if (this.modeEdit) {
	            this.edWeather.emit(this.weatherToSave);
	            // reset pour retourner mode creer
	            this.modeEdit = false;
	        }
	        else {
	            this.newWeather.emit(weatherForm.value);
	            // reset pour retourner mode editer
	            this.modeEdit = true;
	            this.submitted = true;
	        }
	    };
	    return WeatherFormComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", weather_1.Weather)
	], WeatherFormComponent.prototype, "weatherToSave", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], WeatherFormComponent.prototype, "newWeather", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], WeatherFormComponent.prototype, "edWeather", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], WeatherFormComponent.prototype, "modeEdit", void 0);
	WeatherFormComponent = __decorate([
	    core_1.Component({
	        selector: 'weather-form',
	        template: __webpack_require__(42),
	        styles: [__webpack_require__(43)]
	    }),
	    __metadata("design:paramtypes", [])
	], WeatherFormComponent);
	exports.WeatherFormComponent = WeatherFormComponent;


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"tempC\" name=\"tempC\" [(ngModel)]=\"weatherToSave.tempC\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(44);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 0.5rem solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 0.5rem solid #a94442; /* red */\r\n}\r\n\r\n.k-invalid {\r\n  color: red;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n/*#date, #date > table, #data > div.k-content.k-scrollable, kendo-calendar-monthview, table.k-calendar-weekdays{\r\n    padding: 0;\r\n    width: 100%;\r\n}*/\r\n\r\n/*.k-calendar.k-calendar-infinite {\r\n    padding: 0;\r\n}\r\n\r\n.form-group table{\r\n    width: 100%;\r\n}\r\n\r\nform-group div.k-content.k-scrollable{\r\n    width: 100%;\r\n}\r\n\r\nkendo-calendar-monthview.k-calendar-monthview{\r\n    width: 100%;\r\n}*/", ""]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var weather_service_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(7);
	var WeatherDetailComponent = (function () {
	    function WeatherDetailComponent(_weatherService, _route) {
	        this._weatherService = _weatherService;
	        this._route = _route;
	        this.id = null;
	        this.messageDetails = "";
	    }
	    WeatherDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this._route.params.subscribe(function (params) {
	            if (params['id'] != null || params['id'] != undefined) {
	                _this.id = params['id'];
	                _this.getWeatherBydId(_this.id);
	            }
	            else {
	                _this.messageDetails = "Aucuns détails à afficher";
	            }
	        });
	    };
	    WeatherDetailComponent.prototype.getWeatherBydId = function (id) {
	        var _this = this;
	        // call getDetails method in the nservice
	        this._weatherService.getWeatherByIdAPI(id)
	            .subscribe(function (result) {
	            console.log("this is the weather by id : " + JSON.stringify(result));
	            _this.weather = result;
	        }, function (error) {
	            console.log("Cant get details by id : " + JSON.stringify(error));
	        });
	    };
	    WeatherDetailComponent.prototype.ngOnDestroy = function () {
	        this.sub.unsubscribe();
	    };
	    return WeatherDetailComponent;
	}());
	WeatherDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'weatherdetail',
	        template: __webpack_require__(46)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
	], WeatherDetailComponent);
	exports.WeatherDetailComponent = WeatherDetailComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Weather Detail</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var weather_service_1 = __webpack_require__(31);
	var WeatherConstraintsComponent = (function () {
	    function WeatherConstraintsComponent(_weatherService) {
	        this._weatherService = _weatherService;
	        this.weathers = [];
	    }
	    WeatherConstraintsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._weatherService.getAllWeathersAPI()
	            .subscribe(function (data) {
	            console.log("Weathers : ");
	            console.log(data);
	            _this.weathers = data;
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    return WeatherConstraintsComponent;
	}());
	WeatherConstraintsComponent = __decorate([
	    core_1.Component({
	        selector: 'weather-constraints',
	        template: __webpack_require__(48)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService])
	], WeatherConstraintsComponent);
	exports.WeatherConstraintsComponent = WeatherConstraintsComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<h2>Weathers</h2>\r\n\r\n<h3>Choose a weather to get weather constraints from : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var weatherconstraint_service_1 = __webpack_require__(50);
	var WeatherConstraintComponent = (function () {
	    function WeatherConstraintComponent(_router, _route, _weatherConstraintService) {
	        this._router = _router;
	        this._route = _route;
	        this._weatherConstraintService = _weatherConstraintService;
	    }
	    WeatherConstraintComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this._route.params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	            console.log(_this.id);
	            _this.getConstraints();
	        });
	    };
	    WeatherConstraintComponent.prototype.getConstraints = function () {
	        var _this = this;
	        this._weatherConstraintService
	            .getConstraintsAPI(this.id)
	            .subscribe(function (data) {
	            _this.constraints = data;
	            console.log("Get all the constraints : " + JSON.stringify(data));
	        }, function (error) {
	            console.log("Erreur du serveur : " + error);
	        });
	    };
	    WeatherConstraintComponent.prototype.goBack = function () {
	        this._router.navigateByUrl('/weatherConstraints');
	    };
	    return WeatherConstraintComponent;
	}());
	WeatherConstraintComponent = __decorate([
	    core_1.Component({
	        selector: 'weather-constraint',
	        template: __webpack_require__(51)
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, weatherconstraint_service_1.WeatherConstraintsService])
	], WeatherConstraintComponent);
	exports.WeatherConstraintComponent = WeatherConstraintComponent;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	var WeatherConstraintsService = (function () {
	    function WeatherConstraintsService(_http) {
	        this._http = _http;
	    }
	    WeatherConstraintsService.prototype.getConstraintsAPI = function (id) {
	        return this._http.get('api/weather/' + id + '/constraints')
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    return WeatherConstraintsService;
	}());
	WeatherConstraintsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], WeatherConstraintsService);
	exports.WeatherConstraintsService = WeatherConstraintsService;


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<h2>Constraints for the temperature : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Wind km/h\r\n                <!--<img src=\"../../../../wwwroot/dist/img/wind.png\"/>-->\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.weather}}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var trip_service_1 = __webpack_require__(53);
	var login_service_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(7);
	var TripComponent = (function () {
	    function TripComponent(_tripService, _loginService, _activatedRoute) {
	        this._tripService = _tripService;
	        this._loginService = _loginService;
	        this._activatedRoute = _activatedRoute;
	        this.titreTrip = "Les Forfaits Voyages";
	        this.trips = [];
	        if (this._loginService.userName != null && typeof (this._loginService.userName) != "undefined") {
	            this.userName = this._loginService.userName;
	        }
	        else {
	            this.userName = "";
	        }
	    }
	    TripComponent.prototype.ngOnInit = function () {
	        this.getAllTrips();
	    };
	    //  get methos sur service.
	    TripComponent.prototype.getAllTrips = function () {
	        var _this = this;
	        this._tripService.getAllTripsAPI()
	            .subscribe(function (data) {
	            console.log("succes get trips from service : " + JSON.stringify(data));
	            _this.trips = data;
	        }, function (error) {
	            console.log("error getting trips from service : " + error);
	        });
	    };
	    return TripComponent;
	}());
	TripComponent = __decorate([
	    core_1.Component({
	        selector: 'trip',
	        template: __webpack_require__(54),
	        styles: [__webpack_require__(55)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService, login_service_1.LoginService,
	        router_1.ActivatedRoute])
	], TripComponent);
	exports.TripComponent = TripComponent;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(12);
	var login_service_1 = __webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	var TripService = (function () {
	    function TripService(_http, _loginService) {
	        this._http = _http;
	        this._loginService = _loginService;
	        this._urlTrip = 'api/trip';
	    }
	    // GET:     All trips objects.
	    TripService.prototype.getAllTripsAPI = function () {
	        console.log("token du login service");
	        console.log(this._loginService.token);
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    return TripService;
	}());
	TripService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], TripService);
	exports.TripService = TripService;


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<h1>Bienvenue {{userName}}</h1>\r\n<a class=\"btn btn-sm btn-success\" [routerLink]=\"['/trips/perso']\">Voir mes trips</a>\r\n<router-outlet></router-outlet>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<h3>Disponibles présentement</h3>\r\n\r\n<div *ngFor=\"let trip of trips\" class=\"infosTrip col-md-12\">\r\n    <ul>\r\n        <li>{{trip?.name}}</li>\r\n        <li>{{trip?.country}}</li>\r\n        <li>{{trip?.continent}}</li>\r\n    </ul>\r\n    <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n    <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n</div>\r\n\r\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(56);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.infosTrip{\r\n    width: auto;\r\n    height: auto;\r\n    background-color:#9de6ff;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    margin: 1%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var tripdetail_service_1 = __webpack_require__(33);
	var trip_1 = __webpack_require__(58);
	var TripDetailComponent = (function () {
	    function TripDetailComponent(_activatedRoute, _tripdetail, _router) {
	        this._activatedRoute = _activatedRoute;
	        this._tripdetail = _tripdetail;
	        this._router = _router;
	        this.isBought = false;
	        this.userTrips = [];
	        this.isBoughtMessage = "";
	    }
	    TripDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null && params['id'] != undefined) {
	                var id = +params['id'];
	                _this.getTripById(id);
	            }
	            else {
	                _this._router.navigateByUrl("/trips");
	            }
	        });
	    };
	    TripDetailComponent.prototype.getTripById = function (id) {
	        var _this = this;
	        return this._tripdetail.getTripByIdAPI(id)
	            .subscribe(function (data) {
	            _this.selectedTrip = new trip_1.Trip(data.id, data.name, data.leaving, data.continent, data.country, data.stops);
	            console.log("succes get back trip with id : " + id);
	            console.log("trip detail : " + JSON.stringify(data));
	            _this.getTripsForUser();
	        }, function (error) {
	            console.log("error get back trip with id : " + id + error);
	        });
	    };
	    TripDetailComponent.prototype.getTripsForUser = function () {
	        var _this = this;
	        return this._tripdetail.getUserTripAPI()
	            .subscribe(function (data) {
	            console.log(JSON.stringify(data));
	            _this.userTrips = data;
	            _this.canAddTrip();
	        }, function (error) {
	            console.log("error get back trip for user " + error);
	        });
	    };
	    TripDetailComponent.prototype.canAddTrip = function () {
	        for (var i = 0; i < this.userTrips.length; i++) {
	            if (this.userTrips[i].id == this.selectedTrip.id) {
	                this.isBought = true;
	                this.isBoughtMessage = "Vous avez déjà acheté ce trip";
	                return;
	            }
	        }
	    };
	    TripDetailComponent.prototype.buyTrip = function (trip) {
	        var _this = this;
	        return this._tripdetail.postTripAPI(trip)
	            .subscribe(function (data) {
	            console.log("succes creating trip : " + JSON.stringify(data));
	            _this.isBought = true;
	        }, function (error) {
	            console.log("error creating trip : " + error);
	        });
	    };
	    TripDetailComponent.prototype.goBack = function () {
	        this._router.navigateByUrl('/trips');
	    };
	    return TripDetailComponent;
	}());
	TripDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'trip-detail',
	        template: __webpack_require__(59),
	        styles: [__webpack_require__(60)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripDetailComponent);
	exports.TripDetailComponent = TripDetailComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	var Trip = (function () {
	    function Trip(id, name, leaving, country, continent, stops) {
	        this.id = id;
	        this.name = name;
	        this.leaving = leaving;
	        this.country = country;
	        this.continent = continent;
	        this.stops = stops;
	    }
	    return Trip;
	}());
	exports.Trip = Trip;


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<h2>Détails Trip</h2>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><button class=\"btn btn-sm btn-success\" (click)=\"buyTrip(selectedTrip)\" [disabled]=\"isBought\">Ajouter à mes trips</button></li>\r\n    <li><h4>{{isBoughtMessage}}</h4></li>\r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>Créer un nouveau stop<span><a [routerLink]=\"['stop']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-arrow-up\"></i></a></span></li>\r\n    <li><a [routerLink]=\"['edit']\">Éditer Trip</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"col-md-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>\r\n</div>"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(61);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\nspan{\r\n    padding: 1%;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var tripdetail_service_1 = __webpack_require__(33);
	var TripUserComponent = (function () {
	    function TripUserComponent(_activatedRoute, _tripDetailService, _router) {
	        this._activatedRoute = _activatedRoute;
	        this._tripDetailService = _tripDetailService;
	        this._router = _router;
	        this.userMessage = "";
	        this.mesTrips = [];
	        this.objectName = "";
	        this.inputDelete = false;
	        this.selectedTrip = null;
	    }
	    TripUserComponent.prototype.ngOnInit = function () {
	        this.getUserTrips();
	    };
	    TripUserComponent.prototype.goBack = function () {
	        this._router.navigateByUrl('/trips');
	    };
	    TripUserComponent.prototype.getUserTrips = function () {
	        var _this = this;
	        return this._tripDetailService.getUserTripAPI()
	            .subscribe(function (data) {
	            console.log(data);
	            _this.mesTrips = data;
	        }, function (error) {
	            console.log("cant get your trips " + error);
	        });
	    };
	    TripUserComponent.prototype.deleteTrip = function (trip) {
	        this.selectedTrip = trip;
	        this.objectName = "usertrip";
	        this.inputDelete = true;
	    };
	    // refresh the results after the child component has emitted the deletion was successfull.
	    TripUserComponent.prototype.refreshResults = function ($event) {
	        if ($event == true) {
	            // delete the weather client side :
	            this.mesTrips.splice(this.mesTrips.indexOf(this.selectedTrip), 1);
	            // update the list accordingly
	            this.getUserTrips();
	        }
	        this.inputDelete = false;
	        this.objectName = "";
	    };
	    return TripUserComponent;
	}());
	TripUserComponent = __decorate([
	    core_1.Component({
	        selector: 'trip-detail',
	        template: __webpack_require__(63),
	        styles: [__webpack_require__(64)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripUserComponent);
	exports.TripUserComponent = TripUserComponent;


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<h2>{{userMessage}}</h2>\r\n\r\n<delete [isDelete]=\"inputDelete\" [tripToDelete]=\"selectedTrip\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<h3>Mes Trips</h3>\r\n<div *ngFor=\"let trip of mesTrips\" class=\"col-md-12\">\r\n    <ul class=\"col-md-3\">\r\n        <li># Réservation : {{trip?.id}}</li>\r\n        <li>Nom : {{trip?.name}}</li>\r\n        <li>Date de départ : {{trip?.leaving | fmTripDate}}</li>\r\n        <li>Pays : {{trip?.country}}</li>\r\n        <li>Continent : {{trip?.continent}}</li>\r\n        <li><a class=\"btn btn-md btn-danger\" (click)=\"deleteTrip(trip)\">Supprimer</a></li>\r\n    </ul>\r\n\r\n    <div class=\"col-md-9\">\r\n        <ul *ngFor=\"let stop of trip.stops; let i = index\">\r\n            <li>Stop # {{i + 1}}</li>\r\n            <li>Nom : {{stop?.name}}</li>\r\n            <li>Date d'arrivée : {{stop?.arrival | fmTripDate}}</li>\r\n            <li>Date de départ : {{stop?.leaving | fmTripDate}}</li>\r\n            <li>Ville : {{stop?.city}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<h2><i class=\"fa fa-arrow-up\"></i></h2>\r\n<a class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">Back</a>\r\n"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(65);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n    float: left;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 1%;\r\n}\r\n\r\ndiv > ul{\r\n    background-color:ivory;\r\n}\r\n\r\ndiv div > ul{\r\n    background-color:aliceblue;\r\n    margin: 0.5%;\r\n}", ""]);
	
	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var stop_1 = __webpack_require__(67);
	var stop_service_1 = __webpack_require__(32);
	var StopComponent = (function () {
	    function StopComponent(_activatedRoute, _router, _stopService) {
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this._stopService = _stopService;
	        this.selectedStop = new stop_1.Stop(1, "Plage", new Date(), new Date(), "Montréal", 0, 0, 0);
	    }
	    StopComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //check if were not in /stop yet, jsut display a message for the user
	        this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null || params['id'] != undefined) {
	                _this.message = "Créer un nouveau stop pour ce trip";
	                _this.isShowForm = false;
	            }
	            else {
	                _this.isShowForm = true;
	            }
	        });
	        // Get parent ActivatedRoute of this route.
	        this.sub = this._activatedRoute.parent.params.subscribe(function (params) {
	            _this.tripId = +params["id"];
	        });
	        console.log("id du parent pour sauver stop : ");
	        console.log(this.tripId);
	    };
	    StopComponent.prototype.onSubmit = function (createForm) {
	        this.selectedStop = createForm.value;
	        console.log(createForm.value);
	        console.log(createForm.valid);
	        this.isCreateForm = false;
	        this.postStopService();
	    };
	    StopComponent.prototype.postStopService = function () {
	        var _this = this;
	        return this._stopService.postStopByIdAPI(this.tripId, this.selectedStop)
	            .subscribe(function (data) {
	            console.log("succes saved stop at trip id : " + _this.tripId);
	            _this.selectedStop.id = data.id;
	            _this.selectedStop.name = data.name;
	            _this.selectedStop.arrival = data.arrival;
	            _this.selectedStop.leaving = data.leaving;
	        }, function (error) {
	            console.log("error cant save stop at trip id : " + _this.tripId);
	        });
	    };
	    StopComponent.prototype.addStop = function () {
	        this.isCreateForm = !this.isCreateForm;
	        console.log(this.tripId);
	    };
	    StopComponent.prototype.ngOnDestroy = function () {
	        console.log("on destroy");
	        this.sub.unsubscribe();
	    };
	    return StopComponent;
	}());
	StopComponent = __decorate([
	    core_1.Component({
	        selector: 'stop',
	        template: __webpack_require__(68)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
	        stop_service_1.StopService])
	], StopComponent);
	exports.StopComponent = StopComponent;


/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	var Stop = (function () {
	    function Stop(id, name, arrival, leaving, city, longitude, latitude, order) {
	        this.id = id;
	        this.name = name;
	        this.arrival = arrival;
	        this.leaving = leaving;
	        this.city = city;
	        this.longitude = longitude;
	        this.latitude = latitude;
	        this.order = order;
	    }
	    return Stop;
	}());
	exports.Stop = Stop;


/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\"/>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-lg btn-success\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var tripdetail_service_1 = __webpack_require__(33);
	var stop_service_1 = __webpack_require__(32);
	var trip_1 = __webpack_require__(58);
	var EditStopComponent = (function () {
	    function EditStopComponent(_activatedRoute, _tripdetail, _router, _stopService) {
	        this._activatedRoute = _activatedRoute;
	        this._tripdetail = _tripdetail;
	        this._router = _router;
	        this._stopService = _stopService;
	        this.inputDelete = false;
	        this.inputIdDelete = null;
	        this.objectName = "";
	        this.showPopUp = false;
	    }
	    EditStopComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this._activatedRoute.parent.params.subscribe(function (params) {
	            if (params['id'] != null && params['id'] != undefined) {
	                var id = +params['id'];
	                _this.getStopsById(id);
	            }
	            else {
	                _this._router.navigateByUrl("/trips/" + id);
	            }
	        });
	    };
	    //  POP UP NOT WORKIN?! test in another project
	    EditStopComponent.prototype.onTogglePopUp = function () {
	        this.showPopUp = !this.showPopUp;
	        console.log(this.showPopUp);
	    };
	    EditStopComponent.prototype.getStopsById = function (id) {
	        var _this = this;
	        return this._tripdetail.getTripByIdAPI(id)
	            .subscribe(function (data) {
	            _this.selectedTrip = new trip_1.Trip(data.id, data.name, data.leaving, data.continent, data.country, data.stops);
	            console.log("succes get back trip with id : " + id);
	            console.log("trip detail : " + JSON.stringify(data));
	        }, function (error) {
	            console.log("error get back trip with id : " + id + error);
	        });
	    };
	    // delete stop by its id
	    EditStopComponent.prototype.deleteStop = function (id) {
	        this.inputDelete = true;
	        console.log("in go delete : " + id);
	        this.inputIdDelete = id;
	        this.objectName = "stopAdmin";
	    };
	    // refresh the results after the child component has emitted the deletion was successfull.
	    EditStopComponent.prototype.refreshResults = function ($event) {
	        if ($event == true) {
	            // refresh the display list after deleting a stop.
	            this.getStopsById(this.selectedTrip.id);
	        }
	        this.objectName = "";
	        this.inputDelete = false;
	    };
	    return EditStopComponent;
	}());
	EditStopComponent = __decorate([
	    core_1.Component({
	        selector: 'stop-edit',
	        template: __webpack_require__(70),
	        styles: [__webpack_require__(71)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router, stop_service_1.StopService])
	], EditStopComponent);
	exports.EditStopComponent = EditStopComponent;


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\">\r\n        <div class=\"col-md-6\">\r\n            <span><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n            <a (click)=\"onTogglePopUp()\">\r\n                {{stop?.name}}, {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}}, {{stop?.city}}\r\n            </a>\r\n  \r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n            <span><a class=\"btn btn-sm btn-danger\" (click)=\"deleteStop(stop.id)\">Supprimer</a></span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span>put picture here</span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(72);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.content {\r\npadding: 30px;\r\ncolor: #787878;\r\nbackground-color: #fcf7f8;\r\nborder: 1px solid rgba(0,0,0,.05);\r\n}\r\n\r\n.popup {\r\nwidth: 100px;\r\nheight: 70px;\r\n}\r\n\r\n.popup > ul {\r\n    list-style-type: decimal;\r\n    text-align: left;\r\n}", ""]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(280);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var FormatHour = (function () {
	    function FormatHour() {
	    }
	    FormatHour.prototype.transform = function (date, args) {
	        return date.toString().substring(0, 5);
	    };
	    return FormatHour;
	}());
	FormatHour = __decorate([
	    core_1.Pipe({
	        name: 'fmHourLocal',
	        pure: false
	    })
	], FormatHour);
	exports.FormatHour = FormatHour;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var moment = __webpack_require__(37);
	var TripDate = (function () {
	    function TripDate() {
	    }
	    TripDate.prototype.transform = function (date, args) {
	        var d = new Date(date);
	        moment.locale('en-ca');
	        return moment(d).format('LL');
	    };
	    return TripDate;
	}());
	TripDate = __decorate([
	    core_1.Pipe({
	        name: 'fmTripDate',
	        pure: false
	    })
	], TripDate);
	exports.TripDate = TripDate;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(282);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(301);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQzNjAxNjIzZmUzNjhhNDVjNDciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9icm93c2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9icm93c2VyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3M/ZGRjMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcz9kNTcyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzcz9lMGU2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzcz9lMTFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzP2NiZDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzPzUwNTIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvanMvbnBtLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVB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QztJQUVXLFVBQVUsQ0FJdEI7QUFKWSxpQ0FBVTs7Ozs7Ozs7Ozs7Ozs7QUNSdkIscUNBQW9EO0FBQ3BELHNDQUFpQztBQVFqQyxLQUFhLFFBQVE7S0FBckI7S0FNQSxDQUFDO0tBTEcsNEJBQVMsR0FBVCxVQUFVLElBQVMsRUFBRSxJQUFVO1NBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEMsQ0FBQztLQUNMLGVBQUM7QUFBRCxFQUFDO0FBTlksU0FBUTtLQUxwQixXQUFJLENBQUM7U0FDRixJQUFJLEVBQUUsWUFBWTtTQUNsQixJQUFJLEVBQUUsS0FBSztNQUNkLENBQUM7SUFFVyxRQUFRLENBTXBCO0FBTlksNkJBQVE7Ozs7Ozs7QUNUckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Im1haW4tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDQzNjAxNjIzZmUzNjhhNDVjNDciLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvYnJvd3Nlcic7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Vbml2ZXJzYWxEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBFbmFibGUgZWl0aGVyIEhvdCBNb2R1bGUgUmVsb2FkaW5nIG9yIHByb2R1Y3Rpb24gbW9kZVxuaWYgKG1vZHVsZVsnaG90J10pIHtcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xuICAgIG1vZHVsZVsnaG90J10uZGlzcG9zZSgoKSA9PiB7IHBsYXRmb3JtLmRlc3Ryb3koKTsgfSk7XG59IGVsc2Uge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8vIEJvb3QgdGhlIGFwcGxpY2F0aW9uLCBlaXRoZXIgbm93IG9yIHdoZW4gdGhlIERPTSBjb250ZW50IGlzIGxvYWRlZFxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybVVuaXZlcnNhbER5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI2OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI5NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvYnJvd3Nlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyOTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvYnJvd3Nlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBsb2dpblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZCc7XG5cbi8vIG1haW4gY29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwVXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50JztcblxuLy8gc2VydmljZXNcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UnO1xuXG4vLyBwaXBlcywgZXh0ZXJuYWwgbW9kdWxlc1xuaW1wb3J0IHsgRGF0ZUlucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMnO1xuaW1wb3J0IHsgRm9ybWF0SG91ciB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlJztcbmltcG9ydCB7IFRyaXBEYXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlJ1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuLy9pbXBvcnQgeyBQb3B1cE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwJztcclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIFRyaXBEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFRyaXBVc2VyQ29tcG9uZW50LFxuICAgICAgICBFZGl0U3RvcENvbXBvbmVudCxcbiAgICAgICAgU3RvcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRzTW9kdWxlLFxuICAgICAgICBEaWFsb2dNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndHJpcHMnLCBjb21wb25lbnQ6IFRyaXBDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndHJpcHMvcGVyc28nLCBjb21wb25lbnQ6IFRyaXBVc2VyQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSwgICAgICAgICAgXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAndHJpcHMvOmlkJywgY29tcG9uZW50OiBUcmlwRGV0YWlsQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnc3RvcCcsIGNvbXBvbmVudDogU3RvcENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2VkaXQnLCBjb21wb25lbnQ6IEVkaXRTdG9wQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycycsIGNvbXBvbmVudDogV2VhdGhlckNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2RldGFpbC86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3dlYXRoZXJDb25zdHJhaW50cycsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg1Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IDxJVXNlcj5mb3JtLnZhbHVlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ2luQVBJKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaXBwZWRUb2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGxvZ2luIHVzZXIgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lID0gdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4gPSBzdHJpcHBlZFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IHNlcnZpY2UgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSW1wb3NzaWJsZSBkZSBsb2d1ZXIgbGUgdXNlciA6IFwiICsgdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbG9nIHVzZXIgIDogXCIgKyB0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlck5hbWU6IHN0cmluZywgcHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nKSB7fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL1VzZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbi8vaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItMi1sb2NhbC1zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXJsTG9naW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsTG9naW4gPSAnYXBpL2F1dGgvdG9rZW4nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VyTmFtZSAhPSBudWxsICYmIHR5cGVvZih0aGlzLnVzZXJOYW1lKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkFQSSh1c2VyOiBJVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxMb2dpbiwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzkxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjM0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDM3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMz5Mb2dpbjwvaDM+XFxyXFxuICAgIDxmb3JtICNsb2dpbj1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChsb2dpbilcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlck5hbWVcXFwiPlVzZXIgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiBpZD1cXFwidXNlck5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnVzZXJOYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci51c2VyTmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlVzZXJuYW1lIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5Db3VycmllbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5lbWFpbC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkVtYWlsIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5Nb3QgUGFzc2U8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIucGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Nb3QgUGFzc2UgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXFxcIj5TZSBMb2d1ZXI8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8aSAqbmdJZj1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZndcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZXJyb3JcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgTG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5Mb2dpblNlcnZpY2UudG9rZW4gIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5Mb2dpblNlcnZpY2UudG9rZW4gIT0gXCJ1bmRlZmluZWRcIikpIHtcclxuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3VhcmQgOiBcIiArIHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3VhcmQgXCIgKyB0aGlzLkxvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvbG9naW5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgYXtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkFuZ3VsYXIyQ29yZVNlZWQ8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJsaW5rLWFjdGl2ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvc3Bhbj4gU2lnbiBVcFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cXFwiPjwvc3Bhbj4gU2lnbiBJblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy90cmlwcyddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yb2FkXFxcIj48L3NwYW4+IFRyaXBzXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3dlYXRoZXJzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gV2VhdGhlcnNcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gV2VhdGhlciBDb25zdHJhaW50c1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj4gTG9nT3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbyBXb3JsZDwvaDE+XFxuXFxuPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nZXQuYXNwLm5ldC8nPkFTUC5ORVQgQ29yZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCc+QyM8L2E+IGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vYW5ndWxhci5pby8nPkFuZ3VsYXIgMjwvYT4gYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cXG48L3VsPlxcbjxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXG48L3VsPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuLi9zdG9wL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IFRyaXAsIElUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaXNEZWxldGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9EZWxldGVJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgb2JqZWN0VG9EZWxldGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRyaXBUb0RlbGV0ZTogSVRyaXA7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlU3VjY2VzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlkVG9EZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dOb3RpZjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UsIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHBvcCB1cCBvcGVuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZGVsZXRlIDogXCIgKyB0aGlzLmlzRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU5vdGlmKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gdGhpcy53ZWF0aGVyVG9EZWxldGVJZDtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInN0b3BBZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlU3RvcEJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcIndlYXRoZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZXJXZWF0aGVyQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInVzZXJ0cmlwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVVc2VyVHJpcCh0aGlzLnRyaXBUb0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3BCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdG9wU2VydmljZS5kZWxldGVTdG9wQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIERFTEVURSBzdG9wIGluIGRlbGV0ZSBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVyV2VhdGhlckJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzZXJUcmlwKHRyaXA6IElUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZGVsZXRlVHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgdHJpcCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRpbmcgdHJpcFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFdlYXRoZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsV2VhdGhlciA9IFwiYXBpL3dlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBhbGwgd2VhdGhlciBvYmplY3RzXHJcbiAgICBnZXRBbGxXZWF0aGVyc0FQSSgpOiBPYnNlcnZhYmxlPElXZWF0aGVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXJbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcG9zdFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVDogICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHB1dFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBieSBpZFxyXG4gICAgZ2V0V2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgbmFtZVxyXG4gICAgZ2V0V2VhdGhlckJ5TmFtZUFQSShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9CeU5hbWUvXCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IGlkXHJcbiAgICBkZWxldGVXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIgKyBlcnJvcikpICAgICAgXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3BTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BCeUlkQVBJKGlkOiBudW1iZXIsIHN0b3A6IFN0b3ApOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3RvcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxTdG9wICsgXCIvXCIgKyBpZCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVN0b3A+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3BCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsU3RvcCArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gY29uc29sZS5sb2coXCJkZWxldGUgc3RvcCB3aXRoIGlkIDogXCIgKyBpZCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5jb25zb2xlLmxvZyhcImVycm9yIGRlbGV0ZSBzdG9wIFwiICsgZXJyb3IpKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFRyaXAgPSBcImFwaS90cmlwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUICA6IGdldCB0cmlwIGJ5LlxyXG4gICAgZ2V0VHJpcEJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVRyaXA+IHtcclxuXHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBnZXQgdHJpcHMgZm9yIGxvZ2dlZCBpbiB1c2VyLlxyXG4gICAgZ2V0VXNlclRyaXBBUEkoKTogT2JzZXJ2YWJsZTxJVHJpcFtdPiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvdXNlclwiLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUOiAgICAxIHRyaXAgb2JqZWN0LlxyXG4gICAgcG9zdFRyaXBBUEkodHJpcDogVHJpcCk6IE9ic2VydmFibGU8SVRyaXA+IHtcclxuXHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRyaXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFRyaXAsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmlwQVBJKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIHRyaXAuaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPGFueT5jb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiaXNTaG93Tm90aWZcXFwiIGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1zdWNjZXNzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICA8cD5BY3Rpb24gZWZmZWN0dcOpZS48L3A+ICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiICpuZ0lmPVxcXCJpZFRvRGVsZXRlXFxcIj5cXHJcXG4gICAgICAgIDxoMz5TdWNjw6hzIHN1cHByaW1lciAjPC9oMz5cXHJcXG4gICAgICAgIDxoND57e2lkVG9EZWxldGV9fTwvaDQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJoaWRlTm90aWYoKVxcXCI+SGlkZTwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxrZW5kby1kaWFsb2cgKm5nSWY9XFxcImlzRGVsZXRlXFxcIiAoY2xvc2UpPVxcXCJjYW5jZWxEZWxldGUoKVxcXCI+XFxyXFxuICAgIDxrZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXNpemU6IDE4cHg7IGxpbmUtaGVpZ2h0OiAxLjNlbTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJrLWljb24gay1pLXdhcm5pbmdcXFwiPjwvc3Bhbj4gU3VwcHJpbWVyIGRvbm7DqWVcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy10aXRsZWJhcj5cXHJcXG4gICAgPHAgc3R5bGU9XFxcIm1hcmdpbjogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCI+QWN0aW9uIGlycsOpdm9jYWJsZS48L3A+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1kaWFsb2ctYWN0aW9ucz5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJvbkRlbGV0ZURhdGEoKVxcXCI+RGVsZXRlPC9idXR0b24+XFxyXFxuICAgIDwva2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuPC9rZW5kby1kaWFsb2c+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdlYXRoZXJzOiBXZWF0aGVyW107XHJcbiAgICBwdWJsaWMgd2VhdGhlcjE6IFdlYXRoZXI7XHJcbiAgICBwdWJsaWMgb2JqZWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdHJlV2VhdGhlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGVkaXRGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIGZtRGF0ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0cmVXZWF0aGVyID0gXCJXZWF0aGVyIENoZWNrXCI7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgLy8gbW9tZW50IGpzIGZvcm1hdCBhIGRhdGUgd2l0aCBhIHN0cmluZyBmb3JtYXQsIHJldHVybnMgYSBkYXRlLlxyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgdGhpcy5mbURhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm1EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjbGFzcyB3ZWF0aGVyIG9iamVjdCB0byBiaW5kIHRvLlxyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSBuZXcgV2VhdGhlcigxLCBcIkF1dG9tbldlYXRoZXJcIiwgdGhpcy5mbURhdGUsIDE0LCBcIlRlbXDDqXJhdHVyZSBBdXRvbW5lXCIpO1xyXG4gICAgICAgIC8vIE1ldGhvZCB0byBnZXQgd2VhdGhlciBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCA6IGFsbCB3ZWF0aGVyIG9iamVjdHMgZnJvbSBkYlxyXG4gICAgZ2V0QWxsV2VhdGhlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFdlYXRoZXJzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IGFsbCB3ZWF0aGVyIG9iamV0cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2aWNlIDogIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXZWF0aGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gIXRoaXMuc2hvd0Zvcm07XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvRGVsZXRlKGlkVG9EZWxldGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZFRvRGVsZXRlKTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBpZFRvRGVsZXRlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwid2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcnMuc3BsaWNlKHRoaXMuaW5wdXRJZERlbGV0ZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSBhIGpzIG9iamVjdCAgKHVzdWFsbHkgb2JqZWN0IG9yIGFycmF5KSBjb252ZXJ0IGl0IHRvIEpTT04gc3RyaW5nIG5vdGF0aW9uXHJcbiAgICAvLyB0byBnZXQgSlNPTiBvYmplY3QgdXNlIHBhcnNlIG1ldGhvZFxyXG4gICAgZ2V0IGRpYWdub3N0aWMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwYXlsb2FkIHdlYXRoZXIgb2JqZWN0IGZyb20gY2hpbGRyZW4gY29tcG9uZW50IHdlYXRoZXJmb3JtXHJcbiAgICBwb3N0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gJGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHdlYXRoZXIgdG8gcG9zdCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIHNhdmUgbmV3IHdlYXRoZXIgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5zYXZlV2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlclxyXG4gICAgZWRpdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9ICRldmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRpbmcgYSB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gZWRpdCBhIHdlYXRoZXJcclxuICAgICAgICB0aGlzLnB1dFdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXIgd2hlbiBjbGlja2luZyBhIGxpbmsgb24gd2VhdGhlciBvYmplY3RzIHRhYmxlLlxyXG4gICAgZ29FZGl0KHdlYXRoZXI6IFdlYXRoZXIpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gd2VhdGhlcjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUIDogY2FsbCB0aGUgcG9zdCBhY3Rpb24gb24gYmFja2VuZCB0byBjcmVhdGUgbmV3IHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgc2F2ZVdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IFN1YnNjcmlwdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSBkYXRhLmhvdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcGVyYXR1cmVGID0gZGF0YS50ZW1wZXJhdHVyZUY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBuZXcgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkYXRhIGluIHRoZSBicm93c2VyIHRvIGdldCBoZSBuZXdseSBzYWJlZCB3ZWF0aGVyIG9iamVjdC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIG9mIGRhdGUgc2VudCBiYWNrIHRvIGNsaWVudCA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHRoaXMud2VhdGhlcjEuaG91cikpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHNhdmluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0V2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdGVkIHdlYXRoZXIgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGVkaXRpbmcgd2VhdGhlciA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbnN0cmFpbnQsIElDb25zdHJhaW50IH0gZnJvbSAnLi4vd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJV2VhdGhlciB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaG91cj86IERhdGU7XG4gICAgdGVtcEM/OiBudW1iZXI7XG4gICAgc3VtbWFyeT86IHN0cmluZztcbiAgICB0ZW1wZXJhdHVyZUY/OiBudW1iZXI7XG4gICAgY29uc3RyYWludHM/OiBDb25zdHJhaW50W107XG59XG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyIGltcGxlbWVudHMgSVdlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGhvdXI/OiBEYXRlLFxuICAgICAgICBwdWJsaWMgdGVtcEM/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5Pzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGVtcGVyYXR1cmVGPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgY29uc3RyYWludHM/OiBDb25zdHJhaW50W10pIHsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPnt7dGl0cmVXZWF0aGVyfX08L2gxPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2hvd1dlYXRoZXJGb3JtKClcXFwiPkNyZWF0ZSBuZXcgV2VhdGhlcjwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd0Zvcm1cXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8d2VhdGhlci1mb3JtIFt3ZWF0aGVyVG9TYXZlXT1cXFwid2VhdGhlcjFcXFwiIChuZXdXZWF0aGVyKT1cXFwicG9zdFdlYXRoZXIoJGV2ZW50KVxcXCIgKGVkV2VhdGhlcik9XFxcImVkaXRXZWF0aGVyKCRldmVudClcXFwiIFttb2RlRWRpdF09XFxcImVkaXRGb3JtXFxcIj48L3dlYXRoZXItZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5Ib3VyIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXBDPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcCBGPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgd2VhdGhlciBvZiB3ZWF0aGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnZGV0YWlsJywgd2VhdGhlci5pZF1cXFwiPnt7d2VhdGhlcj8uaWR9fTwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBDfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5zdW1tYXJ5fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wZXJhdHVyZUZ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0RlbGV0ZSh3ZWF0aGVyLmlkKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2Npc3NvcnNcXFwiPkRlbGV0ZTwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPjxhIChjbGljayk9XFxcImdvRWRpdCh3ZWF0aGVyKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj5FZGl0PC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlPjwvZGVsZXRlPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2VhdGhlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRm9ybUNvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb1NhdmU6IFdlYXRoZXI7XHJcbiAgICBAT3V0cHV0KCkgbmV3V2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQE91dHB1dCgpIGVkV2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQElucHV0KCkgbW9kZUVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIG9uRWRpdDogYm9vbGVhbjtcclxuICAgIC8vZm9ybTE6IE5nRm9ybTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9uRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXdXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIHRoaXMuZWRXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIC8vdGhpcy5mb3JtMSA9IG5ldyBOZ0Zvcm0oW10sIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbiB2ZXV0IHNvdW1ldHRyZSBvbiBlZGl0LlxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbnZveWVyIGxlIHdlYXRoZXJmb3JtIG9iamVjdCBhdSB3ZWF0aGVyIGNvbXBvbmVudFxyXG4gICAgb25TdWJtaXQod2VhdGhlckZvcm06IE5nRm9ybSl7ICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZUVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lZFdlYXRoZXIuZW1pdCh0aGlzLndlYXRoZXJUb1NhdmUpO1xyXG4gICAgICAgICAgICAvLyByZXNldCBwb3VyIHJldG91cm5lciBtb2RlIGNyZWVyXHJcbiAgICAgICAgICAgIHRoaXMubW9kZUVkaXQgPSBmYWxzZTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdXZWF0aGVyLmVtaXQod2VhdGhlckZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAvLyByZXNldCBwb3VyIHJldG91cm5lciBtb2RlIGVkaXRlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgPGgxPldlYXRoZXIgRm9ybTwvaDE+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCh3ZWF0aGVyRm9ybSlcXFwiICN3ZWF0aGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCI+TmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUubmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImhvdXJcXFwiPkhvdXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGltZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImhvdXJcXFwiIG5hbWU9XFxcImhvdXJcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLmhvdXJcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRlbXBDXFxcIj5UZW1wICpDPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRlbXBDXFxcIiBuYW1lPVxcXCJ0ZW1wQ1xcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUudGVtcENcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN1bW1hcnlcXFwiPlN1bW1hcnk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1bW1hcnlcXFwiIG5hbWU9XFxcInN1bW1hcnlcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnN1bW1hcnlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZCB8fCBtb2RlRWRpdFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwibW9kZUVkaXRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIXdlYXRoZXJGb3JtLnZhbGlkXFxcIj5FZGl0PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhc3VibWl0dGVkXFxcIj5cXHJcXG4gICAgICAgIDxoMj5Zb3Ugc3VibWl0dGVkIHRoZSBmb2xsb3dpbmc6PC9oMj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPk5hbWU8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSAgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPkhvdXIgQU0vUE08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5UZW1wZXJhdHVyZSAqQzwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBDfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+U3VtbWFyeTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnN1bW1hcnl9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5UZW1wZXJhdHVyZSBGPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUudGVtcGVyYXR1cmVGfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXFxyXFxufVxcclxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmstaW52YWxpZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi8qI2RhdGUsICNkYXRlID4gdGFibGUsICNkYXRhID4gZGl2LmstY29udGVudC5rLXNjcm9sbGFibGUsIGtlbmRvLWNhbGVuZGFyLW1vbnRodmlldywgdGFibGUuay1jYWxlbmRhci13ZWVrZGF5c3tcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXFxyXFxuXFxyXFxuLyouay1jYWxlbmRhci5rLWNhbGVuZGFyLWluZmluaXRlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLWdyb3VwIGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxua2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LmstY2FsZW5kYXItbW9udGh2aWV3e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJEZXRhaWxDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG1lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFdlYXRoZXJCeWRJZCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJBdWN1bnMgZMOpdGFpbHMgw6AgYWZmaWNoZXJcIjtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2VhdGhlckJ5ZElkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYWxsIGdldERldGFpbHMgbWV0aG9kIGluIHRoZSBuc2VydmljZVxyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHdlYXRoZXIgYnkgaWQgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlciA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW50IGdldCBkZXRhaWxzIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPnt7bWVzc2FnZURldGFpbHN9fTwvaDI+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlclxcXCI+XFxyXFxuICAgIDxoMT5XZWF0aGVyIERldGFpbDwvaDE+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5Ib3VyIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXBDPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcCBGPC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LmlkfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBDfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5zdW1tYXJ5fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wZXJhdHVyZUZ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1jb25zdHJhaW50cycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgd2VhdGhlcnM6IFdlYXRoZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0QWxsV2VhdGhlcnNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWF0aGVycyA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5XZWF0aGVyczwvaDI+XFxyXFxuXFxyXFxuPGgzPkNob29zZSBhIHdlYXRoZXIgdG8gZ2V0IHdlYXRoZXIgY29uc3RyYWludHMgZnJvbSA6IDwvaDM+XFxyXFxuXFxyXFxuPHVsPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgd2VhdGhlciBvZiB3ZWF0aGVyc1xcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlt3ZWF0aGVyLmlkXVxcXCI+e3t3ZWF0aGVyPy5uYW1lfX08L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJhaW50czogQ29uc3RyYWludFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3dlYXRoZXJDb25zdHJhaW50U2VydmljZTogV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uc3RyYWludHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50cygpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldENvbnN0cmFpbnRzQVBJKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgdGhlIGNvbnN0cmFpbnRzIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIGR1IHNlcnZldXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZWF0aGVyQ29uc3RyYWludHMnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlcmNvbnN0cmFpbnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50c0FQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnYXBpL3dlYXRoZXIvJyArIGlkICsgJy9jb25zdHJhaW50cycpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3A6IFJlc3BvbnNlKSA9PiA8SUNvbnN0cmFpbnRbXT5yZXNwLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q29uc3RyYWludHMgZm9yIHRoZSB0ZW1wZXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFdpbmQga20vaFxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XFxcIi4uLy4uLy4uLy4uL3d3d3Jvb3QvZGlzdC9pbWcvd2luZC5wbmdcXFwiLz4tLT5cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgR3VzdCBrbS9oXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEh1bWlkaXR5ICVcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgU3VuIFJpc2luZyBBTVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gU2V0IFBNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIENsZWFyXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEZlZWxzIExpa2UgwrBDXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8ud2luZH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZ3VzdH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaHVtaWRpdHl9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LnN1blJpc2luZ319XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uc3VuU2V0fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py53ZWF0aGVyfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5CYWNrPC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi90cmlwJztcclxuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tICcuL3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyB0aXRyZVRyaXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLnRpdHJlVHJpcCA9IFwiTGVzIEZvcmZhaXRzIFZveWFnZXNcIjtcclxuICAgICAgICB0aGlzLnRyaXBzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVHJpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgZ2V0IG1ldGhvcyBzdXIgc2VydmljZS5cclxuICAgIGdldEFsbFRyaXBzKCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmlwU2VydmljZS5nZXRBbGxUcmlwc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgdHJpcHMgZnJvbSBzZXJ2aWNlIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi90cmlwJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFRyaXAgPSAnYXBpL3RyaXAnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIEFsbCB0cmlwcyBvYmplY3RzLlxyXG4gICAgZ2V0QWxsVHJpcHNBUEkoKTogT2JzZXJ2YWJsZTxJVHJpcFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+QmllbnZlbnVlIHt7dXNlck5hbWV9fTwvaDE+XFxyXFxuPGEgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJpcHMvcGVyc28nXVxcXCI+Vm9pciBtZXMgdHJpcHM8L2E+XFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcblxcclxcbjxoMj57e3RpdHJlVHJpcH19PC9oMj5cXHJcXG48aDM+RGlzcG9uaWJsZXMgcHLDqXNlbnRlbWVudDwvaDM+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIHRyaXBzXFxcIiBjbGFzcz1cXFwiaW5mb3NUcmlwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT57e3RyaXA/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+e3t0cmlwPy5jb3VudHJ5fX08L2xpPlxcclxcbiAgICAgICAgPGxpPnt7dHJpcD8uY29udGluZW50fX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8cD5EYXRlIGRlIETDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlt0cmlwLmlkXVxcXCI+Vm9pciBUcmlwPC9hPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwe1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5ZGU2ZmY7XFxyXFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46IDElO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXA6aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaXNCb3VnaHQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdXNlclRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgaXNCb3VnaHRNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcGRldGFpbDogVHJpcERldGFpbFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodE1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyaXBCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRpbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcHNGb3JVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yICk7ICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmlwc0ZvclVzZXIoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRVc2VyVHJpcEFQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQWRkVHJpcCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgZm9yIHVzZXIgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWRkVHJpcCgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudXNlclRyaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJUcmlwc1tpXS5pZCA9PSB0aGlzLnNlbGVjdGVkVHJpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0TWVzc2FnZSA9IFwiVm91cyBhdmV6IGTDqWrDoCBhY2hldMOpIGNlIHRyaXBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXlUcmlwKHRyaXA6IFRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLnBvc3RUcmlwQVBJKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgY3JlYXRpbmcgdHJpcCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdHJpcCA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyaXB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGxlYXZpbmc/OiBEYXRlO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGNvbnRpbmVudD86IHN0cmluZztcclxuICAgIHN0b3BzPzogU3RvcFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcCBpbXBsZW1lbnRzIElUcmlwIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsZWF2aW5nPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgY291bnRyeT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgY29udGluZW50Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wcz86IFN0b3BbXSkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Ew6l0YWlscyBUcmlwPC9oMj5cXHJcXG5cXHJcXG48dWwgKm5nSWY9XFxcInNlbGVjdGVkVHJpcFxcXCIgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1hZGRyZXNzLWJvb2tcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uaWR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/Lm5hbWV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdXJnbGFzc1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG90ZWxcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY291bnRyeX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEtaG9tZVxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb250aW5lbnR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYnV5VHJpcChzZWxlY3RlZFRyaXApXFxcIiBbZGlzYWJsZWRdPVxcXCJpc0JvdWdodFxcXCI+QWpvdXRlciDDoCBtZXMgdHJpcHM8L2J1dHRvbj48L2xpPlxcclxcbiAgICA8bGk+PGg0Pnt7aXNCb3VnaHRNZXNzYWdlfX08L2g0PjwvbGk+XFxyXFxuPC91bD5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPkNyw6llciB1biBub3V2ZWF1IHN0b3A8c3Bhbj48YSBbcm91dGVyTGlua109XFxcIlsnc3RvcCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+PC9hPjwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2VkaXQnXVxcXCI+w4lkaXRlciBUcmlwPC9hPjwvbGk+XFxyXFxuPC91bD5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiPkJhY2s8L2J1dHRvbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ1bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbntcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwVXNlckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdXNlck1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNUcmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldFVzZXJUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFVzZXJUcmlwcygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwRGV0YWlsU2VydmljZS5nZXRVc2VyVHJpcEFQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc1RyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IGdldCB5b3VyIHRyaXBzIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXAodHJpcDogVHJpcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gdHJpcDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcInVzZXJ0cmlwXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLm1lc1RyaXBzLnNwbGljZSh0aGlzLm1lc1RyaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRyaXApLCAxKTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBsaXN0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e3VzZXJNZXNzYWdlfX08L2gyPlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt0cmlwVG9EZWxldGVdPVxcXCJzZWxlY3RlZFRyaXBcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGgzPk1lcyBUcmlwczwvaDM+XFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIG1lc1RyaXBzXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8bGk+IyBSw6lzZXJ2YXRpb24gOiB7e3RyaXA/LmlkfX08L2xpPlxcclxcbiAgICAgICAgPGxpPk5vbSA6IHt7dHJpcD8ubmFtZX19PC9saT5cXHJcXG4gICAgICAgIDxsaT5EYXRlIGRlIGTDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgPGxpPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+Q29udGluZW50IDoge3t0cmlwPy5jb250aW5lbnR9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+PGEgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlVHJpcCh0cmlwKVxcXCI+U3VwcHJpbWVyPC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXHJcXG4gICAgICAgIDx1bCAqbmdGb3I9XFxcImxldCBzdG9wIG9mIHRyaXAuc3RvcHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaT5TdG9wICMge3tpICsgMX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Tm9tIDoge3tzdG9wPy5uYW1lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGQnYXJyaXbDqWUgOiB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGRlIGTDqXBhcnQgOiB7e3N0b3A/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5WaWxsZSA6IHt7c3RvcD8uY2l0eX19PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxoMj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT48L2gyPlxcclxcbjxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCI+QmFjazwvYT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwdXNlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2ID4gdWx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6aXZvcnk7XFxyXFxufVxcclxcblxcclxcbmRpdiBkaXYgPiB1bHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XFxyXFxuICAgIG1hcmdpbjogMC41JTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9wLCBJU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9wQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaXNDcmVhdGVGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRyaXBJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd0Zvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdG9wOiBTdG9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IG5ldyBTdG9wKDEsIFwiUGxhZ2VcIiwgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgXCJNb250csOpYWxcIiwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB3ZXJlIG5vdCBpbiAvc3RvcCB5ZXQsIGpzdXQgZGlzcGxheSBhIG1lc3NhZ2UgZm9yIHRoZSB1c2VyXHJcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCB8fCBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJDcsOpZXIgdW4gbm91dmVhdSBzdG9wIHBvdXIgY2UgdHJpcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHBhcmVudCBBY3RpdmF0ZWRSb3V0ZSBvZiB0aGlzIHJvdXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyZW50LnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlwSWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZHUgcGFyZW50IHBvdXIgc2F1dmVyIHN0b3AgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChjcmVhdGVGb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IDxJU3RvcD5jcmVhdGVGb3JtLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3N0U3RvcFNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RvcFNlcnZpY2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFNlcnZpY2UucG9zdFN0b3BCeUlkQVBJKHRoaXMudHJpcElkLCB0aGlzLnNlbGVjdGVkU3RvcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIHNhdmVkIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmFycml2YWwgPSBkYXRhLmFycml2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubGVhdmluZyA9IGRhdGEubGVhdmluZztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYW50IHNhdmUgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9ICF0aGlzLmlzQ3JlYXRlRm9ybTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBkZXN0cm95XCIpO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVN0b3Age1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFycml2YWw6IERhdGU7XHJcbiAgICBsZWF2aW5nOiBEYXRlO1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3AgaW1wbGVtZW50cyBJU3RvcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXJyaXZhbDogRGF0ZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsZWF2aW5nOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNpdHk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yZGVyOiBudW1iZXIpIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxyXFxuICAgIDxoND57e21lc3NhZ2V9fTwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIiAqbmdJZj1cXFwiaXNTaG93Rm9ybVxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFN0b3AoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPGZvcm0gI2Zvcm1DcmVhdGVTdG9wPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcm1DcmVhdGVTdG9wKVxcXCIgKm5nSWY9XFxcImlzQ3JlYXRlRm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5Ob208L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5uYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhcnJpdmFsXFxcIj5EYXRlIEFycml2w6llPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwiYXJyaXZhbFxcXCIgaWQ9XFxcImFycml2YWxcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxlYXZpbmdcXFwiPkRhdGUgRMOpcGFydDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImxlYXZpbmdcXFwiIGlkPVxcXCJsZWF2aW5nXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjaXR5XFxcIj5WaWxsZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNpdHlcXFwiIGlkPVxcXCJjaXR5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmNpdHlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXFxcIj5Bam91dGVyPC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4uL3N0b3Avc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wLWVkaXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRTdG9wQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2hvd1BvcFVwOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwZGV0YWlsOiBUcmlwRGV0YWlsU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlciwgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL1wiKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBQT1AgVVAgTk9UIFdPUktJTj8hIHRlc3QgaW4gYW5vdGhlciBwcm9qZWN0XHJcbiAgICBvblRvZ2dsZVBvcFVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gIXRoaXMuc2hvd1BvcFVwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd1BvcFVwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9wc0J5SWQoaWQ6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBuZXcgVHJpcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlYXZpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlIHN0b3AgYnkgaXRzIGlkXHJcbiAgICBkZWxldGVTdG9wKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IGlkO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwic3RvcEFkbWluXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0aGUgZGlzcGxheSBsaXN0IGFmdGVyIGRlbGV0aW5nIGEgc3RvcC5cclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9wc0J5SWQodGhpcy5zZWxlY3RlZFRyaXAuaWQpO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMiBkZWxldGVCbG9ja1xcXCI+XFxyXFxuICAgIDxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHVsIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8bGk+PGgzPlN0b3BzPC9oMz48L2xpPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgc3RvcCBvZiBzZWxlY3RlZFRyaXA/LnN0b3BzXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxhIChjbGljayk9XFxcIm9uVG9nZ2xlUG9wVXAoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7c3RvcD8ubmFtZX19LCB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX0sIHt7c3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fSwge3tzdG9wPy5jaXR5fX1cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZVN0b3Aoc3RvcC5pZClcXFwiPlN1cHByaW1lcjwvYT48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5wdXQgcGljdHVyZSBoZXJlPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdG9wZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInNwYW57XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkgPiBkaXY6bGFzdC1vZi10eXBle1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZWxldGVCbG9ja3tcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxucGFkZGluZzogMzBweDtcXHJcXG5jb2xvcjogIzc4Nzg3ODtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmN2Y4O1xcclxcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG53aWR0aDogMTAwcHg7XFxyXFxuaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgPiB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1Ib3VyTG9jYWwnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRIb3VyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gZGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLDUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbVRyaXBEYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERhdGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50KGQpLmZvcm1hdCgnTEwnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMwMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9