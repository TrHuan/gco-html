$(document).ready(function() {

    // $("footer").load("footer.html", function () {})

    // $("header").load("header.html", function () {
    //     $("#menu").mmenu({
    //         "extensions": [
    //             "fx-menu-zoom"
    //         ],
    //         "counters": true
    //     });

    //     $('.btn-showSearch').click(function () {
    //         $('.search').toggleClass('show')
    //     })
    // });

    // $("#menu").mmenu({
    //     "extensions": [
    //         "fx-menu-zoom"
    //     ],
    //     "counters": true
    // });

    // $('.btn-showSearch').click(function () {
    //     $('.search').toggleClass('show')
    // })

    $('.banner-slider').slick({
        autoplay: true,
        arrow: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    });

    $('.manager-slider').slick({
        autoplay: true,
        arrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        dots: true,
    });

    $('.slider-other').slick({
        autoplay: true,
        arrow: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        dots: true,
    });


    $('.other-news-content').slick({
        arrow: false,
        centerPadding: '30px',
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
    $('.slider-for').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
        autoplay:true,
        arrow:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-chevron-right"></i></button>',
    });
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



})
