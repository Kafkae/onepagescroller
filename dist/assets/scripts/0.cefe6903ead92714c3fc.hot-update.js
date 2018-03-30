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
	api.bind('openPanel:start', function () {
		$('.burger__line').addClass('burger__line_active');
	});
	api.bind('openPanel:finish', function () {
		$('.burger__line').removeClass('burger__line_active');
	});

/***/ })

})
//# sourceMappingURL=0.cefe6903ead92714c3fc.hot-update.js.map