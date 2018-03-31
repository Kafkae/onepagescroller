webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	$('.burger').click(function () {
	    $('.search-button__search-form').animate({ right: 0 }, 50);
	    $('.search-button__search-popup').show();
	    $('.search-button__search-bg').click(function () {
	        $('.search-button__search-popup').hide();
	        $('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});

/***/ })

})
//# sourceMappingURL=0.9787606e2d9cf12f0ab9.hot-update.js.map