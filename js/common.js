// svg icons support ie11
(function () {
    svg4everybody();
})();

// owl carousel
$(document).ready(function () {
    var slider = $('.js-slider');

    slider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: false,
        smartSpeed: 700,
        autoHeight: true
    });

    slider.on('changed.owl.carousel', function (event) {
        var items = slider.find('.owl-item');
        items.removeClass('left');
        items.eq(event.item.index).prevAll().addClass('left');
    });

    $(document).on('click', '.owl-item', function () {
        itemsIndex = $(this).index();
        slider.trigger('to.owl.carousel', itemsIndex);
    });
});

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap'),
        bg = header.find('.js-header-bg'),
        link = $('.js-link');
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        bg.toggleClass('show');
    });
    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });
    link.on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });
})();

AOS.init();

var a = 0;
$(window).scroll(function () {
    var counter = $('.js-counter');
    if (counter.length) {
        var oTop = counter.offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.js-counter-number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {

                    duration: 1300,
                    easing: 'swing',
                    step: function step() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function complete() {
                        $this.text(this.countNum);
                    }

                });
            });
            a = 1;
        }
    }
});