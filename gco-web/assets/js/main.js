jQuery(document).ready(function($) {
    $('html, body').animate({scrollTop:0}, 0);

    $(window).on("scroll",function() {
        var ht = $('.header-top').outerHeight();
        var hghdsck = $('.header-main').outerHeight();
        if (ht) {
            if ($(this).scrollTop() > ht ) {
                $('.header-stick').addClass('active');
            } 
            if ($(this).scrollTop() <= ht ) {
                $('.header-stick').removeClass('active');
            } 
        } else {
            hb = 0;
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
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });    

    setTimeout(function(){
        var ht = $('.header-top').outerHeight();
        var hghdsck = $('.header-main').outerHeight();
        if (ht) {
            hb = parseInt(ht) + parseInt(hghdsck);
        } else {
            hb = hghdsck;
        }
        
        console.log(hb);
        $('.headers').outerHeight(hb);
    }, 2000);

    $(window).resize(function(){
        setTimeout(function() {
            var ht = $('.header-top').outerHeight();
            var hghdsck = $('.header-main').outerHeight();
            hb = parseInt(ht) + parseInt(hghdsck);
            $('.headers').outerHeight(hb);
        }, 2000);
    });
});

jQuery(document).ready(function($) {

    $(".slick-slidershow").slick({
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        // slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-products").slick({
        loop: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    rows: 1,
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,
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

    $(".slick-features").slick({
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,
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

    $(".slick-testimonials").slick({
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        // slidesPerRow: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-blogs").slick({
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        // slidesPerRow: 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-brands").slick({
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        rows: 1,
        // slidesPerRow: 1,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="typo-icon typo-icon-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="typo-icon typo-icon-angle-right icon"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.slick-product-library-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slick-product-library-nav',
        // prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="icofont-thin-left icon"></i></button>',
        // nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="icofont-thin-right icon"></i></button>',
        prevArrow: '',
        nextArrow: '',
    });
    $('.slick-product-library-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-product-library-for',
        dots: false,
        // centerMode: true,
        // variableWidth: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            }
        ]
    });

});

// js popups
jQuery(document).ready(function($) {
    var hg = $(window).height();
    var hgcn = $('.popups .content.active').outerHeight();

    if (hg < hgcn) {
        $('.popups').css({'display': 'block'});
        $('.popups-content').css({'height': '100%'});
    }

    $('.btn-popup').click(function(e){
        e.preventDefault();

        var da_pop = $(this).attr('data_popup');

        $('.popups').addClass('active');
        $('.popups .'+da_pop).addClass('active');
        $('.popups .'+da_pop).parent().parent().addClass(da_pop);        
        $('.popups .'+da_pop).parent().parent().addClass('active');

        var hg = $(window).height();
        var hgcn = $('.popups .content.'+da_pop).outerHeight();

        if (hg < hgcn) {
            $('.popups').css({'display': 'block'});
            $('.popups-content').css({'height': '100%'});
        }
    });

    $('.popups .close').click(function(e){
        e.preventDefault();

        var da_clo = $(this).attr('data_close');

        $('.popups').removeClass('active');
        $('.popups .'+da_clo).removeClass('active');
        $('.popups-content').removeClass(da_pop);
        $('.popups-content').removeClass('active');
    });

    ////////////////////

    $(window).resize(function(){
        var hg = $(window).height();
        var hgcn = $('.popups .content.active').outerHeight();

        if (hg < hgcn) {
            $('.popups').css({'display': 'block'});
            $('.popups-content').css({'height': '100%'});
        } else {
            $('.popups').css({'display': 'flex'});
            $('.popups-content').css({'height': 'auto'});
        }
    });
});
// end js popups

// js tab
jQuery(document).ready(function($) {
    $('.module_tab_title a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var tp = $(this).attr('data_tab');
            $('.module_tab_title a').removeClass('active');
            $(this).addClass('active');
            $('.tab-panel').removeClass('active');
            $('.tab-panel.'+tp).addClass('active');
        }
    });
});
// end js tab

jQuery(document).ready(function($) {
    $('.megamenu a .icon').click(function(e){
        e.preventDefault();

        var hc = $(this).parent().parent().hasClass('active');

        if (hc) {
            $(this).parent().parent().removeClass('active');
            $(this).parent().next().slideUp();
        } else {
            $('.megamenu ul li').removeClass('active');
            $(this).parent().parent().addClass('active');
            $(this).parent().next().slideDown();
        }
    });

    $('.megamenu-mobile .menu-title').click(function(e){
        e.preventDefault();
        $('.megamenu-mobile-content').addClass('active');
    });
    
    $('.megamenu-mobile-content .close-title').click(function(e){
        e.preventDefault();
        $('.megamenu-mobile-content').removeClass('active');
    });

    $('.search-icon').click(function(e){
        e.preventDefault();
        $('.search-box').addClass('active');
    });

    $('.search-box .close-title').click(function(e){
        e.preventDefault();
        $('.search-box').removeClass('active');
    });

    $('.module_products .content-qty span').click(function(){
        var hscc = $(this).hasClass('qty-minus');

        if (hscc) {
            var val = $(this).next().attr('value');
            
            if (val > 1) {
                val--;
            }

            $(this).next().attr('value', val);
        } else {
            var val = $(this).prev().attr('value');
            val++;

            $(this).prev().attr('value', val);
        }        
    });

    $('.products-ordering > label').click(function(){
        $(this).parent().toggleClass('show');
    });

    $('.products-result .result-ordering ul li input').click(function(){
        $(this).parent().toggleClass('show');
    });

    $('.lth-sidebars a .icon').click(function(e){
        e.preventDefault();

        var ac = $(this).parent().parent().hasClass('active');

        if (ac) {
            $(this).parent().parent().removeClass('active');
            $(this).parent().next().slideUp();
        } else {
            $('.lth-sidebars li').removeClass('active');
            $('.lth-sidebars .sub-menu').slideUp();
            $(this).parent().parent().addClass('active');
            $(this).parent().next().slideDown();
        }
        
    });

});