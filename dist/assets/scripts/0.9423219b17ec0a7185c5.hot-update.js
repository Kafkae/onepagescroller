webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	$(function () {
	
		$('#my-menu').mmenu({
			extensions: ['effect-menu-slide', 'pagedim-black'],
			offCanvas: {
				position: 'right'
			}
		});
	
		var api = $('#my-menu').data('mmenu');
		api.bind('open:finish', function () {
			$('.hamburger').addClass('is-active');
		});
		api.bind('close:finish', function () {
			$('.hamburger').removeClass('is-active');
		});
	});

/***/ })

})
//# sourceMappingURL=0.9423219b17ec0a7185c5.hot-update.js.map