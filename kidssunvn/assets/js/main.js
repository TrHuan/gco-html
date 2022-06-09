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

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon icon-prev"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',

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



    $(".slick-related-blogs").slick({

        dots: true,

        infinite: true,

        speed: 500,

        slidesToShow: 3,

        slidesToScroll: 1,

        adaptiveHeight: true,

        prevArrow: '',

        nextArrow: '',

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

                    slidesToShow: 2,

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

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon icon-prev"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',

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



    $(".slick-brands").slick({

        dots: false,

        infinite: true,

        speed: 500,

        slidesToShow: 4,

        slidesToScroll: 1,

        adaptiveHeight: true,

        arrow: false,

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon icon-prev"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',

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



    $(".slick-introduces").slick({

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



    // $(".slick-products").slick({

    //     dots: false,

    //     infinite: true,

    //     speed: 500,

    //     slidesToShow: 4,

    //     slidesToScroll: 1,

    //     adaptiveHeight: true,

    //     arrow: true,

    //     prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon icon-prev"></i></button>',

    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',

    //     responsive: [

    //         {

    //             breakpoint: 1199,

    //             settings: {

    //                 slidesToShow: 3,

    //             }

    //         },

    //         {

    //             breakpoint: 991,

    //             settings: {

    //                 slidesToShow: 3,

    //             }

    //         },

    //         {

    //             breakpoint: 767,

    //             settings: {

    //                 slidesToShow: 2,

    //             }

    //         },

    //         {

    //             breakpoint: 575,

    //             settings: {

    //                 slidesToShow: 1,

    //             }

    //         }

    //     ]

    // });

});



jQuery(document).ready(function($) {

    // $('#menu .menu-content').click(function(e){

    //     e.stopPropagation();

    // });

    // $('#menuToggle .menu-title, #menuToggle .menu-close, #menu').click(function(){

    //     $('#menuToggle').toggleClass('active');

    // });$('.menu-box').height('100%');



    $('.megamenu .sub-title').click(function(event){

        event.preventDefault();

        $(this).next().slideToggle('slow');

    });



    $('.images-grid .banner-box').click(function(){

        $('.popup-images').toggleClass('active');

        var srcimg = $(this).children('.banner-image').children().attr('src');

        $('.popup-banner-image img').attr('src', srcimg);

    });

    $('.images-grid .banner-box .banner-link').click(function(event){

        event.preventDefault();

    });

    $('.popup').click(function(){

        $(this).removeClass('active');

    });

     $('.popup-box').click(function(e){

        e.stopPropagation();

    });



    $(window).on("scroll",function() {

        if ($(this).scrollTop() > 41 ) {

            $('.main-sticky').addClass('active');

        } else {

            $('.main-sticky').removeClass('active');

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



    $('.categories-title').click(function(){

        var hsac = $(this).parent().hasClass('active');

        if (!hsac) {

            $(this).parent().parent().children().removeClass('active');

            $(this).parent().addClass('active');

        }

    });

    $('.login-registration .title-popup').click(function(e){
        e.preventDefault();

        var hslgi = $(this).hasClass('login');
        var hsfp = $(this).hasClass('forgot-password');

        var hw = $(window).height();

        $('.popups-content > div').removeClass('active');

        if (hslgi) {
            var hlg = $('.popup-content-login').height();
            var hpcs = parseInt(hlg) + 60;

            if (hpcs > hw) {
                $('.popups-box').css({'height': hw - 30, 'top': '0'});
            } else {
                $('.popups-box').css({'height': 'auto', 'top': 'auto'});
            }

            $('.popup-content-login').addClass('active');
        } else if (hsfp) {
            var hlg = $('.popup-content-forgot-password').height();
            var hpcs = parseInt(hlg) + 60;

            if (hpcs > hw) {
                $('.popups-box').css({'height': hw - 30, 'top': '0'});
            } else {
                $('.popups-box').css({'height': 'auto', 'top': 'auto'});
            }

            $('.popup-content-forgot-password').addClass('active');
        } else {
            var hlg = $('.popup-content-registration').height();
            var hpcs = parseInt(hlg) + 60;

            if (hpcs > hw) {
                $('.popups-box').css({'height': hw - 30, 'top': '0'});
            } else {
                $('.popups-box').css({'height': 'auto', 'top': 'auto'});
            }

            $('.popup-content-registration').addClass('active');
        }

        $('.art-popups-login-registration').addClass('active');
    });

    $('.popups-box').click(function(){
        $('.art-popups').removeClass('active');
    });

    $('.popups-content').click(function(e){
        e.stopPropagation();
    });

    $('.title-accounts .tab-title a').click(function(e){
         e.preventDefault();

         var hac = $(this).hasClass('active');

         if (!hac) {
            var clnm = $(this).attr('class').replace('-title','');
            var clsnm = clnm + '-box';
            $('.accounts-content > div').removeClass('active');
            $('.title-accounts .tab-title a').removeClass('active');
            $('.' + clsnm).addClass('active');
            $(this).addClass('active');
         }
    });

    $('.login-registration .title-sub').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('.title-sidebars').click(function(){
        var wd = $(window).width();
        if (wd < 992) {
            var hsc = $(this).hasClass('active');
            if (hsc) {
                $(this).removeClass('active');
                $(this).next().slideUp('slow');
            } else {
                $('.title-sidebars').removeClass('active');
                $(this).addClass('active');
                $('.sidebars-content').slideUp('slow');
                $(this).next().slideDown('slow');
            }
        }        
    });

    $('.products-table .code-orders').click(function(e){
        e.preventDefault();

        var hw = $(window).height();
        var hlg = $('.popup-content').height();
        var hpcs = parseInt(hlg) + 60;

        if (hpcs > hw) {
            $('.popups-box').css({'height': hw - 30, 'top': '0'});
        } else {
            $('.popups-box').css({'height': 'auto', 'top': 'auto'});
        }

        $('.art-popups-code-orders').addClass('active');
    });

    $(window).resize(function(){
        var hw = $(window).height();
        var hlg = $('.popups-content > div.active').height();
        var hpcs = parseInt(hlg) + 60;

        if (hpcs > hw) {
            $('.popups-box').css({'height': hw - 30, 'top': '0'});
        } else {
            $('.popups-box').css({'height': 'auto', 'top': 'auto'});
        }

        var wd = $(window).width();
        if (wd < 992) {
            $('.sidebars-content').hide();
            $('.title-sidebars').removeClass('active');
        } else {
            $('.sidebars-content').show();
        }
    });

});