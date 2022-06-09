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



    // var pos = $(window).scrollTop(); 

    // $(window).scroll(function(){

    //     var windowpos = $(window).scrollTop();

    //     if (windowpos > pos) {

    //         console.log('scrollDown');

    //         $(".header-stick .header-main").slideUp("slow");

    //     } else {

    //         console.log('scrollUp');

    //         $(".header-stick .header-main").slideDown("slow");

    //     }

    //     pos = windowpos;

    // });



    $('.back-to-top').click(function(){

        $('html, body').animate({scrollTop:0}, 400);

    });

    

    $('.megamenu-mobile-content .item-sub > a span').click(function(e){

        e.preventDefault();

        // $(this).next().slideToggle('slow');

        $(this).parent().parent().toggleClass('active');

    });

    $('.megamenu-mobile-content .menu-sub').click(function(){

        $(this).parent().removeClass('active');

        // $(this).slideToggle('slow');

    });

    $('.megamenu-mobile-content .menu-sub .menu-sub-content').click(function(e){

        e.stopPropagation();

    });



    $(window).resize(function(){

        var w_window = $(window).width();

        if (w_window >= 992) {

            $('.menu-box').height('100%');

        }

    });



    $('.searchs-title .btn').click(function(){

        $('.searchs-content').addClass('active');

    });

    $('.searchs-content .btn-close').click(function(){

        $('.searchs-content').removeClass('active');

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



    $(".slick-categories").slick({

        dots: false,

        infinite: true,

        speed: 500,

        slidesToShow: 5,

        slidesToScroll: 1,

        adaptiveHeight: true,

        // prevArrow: '',

        // nextArrow: '',

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 5,

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

                    slidesToShow: 1,

                }

            }

        ]

    });



    $(".slick-products").slick({

        dots: false,

        infinite: true,

        speed: 500,

        slidesToShow: 2,

        slidesToScroll: 1,

        adaptiveHeight: true,

        // prevArrow: '',

        // nextArrow: '',

        arrows: true,

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',

        // appendArrows: '.button-container',

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



    $(".slick-categories-televisions").slick({

        dots: false,

        infinite: true,

        speed: 500,

        slidesToShow: 4,

        slidesToScroll: 1,

        adaptiveHeight: true,

        // prevArrow: '',

        // nextArrow: '',

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',

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

        slidesToShow: 5,

        slidesToScroll: 1,

        vertical: true,

        // centerMode: true,

        asNavFor: '.slick-products-for',

        dots: false,

        focusOnSelect: true,

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-up icon"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-down icon"></i></button>',

    });

    

    $(".slick-post-gallery").slick({

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



});



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



    $('.title-tab a').click(function(e){

        e.preventDefault();



        var ac = $(this).hasClass('active');



        if (!ac) {

            var clnm = $(this).attr('class').replace('tab-title','');

            var clsnm = '.tab-content' + clnm;



            var natab = $(this).parent().parent().attr('class');



            $('.' + natab + ' a').removeClass('active');

            $(this).addClass('active');

            $('.' + natab + ' .tab-content').removeClass('active');

            $('.' + natab + ' ' + clsnm).addClass('active');

        }

    });



    var wh_win = $(window).width();

    if (wh_win >= 992) {

        



        $('.megamenu-desktop .megamenu-content > li').mouseenter(function() {

            var hb3 = $('.header-main').height();

            var h_menusb_cont = $('.headers .menu-sub-content').outerHeight();

            var h_menusub = parseInt(hb3) + parseInt(h_menusb_cont) - 95;

            var hg_win_2 = $(window).height();

            if (hg_win_2 < h_menusub) {

                 var h_menusub = hg_win_2 - hb3;

                 $('.menu-sub-groups-box').height(h_menusub);

            } else {
                $('.menu-sub-groups-box').height('auto');
            }

            var itsub = $(this).hasClass('item-sub');

            if (itsub) {

                var cl = $(this).attr('class').replace('item item-sub item','');
                var clsc2 = $(this).hasClass('active');

                if (!clsc2) {
                    $('.menu-sub-groups-box .menu-sub').removeClass('active');
                    $('.menu-sub-groups-box .menu' + cl).addClass('active');

                    $('.menu-sub-groups-box .menu-sub .menu-sub-box > .content, .menu-sub-groups-box .menu-sub .menu-sub-images > .item, .menu-sub-groups-box .col-column .menu-sub-box > .content').removeClass('active');
                    
                    $('.menu-sub-groups-box .menu' + cl + ' .menu-sub-box > .content').addClass("active").delay(500).queue(function(next){
                        $('.menu-sub-groups-box .menu' + cl + ' .menu-sub-images > .item-1').addClass("active").delay(500).queue(function(next){
                            $('.menu-sub-groups-box .menu' + cl + ' .menu-sub-images > .item-2').addClass('active');
                            next();
                        });
                        next();
                    });

                    $('.menu-sub-groups-box .menu' + cl + ' .col-column-1 .menu-sub-box > .content').addClass("active").delay(500).queue(function(next){
                        $('.menu-sub-groups-box .menu' + cl + ' .col-column-2 .menu-sub-box > .content').addClass("active").delay(500).queue(function(next){
                            $('.menu-sub-groups-box .menu' + cl + ' .col-column-3 .menu-sub-box > .content').addClass("active").delay(500).queue(function(next){
                                $('.menu-sub-groups-box .menu' + cl + ' .col-column-4 .menu-sub-box > .content').addClass("active").delay(500).queue(function(next){
                                    $('.menu-sub-groups-box .menu' + cl + ' .col-column-5 .menu-sub-box > .content').addClass('active');
                                    next();
                                });
                                next();
                            });
                            next();
                        });
                        next();
                    });
                }

                $('.headers').addClass('active');
                
                $('.megamenu-content li').removeClass('active');
                
                $(this).addClass('active');

                $('.menu-sub-groups-box').addClass('active');

            } else {

                $('.headers').removeClass('active');
            
                $('.megamenu-content li').removeClass('active');

                $('.menu-sub-groups-box .menu-sub').removeClass('active');

                $('.menu-sub-groups-box .menu-sub .menu-sub-box > .content, .menu-sub-groups-box .menu-sub .menu-sub-images > .item, .menu-sub-groups-box .col-column .menu-sub-box > .content').removeClass('active');

                $('.menu-sub-groups-box').css('height', '0');

                $('.menu-sub-groups-box').removeClass('active');
            }

        });
        $('.header-stick').mouseleave(function() {

            $('.headers').removeClass('active');
            
            $('.megamenu-content li').removeClass('active');

            $('.menu-sub-groups-box .menu-sub').removeClass('active');

            $('.menu-sub-groups-box .menu-sub .menu-sub-box > .content, .menu-sub-groups-box .menu-sub .menu-sub-images > .item, .menu-sub-groups-box .col-column .menu-sub-box > .content').removeClass('active');

            $('.menu-sub-groups-box').css('height', '0');

            $('.menu-sub-groups-box').removeClass('active');
        });
        $('.logos-content').mouseenter(function() {

            $('.headers').removeClass('active');
            
            $('.megamenu-content li').removeClass('active');

            $('.menu-sub-groups-box .menu-sub').removeClass('active');

            $('.menu-sub-groups-box .menu-sub .menu-sub-box > .content, .menu-sub-groups-box .menu-sub .menu-sub-images > .item, .menu-sub-groups-box .col-column .menu-sub-box > .content').removeClass('active');

            $('.menu-sub-groups-box').css('height', '0');

            $('.menu-sub-groups-box').removeClass('active');
        });

    }



    $('.image .light-zoom').lightzoom({

        zoomPower   : 3,

        glassSize   : 180,

    });



    $('.art-perfectly-it .banner-image .btn').click(function(e){
        e.preventDefault();

        var btn_wa = $(this).hasClass('btn-water');
        var btn_ic = $(this).hasClass('btn-ice');

        if (btn_wa) {
            var vd_wa = $('.art-perfectly-it .banner-image video').hasClass('water');
            if (!vd_wa) {
                var vd_ic = $('.art-perfectly-it .banner-image video').hasClass('ice');
                if (!vd_ic) {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water"><source src="'+ water +'" type="video/mp4"></video>' );
                } else {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water ice"><source src="'+ water_4 +'" type="video/mp4"></video>' );
                }
            } else {
                $( ".art-perfectly-it .banner-image .image video" ).remove()
                $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water"><source src="'+ water +'" type="video/mp4"></video>' );
            }
        }

        if (btn_ic) {
            var vd_ic = $('.art-perfectly-it .banner-image video').hasClass('ice');
            if (!vd_ic) {                
                var vd_wa = $('.art-perfectly-it .banner-image video').hasClass('water');
                if (!vd_wa) {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="ice"><source src="'+ water_3 +'" type="video/mp4"></video>' );
                } else {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water ice"><source src="'+ water_2 +'" type="video/mp4"></video>' );
                }
            } else {
                $( ".art-perfectly-it .banner-image .image video" ).remove()
                $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="ice"><source src="'+ water_3 +'" type="video/mp4"></video>' );
            }
        }
    });



    $('.art-super-time .banner-image .btn').click(function(e){
        e.preventDefault();

        $( ".art-super-time .banner-image .image video" ).remove()
        $( ".art-super-time .banner-image .image" ).append( '<video autoplay class=""><source src="'+ rpm_2 +'" type="video/mp4"></video>' );

        setTimeout(function(){
            $( ".art-super-time .banner-image .image video" ).remove();
            $( ".art-super-time .banner-image .image" ).append( '<video autoplay loop class=""><source src="'+ rpm +'" type="video/mp4"></video>' );
        }, 15000);
    });



     $('.product-standout li').mouseover(function() {

        var snowflakes = $(this).hasClass('snowflakes');

        var fresh_choice = $(this).hasClass('fresh-choice');

        var compressor = $(this).hasClass('compressor');



        var data_name = $(this).attr('data-name');

        $(this).parent().next().append('<span>'+ data_name + '</span>');

    }).mouseout(function() {

        $('.product-standout label span').remove();

    });



    $('.art-products-tv .product-box').mouseover(function() {

        var data_number = $(this).attr('data-number');



        for (var i = 1; i < data_number; i++) {

            $('.art-products-tv .product-' + i).addClass('active');

        }



    }).mouseout(function() {

        $('.art-products-tv .product-box').removeClass('active');

    });



    $('.filters-box .filtercta').click(function() {

        $('.filter-wrap-2').slideDown('slow');

    });

    $('.filter-wrap-2 .close-wrap').click(function() {

        $('.filter-wrap-2').slideUp('slow');

    });

    $('.filter-wrap-2 .wrap-box a').click(function(e) {

        e.preventDefault();

        $(this).toggleClass('active');

    });



    var prdi = $('.slick-products-for').height();

    var prdi2 = $('.slick-products-nav').height();

    $('.product-detail-images .detail-images .content').height(prdi);



    $('.art-product-detail .gallery-box span').click(function() {

        $('.product-detail-images').addClass('active');

    });

    $('.close-gallery').click(function() {

        $('.product-detail-images').removeClass('active');

    });



    $('.contact-content .btn-next').click(function(e) {

        e.preventDefault();

        $('.contacts-form .form-content').addClass('active');

    });

    $('.contact-content .btn-previous').click(function(e) {

        e.preventDefault();

        $('.contacts-form .form-content').removeClass('active');

        $('.fr-error').css('display', 'none');

    });



    $('.contacts-box.box-2 li').click(function() {

        $(this).addClass('active');

        $('.contacts-box.box-2 li').hide();

        $(this).show();

        $('.contacts-box.box-2 label').addClass('active');

    });



    $('.contacts-box.box-2 label').click(function() {

        $('.contacts-box.box-2 li').removeClass('active');

        $('.contacts-box.box-2 li').show();

        $('.contacts-box.box-2 label').removeClass('active');

    });

    $('.art-tab-main-service label').click(function() {
        var wh_win2 = $(window).width();
        
        if (wh_win2 < 768) {

            var lbac = $(this).hasClass('active');

            if (!lbac) {
                $(this).addClass('active');
                $('.art-tab-main-service .nav').slideDown('slow');
            } else {
                $(this).removeClass('active');
                $('.art-tab-main-service .nav').slideUp('slow');
            }    
        }

    });

    $('.label2-box li, .label-box li').click(function() {
        var hscl = $(this).hasClass('active');
        if (!hscl) {
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
        }
    });

});



jQuery(document).ready(function($) {

    var wh_win2 = $(window).width();



    $(window).resize(function(){

        var wh_win = $(window).width();



        if (wh_win2 != wh_win && wh_win >= 992) {

            var hb3 = $('.header-main').height();

            var h_menusb_cont = $('.headers .menu-sub-content').height();

            var h_menusub = parseInt(hb3) + parseInt(h_menusb_cont);

            var hg_win_2 = $(window).height();

            if (hg_win_2 < h_menusub) {

                 var h_menusub = hg_win_2 - hb3;

                 $('.menu-sub').height(h_menusub);

            }



            wh_win2 = wh_win;

        }



        if (wh_win >= 768) {

            $('.art-tab-main-service .nav').css({'display': 'flex'});

        } else {

            $('.art-tab-main-service .nav').css({'display': 'none'});


           

        }

         

    });

});



$(document).on('click', '.art-about-banner .banner-content ul a[href^="#"]', function (e) {

    e.preventDefault();    



    $('html, body').animate({

        scrollTop: $($.attr(this, 'href')).offset().top

    }, 500);

});


jQuery(document).ready(function($) {

    $('.supports-box .fillter-categories-box li a').click(function(e) {
        e.preventDefault();

        var hsac = $(this).hasClass('active');

        if (hsac) {
            $('.supports-box .fillter-categories-box li a').removeClass('active');
            $('.supports-select-box').removeClass('active');
        } else {
            var clnm = $(this).attr('class');
            $('.supports-box .fillter-categories-box li a').removeClass('active');
            $('.supports-select-box').removeClass('active');
            $(this).addClass('active');
            $('.supports-select-box.' + clnm).addClass('active');
        }
    });

    var hgs = $(window).height();
    var hgcl = $('.tutorials-box .close-box').outerHeight();
    var hgtt = $('.tutorials-box .title-box').outerHeight();
    var hgft = $('.tutorials-footer').outerHeight();

    var hgcon = hgs - hgcl - hgtt - hgft;
    $('.tutorials-content .content').outerHeight(hgcon);

    $(window).resize(function(){
        var hgs = $(window).height();
        var hgcl = $('.tutorials-box .close-box').outerHeight();
        var hgtt = $('.tutorials-box .title-box').outerHeight();
        var hgft = $('.tutorials-footer').outerHeight();

        var hgcon = hgs - hgcl - hgtt - hgft;
        $('.tutorials-content .content').outerHeight(hgcon);
    });

    $('.contact-content.box-2 .btn').click(function(e){
        e.preventDefault();

        var hsacs = $(this).hasClass('btn-tutorials-tv');

        var jsha = $(this).hasClass('btn-home-appliance');

        if (hsacs) {
            $('.art-tutorials-tv').addClass('active');
        }

        if (jsha) {
            $('.art-home-appliance').addClass('active');
        }
    });

    $('.tutorials-box .close-box span, .tutorials-footer .btn-back').click(function(){
        $('.art-tutorials').removeClass('active');
        $('.tutorials-content').removeClass('active');
        $('.tutorials-footer').removeClass('active');
        $('.tutorials-content .content-2 li').removeClass('active');
        $('.tutorial-menu-sub').slideUp('slow');
    });

    $('.art-tutorials-tv .tutorials-content a, .art-home-appliance .tutorials-content a').click(function(e){

        $('.tutorials-content').addClass('active');
        $('.tutorials-footer').addClass('active');

        var hgs = $(window).height();
        var hgcl = $('.tutorials-box .close-box').outerHeight();
        var hgtt = $('.tutorials-box .title-box').outerHeight();
        var hgft = $('.tutorials-footer').outerHeight();

        var hgcon = hgs - hgcl - hgtt - hgft;
        $('.tutorials-content .content').outerHeight(hgcon);
        
    });

    $('.tutorials-footer .footer li .btn-come-back').click(function(){
        $('.tutorials-content').removeClass('active');
        $('.tutorials-footer').removeClass('active');
    });

    $('.tutorials-content .content-2 > ul > li > span').click(function(){
        var suac = $(this).parent().hasClass('active');

        if (!suac) {
            $('.tutorials-content .content-2 li').removeClass('active');
            $(this).parent().addClass('active');
            $('.tutorial-menu-sub').slideUp('slow');
            $(this).next().slideDown('slow');
        } else {
            $(this).parent().removeClass('active');
            $(this).next().slideUp('slow');
        }
    });

    $('.tutorial-menu-sub li span').click(function(){
        var suac = $(this).parent().hasClass('active');

        if (!suac) {
            $('.tutorials-content .content-2 .tutorial-menu-sub li').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.art-tutorials-tv .tutorials-content .content-2 .tutorial-menu-sub span').click(function(){
        var wd = $(window).width();

        if (wd < 768) {
            $('.art-tutorials-tv .tutorials-content .content-image').addClass('active');
        }
    });
    $('.art-home-appliance .tutorials-content .content-2 .tutorial-menu-sub span').click(function(){
        var wd = $(window).width();

        if (wd < 768) {
            $('.art-home-appliance .tutorials-content .content-image').addClass('active');
        }
    });
    $('.tutorials-content .content-image').click(function(){
        $(this).removeClass('active');
    });
    $('.tutorials-content .content-image .image').click(function(e){
        e.stopPropagation();
    });

    // popups

    $('.btn-popup').click(function(e){
        e.preventDefault();

        var adat = $(this).hasClass('btn-popup-mail');

        if (adat) {
            $('.art-popup-mail').addClass('active');

            var hg_pop = $('.art-popup-mail .popups-content').height();
            var hg_win = $(window).height();

            if (hg_pop > hg_win) {
                $('.art-popup-mail .popups-box').css({'top': '10px'}); 
                $('.art-popup-mail .popups-box').height(hg_win - 20);
            } else {
                $('.art-popup-mail .popups-box').css({'top': 'auto'});  
                $('.art-popup-mail .popups-box').height('auto');
            } 
        }
    });

    ////////////////////

    // popups
    var hg_pop = $('.art-popup-mail .popups-content').height();
    var hg_win = $(window).height();

    if (hg_pop > hg_win) {
        $('.art-popup-mail .popups-box').css({'top': '10px'});  
        $('.art-popup-mail .popups-box').height(hg_win - 20);
    } else {
        $('.art-popup-mail .popups-box').css({'top': 'auto'});        
        $('.art-popup-mail .popups-box').height('auto');
    } 
    // end popups

    ////////////////////

    $(window).resize(function(){

        // popups
        var hg_pop = $('.art-popup-mail .popups-content').height();
        var hg_win = $(window).height();

        if (hg_pop > hg_win) {
            $('.art-popup-mail .popups-box').css({'top': '10px'});  
            $('.art-popup-mail .popups-box').height(hg_win - 20);
        } else {
            $('.art-popup-mail .popups-box').css({'top': 'auto'});        
            $('.art-popup-mail .popups-box').height('auto');
        } 
        // end popups

    });

    $('.contacts-box.box-2 li .content a').click(function(e){
        e.preventDefault();
        $(this).next().toggle();
    });

    $(document).on('click', '.support-detail .support-content .nav a[href^="#"]', function (e) {
        e.preventDefault();    

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500); 
    });

    $('.faqs-detail .contents-box li label').click(function(){
        // var ac = $(this).hasClass('active');

        $(this).toggleClass('active');

        $(this).next().slideToggle('slow');
    });

    $('.faqs-detail .faqs-nav a').click(function(e){
        e.preventDefault();

        var cls = $(this).attr('class');
        var ac = $(this).hasClass('active');

        if (!ac) {
            $('.faqs-detail .faqs-nav a').removeClass('active');
            $(this).addClass('active');

            if (cls == 'faq-tab-all') {
                $('.faqs-detail .contents-box li').show();
            } else {
                $('.faqs-detail .contents-box li').hide();
                $('.faqs-detail .contents-box li.' + cls).show();
            }
        }
    });

    $('.comparison-products-block .comparison-products .swiper-wrapper .comparison-product').mouseenter(function() {
        $('.comparison-products-block .comparison-products .swiper-wrapper .comparison-product').addClass('opp');
        $(this).removeClass('opp');
    }).mouseleave(function() {
        $('.comparison-products-block .comparison-products .swiper-wrapper .comparison-product').removeClass('opp');
    });
});