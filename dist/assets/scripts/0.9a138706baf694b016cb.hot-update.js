webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	$('.search-button__btn-search').click(function () {
	    $('.search-button__search-form').animate({ right: 0 }, 50);
	    $('.search-button__search-popup').show();
	    $('.search-button__search-bg').click(function () {
	        $('.search-button__search-popup').hide();
	        $('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});

/***/ })

})
//# sourceMappingURL=0.9a138706baf694b016cb.hot-update.js.map