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
        slidesToShow: 6,
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

    // var wh_win = $(window).width();
    // if (wh_win > 991) {
    //     $('.sidebar-box').removeClass('active');
    // } else {
    //     $('.sidebar-box').removeClass('active');
    // }
    // $('.title-sidebar').click(function(){
    //     var wh_win = $(window).width();

    //     if (wh_win <= 991) {
    //         var clac = $(this).parent().parent().hasClass('active');
    //         if (!clac) {
    //             $('.sidebar-box').removeClass('active');
    //             $(this).parent().parent().addClass('active');
    //         } else {
    //             $(this).parent().parent().removeClass('active');
    //         }
    //     }
    // });
    // $(window).resize(function(){
    //     var wh_win = $(window).width();
    //     if (wh_win > 991) {
    //         $('.sidebar-box').removeClass('active');
    //     } else {
    //         $('.sidebar-box').removeClass('active');
    //     }
    // });


    // $('.product-description-content .title').click(function(){
    //     var clac = $(this).hasClass('active');

    //     if (!clac) {
    //         $('.product-description-content .title').removeClass('active');
    //         $(this).addClass('active');
    //         $('.product-description-content .content').hide();
    //         $(this).next().slideDown('slow');
    //     } else {
    //         $(this).removeClass('active');
    //         $(this).next().slideUp('slow');
    //     }        
    // });

    // $('.searchs-title .btn').click(function(){
    //     $(this).parent().next().slideToggle('slow');
    // });

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
        var hb3 = $('.header-main').height();
        var h_menusb_cont = $('.headers .menu-sub-content').height();
        var h_menusub = parseInt(hb3) + parseInt(h_menusb_cont);
        var hg_win_2 = $(window).height();
        if (hg_win_2 < h_menusub) {
             var h_menusub = hg_win_2 - hb3;
             $('.menu-sub').height(h_menusub);
        }

        $('.megamenu-content .item-sub').mouseover(function() {
            $('.headers').addClass('active');
        }).mouseout(function() {
            $('.headers').removeClass('active');
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
                // $('.art-perfectly-it .banner-image video').addClass('water');

                var vd_ic = $('.art-perfectly-it .banner-image video').hasClass('ice');
                if (!vd_ic) {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water"><source src="assets/images/water-into-empty.mp4" type="video/mp4"></video>' );
                } else {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water ice"><source src="assets/images/water-into-empty-4.mp4" type="video/mp4"></video>' );
                }

                // $('.art-perfectly-it .banner-image video').trigger('play');
                // var scr = $('.art-perfectly-it .banner-image video').attr('src');
                // alert(scr);
            } else {
                // var vd_ic = $('.art-perfectly-it .banner-image video').hasClass('ice');
                // if (!vd_ic) {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water"><source src="assets/images/water-into-empty.mp4" type="video/mp4"></video>' );
                // } else {
                //     $( ".art-perfectly-it .banner-image .image video" ).remove()
                //     $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water ice"><source src="assets/images/water-into-empty-4.mp4" type="video/mp4"></video>' );
                // }
            }
        }

        if (btn_ic) {
            var vd_ic = $('.art-perfectly-it .banner-image video').hasClass('ice');
            if (!vd_ic) {                
                var vd_wa = $('.art-perfectly-it .banner-image video').hasClass('water');
                if (!vd_wa) {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="ice"><source src="assets/images/water-into-empty-3.mp4" type="video/mp4"></video>' );
                } else {
                    $( ".art-perfectly-it .banner-image .image video" ).remove()
                    $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="water ice"><source src="assets/images/water-into-empty-2.mp4" type="video/mp4"></video>' );
                }
            } else {
                $( ".art-perfectly-it .banner-image .image video" ).remove()
                $( ".art-perfectly-it .banner-image .image" ).append( '<video autoplay class="ice"><source src="assets/images/water-into-empty-3.mp4" type="video/mp4"></video>' );
            }
        }
    });

    $('.art-super-time .banner-image .btn').click(function(e){
        e.preventDefault();

        $( ".art-super-time .banner-image .image video" ).remove()
        $( ".art-super-time .banner-image .image" ).append( '<video autoplay class=""><source src="assets/images/rpm-idle-2.mp4" type="video/mp4"></video>' );
        
        setTimeout(function(){
            $( ".art-super-time .banner-image .image video" ).remove()
            $( ".art-super-time .banner-image .image" ).append( '<video autoplay loop class=""><source src="assets/images/rpm-idle.mp4" type="video/mp4"></video>' );
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
        $('.filter-wrap').slideToggle('slow');
    });
    $('.filter-wrap .close-wrap').click(function() {
        $('.filter-wrap').slideToggle('slow');
    });

    var prdi = $('.slick-products-for').height();
    $('.product-detail-images .detail-images .content').height(prdi);

    $('.art-product-detail .gallery-box span').click(function() {
        $('.product-detail-images').addClass('active');
    });
    $('.close-gallery').click(function() {
        $('.product-detail-images').removeClass('active');
    });

    $('.art-tab-main-service label').click(function() {
        $(this).toggleClass('active');
        $('.art-tab-main-service .nav').slideToggle('slow');
    });

    $('.contact-content .btn-next').click(function(e) {
        e.preventDefault();
        $('.contacts-form .form-content').addClass('active');
    });
    $('.contact-content .btn-previous').click(function(e) {
        e.preventDefault();
        $('.contacts-form .form-content').removeClass('active');
    });
    $('.contact-content .btn-send').click(function(e) {
        e.preventDefault();
        $('.contacts-form .form-content').removeClass('active');
        $('.contacts-form .form-content').addClass('active-2');

        $('.art-contacts .title-contacts .title').remove();
        $( ".art-contacts .title-contacts" ).append( '<h3 class="title">Get in touch Get in touch Get in touch.</h3>' );
        
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

$(document).on('click', '.art-tab-main-service a[href^="#"]', function (e) {
    e.preventDefault();    

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});