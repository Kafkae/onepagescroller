webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
		$('#my-menu').mmenu();
	});
	
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.burger').addClass('burger__line_active');
	});
	api.bind('close:finish', function () {
		$('.hamburger').removeClass('burger__line_active');
	});

/***/ })

})
//# sourceMappingURL=0.a98da5652a89006caa69.hot-update.js.map