jQuery(document).ready(function($) {
    $(window).on("scroll",function() {
        var hb = $('header').height();
        if ($(this).scrollTop() > hb ) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
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

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');

            $('.sidebar-site .sidebar-content').show('slow');
        } else {
            $('.sidebar-site .sidebar-content').hide('slow');
        }
    });
});

jQuery(document).ready(function($) {
    $(".slick-slidershow").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
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
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
                }
            }
        ]
    });

    $(".slick-products-favorite").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
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
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
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
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

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
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-angle-left icon icon-prev"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-angle-right icon icon-next"></i></button>',
    });
});

jQuery(document).ready(function($) {
    $('.search-title').click(function(){
        $(this).next().slideToggle('slow');
    });
    
    // $('.megamenu-content > li > a > .title-sub').click(function(e){
    //     e.preventDefault();

    //     var hsac = $(this).parent().hasClass('active');
    //     if (hsac) {
    //         $(this).parent().removeClass('active');
    //         $('.sub-menu li > a').removeClass('active');
    //         $('.sub-menu li > .sub-menu').slideUp();
    //         $(this).parent().next().slideUp();
    //     } else {
    //         $('.megamenu-content > li > a').removeClass('active');
    //         $(this).parent().addClass('active');
    //         $('.sub-menu li > a').removeClass('active');
    //         $('.sub-menu li > .sub-menu').slideUp();
    //         $('.megamenu-content > li > .sub-menu').slideUp();
    //         $(this).parent().next().slideToggle('slow');
    //     }        
    // });

    $('.megamenu-desktop .megamenu-content > li')
        .mouseenter(function() {
            $(this).children().addClass('active');
            $(this).children().next().slideToggle('slow');
        })
        .mouseleave(function() {
            $(this).children().removeClass('active');
            $(this).children().next().slideToggle('slow');
    });

    $('.megamenu-desktop .megamenu-content .sub-menu li')
        .mouseenter(function() {
            $(this).children().addClass('active');
            $(this).children().next().slideToggle('slow');
        })
        .mouseleave(function() {
            $(this).children().removeClass('active');
            $(this).children().next().slideToggle('slow');
    });
    
    // $('.megamenu-content .sub-menu .title-sub').click(function(e){
    //     e.preventDefault();

    //     var hsac = $(this).parent().hasClass('active');
    //     if (hsac) {
    //         $(this).parent().removeClass('active');
    //         $(this).parent().next().slideUp();
    //     } else {
    //         $('.sub-menu li > a').removeClass('active');
    //         $(this).parent().addClass('active');
    //         $('.sub-menu li > .sub-menu').slideUp();
    //         $(this).parent().next().slideToggle('slow');
    //     }        
    // });

    $('.mobile-content a .title-sub').click(function(e){
        e.preventDefault();
        $(this).parent().next().slideToggle('slow');
        $(this).parent().toggleClass('active');
    });
     $('.mobile-content .sub-menu').click(function(){
        $(this).prev().removeClass('active');
        $(this).slideToggle('slow');
    });
    $('.mobile-content .sub-menu .sub-content').click(function(e){
        e.stopPropagation();
    });

    // var w_window = $(window).width();
    // if (w_window < 992) {
    //     $('.sub-menu').click(function(){
    //         $(this).prev().removeClass('active');
    //         $(this).slideToggle('slow');
    //     });
    //     $('.sub-menu .sub-content').click(function(e){
    //         e.stopPropagation();
    //     });
    // }

    $('.product-detail-content .btn').click(function(e){
        e.preventDefault();
        $('.popup-order').addClass('active');
        var hg_pop = $('.popup-box').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.popup-box').css({'top': '10px'});
        }
    });
    $('.product-button .btn').click(function(e){
        e.preventDefault();
        $('.popup-quick-view').addClass('active');
        var hg_pop = $('.popup-box').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.popup-box').css({'top': '10px'});
        }
    });
    $('.popup-order, .popup-quick-view').click(function(e){
        $(this).removeClass('active');
    });
    $('.popup-box .content').click(function(e){
        e.stopPropagation();
    });
});

jQuery(document).ready(function($) {
    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            // $('.menu-box').height('100%');

            // $('.sidebar-site .sidebar-content').show('slow');
        } else {
            // $('.sub-menu').click(function(){
            //     $(this).prev().removeClass('active');
            //     $(this).toggleClass('active');
            // });
            // $('.sub-menu .sub-content').click(function(e){
            //     e.stopPropagation();
            // });
        }

        var hg_pop = $('.popup-box').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.popup-box').css({'top': '10px'});
        } else {
            $('.popup-box').css({'top': 'auto'});
        }
    });
});