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
	__webpack_require__(265);
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

	module.exports = (__webpack_require__(2))(1274);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_c6f4cef69d338f85124a;

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

	module.exports = (__webpack_require__(2))(964);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(918);

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

	module.exports = (__webpack_require__(2))(903);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(905);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(904);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(907);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(909);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(914);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(908);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(906);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(916);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(915);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(911);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(912);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(910);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(902);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(913);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(917);

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

	module.exports = (__webpack_require__(2))(870);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(872);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(871);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(7).parseInt;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(920);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(7).parseFloat;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(919);

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

	module.exports = (__webpack_require__(2))(890);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(900);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(901);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(891);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(892);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(893);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(894);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(895);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(896);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(897);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(898);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(899);

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

	module.exports = (__webpack_require__(2))(873);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(874);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(875);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(876);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(877);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(878);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(879);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(880);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(881);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(882);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(883);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(884);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(885);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(886);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(887);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(888);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(889);

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

	module.exports = (__webpack_require__(2))(951);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(956);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(963);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(954);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(946);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(947);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(952);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(957);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(959);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(942);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(943);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(944);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(945);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(948);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(949);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(950);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(953);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(955);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(958);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(960);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(961);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(962);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(937);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(938);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(939);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(940);

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

	module.exports = (__webpack_require__(2))(865);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(867);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(866);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(869);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(868);

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

	module.exports = (__webpack_require__(2))(854);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(852);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(858);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(855);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(861);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(863);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(851);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(857);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(848);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(862);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(846);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(860);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(859);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(853);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(856);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(845);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(847);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(850);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(849);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(864);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(254);

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

	module.exports = (__webpack_require__(2))(936);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(941);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(483);

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

	module.exports = (__webpack_require__(2))(1012);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(482);

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

	module.exports = (__webpack_require__(2))(484);

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

	module.exports = (__webpack_require__(2))(485);

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

	module.exports = (__webpack_require__(2))(976);

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

	module.exports = (__webpack_require__(2))(965);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(966);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(971);

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(974);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(975);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(969);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(972);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(970);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(973);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(967);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(968);

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

	module.exports = (__webpack_require__(2))(922);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(923);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(924);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(925);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(926);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(929);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(927);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(928);

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(930);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(931);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(932);

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(933);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(935);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(934);

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

	module.exports = (__webpack_require__(2))(993);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(994);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(996);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(995);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(998);

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(997);

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(999);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1000);

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1001);

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1275);

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(649);

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
	__webpack_require__(263);
	// paging
	var ng2_pagination_1 = __webpack_require__(264);
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

	module.exports = (__webpack_require__(2))(663);

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

	module.exports = (__webpack_require__(2))(648);

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

	module.exports = (__webpack_require__(2))(602);

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(79);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(163);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1054);

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

	module.exports = "<div class=\"container col-md-6 col-md-offset-3\">\r\n    <h1>Weather Form</h1>\r\n    <div>\r\n        <form (ngSubmit)=\"onSubmit(weatherForm)\" #weatherForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"weatherToSave.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"hour\">Hour</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"hour\" name=\"hour\" [(ngModel)]=\"weatherToSave.hour\" required />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"tempC\">Temp *C</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"tempC\" name=\"tempC\" [(ngModel)]=\"weatherToSave.tempC\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"summary\">Summary</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"summary\" name=\"summary\" [(ngModel)]=\"weatherToSave.summary\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid || modeEdit\">Submit</button>\r\n            <button *ngIf=\"modeEdit\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weatherForm.valid\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{weatherToSave.name}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Hour AM/PM</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.hour | fmHourLocal}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature *C</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.tempC}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Summary</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.summary}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Temperature F</div>\r\n            <div class=\"col-xs-9 pull-left\">{{weatherToSave.temperatureF}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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

	module.exports = "<header>\r\n    <h1>Bienvenue </h1>\r\n    <h2> {{userName}}</h2>\r\n</header>\r\n<a class=\"btn btn-md btn-info active\" [routerLink]=\"['/trips/perso']\">Mes trips</a>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<a class=\"btn btn-md btn-primary\" [routerLink]=\"['best']\">Meilleurs Trips</a>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<h3>Disponibles présentement</h3>\r\n\r\n<main class=\"col-md-12\">\r\n    <template *ngIf=\"!trips.length\">\r\n        <h3>Aucuns Trips</h3>\r\n    </template>\r\n    <div *ngFor=\"let trip of trips | paginate: { itemsPerPage: 8, currentPage: p }\" class=\"infosTrip col-md-2\">\r\n        <button (click)=\"deleteTrip(trip)\" kendoButton [primary]=\"true\" class=\"deleteTripButton\"><i class=\"fa fa-trash\"></i></button>\r\n        <ul>\r\n            <li>Nom : {{trip?.name}}</li>\r\n            <li>Pays : {{trip?.country}}</li>\r\n            <li>Continent : {{trip?.continent}}</li>\r\n            <li #anchor>\r\n                Rating : <rating class=\"rating\" *ngIf=\"trip?.rating\" [rating]='trip.rating' (ratingClick)=\"clickRating($event)\">\r\n                </rating>\r\n            </li>\r\n            <kendo-popup [anchor]=\"anchor\" class=\"popUpContent\" *ngIf=\"showPopUp\">\r\n                Quoté : {{trip?.rating}}\r\n            </kendo-popup>\r\n        </ul>\r\n        <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n        <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n    </div>\r\n\r\n    <section class=\"col-md-12\">\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </section>\r\n</main>\r\n\r\n<footer>\r\n    <section class=\"col-md-12\">\r\n        <a class=\"btn btn-lg btn-primary\" (click)=\"home()\"><i class=\"fa fa-home\"></i> Accueil</a>\r\n    </section>\r\n</footer>\r\n\r\n"

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
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin: 1% 0 1% 0;\r\n}\r\n\r\nheader{\r\n    background-color: azure;\r\n    padding: 2%;\r\n}\r\n\r\nheader > h1, header > h2{\r\n    display: inline;\r\n}\r\n\r\nmain{\r\n    text-align: center;\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n    padding: 0;\r\n}\r\n\r\n.infosTrip{\r\n    width: 20%;\r\n    height: 20%;\r\n    background-color:azure;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    text-align: center;\r\n    opacity: 0.4;\r\n    padding: 0;\r\n    margin: 2.5%;\r\n}\r\n\r\ndiv > ul{\r\n    text-align: left;\r\n    padding: 5%;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 1;\r\n    transition-property: all;\r\n    transition-duration: 1.5s;\r\n    transition-delay: 0s;\r\n    transform: rotateY(15deg);\r\n}\r\n.infosTrip:hover, section{\r\n    cursor: pointer;\r\n}\r\n\r\nsection{\r\n    float: left;\r\n    clear: both;\r\n    text-align: left;\r\n    padding: 0;\r\n}\r\n\r\npagination-controls{\r\n    text-align: center;\r\n    padding: 1% 0 1% 0;\r\n}\r\n\r\n.popUpContent{\r\n    max-width: 100px;\r\n    height: auto;\r\n    padding: 10px;\r\n    color: #787878;\r\n    background-color: rgba(30,144,255,.3);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.deleteTripButton{\r\n    float: right;\r\n    padding: 4%;\r\n}\r\n", ""]);
	
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

	module.exports = "<div class=\"col-md-2\">\r\n    <h4>{{message}}</h4>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\" *ngIf=\"isShowForm\">\r\n    <div class=\"col-md-12\">\r\n        <h4><span><a [routerLink]=\"'../edit'\" class=\"btn btn-lg btn-link\"><i class=\"fa fa-lightbulb-o\"></i> Suggestions</a></span></h4>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-success\" (click)=\"addStop()\"><i class=\"fa fa-plus\"></i></button>\r\n    <form #formCreateStop=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateStop)\" *ngIf=\"isCreateForm\">\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"name\">Nom</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedStop.name\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"city\">Ville</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"selectedStop.city\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"arrival\">Date Arrivée</label>\r\n            <kendo-calendar name=\"arrival\" id=\"arrival\" [focusedDate]=\"selectedStop.arrival\" [(ngModel)]=\"selectedStop.arrival\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"leaving\">Date Départ</label>\r\n            <kendo-calendar name=\"leaving\" id=\"leaving\" [focusedDate]=\"selectedStop.leaving\" [(ngModel)]=\"selectedStop.leaving\" required></kendo-calendar>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"cuisine\">Cuisine</label>             \r\n            <kendo-dropdownlist name=\"cuisine\"\r\n                                [data]=\"cuisines\"\r\n                                [textField]=\"'text'\"\r\n                                [valueField]=\"'value'\"\r\n                                [(ngModel)]=\"cuisine\"\r\n                                [filterable]=\"true\"\r\n                                (filterChange)=\"handleFilter($event)\"\r\n                                class=\"col-md-12\">\r\n                <template kendoDropDownListItemTemplate let-dataItem>\r\n                    <span class=\"template\">{{ dataItem.value }}</span> {{ dataItem.text }}\r\n                </template>\r\n                <template kendoDropDownListHeaderTemplate>\r\n                    <h4>Cuisines</h4>\r\n                </template>\r\n                <template kendoDropDownListFooterTemplate>\r\n                    <h4>{{cuisines.length}} variétés</h4>\r\n                </template>\r\n                <template kendoDropDownListNoDataTemplate>\r\n                    <h4><span class=\"k-icon k-i-warning\"></span><br /><br />Aucunes Cuisines</h4>\r\n                </template>\r\n            </kendo-dropdownlist>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"guide\">Guide</label>\r\n            <kendo-combobox name=\"guide\"\r\n                            [suggest]=\"true\" \r\n                            [placeholder]=\"'e.g. Guide Senior'\"\r\n                            [data]=\"guides\"\r\n                            [textField]=\"'text'\"\r\n                            [valueField]=\"'value'\"\r\n                            [(ngModel)]=\"guide\"\r\n                            class=\"col-md-12\"\r\n                            >\r\n                <template kendoComboBoxItemTemplate let-dataItem>\r\n                    <span class=\"template\">{{ dataItem.value }}</span> {{ dataItem.text }}\r\n                </template>\r\n                <template kendoComboBoxHeaderTemplate>\r\n                    <h4>Guides</h4>\r\n                </template>\r\n                <template kendoComboBoxFooterTemplate>\r\n                    <h4>{{guides.length}} disponibles</h4>\r\n                </template>\r\n                <template kendoDropDownListNoDataTemplate>\r\n                    <h4><span class=\"k-icon k-i-warning\"></span><br /><br />Aucuns guides</h4>\r\n                </template>\r\n            </kendo-combobox>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n            <label for=\"quote\">Quote</label>\r\n            <kendo-numerictextbox class=\"col-md-12\" [restrictDecimals]=\"true\" [decimals]=\"decimals\" [min]=\"min\"\r\n            [max]=\"max\" [spinners]=\"true\" [format]=\"'n0'\" [step]=\"1\" [autoCorrect]=\"autoCorrect\" [(ngModel)]=\"selectedStop.quote\" name=\"quote\" id=\"quote\" required></kendo-numerictextbox>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-md btn-success active\">Ajouter</button>\r\n\r\n    </form>\r\n\r\n</div>"

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

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-9\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\" class=\"col-md-12\">\r\n        <div class=\"col-md-8 col-sm-12 rowBlock\">\r\n            <span><i class=\"fa fa-stop\"></i></span>\r\n            <button #anchor class=\"btn btn-link btn-md\" (click)=\"onTogglePopUp(stop.id)\">\r\n                {{toggleText}} Détails {{stop?.name}}\r\n            </button>\r\n            <div class=\"popUpWrapper\">\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"stop?.showPopUp\">\r\n                    {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},  À {{stop?.city}}, Cuisine {{stop?.cuisine}},\r\n                    {{stop?.guide}}, Quoté {{stop?.quote}}\r\n                </kendo-popup>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n            <span><button [disabled]=\"!isAdmin\" class=\"btn btn-md btn-danger active crudButtons\" (click)=\"deleteStop(stop.id)\"><i class=\"fa fa-trash\"></i> Supprimer</button></span>\r\n            <span><button class=\"btn btn-md btn-success active crudButtons\" (click)=\"ajouteTemp(stop.id)\"><i class=\"fa fa-plus\"></i> Température</button></span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"col-md-3 col-sm-6\">\r\n    <span>put picture here</span>\r\n</div>\r\n<div class=\"col-md-12 alert alert-danger noStops\" role=\"alert\" *ngIf=\"!selectedTrip?.stops.length\">\r\n    <h4><i class=\"fa fa-exclamation-triangle\"></i> Aucuns Stops</h4>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.noStops{\r\n    text-align: center;\r\n    padding: 2%;\r\n    margin: 2% 0;\r\n}\r\n\r\n.popUpContent {\r\n    padding: 15px;\r\n    color: #787878;\r\n    background-color: rgba(0,0,0,.05);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.popUpWrapper{\r\n    min-width: 100px;\r\n    min-height: 5px;\r\n}\r\n\r\n.rowBlock{\r\n    box-shadow:2px 2px 2px gray,-1px -1px 2px white;\r\n}\r\n\r\n.crudButtons{\r\n    float: left;\r\n}", ""]);
	
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

	module.exports = (__webpack_require__(2))(763);

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(766);

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(790);

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(795);

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(754);

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(780);

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(668);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(769);

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(66);

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1020);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1025);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(815);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTliOGZhNTgzOTZhY2EwNWVhMmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvbWF0aC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcmVnZXhwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzPzUwYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcz81MDUyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzPzJhMDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oYW1tZXJqcy9oYW1tZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi1wYWdpbmF0aW9uL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXFCO0FBRXJCLHlHQUF3RztBQUN4RywyREFBMkU7QUFDM0UsdUNBQStDO0FBQy9DLDZDQUE2QztBQUM3QywwQkFBbUI7QUFFbkIseURBQXdEO0FBQ3hELEdBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBUSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxFQUFDO0FBQUMsS0FBSSxDQUFDLENBQUM7S0FDSixxQkFBYyxFQUFFLENBQUM7QUFDckIsRUFBQztBQUVELHNFQUFxRTtBQUNyRSxLQUFNLFFBQVEsR0FBRyxpREFBc0IsRUFBRSxDQUFDO0FBQzFDLEtBQU0sZUFBZSxHQUFHLGNBQVEsUUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkUsR0FBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNuRSxFQUFDOzs7Ozs7OztBQ3ZCRCxpRDs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGdGQUErRTtBQUMvRSxzREFBcUQ7O0FBRXJELHdCQUE0QjtBQUM1Qix3QkFBNEI7QUFDNUIseUJBQThCO0FBQzlCLHlCQUErQjtBQUMvQix5QkFBaUM7QUFDakMseUJBQTRCO0FBQzVCLHlCQUEwQjtBQUMxQix5QkFBNEI7QUFDNUIseUJBQTBCO0FBQzFCLHlCQUEyQjtBQUMzQiwwQkFBNEI7QUFDNUIsMEJBQXlCO0FBQ3pCLDBCQUF5QjtBQUN6QiwwQkFBOEI7QUFDOUIsMEJBQThCO0FBQzlCLDBCQUEyQjtBQUMzQiwwQkFBNkI7QUFFN0IsdUdBQXNHO0FBQ3RHLDBCQUE2QjtBQUM3QiwwQkFBMkI7Ozs7Ozs7QUN2QjNCO0FBQ0E7QUFDQSxnRDs7Ozs7O0FDRkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEOzs7Ozs7QUNuQkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGtEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBLGtEOzs7Ozs7QUNEQSxnRDs7Ozs7O0FDQUE7QUFDQSxvRDs7Ozs7O0FDREEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUNaQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7Ozs7OztBQ2pCQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7O0FDMUJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7QUNMQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7Ozs7OztBQ3RCQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUNQQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDOzs7Ozs7QUNKQSxpRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7Ozs7OztBQ0pBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxpRDs7Ozs7O0FDSEEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQ1pBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNkQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7OztBQ0FBLHVDQUF5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QUFDO1NBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDbEIsSUFBSSxFQUFFLEtBQUs7TUFDZCxDQUFDO0lBRVcsUUFBUSxDQU1wQjtBQU5ZLDZCQUFROzs7Ozs7O0FDVHJCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoibWFpbi1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOWI4ZmE1ODM5NmFjYTA1ZWEyYiIsImltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBpbXBvcnRzIGNpIGhhdXQsIGxlcyBwb2x5ZmlsbHMgcG91ciBlbmFibGVyIHVuIG5vdXZlbCBBUEkvd2ViIHN1cHBvcnQgZGFucyB1biBvbGQgYnJvd3Nlci9lbnZpcm9ubWVudFxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8vIEVuYWJsZSBlaXRoZXIgSG90IE1vZHVsZSBSZWxvYWRpbmcgb3IgcHJvZHVjdGlvbiBtb2RlXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG4gICAgbW9kdWxlWydob3QnXS5kaXNwb3NlKCgpID0+IHsgcGxhdGZvcm0uZGVzdHJveSgpOyB9KTtcbn0gZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLy8gQm9vdCB0aGUgYXBwbGljYXRpb24sIGVpdGhlciBub3cgb3Igd2hlbiB0aGUgRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEyNzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXHJcbi8vIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3R5cGVkJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbi8vIGVuYWJsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBpbiBkZWNvcmF0b3IgZnVuY3Rpb25zLiAocmVwbGFjZXMgcGFja2FnZXMgcmVmbGVjdC1tZXRhZGF0YSArIGVzNi1zaGltKVxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcG9seWZpbGxzLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5GdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODcxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5wYXJzZUludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykucGFyc2VGbG9hdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk51bWJlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODczKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5ibGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1YicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1cCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TdHJpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTUxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9kYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuam9pbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNvcnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc29tZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg0Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVnRXhwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha1NldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTcxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlJlZmxlY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVmbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNy9yZWZsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTkzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5OTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDAxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMjc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY0OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxvZ2luXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkJztcblxuLy8gbWFpbiBjb21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUcmlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmVzdFRyaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwVXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50JztcblxuLy8gc2VydmljZXNcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UnO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRm9ybWF0SG91ciB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlJztcbmltcG9ydCB7IFRyaXBEYXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlJ1xuLy8ga2VuZG8gVUkgbW9kdWxlc1xuaW1wb3J0IHsgRGF0ZUlucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0JztcclxuaW1wb3J0IHsgQ2hhcnRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItY2hhcnRzJztcclxuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItYnV0dG9ucyc7XHJcbmltcG9ydCB7IERyb3BEb3duc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducyc7XHJcbmltcG9ydCB7IFBvcHVwTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItcG9wdXAnO1xyXG5cclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG4vLyBwYWdpbmdcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIEJlc3RUcmlwQ29tcG9uZW50LFxuICAgICAgICBUcmlwRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUcmlwVXNlckNvbXBvbmVudCxcbiAgICAgICAgRWRpdFN0b3BDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSYXRpbmdDb21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIExheW91dE1vZHVsZSxcbiAgICAgICAgQ2hhcnRzTW9kdWxlLFxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIFBvcHVwTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcycsIGNvbXBvbmVudDogVHJpcENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2Jlc3QnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzL3BlcnNvJywgY29tcG9uZW50OiBUcmlwVXNlckNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sICAgICAgICAgIFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzLzppZCcsIGNvbXBvbmVudDogVHJpcERldGFpbENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3N0b3AnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZWRpdCcsIGNvbXBvbmVudDogRWRpdFN0b3BDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycy86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogV2VhdGhlckRldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdkZXRhaWwvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH1cbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMnLCBjb21wb25lbnQ6IFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnd2VhdGhlckNvbnN0cmFpbnRzLzppZCcsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY0OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciwgSVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1zVGltZU91dDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIkRhcGhEQ1wiLCBcImRhcGhAZGFwaC5jb21cIiwgXCJQQHNzdzByZCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tc1RpbWVPdXQgPSAzMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSA8SVVzZXI+Zm9ybS52YWx1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0udmFsaWQpO1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luU2VydmljZS5sb2dpbkFQSSh0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmlwcGVkVG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBsb2dpbiB1c2VyIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSA9IHRoaXMudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuID0gc3RyaXBwZWRUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBzZXJ2aWNlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucm9sZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucm9sZVtpXS50eXBlID09IFwiU3VwZXJVc2VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1cGVyVXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSW1wb3NzaWJsZSBkZSBsb2d1ZXIgbGUgdXNlciA6IFwiICsgdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnN0b3BMb2FkaW5nKCk7IH0sIHRoaXMubXNUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB1c2VyICA6IFwiICsgdGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJOYW1lOiBzdHJpbmcsIHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG4vL2ltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBlc3RBZG1pbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3VybExvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX3VybExvZ2luID0gJ2FwaS9hdXRoL3Rva2VuJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkFQSSh1c2VyOiBJVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxMb2dpbiwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVzdEFkbWluID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxNjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTA1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8aDM+TG9naW48L2gzPlxcclxcbiAgICA8Zm9ybSAjbG9naW49XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQobG9naW4pXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJOYW1lXFxcIj5Vc2VyIE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci51c2VyTmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIudXNlck5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+Q291cnJpZWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIuZW1haWwudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5FbWFpbCBlc3QgcmVxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+TW90IFBhc3NlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uc3VibWl0dGVkICYmICF1c2VyLnBhc3N3b3JkLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+TW90IFBhc3NlIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tc3VjY2Vzc1xcXCI+U2UgTG9ndWVyPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdj48aSAqbmdJZj1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZndcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZXJyb3JcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IG51bGwgJiYgdHlwZW9mKHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuICE9IFwidW5kZWZpbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2dlZCBpbiBzbyByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIDogXCIgKyB0aGlzLkxvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImd1YXJkIFwiICsgdGhpcy5Mb2dpblNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgYXtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QW5ndWxhcjJDb3JlU2VlZDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImxpbmstYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9zcGFuPiBTaWduIFVwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblxcXCI+PC9zcGFuPiBTaWduIEluXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3RyaXBzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJvYWRcXFwiPjwvc3Bhbj4gVHJpcHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2VhdGhlckNvbnN0cmFpbnRzJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcXFwiPjwvc3Bhbj4gU3RhdGlzdGlxdWVzIFRlbXBlcmF0dXJlc1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj4gTG9nT3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJBU1AuTkVUIENvcmVcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQVNQLk5FVCBDb3JlIGFuZCBDIyBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2V0LmFzcC5uZXQvJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIkFuZ3VsYXIgMiBhbmQgVHlwZVNjcmlwdCBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGNsaWVudC1zaWRlIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2FuZ3VsYXIuaW8vJyxcclxuICAgICAgICAgICAgICAgIGxpbmsyOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIldlYnBhY2tcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXNcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiZm9yIGxheW91dCBhbmQgc3R5bGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbyBXb3JsZDwvaDE+XFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGgzPkJpZW52ZW51ZSBTdXIgPHNwYW4+PHN0cm9uZz48aT5Bbmd1bGFyMkNvcmVTZWVkPC9pPjwvc3Ryb25nPjwvc3Bhbj4sIERlbW8gOiA8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uPlxcclxcbiAgICA8a2VuZG8tdGFic3RyaXAgW25nQ2xhc3NdPVxcXCInY29sLW1kLTEyJ1xcXCIgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1ib3R0b20nOiAnMiUnfVxcXCI+XFxyXFxuICAgICAgICA8a2VuZG8tdGFic3RyaXAtdGFiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXMgbGV0IGk9aW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcIml0ZW0uc3ViamVjdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cXFwiaSA9PSBzZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvVGFiQ29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7aXRlbT8uY29udGVudH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwie3tpdGVtPy5saW5rfX1cXFwiPnt7aXRlbT8ubGlua319PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XFxcInt7aXRlbT8ubGluazJ9fVxcXCI+e3tpdGVtPy5saW5rMn19PC9hPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwva2VuZG8tdGFic3RyaXAtdGFiPlxcclxcbiAgICA8L2tlbmRvLXRhYnN0cmlwPlxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8aDQ+TGVzIGNvbmNlcHRzIGltcG9ydGFudHMgOiA8L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcbiA8c2VjdGlvbj5cXHJcXG4gICAgPGtlbmRvLXBhbmVsYmFyIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tYm90dG9tJzogJzIlJ31cXFwiPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0NsaWVudC1zaWRlIG5hdmlnYXRpb24nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInU2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nJ1xcXCIgW3NlbGVjdGVkXT1cXFwidHJ1ZVxcXCIgW2V4cGFuZGVkXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0ZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2VicGFjayBkZXYgbWlkZGxld2FyZSdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJ1biB0aGUgd2VicGFjayBidWlsZCB0b29sLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSG90IG1vZHVsZSByZXBsYWNlbWVudCdcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBkZXZlbG9wbWVudCBtb2RlLCBubyBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0VmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkcydcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIHdlYnBhY2sgYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgPC9rZW5kby1wYW5lbGJhcj5cXG5cXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhLCBwID4gYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXZ7XFxyXFxuICAgIG1hcmdpbjogMSUgMDtcXHJcXG4gICAgcGFkZGluZzogMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcFNlcnZpY2UgfSBmcm9tICcuLi9zdG9wL3N0b3Auc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IFRyaXAsIElUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaXNEZWxldGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9EZWxldGVJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgb2JqZWN0VG9EZWxldGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRyaXBUb0RlbGV0ZTogSVRyaXA7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlU3VjY2VzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlkVG9EZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1Nob3dOb3RpZjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIF9zdG9wU2VydmljZTogU3RvcFNlcnZpY2UsIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHBvcCB1cCBvcGVuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZGVsZXRlIDogXCIgKyB0aGlzLmlzRGVsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU5vdGlmKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pZFRvRGVsZXRlID0gdGhpcy53ZWF0aGVyVG9EZWxldGVJZDtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInN0b3BBZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlU3RvcEJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcIndlYXRoZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZXJXZWF0aGVyQnlJZCh0aGlzLmlkVG9EZWxldGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RUb0RlbGV0ZSA9PSBcInVzZXJ0cmlwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVVc2VyVHJpcCh0aGlzLnRyaXBUb0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3BCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdG9wU2VydmljZS5kZWxldGVTdG9wQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIERFTEVURSBzdG9wIGluIGRlbGV0ZSBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgREVMRVRFIHN0b3AgaW4gZGVsZXRlIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVyV2VhdGhlckJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmRlbGV0ZVdlYXRoZXJCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBERUxFVEUgaW4gY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzZXJUcmlwKHRyaXA6IElUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcERldGFpbFNlcnZpY2UuZGVsZXRlVHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1Y2Nlc3MuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgdHJpcCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRpbmcgdHJpcFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFdlYXRoZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsV2VhdGhlciA9IFwiYXBpL3dlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBhbGwgd2VhdGhlciBvYmplY3RzXHJcbiAgICBnZXRBbGxXZWF0aGVyc0FQSSgpOiBPYnNlcnZhYmxlPElXZWF0aGVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXJbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB3ZWF0aGVyIG9iamVjdFxyXG4gICAgcG9zdFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVDogICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHB1dFdlYXRoZXJBUEkod2VhdGhlcjogV2VhdGhlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod2VhdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmxXZWF0aGVyLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBieSBpZFxyXG4gICAgZ2V0V2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SVdlYXRoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0IGRldGFpbHMgYnkgbmFtZVxyXG4gICAgZ2V0V2VhdGhlckJ5TmFtZUFQSShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9CeU5hbWUvXCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IGlkXHJcbiAgICBkZWxldGVXZWF0aGVyQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxXZWF0aGVyICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwic3VjY2VzIGRlbGV0ZSB3ZWF0aGVyLCByZXNwIHdlIGdldCBpbiBzZXJ2aWNlIDogXCIgKyBlcnJvcikpICAgICAgXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi9zdG9wJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3BTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFN0b3A6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFN0b3AgPSAnYXBpL3N0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BCeUlkQVBJKGlkOiBudW1iZXIsIHN0b3A6IFN0b3ApOiBPYnNlcnZhYmxlPElTdG9wPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHN0b3AuY3Vpc2luZSA9IHN0b3AuY3Vpc2luZVtcInRleHRcIl07XHJcbiAgICAgICAgc3RvcC5ndWlkZSA9IHN0b3AuZ3VpZGVbXCJ0ZXh0XCJdO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0b3ApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsU3RvcCArIFwiL1wiICsgaWQsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElTdG9wPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9wQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwiZGVsZXRlIHN0b3Agd2l0aCBpZCA6IFwiICsgaWQpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGUgc3RvcCBcIiArIGVycm9yKSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxUcmlwOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gXCJhcGkvdHJpcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCAgOiBnZXQgdHJpcCBieS5cclxuICAgIGdldFRyaXBCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgZ2V0IHRyaXBzIGZvciBsb2dnZWQgaW4gdXNlci5cclxuICAgIGdldFVzZXJUcmlwQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL3VzZXJcIiwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogICAgMSB0cmlwIG9iamVjdC5cclxuICAgIHBvc3RUcmlwQVBJKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0cmlwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmxUcmlwLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxUcmlwICsgXCIvdXNlclRyaXAvXCIgKyB0cmlwLmlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxhbnk+Y29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImlzU2hvd05vdGlmXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtc3VjY2Vzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgPHA+QWN0aW9uIGVmZmVjdHXDqWUuPC9wPiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiaWRUb0RlbGV0ZVxcXCI+XFxyXFxuICAgICAgICA8aDM+U3VjY8OocyBzdXBwcmltZXIgIzwvaDM+XFxyXFxuICAgICAgICA8aDQ+e3tpZFRvRGVsZXRlfX08L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiaGlkZU5vdGlmKClcXFwiPkhpZGU8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48a2VuZG8tZGlhbG9nICpuZ0lmPVxcXCJpc0RlbGV0ZVxcXCIgKGNsb3NlKT1cXFwiY2FuY2VsRGVsZXRlKClcXFwiPlxcclxcbiAgICA8a2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS4zZW07XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+IFN1cHByaW1lciBkb25uw6llXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctdGl0bGViYXI+XFxyXFxuICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFjdGlvbiBpcnLDqXZvY2FibGUuPC9wPlxcclxcblxcclxcbiAgICA8a2VuZG8tZGlhbG9nLWFjdGlvbnM+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwib25EZWxldGVEYXRhKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2tlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbjwva2VuZG8tZGlhbG9nPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgV2VhdGhlckZvcm1Db21wb25lbnQgfSBmcm9tICcuLi93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG4gICAgcHVibGljIHdlYXRoZXIxOiBXZWF0aGVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRyZVdlYXRoZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBlZGl0Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmbURhdGU6IGFueTtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdHJlV2VhdGhlciA9IFwiV2VhdGhlciBDaGVja1wiO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIG1vbWVudCBqcyBmb3JtYXQgYSBkYXRlIHdpdGggYSBzdHJpbmcgZm9ybWF0LCByZXR1cm5zIGEgZGF0ZS5cclxuICAgICAgICBtb21lbnQubG9jYWxlKCdlbi1jYScpO1xyXG4gICAgICAgIHRoaXMuZm1EYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZtRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzIHdlYXRoZXIgb2JqZWN0IHRvIGJpbmQgdG8uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMSA9IG5ldyBXZWF0aGVyKDEsIFwiQXV0b21uV2VhdGhlclwiLCB0aGlzLmZtRGF0ZSwgMTQsIFwiVGVtcMOpcmF0dXJlIEF1dG9tbmVcIiwgMjQsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE1ldGhvZCB0byBnZXQgd2VhdGhlciBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApOyAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgOiBhbGwgd2VhdGhlciBvYmplY3RzIGZyb20gZGJcclxuICAgIGdldEFsbFdlYXRoZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBhbGwgd2VhdGhlciBvYmpldHMgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgZHUgc2VydmljZSA6ICBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V2VhdGhlckZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9ICF0aGlzLnNob3dGb3JtO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0RlbGV0ZShpZFRvRGVsZXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dElkRGVsZXRlID0gaWRUb0RlbGV0ZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIndlYXRoZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSByZXN1bHRzIGFmdGVyIHRoZSBjaGlsZCBjb21wb25lbnQgaGFzIGVtaXR0ZWQgdGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsbC5cclxuICAgIHJlZnJlc2hSZXN1bHRzKCRldmVudCkge1xyXG4gICAgICAgIGlmICgkZXZlbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHdlYXRoZXIgY2xpZW50IHNpZGUgOlxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJzLnNwbGljZSh0aGlzLmlucHV0SWREZWxldGUsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRha2UgYSBqcyBvYmplY3QgICh1c3VhbGx5IG9iamVjdCBvciBhcnJheSkgY29udmVydCBpdCB0byBKU09OIHN0cmluZyBub3RhdGlvblxyXG4gICAgLy8gdG8gZ2V0IEpTT04gb2JqZWN0IHVzZSBwYXJzZSBtZXRob2RcclxuICAgIGdldCBkaWFnbm9zdGljKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgcGF5bG9hZCB3ZWF0aGVyIG9iamVjdCBmcm9tIGNoaWxkcmVuIGNvbXBvbmVudCB3ZWF0aGVyZm9ybVxyXG4gICAgcG9zdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgLy8gZmllbGQgZHUgZm9ybSBjaGFuZ8OpXHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS5uYW1lID0gJGV2ZW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gJGV2ZW50LmhvdXI7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9ICRldmVudC50ZW1wQztcclxuICAgICAgICB0aGlzLndlYXRoZXIxLnN1bW1hcnkgPSAkZXZlbnQuc3VtbWFyeTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyB3ZWF0aGVyIHRvIHBvc3QgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyMSk7XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZCB0byBzYXZlIG5ldyB3ZWF0aGVyIG9iamVjdFxyXG4gICAgICAgIHRoaXMuc2F2ZVdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXJcclxuICAgIGVkaXRXZWF0aGVyKCRldmVudCkge1xyXG4gICAgICAgIC8vIGZpZWxkIGR1IGZvcm0gY2hhbmfDqVxyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSAkZXZlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0aW5nIGEgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gbWV0aG9kIHRvIGVkaXQgYSB3ZWF0aGVyXHJcbiAgICAgICAgdGhpcy5wdXRXZWF0aGVyKHRoaXMud2VhdGhlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXQgYSB3ZWF0aGVyIHdoZW4gY2xpY2tpbmcgYSBsaW5rIG9uIHdlYXRoZXIgb2JqZWN0cyB0YWJsZS5cclxuICAgIGdvRWRpdCh3ZWF0aGVyOiBXZWF0aGVyKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9IHdlYXRoZXI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVCA6IGNhbGwgdGhlIHBvc3QgYWN0aW9uIG9uIGJhY2tlbmQgdG8gY3JlYXRlIG5ldyB3ZWF0aGVyIG9iamVjdC5cclxuICAgIHNhdmVXZWF0aGVyKHdlYXRoZXI6IFdlYXRoZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3RXZWF0aGVyQVBJKHdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5ob3VyID0gZGF0YS5ob3VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3VtbWFyeSA9IGRhdGEuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLnRlbXBlcmF0dXJlRiA9IGRhdGEudGVtcGVyYXR1cmVGO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3RvcElkID0gZGF0YS5zdG9wSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBuZXcgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkYXRhIGluIHRoZSBicm93c2VyIHRvIGdldCBoZSBuZXdseSBzYWJlZCB3ZWF0aGVyIG9iamVjdC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIG9mIGRhdGUgc2VudCBiYWNrIHRvIGNsaWVudCA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHRoaXMud2VhdGhlcjEuaG91cikpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHNhdmluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0V2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuc3RvcElkID0gZGF0YS5zdG9wSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0ZWQgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZWRpdGluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuLi93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElXZWF0aGVyIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob3VyPzogRGF0ZTtcbiAgICB0ZW1wQz86IG51bWJlcjtcbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlRj86IG51bWJlcjtcbiAgICBzdG9wSWQ/OiBudW1iZXI7XG4gICAgY29uc3RyYWludHM/OiBDb25zdHJhaW50W107XG59XG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyIGltcGxlbWVudHMgSVdlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGhvdXI/OiBEYXRlLFxuICAgICAgICBwdWJsaWMgdGVtcEM/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5Pzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGVtcGVyYXR1cmVGPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgc3RvcElkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgY29uc3RyYWludHM/OiBDb25zdHJhaW50W10pIHsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT57e3RpdHJlV2VhdGhlcn19PC9oMT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNob3dXZWF0aGVyRm9ybSgpXFxcIj5DcmVhdGUgbmV3IFdlYXRoZXI8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcInNob3dGb3JtXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHdlYXRoZXItZm9ybSBbd2VhdGhlclRvU2F2ZV09XFxcIndlYXRoZXIxXFxcIiAobmV3V2VhdGhlcik9XFxcInBvc3RXZWF0aGVyKCRldmVudClcXFwiIChlZFdlYXRoZXIpPVxcXCJlZGl0V2VhdGhlcigkZXZlbnQpXFxcIiBbbW9kZUVkaXRdPVxcXCJlZGl0Rm9ybVxcXCI+PC93ZWF0aGVyLWZvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlcnNcXFwiPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj5EZWxldGU8L2k+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0VkaXQod2VhdGhlcilcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+RWRpdDwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRlbGV0ZT48L2RlbGV0ZT5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckZvcm1Db21wb25lbnR7XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9TYXZlOiBXZWF0aGVyO1xyXG4gICAgQE91dHB1dCgpIG5ld1dlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBPdXRwdXQoKSBlZFdlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBJbnB1dCgpIG1vZGVFZGl0OiBib29sZWFuO1xyXG4gICAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBvbkVkaXQ6IGJvb2xlYW47XHJcbiAgICAvL2Zvcm0xOiBOZ0Zvcm07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vbkVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV3V2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICB0aGlzLmVkV2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICAvL3RoaXMuZm9ybTEgPSBuZXcgTmdGb3JtKFtdLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gdmV1dCBzb3VtZXR0cmUgb24gZWRpdC5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW52b3llciBsZSB3ZWF0aGVyZm9ybSBvYmplY3QgYXUgd2VhdGhlciBjb21wb25lbnRcclxuICAgIG9uU3VibWl0KHdlYXRoZXJGb3JtOiBOZ0Zvcm0peyAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWxpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRXZWF0aGVyLmVtaXQodGhpcy53ZWF0aGVyVG9TYXZlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBjcmVlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gZmFsc2U7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3V2VhdGhlci5lbWl0KHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBlZGl0ZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMT5XZWF0aGVyIEZvcm08L2gxPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cXFwib25TdWJtaXQod2VhdGhlckZvcm0pXFxcIiAjd2VhdGhlckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5Ib3VyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRpbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJob3VyXFxcIiBuYW1lPVxcXCJob3VyXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5ob3VyXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZW1wQ1xcXCI+VGVtcCAqQzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ0ZW1wQ1xcXCIgbmFtZT1cXFwidGVtcENcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnRlbXBDXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdW1tYXJ5XFxcIj5TdW1tYXJ5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdW1tYXJ5XFxcIiBuYW1lPVxcXCJzdW1tYXJ5XFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5zdW1tYXJ5XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhd2VhdGhlckZvcm0udmFsaWQgfHwgbW9kZUVkaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIm1vZGVFZGl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZFxcXCI+RWRpdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIXN1Ym1pdHRlZFxcXCI+XFxyXFxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nOjwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5OYW1lPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5Ib3VyIEFNL1BNPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuaG91ciB8IGZtSG91ckxvY2FsfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgKkM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlN1bW1hcnk8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5zdW1tYXJ5fX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgRjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBlcmF0dXJlRn19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXFxyXFxufVxcclxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmstaW52YWxpZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi8qI2RhdGUsICNkYXRlID4gdGFibGUsICNkYXRhID4gZGl2LmstY29udGVudC5rLXNjcm9sbGFibGUsIGtlbmRvLWNhbGVuZGFyLW1vbnRodmlldywgdGFibGUuay1jYWxlbmRhci13ZWVrZGF5c3tcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXFxyXFxuXFxyXFxuLyouay1jYWxlbmRhci5rLWNhbGVuZGFyLWluZmluaXRlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLWdyb3VwIGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxua2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LmstY2FsZW5kYXItbW9udGh2aWV3e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgICBwdWJsaWMgbWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFswXS5wYXRoID09IFwiZGV0YWlsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudFVybCA9IGV2ZW50LnVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VnbWVudFVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRXZWF0aGVyID0gK3NlZ21lbnRVcmxbNF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZFdlYXRoZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWRXZWF0aGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsWzBdICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCA9PSBcImRldGFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiB1c2Ugc25hcHNob3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkV2VhdGhlciA9IHNuYXBzaG90LnVybFsxXS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZFdlYXRoZXIgIT0gbnVsbCAmJiB0eXBlb2YgKGlkV2VhdGhlcikgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK2lkV2VhdGhlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnN1YiA9ICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUgaW4gcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fYWN0aXZhdGVkUm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGEgcm91dGUgbidlc3QgcGFzIGFjdGl2w6llLCBsYSByb3V0ZSBwYXJlbnRlIGVzdCBhY3RpdmUgKHdlYXRoZXIgY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiQXVjdW5zIGTDqXRhaWxzIMOgIGFmZmljaGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXRoZXJCeWRJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsbCBnZXREZXRhaWxzIG1ldGhvZCBpbiB0aGUgbnNlcnZpY2VcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB3ZWF0aGVyIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBnZXQgZGV0YWlscyBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWIgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuc3ViKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e21lc3NhZ2VEZXRhaWxzfX08L2gyPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcIndlYXRoZXJcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBEZXRhaWw8L2gxPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPldlYXRoZXJzPC9oMj5cXHJcXG5cXHJcXG48aDM+Q2hvb3NlIGEgd2VhdGhlciB0byBnZXQgd2VhdGhlciBjb25zdHJhaW50cyBmcm9tIDogPC9oMz5cXHJcXG5cXHJcXG48dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW3dlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/Lm5hbWV9fTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50W107XHJcbiAgICBwdWJsaWMgdGVtcENvbnN0OiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2U6IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRlbXBDb25zdCA9IFsnVmVudCcsICdSYWZhbGUnLCAnSHVtaWRpdMOpJywgJ1Byw6lzZW50aSddOyBcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnN0cmFpbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb25zdHJhaW50c0FQSSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHRoZSBjb25zdHJhaW50cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLnN0YXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uc3RhdHMucHVzaCh0aGlzLmNvbnN0cmFpbnRzW2ldLndpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmd1c3QsIHRoaXMuY29uc3RyYWludHNbaV0uaHVtaWRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmZlZWxzTGlrZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2ZXVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2VhdGhlckNvbnN0cmFpbnRzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHNBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS93ZWF0aGVyLycgKyBpZCArICcvY29uc3RyYWludHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwOiBSZXNwb25zZSkgPT4gPElDb25zdHJhaW50W10+cmVzcC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlN0YXRpc3RpcXVlcyBwb3VyIGxhIHRlbXDDqXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIElEXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFdpbmQga20vaFxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBHdXN0IGttL2hcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgSHVtaWRpdHkgJVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gUmlzaW5nIEFNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFN1biBTZXQgUE1cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgQ2xlYXJcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgRmVlbHMgTGlrZSDCsENcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgVGVtcMOpcmF0dXJlXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uaWR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LndpbmR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmd1c3R9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmh1bWlkaXR5fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5SaXNpbmcgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5TZXQgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCA6IHt7Y29uc3RyYWludD8ud2VhdGhlci5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwPkhldXJlIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLmhvdXIgfCBmbUhvdXJMb2NhbCB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCDCsEMgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIudGVtcEN9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcbjxrZW5kby1jaGFydCBbY2F0ZWdvcnlBeGlzXT1cXFwieyBjYXRlZ29yaWVzOiB0ZW1wQ29uc3QgfVxcXCI+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC12YWx1ZS1heGlzPlxcclxcbiAgICAgICAgPGtlbmRvLWNoYXJ0LXZhbHVlLWF4aXMtaXRlbSBbdGl0bGVdPVxcXCJ7IHRleHQ6ICdTdGF0aXN0aXF1ZXMnIH1cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC12YWx1ZS1heGlzLWl0ZW0+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtdmFsdWUtYXhpcz5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXRpdGxlIHRleHQ9XFxcIlN0YXRpc3RpcXVlcyBUZW1ww6lyYXR1cmUgLyBDb250cmFpbnRlXFxcIiBiYWNrZ3JvdW5kPVxcXCIjZTNlM2UzXFxcIiBmb250PVxcXCIxOXB0IHNhbnMtc2VyaWZcXFwiPjwva2VuZG8tY2hhcnQtdGl0bGU+XFxyXFxuICAgIDxrZW5kby1jaGFydC1sZWdlbmQgcG9zaXRpb249XFxcInRvcFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwva2VuZG8tY2hhcnQtbGVnZW5kPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtdG9vbHRpcCBmb3JtYXQ9XFxcInswfVxcXCIgcGFkZGluZz1cXFwiMVxcXCIgIFtzaGFyZWRdPVxcXCJ0cnVlXFxcIj48L2tlbmRvLWNoYXJ0LXRvb2x0aXA+XFxyXFxuICAgIDxrZW5kby1jaGFydC1hcmVhIGJhY2tncm91bmQ9XFxcIiNmN2Y3ZmFcXFwiIFttYXJnaW5dPVxcXCIzMFxcXCI+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtYXJlYT5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC1zZXJpZXMtaXRlbSAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIiB0eXBlPVxcXCJjb2x1bW5cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImNvbnN0cmFpbnQuc3RhdHNcXFwiIFtuYW1lXT1cXFwiY29uc3RyYWludC5pZFxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcy1pdGVtPlxcclxcbiAgICA8L2tlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG48L2tlbmRvLWNoYXJ0PlxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5CYWNrPC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4vdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi90cmlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyB0aXRyZVRyaXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dQb3BVcDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3RyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudGl0cmVUcmlwID0gXCJMZXMgRm9yZmFpdHMgVm95YWdlc1wiO1xyXG4gICAgICAgIHRoaXMudHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dQb3BVcCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEFsbFRyaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZSgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2hvbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja1JhdGluZygkZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gIXRoaXMuc2hvd1BvcFVwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBnZXQgbWV0aG9zIHN1ciBzZXJ2aWNlLlxyXG4gICAgZ2V0QWxsVHJpcHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmdldEFsbFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCB0cmlwcyBmcm9tIHNlcnZpY2UgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXAodHJpcDogVHJpcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RyaXBTZXJ2aWNlLmRlbGV0ZVRyaXBCeUFkbWluKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdXBwcmltZXIgbGUgdHJpcCBjw7R0w6kgY2xpZW50IHBvdXIgYWN0dWFsaXNlciBsYSB2dWUuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcy5zcGxpY2UodGhpcy50cmlwcy5pbmRleE9mKHRyaXApLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGluZyBhIHRyaXAgYnkgU3VwZXJVc2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0cnlpbmcgZGVsZXRlIHRyaXAgYnkgU3VwZXJVc2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4vdHJpcCc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJpcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsVHJpcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxUcmlwID0gJ2FwaS90cmlwJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBBbGwgdHJpcHMgb2JqZWN0cy5cclxuICAgIGdldEFsbFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIEJlc3QgdHJpcCBvYmplY3RzLlxyXG4gICAgZ2V0QmVzdFRyaXBzQVBJKCk6IE9ic2VydmFibGU8SVRyaXBbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArICcvYmVzdFRyaXBzJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXBbXT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXBCeUFkbWluKHRyaXA6IFRyaXApOiBPYnNlcnZhYmxlPElUcmlwPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gdHJpcC5pZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybFRyaXAgKyBcIi9cIiArIGlkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBkZWxldGluZyBhIHRyaXAgZG9uZSBieSBTdXBlclVzZXJzXCIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+Y29uc29sZS5sb2coXCJlcnJvciBkZWxldGluZyB0cmlwIGJ5IFN1cGVyVXNlcnNcIikpXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyPlxcclxcbiAgICA8aDE+QmllbnZlbnVlIDwvaDE+XFxyXFxuICAgIDxoMj4ge3t1c2VyTmFtZX19PC9oMj5cXHJcXG48L2hlYWRlcj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4taW5mbyBhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJpcHMvcGVyc28nXVxcXCI+TWVzIHRyaXBzPC9hPlxcclxcblxcclxcbjxoMj57e3RpdHJlVHJpcH19PC9oMj5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2Jlc3QnXVxcXCI+TWVpbGxldXJzIFRyaXBzPC9hPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG48aDM+RGlzcG9uaWJsZXMgcHLDqXNlbnRlbWVudDwvaDM+XFxyXFxuXFxyXFxuPG1haW4gY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDx0ZW1wbGF0ZSAqbmdJZj1cXFwiIXRyaXBzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICA8aDM+QXVjdW5zIFRyaXBzPC9oMz5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiAqbmdGb3I9XFxcImxldCB0cmlwIG9mIHRyaXBzIHwgcGFnaW5hdGU6IHsgaXRlbXNQZXJQYWdlOiA4LCBjdXJyZW50UGFnZTogcCB9XFxcIiBjbGFzcz1cXFwiaW5mb3NUcmlwIGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZGVsZXRlVHJpcCh0cmlwKVxcXCIga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZGVsZXRlVHJpcEJ1dHRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgPGxpPk5vbSA6IHt7dHJpcD8ubmFtZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+UGF5cyA6IHt7dHJpcD8uY291bnRyeX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Q29udGluZW50IDoge3t0cmlwPy5jb250aW5lbnR9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpICNhbmNob3I+XFxyXFxuICAgICAgICAgICAgICAgIFJhdGluZyA6IDxyYXRpbmcgY2xhc3M9XFxcInJhdGluZ1xcXCIgKm5nSWY9XFxcInRyaXA/LnJhdGluZ1xcXCIgW3JhdGluZ109J3RyaXAucmF0aW5nJyAocmF0aW5nQ2xpY2spPVxcXCJjbGlja1JhdGluZygkZXZlbnQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9yYXRpbmc+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcG9wdXAgW2FuY2hvcl09XFxcImFuY2hvclxcXCIgY2xhc3M9XFxcInBvcFVwQ29udGVudFxcXCIgKm5nSWY9XFxcInNob3dQb3BVcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFF1b3TDqSA6IHt7dHJpcD8ucmF0aW5nfX1cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLXBvcHVwPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDxwPkRhdGUgZGUgRMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvcD5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlt0cmlwLmlkXVxcXCI+Vm9pciBUcmlwPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8cGFnaW5hdGlvbi1jb250cm9scyAocGFnZUNoYW5nZSk9XFxcInAgPSAkZXZlbnRcXFwiPjwvcGFnaW5hdGlvbi1jb250cm9scz5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbjwvbWFpbj5cXHJcXG5cXHJcXG48Zm9vdGVyPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJob21lKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIj48L2k+IEFjY3VlaWw8L2E+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L2Zvb3Rlcj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDEsIGhlYWRlciA+IGgye1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcclxcbiAgICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMi41JTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2ID4gdWx7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTVkZWcpO1xcclxcbn1cXHJcXG4uaW5mb3NUcmlwOmhvdmVyLCBzZWN0aW9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb257XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxucGFnaW5hdGlvbi1jb250cm9sc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxJSAwIDElIDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcENvbnRlbnR7XFxyXFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6ICM3ODc4Nzg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsMTQ0LDI1NSwuMyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEsIDUsIDUsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlVHJpcEJ1dHRvbntcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiA0JTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcC90cmlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHcm91cERlc2NyaXB0b3IsIHByb2Nlc3MsIFNvcnREZXNjcmlwdG9yIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnknO1xyXG5pbXBvcnQge1xuICAgIEdyaWRDb21wb25lbnQsXG4gICAgR3JpZERhdGFSZXN1bHQsXG4gICAgUGFnZUNoYW5nZUV2ZW50XG59IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jlc3QtdHJpcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwYmVzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwYmVzdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmVzdFRyaXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGdyaWRWaWV3OiBHcmlkRGF0YVJlc3VsdDtcclxuICAgIHB1YmxpYyBiZXN0VHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHNraXA6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc1RyaXBzOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdGxlQmVzdFRyaXBzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGlkZGVuQ29sdW1uczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgY29sdW1uczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGF0YTogT2JqZWN0W107XHJcblxyXG4gICAgLy8gcGFnaW5nIGluZm9zXHJcbiAgICBwdWJsaWMgYnV0dG9uQ291bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpbmZvOiBib29sZWFuO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwYWdlU2l6ZXM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJldmlvdXNOZXh0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5iZXN0VHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gNTtcclxuICAgICAgICB0aGlzLnNraXAgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcImlkXCJdO1xyXG4gICAgICAgIHRoaXMuaXNUcmlwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGl0bGVCZXN0VHJpcHMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ291bnQgPSA1O1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJudW1lcmljXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNOZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcm91dGVyLnVybCA9PSBcIi90cmlwcy9iZXN0XCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIHRoZSByb3V0aW5nIHRvIGFjY2VzcyBiZXN0IHRyaXBzIGNvbXBvbmVudCBpbiBwYXJlbnQgY29tcG9uZW50IHRyaXBzLlwiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZUJlc3RUcmlwcyA9IFwiQ29uc3VsdGVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QmVzdFRyaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2UoZXZlbnQ6IFBhZ2VDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNraXAgPSBldmVudC5za2lwO1xuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkVmlldyA9IHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5iZXN0VHJpcHMuc2xpY2UodGhpcy5za2lwLCB0aGlzLnNraXAgKyB0aGlzLnBhZ2VTaXplKSxcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMuYmVzdFRyaXBzLmxlbmd0aFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMubGVuZ3RoID0gMDtcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbHVtbihmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucy5wdXNoKGZpZWxkKTtcbiAgICB9XHJcblxyXG4gICAgb25WaWV3VHJpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RyaXBzID0gIXRoaXMuaXNUcmlwcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJlc3RUcmlwcygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwU2VydmljZS5nZXRCZXN0VHJpcHNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlc3RUcmlwcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZ2V0dGluZyBiZXN0IHRyaXBzIDogXCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGJlc3QgdHJpcHMgOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPjxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1saW5rXFxcIiAoY2xpY2spPVxcXCJvblZpZXdUcmlwcygpXFxcIj57e3RpdGxlQmVzdFRyaXBzfX08L2E+PC9oMT5cXHJcXG5cXHJcXG48IS0tIGJlc3QgdHJpcHMgZ3JpZCAtLT5cXHJcXG48c2VjdGlvbiAqbmdJZj1cXFwiaXNUcmlwc1xcXCI+XFxyXFxuICAgIDxidXR0b24ga2VuZG9CdXR0b24gW3ByaW1hcnldPVxcXCJ0cnVlXFxcIiBbaWNvbl09XFxcIidyZWZyZXNoJ1xcXCIgKGNsaWNrKT1cXFwicmVzdG9yZUNvbHVtbnMoKVxcXCI+UmVzdGF1cmVyPC9idXR0b24+XFxyXFxuICAgIDxrZW5kby1ncmlkIFtkYXRhXT1cXFwiZ3JpZFZpZXdcXFwiIFtwYWdlU2l6ZV09XFxcInBhZ2VTaXplXFxcIiBbc2tpcF09XFxcInNraXBcXFwiIChwYWdlQ2hhbmdlKT1cXFwicGFnZUNoYW5nZSgkZXZlbnQpXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgW3NlbGVjdGFibGVdPVxcXCJ0cnVlXFxcIiBbaGVpZ2h0XT1cXFwiMzUwXFxcIiBbcGFnZWFibGVdPVxcXCJ7IGJ1dHRvbkNvdW50OiBidXR0b25Db3VudCwgaW5mbzogaW5mbywgXFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsIHBhZ2VTaXplczogcGFnZVNpemVzLCBwcmV2aW91c05leHQ6IHByZXZpb3VzTmV4dH1cXFwiIFtzY3JvbGxhYmxlXT1cXFwiJ25vbmUnXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XFxcImNvbHVtbnNcXFwiIGxldC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJ7e2NvbHVtbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiaGlkZGVuQ29sdW1ucy5pbmRleE9mKGNvbHVtbikgPT09IC0xXFxcIiB0aXRsZT1cXFwiSURcXFwiIHdpZHRoPVxcXCIyMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0dyaWRIZWFkZXJUZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e2RhdGFJdGVtLmZpZWxkfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiaGlkZUNvbHVtbihkYXRhSXRlbS5maWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJrLWJ1dHRvbiBrLXByaW1hcnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJmbG9hdDogcmlnaHQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWRlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcIm5hbWVcXFwiIHRpdGxlPVxcXCJOb21cXFwiIHdpZHRoPVxcXCIzMFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcImxlYXZpbmdcXFwiIHRpdGxlPVxcXCJEw6lwYXJ0XFxcIiB3aWR0aD1cXFwiNzBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJjb3VudHJ5XFxcIiB0aXRsZT1cXFwiUGF5c1xcXCIgd2lkdGg9XFxcIjYwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwiY29udGluZW50XFxcIiB0aXRsZT1cXFwiQ29udGluZW50XFxcIiB3aWR0aD1cXFwiNjBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcInJhdGluZ1xcXCIgdGl0bGU9XFxcIlJhdGluZ1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBbaGVhZGVyU3R5bGVdPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiAnI2M1YjM1OCcsJ2NvbG9yJzogJyNmZmYnLCdsaW5lLWhlaWdodCc6ICcxZW0nfVxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIGtlbmRvR3JpZERldGFpbFRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiAqbmdJZj1cXFwiZGF0YUl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkTDqXRhaWxzOjwvc3Ryb25nPiBJdGVtPC9wPlxcclxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8a2VuZG8tZ3JpZC1tZXNzYWdlcyBncm91cFBhbmVsRW1wdHk9XFxcIkRyYWcgaGVyZSB0byBncm91cC5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1JlY29yZHM9XFxcIlRoZXJlIG5vIGl0ZW1zIHRvIGRpc3BsYXkuXFxcIj5cXHJcXG4gICAgICAgIDwva2VuZG8tZ3JpZC1tZXNzYWdlcz5cXHJcXG48L2tlbmRvLWdyaWQ+XFxyXFxuPC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwYmVzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBEZXRhaWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaXNCb3VnaHQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdXNlclRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgaXNCb3VnaHRNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcGRldGFpbDogVHJpcERldGFpbFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0JvdWdodE1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyaXBCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyaXBCeUlkKGlkOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLmdldFRyaXBCeUlkQVBJKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRpbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdG9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJpcHNGb3JVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCArIGVycm9yICk7ICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmlwc0ZvclVzZXIoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRVc2VyVHJpcEFQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQWRkVHJpcCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgZm9yIHVzZXIgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWRkVHJpcCgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudXNlclRyaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJUcmlwc1tpXS5pZCA9PSB0aGlzLnNlbGVjdGVkVHJpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm91Z2h0TWVzc2FnZSA9IFwiVm91cyBhdmV6IGTDqWrDoCBhY2hldMOpIGNlIHRyaXBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXlUcmlwKHRyaXA6IFRyaXApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwZGV0YWlsLnBvc3RUcmlwQVBJKHRyaXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgY3JlYXRpbmcgdHJpcCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwcy9wZXJzb1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0cmlwIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpcHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgbGVhdmluZz86IERhdGU7XHJcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgY29udGluZW50Pzogc3RyaW5nO1xyXG4gICAgcmF0aW5nPzogbnVtYmVyO1xyXG4gICAgc3RvcHM/OiBTdG9wW107XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXAgaW1wbGVtZW50cyBJVHJpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGVhdmluZz86IERhdGUsXHJcbiAgICAgICAgcHVibGljIGNvdW50cnk/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGNvbnRpbmVudD86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmF0aW5nPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wcz86IFN0b3BbXSxcclxuICAgICAgICBwdWJsaWMgdmlzaWJsZT86IGJvb2xlYW4pIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+RMOpdGFpbHMgVHJpcDwvaDI+XFxyXFxuXFxyXFxuPHVsICpuZ0lmPVxcXCJzZWxlY3RlZFRyaXBcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtYWRkcmVzcy1ib29rXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmlkfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5uYW1lfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3VyZ2xhc3NcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWhvdGVsXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvdW50cnl9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhLWhvbWVcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8uY29udGluZW50fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1maXJzdC1vcmRlclxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5yYXRpbmd9fTwvc3Bhbj48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYnV5VHJpcChzZWxlY3RlZFRyaXApXFxcIiBbZGlzYWJsZWRdPVxcXCJpc0JvdWdodFxcXCI+QWpvdXRlciDDoCBtZXMgdHJpcHM8L2J1dHRvbj48L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAge3tpc0JvdWdodE1lc3NhZ2V9fVxcclxcbiAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiaXNCb3VnaHRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWydzdG9wJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgYnRuLW1kXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gQWpvdXRlciBTdG9wczwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2g0PiAgICBcXHJcXG4gICAgPC9saT4gICBcXHJcXG48L3VsPlxcclxcbjx1bCBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgVmlzdWFsaXNlciBTdG9wc1xcclxcbiAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnZWRpdCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2g0PlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XFxyXFxuXFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Plxcclxcblxcclxcbjxmb290ZXIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIj5SZXRvdXI8L2J1dHRvbj5cXHJcXG48L2Zvb3Rlcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFue1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyaXAtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXB1c2VyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gICAgcHVibGljIHVzZXJNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzVHJpcHM6IFRyaXBbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgb2JqZWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIGNvbnN0YW50IGZvciBzd2lwZSBhY3Rpb246IGxlZnQgb3IgcmlnaHRcclxuICAgIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHB1YmxpYyBfdHJpcERldGFpbFNlcnZpY2U6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3Rpb24gdHJpZ2dlcmVkIHdoZW4gdXNlciBzd2lwZXNcclxuICAgIHN3aXBlKGN1cnJlbnRJbmRleDogbnVtYmVyLCBhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xyXG4gICAgICAgIC8vIG91dCBvZiByYW5nZVxyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiB0aGlzLm1lc1RyaXBzLmxlbmd0aCB8fCBjdXJyZW50SW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyBzd2lwZSByaWdodCwgbmV4dCBhdmF0YXJcclxuICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBjdXJyZW50SW5kZXggPT09IHRoaXMubWVzVHJpcHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gaXNMYXN0ID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzd2lwZSBsZWZ0LCBwcmV2aW91cyBhdmF0YXJcclxuICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlyc3QgPSBjdXJyZW50SW5kZXggPT09IDA7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGlzRmlyc3QgPyB0aGlzLm1lc1RyaXBzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG9nZ2xlIGF2YXRhciB2aXNpYmlsaXR5XHJcbiAgICAgICAgdGhpcy5tZXNUcmlwcy5mb3JFYWNoKCh4LCBpKSA9PiB4LnZpc2libGUgPSAoaSA9PT0gbmV4dEluZGV4KSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlclRyaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdHJpcHMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VXNlclRyaXBzKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBEZXRhaWxTZXJ2aWNlLmdldFVzZXJUcmlwQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzVHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzVHJpcHMuZm9yRWFjaCgoeCwgaSkgPT4gaSA+IDAgPyB4LnZpc2libGUgPSBmYWxzZSA6IHgudmlzaWJsZSA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgZ2V0IHlvdXIgdHJpcHMgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcHMoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy90cmlwcycsIGlkLCAnc3RvcCddKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmlwKHRyaXA6IFRyaXApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IHRyaXA7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJ1c2VydHJpcFwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSB3ZWF0aGVyIGNsaWVudCBzaWRlIDpcclxuICAgICAgICAgICAgdGhpcy5tZXNUcmlwcy5zcGxpY2UodGhpcy5tZXNUcmlwcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUcmlwKSwgMSk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbGlzdCBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJUcmlwcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+e3t1c2VyTWVzc2FnZX19PC9oMj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbdHJpcFRvRGVsZXRlXT1cXFwic2VsZWN0ZWRUcmlwXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxoMT5NZXMgVHJpcHM8L2gxPlxcclxcbjxoMj5Td2lwZSA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9pPiBPdSA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctcmlnaHRcXFwiPjwvaT48L2gyPlxcclxcblxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgdHJpcCBvZiBtZXNUcmlwczsgbGV0IGlkeD1pbmRleFxcXCIgY2xhc3M9XFxcImNvbC1tZC0xMiBzd2lwZS1ib3hcXFwiIFxcclxcbiAgICAgKHN3aXBlbGVmdCk9XFxcInN3aXBlKGlkeCwgJGV2ZW50LnR5cGUpXFxcIiAoc3dpcGVyaWdodCk9XFxcInN3aXBlKGlkeCwgJGV2ZW50LnR5cGUpXFxcIlxcclxcbiAgICAgW2NsYXNzLnZpc2libGVdPVxcXCJ0cmlwLnZpc2libGVcXFwiIFtjbGFzcy5oaWRkZW5dPVxcXCIhdHJpcC52aXNpYmxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5UcmlwPC9oND5cXHJcXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPkNvbnRpZW50IHt7dHJpcD8uc3RvcHMubGVuZ3RofX0gc3RvcHM8L2g1PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiY2FyZC1pbWctdG9wIGZhIGZhLXBpY3R1cmUtbyBmYS0yeFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+IyBSw6lzZXJ2YXRpb24gOiB7e3RyaXA/LmlkfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Tm9tIDoge3t0cmlwPy5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+RGF0ZSBkZSBkw6lwYXJ0IDoge3t0cmlwPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Db250aW5lbnQgOiB7e3RyaXA/LmNvbnRpbmVudH19PC9wPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXJCdXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtbGluayBidG4gYnRuLW1kIGJ0bi1zZWNvbmRhcnkgYWN0aXZlIGNvbC1tZC02IHVzZXJBY3Rpb25zXFxcIiAoY2xpY2spPVxcXCJkZWxldGVUcmlwKHRyaXApXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiPjwvaT4gU3VwcHJpbWVyPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1saW5rIGJ0biBidG4tbWQgYnRuLWluZm8gYWN0aXZlIGNvbC1tZC02IHVzZXJBY3Rpb25zXFxcIiAoY2xpY2spPVxcXCJhZGRTdG9wcyh0cmlwLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT4gQWpvdXRlciBTdG9wczwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc3RvcCBvZiB0cmlwPy5zdG9wczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpPlN0b3AgIyB7e2kgKyAxfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3N0b3A/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZCdhcnJpdsOpZSA6IHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkRhdGUgZGUgZMOpcGFydCA6IHt7c3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlZpbGxlIDoge3tzdG9wPy5jaXR5fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5DdWlzaW5lIDoge3tzdG9wPy5jdWlzaW5lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5HdWlkZSA6IHt7c3RvcD8uZ3VpZGV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlF1b3RlIDoge3tzdG9wPy5xdW90ZX19PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcbjxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJhY2tCdXR0b25cXFwiIChjbGljayk9XFxcImdvQmFjaygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT4gUmV0b3VyPC9hPlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwdXNlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcclxcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmgxLGgyLGgzLGg0e1xcclxcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAxcHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxubGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlLWJveCA+IGRpdjpmaXJzdC1vZi10eXBlLCBkaXYgZGl2ID4gdWx7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZS1ib3ggPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgcGFkZGluZzogMS41JTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjk1KSA0MiUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDQyJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjk1KSkpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkpO1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjNDE4OWM3JywgR3JhZGllbnRUeXBlPTEgKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGRpdiA+IHVse1xcclxcbiAgICBtYXJnaW46IDElO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCg0NyUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykpKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywwLjc3KSAxMDAlKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VkZWRlZCcsIEdyYWRpZW50VHlwZT0xICk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5OmhvdmVye1xcclxcbiAgICBjb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZm9vdGVye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyQnV0dG9uc3tcXHJcXG4gICAgcGFkZGluZzogNSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tCdXR0b257XFxyXFxuICAgIG1hcmdpbjogMiUgMCAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckFjdGlvbnN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyQWN0aW9uczpmaXJzdC1jaGlsZHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGUtYm94IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmF5IGluc2V0O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmF5IGluc2V0O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSksIGNvbG9yLXN0b3AoMjglLCByZ2JhKDIyNiwyMjYsMjI2LDEpKSwgY29sb3Itc3RvcCg1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkpLCBjb2xvci1zdG9wKDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSksIGNvbG9yLXN0b3AoODUlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlMmUyZTInLCBlbmRDb2xvcnN0cj0nI2ZlZmVmZScsIEdyYWRpZW50VHlwZT0wICk7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcmF0aW5nLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XHJcbiAgICBAT3V0cHV0KCkgcmF0aW5nQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBwdWJsaWMgcmF0ZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGRpZmZSYXRlczogbnVtYmVyW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5kaWZmUmF0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpZmZSYXRlcy5wdXNoKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICB0aGlzLmdldFJhdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhdGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5yYXRpbmcgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmF0aW5nKTtcclxuICAgICAgICAgICAgdGhpcy5yYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0aGlzLnJhdGluZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhdGVzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRpZmZTdGFycyA9IHRoaXMuZGlmZlJhdGVzLmxlbmd0aCAtIHRoaXMucmF0ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmRpZmZSYXRlcy5sZW5ndGggPSBkaWZmU3RhcnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcclxuICAgICAgICB0aGlzLnJhdGluZ0NsaWNrLmVtaXQoe1xyXG4gICAgICAgICAgICByYXRpbmc6IHJhdGluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IChjbGljayk9XFxcIm9uQ2xpY2socmF0ZXMubGVuZ3RoKVxcXCI+XFxyXFxuICAgIDxzcGFuICpuZ0lmPVxcXCJyYXRlcyAmJiByYXRlcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHIgb2YgcmF0ZXNcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwiZGlmZlJhdGVzICYmIGRpZmZSYXRlcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHIgb2YgZGlmZlJhdGVzXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyLWVtcHR5IHN0YXItZW1wdHlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhdGluZy5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInNwYW4ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQbGFjZSBsZXMgw6l0b2lsZXMgw6AgZ2F1Y2hlIGR1IGNvbnRhaW5lciAqL1xcclxcbi5zdGFyLCAuc3Rhci1lbXB0eXtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9wLCBJU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0b3AuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3BDb21wb25lbnQge1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpc0NyZWF0ZUZvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdHJpcElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93Rm9ybTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFN0b3A6IFN0b3A7XHJcbiAgICBwdWJsaWMgZGVjaW1hbHM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtaW46IG51bWJlcjtcclxuICAgIHB1YmxpYyBtYXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhdXRvQ29ycmVjdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjdWlzaW5lczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcbiAgICBwdWJsaWMgc291cmNlQ3Vpc2luZTogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcbiAgICBwdWJsaWMgY3Vpc2luZTogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfTtcclxuICAgIHB1YmxpYyBndWlkZTogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfTtcclxuXHJcbiAgICBwdWJsaWMgZ3VpZGVzOiBBcnJheTx7IHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kZWNpbWFscyA9IDA7XHJcbiAgICAgICAgdGhpcy5taW4gPSAxO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMTA7XHJcbiAgICAgICAgdGhpcy5hdXRvQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AgPSBuZXcgU3RvcCgxLCBcIlBsYWdlXCIsIG5ldyBEYXRlKCksIG5ldyBEYXRlKCksIFwiTW9udHLDqWFsXCIsIHRoaXMuY3Vpc2luZSwgdGhpcy5ndWlkZSwgMCwgMCwgMCwgOCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGN1aXNpbmUgZHJvcGRvd24gXHJcbiAgICAgICAgdGhpcy5jdWlzaW5lID0geyB0ZXh0OiBcIkl0YWxpZW5uZVwiLCB2YWx1ZTogMiB9OyAgICAgIFxyXG4gICAgICAgIHRoaXMuY3Vpc2luZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvdXJjZUN1aXNpbmUgPSBbXTtcclxuICAgICAgICB0aGlzLnNvdXJjZUN1aXNpbmUucHVzaCh7IHRleHQ6IFwiSmFwb25haXNlXCIsIHZhbHVlOiAxIH0sIHsgdGV4dDogXCJJdGFsaWVubmVcIiwgdmFsdWU6IDIgfSwgeyB0ZXh0OiBcIlN1w6lkb2lzZVwiLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiUG9ydHVndWFpc2VcIiwgdmFsdWU6IDQgfSwgeyB0ZXh0OiBcIkFmcmljYWluZVwiLCB2YWx1ZTogNSB9LCB7IHRleHQ6IFwiQWxsZW1hbmRlXCIsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJCcml0YW5uaXF1ZVwiLCB2YWx1ZTogNyB9LCB7IHRleHQ6IFwiQW3DqXJpY2FpbmVcIiwgdmFsdWU6IDggfSwgeyB0ZXh0OiBcIlN1w6lkb2lzZVwiLCB2YWx1ZTogOSB9KTtcclxuXHJcbiAgICAgICAgLy8gZ3VpZGUgY29tYm9ib3hcclxuICAgICAgICB0aGlzLmd1aWRlID0geyB0ZXh0OiBcIkd1aWRlIEp1bmlvclwiLCB2YWx1ZTogMiB9O1xyXG4gICAgICAgIHRoaXMuZ3VpZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5ndWlkZXMucHVzaCh7IHRleHQ6IFwiR3VpZGUgTWljaGVsaW5cIiwgdmFsdWU6IDEgfSwgeyB0ZXh0OiBcIkd1aWRlIEp1bmlvclwiLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiR3VpZGUgU2VuaW9yXCIsIHZhbHVlOiAzIH0sIHsgdGV4dDogXCJHdWlkZSBQcml2w6lcIiwgdmFsdWU6IDQgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlcmluZyBjdWlzaW5lc1xyXG4gICAgICAgIHRoaXMuY3Vpc2luZXMgPSB0aGlzLnNvdXJjZUN1aXNpbmUuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHdlcmUgbm90IGluIC9zdG9wIHlldCwganN1dCBkaXNwbGF5IGEgbWVzc2FnZSBmb3IgdGhlIHVzZXJcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1snaWQnXSAhPSBudWxsIHx8IHBhcmFtc1snaWQnXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNyw6llciB1biBub3V2ZWF1IHN0b3AgcG91ciBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEdldCBwYXJlbnQgQWN0aXZhdGVkUm91dGUgb2YgdGhpcyByb3V0ZS5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpcElkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkIGR1IHBhcmVudCBwb3VyIHNhdXZlciBzdG9wIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmlsdGVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdWlzaW5lcyA9IHRoaXMuc291cmNlQ3Vpc2luZS5maWx0ZXIoKHMpID0+IHMudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoY3JlYXRlRm9ybTogTmdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AgPSA8SVN0b3A+Y3JlYXRlRm9ybS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVGb3JtLnZhbGlkKTtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9zdFN0b3BTZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0b3BTZXJ2aWNlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BTZXJ2aWNlLnBvc3RTdG9wQnlJZEFQSSh0aGlzLnRyaXBJZCwgdGhpcy5zZWxlY3RlZFN0b3ApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBzYXZlZCBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5hcnJpdmFsID0gZGF0YS5hcnJpdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmxlYXZpbmcgPSBkYXRhLmxlYXZpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuY2l0eSA9IGRhdGEuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5jdWlzaW5lID0gZGF0YS5jdWlzaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmd1aWRlID0gZGF0YS5ndWlkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5xdW90ZSA9IGRhdGEucXVvdGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2FudCBzYXZlIHN0b3AgYXQgdHJpcCBpZCA6IFwiICsgdGhpcy50cmlwSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSAhdGhpcy5pc0NyZWF0ZUZvcm07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmlwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gZGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElTdG9wIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhcnJpdmFsOiBEYXRlO1xyXG4gICAgbGVhdmluZzogRGF0ZTtcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGN1aXNpbmU6IGFueTtcclxuICAgIGd1aWRlOiBhbnk7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgcXVvdGU6IG51bWJlcjtcclxuICAgIHNob3dQb3BVcDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3AgaW1wbGVtZW50cyBJU3RvcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXJyaXZhbDogRGF0ZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsZWF2aW5nOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNpdHk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjdWlzaW5lOiBhbnksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ3VpZGU6IGFueSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yZGVyOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgcXVvdGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wVXAgPSBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcclxcbiAgICA8aDQ+e3ttZXNzYWdlfX08L2g0PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCIgKm5nSWY9XFxcImlzU2hvd0Zvcm1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGg0PjxzcGFuPjxhIFtyb3V0ZXJMaW5rXT1cXFwiJy4uL2VkaXQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tbGlua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpZ2h0YnVsYi1vXFxcIj48L2k+IFN1Z2dlc3Rpb25zPC9hPjwvc3Bhbj48L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkU3RvcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICA8Zm9ybSAjZm9ybUNyZWF0ZVN0b3A9XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9ybUNyZWF0ZVN0b3ApXFxcIiAqbmdJZj1cXFwiaXNDcmVhdGVGb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5Ob208L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5uYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY2l0eVxcXCI+VmlsbGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaXR5XFxcIiBpZD1cXFwiY2l0eVxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5jaXR5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhcnJpdmFsXFxcIj5EYXRlIEFycml2w6llPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY2FsZW5kYXIgbmFtZT1cXFwiYXJyaXZhbFxcXCIgaWQ9XFxcImFycml2YWxcXFwiIFtmb2N1c2VkRGF0ZV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLmFycml2YWxcXFwiIHJlcXVpcmVkPjwva2VuZG8tY2FsZW5kYXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxlYXZpbmdcXFwiPkRhdGUgRMOpcGFydDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImxlYXZpbmdcXFwiIGlkPVxcXCJsZWF2aW5nXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5sZWF2aW5nXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY3Vpc2luZVxcXCI+Q3Vpc2luZTwvbGFiZWw+ICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3QgbmFtZT1cXFwiY3Vpc2luZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cXFwiY3Vpc2luZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGV4dEZpZWxkXT1cXFwiJ3RleHQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlRmllbGRdPVxcXCIndmFsdWUnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImN1aXNpbmVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsdGVyYWJsZV09XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyQ2hhbmdlKT1cXFwiaGFuZGxlRmlsdGVyKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZW1wbGF0ZVxcXCI+e3sgZGF0YUl0ZW0udmFsdWUgfX08L3NwYW4+IHt7IGRhdGFJdGVtLnRleHQgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SGVhZGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+Q3Vpc2luZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RGb290ZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND57e2N1aXNpbmVzLmxlbmd0aH19IHZhcmnDqXTDqXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3ROb0RhdGFUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND48c3BhbiBjbGFzcz1cXFwiay1pY29uIGstaS13YXJuaW5nXFxcIj48L3NwYW4+PGJyIC8+PGJyIC8+QXVjdW5lcyBDdWlzaW5lczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJndWlkZVxcXCI+R3VpZGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jb21ib2JveCBuYW1lPVxcXCJndWlkZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Z2dlc3RdPVxcXCJ0cnVlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cXFwiJ2UuZy4gR3VpZGUgU2VuaW9yJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVxcXCJndWlkZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0RmllbGRdPVxcXCIndGV4dCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZUZpZWxkXT1cXFwiJ3ZhbHVlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImd1aWRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0NvbWJvQm94SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZW1wbGF0ZVxcXCI+e3sgZGF0YUl0ZW0udmFsdWUgfX08L3NwYW4+IHt7IGRhdGFJdGVtLnRleHQgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvQ29tYm9Cb3hIZWFkZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5HdWlkZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Db21ib0JveEZvb3RlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Z3VpZGVzLmxlbmd0aH19IGRpc3BvbmlibGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Tm9EYXRhVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+PHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPjxiciAvPjxiciAvPkF1Y3VucyBndWlkZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tY29tYm9ib3g+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJxdW90ZVxcXCI+UXVvdGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1udW1lcmljdGV4dGJveCBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiBbcmVzdHJpY3REZWNpbWFsc109XFxcInRydWVcXFwiIFtkZWNpbWFsc109XFxcImRlY2ltYWxzXFxcIiBbbWluXT1cXFwibWluXFxcIlxcclxcbiAgICAgICAgICAgIFttYXhdPVxcXCJtYXhcXFwiIFtzcGlubmVyc109XFxcInRydWVcXFwiIFtmb3JtYXRdPVxcXCInbjAnXFxcIiBbc3RlcF09XFxcIjFcXFwiIFthdXRvQ29ycmVjdF09XFxcImF1dG9Db3JyZWN0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRTdG9wLnF1b3RlXFxcIiBuYW1lPVxcXCJxdW90ZVxcXCIgaWQ9XFxcInF1b3RlXFxcIiByZXF1aXJlZD48L2tlbmRvLW51bWVyaWN0ZXh0Ym94PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tbWQgYnRuLXN1Y2Nlc3MgYWN0aXZlXFxcIj5Bam91dGVyPC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0b3AuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZW1wbGF0ZXsgXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxcclxcbiAgICBjb2xvcjogI2ZmZjsgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxyXFxuICAgIHdpZHRoOiAxOHB4OyBcXHJcXG4gICAgaGVpZ2h0OiAxOHB4OyBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBsYXRlID4gaDQgeyBcXHJcXG4gICAgZm9udC1zaXplOiAxZW07IFxcclxcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcC9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElUcmlwLCBUcmlwIH0gZnJvbSAnLi4vdHJpcC90cmlwJztcclxuaW1wb3J0IHsgSVN0b3AsIFN0b3AgfSBmcm9tICcuLi9zdG9wL3N0b3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3AtZWRpdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdG9wZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFN0b3BDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRyaXA6IFRyaXA7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93UG9wVXA6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNBZG1pbjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0b2dnbGVUZXh0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlLCBwdWJsaWMgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSBcIlNob3dcIjtcclxuICAgICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLl9sb2dpblNlcnZpY2UuZXN0QWRtaW47XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0b3BzQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzL1wiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgUE9QIFVQIE5PVCBXT1JLSU4/ISB0ZXN0IGluIGFub3RoZXIgcHJvamVjdFxyXG4gICAgb25Ub2dnbGVQb3BVcChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkVHJpcC5zdG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRyaXAuc3RvcHNbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzW2ldLnNob3dQb3BVcCA9ICF0aGlzLnNlbGVjdGVkVHJpcC5zdG9wc1tpXS5zaG93UG9wVXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVRleHQgPSB0aGlzLnNob3dQb3BVcCA/IFwiSGlk0LVcIiA6IFwiU2hvd1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3BzQnlJZChpZDogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRUcmlwQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG5ldyBUcmlwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVhdmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250aW5lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlcyBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIGRldGFpbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGFqb3V0ZXIgdW5lIHRlbWVwcmF0dXJlIHBvdXIgY2Ugc3RvcFxyXG4gICAgYWpvdXRlVGVtcChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvd2VhdGhlcnMvXCIgKyBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlIHN0b3AgYnkgaXRzIGlkXHJcbiAgICBkZWxldGVTdG9wKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGdvIGRlbGV0ZSA6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRJZERlbGV0ZSA9IGlkO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwic3RvcEFkbWluXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgcmVzdWx0cyBhZnRlciB0aGUgY2hpbGQgY29tcG9uZW50IGhhcyBlbWl0dGVkIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bGwuXHJcbiAgICByZWZyZXNoUmVzdWx0cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAoJGV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0aGUgZGlzcGxheSBsaXN0IGFmdGVyIGRlbGV0aW5nIGEgc3RvcC5cclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9wc0J5SWQodGhpcy5zZWxlY3RlZFRyaXAuaWQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTEyIGRlbGV0ZUJsb2NrXFxcIj5cXHJcXG4gICAgPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3dlYXRoZXJUb0RlbGV0ZUlkXT1cXFwiaW5wdXRJZERlbGV0ZVxcXCIgW29iamVjdFRvRGVsZXRlXT1cXFwib2JqZWN0TmFtZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXHJcXG4gICAgPGxpPjxoMz5TdG9wczwvaDM+PC9saT5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2Ygc2VsZWN0ZWRUcmlwPy5zdG9wc1xcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBjb2wtc20tMTIgcm93QmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zdG9wXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gI2FuY2hvciBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGJ0bi1tZFxcXCIgKGNsaWNrKT1cXFwib25Ub2dnbGVQb3BVcChzdG9wLmlkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7dG9nZ2xlVGV4dH19IETDqXRhaWxzIHt7c3RvcD8ubmFtZX19XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wVXBXcmFwcGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGtlbmRvLXBvcHVwIGNsYXNzPVxcXCJwb3BVcENvbnRlbnRcXFwiIFthbmNob3JdPVxcXCJhbmNob3JcXFwiIChhbmNob3JWaWV3cG9ydExlYXZlKT1cXFwic2hvdyA9IGZhbHNlXFxcIiAqbmdJZj1cXFwic3RvcD8uc2hvd1BvcFVwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7c3RvcD8uYXJyaXZhbCB8IGZtVHJpcERhdGV9fSwge3tzdG9wPy5sZWF2aW5nIHwgZm1UcmlwRGF0ZX19LCAgw4Age3tzdG9wPy5jaXR5fX0sIEN1aXNpbmUge3tzdG9wPy5jdWlzaW5lfX0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3N0b3A/Lmd1aWRlfX0sIFF1b3TDqSB7e3N0b3A/LnF1b3RlfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9rZW5kby1wb3B1cD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFpc0FkbWluXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyIGFjdGl2ZSBjcnVkQnV0dG9uc1xcXCIgKGNsaWNrKT1cXFwiZGVsZXRlU3RvcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIj48L2k+IFN1cHByaW1lcjwvYnV0dG9uPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1zdWNjZXNzIGFjdGl2ZSBjcnVkQnV0dG9uc1xcXCIgKGNsaWNrKT1cXFwiYWpvdXRlVGVtcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT4gVGVtcMOpcmF0dXJlPC9idXR0b24+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtc20tNlxcXCI+XFxyXFxuICAgIDxzcGFuPnB1dCBwaWN0dXJlIGhlcmU8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGFsZXJ0IGFsZXJ0LWRhbmdlciBub1N0b3BzXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgKm5nSWY9XFxcIiFzZWxlY3RlZFRyaXA/LnN0b3BzLmxlbmd0aFxcXCI+XFxyXFxuICAgIDxoND48aSBjbGFzcz1cXFwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcXFwiPjwvaT4gQXVjdW5zIFN0b3BzPC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RvcGVkaXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic3BhbntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSA+IGRpdjpsYXN0LW9mLXR5cGV7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJsb2Nre1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5ub1N0b3Bze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXJnaW46IDIlIDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcENvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBjb2xvcjogIzc4Nzg3ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxLCA1LCA1LCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwV3JhcHBlcntcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93QmxvY2t7XFxyXFxuICAgIGJveC1zaGFkb3c6MnB4IDJweCAycHggZ3JheSwtMXB4IC0xcHggMnB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3J1ZEJ1dHRvbnN7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbUhvdXJMb2NhbCcsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdEhvdXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsNSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmZvcm0vd2VhdGhlcmZvcm0ucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZtVHJpcERhdGUnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGF0ZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGRhdGU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBtb21lbnQubG9jYWxlKCdlbi1jYScpO1xyXG4gICAgICAgIHJldHVybiBtb21lbnQoZCkuZm9ybWF0KCdMTCcpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzYzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzkwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc5NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLXBvcHVwL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oYW1tZXJqcy9oYW1tZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZzItcGFnaW5hdGlvbi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODE1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvanMvbnBtLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9