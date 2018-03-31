webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	var _gsap = __webpack_require__(6);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	var tl = new _gsap.TimelineMax();
	
	tl.fromTo('.logo', 0.5, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.burger', 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut }, '-=1').fromTo('.header__media', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut }, '-=1').staggerFromTo('.navigation__panel .navigation__elem', 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }).staggerFromTo('.reads__content .reads__wrap', 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut });
	
	var target = (0, _jquery2.default)('.reads');
	var targetPos = target.offset().top;
	var winHeight = (0, _jquery2.default)(window).height();
	var scrollToElem = targetPos - winHeight;
	(0, _jquery2.default)(window).scroll(function () {
		var winScrollTop = (0, _jquery2.default)(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			tl.staggerFromTo('.reads__content .reads__wrap', 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut });
		}
	});

/***/ })
])
//# sourceMappingURL=0.24f8618be8af3b4ad6f5.hot-update.js.map