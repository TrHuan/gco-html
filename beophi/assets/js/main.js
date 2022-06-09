
jQuery(document).ready(function($) {
    $(window).on("scroll",function() {
        var ht = $('.header-top').outerHeight();
        var hghdsck = $('.header-stick').outerHeight();
        if (ht) {
            hb = parseInt(ht) + parseInt(hghdsck);
            if ($(this).scrollTop() > hb ) {
                $('.header-stick').addClass('active');
            } 
            if ($(this).scrollTop() <= ht ) {
                $('.header-stick').removeClass('active');
            } 
        } else {
            hb = hghdsck;
            if ($(this).scrollTop() > hb ) {
                $('.header-stick').addClass('active');
            } 
            if ($(this).scrollTop() <= 0 ) {
                $('.header-stick').removeClass('active');
            } 
        }     

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }

        setTimeout(function(){
            var hght = $('.header-top').outerHeight();
            var hghdsck = $('.header-stick').outerHeight();
            if (hght) {
                hb = parseInt(hght) + parseInt(hghdsck);
                $('header').outerHeight(hb);
            } else {
                $('header').outerHeight(hghdsck);
            }
        }, 1000);
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });    

    setTimeout(function(){
        var hght = $('.header-top').outerHeight();
        var hghdsck = $('.header-stick').outerHeight();
        if (hght) {
            hb = parseInt(hght) + parseInt(hghdsck);
            $('header').outerHeight(hb);
        } else {
            $('header').outerHeight(hghdsck);
        }
    }, 1000);

    $(window).resize(function(){
        setTimeout(function(){
            var hght = $('.header-top').outerHeight();
            var hghdsck = $('.header-stick').outerHeight();
            if (hght) {
                hb = parseInt(hght) + parseInt(hghdsck);
                $('header').outerHeight(hb);
            } else {
                $('header').outerHeight(hghdsck);
            }
        }, 1000);        
    });
});

// js footer
jQuery(document).ready(function($) {
    var wh_win = $(window).width();
    if (wh_win <= 767) {
        $('.footer-box > .content-box').hide();
        $('.footer-box.active > .content-box').show();
    } else {
        $('.footer-box > .content-box').show();
    }
    
    $('.footer-box > .title-box').click(function(){
        var wh_win = $(window).width();
        if (wh_win <= 767) {
            var hsc = $(this).parent().hasClass('active');

            if (hsc) {
                $(this).parent().removeClass('active');
                $(this).next().slideToggle('slow');
            } else {
                $('.footer-box').removeClass('active');
                $('.footer-box > .content-box').hide();
                $(this).parent().addClass('active');
                $(this).next().slideToggle('slow');
            }
        }
    });

    $(window).resize(function(){
        var wh_win = $(window).width();
        if (wh_win > 767) {
            $('.footer-box .content-box').show();
        } else {
            $('.footer-box .content-box').hide();
            $('.footer-box.active .content-box').show();
        }
    });
});
// end js footer

// js menu mobile
jQuery(document).ready(function($) {
    $('.megamenu .menu-close a').click(function(e){
        e.preventDefault();
        $('.megamenu').removeClass('active');
    });

    $('.megamenu .menu-open .menu-icon').click(function(e){
        e.preventDefault();
        $(this).parent().parent().addClass('active');
    });

    var whg = $(window).height();
    $('.menu-mobile-content').height(whg);

    $(window).resize(function(){
        var whg = $(window).height();
        $('.menu-mobile-content').height(whg);
    });

    $('.megamenu .menu-item > a > .icon').click(function(e){
        e.preventDefault();
        $('.megamenu .menu-mobile-content li').removeClass('active');
        $(this).parent().parent().addClass('active');
    });
});
// end js menu mobile

// js search
jQuery(document).ready(function($) {
    $(document).on('click', '.search-open .menu-icon', function (e) {
        e.preventDefault();

        var clac = $(this).parent().parent().hasClass('active');

        if (clac) {
            $(this).parent().parent().removeClass('active');
        } else {
            $(this).parent().parent().addClass('active');
        }
    });
});
// end js search

// js logins
jQuery(document).ready(function($) {
    $(document).on('click', '.logins-box .user-icon a', function (e) {
        e.preventDefault();
        var whg = $(window).height();
        $('.logins-box .user-content').height(whg).delay(300).queue(function(next){
            $('.logins-box .user-box').addClass('active');
            next();
        });
    });

    $(window).resize(function(){
        var whg = $(window).height();
        $('.logins-box .user-content').height(whg);
    });
    
    $('.logins-box .user-close').click(function(){
        $('.logins-box .user-box').removeClass('active');
    });

    $('.lth-logins .user-box > ul > li > a').click(function(e){
        e.preventDefault();
        var ac = $(this).hasClass('active');

        if (!ac) {
            var lg = $(this).hasClass('login-title');
            var rg = $(this).hasClass('registration-title');

            if (lg) {
                $('.registrations-box').removeClass('active');
                $('.logins-box').addClass('active');
            } else if (rg) {
                $('.logins-box').removeClass('active');
                $('.registrations-box').addClass('active');
            }

            $('.lth-logins .user-box a').removeClass('active');
            $(this).addClass('active');
        }
    });
});
// end js logins

jQuery(document).ready(function($) {

    $(".slick-slidershow").slick({
        loop: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="icofont-simple-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="icofont-simple-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]
    });

    $(".slick-blogs").slick({
        loop: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        // rows: 1,
        // slidesPerRow: 5,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="icofont-simple-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="icofont-simple-right icon"></i></a>',
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // $('.slick-product-images-for .ul').slick({
    //     loop: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     // asNavFor: '.slick-product-images-nav ul',
    //     prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="icofont-simple-left icon"></i></a>',
    //     nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="icofont-simple-right icon"></i></a>',
    // });
    // $('.slick-product-images-nav .ul').slick({
    //     loop: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     asNavFor: '.slick-product-images-for .ul',
    //     dots: false,
    //     focusOnSelect: true,
    //     prevArrow: '',
    //     nextArrow: '',
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
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         }
    //     ]
    // });

});

// js popups
jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();

        var adat = $(this).attr('data_popup');
        
        $('.lth-popups').addClass('active');
        $('.' + adat).show();
        var hg_pop = $('.' + adat).height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {    
            $('.lth-popups .popups-box').height(hg_win - 30);
        } else {    
            $('.lth-popups .popups-box').height('auto');
        } 
    });
    ////////////////////
    var hg_pop = $('.art-popups-reviews .popups-content').height();
    var hg_win = $(window).height();
    if (hg_pop > hg_win) {    
        $('.art-popups-reviews .popups-box').height(hg_win - 30);
    } else {    
        $('.art-popups-reviews .popups-box').height('auto');
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
            $('.art-popups-reviews .popups-box').height(hg_win - 30);
        } else {   
            $('.art-popups-reviews .popups-box').height('auto');
        } 
        // end popups
    });
});
// end js popups

// countdown
/* html : <div class="clock" data-countdown="2030/01/01"></div> */
jQuery(document).ready(function($) {
    $('.clock').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('%D:%H:%M:%S'));
        });
    });
});
// end countdown

// tab
jQuery(document).ready(function($) {
    $('.tab-menu .title').click(function(e){
        e.preventDefault();
        var hs = $(this).parent().hasClass('active');

        if (!hs) {
            var data_tab = $(this).attr('data_tab');
            $('.nav-tabs li').removeClass('active');
            $(this).parent().addClass('active');
            $('.tab-content .tab-pane').removeClass('active');
            $('#'+data_tab).addClass('active');
        }
    });
});
// end tab

// iframe
jQuery(document).ready(function($) {
    $('iframe').attr('title', 'iFrame');
});
// end iframe
jQuery(document).ready(function($) {

    $('.lth-videos .module_banners .module_image').click(function(){
        var da_ul = $('.lth-videos .module_banners .module_image').attr('data_url_video');

        $('.lth-videos .module_videos').addClass('active');
        $('.lth-videos .module_videos iframe').attr('src', da_ul);
    });

    $('.module_videos .menu-close .menu-icon').click(function(e){
        e.preventDefault();
        $('.lth-videos .module_videos').removeClass('active');
        $('.lth-videos .module_videos iframe').attr('src', '');
    });

    
    $('.lth-explore-more .module_banners li>a').click(function(e){
        e.preventDefault();
        
        $(this).next().slideToggle('slow');
    });

    $('.lth-blog-single .blog-single .module_content .tab-title a').click(function(e){
        e.preventDefault();
        
        var data_tab = $(this).attr('data_tab');

        $('.lth-blog-single .blog-single .module_content .tab-title a').removeClass('active');
        $(this).addClass('active');
        $('.blog-single .tab-content .tab-panel').removeClass('active');
        $('.blog-single .tab-content .tab-panel.'+data_tab).addClass('active');
    });
    
});