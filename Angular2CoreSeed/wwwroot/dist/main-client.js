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
	// imports ci haut, les polyfills pour enabler un nouvel API/web support dans un old browser/environment
	var platform_browser_dynamic_1 = __webpack_require__(170);
	var core_1 = __webpack_require__(171);
	var app_module_1 = __webpack_require__(172);
	__webpack_require__(277);
	// Enable either Hot Module Reloading or production mode
	if (module['hot']) {
	    module['hot'].accept();
	    module['hot'].dispose(function () { platform.destroy(); });
	}
	else {
	    core_1.enableProdMode();
	}
	// Boot the application, either now or when the DOM content is loaded
	var platform = platform_browser_dynamic_1.platformBrowserDynamic();
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

	module.exports = (__webpack_require__(2))(1333);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_31067192579c8d0e2e0a;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// This file includes polyfills needed by Angular and is loaded before the app.
	// You can add your own extra polyfills to this file.
	"use strict";
	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(25);
	__webpack_require__(29);
	__webpack_require__(31);
	__webpack_require__(33);
	__webpack_require__(46);
	__webpack_require__(64);
	__webpack_require__(91);
	__webpack_require__(97);
	__webpack_require__(119);
	__webpack_require__(123);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(144);
	// enable dependency injection in decorator functions. (replaces packages reflect-metadata + es6-shim)
	__webpack_require__(159);
	__webpack_require__(169);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(6);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1024);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(978);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(6);
	
	module.exports = __webpack_require__(7).Object;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(963);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(965);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(964);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(967);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(969);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(974);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(968);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(966);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(976);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(975);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(971);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(972);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(970);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(962);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(973);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(977);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	module.exports = __webpack_require__(7).Function;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(930);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(932);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(931);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(7).parseInt;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(980);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(7).parseFloat;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(979);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	module.exports = __webpack_require__(7).Number;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(950);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(960);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(961);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(951);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(952);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(953);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(954);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(955);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(956);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(957);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(958);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(959);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	module.exports = __webpack_require__(7).Math;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(933);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(934);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(935);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(936);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(937);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(938);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(939);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(940);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(941);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(942);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(943);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(944);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(945);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(946);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(947);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(948);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(949);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	module.exports = __webpack_require__(7).String;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1011);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1016);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1023);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1014);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1006);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1007);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1012);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1017);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1019);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1002);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1003);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1004);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1005);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1008);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1009);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1010);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1013);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1015);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1018);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1020);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1021);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1022);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(997);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(998);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(999);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1000);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	module.exports = Date;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(925);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(927);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(926);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(929);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(928);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	module.exports = __webpack_require__(7).Array;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(914);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(912);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(918);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(915);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(921);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(923);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(911);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(917);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(908);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(922);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(906);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(920);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(919);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(913);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(916);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(905);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(907);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(910);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(909);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(924);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(272);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	module.exports = __webpack_require__(7).RegExp;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(996);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1001);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(527);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(68);
	__webpack_require__(124);
	__webpack_require__(125);
	module.exports = __webpack_require__(7).Map;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1072);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(526);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(68);
	__webpack_require__(124);
	__webpack_require__(127);
	module.exports = __webpack_require__(7).Set;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(528);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(118);
	__webpack_require__(129);
	module.exports = __webpack_require__(7).WeakMap;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(529);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(124);
	__webpack_require__(131);
	module.exports = __webpack_require__(7).WeakSet;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1036);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(6);
	module.exports = __webpack_require__(7);

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1025);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1026);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1031);

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1034);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1035);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1029);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1032);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1030);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1033);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1027);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1028);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	module.exports = __webpack_require__(7).Reflect;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(982);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(983);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(984);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(985);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(986);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(989);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(987);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(988);

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(990);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(991);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(992);

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(993);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(995);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(994);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	module.exports = __webpack_require__(7).Reflect;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1053);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1054);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1056);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1055);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1058);

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1057);

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1059);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1060);

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1061);

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1334);

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(693);

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var forms_1 = __webpack_require__(174);
	var platform_browser_1 = __webpack_require__(175);
	var http_1 = __webpack_require__(176);
	// login
	var login_component_1 = __webpack_require__(177);
	var auth_guard_1 = __webpack_require__(185);
	// main components
	var app_component_1 = __webpack_require__(186);
	var navmenu_component_1 = __webpack_require__(191);
	var home_component_1 = __webpack_require__(195);
	var delete_component_1 = __webpack_require__(199);
	var weather_component_1 = __webpack_require__(204);
	var weatherform_component_1 = __webpack_require__(210);
	var weatherdetail_component_1 = __webpack_require__(214);
	var weatherconstraints_component_1 = __webpack_require__(216);
	var weatherconstraint_component_1 = __webpack_require__(218);
	var trip_component_1 = __webpack_require__(221);
	var tripbest_component_1 = __webpack_require__(226);
	var tripdetail_component_1 = __webpack_require__(230);
	var tripuser_component_1 = __webpack_require__(235);
	var rating_component_1 = __webpack_require__(239);
	var stop_component_1 = __webpack_require__(243);
	var stopedit_component_1 = __webpack_require__(248);
	var map_component_1 = __webpack_require__(252);
	var demo_component_1 = __webpack_require__(257);
	// services
	var login_service_1 = __webpack_require__(179);
	var trip_service_1 = __webpack_require__(222);
	var tripdetail_service_1 = __webpack_require__(202);
	var stop_service_1 = __webpack_require__(201);
	var weather_service_1 = __webpack_require__(200);
	var weatherconstraint_service_1 = __webpack_require__(219);
	var map_service_1 = __webpack_require__(253);
	// pipes
	var weatherform_pipe_1 = __webpack_require__(260);
	var trip_pipe_1 = __webpack_require__(261);
	// kendo UI modules
	var kendo_angular_dateinputs_1 = __webpack_require__(262);
	var kendo_angular_dialog_1 = __webpack_require__(263);
	var kendo_angular_inputs_1 = __webpack_require__(264);
	var kendo_angular_layout_1 = __webpack_require__(265);
	var kendo_angular_charts_1 = __webpack_require__(266);
	var kendo_angular_grid_1 = __webpack_require__(267);
	var kendo_angular_buttons_1 = __webpack_require__(268);
	var kendo_angular_dropdowns_1 = __webpack_require__(269);
	var kendo_angular_popup_1 = __webpack_require__(270);
	var kendo_angular_scrollview_1 = __webpack_require__(271);
	var kendo_angular_sortable_1 = __webpack_require__(272);
	var kendo_angular_upload_1 = __webpack_require__(273);
	// Map
	var core_2 = __webpack_require__(274);
	// touch, swipe, tap, fragment actions
	__webpack_require__(275);
	// paging
	var ng2_pagination_1 = __webpack_require__(276);
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
	            tripbest_component_1.BestTripComponent,
	            tripdetail_component_1.TripDetailComponent,
	            tripuser_component_1.TripUserComponent,
	            stopedit_component_1.EditStopComponent,
	            stop_component_1.StopComponent,
	            login_component_1.LoginComponent,
	            rating_component_1.RatingComponent,
	            map_component_1.MapComponent,
	            demo_component_1.DemoComponent,
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
	            weatherconstraint_service_1.WeatherConstraintsService,
	            map_service_1.MapService
	        ],
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            http_1.JsonpModule,
	            forms_1.FormsModule,
	            kendo_angular_dateinputs_1.DateInputsModule,
	            kendo_angular_dialog_1.DialogModule,
	            kendo_angular_inputs_1.InputsModule,
	            kendo_angular_layout_1.LayoutModule,
	            kendo_angular_charts_1.ChartsModule,
	            ng2_pagination_1.Ng2PaginationModule,
	            kendo_angular_grid_1.GridModule,
	            kendo_angular_buttons_1.ButtonsModule,
	            kendo_angular_dropdowns_1.DropDownsModule,
	            kendo_angular_popup_1.PopupModule,
	            kendo_angular_scrollview_1.ScrollViewModule,
	            kendo_angular_sortable_1.SortableModule,
	            kendo_angular_upload_1.UploadModule,
	            core_2.AgmCoreModule.forRoot({
	                apiKey: 'AIzaSyDBrS5tSY6s57jeEO6aH_Si7coVk0_x_IU'
	            }),
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'login', component: login_component_1.LoginComponent },
	                {
	                    path: 'trips', component: trip_component_1.TripComponent, canActivate: [auth_guard_1.AuthGuard], children: [
	                        { path: '', component: tripbest_component_1.BestTripComponent },
	                        { path: 'best', component: tripbest_component_1.BestTripComponent }
	                    ]
	                },
	                { path: 'trips/perso', component: tripuser_component_1.TripUserComponent, canActivate: [auth_guard_1.AuthGuard] },
	                {
	                    path: 'trips/:id', component: tripdetail_component_1.TripDetailComponent, children: [
	                        { path: '', component: stop_component_1.StopComponent },
	                        { path: 'stop', component: stop_component_1.StopComponent },
	                        { path: 'edit', component: stopedit_component_1.EditStopComponent }
	                    ]
	                },
	                { path: 'map', component: map_component_1.MapComponent },
	                { path: 'map/:id', component: map_component_1.MapComponent, canActivate: [auth_guard_1.AuthGuard] },
	                {
	                    path: 'weathers/:id', component: weather_component_1.WeatherComponent, children: [
	                        { path: '', component: weatherdetail_component_1.WeatherDetailComponent },
	                        { path: 'detail/:id', component: weatherdetail_component_1.WeatherDetailComponent }
	                    ]
	                },
	                { path: 'demo', component: demo_component_1.DemoComponent },
	                { path: 'weatherConstraints', component: weatherconstraints_component_1.WeatherConstraintsComponent },
	                { path: 'weatherConstraints/:id', component: weatherconstraint_component_1.WeatherConstraintComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(707);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(22);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(107);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(181);

/***/ },
/* 177 */
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
	var core_1 = __webpack_require__(171);
	var User_1 = __webpack_require__(178);
	var login_service_1 = __webpack_require__(179);
	var router_1 = __webpack_require__(173);
	var LoginComponent = (function () {
	    function LoginComponent(_loginService, _router) {
	        this._loginService = _loginService;
	        this._router = _router;
	        this.user = new User_1.User("DaphDC", "daph@daph.com", "P@ssw0rd!");
	        this.loading = false;
	        this.error = "";
	        this.msTimeOut = 3000;
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
	            for (var i = 0; i < data.role.length; i++) {
	                if (data.role[i].type == "SuperUser") {
	                    console.log("SuperUser");
	                    _this._loginService.estAdmin = true;
	                }
	            }
	            _this._router.navigateByUrl("/trips");
	        }, function (error) {
	            _this.error = "Impossible de loguer le user : " + _this.user.userName;
	            _this.user.email = "";
	            _this.user.password = "";
	            _this.user.userName = "";
	            setTimeout(function () { _this.stopLoading(); }, _this.msTimeOut);
	            console.log("error log user  : " + _this.user);
	        });
	    };
	    LoginComponent.prototype.stopLoading = function () {
	        this.loading = false;
	    };
	    return LoginComponent;
	}());
	LoginComponent = __decorate([
	    core_1.Component({
	        selector: 'login',
	        template: __webpack_require__(184)
	    }),
	    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 178 */
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
/* 179 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	//import { LocalStorageService } from 'angular-2-local-storage';
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
	        this.userName = null;
	        this.estAdmin = null;
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
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(647);

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(83);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(170);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1113);

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h3>Login</h3>\r\n    <form #login=\"ngForm\" (ngSubmit)=\"onSubmit(login)\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"userName\">User Name</label>\r\n            <input type=\"text\" name=\"userName\" id=\"userName\" class=\"form-control\" [(ngModel)]=\"user.userName\" required />\r\n            <div *ngIf=\"login.submitted && !user.userName.valid\" class=\"help-block\">Username est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Courriel</label>\r\n            <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" required />\r\n            <div *ngIf=\"login.submitted && !user.email.valid\" class=\"help-block\">Email est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Mot Passe</label>\r\n            <input type=\"text\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required />\r\n            <div *ngIf=\"login.submitted && !user.password.valid\" class=\"help-block\">Mot Passe est requis.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-md btn-success\">Se Loguer</button>\r\n            <div><i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i></div>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 185 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var login_service_1 = __webpack_require__(179);
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
/* 186 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var AppComponent = (function () {
	    function AppComponent(_router) {
	        this._router = _router;
	    }
	    AppComponent.prototype.goHome = function () {
	        this._router.navigateByUrl("/home");
	    };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(187),
	        styles: [__webpack_require__(188)]
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n            <div>\n                <a class=\"btn btn-md btn-primary\" id=\"buttonHome\" (click)=\"goHome()\"><i class=\"fa fa-home\"></i> Accueil</a>\n            </div>\n        </div>        \n    </div>\n</div>\n"

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(189);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n\n    a{\r\n        cursor: pointer;\r\n    }\n}\n\n#buttonHome{\r\n    margin: 5% 0;\r\n    clear: both;\r\n    float: left;\r\n}", ""]);
	
	// exports


/***/ },
/* 190 */
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(171);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(192),
	        styles: [__webpack_require__(193)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2CoreSeed</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li routerLinkActive=\"link-active\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\r\n                    <a>\r\n                        <span class=\"glyphicon glyphicon-user\"></span> Sign Up\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Sign In\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/trips']\">\n                        <span class=\"glyphicon glyphicon-road\"></span> Trips\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/weatherConstraints']\">\n                        <span class=\"glyphicon glyphicon-star-empty\"></span> Statistiques Temperatures\n                    </a>\n                </li>\n                <li>\r\n                    <a [routerLink]=\"['/map']\">\r\n                        <span class=\"glyphicon glyphicon-map-marker\"></span> Map\r\n                    </a>\r\n                </li>\n                <li>\r\n                    <a [routerLink]=\"['/demo']\">\r\n                        <span class=\"glyphicon glyphicon-list\"></span> Demo\r\n                    </a>\r\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-out\"></span> LogOut\r\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(194);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\na{\r\n    cursor: pointer;\r\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 195 */
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
	var core_1 = __webpack_require__(171);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.selected = 1;
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        this.items = [
	            {
	                subject: "ASP.NET Core",
	                content: "ASP.NET Core and C# for cross-platform server-side code",
	                link: 'https://get.asp.net/',
	                link2: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'
	            },
	            {
	                subject: "Angular 2 and TypeScript ",
	                content: "for client-side code",
	                link: 'https://angular.io/',
	                link2: 'http://www.typescriptlang.org/'
	            },
	            {
	                subject: "Webpack",
	                content: "for building and bundling client-side resources",
	                link: 'https://webpack.github.io/'
	            },
	            {
	                subject: "Bootstrap",
	                content: "for layout and styling",
	                link: 'http://getbootstrap.com/'
	            }
	        ];
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(196),
	        styles: [__webpack_require__(197)]
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello World</h1>\n\r\n<div>\r\n    <h3>Bienvenue Sur <span><strong><i>Angular2CoreSeed</i></strong></span>, Demo : </h3>\r\n</div>\r\n\r\n<section>\r\n    <kendo-tabstrip [ngClass]=\"'col-md-12'\" [ngStyle]=\"{'margin-bottom': '2%'}\">\r\n        <kendo-tabstrip-tab *ngFor=\"let item of items let i=index\"\r\n                            [title]=\"item.subject\"\r\n                            [selected]=\"i == selected\">\r\n            <template kendoTabContent>\r\n                <div>\r\n                    <p>{{item?.content}}</p>\r\n                    <p><a href=\"{{item?.link}}\">{{item?.link}}</a></p>\r\n                    <p><a href=\"{{item?.link2}}\">{{item?.link2}}</a></p>\r\n                </div>\r\n            </template>\r\n        </kendo-tabstrip-tab>\r\n    </kendo-tabstrip>\r\n</section>\r\n\r\n<div>\r\n    <h4>Les concepts importants : </h4>\r\n</div>\r\n\r\n <section>\r\n    <kendo-panelbar [ngStyle]=\"{'margin-bottom': '2%'}\">\r\n        <kendo-panelbar-item [title]=\"'Client-side navigation'\"></kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Server-side prerendering'\" [selected]=\"true\" [expanded]=\"true\">\r\n            <kendo-panelbar-item [title]=\"'For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Webpack dev middleware'\">\r\n            <kendo-panelbar-item [title]=\"'In development mode, no need to run the webpack build tool.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Hot module replacement'\">\r\n            <kendo-panelbar-item [title]=\"'In development mode, no need to reload the page after making most changes.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Efficient production builds'\">\r\n            <kendo-panelbar-item [title]=\"'In production mode, development-time features are disabled, and the webpack build tool produces minified static CSS and JavaScript files.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n    </kendo-panelbar>\n\n</section>"

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(198);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "a, p > a{\r\n    cursor: pointer;\r\n}\r\n\r\ndiv{\r\n    margin: 1% 0;\r\n    padding: 2% 0;\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 199 */
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
	var core_1 = __webpack_require__(171);
	var weather_service_1 = __webpack_require__(200);
	var stop_service_1 = __webpack_require__(201);
	var router_1 = __webpack_require__(173);
	__webpack_require__(183);
	var tripdetail_service_1 = __webpack_require__(202);
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
	        template: __webpack_require__(203)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService,
	        router_1.ActivatedRoute, stop_service_1.StopService, tripdetail_service_1.TripDetailService])
	], DeleteComponent);
	exports.DeleteComponent = DeleteComponent;


/***/ },
/* 200 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	var login_service_1 = __webpack_require__(179);
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
/* 201 */
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
	var core_1 = __webpack_require__(171);
	var login_service_1 = __webpack_require__(179);
	var http_1 = __webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
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
	        stop.cuisine = stop.cuisine["text"];
	        stop.guide = stop.guide["text"];
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
/* 202 */
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
	var core_1 = __webpack_require__(171);
	var login_service_1 = __webpack_require__(179);
	var http_1 = __webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
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
	        return this._http.delete(this._urlTrip + "/userTrip/" + trip.id, options)
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
/* 203 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"isShowNotif\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <p>Action effectuée.</p>        \r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"idToDelete\">\r\n        <h3>Succès supprimer #</h3>\r\n        <h4>{{idToDelete}}</h4>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"hideNotif()\">Hide</button>\r\n</div>\r\n\r\n<kendo-dialog *ngIf=\"isDelete\" (close)=\"cancelDelete()\">\r\n    <kendo-dialog-titlebar>\r\n        <div style=\"font-size: 18px; line-height: 1.3em;\">\r\n            <span class=\"k-icon k-i-warning\"></span> Supprimer donnée\r\n        </div>\r\n    </kendo-dialog-titlebar>\r\n    <p style=\"margin: 30px; text-align: center;\">Action irrévocable.</p>\r\n\r\n    <kendo-dialog-actions>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"cancelDelete()\">Cancel</button>\r\n        <button class=\"btn btn-md btn-danger\" (click)=\"onDeleteData()\">Delete</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

/***/ },
/* 204 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	var router_1 = __webpack_require__(173);
	var weather_1 = __webpack_require__(205);
	var weather_service_1 = __webpack_require__(200);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	var moment = __webpack_require__(206);
	var WeatherComponent = (function () {
	    function WeatherComponent(_http, _activatedRoute, _weatherService, _router) {
	        this._http = _http;
	        this._activatedRoute = _activatedRoute;
	        this._weatherService = _weatherService;
	        this._router = _router;
	        this.editForm = false;
	        this.inputDelete = false;
	        this.inputIdDelete = null;
	        this.titreWeather = "Recensement Température";
	        this.objectName = "";
	        this.showForm = false;
	        // moment js format a date with a string format, returns a date.
	        moment.locale('en-ca');
	        this.fmDate = moment(new Date()).format('HH:mm');
	        console.log(this.fmDate);
	    }
	    WeatherComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        console.log("here");
	        this.sub = this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null && params['id'] != undefined) {
	                var id = +params['id'];
	                console.log("here");
	                console.log(id);
	                // class weather object to bind to.
	                _this.weather1 = new weather_1.Weather(1, "AutomnWeather", _this.fmDate, 14, "Température Automne", 24, id);
	                console.log(_this.weather1);
	            }
	            // Method to get weather objects
	            _this.getAllWeathers();
	        });
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
	        // field du form changé
	        this.weather1.name = $event.name;
	        this.weather1.hour = $event.hour;
	        this.weather1.tempC = $event.tempC;
	        this.weather1.summary = $event.summary;
	        console.log("new weather to post : ");
	        console.log(this.weather1);
	        // Method to save new weather object
	        this.saveWeather(this.weather1);
	    };
	    // edit a weather
	    WeatherComponent.prototype.editWeather = function ($event) {
	        // field du form changé
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
	            _this.weather1.stopId = data.stopId;
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
	            _this.weather1.stopId = data.stopId;
	            console.log("edited weather : ");
	            console.log(data);
	            _this.getAllWeathers();
	        }, function (error) {
	            console.log("error editing weather : " + error);
	        });
	    };
	    WeatherComponent.prototype.ngOnDestroy = function () {
	        console.log("here unsubscribe weather component");
	        this.sub.unsubscribe();
	    };
	    return WeatherComponent;
	}());
	WeatherComponent = __decorate([
	    core_1.Component({
	        selector: 'weather',
	        template: __webpack_require__(207),
	        styles: [__webpack_require__(208)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute,
	        weather_service_1.WeatherService, router_1.Router])
	], WeatherComponent);
	exports.WeatherComponent = WeatherComponent;


/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";
	var Weather = (function () {
	    function Weather(id, name, hour, tempC, summary, temperatureF, stopId, constraints) {
	        this.id = id;
	        this.name = name;
	        this.hour = hour;
	        this.tempC = tempC;
	        this.summary = summary;
	        this.temperatureF = temperatureF;
	        this.stopId = stopId;
	        this.constraints = constraints;
	    }
	    return Weather;
	}());
	exports.Weather = Weather;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Enregistrer Température</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Nom</th>\r\n                <th>Heure AM/PM</th>\r\n                <th>Température °C</th>\r\n                <th>Sommaire</th>\r\n                <th>Température °F</th>\r\n                <th>Supprimer</th>\r\n                <th>Éditer</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\"> Supprimer</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\"> Éditer</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(209);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 210 */
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
	var core_1 = __webpack_require__(171);
	var weather_1 = __webpack_require__(205);
	var WeatherFormComponent = (function () {
	    //form1: NgForm;
	    function WeatherFormComponent() {
	        this.onEdit = false;
	        this.submitted = false;
	        this.newWeather = new core_1.EventEmitter();
	        this.edWeather = new core_1.EventEmitter();
	        //this.form1 = new NgForm([], []);
	        // number input
	        this.decimals = 0;
	        this.autoCorrect = true;
	        this.format = 'n0';
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
	        template: __webpack_require__(211),
	        styles: [__webpack_require__(212)]
	    }),
	    __metadata("design:paramtypes", [])
	], WeatherFormComponent);
	exports.WeatherFormComponent = WeatherFormComponent;


/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Form Température</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"name\">Nom</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"hour\">Heure</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"tempC\">Température °C</label>\r\n                <kendo-numerictextbox id=\"tempC\" name=\"tempC\" style=\"padding:0\" class=\"col-md-12\" [restrictDecimals]=\"true\"\r\n                    [decimals]=\"decimals\" [(ngModel)]=\"weatherToSave.tempC\" [step]=\"1\" [min]=\"1\" [max]=\"45\"\r\n                    [autoCorrect]=\"autoCorrect\" [format]=\"format\">\r\n                </kendo-numerictextbox>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"summary\">Sommaire</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Soumettre</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Éditer</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>Vous avez soumis :</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Nom</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Heure AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Température °C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Sommaire</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Température °F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(213);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 0.5rem solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 0.5rem solid #a94442; /* red */\r\n}\r\n\r\n.k-invalid {\r\n  color: red;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n/*#date, #date > table, #data > div.k-content.k-scrollable, kendo-calendar-monthview, table.k-calendar-weekdays{\r\n    padding: 0;\r\n    width: 100%;\r\n}*/\r\n\r\n/*.k-calendar.k-calendar-infinite {\r\n    padding: 0;\r\n}\r\n\r\n.form-group table{\r\n    width: 100%;\r\n}\r\n\r\nform-group div.k-content.k-scrollable{\r\n    width: 100%;\r\n}\r\n\r\nkendo-calendar-monthview.k-calendar-monthview{\r\n    width: 100%;\r\n}*/", ""]);
	
	// exports


/***/ },
/* 214 */
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
	var core_1 = __webpack_require__(171);
	var weather_service_1 = __webpack_require__(200);
	var router_1 = __webpack_require__(173);
	var WeatherDetailComponent = (function () {
	    function WeatherDetailComponent(_weatherService, _activatedRoute, _router) {
	        var _this = this;
	        this._weatherService = _weatherService;
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this.messageDetails = "";
	        if (this._activatedRoute.snapshot.url[0] != null &&
	            this._activatedRoute.snapshot.url[0].path == "detail") {
	            this.sub2 = this._router.events.subscribe(function (event) {
	                console.log(event);
	                var segmentUrl = event.url.split('/');
	                console.log(segmentUrl);
	                if (segmentUrl[3] != null && typeof (segmentUrl[3]) != 'undefined' && segmentUrl[3] == 'detail') {
	                    if (segmentUrl[4] != null && typeof (segmentUrl[4]) != 'undefined') {
	                        var idWeather = +segmentUrl[4];
	                        console.log(idWeather);
	                        _this.getWeatherBydId(idWeather);
	                    }
	                }
	            });
	        }
	    }
	    WeatherDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this._activatedRoute.snapshot.url[0] != null &&
	            this._activatedRoute.snapshot.url[0].path == "detail") {
	            console.log("can use snapshot");
	            var snapshot = this._activatedRoute.snapshot;
	            var idWeather = snapshot.url[1].path;
	            if (idWeather != null && typeof (idWeather) != 'undefined') {
	                var id = +idWeather;
	                this.getWeatherBydId(id);
	            }
	        }
	        else {
	            this.sub = this._activatedRoute.params.subscribe(function (params) {
	                if (params['id'] != null && params['id'] != 'undefined') {
	                    var id = +params['id'];
	                    console.log("here in parent");
	                    console.log(id);
	                    console.log(_this._activatedRoute);
	                    // la route n'est pas activée, la route parente est active (weather component)
	                    _this.messageDetails = "Aucuns détails à afficher";
	                }
	            });
	        }
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
	        console.log("unsub");
	        if (this.sub != null && typeof (this.sub) != 'undefined') {
	            this.sub.unsubscribe();
	        }
	        if (this.sub2 != null && typeof (this.sub2) != 'undefined') {
	            this.sub2.unsubscribe();
	        }
	    };
	    return WeatherDetailComponent;
	}());
	WeatherDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'weatherdetail',
	        template: __webpack_require__(215)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], WeatherDetailComponent);
	exports.WeatherDetailComponent = WeatherDetailComponent;


/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Détails Température</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Nom</th>\r\n                <th>Heure AM/PM</th>\r\n                <th>Température °C</th>\r\n                <th>Sommaire</th>\r\n                <th>Température °F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

/***/ },
/* 216 */
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
	var core_1 = __webpack_require__(171);
	var weather_service_1 = __webpack_require__(200);
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
	        template: __webpack_require__(217)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService])
	], WeatherConstraintsComponent);
	exports.WeatherConstraintsComponent = WeatherConstraintsComponent;


/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<h2>Températures</h2>\r\n\r\n<h3>Choisir une Température : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

/***/ },
/* 218 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var weatherconstraint_service_1 = __webpack_require__(219);
	var WeatherConstraintComponent = (function () {
	    function WeatherConstraintComponent(_router, _route, _weatherConstraintService) {
	        this._router = _router;
	        this._route = _route;
	        this._weatherConstraintService = _weatherConstraintService;
	        this.tempConst = ['Vent', 'Rafale', 'Humidité', 'Présenti'];
	        this.constraints = [];
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
	            for (var i = 0; i < _this.constraints.length; i++) {
	                _this.constraints[i].stats = [];
	                _this.constraints[i].stats.push(_this.constraints[i].wind, _this.constraints[i].gust, _this.constraints[i].humidity, _this.constraints[i].feelsLike);
	            }
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
	        template: __webpack_require__(220)
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, weatherconstraint_service_1.WeatherConstraintsService])
	], WeatherConstraintComponent);
	exports.WeatherConstraintComponent = WeatherConstraintComponent;


/***/ },
/* 219 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
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
/* 220 */
/***/ function(module, exports) {

	module.exports = "<h2>Statistiques pour la température : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ID\r\n            </th>\r\n            <th>\r\n                Vent km/h\r\n            </th>\r\n            <th>\r\n                Rafale km/h\r\n            </th>\r\n            <th>\r\n                Humidité %\r\n            </th>\r\n            <th>\r\n                Lever Soleil AM\r\n            </th>\r\n            <th>\r\n                Coucher Soleil PM\r\n            </th>\r\n            <th>\r\n                Clarté\r\n            </th>\r\n            <th>\r\n                Présenti °C\r\n            </th>\r\n            <th>\r\n                Température\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.id}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                <p>Temp : {{constraint?.weather.name}}</p>\r\n                <p>Heure : {{constraint?.weather.hour | fmHourLocal }}</p>\r\n                <p>Temp °C : {{constraint?.weather.tempC}}</p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<kendo-chart [categoryAxis]=\"{ categories: tempConst }\">\r\n\r\n    <kendo-chart-value-axis>\r\n        <kendo-chart-value-axis-item [title]=\"{ text: 'Statistiques' }\">\r\n        </kendo-chart-value-axis-item>\r\n    </kendo-chart-value-axis>\r\n\r\n    <kendo-chart-title text=\"Statistiques Température / Contrainte\" background=\"#e3e3e3\" font=\"19pt sans-serif\"></kendo-chart-title>\r\n    <kendo-chart-legend position=\"top\" orientation=\"horizontal\"></kendo-chart-legend>\r\n    <kendo-chart-tooltip format=\"{0}\" padding=\"1\"  [shared]=\"true\"></kendo-chart-tooltip>\r\n    <kendo-chart-area background=\"#f7f7fa\" [margin]=\"30\">\r\n    </kendo-chart-area>\r\n\r\n    <kendo-chart-series>\r\n        <kendo-chart-series-item *ngFor=\"let constraint of constraints\" type=\"column\" \r\n                                  [data]=\"constraint.stats\" [name]=\"constraint.id\">\r\n        </kendo-chart-series-item>\r\n    </kendo-chart-series>\r\n</kendo-chart>\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-md btn-primary\"><i class=\"fa fa-arrow-up\"></i> Retour</button>"

/***/ },
/* 221 */
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
	var core_1 = __webpack_require__(171);
	var trip_service_1 = __webpack_require__(222);
	var login_service_1 = __webpack_require__(179);
	var router_1 = __webpack_require__(173);
	var TripComponent = (function () {
	    function TripComponent(_tripService, _loginService, _activatedRoute, _router) {
	        this._tripService = _tripService;
	        this._loginService = _loginService;
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this.titreTrip = "Les Forfaits Voyages";
	        this.trips = [];
	        this.showPopUp = false;
	        this.showPopUpId = false;
	        this.reqTrips = false;
	        this.searchMessage = "Chercher";
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
	    TripComponent.prototype.clickRating = function ($event) {
	        console.log($event);
	        this.showPopUp = !this.showPopUp;
	    };
	    TripComponent.prototype.searchTripId = function (input) {
	        var _this = this;
	        var id = input.value;
	        if (id == "" || id == null || typeof (id) == 'undefined' || isNaN(+id)) {
	            this.searchMessage = "Invalide";
	            console.log("pas un nombre");
	        }
	        else {
	            this.searchMessage = "Ok";
	            console.log("ok est un nombre");
	            var idToSearch = +id;
	            console.log(idToSearch);
	            this._tripService.getTripByIdAPI(idToSearch)
	                .subscribe(function (data) {
	                console.log("redirect to detail of this particular trip by id");
	                _this._router.navigateByUrl("/trips/" + data.id);
	            }, function (error) {
	                input.style.backgroundColor = "#ff6b58";
	                input.value = "Impossible de trouver";
	                console.log("error getting trip by id : " + error);
	            });
	        }
	        input.value = "";
	    };
	    TripComponent.prototype.refreshTrips = function () {
	        console.log("refresh trips");
	        this.getAllTrips();
	    };
	    TripComponent.prototype.onToggleIdPopUp = function () {
	        this.showPopUpId = !this.showPopUpId;
	    };
	    //  get methos sur service.
	    TripComponent.prototype.getAllTrips = function () {
	        var _this = this;
	        this.reqTrips = true;
	        this._tripService.getAllTripsAPI()
	            .subscribe(function (data) {
	            console.log("succes get trips from service : " + JSON.stringify(data));
	            _this.trips = data;
	            _this.reqTrips = false;
	        }, function (error) {
	            console.log("error getting trips from service : " + error);
	            _this.reqTrips = false;
	        });
	    };
	    TripComponent.prototype.deleteTrip = function (trip) {
	        var _this = this;
	        this._tripService.deleteTripByAdmin(trip)
	            .subscribe(function (data) {
	            // supprimer le trip côté client pour actualiser la vue.
	            _this.trips.splice(_this.trips.indexOf(trip), 1);
	            console.log("succes deleting a trip by SuperUsers");
	        }, function (error) {
	            console.log("error trying delete trip by SuperUsers");
	        });
	    };
	    return TripComponent;
	}());
	TripComponent = __decorate([
	    core_1.Component({
	        selector: 'trip',
	        template: __webpack_require__(223),
	        styles: [__webpack_require__(224)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService, login_service_1.LoginService,
	        router_1.ActivatedRoute, router_1.Router])
	], TripComponent);
	exports.TripComponent = TripComponent;


/***/ },
/* 222 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	var login_service_1 = __webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
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
	    // GET  : get trip by.
	    TripService.prototype.getTripByIdAPI = function (id) {
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip + "/" + id, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    // GET:     Best trip objects.
	    TripService.prototype.getBestTripsAPI = function () {
	        console.log("token du login service");
	        console.log(this._loginService.token);
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlTrip + '/bestTrips', options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    TripService.prototype.deleteTripByAdmin = function (trip) {
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var id = trip.id;
	        return this._http.delete(this._urlTrip + "/" + id, options)
	            .map(function (response) { return console.log("success deleting a trip done by SuperUsers"); })
	            .catch(function (error) { return console.log("error deleting trip by SuperUsers"); });
	    };
	    return TripService;
	}());
	TripService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], TripService);
	exports.TripService = TripService;


/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<header>\r\n    <h1>Bienvenue </h1>\r\n    <h2> {{userName}}</h2>\r\n</header>\r\n<a class=\"btn btn-md btn-info active\" [routerLink]=\"['/trips/perso']\">Mes trips</a>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<a class=\"btn btn-md btn-primary\" [routerLink]=\"['best']\">Meilleurs Trips</a>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<h3>Disponibles présentement</h3>\r\n\r\n<nav class=\"navbar navbar-default col-md-12 col-sm-12\">\r\n    <div class=\"navbar-left navbar-header col-md-2\">\r\n        <span class=\"navbar-brand\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <form class=\"navbar-form navbar-left\" role=\"Search\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" #inputIdSearch class=\"form-control\" placeholder=\"{{searchMessage}}\">\r\n                <div class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-info\" #anchor (click)=\"onToggleIdPopUp()\"><i class=\"fa fa-info\"></i></button>\r\n                    <button type=\"submit\" (click)=\"searchTripId(inputIdSearch)\" class=\"btn btn-default\">Go!</button>\r\n                </div>\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"showPopUpId\">\r\n                    Rechercher par Id de trip.\r\n                </kendo-popup>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"navbar-right col-md-2\">\r\n        <button (click)=\"refreshTrips()\" kendoButton [primary]=\"true\" [icon]=\"'refresh'\" class=\"refreshButton\">Actualiser</button>\r\n    </div>   \r\n</nav>\r\n\r\n<div class=\"col-md-12 col-sm-12\" style=\"text-align: center\">\r\n    <i *ngIf=\"reqTrips\" class=\"fa fa-spinner fa-spin fa-5x\"></i>\r\n</div>\r\n\r\n<main class=\"col-md-12\">\r\n    <template *ngIf=\"!trips.length\">\r\n        <h3>Aucuns Trips</h3>\r\n    </template>\r\n    <div *ngFor=\"let trip of trips | paginate: { itemsPerPage: 8, currentPage: p }\" class=\"infosTrip col-md-2\">\r\n        <button (click)=\"deleteTrip(trip)\" kendoButton [primary]=\"true\" class=\"deleteTripButton\"><i class=\"fa fa-trash\"></i></button>\r\n        <ul>\r\n            <li>Nom : {{trip?.name}}</li>\r\n            <li>Pays : {{trip?.country}}</li>\r\n            <li>Continent : {{trip?.continent}}</li>\r\n            <li #anchor>\r\n                Rating : <rating class=\"rating\" *ngIf=\"trip?.rating\" [rating]='trip.rating' (ratingClick)=\"clickRating($event)\">\r\n                </rating>\r\n            </li>\r\n            <kendo-popup [anchor]=\"anchor\" class=\"popUpContent\" *ngIf=\"showPopUp\">\r\n                Quoté : {{trip?.rating}}\r\n            </kendo-popup>\r\n        </ul>\r\n        <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n        <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n    </div>\r\n\r\n    <section class=\"col-md-12\">\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </section>\r\n</main>\r\n\r\n\r\n"

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(225);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin: 1% 0 1% 0;\r\n}\r\n\r\nheader{\r\n    background-color: azure;\r\n    padding: 2%;\r\n}\r\n\r\nheader > h1, header > h2{\r\n    display: inline;\r\n}\r\n\r\nmain{\r\n    text-align: center;\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n    padding: 0;\r\n}\r\n\r\n.infosTrip{\r\n    width: 20%;\r\n    height: 20%;\r\n    background-color:azure;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    text-align: center;\r\n    opacity: 0.4;\r\n    padding: 0;\r\n    margin: 2.5%;\r\n}\r\n\r\ndiv > ul{\r\n    text-align: left;\r\n    padding: 5%;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 1;\r\n    transition-property: all;\r\n    transition-duration: 1.5s;\r\n    transition-delay: 0s;\r\n    transform: rotateY(15deg);\r\n}\r\n.infosTrip:hover, section{\r\n    cursor: pointer;\r\n}\r\n\r\nsection{\r\n    float: left;\r\n    clear: both;\r\n    text-align: left;\r\n    padding: 0;\r\n}\r\n\r\npagination-controls{\r\n    text-align: center;\r\n    padding: 1% 0 1% 0;\r\n}\r\n\r\n.popUpContent{\r\n    max-width: 200px;\r\n    height: auto;\r\n    padding: 10px;\r\n    color: #787878;\r\n    background-color: rgba(30,144,255,.3);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.deleteTripButton{\r\n    float: right;\r\n    padding: 4%;\r\n}\r\n\r\n.refreshButton{\r\n    float: right;\r\n    margin: 10px 20px;\r\n}", ""]);
	
	// exports


/***/ },
/* 226 */
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
	var core_1 = __webpack_require__(171);
	var trip_service_1 = __webpack_require__(222);
	var router_1 = __webpack_require__(173);
	var BestTripComponent = (function () {
	    function BestTripComponent(_tripService, _activatedRoute, _router) {
	        this._tripService = _tripService;
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this.bestTrips = [];
	        this.pageSize = 5;
	        this.skip = 0;
	        this.hiddenColumns = [];
	        this.columns = ["id"];
	        this.isTrips = false;
	        this.titleBestTrips = "";
	        this.buttonCount = 5;
	        this.info = true;
	        this.type = "numeric";
	        this.pageSizes = true;
	        this.previousNext = true;
	    }
	    BestTripComponent.prototype.ngOnInit = function () {
	        if (this._router.url == "/trips/best") {
	            console.log("Clicked the routing to access best trips component in parent component trips.");
	            this.titleBestTrips = "Consulter";
	            this.getBestTrips();
	        }
	    };
	    BestTripComponent.prototype.pageChange = function (event) {
	        this.skip = event.skip;
	        this.loadItems();
	    };
	    BestTripComponent.prototype.loadItems = function () {
	        this.gridView = {
	            data: this.bestTrips.slice(this.skip, this.skip + this.pageSize),
	            total: this.bestTrips.length
	        };
	    };
	    BestTripComponent.prototype.restoreColumns = function () {
	        this.hiddenColumns.length = 0;
	    };
	    BestTripComponent.prototype.hideColumn = function (field) {
	        this.hiddenColumns.push(field);
	    };
	    BestTripComponent.prototype.onViewTrips = function () {
	        this.isTrips = !this.isTrips;
	        console.log("click");
	    };
	    BestTripComponent.prototype.getBestTrips = function () {
	        var _this = this;
	        return this._tripService.getBestTripsAPI()
	            .subscribe(function (data) {
	            _this.bestTrips = data;
	            _this.loadItems();
	            console.log("success getting best trips : " + data);
	        }, function (error) {
	            console.log("Error getting best trips : " + error);
	        });
	    };
	    return BestTripComponent;
	}());
	BestTripComponent = __decorate([
	    core_1.Component({
	        selector: 'best-trip',
	        template: __webpack_require__(227),
	        styles: [__webpack_require__(228)]
	    }),
	    __metadata("design:paramtypes", [trip_service_1.TripService, router_1.ActivatedRoute, router_1.Router])
	], BestTripComponent);
	exports.BestTripComponent = BestTripComponent;


/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<h1><a class=\"btn btn-lg btn-link\" (click)=\"onViewTrips()\">{{titleBestTrips}}</a></h1>\r\n\r\n<!-- best trips grid -->\r\n<section *ngIf=\"isTrips\">\r\n    <button kendoButton [primary]=\"true\" [icon]=\"'refresh'\" (click)=\"restoreColumns()\">Restaurer</button>\r\n    <kendo-grid [data]=\"gridView\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" \r\n                [selectable]=\"true\" [height]=\"350\" [pageable]=\"{ buttonCount: buttonCount, info: info, \r\n                type: type, pageSizes: pageSizes, previousNext: previousNext}\" [scrollable]=\"'none'\">\r\n        <template ngFor [ngForOf]=\"columns\" let-column>\r\n            <kendo-grid-column field=\"{{column}}\"\r\n                               *ngIf=\"hiddenColumns.indexOf(column) === -1\" title=\"ID\" width=\"20\">\r\n                <template kendoGridHeaderTemplate let-dataItem>\r\n                    {{dataItem.field}}\r\n                    <button (click)=\"hideColumn(dataItem.field)\"\r\n                            class=\"k-button k-primary\"\r\n                            style=\"float: right;\">\r\n                        Hide\r\n                    </button>\r\n                </template>\r\n            </kendo-grid-column>\r\n        </template>\r\n            <kendo-grid-column field=\"name\" title=\"Nom\" width=\"30\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"leaving\" title=\"Départ\" width=\"70\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"country\" title=\"Pays\" width=\"60\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"continent\" title=\"Continent\" width=\"60\">\r\n            </kendo-grid-column>\r\n        <kendo-grid-column field=\"rating\" title=\"Rating\" width=\"20\" [headerStyle]=\"{'background-color': '#c5b358','color': '#fff','line-height': '1em'}\">\r\n        </kendo-grid-column>\r\n        <template kendoGridDetailTemplate let-dataItem>\r\n            <section *ngIf=\"dataItem\">\r\n                <p><strong>Détails:</strong> Item</p>\r\n            </section>\r\n        </template>\r\n        <kendo-grid-messages groupPanelEmpty=\"Drag here to group.\"\r\n                             noRecords=\"There no items to display.\">\r\n        </kendo-grid-messages>\r\n</kendo-grid>\r\n</section>"

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(229);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 230 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var tripdetail_service_1 = __webpack_require__(202);
	var trip_1 = __webpack_require__(231);
	var TripDetailComponent = (function () {
	    function TripDetailComponent(_activatedRoute, _tripdetail, _router) {
	        this._activatedRoute = _activatedRoute;
	        this._tripdetail = _tripdetail;
	        this._router = _router;
	        this.isBought = false;
	        this.isRefreshTrip = false;
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
	    TripDetailComponent.prototype.refreshTrip = function () {
	        if (this.selectedTrip != null) {
	            this.getTripById(this.selectedTrip.id);
	        }
	    };
	    TripDetailComponent.prototype.getTripById = function (id) {
	        var _this = this;
	        this.isRefreshTrip = true;
	        return this._tripdetail.getTripByIdAPI(id)
	            .subscribe(function (data) {
	            _this.selectedTrip = new trip_1.Trip(data.id, data.name, data.leaving, data.continent, data.country, data.rating, data.stops);
	            console.log("succes get back trip with id : " + id);
	            console.log("trip detail : " + JSON.stringify(data));
	            _this.isRefreshTrip = false;
	            _this.getTripsForUser();
	        }, function (error) {
	            console.log("error get back trip with id : " + id + error);
	            _this.isRefreshTrip = false;
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
	            _this._router.navigateByUrl("/trips/perso");
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
	        template: __webpack_require__(232),
	        styles: [__webpack_require__(233)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripDetailComponent);
	exports.TripDetailComponent = TripDetailComponent;


/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";
	var Trip = (function () {
	    function Trip(id, name, leaving, country, continent, rating, stops, visible) {
	        this.id = id;
	        this.name = name;
	        this.leaving = leaving;
	        this.country = country;
	        this.continent = continent;
	        this.rating = rating;
	        this.stops = stops;
	        this.visible = visible;
	    }
	    return Trip;
	}());
	exports.Trip = Trip;


/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\r\n    <h2>Détails Trip</h2>\r\n</div>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><i class=\"fa fa-first-order\"></i><span>{{selectedTrip?.rating}}</span></li>\r\n    <li><button class=\"btn btn-sm btn-success\" (click)=\"buyTrip(selectedTrip)\" [disabled]=\"isBought\">Ajouter à mes trips</button></li>\r\n    <li>\r\n        <h4>\r\n            {{isBoughtMessage}}\r\n            <span>\r\n                <a *ngIf=\"isBought\" [routerLink]=\"['stop']\" class=\"btn btn-link btn-md\"><i class=\"fa fa-arrow-up\"></i> Ajouter Stops</a>\r\n            </span>\r\n        </h4>    \r\n    </li>   \r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>\r\n        <h4>\r\n            Visualiser Stops\r\n            <span>\r\n                <a [routerLink]=\"['edit']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-search\"></i></a>\r\n                <button (click)=\"goBack()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-arrow-up\"></i> Retour</button>\r\n                <button (click)=\"refreshTrip()\" kendoButton [primary]=\"true\" [icon]=\"'refresh'\" class=\"refreshButton\"> Actualiser</button>\r\n            </span>\r\n            <a *ngIf=\"isRefreshTrip\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></a>\r\n        </h4>\r\n    </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(234);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "ul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\nspan{\r\n    padding: 1%;\r\n}\r\n\r\nfooter{\r\n    clear: both;\r\n    float: left;\r\n}", ""]);
	
	// exports


/***/ },
/* 235 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var tripdetail_service_1 = __webpack_require__(202);
	var TripUserComponent = (function () {
	    function TripUserComponent(_activatedRoute, _tripDetailService, _router) {
	        this._activatedRoute = _activatedRoute;
	        this._tripDetailService = _tripDetailService;
	        this._router = _router;
	        // constant for swipe action: left or right
	        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
	        this.userMessage = "";
	        this.mesTrips = [];
	        this.objectName = "";
	        this.inputDelete = false;
	        this.selectedTrip = null;
	    }
	    TripUserComponent.prototype.goMap = function (id) {
	        this._router.navigateByUrl("/map/" + id);
	    };
	    // action triggered when user swipes
	    TripUserComponent.prototype.swipe = function (currentIndex, action) {
	        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
	        // out of range
	        if (currentIndex > this.mesTrips.length || currentIndex < 0)
	            return;
	        var nextIndex = 0;
	        // swipe right, next avatar
	        if (action === this.SWIPE_ACTION.RIGHT) {
	            var isLast = currentIndex === this.mesTrips.length - 1;
	            nextIndex = isLast ? 0 : currentIndex + 1;
	        }
	        // swipe left, previous avatar
	        if (action === this.SWIPE_ACTION.LEFT) {
	            var isFirst = currentIndex === 0;
	            nextIndex = isFirst ? this.mesTrips.length - 1 : currentIndex - 1;
	        }
	        // toggle avatar visibility
	        this.mesTrips.forEach(function (x, i) { return x.visible = (i === nextIndex); });
	    };
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
	            _this.mesTrips.forEach(function (x, i) { return i > 0 ? x.visible = false : x.visible = true; });
	        }, function (error) {
	            console.log("cant get your trips " + error);
	        });
	    };
	    TripUserComponent.prototype.addStops = function (id) {
	        this._router.navigate(['/trips', id, 'stop']);
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
	        template: __webpack_require__(236),
	        styles: [__webpack_require__(237)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router])
	], TripUserComponent);
	exports.TripUserComponent = TripUserComponent;


/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "<h2>{{userMessage}}</h2>\r\n\r\n<delete [isDelete]=\"inputDelete\" [tripToDelete]=\"selectedTrip\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<h1>Mes Trips</h1>\r\n<h2>Swipe <i class=\"fa fa-arrow-left\"></i> Ou <i class=\"fa fa-arrow-right\"></i></h2>\r\n\r\n<div *ngFor=\"let trip of mesTrips; let idx=index\" class=\"col-md-12 swipe-box\" \r\n     (swipeleft)=\"swipe(idx, $event.type)\" (swiperight)=\"swipe(idx, $event.type)\"\r\n     [class.visible]=\"trip.visible\" [class.hidden]=\"!trip.visible\">\r\n    <div class=\"card col-md-3\">\r\n        <div class=\"card-header\">\r\n            <h4 class=\"card-title\">Trip</h4>\r\n            <h5 class=\"text-muted\">Contient <span class=\"badge\">{{trip?.stops.length}}</span> stops</h5>\r\n        </div>\r\n        <i class=\"card-img-top fa fa-picture-o fa-2x\" aria-hidden=\"true\"></i>\r\n        <div class=\"card card-block\">\r\n            <p class=\"card-text\"># Réservation : {{trip?.id}}</p>\r\n            <p class=\"card-text\">Nom : {{trip?.name}}</p>\r\n            <p class=\"card-text\">Date de départ : {{trip?.leaving | fmTripDate}}</p>\r\n            <p class=\"card-text\">Pays : {{trip?.country}}</p>\r\n            <p class=\"card-text\">Continent : {{trip?.continent}}</p>\r\n            <div class=\"userButtons\">\r\n                <a class=\"card-link btn btn-md btn-secondary active col-md-6 userActions\" (click)=\"deleteTrip(trip)\"><i class=\"fa fa-trash\"></i> Supprimer</a>\r\n                <a class=\"card-link btn btn-md btn-info active col-md-6 userActions\" (click)=\"addStops(trip.id)\"><i class=\"fa fa-plus\"></i> Ajouter Stops</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n        <ul *ngFor=\"let stop of trip?.stops; let i = index\">\r\n            <li>\r\n                Stop # {{i + 1}}\r\n                <span style=\"float: right;\"><button class=\"btn btn-sm btn-primary active\" (click)=\"goMap(stop.id)\"><i class=\"fa fa-map\"></i> Map</button></span>\r\n            </li>\r\n            <li>Nom : {{stop?.name}}</li>\r\n            <li>Date d'arrivée : {{stop?.arrival | fmTripDate}}</li>\r\n            <li>Date de départ : {{stop?.leaving | fmTripDate}}</li>\r\n            <li>Ville : {{stop?.city}}</li>\r\n            <li>Cuisine : {{stop?.cuisine}}</li>\r\n            <li>Guide : {{stop?.guide}}</li>\r\n            <li>Quote : {{stop?.quote}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n<a class=\"btn btn-md btn-primary backButton\" (click)=\"goBack()\"><i class=\"fa fa-arrow-up\"></i> Retour</a>\r\n\r\n"

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(238);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "html{\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 10px;\r\n}\r\n\r\nh1,h2,h3,h4{\r\n    text-shadow:1px 1px 1px 1px white;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n    float: left;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 1%;\r\n}\r\n\r\nli{\r\n    font-size: 1.4rem;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.swipe-box > div:first-of-type, div div > ul{\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.swipe-box > div:first-of-type{\r\n    padding: 1.5%;\r\n    background: rgba(255,255,255,1);\r\n    background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.95) 42%);\r\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(42%, rgba(246,246,246,0.95)))));\r\n    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.95));\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#4189c7', GradientType=1 );\r\n}\r\n\r\ndiv div > ul{\r\n    margin: 1%;\r\n    background: rgba(255,255,255,1);\r\n    background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.89) 47%, rgba(237,237,237,0.77) 100%);\r\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,0.89)), color-stop(100%, rgba(237,237,237,0.77)));\r\n    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.89) 47%, rgba(237,237,237,0.77) 100%);\r\n    background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.89) 47%, rgba(237,237,237,0.77) 100%);\r\n    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,0.89) 47%, rgba(237,237,237,0.77) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );\r\n}\r\n\r\n.btn-secondary:hover{\r\n    color: darkred;\r\n}\r\n\r\n.card-footer{\r\n    text-align: center;\r\n}\r\n\r\n.userButtons{\r\n    padding: 5% 0;\r\n}\r\n\r\n.backButton{\r\n    margin: 2% 0 2% 0;\r\n}\r\n\r\n.userActions{\r\n    text-align: center;\r\n    float: left;\r\n}\r\n\r\n.userActions:first-child{\r\n    opacity: 0.8;\r\n}\r\n\r\n.swipe-box {\r\n    display: block;\r\n    width: 100%;\r\n    float: left;\r\n    padding: 1%;\r\n    margin: 0;\r\n    border: 1px solid gray;\r\n    padding: 5px;\r\n    -moz-box-shadow: 2px 2px 10px gray inset;\r\n    -webkit-box-shadow: 2px 2px 10px gray inset;\r\n    box-shadow: 2px 2px 10px gray inset;\r\n    background: -moz-linear-gradient(top, rgba(226,226,226,1) 20%, rgba(226,226,226,1) 28%, rgba(226,226,226,0.99) 53%, rgba(226,226,226,0.98) 67%, rgba(226,226,226,0.98) 85%, rgba(254,254,254,0.97) 100%);\r\n    background: -webkit-gradient(left top, left bottom, color-stop(20%, rgba(226,226,226,1)), color-stop(28%, rgba(226,226,226,1)), color-stop(53%, rgba(226,226,226,0.99)), color-stop(67%, rgba(226,226,226,0.98)), color-stop(85%, rgba(226,226,226,0.98)), color-stop(100%, rgba(254,254,254,0.97)));\r\n    background: -webkit-linear-gradient(top, rgba(226,226,226,1) 20%, rgba(226,226,226,1) 28%, rgba(226,226,226,0.99) 53%, rgba(226,226,226,0.98) 67%, rgba(226,226,226,0.98) 85%, rgba(254,254,254,0.97) 100%);\r\n    background: -o-linear-gradient(top, rgba(226,226,226,1) 20%, rgba(226,226,226,1) 28%, rgba(226,226,226,0.99) 53%, rgba(226,226,226,0.98) 67%, rgba(226,226,226,0.98) 85%, rgba(254,254,254,0.97) 100%);\r\n    background: linear-gradient(to bottom, rgba(226,226,226,1) 20%, rgba(226,226,226,1) 28%, rgba(226,226,226,0.99) 53%, rgba(226,226,226,0.98) 67%, rgba(226,226,226,0.98) 85%, rgba(254,254,254,0.97) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=0 );\r\n}\r\n\r\n.visible {\r\n    display: block;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 239 */
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
	var core_1 = __webpack_require__(171);
	var RatingComponent = (function () {
	    function RatingComponent() {
	        this.ratingClick = new core_1.EventEmitter();
	        this.rates = [];
	        this.diffRates = [];
	        this.diffRates.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
	    }
	    RatingComponent.prototype.ngOnChanges = function () {
	        this.getRating();
	    };
	    RatingComponent.prototype.getRating = function () {
	        if (this.rating != undefined) {
	            console.log(this.rating);
	            this.rates = [];
	            for (var i = 1; i <= this.rating; i++) {
	                this.rates.push(i);
	            }
	            var diffStars = this.diffRates.length - this.rates.length;
	            this.diffRates.length = diffStars;
	        }
	    };
	    RatingComponent.prototype.onClick = function (rating) {
	        this.rating = rating;
	        this.ratingClick.emit({
	            rating: rating
	        });
	    };
	    return RatingComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], RatingComponent.prototype, "rating", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], RatingComponent.prototype, "ratingClick", void 0);
	RatingComponent = __decorate([
	    core_1.Component({
	        selector: 'rating',
	        template: __webpack_require__(240),
	        styles: [__webpack_require__(241)]
	    }),
	    __metadata("design:paramtypes", [])
	], RatingComponent);
	exports.RatingComponent = RatingComponent;


/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div (click)=\"onClick(rates.length)\">\r\n    <span *ngIf=\"rates && rates.length > 0\">\r\n        <span *ngFor=\"let r of rates\" class=\"glyphicon glyphicon-star\"></span>\r\n    </span>\r\n\r\n    <span *ngIf=\"diffRates && diffRates.length > 0\">\r\n        <span *ngFor=\"let r of diffRates\" class=\"glyphicon glyphicon-star-empty star-empty\"></span>\r\n    </span>\r\n</div>\r\n"

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(242);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "span {\r\n    float: left;\r\n    display: inline-block;\r\n}\r\n\r\n/* Place les étoiles à gauche du container */\r\n.star, .star-empty{\r\n    float: left;\r\n    cursor: pointer;\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 243 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var stop_1 = __webpack_require__(244);
	var stop_service_1 = __webpack_require__(201);
	var StopComponent = (function () {
	    function StopComponent(_activatedRoute, _router, _stopService) {
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this._stopService = _stopService;
	        this.decimals = 0;
	        this.min = 1;
	        this.max = 10;
	        this.autoCorrect = true;
	        this.selectedStop = new stop_1.Stop(1, "Plage", new Date(), new Date(), "Montréal", this.cuisine, this.guide, 0, 0, 0, 8, false);
	        // cuisine dropdown 
	        this.cuisine = { text: "Italienne", value: 2 };
	        this.cuisines = [];
	        this.sourceCuisine = [];
	        this.sourceCuisine.push({ text: "Japonaise", value: 1 }, { text: "Italienne", value: 2 }, { text: "Suédoise", value: 3 }, { text: "Portuguaise", value: 4 }, { text: "Africaine", value: 5 }, { text: "Allemande", value: 6 }, { text: "Britannique", value: 7 }, { text: "Américaine", value: 8 }, { text: "Suédoise", value: 9 });
	        // guide combobox
	        this.guide = { text: "Guide Junior", value: 2 };
	        this.guides = [];
	        this.guides.push({ text: "Guide Michelin", value: 1 }, { text: "Guide Junior", value: 2 }, { text: "Guide Senior", value: 3 }, { text: "Guide Privé", value: 4 });
	        // filtering cuisines
	        this.cuisines = this.sourceCuisine.slice();
	    }
	    StopComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // if not in /stop yet, just display a message for the user (still in parent route with the id property)
	        this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null && params['id'] != undefined) {
	                _this.message = "";
	                _this.isShowForm = false;
	            }
	            else {
	                _this.message = "Créer un nouveau stop pour ce trip";
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
	    StopComponent.prototype.handleFilter = function (value) {
	        this.cuisines = this.sourceCuisine.filter(function (s) { return s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
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
	            _this.selectedStop.city = data.city;
	            _this.selectedStop.cuisine = data.cuisine;
	            _this.selectedStop.guide = data.guide;
	            _this.selectedStop.quote = data.quote;
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
	        template: __webpack_require__(245),
	        styles: [__webpack_require__(246)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
	        stop_service_1.StopService])
	], StopComponent);
	exports.StopComponent = StopComponent;


/***/ },
/* 244 */
/***/ function(module, exports) {

	"use strict";
	var Stop = (function () {
	    function Stop(id, name, arrival, leaving, city, cuisine, guide, longitude, latitude, order, quote, showPopUp) {
	        this.id = id;
	        this.name = name;
	        this.arrival = arrival;
	        this.leaving = leaving;
	        this.city = city;
	        this.cuisine = cuisine;
	        this.guide = guide;
	        this.longitude = longitude;
	        this.latitude = latitude;
	        this.order = order;
	        this.quote = quote;
	        this.showPopUp = showPopUp;
	        this.showPopUp = false;
	    }
	    return Stop;
	}());
	exports.Stop = Stop;


/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <div class=\"col-md-12\">\r\n        <h4><span><a [routerLink]=\"'../edit'\" class=\"btn btn-lg btn-link\"><i class=\"fa fa-lightbulb-o\"></i> Suggestions</a></span></h4>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"cuisine\">Cuisine</label>             \r\n            <kendo-dropdownlist name=\"cuisine\"\r\n                                style=\"padding:0\"\r\n                                [data]=\"cuisines\"\r\n                                [textField]=\"'text'\"\r\n                                [valueField]=\"'value'\"\r\n                                [(ngModel)]=\"cuisine\"\r\n                                [filterable]=\"true\"\r\n                                (filterChange)=\"handleFilter($event)\"\r\n                                class=\"col-md-12\">\r\n                <template kendoDropDownListItemTemplate let-dataItem>\r\n                    <span class=\"template\">{{ dataItem.value }}</span> {{ dataItem.text }}\r\n                </template>\r\n                <template kendoDropDownListHeaderTemplate>\r\n                    <h4>Cuisines</h4>\r\n                </template>\r\n                <template kendoDropDownListFooterTemplate>\r\n                    <h4>{{cuisines.length}} variétés</h4>\r\n                </template>\r\n                <template kendoDropDownListNoDataTemplate>\r\n                    <h4><span class=\"k-icon k-i-warning\"></span><br /><br />Aucunes Cuisines</h4>\r\n                </template>\r\n            </kendo-dropdownlist>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"guide\">Guide</label>\r\n            <kendo-combobox name=\"guide\"\r\n                            [suggest]=\"true\" \r\n                            style=\"padding:0\"\r\n                            [placeholder]=\"'e.g. Guide Senior'\"\r\n                            [data]=\"guides\"\r\n                            [textField]=\"'text'\"\r\n                            [valueField]=\"'value'\"\r\n                            [(ngModel)]=\"guide\"\r\n                            class=\"col-md-12\"\r\n                            >\r\n                <template kendoComboBoxItemTemplate let-dataItem>\r\n                    <span class=\"template\">{{ dataItem.value }}</span> {{ dataItem.text }}\r\n                </template>\r\n                <template kendoComboBoxHeaderTemplate>\r\n                    <h4>Guides</h4>\r\n                </template>\r\n                <template kendoComboBoxFooterTemplate>\r\n                    <h4>{{guides.length}} disponibles</h4>\r\n                </template>\r\n                <template kendoDropDownListNoDataTemplate>\r\n                    <h4><span class=\"k-icon k-i-warning\"></span><br /><br />Aucuns guides</h4>\r\n                </template>\r\n            </kendo-combobox>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"quote\">Quote</label>\r\n            <kendo-numerictextbox class=\"col-md-12\" style=\"padding:0\" [restrictDecimals]=\"true\" [decimals]=\"decimals\" [min]=\"min\"\r\n            [max]=\"max\" [spinners]=\"true\" [format]=\"'n0'\" [step]=\"1\" [autoCorrect]=\"autoCorrect\" [(ngModel)]=\"selectedStop.quote\" name=\"quote\" id=\"quote\" required></kendo-numerictextbox>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-md btn-success active\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(247);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, ".template{ \r\n    display: inline-block; \r\n    background: #333; \r\n    color: #fff; \r\n    border-radius: 50%; \r\n    width: 18px; \r\n    height: 18px; \r\n    text-align: center; \r\n}\r\n\r\n.template > h4 { \r\n    font-size: 1em; \r\n    font-weight: bold; \r\n    padding: 0 8px;\r\n}", ""]);
	
	// exports


/***/ },
/* 248 */
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
	var core_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(173);
	var tripdetail_service_1 = __webpack_require__(202);
	var login_service_1 = __webpack_require__(179);
	var stop_service_1 = __webpack_require__(201);
	var trip_1 = __webpack_require__(231);
	var EditStopComponent = (function () {
	    function EditStopComponent(_activatedRoute, _tripdetail, _router, _stopService, _loginService) {
	        this._activatedRoute = _activatedRoute;
	        this._tripdetail = _tripdetail;
	        this._router = _router;
	        this._stopService = _stopService;
	        this._loginService = _loginService;
	        this.inputDelete = false;
	        this.inputIdDelete = null;
	        this.objectName = "";
	        this.toggleText = "Show";
	        this.isAdmin = this._loginService.estAdmin;
	        // scrollview
	        this.items = [];
	        this.items.push({ title: 'Nature', url: 'http://bit.ly/2cJjYuB' }, { title: 'Excursion', url: 'http://bit.ly/2cTBNaL' }, { title: 'Aéronautique', url: 'http://bit.ly/2cJl3Cx' });
	        this.animate = true;
	        this.endless = true;
	        this.width = "200px";
	        this.height = "200px";
	        // animations
	        this.state = 'inactive';
	        this.flyState = 'in';
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
	    EditStopComponent.prototype.onTogglePopUp = function (id) {
	        for (var i = 0; i < this.selectedTrip.stops.length; i++) {
	            if (this.selectedTrip.stops[i].id == id) {
	                this.selectedTrip.stops[i].showPopUp = !this.selectedTrip.stops[i].showPopUp;
	                this.toggleText = this.showPopUp ? "Hidе" : "Show";
	            }
	        }
	    };
	    EditStopComponent.prototype.toggleState = function () {
	        this.state = (this.state === 'active' ? 'inactive' : 'active');
	    };
	    EditStopComponent.prototype.animStopStarted = function ($event) {
	        console.log($event);
	    };
	    EditStopComponent.prototype.getStopsById = function (id) {
	        var _this = this;
	        return this._tripdetail.getTripByIdAPI(id)
	            .subscribe(function (data) {
	            _this.selectedTrip = new trip_1.Trip(data.id, data.name, data.leaving, data.continent, data.country, data.rating, data.stops);
	            console.log("succes get back trip with id : " + id);
	            console.log("trip detail : " + JSON.stringify(data));
	        }, function (error) {
	            console.log("error get back trip with id : " + id + error);
	        });
	    };
	    //  ajouter une temperature pour ce stop
	    EditStopComponent.prototype.ajouteTemp = function (id) {
	        this._router.navigateByUrl("/weathers/" + id);
	    };
	    // voir le stop sur la map
	    EditStopComponent.prototype.goMap = function (id) {
	        this._router.navigateByUrl("/map/" + id);
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
	        template: __webpack_require__(249),
	        styles: [__webpack_require__(250)],
	        // animation metadata
	        animations: [
	            core_1.trigger('animStop', [
	                core_1.state('inactive', core_1.style({
	                    transform: 'scale(1)'
	                })),
	                core_1.state('active', core_1.style({
	                    transform: 'scale(1.1, 1.1)'
	                })),
	                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
	                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
	            ]),
	            core_1.trigger('flyInOut', [
	                core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
	                core_1.transition(':enter', [
	                    core_1.style({ transform: 'translateX(-100%)' }),
	                    core_1.animate('200ms 100ms ease-in')
	                ])
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router,
	        stop_service_1.StopService, login_service_1.LoginService])
	], EditStopComponent);
	exports.EditStopComponent = EditStopComponent;


/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-9 col-sm-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\" class=\"col-md-12 rowStop\">\r\n        <div class=\"col-md-7 col-sm-12 rowBlock\"\r\n             (@flyInOut.start)=\"animStopStarted($event)\"\r\n             [@flyInOut]=\"flyState\">\r\n\r\n            <span><i class=\"fa fa-stop\"></i></span>\r\n            <button #anchor class=\"btn btn-link btn-md\" (click)=\"onTogglePopUp(stop.id)\">\r\n                {{toggleText}} Détails {{stop?.name}}\r\n            </button>\r\n            <div class=\"popUpWrapper\">\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"stop?.showPopUp\">\r\n                    {{stop?.arrival | fmTripDate}} À {{stop?.leaving | fmTripDate}}, {{stop?.city}}. Quoté {{stop?.quote}}\r\n                </kendo-popup>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-5 col-sm-12\">\r\n            <span><button [disabled]=\"!isAdmin\" class=\"btn btn-sm btn-danger active crudButtons\" (click)=\"deleteStop(stop.id)\"><i class=\"fa fa-trash\"></i> Supprimer</button></span>\r\n            <span><button class=\"btn btn-sm btn-success active crudButtons\" (click)=\"ajouteTemp(stop.id)\"><i class=\"fa fa-plus\"></i> Température</button></span>\r\n            <span><button class=\"btn btn-sm btn-primary active crudButtons\" (click)=\"goMap(stop.id)\"><i class=\"fa fa-map\"></i> Map</button></span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"col-md-3 col-sm-12\" [@animStop]=\"state\" (click)=\"toggleState()\">\r\n    <kendo-scrollview class=\"col-md-12\" [data]=\"items\"\r\n                      [animate]=\"animate\"\r\n                      [endless]=\"endless\"\r\n                      [width]=\"width\"\r\n                      [height]=\"height\"\r\n                      [arrows]=\"true\"\r\n                      [pageable]=\"true\">\r\n        <template let-item=\"item\">\r\n            <h4 class=\"demo-title\">{{item.title}}</h4>\r\n            <img src='{{item.url}}' alt='{{item.title}}' [ngStyle]=\"{width: width, height: height}\" draggable=\"false\" />\r\n        </template>\r\n    </kendo-scrollview>\r\n</div>\r\n<div class=\"col-md-12 alert alert-danger noStops\" role=\"alert\" *ngIf=\"!selectedTrip?.stops.length\">\r\n    <h4><i class=\"fa fa-exclamation-triangle\"></i> Aucuns Stops</h4>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(251);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.noStops{\r\n    text-align: center;\r\n    padding: 2%;\r\n    margin: 2% 0;\r\n}\r\n\r\n.popUpContent {\r\n    padding: 4px;\r\n    color: #787878;\r\n    background-color: rgba(255, 255, 255, .4);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.popUpWrapper{\r\n    max-width: 100px;\r\n    min-height: 5px;\r\n    max-height: 20px;\r\n}\r\n\r\n.rowStop{\r\n    margin: 1% 0;\r\n}\r\n\r\n.rowBlock{\r\n    box-shadow:2px 2px 2px gray,-1px -1px 2px white;\r\n    cursor: pointer;\r\n}\r\n\r\n.crudButtons{\r\n    float: left;\r\n}\r\n\r\n.k-scrollview-wrap {\r\n    margin: 0 auto;\r\n}\r\n\r\ndemo-title {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 15px;\r\n    color: #fff;\r\n    background-color: rgba(0,0,0,.4);\r\n    text-align: center;\r\n    font-size: 24px;\r\n}", ""]);
	
	// exports


/***/ },
/* 252 */
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
	var core_1 = __webpack_require__(171);
	var stop_1 = __webpack_require__(244);
	var router_1 = __webpack_require__(173);
	var map_service_1 = __webpack_require__(253);
	var MapComponent = (function () {
	    function MapComponent(_activatedRoute, _router, _mapService) {
	        this._activatedRoute = _activatedRoute;
	        this._router = _router;
	        this._mapService = _mapService;
	        // google maps zoom level
	        this.zoom = 8;
	        this.titleMap = "Map";
	        this.selectedStop = null;
	        // initial center position for the map
	        this.infoClickedStop = "";
	        this.lat = 45.5016889;
	        this.lng = -73.56725599999999;
	        this.markers = [];
	    }
	    MapComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null && params['id'] != undefined) {
	                var id = +params['id'];
	                _this.getStop(id);
	            }
	        });
	    };
	    MapComponent.prototype.resetSearchStop = function (input) {
	        console.log("click");
	        var empty = "";
	        input.value = empty;
	    };
	    MapComponent.prototype.getStop = function (id) {
	        var _this = this;
	        return this._mapService.getStopByIdAPI(id)
	            .subscribe(function (data) {
	            _this.selectedStop = new stop_1.Stop(data.id, data.name, data.arrival, data.leaving, data.city, data.cuisine, data.guide, data.longitude, data.latitude, data.order, data.quote, data.showPopUp);
	            console.log("selected stop : " + _this.selectedStop);
	        }, function (error) {
	            console.log("error cant get stop by id " + error);
	        });
	    };
	    MapComponent.prototype.clickedMarker = function (label, index) {
	        console.log("clicked the marker: " + (label + index));
	        this.infoClickedStop = "Stop : " + label;
	    };
	    MapComponent.prototype.getAddress = function (input) {
	        var _this = this;
	        var address = input.value;
	        this.getLatitudeLongitude(address, function (data) {
	            console.log(data);
	            _this.markers.push({ lat: data.Latitude, lng: data.Longitude, label: address });
	            console.log(_this.markers);
	        });
	    };
	    MapComponent.prototype.getLatitudeLongitude = function (address, callback) {
	        // Si l'addresse n'est pas spécifiée default : Montreal, Canada
	        address = address || 'Montreal, Canada';
	        // Initialize the Geocoder
	        var geocoder = new google.maps.Geocoder();
	        if (geocoder) {
	            geocoder.geocode({
	                'address': address
	            }, function (results, status) {
	                if (status == google.maps.GeocoderStatus.OK) {
	                    var lat = results[0].geometry.location.lat();
	                    var lng = results[0].geometry.location.lng();
	                    callback({ Status: "OK", Latitude: lat, Longitude: lng });
	                }
	            });
	        }
	    };
	    MapComponent.prototype.goBack = function () {
	        this._router.navigateByUrl("/trips");
	    };
	    MapComponent.prototype.ngOnDestroy = function () {
	        if (this.sub != null && typeof (this.sub) != 'undefined') {
	            this.sub.unsubscribe();
	        }
	    };
	    return MapComponent;
	}());
	MapComponent = __decorate([
	    core_1.Component({
	        selector: 'map',
	        template: __webpack_require__(254),
	        styles: [__webpack_require__(255)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, map_service_1.MapService])
	], MapComponent);
	exports.MapComponent = MapComponent;


/***/ },
/* 253 */
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
	var core_1 = __webpack_require__(171);
	var http_1 = __webpack_require__(176);
	var login_service_1 = __webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	var MapService = (function () {
	    function MapService(_http, _loginService) {
	        this._http = _http;
	        this._loginService = _loginService;
	        this._urlStop = 'api/stop';
	    }
	    // GET  : get stop by.
	    MapService.prototype.getStopByIdAPI = function (id) {
	        // add authorization header with jwt token
	        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this._http.get(this._urlStop + "/" + id, options)
	            .map(function (response) { return response.json(); })
	            .catch(function (error) { return error.json(); });
	    };
	    return MapService;
	}());
	MapService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
	], MapService);
	exports.MapService = MapService;


/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-3\">{{titleMap}}</h1>\r\n        <p class=\"lead\">Voir un Stop de mes Trips</p>\r\n        <p class=\"lead\">Ou faire une recherche aléatoire</p>\r\n        <a class=\"btn btn-md btn-primary\" (click)=\"goBack()\"><i class=\"fa fa-arrow-up\"></i> Retour</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-md-12\">\r\n    <sebm-google-map [latitude]=\"lat\"\r\n                     [longitude]=\"lng\"\r\n                     [zoom]=\"zoom\"\r\n                     [disableDefaultUI]=\"false\"\r\n                     [zoomControl]=\"false\">\r\n\r\n        <sebm-google-map-marker *ngFor=\"let m of markers; let i = index\"\r\n                                (markerClick)=\"clickedMarker(m.label, i)\"\r\n                                [latitude]=\"m.lat\"\r\n                                [longitude]=\"m.lng\"\r\n                                [label]=\"m.label\"\r\n                                [markerDraggable]=\"false\">\r\n\r\n            <sebm-google-map-info-window>\r\n                <strong>{{infoClickedStop}}</strong>\r\n            </sebm-google-map-info-window>\r\n\r\n        </sebm-google-map-marker>\r\n\r\n        <sebm-google-map-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n                                [radius]=\"10000\"\r\n                                [fillColor]=\"'red'\"\r\n                                [circleDraggable]=\"true\"\r\n                                [editable]=\"false\">\r\n        </sebm-google-map-circle>\r\n    </sebm-google-map>\r\n\r\n</div>\r\n<div class=\"col-md-12 col-xs-12\">\r\n    <div class=\"input-group col-md-12\">\r\n        <input type=\"text\" id=\"address\" [ngModel]=\"selectedStop?.city\" #address class=\"form-control\" placeholder=\"Chercher...\"/>\r\n        <div class=\"input-group-btn\">\r\n            <button type=\"button\" (click)=\"getAddress(address)\" class=\"btn btn-info\"><i class=\"fa fa-search\"></i> Chercher</button>\r\n            <button kendoButton (click)=\"resetSearchStop(address)\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-eraser\"></i> Reset</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"selectedStop\" class=\"col-md-12 col-xs-12 center-block stopSelectedContent\">\r\n    <dl class=\"dl-horizontal\">\r\n        <dt>Nom</dt>\r\n        <dd>{{selectedStop?.name}}</dd>\r\n\r\n        <dt>Arrivé</dt>\r\n        <dd>{{selectedStop?.arrival | fmTripDate}}</dd>\r\n\r\n        <dt>Départ</dt>\r\n        <dd>{{selectedStop?.leaving | fmTripDate}}</dd>\r\n\r\n        <dt>Ville</dt>\r\n        <dd><h4 style=\"color:steelblue;\">{{selectedStop?.city}}</h4></dd>\r\n\r\n        <dt><strong>Cuisine</strong></dt>\r\n        <dd>{{selectedStop?.cuisine}}</dd>\r\n\r\n        <dt><strong>Guide</strong></dt>\r\n        <dd>{{selectedStop?.guide}}</dd>\r\n\r\n        <dt><strong>Quote</strong></dt>\r\n        <dd>{{selectedStop?.quote}}</dd>\r\n    </dl>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(256);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(190)();
	// imports
	
	
	// module
	exports.push([module.id, ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n.stopSelectedContent{\r\n    padding: 2% 0;\r\n}", ""]);
	
	// exports


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(171);
	var kendo_data_query_1 = __webpack_require__(258);
	var DemoComponent = (function () {
	    function DemoComponent() {
	        // Inputs
	        this.sliderValue = 5;
	        this.numericValue = 5;
	        this.min = 0;
	        this.max = 10;
	        this.smallStep = 1;
	        // Buttons
	        this.imageUrl = 'http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';
	        this.splitButtonItems = [{
	                text: 'Keep Text Only',
	                icon: 'paste-plain-text',
	                click: function () { console.log('Keep Text Only click handler'); }
	            }, {
	                text: 'Paste as HTML',
	                icon: 'paste-as-html'
	            }, {
	                text: 'Paste Markdown',
	                icon: 'paste-markdown'
	            }, {
	                text: 'Set Default Paste'
	            }];
	        this.dropDownButtonItems = [{
	                text: 'My Profile'
	            }, {
	                text: 'Friend Requests'
	            }, {
	                text: 'Account Settings'
	            }, {
	                text: 'Support'
	            }, {
	                text: 'Log Out'
	            }];
	        // dropdowns
	        this.listItems = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
	        this.value = ['Basketball', 'Cricket'];
	        // grid
	        this.aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
	        this.state = {
	            skip: 0,
	            take: 5,
	            group: [{ field: 'UnitPrice', aggregates: this.aggregates }]
	        };
	        this.data = [{
	                "ProductID": 1,
	                "ProductName": "Chai",
	                "UnitPrice": 18.0000,
	                "Discontinued": true
	            }, {
	                "ProductID": 2,
	                "ProductName": "Chang",
	                "UnitPrice": 19.0000,
	                "Discontinued": false
	            }, {
	                "ProductID": 3,
	                "ProductName": "Aniseed Syrup",
	                "UnitPrice": 10.0000,
	                "Discontinued": false
	            }, {
	                "ProductID": 4,
	                "ProductName": "Chef Anton's Cajun Seasoning",
	                "UnitPrice": 22.0000,
	                "Discontinued": false
	            }, {
	                "ProductID": 5,
	                "ProductName": "Chef Anton's Gumbo Mix",
	                "UnitPrice": 21.3500,
	                "Discontinued": false
	            }, {
	                "ProductID": 6,
	                "ProductName": "Grandma's Boysenberry Spread",
	                "UnitPrice": 25.0000,
	                "Discontinued": false
	            }, {
	                "ProductID": 7,
	                "ProductName": "Chai",
	                "UnitPrice": 22.0000,
	                "Discontinued": true
	            }];
	        this.gridData = kendo_data_query_1.process(this.data, this.state);
	        this.total = kendo_data_query_1.aggregateBy(this.data, this.aggregates);
	        // chart
	        this.series = [{
	                name: "India",
	                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
	            }, {
	                name: "Russian Federation",
	                data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
	            }, {
	                name: "Germany",
	                data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
	            }, {
	                name: "World",
	                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
	            }];
	        this.categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
	        // layout
	        this.baseImageUrl = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";
	        // pop up
	        this.toggleText = "Hide";
	        this.show = true;
	        // scrollview
	        this.items = [{ title: 'Flower', url: 'http://bit.ly/2cJjYuB' }, { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
	            { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }];
	        this.width = "600px";
	        this.height = "400px";
	        // sortable
	        this.items2 = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
	        // upload
	        this.uploadSaveUrl = "saveUrl";
	        this.uploadRemoveUrl = "removeUrl";
	    }
	    DemoComponent.prototype.onSplitButtonClick = function (dataItem) {
	        console.log('Paste');
	    };
	    DemoComponent.prototype.onSplitButtonItemClick = function (dataItem) {
	        if (dataItem) {
	            console.log(dataItem.text);
	        }
	    };
	    DemoComponent.prototype.onButtonClick = function () {
	        console.log('click');
	    };
	    // Input Date
	    DemoComponent.prototype.isMeeting = function (date) {
	        return /10|15|20/.test(date.getDate().toString()) ? 'meeting' : '';
	    };
	    DemoComponent.prototype.dataStateChange = function (state) {
	        var _this = this;
	        state.group.map(function (group) { return group.aggregates = _this.aggregates; });
	        this.state = state;
	        this.gridData = kendo_data_query_1.process(this.data, this.state);
	    };
	    DemoComponent.prototype.imgeUrl = function (imageName) {
	        return this.baseImageUrl + imageName + ".jpg";
	    };
	    DemoComponent.prototype.onToggle = function () {
	        this.show = !this.show;
	        this.toggleText = this.show ? "Hidе" : "Show";
	    };
	    return DemoComponent;
	}());
	DemoComponent = __decorate([
	    core_1.Component({
	        selector: 'demo',
	        template: __webpack_require__(259),
	        encapsulation: core_1.ViewEncapsulation.None
	    })
	], DemoComponent);
	exports.DemoComponent = DemoComponent;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(230);

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    .meeting {\r\n        position: relative;\r\n        color: #00a1e8;\r\n    }\r\n\r\n    .meeting:after {\r\n        position: absolute;\r\n        bottom: -2px;\r\n        left: 50%;\r\n        width: 3px;\r\n        height: 3px;\r\n        margin-left: -1.5px;\r\n        content: '';\r\n        border-radius: 50%;\r\n        background-color: #00a1e8;\r\n    }\r\n\r\n    .k-state-selected .meeting {\r\n        color: #fff;\r\n    }\r\n\r\n    .k-state-selected .meeting:after {\r\n        background-color: #fff;\r\n    }\r\n\r\n    .k-scrollview-wrap {\r\n        margin: 0 auto;\r\n    }\r\n    .demo-title {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      margin: 0;\r\n      padding: 15px;\r\n      color: #fff;\r\n      background-color: rgba(0,0,0,.4);\r\n      text-align: center;\r\n      font-size: 24px;\r\n    }\r\n</style>\r\n\r\n<h2>Demo</h2>\r\n\r\n<section>\r\n    <h3>Inputs</h3>\r\n    <div class=\"example-wrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>MaskedTextBox</p>\r\n                <kendo-maskedtextbox [(ngModel)]=\"value\"\r\n                                     [mask]=\"'9-000'\"></kendo-maskedtextbox>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>NumericTextBox</p>\r\n                <kendo-numerictextbox [(ngModel)]=\"numericValue\"></kendo-numerictextbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>Slider</p>\r\n                <kendo-slider [min]=\"min\"\r\n                              [max]=\"max\"\r\n                              [smallStep]=\"smallStep\"\r\n                              [(ngModel)]=\"sliderValue\"></kendo-slider>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>Switch</p>\r\n                <kendo-switch [(ngModel)]=\"checked\"></kendo-switch>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <h3>Buttons</h3>\r\n    <div class=\"example-wrapper\">\r\n        <div class=\"example-col\">\r\n            <p>Button</p>\r\n            <button kendoButton (click)=\"onButtonClick()\">Default</button>\r\n            <button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">Primary</button>\r\n            <button kendoButton (click)=\"onButtonClick()\" [disabled]=\"true\">Disabled</button>\r\n        </div>\r\n        <div class=\"example-col\">\r\n            <p>ButtonGroup</p>\r\n            <kendo-buttongroup>\r\n                <button kendoButton [togglable]=\"true\">\r\n                    Option A\r\n                </button>\r\n                <button kendoButton [togglable]=\"true\">\r\n                    Option B\r\n                </button>\r\n                <button kendoButton [togglable]=\"true\">\r\n                    Option C\r\n                </button>\r\n            </kendo-buttongroup>\r\n        </div>\r\n        <div class=\"example-col\">\r\n            <p>DropDownButton</p>\r\n            <kendo-dropdownbutton [data]=\"dropDownButtonItems\" [icon]=\"'cog'\" (itemClick)=\"onSplitButtonItemClick($event)\">User Settings</kendo-dropdownbutton>\r\n        </div>\r\n        <div class=\"example-col\">\r\n            <p>SplitButton</p>\r\n            <kendo-splitbutton [data]=\"splitButtonItems\" [icon]=\"'paste'\" (itemClick)=\"onSplitButtonItemClick($event)\" (buttonClick)=\"onSplitButtonClick()\">Paste</kendo-splitbutton>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <h3>Date Inputs</h3>\r\n    <kendo-calendar>\r\n        <template kendoCalendarCellTemplate let-date>\r\n            <span [ngClass]=\"isMeeting(date)\">{{date.getDate()}}</span>\r\n        </template>\r\n    </kendo-calendar>\r\n</section>\r\n\r\n<section>\r\n    <h3>DropDowns</h3>\r\n    <div>\r\n        <div class=\"col-xs-12 col-sm-6 example-col\">\r\n            <p>AutoComplete</p>\r\n            <kendo-autocomplete [data]=\"listItems\" [placeholder]=\"'Your favorite sport'\">\r\n            </kendo-autocomplete>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-6 example-col\">\r\n            <p>ComboBox</p>\r\n            <kendo-combobox [data]=\"listItems\" [value]=\"'Basketball'\">\r\n            </kendo-combobox>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-6 example-col\">\r\n            <p>DropDownList</p>\r\n            <kendo-dropdownlist [data]=\"listItems\" [value]=\"'Basketball'\">\r\n            </kendo-dropdownlist>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"example-wrapper\" style=\"margin-top: 200px;\">\r\n        <h3>Grid</h3>\r\n        <kendo-grid [data]=\"gridData\"\r\n                    [pageSize]=\"state.take\"\r\n                    [skip]=\"state.skip\"\r\n                    [sort]=\"state.sort\"\r\n                    [group]=\"state.group\"\r\n                    [sortable]=\"{ mode: 'multiple' }\"\r\n                    [height]=\"300\"\r\n                    [pageable]=\"true\"\r\n                    [groupable]=\"{ showFooter: true }\"\r\n                    (dataStateChange)=\"dataStateChange($event)\">\r\n            <kendo-grid-column field=\"ProductID\" title=\"Product ID\" width=\"120\">\r\n                <template kendoGridGroupHeaderTemplatе>\r\n                </template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"ProductName\" title=\"Product Name\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"UnitPrice\" title=\"Unit Price\" width=\"230\">\r\n                <template kendoGridGroupFooterTemplate\r\n                          let-group=\"group\"\r\n                          let-aggregates>\r\n                    Sum: {{aggregates[\"UnitPrice\"].sum}}\r\n                </template>\r\n                <template kendoGridFooterTemplate\r\n                          let-column=\"column\">\r\n                    Total {{column.title}}: {{total[\"UnitPrice\"].sum}}\r\n                </template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Discontinued\" width=\"120\">\r\n                <template kendoGridCellTemplate let-dataItem>\r\n                    <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled />\r\n                </template>\r\n            </kendo-grid-column>\r\n        </kendo-grid>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <h3>Charts</h3>\r\n    <kendo-chart [categoryAxis]=\"{ categories: categories }\">\r\n        <kendo-chart-title text=\"Gross domestic product growth /GDP annual %/\"></kendo-chart-title>\r\n        <kendo-chart-legend position=\"top\" orientation=\"horizontal\"></kendo-chart-legend>\r\n        <kendo-chart-tooltip format=\"{0}%\"></kendo-chart-tooltip>\r\n        <kendo-chart-series>\r\n            <kendo-chart-series-item *ngFor=\"let item of series\"\r\n                                     type=\"column\" [data]=\"item.data\" [name]=\"item.name\">\r\n            </kendo-chart-series-item>\r\n        </kendo-chart-series>\r\n    </kendo-chart>\r\n</section>\r\n\r\n\r\n<section>\r\n    <h3>Layout</h3>\r\n    <div class=\"example-wrapper container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>PanelBar</p>\r\n                <kendo-panelbar>\r\n                    <kendo-panelbar-item title=\"Invasion Games\">\r\n                        <kendo-panelbar-item title=\"Hockey\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Soccer\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Rugby\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Basketball\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Water polo\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Netball\"></kendo-panelbar-item>\r\n                    </kendo-panelbar-item>\r\n                    <kendo-panelbar-item title=\"Striking & Fielding Games\">\r\n                        <kendo-panelbar-item title=\"Cricket\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Softball\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Baseball\"></kendo-panelbar-item>\r\n                    </kendo-panelbar-item>\r\n                    <kendo-panelbar-item title=\"Net & Court Games\" [expanded]=\"true\">\r\n                        <kendo-panelbar-item title=\"Badminton\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Squash\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Tennis\" [selected]=\"true\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Table Tennis\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Volleyball\"></kendo-panelbar-item>\r\n                    </kendo-panelbar-item>\r\n                    <kendo-panelbar-item title=\"Target Games\">\r\n                        <kendo-panelbar-item title=\"Golf\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Lawn bowls\"></kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Tenpin bowling\"></kendo-panelbar-item>\r\n                    </kendo-panelbar-item>\r\n                </kendo-panelbar>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 example-col\">\r\n                <p>TabStrip</p>\r\n                <kendo-tabstrip>\r\n                    <kendo-tabstrip-tab [title]=\"'Baseball'\" [selected]=\"true\">\r\n                        <template kendoTabContent>\r\n                            <p>\r\n                                Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.\r\n                            </p>\r\n                            <p>\r\n                                The batting team attempts to score runs by hitting a ball that is thrown by the pitcher with a bat swung by the batter, then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances around the bases and returns to home plate.\r\n                            </p>\r\n                        </template>\r\n                    </kendo-tabstrip-tab>\r\n                    <kendo-tabstrip-tab [title]=\"'Basketball'\">\r\n                        <template kendoTabContent>\r\n                            <p>\r\n                                Basketball is a sport that is played by two teams of five players on a rectangular court. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and mounted at a height of 10 feet (3.048 m) to backboards at each end of the court. The game was invented in 1891 by Dr. James Naismith, who would be the first basketball coach of the Kansas Jayhawks, one of the most successful programs in the game's history.\r\n                            </p>\r\n                        </template>\r\n                    </kendo-tabstrip-tab>\r\n                    <kendo-tabstrip-tab [title]=\"'Football'\">\r\n                        <template kendoTabContent>\r\n                            <p>\r\n                                Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which the word appears.\r\n                            </p>\r\n                        </template>\r\n                    </kendo-tabstrip-tab>\r\n                </kendo-tabstrip>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <h3>PopUp</h3>\r\n    <div class=\"example-config\">\r\n        <button #anchor (click)=\"onToggle()\" class=\"k-button\">{{toggleText}} Popup</button>\r\n    </div>\r\n    <div class=\"example-wrapper\">\r\n        <kendo-popup [popupClass]=\"'content popup'\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"show\">\r\n            <!-- User-defined content -->\r\n            Popup content.\r\n        </kendo-popup>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <h3>ScrollView</h3>\r\n    <kendo-scrollview [data]=\"items\"\r\n                      [width]=\"width\"\r\n                      [height]=\"height\"\r\n                      [arrows]=\"true\"\r\n                      [pageable]=\"true\">\r\n        <template let-item=\"item\">\r\n            <h2 class=\"demo-title\">{{item.title}}</h2>\r\n            <img src='{{item.url}}' alt='{{item.title}}' [ngStyle]=\"{minWidth: width}\" draggable=\"false\" />\r\n        </template>\r\n    </kendo-scrollview>\r\n</section>\r\n\r\n<section>\r\n    <h3>Sortable</h3>\r\n    <div class=\"example-config\">\r\n        <h5>Items: {{items | json}}</h5>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <kendo-sortable [navigatable]=\"true\"\r\n                            [animation]=\"true\"\r\n                            [data]=\"items2\"\r\n                            [itemClass]=\"'item col-xs-6 col-sm-3'\"\r\n                            [activeItemClass]=\"'item col-xs-6 col-sm-3 active'\">\r\n            </kendo-sortable>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <h3>Upload</h3>\r\n    <kendo-upload [saveUrl]=\"uploadSaveUrl\"\r\n                  [removeUrl]=\"uploadRemoveUrl\"\r\n                  [withCredentials]=\"false\">\r\n    </kendo-upload>\r\n</section>\r\n\r\n<section>\r\n    <h3>Interesting feature : Dialog Service</h3>\r\n</section>"

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(171);
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
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(171);
	var moment = __webpack_require__(206);
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
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(807);

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(810);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(834);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(839);

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(798);

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(824);

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(712);

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(813);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(70);

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(849);

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(852);

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(856);

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(871);

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1080);

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1085);

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(875);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg3YzdlZjA2NTMwNGIyZTRmMDIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvbWF0aC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcmVnZXhwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzPzUwYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcz81MDUyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzPzJhMDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tYXAvbWFwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzcz83ZjJmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbW8vZGVtby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tZGF0YS1xdWVyeS9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbW8vZGVtby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWNoYXJ0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZHJvcGRvd25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNjcm9sbHZpZXcvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItc29ydGFibGUvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItdXBsb2FkL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hhbW1lcmpzL2hhbW1lci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBcUI7QUFFckIseUdBQXdHO0FBQ3hHLDJEQUEyRTtBQUMzRSx1Q0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLDBCQUFtQjtBQUVuQix5REFBd0Q7QUFDeEQsR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUNyQixFQUFDO0FBRUQsc0VBQXFFO0FBQ3JFLEtBQU0sUUFBUSxHQUFHLGlEQUFzQixFQUFFLENBQUM7QUFDMUMsS0FBTSxlQUFlLEdBQUcsY0FBUSxRQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxHQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDckMsZUFBZSxFQUFFLENBQUM7QUFDdEIsRUFBQztBQUFDLEtBQUksQ0FBQyxDQUFDO0tBQ0osUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ25FLEVBQUM7Ozs7Ozs7O0FDdkJELGlEOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsZ0ZBQStFO0FBQy9FLHNEQUFxRDs7QUFFckQsd0JBQTRCO0FBQzVCLHdCQUE0QjtBQUM1Qix5QkFBOEI7QUFDOUIseUJBQStCO0FBQy9CLHlCQUFpQztBQUNqQyx5QkFBNEI7QUFDNUIseUJBQTBCO0FBQzFCLHlCQUE0QjtBQUM1Qix5QkFBMEI7QUFDMUIseUJBQTJCO0FBQzNCLDBCQUE0QjtBQUM1QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCLDBCQUE4QjtBQUM5QiwwQkFBOEI7QUFDOUIsMEJBQTJCO0FBQzNCLDBCQUE2QjtBQUU3Qix1R0FBc0c7QUFDdEcsMEJBQTZCO0FBQzdCLDBCQUEyQjs7Ozs7OztBQ3ZCM0I7QUFDQTtBQUNBLGdEOzs7Ozs7QUNGQSxpRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7OztBQ25CQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esa0Q7Ozs7OztBQ0hBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0Esa0Q7Ozs7OztBQ0RBLGdEOzs7Ozs7QUNBQTtBQUNBLG9EOzs7Ozs7QUNEQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1pBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qzs7Ozs7O0FDakJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUMxQkEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7OztBQ0xBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7Ozs7O0FDdEJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1BBLGdEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7Ozs7OztBQ0pBLGlEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Qzs7Ozs7O0FDSkEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ0hBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDWkEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ2RBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZCxDQUFDO0lBRVcsUUFBUSxDQU1wQjtBQU5ZLDZCQUFROzs7Ozs7O0FDVHJCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Im1haW4tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDg3YzdlZjA2NTMwNGIyZTRmMDIiLCJpbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gaW1wb3J0cyBjaSBoYXV0LCBsZXMgcG9seWZpbGxzIHBvdXIgZW5hYmxlciB1biBub3V2ZWwgQVBJL3dlYiBzdXBwb3J0IGRhbnMgdW4gb2xkIGJyb3dzZXIvZW52aXJvbm1lbnRcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBFbmFibGUgZWl0aGVyIEhvdCBNb2R1bGUgUmVsb2FkaW5nIG9yIHByb2R1Y3Rpb24gbW9kZVxuaWYgKG1vZHVsZVsnaG90J10pIHtcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xuICAgIG1vZHVsZVsnaG90J10uZGlzcG9zZSgoKSA9PiB7IHBsYXRmb3JtLmRlc3Ryb3koKTsgfSk7XG59IGVsc2Uge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8vIEJvb3QgdGhlIGFwcGxpY2F0aW9uLCBlaXRoZXIgbm93IG9yIHdoZW4gdGhlIERPTSBjb250ZW50IGlzIGxvYWRlZFxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCk7XG5jb25zdCBib290QXBwbGljYXRpb24gPSAoKSA9PiB7IHBsYXRmb3JtLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpOyB9O1xuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICBib290QXBwbGljYXRpb24oKTtcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGJvb3RBcHBsaWNhdGlvbik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1jbGllbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMzMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxyXG4vLyBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxyXG5cclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1tYXAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3dlYWstc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi90eXBlZCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XHJcblxyXG4vLyBlbmFibGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW4gZGVjb3JhdG9yIGZ1bmN0aW9ucy4gKHJlcGxhY2VzIHBhY2thZ2VzIHJlZmxlY3QtbWV0YWRhdGEgKyBlczYtc2hpbSlcclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3BvbHlmaWxscy50cyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTczKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLkZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTMwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLnBhcnNlSW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5wYXJzZUZsb2F0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9wYXJzZS1mbG9hdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTnVtYmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLWZpeGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNicnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguY2x6MzInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguY29zaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5leHBtMScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5mcm91bmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguaW11bCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5sb2cxMCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5sb2cxcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5sb2cyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnNpZ24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguc2luaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC50YW5oJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnRydW5jJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9tYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTM0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTM4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNvc2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJpZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcubGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlN0cmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDExKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAxNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAxMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJpZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250Y29sb3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAxMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5saW5rLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDIwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5OTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5OTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDAwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS5ub3cnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUnKTtcbm1vZHVsZS5leHBvcnRzID0gRGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTI1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmpvaW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNsaWNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5zb3J0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5mb3ItZWFjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNvbWUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuaW5kZXgtb2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5maWxsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuQXJyYXk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmpvaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTExKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mb3ItZWFjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZXZlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTEzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlJlZ0V4cDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcmVnZXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDUyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwNzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTI2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlNldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTI4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha01hcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvd2Vhay1tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg1MjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LndlYWstc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5XZWFrU2V0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi93ZWFrLXNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDMxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDM0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQxNi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmhhcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVmbGVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcmVmbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTgzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTg4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5OTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk5NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5SZWZsZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM3L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDUzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwNTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDU4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwNTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDU5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA2MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMzM0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY5Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxvZ2luXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkJztcblxuLy8gbWFpbiBjb21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUcmlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmVzdFRyaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwVXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwL21hcC5zZXJ2aWNlJztcblxuLy8gcGlwZXNcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbi8vIGtlbmRvIFVJIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dCc7XHJcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWNoYXJ0cyc7XHJcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5pbXBvcnQgeyBQb3B1cE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlld01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNjcm9sbHZpZXcnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZU1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNvcnRhYmxlJztcclxuaW1wb3J0IHsgVXBsb2FkTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItdXBsb2FkJztcclxuXHJcblxyXG4vLyBNYXBcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xyXG5cclxuLy8gdG91Y2gsIHN3aXBlLCB0YXAsIGZyYWdtZW50IGFjdGlvbnNcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG4vLyBwYWdpbmdcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuXHJcbi8vaW1wb3J0IHsgTG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci0yLWxvY2FsLXN0b3JhZ2UnO1xyXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBEZWxldGVDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJGb3JtQ29tcG9uZW50LFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50LFxuICAgICAgICBUcmlwQ29tcG9uZW50LFxuICAgICAgICBCZXN0VHJpcENvbXBvbmVudCxcbiAgICAgICAgVHJpcERldGFpbENvbXBvbmVudCxcbiAgICAgICAgVHJpcFVzZXJDb21wb25lbnQsXG4gICAgICAgIEVkaXRTdG9wQ29tcG9uZW50LFxuICAgICAgICBTdG9wQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgUmF0aW5nQ29tcG9uZW50LFxuICAgICAgICBNYXBDb21wb25lbnQsXG4gICAgICAgIERlbW9Db21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlLFxuICAgICAgICBNYXBTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIExheW91dE1vZHVsZSxcbiAgICAgICAgQ2hhcnRzTW9kdWxlLFxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIFBvcHVwTW9kdWxlLFxuICAgICAgICBTY3JvbGxWaWV3TW9kdWxlLFxuICAgICAgICBTb3J0YWJsZU1vZHVsZSxcbiAgICAgICAgVXBsb2FkTW9kdWxlLFxuICAgICAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICBhcGlLZXk6ICdBSXphU3lEQnJTNXRTWTZzNTdqZUVPNmFIX1NpN2NvVmswX3hfSVUnXHJcbiAgICAgICAgfSksXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzJywgY29tcG9uZW50OiBUcmlwQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQmVzdFRyaXBDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnYmVzdCcsIGNvbXBvbmVudDogQmVzdFRyaXBDb21wb25lbnQgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndHJpcHMvcGVyc28nLCBjb21wb25lbnQ6IFRyaXBVc2VyQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSwgICAgICAgICAgXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAndHJpcHMvOmlkJywgY29tcG9uZW50OiBUcmlwRGV0YWlsQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnc3RvcCcsIGNvbXBvbmVudDogU3RvcENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdlZGl0JywgY29tcG9uZW50OiBFZGl0U3RvcENvbXBvbmVudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnbWFwJywgY29tcG9uZW50OiBNYXBDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ21hcC86aWQnLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnd2VhdGhlcnMvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZGV0YWlsLzppZCcsIGNvbXBvbmVudDogV2VhdGhlckRldGFpbENvbXBvbmVudCB9XG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZGVtbycsIGNvbXBvbmVudDogRGVtb0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnd2VhdGhlckNvbnN0cmFpbnRzJywgY29tcG9uZW50OiBXZWF0aGVyQ29uc3RyYWludHNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3dlYXRoZXJDb25zdHJhaW50cy86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIsIElVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB1c2VyOiBVc2VyO1xyXG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBtc1RpbWVPdXQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoXCJEYXBoRENcIiwgXCJkYXBoQGRhcGguY29tXCIsIFwiUEBzc3cwcmQhXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubXNUaW1lT3V0ID0gMzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyByZXNldCBsb2dpbiBzdGF0dXNcclxuICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybTogTmdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gPElVc2VyPmZvcm0udmFsdWU7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnZhbGlkKTtcclxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dpblNlcnZpY2UubG9naW5BUEkodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJpcHBlZFRva2VuID0gZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgbG9naW4gdXNlciBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUgPSB0aGlzLnVzZXIudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiA9IHN0cmlwcGVkVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJvbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvbGVbaV0udHlwZSA9PSBcIlN1cGVyVXNlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdXBlclVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmVzdEFkbWluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwc1wiKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIkltcG9zc2libGUgZGUgbG9ndWVyIGxlIHVzZXIgOiBcIiArIHRoaXMudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zdG9wTG9hZGluZygpOyB9LCB0aGlzLm1zVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBsb2cgdXNlciAgOiBcIiArIHRoaXMudXNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcExvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nLCBwdWJsaWMgZW1haWw6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpIHt9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vVXNlci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVVzZXIsIFVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci0yLWxvY2FsLXN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXN0QWRtaW46IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF91cmxMb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLl91cmxMb2dpbiA9ICdhcGkvYXV0aC90b2tlbic7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5BUEkodXNlcjogSVVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsTG9naW4sIGJvZHksIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lc3RBZG1pbiA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXRcIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY0Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2NhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAxODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDExMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgPGgzPkxvZ2luPC9oMz5cXHJcXG4gICAgPGZvcm0gI2xvZ2luPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGxvZ2luKVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VyTmFtZVxcXCI+VXNlciBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIGlkPVxcXCJ1c2VyTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIudXNlck5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnVzZXJOYW1lLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+VXNlcm5hbWUgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkNvdXJyaWVsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLmVtYWlsLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RW1haWwgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPk1vdCBQYXNzZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5wYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPk1vdCBQYXNzZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLXN1Y2Nlc3NcXFwiPlNlIExvZ3VlcjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXY+PGkgKm5nSWY9XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXB1bHNlIGZhLTN4IGZhLWZ3XFxcIj48L2k+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImVycm9yXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj57e2Vycm9yfX08L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkxvZ2luU2VydmljZS50b2tlbiAhPSBudWxsICYmIHR5cGVvZih0aGlzLkxvZ2luU2VydmljZS50b2tlbiAhPSBcInVuZGVmaW5lZFwiKSkge1xyXG4gICAgICAgICAgICAvLyBsb2dnZWQgaW4gc28gcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJndWFyZCA6IFwiICsgdGhpcy5Mb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJndWFyZCBcIiArIHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9sb2dpblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxuXG4gICAgZ29Ib21lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9ob21lXCIpO1xyXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwiYnV0dG9uSG9tZVxcXCIgKGNsaWNrKT1cXFwiZ29Ib21lKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIj48L2k+IEFjY3VlaWw8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj4gICAgICAgIFxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIGF7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXG59XFxuXFxuI2J1dHRvbkhvbWV7XFxyXFxuICAgIG1hcmdpbjogNSUgMDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gU3RhdGlzdGlxdWVzIFRlbXBlcmF0dXJlc1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL21hcCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tYXAtbWFya2VyXFxcIj48L3NwYW4+IE1hcFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2RlbW8nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbGlzdFxcXCI+PC9zcGFuPiBEZW1vXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFxcXCI+PC9zcGFuPiBMb2dPdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXG5cXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxubGkubGluay1hY3RpdmUgYSxcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50LmNzcycpXVxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgcHVibGljIHNlbGVjdGVkOiBudW1iZXI7XG4gICAgcHVibGljIGl0ZW1zOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIkFTUC5ORVQgQ29yZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJBU1AuTkVUIENvcmUgYW5kIEMjIGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9nZXQuYXNwLm5ldC8nLFxyXG4gICAgICAgICAgICAgICAgbGluazI6ICdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiQW5ndWxhciAyIGFuZCBUeXBlU2NyaXB0IFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJmb3IgY2xpZW50LXNpZGUgY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vYW5ndWxhci5pby8nLFxyXG4gICAgICAgICAgICAgICAgbGluazI6ICdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiV2VicGFja1wiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlc1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJmb3IgbGF5b3V0IGFuZCBzdHlsaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvIFdvcmxkPC9oMT5cXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8aDM+QmllbnZlbnVlIFN1ciA8c3Bhbj48c3Ryb25nPjxpPkFuZ3VsYXIyQ29yZVNlZWQ8L2k+PC9zdHJvbmc+PC9zcGFuPiwgRGVtbyA6IDwvaDM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxrZW5kby10YWJzdHJpcCBbbmdDbGFzc109XFxcIidjb2wtbWQtMTInXFxcIiBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWJvdHRvbSc6ICcyJSd9XFxcIj5cXHJcXG4gICAgICAgIDxrZW5kby10YWJzdHJpcC10YWIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtcyBsZXQgaT1pbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiaXRlbS5zdWJqZWN0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVxcXCJpID09IHNlbGVjdGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9UYWJDb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tpdGVtPy5jb250ZW50fX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVxcXCJ7e2l0ZW0/Lmxpbmt9fVxcXCI+e3tpdGVtPy5saW5rfX08L2E+PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwie3tpdGVtPy5saW5rMn19XFxcIj57e2l0ZW0/LmxpbmsyfX08L2E+PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC9rZW5kby10YWJzdHJpcC10YWI+XFxyXFxuICAgIDwva2VuZG8tdGFic3RyaXA+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxoND5MZXMgY29uY2VwdHMgaW1wb3J0YW50cyA6IDwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuIDxzZWN0aW9uPlxcclxcbiAgICA8a2VuZG8tcGFuZWxiYXIgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1ib3R0b20nOiAnMiUnfVxcXCI+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInQ2xpZW50LXNpZGUgbmF2aWdhdGlvbidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidTZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcnXFxcIiBbc2VsZWN0ZWRdPVxcXCJ0cnVlXFxcIiBbZXhwYW5kZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidXZWJwYWNrIGRldiBtaWRkbGV3YXJlJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0luIGRldmVsb3BtZW50IG1vZGUsIG5vIG5lZWQgdG8gcnVuIHRoZSB3ZWJwYWNrIGJ1aWxkIHRvb2wuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidIb3QgbW9kdWxlIHJlcGxhY2VtZW50J1xcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0luIGRldmVsb3BtZW50IG1vZGUsIG5vIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInRWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0luIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgd2VicGFjayBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICA8L2tlbmRvLXBhbmVsYmFyPlxcblxcbjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hvbWUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImEsIHAgPiBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdntcXHJcXG4gICAgbWFyZ2luOiAxJSAwO1xcclxcbiAgICBwYWRkaW5nOiAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4uL3N0b3Avc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgVHJpcCwgSVRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWxldGUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGVsZXRlLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpc0RlbGV0ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb0RlbGV0ZUlkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBvYmplY3RUb0RlbGV0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdHJpcFRvRGVsZXRlOiBJVHJpcDtcclxuICAgIEBPdXRwdXQoKSBkZWxldGVTdWNjZXNzOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBwdWJsaWMgaWRUb0RlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd05vdGlmOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSwgcHVibGljIF90cmlwRGV0YWlsU2VydmljZTogVHJpcERldGFpbFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkVG9EZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGUpIHtcclxuICAgICAgICAgICAgLy8gcG9wIHVwIG9wZW5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbiBkZWxldGUgOiBcIiArIHRoaXMuaXNEZWxldGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTm90aWYoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsZXRlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmlkVG9EZWxldGUgPSB0aGlzLndlYXRoZXJUb0RlbGV0ZUlkO1xyXG4gICAgICAgIGlmICh0aGlzLm9iamVjdFRvRGVsZXRlID09IFwic3RvcEFkbWluXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVTdG9wQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9iamVjdFRvRGVsZXRlID09IFwid2VhdGhlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlcldlYXRoZXJCeUlkKHRoaXMuaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdFRvRGVsZXRlID09IFwidXNlcnRyaXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVVzZXJUcmlwKHRoaXMudHJpcFRvRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbERlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcEJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0b3BTZXJ2aWNlLmRlbGV0ZVN0b3BCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgc3RvcCBpbiBkZWxldGUgY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZXJXZWF0aGVyQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZGVsZXRlV2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIERFTEVURSBpbiBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVXNlclRyaXAodHJpcDogSVRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwRGV0YWlsU2VydmljZS5kZWxldGVUcmlwQVBJKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCB0cmlwIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coXCJlcnJvciBkZWxldGluZyB0cmlwXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsV2VhdGhlcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsV2VhdGhlciA9IFwiYXBpL3dlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBhbGwgd2VhdGhlciBvYmplY3RzXHJcbiAgICBnZXRBbGxXZWF0aGVyc0FQSSgpOiBPYnNlcnZhYmxlPElXZWF0aGVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXJbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcG9zdFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVDogICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHB1dFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBieSBpZFxyXG4gICAgZ2V0V2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgbmFtZVxyXG4gICAgZ2V0V2VhdGhlckJ5TmFtZUFQSShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9CeU5hbWUvXCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IGlkXHJcbiAgICBkZWxldGVXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIgKyBlcnJvcikpICAgICAgXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3BTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BCeUlkQVBJKGlkOiBudW1iZXIsIHN0b3A6IFN0b3ApOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHN0b3AuY3Vpc2luZSA9IHN0b3AuY3Vpc2luZVtcInRleHRcIl07XHJcbiAgICAgICAgc3RvcC5ndWlkZSA9IHN0b3AuZ3VpZGVbXCJ0ZXh0XCJdO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0b3ApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsU3RvcCArIFwiL1wiICsgaWQsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElTdG9wPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9wQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwiZGVsZXRlIHN0b3Agd2l0aCBpZCA6IFwiICsgaWQpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGUgc3RvcCBcIiArIGVycm9yKSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gXCJhcGkvdHJpcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgZ2V0IHRyaXBzIGZvciBsb2dnZWQgaW4gdXNlci5cclxuICAgIGdldFVzZXJUcmlwQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL3VzZXJcIiwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB0cmlwIG9iamVjdC5cclxuICAgIHBvc3RUcmlwQVBJKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0cmlwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxUcmlwLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxUcmlwICsgXCIvdXNlclRyaXAvXCIgKyB0cmlwLmlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxhbnk+Y29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImlzU2hvd05vdGlmXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtc3VjY2Vzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgPHA+QWN0aW9uIGVmZmVjdHXDqWUuPC9wPiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiaWRUb0RlbGV0ZVxcXCI+XFxyXFxuICAgICAgICA8aDM+U3VjY8OocyBzdXBwcmltZXIgIzwvaDM+XFxyXFxuICAgICAgICA8aDQ+e3tpZFRvRGVsZXRlfX08L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiaGlkZU5vdGlmKClcXFwiPkhpZGU8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48a2VuZG8tZGlhbG9nICpuZ0lmPVxcXCJpc0RlbGV0ZVxcXCIgKGNsb3NlKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS4zZW07XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+IFN1cHByaW1lciBkb25uw6llXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFjdGlvbiBpcnLDqXZvY2FibGUuPC9wPlxcclxcblxcclxcbiAgICA8a2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwib25EZWxldGVEYXRhKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbjwva2VuZG8tZGlhbG9nPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuLi93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG4gICAgcHVibGljIHdlYXRoZXIxOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRyZVdlYXRoZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBlZGl0Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmbURhdGU6IGFueTtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdHJlV2VhdGhlciA9IFwiUmVjZW5zZW1lbnQgVGVtcMOpcmF0dXJlXCI7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgLy8gbW9tZW50IGpzIGZvcm1hdCBhIGRhdGUgd2l0aCBhIHN0cmluZyBmb3JtYXQsIHJldHVybnMgYSBkYXRlLlxyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgdGhpcy5mbURhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm1EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3Mgd2VhdGhlciBvYmplY3QgdG8gYmluZCB0by5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxID0gbmV3IFdlYXRoZXIoMSwgXCJBdXRvbW5XZWF0aGVyXCIsIHRoaXMuZm1EYXRlLCAxNCwgXCJUZW1ww6lyYXR1cmUgQXV0b21uZVwiLCAyNCwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTWV0aG9kIHRvIGdldCB3ZWF0aGVyIG9iamVjdHNcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCA6IGFsbCB3ZWF0aGVyIG9iamVjdHMgZnJvbSBkYlxyXG4gICAgZ2V0QWxsV2VhdGhlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFdlYXRoZXJzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IGFsbCB3ZWF0aGVyIG9iamV0cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2aWNlIDogIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXZWF0aGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gIXRoaXMuc2hvd0Zvcm07XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvRGVsZXRlKGlkVG9EZWxldGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZFRvRGVsZXRlKTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBpZFRvRGVsZXRlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwid2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcnMuc3BsaWNlKHRoaXMuaW5wdXRJZERlbGV0ZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSBhIGpzIG9iamVjdCAgKHVzdWFsbHkgb2JqZWN0IG9yIGFycmF5KSBjb252ZXJ0IGl0IHRvIEpTT04gc3RyaW5nIG5vdGF0aW9uXHJcbiAgICAvLyB0byBnZXQgSlNPTiBvYmplY3QgdXNlIHBhcnNlIG1ldGhvZFxyXG4gICAgZ2V0IGRpYWdub3N0aWMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwYXlsb2FkIHdlYXRoZXIgb2JqZWN0IGZyb20gY2hpbGRyZW4gY29tcG9uZW50IHdlYXRoZXJmb3JtXHJcbiAgICBwb3N0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICAvLyBmaWVsZCBkdSBmb3JtIGNoYW5nw6lcclxuICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSAkZXZlbnQuaG91cjtcclxuICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBDID0gJGV2ZW50LnRlbXBDO1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9ICRldmVudC5zdW1tYXJ5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHdlYXRoZXIgdG8gcG9zdCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIHNhdmUgbmV3IHdlYXRoZXIgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5zYXZlV2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlclxyXG4gICAgZWRpdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgLy8gZmllbGQgZHUgZm9ybSBjaGFuZ8OpXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9ICRldmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRpbmcgYSB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gZWRpdCBhIHdlYXRoZXJcclxuICAgICAgICB0aGlzLnB1dFdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXIgd2hlbiBjbGlja2luZyBhIGxpbmsgb24gd2VhdGhlciBvYmplY3RzIHRhYmxlLlxyXG4gICAgZ29FZGl0KHdlYXRoZXI6IFdlYXRoZXIpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gd2VhdGhlcjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUIDogY2FsbCB0aGUgcG9zdCBhY3Rpb24gb24gYmFja2VuZCB0byBjcmVhdGUgbmV3IHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgc2F2ZVdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IFN1YnNjcmlwdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSBkYXRhLmhvdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcGVyYXR1cmVGID0gZGF0YS50ZW1wZXJhdHVyZUY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdG9wSWQgPSBkYXRhLnN0b3BJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkIG5ldyB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRhdGEgaW4gdGhlIGJyb3dzZXIgdG8gZ2V0IGhlIG5ld2x5IHNhYmVkIHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgb2YgZGF0ZSBzZW50IGJhY2sgdG8gY2xpZW50IDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAodGhpcy53ZWF0aGVyMS5ob3VyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igc2F2aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucHV0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdG9wSWQgPSBkYXRhLnN0b3BJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRlZCB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBlZGl0aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUgdW5zdWJzY3JpYmUgd2VhdGhlciBjb21wb25lbnRcIik7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4uL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdlYXRoZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhvdXI/OiBEYXRlO1xuICAgIHRlbXBDPzogbnVtYmVyO1xuICAgIHN1bW1hcnk/OiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVGPzogbnVtYmVyO1xuICAgIHN0b3BJZD86IG51bWJlcjtcbiAgICBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYXRoZXIgaW1wbGVtZW50cyBJV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaG91cj86IERhdGUsXG4gICAgICAgIHB1YmxpYyB0ZW1wQz86IG51bWJlcixcbiAgICAgICAgcHVibGljIHN1bW1hcnk/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0ZW1wZXJhdHVyZUY/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdG9wSWQ/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXSkgeyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPnt7dGl0cmVXZWF0aGVyfX08L2gxPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2hvd1dlYXRoZXJGb3JtKClcXFwiPkVucmVnaXN0cmVyIFRlbXDDqXJhdHVyZTwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd0Zvcm1cXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8d2VhdGhlci1mb3JtIFt3ZWF0aGVyVG9TYXZlXT1cXFwid2VhdGhlcjFcXFwiIChuZXdXZWF0aGVyKT1cXFwicG9zdFdlYXRoZXIoJGV2ZW50KVxcXCIgKGVkV2VhdGhlcik9XFxcImVkaXRXZWF0aGVyKCRldmVudClcXFwiIFttb2RlRWRpdF09XFxcImVkaXRGb3JtXFxcIj48L3dlYXRoZXItZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+Tm9tPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhldXJlIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXDDqXJhdHVyZSDCsEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U29tbWFpcmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcMOpcmF0dXJlIMKwRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdXBwcmltZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+w4lkaXRlcjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj4gU3VwcHJpbWVyPC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29FZGl0KHdlYXRoZXIpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPiDDiWRpdGVyPC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlPjwvZGVsZXRlPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRm9ybUNvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb1NhdmU6IFdlYXRoZXI7XHJcbiAgICBAT3V0cHV0KCkgbmV3V2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQE91dHB1dCgpIGVkV2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQElucHV0KCkgbW9kZUVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIG9uRWRpdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBkZWNpbWFsczogbnVtYmVyO1xyXG4gICAgcHVibGljIGF1dG9Db3JyZWN0OiBib29sZWFuO1xyXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xyXG4gICAgLy9mb3JtMTogTmdGb3JtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25FZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5ld1dlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgdGhpcy5lZFdlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgLy90aGlzLmZvcm0xID0gbmV3IE5nRm9ybShbXSwgW10pO1xyXG5cclxuICAgICAgICAvLyBudW1iZXIgaW5wdXRcclxuICAgICAgICB0aGlzLmRlY2ltYWxzID0gMDtcclxuICAgICAgICB0aGlzLmF1dG9Db3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9ICduMCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gdmV1dCBzb3VtZXR0cmUgb24gZWRpdC5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW52b3llciBsZSB3ZWF0aGVyZm9ybSBvYmplY3QgYXUgd2VhdGhlciBjb21wb25lbnRcclxuICAgIG9uU3VibWl0KHdlYXRoZXJGb3JtOiBOZ0Zvcm0peyAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWxpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRXZWF0aGVyLmVtaXQodGhpcy53ZWF0aGVyVG9TYXZlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBjcmVlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gZmFsc2U7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3V2VhdGhlci5lbWl0KHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBlZGl0ZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMT5Gb3JtIFRlbXDDqXJhdHVyZTwvaDE+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCh3ZWF0aGVyRm9ybSlcXFwiICN3ZWF0aGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5vbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUubmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5IZXVyZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0aW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaG91clxcXCIgbmFtZT1cXFwiaG91clxcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUuaG91clxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRlbXBDXFxcIj5UZW1ww6lyYXR1cmUgwrBDPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGtlbmRvLW51bWVyaWN0ZXh0Ym94IGlkPVxcXCJ0ZW1wQ1xcXCIgbmFtZT1cXFwidGVtcENcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjBcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiIFtyZXN0cmljdERlY2ltYWxzXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtkZWNpbWFsc109XFxcImRlY2ltYWxzXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS50ZW1wQ1xcXCIgW3N0ZXBdPVxcXCIxXFxcIiBbbWluXT1cXFwiMVxcXCIgW21heF09XFxcIjQ1XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW2F1dG9Db3JyZWN0XT1cXFwiYXV0b0NvcnJlY3RcXFwiIFtmb3JtYXRdPVxcXCJmb3JtYXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLW51bWVyaWN0ZXh0Ym94PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VtbWFyeVxcXCI+U29tbWFpcmU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1bW1hcnlcXFwiIG5hbWU9XFxcInN1bW1hcnlcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnN1bW1hcnlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZCB8fCBtb2RlRWRpdFxcXCI+U291bWV0dHJlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwibW9kZUVkaXRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIXdlYXRoZXJGb3JtLnZhbGlkXFxcIj7DiWRpdGVyPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhc3VibWl0dGVkXFxcIj5cXHJcXG4gICAgICAgIDxoMj5Wb3VzIGF2ZXogc291bWlzIDo8L2gyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+Tm9tPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5IZXVyZSBBTS9QTTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLmhvdXIgfCBmbUhvdXJMb2NhbH19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXDDqXJhdHVyZSDCsEM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlNvbW1haXJlPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuc3VtbWFyeX19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXDDqXJhdHVyZSDCsEY8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wZXJhdHVyZUZ9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xcclxcbn1cXHJcXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgI2E5NDQ0MjsgLyogcmVkICovXFxyXFxufVxcclxcblxcclxcbi5rLWludmFsaWQge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiNkYXRlLCAjZGF0ZSA+IHRhYmxlLCAjZGF0YSA+IGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxlLCBrZW5kby1jYWxlbmRhci1tb250aHZpZXcsIHRhYmxlLmstY2FsZW5kYXItd2Vla2RheXN7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn0qL1xcclxcblxcclxcbi8qLmstY2FsZW5kYXIuay1jYWxlbmRhci1pbmZpbml0ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybS1ncm91cCBkaXYuay1jb250ZW50Lmstc2Nyb2xsYWJsZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmtlbmRvLWNhbGVuZGFyLW1vbnRodmlldy5rLWNhbGVuZGFyLW1vbnRodmlld3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcmRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc3ViMjogYW55O1xyXG4gICAgd2VhdGhlcjogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBtZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJcIjsgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdICE9IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdLnBhdGggPT0gXCJkZXRhaWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN1YjIgPSB0aGlzLl9yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50VXJsID0gZXZlbnQudXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWdtZW50VXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50VXJsWzNdICE9IG51bGwgJiYgdHlwZW9mIChzZWdtZW50VXJsWzNdKSAhPSAndW5kZWZpbmVkJyAmJiBzZWdtZW50VXJsWzNdID09ICdkZXRhaWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnRVcmxbNF0gIT0gbnVsbCAmJiB0eXBlb2YgKHNlZ21lbnRVcmxbNF0pICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZFdlYXRoZXIgPSArc2VnbWVudFVybFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdLnBhdGggPT0gXCJkZXRhaWxcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4gdXNlIHNuYXBzaG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZFdlYXRoZXIgPSBzbmFwc2hvdC51cmxbMV0ucGF0aDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRXZWF0aGVyICE9IG51bGwgJiYgdHlwZW9mIChpZFdlYXRoZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9ICtpZFdlYXRoZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckJ5ZElkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdWIgPSAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIGluIHBhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FjdGl2YXRlZFJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhIHJvdXRlIG4nZXN0IHBhcyBhY3RpdsOpZSwgbGEgcm91dGUgcGFyZW50ZSBlc3QgYWN0aXZlICh3ZWF0aGVyIGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZURldGFpbHMgPSBcIkF1Y3VucyBkw6l0YWlscyDDoCBhZmZpY2hlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWF0aGVyQnlkSWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGwgZ2V0RGV0YWlscyBtZXRob2QgaW4gdGhlIG5zZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgd2VhdGhlciBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnQgZ2V0IGRldGFpbHMgYnkgaWQgOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bnN1YlwiKTtcclxuICAgICAgICBpZiAodGhpcy5zdWIgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5zdWIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN1YjIgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5zdWIyKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnN1YjIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+e3ttZXNzYWdlRGV0YWlsc319PC9oMj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyXFxcIj5cXHJcXG4gICAgPGgxPkTDqXRhaWxzIFRlbXDDqXJhdHVyZTwvaDE+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+Tm9tPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhldXJlIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXDDqXJhdHVyZSDCsEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U29tbWFpcmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcMOpcmF0dXJlIMKwRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlRlbXDDqXJhdHVyZXM8L2gyPlxcclxcblxcclxcbjxoMz5DaG9pc2lyIHVuZSBUZW1ww6lyYXR1cmUgOiA8L2gzPlxcclxcblxcclxcbjx1bD5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbd2VhdGhlci5pZF1cXFwiPnt7d2VhdGhlcj8ubmFtZX19PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQsIElDb25zdHJhaW50IH0gZnJvbSAnLi93ZWF0aGVyQ29uc3RyYWludCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1jb25zdHJhaW50JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RyYWludHM6IENvbnN0cmFpbnRbXTtcclxuICAgIHB1YmxpYyB0ZW1wQ29uc3Q6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3dlYXRoZXJDb25zdHJhaW50U2VydmljZTogV2VhdGhlckNvbnN0cmFpbnRzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGVtcENvbnN0ID0gWydWZW50JywgJ1JhZmFsZScsICdIdW1pZGl0w6knLCAnUHLDqXNlbnRpJ107IFxyXG4gICAgICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uc3RyYWludHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50cygpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldENvbnN0cmFpbnRzQVBJKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgdGhlIGNvbnN0cmFpbnRzIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uc3RhdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50c1tpXS5zdGF0cy5wdXNoKHRoaXMuY29uc3RyYWludHNbaV0ud2luZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uZ3VzdCwgdGhpcy5jb25zdHJhaW50c1tpXS5odW1pZGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uZmVlbHNMaWtlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIGR1IHNlcnZldXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZWF0aGVyQ29uc3RyYWludHMnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlcmNvbnN0cmFpbnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zdHJhaW50c0FQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnYXBpL3dlYXRoZXIvJyArIGlkICsgJy9jb25zdHJhaW50cycpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3A6IFJlc3BvbnNlKSA9PiA8SUNvbnN0cmFpbnRbXT5yZXNwLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+U3RhdGlzdGlxdWVzIHBvdXIgbGEgdGVtcMOpcmF0dXJlIDogIyB7e3RoaXMuaWR9fTwvaDI+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgSURcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgVmVudCBrbS9oXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFJhZmFsZSBrbS9oXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEh1bWlkaXTDqSAlXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIExldmVyIFNvbGVpbCBBTVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBDb3VjaGVyIFNvbGVpbCBQTVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBDbGFydMOpXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFByw6lzZW50aSDCsENcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgVGVtcMOpcmF0dXJlXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaWR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LndpbmR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmd1c3R9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmh1bWlkaXR5fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5SaXNpbmcgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5TZXQgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCA6IHt7Y29uc3RyYWludD8ud2VhdGhlci5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwPkhldXJlIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLmhvdXIgfCBmbUhvdXJMb2NhbCB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCDCsEMgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIudGVtcEN9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcbjxrZW5kby1jaGFydCBbY2F0ZWdvcnlBeGlzXT1cXFwieyBjYXRlZ29yaWVzOiB0ZW1wQ29uc3QgfVxcXCI+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC12YWx1ZS1heGlzPlxcclxcbiAgICAgICAgPGtlbmRvLWNoYXJ0LXZhbHVlLWF4aXMtaXRlbSBbdGl0bGVdPVxcXCJ7IHRleHQ6ICdTdGF0aXN0aXF1ZXMnIH1cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC12YWx1ZS1heGlzLWl0ZW0+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtdmFsdWUtYXhpcz5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXRpdGxlIHRleHQ9XFxcIlN0YXRpc3RpcXVlcyBUZW1ww6lyYXR1cmUgLyBDb250cmFpbnRlXFxcIiBiYWNrZ3JvdW5kPVxcXCIjZTNlM2UzXFxcIiBmb250PVxcXCIxOXB0IHNhbnMtc2VyaWZcXFwiPjwva2VuZG8tY2hhcnQtdGl0bGU+XFxyXFxuICAgIDxrZW5kby1jaGFydC1sZWdlbmQgcG9zaXRpb249XFxcInRvcFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwva2VuZG8tY2hhcnQtbGVnZW5kPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtdG9vbHRpcCBmb3JtYXQ9XFxcInswfVxcXCIgcGFkZGluZz1cXFwiMVxcXCIgIFtzaGFyZWRdPVxcXCJ0cnVlXFxcIj48L2tlbmRvLWNoYXJ0LXRvb2x0aXA+XFxyXFxuICAgIDxrZW5kby1jaGFydC1hcmVhIGJhY2tncm91bmQ9XFxcIiNmN2Y3ZmFcXFwiIFttYXJnaW5dPVxcXCIzMFxcXCI+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtYXJlYT5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC1zZXJpZXMtaXRlbSAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIiB0eXBlPVxcXCJjb2x1bW5cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImNvbnN0cmFpbnQuc3RhdHNcXFwiIFtuYW1lXT1cXFwiY29uc3RyYWludC5pZFxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcy1pdGVtPlxcclxcbiAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG48L2tlbmRvLWNoYXJ0PlxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1wcmltYXJ5XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gUmV0b3VyPC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4vdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi90cmlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyB0aXRyZVRyaXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dQb3BVcDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzaG93UG9wVXBJZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZXFUcmlwczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWFyY2hNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnRpdHJlVHJpcCA9IFwiTGVzIEZvcmZhaXRzIFZveWFnZXNcIjtcclxuICAgICAgICB0aGlzLnRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcElkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXFUcmlwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSA9IFwiQ2hlcmNoZXJcIjtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrUmF0aW5nKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSAhdGhpcy5zaG93UG9wVXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVHJpcElkKGlucHV0OiBhbnkpIHtcclxuICAgICAgICB2YXIgaWQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoaWQgPT0gXCJcIiB8fCBpZCA9PSBudWxsIHx8IHR5cGVvZihpZCkgPT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oK2lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBcIkludmFsaWRlXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzIHVuIG5vbWJyZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBcIk9rXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2sgZXN0IHVuIG5vbWJyZVwiKTtcclxuICAgICAgICAgICAgdmFyIGlkVG9TZWFyY2ggPSAraWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkVG9TZWFyY2gpO1xyXG4gICAgICAgICAgICB0aGlzLl90cmlwU2VydmljZS5nZXRUcmlwQnlJZEFQSShpZFRvU2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWRpcmVjdCB0byBkZXRhaWwgb2YgdGhpcyBwYXJ0aWN1bGFyIHRyaXAgYnkgaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL1wiICsgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmNmI1OFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiSW1wb3NzaWJsZSBkZSB0cm91dmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwIGJ5IGlkIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUcmlwcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2ggdHJpcHNcIik7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlSWRQb3BVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcElkID0gIXRoaXMuc2hvd1BvcFVwSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGdldCBtZXRob3Mgc3VyIHNlcnZpY2UuXHJcbiAgICBnZXRBbGxUcmlwcygpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5yZXFUcmlwcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEFsbFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcVRyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcVRyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcCh0cmlwOiBUcmlwKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdHJpcFNlcnZpY2UuZGVsZXRlVHJpcEJ5QWRtaW4odHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1cHByaW1lciBsZSB0cmlwIGPDtHTDqSBjbGllbnQgcG91ciBhY3R1YWxpc2VyIGxhIHZ1ZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzLnNwbGljZSh0aGlzLnRyaXBzLmluZGV4T2YodHJpcCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0aW5nIGEgdHJpcCBieSBTdXBlclVzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRyeWluZyBkZWxldGUgdHJpcCBieSBTdXBlclVzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi90cmlwJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gJ2FwaS90cmlwJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBBbGwgdHJpcHMgb2JqZWN0cy5cclxuICAgIGdldEFsbFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXA+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIEJlc3QgdHJpcCBvYmplY3RzLlxyXG4gICAgZ2V0QmVzdFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArICcvYmVzdFRyaXBzJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXBCeUFkbWluKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gdHJpcC5pZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBkZWxldGluZyBhIHRyaXAgZG9uZSBieSBTdXBlclVzZXJzXCIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGluZyB0cmlwIGJ5IFN1cGVyVXNlcnNcIikpXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyPlxcclxcbiAgICA8aDE+QmllbnZlbnVlIDwvaDE+XFxyXFxuICAgIDxoMj4ge3t1c2VyTmFtZX19PC9oMj5cXHJcXG48L2hlYWRlcj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4taW5mbyBhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJpcHMvcGVyc28nXVxcXCI+TWVzIHRyaXBzPC9hPlxcclxcblxcclxcbjxoMj57e3RpdHJlVHJpcH19PC9oMj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2Jlc3QnXVxcXCI+TWVpbGxldXJzIFRyaXBzPC9hPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG48aDM+RGlzcG9uaWJsZXMgcHLDqXNlbnRlbWVudDwvaDM+XFxyXFxuXFxyXFxuPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IGNvbC1tZC0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItbGVmdCBuYXZiYXItaGVhZGVyIGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItbGVmdFxcXCIgcm9sZT1cXFwiU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiAjaW5wdXRJZFNlYXJjaCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwie3tzZWFyY2hNZXNzYWdlfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiICNhbmNob3IgKGNsaWNrKT1cXFwib25Ub2dnbGVJZFBvcFVwKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1pbmZvXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwic2VhcmNoVHJpcElkKGlucHV0SWRTZWFyY2gpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5HbyE8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1wb3B1cCBjbGFzcz1cXFwicG9wVXBDb250ZW50XFxcIiBbYW5jaG9yXT1cXFwiYW5jaG9yXFxcIiAoYW5jaG9yVmlld3BvcnRMZWF2ZSk9XFxcInNob3cgPSBmYWxzZVxcXCIgKm5nSWY9XFxcInNob3dQb3BVcElkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFJlY2hlcmNoZXIgcGFyIElkIGRlIHRyaXAuXFxyXFxuICAgICAgICAgICAgICAgIDwva2VuZG8tcG9wdXA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItcmlnaHQgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJyZWZyZXNoVHJpcHMoKVxcXCIga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBbaWNvbl09XFxcIidyZWZyZXNoJ1xcXCIgY2xhc3M9XFxcInJlZnJlc2hCdXR0b25cXFwiPkFjdHVhbGlzZXI8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+ICAgXFxyXFxuPC9uYXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGNvbC1zbS0xMlxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlclxcXCI+XFxyXFxuICAgIDxpICpuZ0lmPVxcXCJyZXFUcmlwc1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS01eFxcXCI+PC9pPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxtYWluIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8dGVtcGxhdGUgKm5nSWY9XFxcIiF0cmlwcy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPGgzPkF1Y3VucyBUcmlwczwvaDM+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgdHJpcCBvZiB0cmlwcyB8IHBhZ2luYXRlOiB7IGl0ZW1zUGVyUGFnZTogOCwgY3VycmVudFBhZ2U6IHAgfVxcXCIgY2xhc3M9XFxcImluZm9zVHJpcCBjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImRlbGV0ZVRyaXAodHJpcClcXFwiIGtlbmRvQnV0dG9uIFtwcmltYXJ5XT1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRlbGV0ZVRyaXBCdXR0b25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3RyaXA/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkNvbnRpbmVudCA6IHt7dHJpcD8uY29udGluZW50fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSAjYW5jaG9yPlxcclxcbiAgICAgICAgICAgICAgICBSYXRpbmcgOiA8cmF0aW5nIGNsYXNzPVxcXCJyYXRpbmdcXFwiICpuZ0lmPVxcXCJ0cmlwPy5yYXRpbmdcXFwiIFtyYXRpbmddPSd0cmlwLnJhdGluZycgKHJhdGluZ0NsaWNrKT1cXFwiY2xpY2tSYXRpbmcoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvcmF0aW5nPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBvcHVwIFthbmNob3JdPVxcXCJhbmNob3JcXFwiIGNsYXNzPVxcXCJwb3BVcENvbnRlbnRcXFwiICpuZ0lmPVxcXCJzaG93UG9wVXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBRdW90w6kgOiB7e3RyaXA/LnJhdGluZ319XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1wb3B1cD5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8cD5EYXRlIGRlIETDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbdHJpcC5pZF1cXFwiPlZvaXIgVHJpcDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPHBhZ2luYXRpb24tY29udHJvbHMgKHBhZ2VDaGFuZ2UpPVxcXCJwID0gJGV2ZW50XFxcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L21haW4+XFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDElIDAgMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgxLCBoZWFkZXIgPiBoMntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwe1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphenVyZTtcXHJcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDIuNSU7XFxyXFxufVxcclxcblxcclxcbmRpdiA+IHVse1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9zVHJpcDpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE1ZGVnKTtcXHJcXG59XFxyXFxuLmluZm9zVHJpcDpob3Zlciwgc2VjdGlvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnBhZ2luYXRpb24tY29udHJvbHN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDb250ZW50e1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjNzg3ODc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLDE0NCwyNTUsLjMpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxLCA1LCA1LCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVRyaXBCdXR0b257XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoQnV0dG9ue1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tICcuLi90cmlwL3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdyb3VwRGVzY3JpcHRvciwgcHJvY2VzcywgU29ydERlc2NyaXB0b3IgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0YS1xdWVyeSc7XHJcbmltcG9ydCB7XG4gICAgR3JpZENvbXBvbmVudCxcbiAgICBHcmlkRGF0YVJlc3VsdCxcbiAgICBQYWdlQ2hhbmdlRXZlbnRcbn0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmVzdC10cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBiZXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBiZXN0LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXN0VHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZ3JpZFZpZXc6IEdyaWREYXRhUmVzdWx0O1xyXG4gICAgcHVibGljIGJlc3RUcmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2tpcDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzVHJpcHM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0bGVCZXN0VHJpcHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBoaWRkZW5Db2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBkYXRhOiBPYmplY3RbXTtcclxuXHJcbiAgICAvLyBwYWdpbmcgaW5mb3NcclxuICAgIHB1YmxpYyBidXR0b25Db3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIGluZm86IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhZ2VTaXplczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmV2aW91c05leHQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UsIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmJlc3RUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSA1O1xyXG4gICAgICAgIHRoaXMuc2tpcCA9IDA7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zID0gW107XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5pc1RyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aXRsZUJlc3RUcmlwcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIm51bWVyaWNcIjtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c05leHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yb3V0ZXIudXJsID09IFwiL3RyaXBzL2Jlc3RcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQgdGhlIHJvdXRpbmcgdG8gYWNjZXNzIGJlc3QgdHJpcHMgY29tcG9uZW50IGluIHBhcmVudCBjb21wb25lbnQgdHJpcHMuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlQmVzdFRyaXBzID0gXCJDb25zdWx0ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5nZXRCZXN0VHJpcHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZShldmVudDogUGFnZUNoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tpcCA9IGV2ZW50LnNraXA7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1zKCk7XG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpIHtcclxuICAgICAgICB0aGlzLmdyaWRWaWV3ID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmJlc3RUcmlwcy5zbGljZSh0aGlzLnNraXAsIHRoaXMuc2tpcCArIHRoaXMucGFnZVNpemUpLFxyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy5iZXN0VHJpcHMubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGggPSAwO1xuICAgIH1cclxuXHJcbiAgICBoaWRlQ29sdW1uKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zLnB1c2goZmllbGQpO1xuICAgIH1cclxuXHJcbiAgICBvblZpZXdUcmlwcygpIHtcclxuICAgICAgICB0aGlzLmlzVHJpcHMgPSAhdGhpcy5pc1RyaXBzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmVzdFRyaXBzKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEJlc3RUcmlwc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdFRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBnZXR0aW5nIGJlc3QgdHJpcHMgOiBcIiArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYmVzdCB0cmlwcyA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+PGEgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLWxpbmtcXFwiIChjbGljayk9XFxcIm9uVmlld1RyaXBzKClcXFwiPnt7dGl0bGVCZXN0VHJpcHN9fTwvYT48L2gxPlxcclxcblxcclxcbjwhLS0gYmVzdCB0cmlwcyBncmlkIC0tPlxcclxcbjxzZWN0aW9uICpuZ0lmPVxcXCJpc1RyaXBzXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBbcHJpbWFyeV09XFxcInRydWVcXFwiIFtpY29uXT1cXFwiJ3JlZnJlc2gnXFxcIiAoY2xpY2spPVxcXCJyZXN0b3JlQ29sdW1ucygpXFxcIj5SZXN0YXVyZXI8L2J1dHRvbj5cXHJcXG4gICAgPGtlbmRvLWdyaWQgW2RhdGFdPVxcXCJncmlkVmlld1xcXCIgW3BhZ2VTaXplXT1cXFwicGFnZVNpemVcXFwiIFtza2lwXT1cXFwic2tpcFxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJwYWdlQ2hhbmdlKCRldmVudClcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBbc2VsZWN0YWJsZV09XFxcInRydWVcXFwiIFtoZWlnaHRdPVxcXCIzNTBcXFwiIFtwYWdlYWJsZV09XFxcInsgYnV0dG9uQ291bnQ6IGJ1dHRvbkNvdW50LCBpbmZvOiBpbmZvLCBcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSwgcGFnZVNpemVzOiBwYWdlU2l6ZXMsIHByZXZpb3VzTmV4dDogcHJldmlvdXNOZXh0fVxcXCIgW3Njcm9sbGFibGVdPVxcXCInbm9uZSdcXFwiPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cXFwiY29sdW1uc1xcXCIgbGV0LWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcInt7Y29sdW1ufX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJoaWRkZW5Db2x1bW5zLmluZGV4T2YoY29sdW1uKSA9PT0gLTFcXFwiIHRpdGxlPVxcXCJJRFxcXCIgd2lkdGg9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvR3JpZEhlYWRlclRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7ZGF0YUl0ZW0uZmllbGR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJoaWRlQ29sdW1uKGRhdGFJdGVtLmZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImstYnV0dG9uIGstcHJpbWFyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcImZsb2F0OiByaWdodDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwibmFtZVxcXCIgdGl0bGU9XFxcIk5vbVxcXCIgd2lkdGg9XFxcIjMwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwibGVhdmluZ1xcXCIgdGl0bGU9XFxcIkTDqXBhcnRcXFwiIHdpZHRoPVxcXCI3MFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcImNvdW50cnlcXFwiIHRpdGxlPVxcXCJQYXlzXFxcIiB3aWR0aD1cXFwiNjBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJjb250aW5lbnRcXFwiIHRpdGxlPVxcXCJDb250aW5lbnRcXFwiIHdpZHRoPVxcXCI2MFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwicmF0aW5nXFxcIiB0aXRsZT1cXFwiUmF0aW5nXFxcIiB3aWR0aD1cXFwiMjBcXFwiIFtoZWFkZXJTdHlsZV09XFxcInsnYmFja2dyb3VuZC1jb2xvcic6ICcjYzViMzU4JywnY29sb3InOiAnI2ZmZicsJ2xpbmUtaGVpZ2h0JzogJzFlbSd9XFxcIj5cXHJcXG4gICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8dGVtcGxhdGUga2VuZG9HcmlkRGV0YWlsVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uICpuZ0lmPVxcXCJkYXRhSXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RMOpdGFpbHM6PC9zdHJvbmc+IEl0ZW08L3A+XFxyXFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDxrZW5kby1ncmlkLW1lc3NhZ2VzIGdyb3VwUGFuZWxFbXB0eT1cXFwiRHJhZyBoZXJlIHRvIGdyb3VwLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVjb3Jkcz1cXFwiVGhlcmUgbm8gaXRlbXMgdG8gZGlzcGxheS5cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1ncmlkLW1lc3NhZ2VzPlxcclxcbjwva2VuZG8tZ3JpZD5cXHJcXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBiZXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuICAgIHB1YmxpYyBpc0JvdWdodDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB1c2VyVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBpc0JvdWdodE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc1JlZnJlc2hUcmlwOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaXNCb3VnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUmVmcmVzaFRyaXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNCb3VnaHRNZXNzYWdlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmlwQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVHJpcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRyaXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRyaXBCeUlkKHRoaXMuc2VsZWN0ZWRUcmlwLmlkKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHRoaXMuaXNSZWZyZXNoVHJpcCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhdGluZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN0b3BzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZnJlc2hUcmlwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmlwc0ZvclVzZXIoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWZyZXNoVHJpcCA9IGZhbHNlOyAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpcHNGb3JVc2VyKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VXNlclRyaXBBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkFkZFRyaXAoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIGZvciB1c2VyIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFkZFRyaXAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnVzZXJUcmlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VyVHJpcHNbaV0uaWQgPT0gdGhpcy5zZWxlY3RlZFRyaXAuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodE1lc3NhZ2UgPSBcIlZvdXMgYXZleiBkw6lqw6AgYWNoZXTDqSBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV5VHJpcCh0cmlwOiBUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5wb3N0VHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGNyZWF0aW5nIHRyaXAgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHMvcGVyc29cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdHJpcCA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyaXB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGxlYXZpbmc/OiBEYXRlO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGNvbnRpbmVudD86IHN0cmluZztcclxuICAgIHJhdGluZz86IG51bWJlcjtcclxuICAgIHN0b3BzPzogU3RvcFtdO1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwIGltcGxlbWVudHMgSVRyaXAge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxlYXZpbmc/OiBEYXRlLFxyXG4gICAgICAgIHB1YmxpYyBjb3VudHJ5Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb250aW5lbnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJhdGluZz86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3RvcHM/OiBTdG9wW10sXHJcbiAgICAgICAgcHVibGljIHZpc2libGU/OiBib29sZWFuKSB7IH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGgyPkTDqXRhaWxzIFRyaXA8L2gyPlxcclxcbjwvZGl2Plxcclxcblxcclxcbjx1bCAqbmdJZj1cXFwic2VsZWN0ZWRUcmlwXFxcIiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWFkZHJlc3MtYm9va1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5pZH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubmFtZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG91cmdsYXNzXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3RlbFxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb3VudHJ5fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYS1ob21lXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvbnRpbmVudH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtZmlyc3Qtb3JkZXJcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ucmF0aW5nfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImJ1eVRyaXAoc2VsZWN0ZWRUcmlwKVxcXCIgW2Rpc2FibGVkXT1cXFwiaXNCb3VnaHRcXFwiPkFqb3V0ZXIgw6AgbWVzIHRyaXBzPC9idXR0b24+PC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgIHt7aXNCb3VnaHRNZXNzYWdlfX1cXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImlzQm91Z2h0XFxcIiBbcm91dGVyTGlua109XFxcIlsnc3RvcCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGJ0bi1tZFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+IEFqb3V0ZXIgU3RvcHM8L2E+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oND4gICAgXFxyXFxuICAgIDwvbGk+ICAgXFxyXFxuPC91bD5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgIFZpc3VhbGlzZXIgU3RvcHNcXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJ2VkaXQnXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gUmV0b3VyPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwicmVmcmVzaFRyaXAoKVxcXCIga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBbaWNvbl09XFxcIidyZWZyZXNoJ1xcXCIgY2xhc3M9XFxcInJlZnJlc2hCdXR0b25cXFwiPiBBY3R1YWxpc2VyPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJpc1JlZnJlc2hUcmlwXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTN4XFxcIj48L2k+PC9hPlxcclxcbiAgICAgICAgPC9oND5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFue1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gICAgcHVibGljIHVzZXJNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgb2JqZWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIGNvbnN0YW50IGZvciBzd2lwZSBhY3Rpb246IGxlZnQgb3IgcmlnaHRcclxuICAgIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnb01hcChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvbWFwL1wiICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdGlvbiB0cmlnZ2VyZWQgd2hlbiB1c2VyIHN3aXBlc1xyXG4gICAgc3dpcGUoY3VycmVudEluZGV4OiBudW1iZXIsIGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XHJcbiAgICAgICAgLy8gb3V0IG9mIHJhbmdlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHRoaXMubWVzVHJpcHMubGVuZ3RoIHx8IGN1cnJlbnRJbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8vIHN3aXBlIHJpZ2h0LCBuZXh0IGF2YXRhclxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGN1cnJlbnRJbmRleCA9PT0gdGhpcy5tZXNUcmlwcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpc0xhc3QgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN3aXBlIGxlZnQsIHByZXZpb3VzIGF2YXRhclxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaXJzdCA9IGN1cnJlbnRJbmRleCA9PT0gMDtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gaXNGaXJzdCA/IHRoaXMubWVzVHJpcHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2dnbGUgYXZhdGFyIHZpc2liaWxpdHlcclxuICAgICAgICB0aGlzLm1lc1RyaXBzLmZvckVhY2goKHgsIGkpID0+IHgudmlzaWJsZSA9IChpID09PSBuZXh0SW5kZXgpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyVHJpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRVc2VyVHJpcHMoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZ2V0VXNlclRyaXBBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNUcmlwcy5mb3JFYWNoKCh4LCBpKSA9PiBpID4gMCA/IHgudmlzaWJsZSA9IGZhbHNlIDogeC52aXNpYmxlID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBnZXQgeW91ciB0cmlwcyBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9wcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3RyaXBzJywgaWQsICdzdG9wJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXAodHJpcDogVHJpcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gdHJpcDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcInVzZXJ0cmlwXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLm1lc1RyaXBzLnNwbGljZSh0aGlzLm1lc1RyaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRyaXApLCAxKTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBsaXN0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e3VzZXJNZXNzYWdlfX08L2gyPlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt0cmlwVG9EZWxldGVdPVxcXCJzZWxlY3RlZFRyaXBcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGgxPk1lcyBUcmlwczwvaDE+XFxyXFxuPGgyPlN3aXBlIDxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+IE91IDxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1yaWdodFxcXCI+PC9pPjwvaDI+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIG1lc1RyaXBzOyBsZXQgaWR4PWluZGV4XFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyIHN3aXBlLWJveFxcXCIgXFxyXFxuICAgICAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoaWR4LCAkZXZlbnQudHlwZSlcXFwiIChzd2lwZXJpZ2h0KT1cXFwic3dpcGUoaWR4LCAkZXZlbnQudHlwZSlcXFwiXFxyXFxuICAgICBbY2xhc3MudmlzaWJsZV09XFxcInRyaXAudmlzaWJsZVxcXCIgW2NsYXNzLmhpZGRlbl09XFxcIiF0cmlwLnZpc2libGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlRyaXA8L2g0PlxcclxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+Q29udGllbnQgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RyaXA/LnN0b3BzLmxlbmd0aH19PC9zcGFuPiBzdG9wczwvaDU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJjYXJkLWltZy10b3AgZmEgZmEtcGljdHVyZS1vIGZhLTJ4XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj4jIFLDqXNlcnZhdGlvbiA6IHt7dHJpcD8uaWR9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Ob20gOiB7e3RyaXA/Lm5hbWV9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5EYXRlIGRlIGTDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+UGF5cyA6IHt7dHJpcD8uY291bnRyeX19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkNvbnRpbmVudCA6IHt7dHJpcD8uY29udGluZW50fX08L3A+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlckJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1saW5rIGJ0biBidG4tbWQgYnRuLXNlY29uZGFyeSBhY3RpdmUgY29sLW1kLTYgdXNlckFjdGlvbnNcXFwiIChjbGljayk9XFxcImRlbGV0ZVRyaXAodHJpcClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCI+PC9pPiBTdXBwcmltZXI8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWxpbmsgYnRuIGJ0bi1tZCBidG4taW5mbyBhY3RpdmUgY29sLW1kLTYgdXNlckFjdGlvbnNcXFwiIChjbGljayk9XFxcImFkZFN0b3BzKHRyaXAuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPiBBam91dGVyIFN0b3BzPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXHJcXG4gICAgICAgIDx1bCAqbmdGb3I9XFxcImxldCBzdG9wIG9mIHRyaXA/LnN0b3BzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgIFN0b3AgIyB7e2kgKyAxfX1cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImZsb2F0OiByaWdodDtcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnkgYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJnb01hcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLW1hcFxcXCI+PC9pPiBNYXA8L2J1dHRvbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Tm9tIDoge3tzdG9wPy5uYW1lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGQnYXJyaXbDqWUgOiB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGRlIGTDqXBhcnQgOiB7e3N0b3A/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5WaWxsZSA6IHt7c3RvcD8uY2l0eX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Q3Vpc2luZSA6IHt7c3RvcD8uY3Vpc2luZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+R3VpZGUgOiB7e3N0b3A/Lmd1aWRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5RdW90ZSA6IHt7c3RvcD8ucXVvdGV9fTwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeSBiYWNrQnV0dG9uXFxcIiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+IFJldG91cjwvYT5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcHVzZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxoMixoMyxoNHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggMXB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbmxpe1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZS1ib3ggPiBkaXY6Zmlyc3Qtb2YtdHlwZSwgZGl2IGRpdiA+IHVse1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGUtYm94ID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgIHBhZGRpbmc6IDEuNSU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkgNDIlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCg0MiUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkpKSkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuOTUpKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzQxODljNycsIEdyYWRpZW50VHlwZT0xICk7XFxyXFxufVxcclxcblxcclxcbmRpdiBkaXYgPiB1bHtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoNDclLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlZGVkZWQnLCBHcmFkaWVudFR5cGU9MSApO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeTpob3ZlcntcXHJcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlcntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckJ1dHRvbnN7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrQnV0dG9ue1xcclxcbiAgICBtYXJnaW46IDIlIDAgMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJBY3Rpb25ze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckFjdGlvbnM6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyYXkgaW5zZXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkpLCBjb2xvci1zdG9wKDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwxKSksIGNvbG9yLXN0b3AoNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpKSwgY29sb3Itc3RvcCg2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkpLCBjb2xvci1zdG9wKDg1JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZTJlMmUyJywgZW5kQ29sb3JzdHI9JyNmZWZlZmUnLCBHcmFkaWVudFR5cGU9MCApO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhdGluZy5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xyXG4gICAgQE91dHB1dCgpIHJhdGluZ0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgcHVibGljIHJhdGVzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyBkaWZmUmF0ZXM6IG51bWJlcltdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yYXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlmZlJhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5kaWZmUmF0ZXMucHVzaCgxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSYXRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYXRpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmF0aW5nICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJhdGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMucmF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYXRlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkaWZmU3RhcnMgPSB0aGlzLmRpZmZSYXRlcy5sZW5ndGggLSB0aGlzLnJhdGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5kaWZmUmF0ZXMubGVuZ3RoID0gZGlmZlN0YXJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICAgICAgdGhpcy5yYXRpbmdDbGljay5lbWl0KHtcclxuICAgICAgICAgICAgcmF0aW5nOiByYXRpbmdcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAoY2xpY2spPVxcXCJvbkNsaWNrKHJhdGVzLmxlbmd0aClcXFwiPlxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwicmF0ZXMgJiYgcmF0ZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCByIG9mIHJhdGVzXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gKm5nSWY9XFxcImRpZmZSYXRlcyAmJiBkaWZmUmF0ZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCByIG9mIGRpZmZSYXRlc1xcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eSBzdGFyLWVtcHR5XFxcIj48L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yYXRpbmcuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzcGFuIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogUGxhY2UgbGVzIMOpdG9pbGVzIMOgIGdhdWNoZSBkdSBjb250YWluZXIgKi9cXHJcXG4uc3RhciwgLnN0YXItZW1wdHl7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcCwgSVN0b3AgfSBmcm9tICcuL3N0b3AnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3AnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RvcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9wQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaXNDcmVhdGVGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRyaXBJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd0Zvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdG9wOiBTdG9wO1xyXG4gICAgcHVibGljIGRlY2ltYWxzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWluOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWF4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYXV0b0NvcnJlY3Q6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY3Vpc2luZXM6IEFycmF5PHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xyXG4gICAgcHVibGljIHNvdXJjZUN1aXNpbmU6IEFycmF5PHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xyXG4gICAgcHVibGljIGN1aXNpbmU6IHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH07XHJcbiAgICBwdWJsaWMgZ3VpZGU6IHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH07XHJcblxyXG4gICAgcHVibGljIGd1aWRlczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZGVjaW1hbHMgPSAwO1xyXG4gICAgICAgIHRoaXMubWluID0gMTtcclxuICAgICAgICB0aGlzLm1heCA9IDEwO1xyXG4gICAgICAgIHRoaXMuYXV0b0NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gbmV3IFN0b3AoMSwgXCJQbGFnZVwiLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCBcIk1vbnRyw6lhbFwiLCB0aGlzLmN1aXNpbmUsIHRoaXMuZ3VpZGUsIDAsIDAsIDAsIDgsIGZhbHNlKTtcclxuICAgICAgICAvLyBjdWlzaW5lIGRyb3Bkb3duIFxyXG4gICAgICAgIHRoaXMuY3Vpc2luZSA9IHsgdGV4dDogXCJJdGFsaWVubmVcIiwgdmFsdWU6IDIgfTsgICAgICBcclxuICAgICAgICB0aGlzLmN1aXNpbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VDdWlzaW5lID0gW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VDdWlzaW5lLnB1c2goeyB0ZXh0OiBcIkphcG9uYWlzZVwiLCB2YWx1ZTogMSB9LCB7IHRleHQ6IFwiSXRhbGllbm5lXCIsIHZhbHVlOiAyIH0sIHsgdGV4dDogXCJTdcOpZG9pc2VcIiwgdmFsdWU6IDMgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIlBvcnR1Z3VhaXNlXCIsIHZhbHVlOiA0IH0sIHsgdGV4dDogXCJBZnJpY2FpbmVcIiwgdmFsdWU6IDUgfSwgeyB0ZXh0OiBcIkFsbGVtYW5kZVwiLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiQnJpdGFubmlxdWVcIiwgdmFsdWU6IDcgfSwgeyB0ZXh0OiBcIkFtw6lyaWNhaW5lXCIsIHZhbHVlOiA4IH0sIHsgdGV4dDogXCJTdcOpZG9pc2VcIiwgdmFsdWU6IDkgfSk7XHJcblxyXG4gICAgICAgIC8vIGd1aWRlIGNvbWJvYm94XHJcbiAgICAgICAgdGhpcy5ndWlkZSA9IHsgdGV4dDogXCJHdWlkZSBKdW5pb3JcIiwgdmFsdWU6IDIgfTtcclxuICAgICAgICB0aGlzLmd1aWRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVzLnB1c2goeyB0ZXh0OiBcIkd1aWRlIE1pY2hlbGluXCIsIHZhbHVlOiAxIH0sIHsgdGV4dDogXCJHdWlkZSBKdW5pb3JcIiwgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIkd1aWRlIFNlbmlvclwiLCB2YWx1ZTogMyB9LCB7IHRleHQ6IFwiR3VpZGUgUHJpdsOpXCIsIHZhbHVlOiA0IH0pO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXJpbmcgY3Vpc2luZXNcclxuICAgICAgICB0aGlzLmN1aXNpbmVzID0gdGhpcy5zb3VyY2VDdWlzaW5lLnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gaWYgbm90IGluIC9zdG9wIHlldCwganVzdCBkaXNwbGF5IGEgbWVzc2FnZSBmb3IgdGhlIHVzZXIgKHN0aWxsIGluIHBhcmVudCByb3V0ZSB3aXRoIHRoZSBpZCBwcm9wZXJ0eSlcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNyw6llciB1biBub3V2ZWF1IHN0b3AgcG91ciBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEdldCBwYXJlbnQgQWN0aXZhdGVkUm91dGUgb2YgdGhpcyByb3V0ZS5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpcElkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkIGR1IHBhcmVudCBwb3VyIHNhdXZlciBzdG9wIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmlsdGVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdWlzaW5lcyA9IHRoaXMuc291cmNlQ3Vpc2luZS5maWx0ZXIoKHMpID0+IHMudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoY3JlYXRlRm9ybTogTmdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AgPSA8SVN0b3A+Y3JlYXRlRm9ybS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbGlkKTtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9zdFN0b3BTZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BTZXJ2aWNlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BTZXJ2aWNlLnBvc3RTdG9wQnlJZEFQSSh0aGlzLnRyaXBJZCwgdGhpcy5zZWxlY3RlZFN0b3ApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBzYXZlZCBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5hcnJpdmFsID0gZGF0YS5hcnJpdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmxlYXZpbmcgPSBkYXRhLmxlYXZpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuY2l0eSA9IGRhdGEuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5jdWlzaW5lID0gZGF0YS5jdWlzaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmd1aWRlID0gZGF0YS5ndWlkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5xdW90ZSA9IGRhdGEucXVvdGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2FudCBzYXZlIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSAhdGhpcy5pc0NyZWF0ZUZvcm07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gZGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElTdG9wIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhcnJpdmFsOiBEYXRlO1xyXG4gICAgbGVhdmluZzogRGF0ZTtcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGN1aXNpbmU6IGFueTtcclxuICAgIGd1aWRlOiBhbnk7XHJcbiAgICBsb25naXR1ZGU/OiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZT86IG51bWJlcjtcclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG4gICAgcXVvdGU/OiBudW1iZXI7XHJcbiAgICBzaG93UG9wVXA/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcCBpbXBsZW1lbnRzIElTdG9wIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBhcnJpdmFsOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxlYXZpbmc6IERhdGUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2l0eTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGN1aXNpbmU6IGFueSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBndWlkZTogYW55LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxvbmdpdHVkZT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsYXRpdHVkZT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBvcmRlcj86IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBxdW90ZT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzaG93UG9wVXA/OiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXHJcXG4gICAgPGg0Pnt7bWVzc2FnZX19PC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiICpuZ0lmPVxcXCJpc1Nob3dGb3JtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxoND48c3Bhbj48YSBbcm91dGVyTGlua109XFxcIicuLi9lZGl0J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLWxpbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1saWdodGJ1bGItb1xcXCI+PC9pPiBTdWdnZXN0aW9uczwvYT48L3NwYW4+PC9oND5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFN0b3AoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPGZvcm0gI2Zvcm1DcmVhdGVTdG9wPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcm1DcmVhdGVTdG9wKVxcXCIgKm5nSWY9XFxcImlzQ3JlYXRlRm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCI+Tm9tPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgaWQ9XFxcIm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNpdHlcXFwiPlZpbGxlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgaWQ9XFxcImNpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuY2l0eVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYXJyaXZhbFxcXCI+RGF0ZSBBcnJpdsOpZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImFycml2YWxcXFwiIGlkPVxcXCJhcnJpdmFsXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AuYXJyaXZhbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJsZWF2aW5nXFxcIj5EYXRlIETDqXBhcnQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jYWxlbmRhciBuYW1lPVxcXCJsZWF2aW5nXFxcIiBpZD1cXFwibGVhdmluZ1xcXCIgW2ZvY3VzZWREYXRlXT1cXFwic2VsZWN0ZWRTdG9wLmxlYXZpbmdcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgcmVxdWlyZWQ+PC9rZW5kby1jYWxlbmRhcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImN1aXNpbmVcXFwiPkN1aXNpbmU8L2xhYmVsPiAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8a2VuZG8tZHJvcGRvd25saXN0IG5hbWU9XFxcImN1aXNpbmVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicGFkZGluZzowXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVxcXCJjdWlzaW5lc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0RmllbGRdPVxcXCIndGV4dCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVGaWVsZF09XFxcIid2YWx1ZSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiY3Vpc2luZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWx0ZXJhYmxlXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXJDaGFuZ2UpPVxcXCJoYW5kbGVGaWx0ZXIoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRlbXBsYXRlXFxcIj57eyBkYXRhSXRlbS52YWx1ZSB9fTwvc3Bhbj4ge3sgZGF0YUl0ZW0udGV4dCB9fVxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RIZWFkZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5DdWlzaW5lczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEZvb3RlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Y3Vpc2luZXMubGVuZ3RofX0gdmFyacOpdMOpczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdE5vRGF0YVRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PjxzcGFuIGNsYXNzPVxcXCJrLWljb24gay1pLXdhcm5pbmdcXFwiPjwvc3Bhbj48YnIgLz48YnIgLz5BdWN1bmVzIEN1aXNpbmVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWRyb3Bkb3dubGlzdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImd1aWRlXFxcIj5HdWlkZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNvbWJvYm94IG5hbWU9XFxcImd1aWRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3VnZ2VzdF09XFxcInRydWVcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicGFkZGluZzowXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVxcXCInZS5nLiBHdWlkZSBTZW5pb3InXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImd1aWRlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRGaWVsZF09XFxcIid0ZXh0J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlRmllbGRdPVxcXCIndmFsdWUnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiZ3VpZGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvQ29tYm9Cb3hJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRlbXBsYXRlXFxcIj57eyBkYXRhSXRlbS52YWx1ZSB9fTwvc3Bhbj4ge3sgZGF0YUl0ZW0udGV4dCB9fVxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Db21ib0JveEhlYWRlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0Pkd1aWRlczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0NvbWJvQm94Rm9vdGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3tndWlkZXMubGVuZ3RofX0gZGlzcG9uaWJsZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3ROb0RhdGFUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND48c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+PGJyIC8+PGJyIC8+QXVjdW5zIGd1aWRlczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1jb21ib2JveD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInF1b3RlXFxcIj5RdW90ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLW51bWVyaWN0ZXh0Ym94IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjBcXFwiIFtyZXN0cmljdERlY2ltYWxzXT1cXFwidHJ1ZVxcXCIgW2RlY2ltYWxzXT1cXFwiZGVjaW1hbHNcXFwiIFttaW5dPVxcXCJtaW5cXFwiXFxyXFxuICAgICAgICAgICAgW21heF09XFxcIm1heFxcXCIgW3NwaW5uZXJzXT1cXFwidHJ1ZVxcXCIgW2Zvcm1hdF09XFxcIiduMCdcXFwiIFtzdGVwXT1cXFwiMVxcXCIgW2F1dG9Db3JyZWN0XT1cXFwiYXV0b0NvcnJlY3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AucXVvdGVcXFwiIG5hbWU9XFxcInF1b3RlXFxcIiBpZD1cXFwicXVvdGVcXFwiIHJlcXVpcmVkPjwva2VuZG8tbnVtZXJpY3RleHRib3g+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tc3VjY2VzcyBhY3RpdmVcXFwiPkFqb3V0ZXI8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPC9mb3JtPlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RvcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRlbXBsYXRleyBcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXHJcXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXFxyXFxuICAgIGNvbG9yOiAjZmZmOyBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXHJcXG4gICAgd2lkdGg6IDE4cHg7IFxcclxcbiAgICBoZWlnaHQ6IDE4cHg7IFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4udGVtcGxhdGUgPiBoNCB7IFxcclxcbiAgICBmb250LXNpemU6IDFlbTsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXHJcXG4gICAgcGFkZGluZzogMCA4cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuLi9zdG9wL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBJU3RvcCwgU3RvcCB9IGZyb20gJy4uL3N0b3Avc3RvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcC1lZGl0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0b3BlZGl0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0b3BlZGl0LmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICAvLyBhbmltYXRpb24gbWV0YWRhdGFcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdhbmltU3RvcCcsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSwgMS4xKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyaWdnZXIoJ2ZseUluT3V0JywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyMDBtcyAxMDBtcyBlYXNlLWluJylcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRTdG9wQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2hvd1BvcFVwOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzQWRtaW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdG9nZ2xlVGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8vIHNjcm9sbHZpZXdcclxuICAgIHB1YmxpYyBpdGVtczogYW55W107XHJcbiAgICBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlbmRsZXNzOiBib29sZWFuO1xyXG4gICAgcHVibGljIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gYW5pbWF0aW9uc1xyXG4gICAgcHVibGljIHN0YXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmx5U3RhdGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSBcIlNob3dcIjtcclxuICAgICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW47XHJcblxyXG4gICAgICAgIC8vIHNjcm9sbHZpZXdcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgdGl0bGU6ICdOYXR1cmUnLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjSmpZdUInIH0sIHsgdGl0bGU6ICdFeGN1cnNpb24nLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjVEJOYUwnIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6ICdBw6lyb25hdXRpcXVlJywgdXJsOiAnaHR0cDovL2JpdC5seS8yY0psM0N4JyB9KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kbGVzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IFwiMjAwcHhcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IFwiMjAwcHhcIjtcclxuXHJcbiAgICAgICAgLy8gYW5pbWF0aW9uc1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICAgIHRoaXMuZmx5U3RhdGUgPSAnaW4nO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyZW50LnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9wc0J5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwcy9cIiArIGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFBPUCBVUCBOT1QgV09SS0lOPyEgdGVzdCBpbiBhbm90aGVyIHByb2plY3RcclxuICAgIG9uVG9nZ2xlUG9wVXAoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZFRyaXAuc3RvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcC5zdG9wc1tpXS5zaG93UG9wVXAgPSAhdGhpcy5zZWxlY3RlZFRyaXAuc3RvcHNbaV0uc2hvd1BvcFVwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVUZXh0ID0gdGhpcy5zaG93UG9wVXAgPyBcIkhpZNC1XCIgOiBcIlNob3dcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdhY3RpdmUnID8gJ2luYWN0aXZlJyA6ICdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltU3RvcFN0YXJ0ZWQoJGV2ZW50KTogdm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3BzQnlJZChpZDogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRUcmlwQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250aW5lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGFqb3V0ZXIgdW5lIHRlbXBlcmF0dXJlIHBvdXIgY2Ugc3RvcFxyXG4gICAgYWpvdXRlVGVtcChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvd2VhdGhlcnMvXCIgKyBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdm9pciBsZSBzdG9wIHN1ciBsYSBtYXBcclxuICAgIGdvTWFwKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9tYXAvXCIgKyBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlIHN0b3AgYnkgaXRzIGlkXHJcbiAgICBkZWxldGVTdG9wKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IGlkO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwic3RvcEFkbWluXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0aGUgZGlzcGxheSBsaXN0IGFmdGVyIGRlbGV0aW5nIGEgc3RvcC5cclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9wc0J5SWQodGhpcy5zZWxlY3RlZFRyaXAuaWQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyIGRlbGV0ZUJsb2NrXFxcIj5cXHJcXG4gICAgPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3dlYXRoZXJUb0RlbGV0ZUlkXT1cXFwiaW5wdXRJZERlbGV0ZVxcXCIgW29iamVjdFRvRGVsZXRlXT1cXFwib2JqZWN0TmFtZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC05IGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgIDxsaT48aDM+U3RvcHM8L2gzPjwvbGk+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBzdG9wIG9mIHNlbGVjdGVkVHJpcD8uc3RvcHNcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTIgcm93U3RvcFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNyBjb2wtc20tMTIgcm93QmxvY2tcXFwiXFxyXFxuICAgICAgICAgICAgIChAZmx5SW5PdXQuc3RhcnQpPVxcXCJhbmltU3RvcFN0YXJ0ZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgW0BmbHlJbk91dF09XFxcImZseVN0YXRlXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cXFwiZmEgZmEtc3RvcFxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uICNhbmNob3IgY2xhc3M9XFxcImJ0biBidG4tbGluayBidG4tbWRcXFwiIChjbGljayk9XFxcIm9uVG9nZ2xlUG9wVXAoc3RvcC5pZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICB7e3RvZ2dsZVRleHR9fSBEw6l0YWlscyB7e3N0b3A/Lm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvcFVwV3JhcHBlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1wb3B1cCBjbGFzcz1cXFwicG9wVXBDb250ZW50XFxcIiBbYW5jaG9yXT1cXFwiYW5jaG9yXFxcIiAoYW5jaG9yVmlld3BvcnRMZWF2ZSk9XFxcInNob3cgPSBmYWxzZVxcXCIgKm5nSWY9XFxcInN0b3A/LnNob3dQb3BVcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX0gw4Age3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19LCB7e3N0b3A/LmNpdHl9fS4gUXVvdMOpIHt7c3RvcD8ucXVvdGV9fVxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLXBvcHVwPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNSBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWlzQWRtaW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXIgYWN0aXZlIGNydWRCdXR0b25zXFxcIiAoY2xpY2spPVxcXCJkZWxldGVTdG9wKHN0b3AuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiPjwvaT4gU3VwcHJpbWVyPC9idXR0b24+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3MgYWN0aXZlIGNydWRCdXR0b25zXFxcIiAoY2xpY2spPVxcXCJham91dGVUZW1wKHN0b3AuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPiBUZW1ww6lyYXR1cmU8L2J1dHRvbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBhY3RpdmUgY3J1ZEJ1dHRvbnNcXFwiIChjbGljayk9XFxcImdvTWFwKHN0b3AuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbWFwXFxcIj48L2k+IE1hcDwvYnV0dG9uPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgY29sLXNtLTEyXFxcIiBbQGFuaW1TdG9wXT1cXFwic3RhdGVcXFwiIChjbGljayk9XFxcInRvZ2dsZVN0YXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tc2Nyb2xsdmlldyBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiBbZGF0YV09XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbYW5pbWF0ZV09XFxcImFuaW1hdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFtlbmRsZXNzXT1cXFwiZW5kbGVzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgW3dpZHRoXT1cXFwid2lkdGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJoZWlnaHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFthcnJvd3NdPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbcGFnZWFibGVdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJkZW1vLXRpdGxlXFxcIj57e2l0ZW0udGl0bGV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9J3t7aXRlbS51cmx9fScgYWx0PSd7e2l0ZW0udGl0bGV9fScgW25nU3R5bGVdPVxcXCJ7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH1cXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiIC8+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L2tlbmRvLXNjcm9sbHZpZXc+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGFsZXJ0IGFsZXJ0LWRhbmdlciBub1N0b3BzXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgKm5nSWY9XFxcIiFzZWxlY3RlZFRyaXA/LnN0b3BzLmxlbmd0aFxcXCI+XFxyXFxuICAgIDxoND48aSBjbGFzcz1cXFwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcXFwiPjwvaT4gQXVjdW5zIFN0b3BzPC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RvcGVkaXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic3BhbntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSA+IGRpdjpsYXN0LW9mLXR5cGV7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJsb2Nre1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5ub1N0b3Bze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXJnaW46IDIlIDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcENvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGNvbG9yOiAjNzg3ODc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMSwgNSwgNSwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcFdyYXBwZXJ7XFxyXFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDVweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd1N0b3B7XFxyXFxuICAgIG1hcmdpbjogMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd0Jsb2Nre1xcclxcbiAgICBib3gtc2hhZG93OjJweCAycHggMnB4IGdyYXksLTFweCAtMXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3J1ZEJ1dHRvbnN7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uay1zY3JvbGx2aWV3LXdyYXAge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZGVtby10aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcCB9IGZyb20gJy4uL3N0b3Avc3RvcCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4vbWFwLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBnb29nbGU7XG5cbi8vIGp1c3QgYW4gaW50ZXJmYWNlIGZvciB0eXBlIHNhZmV0eS5cbmludGVyZmFjZSBtYXJrZXIge1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tYXAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21hcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIHB1YmxpYyB0aXRsZU1hcDogc3RyaW5nO1xuICAgIC8vIGdvb2dsZSBtYXBzIHpvb20gbGV2ZWxcbiAgICBwdWJsaWMgem9vbTogbnVtYmVyID0gODtcbiAgICBwdWJsaWMgbWFya2VyczogbWFya2VyW107XG4gICAgcHVibGljIGxhdDogbnVtYmVyO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlcjtcbiAgICBwdWJsaWMgaW5mb0NsaWNrZWRTdG9wOiBzdHJpbmc7XG4gICAgcHVibGljIHNlbGVjdGVkU3RvcDogU3RvcDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZU1hcCA9IFwiTWFwXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gbnVsbDtcbiAgICAgICAgLy8gaW5pdGlhbCBjZW50ZXIgcG9zaXRpb24gZm9yIHRoZSBtYXBcbiAgICAgICAgdGhpcy5pbmZvQ2xpY2tlZFN0b3AgPSBcIlwiO1xuICAgICAgICB0aGlzLmxhdCA9IDQ1LjUwMTY4ODk7XG4gICAgICAgIHRoaXMubG5nID0gLTczLjU2NzI1NTk5OTk5OTk5O1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcclxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9wKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XG5cbiAgICByZXNldFNlYXJjaFN0b3AoaW5wdXQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdmFyIGVtcHR5ID0gXCJcIjtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGVtcHR5O1xyXG4gICAgfVxuXG4gICAgZ2V0U3RvcChpZDogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcFNlcnZpY2UuZ2V0U3RvcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IG5ldyBTdG9wKGRhdGEuaWQsIGRhdGEubmFtZSwgZGF0YS5hcnJpdmFsLCBkYXRhLmxlYXZpbmcsIGRhdGEuY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jdWlzaW5lLCBkYXRhLmd1aWRlLCBkYXRhLmxvbmdpdHVkZSwgZGF0YS5sYXRpdHVkZSwgZGF0YS5vcmRlciwgZGF0YS5xdW90ZSwgZGF0YS5zaG93UG9wVXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgc3RvcCA6IFwiICsgdGhpcy5zZWxlY3RlZFN0b3ApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhbnQgZ2V0IHN0b3AgYnkgaWQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XG5cbiAgICBjbGlja2VkTWFya2VyKGxhYmVsOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgdGhlIG1hcmtlcjogJHtsYWJlbCArIGluZGV4fWApXG4gICAgICAgIHRoaXMuaW5mb0NsaWNrZWRTdG9wID0gYFN0b3AgOiAke2xhYmVsfWA7XG4gICAgfVxuXG5cbiAgICBnZXRBZGRyZXNzKGlucHV0OiBhbnkpIHtcbiAgICAgICAgdmFyIGFkZHJlc3MgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLmdldExhdGl0dWRlTG9uZ2l0dWRlKGFkZHJlc3MsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaCh7IGxhdDogZGF0YS5MYXRpdHVkZSwgbG5nOiBkYXRhLkxvbmdpdHVkZSwgbGFiZWw6IGFkZHJlc3MgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFya2Vycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XG5cbiAgICBnZXRMYXRpdHVkZUxvbmdpdHVkZShhZGRyZXNzLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBTaSBsJ2FkZHJlc3NlIG4nZXN0IHBhcyBzcMOpY2lmacOpZSBkZWZhdWx0IDogTW9udHJlYWwsIENhbmFkYVxyXG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzIHx8ICdNb250cmVhbCwgQ2FuYWRhJztcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBHZW9jb2RlclxyXG4gICAgICAgIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgIGlmIChnZW9jb2Rlcikge1xyXG4gICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHtcclxuICAgICAgICAgICAgICAgICdhZGRyZXNzJzogYWRkcmVzc1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhdCA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxuZyA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soeyBTdGF0dXM6IFwiT0tcIiwgTGF0aXR1ZGU6IGxhdCwgTG9uZ2l0dWRlOiBsbmcgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7XHJcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWIgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5zdWIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgc3RvcCBieS5cclxuICAgIGdldFN0b3BCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxTdG9wICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVN0b3A+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImp1bWJvdHJvbiBqdW1ib3Ryb24tZmx1aWRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTNcXFwiPnt7dGl0bGVNYXB9fTwvaDE+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+Vm9pciB1biBTdG9wIGRlIG1lcyBUcmlwczwvcD5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5PdSBmYWlyZSB1bmUgcmVjaGVyY2hlIGFsw6lhdG9pcmU8L3A+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPiBSZXRvdXI8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxzZWJtLWdvb2dsZS1tYXAgW2xhdGl0dWRlXT1cXFwibGF0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgW3pvb21dPVxcXCJ6b29tXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlRGVmYXVsdFVJXT1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgW3pvb21Db250cm9sXT1cXFwiZmFsc2VcXFwiPlxcclxcblxcclxcbiAgICAgICAgPHNlYm0tZ29vZ2xlLW1hcC1tYXJrZXIgKm5nRm9yPVxcXCJsZXQgbSBvZiBtYXJrZXJzOyBsZXQgaSA9IGluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hcmtlckNsaWNrKT1cXFwiY2xpY2tlZE1hcmtlcihtLmxhYmVsLCBpKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYXRpdHVkZV09XFxcIm0ubGF0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XFxcIm0ubG5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cXFwibS5sYWJlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXJrZXJEcmFnZ2FibGVdPVxcXCJmYWxzZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHNlYm0tZ29vZ2xlLW1hcC1pbmZvLXdpbmRvdz5cXHJcXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57e2luZm9DbGlja2VkU3RvcH19PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgPC9zZWJtLWdvb2dsZS1tYXAtaW5mby13aW5kb3c+XFxyXFxuXFxyXFxuICAgICAgICA8L3NlYm0tZ29vZ2xlLW1hcC1tYXJrZXI+XFxyXFxuXFxyXFxuICAgICAgICA8c2VibS1nb29nbGUtbWFwLWNpcmNsZSBbbGF0aXR1ZGVdPVxcXCJsYXQgKyAwLjNcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmFkaXVzXT1cXFwiMTAwMDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsbENvbG9yXT1cXFwiJ3JlZCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2lyY2xlRHJhZ2dhYmxlXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZV09XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgIDwvc2VibS1nb29nbGUtbWFwLWNpcmNsZT5cXHJcXG4gICAgPC9zZWJtLWdvb2dsZS1tYXA+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGNvbC14cy0xMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImFkZHJlc3NcXFwiIFtuZ01vZGVsXT1cXFwic2VsZWN0ZWRTdG9wPy5jaXR5XFxcIiAjYWRkcmVzcyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2hlcmNoZXIuLi5cXFwiLz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImdldEFkZHJlc3MoYWRkcmVzcylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT4gQ2hlcmNoZXI8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XFxcInJlc2V0U2VhcmNoU3RvcChhZGRyZXNzKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lcmFzZXJcXFwiPjwvaT4gUmVzZXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJzZWxlY3RlZFN0b3BcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTIgY29sLXhzLTEyIGNlbnRlci1ibG9jayBzdG9wU2VsZWN0ZWRDb250ZW50XFxcIj5cXHJcXG4gICAgPGRsIGNsYXNzPVxcXCJkbC1ob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgIDxkdD5Ob208L2R0PlxcclxcbiAgICAgICAgPGRkPnt7c2VsZWN0ZWRTdG9wPy5uYW1lfX08L2RkPlxcclxcblxcclxcbiAgICAgICAgPGR0PkFycml2w6k8L2R0PlxcclxcbiAgICAgICAgPGRkPnt7c2VsZWN0ZWRTdG9wPy5hcnJpdmFsIHwgZm1UcmlwRGF0ZX19PC9kZD5cXHJcXG5cXHJcXG4gICAgICAgIDxkdD5Ew6lwYXJ0PC9kdD5cXHJcXG4gICAgICAgIDxkZD57e3NlbGVjdGVkU3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvZGQ+XFxyXFxuXFxyXFxuICAgICAgICA8ZHQ+VmlsbGU8L2R0PlxcclxcbiAgICAgICAgPGRkPjxoNCBzdHlsZT1cXFwiY29sb3I6c3RlZWxibHVlO1xcXCI+e3tzZWxlY3RlZFN0b3A/LmNpdHl9fTwvaDQ+PC9kZD5cXHJcXG5cXHJcXG4gICAgICAgIDxkdD48c3Ryb25nPkN1aXNpbmU8L3N0cm9uZz48L2R0PlxcclxcbiAgICAgICAgPGRkPnt7c2VsZWN0ZWRTdG9wPy5jdWlzaW5lfX08L2RkPlxcclxcblxcclxcbiAgICAgICAgPGR0PjxzdHJvbmc+R3VpZGU8L3N0cm9uZz48L2R0PlxcclxcbiAgICAgICAgPGRkPnt7c2VsZWN0ZWRTdG9wPy5ndWlkZX19PC9kZD5cXHJcXG5cXHJcXG4gICAgICAgIDxkdD48c3Ryb25nPlF1b3RlPC9zdHJvbmc+PC9kdD5cXHJcXG4gICAgICAgIDxkZD57e3NlbGVjdGVkU3RvcD8ucXVvdGV9fTwvZGQ+XFxyXFxuICAgIDwvZGw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3BTZWxlY3RlZENvbnRlbnR7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDA7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb2Nlc3MsIEdyb3VwRGVzY3JpcHRvciwgU3RhdGUsIGFnZ3JlZ2F0ZUJ5IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnknO1xuXG5pbXBvcnQge1xyXG4gICAgR3JpZENvbXBvbmVudCxcclxuICAgIEdyaWREYXRhUmVzdWx0LFxyXG4gICAgRGF0YVN0YXRlQ2hhbmdlRXZlbnRcclxufSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZW1vJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kZW1vLmNvbXBvbmVudC5odG1sJyksXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIERlbW9Db21wb25lbnQge1xuXG4gICAgLy8gSW5wdXRzXG4gICAgcHVibGljIHNsaWRlclZhbHVlOiBudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIG51bWVyaWNWYWx1ZTogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyBtaW46IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbWF4OiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBzbWFsbFN0ZXA6IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIC8vIEJ1dHRvbnNcclxuICAgIGltYWdlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL2NvbnRlbnQvc2hhcmVkL2ljb25zL3Nwb3J0cy9zbm93Ym9hcmRpbmcucG5nJztcclxuXHJcbiAgICBzcGxpdEJ1dHRvbkl0ZW1zOiBBcnJheTxhbnk+ID0gW3tcclxuICAgICAgICB0ZXh0OiAnS2VlcCBUZXh0IE9ubHknLFxyXG4gICAgICAgIGljb246ICdwYXN0ZS1wbGFpbi10ZXh0JyxcclxuICAgICAgICBjbGljazogKCkgPT4geyBjb25zb2xlLmxvZygnS2VlcCBUZXh0IE9ubHkgY2xpY2sgaGFuZGxlcicpOyB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ1Bhc3RlIGFzIEhUTUwnLFxyXG4gICAgICAgIGljb246ICdwYXN0ZS1hcy1odG1sJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdQYXN0ZSBNYXJrZG93bicsXHJcbiAgICAgICAgaWNvbjogJ3Bhc3RlLW1hcmtkb3duJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdTZXQgRGVmYXVsdCBQYXN0ZSdcclxuICAgIH1dO1xyXG5cclxuICAgIGRyb3BEb3duQnV0dG9uSXRlbXM6IEFycmF5PGFueT4gPSBbe1xyXG4gICAgICAgIHRleHQ6ICdNeSBQcm9maWxlJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdGcmllbmQgUmVxdWVzdHMnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ0FjY291bnQgU2V0dGluZ3MnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ1N1cHBvcnQnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ0xvZyBPdXQnXHJcbiAgICB9XTtcclxuXHJcbiAgICBwdWJsaWMgb25TcGxpdEJ1dHRvbkNsaWNrKGRhdGFJdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFzdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TcGxpdEJ1dHRvbkl0ZW1DbGljayhkYXRhSXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGRhdGFJdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFJdGVtLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElucHV0IERhdGVcclxuICAgIHB1YmxpYyBpc01lZXRpbmcoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAvMTB8MTV8MjAvLnRlc3QoZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSkgPyAnbWVldGluZycgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcm9wZG93bnNcclxuICAgIHB1YmxpYyBsaXN0SXRlbXM6IEFycmF5PHN0cmluZz4gPSBbXCJCYXNlYmFsbFwiLCBcIkJhc2tldGJhbGxcIiwgXCJDcmlja2V0XCIsIFwiRmllbGQgSG9ja2V5XCIsIFwiRm9vdGJhbGxcIiwgXCJUYWJsZSBUZW5uaXNcIiwgXCJUZW5uaXNcIiwgXCJWb2xsZXliYWxsXCJdO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZSA9IFsnQmFza2V0YmFsbCcsICdDcmlja2V0J11cclxuXHJcbiAgICAvLyBncmlkXHJcblxyXG4gICAgcHJpdmF0ZSBhZ2dyZWdhdGVzOiBhbnlbXSA9IFt7IGZpZWxkOiAnVW5pdFByaWNlJywgYWdncmVnYXRlOiAnc3VtJyB9XTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIHRha2U6IDUsXHJcbiAgICAgICAgZ3JvdXA6IFt7IGZpZWxkOiAnVW5pdFByaWNlJywgYWdncmVnYXRlczogdGhpcy5hZ2dyZWdhdGVzIH1dXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZGF0YSA9IFt7XHJcbiAgICAgICAgXCJQcm9kdWN0SURcIjogMSxcclxuICAgICAgICBcIlByb2R1Y3ROYW1lXCI6IFwiQ2hhaVwiLFxyXG4gICAgICAgIFwiVW5pdFByaWNlXCI6IDE4LjAwMDAsXHJcbiAgICAgICAgXCJEaXNjb250aW51ZWRcIjogdHJ1ZVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwiUHJvZHVjdElEXCI6IDIsXHJcbiAgICAgICAgXCJQcm9kdWN0TmFtZVwiOiBcIkNoYW5nXCIsXHJcbiAgICAgICAgXCJVbml0UHJpY2VcIjogMTkuMDAwMCxcclxuICAgICAgICBcIkRpc2NvbnRpbnVlZFwiOiBmYWxzZVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwiUHJvZHVjdElEXCI6IDMsXHJcbiAgICAgICAgXCJQcm9kdWN0TmFtZVwiOiBcIkFuaXNlZWQgU3lydXBcIixcclxuICAgICAgICBcIlVuaXRQcmljZVwiOiAxMC4wMDAwLFxyXG4gICAgICAgIFwiRGlzY29udGludWVkXCI6IGZhbHNlXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJQcm9kdWN0SURcIjogNCxcclxuICAgICAgICBcIlByb2R1Y3ROYW1lXCI6IFwiQ2hlZiBBbnRvbidzIENhanVuIFNlYXNvbmluZ1wiLFxyXG4gICAgICAgIFwiVW5pdFByaWNlXCI6IDIyLjAwMDAsXHJcbiAgICAgICAgXCJEaXNjb250aW51ZWRcIjogZmFsc2VcclxuICAgIH0sIHtcclxuICAgICAgICBcIlByb2R1Y3RJRFwiOiA1LFxyXG4gICAgICAgIFwiUHJvZHVjdE5hbWVcIjogXCJDaGVmIEFudG9uJ3MgR3VtYm8gTWl4XCIsXHJcbiAgICAgICAgXCJVbml0UHJpY2VcIjogMjEuMzUwMCxcclxuICAgICAgICBcIkRpc2NvbnRpbnVlZFwiOiBmYWxzZVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwiUHJvZHVjdElEXCI6IDYsXHJcbiAgICAgICAgXCJQcm9kdWN0TmFtZVwiOiBcIkdyYW5kbWEncyBCb3lzZW5iZXJyeSBTcHJlYWRcIixcclxuICAgICAgICBcIlVuaXRQcmljZVwiOiAyNS4wMDAwLFxyXG4gICAgICAgIFwiRGlzY29udGludWVkXCI6IGZhbHNlXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJQcm9kdWN0SURcIjogNyxcclxuICAgICAgICBcIlByb2R1Y3ROYW1lXCI6IFwiQ2hhaVwiLFxyXG4gICAgICAgIFwiVW5pdFByaWNlXCI6IDIyLjAwMDAsXHJcbiAgICAgICAgXCJEaXNjb250aW51ZWRcIjogdHJ1ZVxyXG4gICAgfV07XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkRGF0YTogYW55ID0gcHJvY2Vzcyh0aGlzLmRhdGEsIHRoaXMuc3RhdGUpO1xyXG4gICAgcHJpdmF0ZSB0b3RhbDogYW55ID0gYWdncmVnYXRlQnkodGhpcy5kYXRhLCB0aGlzLmFnZ3JlZ2F0ZXMpO1xyXG5cclxuICAgIHByb3RlY3RlZCBkYXRhU3RhdGVDaGFuZ2Uoc3RhdGU6IERhdGFTdGF0ZUNoYW5nZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3RhdGUuZ3JvdXAubWFwKFxyXG4gICAgICAgICAgICBncm91cCA9PiBncm91cC5hZ2dyZWdhdGVzID0gdGhpcy5hZ2dyZWdhdGVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLmdyaWREYXRhID0gcHJvY2Vzcyh0aGlzLmRhdGEsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYXJ0XHJcbiAgICBwcml2YXRlIHNlcmllczogYW55W10gPSBbe1xyXG4gICAgICAgIG5hbWU6IFwiSW5kaWFcIixcclxuICAgICAgICBkYXRhOiBbMy45MDcsIDcuOTQzLCA3Ljg0OCwgOS4yODQsIDkuMjYzLCA5LjgwMSwgMy44OTAsIDguMjM4LCA5LjU1MiwgNi44NTVdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIixcclxuICAgICAgICBkYXRhOiBbNC43NDMsIDcuMjk1LCA3LjE3NSwgNi4zNzYsIDguMTUzLCA4LjUzNSwgNS4yNDcsIC03LjgzMiwgNC4zLCA0LjNdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJHZXJtYW55XCIsXHJcbiAgICAgICAgZGF0YTogWzAuMDEwLCAtMC4zNzUsIDEuMTYxLCAwLjY4NCwgMy43LCAzLjI2OSwgMS4wODMsIC01LjEyNywgMy42OTAsIDIuOTk1XVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiV29ybGRcIixcclxuICAgICAgICBkYXRhOiBbMS45ODgsIDIuNzMzLCAzLjk5NCwgMy40NjQsIDQuMDAxLCAzLjkzOSwgMS4zMzMsIC0yLjI0NSwgNC4zMzksIDIuNzI3XVxyXG4gICAgfV07XHJcbiAgICBwcml2YXRlIGNhdGVnb3JpZXM6IG51bWJlcltdID0gWzIwMDIsIDIwMDMsIDIwMDQsIDIwMDUsIDIwMDYsIDIwMDcsIDIwMDgsIDIwMDksIDIwMTAsIDIwMTFdO1xyXG5cclxuICAgIC8vIGxheW91dFxyXG4gICAgcHJpdmF0ZSBiYXNlSW1hZ2VVcmw6IHN0cmluZyA9IFwiaHR0cDovL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL2NvbnRlbnQvd2ViL3BhbmVsYmFyL1wiO1xyXG5cclxuICAgIHByaXZhdGUgaW1nZVVybChpbWFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUltYWdlVXJsICsgaW1hZ2VOYW1lICsgXCIuanBnXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9wIHVwXHJcbiAgICBwcml2YXRlIHRvZ2dsZVRleHQ6IHN0cmluZyA9IFwiSGlkZVwiO1xyXG4gICAgcHJpdmF0ZSBzaG93OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgb25Ub2dnbGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSB0aGlzLnNob3cgPyBcIkhpZNC1XCIgOiBcIlNob3dcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzY3JvbGx2aWV3XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOiBhbnlbXSA9IFt7IHRpdGxlOiAnRmxvd2VyJywgdXJsOiAnaHR0cDovL2JpdC5seS8yY0pqWXVCJyB9LCB7IHRpdGxlOiAnTW91bnRhaW4nLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjVEJOYUwnIH0sXHJcbiAgICB7IHRpdGxlOiAnU2t5JywgdXJsOiAnaHR0cDovL2JpdC5seS8yY0psM0N4JyB9XTtcclxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCI2MDBweFwiO1xyXG4gICAgcHVibGljIGhlaWdodDogc3RyaW5nID0gXCI0MDBweFwiO1xyXG5cclxuICAgIC8vIHNvcnRhYmxlXHJcbiAgICBwdWJsaWMgaXRlbXMyOiBzdHJpbmdbXSA9IFsnSXRlbSAxJywgJ0l0ZW0gMicsICdJdGVtIDMnLCAnSXRlbSA0JywgJ0l0ZW0gNScsICdJdGVtIDYnLCAnSXRlbSA3JywgJ0l0ZW0gOCddO1xyXG5cclxuICAgIC8vIHVwbG9hZFxyXG4gICAgdXBsb2FkU2F2ZVVybDogc3RyaW5nID0gXCJzYXZlVXJsXCI7XHJcbiAgICB1cGxvYWRSZW1vdmVVcmw6IHN0cmluZyA9IFwicmVtb3ZlVXJsXCI7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1kYXRhLXF1ZXJ5L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxyXFxuICAgIC5tZWV0aW5nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjMDBhMWU4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZWV0aW5nOmFmdGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAzcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGExZTg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmstc3RhdGUtc2VsZWN0ZWQgLm1lZXRpbmcge1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmstc3RhdGUtc2VsZWN0ZWQgLm1lZXRpbmc6YWZ0ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuay1zY3JvbGx2aWV3LXdyYXAge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlbW8tdGl0bGUge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48aDI+RGVtbzwvaDI+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxoMz5JbnB1dHM8L2gzPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD5NYXNrZWRUZXh0Qm94PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8a2VuZG8tbWFza2VkdGV4dGJveCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXNrXT1cXFwiJzktMDAwJ1xcXCI+PC9rZW5kby1tYXNrZWR0ZXh0Ym94PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNiBleGFtcGxlLWNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPk51bWVyaWNUZXh0Qm94PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8a2VuZG8tbnVtZXJpY3RleHRib3ggWyhuZ01vZGVsKV09XFxcIm51bWVyaWNWYWx1ZVxcXCI+PC9rZW5kby1udW1lcmljdGV4dGJveD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD5TbGlkZXI8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1zbGlkZXIgW21pbl09XFxcIm1pblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4XT1cXFwibWF4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzbWFsbFN0ZXBdPVxcXCJzbWFsbFN0ZXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInNsaWRlclZhbHVlXFxcIj48L2tlbmRvLXNsaWRlcj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD5Td2l0Y2g8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1zd2l0Y2ggWyhuZ01vZGVsKV09XFxcImNoZWNrZWRcXFwiPjwva2VuZG8tc3dpdGNoPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48c2VjdGlvbj5cXHJcXG4gICAgPGgzPkJ1dHRvbnM8L2gzPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgIDxwPkJ1dHRvbjwvcD5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XFxcIm9uQnV0dG9uQ2xpY2soKVxcXCI+RGVmYXVsdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gKGNsaWNrKT1cXFwib25CdXR0b25DbGljaygpXFxcIiBbcHJpbWFyeV09XFxcInRydWVcXFwiPlByaW1hcnk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XFxcIm9uQnV0dG9uQ2xpY2soKVxcXCIgW2Rpc2FibGVkXT1cXFwidHJ1ZVxcXCI+RGlzYWJsZWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgIDxwPkJ1dHRvbkdyb3VwPC9wPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1idXR0b25ncm91cD5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBbdG9nZ2xhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBPcHRpb24gQVxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBbdG9nZ2xhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBPcHRpb24gQlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBbdG9nZ2xhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBPcHRpb24gQ1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWJ1dHRvbmdyb3VwPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlLWNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgPHA+RHJvcERvd25CdXR0b248L3A+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWRyb3Bkb3duYnV0dG9uIFtkYXRhXT1cXFwiZHJvcERvd25CdXR0b25JdGVtc1xcXCIgW2ljb25dPVxcXCInY29nJ1xcXCIgKGl0ZW1DbGljayk9XFxcIm9uU3BsaXRCdXR0b25JdGVtQ2xpY2soJGV2ZW50KVxcXCI+VXNlciBTZXR0aW5nczwva2VuZG8tZHJvcGRvd25idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImV4YW1wbGUtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5TcGxpdEJ1dHRvbjwvcD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tc3BsaXRidXR0b24gW2RhdGFdPVxcXCJzcGxpdEJ1dHRvbkl0ZW1zXFxcIiBbaWNvbl09XFxcIidwYXN0ZSdcXFwiIChpdGVtQ2xpY2spPVxcXCJvblNwbGl0QnV0dG9uSXRlbUNsaWNrKCRldmVudClcXFwiIChidXR0b25DbGljayk9XFxcIm9uU3BsaXRCdXR0b25DbGljaygpXFxcIj5QYXN0ZTwva2VuZG8tc3BsaXRidXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8aDM+RGF0ZSBJbnB1dHM8L2gzPlxcclxcbiAgICA8a2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUga2VuZG9DYWxlbmRhckNlbGxUZW1wbGF0ZSBsZXQtZGF0ZT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XFxcImlzTWVldGluZyhkYXRlKVxcXCI+e3tkYXRlLmdldERhdGUoKX19PC9zcGFuPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC9rZW5kby1jYWxlbmRhcj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxoMz5Ecm9wRG93bnM8L2gzPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGV4YW1wbGUtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5BdXRvQ29tcGxldGU8L3A+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWF1dG9jb21wbGV0ZSBbZGF0YV09XFxcImxpc3RJdGVtc1xcXCIgW3BsYWNlaG9sZGVyXT1cXFwiJ1lvdXIgZmF2b3JpdGUgc3BvcnQnXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWF1dG9jb21wbGV0ZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGV4YW1wbGUtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5Db21ib0JveDwvcD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY29tYm9ib3ggW2RhdGFdPVxcXCJsaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcIidCYXNrZXRiYWxsJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1jb21ib2JveD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGV4YW1wbGUtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5Ecm9wRG93bkxpc3Q8L3A+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWRyb3Bkb3dubGlzdCBbZGF0YV09XFxcImxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiJ0Jhc2tldGJhbGwnXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWRyb3Bkb3dubGlzdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImV4YW1wbGUtd3JhcHBlclxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDIwMHB4O1xcXCI+XFxyXFxuICAgICAgICA8aDM+R3JpZDwvaDM+XFxyXFxuICAgICAgICA8a2VuZG8tZ3JpZCBbZGF0YV09XFxcImdyaWREYXRhXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cXFwic3RhdGUudGFrZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtza2lwXT1cXFwic3RhdGUuc2tpcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtzb3J0XT1cXFwic3RhdGUuc29ydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtncm91cF09XFxcInN0YXRlLmdyb3VwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW3NvcnRhYmxlXT1cXFwieyBtb2RlOiAnbXVsdGlwbGUnIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cXFwiMzAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VhYmxlXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtncm91cGFibGVdPVxcXCJ7IHNob3dGb290ZXI6IHRydWUgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIChkYXRhU3RhdGVDaGFuZ2UpPVxcXCJkYXRhU3RhdGVDaGFuZ2UoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJQcm9kdWN0SURcXFwiIHRpdGxlPVxcXCJQcm9kdWN0IElEXFxcIiB3aWR0aD1cXFwiMTIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvR3JpZEdyb3VwSGVhZGVyVGVtcGxhdNC1PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJQcm9kdWN0TmFtZVxcXCIgdGl0bGU9XFxcIlByb2R1Y3QgTmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcIlVuaXRQcmljZVxcXCIgdGl0bGU9XFxcIlVuaXQgUHJpY2VcXFwiIHdpZHRoPVxcXCIyMzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9HcmlkR3JvdXBGb290ZXJUZW1wbGF0ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0LWdyb3VwPVxcXCJncm91cFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldC1hZ2dyZWdhdGVzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgU3VtOiB7e2FnZ3JlZ2F0ZXNbXFxcIlVuaXRQcmljZVxcXCJdLnN1bX19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0dyaWRGb290ZXJUZW1wbGF0ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFRvdGFsIHt7Y29sdW1uLnRpdGxlfX06IHt7dG90YWxbXFxcIlVuaXRQcmljZVxcXCJdLnN1bX19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcIkRpc2NvbnRpbnVlZFxcXCIgd2lkdGg9XFxcIjEyMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0dyaWRDZWxsVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBbY2hlY2tlZF09XFxcImRhdGFJdGVtLkRpc2NvbnRpbnVlZFxcXCIgZGlzYWJsZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPC9rZW5kby1ncmlkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxoMz5DaGFydHM8L2gzPlxcclxcbiAgICA8a2VuZG8tY2hhcnQgW2NhdGVnb3J5QXhpc109XFxcInsgY2F0ZWdvcmllczogY2F0ZWdvcmllcyB9XFxcIj5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC10aXRsZSB0ZXh0PVxcXCJHcm9zcyBkb21lc3RpYyBwcm9kdWN0IGdyb3d0aCAvR0RQIGFubnVhbCAlL1xcXCI+PC9rZW5kby1jaGFydC10aXRsZT5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC1sZWdlbmQgcG9zaXRpb249XFxcInRvcFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwva2VuZG8tY2hhcnQtbGVnZW5kPlxcclxcbiAgICAgICAgPGtlbmRvLWNoYXJ0LXRvb2x0aXAgZm9ybWF0PVxcXCJ7MH0lXFxcIj48L2tlbmRvLWNoYXJ0LXRvb2x0aXA+XFxyXFxuICAgICAgICA8a2VuZG8tY2hhcnQtc2VyaWVzPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jaGFydC1zZXJpZXMtaXRlbSAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHNlcmllc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiY29sdW1uXFxcIiBbZGF0YV09XFxcIml0ZW0uZGF0YVxcXCIgW25hbWVdPVxcXCJpdGVtLm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tY2hhcnQtc2VyaWVzLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG4gICAgPC9rZW5kby1jaGFydD5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxoMz5MYXlvdXQ8L2gzPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlLXdyYXBwZXIgY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGV4YW1wbGUtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHA+UGFuZWxCYXI8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJJbnZhc2lvbiBHYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIkhvY2tleVxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJTb2NjZXJcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiUnVnYnlcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiQmFza2V0YmFsbFxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJXYXRlciBwb2xvXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIk5ldGJhbGxcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJTdHJpa2luZyAmIEZpZWxkaW5nIEdhbWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiQ3JpY2tldFxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJTb2Z0YmFsbFxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJCYXNlYmFsbFxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIk5ldCAmIENvdXJ0IEdhbWVzXFxcIiBbZXhwYW5kZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiQmFkbWludG9uXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIlNxdWFzaFxcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJUZW5uaXNcXFwiIFtzZWxlY3RlZF09XFxcInRydWVcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiVGFibGUgVGVubmlzXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIlZvbGxleWJhbGxcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJUYXJnZXQgR2FtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIHRpdGxlPVxcXCJHb2xmXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gdGl0bGU9XFxcIkxhd24gYm93bHNcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSB0aXRsZT1cXFwiVGVucGluIGJvd2xpbmdcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPC9rZW5kby1wYW5lbGJhcj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgZXhhbXBsZS1jb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD5UYWJTdHJpcDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGtlbmRvLXRhYnN0cmlwPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXRhYnN0cmlwLXRhYiBbdGl0bGVdPVxcXCInQmFzZWJhbGwnXFxcIiBbc2VsZWN0ZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9UYWJDb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2ViYWxsIGlzIGEgYmF0LWFuZC1iYWxsIGdhbWUgcGxheWVkIGJldHdlZW4gdHdvIHRlYW1zIG9mIG5pbmUgcGxheWVycyBlYWNoLCB3aG8gdGFrZSB0dXJucyBiYXR0aW5nIGFuZCBmaWVsZGluZy5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBiYXR0aW5nIHRlYW0gYXR0ZW1wdHMgdG8gc2NvcmUgcnVucyBieSBoaXR0aW5nIGEgYmFsbCB0aGF0IGlzIHRocm93biBieSB0aGUgcGl0Y2hlciB3aXRoIGEgYmF0IHN3dW5nIGJ5IHRoZSBiYXR0ZXIsIHRoZW4gcnVubmluZyBjb3VudGVyLWNsb2Nrd2lzZSBhcm91bmQgYSBzZXJpZXMgb2YgZm91ciBiYXNlczogZmlyc3QsIHNlY29uZCwgdGhpcmQsIGFuZCBob21lIHBsYXRlLiBBIHJ1biBpcyBzY29yZWQgd2hlbiBhIHBsYXllciBhZHZhbmNlcyBhcm91bmQgdGhlIGJhc2VzIGFuZCByZXR1cm5zIHRvIGhvbWUgcGxhdGUuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9rZW5kby10YWJzdHJpcC10YWI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8a2VuZG8tdGFic3RyaXAtdGFiIFt0aXRsZV09XFxcIidCYXNrZXRiYWxsJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvVGFiQ29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNrZXRiYWxsIGlzIGEgc3BvcnQgdGhhdCBpcyBwbGF5ZWQgYnkgdHdvIHRlYW1zIG9mIGZpdmUgcGxheWVycyBvbiBhIHJlY3Rhbmd1bGFyIGNvdXJ0LiBUaGUgb2JqZWN0aXZlIGlzIHRvIHNob290IGEgYmFsbCB0aHJvdWdoIGEgaG9vcCAxOCBpbmNoZXMgKDQ2IGNtKSBpbiBkaWFtZXRlciBhbmQgbW91bnRlZCBhdCBhIGhlaWdodCBvZiAxMCBmZWV0ICgzLjA0OCBtKSB0byBiYWNrYm9hcmRzIGF0IGVhY2ggZW5kIG9mIHRoZSBjb3VydC4gVGhlIGdhbWUgd2FzIGludmVudGVkIGluIDE4OTEgYnkgRHIuIEphbWVzIE5haXNtaXRoLCB3aG8gd291bGQgYmUgdGhlIGZpcnN0IGJhc2tldGJhbGwgY29hY2ggb2YgdGhlIEthbnNhcyBKYXloYXdrcywgb25lIG9mIHRoZSBtb3N0IHN1Y2Nlc3NmdWwgcHJvZ3JhbXMgaW4gdGhlIGdhbWUncyBoaXN0b3J5LlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tdGFic3RyaXAtdGFiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXRhYnN0cmlwLXRhYiBbdGl0bGVdPVxcXCInRm9vdGJhbGwnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9UYWJDb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvb3RiYWxsIGlzIGEgZmFtaWx5IG9mIHRlYW0gc3BvcnRzIHRoYXQgaW52b2x2ZSwgdG8gdmFyeWluZyBkZWdyZWVzLCBraWNraW5nIGEgYmFsbCB3aXRoIHRoZSBmb290IHRvIHNjb3JlIGEgZ29hbC4gVW5xdWFsaWZpZWQsIHRoZSB3b3JkIGZvb3RiYWxsIGlzIHVuZGVyc3Rvb2QgdG8gcmVmZXIgdG8gd2hpY2hldmVyIGZvcm0gb2YgZm9vdGJhbGwgaXMgdGhlIG1vc3QgcG9wdWxhciBpbiB0aGUgcmVnaW9uYWwgY29udGV4dCBpbiB3aGljaCB0aGUgd29yZCBhcHBlYXJzLlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tdGFic3RyaXAtdGFiPlxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLXRhYnN0cmlwPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG5cXHJcXG48c2VjdGlvbj5cXHJcXG4gICAgPGgzPlBvcFVwPC9oMz5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZXhhbXBsZS1jb25maWdcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiAjYW5jaG9yIChjbGljayk9XFxcIm9uVG9nZ2xlKClcXFwiIGNsYXNzPVxcXCJrLWJ1dHRvblxcXCI+e3t0b2dnbGVUZXh0fX0gUG9wdXA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImV4YW1wbGUtd3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8a2VuZG8tcG9wdXAgW3BvcHVwQ2xhc3NdPVxcXCInY29udGVudCBwb3B1cCdcXFwiIFthbmNob3JdPVxcXCJhbmNob3JcXFwiIChhbmNob3JWaWV3cG9ydExlYXZlKT1cXFwic2hvdyA9IGZhbHNlXFxcIiAqbmdJZj1cXFwic2hvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBVc2VyLWRlZmluZWQgY29udGVudCAtLT5cXHJcXG4gICAgICAgICAgICBQb3B1cCBjb250ZW50LlxcclxcbiAgICAgICAgPC9rZW5kby1wb3B1cD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8aDM+U2Nyb2xsVmlldzwvaDM+XFxyXFxuICAgIDxrZW5kby1zY3JvbGx2aWV3IFtkYXRhXT1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcIndpZHRoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cXFwiaGVpZ2h0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbYXJyb3dzXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZ2VhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZGVtby10aXRsZVxcXCI+e3tpdGVtLnRpdGxlfX08L2gyPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPSd7e2l0ZW0udXJsfX0nIGFsdD0ne3tpdGVtLnRpdGxlfX0nIFtuZ1N0eWxlXT1cXFwie21pbldpZHRoOiB3aWR0aH1cXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiIC8+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L2tlbmRvLXNjcm9sbHZpZXc+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8aDM+U29ydGFibGU8L2gzPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlLWNvbmZpZ1xcXCI+XFxyXFxuICAgICAgICA8aDU+SXRlbXM6IHt7aXRlbXMgfCBqc29ufX08L2g1PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXNvcnRhYmxlIFtuYXZpZ2F0YWJsZV09XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbmltYXRpb25dPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcIml0ZW1zMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1DbGFzc109XFxcIidpdGVtIGNvbC14cy02IGNvbC1zbS0zJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZUl0ZW1DbGFzc109XFxcIidpdGVtIGNvbC14cy02IGNvbC1zbS0zIGFjdGl2ZSdcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tc29ydGFibGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8aDM+VXBsb2FkPC9oMz5cXHJcXG4gICAgPGtlbmRvLXVwbG9hZCBbc2F2ZVVybF09XFxcInVwbG9hZFNhdmVVcmxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgW3JlbW92ZVVybF09XFxcInVwbG9hZFJlbW92ZVVybFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBbd2l0aENyZWRlbnRpYWxzXT1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICA8L2tlbmRvLXVwbG9hZD5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPHNlY3Rpb24+XFxyXFxuICAgIDxoMz5JbnRlcmVzdGluZyBmZWF0dXJlIDogRGlhbG9nIFNlcnZpY2U8L2gzPlxcclxcbjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbW8vZGVtby5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1Ib3VyTG9jYWwnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRIb3VyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gZGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLDUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbVRyaXBEYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERhdGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50KGQpLmZvcm1hdCgnTEwnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgwNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgzNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4MzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sYXlvdXQvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzk4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItY2hhcnRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItYnV0dG9ucy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4MTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1zY3JvbGx2aWV3L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNvcnRhYmxlL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXVwbG9hZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGFtbWVyanMvaGFtbWVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMzEwNjcxOTI1NzljOGQwZTJlMGFcbi8vIG1vZHVsZSBpZCA9IDI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8zMTA2NzE5MjU3OWM4ZDBlMmUwYVxuLy8gbW9kdWxlIGlkID0gMjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzMxMDY3MTkyNTc5YzhkMGUyZTBhXG4vLyBtb2R1bGUgaWQgPSAyNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==