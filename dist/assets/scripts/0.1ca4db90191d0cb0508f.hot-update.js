webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gsap = __webpack_require__(6);
	
	$('#fullpage').fullpage({
		anchors: ['header', 'read', 'show', 'subscribe'],
	
		afterLoad: function afterLoad(anchorLink, index) {
			var loadedSection = $(this);
	
			//использование индекса
			if (index == 2) {
				_gsap.TimelineMax.fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut }, '-=1');
			}
	
			//использование ссылки с привязкой
			if (anchorLink == 'secondSlide') {
				alert("Section 2 ended loading");
			}
		}
	}); // $(document).ready(function() {
	// 	$('#fullpage').fullpage({
	// 		anchors:['header', 'read', 'show', 'subscribe'],
	// 		loopBottom: true,
	// 		menu: '#menu',
	
	// 	});
	// });

/***/ })

})
//# sourceMappingURL=0.1ca4db90191d0cb0508f.hot-update.js.map