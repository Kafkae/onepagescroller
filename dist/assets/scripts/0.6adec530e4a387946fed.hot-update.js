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
	
	var _ScrollMagic = __webpack_require__(9);
	
	var _ScrollMagic2 = _interopRequireDefault(_ScrollMagic);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	(0, _jquery2.default)(function () {
	
		// Init ScrollMagic Controller
		var scrollMagicController = new _ScrollMagic2.default();
	
		// Animation will be ignored and replaced by scene value in this example
		var tween = TweenMax.staggerFromTo('.animation', 0.5, {
			scale: 1
		}, {
			backgroundColor: 'rgb(255, 39, 46)',
			scale: 5,
			rotation: 360
		}, 0.4);
	
		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: '#reads',
			duration: 300 /* How many pixels to scroll / animate */
		}).setTween(tween).addTo(scrollMagicController);
	
		// Add debug indicators fixed on right side
		scene.addIndicators();
	});
	
	// let tl = new TimelineMax();
	// let scrl = new ScrollMagic();
	
	// tl	
	// 	.fromTo('.logo', 0.5, {y:-200,opacity: 0}, {y: 0,opacity: 1})
	// 	.fromTo('.burger', 1, {y:-200,opacity: 0}, {y: 0,opacity: 1})
	// 	.fromTo('.header__intro', 1, {x:-200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut,}, '-=1')
	// 	.fromTo('.header__media', 1, {x:200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut,}, '-=1')
	// 	.staggerFromTo('.navigation__panel .navigation__elem', 0.8, {opacity:0,x: 30}, {opacity: 1,x: 0}, .5);
	
	
	// 	let tweenReads = tl.staggerFromTo('.reads__content .reads__wrap', 3, {opacity:0,rotation: 500}, {opacity: 1,rotation: 0, scale: 1,  ease: Bounce.easeOut});
	
	// let scence = new ScrollMagic({
	// 	triggerElement: '#reads',
	// 	duration: 300
	// })
	// .setTween(tweenReads)
	// .addTo(scrl);
	
	//   // Add debug indicators fixed on right side
	// scene.addIndicators();

/***/ })
])
//# sourceMappingURL=0.6adec530e4a387946fed.hot-update.js.map