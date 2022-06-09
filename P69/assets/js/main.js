jQuery(document).ready(function($) {

    var hbt = $('header .header-main').outerHeight();
    var hbtp = $('header .header-top').outerHeight();
    var pdhd = parseInt(hbt) + parseInt(hbtp);
    $('.headers').css({'padding-top': pdhd});

    $(window).on("scroll",function() {
        var hbf = $('header').outerHeight();
        var hbt = $('header .header-main').outerHeight();
        var hbtp = $('header .header-top').outerHeight();

        var hb = hbf - hbt;

        // if (hbt > 0) {
        //     if ($(this).scrollTop() > hb ) {
        //         $('header').addClass('active');
        //     } else {
        //         $('header').removeClass('active');
        //     }
        // } else {
        //     if ($(this).scrollTop() > 0 ) {
        //         $('header').addClass('active');
        //     } else {
        //         $('header').removeClass('active');
        //     }
        // }

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

    $('.megamenu-desktop .megamenu-content .item-sub')
        .mouseenter(function() {
            $(this).addClass('active');
        })
        .mouseleave(function() {
            $(this).removeClass('active');
    });

    $('.mobile-content .item-sub > a').click(function(e){
        e.preventDefault();
        var cac = $(this).hasClass('active');
        
        var cl3 = $(this).parent().attr('class');
        var hcs = $(this).parent().hasClass('item');
        if (hcs) {
            var cl = cl3.split("item item-sub ").join(".");
        } else {
            var cl = cl3.split("item-sub ").join(".");
        }

        var clsb = '.mobile-content .item-sub' + cl;

        if (!cac) {
            $(clsb + ' > a').removeClass('active');
            $(this).addClass('active');
            $(clsb + ' > .sub-menu').slideUp('slow');
            $(this).next().slideDown('slow');
        } else {
            $(this).removeClass('active');
            $(this).next().slideUp('slow');
        }
        
    });
    // $('.mobile-content .megamenu-content > .item-sub > .sub-menu').click(function(){
    //     $(this).prev().removeClass('active');
    //     $(this).slideToggle('slow');
    // });
    $('.mobile-content .sub-menu .sub-content').click(function(e){
        e.stopPropagation();
    });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');
        }        

        var hbt = $('header .header-main').outerHeight();
        var hbtp = $('header .header-top').outerHeight();
        var pdhd = parseInt(hbt) + parseInt(hbtp);
        $('.headers').css({'padding-top': pdhd});
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

    // $(".slick-testimonials").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });

    // $(".slick-brands").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-arrow-circle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-arrow-circle-right icon"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         }
    //     ]
    // });

    $(".slick-products").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 4,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-arrow-circle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-arrow-circle-right icon"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesPerRow: 1,
                }
            }
        ]
    });

    $(".slick-projects").slick({
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

    $(".slick-products-featured").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-arrow-circle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-arrow-circle-right icon"></i></button>',
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

    $(".slick-products-same-kind").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-arrow-circle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-arrow-circle-right icon"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesPerRow: 1,
                }
            }
        ]
    });

    // $('.slick-products-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slick-products-nav'
    // });
    // $('.slick-products-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slick-products-for',
    //     dots: false,
    //     centerMode: true,
    //     variableWidth: true,
    //     focusOnSelect: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fas fa-arrow-circle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fas fa-arrow-circle-right icon"></i></button>',
    // });
});

jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();
        var pop_odr = $(this).hasClass('btn-popup-order');

        if (pop_odr) {
            var hg_pop = $('.art-popups-order').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-order').css({'top': '10px'});
            }
            $('.art-popups-order').addClass('active');
        }
        
    });
    ////////////////////
    var hg_pop = $('.art-popups .popup-content').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {
        $('.art-popups .popups-box').css({'top': '10px'});
    } else {
        $('.art-popups .popups-box').css({'top': 'auto'});
    }
    ////////////////////
    $('.art-popups').click(function(e){
        $(this).removeClass('active');
    });
    ////////////////////
    $('.art-popups .popup-content').click(function(e){
        e.stopPropagation();
    });
    // end popups

    $(window).resize(function(){
        // popups
        var hg_pop = $('.art-popups .popup-content').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups .popup-content').css({'top': '10px'});
        } else {
            $('.art-popups .popup-content').css({'top': 'auto'});
        }
        // end popups
    });
});

jQuery(document).ready(function($) {
    $('.title-sidebar .title').click(function(){
        var wh_win = $(window).width();
        if (wh_win < 1200) {            
            var hsac = $(this).parent().hasClass('active');
            if (!hsac) {
                $('.title-sidebar').removeClass('active');
                $(this).parent().addClass('active');
                $('.sidebar-content').slideUp('slow');
                $(this).parent().next().slideDown('slow');
            } else {
                $(this).parent().removeClass('active');
                $(this).parent().next().slideUp('slow');
            }
        }
    });

    var wh_win = $(window).width();
    if (wh_win >= 1200) {
        var hsd = $('.main-margin-bottom .art-sidebars').outerHeight();
        var hcnt = $('.main-margin-bottom .main-container').outerHeight();
        var hcn = hcnt - 90;
        if (hsd >= hcn) {
            var top = hsd - hcn;

            $('.main-margin-bottom .main-container .art-margin-top').css({'margin-top': top});
        }
    } else {
        $('.main-margin-bottom .main-container .art-margin-top').css({'margin-top': '45px'});
    }

    $('.safe-content .tab-content .content').hide();
    $('.safe-content .tab-content.active .content').show();
    $('.safe-content .tab-content .tab-title').click(function(){
        var clac = $(this).parent().hasClass('active');
        if (clac) {
            $(this).parent().removeClass('active');
            $(this).next().slideUp('slow');
        }
        else {
            $('.safe-content .tab-content').removeClass('active');
            $('.safe-content .tab-content .content').slideUp('slow');
            $(this).parent().addClass('active');
            $(this).next().slideDown('slow');
        }
    });

    $('.factories-box .project-box').click(function(e){        
        e.preventDefault();

        var html = $(this).html();
        $('.art-popups-factories .popup-content').children().remove();
        $('.art-popups-factories .popup-content').append('<div class="project-box">' + html + '</div>');

        var hg_pop = $('.art-popups .popup-content').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups .popups-box').css({'top': '10px'});
        } else {
            $('.art-popups .popups-box').css({'top': 'auto'});
        }

        $('.art-popups-factories').addClass('active');
    });

    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win >= 1200) {
            var hsd = $('.main-margin-bottom .art-sidebars').outerHeight();
            var hcnt = $('.main-margin-bottom .main-container').outerHeight();
            var hcn = hcnt - 90;
            if (hsd >= hcn) {
                var top = hsd - hcn;

                $('.main-margin-bottom .main-container .art-margin-top').css({'margin-top': top});
            }
        } else {
            $('.main-margin-bottom .main-container .art-margin-top').css({'margin-top': '45px'});
        }
    });
});