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
	
	var intro = (0, _jquery2.default)('.header__intro');
	var media = (0, _jquery2.default)('.header__media');
	var reads = (0, _jquery2.default)('.reads__content .reads__wrap');
	var block1 = (0, _jquery2.default)('.present-gallery__part_js-1');
	var block2 = (0, _jquery2.default)('.present-gallery__part_js-2');
	var block3 = (0, _jquery2.default)('.present-gallery__part_js-3');
	var block4 = (0, _jquery2.default)('.present-gallery__part_js-4');
	var feedback = (0, _jquery2.default)('.feedback__content');
	
	var contentReveal = function contentReveal() {
		var tls = new _gsap.TimelineMax({ paused: true });
	
		tls.fromTo(intro, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true }).fromTo(media, 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true }).staggerFromTo(reads, 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut, immediateRender: true }).from(feedback, 1, { scale: 0, ease: Bounce.easeOut, immediateRender: true });
	};
	
	var tl = new _gsap.TimelineMax();
	
	tl.fromTo('.logo', 2.3, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.burger', 2.3, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).staggerFromTo('.navigation__panel .navigation__elem', 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, .5);
	
	// var intro = $('.header__intro');
	// var media = $('.header__media');
	// TweenMax.fromTo('.header__intro', 1, {x:-200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut, immediateRender: true, paused:true})
	// TweenMax.fromTo('.header__media', 1, {x:200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut, immediateRender: true, paused:true})
	//   break;
	// case 2: 
	//    var reads = $('.reads__content .reads__wrap');
	//    TweenMax.staggerFromTo('.reads__content .reads__wrap', 3, {opacity:0,rotation: 500}, {opacity: 1,rotation: 0, scale: 1,  ease: Bounce.easeOut, immediateRender: true, paused:true});
	
	//    var block1 = $('.present-gallery__part_js-1');
	//    var block2 = $('.present-gallery__part_js-2');
	//    var block3 = $('.present-gallery__part_js-3');
	//    var block4 = $('.present-gallery__part_js-4');
	// 	TweenMax.from(block1, 1, { x:300, y:130,scale: 0.5, immediateRender: true, ease: Bounce.easeOut, paused:true});
	// 	TweenMax.from(block3, 1, {x:300, y:-130, scale: 0.5, immediateRender: true, ease: Bounce.easeOut, paused:true});
	// 	TweenMax.from(block2, 1, {y: 130, x:-250,scale: 0.5, immediateRender: true, ease: Bounce.easeOut, paused:true});
	// 	TweenMax.from(block4, 1, {y: -130, x:-250, scale: 0.5,immediateRender: true, ease: Bounce.easeOut, paused:true})
	// 	var feedback = $('.feedback__content');
	// 	TweenMax.from(feedback, 1, { scale: 0, ease: Bounce.easeOut, immediateRender: true, paused:true});

/***/ })
])
//# sourceMappingURL=0.ddd0f52c6014d034d5bd.hot-update.js.map