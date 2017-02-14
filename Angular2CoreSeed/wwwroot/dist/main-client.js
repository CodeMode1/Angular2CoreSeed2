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
	__webpack_require__(69);
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
	var weather_component_1 = __webpack_require__(33);
	var weatherform_component_1 = __webpack_require__(39);
	var weatherdetail_component_1 = __webpack_require__(43);
	var weatherconstraints_component_1 = __webpack_require__(45);
	var weatherconstraint_component_1 = __webpack_require__(47);
	var trip_component_1 = __webpack_require__(50);
	var tripdetail_component_1 = __webpack_require__(55);
	var stop_component_1 = __webpack_require__(61);
	// services
	var login_service_1 = __webpack_require__(11);
	var trip_service_1 = __webpack_require__(51);
	var tripdetail_service_1 = __webpack_require__(56);
	var stop_service_1 = __webpack_require__(63);
	var weather_service_1 = __webpack_require__(31);
	var weatherconstraint_service_1 = __webpack_require__(48);
	// pipes, external modules
	var kendo_angular_dateinputs_1 = __webpack_require__(65);
	var weatherform_pipe_1 = __webpack_require__(66);
	var trip_pipe_1 = __webpack_require__(67);
	var kendo_angular_dialog_1 = __webpack_require__(68);
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

	module.exports = "<h1>Hello</h1>\n\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

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
	var router_1 = __webpack_require__(7);
	__webpack_require__(16);
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
	        template: __webpack_require__(32)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
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
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"isShowDelete\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <p>You deleted the wheather successfully.</p>        \r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <h2>Success deleting the weather #  : </h2>\r\n        <h3>{{idToDelete}}</h3>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"hideNotif()\">Hide</button>\r\n</div>\r\n\r\n<kendo-dialog *ngIf=\"isDelete\" (close)=\"cancelDelete()\">\r\n    <kendo-dialog-titlebar>\r\n        <div style=\"font-size: 18px; line-height: 1.3em;\">\r\n            <span class=\"k-icon k-i-warning\"></span> Delete Data\r\n        </div>\r\n    </kendo-dialog-titlebar>\r\n    <p style=\"margin: 30px; text-align: center;\">This action cannot be undone.</p>\r\n\r\n    <kendo-dialog-actions>\r\n        <button kendoButton (click)=\"cancelDelete()\">Cancel</button>\r\n        <button kendoButton (click)=\"onDeleteData()\">Delete</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

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
	var http_1 = __webpack_require__(12);
	var router_1 = __webpack_require__(7);
	var weather_1 = __webpack_require__(34);
	var weather_service_1 = __webpack_require__(31);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	var moment = __webpack_require__(35);
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
	        template: __webpack_require__(36),
	        styles: [__webpack_require__(37)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute,
	        weather_service_1.WeatherService, router_1.Router])
	], WeatherComponent);
	exports.WeatherComponent = WeatherComponent;


/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Create new Weather</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n                <th>Delete</th>\r\n                <th>Edit</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\">Delete</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\">Edit</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(38);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 39 */
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
	var weather_1 = __webpack_require__(34);
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
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41)]
	    }),
	    __metadata("design:paramtypes", [])
	], WeatherFormComponent);
	exports.WeatherFormComponent = WeatherFormComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"tempC\" name=\"tempC\" [(ngModel)]=\"weatherToSave.tempC\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(42);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 0.5rem solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 0.5rem solid #a94442; /* red */\r\n}\r\n\r\n.k-invalid {\r\n  color: red;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n/*#date, #date > table, #data > div.k-content.k-scrollable, kendo-calendar-monthview, table.k-calendar-weekdays{\r\n    padding: 0;\r\n    width: 100%;\r\n}*/\r\n\r\n/*.k-calendar.k-calendar-infinite {\r\n    padding: 0;\r\n}\r\n\r\n.form-group table{\r\n    width: 100%;\r\n}\r\n\r\nform-group div.k-content.k-scrollable{\r\n    width: 100%;\r\n}\r\n\r\nkendo-calendar-monthview.k-calendar-monthview{\r\n    width: 100%;\r\n}*/", ""]);
	
	// exports


/***/ },
/* 43 */
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
	        template: __webpack_require__(44)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
	], WeatherDetailComponent);
	exports.WeatherDetailComponent = WeatherDetailComponent;


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Weather Detail</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

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
	        template: __webpack_require__(46)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService])
	], WeatherConstraintsComponent);
	exports.WeatherConstraintsComponent = WeatherConstraintsComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<h2>Weathers</h2>\r\n\r\n<h3>Choose a weather to get weather constraints from : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

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
	var router_1 = __webpack_require__(7);
	var weatherconstraint_service_1 = __webpack_require__(48);
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
	        template: __webpack_require__(49)
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, weatherconstraint_service_1.WeatherConstraintsService])
	], WeatherConstraintComponent);
	exports.WeatherConstraintComponent = WeatherConstraintComponent;


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
/* 49 */
/***/ function(module, exports) {

	module.exports = "<h2>Constraints for the temperature : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Wind km/h\r\n                <!--<img src=\"../../../../wwwroot/dist/img/wind.png\"/>-->\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

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
	var trip_service_1 = __webpack_require__(51);
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
	        template: __webpack_require__(52),
	        styles: [__webpack_require__(53)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService])
	], TripComponent);
	exports.TripComponent = TripComponent;


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
/* 52 */
/***/ function(module, exports) {

	module.exports = "<h1>Bienvenue {{userName}}</h1>\r\n<h2>{{titreTrip}}</h2>\r\n<h3>Disponibles présentement</h3>\r\n\r\n<div *ngFor=\"let trip of trips\" class=\"infosTrip\">\r\n    <ul>\r\n        <li>{{trip?.name}}</li>\r\n        <li>{{trip?.country}}</li>\r\n        <li>{{trip?.continent}}</li>\r\n    </ul>\r\n    <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n    <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n</div>\r\n\r\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(54);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.infosTrip{\r\n    width: auto;\r\n    height: auto;\r\n    background-color:#9de6ff;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    margin: 1%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var tripdetail_service_1 = __webpack_require__(56);
	var trip_1 = __webpack_require__(57);
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
	        template: __webpack_require__(58),
	        styles: [__webpack_require__(59)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripDetailComponent);
	exports.TripDetailComponent = TripDetailComponent;


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

	module.exports = "<h2>Détails Trip</h2>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip.stops\">\r\n        <span><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n        <a> \r\n            {{stop?.name}}, {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},\r\n            {{stop?.city}}\r\n        </a>\r\n        <span><a class=\"btn btn-sm btn-success\">Ajouter</a></span>\r\n    </li>\r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>Create a new Stop<span><a [routerLink]=\"['stop']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-arrow-up\"></i></a></span></li>\r\n    <li><a>View my stops</a></li>\r\n    <li><a>Delete stops</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"col-md-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>\r\n</div>"

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

	exports = module.exports = __webpack_require__(23)();
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
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(7);
	var stop_1 = __webpack_require__(62);
	var stop_service_1 = __webpack_require__(63);
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
	        template: __webpack_require__(64)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
	        stop_service_1.StopService])
	], StopComponent);
	exports.StopComponent = StopComponent;


/***/ },
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\"/>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-lg btn-success\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(280);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var moment = __webpack_require__(35);
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(282);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(301);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQ5ZGYyNTBhZWM0MmRhNWYwN2IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9icm93c2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9icm93c2VyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3M/ZGRjMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3M/ZDU3MiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3M/ZTBlNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3M/ZTExYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3M/Y2JkOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAucGlwZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQThDO0FBQzlDLHFDQUErQztBQUMvQyxtREFBOEQ7QUFDOUQsMkNBQTZDO0FBQzdDLHlCQUFtQjtBQUVuQix5REFBd0Q7QUFDeEQsR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUNyQixFQUFDO0FBRUQsc0VBQXFFO0FBQ3JFLEtBQU0sUUFBUSxHQUFHLDZDQUF3QixFQUFFLENBQUM7QUFDNUMsS0FBTSxlQUFlLEdBQUcsY0FBUSxRQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxHQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFL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RSxhQUFhO1NBQ25CLElBQUksRUFBRSxLQUFLO01BQ2QsQ0FBQztJQUVXLFVBQVUsQ0FJdEI7QUFKWSxpQ0FBVTs7Ozs7Ozs7Ozs7Ozs7QUNSdkIscUNBQW9EO0FBQ3BELHNDQUFpQztBQVFqQyxLQUFhLFFBQVE7S0FBckI7S0FNQSxDQUFDO0tBTEcsNEJBQVMsR0FBVCxVQUFVLElBQVMsRUFBRSxJQUFVO1NBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEMsQ0FBQztLQUNMLGVBQUM7QUFBRCxFQUFDO0FBTlksU0FBUTtLQUxwQixXQUFJLENBQUM7U0FDRixJQUFJLEVBQUUsWUFBWTtTQUNsQixJQUFJLEVBQUUsS0FBSztNQUNkLENBQUM7SUFFVyxRQUFRLENBTXBCO0FBTlksNkJBQVE7Ozs7Ozs7QUNUckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Im1haW4tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTQ5ZGYyNTBhZWM0MmRhNWYwN2IiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvYnJvd3Nlcic7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Vbml2ZXJzYWxEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBFbmFibGUgZWl0aGVyIEhvdCBNb2R1bGUgUmVsb2FkaW5nIG9yIHByb2R1Y3Rpb24gbW9kZVxuaWYgKG1vZHVsZVsnaG90J10pIHtcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xuICAgIG1vZHVsZVsnaG90J10uZGlzcG9zZSgoKSA9PiB7IHBsYXRmb3JtLmRlc3Ryb3koKTsgfSk7XG59IGVsc2Uge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8vIEJvb3QgdGhlIGFwcGxpY2F0aW9uLCBlaXRoZXIgbm93IG9yIHdoZW4gdGhlIERPTSBjb250ZW50IGlzIGxvYWRlZFxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybVVuaXZlcnNhbER5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI2OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI5NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvYnJvd3Nlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyOTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvYnJvd3Nlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBsb2dpblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZCc7XG5cbi8vIG1haW4gY29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcblxuLy8gcGlwZXMsIGV4dGVybmFsIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIFRyaXBEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICAvLyBwaXBlc1xuICAgICAgICBGb3JtYXRIb3VyLFxuICAgICAgICBUcmlwRGF0ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBUcmlwU2VydmljZSxcbiAgICAgICAgVHJpcERldGFpbFNlcnZpY2UsXG4gICAgICAgIFN0b3BTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyU2VydmljZSxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzJywgY29tcG9uZW50OiBUcmlwQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcy86aWQnLCBjb21wb25lbnQ6IFRyaXBEZXRhaWxDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogU3RvcENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdzdG9wJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycycsIGNvbXBvbmVudDogV2VhdGhlckNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2RldGFpbC86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3dlYXRoZXJDb25zdHJhaW50cycsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg1Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IDxJVXNlcj5mb3JtLnZhbHVlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ2luQVBJKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaXBwZWRUb2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGxvZ2luIHVzZXIgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoeyB0b2tlbjogc3RyaXBwZWRUb2tlbiwgdXNlck5hbWU6IHRoaXMudXNlci51c2VyTmFtZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiA9IHN0cmlwcGVkVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gXCJJbXBvc3NpYmxlIGRlIGxvZ3VlciBsZSB1c2VyIDogXCIgKyB0aGlzLnVzZXIudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci51c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBsb2cgdXNlciAgOiBcIiArIHRoaXMudXNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nLCBwdWJsaWMgZW1haWw6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpIHt9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vVXNlci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVVzZXIsIFVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXJsTG9naW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsTG9naW4gPSAnYXBpL2F1dGgvdG9rZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luQVBJKHVzZXI6IElVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybExvZ2luLCBib2R5LCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgICAgIC8vIGNsZWFyIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSB0byBsb2cgb3V0IHVzZXJcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzOTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyMzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xNzdjODBmNTYwOTZlNTQwNTNiMFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgPGgzPkxvZ2luPC9oMz5cXHJcXG4gICAgPGZvcm0gI2xvZ2luPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGxvZ2luKVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VyTmFtZVxcXCI+VXNlciBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIGlkPVxcXCJ1c2VyTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIudXNlck5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnVzZXJOYW1lLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+VXNlcm5hbWUgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkNvdXJyaWVsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLmVtYWlsLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RW1haWwgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPk1vdCBQYXNzZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5wYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPk1vdCBQYXNzZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiPlNlIExvZ3VlcjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxpICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1wdWxzZSBmYS0zeCBmYS1md1xcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlcnJvclxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvcn19PC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkge1xyXG4gICAgICAgICAgICAvLyBsb2dnZWQgaW4gc28gcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9sb2dpblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcblxcbiAgICBhe1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlcnMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdFxcXCI+PC9zcGFuPiBXZWF0aGVyc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93ZWF0aGVyQ29uc3RyYWludHMnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eVxcXCI+PC9zcGFuPiBXZWF0aGVyIENvbnN0cmFpbnRzXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFxcXCI+PC9zcGFuPiBMb2dPdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKXt9XG5cbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvPC9oMT5cXG5cXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXG48dWw+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcbjwvdWw+XFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXG48dWw+XFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcbjwvdWw+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWxldGUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGVsZXRlLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpc0RlbGV0ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb0RlbGV0ZUlkOiBudW1iZXI7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlU3VjY2VzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlkVG9EZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dEZWxldGU6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuaWRUb0RlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dEZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGUpIHtcclxuICAgICAgICAgICAgLy8gcG9wIHVwIG9wZW5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbiBkZWxldGUgOiBcIiArIHRoaXMuaXNEZWxldGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTm90aWYoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dEZWxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gdGhpcy53ZWF0aGVyVG9EZWxldGVJZDtcclxuICAgICAgICB0aGlzLmRlbGV0ZXJXZWF0aGVyQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbERlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlcldlYXRoZXJCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5kZWxldGVXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIERFTEVURSBpbiBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxXZWF0aGVyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX3VybFdlYXRoZXIgPSBcImFwaS93ZWF0aGVyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgYWxsIHdlYXRoZXIgb2JqZWN0c1xyXG4gICAgZ2V0QWxsV2VhdGhlcnNBUEkoKTogT2JzZXJ2YWJsZTxJV2VhdGhlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1Q6ICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHBvc3RXZWF0aGVyQVBJKHdlYXRoZXI6IFdlYXRoZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQVVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0XHJcbiAgICBwdXRXZWF0aGVyQVBJKHdlYXRoZXI6IFdlYXRoZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgYnkgaWRcclxuICAgIGdldFdlYXRoZXJCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IG5hbWVcclxuICAgIGdldFdlYXRoZXJCeU5hbWVBUEkobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyICsgXCIvQnlOYW1lL1wiICsgbmFtZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgZGV0YWlscyBieSBpZFxyXG4gICAgZGVsZXRlV2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZGVsZXRlIHdlYXRoZXIsIHJlc3Agd2UgZ2V0IGluIHNlcnZpY2UgOiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5jb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiICsgZXJyb3IpKSAgICAgIFxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJpc1Nob3dEZWxldGVcXFwiIGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1zdWNjZXNzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICA8cD5Zb3UgZGVsZXRlZCB0aGUgd2hlYXRoZXIgc3VjY2Vzc2Z1bGx5LjwvcD4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8aDI+U3VjY2VzcyBkZWxldGluZyB0aGUgd2VhdGhlciAjICA6IDwvaDI+XFxyXFxuICAgICAgICA8aDM+e3tpZFRvRGVsZXRlfX08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiaGlkZU5vdGlmKClcXFwiPkhpZGU8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48a2VuZG8tZGlhbG9nICpuZ0lmPVxcXCJpc0RlbGV0ZVxcXCIgKGNsb3NlKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS4zZW07XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+IERlbGV0ZSBEYXRhXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9wPlxcclxcblxcclxcbiAgICA8a2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gKGNsaWNrKT1cXFwib25EZWxldGVEYXRhKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbjwva2VuZG8tZGlhbG9nPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuLi93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG4gICAgcHVibGljIHdlYXRoZXIxOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIHNob3dGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdHJlV2VhdGhlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGVkaXRGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIGZtRGF0ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0cmVXZWF0aGVyID0gXCJXZWF0aGVyIENoZWNrXCI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIG1vbWVudCBqcyBmb3JtYXQgYSBkYXRlIHdpdGggYSBzdHJpbmcgZm9ybWF0LCByZXR1cm5zIGEgZGF0ZS5cclxuICAgICAgICBtb21lbnQubG9jYWxlKCdlbi1jYScpO1xyXG4gICAgICAgIHRoaXMuZm1EYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZtRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2xhc3Mgd2VhdGhlciBvYmplY3QgdG8gYmluZCB0by5cclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gbmV3IFdlYXRoZXIoMSwgXCJBdXRvbW5XZWF0aGVyXCIsIHRoaXMuZm1EYXRlLCAxNCwgXCJUZW1ww6lyYXR1cmUgQXV0b21uZVwiKTtcclxuICAgICAgICAvLyBNZXRob2QgdG8gZ2V0IHdlYXRoZXIgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgOiBhbGwgd2VhdGhlciBvYmplY3RzIGZyb20gZGJcclxuICAgIGdldEFsbFdlYXRoZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgd2VhdGhlciBvYmpldHMgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgZHUgc2VydmljZSA6ICBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V2VhdGhlckZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9ICF0aGlzLnNob3dGb3JtO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0RlbGV0ZShpZFRvRGVsZXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWRUb0RlbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJzLnNwbGljZSh0aGlzLmlucHV0SWREZWxldGUsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRha2UgYSBqcyBvYmplY3QgICh1c3VhbGx5IG9iamVjdCBvciBhcnJheSkgY29udmVydCBpdCB0byBKU09OIHN0cmluZyBub3RhdGlvblxyXG4gICAgLy8gdG8gZ2V0IEpTT04gb2JqZWN0IHVzZSBwYXJzZSBtZXRob2RcclxuICAgIGdldCBkaWFnbm9zdGljKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgcGF5bG9hZCB3ZWF0aGVyIG9iamVjdCBmcm9tIGNoaWxkcmVuIGNvbXBvbmVudCB3ZWF0aGVyZm9ybVxyXG4gICAgcG9zdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9ICRldmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyB3ZWF0aGVyIHRvIHBvc3QgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyMSk7XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZCB0byBzYXZlIG5ldyB3ZWF0aGVyIG9iamVjdFxyXG4gICAgICAgIHRoaXMuc2F2ZVdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXJcclxuICAgIGVkaXRXZWF0aGVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSAkZXZlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0aW5nIGEgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gbWV0aG9kIHRvIGVkaXQgYSB3ZWF0aGVyXHJcbiAgICAgICAgdGhpcy5wdXRXZWF0aGVyKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXQgYSB3ZWF0aGVyIHdoZW4gY2xpY2tpbmcgYSBsaW5rIG9uIHdlYXRoZXIgb2JqZWN0cyB0YWJsZS5cclxuICAgIGdvRWRpdCh3ZWF0aGVyOiBXZWF0aGVyKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9IHdlYXRoZXI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVCA6IGNhbGwgdGhlIHBvc3QgYWN0aW9uIG9uIGJhY2tlbmQgdG8gY3JlYXRlIG5ldyB3ZWF0aGVyIG9iamVjdC5cclxuICAgIHNhdmVXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3RXZWF0aGVyQVBJKHdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9IGRhdGEuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBlcmF0dXJlRiA9IGRhdGEudGVtcGVyYXR1cmVGO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZWQgbmV3IHdlYXRoZXIgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCB0aGUgZGF0YSBpbiB0aGUgYnJvd3NlciB0byBnZXQgaGUgbmV3bHkgc2FiZWQgd2VhdGhlciBvYmplY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHlwZSBvZiBkYXRlIHNlbnQgYmFjayB0byBjbGllbnQgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mICh0aGlzLndlYXRoZXIxLmhvdXIpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBzYXZpbmcgd2VhdGhlciA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dFdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wdXRXZWF0aGVyQVBJKHdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSBkYXRhLmhvdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9IGRhdGEuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBDID0gZGF0YS50ZW1wQztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRlZCB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBlZGl0aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JvdXRlV2VhdGhlcigpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgdmFyIGFycmF5U3RyaW5nID0gW107XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gICAgdGhpcy5yb3V0ZS51cmwuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgLy8gICAgICAgIGFycmF5U3RyaW5nLnB1c2goZWxlbSk7XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2coZWxlbSk7XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2coZWxlbVtcIjBcIl1bXCJwYXRoXCJdKTtcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy8gICAgaWYgKGFycmF5U3RyaW5nWzFdICE9IHVuZGVmaW5lZCAmJiBhcnJheVN0cmluZ1sxXVtcIjBcIl1bXCJwYXRoXCJdID09IFwiYXRcIikge1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKFwiR09UIFlPVVwiKTtcclxuICAgIC8vICAgICAgICByZXR1cm4gXCJXZWF0aGVyIENoZWNrXCI7XHJcbiAgICAvLyAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgIHJldHVybiBcIldlbGNvbWVcIjtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVdlYXRoZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhvdXI/OiBEYXRlO1xuICAgIHRlbXBDPzogbnVtYmVyO1xuICAgIHN1bW1hcnk/OiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVGPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgV2VhdGhlciBpbXBsZW1lbnRzIElXZWF0aGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBob3VyPzogRGF0ZSxcbiAgICAgICAgcHVibGljIHRlbXBDPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgc3VtbWFyeT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHRlbXBlcmF0dXJlRj86IG51bWJlcikgeyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+e3t0aXRyZVdlYXRoZXJ9fTwvaDE+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzaG93V2VhdGhlckZvcm0oKVxcXCI+Q3JlYXRlIG5ldyBXZWF0aGVyPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3dlYXRoZXJUb0RlbGV0ZUlkXT1cXFwiaW5wdXRJZERlbGV0ZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJzaG93Rm9ybVxcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDx3ZWF0aGVyLWZvcm0gW3dlYXRoZXJUb1NhdmVdPVxcXCJ3ZWF0aGVyMVxcXCIgKG5ld1dlYXRoZXIpPVxcXCJwb3N0V2VhdGhlcigkZXZlbnQpXFxcIiAoZWRXZWF0aGVyKT1cXFwiZWRpdFdlYXRoZXIoJGV2ZW50KVxcXCIgW21vZGVFZGl0XT1cXFwiZWRpdEZvcm1cXFwiPjwvd2VhdGhlci1mb3JtPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcIndlYXRoZXJzXFxcIj5cXHJcXG5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5JZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhvdXIgQU0vUE08L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wIEY8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RGVsZXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWydkZXRhaWwnLCB3ZWF0aGVyLmlkXVxcXCI+e3t3ZWF0aGVyPy5pZH19PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/Lm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LmhvdXIgfCBmbUhvdXJMb2NhbH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcEN9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnN1bW1hcnl9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBlcmF0dXJlRn19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPjxhIChjbGljayk9XFxcImdvRGVsZXRlKHdlYXRoZXIuaWQpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zY2lzc29yc1xcXCI+RGVsZXRlPC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29FZGl0KHdlYXRoZXIpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPkVkaXQ8L2k+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICAgIFxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkZWxldGU+PC9kZWxldGU+XFxyXFxuXFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlcmZvcm0uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJGb3JtQ29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgd2VhdGhlclRvU2F2ZTogV2VhdGhlcjtcclxuICAgIEBPdXRwdXQoKSBuZXdXZWF0aGVyOiBFdmVudEVtaXR0ZXI8V2VhdGhlcj47XHJcbiAgICBAT3V0cHV0KCkgZWRXZWF0aGVyOiBFdmVudEVtaXR0ZXI8V2VhdGhlcj47XHJcbiAgICBASW5wdXQoKSBtb2RlRWRpdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgb25FZGl0OiBib29sZWFuO1xyXG4gICAgLy9mb3JtMTogTmdGb3JtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25FZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5ld1dlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgdGhpcy5lZFdlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgLy90aGlzLmZvcm0xID0gbmV3IE5nRm9ybShbXSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uIHZldXQgc291bWV0dHJlIG9uIGVkaXQuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVudm95ZXIgbGUgd2VhdGhlcmZvcm0gb2JqZWN0IGF1IHdlYXRoZXIgY29tcG9uZW50XHJcbiAgICBvblN1Ym1pdCh3ZWF0aGVyRm9ybTogTmdGb3JtKXsgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckZvcm0udmFsaWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb2RlRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkV2VhdGhlci5lbWl0KHRoaXMud2VhdGhlclRvU2F2ZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHBvdXIgcmV0b3VybmVyIG1vZGUgY3JlZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IGZhbHNlOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1dlYXRoZXIuZW1pdCh3ZWF0aGVyRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHBvdXIgcmV0b3VybmVyIG1vZGUgZWRpdGVyXHJcbiAgICAgICAgICAgIHRoaXMubW9kZUVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBGb3JtPC9oMT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHdlYXRoZXJGb3JtKVxcXCIgI3dlYXRoZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5uYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaG91clxcXCI+SG91cjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0aW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaG91clxcXCIgbmFtZT1cXFwiaG91clxcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUuaG91clxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidGVtcENcXFwiPlRlbXAgKkM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidGVtcENcXFwiIG5hbWU9XFxcInRlbXBDXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS50ZW1wQ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VtbWFyeVxcXCI+U3VtbWFyeTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VtbWFyeVxcXCIgbmFtZT1cXFwic3VtbWFyeVxcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUuc3VtbWFyeVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIXdlYXRoZXJGb3JtLnZhbGlkIHx8IG1vZGVFZGl0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJtb2RlRWRpdFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhd2VhdGhlckZvcm0udmFsaWRcXFwiPkVkaXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgW2hpZGRlbl09XFxcIiFzdWJtaXR0ZWRcXFwiPlxcclxcbiAgICAgICAgPGgyPllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZzo8L2gyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+TmFtZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05ICBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+SG91ciBBTS9QTTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLmhvdXIgfCBmbUhvdXJMb2NhbH19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXBlcmF0dXJlICpDPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUudGVtcEN9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5TdW1tYXJ5PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuc3VtbWFyeX19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXBlcmF0dXJlIEY8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wZXJhdHVyZUZ9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cXHJcXG59XFxyXFxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xcclxcbn1cXHJcXG5cXHJcXG4uay1pbnZhbGlkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyojZGF0ZSwgI2RhdGUgPiB0YWJsZSwgI2RhdGEgPiBkaXYuay1jb250ZW50Lmstc2Nyb2xsYWJsZSwga2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LCB0YWJsZS5rLWNhbGVuZGFyLXdlZWtkYXlze1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cXHJcXG5cXHJcXG4vKi5rLWNhbGVuZGFyLmstY2FsZW5kYXItaW5maW5pdGUge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB0YWJsZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZvcm0tZ3JvdXAgZGl2LmstY29udGVudC5rLXNjcm9sbGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5rZW5kby1jYWxlbmRhci1tb250aHZpZXcuay1jYWxlbmRhci1tb250aHZpZXd7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn0qL1wiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXJkZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckRldGFpbENvbXBvbmVudHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgICBwdWJsaWMgbWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZURldGFpbHMgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgfHwgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckJ5ZElkKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZURldGFpbHMgPSBcIkF1Y3VucyBkw6l0YWlscyDDoCBhZmZpY2hlclwiO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWF0aGVyQnlkSWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGwgZ2V0RGV0YWlscyBtZXRob2QgaW4gdGhlIG5zZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgd2VhdGhlciBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnQgZ2V0IGRldGFpbHMgYnkgaWQgOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+e3ttZXNzYWdlRGV0YWlsc319PC9oMj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyXFxcIj5cXHJcXG4gICAgPGgxPldlYXRoZXIgRGV0YWlsPC9oMT5cXHJcXG5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5JZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhvdXIgQU0vUE08L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wIEY8L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaWR9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/Lm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LmhvdXIgfCBmbUhvdXJMb2NhbH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcEN9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnN1bW1hcnl9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e3dlYXRoZXI/LnRlbXBlcmF0dXJlRn19PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPldlYXRoZXJzPC9oMj5cXHJcXG5cXHJcXG48aDM+Q2hvb3NlIGEgd2VhdGhlciB0byBnZXQgd2VhdGhlciBjb25zdHJhaW50cyBmcm9tIDogPC9oMz5cXHJcXG5cXHJcXG48dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW3dlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/Lm5hbWV9fTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQsIElDb25zdHJhaW50IH0gZnJvbSAnLi93ZWF0aGVyQ29uc3RyYWludCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1jb25zdHJhaW50JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlOiBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGUucGFyYW1zXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25zdHJhaW50cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnN0cmFpbnRzKCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJDb25zdHJhaW50U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0Q29uc3RyYWludHNBUEkodGhpcy5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IGFsbCB0aGUgY29uc3RyYWludHMgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgZHUgc2VydmV1ciA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3dlYXRoZXJDb25zdHJhaW50cycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQsIElDb25zdHJhaW50IH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnN0cmFpbnRzQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdhcGkvd2VhdGhlci8nICsgaWQgKyAnL2NvbnN0cmFpbnRzJylcclxuICAgICAgICAgICAgLm1hcCgocmVzcDogUmVzcG9uc2UpID0+IDxJQ29uc3RyYWludFtdPnJlc3AuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q29uc3RyYWludHMgZm9yIHRoZSB0ZW1wZXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFdpbmQga20vaFxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XFxcIi4uLy4uLy4uLy4uL3d3d3Jvb3QvZGlzdC9pbWcvd2luZC5wbmdcXFwiLz4tLT5cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgR3VzdCBrbS9oXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEh1bWlkaXR5ICVcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgU3VuIFJpc2luZyBBTVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gU2V0IFBNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIENsZWFyXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEZlZWxzIExpa2UgwrBDXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8ud2luZH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZ3VzdH19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaHVtaWRpdHl9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LnN1blJpc2luZ319XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uc3VuU2V0fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5CYWNrPC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi90cmlwJztcclxuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tICcuL3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyB0aXRyZVRyaXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aXRyZVRyaXAgPSBcIkxlcyBGb3JmYWl0cyBWb3lhZ2VzXCI7XHJcbiAgICAgICAgdGhpcy50cmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVHJpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKS51c2VyTmFtZSk7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpLnVzZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgZ2V0IG1ldGhvcyBzdXIgc2VydmljZS5cclxuICAgIGdldEFsbFRyaXBzKCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmlwU2VydmljZS5nZXRBbGxUcmlwc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgdHJpcHMgZnJvbSBzZXJ2aWNlIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhY2hldGVyVHJpcCh0cmlwOiBUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcFNlcnZpY2UucG9zdFRyaXBBUEkodHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGNyZWF0aW5nIHRyaXAgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0cmlwIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9ICdhcGkvdHJpcCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgQWxsIHRyaXBzIG9iamVjdHMuXHJcbiAgICBnZXRBbGxUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUOiAgICAxIHRyaXAgb2JqZWN0LlxyXG4gICAgcG9zdFRyaXBBUEkodHJpcDogVHJpcCk6IE9ic2VydmFibGU8SVRyaXA+IHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0cmlwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxUcmlwLCBib2R5LCBvcHRpb25zIClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXA+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKSAgICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5CaWVudmVudWUge3t1c2VyTmFtZX19PC9oMT5cXHJcXG48aDI+e3t0aXRyZVRyaXB9fTwvaDI+XFxyXFxuPGgzPkRpc3BvbmlibGVzIHByw6lzZW50ZW1lbnQ8L2gzPlxcclxcblxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgdHJpcCBvZiB0cmlwc1xcXCIgY2xhc3M9XFxcImluZm9zVHJpcFxcXCI+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT57e3RyaXA/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICA8bGk+e3t0cmlwPy5jb3VudHJ5fX08L2xpPlxcclxcbiAgICAgICAgPGxpPnt7dHJpcD8uY29udGluZW50fX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8cD5EYXRlIGRlIETDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlt0cmlwLmlkXVxcXCI+Vm9pciBUcmlwPC9hPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwe1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5ZGU2ZmY7XFxyXFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46IDElO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXA6aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwZGV0YWlsOiBUcmlwRGV0YWlsU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyaXBCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN0b3BzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yICk7ICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gXCJhcGkvdHJpcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgU3RvcCB9IGZyb20gJy4uL3N0b3Avc3RvcCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlwe1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBsZWF2aW5nPzogRGF0ZTtcclxuICAgIGNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBjb250aW5lbnQ/OiBzdHJpbmc7XHJcbiAgICBzdG9wcz86IFN0b3BbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXAgaW1wbGVtZW50cyBJVHJpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGVhdmluZz86IERhdGUsXHJcbiAgICAgICAgcHVibGljIGNvdW50cnk/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGNvbnRpbmVudD86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc3RvcHM/OiBTdG9wW10pIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+RMOpdGFpbHMgVHJpcDwvaDI+XFxyXFxuXFxyXFxuPHVsICpuZ0lmPVxcXCJzZWxlY3RlZFRyaXBcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtYWRkcmVzcy1ib29rXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmlkfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5uYW1lfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3VyZ2xhc3NcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdGVsXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvdW50cnl9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhLWhvbWVcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY29udGluZW50fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxoMz5TdG9wczwvaDM+PC9saT5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2Ygc2VsZWN0ZWRUcmlwLnN0b3BzXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICA8YT4gXFxyXFxuICAgICAgICAgICAge3tzdG9wPy5uYW1lfX0sIHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fSwge3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19LFxcclxcbiAgICAgICAgICAgIHt7c3RvcD8uY2l0eX19XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8c3Bhbj48YSBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCI+QWpvdXRlcjwvYT48L3NwYW4+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPkNyZWF0ZSBhIG5ldyBTdG9wPHNwYW4+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ3N0b3AnXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPjwvYT48L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxhPlZpZXcgbXkgc3RvcHM8L2E+PC9saT5cXHJcXG4gICAgPGxpPjxhPkRlbGV0ZSBzdG9wczwvYT48L2xpPlxcclxcbjwvdWw+XFxyXFxuXFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5CYWNrPC9idXR0b24+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW57XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9wLCBJU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9wQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaXNDcmVhdGVGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRyaXBJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd0Zvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdG9wOiBTdG9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IG5ldyBTdG9wKDEsIFwiUGxhZ2VcIiwgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgXCJNb250csOpYWxcIiwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB3ZXJlIG5vdCBpbiAvc3RvcCB5ZXQsIGpzdXQgZGlzcGxheSBhIG1lc3NhZ2UgZm9yIHRoZSB1c2VyXHJcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCB8fCBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJDcsOpZXIgdW4gbm91dmVhdSBzdG9wIHBvdXIgY2UgdHJpcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHBhcmVudCBBY3RpdmF0ZWRSb3V0ZSBvZiB0aGlzIHJvdXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyZW50LnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlwSWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZHUgcGFyZW50IHBvdXIgc2F1dmVyIHN0b3AgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChjcmVhdGVGb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IDxJU3RvcD5jcmVhdGVGb3JtLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3N0U3RvcFNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RvcFNlcnZpY2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFNlcnZpY2UucG9zdFN0b3BCeUlkQVBJKHRoaXMudHJpcElkLCB0aGlzLnNlbGVjdGVkU3RvcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIHNhdmVkIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmFycml2YWwgPSBkYXRhLmFycml2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubGVhdmluZyA9IGRhdGEubGVhdmluZztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYW50IHNhdmUgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9ICF0aGlzLmlzQ3JlYXRlRm9ybTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBkZXN0cm95XCIpO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVN0b3Age1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFycml2YWw6IERhdGU7XHJcbiAgICBsZWF2aW5nOiBEYXRlO1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3AgaW1wbGVtZW50cyBJU3RvcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXJyaXZhbDogRGF0ZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsZWF2aW5nOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNpdHk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yZGVyOiBudW1iZXIpIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuL3N0b3AnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsU3RvcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLl91cmxTdG9wID0gJ2FwaS9zdG9wJztcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RvcEJ5SWRBUEkoaWQ6IG51bWJlciwgc3RvcDogU3RvcCk6IE9ic2VydmFibGU8SVN0b3A+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7IFxyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3RvcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxTdG9wICsgXCIvXCIgKyBpZCwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxyXFxuICAgIDxoND57e21lc3NhZ2V9fTwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIiAqbmdJZj1cXFwiaXNTaG93Rm9ybVxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFN0b3AoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPGZvcm0gI2Zvcm1DcmVhdGVTdG9wPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcm1DcmVhdGVTdG9wKVxcXCIgKm5nSWY9XFxcImlzQ3JlYXRlRm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5Ob208L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5uYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhcnJpdmFsXFxcIj5EYXRlIEFycml2w6llPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwiYXJyaXZhbFxcXCIgaWQ9XFxcImFycml2YWxcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxlYXZpbmdcXFwiPkRhdGUgRMOpcGFydDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImxlYXZpbmdcXFwiIGlkPVxcXCJsZWF2aW5nXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjaXR5XFxcIj5WaWxsZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNpdHlcXFwiIGlkPVxcXCJjaXR5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmNpdHlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXFxcIj5Bam91dGVyPC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1Ib3VyTG9jYWwnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRIb3VyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gZGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLDUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbVRyaXBEYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERhdGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50KGQpLmZvcm1hdCgnTEwnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMTc3YzgwZjU2MDk2ZTU0MDUzYjBcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMwMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzE3N2M4MGY1NjA5NmU1NDA1M2IwXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9