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

    $(".slick-projects").slick({
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
        dots: false,
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
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slick-products-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // end product details images

    $(".slick-related-products").slick({
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

    $(".slick-brands").slick({
        dots: true,
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

    $(".slick-typical-projects").slick({
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

    // fix menu
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 123 ) {
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
        $('.menu-box').height(h_wd);
        $('.megamenu').addClass('active');
    });
    $('#close_menu').click(function(){
        $('.megamenu').removeClass('active');
    });

    $('.sort-by-title, .show-title').click(function(){
        $(this).parent().toggleClass('active');
    });

    $('.sidebar .sidebar-title').click(function(){
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

    $('.event-details-image').click(function(e){
        $('.event-images-popup').addClass('active');
    });

    $('.event-images-popup').click(function(e){
        $(this).removeClass('active');
    });

    $('.sidebar-categories .title-sub-menu .icon').click(function(event){
        event.preventDefault();
        $(this).parent().parent().toggleClass('active');
        $(this).parent().next().slideToggle('slow');
    });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');

            $('.sidebar .sidebar-content').show('slow');
        } else {
            $('.sidebar .sidebar-content').hide('slow');
        }
    });
});