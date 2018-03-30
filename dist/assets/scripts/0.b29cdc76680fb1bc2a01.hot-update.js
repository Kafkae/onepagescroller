webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
		$('#fullpage').fullpage({
			anchors: ['header', 'read', 'show', 'subscribe'],
			loopBottom: true,
			meafterLoad: function meafterLoad(anchorLink, index) {
				var loadedSection = $(this);
	
				//использование индекса
				if (index == 1) {
					alert("Section 3 ended loading");
				}
	
				//использование ссылки с привязкой
				if (anchorLink == 'secondSlide') {
					alert("Section 2 ended loading");
				}
			}
		});
	});

/***/ })

})
//# sourceMappingURL=0.b29cdc76680fb1bc2a01.hot-update.js.map