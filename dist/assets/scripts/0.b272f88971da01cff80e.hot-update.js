webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	"use strict";
	
	// $(document).ready(function() {
	// 	$('#fullpage').fullpage({
	// 		anchors:['header', 'read', 'show', 'subscribe'],
	// 		loopBottom: true,
	// 		menu: '#menu',
	
	// 	});
	// });
	
	$("#wrapper").fullpage({
		verticalCentered: true,
		scrollingSpeed: 1000,
	
		sectionSelector: "section",
	
		afterLoad: function afterLoad(anchorLink, index) {
			var loadedSection = $(this);
	
			if (index == 1) {
				$(".header h1").hide();
			}
	
			if (index == 2) {
				$(".second h1").show();
				TweenMax.from(".reads h1", 1, { opacity: 0, left: "-20px", delay: 0.5 });
			}
		}
	});

/***/ })

})
//# sourceMappingURL=0.b272f88971da01cff80e.hot-update.js.map