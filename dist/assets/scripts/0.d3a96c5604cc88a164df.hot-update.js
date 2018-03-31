webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	$(function () {
	
		$('#my-menu').mmenu({
			extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
			},
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
//# sourceMappingURL=0.d3a96c5604cc88a164df.hot-update.js.map