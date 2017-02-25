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
	        this.titreWeather = "Weather Check";
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
	        console.log("here");
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

	module.exports = "<h1>{{titreWeather}}</h1>\r\n\r\n<div>\r\n    <button class=\"btn btn-primary\" (click)=\"showWeatherForm()\">Create new Weather</button>\r\n</div>\r\n\r\n<delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n\r\n<div *ngIf=\"showForm\" class=\"col-md-12\">\r\n    <weather-form [weatherToSave]=\"weather1\" (newWeather)=\"postWeather($event)\" (edWeather)=\"editWeather($event)\" [modeEdit]=\"editForm\"></weather-form>\r\n</div>\r\n\r\n<div *ngIf=\"weathers\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n                <th>Delete</th>\r\n                <th>Edit</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let weather of weathers\">\r\n                <td><a [routerLink]=\"['detail', weather.id]\">{{weather?.id}}</a></td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n                <td><a (click)=\"goDelete(weather.id)\"><i class=\"glyphicon glyphicon-scissors\">Delete</i></a></td>\r\n                <td><a (click)=\"goEdit(weather)\"><i class=\"glyphicon glyphicon-pencil\">Edit</i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>\r\n\r\n<delete></delete>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <kendo-numerictextbox id=\"tempC\" name=\"tempC\" style=\"padding:0\" class=\"col-md-12\" [restrictDecimals]=\"true\"\r\n                    [decimals]=\"decimals\" [(ngModel)]=\"weatherToSave.tempC\" [step]=\"1\" [min]=\"1\" [max]=\"45\"\r\n                    [autoCorrect]=\"autoCorrect\" [format]=\"format\">\r\n                </kendo-numerictextbox>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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
	            this._router.events.subscribe(function (event) {
	                console.log(event);
	                var segmentUrl = event.url.split('/');
	                console.log(segmentUrl);
	                var idWeather = +segmentUrl[4];
	                console.log(idWeather);
	                _this.getWeatherBydId(idWeather);
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
	        if (this.sub != null && typeof (this.sub) != 'undefined') {
	            this.sub.unsubscribe();
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

	module.exports = "<h2>{{messageDetails}}</h2>\r\n\r\n<div *ngIf=\"weather\">\r\n    <h1>Weather Detail</h1>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Hour AM/PM</th>\r\n                <th>TempC</th>\r\n                <th>Summary</th>\r\n                <th>Temp F</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{weather?.id}}</td>\r\n                <td>{{weather?.name}}</td>\r\n                <td>{{weather?.hour | fmHourLocal}}</td>\r\n                <td>{{weather?.tempC}}</td>\r\n                <td>{{weather?.summary}}</td>\r\n                <td>{{weather?.temperatureF}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

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

	module.exports = "<h2>Statistiques pour la température : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ID\r\n            </th>\r\n            <th>\r\n                Wind km/h\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n            <th>\r\n                Température\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.id}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                <p>Temp : {{constraint?.weather.name}}</p>\r\n                <p>Heure : {{constraint?.weather.hour | fmHourLocal }}</p>\r\n                <p>Temp °C : {{constraint?.weather.tempC}}</p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<kendo-chart [categoryAxis]=\"{ categories: tempConst }\">\r\n\r\n    <kendo-chart-value-axis>\r\n        <kendo-chart-value-axis-item [title]=\"{ text: 'Statistiques' }\">\r\n        </kendo-chart-value-axis-item>\r\n    </kendo-chart-value-axis>\r\n\r\n    <kendo-chart-title text=\"Statistiques Température / Contrainte\" background=\"#e3e3e3\" font=\"19pt sans-serif\"></kendo-chart-title>\r\n    <kendo-chart-legend position=\"top\" orientation=\"horizontal\"></kendo-chart-legend>\r\n    <kendo-chart-tooltip format=\"{0}\" padding=\"1\"  [shared]=\"true\"></kendo-chart-tooltip>\r\n    <kendo-chart-area background=\"#f7f7fa\" [margin]=\"30\">\r\n    </kendo-chart-area>\r\n\r\n    <kendo-chart-series>\r\n        <kendo-chart-series-item *ngFor=\"let constraint of constraints\" type=\"column\" \r\n                                  [data]=\"constraint.stats\" [name]=\"constraint.id\">\r\n        </kendo-chart-series-item>\r\n    </kendo-chart-series>\r\n</kendo-chart>\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

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
	        styles: [__webpack_require__(250)]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        tripdetail_service_1.TripDetailService, router_1.Router,
	        stop_service_1.StopService, login_service_1.LoginService])
	], EditStopComponent);
	exports.EditStopComponent = EditStopComponent;


/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-9 col-sm-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\" class=\"col-md-12\">\r\n        <div class=\"col-md-8 col-sm-12 rowBlock\">\r\n            <span><i class=\"fa fa-stop\"></i></span>\r\n            <button #anchor class=\"btn btn-link btn-md\" (click)=\"onTogglePopUp(stop.id)\">\r\n                {{toggleText}} Détails {{stop?.name}}\r\n            </button>\r\n            <div class=\"popUpWrapper\">\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"stop?.showPopUp\">\r\n                    {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},  À {{stop?.city}}, Cuisine {{stop?.cuisine}},\r\n                    {{stop?.guide}}, Quoté {{stop?.quote}}\r\n                </kendo-popup>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n            <span><button [disabled]=\"!isAdmin\" class=\"btn btn-md btn-danger active crudButtons\" (click)=\"deleteStop(stop.id)\"><i class=\"fa fa-trash\"></i> Supprimer</button></span>\r\n            <span><button class=\"btn btn-md btn-success active crudButtons\" (click)=\"ajouteTemp(stop.id)\"><i class=\"fa fa-plus\"></i> Température</button></span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"col-md-3 col-sm-12\">\r\n    <kendo-scrollview class=\"col-md-12\" [data]=\"items\"\r\n                      [animate]=\"animate\"\r\n                      [endless]=\"endless\"\r\n                      [width]=\"width\"\r\n                      [height]=\"height\"\r\n                      [arrows]=\"true\"\r\n                      [pageable]=\"true\">\r\n        <template let-item=\"item\">\r\n            <h2 class=\"demo-title\">{{item.title}}</h2>\r\n            <img src='{{item.url}}' alt='{{item.title}}' [ngStyle]=\"{minWidth: width}\" draggable=\"false\" />\r\n        </template>\r\n    </kendo-scrollview>\r\n</div>\r\n<div class=\"col-md-12 alert alert-danger noStops\" role=\"alert\" *ngIf=\"!selectedTrip?.stops.length\">\r\n    <h4><i class=\"fa fa-exclamation-triangle\"></i> Aucuns Stops</h4>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.noStops{\r\n    text-align: center;\r\n    padding: 2%;\r\n    margin: 2% 0;\r\n}\r\n\r\n.popUpContent {\r\n    padding: 15px;\r\n    color: #787878;\r\n    background-color: rgba(0,0,0,.05);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.popUpWrapper{\r\n    min-width: 100px;\r\n    min-height: 5px;\r\n}\r\n\r\n.rowBlock{\r\n    box-shadow:2px 2px 2px gray,-1px -1px 2px white;\r\n}\r\n\r\n.crudButtons{\r\n    float: left;\r\n}\r\n\r\n.k-scrollview-wrap {\r\n    margin: 0 auto;\r\n}\r\n\r\ndemo-title {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 15px;\r\n    color: #fff;\r\n    background-color: rgba(0,0,0,.4);\r\n    text-align: center;\r\n    font-size: 24px;\r\n}", ""]);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk1ZDRlM2IxMzk3ZmY1YmNjMjMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvbWF0aC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcmVnZXhwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzPzUwYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcz81MDUyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzPzJhMDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1zY3JvbGx2aWV3L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hhbW1lcmpzL2hhbW1lci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4MyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBcUI7QUFFckIseUdBQXdHO0FBQ3hHLDJEQUEyRTtBQUMzRSx1Q0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLDBCQUFtQjtBQUVuQix5REFBd0Q7QUFDeEQsR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUNyQixFQUFDO0FBRUQsc0VBQXFFO0FBQ3JFLEtBQU0sUUFBUSxHQUFHLGlEQUFzQixFQUFFLENBQUM7QUFDMUMsS0FBTSxlQUFlLEdBQUcsY0FBUSxRQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxHQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDckMsZUFBZSxFQUFFLENBQUM7QUFDdEIsRUFBQztBQUFDLEtBQUksQ0FBQyxDQUFDO0tBQ0osUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ25FLEVBQUM7Ozs7Ozs7O0FDdkJELGlEOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsZ0ZBQStFO0FBQy9FLHNEQUFxRDs7QUFFckQsd0JBQTRCO0FBQzVCLHdCQUE0QjtBQUM1Qix5QkFBOEI7QUFDOUIseUJBQStCO0FBQy9CLHlCQUFpQztBQUNqQyx5QkFBNEI7QUFDNUIseUJBQTBCO0FBQzFCLHlCQUE0QjtBQUM1Qix5QkFBMEI7QUFDMUIseUJBQTJCO0FBQzNCLDBCQUE0QjtBQUM1QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCLDBCQUE4QjtBQUM5QiwwQkFBOEI7QUFDOUIsMEJBQTJCO0FBQzNCLDBCQUE2QjtBQUU3Qix1R0FBc0c7QUFDdEcsMEJBQTZCO0FBQzdCLDBCQUEyQjs7Ozs7OztBQ3ZCM0I7QUFDQTtBQUNBLGdEOzs7Ozs7QUNGQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7OztBQ25CQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esa0Q7Ozs7OztBQ0hBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0Esa0Q7Ozs7OztBQ0RBLGdEOzs7Ozs7QUNBQTtBQUNBLG9EOzs7Ozs7QUNEQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1pBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qzs7Ozs7O0FDakJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUMxQkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7OztBQ0xBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7Ozs7O0FDdEJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ1BBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7Ozs7OztBQ0pBLGlEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Qzs7Ozs7O0FDSkEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ0hBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDWkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUQ7Ozs7OztBQ2RBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7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LENBQUM7SUFFVyxRQUFRLENBTXBCO0FBTlksNkJBQVE7Ozs7Ozs7QUNUckIsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoibWFpbi1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOTVkNGUzYjEzOTdmZjViY2MyMyIsImltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBpbXBvcnRzIGNpIGhhdXQsIGxlcyBwb2x5ZmlsbHMgcG91ciBlbmFibGVyIHVuIG5vdXZlbCBBUEkvd2ViIHN1cHBvcnQgZGFucyB1biBvbGQgYnJvd3Nlci9lbnZpcm9ubWVudFxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8vIEVuYWJsZSBlaXRoZXIgSG90IE1vZHVsZSBSZWxvYWRpbmcgb3IgcHJvZHVjdGlvbiBtb2RlXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG4gICAgbW9kdWxlWydob3QnXS5kaXNwb3NlKCgpID0+IHsgcGxhdGZvcm0uZGVzdHJveSgpOyB9KTtcbn0gZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLy8gQm9vdCB0aGUgYXBwbGljYXRpb24sIGVpdGhlciBub3cgb3Igd2hlbiB0aGUgRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEyODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXHJcbi8vIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3R5cGVkJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbi8vIGVuYWJsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBpbiBkZWNvcmF0b3IgZnVuY3Rpb25zLiAocmVwbGFjZXMgcGFja2FnZXMgcmVmbGVjdC1tZXRhZGF0YSArIGVzNi1zaGltKVxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcG9seWZpbGxzLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTExKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTIxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5GdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5wYXJzZUludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykucGFyc2VGbG9hdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk51bWJlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODgzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5ibGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1YicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1cCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TdHJpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTYyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9kYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuam9pbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNvcnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc29tZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODU3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVnRXhwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0ODYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDg4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha1NldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5ODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTc0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlJlZmxlY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVmbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNy9yZWZsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDAzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTI4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBKc29ucE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsb2dpblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZCc7XG5cbi8vIG1haW4gY29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50JztcbmltcG9ydCB7IEJlc3RUcmlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJpcFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZSc7XG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9wL3N0b3Auc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcblxuLy8gcGlwZXNcbmltcG9ydCB7IEZvcm1hdEhvdXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZSc7XG5pbXBvcnQgeyBUcmlwRGF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwL3RyaXAucGlwZSdcbi8vIGtlbmRvIFVJIG1vZHVsZXNcbmltcG9ydCB7IERhdGVJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dCc7XHJcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWNoYXJ0cyc7XHJcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5pbXBvcnQgeyBQb3B1cE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlld01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXNjcm9sbHZpZXcnO1xyXG5cclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG4vLyBwYWdpbmdcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIEJlc3RUcmlwQ29tcG9uZW50LFxuICAgICAgICBUcmlwRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUcmlwVXNlckNvbXBvbmVudCxcbiAgICAgICAgRWRpdFN0b3BDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSYXRpbmdDb21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIExheW91dE1vZHVsZSxcbiAgICAgICAgQ2hhcnRzTW9kdWxlLFxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIFBvcHVwTW9kdWxlLFxuICAgICAgICBTY3JvbGxWaWV3TW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcycsIGNvbXBvbmVudDogVHJpcENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2Jlc3QnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzL3BlcnNvJywgY29tcG9uZW50OiBUcmlwVXNlckNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sICAgICAgICAgIFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzLzppZCcsIGNvbXBvbmVudDogVHJpcERldGFpbENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3N0b3AnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZWRpdCcsIGNvbXBvbmVudDogRWRpdFN0b3BDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycy86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogV2VhdGhlckRldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdkZXRhaWwvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH1cbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMnLCBjb21wb25lbnQ6IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnd2VhdGhlckNvbnN0cmFpbnRzLzppZCcsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1zVGltZU91dDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tc1RpbWVPdXQgPSAzMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSA8SVVzZXI+Zm9ybS52YWx1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luU2VydmljZS5sb2dpbkFQSSh0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmlwcGVkVG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBsb2dpbiB1c2VyIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSA9IHRoaXMudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuID0gc3RyaXBwZWRUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucm9sZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucm9sZVtpXS50eXBlID09IFwiU3VwZXJVc2VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1cGVyVXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSW1wb3NzaWJsZSBkZSBsb2d1ZXIgbGUgdXNlciA6IFwiICsgdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnN0b3BMb2FkaW5nKCk7IH0sIHRoaXMubXNUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB1c2VyICA6IFwiICsgdGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJOYW1lOiBzdHJpbmcsIHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG4vL2ltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBlc3RBZG1pbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3VybExvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX3VybExvZ2luID0gJ2FwaS9hdXRoL3Rva2VuJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkFQSSh1c2VyOiBJVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxMb2dpbiwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVzdEFkbWluID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjA1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxNjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8aDM+TG9naW48L2gzPlxcclxcbiAgICA8Zm9ybSAjbG9naW49XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQobG9naW4pXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJOYW1lXFxcIj5Vc2VyIE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci51c2VyTmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIudXNlck5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+Q291cnJpZWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIuZW1haWwudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5FbWFpbCBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+TW90IFBhc3NlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnBhc3N3b3JkLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+TW90IFBhc3NlIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tc3VjY2Vzc1xcXCI+U2UgTG9ndWVyPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdj48aSAqbmdJZj1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZndcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZXJyb3JcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IG51bGwgJiYgdHlwZW9mKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IFwidW5kZWZpbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2dlZCBpbiBzbyByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIDogXCIgKyB0aGlzLkxvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIFwiICsgdGhpcy5Mb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgYXtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gU3RhdGlzdGlxdWVzIFRlbXBlcmF0dXJlc1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj4gTG9nT3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJBU1AuTkVUIENvcmVcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQVNQLk5FVCBDb3JlIGFuZCBDIyBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2V0LmFzcC5uZXQvJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIkFuZ3VsYXIgMiBhbmQgVHlwZVNjcmlwdCBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGNsaWVudC1zaWRlIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2FuZ3VsYXIuaW8vJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIldlYnBhY2tcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXNcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGxheW91dCBhbmQgc3R5bGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbyBXb3JsZDwvaDE+XFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGgzPkJpZW52ZW51ZSBTdXIgPHNwYW4+PHN0cm9uZz48aT5Bbmd1bGFyMkNvcmVTZWVkPC9pPjwvc3Ryb25nPjwvc3Bhbj4sIERlbW8gOiA8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8a2VuZG8tdGFic3RyaXAgW25nQ2xhc3NdPVxcXCInY29sLW1kLTEyJ1xcXCIgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1ib3R0b20nOiAnMiUnfVxcXCI+XFxyXFxuICAgICAgICA8a2VuZG8tdGFic3RyaXAtdGFiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXMgbGV0IGk9aW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcIml0ZW0uc3ViamVjdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cXFwiaSA9PSBzZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvVGFiQ29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7aXRlbT8uY29udGVudH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwie3tpdGVtPy5saW5rfX1cXFwiPnt7aXRlbT8ubGlua319PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XFxcInt7aXRlbT8ubGluazJ9fVxcXCI+e3tpdGVtPy5saW5rMn19PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwva2VuZG8tdGFic3RyaXAtdGFiPlxcclxcbiAgICA8L2tlbmRvLXRhYnN0cmlwPlxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8aDQ+TGVzIGNvbmNlcHRzIGltcG9ydGFudHMgOiA8L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcbiA8c2VjdGlvbj5cXHJcXG4gICAgPGtlbmRvLXBhbmVsYmFyIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tYm90dG9tJzogJzIlJ31cXFwiPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0NsaWVudC1zaWRlIG5hdmlnYXRpb24nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInU2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nJ1xcXCIgW3NlbGVjdGVkXT1cXFwidHJ1ZVxcXCIgW2V4cGFuZGVkXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0ZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2VicGFjayBkZXYgbWlkZGxld2FyZSdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJ1biB0aGUgd2VicGFjayBidWlsZCB0b29sLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSG90IG1vZHVsZSByZXBsYWNlbWVudCdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0VmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkcydcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIHdlYnBhY2sgYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgPC9rZW5kby1wYW5lbGJhcj5cXG5cXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhLCBwID4gYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXZ7XFxyXFxuICAgIG1hcmdpbjogMSUgMDtcXHJcXG4gICAgcGFkZGluZzogMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuLi9zdG9wL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IFRyaXAsIElUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaXNEZWxldGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9EZWxldGVJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgb2JqZWN0VG9EZWxldGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRyaXBUb0RlbGV0ZTogSVRyaXA7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlU3VjY2VzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlkVG9EZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dOb3RpZjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UsIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHBvcCB1cCBvcGVuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZGVsZXRlIDogXCIgKyB0aGlzLmlzRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU5vdGlmKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gdGhpcy53ZWF0aGVyVG9EZWxldGVJZDtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInN0b3BBZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlU3RvcEJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcIndlYXRoZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZXJXZWF0aGVyQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInVzZXJ0cmlwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVVc2VyVHJpcCh0aGlzLnRyaXBUb0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3BCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdG9wU2VydmljZS5kZWxldGVTdG9wQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIERFTEVURSBzdG9wIGluIGRlbGV0ZSBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVyV2VhdGhlckJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzZXJUcmlwKHRyaXA6IElUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZGVsZXRlVHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgdHJpcCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRpbmcgdHJpcFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFdlYXRoZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsV2VhdGhlciA9IFwiYXBpL3dlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBhbGwgd2VhdGhlciBvYmplY3RzXHJcbiAgICBnZXRBbGxXZWF0aGVyc0FQSSgpOiBPYnNlcnZhYmxlPElXZWF0aGVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXJbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcG9zdFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVDogICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHB1dFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBieSBpZFxyXG4gICAgZ2V0V2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgbmFtZVxyXG4gICAgZ2V0V2VhdGhlckJ5TmFtZUFQSShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9CeU5hbWUvXCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IGlkXHJcbiAgICBkZWxldGVXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIgKyBlcnJvcikpICAgICAgXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3BTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BCeUlkQVBJKGlkOiBudW1iZXIsIHN0b3A6IFN0b3ApOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHN0b3AuY3Vpc2luZSA9IHN0b3AuY3Vpc2luZVtcInRleHRcIl07XHJcbiAgICAgICAgc3RvcC5ndWlkZSA9IHN0b3AuZ3VpZGVbXCJ0ZXh0XCJdO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0b3ApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsU3RvcCArIFwiL1wiICsgaWQsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElTdG9wPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9wQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwiZGVsZXRlIHN0b3Agd2l0aCBpZCA6IFwiICsgaWQpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGUgc3RvcCBcIiArIGVycm9yKSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gXCJhcGkvdHJpcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgZ2V0IHRyaXBzIGZvciBsb2dnZWQgaW4gdXNlci5cclxuICAgIGdldFVzZXJUcmlwQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL3VzZXJcIiwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB0cmlwIG9iamVjdC5cclxuICAgIHBvc3RUcmlwQVBJKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0cmlwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxUcmlwLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxUcmlwICsgXCIvdXNlclRyaXAvXCIgKyB0cmlwLmlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxhbnk+Y29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImlzU2hvd05vdGlmXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtc3VjY2Vzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgPHA+QWN0aW9uIGVmZmVjdHXDqWUuPC9wPiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiaWRUb0RlbGV0ZVxcXCI+XFxyXFxuICAgICAgICA8aDM+U3VjY8OocyBzdXBwcmltZXIgIzwvaDM+XFxyXFxuICAgICAgICA8aDQ+e3tpZFRvRGVsZXRlfX08L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiaGlkZU5vdGlmKClcXFwiPkhpZGU8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48a2VuZG8tZGlhbG9nICpuZ0lmPVxcXCJpc0RlbGV0ZVxcXCIgKGNsb3NlKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS4zZW07XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+IFN1cHByaW1lciBkb25uw6llXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFjdGlvbiBpcnLDqXZvY2FibGUuPC9wPlxcclxcblxcclxcbiAgICA8a2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwib25EZWxldGVEYXRhKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbjwva2VuZG8tZGlhbG9nPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuLi93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG4gICAgcHVibGljIHdlYXRoZXIxOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRyZVdlYXRoZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBlZGl0Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmbURhdGU6IGFueTtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdHJlV2VhdGhlciA9IFwiV2VhdGhlciBDaGVja1wiO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIG1vbWVudCBqcyBmb3JtYXQgYSBkYXRlIHdpdGggYSBzdHJpbmcgZm9ybWF0LCByZXR1cm5zIGEgZGF0ZS5cclxuICAgICAgICBtb21lbnQubG9jYWxlKCdlbi1jYScpO1xyXG4gICAgICAgIHRoaXMuZm1EYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZtRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzIHdlYXRoZXIgb2JqZWN0IHRvIGJpbmQgdG8uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMSA9IG5ldyBXZWF0aGVyKDEsIFwiQXV0b21uV2VhdGhlclwiLCB0aGlzLmZtRGF0ZSwgMTQsIFwiVGVtcMOpcmF0dXJlIEF1dG9tbmVcIiwgMjQsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE1ldGhvZCB0byBnZXQgd2VhdGhlciBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApOyAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgOiBhbGwgd2VhdGhlciBvYmplY3RzIGZyb20gZGJcclxuICAgIGdldEFsbFdlYXRoZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgd2VhdGhlciBvYmpldHMgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgZHUgc2VydmljZSA6ICBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V2VhdGhlckZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9ICF0aGlzLnNob3dGb3JtO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0RlbGV0ZShpZFRvRGVsZXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWRUb0RlbGV0ZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIndlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJzLnNwbGljZSh0aGlzLmlucHV0SWREZWxldGUsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRha2UgYSBqcyBvYmplY3QgICh1c3VhbGx5IG9iamVjdCBvciBhcnJheSkgY29udmVydCBpdCB0byBKU09OIHN0cmluZyBub3RhdGlvblxyXG4gICAgLy8gdG8gZ2V0IEpTT04gb2JqZWN0IHVzZSBwYXJzZSBtZXRob2RcclxuICAgIGdldCBkaWFnbm9zdGljKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgcGF5bG9hZCB3ZWF0aGVyIG9iamVjdCBmcm9tIGNoaWxkcmVuIGNvbXBvbmVudCB3ZWF0aGVyZm9ybVxyXG4gICAgcG9zdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgLy8gZmllbGQgZHUgZm9ybSBjaGFuZ8OpXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS5uYW1lID0gJGV2ZW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gJGV2ZW50LmhvdXI7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9ICRldmVudC50ZW1wQztcclxuICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSAkZXZlbnQuc3VtbWFyeTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyB3ZWF0aGVyIHRvIHBvc3QgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyMSk7XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZCB0byBzYXZlIG5ldyB3ZWF0aGVyIG9iamVjdFxyXG4gICAgICAgIHRoaXMuc2F2ZVdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXJcclxuICAgIGVkaXRXZWF0aGVyKCRldmVudCkge1xyXG4gICAgICAgIC8vIGZpZWxkIGR1IGZvcm0gY2hhbmfDqVxyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSAkZXZlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0aW5nIGEgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gbWV0aG9kIHRvIGVkaXQgYSB3ZWF0aGVyXHJcbiAgICAgICAgdGhpcy5wdXRXZWF0aGVyKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXQgYSB3ZWF0aGVyIHdoZW4gY2xpY2tpbmcgYSBsaW5rIG9uIHdlYXRoZXIgb2JqZWN0cyB0YWJsZS5cclxuICAgIGdvRWRpdCh3ZWF0aGVyOiBXZWF0aGVyKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9IHdlYXRoZXI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVCA6IGNhbGwgdGhlIHBvc3QgYWN0aW9uIG9uIGJhY2tlbmQgdG8gY3JlYXRlIG5ldyB3ZWF0aGVyIG9iamVjdC5cclxuICAgIHNhdmVXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3RXZWF0aGVyQVBJKHdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9IGRhdGEuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBlcmF0dXJlRiA9IGRhdGEudGVtcGVyYXR1cmVGO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3RvcElkID0gZGF0YS5zdG9wSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBuZXcgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkYXRhIGluIHRoZSBicm93c2VyIHRvIGdldCBoZSBuZXdseSBzYWJlZCB3ZWF0aGVyIG9iamVjdC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIG9mIGRhdGUgc2VudCBiYWNrIHRvIGNsaWVudCA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHRoaXMud2VhdGhlcjEuaG91cikpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHNhdmluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0V2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3RvcElkID0gZGF0YS5zdG9wSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0ZWQgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZWRpdGluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuLi93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElXZWF0aGVyIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob3VyPzogRGF0ZTtcbiAgICB0ZW1wQz86IG51bWJlcjtcbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlRj86IG51bWJlcjtcbiAgICBzdG9wSWQ/OiBudW1iZXI7XG4gICAgY29uc3RyYWludHM/OiBDb25zdHJhaW50W107XG59XG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyIGltcGxlbWVudHMgSVdlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGhvdXI/OiBEYXRlLFxuICAgICAgICBwdWJsaWMgdGVtcEM/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5Pzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGVtcGVyYXR1cmVGPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgc3RvcElkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgY29uc3RyYWludHM/OiBDb25zdHJhaW50W10pIHsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT57e3RpdHJlV2VhdGhlcn19PC9oMT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNob3dXZWF0aGVyRm9ybSgpXFxcIj5DcmVhdGUgbmV3IFdlYXRoZXI8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcInNob3dGb3JtXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHdlYXRoZXItZm9ybSBbd2VhdGhlclRvU2F2ZV09XFxcIndlYXRoZXIxXFxcIiAobmV3V2VhdGhlcik9XFxcInBvc3RXZWF0aGVyKCRldmVudClcXFwiIChlZFdlYXRoZXIpPVxcXCJlZGl0V2VhdGhlcigkZXZlbnQpXFxcIiBbbW9kZUVkaXRdPVxcXCJlZGl0Rm9ybVxcXCI+PC93ZWF0aGVyLWZvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlcnNcXFwiPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj5EZWxldGU8L2k+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0VkaXQod2VhdGhlcilcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+RWRpdDwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRlbGV0ZT48L2RlbGV0ZT5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckZvcm1Db21wb25lbnR7XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9TYXZlOiBXZWF0aGVyO1xyXG4gICAgQE91dHB1dCgpIG5ld1dlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBPdXRwdXQoKSBlZFdlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBJbnB1dCgpIG1vZGVFZGl0OiBib29sZWFuO1xyXG4gICAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBvbkVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZGVjaW1hbHM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhdXRvQ29ycmVjdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcclxuICAgIC8vZm9ybTE6IE5nRm9ybTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9uRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXdXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIHRoaXMuZWRXZWF0aGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXZWF0aGVyPigpO1xyXG4gICAgICAgIC8vdGhpcy5mb3JtMSA9IG5ldyBOZ0Zvcm0oW10sIFtdKTtcclxuXHJcbiAgICAgICAgLy8gbnVtYmVyIGlucHV0XHJcbiAgICAgICAgdGhpcy5kZWNpbWFscyA9IDA7XHJcbiAgICAgICAgdGhpcy5hdXRvQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAnbjAnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uIHZldXQgc291bWV0dHJlIG9uIGVkaXQuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVudm95ZXIgbGUgd2VhdGhlcmZvcm0gb2JqZWN0IGF1IHdlYXRoZXIgY29tcG9uZW50XHJcbiAgICBvblN1Ym1pdCh3ZWF0aGVyRm9ybTogTmdGb3JtKXsgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckZvcm0udmFsaWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb2RlRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkV2VhdGhlci5lbWl0KHRoaXMud2VhdGhlclRvU2F2ZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHBvdXIgcmV0b3VybmVyIG1vZGUgY3JlZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IGZhbHNlOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1dlYXRoZXIuZW1pdCh3ZWF0aGVyRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHBvdXIgcmV0b3VybmVyIG1vZGUgZWRpdGVyXHJcbiAgICAgICAgICAgIHRoaXMubW9kZUVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBGb3JtPC9oMT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHdlYXRoZXJGb3JtKVxcXCIgI3dlYXRoZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCI+TmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcIndlYXRoZXJUb1NhdmUubmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5Ib3VyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRpbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJob3VyXFxcIiBuYW1lPVxcXCJob3VyXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5ob3VyXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidGVtcENcXFwiPlRlbXAgKkM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8a2VuZG8tbnVtZXJpY3RleHRib3ggaWQ9XFxcInRlbXBDXFxcIiBuYW1lPVxcXCJ0ZW1wQ1xcXCIgc3R5bGU9XFxcInBhZGRpbmc6MFxcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgW3Jlc3RyaWN0RGVjaW1hbHNdPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgW2RlY2ltYWxzXT1cXFwiZGVjaW1hbHNcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnRlbXBDXFxcIiBbc3RlcF09XFxcIjFcXFwiIFttaW5dPVxcXCIxXFxcIiBbbWF4XT1cXFwiNDVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBbYXV0b0NvcnJlY3RdPVxcXCJhdXRvQ29ycmVjdFxcXCIgW2Zvcm1hdF09XFxcImZvcm1hdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwva2VuZG8tbnVtZXJpY3RleHRib3g+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdW1tYXJ5XFxcIj5TdW1tYXJ5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdW1tYXJ5XFxcIiBuYW1lPVxcXCJzdW1tYXJ5XFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5zdW1tYXJ5XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhd2VhdGhlckZvcm0udmFsaWQgfHwgbW9kZUVkaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIm1vZGVFZGl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZFxcXCI+RWRpdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIXN1Ym1pdHRlZFxcXCI+XFxyXFxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nOjwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5OYW1lPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5Ib3VyIEFNL1BNPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuaG91ciB8IGZtSG91ckxvY2FsfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgKkM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlN1bW1hcnk8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5zdW1tYXJ5fX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgRjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBlcmF0dXJlRn19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXFxyXFxufVxcclxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmstaW52YWxpZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi8qI2RhdGUsICNkYXRlID4gdGFibGUsICNkYXRhID4gZGl2LmstY29udGVudC5rLXNjcm9sbGFibGUsIGtlbmRvLWNhbGVuZGFyLW1vbnRodmlldywgdGFibGUuay1jYWxlbmRhci13ZWVrZGF5c3tcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXFxyXFxuXFxyXFxuLyouay1jYWxlbmRhci5rLWNhbGVuZGFyLWluZmluaXRlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLWdyb3VwIGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxua2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LmstY2FsZW5kYXItbW9udGh2aWV3e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgICBwdWJsaWMgbWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXS5wYXRoID09IFwiZGV0YWlsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudFVybCA9IGV2ZW50LnVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VnbWVudFVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRXZWF0aGVyID0gK3NlZ21lbnRVcmxbNF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZFdlYXRoZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCA9PSBcImRldGFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiB1c2Ugc25hcHNob3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkV2VhdGhlciA9IHNuYXBzaG90LnVybFsxXS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZFdlYXRoZXIgIT0gbnVsbCAmJiB0eXBlb2YgKGlkV2VhdGhlcikgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK2lkV2VhdGhlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnN1YiA9ICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUgaW4gcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fYWN0aXZhdGVkUm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGEgcm91dGUgbidlc3QgcGFzIGFjdGl2w6llLCBsYSByb3V0ZSBwYXJlbnRlIGVzdCBhY3RpdmUgKHdlYXRoZXIgY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiQXVjdW5zIGTDqXRhaWxzIMOgIGFmZmljaGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXRoZXJCeWRJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsbCBnZXREZXRhaWxzIG1ldGhvZCBpbiB0aGUgbnNlcnZpY2VcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB3ZWF0aGVyIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBnZXQgZGV0YWlscyBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWIgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuc3ViKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e21lc3NhZ2VEZXRhaWxzfX08L2gyPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcIndlYXRoZXJcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBEZXRhaWw8L2gxPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPldlYXRoZXJzPC9oMj5cXHJcXG5cXHJcXG48aDM+Q2hvb3NlIGEgd2VhdGhlciB0byBnZXQgd2VhdGhlciBjb25zdHJhaW50cyBmcm9tIDogPC9oMz5cXHJcXG5cXHJcXG48dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW3dlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/Lm5hbWV9fTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50W107XHJcbiAgICBwdWJsaWMgdGVtcENvbnN0OiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2U6IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRlbXBDb25zdCA9IFsnVmVudCcsICdSYWZhbGUnLCAnSHVtaWRpdMOpJywgJ1Byw6lzZW50aSddOyBcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnN0cmFpbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb25zdHJhaW50c0FQSSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHRoZSBjb25zdHJhaW50cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLnN0YXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uc3RhdHMucHVzaCh0aGlzLmNvbnN0cmFpbnRzW2ldLndpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmd1c3QsIHRoaXMuY29uc3RyYWludHNbaV0uaHVtaWRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmZlZWxzTGlrZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2ZXVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2VhdGhlckNvbnN0cmFpbnRzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHNBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS93ZWF0aGVyLycgKyBpZCArICcvY29uc3RyYWludHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwOiBSZXNwb25zZSkgPT4gPElDb25zdHJhaW50W10+cmVzcC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlN0YXRpc3RpcXVlcyBwb3VyIGxhIHRlbXDDqXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIElEXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFdpbmQga20vaFxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBHdXN0IGttL2hcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgSHVtaWRpdHkgJVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gUmlzaW5nIEFNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFN1biBTZXQgUE1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ2xlYXJcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgRmVlbHMgTGlrZSDCsENcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgVGVtcMOpcmF0dXJlXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaWR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LndpbmR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmd1c3R9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmh1bWlkaXR5fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5SaXNpbmcgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5TZXQgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCA6IHt7Y29uc3RyYWludD8ud2VhdGhlci5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwPkhldXJlIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLmhvdXIgfCBmbUhvdXJMb2NhbCB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCDCsEMgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIudGVtcEN9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcbjxrZW5kby1jaGFydCBbY2F0ZWdvcnlBeGlzXT1cXFwieyBjYXRlZ29yaWVzOiB0ZW1wQ29uc3QgfVxcXCI+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC12YWx1ZS1heGlzPlxcclxcbiAgICAgICAgPGtlbmRvLWNoYXJ0LXZhbHVlLWF4aXMtaXRlbSBbdGl0bGVdPVxcXCJ7IHRleHQ6ICdTdGF0aXN0aXF1ZXMnIH1cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC12YWx1ZS1heGlzLWl0ZW0+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtdmFsdWUtYXhpcz5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXRpdGxlIHRleHQ9XFxcIlN0YXRpc3RpcXVlcyBUZW1ww6lyYXR1cmUgLyBDb250cmFpbnRlXFxcIiBiYWNrZ3JvdW5kPVxcXCIjZTNlM2UzXFxcIiBmb250PVxcXCIxOXB0IHNhbnMtc2VyaWZcXFwiPjwva2VuZG8tY2hhcnQtdGl0bGU+XFxyXFxuICAgIDxrZW5kby1jaGFydC1sZWdlbmQgcG9zaXRpb249XFxcInRvcFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwva2VuZG8tY2hhcnQtbGVnZW5kPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtdG9vbHRpcCBmb3JtYXQ9XFxcInswfVxcXCIgcGFkZGluZz1cXFwiMVxcXCIgIFtzaGFyZWRdPVxcXCJ0cnVlXFxcIj48L2tlbmRvLWNoYXJ0LXRvb2x0aXA+XFxyXFxuICAgIDxrZW5kby1jaGFydC1hcmVhIGJhY2tncm91bmQ9XFxcIiNmN2Y3ZmFcXFwiIFttYXJnaW5dPVxcXCIzMFxcXCI+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtYXJlYT5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC1zZXJpZXMtaXRlbSAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIiB0eXBlPVxcXCJjb2x1bW5cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImNvbnN0cmFpbnQuc3RhdHNcXFwiIFtuYW1lXT1cXFwiY29uc3RyYWludC5pZFxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcy1pdGVtPlxcclxcbiAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG48L2tlbmRvLWNoYXJ0PlxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5CYWNrPC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4vdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi90cmlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyB0aXRyZVRyaXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dQb3BVcDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzaG93UG9wVXBJZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZXFUcmlwczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWFyY2hNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnRpdHJlVHJpcCA9IFwiTGVzIEZvcmZhaXRzIFZveWFnZXNcIjtcclxuICAgICAgICB0aGlzLnRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcElkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXFUcmlwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSA9IFwiQ2hlcmNoZXJcIjtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhvbWUoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9ob21lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tSYXRpbmcoJGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcCA9ICF0aGlzLnNob3dQb3BVcDtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hUcmlwSWQoaW5wdXQ6IGFueSkge1xyXG4gICAgICAgIHZhciBpZCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChpZCA9PSBcIlwiIHx8IGlkID09IG51bGwgfHwgdHlwZW9mKGlkKSA9PSAndW5kZWZpbmVkJyB8fCBpc05hTigraWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSA9IFwiSW52YWxpZGVcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXMgdW4gbm9tYnJlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSA9IFwiT2tcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvayBlc3QgdW4gbm9tYnJlXCIpO1xyXG4gICAgICAgICAgICB2YXIgaWRUb1NlYXJjaCA9ICtpZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWRUb1NlYXJjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldFRyaXBCeUlkQVBJKGlkVG9TZWFyY2gpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0IHRvIGRldGFpbCBvZiB0aGlzIHBhcnRpY3VsYXIgdHJpcCBieSBpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHMvXCIgKyBkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmY2YjU4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJJbXBvc3NpYmxlIGRlIHRyb3V2ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHRyaXAgYnkgaWQgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRyaXBzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCB0cmlwc1wiKTtcclxuICAgICAgICB0aGlzLmdldEFsbFRyaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVJZFBvcFVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwSWQgPSAhdGhpcy5zaG93UG9wVXBJZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgZ2V0IG1ldGhvcyBzdXIgc2VydmljZS5cclxuICAgIGdldEFsbFRyaXBzKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnJlcVRyaXBzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJpcFNlcnZpY2UuZ2V0QWxsVHJpcHNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVxVHJpcHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVxVHJpcHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmlwKHRyaXA6IFRyaXApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90cmlwU2VydmljZS5kZWxldGVUcmlwQnlBZG1pbih0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VwcHJpbWVyIGxlIHRyaXAgY8O0dMOpIGNsaWVudCBwb3VyIGFjdHVhbGlzZXIgbGEgdnVlLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMuc3BsaWNlKHRoaXMudHJpcHMuaW5kZXhPZih0cmlwKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZGVsZXRpbmcgYSB0cmlwIGJ5IFN1cGVyVXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdHJ5aW5nIGRlbGV0ZSB0cmlwIGJ5IFN1cGVyVXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9ICdhcGkvdHJpcCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgQWxsIHRyaXBzIG9iamVjdHMuXHJcbiAgICBnZXRBbGxUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgIDogZ2V0IHRyaXAgYnkuXHJcbiAgICBnZXRUcmlwQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIEJlc3QgdHJpcCBvYmplY3RzLlxyXG4gICAgZ2V0QmVzdFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArICcvYmVzdFRyaXBzJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXBCeUFkbWluKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gdHJpcC5pZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBkZWxldGluZyBhIHRyaXAgZG9uZSBieSBTdXBlclVzZXJzXCIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGluZyB0cmlwIGJ5IFN1cGVyVXNlcnNcIikpXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyPlxcclxcbiAgICA8aDE+QmllbnZlbnVlIDwvaDE+XFxyXFxuICAgIDxoMj4ge3t1c2VyTmFtZX19PC9oMj5cXHJcXG48L2hlYWRlcj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4taW5mbyBhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJpcHMvcGVyc28nXVxcXCI+TWVzIHRyaXBzPC9hPlxcclxcblxcclxcbjxoMj57e3RpdHJlVHJpcH19PC9oMj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2Jlc3QnXVxcXCI+TWVpbGxldXJzIFRyaXBzPC9hPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG48aDM+RGlzcG9uaWJsZXMgcHLDqXNlbnRlbWVudDwvaDM+XFxyXFxuXFxyXFxuPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IGNvbC1tZC0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItbGVmdCBuYXZiYXItaGVhZGVyIGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItbGVmdFxcXCIgcm9sZT1cXFwiU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiAjaW5wdXRJZFNlYXJjaCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwie3tzZWFyY2hNZXNzYWdlfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiICNhbmNob3IgKGNsaWNrKT1cXFwib25Ub2dnbGVJZFBvcFVwKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1pbmZvXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwic2VhcmNoVHJpcElkKGlucHV0SWRTZWFyY2gpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5HbyE8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1wb3B1cCBjbGFzcz1cXFwicG9wVXBDb250ZW50XFxcIiBbYW5jaG9yXT1cXFwiYW5jaG9yXFxcIiAoYW5jaG9yVmlld3BvcnRMZWF2ZSk9XFxcInNob3cgPSBmYWxzZVxcXCIgKm5nSWY9XFxcInNob3dQb3BVcElkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFJlY2hlcmNoZXIgcGFyIElkIGRlIHRyaXAuXFxyXFxuICAgICAgICAgICAgICAgIDwva2VuZG8tcG9wdXA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItcmlnaHQgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJyZWZyZXNoVHJpcHMoKVxcXCIga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBbaWNvbl09XFxcIidyZWZyZXNoJ1xcXCIgY2xhc3M9XFxcInJlZnJlc2hCdXR0b25cXFwiPkFjdHVhbGlzZXI8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+ICAgXFxyXFxuPC9uYXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGNvbC1zbS0xMlxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlclxcXCI+XFxyXFxuICAgIDxpICpuZ0lmPVxcXCJyZXFUcmlwc1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS01eFxcXCI+PC9pPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxtYWluIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8dGVtcGxhdGUgKm5nSWY9XFxcIiF0cmlwcy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPGgzPkF1Y3VucyBUcmlwczwvaDM+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgdHJpcCBvZiB0cmlwcyB8IHBhZ2luYXRlOiB7IGl0ZW1zUGVyUGFnZTogOCwgY3VycmVudFBhZ2U6IHAgfVxcXCIgY2xhc3M9XFxcImluZm9zVHJpcCBjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImRlbGV0ZVRyaXAodHJpcClcXFwiIGtlbmRvQnV0dG9uIFtwcmltYXJ5XT1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRlbGV0ZVRyaXBCdXR0b25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3RyaXA/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkNvbnRpbmVudCA6IHt7dHJpcD8uY29udGluZW50fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSAjYW5jaG9yPlxcclxcbiAgICAgICAgICAgICAgICBSYXRpbmcgOiA8cmF0aW5nIGNsYXNzPVxcXCJyYXRpbmdcXFwiICpuZ0lmPVxcXCJ0cmlwPy5yYXRpbmdcXFwiIFtyYXRpbmddPSd0cmlwLnJhdGluZycgKHJhdGluZ0NsaWNrKT1cXFwiY2xpY2tSYXRpbmcoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvcmF0aW5nPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBvcHVwIFthbmNob3JdPVxcXCJhbmNob3JcXFwiIGNsYXNzPVxcXCJwb3BVcENvbnRlbnRcXFwiICpuZ0lmPVxcXCJzaG93UG9wVXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBRdW90w6kgOiB7e3RyaXA/LnJhdGluZ319XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1wb3B1cD5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8cD5EYXRlIGRlIETDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbdHJpcC5pZF1cXFwiPlZvaXIgVHJpcDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPHBhZ2luYXRpb24tY29udHJvbHMgKHBhZ2VDaGFuZ2UpPVxcXCJwID0gJGV2ZW50XFxcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L21haW4+XFxyXFxuXFxyXFxuPGZvb3Rlcj5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiaG9tZSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPiBBY2N1ZWlsPC9hPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC9mb290ZXI+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDElIDAgMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgxLCBoZWFkZXIgPiBoMntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwe1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphenVyZTtcXHJcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDIuNSU7XFxyXFxufVxcclxcblxcclxcbmRpdiA+IHVse1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9zVHJpcDpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE1ZGVnKTtcXHJcXG59XFxyXFxuLmluZm9zVHJpcDpob3Zlciwgc2VjdGlvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnBhZ2luYXRpb24tY29udHJvbHN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDb250ZW50e1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjNzg3ODc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLDE0NCwyNTUsLjMpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxLCA1LCA1LCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVRyaXBCdXR0b257XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoQnV0dG9ue1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tICcuLi90cmlwL3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdyb3VwRGVzY3JpcHRvciwgcHJvY2VzcywgU29ydERlc2NyaXB0b3IgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0YS1xdWVyeSc7XHJcbmltcG9ydCB7XG4gICAgR3JpZENvbXBvbmVudCxcbiAgICBHcmlkRGF0YVJlc3VsdCxcbiAgICBQYWdlQ2hhbmdlRXZlbnRcbn0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmVzdC10cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBiZXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBiZXN0LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXN0VHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZ3JpZFZpZXc6IEdyaWREYXRhUmVzdWx0O1xyXG4gICAgcHVibGljIGJlc3RUcmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2tpcDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzVHJpcHM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0bGVCZXN0VHJpcHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBoaWRkZW5Db2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBkYXRhOiBPYmplY3RbXTtcclxuXHJcbiAgICAvLyBwYWdpbmcgaW5mb3NcclxuICAgIHB1YmxpYyBidXR0b25Db3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIGluZm86IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhZ2VTaXplczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmV2aW91c05leHQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF90cmlwU2VydmljZTogVHJpcFNlcnZpY2UsIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmJlc3RUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSA1O1xyXG4gICAgICAgIHRoaXMuc2tpcCA9IDA7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zID0gW107XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5pc1RyaXBzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aXRsZUJlc3RUcmlwcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIm51bWVyaWNcIjtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c05leHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yb3V0ZXIudXJsID09IFwiL3RyaXBzL2Jlc3RcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQgdGhlIHJvdXRpbmcgdG8gYWNjZXNzIGJlc3QgdHJpcHMgY29tcG9uZW50IGluIHBhcmVudCBjb21wb25lbnQgdHJpcHMuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlQmVzdFRyaXBzID0gXCJDb25zdWx0ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5nZXRCZXN0VHJpcHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZShldmVudDogUGFnZUNoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tpcCA9IGV2ZW50LnNraXA7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1zKCk7XG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpIHtcclxuICAgICAgICB0aGlzLmdyaWRWaWV3ID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmJlc3RUcmlwcy5zbGljZSh0aGlzLnNraXAsIHRoaXMuc2tpcCArIHRoaXMucGFnZVNpemUpLFxyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy5iZXN0VHJpcHMubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGggPSAwO1xuICAgIH1cclxuXHJcbiAgICBoaWRlQ29sdW1uKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zLnB1c2goZmllbGQpO1xuICAgIH1cclxuXHJcbiAgICBvblZpZXdUcmlwcygpIHtcclxuICAgICAgICB0aGlzLmlzVHJpcHMgPSAhdGhpcy5pc1RyaXBzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmVzdFRyaXBzKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEJlc3RUcmlwc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdFRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBnZXR0aW5nIGJlc3QgdHJpcHMgOiBcIiArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYmVzdCB0cmlwcyA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+PGEgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLWxpbmtcXFwiIChjbGljayk9XFxcIm9uVmlld1RyaXBzKClcXFwiPnt7dGl0bGVCZXN0VHJpcHN9fTwvYT48L2gxPlxcclxcblxcclxcbjwhLS0gYmVzdCB0cmlwcyBncmlkIC0tPlxcclxcbjxzZWN0aW9uICpuZ0lmPVxcXCJpc1RyaXBzXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBbcHJpbWFyeV09XFxcInRydWVcXFwiIFtpY29uXT1cXFwiJ3JlZnJlc2gnXFxcIiAoY2xpY2spPVxcXCJyZXN0b3JlQ29sdW1ucygpXFxcIj5SZXN0YXVyZXI8L2J1dHRvbj5cXHJcXG4gICAgPGtlbmRvLWdyaWQgW2RhdGFdPVxcXCJncmlkVmlld1xcXCIgW3BhZ2VTaXplXT1cXFwicGFnZVNpemVcXFwiIFtza2lwXT1cXFwic2tpcFxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJwYWdlQ2hhbmdlKCRldmVudClcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBbc2VsZWN0YWJsZV09XFxcInRydWVcXFwiIFtoZWlnaHRdPVxcXCIzNTBcXFwiIFtwYWdlYWJsZV09XFxcInsgYnV0dG9uQ291bnQ6IGJ1dHRvbkNvdW50LCBpbmZvOiBpbmZvLCBcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSwgcGFnZVNpemVzOiBwYWdlU2l6ZXMsIHByZXZpb3VzTmV4dDogcHJldmlvdXNOZXh0fVxcXCIgW3Njcm9sbGFibGVdPVxcXCInbm9uZSdcXFwiPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cXFwiY29sdW1uc1xcXCIgbGV0LWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcInt7Y29sdW1ufX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJoaWRkZW5Db2x1bW5zLmluZGV4T2YoY29sdW1uKSA9PT0gLTFcXFwiIHRpdGxlPVxcXCJJRFxcXCIgd2lkdGg9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvR3JpZEhlYWRlclRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7ZGF0YUl0ZW0uZmllbGR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJoaWRlQ29sdW1uKGRhdGFJdGVtLmZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImstYnV0dG9uIGstcHJpbWFyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcImZsb2F0OiByaWdodDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwibmFtZVxcXCIgdGl0bGU9XFxcIk5vbVxcXCIgd2lkdGg9XFxcIjMwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwibGVhdmluZ1xcXCIgdGl0bGU9XFxcIkTDqXBhcnRcXFwiIHdpZHRoPVxcXCI3MFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcImNvdW50cnlcXFwiIHRpdGxlPVxcXCJQYXlzXFxcIiB3aWR0aD1cXFwiNjBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJjb250aW5lbnRcXFwiIHRpdGxlPVxcXCJDb250aW5lbnRcXFwiIHdpZHRoPVxcXCI2MFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwicmF0aW5nXFxcIiB0aXRsZT1cXFwiUmF0aW5nXFxcIiB3aWR0aD1cXFwiMjBcXFwiIFtoZWFkZXJTdHlsZV09XFxcInsnYmFja2dyb3VuZC1jb2xvcic6ICcjYzViMzU4JywnY29sb3InOiAnI2ZmZicsJ2xpbmUtaGVpZ2h0JzogJzFlbSd9XFxcIj5cXHJcXG4gICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8dGVtcGxhdGUga2VuZG9HcmlkRGV0YWlsVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uICpuZ0lmPVxcXCJkYXRhSXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RMOpdGFpbHM6PC9zdHJvbmc+IEl0ZW08L3A+XFxyXFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDxrZW5kby1ncmlkLW1lc3NhZ2VzIGdyb3VwUGFuZWxFbXB0eT1cXFwiRHJhZyBoZXJlIHRvIGdyb3VwLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVjb3Jkcz1cXFwiVGhlcmUgbm8gaXRlbXMgdG8gZGlzcGxheS5cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1ncmlkLW1lc3NhZ2VzPlxcclxcbjwva2VuZG8tZ3JpZD5cXHJcXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBiZXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuICAgIHB1YmxpYyBpc0JvdWdodDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB1c2VyVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBpc0JvdWdodE1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwZGV0YWlsOiBUcmlwRGV0YWlsU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmlzQm91Z2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyVHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzQm91Z2h0TWVzc2FnZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpcEJ5SWQoaWQ6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhdGluZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN0b3BzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmlwc0ZvclVzZXIoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkICsgZXJyb3IgKTsgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBzRm9yVXNlcigpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFVzZXJUcmlwQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5BZGRUcmlwKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCBmb3IgdXNlciBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BZGRUcmlwKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51c2VyVHJpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlclRyaXBzW2ldLmlkID09IHRoaXMuc2VsZWN0ZWRUcmlwLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHRNZXNzYWdlID0gXCJWb3VzIGF2ZXogZMOpasOgIGFjaGV0w6kgY2UgdHJpcFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1eVRyaXAodHJpcDogVHJpcCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwucG9zdFRyaXBBUEkodHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBjcmVhdGluZyB0cmlwIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL3BlcnNvXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNyZWF0aW5nIHRyaXAgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdHJpcHMnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RvcCB9IGZyb20gJy4uL3N0b3Avc3RvcCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlwe1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBsZWF2aW5nPzogRGF0ZTtcclxuICAgIGNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBjb250aW5lbnQ/OiBzdHJpbmc7XHJcbiAgICByYXRpbmc/OiBudW1iZXI7XHJcbiAgICBzdG9wcz86IFN0b3BbXTtcclxuICAgIHZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcCBpbXBsZW1lbnRzIElUcmlwIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsZWF2aW5nPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgY291bnRyeT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgY29udGluZW50Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByYXRpbmc/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHN0b3BzPzogU3RvcFtdLFxyXG4gICAgICAgIHB1YmxpYyB2aXNpYmxlPzogYm9vbGVhbikgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Ew6l0YWlscyBUcmlwPC9oMj5cXHJcXG5cXHJcXG48dWwgKm5nSWY9XFxcInNlbGVjdGVkVHJpcFxcXCIgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1hZGRyZXNzLWJvb2tcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uaWR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/Lm5hbWV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdXJnbGFzc1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG90ZWxcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY291bnRyeX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEtaG9tZVxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb250aW5lbnR9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWZpcnN0LW9yZGVyXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LnJhdGluZ319PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJidXlUcmlwKHNlbGVjdGVkVHJpcClcXFwiIFtkaXNhYmxlZF09XFxcImlzQm91Z2h0XFxcIj5Bam91dGVyIMOgIG1lcyB0cmlwczwvYnV0dG9uPjwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICB7e2lzQm91Z2h0TWVzc2FnZX19XFxyXFxuICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJpc0JvdWdodFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ3N0b3AnXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGluayBidG4tbWRcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPiBBam91dGVyIFN0b3BzPC9hPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvaDQ+ICAgIFxcclxcbiAgICA8L2xpPiAgIFxcclxcbjwvdWw+XFxyXFxuPHVsIGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICBWaXN1YWxpc2VyIFN0b3BzXFxyXFxuICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWydlZGl0J11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+PC9hPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvaDQ+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuPGZvb3RlciBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnlcXFwiPlJldG91cjwvYnV0dG9uPlxcclxcbjwvZm9vdGVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW57XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBJU3RvcCwgU3RvcCB9IGZyb20gJy4uL3N0b3Avc3RvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHJpcC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcHVzZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcHVzZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcbiAgICBwdWJsaWMgdXNlck1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNUcmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkVHJpcDogVHJpcDtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gY29uc3RhbnQgZm9yIHN3aXBlIGFjdGlvbjogbGVmdCBvciByaWdodFxyXG4gICAgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwRGV0YWlsU2VydmljZTogVHJpcERldGFpbFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXJNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1lc1RyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdGlvbiB0cmlnZ2VyZWQgd2hlbiB1c2VyIHN3aXBlc1xyXG4gICAgc3dpcGUoY3VycmVudEluZGV4OiBudW1iZXIsIGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XHJcbiAgICAgICAgLy8gb3V0IG9mIHJhbmdlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHRoaXMubWVzVHJpcHMubGVuZ3RoIHx8IGN1cnJlbnRJbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8vIHN3aXBlIHJpZ2h0LCBuZXh0IGF2YXRhclxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGN1cnJlbnRJbmRleCA9PT0gdGhpcy5tZXNUcmlwcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpc0xhc3QgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN3aXBlIGxlZnQsIHByZXZpb3VzIGF2YXRhclxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaXJzdCA9IGN1cnJlbnRJbmRleCA9PT0gMDtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gaXNGaXJzdCA/IHRoaXMubWVzVHJpcHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2dnbGUgYXZhdGFyIHZpc2liaWxpdHlcclxuICAgICAgICB0aGlzLm1lc1RyaXBzLmZvckVhY2goKHgsIGkpID0+IHgudmlzaWJsZSA9IChpID09PSBuZXh0SW5kZXgpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyVHJpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRVc2VyVHJpcHMoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZ2V0VXNlclRyaXBBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNUcmlwcy5mb3JFYWNoKCh4LCBpKSA9PiBpID4gMCA/IHgudmlzaWJsZSA9IGZhbHNlIDogeC52aXNpYmxlID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBnZXQgeW91ciB0cmlwcyBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9wcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3RyaXBzJywgaWQsICdzdG9wJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXAodHJpcDogVHJpcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gdHJpcDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcInVzZXJ0cmlwXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLm1lc1RyaXBzLnNwbGljZSh0aGlzLm1lc1RyaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRyaXApLCAxKTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBsaXN0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e3VzZXJNZXNzYWdlfX08L2gyPlxcclxcblxcclxcbjxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt0cmlwVG9EZWxldGVdPVxcXCJzZWxlY3RlZFRyaXBcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuXFxyXFxuPGgxPk1lcyBUcmlwczwvaDE+XFxyXFxuPGgyPlN3aXBlIDxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+IE91IDxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1yaWdodFxcXCI+PC9pPjwvaDI+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIG1lc1RyaXBzOyBsZXQgaWR4PWluZGV4XFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyIHN3aXBlLWJveFxcXCIgXFxyXFxuICAgICAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoaWR4LCAkZXZlbnQudHlwZSlcXFwiIChzd2lwZXJpZ2h0KT1cXFwic3dpcGUoaWR4LCAkZXZlbnQudHlwZSlcXFwiXFxyXFxuICAgICBbY2xhc3MudmlzaWJsZV09XFxcInRyaXAudmlzaWJsZVxcXCIgW2NsYXNzLmhpZGRlbl09XFxcIiF0cmlwLnZpc2libGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlRyaXA8L2g0PlxcclxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+Q29udGllbnQge3t0cmlwPy5zdG9wcy5sZW5ndGh9fSBzdG9wczwvaDU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJjYXJkLWltZy10b3AgZmEgZmEtcGljdHVyZS1vIGZhLTJ4XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj4jIFLDqXNlcnZhdGlvbiA6IHt7dHJpcD8uaWR9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Ob20gOiB7e3RyaXA/Lm5hbWV9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5EYXRlIGRlIGTDqXBhcnQgOiB7e3RyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+UGF5cyA6IHt7dHJpcD8uY291bnRyeX19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkNvbnRpbmVudCA6IHt7dHJpcD8uY29udGluZW50fX08L3A+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlckJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1saW5rIGJ0biBidG4tbWQgYnRuLXNlY29uZGFyeSBhY3RpdmUgY29sLW1kLTYgdXNlckFjdGlvbnNcXFwiIChjbGljayk9XFxcImRlbGV0ZVRyaXAodHJpcClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCI+PC9pPiBTdXBwcmltZXI8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWxpbmsgYnRuIGJ0bi1tZCBidG4taW5mbyBhY3RpdmUgY29sLW1kLTYgdXNlckFjdGlvbnNcXFwiIChjbGljayk9XFxcImFkZFN0b3BzKHRyaXAuaWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPiBBam91dGVyIFN0b3BzPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXHJcXG4gICAgICAgIDx1bCAqbmdGb3I9XFxcImxldCBzdG9wIG9mIHRyaXA/LnN0b3BzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGk+U3RvcCAjIHt7aSArIDF9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPk5vbSA6IHt7c3RvcD8ubmFtZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+RGF0ZSBkJ2Fycml2w6llIDoge3tzdG9wPy5hcnJpdmFsIHwgZm1UcmlwRGF0ZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+RGF0ZSBkZSBkw6lwYXJ0IDoge3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+VmlsbGUgOiB7e3N0b3A/LmNpdHl9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkN1aXNpbmUgOiB7e3N0b3A/LmN1aXNpbmV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkd1aWRlIDoge3tzdG9wPy5ndWlkZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+UXVvdGUgOiB7e3N0b3A/LnF1b3RlfX08L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuPGEgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYmFja0J1dHRvblxcXCIgKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPiBSZXRvdXI8L2E+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsaDIsaDMsaDR7XFxyXFxuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4IDFweCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG5saXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGUtYm94ID4gZGl2OmZpcnN0LW9mLXR5cGUsIGRpdiBkaXYgPiB1bHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlLWJveCA+IGRpdjpmaXJzdC1vZi10eXBle1xcclxcbiAgICBwYWRkaW5nOiAxLjUlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuOTUpIDQyJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuOTUpKSkpKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjk1KSk7XFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyM0MTg5YzcnLCBHcmFkaWVudFR5cGU9MSApO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgZGl2ID4gdWx7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDQ3JSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpIDEwMCUpO1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZWRlZGVkJywgR3JhZGllbnRUeXBlPTEgKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1mb290ZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJCdXR0b25ze1xcclxcbiAgICBwYWRkaW5nOiA1JSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja0J1dHRvbntcXHJcXG4gICAgbWFyZ2luOiAyJSAwIDIlIDA7XFxyXFxufVxcclxcblxcclxcbi51c2VyQWN0aW9uc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJBY3Rpb25zOmZpcnN0LWNoaWxke1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZS1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyYXkgaW5zZXQ7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyYXkgaW5zZXQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmF5IGluc2V0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpKSwgY29sb3Itc3RvcCgyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkpLCBjb2xvci1zdG9wKDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSksIGNvbG9yLXN0b3AoNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpKSwgY29sb3Itc3RvcCg4NSUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykpKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2UyZTJlMicsIGVuZENvbG9yc3RyPScjZmVmZWZlJywgR3JhZGllbnRUeXBlPTAgKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmF0aW5nJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYXRpbmcuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcclxuICAgIEBPdXRwdXQoKSByYXRpbmdDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHB1YmxpYyByYXRlczogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgZGlmZlJhdGVzOiBudW1iZXJbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmF0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpZmZSYXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlmZlJhdGVzLnB1c2goMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmF0aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF0aW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJhdGluZyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yYXRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLnJhdGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmF0ZXMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGlmZlN0YXJzID0gdGhpcy5kaWZmUmF0ZXMubGVuZ3RoIC0gdGhpcy5yYXRlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuZGlmZlJhdGVzLmxlbmd0aCA9IGRpZmZTdGFycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhyYXRpbmc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xyXG4gICAgICAgIHRoaXMucmF0aW5nQ2xpY2suZW1pdCh7XHJcbiAgICAgICAgICAgIHJhdGluZzogcmF0aW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKGNsaWNrKT1cXFwib25DbGljayhyYXRlcy5sZW5ndGgpXFxcIj5cXHJcXG4gICAgPHNwYW4gKm5nSWY9XFxcInJhdGVzICYmIHJhdGVzLmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgciBvZiByYXRlc1xcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc3RhclxcXCI+PC9zcGFuPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDxzcGFuICpuZ0lmPVxcXCJkaWZmUmF0ZXMgJiYgZGlmZlJhdGVzLmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgciBvZiBkaWZmUmF0ZXNcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHkgc3Rhci1lbXB0eVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmF0aW5nLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic3BhbiB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFBsYWNlIGxlcyDDqXRvaWxlcyDDoCBnYXVjaGUgZHUgY29udGFpbmVyICovXFxyXFxuLnN0YXIsIC5zdGFyLWVtcHR5e1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3AsIElTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0b3AuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RvcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN1YjogYW55O1xyXG4gICAgcHVibGljIGlzQ3JlYXRlRm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0cmlwSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNlbGVjdGVkU3RvcDogU3RvcDtcclxuICAgIHB1YmxpYyBkZWNpbWFsczogbnVtYmVyO1xyXG4gICAgcHVibGljIG1pbjogbnVtYmVyO1xyXG4gICAgcHVibGljIG1heDogbnVtYmVyO1xyXG4gICAgcHVibGljIGF1dG9Db3JyZWN0OiBib29sZWFuO1xyXG4gICAgcHVibGljIGN1aXNpbmVzOiBBcnJheTx7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcclxuICAgIHB1YmxpYyBzb3VyY2VDdWlzaW5lOiBBcnJheTx7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcclxuICAgIHB1YmxpYyBjdWlzaW5lOiB7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9O1xyXG4gICAgcHVibGljIGd1aWRlOiB7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9O1xyXG5cclxuICAgIHB1YmxpYyBndWlkZXM6IEFycmF5PHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmRlY2ltYWxzID0gMDtcclxuICAgICAgICB0aGlzLm1pbiA9IDE7XHJcbiAgICAgICAgdGhpcy5tYXggPSAxMDtcclxuICAgICAgICB0aGlzLmF1dG9Db3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IG5ldyBTdG9wKDEsIFwiUGxhZ2VcIiwgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgXCJNb250csOpYWxcIiwgdGhpcy5jdWlzaW5lLCB0aGlzLmd1aWRlLCAwLCAwLCAwLCA4LCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY3Vpc2luZSBkcm9wZG93biBcclxuICAgICAgICB0aGlzLmN1aXNpbmUgPSB7IHRleHQ6IFwiSXRhbGllbm5lXCIsIHZhbHVlOiAyIH07ICAgICAgXHJcbiAgICAgICAgdGhpcy5jdWlzaW5lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc291cmNlQ3Vpc2luZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc291cmNlQ3Vpc2luZS5wdXNoKHsgdGV4dDogXCJKYXBvbmFpc2VcIiwgdmFsdWU6IDEgfSwgeyB0ZXh0OiBcIkl0YWxpZW5uZVwiLCB2YWx1ZTogMiB9LCB7IHRleHQ6IFwiU3XDqWRvaXNlXCIsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJQb3J0dWd1YWlzZVwiLCB2YWx1ZTogNCB9LCB7IHRleHQ6IFwiQWZyaWNhaW5lXCIsIHZhbHVlOiA1IH0sIHsgdGV4dDogXCJBbGxlbWFuZGVcIiwgdmFsdWU6IDYgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIkJyaXRhbm5pcXVlXCIsIHZhbHVlOiA3IH0sIHsgdGV4dDogXCJBbcOpcmljYWluZVwiLCB2YWx1ZTogOCB9LCB7IHRleHQ6IFwiU3XDqWRvaXNlXCIsIHZhbHVlOiA5IH0pO1xyXG5cclxuICAgICAgICAvLyBndWlkZSBjb21ib2JveFxyXG4gICAgICAgIHRoaXMuZ3VpZGUgPSB7IHRleHQ6IFwiR3VpZGUgSnVuaW9yXCIsIHZhbHVlOiAyIH07XHJcbiAgICAgICAgdGhpcy5ndWlkZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmd1aWRlcy5wdXNoKHsgdGV4dDogXCJHdWlkZSBNaWNoZWxpblwiLCB2YWx1ZTogMSB9LCB7IHRleHQ6IFwiR3VpZGUgSnVuaW9yXCIsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJHdWlkZSBTZW5pb3JcIiwgdmFsdWU6IDMgfSwgeyB0ZXh0OiBcIkd1aWRlIFByaXbDqVwiLCB2YWx1ZTogNCB9KTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyaW5nIGN1aXNpbmVzXHJcbiAgICAgICAgdGhpcy5jdWlzaW5lcyA9IHRoaXMuc291cmNlQ3Vpc2luZS5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vY2hlY2sgaWYgd2VyZSBub3QgaW4gL3N0b3AgeWV0LCBqc3V0IGRpc3BsYXkgYSBtZXNzYWdlIGZvciB0aGUgdXNlclxyXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgfHwgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiQ3LDqWVyIHVuIG5vdXZlYXUgc3RvcCBwb3VyIGNlIHRyaXBcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHBhcmVudCBBY3RpdmF0ZWRSb3V0ZSBvZiB0aGlzIHJvdXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyZW50LnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlwSWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZHUgcGFyZW50IHBvdXIgc2F1dmVyIHN0b3AgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGaWx0ZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmN1aXNpbmVzID0gdGhpcy5zb3VyY2VDdWlzaW5lLmZpbHRlcigocykgPT4gcy50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdChjcmVhdGVGb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcCA9IDxJU3RvcD5jcmVhdGVGb3JtLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3N0U3RvcFNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RvcFNlcnZpY2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFNlcnZpY2UucG9zdFN0b3BCeUlkQVBJKHRoaXMudHJpcElkLCB0aGlzLnNlbGVjdGVkU3RvcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIHNhdmVkIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmFycml2YWwgPSBkYXRhLmFycml2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubGVhdmluZyA9IGRhdGEubGVhdmluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5jaXR5ID0gZGF0YS5jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmN1aXNpbmUgPSBkYXRhLmN1aXNpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuZ3VpZGUgPSBkYXRhLmd1aWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLnF1b3RlID0gZGF0YS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYW50IHNhdmUgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9ICF0aGlzLmlzQ3JlYXRlRm9ybTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBkZXN0cm95XCIpO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVN0b3Age1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFycml2YWw6IERhdGU7XHJcbiAgICBsZWF2aW5nOiBEYXRlO1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY3Vpc2luZTogYW55O1xyXG4gICAgZ3VpZGU6IGFueTtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICBxdW90ZTogbnVtYmVyO1xyXG4gICAgc2hvd1BvcFVwOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcCBpbXBsZW1lbnRzIElTdG9wIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBhcnJpdmFsOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxlYXZpbmc6IERhdGUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2l0eTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGN1aXNpbmU6IGFueSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBndWlkZTogYW55LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGxhdGl0dWRlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgb3JkZXI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBxdW90ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHNob3dQb3BVcDogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxyXFxuICAgIDxoND57e21lc3NhZ2V9fTwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIiAqbmdJZj1cXFwiaXNTaG93Rm9ybVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8aDQ+PHNwYW4+PGEgW3JvdXRlckxpbmtdPVxcXCInLi4vZWRpdCdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1saW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlnaHRidWxiLW9cXFwiPjwvaT4gU3VnZ2VzdGlvbnM8L2E+PC9zcGFuPjwvaDQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRTdG9wKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgIDxmb3JtICNmb3JtQ3JlYXRlU3RvcD1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChmb3JtQ3JlYXRlU3RvcClcXFwiICpuZ0lmPVxcXCJpc0NyZWF0ZUZvcm1cXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5vbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIGlkPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjaXR5XFxcIj5WaWxsZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNpdHlcXFwiIGlkPVxcXCJjaXR5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmNpdHlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFycml2YWxcXFwiPkRhdGUgQXJyaXbDqWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jYWxlbmRhciBuYW1lPVxcXCJhcnJpdmFsXFxcIiBpZD1cXFwiYXJyaXZhbFxcXCIgW2ZvY3VzZWREYXRlXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuYXJyaXZhbFxcXCIgcmVxdWlyZWQ+PC9rZW5kby1jYWxlbmRhcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGVhdmluZ1xcXCI+RGF0ZSBEw6lwYXJ0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwibGVhdmluZ1xcXCIgaWQ9XFxcImxlYXZpbmdcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmxlYXZpbmdcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjdWlzaW5lXFxcIj5DdWlzaW5lPC9sYWJlbD4gICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGtlbmRvLWRyb3Bkb3dubGlzdCBuYW1lPVxcXCJjdWlzaW5lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBhZGRpbmc6MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cXFwiY3Vpc2luZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGV4dEZpZWxkXT1cXFwiJ3RleHQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlRmllbGRdPVxcXCIndmFsdWUnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImN1aXNpbmVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsdGVyYWJsZV09XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyQ2hhbmdlKT1cXFwiaGFuZGxlRmlsdGVyKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZW1wbGF0ZVxcXCI+e3sgZGF0YUl0ZW0udmFsdWUgfX08L3NwYW4+IHt7IGRhdGFJdGVtLnRleHQgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SGVhZGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+Q3Vpc2luZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RGb290ZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND57e2N1aXNpbmVzLmxlbmd0aH19IHZhcmnDqXTDqXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3ROb0RhdGFUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND48c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+PGJyIC8+PGJyIC8+QXVjdW5lcyBDdWlzaW5lczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJndWlkZVxcXCI+R3VpZGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jb21ib2JveCBuYW1lPVxcXCJndWlkZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Z2dlc3RdPVxcXCJ0cnVlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBhZGRpbmc6MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cXFwiJ2UuZy4gR3VpZGUgU2VuaW9yJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVxcXCJndWlkZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0RmllbGRdPVxcXCIndGV4dCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZUZpZWxkXT1cXFwiJ3ZhbHVlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImd1aWRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0NvbWJvQm94SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZW1wbGF0ZVxcXCI+e3sgZGF0YUl0ZW0udmFsdWUgfX08L3NwYW4+IHt7IGRhdGFJdGVtLnRleHQgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvQ29tYm9Cb3hIZWFkZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5HdWlkZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Db21ib0JveEZvb3RlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Z3VpZGVzLmxlbmd0aH19IGRpc3BvbmlibGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Tm9EYXRhVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+PHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPjxiciAvPjxiciAvPkF1Y3VucyBndWlkZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tY29tYm9ib3g+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJxdW90ZVxcXCI+UXVvdGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1udW1lcmljdGV4dGJveCBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiBzdHlsZT1cXFwicGFkZGluZzowXFxcIiBbcmVzdHJpY3REZWNpbWFsc109XFxcInRydWVcXFwiIFtkZWNpbWFsc109XFxcImRlY2ltYWxzXFxcIiBbbWluXT1cXFwibWluXFxcIlxcclxcbiAgICAgICAgICAgIFttYXhdPVxcXCJtYXhcXFwiIFtzcGlubmVyc109XFxcInRydWVcXFwiIFtmb3JtYXRdPVxcXCInbjAnXFxcIiBbc3RlcF09XFxcIjFcXFwiIFthdXRvQ29ycmVjdF09XFxcImF1dG9Db3JyZWN0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLnF1b3RlXFxcIiBuYW1lPVxcXCJxdW90ZVxcXCIgaWQ9XFxcInF1b3RlXFxcIiByZXF1aXJlZD48L2tlbmRvLW51bWVyaWN0ZXh0Ym94PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLXN1Y2Nlc3MgYWN0aXZlXFxcIj5Bam91dGVyPC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0b3AuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZW1wbGF0ZXsgXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxcclxcbiAgICBjb2xvcjogI2ZmZjsgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxyXFxuICAgIHdpZHRoOiAxOHB4OyBcXHJcXG4gICAgaGVpZ2h0OiAxOHB4OyBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBsYXRlID4gaDQgeyBcXHJcXG4gICAgZm9udC1zaXplOiAxZW07IFxcclxcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcC9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3AtZWRpdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFN0b3BDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNBZG1pbjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0b2dnbGVUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gc2Nyb2xsdmlld1xyXG4gICAgcHVibGljIGl0ZW1zOiBhbnlbXTtcclxuICAgIHB1YmxpYyBhbmltYXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGVuZGxlc3M6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSBcIlNob3dcIjtcclxuICAgICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW47XHJcblxyXG4gICAgICAgIC8vIHNjcm9sbHZpZXdcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgdGl0bGU6ICdOYXR1cmUnLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjSmpZdUInIH0sIHsgdGl0bGU6ICdFeGN1cnNpb24nLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJjVEJOYUwnIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6ICdBw6lyb25hdXRpcXVlJywgdXJsOiAnaHR0cDovL2JpdC5seS8yY0psM0N4JyB9KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kbGVzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IFwiMjAwcHhcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IFwiMjAwcHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsICYmIHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RvcHNCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHMvXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBQT1AgVVAgTk9UIFdPUktJTj8hIHRlc3QgaW4gYW5vdGhlciBwcm9qZWN0XHJcbiAgICBvblRvZ2dsZVBvcFVwKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVHJpcC5zdG9wc1tpXS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAuc3RvcHNbaV0uc2hvd1BvcFVwID0gIXRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzW2ldLnNob3dQb3BVcDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVGV4dCA9IHRoaXMuc2hvd1BvcFVwID8gXCJIaWTQtVwiIDogXCJTaG93XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcHNCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbmV3IFRyaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZWF2aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRpbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJhdGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgZGV0YWlsIDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgYWpvdXRlciB1bmUgdGVtZXByYXR1cmUgcG91ciBjZSBzdG9wXHJcbiAgICBham91dGVUZW1wKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi93ZWF0aGVycy9cIiArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGUgc3RvcCBieSBpdHMgaWRcclxuICAgIGRlbGV0ZVN0b3AoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWQ7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJzdG9wQWRtaW5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkaXNwbGF5IGxpc3QgYWZ0ZXIgZGVsZXRpbmcgYSBzdG9wLlxyXG4gICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZCh0aGlzLnNlbGVjdGVkVHJpcC5pZCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTIgZGVsZXRlQmxvY2tcXFwiPlxcclxcbiAgICA8ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcbjwvZGl2Plxcclxcblxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTkgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgPGxpPjxoMz5TdG9wczwvaDM+PC9saT5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2Ygc2VsZWN0ZWRUcmlwPy5zdG9wc1xcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBjb2wtc20tMTIgcm93QmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zdG9wXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gI2FuY2hvciBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGJ0bi1tZFxcXCIgKGNsaWNrKT1cXFwib25Ub2dnbGVQb3BVcChzdG9wLmlkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7dG9nZ2xlVGV4dH19IETDqXRhaWxzIHt7c3RvcD8ubmFtZX19XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wVXBXcmFwcGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGtlbmRvLXBvcHVwIGNsYXNzPVxcXCJwb3BVcENvbnRlbnRcXFwiIFthbmNob3JdPVxcXCJhbmNob3JcXFwiIChhbmNob3JWaWV3cG9ydExlYXZlKT1cXFwic2hvdyA9IGZhbHNlXFxcIiAqbmdJZj1cXFwic3RvcD8uc2hvd1BvcFVwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fSwge3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19LCAgw4Age3tzdG9wPy5jaXR5fX0sIEN1aXNpbmUge3tzdG9wPy5jdWlzaW5lfX0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3N0b3A/Lmd1aWRlfX0sIFF1b3TDqSB7e3N0b3A/LnF1b3RlfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9rZW5kby1wb3B1cD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFpc0FkbWluXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyIGFjdGl2ZSBjcnVkQnV0dG9uc1xcXCIgKGNsaWNrKT1cXFwiZGVsZXRlU3RvcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIj48L2k+IFN1cHByaW1lcjwvYnV0dG9uPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1zdWNjZXNzIGFjdGl2ZSBjcnVkQnV0dG9uc1xcXCIgKGNsaWNrKT1cXFwiYWpvdXRlVGVtcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT4gVGVtcMOpcmF0dXJlPC9idXR0b24+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcclxcbiAgICA8a2VuZG8tc2Nyb2xsdmlldyBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiBbZGF0YV09XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbYW5pbWF0ZV09XFxcImFuaW1hdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFtlbmRsZXNzXT1cXFwiZW5kbGVzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgW3dpZHRoXT1cXFwid2lkdGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJoZWlnaHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFthcnJvd3NdPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbcGFnZWFibGVdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJkZW1vLXRpdGxlXFxcIj57e2l0ZW0udGl0bGV9fTwvaDI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9J3t7aXRlbS51cmx9fScgYWx0PSd7e2l0ZW0udGl0bGV9fScgW25nU3R5bGVdPVxcXCJ7bWluV2lkdGg6IHdpZHRofVxcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDwva2VuZG8tc2Nyb2xsdmlldz5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgYWxlcnQgYWxlcnQtZGFuZ2VyIG5vU3RvcHNcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiAqbmdJZj1cXFwiIXNlbGVjdGVkVHJpcD8uc3RvcHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgPGg0PjxpIGNsYXNzPVxcXCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVxcXCI+PC9pPiBBdWN1bnMgU3RvcHM8L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdG9wZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzcGFue1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIGxpID4gZGl2Omxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlQmxvY2t7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vU3RvcHN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIG1hcmdpbjogMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwQ29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjNzg3ODc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEsIDUsIDUsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBXcmFwcGVye1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yb3dCbG9ja3tcXHJcXG4gICAgYm94LXNoYWRvdzoycHggMnB4IDJweCBncmF5LC0xcHggLTFweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jcnVkQnV0dG9uc3tcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5rLXNjcm9sbHZpZXctd3JhcCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5kZW1vLXRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZtSG91ckxvY2FsJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0SG91ciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGRhdGU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCw1KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1UcmlwRGF0ZScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEYXRlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkKS5mb3JtYXQoJ0xMJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLnBpcGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kYXRlaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3OTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzk4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0L2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc1Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWNoYXJ0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzcyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZHJvcGRvd25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItcG9wdXAvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODA4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItc2Nyb2xsdmlldy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDI3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGFtbWVyanMvaGFtbWVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTBhZmFkY2U1YmM1ZGU2MjA3ODNcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMGFmYWRjZTViYzVkZTYyMDc4M1xuLy8gbW9kdWxlIGlkID0gMjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2UwYWZhZGNlNWJjNWRlNjIwNzgzXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==