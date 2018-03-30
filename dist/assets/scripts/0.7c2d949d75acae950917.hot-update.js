webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	  $('#fullpage').fullpage({
	    anchors: ['header', 'read', 'show', 'subscribe'],
	    loopBottom: true,
	    menu: '#menu',
	    afterLoad: function afterLoad(anchorLink, index) {
	      var loadedSection = $(this);
	
	      if (index == 1) {
	        $("header").hide();
	      }
	
	      if (index == 2) {
	        $(".second h1").show();
	        TweenMax.from("reads", 1, { opacity: 0, left: "-20px", delay: 0.5 });
	      }
	    }
	  });
	});

/***/ })

})
//# sourceMappingURL=0.7c2d949d75acae950917.hot-update.js.map