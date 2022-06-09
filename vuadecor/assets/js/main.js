jQuery(document).ready(function($) {
    $(window).on("scroll",function() {
        var hb = $('.headers').height();
        if ($(this).scrollTop() > hb ) {
            $('.header-stick').addClass('active');
        } else {
            $('.header-stick').removeClass('active');
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

     $('.megamenu-mobile-content .item-sub > a span').click(function(e){
        e.preventDefault();

        $(this).parent().parent().toggleClass('active');

        $(this).parent().next().slideToggle('slow');
    });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');
        }
    });
});

jQuery(document).ready(function($) {
    $(".slick-slidershow").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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
        // rows: 1,
        // slidesPerRow: 4,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
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

    $(".slick-products-2").slick({
        dots: false,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesPerRow: 5,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // slidesPerRow: 2,
                    // rows: 1,
                    // slidesToShow: 2,
                    infinite: false,
                    rows:1,
                    slidesPerRow: 1,
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: false,
                    rows:1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-products-3").slick({
        dots: false,
        infinite: true,
        speed: 500,
        // rows: 1,
        // slidesPerRow: 4,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
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

    $(".slick-feedbacks").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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

    $('.slick-products-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-products-nav'
    });
    $('.slick-products-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slick-products-for',
        dots: false,
        // centerMode: true,
        // variableWidth: true,
        focusOnSelect: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
    });
});

jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();
        var pop_odr = $(this).hasClass('btn-popup-order');

        if (pop_odr) {
            $('.art-popups-oder').addClass('active');
        }    
    });
    ////////////////////
    var hg_pop = $('.art-popups .popups-box').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {
        $('.art-popups .popups-box').css({'top': '10px'});        
        $('.art-popups .popups-box').height(hg_win - 20);
    } else {
        $('.art-popups .popups-box').css({'top': 'auto'});        
        $('.art-popups .popups-box').height('auto');
    }
    ////////////////////
    $('.art-popups .popups-box').click(function(){
        $(this).parent().removeClass('active');
    });
    ////////////////////
    $('.art-popups .popups-content').click(function(e){
        e.stopPropagation();
    });
    // end popups
    $(window).resize(function(){
        // popups
        var hg_pop = $('.art-popups .popups-box').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups .popups-box').css({'top': '10px'});        
        $('.art-popups .popups-box').height(hg_win - 20);
        } else {
            $('.art-popups .popups-box').css({'top': 'auto'});       
        $('.art-popups .popups-box').height('auto');
        }
        // end popups
    });

    var wh_win = $(window).width();
    if (wh_win > 991) {
        $('.content-sidebar').show();
    } else {
        $('.content-sidebar').hide();
    }
    $('.title-sidebar').click(function(){
        var wh_win = $(window).width();

        if (wh_win <= 991) {
            var clac = $(this).hasClass('active');
            if (!clac) {
                $('.title-sidebar').removeClass('active');
                $(this).addClass('active');
                $('.content-sidebar').hide();
                $(this).next().slideDown('slow');
            } else {
                $(this).removeClass('active');
                $(this).next().slideUp('slow');
            }
        }
    });
    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win > 991) {
            $('.title-sidebar').removeClass('active');
            $('.content-sidebar').show();
        } else {
            $('.content-sidebar').hide();
            $('.title-sidebar').removeClass('active');
        }
    });


    $('.product-description-content .title').click(function(){
        var clac = $(this).hasClass('active');

        if (!clac) {
            $('.product-description-content .title').removeClass('active');
            $(this).addClass('active');
            $('.product-description-content .content').hide();
            $(this).next().slideDown('slow');
        } else {
            $(this).removeClass('active');
            $(this).next().slideUp('slow');
        }        
    });

    $('.searchs-title .btn').click(function(){
        $(this).parent().next().slideToggle('slow');
    });

    $('.title-tab a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var clnm = $(this).attr('class').replace('tab-title','');
            var clsnm = '.tab-content' + clnm;

            $('.title-tab a').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').removeClass('active');
            $(clsnm).addClass('active');
        }
    });

    $('.carts-title a').click(function(e){
        e.preventDefault();
        $(this).parent().next().slideToggle();
    });

    $('.sidebars-btn').click(function(){
        $(this).toggleClass('active');
        $('.sidebars-box').toggleClass('active');
    });

    $('.megamenu-content .sub-menu .sub-menu li a').mouseover(function() {
        var acimg = $('.megamenu-content .item-image').hasClass('active');

        if (!acimg) {
            $('.megamenu-content .item-image').addClass('active');
        }
    }).mouseout(function() {
       $('.megamenu-content .item-image').removeClass('active');
    });
});

jQuery(document).ready(function($) {

    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win > 991) {
            
        } else {
            
        }
    });
});