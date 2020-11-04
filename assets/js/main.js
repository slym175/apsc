$(function () {
    $('.home-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        items:1,
        autoHeight: true,
        responsive:{
            
        }
    })

    $('.home-catalog-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        items: 4,
        responsive:{
            0: {
                items:1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    })

    $('.btn-search').click(function(e) {
        e.preventDefault();
        $('.search-form').toggleClass('d-none');
    })

    $('i.lv1').click(function(e) {
        e.preventDefault();
        $(this).parents('li.nav-item').toggleClass('menu-opened');
    })

    $('i.lv2').click(function(e) {
        e.preventDefault();
        $(this).parents('li').toggleClass('menu-opened-l1');
    })

    $('i.lv3').click(function(e) {
        e.preventDefault();
        $(this).parents('li').toggleClass('menu-opened-l2');
    })

    var syncedSecondary = true;
    var sync1 = $('.feature-new-image');
    var sync2 = $('.feature-new-content');

    sync1.owlCarousel({
        loop: false,
        margin: 0,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        items: 1,
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        onChanged: function(el) {
            sync2.trigger('to.owl.carousel', [el.item.index, 100, true]);
        }
    })

    sync2.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ['<i class="icons-next"></i>','<i class="icons-prev"></i>'],
        onChanged: function(el) {
            sync1.trigger('to.owl.carousel', [el.item.index, 100, true]);
        }
    })

    $('.angle-open').click(function(e) {
        e.preventDefault();
        if($(this).parents('.nav-item').hasClass('opened')) {
            $(this).parents('.nav-item').removeClass('opened');
        }else{
            $(this).parents('.left-nav').find('.nav-item').removeClass('opened');
            $(this).parents('.nav-item').toggleClass('opened');
        }
    })

    $('.angle-open-lv2').click(function(e) {
        e.preventDefault();
        if($(this).parents('.have-subnav').hasClass('opened')) {
            $(this).parents('.have-subnav').removeClass('opened');
        }else{
            $(this).parents('.sub-nav').find('li').removeClass('opened');
            $(this).parents('.have-subnav').toggleClass('opened');
        }
    })

    new WOW().init();
});
