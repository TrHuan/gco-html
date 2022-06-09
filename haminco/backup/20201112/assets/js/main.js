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
});

// js menu mobile
jQuery(document).ready(function($) {
    $('.megamenu-mobile-content .item-sub a span').click(function(e){
        e.preventDefault();

        var mncl = $(this).parent().hasClass('active');

        if (mncl) {
            $(this).parent().removeClass('active');
            $(this).parent().next().slideUp('slow');
        } else {
            $(this).parent().parent().parent().find('a').removeClass('active');
            $(this).parent().parent().parent().find('.sub-menu').slideUp('slow');
            $(this).parent().addClass('active');
            $(this).parent().next().slideDown('slow');
        }
    });
    // $('.megamenu-mobile-content .sub-menu').click(function(){
    //     $(this).prev().removeClass('active');
    //     $(this).slideToggle('slow');
    // });
    // $('.megamenu-mobile-content .sub-menu .sub-content').click(function(e){
    //     e.stopPropagation();
    // });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');
        }
    });
});
// end js menu mobile

jQuery(document).ready(function($) {

    $(".slick-slidershow").slick({
        dots: true,
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
        slidesToShow: 4,
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

    $(".slick-services").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        // nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-products-for',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.slick-constructions-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-constructions-nav',
    });
    $('.slick-constructions-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slick-constructions-for',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".slick-constructions").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        // nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
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

});

// js popups
jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();

        var adat = $(this).hasClass('btn-popups-reviews');
        if (adat) {
            $('.art-popups-reviews').addClass('active');

            var hg_pop = $('.art-popups-reviews .popups-content').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-reviews .popups-box').css({'top': '10px'});        
                $('.art-popups-reviews .popups-box').height(hg_win - 20);
            } else {
                $('.art-popups-reviews .popups-box').css({'top': 'auto'});        
                $('.art-popups-reviews .popups-box').height('auto');
            } 
        }

        var adlg = $(this).hasClass('btn-popups-login');
        if (adlg) {
            $('.art-popups-login').addClass('active');

            var hg_pop = $('.art-popups-login .popups-content').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-login .popups-box').css({'top': '10px'});        
                $('.art-popups-login .popups-box').height(hg_win);
            } else {
                $('.art-popups-login .popups-box').css({'top': 'auto'});        
                $('.art-popups-login .popups-box').height('auto');
            } 
        }
    });
    ////////////////////
    var hg_pop = $('.art-popups-reviews .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {
        $('.art-popups-reviews .popups-box').css({'top': '10px'});        
        $('.art-popups-reviews .popups-box').height(hg_win - 20);
    } else {
        $('.art-popups-reviews .popups-box').css({'top': 'auto'});        
        $('.art-popups-reviews .popups-box').height('auto');
    } 

    var hg_pop_login = $('.art-popups-login .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop_login > hg_win) {
        $('.art-popups-login .popups-box').css({'top': '10px'});        
        $('.art-popups-login .popups-box').height(hg_win);
    } else {
        $('.art-popups-login .popups-box').css({'top': 'auto'});        
        $('.art-popups-login .popups-box').height('auto');
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
        var hg_pop = $('.art-popups-reviews .popups-content').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups-reviews .popups-box').css({'top': '10px'});        
            $('.art-popups-reviews .popups-box').height(hg_win - 20);
        } else {
            $('.art-popups-reviews .popups-box').css({'top': 'auto'});        
            $('.art-popups-reviews .popups-box').height('auto');
        } 

        var hg_pop_login = $('.art-popups-login .popups-content').height();
        var hg_win = $(window).height();
        if (hg_pop_login > hg_win) {
            $('.art-popups-login .popups-box').css({'top': '10px'});        
            $('.art-popups-login .popups-box').height(hg_win);
        } else {
            $('.art-popups-login .popups-box').css({'top': 'auto'});        
            $('.art-popups-login .popups-box').height('auto');
        } 
        // end popups
    });
});
// end js popups

// js tab
jQuery(document).ready(function($) {

    $('.title-tab a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var clnm = $(this).attr('class').replace('tab-title','');
            var clsnm = '.tab-content' + clnm;

            var natab = $(this).parent().parent().parent().attr('class');

            $('.' + natab + ' .title-tab a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' .tab-content').removeClass('active');
            $('.' + natab + ' ' + clsnm).addClass('active');
        } else {
            $(this).removeClass('active');

            var natab = $(this).parent().parent().parent().attr('class');

            $('.' + natab + ' .tab-content').removeClass('active');
        }
    });

    $('.title-tab-2 a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var clnm = $(this).attr('class').replace('tab-title','');
            var clsnm = '.tab-content' + clnm;

            var natab = $(this).parent().parent().parent().attr('class');

            $('.' + natab + ' .title-tab-2 a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' .tab-content').removeClass('active');
            $('.' + natab + ' ' + clsnm).addClass('active');
        }
    });

});
// end js tab
