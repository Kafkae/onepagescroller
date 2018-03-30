webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	$('.burger').click(function () {
	    $('.menu').animate({ right: 0 }, 50);
	    $('.search-button__search-popup').show();
	    $('.search-button__search-bg').click(function () {
	        $('.search-button__search-popup').hide();
	        $('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});

/***/ })

})
//# sourceMappingURL=0.53b3af993059f0aa1a87.hot-update.js.map