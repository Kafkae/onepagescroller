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
	                                   intro.restart().timeScale(1);
	                                   media.restart().timeScale(1);
	                                   contentReveal();
	                                   break;
	                            case 2:
	
	                                   reads.restart().timeScale(1);
	                                   contentReveal();
	                                   break;
	                            case 3:
	
	                                   block1.restart().timeScale(1);
	                                   block2.restart().timeScale(1);
	                                   block3.restart().timeScale(1);
	                                   block4.restart().timeScale(1);
	                                   contentReveal();
	                                   break;
	                            case 4:
	
	                                   feedback.restart().timeScale(1);
	                                   contentReveal();
	                                   break;
	                     }
	              }
	       });
	});

/***/ })

})
//# sourceMappingURL=0.8415dc82f50ed34f3c59.hot-update.js.map