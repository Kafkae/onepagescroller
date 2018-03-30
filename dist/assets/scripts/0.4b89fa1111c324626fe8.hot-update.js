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
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	
		afterLoad: function afterLoad(anchorLink, index) {
			var loadedSection = $(this);
	
			//использование индекса
			if (index == 3) {
				alert("Section 3 ended loading");
			}
	
			//использование ссылки с привязкой
			if (anchorLink == 'secondSlide') {
				alert("Section 2 ended loading");
			}
		}
	});

/***/ })

})
//# sourceMappingURL=0.4b89fa1111c324626fe8.hot-update.js.map