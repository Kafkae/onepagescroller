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
	          // nothing
	          break;
	        case 2:
	          var text = jQuery('.text');
	          TweenMax.to(text, 2, { y: 200, opacity: 1, autoAlpha: 1, immediateRender: true });
	          break;
	        case 3:
	          var textTwo = jQuery('.text-two');
	          TweenMax.from(textTwo, 2, { y: -200, opacity: 0, autoAlpha: 0, immediateRender: true });
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
//# sourceMappingURL=0.45d573e5c02e84e5c4f1.hot-update.js.map