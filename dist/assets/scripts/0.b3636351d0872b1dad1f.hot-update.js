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
			$('.burger').addClass('.burger__line_active');
		});
		api.bind('close:finish', function () {
			$('.burger').removeClass('.burger__line_active');
		});
	});

/***/ })

})
//# sourceMappingURL=0.b3636351d0872b1dad1f.hot-update.js.map