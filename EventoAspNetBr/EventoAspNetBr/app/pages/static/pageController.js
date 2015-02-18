(function () {
    angular
        .module('app')
        .controller('pageController', [function () {

            // Sticky Menu
            var menuSticky = function () {
                var menu = document.querySelector('#menu'),
                    origOffsetY = menu.offsetTop + 100;

                function scroll() {
                    if ($(window).scrollTop() >= origOffsetY) {
                        $('#menu').addClass('sticky');
                        $('#menu').removeClass('fixed');
                    } else {
                        $('#menu').removeClass('sticky');
                        $('#menu').addClass('fixed');
                    }
                }

                document.onscroll = scroll;
            };


            // Align Slider Horizontally
            var mainSliderAlign = function () {
                var imageWidth, widthFix, container = $('.header-bg');

                function centerImage() {
                    imageWidth = container.find('img').width();
                    widthFix = imageWidth / 2;
                    container.find('img').css('margin-left', -widthFix);
                }

                $(window).on("load resize", centerImage);
            };

            // Main FlexSlider
            var mainSlider = function () {
                $(window).load(function () {
                    $('.main-slider').flexslider({
                        noCSS: true,
                        touch: false,
                        controlNav: false,
                        directionNav: false,
                        animation: "fade",
                        start: function () {
                            $('#preloader').addClass('ready');
                        }
                    });
                });
            };


            // One Page Navigation
            var navigation = function () {
                $('#menu').onePageNav({
                    currentClass: 'current',
                    scrollSpeed: 500,
                    scrollOffset: 60,
                    scrollThreshold: 0.2
                });
            };

            // Owl Carousel
            var carousel = function () {
                var owl = $("#carousel");
                owl.owlCarousel({
                    itemsCustom: [
                        [1200, 4],
                        [970, 3],
                        [768, 2],
                        [360, 1]
                    ],
                    navigation: false
                });

                $(".next").click(function () {
                    owl.trigger('owl.next');
                });

                $(".prev").click(function () {
                    owl.trigger('owl.prev');
                });
            };

            // Apps
            var apps = function () {
                // Accordion
                $('.accordion-group').accordion();

                // Placeholder's for IE9
                $('input, textarea').placeholder();
            };

            var vm = this;

            vm.init = function () {
                menuSticky();
                mainSlider();
                mainSliderAlign();
                navigation();
                carousel();
                apps();
            };

        }]);
})();