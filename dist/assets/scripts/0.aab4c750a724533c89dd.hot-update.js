webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	
	var _gsap = __webpack_require__(6);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../blocks/fullpage/fullpage.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	}); // $(document).ready(function() {
	// 	$('#fullpage').fullpage({
	// 		anchors:['header', 'read', 'show', 'subscribe'],
	// 		loopBottom: true,
	// 		menu: '#menu',
	
	// 	});
	// });

/***/ })

})
//# sourceMappingURL=0.aab4c750a724533c89dd.hot-update.js.map