webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	$(function () {
	
		$('#my-menu').mmenu({
			extensions: ['effect-menu-slide', 'pagedim-black'],
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
//# sourceMappingURL=0.8fb8ddc1b723f56a7514.hot-update.js.map