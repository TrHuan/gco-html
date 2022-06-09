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
    $('.megamenu-mobile-content .sub-item .sub-title').click(function(e){
        e.preventDefault();
        $(this).parent().next().slideToggle('slow');
        $(this).parent().toggleClass('active');
    });
     $('.megamenu-mobile-content .sub-menu').click(function(){
        $(this).prev().removeClass('active');
        $(this).slideToggle('slow');
    });
    $('.megamenu-mobile-content .sub-menu .sub-content').click(function(e){
        e.stopPropagation();
    });

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

    $(".slick-hot-events").slick({
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

    $(".slick-projects-highlights").slick({
        dots: true,
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

    $(".slick-news-viewed").slick({
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

    $(".slick-testimonials").slick({
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
        focusOnSelect: true,
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
                    slidesToShow: 4,
                }
            },
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

});

// js popups
jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();

        var adat = $(this).hasClass('btn-popups-get-prices');
        if (adat) {
            $('.art-popups-get-prices').addClass('active');

            var hg_pop = $('.art-popups-get-prices .popups-content').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-get-prices .popups-box').css({'top': '10px'});        
                $('.art-popups-get-prices .popups-box').height(hg_win - 20);
            } else {
                $('.art-popups-get-prices .popups-box').css({'top': 'auto'});        
                $('.art-popups-get-prices .popups-box').height('auto');
            } 
        }

        var adat = $(this).hasClass('btn-popups-contact');
        if (adat) {
            $('.art-popups-contact').addClass('active');

            var hg_pop = $('.art-popups-contact .popups-content').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-contact .popups-box').css({'top': '10px'});        
                $('.art-popups-contact .popups-box').height(hg_win - 20);
            } else {
                $('.art-popups-contact .popups-box').css({'top': 'auto'});        
                $('.art-popups-contact .popups-box').height('auto');
            } 
        }
    });
    ////////////////////
    var hg_pop = $('.art-popups-get-prices .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {
        $('.art-popups-get-prices .popups-box').css({'top': '10px'});        
        $('.art-popups-get-prices .popups-box').height(hg_win - 20);
    } else {
        $('.art-popups-get-prices .popups-box').css({'top': 'auto'});        
        $('.art-popups-get-prices .popups-box').height('auto');
    } 

    var hg_pop = $('.art-popups-contact .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {
        $('.art-popups-contact .popups-box').css({'top': '10px'});        
        $('.art-popups-contact .popups-box').height(hg_win - 20);
    } else {
        $('.art-popups-contact .popups-box').css({'top': 'auto'});        
        $('.art-popups-contact .popups-box').height('auto');
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
        var hg_pop = $('.art-popups-get-prices .popups-content').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups-get-prices .popups-box').css({'top': '10px'});        
            $('.art-popups-get-prices .popups-box').height(hg_win - 20);
        } else {
            $('.art-popups-get-prices .popups-box').css({'top': 'auto'});        
            $('.art-popups-get-prices .popups-box').height('auto');
        } 

        var hg_pop = $('.art-popups-contact .popups-content').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups-contact .popups-box').css({'top': '10px'});        
            $('.art-popups-contact .popups-box').height(hg_win - 20);
        } else {
            $('.art-popups-contact .popups-box').css({'top': 'auto'});        
            $('.art-popups-contact .popups-box').height('auto');
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

            var natab = $(this).parent().parent().attr('class');

            $('.title-tab .' + natab + ' a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' .tab-content').removeClass('active');
            $('.' + natab + ' ' + clsnm).addClass('active');
        } else {
            $(this).removeClass('active');
            $('.tab-content').removeClass('active');
        }
    });

    
});
// end js tab

jQuery(document).ready(function($) {
    $('.art-real-estates-detail .post-detail-content a').click(function(e){
        e.preventDefault();
        var ac = $(this).hasClass('active');

        if (!ac) {
            $('.post-detail-content').addClass('active');
             $(this).addClass('active');
        } else {
            $('.post-detail-content').removeClass('active');
             $(this).removeClass('active');
        }
    });

    $('.product-details-content .accounts-box .btn-2').click(function(e){
        e.preventDefault();
        
        $(this).toggleClass('active');
    });
});

// js footer
// jQuery(document).ready(function($) {
//     var wh_win = $(window).width();
//     if (wh_win <= 767) {
//         $('.footer-content').hide();
//         $('.footer-box.active .footer-content').show();
//     } else {
//         $('.footer-content').show();
//     }
//     $('.footer-title').click(function(){
//         var hsc = $(this).parent().hasClass('active');

//         if (hsc) {
//             $(this).parent().removeClass('active');
//             $(this).next().slideToggle('slow');
//         } else {
//             $('.footer-box').removeClass('active');
//             $('.footer-content').hide();
//             $(this).parent().addClass('active');
//             $(this).next().slideToggle('slow');
//         }
//     });

//     $(window).resize(function(){
//         var wh_win = $(window).width();
//         if (wh_win > 767) {
//             $('.footer-content').show();
//         } else {
//             $('.footer-content').hide();
//             $('.footer-box.active .footer-content').show();
//         }
//     });
// });
// end js footer
