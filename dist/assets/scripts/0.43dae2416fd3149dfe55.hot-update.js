webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
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
	api.bind('open:start', function () {
		$('.burger__line').addClass('burger__line_active');
	});
	api.bind('close:finish', function () {
		$('.burger__line').removeClass('burger__line_active');
	});

/***/ })

})
//# sourceMappingURL=0.43dae2416fd3149dfe55.hot-update.js.map