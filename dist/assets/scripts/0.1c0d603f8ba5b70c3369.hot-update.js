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
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	var tl = new _gsap.TimelineMax();
	
	tl.fromTo('.logo', 0.5, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.burger', 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).staggerFromTo('.navigation__panel .navigation__elem', 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, .5).staggerFromTo('.reads__content .reads__wrap', 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut });
	
	var intro = (0, _jquery2.default)('.header__intro');
	var media = (0, _jquery2.default)('.header__media');
	var reads = (0, _jquery2.default)('.reads__content .reads__wrap');
	var block1 = (0, _jquery2.default)('.present-gallery__part_js-1');
	var block2 = (0, _jquery2.default)('.present-gallery__part_js-2');
	var block3 = (0, _jquery2.default)('.present-gallery__part_js-3');
	var block4 = (0, _jquery2.default)('.present-gallery__part_js-4');
	var feedback = (0, _jquery2.default)('.feedback');

/***/ })
])
//# sourceMappingURL=0.1c0d603f8ba5b70c3369.hot-update.js.map