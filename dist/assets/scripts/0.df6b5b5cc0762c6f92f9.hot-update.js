webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
				$('#fullpage').fullpage({
							afterLoad: function afterLoad(anchorLink, index) {
										switch (index) {
													case 1:
																var intro = $('.header__intro');
																var media = $('.header__media');
																TweenMax.fromTo('.header__intro', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true });
																TweenMax.fromTo('.header__media', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut, immediateRender: true });
																break;
													case 2:
																var reads = $('.reads__content .reads__wrap');
																TweenMax.staggerFromTo('.reads__content .reads__wrap', 3, { opacity: 0, rotation: 500 }, { opacity: 1, rotation: 0, scale: 1, ease: Bounce.easeOut, immediateRender: true });
																break;
													case 3:
																var block1 = $('.present-gallery__part_js-1');
																var block2 = $('.present-gallery__part_js-2');
																var block3 = $('.present-gallery__part_js-3');
																var block4 = $('.present-gallery__part_js-4');
																TweenMax.from(block1, 1, { x: 300, y: 130, scale: 0.5, immediateRender: true, ease: Bounce.easeOut });
																TweenMax.from(block3, 1, { x: 300, y: -130, scale: 0.5, immediateRender: true, ease: Bounce.easeOut });
																TweenMax.from(block2, 1, { y: 130, x: -250, scale: 0.5, immediateRender: true, ease: Bounce.easeOut });
																TweenMax.from(block4, 1, { y: -130, x: -250, scale: 0.5, immediateRender: true, ease: Bounce.easeOut });
																break;
													case 4:
																var feedback = $('.feedback__content');
																TweenMax.from(feedback, 1, { scale: 0, ease: Bounce.easeOut, immediateRender: true });
																break;
										}
							}
				});
	});

/***/ })

})
//# sourceMappingURL=0.df6b5b5cc0762c6f92f9.hot-update.js.map