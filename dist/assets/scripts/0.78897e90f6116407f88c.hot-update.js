webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	// $(document).ready(function() {
	// 	$('#fullpage').fullpage({
	// 		anchors:['header', 'read', 'show', 'subscribe'],
	// 		loopBottom: true,
	// 		menu: '#menu',
	
	// 	});
	// });
	
	$('#fullpage').fullpage({
		anchors: ['header', 'read', 'show', 'subscribe'],
	
		afterLoad: function afterLoad(anchorLink, index) {
			var loadedSection = $(this);
	
			//использование индекса
			if (index == 3) {
				alert("Section 1 ended loading");
			}
	
			//использование ссылки с привязкой
			if (anchorLink == 'secondSlide') {
				alert("Section 2 ended loading");
			}
		}
	});

/***/ })

})
//# sourceMappingURL=0.78897e90f6116407f88c.hot-update.js.map