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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
				(0, _svg4everybody2.default)();
	});
	
	(0, _jquery2.default)(document).ready(function () {
				(0, _jquery2.default)('#fullpage').fullpage({
							afterLoad: function afterLoad(anchorLink, index) {
										switch (index) {
													case 1:
																var intro = (0, _jquery2.default)('.header__intro');
																var media = (0, _jquery2.default)('.header__media');
																TweenMax.fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true });
																TweenMax.fromTo('.header__media', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true });
																break;
													case 2:
																var reads = (0, _jquery2.default)('.reads__content .reads__wrap');
																TweenMax.staggerFromTo('.reads__content .reads__wrap', 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut, immediateRender: true });
																break;
													case 3:
																var block1 = (0, _jquery2.default)('.present-gallery__part_js-1');
																var block2 = (0, _jquery2.default)('.present-gallery__part_js-2');
																var block3 = (0, _jquery2.default)('.present-gallery__part_js-3');
																var block4 = (0, _jquery2.default)('.present-gallery__part_js-4');
																TweenMax.from(block1, 2, { x: 250, immediateRender: true });
																//   TweenMax.from(block4, 2, {y: -120, x:-250,  scale: 0.2,  immediateRender: true});
																//   TweenMax.from(block2, 2, {y: -120, x:-250,  scale: 0.2,  immediateRender: true});
																//   TweenMax.from(block3, 2, {y: 120, x:250,  scale: 0.2,  immediateRender: true})
																break;
	
										}
							}
				});
	});
	
	// let tl = new TimelineMax
	
	// tl	
	// 	.fromTo('.logo', 0.5, {y:-200,opacity: 0}, {y: 0,opacity: 1})
	// 	.fromTo('.burger', 1, {y:-200,opacity: 0}, {y: 0,opacity: 1})
	// 	.fromTo('.header__intro', 1, {x:-200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut,}, '-=1')
	// 	.fromTo('.header__media', 1, {x:200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut,}, '-=1')
	// 	.staggerFromTo('.navigation__panel .navigation__elem', 0.8, {opacity:0,x: 30}, {opacity: 1,x: 0}, .5)
	// 	.staggerFromTo('.reads__content .reads__wrap', 3, {opacity:0,rotation: 500}, {opacity: 1,rotation: 0, scale: 1,  ease: Bounce.easeOut});

/***/ })
])
//# sourceMappingURL=0.3b048a0e59de18f157f2.hot-update.js.map