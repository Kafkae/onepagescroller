webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	var _gsap = __webpack_require__(10);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	var tl = new _gsap.TimelineMax();
	
	tl.staggerFromTo('.navigation', 0.7, { x: -200, opacity: 0 }).fromTo('.logo', 0.5, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.burger', 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1 }).fromTo('.header__media', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1 });

/***/ })
])
//# sourceMappingURL=0.e4e3d53078631c65e732.hot-update.js.map