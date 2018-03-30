webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gsap = __webpack_require__(6);
	
	var tl = new _gsap.TimelineMax(); // $(document).ready(function() {
	// 	$('#fullpage').fullpage({
	// 		anchors:['header', 'read', 'show', 'subscribe'],
	// 		loopBottom: true,
	// 		menu: '#menu',
	
	// 	});
	// });
	
	$('#fullpage').fullpage({
		anchors: ['header', 'read', 'show', 'subscribe'],
	
		afterLoad: function afterLoad(anchorLink, index) {
			var tl = new _gsap.TimelineMax();
			var loadedSection = $(this);
	
			//использование индекса
			if (index == 2) {
				var _tl = new _gsap.TimelineMax();
				_gsap.TimelineMax.fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut }, '-=1');
			}
	
			//использование ссылки с привязкой
			if (anchorLink == 'secondSlide') {
				alert("Section 2 ended loading");
			}
		}
	});

/***/ })

})
//# sourceMappingURL=0.279410a755eb2d95bbc8.hot-update.js.map