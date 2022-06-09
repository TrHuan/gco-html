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

    $(".slick-factory-images").slick({
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

    $(".slick-brands").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
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

    $(".slick-sidebar-products").slick({
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
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slick-products-for',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="far fa-angle-left icon"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="far fa-angle-right icon"></i></button>',
    });

    $(".slick-products").slick({
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

    $(".slick-blogs").slick({
        dots: false,
        infinite: true,
        speed: 500,
        // rows: 1,
        // slidesPerRow: 4,
        slidesToShow: 3,
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

});

jQuery(document).ready(function($) {

    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();
        var pop_img = $(this).hasClass('factory-image');

        if (pop_img) {
            $('.art-popups-albums .album-box img').attr('src', ''); 

            var imscr = $(this).find('img').attr('src');
            $('.art-popups-albums .album-box img').attr('src', imscr); 

            $('.art-popups-albums').addClass('active');
        }   

        var hg_pop = $('.art-popups .popups-box').height();
        var hg_win = $(window).height();
        if (hg_pop > hg_win) {
            $('.art-popups .popups-box').css({'top': '10px'});        
            $('.art-popups .popups-box').height(hg_win - 20);
        } else {
            $('.art-popups .popups-box').css({'top': 'auto'});        
            $('.art-popups .popups-box').height('auto');
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

            $('.title-tab a').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').removeClass('active');
            $(clsnm).addClass('active');
        }
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