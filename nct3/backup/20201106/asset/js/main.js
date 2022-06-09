jQuery(document).ready(function($) {
    $(".slick-slidershow").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-products").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-testimonials").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-blogs").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // product details images
    $('.slick-products-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-products-nav'
    });
    $('.slick-products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-products-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    // end product details images

    // event-images images
    $('.slick-event-images-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-event-images-nav'
    });
    $('.slick-event-images-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-event-images-for',
        dots: false,
        // centerMode: true,
        focusOnSelect: true
    });
    // end event-images images

    $(".slick-related-products").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-personnels").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-brands").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".slick-certifications").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // fix menu
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 120 ) {
            $('.header-site').addClass('active');
        } else {
            $('.header-site').removeClass('active');
        }

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });
    
    // menu mobile full height
    $('#open_menu').click(function(){
        var h_wd = $(window).height();
        $('.menu-box .menu-nav').height(h_wd);
        $('.megamenu').addClass('active');
    });
    $('#close_menu').click(function(){
        $('.megamenu').removeClass('active');
    });

    $('.sort-by-title, .show-title').click(function(){
        $(this).parent().toggleClass('active');
    });

    $('.sidebar-site .sidebar-title').click(function(){
        // var clac = $(this).hasClass('active');
        // if (clac) {
        //     $(this).removeClass('active');
        //     $('.sidebar-site .sidebar-content').hide('slow');
        // } else {
        //     $(this).addClass('active');
        //     $(this).next().show('slow');
        // }
        var w_window = $(window).width();
        if (w_window < 992) {
            $(this).next().slideToggle('slow');
            $(this).toggleClass('active');
        }
    });

    $('.search-box .search-title').click(function(){
        var srac = $('.search-box .search-content').hasClass('active');
        if (srac) {
            $('.search-box .search-content').removeClass('active');
        } else {
            $('.search-box .search-content').addClass('active');
        }
    });

    $('.megamenu .title-dropdown').click(function(event){
        event.preventDefault();
        $(this).next().slideToggle('slow');
    });
    
    $('.popup').click(function(event){
        $('.popup').removeClass('active');
    });
    $('.popup-box .content').click(function(e){
        e.stopPropagation();
    });

    $('.product-details-content .product-button .order-btn').click(function(event){
        event.preventDefault();
        $('.popup-order').addClass('active');
    });

    // $('.big-event-box a').click(function(event){
    //     event.preventDefault();
    //     $('.event-images-popup').addClass('active');
    // });
    $('.event-details-image a').click(function(event){
        event.preventDefault();
        $('.event-images-popup').addClass('active');
    });
    $('.event-images-popup').click(function(){
        $(this).removeClass('active');
    });
    $('.event-images-content .content').click(function(e){
        e.stopPropagation();
    });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box .menu-nav').height('100%');

            $('.sidebar-site .sidebar-content').show('slow');
        } else {
            $('.sidebar-site .sidebar-content').hide('slow');
        }
    });
});