$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors: ['header', 'read', 'show', 'subscribe'],
      loopBottom: true,
      menu: '#menu',
      afterLoad: function(anchorLink, index) {
          switch (index) {
              case 1:
              var intro = $('.header__intro');
              var media = $('.header__media');
                  TweenMax.fromTo(intro, 1, {
                      x: -200,
                      opacity: 0,
                  }, {
                      x: 0,
                      opacity: 1,
                      ease: Bounce.easeOut
                  })
                  TweenMax.fromTo(media, 1, {
                      x: 200,
                      opacity: 0,
                  }, {
                      x: 0,
                      opacity: 1,
                      ease: Bounce.easeOut
                  })
                  break;
              case 2:
                var reads = $('.reads__content .reads__wrap');
                  TweenMax.staggerFromTo(reads, 3, {
                      opacity: 0,
                      rotation: 500
                  }, {
                      opacity: 1,
                      rotation: 0,
                      scale: 1,
                      ease: Bounce.easeOut
                  },0.1);
                  break;
              case 3:
              var block1 = $('.present-gallery__part_js-1');
              var block2 = $('.present-gallery__part_js-2');
              var block3 = $('.present-gallery__part_js-3');
              var block4 = $('.present-gallery__part_js-4');
                  TweenMax.from(block1, 1, {
                      x: 300,
                      y: 130,
                      scale: 0.5,
                      ease: Bounce.easeOut
                  });
                  TweenMax.from(block3, 1, {
                      x: 300,
                      y: -130,
                      scale: 0.5,
                      ease: Bounce.easeOut
                  });
                  TweenMax.from(block2, 1, {
                      y: 130,
                      x: -250,
                      scale: 0.5,
                      ease: Bounce.easeOut
                  });
                  TweenMax.from(block4, 1, {
                      y: -130,
                      x: -250,
                      scale: 0.5,
                      ease: Bounce.easeOut
                  })
                  break;
              case 4:
              var feedback = $('.feedback__content');
                  TweenMax.from(feedback, 1, {
                      y: -130,
                      x: -250,
                      scale: 0.5,
                      ease: Bounce.easeOut
                  })
                  break;
          }
      }
  });

});