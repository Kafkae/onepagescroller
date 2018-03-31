webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
			$('#fullpage').fullpage({
					//Навигация
					menu: '#menu',
					lockAnchors: false,
					anchors: ['firstPage', 'secondPage'],
					navigation: false,
					navigationPosition: 'right',
					navigationTooltips: ['firstSlide', 'secondSlide'],
					showActiveTooltip: false,
					slidesNavigation: false,
					slidesNavPosition: 'bottom',
	
					//Скроллинг
					css3: true,
					scrollingSpeed: 700,
					autoScrolling: true,
					fitToSection: true,
					fitToSectionDelay: 1000,
					scrollBar: false,
					easing: 'easeInOutCubic',
					easingcss3: 'ease',
					loopBottom: false,
					loopTop: false,
					loopHorizontal: true,
					continuousVertical: false,
					continuousHorizontal: false,
					scrollHorizontally: false,
					interlockedSlides: false,
					dragAndMove: false,
					offsetSections: false,
					resetSliders: false,
					fadingEffect: false,
					normalScrollElements: '#element1, .element2',
					scrollOverflow: false,
					scrollOverflowReset: false,
					scrollOverflowOptions: null,
					touchSensitivity: 15,
					normalScrollElementTouchThreshold: 5,
					bigSectionsDestination: null,
	
					//Доступ
					keyboardScrolling: true,
					animateAnchor: true,
					recordHistory: true,
	
					//Дизайн
					controlArrows: true,
					verticalCentered: true,
					sectionsColor: ['#ccc', '#fff'],
					paddingTop: '3em',
					paddingBottom: '10px',
					fixedElements: '#header, .footer',
					responsiveWidth: 0,
					responsiveHeight: 0,
					responsiveSlides: false,
					parallax: false,
					parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
	
					//Настроить селекторы
					sectionSelector: '.section',
					slideSelector: '.slide',
	
					lazyLoading: true,
	
					//события
					onLeave: function onLeave(index, nextIndex, direction) {},
					afterLoad: function afterLoad(anchorLink, index) {},
					afterRender: function afterRender() {},
					afterResize: function afterResize() {},
					afterResponsive: function afterResponsive(isResponsive) {},
					afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {},
					onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
			});
	});

/***/ })

})
//# sourceMappingURL=0.2fdfb760003fd86cb977.hot-update.js.map