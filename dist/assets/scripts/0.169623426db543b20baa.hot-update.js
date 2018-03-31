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
			$('.burger').addClass('is-active');
		});
		api.bind('close:finish', function () {
			$('.burger').removeClass('is-active');
		});
	});

/***/ })

})
//# sourceMappingURL=0.169623426db543b20baa.hot-update.js.map