webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	       $('#fullpage').fullpage({
	              anchors: ['header', 'read', 'show', 'subscribe'],
	              loopBottom: true,
	              menu: '#menu',
	              afterLoad: function afterLoad(anchorLink, index) {
	                     var loadedSection = $(this);
	                     switch (index) {
	                            case 1:
	                                   contentReveal();
	                                   break;
	                            case 2:
	                                   contentReveal();
	                                   break;
	                            case 3:
	                                   contentReveal();
	                                   break;
	                            case 4:
	                                   contentReveal();
	                                   break;
	                     }
	              }
	       });
	});

/***/ })

})
//# sourceMappingURL=0.1c27a8e9469a7cb00139.hot-update.js.map