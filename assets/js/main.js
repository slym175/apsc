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
});