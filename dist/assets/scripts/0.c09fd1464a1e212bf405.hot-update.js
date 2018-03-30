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
	                    TweenMax.fromTo(intro, 1, {
	                        x: -200,
	                        opacity: 0
	                    }, {
	                        x: 0,
	                        opacity: 1,
	                        ease: Bounce.easeOut,
	                        immediateRender: true
	                    });
	                    TweenMax.fromTo(media, 1, {
	                        x: 200,
	                        opacity: 0
	                    }, {
	                        x: 0,
	                        opacity: 1,
	                        ease: Bounce.easeOut,
	                        immediateRender: true
	                    });
	                    break;
	                case 2:
	                    TweenMax.staggerFromTo(reads, 3, {
	                        opacity: 0,
	                        rotation: 500
	                    }, {
	                        opacity: 1,
	                        rotation: 0,
	                        scale: 1,
	                        ease: Bounce.easeOut,
	                        immediateRender: true
	                    });
	                    break;
	                case 3:
	                    TweenMax.from(block1, 1, {
	                        x: 300,
	                        y: 130,
	                        scale: 0.5,
	                        immediateRender: true,
	                        ease: Bounce.easeOut
	                    });
	                    TweenMax.from(block3, 1, {
	                        x: 300,
	                        y: -130,
	                        scale: 0.5,
	                        immediateRender: true,
	                        ease: Bounce.easeOut
	                    });
	                    TweenMax.from(block2, 1, {
	                        y: 130,
	                        x: -250,
	                        scale: 0.5,
	                        immediateRender: true,
	                        ease: Bounce.easeOut
	                    });
	                    TweenMax.from(block4, 1, {
	                        y: -130,
	                        x: -250,
	                        scale: 0.5,
	                        immediateRender: true,
	                        ease: Bounce.easeOut
	                    });
	                    break;
	                case 4:
	                    TweenMax.from(feedback, 1, {
	                        y: -130,
	                        x: -250,
	                        scale: 0.5,
	                        immediateRender: true,
	                        ease: Bounce.easeOut
	                    });
	                    break;
	            }
	        }
	    });
	});

/***/ })

})
//# sourceMappingURL=0.c09fd1464a1e212bf405.hot-update.js.map