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

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2CoreSeed</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li routerLinkActive=\"link-active\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\r\n                    <a>\r\n                        <span class=\"glyphicon glyphicon-user\"></span> Sign Up\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Sign In\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/trips']\">\n                        <span class=\"glyphicon glyphicon-road\"></span> Trips\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/weathers']\">\r\n                        <span class=\"glyphicon glyphicon-th-list\"></span> Weathers\r\n                    </a>\r\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/weatherConstraints']\">\n                        <span class=\"glyphicon glyphicon-star-empty\"></span> Weather Constraints\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-out\"></span> LogOut\r\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

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

	module.exports = "<h1>Hello World</h1>\n\r\n<div>\r\n    <h3>Bienvenue Sur <span><strong><i>Angular2CoreSeed</i></strong></span>, Demo : </h3>\r\n</div>\r\n\r\n<section>\r\n    <kendo-tabstrip [ngClass]=\"'col-md-12'\" [ngStyle]=\"{'margin-bottom': '2%'}\">\r\n        <kendo-tabstrip-tab *ngFor=\"let item of items let i=index\"\r\n                            [title]=\"item.subject\"\r\n                            [selected]=\"i == selected\">\r\n            <template kendoTabContent>\r\n                <div>\r\n                    <p>{{item?.content}}</p>\r\n                    <p><a href=\"{{item?.link}}\">{{item?.link}}</a></p>\r\n                    <p><a href=\"{{item?.link2}}\">{{item?.link2}}</a></p>\r\n                </div>\r\n            </template>\r\n        </kendo-tabstrip-tab>\r\n    </kendo-tabstrip>\r\n</section>\r\n\r\n<div>\r\n    <h4>Les concepts importants : </h4>\r\n</div>\r\n\r\n <section>\r\n    <kendo-panelbar [ngStyle]=\"{'margin-bottom': '2%'}\">\r\n        <kendo-panelbar-item [title]=\"'Client-side navigation'\"></kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Server-side prerendering'\" [expanded]=\"true\">\r\n            <kendo-panelbar-item [title]=\"'For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Webpack dev middleware'\" [expanded]=\"true\">\r\n            <kendo-panelbar-item [title]=\"'In development mode, no need to run the webpack build tool.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Hot module replacement'\" [expanded]=\"true\">\r\n            <kendo-panelbar-item [title]=\"'In development mode, no need to reload the page after making most changes.'\"></kendo-panelbar-item>\r\n            <kendo-panelbar-item [title]=\"'Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'Efficient production builds'\" [expanded]=\"true\">\r\n            <kendo-panelbar-item [title]=\"'In production mode, development-time features are disabled, and the webpack build tool produces minified static CSS and JavaScript files.'\"></kendo-panelbar-item>\r\n        </kendo-panelbar-item>\r\n    </kendo-panelbar>\n\n</section>"

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
	        template: __webpack_require__(215)
	    }),
	    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
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

	module.exports = "<h2>Statistiques pour la température : # {{this.id}}</h2>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Wind km/h\r\n                <!--<img src=\"../../../../wwwroot/dist/img/wind.png\"/>-->\r\n            </th>\r\n            <th>\r\n                Gust km/h\r\n            </th>\r\n            <th>\r\n                Humidity %\r\n            </th>\r\n            <th>\r\n                Sun Rising AM\r\n            </th>\r\n            <th>\r\n                Sun Set PM\r\n            </th>\r\n            <th>\r\n                Clear\r\n            </th>\r\n            <th>\r\n                Feels Like °C\r\n            </th>\r\n            <th>\r\n                Température\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let constraint of constraints\">\r\n            <td>\r\n                {{constraint?.wind}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.gust}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.humidity}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunRising | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.sunSet | fmTripDate}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.clear}}\r\n            </td>\r\n            <td>\r\n                {{constraint?.feelsLike}}\r\n            </td>\r\n            <td>\r\n                <p>Temp : {{constraint?.weather.name}}</p>\r\n                <p>Heure : {{constraint?.weather.hour | fmHourLocal }}</p>\r\n                <p>Temp °C : {{constraint?.weather.tempC}}</p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<kendo-chart [categoryAxis]=\"{ categories: tempConst }\">\r\n\r\n    <kendo-chart-value-axis>\r\n        <kendo-chart-value-axis-item [title]=\"{ text: 'Statistiques' }\">\r\n        </kendo-chart-value-axis-item>\r\n    </kendo-chart-value-axis>\r\n\r\n    <kendo-chart-title text=\"Statistiques Température / Contrainte\" background=\"#e3e3e3\" font=\"19pt sans-serif\"></kendo-chart-title>\r\n    <kendo-chart-legend position=\"top\" orientation=\"horizontal\"></kendo-chart-legend>\r\n    <kendo-chart-tooltip format=\"{0}\" padding=\"1\"  [shared]=\"true\"></kendo-chart-tooltip>\r\n    <kendo-chart-area background=\"#f7f7fa\" [margin]=\"30\">\r\n    </kendo-chart-area>\r\n\r\n    <kendo-chart-series>\r\n        <kendo-chart-series-item *ngFor=\"let constraint of constraints\" type=\"column\" \r\n                                  [data]=\"constraint.stats\" [name]=\"constraint.weather.name\">\r\n        </kendo-chart-series-item>\r\n    </kendo-chart-series>\r\n</kendo-chart>\r\n\r\n<button (click)=\"goBack()\" class=\"btn btn-lg btn-primary\">Back</button>"

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
	        alert('rating: ' + $event.rating);
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

	module.exports = "<header>\r\n    <h1>Bienvenue </h1>\r\n    <h2> {{userName}}</h2>\r\n</header>\r\n<a class=\"btn btn-md btn-info active\" [routerLink]=\"['/trips/perso']\">Mes trips</a>\r\n\r\n<h2>{{titreTrip}}</h2>\r\n<a class=\"btn btn-md btn-primary\" [routerLink]=\"['best']\">Meilleurs Trips</a>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<h3>Disponibles présentement</h3>\r\n\r\n<main class=\"col-md-12\">\r\n    <template *ngIf=\"!trips.length\">\r\n        <h3>Aucuns Trips</h3>\r\n    </template>\r\n    <div *ngFor=\"let trip of trips | paginate: { itemsPerPage: 8, currentPage: p }\" class=\"infosTrip col-md-2\">\r\n        <ul>\r\n            <li>Nom : {{trip?.name}}</li>\r\n            <li>Pays : {{trip?.country}}</li>\r\n            <li>Continent : {{trip?.continent}}</li>\r\n            <li>\r\n                Rating : <rating *ngIf=\"trip?.rating\" [rating]='trip.rating' (ratingClick)=\"clickRating($event)\">\r\n                         </rating>\r\n            </li>\r\n        </ul>\r\n        <p>Date de Départ : {{trip?.leaving | fmTripDate}}</p>\r\n        <a class=\"btn btn-sm btn-primary\" [routerLink]=\"[trip.id]\">Voir Trip</a>\r\n    </div>\r\n\r\n    <section class=\"col-md-12\">\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </section>\r\n</main>\r\n\r\n<footer>\r\n    <section class=\"col-md-12\">\r\n        <a class=\"btn btn-lg btn-primary\" (click)=\"home()\"><i class=\"fa fa-home\"></i> Accueil</a>\r\n    </section>\r\n</footer>\r\n\r\n"

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
	exports.push([module.id, "html{\r\n    font-size: 10px;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin: 1% 0 1% 0;\r\n}\r\n\r\nheader{\r\n    background-color: azure;\r\n    padding: 2%;\r\n}\r\n\r\nheader > h1, header > h2{\r\n    display: inline;\r\n}\r\n\r\nmain{\r\n    text-align: center;\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n}\r\n\r\n.infosTrip{\r\n    width: 20%;\r\n    height: 20%;\r\n    background-color:azure;\r\n    color: darkblue;\r\n    border: 1px solid black;\r\n    float: left;\r\n    text-align: center;\r\n    opacity: 0.4;\r\n    padding: 0;\r\n    margin: 2.5%;\r\n}\r\n\r\ndiv > ul{\r\n    text-align: left;\r\n    padding: 5%;\r\n}\r\n\r\n.infosTrip:hover{\r\n    opacity: 1;\r\n    transition-property: all;\r\n    transition-duration: 1.5s;\r\n    transition-delay: 0s;\r\n    transform: rotateY(15deg);\r\n}\r\n.infosTrip:hover, section{\r\n    cursor: pointer;\r\n}\r\n\r\nsection{\r\n    float: left;\r\n    clear: both;\r\n    text-align: left;\r\n    padding: 0;\r\n}\r\n\r\npagination-controls{\r\n    text-align: center;\r\n    padding: 1% 0 1% 0;\r\n}\r\n", ""]);
	
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

	module.exports = "<div class=\"form-group col-md-12 deleteBlock\">\r\n    <delete [isDelete]=\"inputDelete\" [weatherToDeleteId]=\"inputIdDelete\" [objectToDelete]=\"objectName\" (deleteSuccess)=\"refreshResults($event)\"></delete>\r\n</div>\r\n\r\n<ul class=\"col-md-12\">\r\n    <li><h3>Stops</h3></li>\r\n    <li *ngFor=\"let stop of selectedTrip?.stops\">\r\n        <div class=\"col-md-6 rowBlock\">\r\n            <span><i class=\"fa fa-stop\"></i></span>\r\n            <button #anchor class=\"btn btn-link btn-md\" (click)=\"onTogglePopUp(stop.id)\">\r\n                {{toggleText}} Détails {{stop?.name}}\r\n            </button>\r\n            <div class=\"popUpWrapper\">\r\n                <kendo-popup class=\"popUpContent\" [anchor]=\"anchor\" (anchorViewportLeave)=\"show = false\" *ngIf=\"stop?.showPopUp\">\r\n                    {{stop?.arrival | fmTripDate}}, {{stop?.leaving | fmTripDate}},  À {{stop?.city}}, Cuisine {{stop?.cuisine}},\r\n                    {{stop?.guide}}, Quoté {{stop?.quote}}\r\n                </kendo-popup>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span><button [disabled]=\"!isAdmin\" class=\"btn btn-md btn-danger active\" (click)=\"deleteStop(stop.id)\"><i class=\"fa fa-trash\"></i> Supprimer</button></span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span>put picture here</span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"col-md-12 alert alert-danger noStops\" role=\"alert\" *ngIf=\"!selectedTrip?.stops.length\">\r\n    <h4><i class=\"fa fa-exclamation-triangle\"></i> Aucuns Stops</h4>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
	exports.push([module.id, "span{\r\n    display: inline-block;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\nul li > div:last-of-type{\r\n    padding: 1%;\r\n    display: inline-block;\r\n}\r\n\r\na{\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBlock{\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.noStops{\r\n    text-align: center;\r\n    padding: 2%;\r\n    margin: 2% 0;\r\n}\r\n\r\n.popUpContent {\r\n    padding: 30px;\r\n    color: #787878;\r\n    background-color: rgba(0,0,0,.05);\r\n    border: 1px solid rgba(21, 5, 5, 0.12);\r\n}\r\n\r\n.popUpWrapper{\r\n    min-width: 100px;\r\n    min-height: 5px;\r\n}\r\n\r\n.rowBlock{\r\n    box-shadow:2px 2px 2px gray,-1px -1px 2px white;\r\n}", ""]);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBlY2RiNjBhZDgxYTM5MTgwMWIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvbWF0aC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvcmVnZXhwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9Vc2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzP2Q1NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzP2UwZTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJkZXRhaWwvd2VhdGhlcmRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyY29uc3RyYWludHMvd2VhdGhlcmNvbnN0cmFpbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzP2UxMWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwYmVzdC90cmlwYmVzdC5jb21wb25lbnQuY3NzPzUwYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcz9jYmQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzcz81MDUyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzPzJhMDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuY3NzP2Q2MjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGF0ZWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1jaGFydHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1idXR0b25zL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oYW1tZXJqcy9oYW1tZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi1wYWdpbmF0aW9uL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXFCO0FBRXJCLHlHQUF3RztBQUN4RywyREFBMkU7QUFDM0UsdUNBQStDO0FBQy9DLDZDQUE2QztBQUM3QywwQkFBbUI7QUFFbkIseURBQXdEO0FBQ3hELEdBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBUSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxFQUFDO0FBQUMsS0FBSSxDQUFDLENBQUM7S0FDSixxQkFBYyxFQUFFLENBQUM7QUFDckIsRUFBQztBQUVELHNFQUFxRTtBQUNyRSxLQUFNLFFBQVEsR0FBRyxpREFBc0IsRUFBRSxDQUFDO0FBQzFDLEtBQU0sZUFBZSxHQUFHLGNBQVEsUUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkUsR0FBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNKLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNuRSxFQUFDOzs7Ozs7OztBQ3ZCRCxpRDs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGdGQUErRTtBQUMvRSxzREFBcUQ7O0FBRXJELHdCQUE0QjtBQUM1Qix3QkFBNEI7QUFDNUIseUJBQThCO0FBQzlCLHlCQUErQjtBQUMvQix5QkFBaUM7QUFDakMseUJBQTRCO0FBQzVCLHlCQUEwQjtBQUMxQix5QkFBNEI7QUFDNUIseUJBQTBCO0FBQzFCLHlCQUEyQjtBQUMzQiwwQkFBNEI7QUFDNUIsMEJBQXlCO0FBQ3pCLDBCQUF5QjtBQUN6QiwwQkFBOEI7QUFDOUIsMEJBQThCO0FBQzlCLDBCQUEyQjtBQUMzQiwwQkFBNkI7QUFFN0IsdUdBQXNHO0FBQ3RHLDBCQUE2QjtBQUM3QiwwQkFBMkI7Ozs7Ozs7QUN2QjNCO0FBQ0E7QUFDQSxnRDs7Ozs7O0FDRkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEOzs7Ozs7QUNuQkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGtEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBLGtEOzs7Ozs7QUNEQSxnRDs7Ozs7O0FDQUE7QUFDQSxvRDs7Ozs7O0FDREEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUNaQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7Ozs7OztBQ2pCQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7O0FDMUJBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7QUNMQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7Ozs7OztBQ3RCQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUNQQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDOzs7Ozs7QUNKQSxpRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7Ozs7OztBQ0pBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxpRDs7Ozs7O0FDSEEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNIQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQ1pBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEOzs7Ozs7QUNkQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7OztBQ0FBLHVDQUF5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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDLENBQUM7S0FDTCxlQUFDO0FBQUQsRUFBQztBQU5ZLFNBQVE7S0FMcEIsV0FBSSxDQUFDO1NBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDbEIsSUFBSSxFQUFFLEtBQUs7TUFDZCxDQUFDO0lBRVcsUUFBUSxDQU1wQjtBQU5ZLDZCQUFROzs7Ozs7O0FDVHJCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoibWFpbi1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGVjZGI2MGFkODFhMzkxODAxYiIsImltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBpbXBvcnRzIGNpIGhhdXQsIGxlcyBwb2x5ZmlsbHMgcG91ciBlbmFibGVyIHVuIG5vdXZlbCBBUEkvd2ViIHN1cHBvcnQgZGFucyB1biBvbGQgYnJvd3Nlci9lbnZpcm9ubWVudFxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8vIEVuYWJsZSBlaXRoZXIgSG90IE1vZHVsZSBSZWxvYWRpbmcgb3IgcHJvZHVjdGlvbiBtb2RlXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG4gICAgbW9kdWxlWydob3QnXS5kaXNwb3NlKCgpID0+IHsgcGxhdGZvcm0uZGVzdHJveSgpOyB9KTtcbn0gZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLy8gQm9vdCB0aGUgYXBwbGljYXRpb24sIGVpdGhlciBub3cgb3Igd2hlbiB0aGUgRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKTtcbmNvbnN0IGJvb3RBcHBsaWNhdGlvbiA9ICgpID0+IHsgcGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IH07XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGJvb3RBcHBsaWNhdGlvbigpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdEFwcGxpY2F0aW9uKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LWNsaWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEyNzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXHJcbi8vIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3R5cGVkJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbi8vIGVuYWJsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBpbiBkZWNvcmF0b3IgZnVuY3Rpb25zLiAocmVwbGFjZXMgcGFja2FnZXMgcmVmbGVjdC1tZXRhZGF0YSArIGVzNi1zaGltKVxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcG9seWZpbGxzLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkwNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5GdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODcxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5wYXJzZUludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykucGFyc2VGbG9hdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk51bWJlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODkzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg5Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4OTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODczKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODc3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg4OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5ibGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1YicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnN1cCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TdHJpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTUxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQ5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk1Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9kYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuam9pbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNvcnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc29tZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODYwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg1OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg0Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg4NDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVnRXhwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0ODMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3dlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha1NldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9lczYvd2Vhay1zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTcxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDk3Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5NjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlJlZmxlY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkyOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5MzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUmVmbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2VzNy9yZWZsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTkzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg5OTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTk5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTAwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDAxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMjc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY0OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxvZ2luXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkJztcblxuLy8gbWFpbiBjb21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWF0aGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhdGhlckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXJjb25zdHJhaW50cy93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUcmlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmVzdFRyaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaXBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpcGRldGFpbC90cmlwZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlwVXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdG9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFN0b3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50JztcblxuLy8gc2VydmljZXNcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UnO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRm9ybWF0SG91ciB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5waXBlJztcbmltcG9ydCB7IFRyaXBEYXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RyaXAvdHJpcC5waXBlJ1xuLy8ga2VuZG8gVUkgbW9kdWxlc1xuaW1wb3J0IHsgRGF0ZUlucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0JztcclxuaW1wb3J0IHsgQ2hhcnRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItY2hhcnRzJztcclxuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItYnV0dG9ucyc7XHJcbmltcG9ydCB7IERyb3BEb3duc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducyc7XHJcbmltcG9ydCB7IFBvcHVwTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItcG9wdXAnO1xyXG5cclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG4vLyBwYWdpbmdcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuLy9pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XHJcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckZvcm1Db21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJDb25zdHJhaW50c0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQsXG4gICAgICAgIFRyaXBDb21wb25lbnQsXG4gICAgICAgIEJlc3RUcmlwQ29tcG9uZW50LFxuICAgICAgICBUcmlwRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUcmlwVXNlckNvbXBvbmVudCxcbiAgICAgICAgRWRpdFN0b3BDb21wb25lbnQsXG4gICAgICAgIFN0b3BDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSYXRpbmdDb21wb25lbnQsXG4gICAgICAgIC8vIHBpcGVzXG4gICAgICAgIEZvcm1hdEhvdXIsXG4gICAgICAgIFRyaXBEYXRlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFRyaXBTZXJ2aWNlLFxuICAgICAgICBUcmlwRGV0YWlsU2VydmljZSxcbiAgICAgICAgU3RvcFNlcnZpY2UsXG4gICAgICAgIFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0c01vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIExheW91dE1vZHVsZSxcbiAgICAgICAgQ2hhcnRzTW9kdWxlLFxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIFBvcHVwTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd0cmlwcycsIGNvbXBvbmVudDogVHJpcENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2Jlc3QnLCBjb21wb25lbnQ6IEJlc3RUcmlwQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3RyaXBzL3BlcnNvJywgY29tcG9uZW50OiBUcmlwVXNlckNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sICAgICAgICAgIFxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3RyaXBzLzppZCcsIGNvbXBvbmVudDogVHJpcERldGFpbENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBTdG9wQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3N0b3AnLCBjb21wb25lbnQ6IFN0b3BDb21wb25lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZWRpdCcsIGNvbXBvbmVudDogRWRpdFN0b3BDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd3ZWF0aGVycycsIGNvbXBvbmVudDogV2VhdGhlckNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBXZWF0aGVyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2RldGFpbC86aWQnLCBjb21wb25lbnQ6IFdlYXRoZXJEZXRhaWxDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3dlYXRoZXJDb25zdHJhaW50cycsIGNvbXBvbmVudDogV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd3ZWF0aGVyQ29uc3RyYWludHMvOmlkJywgY29tcG9uZW50OiBXZWF0aGVyQ29uc3RyYWludENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEwMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyLCBJVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdXNlcjogVXNlcjtcclxuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbXNUaW1lT3V0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKFwiRGFwaERDXCIsIFwiZGFwaEBkYXBoLmNvbVwiLCBcIlBAc3N3MHJkIVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1zVGltZU91dCA9IDMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IDxJVXNlcj5mb3JtLnZhbHVlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ2luQVBJKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaXBwZWRUb2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGxvZ2luIHVzZXIgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lID0gdGhpcy51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4gPSBzdHJpcHBlZFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IHNlcnZpY2UgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yb2xlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb2xlW2ldLnR5cGUgPT0gXCJTdXBlclVzZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VwZXJVc2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5lc3RBZG1pbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHNcIik7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gXCJJbXBvc3NpYmxlIGRlIGxvZ3VlciBsZSB1c2VyIDogXCIgKyB0aGlzLnVzZXIudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci51c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc3RvcExvYWRpbmcoKTsgfSwgdGhpcy5tc1RpbWVPdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbG9nIHVzZXIgIDogXCIgKyB0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlck5hbWU6IHN0cmluZywgcHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nKSB7fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL1VzZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbi8vaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItMi1sb2NhbC1zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGVzdEFkbWluOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfdXJsTG9naW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsTG9naW4gPSAnYXBpL2F1dGgvdG9rZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luQVBJKHVzZXI6IElVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybExvZ2luLCBib2R5LCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZXN0QWRtaW4gPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2MDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMz5Mb2dpbjwvaDM+XFxyXFxuICAgIDxmb3JtICNsb2dpbj1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChsb2dpbilcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlck5hbWVcXFwiPlVzZXIgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiBpZD1cXFwidXNlck5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnVzZXJOYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci51c2VyTmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlVzZXJuYW1lIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5Db3VycmllbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luLnN1Ym1pdHRlZCAmJiAhdXNlci5lbWFpbC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkVtYWlsIGVzdCByZXF1aXMuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5Nb3QgUGFzc2U8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5zdWJtaXR0ZWQgJiYgIXVzZXIucGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Nb3QgUGFzc2UgZXN0IHJlcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1zdWNjZXNzXFxcIj5TZSBMb2d1ZXI8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2PjxpICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1wdWxzZSBmYS0zeCBmYS1md1xcXCI+PC9pPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlcnJvclxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvcn19PC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgTG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5Mb2dpblNlcnZpY2UudG9rZW4gIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5Mb2dpblNlcnZpY2UudG9rZW4gIT0gXCJ1bmRlZmluZWRcIikpIHtcclxuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3VhcmQgOiBcIiArIHRoaXMuTG9naW5TZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3VhcmQgXCIgKyB0aGlzLkxvZ2luU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvbG9naW5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcblxcbiAgICBhe1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5Bbmd1bGFyMkNvcmVTZWVkPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwibGluay1hY3RpdmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXFxcIj48L3NwYW4+IFNpZ24gVXBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9nLWluXFxcIj48L3NwYW4+IFNpZ24gSW5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJpcHMnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcm9hZFxcXCI+PC9zcGFuPiBUcmlwc1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93ZWF0aGVycyddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0XFxcIj48L3NwYW4+IFdlYXRoZXJzXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3dlYXRoZXJDb25zdHJhaW50cyddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyLWVtcHR5XFxcIj48L3NwYW4+IFdlYXRoZXIgQ29uc3RyYWludHNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctb3V0XFxcIj48L3NwYW4+IExvZ091dFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuY3NzJyldXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaXRlbXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAxO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiQVNQLk5FVCBDb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFTUC5ORVQgQ29yZSBhbmQgQyMgZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2dldC5hc3AubmV0LycsXHJcbiAgICAgICAgICAgICAgICBsaW5rMjogJ2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJBbmd1bGFyIDIgYW5kIFR5cGVTY3JpcHQgXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcImZvciBjbGllbnQtc2lkZSBjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyLmlvLycsXHJcbiAgICAgICAgICAgICAgICBsaW5rMjogJ2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJXZWJwYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcImZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcImZvciBsYXlvdXQgYW5kIHN0eWxpbmdcIixcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxuICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SGVsbG8gV29ybGQ8L2gxPlxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxoMz5CaWVudmVudWUgU3VyIDxzcGFuPjxzdHJvbmc+PGk+QW5ndWxhcjJDb3JlU2VlZDwvaT48L3N0cm9uZz48L3NwYW4+LCBEZW1vIDogPC9oMz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbj5cXHJcXG4gICAgPGtlbmRvLXRhYnN0cmlwIFtuZ0NsYXNzXT1cXFwiJ2NvbC1tZC0xMidcXFwiIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tYm90dG9tJzogJzIlJ31cXFwiPlxcclxcbiAgICAgICAgPGtlbmRvLXRhYnN0cmlwLXRhYiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zIGxldCBpPWluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJpdGVtLnN1YmplY3RcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XFxcImkgPT0gc2VsZWN0ZWRcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb1RhYkNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD57e2l0ZW0/LmNvbnRlbnR9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XFxcInt7aXRlbT8ubGlua319XFxcIj57e2l0ZW0/Lmxpbmt9fTwvYT48L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVxcXCJ7e2l0ZW0/LmxpbmsyfX1cXFwiPnt7aXRlbT8ubGluazJ9fTwvYT48L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L2tlbmRvLXRhYnN0cmlwLXRhYj5cXHJcXG4gICAgPC9rZW5kby10YWJzdHJpcD5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGg0PkxlcyBjb25jZXB0cyBpbXBvcnRhbnRzIDogPC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gPHNlY3Rpb24+XFxyXFxuICAgIDxrZW5kby1wYW5lbGJhciBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWJvdHRvbSc6ICcyJSd9XFxcIj5cXHJcXG4gICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidDbGllbnQtc2lkZSBuYXZpZ2F0aW9uJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ1NlcnZlci1zaWRlIHByZXJlbmRlcmluZydcXFwiIFtleHBhbmRlZF09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ1RoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ1dlYnBhY2sgZGV2IG1pZGRsZXdhcmUnXFxcIiBbZXhwYW5kZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSW4gZGV2ZWxvcG1lbnQgbW9kZSwgbm8gbmVlZCB0byBydW4gdGhlIHdlYnBhY2sgYnVpbGQgdG9vbC4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ1lvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuJ1xcXCI+PC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPC9rZW5kby1wYW5lbGJhci1pdGVtPlxcclxcbiAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ0hvdCBtb2R1bGUgcmVwbGFjZW1lbnQnXFxcIiBbZXhwYW5kZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSW4gZGV2ZWxvcG1lbnQgbW9kZSwgbm8gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLXBhbmVsYmFyLWl0ZW0gW3RpdGxlXT1cXFwiJ1dpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLidcXFwiPjwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDwva2VuZG8tcGFuZWxiYXItaXRlbT5cXHJcXG4gICAgICAgIDxrZW5kby1wYW5lbGJhci1pdGVtIFt0aXRsZV09XFxcIidFZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHMnXFxcIiBbZXhwYW5kZWRdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tcGFuZWxiYXItaXRlbSBbdGl0bGVdPVxcXCInSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSB3ZWJwYWNrIGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy4nXFxcIj48L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgICAgICA8L2tlbmRvLXBhbmVsYmFyLWl0ZW0+XFxyXFxuICAgIDwva2VuZG8tcGFuZWxiYXI+XFxuXFxuPC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYSwgcCA+IGF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2e1xcclxcbiAgICBtYXJnaW46IDElIDA7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDA7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3BTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcC9zdG9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBUcmlwLCBJVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IFRyaXBEZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vdHJpcGRldGFpbC90cmlwZGV0YWlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlbGV0ZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlzRGVsZXRlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgd2VhdGhlclRvRGVsZXRlSWQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIG9iamVjdFRvRGVsZXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0cmlwVG9EZWxldGU6IElUcmlwO1xyXG4gICAgQE91dHB1dCgpIGRlbGV0ZVN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHB1YmxpYyBpZFRvRGVsZXRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNTaG93Tm90aWY6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBfc3RvcFNlcnZpY2U6IFN0b3BTZXJ2aWNlLCBwdWJsaWMgX3RyaXBEZXRhaWxTZXJ2aWNlOiBUcmlwRGV0YWlsU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWRUb0RlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZSkge1xyXG4gICAgICAgICAgICAvLyBwb3AgdXAgb3BlblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluIGRlbGV0ZSA6IFwiICsgdGhpcy5pc0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVOb3RpZigpIHtcclxuICAgICAgICB0aGlzLmlzU2hvd05vdGlmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb0RlbGV0ZSA9IHRoaXMud2VhdGhlclRvRGVsZXRlSWQ7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0VG9EZWxldGUgPT0gXCJzdG9wQWRtaW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVN0b3BCeUlkKHRoaXMuaWRUb0RlbGV0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub2JqZWN0VG9EZWxldGUgPT0gXCJ3ZWF0aGVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVyV2VhdGhlckJ5SWQodGhpcy5pZFRvRGVsZXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqZWN0VG9EZWxldGUgPT0gXCJ1c2VydHJpcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVXNlclRyaXAodGhpcy50cmlwVG9EZWxldGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsRGVsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9wQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcFNlcnZpY2UuZGVsZXRlU3RvcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VjY2Vzcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Tm90aWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBERUxFVEUgc3RvcCBpbiBkZWxldGUgY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIERFTEVURSBzdG9wIGluIGRlbGV0ZSBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlcldlYXRoZXJCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5kZWxldGVXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIERFTEVURSBpbiBjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgREVMRVRFIGluIGNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVVc2VyVHJpcCh0cmlwOiBJVHJpcCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBEZXRhaWxTZXJ2aWNlLmRlbGV0ZVRyaXBBUEkodHJpcClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWNjZXNzLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb3RpZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVkIHRyaXAgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhcImVycm9yIGRlbGV0aW5nIHRyaXBcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxXZWF0aGVyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHVibGljIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VybFdlYXRoZXIgPSBcImFwaS93ZWF0aGVyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgYWxsIHdlYXRoZXIgb2JqZWN0c1xyXG4gICAgZ2V0QWxsV2VhdGhlcnNBUEkoKTogT2JzZXJ2YWJsZTxJV2VhdGhlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1Q6ICAgIDEgd2VhdGhlciBvYmplY3RcclxuICAgIHBvc3RXZWF0aGVyQVBJKHdlYXRoZXI6IFdlYXRoZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFdlYXRoZXIsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElXZWF0aGVyPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBQVVQ6ICAgICAxIHdlYXRoZXIgb2JqZWN0XHJcbiAgICBwdXRXZWF0aGVyQVBJKHdlYXRoZXI6IFdlYXRoZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsV2VhdGhlciwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgYnkgaWRcclxuICAgIGdldFdlYXRoZXJCeUlkQVBJKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFdlYXRoZXIgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJV2VhdGhlcj5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgMSB3ZWF0aGVyIG9iamVjdCBkZXRhaWxzIGJ5IG5hbWVcclxuICAgIGdldFdlYXRoZXJCeU5hbWVBUEkobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxJV2VhdGhlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxXZWF0aGVyICsgXCIvQnlOYW1lL1wiICsgbmFtZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVdlYXRoZXI+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIDEgd2VhdGhlciBvYmplY3QgZGV0YWlscyBieSBpZFxyXG4gICAgZGVsZXRlV2VhdGhlckJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsV2VhdGhlciArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZGVsZXRlIHdlYXRoZXIsIHJlc3Agd2UgZ2V0IGluIHNlcnZpY2UgOiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5jb25zb2xlLmxvZyhcInN1Y2NlcyBkZWxldGUgd2VhdGhlciwgcmVzcCB3ZSBnZXQgaW4gc2VydmljZSA6IFwiICsgZXJyb3IpKSAgICAgIFxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBJU3RvcCwgU3RvcCB9IGZyb20gJy4vc3RvcCc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9wU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF91cmxTdG9wOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91cmxTdG9wID0gJ2FwaS9zdG9wJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZWFkZXJzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTdG9wQnlJZEFQSShpZDogbnVtYmVyLCBzdG9wOiBTdG9wKTogT2JzZXJ2YWJsZTxJU3RvcD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZHUgbG9naW4gc2VydmljZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0SGVhZGVycygpO1xyXG5cclxuICAgICAgICBzdG9wLmN1aXNpbmUgPSBzdG9wLmN1aXNpbmVbXCJ0ZXh0XCJdO1xyXG4gICAgICAgIHN0b3AuZ3VpZGUgPSBzdG9wLmd1aWRlW1widGV4dFwiXTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdG9wKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybFN0b3AgKyBcIi9cIiArIGlkLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJU3RvcD5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcEJ5SWRBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBkdSBsb2dpbiBzZXJ2aWNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xvZ2luU2VydmljZS50b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmxTdG9wICsgXCIvXCIgKyBpZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhcImRlbGV0ZSBzdG9wIHdpdGggaWQgOiBcIiArIGlkKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRlIHN0b3AgXCIgKyBlcnJvcikpXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJpcERldGFpbFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfdXJsVHJpcDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9IFwiYXBpL3RyaXBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQgIDogZ2V0IHRyaXAgYnkuXHJcbiAgICBnZXRUcmlwQnlJZEFQSShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9sb2dpblNlcnZpY2UudG9rZW4sICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogICAgIGdldCB0cmlwcyBmb3IgbG9nZ2VkIGluIHVzZXIuXHJcbiAgICBnZXRVc2VyVHJpcEFQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyBcIi91c2VyXCIsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1Q6ICAgIDEgdHJpcCBvYmplY3QuXHJcbiAgICBwb3N0VHJpcEFQSSh0cmlwOiBUcmlwKTogT2JzZXJ2YWJsZTxJVHJpcD4ge1xyXG5cclxuICAgICAgICAvLyBhZGQgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodHJpcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsVHJpcCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SVRyaXA+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyaXBBUEkodHJpcDogVHJpcCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuX2xvZ2luU2VydmljZS50b2tlbiwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsVHJpcCArIFwiL1wiICsgdHJpcC5pZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8YW55PmNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJpc1Nob3dOb3RpZlxcXCIgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXN1Y2Nlc3NcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgIDxwPkFjdGlvbiBlZmZlY3R1w6llLjwvcD4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgKm5nSWY9XFxcImlkVG9EZWxldGVcXFwiPlxcclxcbiAgICAgICAgPGgzPlN1Y2PDqHMgc3VwcHJpbWVyICM8L2gzPlxcclxcbiAgICAgICAgPGg0Pnt7aWRUb0RlbGV0ZX19PC9oND5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImhpZGVOb3RpZigpXFxcIj5IaWRlPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGtlbmRvLWRpYWxvZyAqbmdJZj1cXFwiaXNEZWxldGVcXFwiIChjbG9zZSk9XFxcImNhbmNlbERlbGV0ZSgpXFxcIj5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy10aXRsZWJhcj5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDEuM2VtO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPiBTdXBwcmltZXIgZG9ubsOpZVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwva2VuZG8tZGlhbG9nLXRpdGxlYmFyPlxcclxcbiAgICA8cCBzdHlsZT1cXFwibWFyZ2luOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5BY3Rpb24gaXJyw6l2b2NhYmxlLjwvcD5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWRpYWxvZy1hY3Rpb25zPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxEZWxldGUoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcIm9uRGVsZXRlRGF0YSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPC9rZW5kby1kaWFsb2ctYWN0aW9ucz5cXHJcXG48L2tlbmRvLWRpYWxvZz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2VhdGhlciwgSVdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dlYXRoZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaW5wdXREZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5wdXRJZERlbGV0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdlYXRoZXJzOiBXZWF0aGVyW107XHJcbiAgICBwdWJsaWMgd2VhdGhlcjE6IFdlYXRoZXI7XHJcbiAgICBwdWJsaWMgb2JqZWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdHJlV2VhdGhlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGVkaXRGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIGZtRGF0ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0cmVXZWF0aGVyID0gXCJXZWF0aGVyIENoZWNrXCI7XHJcbiAgICAgICAgdGhpcy5vYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgLy8gbW9tZW50IGpzIGZvcm1hdCBhIGRhdGUgd2l0aCBhIHN0cmluZyBmb3JtYXQsIHJldHVybnMgYSBkYXRlLlxyXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2VuLWNhJyk7XHJcbiAgICAgICAgdGhpcy5mbURhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm1EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjbGFzcyB3ZWF0aGVyIG9iamVjdCB0byBiaW5kIHRvLlxyXG4gICAgICAgIHRoaXMud2VhdGhlcjEgPSBuZXcgV2VhdGhlcigxLCBcIkF1dG9tbldlYXRoZXJcIiwgdGhpcy5mbURhdGUsIDE0LCBcIlRlbXDDqXJhdHVyZSBBdXRvbW5lXCIpO1xyXG4gICAgICAgIC8vIE1ldGhvZCB0byBnZXQgd2VhdGhlciBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVCA6IGFsbCB3ZWF0aGVyIG9iamVjdHMgZnJvbSBkYlxyXG4gICAgZ2V0QWxsV2VhdGhlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFdlYXRoZXJzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IGFsbCB3ZWF0aGVyIG9iamV0cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2aWNlIDogIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXZWF0aGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gIXRoaXMuc2hvd0Zvcm07XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvRGVsZXRlKGlkVG9EZWxldGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ28gZGVsZXRlIDogXCIgKyBpZFRvRGVsZXRlKTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBpZFRvRGVsZXRlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwid2VhdGhlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcnMuc3BsaWNlKHRoaXMuaW5wdXRJZERlbGV0ZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWxsV2VhdGhlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSBhIGpzIG9iamVjdCAgKHVzdWFsbHkgb2JqZWN0IG9yIGFycmF5KSBjb252ZXJ0IGl0IHRvIEpTT04gc3RyaW5nIG5vdGF0aW9uXHJcbiAgICAvLyB0byBnZXQgSlNPTiBvYmplY3QgdXNlIHBhcnNlIG1ldGhvZFxyXG4gICAgZ2V0IGRpYWdub3N0aWMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwYXlsb2FkIHdlYXRoZXIgb2JqZWN0IGZyb20gY2hpbGRyZW4gY29tcG9uZW50IHdlYXRoZXJmb3JtXHJcbiAgICBwb3N0V2VhdGhlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gJGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHdlYXRoZXIgdG8gcG9zdCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIxKTtcclxuXHJcbiAgICAgICAgLy8gTWV0aG9kIHRvIHNhdmUgbmV3IHdlYXRoZXIgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5zYXZlV2VhdGhlcih0aGlzLndlYXRoZXIxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGEgd2VhdGhlclxyXG4gICAgZWRpdFdlYXRoZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyMSA9ICRldmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRpbmcgYSB3ZWF0aGVyIDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlcjEpO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gZWRpdCBhIHdlYXRoZXJcclxuICAgICAgICB0aGlzLnB1dFdlYXRoZXIodGhpcy53ZWF0aGVyMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdCBhIHdlYXRoZXIgd2hlbiBjbGlja2luZyBhIGxpbmsgb24gd2VhdGhlciBvYmplY3RzIHRhYmxlLlxyXG4gICAgZ29FZGl0KHdlYXRoZXI6IFdlYXRoZXIpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIxID0gd2VhdGhlcjtcclxuICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQT1NUIDogY2FsbCB0aGUgcG9zdCBhY3Rpb24gb24gYmFja2VuZCB0byBjcmVhdGUgbmV3IHdlYXRoZXIgb2JqZWN0LlxyXG4gICAgc2F2ZVdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IFN1YnNjcmlwdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWF0aGVyU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmhvdXIgPSBkYXRhLmhvdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS50ZW1wQyA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcGVyYXR1cmVGID0gZGF0YS50ZW1wZXJhdHVyZUY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBuZXcgd2VhdGhlciA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRoZSBkYXRhIGluIHRoZSBicm93c2VyIHRvIGdldCBoZSBuZXdseSBzYWJlZCB3ZWF0aGVyIG9iamVjdC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFdlYXRoZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIG9mIGRhdGUgc2VudCBiYWNrIHRvIGNsaWVudCA6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHRoaXMud2VhdGhlcjEuaG91cikpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHNhdmluZyB3ZWF0aGVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0V2VhdGhlcih3ZWF0aGVyOiBXZWF0aGVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VhdGhlclNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dFdlYXRoZXJBUEkod2VhdGhlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEuaG91ciA9IGRhdGEuaG91cjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLmlkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIxLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyMS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcjEudGVtcEMgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdGVkIHdlYXRoZXIgOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxXZWF0aGVycygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGVkaXRpbmcgd2VhdGhlciA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbnN0cmFpbnQsIElDb25zdHJhaW50IH0gZnJvbSAnLi4vd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJV2VhdGhlciB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaG91cj86IERhdGU7XG4gICAgdGVtcEM/OiBudW1iZXI7XG4gICAgc3VtbWFyeT86IHN0cmluZztcbiAgICB0ZW1wZXJhdHVyZUY/OiBudW1iZXI7XG4gICAgY29uc3RyYWludHM/OiBDb25zdHJhaW50W107XG59XG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyIGltcGxlbWVudHMgSVdlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGhvdXI/OiBEYXRlLFxuICAgICAgICBwdWJsaWMgdGVtcEM/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5Pzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGVtcGVyYXR1cmVGPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgY29uc3RyYWludHM/OiBDb25zdHJhaW50W10pIHsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT57e3RpdHJlV2VhdGhlcn19PC9oMT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNob3dXZWF0aGVyRm9ybSgpXFxcIj5DcmVhdGUgbmV3IFdlYXRoZXI8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGVsZXRlIFtpc0RlbGV0ZV09XFxcImlucHV0RGVsZXRlXFxcIiBbd2VhdGhlclRvRGVsZXRlSWRdPVxcXCJpbnB1dElkRGVsZXRlXFxcIiBbb2JqZWN0VG9EZWxldGVdPVxcXCJvYmplY3ROYW1lXFxcIiAoZGVsZXRlU3VjY2Vzcyk9XFxcInJlZnJlc2hSZXN1bHRzKCRldmVudClcXFwiPjwvZGVsZXRlPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcInNob3dGb3JtXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHdlYXRoZXItZm9ybSBbd2VhdGhlclRvU2F2ZV09XFxcIndlYXRoZXIxXFxcIiAobmV3V2VhdGhlcik9XFxcInBvc3RXZWF0aGVyKCRldmVudClcXFwiIChlZFdlYXRoZXIpPVxcXCJlZGl0V2VhdGhlcigkZXZlbnQpXFxcIiBbbW9kZUVkaXRdPVxcXCJlZGl0Rm9ybVxcXCI+PC93ZWF0aGVyLWZvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwid2VhdGhlcnNcXFwiPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHdlYXRoZXIgb2Ygd2VhdGhlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2RldGFpbCcsIHdlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/LmlkfX08L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgKGNsaWNrKT1cXFwiZ29EZWxldGUod2VhdGhlci5pZClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNjaXNzb3JzXFxcIj5EZWxldGU8L2k+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVxcXCJnb0VkaXQod2VhdGhlcilcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+RWRpdDwvaT48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRlbGV0ZT48L2RlbGV0ZT5cXHJcXG5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZWF0aGVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckZvcm1Db21wb25lbnR7XHJcbiAgICBASW5wdXQoKSB3ZWF0aGVyVG9TYXZlOiBXZWF0aGVyO1xyXG4gICAgQE91dHB1dCgpIG5ld1dlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBPdXRwdXQoKSBlZFdlYXRoZXI6IEV2ZW50RW1pdHRlcjxXZWF0aGVyPjtcclxuICAgIEBJbnB1dCgpIG1vZGVFZGl0OiBib29sZWFuO1xyXG4gICAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBvbkVkaXQ6IGJvb2xlYW47XHJcbiAgICAvL2Zvcm0xOiBOZ0Zvcm07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vbkVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV3V2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICB0aGlzLmVkV2VhdGhlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2VhdGhlcj4oKTtcclxuICAgICAgICAvL3RoaXMuZm9ybTEgPSBuZXcgTmdGb3JtKFtdLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gdmV1dCBzb3VtZXR0cmUgb24gZWRpdC5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW52b3llciBsZSB3ZWF0aGVyZm9ybSBvYmplY3QgYXUgd2VhdGhlciBjb21wb25lbnRcclxuICAgIG9uU3VibWl0KHdlYXRoZXJGb3JtOiBOZ0Zvcm0peyAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9ybS52YWxpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRXZWF0aGVyLmVtaXQodGhpcy53ZWF0aGVyVG9TYXZlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBjcmVlclxyXG4gICAgICAgICAgICB0aGlzLm1vZGVFZGl0ID0gZmFsc2U7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3V2VhdGhlci5lbWl0KHdlYXRoZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcG91ciByZXRvdXJuZXIgbW9kZSBlZGl0ZXJcclxuICAgICAgICAgICAgdGhpcy5tb2RlRWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgIDxoMT5XZWF0aGVyIEZvcm08L2gxPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cXFwib25TdWJtaXQod2VhdGhlckZvcm0pXFxcIiAjd2VhdGhlckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPk5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJob3VyXFxcIj5Ib3VyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRpbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJob3VyXFxcIiBuYW1lPVxcXCJob3VyXFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5ob3VyXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZW1wQ1xcXCI+VGVtcCAqQzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ0ZW1wQ1xcXCIgbmFtZT1cXFwidGVtcENcXFwiIFsobmdNb2RlbCldPVxcXCJ3ZWF0aGVyVG9TYXZlLnRlbXBDXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdW1tYXJ5XFxcIj5TdW1tYXJ5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdW1tYXJ5XFxcIiBuYW1lPVxcXCJzdW1tYXJ5XFxcIiBbKG5nTW9kZWwpXT1cXFwid2VhdGhlclRvU2F2ZS5zdW1tYXJ5XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhd2VhdGhlckZvcm0udmFsaWQgfHwgbW9kZUVkaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIm1vZGVFZGl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiF3ZWF0aGVyRm9ybS52YWxpZFxcXCI+RWRpdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIXN1Ym1pdHRlZFxcXCI+XFxyXFxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nOjwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5OYW1lPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgIHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj5Ib3VyIEFNL1BNPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgcHVsbC1sZWZ0XFxcIj57e3dlYXRoZXJUb1NhdmUuaG91ciB8IGZtSG91ckxvY2FsfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgKkM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS50ZW1wQ319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlN1bW1hcnk8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBwdWxsLWxlZnRcXFwiPnt7d2VhdGhlclRvU2F2ZS5zdW1tYXJ5fX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+VGVtcGVyYXR1cmUgRjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IHB1bGwtbGVmdFxcXCI+e3t3ZWF0aGVyVG9TYXZlLnRlbXBlcmF0dXJlRn19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XFxyXFxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXFxyXFxufVxcclxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmstaW52YWxpZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi8qI2RhdGUsICNkYXRlID4gdGFibGUsICNkYXRhID4gZGl2LmstY29udGVudC5rLXNjcm9sbGFibGUsIGtlbmRvLWNhbGVuZGFyLW1vbnRodmlldywgdGFibGUuay1jYWxlbmRhci13ZWVrZGF5c3tcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSovXFxyXFxuXFxyXFxuLyouay1jYWxlbmRhci5rLWNhbGVuZGFyLWluZmluaXRlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGFibGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLWdyb3VwIGRpdi5rLWNvbnRlbnQuay1zY3JvbGxhYmxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxua2VuZG8tY2FsZW5kYXItbW9udGh2aWV3LmstY2FsZW5kYXItbW9udGh2aWV3e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59Ki9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZm9ybS93ZWF0aGVyZm9ybS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlcmRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyRGV0YWlsQ29tcG9uZW50e1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgd2VhdGhlcjogV2VhdGhlcjtcclxuICAgIHB1YmxpYyBtZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCB8fCBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXZWF0aGVyQnlkSWQodGhpcy5pZCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRGV0YWlscyA9IFwiQXVjdW5zIGTDqXRhaWxzIMOgIGFmZmljaGVyXCI7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXRoZXJCeWRJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsbCBnZXREZXRhaWxzIG1ldGhvZCBpbiB0aGUgbnNlcnZpY2VcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB3ZWF0aGVyIGJ5IGlkIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBnZXQgZGV0YWlscyBieSBpZCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWF0aGVyZGV0YWlsL3dlYXRoZXJkZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj57e21lc3NhZ2VEZXRhaWxzfX08L2gyPlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcIndlYXRoZXJcXFwiPlxcclxcbiAgICA8aDE+V2VhdGhlciBEZXRhaWw8L2gxPlxcclxcblxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPklkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+SG91ciBBTS9QTTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5UZW1wQzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRlbXAgRjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy5pZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8ubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uaG91ciB8IGZtSG91ckxvY2FsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3t3ZWF0aGVyPy50ZW1wQ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8uc3VtbWFyeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7d2VhdGhlcj8udGVtcGVyYXR1cmVGfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmRldGFpbC93ZWF0aGVyZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXIsIElXZWF0aGVyIH0gZnJvbSAnLi4vd2VhdGhlci93ZWF0aGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWNvbnN0cmFpbnRzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB3ZWF0aGVyczogV2VhdGhlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRBbGxXZWF0aGVyc0FQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXJzIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPldlYXRoZXJzPC9oMj5cXHJcXG5cXHJcXG48aDM+Q2hvb3NlIGEgd2VhdGhlciB0byBnZXQgd2VhdGhlciBjb25zdHJhaW50cyBmcm9tIDogPC9oMz5cXHJcXG5cXHJcXG48dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCB3ZWF0aGVyIG9mIHdlYXRoZXJzXFxcIj5cXHJcXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW3dlYXRoZXIuaWRdXFxcIj57e3dlYXRoZXI/Lm5hbWV9fTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyY29uc3RyYWludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50LCBJQ29uc3RyYWludCB9IGZyb20gJy4vd2VhdGhlckNvbnN0cmFpbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItY29uc3RyYWludCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93ZWF0aGVyY29uc3RyYWludC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbnN0cmFpbnRDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50W107XHJcbiAgICBwdWJsaWMgdGVtcENvbnN0OiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF93ZWF0aGVyQ29uc3RyYWludFNlcnZpY2U6IFdlYXRoZXJDb25zdHJhaW50c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRlbXBDb25zdCA9IFsnVmVudCcsICdSYWZhbGUnLCAnSHVtaWRpdMOpJywgJ1Byw6lzZW50aSddOyBcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnN0cmFpbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlckNvbnN0cmFpbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb25zdHJhaW50c0FQSSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYWxsIHRoZSBjb25zdHJhaW50cyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLnN0YXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uc3RhdHMucHVzaCh0aGlzLmNvbnN0cmFpbnRzW2ldLndpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmd1c3QsIHRoaXMuY29uc3RyYWludHNbaV0uaHVtaWRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmZlZWxzTGlrZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBkdSBzZXJ2ZXVyIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2VhdGhlckNvbnN0cmFpbnRzJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWF0aGVyLCBJV2VhdGhlciB9IGZyb20gJy4uL3dlYXRoZXIvd2VhdGhlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uc3RyYWludCwgSUNvbnN0cmFpbnQgfSBmcm9tICcuL3dlYXRoZXJjb25zdHJhaW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29uc3RyYWludHNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc3RyYWludHNBUEkoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS93ZWF0aGVyLycgKyBpZCArICcvY29uc3RyYWludHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwOiBSZXNwb25zZSkgPT4gPElDb25zdHJhaW50W10+cmVzcC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gPGFueT5lcnJvci5qc29uKCkpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlN0YXRpc3RpcXVlcyBwb3VyIGxhIHRlbXDDqXJhdHVyZSA6ICMge3t0aGlzLmlkfX08L2gyPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFdpbmQga20vaFxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XFxcIi4uLy4uLy4uLy4uL3d3d3Jvb3QvZGlzdC9pbWcvd2luZC5wbmdcXFwiLz4tLT5cXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgR3VzdCBrbS9oXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEh1bWlkaXR5ICVcXHJcXG4gICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgU3VuIFJpc2luZyBBTVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICBTdW4gU2V0IFBNXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIENsZWFyXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIEZlZWxzIExpa2UgwrBDXFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgIFRlbXDDqXJhdHVyZVxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY29uc3RyYWludCBvZiBjb25zdHJhaW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/LndpbmR9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmd1c3R9fVxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICB7e2NvbnN0cmFpbnQ/Lmh1bWlkaXR5fX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5SaXNpbmcgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5zdW5TZXQgfCBmbVRyaXBEYXRlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAge3tjb25zdHJhaW50Py5jbGVhcn19XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIHt7Y29uc3RyYWludD8uZmVlbHNMaWtlfX1cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCA6IHt7Y29uc3RyYWludD8ud2VhdGhlci5uYW1lfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwPkhldXJlIDoge3tjb25zdHJhaW50Py53ZWF0aGVyLmhvdXIgfCBmbUhvdXJMb2NhbCB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VGVtcCDCsEMgOiB7e2NvbnN0cmFpbnQ/LndlYXRoZXIudGVtcEN9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcbjxrZW5kby1jaGFydCBbY2F0ZWdvcnlBeGlzXT1cXFwieyBjYXRlZ29yaWVzOiB0ZW1wQ29uc3QgfVxcXCI+XFxyXFxuXFxyXFxuICAgIDxrZW5kby1jaGFydC12YWx1ZS1heGlzPlxcclxcbiAgICAgICAgPGtlbmRvLWNoYXJ0LXZhbHVlLWF4aXMtaXRlbSBbdGl0bGVdPVxcXCJ7IHRleHQ6ICdTdGF0aXN0aXF1ZXMnIH1cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC12YWx1ZS1heGlzLWl0ZW0+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtdmFsdWUtYXhpcz5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXRpdGxlIHRleHQ9XFxcIlN0YXRpc3RpcXVlcyBUZW1ww6lyYXR1cmUgLyBDb250cmFpbnRlXFxcIiBiYWNrZ3JvdW5kPVxcXCIjZTNlM2UzXFxcIiBmb250PVxcXCIxOXB0IHNhbnMtc2VyaWZcXFwiPjwva2VuZG8tY2hhcnQtdGl0bGU+XFxyXFxuICAgIDxrZW5kby1jaGFydC1sZWdlbmQgcG9zaXRpb249XFxcInRvcFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwva2VuZG8tY2hhcnQtbGVnZW5kPlxcclxcbiAgICA8a2VuZG8tY2hhcnQtdG9vbHRpcCBmb3JtYXQ9XFxcInswfVxcXCIgcGFkZGluZz1cXFwiMVxcXCIgIFtzaGFyZWRdPVxcXCJ0cnVlXFxcIj48L2tlbmRvLWNoYXJ0LXRvb2x0aXA+XFxyXFxuICAgIDxrZW5kby1jaGFydC1hcmVhIGJhY2tncm91bmQ9XFxcIiNmN2Y3ZmFcXFwiIFttYXJnaW5dPVxcXCIzMFxcXCI+XFxyXFxuICAgIDwva2VuZG8tY2hhcnQtYXJlYT5cXHJcXG5cXHJcXG4gICAgPGtlbmRvLWNoYXJ0LXNlcmllcz5cXHJcXG4gICAgICAgIDxrZW5kby1jaGFydC1zZXJpZXMtaXRlbSAqbmdGb3I9XFxcImxldCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzXFxcIiB0eXBlPVxcXCJjb2x1bW5cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImNvbnN0cmFpbnQuc3RhdHNcXFwiIFtuYW1lXT1cXFwiY29uc3RyYWludC53ZWF0aGVyLm5hbWVcXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1jaGFydC1zZXJpZXMtaXRlbT5cXHJcXG4gICAgPC9rZW5kby1jaGFydC1zZXJpZXM+XFxyXFxuPC9rZW5kby1jaGFydD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImdvQmFjaygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVxcXCI+QmFjazwvYnV0dG9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhdGhlcmNvbnN0cmFpbnRzL3dlYXRoZXJjb25zdHJhaW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4vdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHJpcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RyaXAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgdGl0cmVUcmlwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3RyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudGl0cmVUcmlwID0gXCJMZXMgRm9yZmFpdHMgVm95YWdlc1wiO1xyXG4gICAgICAgIHRoaXMudHJpcHMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5TZXJ2aWNlLnVzZXJOYW1lICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLl9sb2dpblNlcnZpY2UudXNlck5hbWUpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuX2xvZ2luU2VydmljZS51c2VyTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhvbWUoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9ob21lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tSYXRpbmcoJGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICAgICAgICBhbGVydCgncmF0aW5nOiAnICsgJGV2ZW50LnJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGdldCBtZXRob3Mgc3VyIHNlcnZpY2UuXHJcbiAgICBnZXRBbGxUcmlwcygpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJpcFNlcnZpY2UuZ2V0QWxsVHJpcHNBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IHRyaXBzIGZyb20gc2VydmljZSA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldHRpbmcgdHJpcHMgZnJvbSBzZXJ2aWNlIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuL3RyaXAnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybFRyaXA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsVHJpcCA9ICdhcGkvdHJpcCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAgICAgQWxsIHRyaXBzIG9iamVjdHMuXHJcbiAgICBnZXRBbGxUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmxUcmlwLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJVHJpcFtdPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiA8YW55PmVycm9yLmpzb24oKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICAgICBCZXN0IHRyaXAgb2JqZWN0cy5cclxuICAgIGdldEJlc3RUcmlwc0FQSSgpOiBPYnNlcnZhYmxlPElUcmlwW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGR1IGxvZ2luIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fbG9naW5TZXJ2aWNlLnRva2VuLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybFRyaXAgKyAnL2Jlc3RUcmlwcycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElUcmlwW10+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IDxhbnk+ZXJyb3IuanNvbigpKSAgICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoZWFkZXI+XFxyXFxuICAgIDxoMT5CaWVudmVudWUgPC9oMT5cXHJcXG4gICAgPGgyPiB7e3VzZXJOYW1lfX08L2gyPlxcclxcbjwvaGVhZGVyPlxcclxcbjxhIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1pbmZvIGFjdGl2ZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy90cmlwcy9wZXJzbyddXFxcIj5NZXMgdHJpcHM8L2E+XFxyXFxuXFxyXFxuPGgyPnt7dGl0cmVUcmlwfX08L2gyPlxcclxcbjxhIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlsnYmVzdCddXFxcIj5NZWlsbGV1cnMgVHJpcHM8L2E+XFxyXFxuXFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcblxcclxcbjxoMz5EaXNwb25pYmxlcyBwcsOpc2VudGVtZW50PC9oMz5cXHJcXG5cXHJcXG48bWFpbiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHRlbXBsYXRlICpuZ0lmPVxcXCIhdHJpcHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDxoMz5BdWN1bnMgVHJpcHM8L2gzPlxcclxcbiAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IHRyaXAgb2YgdHJpcHMgfCBwYWdpbmF0ZTogeyBpdGVtc1BlclBhZ2U6IDgsIGN1cnJlbnRQYWdlOiBwIH1cXFwiIGNsYXNzPVxcXCJpbmZvc1RyaXAgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaT5Ob20gOiB7e3RyaXA/Lm5hbWV9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlBheXMgOiB7e3RyaXA/LmNvdW50cnl9fTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPkNvbnRpbmVudCA6IHt7dHJpcD8uY29udGluZW50fX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgUmF0aW5nIDogPHJhdGluZyAqbmdJZj1cXFwidHJpcD8ucmF0aW5nXFxcIiBbcmF0aW5nXT0ndHJpcC5yYXRpbmcnIChyYXRpbmdDbGljayk9XFxcImNsaWNrUmF0aW5nKCRldmVudClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3JhdGluZz5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDxwPkRhdGUgZGUgRMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvcD5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlt0cmlwLmlkXVxcXCI+Vm9pciBUcmlwPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8cGFnaW5hdGlvbi1jb250cm9scyAocGFnZUNoYW5nZSk9XFxcInAgPSAkZXZlbnRcXFwiPjwvcGFnaW5hdGlvbi1jb250cm9scz5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbjwvbWFpbj5cXHJcXG5cXHJcXG48Zm9vdGVyPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJob21lKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIj48L2k+IEFjY3VlaWw8L2E+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L2Zvb3Rlcj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RyaXAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcC90cmlwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDEsIGhlYWRlciA+IGgye1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5pbmZvc1RyaXB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcclxcbiAgICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMi41JTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2ID4gdWx7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3NUcmlwOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTVkZWcpO1xcclxcbn1cXHJcXG4uaW5mb3NUcmlwOmhvdmVyLCBzZWN0aW9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb257XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxucGFnaW5hdGlvbi1jb250cm9sc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxJSAwIDElIDA7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRyaXAsIFRyaXAgfSBmcm9tICcuLi90cmlwL3RyaXAnO1xyXG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gJy4uL3RyaXAvdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR3JvdXBEZXNjcmlwdG9yLCBwcm9jZXNzLCBTb3J0RGVzY3JpcHRvciB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1kYXRhLXF1ZXJ5JztcclxuaW1wb3J0IHtcbiAgICBHcmlkQ29tcG9uZW50LFxuICAgIEdyaWREYXRhUmVzdWx0LFxuICAgIFBhZ2VDaGFuZ2VFdmVudFxufSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdiZXN0LXRyaXAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcGJlc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdHJpcGJlc3QuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJlc3RUcmlwQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBncmlkVmlldzogR3JpZERhdGFSZXN1bHQ7XHJcbiAgICBwdWJsaWMgYmVzdFRyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBza2lwOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNUcmlwczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRsZUJlc3RUcmlwczogc3RyaW5nO1xyXG4gICAgcHVibGljIGhpZGRlbkNvbHVtbnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGNvbHVtbnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGRhdGE6IE9iamVjdFtdO1xyXG5cclxuICAgIC8vIHBhZ2luZyBpbmZvc1xyXG4gICAgcHVibGljIGJ1dHRvbkNvdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaW5mbzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFnZVNpemVzOiBib29sZWFuO1xyXG4gICAgcHVibGljIHByZXZpb3VzTmV4dDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3RyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSwgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuYmVzdFRyaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDU7XHJcbiAgICAgICAgdGhpcy5za2lwID0gMDtcclxuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXCJpZFwiXTtcclxuICAgICAgICB0aGlzLmlzVHJpcHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlQmVzdFRyaXBzID0gXCJcIjtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvdW50ID0gNTtcclxuICAgICAgICB0aGlzLmluZm8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwibnVtZXJpY1wiO1xyXG4gICAgICAgIHRoaXMucGFnZVNpemVzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTmV4dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JvdXRlci51cmwgPT0gXCIvdHJpcHMvYmVzdFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCB0aGUgcm91dGluZyB0byBhY2Nlc3MgYmVzdCB0cmlwcyBjb21wb25lbnQgaW4gcGFyZW50IGNvbXBvbmVudCB0cmlwcy5cIik7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVCZXN0VHJpcHMgPSBcIkNvbnN1bHRlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmdldEJlc3RUcmlwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYWdlQ2hhbmdlKGV2ZW50OiBQYWdlQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5za2lwID0gZXZlbnQuc2tpcDtcbiAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcbiAgICB9XHJcblxyXG4gICAgbG9hZEl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZFZpZXcgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuYmVzdFRyaXBzLnNsaWNlKHRoaXMuc2tpcCwgdGhpcy5za2lwICsgdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLmJlc3RUcmlwcy5sZW5ndGhcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sdW1ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zLmxlbmd0aCA9IDA7XG4gICAgfVxyXG5cclxuICAgIGhpZGVDb2x1bW4oZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMucHVzaChmaWVsZCk7XG4gICAgfVxyXG5cclxuICAgIG9uVmlld1RyaXBzKCkge1xyXG4gICAgICAgIHRoaXMuaXNUcmlwcyA9ICF0aGlzLmlzVHJpcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCZXN0VHJpcHMoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcFNlcnZpY2UuZ2V0QmVzdFRyaXBzQVBJKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXN0VHJpcHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGdldHRpbmcgYmVzdCB0cmlwcyA6IFwiICsgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBiZXN0IHRyaXBzIDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT48YSBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tbGlua1xcXCIgKGNsaWNrKT1cXFwib25WaWV3VHJpcHMoKVxcXCI+e3t0aXRsZUJlc3RUcmlwc319PC9hPjwvaDE+XFxyXFxuXFxyXFxuPCEtLSBiZXN0IHRyaXBzIGdyaWQgLS0+XFxyXFxuPHNlY3Rpb24gKm5nSWY9XFxcImlzVHJpcHNcXFwiPlxcclxcbiAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIFtwcmltYXJ5XT1cXFwidHJ1ZVxcXCIgW2ljb25dPVxcXCIncmVmcmVzaCdcXFwiIChjbGljayk9XFxcInJlc3RvcmVDb2x1bW5zKClcXFwiPlJlc3RhdXJlcjwvYnV0dG9uPlxcclxcbiAgICA8a2VuZG8tZ3JpZCBbZGF0YV09XFxcImdyaWRWaWV3XFxcIiBbcGFnZVNpemVdPVxcXCJwYWdlU2l6ZVxcXCIgW3NraXBdPVxcXCJza2lwXFxcIiAocGFnZUNoYW5nZSk9XFxcInBhZ2VDaGFuZ2UoJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFtzZWxlY3RhYmxlXT1cXFwidHJ1ZVxcXCIgW2hlaWdodF09XFxcIjM1MFxcXCIgW3BhZ2VhYmxlXT1cXFwieyBidXR0b25Db3VudDogYnV0dG9uQ291bnQsIGluZm86IGluZm8sIFxcclxcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLCBwYWdlU2l6ZXM6IHBhZ2VTaXplcywgcHJldmlvdXNOZXh0OiBwcmV2aW91c05leHR9XFxcIiBbc2Nyb2xsYWJsZV09XFxcIidub25lJ1xcXCI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVxcXCJjb2x1bW5zXFxcIiBsZXQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwie3tjb2x1bW59fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImhpZGRlbkNvbHVtbnMuaW5kZXhPZihjb2x1bW4pID09PSAtMVxcXCIgdGl0bGU9XFxcIklEXFxcIiB3aWR0aD1cXFwiMjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9HcmlkSGVhZGVyVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3tkYXRhSXRlbS5maWVsZH19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImhpZGVDb2x1bW4oZGF0YUl0ZW0uZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiay1idXR0b24gay1wcmltYXJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwiZmxvYXQ6IHJpZ2h0O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgSGlkZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJuYW1lXFxcIiB0aXRsZT1cXFwiTm9tXFxcIiB3aWR0aD1cXFwiMzBcXFwiPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZ3JpZC1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJsZWF2aW5nXFxcIiB0aXRsZT1cXFwiRMOpcGFydFxcXCIgd2lkdGg9XFxcIjcwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1ncmlkLWNvbHVtbiBmaWVsZD1cXFwiY291bnRyeVxcXCIgdGl0bGU9XFxcIlBheXNcXFwiIHdpZHRoPVxcXCI2MFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tZ3JpZC1jb2x1bW4gZmllbGQ9XFxcImNvbnRpbmVudFxcXCIgdGl0bGU9XFxcIkNvbnRpbmVudFxcXCIgd2lkdGg9XFxcIjYwXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWdyaWQtY29sdW1uPlxcclxcbiAgICAgICAgPGtlbmRvLWdyaWQtY29sdW1uIGZpZWxkPVxcXCJyYXRpbmdcXFwiIHRpdGxlPVxcXCJSYXRpbmdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgW2hlYWRlclN0eWxlXT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogJyNjNWIzNTgnLCdjb2xvcic6ICcjZmZmJywnbGluZS1oZWlnaHQnOiAnMWVtJ31cXFwiPlxcclxcbiAgICAgICAgPC9rZW5kby1ncmlkLWNvbHVtbj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0dyaWREZXRhaWxUZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gKm5nSWY9XFxcImRhdGFJdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Ew6l0YWlsczo8L3N0cm9uZz4gSXRlbTwvcD5cXHJcXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPGtlbmRvLWdyaWQtbWVzc2FnZXMgZ3JvdXBQYW5lbEVtcHR5PVxcXCJEcmFnIGhlcmUgdG8gZ3JvdXAuXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWNvcmRzPVxcXCJUaGVyZSBubyBpdGVtcyB0byBkaXNwbGF5LlxcXCI+XFxyXFxuICAgICAgICA8L2tlbmRvLWdyaWQtbWVzc2FnZXM+XFxyXFxuPC9rZW5kby1ncmlkPlxcclxcbjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBiZXN0L3RyaXBiZXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcGJlc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcGJlc3QvdHJpcGJlc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4vdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHJpcC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdHJpcGRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwRGV0YWlsQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIGlzQm91Z2h0OiBib29sZWFuO1xyXG4gICAgcHVibGljIHVzZXJUcmlwczogVHJpcFtdO1xyXG4gICAgcHVibGljIGlzQm91Z2h0TWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBkZXRhaWw6IFRyaXBEZXRhaWxTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaXNCb3VnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJUcmlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNCb3VnaHRNZXNzYWdlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmlwQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RyaXBzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmlwQnlJZChpZDogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5nZXRUcmlwQnlJZEFQSShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBuZXcgVHJpcChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxlYXZpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250aW5lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpcCBkZXRhaWwgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyaXBzRm9yVXNlcigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldCBiYWNrIHRyaXAgd2l0aCBpZCA6IFwiICsgaWQgKyBlcnJvciApOyAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpcHNGb3JVc2VyKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VXNlclRyaXBBUEkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclRyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkFkZFRyaXAoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIGZvciB1c2VyIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFkZFRyaXAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnVzZXJUcmlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VyVHJpcHNbaV0uaWQgPT0gdGhpcy5zZWxlY3RlZFRyaXAuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdWdodE1lc3NhZ2UgPSBcIlZvdXMgYXZleiBkw6lqw6AgYWNoZXTDqSBjZSB0cmlwXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV5VHJpcCh0cmlwOiBUcmlwKTogU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpcGRldGFpbC5wb3N0VHJpcEFQSSh0cmlwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzIGNyZWF0aW5nIHRyaXAgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3VnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvdHJpcHMvcGVyc29cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdHJpcCA6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy90cmlwcycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyaXB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGxlYXZpbmc/OiBEYXRlO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGNvbnRpbmVudD86IHN0cmluZztcclxuICAgIHJhdGluZz86IG51bWJlcjtcclxuICAgIHN0b3BzPzogU3RvcFtdO1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlwIGltcGxlbWVudHMgSVRyaXAge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxlYXZpbmc/OiBEYXRlLFxyXG4gICAgICAgIHB1YmxpYyBjb3VudHJ5Pzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb250aW5lbnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJhdGluZz86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3RvcHM/OiBTdG9wW10sXHJcbiAgICAgICAgcHVibGljIHZpc2libGU/OiBib29sZWFuKSB7IH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkTDqXRhaWxzIFRyaXA8L2gyPlxcclxcblxcclxcbjx1bCAqbmdJZj1cXFwic2VsZWN0ZWRUcmlwXFxcIiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICA8bGk+PGkgY2xhc3M9XFxcImZhIGZhLWFkZHJlc3MtYm9va1xcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5pZH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ubmFtZX19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtaG91cmdsYXNzXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYSBmYS1ob3RlbFxcXCI+PC9pPjxzcGFuPnt7c2VsZWN0ZWRUcmlwPy5jb3VudHJ5fX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxpIGNsYXNzPVxcXCJmYS1ob21lXFxcIj48L2k+PHNwYW4+e3tzZWxlY3RlZFRyaXA/LmNvbnRpbmVudH19PC9zcGFuPjwvbGk+XFxyXFxuICAgIDxsaT48aSBjbGFzcz1cXFwiZmEgZmEtZmlyc3Qtb3JkZXJcXFwiPjwvaT48c3Bhbj57e3NlbGVjdGVkVHJpcD8ucmF0aW5nfX08L3NwYW4+PC9saT5cXHJcXG4gICAgPGxpPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImJ1eVRyaXAoc2VsZWN0ZWRUcmlwKVxcXCIgW2Rpc2FibGVkXT1cXFwiaXNCb3VnaHRcXFwiPkFqb3V0ZXIgw6AgbWVzIHRyaXBzPC9idXR0b24+PC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgIHt7aXNCb3VnaHRNZXNzYWdlfX1cXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImlzQm91Z2h0XFxcIiBbcm91dGVyTGlua109XFxcIlsnc3RvcCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGJ0bi1tZFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+IEFqb3V0ZXIgU3RvcHM8L2E+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oND4gICAgXFxyXFxuICAgIDwvbGk+ICAgXFxyXFxuPC91bD5cXHJcXG48dWwgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgIFZpc3VhbGlzZXIgU3RvcHNcXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJ2VkaXQnXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT48L2E+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oND5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcblxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cXHJcXG48Zm9vdGVyIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8YnV0dG9uIChjbGljayk9XFxcImdvQmFjaygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVxcXCI+UmV0b3VyPC9idXR0b24+XFxyXFxuPC9mb290ZXI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmlwZGV0YWlsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ1bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbntcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmlwRGV0YWlsU2VydmljZSB9IGZyb20gJy4uL3RyaXBkZXRhaWwvdHJpcGRldGFpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmlwLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90cmlwdXNlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90cmlwdXNlci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuICAgIHB1YmxpYyB1c2VyTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc1RyaXBzOiBUcmlwW107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIG9iamVjdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbnB1dERlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBjb25zdGFudCBmb3Igc3dpcGUgYWN0aW9uOiBsZWZ0IG9yIHJpZ2h0XHJcbiAgICBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgX3RyaXBEZXRhaWxTZXJ2aWNlOiBUcmlwRGV0YWlsU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudXNlck1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubWVzVHJpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWN0aW9uIHRyaWdnZXJlZCB3aGVuIHVzZXIgc3dpcGVzXHJcbiAgICBzd2lwZShjdXJyZW50SW5kZXg6IG51bWJlciwgYWN0aW9uID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcclxuICAgICAgICAvLyBvdXQgb2YgcmFuZ2VcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gdGhpcy5tZXNUcmlwcy5sZW5ndGggfHwgY3VycmVudEluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gc3dpcGUgcmlnaHQsIG5leHQgYXZhdGFyXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0gY3VycmVudEluZGV4ID09PSB0aGlzLm1lc1RyaXBzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGlzTGFzdCA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpcGUgbGVmdCwgcHJldmlvdXMgYXZhdGFyXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0ZpcnN0ID0gY3VycmVudEluZGV4ID09PSAwO1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpc0ZpcnN0ID8gdGhpcy5tZXNUcmlwcy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBhdmF0YXIgdmlzaWJpbGl0eVxyXG4gICAgICAgIHRoaXMubWVzVHJpcHMuZm9yRWFjaCgoeCwgaSkgPT4geC52aXNpYmxlID0gKGkgPT09IG5leHRJbmRleCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldFVzZXJUcmlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3RyaXBzJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFVzZXJUcmlwcygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmlwRGV0YWlsU2VydmljZS5nZXRVc2VyVHJpcEFQSSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc1RyaXBzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc1RyaXBzLmZvckVhY2goKHgsIGkpID0+IGkgPiAwID8geC52aXNpYmxlID0gZmFsc2UgOiB4LnZpc2libGUgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IGdldCB5b3VyIHRyaXBzIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3BzKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdHJpcHMnLCBpZCwgJ3N0b3AnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVHJpcCh0cmlwOiBUcmlwKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSB0cmlwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwidXNlcnRyaXBcIjtcclxuICAgICAgICB0aGlzLmlucHV0RGVsZXRlID0gdHJ1ZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgd2VhdGhlciBjbGllbnQgc2lkZSA6XHJcbiAgICAgICAgICAgIHRoaXMubWVzVHJpcHMuc3BsaWNlKHRoaXMubWVzVHJpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVHJpcCksIDEpO1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGxpc3QgYWNjb3JkaW5nbHlcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyVHJpcHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwdXNlci90cmlwdXNlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPnt7dXNlck1lc3NhZ2V9fTwvaDI+XFxyXFxuXFxyXFxuPGRlbGV0ZSBbaXNEZWxldGVdPVxcXCJpbnB1dERlbGV0ZVxcXCIgW3RyaXBUb0RlbGV0ZV09XFxcInNlbGVjdGVkVHJpcFxcXCIgW29iamVjdFRvRGVsZXRlXT1cXFwib2JqZWN0TmFtZVxcXCIgKGRlbGV0ZVN1Y2Nlc3MpPVxcXCJyZWZyZXNoUmVzdWx0cygkZXZlbnQpXFxcIj48L2RlbGV0ZT5cXHJcXG5cXHJcXG48aDE+TWVzIFRyaXBzPC9oMT5cXHJcXG48aDI+U3dpcGUgPGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvaT4gT3UgPGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXJpZ2h0XFxcIj48L2k+PC9oMj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IHRyaXAgb2YgbWVzVHJpcHM7IGxldCBpZHg9aW5kZXhcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTIgc3dpcGUtYm94XFxcIiBcXHJcXG4gICAgIChzd2lwZWxlZnQpPVxcXCJzd2lwZShpZHgsICRldmVudC50eXBlKVxcXCIgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZShpZHgsICRldmVudC50eXBlKVxcXCJcXHJcXG4gICAgIFtjbGFzcy52aXNpYmxlXT1cXFwidHJpcC52aXNpYmxlXFxcIiBbY2xhc3MuaGlkZGVuXT1cXFwiIXRyaXAudmlzaWJsZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VHJpcDwvaDQ+XFxyXFxuICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5Db250aWVudCB7e3RyaXA/LnN0b3BzLmxlbmd0aH19IHN0b3BzPC9oNT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImNhcmQtaW1nLXRvcCBmYSBmYS1waWN0dXJlLW8gZmEtMnhcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPiMgUsOpc2VydmF0aW9uIDoge3t0cmlwPy5pZH19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPk5vbSA6IHt7dHJpcD8ubmFtZX19PC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkRhdGUgZGUgZMOpcGFydCA6IHt7dHJpcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fTwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5QYXlzIDoge3t0cmlwPy5jb3VudHJ5fX08L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Q29udGluZW50IDoge3t0cmlwPy5jb250aW5lbnR9fTwvcD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyQnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWxpbmsgYnRuIGJ0bi1tZCBidG4tc2Vjb25kYXJ5IGFjdGl2ZSBjb2wtbWQtNiB1c2VyQWN0aW9uc1xcXCIgKGNsaWNrKT1cXFwiZGVsZXRlVHJpcCh0cmlwKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIj48L2k+IFN1cHByaW1lcjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtbGluayBidG4gYnRuLW1kIGJ0bi1pbmZvIGFjdGl2ZSBjb2wtbWQtNiB1c2VyQWN0aW9uc1xcXCIgKGNsaWNrKT1cXFwiYWRkU3RvcHModHJpcC5pZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L2k+IEFqb3V0ZXIgU3RvcHM8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlxcclxcbiAgICAgICAgPHVsICpuZ0Zvcj1cXFwibGV0IHN0b3Agb2YgdHJpcD8uc3RvcHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaT5TdG9wICMge3tpICsgMX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Tm9tIDoge3tzdG9wPy5uYW1lfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGQnYXJyaXbDqWUgOiB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5EYXRlIGRlIGTDqXBhcnQgOiB7e3N0b3A/LmxlYXZpbmcgfCBmbVRyaXBEYXRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5WaWxsZSA6IHt7c3RvcD8uY2l0eX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+Q3Vpc2luZSA6IHt7c3RvcD8uY3Vpc2luZX19PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+R3VpZGUgOiB7e3N0b3A/Lmd1aWRlfX08L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT5RdW90ZSA6IHt7c3RvcD8ucXVvdGV9fTwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG48YSBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBiYWNrQnV0dG9uXFxcIiAoY2xpY2spPVxcXCJnb0JhY2soKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+IFJldG91cjwvYT5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RyaXB1c2VyL3RyaXB1c2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJpcHVzZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxoMixoMyxoNHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggMXB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbmxpe1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZS1ib3ggPiBkaXY6Zmlyc3Qtb2YtdHlwZSwgZGl2IGRpdiA+IHVse1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGUtYm94ID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgIHBhZGRpbmc6IDEuNSU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkgNDIlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCg0MiUsIHJnYmEoMjQ2LDI0NiwyNDYsMC45NSkpKSkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuOTUpKTtcXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzQxODljNycsIEdyYWRpZW50VHlwZT0xICk7XFxyXFxufVxcclxcblxcclxcbmRpdiBkaXYgPiB1bHtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoNDclLCByZ2JhKDI0NiwyNDYsMjQ2LDAuODkpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpKSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC44OSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDAuNzcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjg5KSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMC43NykgMTAwJSk7XFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlZGVkZWQnLCBHcmFkaWVudFR5cGU9MSApO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeTpob3ZlcntcXHJcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlcntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckJ1dHRvbnN7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrQnV0dG9ue1xcclxcbiAgICBtYXJnaW46IDIlIDAgMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJBY3Rpb25ze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckFjdGlvbnM6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JheSBpbnNldDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyYXkgaW5zZXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkpLCBjb2xvci1zdG9wKDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwxKSksIGNvbG9yLXN0b3AoNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpKSwgY29sb3Itc3RvcCg2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkpLCBjb2xvci1zdG9wKDg1JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjAlLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDI4JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk5KSA1MyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgNjclLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDg1JSwgcmdiYSgyNTQsMjU0LDI1NCwwLjk3KSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyMCUsIHJnYmEoMjI2LDIyNiwyMjYsMSkgMjglLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTkpIDUzJSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA2NyUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OCkgODUlLCByZ2JhKDI1NCwyNTQsMjU0LDAuOTcpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyNiwyMjYsMjI2LDEpIDIwJSwgcmdiYSgyMjYsMjI2LDIyNiwxKSAyOCUsIHJnYmEoMjI2LDIyNiwyMjYsMC45OSkgNTMlLCByZ2JhKDIyNiwyMjYsMjI2LDAuOTgpIDY3JSwgcmdiYSgyMjYsMjI2LDIyNiwwLjk4KSA4NSUsIHJnYmEoMjU0LDI1NCwyNTQsMC45NykgMTAwJSk7XFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZTJlMmUyJywgZW5kQ29sb3JzdHI9JyNmZWZlZmUnLCBHcmFkaWVudFR5cGU9MCApO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdHJpcHVzZXIvdHJpcHVzZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhdGluZy5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xyXG4gICAgQE91dHB1dCgpIHJhdGluZ0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgcHVibGljIHJhdGVzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyBkaWZmUmF0ZXM6IG51bWJlcltdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yYXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlmZlJhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5kaWZmUmF0ZXMucHVzaCgxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSYXRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYXRpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmF0aW5nICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJhdGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMucmF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYXRlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkaWZmU3RhcnMgPSB0aGlzLmRpZmZSYXRlcy5sZW5ndGggLSB0aGlzLnJhdGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5kaWZmUmF0ZXMubGVuZ3RoID0gZGlmZlN0YXJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICAgICAgdGhpcy5yYXRpbmdDbGljay5lbWl0KHtcclxuICAgICAgICAgICAgcmF0aW5nOiByYXRpbmdcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAoY2xpY2spPVxcXCJvbkNsaWNrKHJhdGVzLmxlbmd0aClcXFwiPlxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwicmF0ZXMgJiYgcmF0ZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCByIG9mIHJhdGVzXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gKm5nSWY9XFxcImRpZmZSYXRlcyAmJiBkaWZmUmF0ZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCByIG9mIGRpZmZSYXRlc1xcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eSBzdGFyLWVtcHR5XFxcIj48L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yYXRpbmcuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzcGFuIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogUGxhY2UgbGVzIMOpdG9pbGVzIMOgIGdhdWNoZSBkdSBjb250YWluZXIgKi9cXHJcXG4uc3RhciwgLnN0YXItZW1wdHl7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcCwgSVN0b3AgfSBmcm9tICcuL3N0b3AnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4vc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3AnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RvcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdG9wLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9wQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgaXNDcmVhdGVGb3JtOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRyaXBJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzU2hvd0Zvcm06IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdG9wOiBTdG9wO1xyXG4gICAgcHVibGljIGRlY2ltYWxzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWluOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWF4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYXV0b0NvcnJlY3Q6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY3Vpc2luZXM6IEFycmF5PHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xyXG4gICAgcHVibGljIHNvdXJjZUN1aXNpbmU6IEFycmF5PHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xyXG4gICAgcHVibGljIGN1aXNpbmU6IHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH07XHJcbiAgICBwdWJsaWMgZ3VpZGU6IHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH07XHJcblxyXG4gICAgcHVibGljIGd1aWRlczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZGVjaW1hbHMgPSAwO1xyXG4gICAgICAgIHRoaXMubWluID0gMTtcclxuICAgICAgICB0aGlzLm1heCA9IDEwO1xyXG4gICAgICAgIHRoaXMuYXV0b0NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gbmV3IFN0b3AoMSwgXCJQbGFnZVwiLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCBcIk1vbnRyw6lhbFwiLCB0aGlzLmN1aXNpbmUsIHRoaXMuZ3VpZGUsIDAsIDAsIDAsIDgsIGZhbHNlKTtcclxuICAgICAgICAvLyBjdWlzaW5lIGRyb3Bkb3duIFxyXG4gICAgICAgIHRoaXMuY3Vpc2luZSA9IHsgdGV4dDogXCJJdGFsaWVubmVcIiwgdmFsdWU6IDIgfTsgICAgICBcclxuICAgICAgICB0aGlzLmN1aXNpbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VDdWlzaW5lID0gW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VDdWlzaW5lLnB1c2goeyB0ZXh0OiBcIkphcG9uYWlzZVwiLCB2YWx1ZTogMSB9LCB7IHRleHQ6IFwiSXRhbGllbm5lXCIsIHZhbHVlOiAyIH0sIHsgdGV4dDogXCJTdcOpZG9pc2VcIiwgdmFsdWU6IDMgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIlBvcnR1Z3VhaXNlXCIsIHZhbHVlOiA0IH0sIHsgdGV4dDogXCJBZnJpY2FpbmVcIiwgdmFsdWU6IDUgfSwgeyB0ZXh0OiBcIkFsbGVtYW5kZVwiLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiQnJpdGFubmlxdWVcIiwgdmFsdWU6IDcgfSwgeyB0ZXh0OiBcIkFtw6lyaWNhaW5lXCIsIHZhbHVlOiA4IH0sIHsgdGV4dDogXCJTdcOpZG9pc2VcIiwgdmFsdWU6IDkgfSk7XHJcblxyXG4gICAgICAgIC8vIGd1aWRlIGNvbWJvYm94XHJcbiAgICAgICAgdGhpcy5ndWlkZSA9IHsgdGV4dDogXCJHdWlkZSBKdW5pb3JcIiwgdmFsdWU6IDIgfTtcclxuICAgICAgICB0aGlzLmd1aWRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVzLnB1c2goeyB0ZXh0OiBcIkd1aWRlIE1pY2hlbGluXCIsIHZhbHVlOiAxIH0sIHsgdGV4dDogXCJHdWlkZSBKdW5pb3JcIiwgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIkd1aWRlIFNlbmlvclwiLCB2YWx1ZTogMyB9LCB7IHRleHQ6IFwiR3VpZGUgUHJpdsOpXCIsIHZhbHVlOiA0IH0pO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXJpbmcgY3Vpc2luZXNcclxuICAgICAgICB0aGlzLmN1aXNpbmVzID0gdGhpcy5zb3VyY2VDdWlzaW5lLnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB3ZXJlIG5vdCBpbiAvc3RvcCB5ZXQsIGpzdXQgZGlzcGxheSBhIG1lc3NhZ2UgZm9yIHRoZSB1c2VyXHJcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbJ2lkJ10gIT0gbnVsbCB8fCBwYXJhbXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0Zvcm0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJDcsOpZXIgdW4gbm91dmVhdSBzdG9wIHBvdXIgY2UgdHJpcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHZXQgcGFyZW50IEFjdGl2YXRlZFJvdXRlIG9mIHRoaXMgcm91dGUuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJlbnQucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaXBJZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZCBkdSBwYXJlbnQgcG91ciBzYXV2ZXIgc3RvcCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyaXBJZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZpbHRlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY3Vpc2luZXMgPSB0aGlzLnNvdXJjZUN1aXNpbmUuZmlsdGVyKChzKSA9PiBzLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KGNyZWF0ZUZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wID0gPElTdG9wPmNyZWF0ZUZvcm0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlRm9ybS52YWxpZCk7XHJcbiAgICAgICAgdGhpcy5pc0NyZWF0ZUZvcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvc3RTdG9wU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTdG9wU2VydmljZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wU2VydmljZS5wb3N0U3RvcEJ5SWRBUEkodGhpcy50cmlwSWQsIHRoaXMuc2VsZWN0ZWRTdG9wKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgc2F2ZWQgc3RvcCBhdCB0cmlwIGlkIDogXCIgKyB0aGlzLnRyaXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuYXJyaXZhbCA9IGRhdGEuYXJyaXZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5sZWF2aW5nID0gZGF0YS5sZWF2aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdG9wLmNpdHkgPSBkYXRhLmNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AuY3Vpc2luZSA9IGRhdGEuY3Vpc2luZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcC5ndWlkZSA9IGRhdGEuZ3VpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3AucXVvdGUgPSBkYXRhLnF1b3RlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhbnQgc2F2ZSBzdG9wIGF0IHRyaXAgaWQgOiBcIiArIHRoaXMudHJpcElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVGb3JtID0gIXRoaXMuaXNDcmVhdGVGb3JtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJpcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGRlc3Ryb3lcIik7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJU3RvcCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXJyaXZhbDogRGF0ZTtcclxuICAgIGxlYXZpbmc6IERhdGU7XHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgICBjdWlzaW5lOiBhbnk7XHJcbiAgICBndWlkZTogYW55O1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgb3JkZXI6IG51bWJlcjtcclxuICAgIHF1b3RlOiBudW1iZXI7XHJcbiAgICBzaG93UG9wVXA6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9wIGltcGxlbWVudHMgSVN0b3Age1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGFycml2YWw6IERhdGUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgbGVhdmluZzogRGF0ZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjaXR5OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY3Vpc2luZTogYW55LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGd1aWRlOiBhbnksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHF1b3RlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc2hvd1BvcFVwOiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcFVwID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXHJcXG4gICAgPGg0Pnt7bWVzc2FnZX19PC9oND5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiICpuZ0lmPVxcXCJpc1Nob3dGb3JtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxoND48c3Bhbj48YSBbcm91dGVyTGlua109XFxcIicuLi9lZGl0J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLWxpbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1saWdodGJ1bGItb1xcXCI+PC9pPiBTdWdnZXN0aW9uczwvYT48L3NwYW4+PC9oND5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFN0b3AoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPGZvcm0gI2Zvcm1DcmVhdGVTdG9wPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcm1DcmVhdGVTdG9wKVxcXCIgKm5nSWY9XFxcImlzQ3JlYXRlRm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCI+Tm9tPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgaWQ9XFxcIm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNpdHlcXFwiPlZpbGxlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgaWQ9XFxcImNpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AuY2l0eVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYXJyaXZhbFxcXCI+RGF0ZSBBcnJpdsOpZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGtlbmRvLWNhbGVuZGFyIG5hbWU9XFxcImFycml2YWxcXFwiIGlkPVxcXCJhcnJpdmFsXFxcIiBbZm9jdXNlZERhdGVdPVxcXCJzZWxlY3RlZFN0b3AuYXJyaXZhbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5hcnJpdmFsXFxcIiByZXF1aXJlZD48L2tlbmRvLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJsZWF2aW5nXFxcIj5EYXRlIETDqXBhcnQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxrZW5kby1jYWxlbmRhciBuYW1lPVxcXCJsZWF2aW5nXFxcIiBpZD1cXFwibGVhdmluZ1xcXCIgW2ZvY3VzZWREYXRlXT1cXFwic2VsZWN0ZWRTdG9wLmxlYXZpbmdcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFN0b3AubGVhdmluZ1xcXCIgcmVxdWlyZWQ+PC9rZW5kby1jYWxlbmRhcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImN1aXNpbmVcXFwiPkN1aXNpbmU8L2xhYmVsPiAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8a2VuZG8tZHJvcGRvd25saXN0IG5hbWU9XFxcImN1aXNpbmVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XFxcImN1aXNpbmVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRGaWVsZF09XFxcIid0ZXh0J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZUZpZWxkXT1cXFwiJ3ZhbHVlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJjdWlzaW5lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbHRlcmFibGVdPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlckNoYW5nZSk9XFxcImhhbmRsZUZpbHRlcigkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVtcGxhdGVcXFwiPnt7IGRhdGFJdGVtLnZhbHVlIH19PC9zcGFuPiB7eyBkYXRhSXRlbS50ZXh0IH19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEhlYWRlclRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PkN1aXNpbmVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Rm9vdGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3tjdWlzaW5lcy5sZW5ndGh9fSB2YXJpw6l0w6lzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0Tm9EYXRhVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+PHNwYW4gY2xhc3M9XFxcImstaWNvbiBrLWktd2FybmluZ1xcXCI+PC9zcGFuPjxiciAvPjxiciAvPkF1Y3VuZXMgQ3Vpc2luZXM8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ3VpZGVcXFwiPkd1aWRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tY29tYm9ib3ggbmFtZT1cXFwiZ3VpZGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWdnZXN0XT1cXFwidHJ1ZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XFxcIidlLmcuIEd1aWRlIFNlbmlvcidcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cXFwiZ3VpZGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGV4dEZpZWxkXT1cXFwiJ3RleHQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVGaWVsZF09XFxcIid2YWx1ZSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJndWlkZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUga2VuZG9Db21ib0JveEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVtcGxhdGVcXFwiPnt7IGRhdGFJdGVtLnZhbHVlIH19PC9zcGFuPiB7eyBkYXRhSXRlbS50ZXh0IH19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0NvbWJvQm94SGVhZGVyVGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+R3VpZGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGtlbmRvQ29tYm9Cb3hGb290ZXJUZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND57e2d1aWRlcy5sZW5ndGh9fSBkaXNwb25pYmxlczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdE5vRGF0YVRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PjxzcGFuIGNsYXNzPVxcXCJrLWljb24gay1pLXdhcm5pbmdcXFwiPjwvc3Bhbj48YnIgLz48YnIgLz5BdWN1bnMgZ3VpZGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L2tlbmRvLWNvbWJvYm94PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicXVvdGVcXFwiPlF1b3RlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8a2VuZG8tbnVtZXJpY3RleHRib3ggY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgW3Jlc3RyaWN0RGVjaW1hbHNdPVxcXCJ0cnVlXFxcIiBbZGVjaW1hbHNdPVxcXCJkZWNpbWFsc1xcXCIgW21pbl09XFxcIm1pblxcXCJcXHJcXG4gICAgICAgICAgICBbbWF4XT1cXFwibWF4XFxcIiBbc3Bpbm5lcnNdPVxcXCJ0cnVlXFxcIiBbZm9ybWF0XT1cXFwiJ24wJ1xcXCIgW3N0ZXBdPVxcXCIxXFxcIiBbYXV0b0NvcnJlY3RdPVxcXCJhdXRvQ29ycmVjdFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkU3RvcC5xdW90ZVxcXCIgbmFtZT1cXFwicXVvdGVcXFwiIGlkPVxcXCJxdW90ZVxcXCIgcmVxdWlyZWQ+PC9rZW5kby1udW1lcmljdGV4dGJveD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW1kIGJ0bi1zdWNjZXNzIGFjdGl2ZVxcXCI+QWpvdXRlcjwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wL3N0b3AuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdG9wLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3Avc3RvcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGVtcGxhdGV7IFxcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcXHJcXG4gICAgY29sb3I6ICNmZmY7IFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcclxcbiAgICB3aWR0aDogMThweDsgXFxyXFxuICAgIGhlaWdodDogMThweDsgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSA+IGg0IHsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcclxcbiAgICBwYWRkaW5nOiAwIDhweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcC9zdG9wLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJpcERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi90cmlwZGV0YWlsL3RyaXBkZXRhaWwuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9wU2VydmljZSB9IGZyb20gJy4uL3N0b3Avc3RvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBJVHJpcCwgVHJpcCB9IGZyb20gJy4uL3RyaXAvdHJpcCc7XHJcbmltcG9ydCB7IElTdG9wLCBTdG9wIH0gZnJvbSAnLi4vc3RvcC9zdG9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9wLWVkaXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RvcGVkaXQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRTdG9wQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUcmlwOiBUcmlwO1xyXG4gICAgcHVibGljIGlucHV0RGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlucHV0SWREZWxldGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2hvd1BvcFVwOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzQWRtaW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdG9nZ2xlVGV4dDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIF90cmlwZGV0YWlsOiBUcmlwRGV0YWlsU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgX3N0b3BTZXJ2aWNlOiBTdG9wU2VydmljZSwgcHVibGljIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXREZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUZXh0ID0gXCJTaG93XCI7XHJcbiAgICAgICAgdGhpcy5pc0FkbWluID0gdGhpcy5fbG9naW5TZXJ2aWNlLmVzdEFkbWluO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyZW50LnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWydpZCddICE9IG51bGwgJiYgcGFyYW1zWydpZCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9wc0J5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90cmlwcy9cIiArIGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFBPUCBVUCBOT1QgV09SS0lOPyEgdGVzdCBpbiBhbm90aGVyIHByb2plY3RcclxuICAgIG9uVG9nZ2xlUG9wVXAoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZFRyaXAuc3RvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUcmlwLnN0b3BzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVHJpcC5zdG9wc1tpXS5zaG93UG9wVXAgPSAhdGhpcy5zZWxlY3RlZFRyaXAuc3RvcHNbaV0uc2hvd1BvcFVwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVUZXh0ID0gdGhpcy5zaG93UG9wVXAgPyBcIkhpZNC1XCIgOiBcIlNob3dcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9wc0J5SWQoaWQ6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXBkZXRhaWwuZ2V0VHJpcEJ5SWRBUEkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRyaXAgPSBuZXcgVHJpcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlYXZpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGluZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnN0b3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXMgZ2V0IGJhY2sgdHJpcCB3aXRoIGlkIDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpcCBkZXRhaWwgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXQgYmFjayB0cmlwIHdpdGggaWQgOiBcIiArIGlkICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlbGV0ZSBzdG9wIGJ5IGl0cyBpZFxyXG4gICAgZGVsZXRlU3RvcChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBnbyBkZWxldGUgOiBcIiArIGlkKTtcclxuICAgICAgICB0aGlzLmlucHV0SWREZWxldGUgPSBpZDtcclxuICAgICAgICB0aGlzLm9iamVjdE5hbWUgPSBcInN0b3BBZG1pblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIHJlc3VsdHMgYWZ0ZXIgdGhlIGNoaWxkIGNvbXBvbmVudCBoYXMgZW1pdHRlZCB0aGUgZGVsZXRpb24gd2FzIHN1Y2Nlc3NmdWxsLlxyXG4gICAgcmVmcmVzaFJlc3VsdHMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCRldmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRpc3BsYXkgbGlzdCBhZnRlciBkZWxldGluZyBhIHN0b3AuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RvcHNCeUlkKHRoaXMuc2VsZWN0ZWRUcmlwLmlkKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRoaXMub2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pbnB1dERlbGV0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC0xMiBkZWxldGVCbG9ja1xcXCI+XFxyXFxuICAgIDxkZWxldGUgW2lzRGVsZXRlXT1cXFwiaW5wdXREZWxldGVcXFwiIFt3ZWF0aGVyVG9EZWxldGVJZF09XFxcImlucHV0SWREZWxldGVcXFwiIFtvYmplY3RUb0RlbGV0ZV09XFxcIm9iamVjdE5hbWVcXFwiIChkZWxldGVTdWNjZXNzKT1cXFwicmVmcmVzaFJlc3VsdHMoJGV2ZW50KVxcXCI+PC9kZWxldGU+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHVsIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8bGk+PGgzPlN0b3BzPC9oMz48L2xpPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgc3RvcCBvZiBzZWxlY3RlZFRyaXA/LnN0b3BzXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IHJvd0Jsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cXFwiZmEgZmEtc3RvcFxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uICNhbmNob3IgY2xhc3M9XFxcImJ0biBidG4tbGluayBidG4tbWRcXFwiIChjbGljayk9XFxcIm9uVG9nZ2xlUG9wVXAoc3RvcC5pZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICB7e3RvZ2dsZVRleHR9fSBEw6l0YWlscyB7e3N0b3A/Lm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvcFVwV3JhcHBlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxrZW5kby1wb3B1cCBjbGFzcz1cXFwicG9wVXBDb250ZW50XFxcIiBbYW5jaG9yXT1cXFwiYW5jaG9yXFxcIiAoYW5jaG9yVmlld3BvcnRMZWF2ZSk9XFxcInNob3cgPSBmYWxzZVxcXCIgKm5nSWY9XFxcInN0b3A/LnNob3dQb3BVcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3N0b3A/LmFycml2YWwgfCBmbVRyaXBEYXRlfX0sIHt7c3RvcD8ubGVhdmluZyB8IGZtVHJpcERhdGV9fSwgIMOAIHt7c3RvcD8uY2l0eX19LCBDdWlzaW5lIHt7c3RvcD8uY3Vpc2luZX19LFxcclxcbiAgICAgICAgICAgICAgICAgICAge3tzdG9wPy5ndWlkZX19LCBRdW90w6kge3tzdG9wPy5xdW90ZX19XFxyXFxuICAgICAgICAgICAgICAgIDwva2VuZG8tcG9wdXA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFpc0FkbWluXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1tZCBidG4tZGFuZ2VyIGFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlU3RvcChzdG9wLmlkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIj48L2k+IFN1cHByaW1lcjwvYnV0dG9uPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnB1dCBwaWN0dXJlIGhlcmU8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiBhbGVydCBhbGVydC1kYW5nZXIgbm9TdG9wc1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiICpuZ0lmPVxcXCIhc2VsZWN0ZWRUcmlwPy5zdG9wcy5sZW5ndGhcXFwiPlxcclxcbiAgICA8aDQ+PGkgY2xhc3M9XFxcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXFxcIj48L2k+IEF1Y3VucyBTdG9wczwvaDQ+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdG9wZWRpdC9zdG9wZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0b3BlZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0b3BlZGl0L3N0b3BlZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInNwYW57XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkgPiBkaXY6bGFzdC1vZi10eXBle1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCbG9ja3tcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9TdG9wc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbWFyZ2luOiAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgY29sb3I6ICM3ODc4Nzg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMSwgNSwgNSwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcFdyYXBwZXJ7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd0Jsb2Nre1xcclxcbiAgICBib3gtc2hhZG93OjJweCAycHggMnB4IGdyYXksLTFweCAtMXB4IDJweCB3aGl0ZTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RvcGVkaXQvc3RvcGVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZm1Ib3VyTG9jYWwnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRIb3VyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gZGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLDUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3dlYXRoZXJmb3JtL3dlYXRoZXJmb3JtLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmbVRyaXBEYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpcERhdGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnZW4tY2EnKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50KGQpLmZvcm1hdCgnTEwnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90cmlwL3RyaXAucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRhdGVpbnB1dHMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzY2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc5MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3OTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sYXlvdXQvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzU0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItY2hhcnRzL2Rpc3QvbnBtL21haW4uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDc4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItYnV0dG9ucy9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg3NjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMvZGlzdC9ucG0vbWFpbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1wb3B1cC9kaXN0L25wbS9tYWluLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDIwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGFtbWVyanMvaGFtbWVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzZmNGNlZjY5ZDMzOGY4NTEyNGFcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMDI1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXBhZ2luYXRpb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jNmY0Y2VmNjlkMzM4Zjg1MTI0YVxuLy8gbW9kdWxlIGlkID0gMjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDgxNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL25wbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2M2ZjRjZWY2OWQzMzhmODUxMjRhXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==