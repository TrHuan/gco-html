jQuery(document).ready(function($) {
    $(".slick-testimonials").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).on('click', '.sidebars-blog-box li a[href^="#"]', function (e) {
    e.preventDefault();    

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

jQuery(document).ready(function($) {
    var pos = $(window).scrollTop();  
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();
        if (windowpos > pos) {
            console.log('scrollDown');
            $('header').removeClass('active')
        } else {
            console.log('scrollUp');
            $('header').addClass('active');
        }
        pos = windowpos;
    });

    $(window).on("scroll",function() {
        var hb = $('header').height();

        if ($(this).scrollTop() > hb ) {
            // $('header').addClass('active');
        } else {
            $('header').addClass('active');
        }

        if ($(this).scrollTop() <= 0 ) {
            $('header').addClass('border-none');
        } else {
            $('header').removeClass('border-none');
        }

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }

        var himg = $('.blog-detail-image').outerHeight( true );
        var side_fix = parseInt(hb) + parseInt(himg);
        if ($(this).scrollTop() > side_fix ) {
            $('.sidebars-blog-detail').addClass('active');
        } else {
            $('.sidebars-blog-detail').removeClass('active');
        }

        var hblti = $('.blog-detail-title .title').outerHeight( true );
        var soc_fix = parseInt(side_fix) + parseInt(hblti);
        if ($(this).scrollTop() > soc_fix ) {
            $('.socials-box').addClass('active');
        } else {
            $('.socials-box').removeClass('active');
        }

        var bld = $('.art-blog-detail').outerHeight( true );
        var sid = $('.sidebars-blog-detail').outerHeight( true );
        var bt_side_fix = parseInt(hb) + parseInt(bld) - sid - 60;
        if ($(this).scrollTop() > bt_side_fix ) {
            $('.sidebars-blog-detail').addClass('fi-bottom');
        } else {
            $('.sidebars-blog-detail').removeClass('fi-bottom');
        }

        var soc = $('.socials-box').outerHeight( true );
        var bt_soc_fix = parseInt(hb) + parseInt(bld) - soc - 60;
        if ($(this).scrollTop() > bt_soc_fix ) {
            $('.socials-box').addClass('fi-bottom');
        } else {
            $('.socials-box').removeClass('fi-bottom');
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });

    $('.megamenu-desktop .item .title-sub').click(function(e){
        e.preventDefault();
    });

    $('.banner-tab .tab-title-box').click(function(){
        $(this).next().slideToggle( "slow" );
        $(this).parent().toggleClass('active');
    });

    $('.projects-title .filter-box').click(function(e){
        e.preventDefault();
        $('.main-sidebars').addClass('active');
    });
    $('.main-sidebars').click(function(){
        $('.main-sidebars').removeClass('active');
    });
    $('.form-sidebars-content').click(function(e){
        e.preventDefault();
    });

    $('.sidebars-title:not(.sidebars-blog-title)').click(function(){
        $(this).next().slideToggle( "slow" );
    });
    // $('.sidebars-blog-title').click(function(e){
    //     e.stopPropagation();
    // });
    $('.sidebars-box li').click(function(){
        var txt = $(this).children().text();
        $(this).parent().parent().prev().children().children('label').text(txt);
        $(this).parent().parent().slideToggle( "slow" );
        $('.sidebars-box li').removeClass('active');
        $(this).addClass('active');
    });
    $('.sidebars-blog-box a').click(function(){
        var hsac =  $(this).hasClass('active');
        if (!hsac) {
            $('.sidebars-blog-box a').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.search-title').click(function(){
        $(this).next().slideToggle( "slow" );
    });

    $('.popups-box').click(function(){
        $(this).removeClass('active');
    });

    $('.popup-content').click(function(e){
        e.stopPropagation();
    });

    $('.art-choose-face .service-box .btn-read-more').click(function(e){
        e.preventDefault();
        var h_window = $(window).height();
        var h_poup = $('.popup-content').height();
        if (h_poup > h_window) {
            // $('.popup-content').height(h_window);
            $('.popup-box').css({'height': h_window - 20});
        }
        else {
            $('.popup-box').css({'height': 'auto'});
        }
        $('.popup-see-more').addClass('active');
    });

    var w_side = $('.col-sidebars-blog').width();;
    $('.sidebars-blog-detail').css({'width': w_side});

    var w_window = $(window).width();
    var wd_con = $('.container').width();
    var lf = (w_window - wd_con)/2;
    if (w_window < 992) {
        $('.projects-buttons a').css({'width': w_window,'margin-left': -lf});
    }

    $(window).resize(function(){
        var w_window = $(window).width();
        var wd_con = $('.container').width();
        var lf = (w_window - wd_con)/2;

        if (w_window >= 992) {
            $('.menu-box').height('100%');

            $('.sidebar-site .sidebar-content').show('slow');
        } else {
            $('.sidebar-site .sidebar-content').hide('slow');

            $('.projects-buttons a').css({'width': w_window,'margin-left': -lf});
        }

        var h_window = $(window).height();
        var h_poup = $('.popup-content').height();
        if (h_poup > h_window) {
            // $('.popup-content').height(h_window);
            $('.popup-box').css({'height': h_window - 20});
        }
        else {
            $('.popup-box').css({'height': 'auto'});
        }

        var w_side = $('.col-sidebars-blog').width();;
        $('.sidebars-blog-detail').css({'width': w_side});
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });

    // $('.megamenu-desktop .megamenu-content > li')
    //     .mouseenter(function() {
    //         $(this).children().addClass('active');
    //         $(this).children().next().slideToggle('slow');
    //     })
    //     .mouseleave(function() {
    //         $(this).children().removeClass('active');
    //         $(this).children().next().slideToggle('slow');
    // });

    // $('.megamenu-desktop .megamenu-content .sub-menu li')
    //     .mouseenter(function() {
    //         $(this).children().addClass('active');
    //         $(this).children().next().slideToggle('slow');
    //     })
    //     .mouseleave(function() {
    //         $(this).children().removeClass('active');
    //         $(this).children().next().slideToggle('slow');
    // });
});