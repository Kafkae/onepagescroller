webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	       $('#fullpage').fullpage({
	              anchors: ['header', 'read', 'show', 'subscribe'],
	              loopBottom: true,
	              menu: '#menu',
	              afterLoad: function afterLoad(anchorLink, index) {
	                     var intro = $('.header__intro');
	                     var media = $('.header__media');
	                     var reads = $('.reads__content .reads__wrap');
	                     var block1 = $('.present-gallery__part_js-1');
	                     var block2 = $('.present-gallery__part_js-2');
	                     var block3 = $('.present-gallery__part_js-3');
	                     var block4 = $('.present-gallery__part_js-4');
	                     var feedback = $('.feedback__content');
	                     switch (index) {
	                            case 1:
	                                   contentReveal();
	                                   intro.restart().timeScale(1);
	                                   media.restart().timeScale(1);
	                                   break;
	                            case 2:
	                                   contentReveal();
	                                   reads.restart().timeScale(1);
	                                   break;
	                            case 3:
	                                   contentReveal();
	                                   block1.restart().timeScale(1);
	                                   block2.restart().timeScale(1);
	                                   block3.restart().timeScale(1);
	                                   block4.restart().timeScale(1);
	                                   break;
	                            case 4:
	                                   contentReveal();
	                                   feedback.restart().timeScale(1);
	                                   break;
	                     }
	              }
	       });
	});

/***/ })

})
//# sourceMappingURL=0.ab04ddfe56a004ec9215.hot-update.js.map