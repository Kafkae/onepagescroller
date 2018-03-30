webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
		$('#fullpage').fullpage({
			anchors: ['header', 'read', 'show', 'subscribe'],
			loopBottom: true,
			menu: '#menu',
			afterLoad: function afterLoad(anchorLink, index) {
				var loadedSection = $(this);
	
				if (index == 1) {
					$('.header__intro').show();
					TweenMax.fromTo(".header__intro", 1, { opacity: 0, left: "-20px", delay: 0.5 });
				}
	
				if (index == 2) {
					$(".header__media").show();
					TweenMax.fromTo('.header__media', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Bounce.easeOut });
				}
				// if (index == 3) {
				// 	$(".header__media").show();
				// 	TweenMax.fromTo('.header__media', 1, {x:200,opacity: 0, }, {x: 0,opacity: 1, ease: Bounce.easeOut});
				// }
			}
		});
	});

/***/ })

})
//# sourceMappingURL=0.be564ef1d82b9150f262.hot-update.js.map