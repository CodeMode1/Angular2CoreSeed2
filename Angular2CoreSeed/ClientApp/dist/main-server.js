(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var forms_1 = __webpack_require__(7);
	// login
	var login_component_1 = __webpack_require__(8);
	var auth_guard_1 = __webpack_require__(17);
	// main components
	var app_component_1 = __webpack_require__(18);
	var navmenu_component_1 = __webpack_require__(23);
	var home_component_1 = __webpack_require__(27);
	var delete_component_1 = __webpack_require__(29);
	var weather_component_1 = __webpack_require__(34);
	var weatherform_component_1 = __webpack_require__(40);
	var weatherdetail_component_1 = __webpack_require__(44);
	var weatherconstraints_component_1 = __webpack_require__(46);
	var weatherconstraint_component_1 = __webpack_require__(48);
	var trip_component_1 = __webpack_require__(51);
	var tripdetail_component_1 = __webpack_require__(56);
	var tripuser_component_1 = __webpack_require__(61);
	var stop_component_1 = __webpack_require__(65);
	var stopedit_component_1 = __webpack_require__(68);
	// services
	var login_service_1 = __webpack_require__(10);
	var trip_service_1 = __webpack_require__(52);
	var tripdetail_service_1 = __webpack_require__(32);
	var stop_service_1 = __webpack_require__(31);
	var weather_service_1 = __webpack_require__(30);
	var weatherconstraint_service_1 = __webpack_require__(49);
	// pipes, external modules
	var kendo_angular_dateinputs_1 = __webpack_require__(72);
	var weatherform_pipe_1 = __webpack_require__(73);
	var trip_pipe_1 = __webpack_require__(74);
	var kendo_angular_dialog_1 = __webpack_require__(75);
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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 8 */
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
	var core_1 = __webpack_require__(3);
	var User_1 = __webpack_require__(9);
	var login_service_1 = __webpack_require__(10);
	var router_1 = __webpack_require__(6);
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
	        template: __webpack_require__(16)
	    }),
	    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 9 */
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
/* 10 */
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
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
/* 11 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/do");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h3>Login</h3>\r\n    <form #login=\"ngForm\" (ngSubmit)=\"onSubmit(login)\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"userName\">User Name</label>\r\n            <input type=\"text\" name=\"userName\" id=\"userName\" class=\"form-control\" [(ngModel)]=\"user.userName\" required />\r\n            <div *ngIf=\"login.submitted && !user.userName.valid\" class=\"help-block\">Username est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Courriel</label>\r\n            <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" required />\r\n            <div *ngIf=\"login.submitted && !user.email.valid\" class=\"help-block\">Email est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Mot Passe</label>\r\n            <input type=\"text\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required />\r\n            <div *ngIf=\"login.submitted && !user.password.valid\" class=\"help-block\">Mot Passe est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-lg btn-success\">Se Loguer</button>\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 17 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var login_service_1 = __webpack_require__(10);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(19),
	        styles: [__webpack_require__(20)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(21);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n\n    a{\r\n        cursor: pointer;\r\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(24),
	        styles: [__webpack_require__(25)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2CoreSeed</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li routerLinkActive=\"link-active\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\r\n                    <a>\r\n                        <span class=\"glyphicon glyphicon-user\"></span> Sign Up\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Sign In\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/trips']\">\n                        <span class=\"glyphicon glyphicon-road\"></span> Trips\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/weathers']\">\r\n                        <span class=\"glyphicon glyphicon-th-list\"></span> Weathers\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/weatherConstraints']\">\n                        <span class=\"glyphicon glyphicon-star-empty\"></span> Weather Constraints\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-out\"></span> LogOut\r\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(26);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\na{\r\n    cursor: pointer;\r\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 27 */
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
	var core_1 = __webpack_require__(3);
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
	        template: __webpack_require__(28)
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello World</h1>\n\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 29 */
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
	var core_1 = __webpack_require__(3);
	var weather_service_1 = __webpack_require__(30);
	var stop_service_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(6);
	__webpack_require__(15);
	var tripdetail_service_1 = __webpack_require__(32);
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
	        template: __webpack_require__(33)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService,
	        router_1.ActivatedRoute, stop_service_1.StopService, tripdetail_service_1.TripDetailService])
	], DeleteComponent);
	exports.DeleteComponent = DeleteComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	var login_service_1 = __webpack_require__(10);
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
	var core_1 = __webpack_require__(3);
	var login_service_1 = __webpack_require__(10);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
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
	var core_1 = __webpack_require__(3);
	var login_service_1 = __webpack_require__(10);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
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
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"isShowNotif\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <p>Action effectuée.</p>        \r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"idToDelete\">\r\n        <h3>Succès supprimer #</h3>\r\n        <h4>{{idToDelete}}</h4>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"hideNotif()\">Hide</button>\r\n</div>\r\n\r\n<kendo-dialog *ngIf=\"isDelete\" (close)=\"cancelDelete()\">\r\n    <kendo-dialog-titlebar>\r\n        <div style=\"font-size: 18px; line-height: 1.3em;\">\r\n            <span class=\"k-icon k-i-warning\"></span> Supprimer donnée\r\n        </div>\r\n    </kendo-dialog-titlebar>\r\n    <p style=\"margin: 30px; text-align: center;\">Action irrévocable.</p>\r\n\r\n    <kendo-dialog-actions>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"cancelDelete()\">Cancel</button>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"onDeleteData()\">Delete</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

/***/ },
/* 34 */
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(6);
	var weather_1 = __webpack_require__(35);
	var weather_service_1 = __webpack_require__(30);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	var moment = __webpack_require__(36);
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
	        template: __webpack_require__(37),
	        styles: [__webpack_require__(38)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute,
	        weather_service_1.WeatherService, router_1.Router])
	], WeatherComponent);
	exports.WeatherComponent = WeatherComponent;


/***/ },
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Create new Weather</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n                <th>Delete</th>\r\n                <th>Edit</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\">Delete</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\">Edit</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(39);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 40 */
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
	var core_1 = __webpack_require__(3);
	var weather_1 = __webpack_require__(35);
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
	        template: __webpack_require__(41),
	        styles: [__webpack_require__(42)]
	    }),
	    __metadata("design:paramtypes", [])
	], WeatherFormComponent);
	exports.WeatherFormComponent = WeatherFormComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"tempC\" name=\"tempC\" [(ngModel)]=\"weatherToSave.tempC\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(43);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 0.5rem solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 0.5rem solid #a94442; /* red */\r\n}\r\n\r\n.k-invalid {\r\n  color: red;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n/*#date, #date > table, #data > div.k-content.k-scrollable, kendo-calendar-monthview, table.k-calendar-weekdays{\r\n    padding: 0;\r\n    width: 100%;\r\n}*/\r\n\r\n/*.k-calendar.k-calendar-infinite {\r\n    padding: 0;\r\n}\r\n\r\n.form-group table{\r\n    width: 100%;\r\n}\r\n\r\nform-group div.k-content.k-scrollable{\r\n    width: 100%;\r\n}\r\n\r\nkendo-calendar-monthview.k-calendar-monthview{\r\n    width: 100%;\r\n}*/", ""]);
	
	// exports


/***/ },
/* 44 */
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
	var core_1 = __webpack_require__(3);
	var weather_service_1 = __webpack_require__(30);
	var router_1 = __webpack_require__(6);
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
	        template: __webpack_require__(45)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
	], WeatherDetailComponent);
	exports.WeatherDetailComponent = WeatherDetailComponent;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Weather Detail</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

/***/ },
/* 46 */
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
	var core_1 = __webpack_require__(3);
	var weather_service_1 = __webpack_require__(30);
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
	        template: __webpack_require__(47)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService])
	], WeatherConstraintsComponent);
	exports.WeatherConstraintsComponent = WeatherConstraintsComponent;


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<h2>Weathers</h2>\r\n\r\n<h3>Choose a weather to get weather constraints from : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

/***/ },
/* 48 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var weatherconstraint_service_1 = __webpack_require__(49);
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
	        template: __webpack_require__(50)
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, weatherconstraint_service_1.WeatherConstraintsService])
	], WeatherConstraintComponent);
	exports.WeatherConstraintComponent = WeatherConstraintComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
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
/* 50 */
/***/ function(module, exports) {

	module.exports = "<h2>Statistiques pour la température : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Wind km/h\r\n                <!--<img src=\"../../../../wwwroot/dist/img/wind.png\"/>-->\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n            <th>\r\n                Température\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                <p>Temp : {{constraint?.weather.name}}</p>\r\n                <p>Heure : {{constraint?.weather.hour | fmHourLocal }}</p>\r\n                <p>Temp °C : {{constraint?.weather.tempC}}</p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

/***/ },
/* 51 */
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
	var core_1 = __webpack_require__(3);
	var trip_service_1 = __webpack_require__(52);
	var login_service_1 = __webpack_require__(10);
	var router_1 = __webpack_require__(6);
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
	        template: __webpack_require__(53),
	        styles: [__webpack_require__(54)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService, login_service_1.LoginService,
	        router_1.ActivatedRoute])
	], TripComponent);
	exports.TripComponent = TripComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	var login_service_1 = __webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
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
/* 53 */
/***/ function(module, exports) {

	module.exports = "<h1>Bienvenue {{userName}}</h1>\r\n<a class=\"btn btn-sm btn-success\" [routerLink]=\"['/trips/perso']\">Voir mes trips</a>\r\n<router-outlet></router-outlet>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<h3>Disponibles présentement</h3>\r\n\r\n<div *ngFor=\"let trip of trips\" class=\"infosTrip col-md-12\">\r\n    <ul>\r\n        <li>{{trip?.name}}</li>\r\n        <li>{{trip?.country}}</li>\r\n        <li>{{trip?.continent}}</li>\r\n    </ul>\r\n    <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n    <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n</div>\r\n\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(55);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.infosTrip{\r\n    width: auto;\r\n    height: auto;\r\n    background-color:#9de6ff;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    margin: 1%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 56 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var tripdetail_service_1 = __webpack_require__(32);
	var trip_1 = __webpack_require__(57);
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
	        template: __webpack_require__(58),
	        styles: [__webpack_require__(59)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripDetailComponent);
	exports.TripDetailComponent = TripDetailComponent;


/***/ },
/* 57 */
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
/* 58 */
/***/ function(module, exports) {

	module.exports = "<h2>Détails Trip</h2>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><button class=\"btn btn-sm btn-success\" (click)=\"buyTrip(selectedTrip)\" [disabled]=\"isBought\">Ajouter à mes trips</button></li>\r\n    <li><h4>{{isBoughtMessage}}</h4></li>\r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>Créer un nouveau stop<span><a [routerLink]=\"['stop']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-arrow-up\"></i></a></span></li>\r\n    <li><a [routerLink]=\"['edit']\">Éditer Trip</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"col-md-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>\r\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(60);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\nspan{\r\n    padding: 1%;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 61 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var tripdetail_service_1 = __webpack_require__(32);
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
	        template: __webpack_require__(62),
	        styles: [__webpack_require__(63)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripUserComponent);
	exports.TripUserComponent = TripUserComponent;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<h2>{{userMessage}}</h2>\r\n\r\n<delete [isDelete]=\"inputDelete\" [tripToDelete]=\"selectedTrip\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<h3>Mes Trips</h3>\r\n<div *ngFor=\"let trip of mesTrips\" class=\"col-md-12\">\r\n    <ul class=\"col-md-3\">\r\n        <li># Réservation : {{trip?.id}}</li>\r\n        <li>Nom : {{trip?.name}}</li>\r\n        <li>Date de départ : {{trip?.leaving | fmTripDate}}</li>\r\n        <li>Pays : {{trip?.country}}</li>\r\n        <li>Continent : {{trip?.continent}}</li>\r\n        <li><a class=\"btn btn-md btn-danger\" (click)=\"deleteTrip(trip)\">Supprimer</a></li>\r\n    </ul>\r\n\r\n    <div class=\"col-md-9\">\r\n        <ul *ngFor=\"let stop of trip.stops; let i = index\">\r\n            <li>Stop # {{i + 1}}</li>\r\n            <li>Nom : {{stop?.name}}</li>\r\n            <li>Date d'arrivée : {{stop?.arrival | fmTripDate}}</li>\r\n            <li>Date de départ : {{stop?.leaving | fmTripDate}}</li>\r\n            <li>Ville : {{stop?.city}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<h2><i class=\"fa fa-arrow-up\"></i></h2>\r\n<a class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">Back</a>\r\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(64);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n    float: left;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 1%;\r\n}\r\n\r\ndiv > ul{\r\n    background-color:ivory;\r\n}\r\n\r\ndiv div > ul{\r\n    background-color:aliceblue;\r\n    margin: 0.5%;\r\n}", ""]);
	
	// exports


/***/ },
/* 65 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var stop_1 = __webpack_require__(66);
	var stop_service_1 = __webpack_require__(31);
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
	        template: __webpack_require__(67)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
	        stop_service_1.StopService])
	], StopComponent);
	exports.StopComponent = StopComponent;


/***/ },
/* 66 */
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
/* 67 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\"/>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-lg btn-success\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ },
/* 68 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var tripdetail_service_1 = __webpack_require__(32);
	var stop_service_1 = __webpack_require__(31);
	var trip_1 = __webpack_require__(57);
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
	        template: __webpack_require__(69),
	        styles: [__webpack_require__(70)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router, stop_service_1.StopService])
	], EditStopComponent);
	exports.EditStopComponent = EditStopComponent;


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\">\r\n        <div class=\"col-md-6\">\r\n            <span><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n            <a (click)=\"onTogglePopUp()\">\r\n                {{stop?.name}}, {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}}, {{stop?.city}}\r\n            </a>\r\n  \r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n            <span><a class=\"btn btn-sm btn-danger\" (click)=\"deleteStop(stop.id)\">Supprimer</a></span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span>put picture here</span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(71);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.content {\r\npadding: 30px;\r\ncolor: #787878;\r\nbackground-color: #fcf7f8;\r\nborder: 1px solid rgba(0,0,0,.05);\r\n}\r\n\r\n.popup {\r\nwidth: 100px;\r\nheight: 70px;\r\n}\r\n\r\n.popup > ul {\r\n    list-style-type: decimal;\r\n    text-align: left;\r\n}", ""]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("@progress/kendo-angular-dateinputs");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var moment = __webpack_require__(36);
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
/* 75 */
/***/ function(module, exports) {

	module.exports = require("@progress/kendo-angular-dialog");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFkZTc0OWNlNzMxZDhhZmMxZDEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL1VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3M/Y2JkOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5jc3M/NTA1MiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3M/ZDYyMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZ1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxN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aUM7QUFRakMsS0FBYSxRQUFRO0tBQXJCO0tBTUEsQ0FBQztLQUxHLDRCQUFTLEdBQVQsVUFBVSxJQUFTLEVBQUUsSUFBVTtTQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDLENBQUM7S0FDTCxlQUFDO0FBQUQsRUFBQztBQU5ZLFNBQVE7S0FMcEIsV0FBSSxDQUFDO1NBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDbEIsSUFBSSxFQUFFLEtBQUs7TUFDZCxDQUFDO0lBRVcsUUFBUSxDQU1wQjtBQU5ZLDZCQUFROzs7Ozs7O0FDVHJCLDREIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFkZTc0OWNlNzMxZDhhZmMxZDEiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gbG9naW5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQnO1xuXG4vLyBtYWluIGNvbXBvbmVudHNcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEZWxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFRyaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJpcFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcblxuLy8gcGlwZXMsIGV4dGVybmFsIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcbi8vaW1wb3J0IHsgUG9wdXBNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cCc7XHJcbi8vaW1wb3J0IHsgTG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci0yLWxvY2FsLXN0b3JhZ2UnO1xyXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBEZWxldGVDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJGb3JtQ29tcG9uZW50LFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50LFxuICAgICAgICBUcmlwQ29tcG9uZW50LFxuICAgICAgICBUcmlwRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUcmlwVXNlckNvbXBvbmVudCxcbiAgICAgICAgRWRpdFN0b3BDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICAvLyBwaXBlc1xuICAgICAgICBGb3JtYXRIb3VyLFxuICAgICAgICBUcmlwRGF0ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBUcmlwU2VydmljZSxcbiAgICAgICAgVHJpcERldGFpbFNlcnZpY2UsXG4gICAgICAgIFN0b3BTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyU2VydmljZSxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzJywgY29tcG9uZW50OiBUcmlwQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzL3BlcnNvJywgY29tcG9uZW50OiBUcmlwVXNlckNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sICAgICAgICAgIFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzLzppZCcsIGNvbXBvbmVudDogVHJpcERldGFpbENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3N0b3AnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdlZGl0JywgY29tcG9uZW50OiBFZGl0U3RvcENvbXBvbmVudCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnd2VhdGhlcnMnLCBjb21wb25lbnQ6IFdlYXRoZXJDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogV2VhdGhlckRldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdkZXRhaWwvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH1cbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMnLCBjb21wb25lbnQ6IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnd2VhdGhlckNvbnN0cmFpbnRzLzppZCcsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IDxJVXNlcj5mb3JtLnZhbHVlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ2luQVBJKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaXBwZWRUb2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGxvZ2luIHVzZXIgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lID0gdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4gPSBzdHJpcHBlZFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IHNlcnZpY2UgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSW1wb3NzaWJsZSBkZSBsb2d1ZXIgbGUgdXNlciA6IFwiICsgdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbG9nIHVzZXIgIDogXCIgKyB0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlck5hbWU6IHN0cmluZywgcHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nKSB7fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL1VzZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbi8vaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItMi1sb2NhbC1zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXJsTG9naW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsTG9naW4gPSAnYXBpL2F1dGgvdG9rZW4nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VyTmFtZSAhPSBudWxsICYmIHR5cGVvZih0aGlzLnVzZXJOYW1lKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkFQSSh1c2VyOiBJVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxMb2dpbiwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgPGgzPkxvZ2luPC9oMz5cXHJcXG4gICAgPGZvcm0gI2xvZ2luPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGxvZ2luKVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VyTmFtZVxcXCI+VXNlciBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIGlkPVxcXCJ1c2VyTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIudXNlck5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnVzZXJOYW1lLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+VXNlcm5hbWUgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkNvdXJyaWVsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLmVtYWlsLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RW1haWwgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPk1vdCBQYXNzZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5wYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPk1vdCBQYXNzZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiPlNlIExvZ3VlcjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxpICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1wdWxzZSBmYS0zeCBmYS1md1xcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlcnJvclxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvcn19PC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkxvZ2luU2VydmljZS50b2tlbiAhPSBudWxsICYmIHR5cGVvZih0aGlzLkxvZ2luU2VydmljZS50b2tlbiAhPSBcInVuZGVmaW5lZFwiKSkge1xyXG4gICAgICAgICAgICAvLyBsb2dnZWQgaW4gc28gcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJndWFyZCA6IFwiICsgdGhpcy5Mb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJndWFyZCBcIiArIHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9sb2dpblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcblxcbiAgICBhe1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlcnMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdFxcXCI+PC9zcGFuPiBXZWF0aGVyc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93ZWF0aGVyQ29uc3RyYWludHMnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eVxcXCI+PC9zcGFuPiBXZWF0aGVyIENvbnN0cmFpbnRzXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFxcXCI+PC9zcGFuPiBMb2dPdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKXt9XG5cbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvIFdvcmxkPC9oMT5cXG5cXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXG48dWw+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcbjwvdWw+XFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXG48dWw+XFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcbjwvdWw+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4uL3N0b3Avc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgVHJpcCwgSVRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWxldGUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGVsZXRlLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpc0RlbGV0ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb0RlbGV0ZUlkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBvYmplY3RUb0RlbGV0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdHJpcFRvRGVsZXRlOiBJVHJpcDtcclxuICAgIEBPdXRwdXQoKSBkZWxldGVTdWNjZXNzOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBwdWJsaWMgaWRUb0RlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd05vdGlmOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSwgcHVibGljIF90cmlwRGV0YWlsU2VydmljZTogVHJpcERldGFpbFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkVG9EZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGUpIHtcclxuICAgICAgICAgICAgLy8gcG9wIHVwIG9wZW5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbiBkZWxldGUgOiBcIiArIHRoaXMuaXNEZWxldGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTm90aWYoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsZXRlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmlkVG9EZWxldGUgPSB0aGlzLndlYXRoZXJUb0RlbGV0ZUlkO1xyXG4gICAgICAgIGlmICh0aGlzLm9iamVjdFRvRGVsZXRlID09IFwic3RvcEFkbWluXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVTdG9wQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9iamVjdFRvRGVsZXRlID09IFwid2VhdGhlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlcldlYXRoZXJCeUlkKHRoaXMuaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdFRvRGVsZXRlID09IFwidXNlcnRyaXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVVzZXJUcmlwKHRoaXMudHJpcFRvRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbERlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcEJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0b3BTZXJ2aWNlLmRlbGV0ZVN0b3BCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgc3RvcCBpbiBkZWxldGUgY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZXJXZWF0aGVyQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZGVsZXRlV2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIERFTEVURSBpbiBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVXNlclRyaXAodHJpcDogSVRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwRGV0YWlsU2VydmljZS5kZWxldGVUcmlwQVBJKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCB0cmlwIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coXCJlcnJvciBkZWxldGluZyB0cmlwXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsV2VhdGhlcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxXZWF0aGVyID0gXCJhcGkvd2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIGFsbCB3ZWF0aGVyIG9iamVjdHNcclxuICAgIGdldEFsbFdlYXRoZXJzQVBJKCk6IE9ic2VydmFibGU8SVdlYXRoZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcltdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUOiAgICAxIHdlYXRoZXIgb2JqZWN0XHJcbiAgICBwb3N0V2VhdGhlckFQSSh3ZWF0aGVyOiBXZWF0aGVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh3ZWF0aGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUFVUOiAgICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcHV0V2VhdGhlckFQSSh3ZWF0aGVyOiBXZWF0aGVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh3ZWF0aGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybFdlYXRoZXIsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGJ5IGlkXHJcbiAgICBnZXRXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgZGV0YWlscyBieSBuYW1lXHJcbiAgICBnZXRXZWF0aGVyQnlOYW1lQVBJKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL0J5TmFtZS9cIiArIG5hbWUpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgaWRcclxuICAgIGRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFdlYXRoZXIgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJzdWNjZXMgZGVsZXRlIHdlYXRoZXIsIHJlc3Agd2UgZ2V0IGluIHNlcnZpY2UgOiBcIiArIGVycm9yKSkgICAgICBcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuL3N0b3AnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsU3RvcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsU3RvcCA9ICdhcGkvc3RvcCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVycygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RvcEJ5SWRBUEkoaWQ6IG51bWJlciwgc3RvcDogU3RvcCk6IE9ic2VydmFibGU8SVN0b3A+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdG9wKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJU3RvcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcEJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxTdG9wICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhcImRlbGV0ZSBzdG9wIHdpdGggaWQgOiBcIiArIGlkKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRlIHN0b3AgXCIgKyBlcnJvcikpXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsVHJpcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9IFwiYXBpL3RyaXBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgIDogZ2V0IHRyaXAgYnkuXHJcbiAgICBnZXRUcmlwQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIGdldCB0cmlwcyBmb3IgbG9nZ2VkIGluIHVzZXIuXHJcbiAgICBnZXRVc2VyVHJpcEFQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyBcIi91c2VyXCIsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1Q6ICAgIDEgdHJpcCBvYmplY3QuXHJcbiAgICBwb3N0VHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodHJpcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsVHJpcCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXA+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXBBUEkodHJpcDogVHJpcCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgdHJpcC5pZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8YW55PmNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJpc1Nob3dOb3RpZlxcXCIgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXN1Y2Nlc3NcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgIDxwPkFjdGlvbiBlZmZlY3R1w6llLjwvcD4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgKm5nSWY9XFxcImlkVG9EZWxldGVcXFwiPlxcclxcbiAgICAgICAgPGgzPlN1Y2PDqHMgc3VwcHJpbWVyICM8L2gzPlxcclxcbiAgICAgICAgPGg0Pnt7aWRUb0RlbGV0ZX19PC9oND5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImhpZGVOb3RpZigpXFxcIj5IaWRlPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGtlbmRvLWRpYWxvZyAqbmdJZj1cXFwiaXNEZWxldGVcXFwiIChjbG9zZSk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy10aXRsZWJhcj5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDEuM2VtO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPiBTdXBwcmltZXIgZG9ubsOpZVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwva2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICA8cCBzdHlsZT1cXFwibWFyZ2luOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5BY3Rpb24gaXJyw6l2b2NhYmxlLjwvcD5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxEZWxldGUoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcIm9uRGVsZXRlRGF0YSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctYWN0aW9ucz5cXHJcXG48L2tlbmRvLWRpYWxvZz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7IFdlYXRoZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBpbnB1dERlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpbnB1dElkRGVsZXRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2VhdGhlcnM6IFdlYXRoZXJbXTtcclxuICAgIHB1YmxpYyB3ZWF0aGVyMTogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2hvd0Zvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0cmVXZWF0aGVyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZWRpdEZvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZm1EYXRlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aXRyZVdlYXRoZXIgPSBcIldlYXRoZXIgQ2hlY2tcIjtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcclxuICAgICAgICAvLyBtb21lbnQganMgZm9ybWF0IGEgZGF0ZSB3aXRoIGEgc3RyaW5nIGZvcm1hdCwgcmV0dXJucyBhIGRhdGUuXHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICB0aGlzLmZtRGF0ZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mbURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNsYXNzIHdlYXRoZXIgb2JqZWN0IHRvIGJpbmQgdG8uXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9IG5ldyBXZWF0aGVyKDEsIFwiQXV0b21uV2VhdGhlclwiLCB0aGlzLmZtRGF0ZSwgMTQsIFwiVGVtcMOpcmF0dXJlIEF1dG9tbmVcIik7XHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIGdldCB3ZWF0aGVyIG9iamVjdHNcclxuICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUIDogYWxsIHdlYXRoZXIgb2JqZWN0cyBmcm9tIGRiXHJcbiAgICBnZXRBbGxXZWF0aGVycygpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsV2VhdGhlcnNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHdlYXRoZXIgb2JqZXRzIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVycyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIGR1IHNlcnZpY2UgOiAgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dlYXRoZXJGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSAhdGhpcy5zaG93Rm9ybTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaG93Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29EZWxldGUoaWRUb0RlbGV0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBnbyBkZWxldGUgOiBcIiArIGlkVG9EZWxldGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IGlkVG9EZWxldGU7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJ3ZWF0aGVyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSB3ZWF0aGVyIGNsaWVudCBzaWRlIDpcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVycy5zcGxpY2UodGhpcy5pbnB1dElkRGVsZXRlLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlIGEganMgb2JqZWN0ICAodXN1YWxseSBvYmplY3Qgb3IgYXJyYXkpIGNvbnZlcnQgaXQgdG8gSlNPTiBzdHJpbmcgbm90YXRpb25cclxuICAgIC8vIHRvIGdldCBKU09OIG9iamVjdCB1c2UgcGFyc2UgbWV0aG9kXHJcbiAgICBnZXQgZGlhZ25vc3RpYygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdGhlIHBheWxvYWQgd2VhdGhlciBvYmplY3QgZnJvbSBjaGlsZHJlbiBjb21wb25lbnQgd2VhdGhlcmZvcm1cclxuICAgIHBvc3RXZWF0aGVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSAkZXZlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgd2VhdGhlciB0byBwb3N0IDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBNZXRob2QgdG8gc2F2ZSBuZXcgd2VhdGhlciBvYmplY3RcclxuICAgICAgICB0aGlzLnNhdmVXZWF0aGVyKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXQgYSB3ZWF0aGVyXHJcbiAgICBlZGl0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gJGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdGluZyBhIHdlYXRoZXIgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyMSk7XHJcblxyXG4gICAgICAgIC8vIG1ldGhvZCB0byBlZGl0IGEgd2VhdGhlclxyXG4gICAgICAgIHRoaXMucHV0V2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlciB3aGVuIGNsaWNraW5nIGEgbGluayBvbiB3ZWF0aGVyIG9iamVjdHMgdGFibGUuXHJcbiAgICBnb0VkaXQod2VhdGhlcjogV2VhdGhlcikge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSB3ZWF0aGVyO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1QgOiBjYWxsIHRoZSBwb3N0IGFjdGlvbiBvbiBiYWNrZW5kIHRvIGNyZWF0ZSBuZXcgd2VhdGhlciBvYmplY3QuXHJcbiAgICBzYXZlV2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBDID0gZGF0YS50ZW1wQztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wZXJhdHVyZUYgPSBkYXRhLnRlbXBlcmF0dXJlRjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkIG5ldyB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRhdGEgaW4gdGhlIGJyb3dzZXIgdG8gZ2V0IGhlIG5ld2x5IHNhYmVkIHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgb2YgZGF0ZSBzZW50IGJhY2sgdG8gY2xpZW50IDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAodGhpcy53ZWF0aGVyMS5ob3VyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igc2F2aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucHV0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0ZWQgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZWRpdGluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuLi93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElXZWF0aGVyIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob3VyPzogRGF0ZTtcbiAgICB0ZW1wQz86IG51bWJlcjtcbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlRj86IG51bWJlcjtcbiAgICBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYXRoZXIgaW1wbGVtZW50cyBJV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaG91cj86IERhdGUsXG4gICAgICAgIHB1YmxpYyB0ZW1wQz86IG51bWJlcixcbiAgICAgICAgcHVibGljIHN1bW1hcnk/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0ZW1wZXJhdHVyZUY/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXSkgeyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPnt7dGl0cmVXZWF0aGVyfX08L2gxPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2hvd1dlYXRoZXJGb3JtKClcXFwiPkNyZWF0ZSBuZXcgV2VhdGhlcjwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd0Zvcm1cXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8d2VhdGhlci1mb3JtIFt3ZWF0aGVyVG9TYXZlXT1cXFwid2VhdGhlcjFcXFwiIChuZXdXZWF0aGVyKT1cXFwicG9zdFdlYXRoZXIoJGV2ZW50KVxcXCIgKGVkV2VhdGhlcik9XFxcImVkaXRXZWF0aGVyKCRldmVudClcXFwiIFttb2RlRWRpdF09XFxcImVkaXRGb3JtXFxcIj48L3dlYXRoZXItZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5Ib3VyIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXBDPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcCBGPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgd2VhdGhlciBvZiB3ZWF0aGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnZGV0YWlsJywgd2VhdGhlci5pZF1cXFwiPnt7d2VhdGhlcj8uaWR9fTwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBDfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5zdW1tYXJ5fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wZXJhdHVyZUZ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0RlbGV0ZSh3ZWF0aGVyLmlkKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2Npc3NvcnNcXFwiPkRlbGV0ZTwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPjxhIChjbGljayk9XFxcImdvRWRpdCh3ZWF0aGVyKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj5FZGl0PC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlPjwvZGVsZXRlPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2VhdGhlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRm9ybUNvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb1NhdmU6IFdlYXRoZXI7XHJcbiAgICBAT3V0cHV0KCkgbmV3V2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQE91dHB1dCgpIGVkV2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQElucHV0KCkgbW9kZUVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIG9uRWRpdDogYm9vbGVhbjtcclxuICAgIC8vZm9ybTE6IE5nRm9ybTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9uRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXdXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIHRoaXMuZWRXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIC8vdGhpcy5mb3JtMSA9IG5ldyBOZ0Zvcm0oW10sIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbiB2ZXV0IHNvdW1ldHRyZSBvbiBlZGl0LlxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbnZveWVyIGxlIHdlYXRoZXJmb3JtIG9iamVjdCBhdSB3ZWF0aGVyIGNvbXBvbmVudFxyXG4gICAgb25TdWJtaXQod2VhdGhlckZvcm06IE5nRm9ybSl7ICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZUVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lZFdlYXRoZXIuZW1pdCh0aGlzLndlYXRoZXJUb1NhdmUpO1xyXG4gICAgICAgICAgICAvLyByZXNldCBwb3VyIHJldG91cm5lciBtb2RlIGNyZWVyXHJcbiAgICAgICAgICAgIHRoaXMubW9kZUVkaXQgPSBmYWxzZTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdXZWF0aGVyLmVtaXQod2VhdGhlckZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAvLyByZXNldCBwb3VyIHJldG91cm5lciBtb2RlIGVkaXRlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgPGgxPldlYXRoZXIgRm9ybTwvaDE+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCh3ZWF0aGVyRm9ybSlcXFwiICN3ZWF0aGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCI+TmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUubmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImhvdXJcXFwiPkhvdXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGltZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImhvdXJcXFwiIG5hbWU9XFxcImhvdXJcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLmhvdXJcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRlbXBDXFxcIj5UZW1wICpDPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRlbXBDXFxcIiBuYW1lPVxcXCJ0ZW1wQ1xcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUudGVtcENcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN1bW1hcnlcXFwiPlN1bW1hcnk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1bW1hcnlcXFwiIG5hbWU9XFxcInN1bW1hcnlcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnN1bW1hcnlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZCB8fCBtb2RlRWRpdFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwibW9kZUVkaXRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIXdlYXRoZXJGb3JtLnZhbGlkXFxcIj5FZGl0PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhc3VibWl0dGVkXFxcIj5cXHJcXG4gICAgICAgIDxoMj5Zb3Ugc3VibWl0dGVkIHRoZSBmb2xsb3dpbmc6PC9oMj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPk5hbWU8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSAgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPkhvdXIgQU0vUE08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5UZW1wZXJhdHVyZSAqQzwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBDfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+U3VtbWFyeTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnN1bW1hcnl9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5UZW1wZXJhdHVyZSBGPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUudGVtcGVyYXR1cmVGfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXFxyXFxufVxcclxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmstaW52YWxpZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi8qI2RhdGUsICNkYXRlID4gdGFibGUsICNkYXRhID4gZGl2LmstY29udGVudC5rLXNjcm9sbGFibGUsIGtlbmRvLWNhbGVuZGFyLW1vbnRodmlldywgdGFibGUuay1jYWxlbmRhci13ZWVrZGF5c3tcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXFxyXFxuXFxyXFxuLyouay1jYWxlbmRhci5rLWNhbGVuZGFyLWluZmluaXRlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLWdyb3VwIGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxua2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LmstY2FsZW5kYXItbW9udGh2aWV3e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJEZXRhaWxDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG1lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFdlYXRoZXJCeWRJZCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJBdWN1bnMgZMOpdGFpbHMgw6AgYWZmaWNoZXJcIjtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2VhdGhlckJ5ZElkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYWxsIGdldERldGFpbHMgbWV0aG9kIGluIHRoZSBuc2VydmljZVxyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHdlYXRoZXIgYnkgaWQgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlciA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW50IGdldCBkZXRhaWxzIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPnt7bWVzc2FnZURldGFpbHN9fTwvaDI+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlclxcXCI+XFxyXFxuICAgIDxoMT5XZWF0aGVyIERldGFpbDwvaDE+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5Ib3VyIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXBDPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcCBGPC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LmlkfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5ob3VyIHwgZm1Ib3VyTG9jYWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBDfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5zdW1tYXJ5fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wZXJhdHVyZUZ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1jb25zdHJhaW50cycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgd2VhdGhlcnM6IFdlYXRoZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0QWxsV2VhdGhlcnNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWF0aGVycyA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5XZWF0aGVyczwvaDI+XFxyXFxuXFxyXFxuPGgzPkNob29zZSBhIHdlYXRoZXIgdG8gZ2V0IHdlYXRoZXIgY29uc3RyYWludHMgZnJvbSA6IDwvaDM+XFxyXFxuXFxyXFxuPHVsPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgd2VhdGhlciBvZiB3ZWF0aGVyc1xcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlt3ZWF0aGVyLmlkXVxcXCI+e3t3ZWF0aGVyPy5uYW1lfX08L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJhaW50czogQ29uc3RyYWludFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3dlYXRoZXJDb25zdHJhaW50U2VydmljZTogV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uc3RyYWludHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50cygpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldENvbnN0cmFpbnRzQVBJKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgdGhlIGNvbnN0cmFpbnRzIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIGR1IHNlcnZldXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZWF0aGVyQ29uc3RyYWludHMnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlcmNvbnN0cmFpbnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50c0FQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnYXBpL3dlYXRoZXIvJyArIGlkICsgJy9jb25zdHJhaW50cycpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3A6IFJlc3BvbnNlKSA9PiA8SUNvbnN0cmFpbnRbXT5yZXNwLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+U3RhdGlzdGlxdWVzIHBvdXIgbGEgdGVtcMOpcmF0dXJlIDogIyB7e3RoaXMuaWR9fTwvaDI+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgV2luZCBrbS9oXFxyXFxuICAgICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cXFwiLi4vLi4vLi4vLi4vd3d3cm9vdC9kaXN0L2ltZy93aW5kLnBuZ1xcXCIvPi0tPlxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBHdXN0IGttL2hcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgSHVtaWRpdHkgJVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gUmlzaW5nIEFNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFN1biBTZXQgUE1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ2xlYXJcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgRmVlbHMgTGlrZSDCsENcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgVGVtcMOpcmF0dXJlXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8ud2luZH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZ3VzdH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaHVtaWRpdHl9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LnN1blJpc2luZyB8IGZtVHJpcERhdGV9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LnN1blNldCB8IGZtVHJpcERhdGV9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LmNsZWFyfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5mZWVsc0xpa2V9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8cD5UZW1wIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLm5hbWV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+SGV1cmUgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIuaG91ciB8IGZtSG91ckxvY2FsIH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8cD5UZW1wIMKwQyA6IHt7Y29uc3RyYWludD8ud2VhdGhlci50ZW1wQ319PC9wPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXFxyXFxuXFxyXFxuPGJ1dHRvbiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiPkJhY2s8L2J1dHRvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB0cmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHRpdHJlVHJpcDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMudGl0cmVUcmlwID0gXCJMZXMgRm9yZmFpdHMgVm95YWdlc1wiO1xyXG4gICAgICAgIHRoaXMudHJpcHMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBnZXQgbWV0aG9zIHN1ciBzZXJ2aWNlLlxyXG4gICAgZ2V0QWxsVHJpcHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEFsbFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9ICdhcGkvdHJpcCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgQWxsIHRyaXBzIG9iamVjdHMuXHJcbiAgICBnZXRBbGxUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5CaWVudmVudWUge3t1c2VyTmFtZX19PC9oMT5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy90cmlwcy9wZXJzbyddXFxcIj5Wb2lyIG1lcyB0cmlwczwvYT5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuPGgyPnt7dGl0cmVUcmlwfX08L2gyPlxcclxcbjxoMz5EaXNwb25pYmxlcyBwcsOpc2VudGVtZW50PC9oMz5cXHJcXG5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IHRyaXAgb2YgdHJpcHNcXFwiIGNsYXNzPVxcXCJpbmZvc1RyaXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpPnt7dHJpcD8ubmFtZX19PC9saT5cXHJcXG4gICAgICAgIDxsaT57e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+e3t0cmlwPy5jb250aW5lbnR9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDxwPkRhdGUgZGUgRMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvcD5cXHJcXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiW3RyaXAuaWRdXFxcIj5Wb2lyIFRyaXA8L2E+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzlkZTZmZjtcXHJcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9zVHJpcDpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuICAgIHB1YmxpYyBpc0JvdWdodDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB1c2VyVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBpc0JvdWdodE1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwZGV0YWlsOiBUcmlwRGV0YWlsU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmlzQm91Z2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyVHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzQm91Z2h0TWVzc2FnZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpcEJ5SWQoaWQ6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN0b3BzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmlwc0ZvclVzZXIoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkICsgZXJyb3IgKTsgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBzRm9yVXNlcigpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFVzZXJUcmlwQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5BZGRUcmlwKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCBmb3IgdXNlciBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BZGRUcmlwKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51c2VyVHJpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlclRyaXBzW2ldLmlkID09IHRoaXMuc2VsZWN0ZWRUcmlwLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHRNZXNzYWdlID0gXCJWb3VzIGF2ZXogZMOpasOgIGFjaGV0w6kgY2UgdHJpcFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1eVRyaXAodHJpcDogVHJpcCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwucG9zdFRyaXBBUEkodHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBjcmVhdGluZyB0cmlwIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0cmlwIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpcHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgbGVhdmluZz86IERhdGU7XHJcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgY29udGluZW50Pzogc3RyaW5nO1xyXG4gICAgc3RvcHM/OiBTdG9wW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwIGltcGxlbWVudHMgSVRyaXAge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxlYXZpbmc/OiBEYXRlLFxyXG4gICAgICAgIHB1YmxpYyBjb3VudHJ5Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb250aW5lbnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHN0b3BzPzogU3RvcFtdKSB7IH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkTDqXRhaWxzIFRyaXA8L2gyPlxcclxcblxcclxcbjx1bCAqbmdJZj1cXFwic2VsZWN0ZWRUcmlwXFxcIiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWFkZHJlc3MtYm9va1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5pZH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubmFtZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG91cmdsYXNzXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3RlbFxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb3VudHJ5fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYS1ob21lXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvbnRpbmVudH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJidXlUcmlwKHNlbGVjdGVkVHJpcClcXFwiIFtkaXNhYmxlZF09XFxcImlzQm91Z2h0XFxcIj5Bam91dGVyIMOgIG1lcyB0cmlwczwvYnV0dG9uPjwvbGk+XFxyXFxuICAgIDxsaT48aDQ+e3tpc0JvdWdodE1lc3NhZ2V9fTwvaDQ+PC9saT5cXHJcXG48L3VsPlxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+Q3LDqWVyIHVuIG5vdXZlYXUgc3RvcDxzcGFuPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWydzdG9wJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT48L2E+PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnZWRpdCddXFxcIj7DiWRpdGVyIFRyaXA8L2E+PC9saT5cXHJcXG48L3VsPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8YnV0dG9uIChjbGljayk9XFxcImdvQmFjaygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVxcXCI+QmFjazwvYnV0dG9uPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFue1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHJpcC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcHVzZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcHVzZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBVc2VyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB1c2VyTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc1RyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbnB1dERlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwRGV0YWlsU2VydmljZTogVHJpcERldGFpbFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXJNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1lc1RyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdHJpcHMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VXNlclRyaXBzKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBEZXRhaWxTZXJ2aWNlLmdldFVzZXJUcmlwQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgZ2V0IHlvdXIgdHJpcHMgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcCh0cmlwOiBUcmlwKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSB0cmlwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwidXNlcnRyaXBcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMubWVzVHJpcHMuc3BsaWNlKHRoaXMubWVzVHJpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVHJpcCksIDEpO1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGxpc3QgYWNjb3JkaW5nbHlcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyVHJpcHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPnt7dXNlck1lc3NhZ2V9fTwvaDI+XFxyXFxuXFxyXFxuPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3RyaXBUb0RlbGV0ZV09XFxcInNlbGVjdGVkVHJpcFxcXCIgW29iamVjdFRvRGVsZXRlXT1cXFwib2JqZWN0TmFtZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG5cXHJcXG48aDM+TWVzIFRyaXBzPC9oMz5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IHRyaXAgb2YgbWVzVHJpcHNcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxsaT4jIFLDqXNlcnZhdGlvbiA6IHt7dHJpcD8uaWR9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+Tm9tIDoge3t0cmlwPy5uYW1lfX08L2xpPlxcclxcbiAgICAgICAgPGxpPkRhdGUgZGUgZMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+UGF5cyA6IHt7dHJpcD8uY291bnRyeX19PC9saT5cXHJcXG4gICAgICAgIDxsaT5Db250aW5lbnQgOiB7e3RyaXA/LmNvbnRpbmVudH19PC9saT5cXHJcXG4gICAgICAgIDxsaT48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVUcmlwKHRyaXApXFxcIj5TdXBwcmltZXI8L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlxcclxcbiAgICAgICAgPHVsICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2YgdHJpcC5zdG9wczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpPlN0b3AgIyB7e2kgKyAxfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3N0b3A/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZCdhcnJpdsOpZSA6IHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZGUgZMOpcGFydCA6IHt7c3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlZpbGxlIDoge3tzdG9wPy5jaXR5fX08L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGgyPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPjwvaDI+XFxyXFxuPGEgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImdvQmFjaygpXFxcIj5CYWNrPC9hPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgPiB1bHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppdm9yeTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGRpdiA+IHVse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcXHJcXG4gICAgbWFyZ2luOiAwLjUlO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3AsIElTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0b3AuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3BDb21wb25lbnQge1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpc0NyZWF0ZUZvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHJpcElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFN0b3A6IFN0b3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gbmV3IFN0b3AoMSwgXCJQbGFnZVwiLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCBcIk1vbnRyw6lhbFwiLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHdlcmUgbm90IGluIC9zdG9wIHlldCwganN1dCBkaXNwbGF5IGEgbWVzc2FnZSBmb3IgdGhlIHVzZXJcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNyw6llciB1biBub3V2ZWF1IHN0b3AgcG91ciBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHZXQgcGFyZW50IEFjdGl2YXRlZFJvdXRlIG9mIHRoaXMgcm91dGUuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaXBJZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZCBkdSBwYXJlbnQgcG91ciBzYXV2ZXIgc3RvcCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGNyZWF0ZUZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gPElTdG9wPmNyZWF0ZUZvcm0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvc3RTdG9wU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTdG9wU2VydmljZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wU2VydmljZS5wb3N0U3RvcEJ5SWRBUEkodGhpcy50cmlwSWQsIHRoaXMuc2VsZWN0ZWRTdG9wKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgc2F2ZWQgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuYXJyaXZhbCA9IGRhdGEuYXJyaXZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5sZWF2aW5nID0gZGF0YS5sZWF2aW5nO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhbnQgc2F2ZSBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gIXRoaXMuaXNDcmVhdGVGb3JtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGRlc3Ryb3lcIik7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJU3RvcCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXJyaXZhbDogRGF0ZTtcclxuICAgIGxlYXZpbmc6IERhdGU7XHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcCBpbXBsZW1lbnRzIElTdG9wIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBhcnJpdmFsOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxlYXZpbmc6IERhdGUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2l0eTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxhdGl0dWRlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgb3JkZXI6IG51bWJlcikgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXHJcXG4gICAgPGg0Pnt7bWVzc2FnZX19PC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiICpuZ0lmPVxcXCJpc1Nob3dGb3JtXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkU3RvcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICA8Zm9ybSAjZm9ybUNyZWF0ZVN0b3A9XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9ybUNyZWF0ZVN0b3ApXFxcIiAqbmdJZj1cXFwiaXNDcmVhdGVGb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5vbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIGlkPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFycml2YWxcXFwiPkRhdGUgQXJyaXbDqWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jYWxlbmRhciBuYW1lPVxcXCJhcnJpdmFsXFxcIiBpZD1cXFwiYXJyaXZhbFxcXCIgW2ZvY3VzZWREYXRlXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuYXJyaXZhbFxcXCIgcmVxdWlyZWQ+PC9rZW5kby1jYWxlbmRhcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGVhdmluZ1xcXCI+RGF0ZSBEw6lwYXJ0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwibGVhdmluZ1xcXCIgaWQ9XFxcImxlYXZpbmdcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmxlYXZpbmdcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNpdHlcXFwiPlZpbGxlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgaWQ9XFxcImNpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuY2l0eVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiPkFqb3V0ZXI8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPC9mb3JtPlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcC9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3AtZWRpdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFN0b3BDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyLCBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RvcHNCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHMvXCIrIGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFBPUCBVUCBOT1QgV09SS0lOPyEgdGVzdCBpbiBhbm90aGVyIHByb2plY3RcclxuICAgIG9uVG9nZ2xlUG9wVXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSAhdGhpcy5zaG93UG9wVXA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaG93UG9wVXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3BzQnlJZChpZDogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRUcmlwQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250aW5lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGUgc3RvcCBieSBpdHMgaWRcclxuICAgIGRlbGV0ZVN0b3AoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWQ7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJzdG9wQWRtaW5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkaXNwbGF5IGxpc3QgYWZ0ZXIgZGVsZXRpbmcgYSBzdG9wLlxyXG4gICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZCh0aGlzLnNlbGVjdGVkVHJpcC5pZCk7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyIGRlbGV0ZUJsb2NrXFxcIj5cXHJcXG4gICAgPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3dlYXRoZXJUb0RlbGV0ZUlkXT1cXFwiaW5wdXRJZERlbGV0ZVxcXCIgW29iamVjdFRvRGVsZXRlXT1cXFwib2JqZWN0TmFtZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxsaT48aDM+U3RvcHM8L2gzPjwvbGk+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBzdG9wIG9mIHNlbGVjdGVkVHJpcD8uc3RvcHNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwib25Ub2dnbGVQb3BVcCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3tzdG9wPy5uYW1lfX0sIHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fSwge3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19LCB7e3N0b3A/LmNpdHl9fVxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4+PGEgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlU3RvcChzdG9wLmlkKVxcXCI+U3VwcHJpbWVyPC9hPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnB1dCBwaWN0dXJlIGhlcmU8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0b3BlZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic3BhbntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSA+IGRpdjpsYXN0LW9mLXR5cGV7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRlbGV0ZUJsb2Nre1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG5wYWRkaW5nOiAzMHB4O1xcclxcbmNvbG9yOiAjNzg3ODc4O1xcclxcbmJhY2tncm91bmQtY29sb3I6ICNmY2Y3Zjg7XFxyXFxuYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbndpZHRoOiAxMDBweDtcXHJcXG5oZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0c1wiXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZtSG91ckxvY2FsJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0SG91ciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGRhdGU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCw1KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1UcmlwRGF0ZScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEYXRlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkKS5mb3JtYXQoJ0xMJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2dcIlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==