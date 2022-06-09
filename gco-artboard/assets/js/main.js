jQuery(document).ready(function($) {
    $(window).on("scroll",function() {
        var hb = $('.headers').height();
        if ($(this).scrollTop() > hb ) {
            $('.header-stick').addClass('active');
            
            $('.art-tab-main-service').addClass('active');
        } else {
            $('.header-stick').removeClass('active');
            
            $('.art-tab-main-service').removeClass('active');
        }

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');

            $('.tab-main-service-box a.first').addClass('active');
        }
    });

    var pos = $(window).scrollTop(); 
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();
        if (windowpos > pos) {
            console.log('scrollDown');
            $(".header-stick .header-main").slideUp("slow");
        } else {
            console.log('scrollUp');
            $(".header-stick .header-main").slideDown("slow");
        }
        pos = windowpos;
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });

    $('.mobile-content .item-sub > a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('active');
    });
     $('.mobile-content .sub-menu').click(function(){
        $(this).prev().removeClass('active');
        $(this).slideToggle('slow');
    });
    $('.mobile-content .sub-menu .sub-content').click(function(e){
        e.stopPropagation();
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

    $(".slick-testimonials").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '',
        // prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        // nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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

     $(".slick-teams").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '',
        // prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
        // nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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

    // $(".slick-factory-images").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
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
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
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

    // $(".slick-sidebar-products").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',
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
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
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
    //     focusOnSelect: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
    // });

    // $(".slick-products").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     // rows: 1,
    //     // slidesPerRow: 4,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
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

    // $(".slick-blogs").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     // rows: 1,
    //     // slidesPerRow: 4,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
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

});

jQuery(document).ready(function($) {

    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();

        // var hg_pop = $('.art-popups .popups-content').height();
        // var hg_win = $(window).height();
        // if (hg_pop > hg_win) {
        //     $('.art-popups .popups-box').css({'top': '10px'});        
        //     $('.art-popups .popups-box').height(hg_win - 20);
        // } else {
        //     $('.art-popups .popups-box').css({'top': 'auto'});        
        //     $('.art-popups .popups-box').height('auto');
        // } 

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

        var adlg = $(this).hasClass('btn-popups-seo-now');
        if (adlg) {
            $('.art-popups-seo-now').addClass('active');

            var hg_pop = $('.art-popups-seo-now .popups-content').height();
            var hg_win = $(window).height();
            if (hg_pop > hg_win) {
                $('.art-popups-seo-now .popups-box').css({'top': '10px'});        
                $('.art-popups-seo-now .popups-box').height(hg_win);
            } else {
                $('.art-popups-seo-now .popups-box').css({'top': 'auto'});        
                $('.art-popups-seo-now .popups-box').height('auto');
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

    var hg_pop_seo_now = $('.art-popups-seo-now .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop_seo_now > hg_win) {
        $('.art-popups-seo-now .popups-box').css({'top': '10px'});        
        $('.art-popups-seo-now .popups-box').height(hg_win);
    } else {
        $('.art-popups-seo-now .popups-box').css({'top': 'auto'});        
        $('.art-popups-seo-now .popups-box').height('auto');
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
        
        var hg_pop_seo_now = $('.art-popups-seo-now .popups-content').height();
        var hg_win = $(window).height();
        if (hg_pop_seo_now > hg_win) {
            $('.art-popups-seo-now .popups-box').css({'top': '10px'});        
            $('.art-popups-seo-now .popups-box').height(hg_win);
        } else {
            $('.art-popups-seo-now .popups-box').css({'top': 'auto'});        
            $('.art-popups-seo-now .popups-box').height('auto');
        } 
        // end popups
    });

    var wh_win = $(window).width();
    if (wh_win > 991) {
        $('.sidebar-box').removeClass('active');
    } else {
        $('.sidebar-box').removeClass('active');
    }
    $('.title-sidebar').click(function(){
        var wh_win = $(window).width();

        if (wh_win <= 991) {
            var clac = $(this).parent().parent().hasClass('active');
            if (!clac) {
                $('.sidebar-box').removeClass('active');
                $(this).parent().parent().addClass('active');
            } else {
                $(this).parent().parent().removeClass('active');
            }
        }
    });
    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win > 991) {
            $('.sidebar-box').removeClass('active');
        } else {
            $('.sidebar-box').removeClass('active');
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

            var natab = $(this).parent().parent().parent().attr('class');

            $('.' + natab + ' .title-tab a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' .tab-content').removeClass('active');
            $('.' + natab + ' ' + clsnm).addClass('active');
        } else {
            $(this).removeClass('active');
            $('.tab-content').removeClass('active');
        }
    });

    var wh_win = $(window).width();
    if (wh_win <= 767) {
        $('.footer-content').hide();
        $('.footer-box.active .footer-content').show();

    } else {
        $('.footer-content').show();
    }
    $('.footer-title').click(function(){
        var hsc = $(this).parent().hasClass('active');

        if (hsc) {
            $(this).parent().removeClass('active');
            $(this).next().slideToggle('slow');
        } else {
            $('.footer-box').removeClass('active');
            $('.footer-content').hide();
            $(this).parent().addClass('active');
            $(this).next().slideToggle('slow');
        }
    });

    if (wh_win > 991) {
        var hg_kn = $('.header-main').outerHeight(true);
        var hg_txt = $('.art-banners-text').outerHeight(true);
        var hg_win = $(window).height();
        var hg_img =  hg_win - hg_kn - hg_txt;
        $('.art-banners-image').outerHeight(hg_img);
        $('.art-banners-image').css({'overflow': 'hidden'});
    }

    $('.sidebars-box .tab-main-service-box a').click(function(e){
        // e.preventDefault();
        $(this).next().slideToggle('slow');
    });

    // .outerHeight();
    $(window).on("scroll",function() {
        var hb2 = $('.headers').height();
        var hgkn = $('.art-seo-knowledge-detail').outerHeight(true);
        var sdbhgkn = $('.art-sidebars-knowledge-detail').outerHeight(true);
        var fxtp = parseInt(hb2) + parseInt(hgkn) - 110 - sdbhgkn;

        if ($(this).scrollTop() >= fxtp ) {
            $('.art-sidebars-knowledge-detail').addClass('active');
        } else {
            $('.art-sidebars-knowledge-detail').removeClass('active');
        }
    });
});

jQuery(document).ready(function($) {

    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win > 767) {
            $('.footer-content').show();
        } else {
            $('.footer-content').hide();
            $('.footer-box.active .footer-content').show();
        }

        if (wh_win > 991) {
            var hg_kn = $('.header-main').outerHeight(true);
            var hg_txt = $('.art-banners-text').outerHeight(true);
            var hg_win = $(window).height();
            var hg_img =  hg_win - hg_kn - hg_txt;
            $('.art-banners-image').outerHeight(hg_img);
            $('.art-banners-image').css({'overflow': 'hidden'});
        } else {
             $('.art-banners-image').css({'height': 'auto'});
        }
    });
});

$(document).on('click', '.art-tab-main-service a[href^="#"]', function (e) {
    e.preventDefault();    

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500); 

    $('.tab-main-service-box a').removeClass('active');
    $(this).addClass('active');
});