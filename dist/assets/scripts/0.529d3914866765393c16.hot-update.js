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
	                     switch (index) {
	                            case 1:
	                                   contentReveal();
	                                   intro.restart().timeScale(1);
	                                   media.restart().timeScale(1);
	                                   break;
	                            case 2:
	                                   contentReveal();
	                                   reads.restart().timeScale(1);
	                                   break;
	                            case 3:
	                                   contentReveal();
	                                   block1.restart().timeScale(1);
	                                   block2.restart().timeScale(1);
	                                   block3.restart().timeScale(1);
	                                   block4.restart().timeScale(1);
	                                   break;
	                            case 4:
	                                   contentReveal();
	                                   feedback.restart().timeScale(1);
	                                   break;
	                     }
	              }
	       });
	});

/***/ })

})
//# sourceMappingURL=0.529d3914866765393c16.hot-update.js.map