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
	var weather_component_1 = __webpack_require__(32);
	var weatherform_component_1 = __webpack_require__(38);
	var weatherdetail_component_1 = __webpack_require__(42);
	var weatherconstraints_component_1 = __webpack_require__(44);
	var weatherconstraint_component_1 = __webpack_require__(46);
	var trip_component_1 = __webpack_require__(49);
	var tripdetail_component_1 = __webpack_require__(54);
	var stop_component_1 = __webpack_require__(60);
	// services
	var login_service_1 = __webpack_require__(10);
	var trip_service_1 = __webpack_require__(50);
	var tripdetail_service_1 = __webpack_require__(55);
	var stop_service_1 = __webpack_require__(62);
	var weather_service_1 = __webpack_require__(30);
	var weatherconstraint_service_1 = __webpack_require__(47);
	// pipes, external modules
	var kendo_angular_dateinputs_1 = __webpack_require__(64);
	var weatherform_pipe_1 = __webpack_require__(65);
	var trip_pipe_1 = __webpack_require__(66);
	var kendo_angular_dialog_1 = __webpack_require__(67);
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
	                {
	                    path: 'trips/:id', component: tripdetail_component_1.TripDetailComponent, children: [
	                        { path: '', component: stop_component_1.StopComponent },
	                        { path: 'stop', component: stop_component_1.StopComponent }
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
	            localStorage.setItem('token', JSON.stringify({ token: strippedToken, userName: _this.user.userName }));
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
	var LoginService = (function () {
	    function LoginService(_http) {
	        this._http = _http;
	        this._urlLogin = 'api/auth/token';
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
	        console.log("logout");
	        // clear token from local storage to log out user
	        localStorage.removeItem('token');
	        //localStorage.clear();
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
	var AuthGuard = (function () {
	    function AuthGuard(_router) {
	        this._router = _router;
	    }
	    AuthGuard.prototype.canActivate = function () {
	        if (localStorage.getItem('token')) {
	            // logged in so return true
	            return true;
	        }
	        // not logged in so redirect to login page
	        this._router.navigateByUrl("/login");
	        return false;
	    };
	    return AuthGuard;
	}());
	AuthGuard = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [router_1.Router])
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

	module.exports = "<h1>Hello</h1>\n\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

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
	var router_1 = __webpack_require__(6);
	__webpack_require__(15);
	var DeleteComponent = (function () {
	    function DeleteComponent(_weatherService, _route) {
	        this._weatherService = _weatherService;
	        this._route = _route;
	        this.idToDelete = null;
	        this.isShowDelete = false;
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
	        this.isShowDelete = false;
	    };
	    DeleteComponent.prototype.onDeleteData = function () {
	        this.idToDelete = this.weatherToDeleteId;
	        this.deleterWeatherById(this.idToDelete);
	    };
	    DeleteComponent.prototype.cancelDelete = function () {
	        this.deleteSuccess.emit(false);
	    };
	    DeleteComponent.prototype.deleterWeatherById = function (id) {
	        var _this = this;
	        this._weatherService.deleteWeatherByIdAPI(id)
	            .subscribe(function (result) {
	            _this.deleteSuccess.emit(true);
	            _this.isShowDelete = true;
	            console.log("SUCCESS DELETE in component");
	        }, function (error) {
	            console.log("ERROR DELETE in component");
	        });
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
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], DeleteComponent.prototype, "deleteSuccess", void 0);
	DeleteComponent = __decorate([
	    core_1.Component({
	        selector: 'delete',
	        template: __webpack_require__(31)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
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
	var WeatherService = (function () {
	    function WeatherService(_http) {
	        this._http = _http;
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
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var body = JSON.stringify(weather);
	        return this._http.post(this._urlWeather, body, { headers: headers })
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // PUT:     1 weather object
	    WeatherService.prototype.putWeatherAPI = function (weather) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var body = JSON.stringify(weather);
	        return this._http.put(this._urlWeather, body, { headers: headers })
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
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this._http.delete(this._urlWeather + "/" + id, { headers: headers })
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
	    __metadata("design:paramtypes", [http_1.Http])
	], WeatherService);
	exports.WeatherService = WeatherService;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"isShowDelete\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <p>You deleted the wheather successfully.</p>        \r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <h2>Success deleting the weather #  : </h2>\r\n        <h3>{{idToDelete}}</h3>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"hideNotif()\">Hide</button>\r\n</div>\r\n\r\n<kendo-dialog *ngIf=\"isDelete\" (close)=\"cancelDelete()\">\r\n    <kendo-dialog-titlebar>\r\n        <div style=\"font-size: 18px; line-height: 1.3em;\">\r\n            <span class=\"k-icon k-i-warning\"></span> Delete Data\r\n        </div>\r\n    </kendo-dialog-titlebar>\r\n    <p style=\"margin: 30px; text-align: center;\">This action cannot be undone.</p>\r\n\r\n    <kendo-dialog-actions>\r\n        <button kendoButton (click)=\"cancelDelete()\">Cancel</button>\r\n        <button kendoButton (click)=\"onDeleteData()\">Delete</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

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
	var http_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(6);
	var weather_1 = __webpack_require__(33);
	var weather_service_1 = __webpack_require__(30);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	var moment = __webpack_require__(34);
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
	    };
	    // refresh the results after the child component has emitted the deletion was successfull.
	    WeatherComponent.prototype.refreshResults = function ($event) {
	        if ($event == true) {
	            // delete the weather client side :
	            this.weathers.splice(this.inputIdDelete, 1);
	            this.getAllWeathers();
	            this.inputDelete = false;
	        }
	        else {
	            console.log($event);
	            this.inputDelete = false;
	        }
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
	        template: __webpack_require__(35),
	        styles: [__webpack_require__(36)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute,
	        weather_service_1.WeatherService, router_1.Router])
	], WeatherComponent);
	exports.WeatherComponent = WeatherComponent;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var Weather = (function () {
	    function Weather(id, name, hour, tempC, summary, temperatureF) {
	        this.id = id;
	        this.name = name;
	        this.hour = hour;
	        this.tempC = tempC;
	        this.summary = summary;
	        this.temperatureF = temperatureF;
	    }
	    return Weather;
	}());
	exports.Weather = Weather;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Create new Weather</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n                <th>Delete</th>\r\n                <th>Edit</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\">Delete</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\">Edit</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(37);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 38 */
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
	var weather_1 = __webpack_require__(33);
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
	        template: __webpack_require__(39),
	        styles: [__webpack_require__(40)]
	    }),
	    __metadata("design:paramtypes", [])
	], WeatherFormComponent);
	exports.WeatherFormComponent = WeatherFormComponent;


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"tempC\" name=\"tempC\" [(ngModel)]=\"weatherToSave.tempC\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(41);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 0.5rem solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 0.5rem solid #a94442; /* red */\r\n}\r\n\r\n.k-invalid {\r\n  color: red;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n/*#date, #date > table, #data > div.k-content.k-scrollable, kendo-calendar-monthview, table.k-calendar-weekdays{\r\n    padding: 0;\r\n    width: 100%;\r\n}*/\r\n\r\n/*.k-calendar.k-calendar-infinite {\r\n    padding: 0;\r\n}\r\n\r\n.form-group table{\r\n    width: 100%;\r\n}\r\n\r\nform-group div.k-content.k-scrollable{\r\n    width: 100%;\r\n}\r\n\r\nkendo-calendar-monthview.k-calendar-monthview{\r\n    width: 100%;\r\n}*/", ""]);
	
	// exports


/***/ },
/* 42 */
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
	        template: __webpack_require__(43)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
	], WeatherDetailComponent);
	exports.WeatherDetailComponent = WeatherDetailComponent;


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Weather Detail</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

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
	        template: __webpack_require__(45)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService])
	], WeatherConstraintsComponent);
	exports.WeatherConstraintsComponent = WeatherConstraintsComponent;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<h2>Weathers</h2>\r\n\r\n<h3>Choose a weather to get weather constraints from : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

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
	var router_1 = __webpack_require__(6);
	var weatherconstraint_service_1 = __webpack_require__(47);
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
	        template: __webpack_require__(48)
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, weatherconstraint_service_1.WeatherConstraintsService])
	], WeatherConstraintComponent);
	exports.WeatherConstraintComponent = WeatherConstraintComponent;


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
/* 48 */
/***/ function(module, exports) {

	module.exports = "<h2>Constraints for the temperature : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Wind km/h\r\n                <!--<img src=\"../../../../wwwroot/dist/img/wind.png\"/>-->\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

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
	var trip_service_1 = __webpack_require__(50);
	var TripComponent = (function () {
	    function TripComponent(_tripService) {
	        this._tripService = _tripService;
	        this.titreTrip = "Les Forfaits Voyages";
	        this.trips = [];
	        this.getAllTrips();
	    }
	    TripComponent.prototype.ngOnInit = function () {
	        console.log(JSON.parse(localStorage.getItem('token')).userName);
	        this.userName = JSON.parse(localStorage.getItem('token')).userName;
	        ;
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
	    TripComponent.prototype.acheterTrip = function (trip) {
	        return this._tripService.postTripAPI(trip)
	            .subscribe(function (data) {
	            console.log("succes creating trip : " + JSON.stringify(data));
	        }, function (error) {
	            console.log("error creating trip : " + error);
	        });
	    };
	    return TripComponent;
	}());
	TripComponent = __decorate([
	    core_1.Component({
	        selector: 'trip',
	        template: __webpack_require__(51),
	        styles: [__webpack_require__(52)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService])
	], TripComponent);
	exports.TripComponent = TripComponent;


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
	    // POST:    1 trip object.
	    TripService.prototype.postTripAPI = function (trip) {
	        var token = localStorage.getItem('token');
	        console.log(token);
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(trip);
	        return this._http.post(this._urlTrip, body, options)
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
/* 51 */
/***/ function(module, exports) {

	module.exports = "<h1>Bienvenue {{userName}}</h1>\r\n<h2>{{titreTrip}}</h2>\r\n<h3>Disponibles présentement</h3>\r\n\r\n<div *ngFor=\"let trip of trips\" class=\"infosTrip\">\r\n    <ul>\r\n        <li>{{trip?.name}}</li>\r\n        <li>{{trip?.country}}</li>\r\n        <li>{{trip?.continent}}</li>\r\n    </ul>\r\n    <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n    <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n</div>\r\n\r\n"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(53);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.infosTrip{\r\n    width: auto;\r\n    height: auto;\r\n    background-color:#9de6ff;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    margin: 1%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 54 */
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
	var tripdetail_service_1 = __webpack_require__(55);
	var trip_1 = __webpack_require__(56);
	var TripDetailComponent = (function () {
	    function TripDetailComponent(_activatedRoute, _tripdetail, _router) {
	        this._activatedRoute = _activatedRoute;
	        this._tripdetail = _tripdetail;
	        this._router = _router;
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
	        }, function (error) {
	            console.log("error get back trip with id : " + id + error);
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
	        template: __webpack_require__(57),
	        styles: [__webpack_require__(58)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripDetailComponent);
	exports.TripDetailComponent = TripDetailComponent;


/***/ },
/* 55 */
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
	        var token = localStorage.getItem('token');
	        console.log(token);
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip + "/" + id, options)
	            .map(function (response) { return response.json(); })
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
/* 56 */
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
/* 57 */
/***/ function(module, exports) {

	module.exports = "<h2>Détails Trip</h2>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip.stops\">\r\n        <span><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n        <a> \r\n            {{stop?.name}}, {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},\r\n            {{stop?.city}}\r\n        </a>\r\n        <span><a class=\"btn btn-sm btn-success\">Ajouter</a></span>\r\n    </li>\r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>Create a new Stop<span><a [routerLink]=\"['stop']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-arrow-up\"></i></a></span></li>\r\n    <li><a>View my stops</a></li>\r\n    <li><a>Delete stops</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"col-md-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>\r\n</div>"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(59);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\nspan{\r\n    padding: 1%;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 60 */
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
	var stop_1 = __webpack_require__(61);
	var stop_service_1 = __webpack_require__(62);
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
	        template: __webpack_require__(63)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
	        stop_service_1.StopService])
	], StopComponent);
	exports.StopComponent = StopComponent;


/***/ },
/* 61 */
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	var StopService = (function () {
	    function StopService(_http) {
	        this._http = _http;
	        this._urlStop = 'api/stop';
	    }
	    StopService.prototype.postStopByIdAPI = function (id, stop) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var body = JSON.stringify(stop);
	        return this._http.post(this._urlStop + "/" + id, body, { headers: headers })
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    return StopService;
	}());
	StopService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], StopService);
	exports.StopService = StopService;


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\"/>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-lg btn-success\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("@progress/kendo-angular-dateinputs");

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var moment = __webpack_require__(34);
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
/* 67 */
/***/ function(module, exports) {

	module.exports = require("@progress/kendo-angular-dialog");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmVlODQ1NWNhMjc1MWIzZTllYTkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL1VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcz9kNTcyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzcz9lMGU2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzcz9lMTFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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Q3BELHNDQUFpQztBQVFqQyxLQUFhLFFBQVE7S0FBckI7S0FNQSxDQUFDO0tBTEcsNEJBQVMsR0FBVCxVQUFVLElBQVMsRUFBRSxJQUFVO1NBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEMsQ0FBQztLQUNMLGVBQUM7QUFBRCxFQUFDO0FBTlksU0FBUTtLQUxwQixXQUFJLENBQUM7U0FDRixJQUFJLEVBQUUsWUFBWTtTQUNsQixJQUFJLEVBQUUsS0FBSztNQUNkLENBQUM7SUFFVyxRQUFRLENBTXBCO0FBTlksNkJBQVE7Ozs7Ozs7QUNUckIsNEQiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZWU4NDU1Y2EyNzUxYjNlOWVhOSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBsb2dpblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZCc7XG5cbi8vIG1haW4gY29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcblxuLy8gcGlwZXMsIGV4dGVybmFsIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIFRyaXBEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICAvLyBwaXBlc1xuICAgICAgICBGb3JtYXRIb3VyLFxuICAgICAgICBUcmlwRGF0ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBUcmlwU2VydmljZSxcbiAgICAgICAgVHJpcERldGFpbFNlcnZpY2UsXG4gICAgICAgIFN0b3BTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyU2VydmljZSxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzJywgY29tcG9uZW50OiBUcmlwQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcy86aWQnLCBjb21wb25lbnQ6IFRyaXBEZXRhaWxDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogU3RvcENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdzdG9wJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycycsIGNvbXBvbmVudDogV2VhdGhlckNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2RldGFpbC86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3dlYXRoZXJDb25zdHJhaW50cycsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyLCBJVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdXNlcjogVXNlcjtcclxuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKFwiRGFwaERDXCIsIFwiZGFwaEBkYXBoLmNvbVwiLCBcIlBAc3N3MHJkIVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyByZXNldCBsb2dpbiBzdGF0dXNcclxuICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybTogTmdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gPElVc2VyPmZvcm0udmFsdWU7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnZhbGlkKTtcclxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dpblNlcnZpY2UubG9naW5BUEkodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJpcHBlZFRva2VuID0gZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgbG9naW4gdXNlciBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeSh7IHRva2VuOiBzdHJpcHBlZFRva2VuLCB1c2VyTmFtZTogdGhpcy51c2VyLnVzZXJOYW1lIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuID0gc3RyaXBwZWRUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwc1wiKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIkltcG9zc2libGUgZGUgbG9ndWVyIGxlIHVzZXIgOiBcIiArIHRoaXMudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB1c2VyICA6IFwiICsgdGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJOYW1lOiBzdHJpbmcsIHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF91cmxMb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLl91cmxMb2dpbiA9ICdhcGkvYXV0aC90b2tlbic7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5BUEkodXNlcjogSVVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsTG9naW4sIGJvZHksIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXRcIik7XHJcbiAgICAgICAgLy8gY2xlYXIgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyBvdXQgdXNlclxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMz5Mb2dpbjwvaDM+XFxyXFxuICAgIDxmb3JtICNsb2dpbj1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChsb2dpbilcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlck5hbWVcXFwiPlVzZXIgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiBpZD1cXFwidXNlck5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnVzZXJOYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci51c2VyTmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlVzZXJuYW1lIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5Db3VycmllbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5lbWFpbC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkVtYWlsIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5Nb3QgUGFzc2U8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIucGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Nb3QgUGFzc2UgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXFxcIj5TZSBMb2d1ZXI8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8aSAqbmdJZj1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZndcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZXJyb3JcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcclxuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvbG9naW5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgYXtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkFuZ3VsYXIyQ29yZVNlZWQ8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJsaW5rLWFjdGl2ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvc3Bhbj4gU2lnbiBVcFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cXFwiPjwvc3Bhbj4gU2lnbiBJblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy90cmlwcyddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yb2FkXFxcIj48L3NwYW4+IFRyaXBzXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3dlYXRoZXJzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gV2VhdGhlcnNcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gV2VhdGhlciBDb25zdHJhaW50c1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj4gTG9nT3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbzwvaDE+XFxuXFxuPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nZXQuYXNwLm5ldC8nPkFTUC5ORVQgQ29yZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCc+QyM8L2E+IGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vYW5ndWxhci5pby8nPkFuZ3VsYXIgMjwvYT4gYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cXG48L3VsPlxcbjxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXG48L3VsPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaXNEZWxldGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9EZWxldGVJZDogbnVtYmVyO1xyXG4gICAgQE91dHB1dCgpIGRlbGV0ZVN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHB1YmxpYyBpZFRvRGVsZXRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93RGVsZXRlOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLmlkVG9EZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNTaG93RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHBvcCB1cCBvcGVuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZGVsZXRlIDogXCIgKyB0aGlzLmlzRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU5vdGlmKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93RGVsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb0RlbGV0ZSA9IHRoaXMud2VhdGhlclRvRGVsZXRlSWQ7XHJcbiAgICAgICAgdGhpcy5kZWxldGVyV2VhdGhlckJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZXJXZWF0aGVyQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZGVsZXRlV2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsV2VhdGhlcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLl91cmxXZWF0aGVyID0gXCJhcGkvd2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIGFsbCB3ZWF0aGVyIG9iamVjdHNcclxuICAgIGdldEFsbFdlYXRoZXJzQVBJKCk6IE9ic2VydmFibGU8SVdlYXRoZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcltdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUOiAgICAxIHdlYXRoZXIgb2JqZWN0XHJcbiAgICBwb3N0V2VhdGhlckFQSSh3ZWF0aGVyOiBXZWF0aGVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFdlYXRoZXIsIGJvZHksIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUFVUOiAgICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcHV0V2VhdGhlckFQSSh3ZWF0aGVyOiBXZWF0aGVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGJ5IGlkXHJcbiAgICBnZXRXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgZGV0YWlscyBieSBuYW1lXHJcbiAgICBnZXRXZWF0aGVyQnlOYW1lQVBJKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL0J5TmFtZS9cIiArIG5hbWUpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgaWRcclxuICAgIGRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJzdWNjZXMgZGVsZXRlIHdlYXRoZXIsIHJlc3Agd2UgZ2V0IGluIHNlcnZpY2UgOiBcIiArIGVycm9yKSkgICAgICBcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiaXNTaG93RGVsZXRlXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtc3VjY2Vzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgPHA+WW91IGRlbGV0ZWQgdGhlIHdoZWF0aGVyIHN1Y2Nlc3NmdWxseS48L3A+ICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGgyPlN1Y2Nlc3MgZGVsZXRpbmcgdGhlIHdlYXRoZXIgIyAgOiA8L2gyPlxcclxcbiAgICAgICAgPGgzPnt7aWRUb0RlbGV0ZX19PC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImhpZGVOb3RpZigpXFxcIj5IaWRlPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGtlbmRvLWRpYWxvZyAqbmdJZj1cXFwiaXNEZWxldGVcXFwiIChjbG9zZSk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy10aXRsZWJhcj5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDEuM2VtO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPiBEZWxldGUgRGF0YVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwva2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICA8cCBzdHlsZT1cXFwibWFyZ2luOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvcD5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbiAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVxcXCJjYW5jZWxEZWxldGUoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XFxcIm9uRGVsZXRlRGF0YSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctYWN0aW9ucz5cXHJcXG48L2tlbmRvLWRpYWxvZz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7IFdlYXRoZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBpbnB1dERlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpbnB1dElkRGVsZXRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2VhdGhlcnM6IFdlYXRoZXJbXTtcclxuICAgIHB1YmxpYyB3ZWF0aGVyMTogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRyZVdlYXRoZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBlZGl0Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmbURhdGU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdHJlV2VhdGhlciA9IFwiV2VhdGhlciBDaGVja1wiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcclxuICAgICAgICAvLyBtb21lbnQganMgZm9ybWF0IGEgZGF0ZSB3aXRoIGEgc3RyaW5nIGZvcm1hdCwgcmV0dXJucyBhIGRhdGUuXHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICB0aGlzLmZtRGF0ZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mbURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNsYXNzIHdlYXRoZXIgb2JqZWN0IHRvIGJpbmQgdG8uXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9IG5ldyBXZWF0aGVyKDEsIFwiQXV0b21uV2VhdGhlclwiLCB0aGlzLmZtRGF0ZSwgMTQsIFwiVGVtcMOpcmF0dXJlIEF1dG9tbmVcIik7XHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIGdldCB3ZWF0aGVyIG9iamVjdHNcclxuICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUIDogYWxsIHdlYXRoZXIgb2JqZWN0cyBmcm9tIGRiXHJcbiAgICBnZXRBbGxXZWF0aGVycygpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsV2VhdGhlcnNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHdlYXRoZXIgb2JqZXRzIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVycyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIGR1IHNlcnZpY2UgOiAgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dlYXRoZXJGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSAhdGhpcy5zaG93Rm9ybTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaG93Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29EZWxldGUoaWRUb0RlbGV0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBnbyBkZWxldGUgOiBcIiArIGlkVG9EZWxldGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IGlkVG9EZWxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSB3ZWF0aGVyIGNsaWVudCBzaWRlIDpcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVycy5zcGxpY2UodGhpcy5pbnB1dElkRGVsZXRlLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlIGEganMgb2JqZWN0ICAodXN1YWxseSBvYmplY3Qgb3IgYXJyYXkpIGNvbnZlcnQgaXQgdG8gSlNPTiBzdHJpbmcgbm90YXRpb25cclxuICAgIC8vIHRvIGdldCBKU09OIG9iamVjdCB1c2UgcGFyc2UgbWV0aG9kXHJcbiAgICBnZXQgZGlhZ25vc3RpYygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdGhlIHBheWxvYWQgd2VhdGhlciBvYmplY3QgZnJvbSBjaGlsZHJlbiBjb21wb25lbnQgd2VhdGhlcmZvcm1cclxuICAgIHBvc3RXZWF0aGVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSAkZXZlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgd2VhdGhlciB0byBwb3N0IDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBNZXRob2QgdG8gc2F2ZSBuZXcgd2VhdGhlciBvYmplY3RcclxuICAgICAgICB0aGlzLnNhdmVXZWF0aGVyKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXQgYSB3ZWF0aGVyXHJcbiAgICBlZGl0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gJGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdGluZyBhIHdlYXRoZXIgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyMSk7XHJcblxyXG4gICAgICAgIC8vIG1ldGhvZCB0byBlZGl0IGEgd2VhdGhlclxyXG4gICAgICAgIHRoaXMucHV0V2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlciB3aGVuIGNsaWNraW5nIGEgbGluayBvbiB3ZWF0aGVyIG9iamVjdHMgdGFibGUuXHJcbiAgICBnb0VkaXQod2VhdGhlcjogV2VhdGhlcikge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSB3ZWF0aGVyO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1QgOiBjYWxsIHRoZSBwb3N0IGFjdGlvbiBvbiBiYWNrZW5kIHRvIGNyZWF0ZSBuZXcgd2VhdGhlciBvYmplY3QuXHJcbiAgICBzYXZlV2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBDID0gZGF0YS50ZW1wQztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wZXJhdHVyZUYgPSBkYXRhLnRlbXBlcmF0dXJlRjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkIG5ldyB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRhdGEgaW4gdGhlIGJyb3dzZXIgdG8gZ2V0IGhlIG5ld2x5IHNhYmVkIHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgb2YgZGF0ZSBzZW50IGJhY2sgdG8gY2xpZW50IDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAodGhpcy53ZWF0aGVyMS5ob3VyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igc2F2aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucHV0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0ZWQgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZWRpdGluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yb3V0ZVdlYXRoZXIoKTogc3RyaW5nIHtcclxuICAgIC8vICAgIHZhciBhcnJheVN0cmluZyA9IFtdO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS50b1N0cmluZygpKTtcclxuICAgIC8vICAgIHRoaXMucm91dGUudXJsLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgIC8vICAgICAgICBhcnJheVN0cmluZy5wdXNoKGVsZW0pO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGVsZW1bXCIwXCJdW1wicGF0aFwiXSk7XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vICAgIGlmIChhcnJheVN0cmluZ1sxXSAhPSB1bmRlZmluZWQgJiYgYXJyYXlTdHJpbmdbMV1bXCIwXCJdW1wicGF0aFwiXSA9PSBcImF0XCIpIHtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhcIkdPVCBZT1VcIik7XHJcbiAgICAvLyAgICAgICAgcmV0dXJuIFwiV2VhdGhlciBDaGVja1wiO1xyXG4gICAgLy8gICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICByZXR1cm4gXCJXZWxjb21lXCI7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxufVxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElXZWF0aGVyIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob3VyPzogRGF0ZTtcbiAgICB0ZW1wQz86IG51bWJlcjtcbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlRj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYXRoZXIgaW1wbGVtZW50cyBJV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaG91cj86IERhdGUsXG4gICAgICAgIHB1YmxpYyB0ZW1wQz86IG51bWJlcixcbiAgICAgICAgcHVibGljIHN1bW1hcnk/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0ZW1wZXJhdHVyZUY/OiBudW1iZXIpIHsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT57e3RpdHJlV2VhdGhlcn19PC9oMT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNob3dXZWF0aGVyRm9ybSgpXFxcIj5DcmVhdGUgbmV3IFdlYXRoZXI8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcInNob3dGb3JtXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHdlYXRoZXItZm9ybSBbd2VhdGhlclRvU2F2ZV09XFxcIndlYXRoZXIxXFxcIiAobmV3V2VhdGhlcik9XFxcInBvc3RXZWF0aGVyKCRldmVudClcXFwiIChlZFdlYXRoZXIpPVxcXCJlZGl0V2VhdGhlcigkZXZlbnQpXFxcIiBbbW9kZUVkaXRdPVxcXCJlZGl0Rm9ybVxcXCI+PC93ZWF0aGVyLWZvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlcnNcXFwiPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj5EZWxldGU8L2k+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0VkaXQod2VhdGhlcilcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+RWRpdDwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRlbGV0ZT48L2RlbGV0ZT5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckZvcm1Db21wb25lbnR7XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9TYXZlOiBXZWF0aGVyO1xyXG4gICAgQE91dHB1dCgpIG5ld1dlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBPdXRwdXQoKSBlZFdlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBJbnB1dCgpIG1vZGVFZGl0OiBib29sZWFuO1xyXG4gICAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBvbkVkaXQ6IGJvb2xlYW47XHJcbiAgICAvL2Zvcm0xOiBOZ0Zvcm07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vbkVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV3V2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICB0aGlzLmVkV2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICAvL3RoaXMuZm9ybTEgPSBuZXcgTmdGb3JtKFtdLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gdmV1dCBzb3VtZXR0cmUgb24gZWRpdC5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW52b3llciBsZSB3ZWF0aGVyZm9ybSBvYmplY3QgYXUgd2VhdGhlciBjb21wb25lbnRcclxuICAgIG9uU3VibWl0KHdlYXRoZXJGb3JtOiBOZ0Zvcm0peyAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWxpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRXZWF0aGVyLmVtaXQodGhpcy53ZWF0aGVyVG9TYXZlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBjcmVlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gZmFsc2U7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3V2VhdGhlci5lbWl0KHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBlZGl0ZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMT5XZWF0aGVyIEZvcm08L2gxPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cXFwib25TdWJtaXQod2VhdGhlckZvcm0pXFxcIiAjd2VhdGhlckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5Ib3VyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRpbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJob3VyXFxcIiBuYW1lPVxcXCJob3VyXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5ob3VyXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZW1wQ1xcXCI+VGVtcCAqQzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ0ZW1wQ1xcXCIgbmFtZT1cXFwidGVtcENcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnRlbXBDXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdW1tYXJ5XFxcIj5TdW1tYXJ5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdW1tYXJ5XFxcIiBuYW1lPVxcXCJzdW1tYXJ5XFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5zdW1tYXJ5XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhd2VhdGhlckZvcm0udmFsaWQgfHwgbW9kZUVkaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIm1vZGVFZGl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZFxcXCI+RWRpdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIXN1Ym1pdHRlZFxcXCI+XFxyXFxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nOjwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5OYW1lPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5Ib3VyIEFNL1BNPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuaG91ciB8IGZtSG91ckxvY2FsfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgKkM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlN1bW1hcnk8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5zdW1tYXJ5fX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgRjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBlcmF0dXJlRn19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xcclxcbn1cXHJcXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgI2E5NDQ0MjsgLyogcmVkICovXFxyXFxufVxcclxcblxcclxcbi5rLWludmFsaWQge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiNkYXRlLCAjZGF0ZSA+IHRhYmxlLCAjZGF0YSA+IGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxlLCBrZW5kby1jYWxlbmRhci1tb250aHZpZXcsIHRhYmxlLmstY2FsZW5kYXItd2Vla2RheXN7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn0qL1xcclxcblxcclxcbi8qLmstY2FsZW5kYXIuay1jYWxlbmRhci1pbmZpbml0ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybS1ncm91cCBkaXYuay1jb250ZW50Lmstc2Nyb2xsYWJsZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmtlbmRvLWNhbGVuZGFyLW1vbnRodmlldy5rLWNhbGVuZGFyLW1vbnRodmlld3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcmRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRGV0YWlsQ29tcG9uZW50e1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgd2VhdGhlcjogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBtZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCB8fCBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQodGhpcy5pZCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiQXVjdW5zIGTDqXRhaWxzIMOgIGFmZmljaGVyXCI7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXRoZXJCeWRJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsbCBnZXREZXRhaWxzIG1ldGhvZCBpbiB0aGUgbnNlcnZpY2VcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB3ZWF0aGVyIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBnZXQgZGV0YWlscyBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e21lc3NhZ2VEZXRhaWxzfX08L2gyPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcIndlYXRoZXJcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBEZXRhaWw8L2gxPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludHMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNDb21wb25lbnQge1xyXG4gICAgcHVibGljIHdlYXRoZXJzOiBXZWF0aGVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldEFsbFdlYXRoZXJzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2VhdGhlcnMgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVycyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+V2VhdGhlcnM8L2gyPlxcclxcblxcclxcbjxoMz5DaG9vc2UgYSB3ZWF0aGVyIHRvIGdldCB3ZWF0aGVyIGNvbnN0cmFpbnRzIGZyb20gOiA8L2gzPlxcclxcblxcclxcbjx1bD5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbd2VhdGhlci5pZF1cXFwiPnt7d2VhdGhlcj8ubmFtZX19PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZSB9IGZyb20gJy4vd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJDb25zdHJhaW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RyYWludHM6IENvbnN0cmFpbnRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2U6IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnN0cmFpbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb25zdHJhaW50c0FQSSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHRoZSBjb25zdHJhaW50cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2ZXVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2VhdGhlckNvbnN0cmFpbnRzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHNBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS93ZWF0aGVyLycgKyBpZCArICcvY29uc3RyYWludHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwOiBSZXNwb25zZSkgPT4gPElDb25zdHJhaW50W10+cmVzcC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Db25zdHJhaW50cyBmb3IgdGhlIHRlbXBlcmF0dXJlIDogIyB7e3RoaXMuaWR9fTwvaDI+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgV2luZCBrbS9oXFxyXFxuICAgICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cXFwiLi4vLi4vLi4vLi4vd3d3cm9vdC9kaXN0L2ltZy93aW5kLnBuZ1xcXCIvPi0tPlxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBHdXN0IGttL2hcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgSHVtaWRpdHkgJVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gUmlzaW5nIEFNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFN1biBTZXQgUE1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ2xlYXJcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgRmVlbHMgTGlrZSDCsENcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNvbnN0cmFpbnQgb2YgY29uc3RyYWludHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py53aW5kfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5ndXN0fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5odW1pZGl0eX19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uc3VuUmlzaW5nfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5TZXR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LmNsZWFyfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5mZWVsc0xpa2V9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXFxyXFxuXFxyXFxuPGJ1dHRvbiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiPkJhY2s8L2J1dHRvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB0cmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHRpdHJlVHJpcDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpdHJlVHJpcCA9IFwiTGVzIEZvcmZhaXRzIFZveWFnZXNcIjtcclxuICAgICAgICB0aGlzLnRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpLnVzZXJOYW1lKTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkudXNlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBnZXQgbWV0aG9zIHN1ciBzZXJ2aWNlLlxyXG4gICAgZ2V0QWxsVHJpcHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEFsbFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFjaGV0ZXJUcmlwKHRyaXA6IFRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwU2VydmljZS5wb3N0VHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgY3JlYXRpbmcgdHJpcCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNyZWF0aW5nIHRyaXAgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4vdHJpcCc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJpcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsVHJpcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gJ2FwaS90cmlwJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBBbGwgdHJpcHMgb2JqZWN0cy5cclxuICAgIGdldEFsbFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1Q6ICAgIDEgdHJpcCBvYmplY3QuXHJcbiAgICBwb3N0VHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRyaXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFRyaXAsIGJvZHksIG9wdGlvbnMgKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkJpZW52ZW51ZSB7e3VzZXJOYW1lfX08L2gxPlxcclxcbjxoMj57e3RpdHJlVHJpcH19PC9oMj5cXHJcXG48aDM+RGlzcG9uaWJsZXMgcHLDqXNlbnRlbWVudDwvaDM+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIHRyaXBzXFxcIiBjbGFzcz1cXFwiaW5mb3NUcmlwXFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpPnt7dHJpcD8ubmFtZX19PC9saT5cXHJcXG4gICAgICAgIDxsaT57e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+e3t0cmlwPy5jb250aW5lbnR9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDxwPkRhdGUgZGUgRMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvcD5cXHJcXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiW3RyaXAuaWRdXFxcIj5Wb2lyIFRyaXA8L2E+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzlkZTZmZjtcXHJcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9zVHJpcDpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpcEJ5SWQoaWQ6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBuZXcgVHJpcChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxlYXZpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250aW5lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpcCBkZXRhaWwgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkICsgZXJyb3IgKTsgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFRyaXAgPSBcImFwaS90cmlwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUICA6IGdldCB0cmlwIGJ5LlxyXG4gICAgZ2V0VHJpcEJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVRyaXA+IHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyaXB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGxlYXZpbmc/OiBEYXRlO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGNvbnRpbmVudD86IHN0cmluZztcclxuICAgIHN0b3BzPzogU3RvcFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcCBpbXBsZW1lbnRzIElUcmlwIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsZWF2aW5nPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgY291bnRyeT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgY29udGluZW50Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wcz86IFN0b3BbXSkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Ew6l0YWlscyBUcmlwPC9oMj5cXHJcXG5cXHJcXG48dWwgKm5nSWY9XFxcInNlbGVjdGVkVHJpcFxcXCIgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1hZGRyZXNzLWJvb2tcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uaWR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/Lm5hbWV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdXJnbGFzc1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG90ZWxcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY291bnRyeX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEtaG9tZVxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb250aW5lbnR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGgzPlN0b3BzPC9oMz48L2xpPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgc3RvcCBvZiBzZWxlY3RlZFRyaXAuc3RvcHNcXFwiPlxcclxcbiAgICAgICAgPHNwYW4+PGkgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtc3BpblxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxhPiBcXHJcXG4gICAgICAgICAgICB7e3N0b3A/Lm5hbWV9fSwge3tzdG9wPy5hcnJpdmFsIHwgZm1UcmlwRGF0ZX19LCB7e3N0b3A/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX0sXFxyXFxuICAgICAgICAgICAge3tzdG9wPy5jaXR5fX1cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxzcGFuPjxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXFxcIj5Bam91dGVyPC9hPjwvc3Bhbj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+Q3JlYXRlIGEgbmV3IFN0b3A8c3Bhbj48YSBbcm91dGVyTGlua109XFxcIlsnc3RvcCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+PC9hPjwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGE+VmlldyBteSBzdG9wczwvYT48L2xpPlxcclxcbiAgICA8bGk+PGE+RGVsZXRlIHN0b3BzPC9hPjwvbGk+XFxyXFxuPC91bD5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiPkJhY2s8L2J1dHRvbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ1bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbntcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3AsIElTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0b3AuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3BDb21wb25lbnQge1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpc0NyZWF0ZUZvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHJpcElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFN0b3A6IFN0b3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gbmV3IFN0b3AoMSwgXCJQbGFnZVwiLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCBcIk1vbnRyw6lhbFwiLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHdlcmUgbm90IGluIC9zdG9wIHlldCwganN1dCBkaXNwbGF5IGEgbWVzc2FnZSBmb3IgdGhlIHVzZXJcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNyw6llciB1biBub3V2ZWF1IHN0b3AgcG91ciBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHZXQgcGFyZW50IEFjdGl2YXRlZFJvdXRlIG9mIHRoaXMgcm91dGUuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaXBJZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZCBkdSBwYXJlbnQgcG91ciBzYXV2ZXIgc3RvcCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGNyZWF0ZUZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gPElTdG9wPmNyZWF0ZUZvcm0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvc3RTdG9wU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTdG9wU2VydmljZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wU2VydmljZS5wb3N0U3RvcEJ5SWRBUEkodGhpcy50cmlwSWQsIHRoaXMuc2VsZWN0ZWRTdG9wKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgc2F2ZWQgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuYXJyaXZhbCA9IGRhdGEuYXJyaXZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5sZWF2aW5nID0gZGF0YS5sZWF2aW5nO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhbnQgc2F2ZSBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gIXRoaXMuaXNDcmVhdGVGb3JtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGRlc3Ryb3lcIik7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJU3RvcCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXJyaXZhbDogRGF0ZTtcclxuICAgIGxlYXZpbmc6IERhdGU7XHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcCBpbXBsZW1lbnRzIElTdG9wIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBhcnJpdmFsOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxlYXZpbmc6IERhdGUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2l0eTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxhdGl0dWRlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgb3JkZXI6IG51bWJlcikgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJU3RvcCwgU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9wU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxTdG9wOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTdG9wQnlJZEFQSShpZDogbnVtYmVyLCBzdG9wOiBTdG9wKTogT2JzZXJ2YWJsZTxJU3RvcD4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTsgXHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdG9wKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBib2R5LCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXHJcXG4gICAgPGg0Pnt7bWVzc2FnZX19PC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiICpuZ0lmPVxcXCJpc1Nob3dGb3JtXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkU3RvcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICA8Zm9ybSAjZm9ybUNyZWF0ZVN0b3A9XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9ybUNyZWF0ZVN0b3ApXFxcIiAqbmdJZj1cXFwiaXNDcmVhdGVGb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5vbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIGlkPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFycml2YWxcXFwiPkRhdGUgQXJyaXbDqWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jYWxlbmRhciBuYW1lPVxcXCJhcnJpdmFsXFxcIiBpZD1cXFwiYXJyaXZhbFxcXCIgW2ZvY3VzZWREYXRlXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuYXJyaXZhbFxcXCIgcmVxdWlyZWQ+PC9rZW5kby1jYWxlbmRhcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGVhdmluZ1xcXCI+RGF0ZSBEw6lwYXJ0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwibGVhdmluZ1xcXCIgaWQ9XFxcImxlYXZpbmdcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmxlYXZpbmdcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNpdHlcXFwiPlZpbGxlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgaWQ9XFxcImNpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuY2l0eVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiPkFqb3V0ZXI8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPC9mb3JtPlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0c1wiXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZtSG91ckxvY2FsJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0SG91ciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGRhdGU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCw1KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1UcmlwRGF0ZScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEYXRlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkKS5mb3JtYXQoJ0xMJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2dcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==