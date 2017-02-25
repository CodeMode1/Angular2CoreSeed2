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
	__webpack_require__(266);
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

	module.exports = (__webpack_require__(2))(1281);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_e0afadce5bc5de620783;

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

	module.exports = (__webpack_require__(2))(971);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(925);

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

	module.exports = (__webpack_require__(2))(910);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(912);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(911);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(914);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(916);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(921);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(915);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(913);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(923);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(922);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(918);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(919);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(917);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(909);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(920);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(924);

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

	module.exports = (__webpack_require__(2))(877);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(879);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(878);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(7).parseInt;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(927);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(7).parseFloat;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(926);

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

	module.exports = (__webpack_require__(2))(897);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(907);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(908);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(898);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(899);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(900);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(901);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(902);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(903);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(904);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(905);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(906);

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

	module.exports = (__webpack_require__(2))(880);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(881);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(882);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(883);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(884);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(885);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(886);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(887);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(888);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(889);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(890);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(891);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(892);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(893);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(894);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(895);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(896);

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

	module.exports = (__webpack_require__(2))(958);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(963);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(970);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(961);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(953);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(954);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(959);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(964);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(966);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(949);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(950);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(951);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(952);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(955);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(956);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(957);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(960);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(962);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(965);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(967);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(968);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(969);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(944);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(945);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(946);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(947);

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

	module.exports = (__webpack_require__(2))(872);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(874);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(873);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(876);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(875);

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

	module.exports = (__webpack_require__(2))(861);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(859);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(865);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(862);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(868);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(870);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(858);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(864);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(855);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(869);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(853);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(867);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(866);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(860);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(863);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(852);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(854);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(857);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(856);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(871);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(255);

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

	module.exports = (__webpack_require__(2))(943);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(948);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(486);

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

	module.exports = (__webpack_require__(2))(1019);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(485);

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

	module.exports = (__webpack_require__(2))(487);

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

	module.exports = (__webpack_require__(2))(488);

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

	module.exports = (__webpack_require__(2))(983);

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

	module.exports = (__webpack_require__(2))(972);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(973);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(978);

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(981);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(982);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(976);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(979);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(977);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(980);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(974);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(975);

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

	module.exports = (__webpack_require__(2))(929);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(930);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(931);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(932);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(933);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(936);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(934);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(935);

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(937);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(938);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(939);

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(940);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(942);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(941);

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

	module.exports = (__webpack_require__(2))(1000);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1001);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1003);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1002);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1005);

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1004);

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1006);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1007);

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1008);

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1282);

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(652);

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
	// services
	var login_service_1 = __webpack_require__(179);
	var trip_service_1 = __webpack_require__(222);
	var tripdetail_service_1 = __webpack_require__(202);
	var stop_service_1 = __webpack_require__(201);
	var weather_service_1 = __webpack_require__(200);
	var weatherconstraint_service_1 = __webpack_require__(219);
	// pipes
	var weatherform_pipe_1 = __webpack_require__(252);
	var trip_pipe_1 = __webpack_require__(253);
	// kendo UI modules
	var kendo_angular_dateinputs_1 = __webpack_require__(254);
	var kendo_angular_dialog_1 = __webpack_require__(255);
	var kendo_angular_inputs_1 = __webpack_require__(256);
	var kendo_angular_layout_1 = __webpack_require__(257);
	var kendo_angular_charts_1 = __webpack_require__(258);
	var kendo_angular_grid_1 = __webpack_require__(259);
	var kendo_angular_buttons_1 = __webpack_require__(260);
	var kendo_angular_dropdowns_1 = __webpack_require__(261);
	var kendo_angular_popup_1 = __webpack_require__(262);
	var kendo_angular_scrollview_1 = __webpack_require__(263);
	__webpack_require__(264);
	// paging
	var ng2_pagination_1 = __webpack_require__(265);
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
	                {
	                    path: 'weathers/:id', component: weather_component_1.WeatherComponent, children: [
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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(666);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(27);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(103);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(651);

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

	module.exports = (__webpack_require__(2))(605);

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(80);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(163);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1061);

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
	var core_1 = __webpack_require__(171);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(187),
	        styles: [__webpack_require__(188)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

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
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n\n    a{\r\n        cursor: pointer;\r\n    }\n}\n", ""]);
	
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

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2CoreSeed</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li routerLinkActive=\"link-active\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\r\n                    <a>\r\n                        <span class=\"glyphicon glyphicon-user\"></span> Sign Up\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Sign In\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/trips']\">\n                        <span class=\"glyphicon glyphicon-road\"></span> Trips\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/weatherConstraints']\">\n                        <span class=\"glyphicon glyphicon-star-empty\"></span> Statistiques Temperatures\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-out\"></span> LogOut\r\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

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

	module.exports = "<h2>Weathers</h2>\r\n\r\n<h3>Choose a weather to get weather constraints from : </h3>\r\n\r\n<ul>\r\n    <li *ngFor=\"let weather of weathers\">\r\n        <a [routerLink]=\"[weather.id]\">{{weather?.name}}</a>\r\n    </li>\r\n</ul>"

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

	module.exports = "<h2>Statistiques pour la température : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ID\r\n            </th>\r\n            <th>\r\n                Vent km/h\r\n            </th>\r\n            <th>\r\n                Rafale km/h\r\n            </th>\r\n            <th>\r\n                Humidité %\r\n            </th>\r\n            <th>\r\n                Lever Soleil AM\r\n            </th>\r\n            <th>\r\n                Coucher Soleil PM\r\n            </th>\r\n            <th>\r\n                Clarté\r\n            </th>\r\n            <th>\r\n                Présenti °C\r\n            </th>\r\n            <th>\r\n                Température\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.id}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                <p>Temp : {{constraint?.weather.name}}</p>\r\n                <p>Heure : {{constraint?.weather.hour | fmHourLocal }}</p>\r\n                <p>Temp °C : {{constraint?.weather.tempC}}</p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<kendo-chart [categoryAxis]=\"{ categories: tempConst }\">\r\n\r\n    <kendo-chart-value-axis>\r\n        <kendo-chart-value-axis-item [title]=\"{ text: 'Statistiques' }\">\r\n        </kendo-chart-value-axis-item>\r\n    </kendo-chart-value-axis>\r\n\r\n    <kendo-chart-title text=\"Statistiques Température / Contrainte\" background=\"#e3e3e3\" font=\"19pt sans-serif\"></kendo-chart-title>\r\n    <kendo-chart-legend position=\"top\" orientation=\"horizontal\"></kendo-chart-legend>\r\n    <kendo-chart-tooltip format=\"{0}\" padding=\"1\"  [shared]=\"true\"></kendo-chart-tooltip>\r\n    <kendo-chart-area background=\"#f7f7fa\" [margin]=\"30\">\r\n    </kendo-chart-area>\r\n\r\n    <kendo-chart-series>\r\n        <kendo-chart-series-item *ngFor=\"let constraint of constraints\" type=\"column\" \r\n                                  [data]=\"constraint.stats\" [name]=\"constraint.id\">\r\n        </kendo-chart-series-item>\r\n    </kendo-chart-series>\r\n</kendo-chart>\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

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
	    TripComponent.prototype.home = function () {
	        this._router.navigateByUrl('/home');
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

	module.exports = "<header>\r\n    <h1>Bienvenue </h1>\r\n    <h2> {{userName}}</h2>\r\n</header>\r\n<a class=\"btn btn-md btn-info active\" [routerLink]=\"['/trips/perso']\">Mes trips</a>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<a class=\"btn btn-md btn-primary\" [routerLink]=\"['best']\">Meilleurs Trips</a>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<h3>Disponibles présentement</h3>\r\n\r\n<nav class=\"navbar navbar-default col-md-12 col-sm-12\">\r\n    <div class=\"navbar-left navbar-header col-md-2\">\r\n        <span class=\"navbar-brand\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <form class=\"navbar-form navbar-left\" role=\"Search\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" #inputIdSearch class=\"form-control\" placeholder=\"{{searchMessage}}\">\r\n                <div class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-info\" #anchor (click)=\"onToggleIdPopUp()\"><i class=\"fa fa-info\"></i></button>\r\n                    <button type=\"submit\" (click)=\"searchTripId(inputIdSearch)\" class=\"btn btn-default\">Go!</button>\r\n                </div>\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"showPopUpId\">\r\n                    Rechercher par Id de trip.\r\n                </kendo-popup>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"navbar-right col-md-2\">\r\n        <button (click)=\"refreshTrips()\" kendoButton [primary]=\"true\" [icon]=\"'refresh'\" class=\"refreshButton\">Actualiser</button>\r\n    </div>   \r\n</nav>\r\n\r\n<div class=\"col-md-12 col-sm-12\" style=\"text-align: center\">\r\n    <i *ngIf=\"reqTrips\" class=\"fa fa-spinner fa-spin fa-5x\"></i>\r\n</div>\r\n\r\n<main class=\"col-md-12\">\r\n    <template *ngIf=\"!trips.length\">\r\n        <h3>Aucuns Trips</h3>\r\n    </template>\r\n    <div *ngFor=\"let trip of trips | paginate: { itemsPerPage: 8, currentPage: p }\" class=\"infosTrip col-md-2\">\r\n        <button (click)=\"deleteTrip(trip)\" kendoButton [primary]=\"true\" class=\"deleteTripButton\"><i class=\"fa fa-trash\"></i></button>\r\n        <ul>\r\n            <li>Nom : {{trip?.name}}</li>\r\n            <li>Pays : {{trip?.country}}</li>\r\n            <li>Continent : {{trip?.continent}}</li>\r\n            <li #anchor>\r\n                Rating : <rating class=\"rating\" *ngIf=\"trip?.rating\" [rating]='trip.rating' (ratingClick)=\"clickRating($event)\">\r\n                </rating>\r\n            </li>\r\n            <kendo-popup [anchor]=\"anchor\" class=\"popUpContent\" *ngIf=\"showPopUp\">\r\n                Quoté : {{trip?.rating}}\r\n            </kendo-popup>\r\n        </ul>\r\n        <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n        <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n    </div>\r\n\r\n    <section class=\"col-md-12\">\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </section>\r\n</main>\r\n\r\n<footer>\r\n    <section class=\"col-md-12\">\r\n        <a class=\"btn btn-lg btn-primary\" (click)=\"home()\"><i class=\"fa fa-home\"></i> Accueil</a>\r\n    </section>\r\n</footer>\r\n\r\n"

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
	            _this.selectedTrip = new trip_1.Trip(data.id, data.name, data.leaving, data.continent, data.country, data.rating, data.stops);
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

	module.exports = "<h2>Détails Trip</h2>\r\n\r\n<ul *ngIf=\"selectedTrip\" class=\"col-md-6\">\r\n    <li><i class=\"fa fa-address-book\"></i><span>{{selectedTrip?.id}}</span></li>\r\n    <li><i class=\"fa fa-location-arrow\"></i><span>{{selectedTrip?.name}}</span></li>\r\n    <li><i class=\"fa fa-hourglass\"></i><span>{{selectedTrip?.leaving | fmTripDate}}</span></li>\r\n    <li><i class=\"fa fa-hotel\"></i><span>{{selectedTrip?.country}}</span></li>\r\n    <li><i class=\"fa-home\"></i><span>{{selectedTrip?.continent}}</span></li>\r\n    <li><i class=\"fa fa-first-order\"></i><span>{{selectedTrip?.rating}}</span></li>\r\n    <li><button class=\"btn btn-sm btn-success\" (click)=\"buyTrip(selectedTrip)\" [disabled]=\"isBought\">Ajouter à mes trips</button></li>\r\n    <li>\r\n        <h4>\r\n            {{isBoughtMessage}}\r\n            <span>\r\n                <a *ngIf=\"isBought\" [routerLink]=\"['stop']\" class=\"btn btn-link btn-md\"><i class=\"fa fa-arrow-up\"></i> Ajouter Stops</a>\r\n            </span>\r\n        </h4>    \r\n    </li>   \r\n</ul>\r\n<ul class=\"col-md-6\">\r\n    <li>\r\n        <h4>\r\n            Visualiser Stops\r\n            <span>\r\n                <a [routerLink]=\"['edit']\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-search\"></i></a>\r\n            </span>\r\n        </h4>\r\n    </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"col-md-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Retour</button>\r\n</footer>"

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

	module.exports = "<h2>{{userMessage}}</h2>\r\n\r\n<delete [isDelete]=\"inputDelete\" [tripToDelete]=\"selectedTrip\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<h1>Mes Trips</h1>\r\n<h2>Swipe <i class=\"fa fa-arrow-left\"></i> Ou <i class=\"fa fa-arrow-right\"></i></h2>\r\n\r\n<div *ngFor=\"let trip of mesTrips; let idx=index\" class=\"col-md-12 swipe-box\" \r\n     (swipeleft)=\"swipe(idx, $event.type)\" (swiperight)=\"swipe(idx, $event.type)\"\r\n     [class.visible]=\"trip.visible\" [class.hidden]=\"!trip.visible\">\r\n    <div class=\"card col-md-3\">\r\n        <div class=\"card-header\">\r\n            <h4 class=\"card-title\">Trip</h4>\r\n            <h5 class=\"text-muted\">Contient {{trip?.stops.length}} stops</h5>\r\n        </div>\r\n        <i class=\"card-img-top fa fa-picture-o fa-2x\" aria-hidden=\"true\"></i>\r\n        <div class=\"card card-block\">\r\n            <p class=\"card-text\"># Réservation : {{trip?.id}}</p>\r\n            <p class=\"card-text\">Nom : {{trip?.name}}</p>\r\n            <p class=\"card-text\">Date de départ : {{trip?.leaving | fmTripDate}}</p>\r\n            <p class=\"card-text\">Pays : {{trip?.country}}</p>\r\n            <p class=\"card-text\">Continent : {{trip?.continent}}</p>\r\n            <div class=\"userButtons\">\r\n                <a class=\"card-link btn btn-md btn-secondary active col-md-6 userActions\" (click)=\"deleteTrip(trip)\"><i class=\"fa fa-trash\"></i> Supprimer</a>\r\n                <a class=\"card-link btn btn-md btn-info active col-md-6 userActions\" (click)=\"addStops(trip.id)\"><i class=\"fa fa-plus\"></i> Ajouter Stops</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n        <ul *ngFor=\"let stop of trip?.stops; let i = index\">\r\n            <li>Stop # {{i + 1}}</li>\r\n            <li>Nom : {{stop?.name}}</li>\r\n            <li>Date d'arrivée : {{stop?.arrival | fmTripDate}}</li>\r\n            <li>Date de départ : {{stop?.leaving | fmTripDate}}</li>\r\n            <li>Ville : {{stop?.city}}</li>\r\n            <li>Cuisine : {{stop?.cuisine}}</li>\r\n            <li>Guide : {{stop?.guide}}</li>\r\n            <li>Quote : {{stop?.quote}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n<a class=\"btn btn-lg btn-primary backButton\" (click)=\"goBack()\"><i class=\"fa fa-arrow-up\"></i> Retour</a>\r\n\r\n"

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
	        //check if were not in /stop yet, jsut display a message for the user
	        this._activatedRoute.params.subscribe(function (params) {
	            if (params['id'] != null || params['id'] != undefined) {
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
	    EditStopComponent.prototype.animStopDone = function ($event) {
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
	    //  ajouter une temeprature pour ce stop
	    EditStopComponent.prototype.ajouteTemp = function (id) {
	        this._router.navigateByUrl("/weathers/" + id);
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
	                ]),
	                core_1.transition(':leave', [
	                    core_1.animate('200ms 200ms ease-out', core_1.style({ transform: 'translateX(100%)' }))
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

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-9 col-sm-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\" class=\"col-md-12\">\r\n        <div class=\"col-md-8 col-sm-12 rowBlock\"\r\n             (@flyInOut.start)=\"animStopStarted($event)\"\r\n             (@flyInOut.done)=\"animStopDone($event)\"\r\n             [@flyInOut]=\"flyState\">\r\n            <span><i class=\"fa fa-stop\"></i></span>\r\n            <button #anchor class=\"btn btn-link btn-md\" (click)=\"onTogglePopUp(stop.id)\">\r\n                {{toggleText}} Détails {{stop?.name}}\r\n            </button>\r\n            <div class=\"popUpWrapper\">\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"stop?.showPopUp\">\r\n                    {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},  À {{stop?.city}}, Cuisine {{stop?.cuisine}},\r\n                    {{stop?.guide}}, Quoté {{stop?.quote}}\r\n                </kendo-popup>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n            <span><button [disabled]=\"!isAdmin\" class=\"btn btn-md btn-danger active crudButtons\" (click)=\"deleteStop(stop.id)\"><i class=\"fa fa-trash\"></i> Supprimer</button></span>\r\n            <span><button class=\"btn btn-md btn-success active crudButtons\" (click)=\"ajouteTemp(stop.id)\"><i class=\"fa fa-plus\"></i> Température</button></span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"col-md-3 col-sm-12\" [@animStop]=\"state\" (click)=\"toggleState()\">\r\n    <kendo-scrollview class=\"col-md-12\" [data]=\"items\"\r\n                      [animate]=\"animate\"\r\n                      [endless]=\"endless\"\r\n                      [width]=\"width\"\r\n                      [height]=\"height\"\r\n                      [arrows]=\"true\"\r\n                      [pageable]=\"true\">\r\n        <template let-item=\"item\">\r\n            <h4 class=\"demo-title\">{{item.title}}</h4>\r\n            <img src='{{item.url}}' alt='{{item.title}}' [ngStyle]=\"{width: width, height: height}\" draggable=\"false\" />\r\n        </template>\r\n    </kendo-scrollview>\r\n</div>\r\n<div class=\"col-md-12 alert alert-danger noStops\" role=\"alert\" *ngIf=\"!selectedTrip?.stops.length\">\r\n    <h4><i class=\"fa fa-exclamation-triangle\"></i> Aucuns Stops</h4>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.noStops{\r\n    text-align: center;\r\n    padding: 2%;\r\n    margin: 2% 0;\r\n}\r\n\r\n.popUpContent {\r\n    padding: 15px;\r\n    color: #787878;\r\n    background-color: rgba(0,0,0,.05);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.popUpWrapper{\r\n    min-width: 100px;\r\n    min-height: 5px;\r\n}\r\n\r\n.rowBlock{\r\n    box-shadow:2px 2px 2px gray,-1px -1px 2px white;\r\n    cursor: pointer;\r\n}\r\n\r\n.crudButtons{\r\n    float: left;\r\n}\r\n\r\n.k-scrollview-wrap {\r\n    margin: 0 auto;\r\n}\r\n\r\ndemo-title {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 15px;\r\n    color: #fff;\r\n    background-color: rgba(0,0,0,.4);\r\n    text-align: center;\r\n    font-size: 24px;\r\n}", ""]);
	
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
/* 253 */
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
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(766);

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(769);

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(793);

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(798);

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(757);

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(783);

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(671);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(772);

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(67);

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(808);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1027);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1032);

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(822);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FjZTMwN2U2OWFjZDE3ZWUwNTgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvbWF0aC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcmVnZXhwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzPzUwYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcz81MDUyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzPzJhMDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1zY3JvbGx2aWV3L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hhbW1lcmpzL2hhbW1lci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBcUI7QUFFckIseUdBQXdHO0FBQ3hHLDJEQUEyRTtBQUMzRSx1Q0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLDBCQUFtQjtBQUVuQix5REFBd0Q7QUFDeEQsR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUNyQixFQUFDO0FBRUQsc0VBQXFFO0FBQ3JFLEtBQU0sUUFBUSxHQUFHLGlEQUFzQixFQUFFLENBQUM7QUFDMUMsS0FBTSxlQUFlLEdBQUcsY0FBUSxRQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxHQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDckMsZUFBZSxFQUFFLENBQUM7QUFDdEIsRUFBQztBQUFDLEtBQUksQ0FBQyxDQUFDO0tBQ0osUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ25FLEVBQUM7Ozs7Ozs7O0FDdkJELGlEOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsZ0ZBQStFO0FBQy9FLHNEQUFxRDs7QUFFckQsd0JBQTRCO0FBQzVCLHdCQUE0QjtBQUM1Qix5QkFBOEI7QUFDOUIseUJBQStCO0FBQy9CLHlCQUFpQztBQUNqQyx5QkFBNEI7QUFDNUIseUJBQTBCO0FBQzFCLHlCQUE0QjtBQUM1Qix5QkFBMEI7QUFDMUIseUJBQTJCO0FBQzNCLDBCQUE0QjtBQUM1QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCLDBCQUE4QjtBQUM5QiwwQkFBOEI7QUFDOUIsMEJBQTJCO0FBQzNCLDBCQUE2QjtBQUU3Qix1R0FBc0c7QUFDdEcsMEJBQTZCO0FBQzdCLDBCQUEyQjs7Ozs7OztBQ3ZCM0I7QUFDQTtBQUNBLGdEOzs7Ozs7QUNGQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7OztBQ25CQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esa0Q7Ozs7OztBQ0hBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0Esa0Q7Ozs7OztBQ0RBLGdEOzs7Ozs7QUNBQTtBQUNBLG9EOzs7Ozs7QUNEQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1pBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qzs7Ozs7O0FDakJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUMxQkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7OztBQ0xBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7Ozs7O0FDdEJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1BBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7Ozs7OztBQ0pBLGlEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Qzs7Ozs7O0FDSkEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ0hBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDWkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ2RBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YWNlMzA3ZTY5YWNkMTdlZTA1OCIsImltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBpbXBvcnRzIGNpIGhhdXQsIGxlcyBwb2x5ZmlsbHMgcG91ciBlbmFibGVyIHVuIG5vdXZlbCBBUEkvd2ViIHN1cHBvcnQgZGFucyB1biBvbGQgYnJvd3Nlci9lbnZpcm9ubWVudFxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8vIEVuYWJsZSBlaXRoZXIgSG90IE1vZHVsZSBSZWxvYWRpbmcgb3IgcHJvZHVjdGlvbiBtb2RlXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG4gICAgbW9kdWxlWydob3QnXS5kaXNwb3NlKCgpID0+IHsgcGxhdGZvcm0uZGVzdHJveSgpOyB9KTtcbn0gZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLy8gQm9vdCB0aGUgYXBwbGljYXRpb24sIGVpdGhlciBub3cgb3Igd2hlbiB0aGUgRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEyODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXHJcbi8vIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3R5cGVkJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbi8vIGVuYWJsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBpbiBkZWNvcmF0b3IgZnVuY3Rpb25zLiAocmVwbGFjZXMgcGFja2FnZXMgcmVmbGVjdC1tZXRhZGF0YSArIGVzNi1zaGltKVxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcG9seWZpbGxzLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTExKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTIxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5GdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5wYXJzZUludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykucGFyc2VGbG9hdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk51bWJlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODgzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5ibGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1YicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1cCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TdHJpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTYyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9kYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuam9pbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNvcnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc29tZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVnRXhwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0ODYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDg4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha1NldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlJlZmxlY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVmbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNy9yZWZsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDAzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTI4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBKc29ucE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsb2dpblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZCc7XG5cbi8vIG1haW4gY29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50JztcbmltcG9ydCB7IEJlc3RUcmlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJpcFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcblxuLy8gcGlwZXNcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbi8vIGtlbmRvIFVJIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dCc7XHJcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWNoYXJ0cyc7XHJcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5pbXBvcnQgeyBQb3B1cE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlld01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNjcm9sbHZpZXcnO1xyXG5cclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG4vLyBwYWdpbmdcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIEJlc3RUcmlwQ29tcG9uZW50LFxuICAgICAgICBUcmlwRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUcmlwVXNlckNvbXBvbmVudCxcbiAgICAgICAgRWRpdFN0b3BDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSYXRpbmdDb21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIExheW91dE1vZHVsZSxcbiAgICAgICAgQ2hhcnRzTW9kdWxlLFxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIFBvcHVwTW9kdWxlLFxuICAgICAgICBTY3JvbGxWaWV3TW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcycsIGNvbXBvbmVudDogVHJpcENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2Jlc3QnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzL3BlcnNvJywgY29tcG9uZW50OiBUcmlwVXNlckNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sICAgICAgICAgIFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzLzppZCcsIGNvbXBvbmVudDogVHJpcERldGFpbENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3N0b3AnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZWRpdCcsIGNvbXBvbmVudDogRWRpdFN0b3BDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycy86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogV2VhdGhlckRldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdkZXRhaWwvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH1cbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMnLCBjb21wb25lbnQ6IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnd2VhdGhlckNvbnN0cmFpbnRzLzppZCcsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1zVGltZU91dDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tc1RpbWVPdXQgPSAzMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSA8SVVzZXI+Zm9ybS52YWx1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luU2VydmljZS5sb2dpbkFQSSh0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmlwcGVkVG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBsb2dpbiB1c2VyIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSA9IHRoaXMudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuID0gc3RyaXBwZWRUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucm9sZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucm9sZVtpXS50eXBlID09IFwiU3VwZXJVc2VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1cGVyVXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSW1wb3NzaWJsZSBkZSBsb2d1ZXIgbGUgdXNlciA6IFwiICsgdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnN0b3BMb2FkaW5nKCk7IH0sIHRoaXMubXNUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB1c2VyICA6IFwiICsgdGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJOYW1lOiBzdHJpbmcsIHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG4vL2ltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBlc3RBZG1pbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3VybExvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX3VybExvZ2luID0gJ2FwaS9hdXRoL3Rva2VuJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkFQSSh1c2VyOiBJVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxMb2dpbiwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVzdEFkbWluID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjA1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxNjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8aDM+TG9naW48L2gzPlxcclxcbiAgICA8Zm9ybSAjbG9naW49XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQobG9naW4pXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJOYW1lXFxcIj5Vc2VyIE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci51c2VyTmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIudXNlck5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+Q291cnJpZWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIuZW1haWwudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5FbWFpbCBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+TW90IFBhc3NlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnBhc3N3b3JkLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+TW90IFBhc3NlIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tc3VjY2Vzc1xcXCI+U2UgTG9ndWVyPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdj48aSAqbmdJZj1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZndcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZXJyb3JcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IG51bGwgJiYgdHlwZW9mKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IFwidW5kZWZpbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2dlZCBpbiBzbyByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIDogXCIgKyB0aGlzLkxvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIFwiICsgdGhpcy5Mb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgYXtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gU3RhdGlzdGlxdWVzIFRlbXBlcmF0dXJlc1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj4gTG9nT3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJBU1AuTkVUIENvcmVcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQVNQLk5FVCBDb3JlIGFuZCBDIyBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2V0LmFzcC5uZXQvJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIkFuZ3VsYXIgMiBhbmQgVHlwZVNjcmlwdCBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGNsaWVudC1zaWRlIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2FuZ3VsYXIuaW8vJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIldlYnBhY2tcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXNcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGxheW91dCBhbmQgc3R5bGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbyBXb3JsZDwvaDE+XFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGgzPkJpZW52ZW51ZSBTdXIgPHNwYW4+PHN0cm9uZz48aT5Bbmd1bGFyMkNvcmVTZWVkPC9pPjwvc3Ryb25nPjwvc3Bhbj4sIERlbW8gOiA8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8a2VuZG8tdGFic3RyaXAgW25nQ2xhc3NdPVxcXCInY29sLW1kLTEyJ1xcXCIgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1ib3R0b20nOiAnMiUnfVxcXCI+XFxyXFxuICAgICAgICA8a2VuZG8tdGFic3RyaXAtdGFiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXMgbGV0IGk9aW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcIml0ZW0uc3ViamVjdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cXFwiaSA9PSBzZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvVGFiQ29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7aXRlbT8uY29udGVudH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwie3tpdGVtPy5saW5rfX1cXFwiPnt7aXRlbT8ubGlua319PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XFxcInt7aXRlbT8ubGluazJ9fVxcXCI+e3tpdGVtPy5saW5rMn19PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwva2VuZG8tdGFic3RyaXAtdGFiPlxcclxcbiAgICA8L2tlbmRvLXRhYnN0cmlwPlxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8aDQ+TGVzIGNvbmNlcHRzIGltcG9ydGFudHMgOiA8L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcbiA8c2VjdGlvbj5cXHJcXG4gICAgPGtlbmRvLXBhbmVsYmFyIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tYm90dG9tJzogJzIlJ31cXFwiPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0NsaWVudC1zaWRlIG5hdmlnYXRpb24nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInU2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nJ1xcXCIgW3NlbGVjdGVkXT1cXFwidHJ1ZVxcXCIgW2V4cGFuZGVkXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0ZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2VicGFjayBkZXYgbWlkZGxld2FyZSdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJ1biB0aGUgd2VicGFjayBidWlsZCB0b29sLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSG90IG1vZHVsZSByZXBsYWNlbWVudCdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0VmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkcydcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIHdlYnBhY2sgYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgPC9rZW5kby1wYW5lbGJhcj5cXG5cXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhLCBwID4gYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXZ7XFxyXFxuICAgIG1hcmdpbjogMSUgMDtcXHJcXG4gICAgcGFkZGluZzogMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuLi9zdG9wL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IFRyaXAsIElUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaXNEZWxldGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9EZWxldGVJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgb2JqZWN0VG9EZWxldGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRyaXBUb0RlbGV0ZTogSVRyaXA7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlU3VjY2VzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlkVG9EZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dOb3RpZjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UsIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHBvcCB1cCBvcGVuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZGVsZXRlIDogXCIgKyB0aGlzLmlzRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU5vdGlmKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gdGhpcy53ZWF0aGVyVG9EZWxldGVJZDtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInN0b3BBZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlU3RvcEJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcIndlYXRoZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZXJXZWF0aGVyQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInVzZXJ0cmlwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVVc2VyVHJpcCh0aGlzLnRyaXBUb0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3BCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdG9wU2VydmljZS5kZWxldGVTdG9wQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIERFTEVURSBzdG9wIGluIGRlbGV0ZSBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVyV2VhdGhlckJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzZXJUcmlwKHRyaXA6IElUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZGVsZXRlVHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgdHJpcCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRpbmcgdHJpcFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFdlYXRoZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsV2VhdGhlciA9IFwiYXBpL3dlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBhbGwgd2VhdGhlciBvYmplY3RzXHJcbiAgICBnZXRBbGxXZWF0aGVyc0FQSSgpOiBPYnNlcnZhYmxlPElXZWF0aGVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXJbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcG9zdFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVDogICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHB1dFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBieSBpZFxyXG4gICAgZ2V0V2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgbmFtZVxyXG4gICAgZ2V0V2VhdGhlckJ5TmFtZUFQSShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9CeU5hbWUvXCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IGlkXHJcbiAgICBkZWxldGVXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIgKyBlcnJvcikpICAgICAgXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3BTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BCeUlkQVBJKGlkOiBudW1iZXIsIHN0b3A6IFN0b3ApOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHN0b3AuY3Vpc2luZSA9IHN0b3AuY3Vpc2luZVtcInRleHRcIl07XHJcbiAgICAgICAgc3RvcC5ndWlkZSA9IHN0b3AuZ3VpZGVbXCJ0ZXh0XCJdO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0b3ApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsU3RvcCArIFwiL1wiICsgaWQsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElTdG9wPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9wQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwiZGVsZXRlIHN0b3Agd2l0aCBpZCA6IFwiICsgaWQpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGUgc3RvcCBcIiArIGVycm9yKSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gXCJhcGkvdHJpcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgZ2V0IHRyaXBzIGZvciBsb2dnZWQgaW4gdXNlci5cclxuICAgIGdldFVzZXJUcmlwQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL3VzZXJcIiwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB0cmlwIG9iamVjdC5cclxuICAgIHBvc3RUcmlwQVBJKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0cmlwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxUcmlwLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxUcmlwICsgXCIvdXNlclRyaXAvXCIgKyB0cmlwLmlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxhbnk+Y29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImlzU2hvd05vdGlmXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtc3VjY2Vzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgPHA+QWN0aW9uIGVmZmVjdHXDqWUuPC9wPiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiaWRUb0RlbGV0ZVxcXCI+XFxyXFxuICAgICAgICA8aDM+U3VjY8OocyBzdXBwcmltZXIgIzwvaDM+XFxyXFxuICAgICAgICA8aDQ+e3tpZFRvRGVsZXRlfX08L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiaGlkZU5vdGlmKClcXFwiPkhpZGU8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48a2VuZG8tZGlhbG9nICpuZ0lmPVxcXCJpc0RlbGV0ZVxcXCIgKGNsb3NlKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS4zZW07XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+IFN1cHByaW1lciBkb25uw6llXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFjdGlvbiBpcnLDqXZvY2FibGUuPC9wPlxcclxcblxcclxcbiAgICA8a2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwib25EZWxldGVEYXRhKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbjwva2VuZG8tZGlhbG9nPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuLi93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG4gICAgcHVibGljIHdlYXRoZXIxOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRyZVdlYXRoZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBlZGl0Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmbURhdGU6IGFueTtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdHJlV2VhdGhlciA9IFwiUmVjZW5zZW1lbnQgVGVtcMOpcmF0dXJlXCI7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgLy8gbW9tZW50IGpzIGZvcm1hdCBhIGRhdGUgd2l0aCBhIHN0cmluZyBmb3JtYXQsIHJldHVybnMgYSBkYXRlLlxyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgdGhpcy5mbURhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm1EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3Mgd2VhdGhlciBvYmplY3QgdG8gYmluZCB0by5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxID0gbmV3IFdlYXRoZXIoMSwgXCJBdXRvbW5XZWF0aGVyXCIsIHRoaXMuZm1EYXRlLCAxNCwgXCJUZW1ww6lyYXR1cmUgQXV0b21uZVwiLCAyNCwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTWV0aG9kIHRvIGdldCB3ZWF0aGVyIG9iamVjdHNcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCA6IGFsbCB3ZWF0aGVyIG9iamVjdHMgZnJvbSBkYlxyXG4gICAgZ2V0QWxsV2VhdGhlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFdlYXRoZXJzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IGFsbCB3ZWF0aGVyIG9iamV0cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2aWNlIDogIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXZWF0aGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gIXRoaXMuc2hvd0Zvcm07XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvRGVsZXRlKGlkVG9EZWxldGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZFRvRGVsZXRlKTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBpZFRvRGVsZXRlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwid2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcnMuc3BsaWNlKHRoaXMuaW5wdXRJZERlbGV0ZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSBhIGpzIG9iamVjdCAgKHVzdWFsbHkgb2JqZWN0IG9yIGFycmF5KSBjb252ZXJ0IGl0IHRvIEpTT04gc3RyaW5nIG5vdGF0aW9uXHJcbiAgICAvLyB0byBnZXQgSlNPTiBvYmplY3QgdXNlIHBhcnNlIG1ldGhvZFxyXG4gICAgZ2V0IGRpYWdub3N0aWMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwYXlsb2FkIHdlYXRoZXIgb2JqZWN0IGZyb20gY2hpbGRyZW4gY29tcG9uZW50IHdlYXRoZXJmb3JtXHJcbiAgICBwb3N0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICAvLyBmaWVsZCBkdSBmb3JtIGNoYW5nw6lcclxuICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSAkZXZlbnQuaG91cjtcclxuICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBDID0gJGV2ZW50LnRlbXBDO1xyXG4gICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9ICRldmVudC5zdW1tYXJ5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHdlYXRoZXIgdG8gcG9zdCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIHNhdmUgbmV3IHdlYXRoZXIgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5zYXZlV2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlclxyXG4gICAgZWRpdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgLy8gZmllbGQgZHUgZm9ybSBjaGFuZ8OpXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9ICRldmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRpbmcgYSB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gZWRpdCBhIHdlYXRoZXJcclxuICAgICAgICB0aGlzLnB1dFdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXIgd2hlbiBjbGlja2luZyBhIGxpbmsgb24gd2VhdGhlciBvYmplY3RzIHRhYmxlLlxyXG4gICAgZ29FZGl0KHdlYXRoZXI6IFdlYXRoZXIpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gd2VhdGhlcjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUIDogY2FsbCB0aGUgcG9zdCBhY3Rpb24gb24gYmFja2VuZCB0byBjcmVhdGUgbmV3IHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgc2F2ZVdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IFN1YnNjcmlwdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSBkYXRhLmhvdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcGVyYXR1cmVGID0gZGF0YS50ZW1wZXJhdHVyZUY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdG9wSWQgPSBkYXRhLnN0b3BJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkIG5ldyB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRhdGEgaW4gdGhlIGJyb3dzZXIgdG8gZ2V0IGhlIG5ld2x5IHNhYmVkIHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgb2YgZGF0ZSBzZW50IGJhY2sgdG8gY2xpZW50IDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAodGhpcy53ZWF0aGVyMS5ob3VyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igc2F2aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucHV0V2VhdGhlckFQSSh3ZWF0aGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdG9wSWQgPSBkYXRhLnN0b3BJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRlZCB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBlZGl0aW5nIHdlYXRoZXIgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUgdW5zdWJzY3JpYmUgd2VhdGhlciBjb21wb25lbnRcIik7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4uL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdlYXRoZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhvdXI/OiBEYXRlO1xuICAgIHRlbXBDPzogbnVtYmVyO1xuICAgIHN1bW1hcnk/OiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVGPzogbnVtYmVyO1xuICAgIHN0b3BJZD86IG51bWJlcjtcbiAgICBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYXRoZXIgaW1wbGVtZW50cyBJV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaG91cj86IERhdGUsXG4gICAgICAgIHB1YmxpYyB0ZW1wQz86IG51bWJlcixcbiAgICAgICAgcHVibGljIHN1bW1hcnk/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0ZW1wZXJhdHVyZUY/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdG9wSWQ/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBjb25zdHJhaW50cz86IENvbnN0cmFpbnRbXSkgeyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPnt7dGl0cmVXZWF0aGVyfX08L2gxPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2hvd1dlYXRoZXJGb3JtKClcXFwiPkVucmVnaXN0cmVyIFRlbXDDqXJhdHVyZTwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd0Zvcm1cXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8d2VhdGhlci1mb3JtIFt3ZWF0aGVyVG9TYXZlXT1cXFwid2VhdGhlcjFcXFwiIChuZXdXZWF0aGVyKT1cXFwicG9zdFdlYXRoZXIoJGV2ZW50KVxcXCIgKGVkV2VhdGhlcik9XFxcImVkaXRXZWF0aGVyKCRldmVudClcXFwiIFttb2RlRWRpdF09XFxcImVkaXRGb3JtXFxcIj48L3dlYXRoZXItZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+Tm9tPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhldXJlIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXDDqXJhdHVyZSDCsEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U29tbWFpcmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcMOpcmF0dXJlIMKwRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdXBwcmltZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+w4lkaXRlcjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj4gU3VwcHJpbWVyPC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29FZGl0KHdlYXRoZXIpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPiDDiWRpdGVyPC9pPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlPjwvZGVsZXRlPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRm9ybUNvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpIHdlYXRoZXJUb1NhdmU6IFdlYXRoZXI7XHJcbiAgICBAT3V0cHV0KCkgbmV3V2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQE91dHB1dCgpIGVkV2VhdGhlcjogRXZlbnRFbWl0dGVyPFdlYXRoZXI+O1xyXG4gICAgQElucHV0KCkgbW9kZUVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIG9uRWRpdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBkZWNpbWFsczogbnVtYmVyO1xyXG4gICAgcHVibGljIGF1dG9Db3JyZWN0OiBib29sZWFuO1xyXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xyXG4gICAgLy9mb3JtMTogTmdGb3JtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25FZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5ld1dlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgdGhpcy5lZFdlYXRoZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdlYXRoZXI+KCk7XHJcbiAgICAgICAgLy90aGlzLmZvcm0xID0gbmV3IE5nRm9ybShbXSwgW10pO1xyXG5cclxuICAgICAgICAvLyBudW1iZXIgaW5wdXRcclxuICAgICAgICB0aGlzLmRlY2ltYWxzID0gMDtcclxuICAgICAgICB0aGlzLmF1dG9Db3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9ICduMCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gdmV1dCBzb3VtZXR0cmUgb24gZWRpdC5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW52b3llciBsZSB3ZWF0aGVyZm9ybSBvYmplY3QgYXUgd2VhdGhlciBjb21wb25lbnRcclxuICAgIG9uU3VibWl0KHdlYXRoZXJGb3JtOiBOZ0Zvcm0peyAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWxpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRXZWF0aGVyLmVtaXQodGhpcy53ZWF0aGVyVG9TYXZlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBjcmVlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gZmFsc2U7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3V2VhdGhlci5lbWl0KHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBlZGl0ZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMT5Gb3JtIFRlbXDDqXJhdHVyZTwvaDE+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCh3ZWF0aGVyRm9ybSlcXFwiICN3ZWF0aGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5vbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUubmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5IZXVyZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0aW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaG91clxcXCIgbmFtZT1cXFwiaG91clxcXCIgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUuaG91clxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRlbXBDXFxcIj5UZW1ww6lyYXR1cmUgwrBDPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGtlbmRvLW51bWVyaWN0ZXh0Ym94IGlkPVxcXCJ0ZW1wQ1xcXCIgbmFtZT1cXFwidGVtcENcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjBcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiIFtyZXN0cmljdERlY2ltYWxzXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtkZWNpbWFsc109XFxcImRlY2ltYWxzXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS50ZW1wQ1xcXCIgW3N0ZXBdPVxcXCIxXFxcIiBbbWluXT1cXFwiMVxcXCIgW21heF09XFxcIjQ1XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW2F1dG9Db3JyZWN0XT1cXFwiYXV0b0NvcnJlY3RcXFwiIFtmb3JtYXRdPVxcXCJmb3JtYXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLW51bWVyaWN0ZXh0Ym94PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VtbWFyeVxcXCI+U29tbWFpcmU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1bW1hcnlcXFwiIG5hbWU9XFxcInN1bW1hcnlcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnN1bW1hcnlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZCB8fCBtb2RlRWRpdFxcXCI+U291bWV0dHJlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwibW9kZUVkaXRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIXdlYXRoZXJGb3JtLnZhbGlkXFxcIj7DiWRpdGVyPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhc3VibWl0dGVkXFxcIj5cXHJcXG4gICAgICAgIDxoMj5Wb3VzIGF2ZXogc291bWlzIDo8L2gyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+Tm9tPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5IZXVyZSBBTS9QTTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLmhvdXIgfCBmbUhvdXJMb2NhbH19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXDDqXJhdHVyZSDCsEM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlNvbW1haXJlPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuc3VtbWFyeX19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlRlbXDDqXJhdHVyZSDCsEY8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wZXJhdHVyZUZ9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xcclxcbn1cXHJcXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgI2E5NDQ0MjsgLyogcmVkICovXFxyXFxufVxcclxcblxcclxcbi5rLWludmFsaWQge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiNkYXRlLCAjZGF0ZSA+IHRhYmxlLCAjZGF0YSA+IGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxlLCBrZW5kby1jYWxlbmRhci1tb250aHZpZXcsIHRhYmxlLmstY2FsZW5kYXItd2Vla2RheXN7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn0qL1xcclxcblxcclxcbi8qLmstY2FsZW5kYXIuay1jYWxlbmRhci1pbmZpbml0ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybS1ncm91cCBkaXYuay1jb250ZW50Lmstc2Nyb2xsYWJsZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmtlbmRvLWNhbGVuZGFyLW1vbnRodmlldy5rLWNhbGVuZGFyLW1vbnRodmlld3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcmRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc3ViMjogYW55O1xyXG4gICAgd2VhdGhlcjogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBtZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VEZXRhaWxzID0gXCJcIjsgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdICE9IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdLnBhdGggPT0gXCJkZXRhaWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN1YjIgPSB0aGlzLl9yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50VXJsID0gZXZlbnQudXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWdtZW50VXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50VXJsWzNdICE9IG51bGwgJiYgdHlwZW9mIChzZWdtZW50VXJsWzNdKSAhPSAndW5kZWZpbmVkJyAmJiBzZWdtZW50VXJsWzNdID09ICdkZXRhaWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnRVcmxbNF0gIT0gbnVsbCAmJiB0eXBlb2YgKHNlZ21lbnRVcmxbNF0pICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZFdlYXRoZXIgPSArc2VnbWVudFVybFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdLnBhdGggPT0gXCJkZXRhaWxcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4gdXNlIHNuYXBzaG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZFdlYXRoZXIgPSBzbmFwc2hvdC51cmxbMV0ucGF0aDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRXZWF0aGVyICE9IG51bGwgJiYgdHlwZW9mIChpZFdlYXRoZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9ICtpZFdlYXRoZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckJ5ZElkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdWIgPSAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIGluIHBhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FjdGl2YXRlZFJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhIHJvdXRlIG4nZXN0IHBhcyBhY3RpdsOpZSwgbGEgcm91dGUgcGFyZW50ZSBlc3QgYWN0aXZlICh3ZWF0aGVyIGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZURldGFpbHMgPSBcIkF1Y3VucyBkw6l0YWlscyDDoCBhZmZpY2hlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWF0aGVyQnlkSWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGwgZ2V0RGV0YWlscyBtZXRob2QgaW4gdGhlIG5zZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgd2VhdGhlciBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnQgZ2V0IGRldGFpbHMgYnkgaWQgOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bnN1YlwiKTtcclxuICAgICAgICBpZiAodGhpcy5zdWIgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5zdWIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN1YjIgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5zdWIyKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnN1YjIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+e3ttZXNzYWdlRGV0YWlsc319PC9oMj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ3ZWF0aGVyXFxcIj5cXHJcXG4gICAgPGgxPkTDqXRhaWxzIFRlbXDDqXJhdHVyZTwvaDE+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+Tm9tPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkhldXJlIEFNL1BNPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXDDqXJhdHVyZSDCsEM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+U29tbWFpcmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGVtcMOpcmF0dXJlIMKwRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPldlYXRoZXJzPC9oMj5cXHJcXG5cXHJcXG48aDM+Q2hvb3NlIGEgd2VhdGhlciB0byBnZXQgd2VhdGhlciBjb25zdHJhaW50cyBmcm9tIDogPC9oMz5cXHJcXG5cXHJcXG48dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW3dlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/Lm5hbWV9fTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50W107XHJcbiAgICBwdWJsaWMgdGVtcENvbnN0OiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2U6IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRlbXBDb25zdCA9IFsnVmVudCcsICdSYWZhbGUnLCAnSHVtaWRpdMOpJywgJ1Byw6lzZW50aSddOyBcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnN0cmFpbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb25zdHJhaW50c0FQSSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHRoZSBjb25zdHJhaW50cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLnN0YXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uc3RhdHMucHVzaCh0aGlzLmNvbnN0cmFpbnRzW2ldLndpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmd1c3QsIHRoaXMuY29uc3RyYWludHNbaV0uaHVtaWRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmZlZWxzTGlrZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2ZXVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2VhdGhlckNvbnN0cmFpbnRzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHNBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS93ZWF0aGVyLycgKyBpZCArICcvY29uc3RyYWludHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwOiBSZXNwb25zZSkgPT4gPElDb25zdHJhaW50W10+cmVzcC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlN0YXRpc3RpcXVlcyBwb3VyIGxhIHRlbXDDqXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIElEXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFZlbnQga20vaFxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBSYWZhbGUga20vaFxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBIdW1pZGl0w6kgJVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBMZXZlciBTb2xlaWwgQU1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ291Y2hlciBTb2xlaWwgUE1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ2xhcnTDqVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBQcsOpc2VudGkgwrBDXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFRlbXDDqXJhdHVyZVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY29uc3RyYWludCBvZiBjb25zdHJhaW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LmlkfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py53aW5kfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5ndXN0fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5odW1pZGl0eX19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uc3VuUmlzaW5nIHwgZm1UcmlwRGF0ZX19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uc3VuU2V0IHwgZm1UcmlwRGF0ZX19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uY2xlYXJ9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LmZlZWxzTGlrZX19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxwPlRlbXAgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIubmFtZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8cD5IZXVyZSA6IHt7Y29uc3RyYWludD8ud2VhdGhlci5ob3VyIHwgZm1Ib3VyTG9jYWwgfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwPlRlbXAgwrBDIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLnRlbXBDfX08L3A+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cXHJcXG48a2VuZG8tY2hhcnQgW2NhdGVnb3J5QXhpc109XFxcInsgY2F0ZWdvcmllczogdGVtcENvbnN0IH1cXFwiPlxcclxcblxcclxcbiAgICA8a2VuZG8tY2hhcnQtdmFsdWUtYXhpcz5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC12YWx1ZS1heGlzLWl0ZW0gW3RpdGxlXT1cXFwieyB0ZXh0OiAnU3RhdGlzdGlxdWVzJyB9XFxcIj5cXHJcXG4gICAgICAgIDwva2VuZG8tY2hhcnQtdmFsdWUtYXhpcy1pdGVtPlxcclxcbiAgICA8L2tlbmRvLWNoYXJ0LXZhbHVlLWF4aXM+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC10aXRsZSB0ZXh0PVxcXCJTdGF0aXN0aXF1ZXMgVGVtcMOpcmF0dXJlIC8gQ29udHJhaW50ZVxcXCIgYmFja2dyb3VuZD1cXFwiI2UzZTNlM1xcXCIgZm9udD1cXFwiMTlwdCBzYW5zLXNlcmlmXFxcIj48L2tlbmRvLWNoYXJ0LXRpdGxlPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtbGVnZW5kIHBvc2l0aW9uPVxcXCJ0b3BcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L2tlbmRvLWNoYXJ0LWxlZ2VuZD5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXRvb2x0aXAgZm9ybWF0PVxcXCJ7MH1cXFwiIHBhZGRpbmc9XFxcIjFcXFwiICBbc2hhcmVkXT1cXFwidHJ1ZVxcXCI+PC9rZW5kby1jaGFydC10b29sdGlwPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtYXJlYSBiYWNrZ3JvdW5kPVxcXCIjZjdmN2ZhXFxcIiBbbWFyZ2luXT1cXFwiMzBcXFwiPlxcclxcbiAgICA8L2tlbmRvLWNoYXJ0LWFyZWE+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC1zZXJpZXM+XFxyXFxuICAgICAgICA8a2VuZG8tY2hhcnQtc2VyaWVzLWl0ZW0gKm5nRm9yPVxcXCJsZXQgY29uc3RyYWludCBvZiBjb25zdHJhaW50c1xcXCIgdHlwZT1cXFwiY29sdW1uXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVxcXCJjb25zdHJhaW50LnN0YXRzXFxcIiBbbmFtZV09XFxcImNvbnN0cmFpbnQuaWRcXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC1zZXJpZXMtaXRlbT5cXHJcXG4gICAgPC9rZW5kby1jaGFydC1zZXJpZXM+XFxyXFxuPC9rZW5kby1jaGFydD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImdvQmFjaygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVxcXCI+QmFjazwvYnV0dG9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHJpcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgdGl0cmVUcmlwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2hvd1BvcFVwSWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVxVHJpcHM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2VhcmNoTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy50aXRyZVRyaXAgPSBcIkxlcyBGb3JmYWl0cyBWb3lhZ2VzXCI7XHJcbiAgICAgICAgdGhpcy50cmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXBJZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVxVHJpcHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBcIkNoZXJjaGVyXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVHJpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBob21lKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvaG9tZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrUmF0aW5nKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSAhdGhpcy5zaG93UG9wVXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVHJpcElkKGlucHV0OiBhbnkpIHtcclxuICAgICAgICB2YXIgaWQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoaWQgPT0gXCJcIiB8fCBpZCA9PSBudWxsIHx8IHR5cGVvZihpZCkgPT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oK2lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBcIkludmFsaWRlXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzIHVuIG5vbWJyZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBcIk9rXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2sgZXN0IHVuIG5vbWJyZVwiKTtcclxuICAgICAgICAgICAgdmFyIGlkVG9TZWFyY2ggPSAraWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkVG9TZWFyY2gpO1xyXG4gICAgICAgICAgICB0aGlzLl90cmlwU2VydmljZS5nZXRUcmlwQnlJZEFQSShpZFRvU2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWRpcmVjdCB0byBkZXRhaWwgb2YgdGhpcyBwYXJ0aWN1bGFyIHRyaXAgYnkgaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL1wiICsgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmNmI1OFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiSW1wb3NzaWJsZSBkZSB0cm91dmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwIGJ5IGlkIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUcmlwcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2ggdHJpcHNcIik7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlSWRQb3BVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcElkID0gIXRoaXMuc2hvd1BvcFVwSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGdldCBtZXRob3Mgc3VyIHNlcnZpY2UuXHJcbiAgICBnZXRBbGxUcmlwcygpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5yZXFUcmlwcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEFsbFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcVRyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcVRyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcCh0cmlwOiBUcmlwKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdHJpcFNlcnZpY2UuZGVsZXRlVHJpcEJ5QWRtaW4odHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1cHByaW1lciBsZSB0cmlwIGPDtHTDqSBjbGllbnQgcG91ciBhY3R1YWxpc2VyIGxhIHZ1ZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzLnNwbGljZSh0aGlzLnRyaXBzLmluZGV4T2YodHJpcCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0aW5nIGEgdHJpcCBieSBTdXBlclVzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRyeWluZyBkZWxldGUgdHJpcCBieSBTdXBlclVzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi90cmlwJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFRyaXAgPSAnYXBpL3RyaXAnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIEFsbCB0cmlwcyBvYmplY3RzLlxyXG4gICAgZ2V0QWxsVHJpcHNBUEkoKTogT2JzZXJ2YWJsZTxJVHJpcFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUICA6IGdldCB0cmlwIGJ5LlxyXG4gICAgZ2V0VHJpcEJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVRyaXA+IHtcclxuXHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBCZXN0IHRyaXAgb2JqZWN0cy5cclxuICAgIGdldEJlc3RUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyAnL2Jlc3RUcmlwcycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKSAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmlwQnlBZG1pbih0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRyaXAuaWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZGVsZXRpbmcgYSB0cmlwIGRvbmUgYnkgU3VwZXJVc2Vyc1wiKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRpbmcgdHJpcCBieSBTdXBlclVzZXJzXCIpKVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlcj5cXHJcXG4gICAgPGgxPkJpZW52ZW51ZSA8L2gxPlxcclxcbiAgICA8aDI+IHt7dXNlck5hbWV9fTwvaDI+XFxyXFxuPC9oZWFkZXI+XFxyXFxuPGEgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWluZm8gYWN0aXZlXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzL3BlcnNvJ11cXFwiPk1lcyB0cmlwczwvYT5cXHJcXG5cXHJcXG48aDI+e3t0aXRyZVRyaXB9fTwvaDI+XFxyXFxuPGEgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWydiZXN0J11cXFwiPk1laWxsZXVycyBUcmlwczwvYT5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuPGgzPkRpc3BvbmlibGVzIHByw6lzZW50ZW1lbnQ8L2gzPlxcclxcblxcclxcbjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGVmYXVsdCBjb2wtbWQtMTIgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWxlZnQgbmF2YmFyLWhlYWRlciBjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLWxlZnRcXFwiIHJvbGU9XFxcIlNlYXJjaFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgI2lucHV0SWRTZWFyY2ggY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7c2VhcmNoTWVzc2FnZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiAjYW5jaG9yIChjbGljayk9XFxcIm9uVG9nZ2xlSWRQb3BVcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtaW5mb1xcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInNlYXJjaFRyaXBJZChpbnB1dElkU2VhcmNoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+R28hPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8a2VuZG8tcG9wdXAgY2xhc3M9XFxcInBvcFVwQ29udGVudFxcXCIgW2FuY2hvcl09XFxcImFuY2hvclxcXCIgKGFuY2hvclZpZXdwb3J0TGVhdmUpPVxcXCJzaG93ID0gZmFsc2VcXFwiICpuZ0lmPVxcXCJzaG93UG9wVXBJZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBSZWNoZXJjaGVyIHBhciBJZCBkZSB0cmlwLlxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLXBvcHVwPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLXJpZ2h0IGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwicmVmcmVzaFRyaXBzKClcXFwiIGtlbmRvQnV0dG9uIFtwcmltYXJ5XT1cXFwidHJ1ZVxcXCIgW2ljb25dPVxcXCIncmVmcmVzaCdcXFwiIGNsYXNzPVxcXCJyZWZyZXNoQnV0dG9uXFxcIj5BY3R1YWxpc2VyPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PiAgIFxcclxcbjwvbmF2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiBjb2wtc20tMTJcXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiPlxcclxcbiAgICA8aSAqbmdJZj1cXFwicmVxVHJpcHNcXFwiIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtNXhcXFwiPjwvaT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48bWFpbiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHRlbXBsYXRlICpuZ0lmPVxcXCIhdHJpcHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDxoMz5BdWN1bnMgVHJpcHM8L2gzPlxcclxcbiAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IHRyaXAgb2YgdHJpcHMgfCBwYWdpbmF0ZTogeyBpdGVtc1BlclBhZ2U6IDgsIGN1cnJlbnRQYWdlOiBwIH1cXFwiIGNsYXNzPVxcXCJpbmZvc1RyaXAgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJkZWxldGVUcmlwKHRyaXApXFxcIiBrZW5kb0J1dHRvbiBbcHJpbWFyeV09XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkZWxldGVUcmlwQnV0dG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICA8bGk+Tm9tIDoge3t0cmlwPy5uYW1lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5QYXlzIDoge3t0cmlwPy5jb3VudHJ5fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5Db250aW5lbnQgOiB7e3RyaXA/LmNvbnRpbmVudH19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgI2FuY2hvcj5cXHJcXG4gICAgICAgICAgICAgICAgUmF0aW5nIDogPHJhdGluZyBjbGFzcz1cXFwicmF0aW5nXFxcIiAqbmdJZj1cXFwidHJpcD8ucmF0aW5nXFxcIiBbcmF0aW5nXT0ndHJpcC5yYXRpbmcnIChyYXRpbmdDbGljayk9XFxcImNsaWNrUmF0aW5nKCRldmVudClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3JhdGluZz5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wb3B1cCBbYW5jaG9yXT1cXFwiYW5jaG9yXFxcIiBjbGFzcz1cXFwicG9wVXBDb250ZW50XFxcIiAqbmdJZj1cXFwic2hvd1BvcFVwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgUXVvdMOpIDoge3t0cmlwPy5yYXRpbmd9fVxcclxcbiAgICAgICAgICAgIDwva2VuZG8tcG9wdXA+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPHA+RGF0ZSBkZSBEw6lwYXJ0IDoge3t0cmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9wPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiW3RyaXAuaWRdXFxcIj5Wb2lyIFRyaXA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxwYWdpbmF0aW9uLWNvbnRyb2xzIChwYWdlQ2hhbmdlKT1cXFwicCA9ICRldmVudFxcXCI+PC9wYWdpbmF0aW9uLWNvbnRyb2xzPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC9tYWluPlxcclxcblxcclxcbjxmb290ZXI+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImhvbWUoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWhvbWVcXFwiPjwvaT4gQWNjdWVpbDwvYT5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbjwvZm9vdGVyPlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxJSAwIDElIDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBoMSwgaGVhZGVyID4gaDJ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9zVHJpcHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6YXp1cmU7XFxyXFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgPiB1bHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXA6aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNWRlZyk7XFxyXFxufVxcclxcbi5pbmZvc1RyaXA6aG92ZXIsIHNlY3Rpb257XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbntcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5wYWdpbmF0aW9uLWNvbnRyb2xze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDElIDAgMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwQ29udGVudHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzc4Nzg3ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwxNDQsMjU1LC4zKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMSwgNSwgNSwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVUcmlwQnV0dG9ue1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaEJ1dHRvbntcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcC90cmlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHcm91cERlc2NyaXB0b3IsIHByb2Nlc3MsIFNvcnREZXNjcmlwdG9yIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnknO1xyXG5pbXBvcnQge1xuICAgIEdyaWRDb21wb25lbnQsXG4gICAgR3JpZERhdGFSZXN1bHQsXG4gICAgUGFnZUNoYW5nZUV2ZW50XG59IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jlc3QtdHJpcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwYmVzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwYmVzdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmVzdFRyaXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGdyaWRWaWV3OiBHcmlkRGF0YVJlc3VsdDtcclxuICAgIHB1YmxpYyBiZXN0VHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHNraXA6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1RyaXBzOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdGxlQmVzdFRyaXBzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGlkZGVuQ29sdW1uczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgY29sdW1uczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGF0YTogT2JqZWN0W107XHJcblxyXG4gICAgLy8gcGFnaW5nIGluZm9zXHJcbiAgICBwdWJsaWMgYnV0dG9uQ291bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpbmZvOiBib29sZWFuO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwYWdlU2l6ZXM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJldmlvdXNOZXh0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5iZXN0VHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gNTtcclxuICAgICAgICB0aGlzLnNraXAgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcImlkXCJdO1xyXG4gICAgICAgIHRoaXMuaXNUcmlwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGl0bGVCZXN0VHJpcHMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ291bnQgPSA1O1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJudW1lcmljXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNOZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcm91dGVyLnVybCA9PSBcIi90cmlwcy9iZXN0XCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIHRoZSByb3V0aW5nIHRvIGFjY2VzcyBiZXN0IHRyaXBzIGNvbXBvbmVudCBpbiBwYXJlbnQgY29tcG9uZW50IHRyaXBzLlwiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZUJlc3RUcmlwcyA9IFwiQ29uc3VsdGVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QmVzdFRyaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2UoZXZlbnQ6IFBhZ2VDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNraXAgPSBldmVudC5za2lwO1xuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkVmlldyA9IHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5iZXN0VHJpcHMuc2xpY2UodGhpcy5za2lwLCB0aGlzLnNraXAgKyB0aGlzLnBhZ2VTaXplKSxcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMuYmVzdFRyaXBzLmxlbmd0aFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMubGVuZ3RoID0gMDtcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbHVtbihmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucy5wdXNoKGZpZWxkKTtcbiAgICB9XHJcblxyXG4gICAgb25WaWV3VHJpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RyaXBzID0gIXRoaXMuaXNUcmlwcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJlc3RUcmlwcygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwU2VydmljZS5nZXRCZXN0VHJpcHNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlc3RUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZ2V0dGluZyBiZXN0IHRyaXBzIDogXCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGJlc3QgdHJpcHMgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPjxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1saW5rXFxcIiAoY2xpY2spPVxcXCJvblZpZXdUcmlwcygpXFxcIj57e3RpdGxlQmVzdFRyaXBzfX08L2E+PC9oMT5cXHJcXG5cXHJcXG48IS0tIGJlc3QgdHJpcHMgZ3JpZCAtLT5cXHJcXG48c2VjdGlvbiAqbmdJZj1cXFwiaXNUcmlwc1xcXCI+XFxyXFxuICAgIDxidXR0b24ga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBbaWNvbl09XFxcIidyZWZyZXNoJ1xcXCIgKGNsaWNrKT1cXFwicmVzdG9yZUNvbHVtbnMoKVxcXCI+UmVzdGF1cmVyPC9idXR0b24+XFxyXFxuICAgIDxrZW5kby1ncmlkIFtkYXRhXT1cXFwiZ3JpZFZpZXdcXFwiIFtwYWdlU2l6ZV09XFxcInBhZ2VTaXplXFxcIiBbc2tpcF09XFxcInNraXBcXFwiIChwYWdlQ2hhbmdlKT1cXFwicGFnZUNoYW5nZSgkZXZlbnQpXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgW3NlbGVjdGFibGVdPVxcXCJ0cnVlXFxcIiBbaGVpZ2h0XT1cXFwiMzUwXFxcIiBbcGFnZWFibGVdPVxcXCJ7IGJ1dHRvbkNvdW50OiBidXR0b25Db3VudCwgaW5mbzogaW5mbywgXFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsIHBhZ2VTaXplczogcGFnZVNpemVzLCBwcmV2aW91c05leHQ6IHByZXZpb3VzTmV4dH1cXFwiIFtzY3JvbGxhYmxlXT1cXFwiJ25vbmUnXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XFxcImNvbHVtbnNcXFwiIGxldC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJ7e2NvbHVtbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiaGlkZGVuQ29sdW1ucy5pbmRleE9mKGNvbHVtbikgPT09IC0xXFxcIiB0aXRsZT1cXFwiSURcXFwiIHdpZHRoPVxcXCIyMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0dyaWRIZWFkZXJUZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e2RhdGFJdGVtLmZpZWxkfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiaGlkZUNvbHVtbihkYXRhSXRlbS5maWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJrLWJ1dHRvbiBrLXByaW1hcnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJmbG9hdDogcmlnaHQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWRlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcIm5hbWVcXFwiIHRpdGxlPVxcXCJOb21cXFwiIHdpZHRoPVxcXCIzMFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcImxlYXZpbmdcXFwiIHRpdGxlPVxcXCJEw6lwYXJ0XFxcIiB3aWR0aD1cXFwiNzBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJjb3VudHJ5XFxcIiB0aXRsZT1cXFwiUGF5c1xcXCIgd2lkdGg9XFxcIjYwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwiY29udGluZW50XFxcIiB0aXRsZT1cXFwiQ29udGluZW50XFxcIiB3aWR0aD1cXFwiNjBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcInJhdGluZ1xcXCIgdGl0bGU9XFxcIlJhdGluZ1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBbaGVhZGVyU3R5bGVdPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiAnI2M1YjM1OCcsJ2NvbG9yJzogJyNmZmYnLCdsaW5lLWhlaWdodCc6ICcxZW0nfVxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIGtlbmRvR3JpZERldGFpbFRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiAqbmdJZj1cXFwiZGF0YUl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkTDqXRhaWxzOjwvc3Ryb25nPiBJdGVtPC9wPlxcclxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8a2VuZG8tZ3JpZC1tZXNzYWdlcyBncm91cFBhbmVsRW1wdHk9XFxcIkRyYWcgaGVyZSB0byBncm91cC5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1JlY29yZHM9XFxcIlRoZXJlIG5vIGl0ZW1zIHRvIGRpc3BsYXkuXFxcIj5cXHJcXG4gICAgICAgIDwva2VuZG8tZ3JpZC1tZXNzYWdlcz5cXHJcXG48L2tlbmRvLWdyaWQ+XFxyXFxuPC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwYmVzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaXNCb3VnaHQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdXNlclRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgaXNCb3VnaHRNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcGRldGFpbDogVHJpcERldGFpbFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodE1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyaXBCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRpbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcHNGb3JVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yICk7ICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmlwc0ZvclVzZXIoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRVc2VyVHJpcEFQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQWRkVHJpcCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgZm9yIHVzZXIgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWRkVHJpcCgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudXNlclRyaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJUcmlwc1tpXS5pZCA9PSB0aGlzLnNlbGVjdGVkVHJpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0TWVzc2FnZSA9IFwiVm91cyBhdmV6IGTDqWrDoCBhY2hldMOpIGNlIHRyaXBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXlUcmlwKHRyaXA6IFRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLnBvc3RUcmlwQVBJKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgY3JlYXRpbmcgdHJpcCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwcy9wZXJzb1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0cmlwIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpcHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgbGVhdmluZz86IERhdGU7XHJcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgY29udGluZW50Pzogc3RyaW5nO1xyXG4gICAgcmF0aW5nPzogbnVtYmVyO1xyXG4gICAgc3RvcHM/OiBTdG9wW107XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXAgaW1wbGVtZW50cyBJVHJpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGVhdmluZz86IERhdGUsXHJcbiAgICAgICAgcHVibGljIGNvdW50cnk/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGNvbnRpbmVudD86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmF0aW5nPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wcz86IFN0b3BbXSxcclxuICAgICAgICBwdWJsaWMgdmlzaWJsZT86IGJvb2xlYW4pIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+RMOpdGFpbHMgVHJpcDwvaDI+XFxyXFxuXFxyXFxuPHVsICpuZ0lmPVxcXCJzZWxlY3RlZFRyaXBcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtYWRkcmVzcy1ib29rXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmlkfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5uYW1lfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3VyZ2xhc3NcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdGVsXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvdW50cnl9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhLWhvbWVcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY29udGluZW50fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1maXJzdC1vcmRlclxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5yYXRpbmd9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYnV5VHJpcChzZWxlY3RlZFRyaXApXFxcIiBbZGlzYWJsZWRdPVxcXCJpc0JvdWdodFxcXCI+QWpvdXRlciDDoCBtZXMgdHJpcHM8L2J1dHRvbj48L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAge3tpc0JvdWdodE1lc3NhZ2V9fVxcclxcbiAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiaXNCb3VnaHRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWydzdG9wJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgYnRuLW1kXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gQWpvdXRlciBTdG9wczwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2g0PiAgICBcXHJcXG4gICAgPC9saT4gICBcXHJcXG48L3VsPlxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgVmlzdWFsaXNlciBTdG9wc1xcclxcbiAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnZWRpdCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2g0PlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XFxyXFxuXFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Plxcclxcblxcclxcbjxmb290ZXIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5SZXRvdXI8L2J1dHRvbj5cXHJcXG48L2Zvb3Rlcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFue1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gICAgcHVibGljIHVzZXJNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgb2JqZWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIGNvbnN0YW50IGZvciBzd2lwZSBhY3Rpb246IGxlZnQgb3IgcmlnaHRcclxuICAgIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3Rpb24gdHJpZ2dlcmVkIHdoZW4gdXNlciBzd2lwZXNcclxuICAgIHN3aXBlKGN1cnJlbnRJbmRleDogbnVtYmVyLCBhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xyXG4gICAgICAgIC8vIG91dCBvZiByYW5nZVxyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiB0aGlzLm1lc1RyaXBzLmxlbmd0aCB8fCBjdXJyZW50SW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyBzd2lwZSByaWdodCwgbmV4dCBhdmF0YXJcclxuICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBjdXJyZW50SW5kZXggPT09IHRoaXMubWVzVHJpcHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gaXNMYXN0ID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzd2lwZSBsZWZ0LCBwcmV2aW91cyBhdmF0YXJcclxuICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlyc3QgPSBjdXJyZW50SW5kZXggPT09IDA7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGlzRmlyc3QgPyB0aGlzLm1lc1RyaXBzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG9nZ2xlIGF2YXRhciB2aXNpYmlsaXR5XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcy5mb3JFYWNoKCh4LCBpKSA9PiB4LnZpc2libGUgPSAoaSA9PT0gbmV4dEluZGV4KSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdHJpcHMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VXNlclRyaXBzKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBEZXRhaWxTZXJ2aWNlLmdldFVzZXJUcmlwQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzVHJpcHMuZm9yRWFjaCgoeCwgaSkgPT4gaSA+IDAgPyB4LnZpc2libGUgPSBmYWxzZSA6IHgudmlzaWJsZSA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgZ2V0IHlvdXIgdHJpcHMgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcHMoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy90cmlwcycsIGlkLCAnc3RvcCddKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmlwKHRyaXA6IFRyaXApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IHRyaXA7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJ1c2VydHJpcFwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSB3ZWF0aGVyIGNsaWVudCBzaWRlIDpcclxuICAgICAgICAgICAgdGhpcy5tZXNUcmlwcy5zcGxpY2UodGhpcy5tZXNUcmlwcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUcmlwKSwgMSk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbGlzdCBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJUcmlwcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+e3t1c2VyTWVzc2FnZX19PC9oMj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbdHJpcFRvRGVsZXRlXT1cXFwic2VsZWN0ZWRUcmlwXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxoMT5NZXMgVHJpcHM8L2gxPlxcclxcbjxoMj5Td2lwZSA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9pPiBPdSA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctcmlnaHRcXFwiPjwvaT48L2gyPlxcclxcblxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgdHJpcCBvZiBtZXNUcmlwczsgbGV0IGlkeD1pbmRleFxcXCIgY2xhc3M9XFxcImNvbC1tZC0xMiBzd2lwZS1ib3hcXFwiIFxcclxcbiAgICAgKHN3aXBlbGVmdCk9XFxcInN3aXBlKGlkeCwgJGV2ZW50LnR5cGUpXFxcIiAoc3dpcGVyaWdodCk9XFxcInN3aXBlKGlkeCwgJGV2ZW50LnR5cGUpXFxcIlxcclxcbiAgICAgW2NsYXNzLnZpc2libGVdPVxcXCJ0cmlwLnZpc2libGVcXFwiIFtjbGFzcy5oaWRkZW5dPVxcXCIhdHJpcC52aXNpYmxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5UcmlwPC9oND5cXHJcXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPkNvbnRpZW50IHt7dHJpcD8uc3RvcHMubGVuZ3RofX0gc3RvcHM8L2g1PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiY2FyZC1pbWctdG9wIGZhIGZhLXBpY3R1cmUtbyBmYS0yeFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+IyBSw6lzZXJ2YXRpb24gOiB7e3RyaXA/LmlkfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Tm9tIDoge3t0cmlwPy5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+RGF0ZSBkZSBkw6lwYXJ0IDoge3t0cmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Db250aW5lbnQgOiB7e3RyaXA/LmNvbnRpbmVudH19PC9wPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXJCdXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtbGluayBidG4gYnRuLW1kIGJ0bi1zZWNvbmRhcnkgYWN0aXZlIGNvbC1tZC02IHVzZXJBY3Rpb25zXFxcIiAoY2xpY2spPVxcXCJkZWxldGVUcmlwKHRyaXApXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiPjwvaT4gU3VwcHJpbWVyPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1saW5rIGJ0biBidG4tbWQgYnRuLWluZm8gYWN0aXZlIGNvbC1tZC02IHVzZXJBY3Rpb25zXFxcIiAoY2xpY2spPVxcXCJhZGRTdG9wcyh0cmlwLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT4gQWpvdXRlciBTdG9wczwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc3RvcCBvZiB0cmlwPy5zdG9wczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpPlN0b3AgIyB7e2kgKyAxfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3N0b3A/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZCdhcnJpdsOpZSA6IHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZGUgZMOpcGFydCA6IHt7c3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlZpbGxlIDoge3tzdG9wPy5jaXR5fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5DdWlzaW5lIDoge3tzdG9wPy5jdWlzaW5lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5HdWlkZSA6IHt7c3RvcD8uZ3VpZGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlF1b3RlIDoge3tzdG9wPy5xdW90ZX19PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcbjxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJhY2tCdXR0b25cXFwiIChjbGljayk9XFxcImdvQmFjaygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gUmV0b3VyPC9hPlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwdXNlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmgxLGgyLGgzLGg0e1xcclxcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAxcHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxubGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlLWJveCA+IGRpdjpmaXJzdC1vZi10eXBlLCBkaXYgZGl2ID4gdWx7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZS1ib3ggPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgcGFkZGluZzogMS41JTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjk1KSA0MiUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDQyJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjk1KSkpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkpO1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjNDE4OWM3JywgR3JhZGllbnRUeXBlPTEgKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGRpdiA+IHVse1xcclxcbiAgICBtYXJnaW46IDElO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCg0NyUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykpKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VkZWRlZCcsIEdyYWRpZW50VHlwZT0xICk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5OmhvdmVye1xcclxcbiAgICBjb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZm9vdGVye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyQnV0dG9uc3tcXHJcXG4gICAgcGFkZGluZzogNSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tCdXR0b257XFxyXFxuICAgIG1hcmdpbjogMiUgMCAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckFjdGlvbnN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyQWN0aW9uczpmaXJzdC1jaGlsZHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGUtYm94IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmF5IGluc2V0O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmF5IGluc2V0O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSksIGNvbG9yLXN0b3AoMjglLCByZ2JhKDIyNiwyMjYsMjI2LDEpKSwgY29sb3Itc3RvcCg1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkpLCBjb2xvci1zdG9wKDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSksIGNvbG9yLXN0b3AoODUlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlMmUyZTInLCBlbmRDb2xvcnN0cj0nI2ZlZmVmZScsIEdyYWRpZW50VHlwZT0wICk7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcmF0aW5nLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XHJcbiAgICBAT3V0cHV0KCkgcmF0aW5nQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBwdWJsaWMgcmF0ZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGRpZmZSYXRlczogbnVtYmVyW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5kaWZmUmF0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpZmZSYXRlcy5wdXNoKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICB0aGlzLmdldFJhdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhdGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5yYXRpbmcgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmF0aW5nKTtcclxuICAgICAgICAgICAgdGhpcy5yYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0aGlzLnJhdGluZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhdGVzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRpZmZTdGFycyA9IHRoaXMuZGlmZlJhdGVzLmxlbmd0aCAtIHRoaXMucmF0ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmRpZmZSYXRlcy5sZW5ndGggPSBkaWZmU3RhcnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcclxuICAgICAgICB0aGlzLnJhdGluZ0NsaWNrLmVtaXQoe1xyXG4gICAgICAgICAgICByYXRpbmc6IHJhdGluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IChjbGljayk9XFxcIm9uQ2xpY2socmF0ZXMubGVuZ3RoKVxcXCI+XFxyXFxuICAgIDxzcGFuICpuZ0lmPVxcXCJyYXRlcyAmJiByYXRlcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHIgb2YgcmF0ZXNcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwiZGlmZlJhdGVzICYmIGRpZmZSYXRlcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHIgb2YgZGlmZlJhdGVzXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyLWVtcHR5IHN0YXItZW1wdHlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhdGluZy5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInNwYW4ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQbGFjZSBsZXMgw6l0b2lsZXMgw6AgZ2F1Y2hlIGR1IGNvbnRhaW5lciAqL1xcclxcbi5zdGFyLCAuc3Rhci1lbXB0eXtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9wLCBJU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0b3AuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3BDb21wb25lbnQge1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpc0NyZWF0ZUZvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHJpcElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFN0b3A6IFN0b3A7XHJcbiAgICBwdWJsaWMgZGVjaW1hbHM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtaW46IG51bWJlcjtcclxuICAgIHB1YmxpYyBtYXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhdXRvQ29ycmVjdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjdWlzaW5lczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcbiAgICBwdWJsaWMgc291cmNlQ3Vpc2luZTogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcbiAgICBwdWJsaWMgY3Vpc2luZTogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfTtcclxuICAgIHB1YmxpYyBndWlkZTogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfTtcclxuXHJcbiAgICBwdWJsaWMgZ3VpZGVzOiBBcnJheTx7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kZWNpbWFscyA9IDA7XHJcbiAgICAgICAgdGhpcy5taW4gPSAxO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMTA7XHJcbiAgICAgICAgdGhpcy5hdXRvQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AgPSBuZXcgU3RvcCgxLCBcIlBsYWdlXCIsIG5ldyBEYXRlKCksIG5ldyBEYXRlKCksIFwiTW9udHLDqWFsXCIsIHRoaXMuY3Vpc2luZSwgdGhpcy5ndWlkZSwgMCwgMCwgMCwgOCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGN1aXNpbmUgZHJvcGRvd24gXHJcbiAgICAgICAgdGhpcy5jdWlzaW5lID0geyB0ZXh0OiBcIkl0YWxpZW5uZVwiLCB2YWx1ZTogMiB9OyAgICAgIFxyXG4gICAgICAgIHRoaXMuY3Vpc2luZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvdXJjZUN1aXNpbmUgPSBbXTtcclxuICAgICAgICB0aGlzLnNvdXJjZUN1aXNpbmUucHVzaCh7IHRleHQ6IFwiSmFwb25haXNlXCIsIHZhbHVlOiAxIH0sIHsgdGV4dDogXCJJdGFsaWVubmVcIiwgdmFsdWU6IDIgfSwgeyB0ZXh0OiBcIlN1w6lkb2lzZVwiLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiUG9ydHVndWFpc2VcIiwgdmFsdWU6IDQgfSwgeyB0ZXh0OiBcIkFmcmljYWluZVwiLCB2YWx1ZTogNSB9LCB7IHRleHQ6IFwiQWxsZW1hbmRlXCIsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJCcml0YW5uaXF1ZVwiLCB2YWx1ZTogNyB9LCB7IHRleHQ6IFwiQW3DqXJpY2FpbmVcIiwgdmFsdWU6IDggfSwgeyB0ZXh0OiBcIlN1w6lkb2lzZVwiLCB2YWx1ZTogOSB9KTtcclxuXHJcbiAgICAgICAgLy8gZ3VpZGUgY29tYm9ib3hcclxuICAgICAgICB0aGlzLmd1aWRlID0geyB0ZXh0OiBcIkd1aWRlIEp1bmlvclwiLCB2YWx1ZTogMiB9O1xyXG4gICAgICAgIHRoaXMuZ3VpZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5ndWlkZXMucHVzaCh7IHRleHQ6IFwiR3VpZGUgTWljaGVsaW5cIiwgdmFsdWU6IDEgfSwgeyB0ZXh0OiBcIkd1aWRlIEp1bmlvclwiLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiR3VpZGUgU2VuaW9yXCIsIHZhbHVlOiAzIH0sIHsgdGV4dDogXCJHdWlkZSBQcml2w6lcIiwgdmFsdWU6IDQgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlcmluZyBjdWlzaW5lc1xyXG4gICAgICAgIHRoaXMuY3Vpc2luZXMgPSB0aGlzLnNvdXJjZUN1aXNpbmUuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHdlcmUgbm90IGluIC9zdG9wIHlldCwganN1dCBkaXNwbGF5IGEgbWVzc2FnZSBmb3IgdGhlIHVzZXJcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNyw6llciB1biBub3V2ZWF1IHN0b3AgcG91ciBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEdldCBwYXJlbnQgQWN0aXZhdGVkUm91dGUgb2YgdGhpcyByb3V0ZS5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpcElkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkIGR1IHBhcmVudCBwb3VyIHNhdXZlciBzdG9wIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmlsdGVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdWlzaW5lcyA9IHRoaXMuc291cmNlQ3Vpc2luZS5maWx0ZXIoKHMpID0+IHMudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoY3JlYXRlRm9ybTogTmdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AgPSA8SVN0b3A+Y3JlYXRlRm9ybS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbGlkKTtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9zdFN0b3BTZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BTZXJ2aWNlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BTZXJ2aWNlLnBvc3RTdG9wQnlJZEFQSSh0aGlzLnRyaXBJZCwgdGhpcy5zZWxlY3RlZFN0b3ApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBzYXZlZCBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5hcnJpdmFsID0gZGF0YS5hcnJpdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmxlYXZpbmcgPSBkYXRhLmxlYXZpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuY2l0eSA9IGRhdGEuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5jdWlzaW5lID0gZGF0YS5jdWlzaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmd1aWRlID0gZGF0YS5ndWlkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5xdW90ZSA9IGRhdGEucXVvdGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2FudCBzYXZlIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSAhdGhpcy5pc0NyZWF0ZUZvcm07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gZGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElTdG9wIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhcnJpdmFsOiBEYXRlO1xyXG4gICAgbGVhdmluZzogRGF0ZTtcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGN1aXNpbmU6IGFueTtcclxuICAgIGd1aWRlOiBhbnk7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgcXVvdGU6IG51bWJlcjtcclxuICAgIHNob3dQb3BVcDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3AgaW1wbGVtZW50cyBJU3RvcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXJyaXZhbDogRGF0ZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsZWF2aW5nOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNpdHk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjdWlzaW5lOiBhbnksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ3VpZGU6IGFueSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yZGVyOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgcXVvdGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcclxcbiAgICA8aDQ+e3ttZXNzYWdlfX08L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCIgKm5nSWY9XFxcImlzU2hvd0Zvcm1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGg0PjxzcGFuPjxhIFtyb3V0ZXJMaW5rXT1cXFwiJy4uL2VkaXQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tbGlua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpZ2h0YnVsYi1vXFxcIj48L2k+IFN1Z2dlc3Rpb25zPC9hPjwvc3Bhbj48L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkU3RvcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICA8Zm9ybSAjZm9ybUNyZWF0ZVN0b3A9XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9ybUNyZWF0ZVN0b3ApXFxcIiAqbmdJZj1cXFwiaXNDcmVhdGVGb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5Ob208L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5uYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY2l0eVxcXCI+VmlsbGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaXR5XFxcIiBpZD1cXFwiY2l0eVxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5jaXR5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhcnJpdmFsXFxcIj5EYXRlIEFycml2w6llPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwiYXJyaXZhbFxcXCIgaWQ9XFxcImFycml2YWxcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxlYXZpbmdcXFwiPkRhdGUgRMOpcGFydDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImxlYXZpbmdcXFwiIGlkPVxcXCJsZWF2aW5nXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY3Vpc2luZVxcXCI+Q3Vpc2luZTwvbGFiZWw+ICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3QgbmFtZT1cXFwiY3Vpc2luZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwYWRkaW5nOjBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImN1aXNpbmVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRGaWVsZF09XFxcIid0ZXh0J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZUZpZWxkXT1cXFwiJ3ZhbHVlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJjdWlzaW5lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbHRlcmFibGVdPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlckNoYW5nZSk9XFxcImhhbmRsZUZpbHRlcigkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVtcGxhdGVcXFwiPnt7IGRhdGFJdGVtLnZhbHVlIH19PC9zcGFuPiB7eyBkYXRhSXRlbS50ZXh0IH19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEhlYWRlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PkN1aXNpbmVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Rm9vdGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3tjdWlzaW5lcy5sZW5ndGh9fSB2YXJpw6l0w6lzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Tm9EYXRhVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+PHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPjxiciAvPjxiciAvPkF1Y3VuZXMgQ3Vpc2luZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ3VpZGVcXFwiPkd1aWRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY29tYm9ib3ggbmFtZT1cXFwiZ3VpZGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWdnZXN0XT1cXFwidHJ1ZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwYWRkaW5nOjBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XFxcIidlLmcuIEd1aWRlIFNlbmlvcidcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cXFwiZ3VpZGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGV4dEZpZWxkXT1cXFwiJ3RleHQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVGaWVsZF09XFxcIid2YWx1ZSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJndWlkZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Db21ib0JveEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVtcGxhdGVcXFwiPnt7IGRhdGFJdGVtLnZhbHVlIH19PC9zcGFuPiB7eyBkYXRhSXRlbS50ZXh0IH19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0NvbWJvQm94SGVhZGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+R3VpZGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvQ29tYm9Cb3hGb290ZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND57e2d1aWRlcy5sZW5ndGh9fSBkaXNwb25pYmxlczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdE5vRGF0YVRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PjxzcGFuIGNsYXNzPVxcXCJrLWljb24gay1pLXdhcm5pbmdcXFwiPjwvc3Bhbj48YnIgLz48YnIgLz5BdWN1bnMgZ3VpZGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWNvbWJvYm94PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicXVvdGVcXFwiPlF1b3RlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tbnVtZXJpY3RleHRib3ggY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgc3R5bGU9XFxcInBhZGRpbmc6MFxcXCIgW3Jlc3RyaWN0RGVjaW1hbHNdPVxcXCJ0cnVlXFxcIiBbZGVjaW1hbHNdPVxcXCJkZWNpbWFsc1xcXCIgW21pbl09XFxcIm1pblxcXCJcXHJcXG4gICAgICAgICAgICBbbWF4XT1cXFwibWF4XFxcIiBbc3Bpbm5lcnNdPVxcXCJ0cnVlXFxcIiBbZm9ybWF0XT1cXFwiJ24wJ1xcXCIgW3N0ZXBdPVxcXCIxXFxcIiBbYXV0b0NvcnJlY3RdPVxcXCJhdXRvQ29ycmVjdFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5xdW90ZVxcXCIgbmFtZT1cXFwicXVvdGVcXFwiIGlkPVxcXCJxdW90ZVxcXCIgcmVxdWlyZWQ+PC9rZW5kby1udW1lcmljdGV4dGJveD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1zdWNjZXNzIGFjdGl2ZVxcXCI+QWpvdXRlcjwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdG9wLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGVtcGxhdGV7IFxcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcXHJcXG4gICAgY29sb3I6ICNmZmY7IFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcclxcbiAgICB3aWR0aDogMThweDsgXFxyXFxuICAgIGhlaWdodDogMThweDsgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSA+IGg0IHsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcclxcbiAgICBwYWRkaW5nOiAwIDhweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4uL3N0b3Avc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wLWVkaXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIC8vIGFuaW1hdGlvbiBtZXRhZGF0YVxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1TdG9wJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xLCAxLjEpJ1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2UtaW4nKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9KSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzIwMG1zIDEwMG1zIGVhc2UtaW4nKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjAwbXMgMjAwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFN0b3BDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNBZG1pbjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0b2dnbGVUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gc2Nyb2xsdmlld1xyXG4gICAgcHVibGljIGl0ZW1zOiBhbnlbXTtcclxuICAgIHB1YmxpYyBhbmltYXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGVuZGxlc3M6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgICAvLyBhbmltYXRpb25zXHJcbiAgICBwdWJsaWMgc3RhdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBmbHlTdGF0ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcGRldGFpbDogVHJpcERldGFpbFNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UsIHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVGV4dCA9IFwiU2hvd1wiO1xyXG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IHRoaXMuX2xvZ2luU2VydmljZS5lc3RBZG1pbjtcclxuXHJcbiAgICAgICAgLy8gc2Nyb2xsdmlld1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyB0aXRsZTogJ05hdHVyZScsIHVybDogJ2h0dHA6Ly9iaXQubHkvMmNKall1QicgfSwgeyB0aXRsZTogJ0V4Y3Vyc2lvbicsIHVybDogJ2h0dHA6Ly9iaXQubHkvMmNUQk5hTCcgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ0HDqXJvbmF1dGlxdWUnLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjSmwzQ3gnIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbmRsZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gXCIyMDBweFwiO1xyXG5cclxuICAgICAgICAvLyBhbmltYXRpb25zXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgICAgdGhpcy5mbHlTdGF0ZSA9ICdpbic7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL1wiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgUE9QIFVQIE5PVCBXT1JLSU4/ISB0ZXN0IGluIGFub3RoZXIgcHJvamVjdFxyXG4gICAgb25Ub2dnbGVQb3BVcChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkVHJpcC5zdG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRyaXAuc3RvcHNbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzW2ldLnNob3dQb3BVcCA9ICF0aGlzLnNlbGVjdGVkVHJpcC5zdG9wc1tpXS5zaG93UG9wVXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSB0aGlzLnNob3dQb3BVcCA/IFwiSGlk0LVcIiA6IFwiU2hvd1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN0YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2FjdGl2ZScgPyAnaW5hY3RpdmUnIDogJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1TdG9wU3RhcnRlZCgkZXZlbnQpOiB2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbVN0b3BEb25lKCRldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcHNCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRpbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJhdGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgYWpvdXRlciB1bmUgdGVtZXByYXR1cmUgcG91ciBjZSBzdG9wXHJcbiAgICBham91dGVUZW1wKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi93ZWF0aGVycy9cIiArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGUgc3RvcCBieSBpdHMgaWRcclxuICAgIGRlbGV0ZVN0b3AoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWQ7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJzdG9wQWRtaW5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkaXNwbGF5IGxpc3QgYWZ0ZXIgZGVsZXRpbmcgYSBzdG9wLlxyXG4gICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZCh0aGlzLnNlbGVjdGVkVHJpcC5pZCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTIgZGVsZXRlQmxvY2tcXFwiPlxcclxcbiAgICA8ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcbjwvZGl2Plxcclxcblxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTkgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgPGxpPjxoMz5TdG9wczwvaDM+PC9saT5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2Ygc2VsZWN0ZWRUcmlwPy5zdG9wc1xcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBjb2wtc20tMTIgcm93QmxvY2tcXFwiXFxyXFxuICAgICAgICAgICAgIChAZmx5SW5PdXQuc3RhcnQpPVxcXCJhbmltU3RvcFN0YXJ0ZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgKEBmbHlJbk91dC5kb25lKT1cXFwiYW5pbVN0b3BEb25lKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgIFtAZmx5SW5PdXRdPVxcXCJmbHlTdGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XFxcImZhIGZhLXN0b3BcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAjYW5jaG9yIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgYnRuLW1kXFxcIiAoY2xpY2spPVxcXCJvblRvZ2dsZVBvcFVwKHN0b3AuaWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3t0b2dnbGVUZXh0fX0gRMOpdGFpbHMge3tzdG9wPy5uYW1lfX1cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb3BVcFdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8a2VuZG8tcG9wdXAgY2xhc3M9XFxcInBvcFVwQ29udGVudFxcXCIgW2FuY2hvcl09XFxcImFuY2hvclxcXCIgKGFuY2hvclZpZXdwb3J0TGVhdmUpPVxcXCJzaG93ID0gZmFsc2VcXFwiICpuZ0lmPVxcXCJzdG9wPy5zaG93UG9wVXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3tzdG9wPy5hcnJpdmFsIHwgZm1UcmlwRGF0ZX19LCB7e3N0b3A/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX0sICDDgCB7e3N0b3A/LmNpdHl9fSwgQ3Vpc2luZSB7e3N0b3A/LmN1aXNpbmV9fSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7c3RvcD8uZ3VpZGV9fSwgUXVvdMOpIHt7c3RvcD8ucXVvdGV9fVxcclxcbiAgICAgICAgICAgICAgICA8L2tlbmRvLXBvcHVwPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWlzQWRtaW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXIgYWN0aXZlIGNydWRCdXR0b25zXFxcIiAoY2xpY2spPVxcXCJkZWxldGVTdG9wKHN0b3AuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiPjwvaT4gU3VwcHJpbWVyPC9idXR0b24+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLXN1Y2Nlc3MgYWN0aXZlIGNydWRCdXR0b25zXFxcIiAoY2xpY2spPVxcXCJham91dGVUZW1wKHN0b3AuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPiBUZW1ww6lyYXR1cmU8L2J1dHRvbj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGNvbC1zbS0xMlxcXCIgW0BhbmltU3RvcF09XFxcInN0YXRlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVTdGF0ZSgpXFxcIj5cXHJcXG4gICAgPGtlbmRvLXNjcm9sbHZpZXcgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgW2RhdGFdPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgW2FuaW1hdGVdPVxcXCJhbmltYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbZW5kbGVzc109XFxcImVuZGxlc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcIndpZHRoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cXFwiaGVpZ2h0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbYXJyb3dzXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZ2VhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiZGVtby10aXRsZVxcXCI+e3tpdGVtLnRpdGxlfX08L2g0PlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPSd7e2l0ZW0udXJsfX0nIGFsdD0ne3tpdGVtLnRpdGxlfX0nIFtuZ1N0eWxlXT1cXFwie3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9XFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIiAvPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC9rZW5kby1zY3JvbGx2aWV3PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiBhbGVydCBhbGVydC1kYW5nZXIgbm9TdG9wc1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiICpuZ0lmPVxcXCIhc2VsZWN0ZWRUcmlwPy5zdG9wcy5sZW5ndGhcXFwiPlxcclxcbiAgICA8aDQ+PGkgY2xhc3M9XFxcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXFxcIj48L2k+IEF1Y3VucyBTdG9wczwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0b3BlZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInNwYW57XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkgPiBkaXY6bGFzdC1vZi10eXBle1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCbG9ja3tcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9TdG9wc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbWFyZ2luOiAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgY29sb3I6ICM3ODc4Nzg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMSwgNSwgNSwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcFdyYXBwZXJ7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd0Jsb2Nre1xcclxcbiAgICBib3gtc2hhZG93OjJweCAycHggMnB4IGdyYXksLTFweCAtMXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3J1ZEJ1dHRvbnN7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uay1zY3JvbGx2aWV3LXdyYXAge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZGVtby10aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbUhvdXJMb2NhbCcsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdEhvdXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsNSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZtVHJpcERhdGUnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGF0ZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGRhdGU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBtb21lbnQubG9jYWxlKCdlbi1jYScpO1xyXG4gICAgICAgIHJldHVybiBtb21lbnQoZCkuZm9ybWF0KCdMTCcpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzY2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzkzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc5OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzgzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgwOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNjcm9sbHZpZXcvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hhbW1lcmpzL2hhbW1lci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi1wYWdpbmF0aW9uL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4MjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=