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

    $(".slick-events").slick({

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



    $(".slick-brands").slick({

        dots: false,

        infinite: true,

        speed: 500,

        rows: 2,

        slidesPerRow: 6,

        slidesToShow: 1,

        slidesToScroll: 1,

        adaptiveHeight: true,

        prevArrow: '<button class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></button>',

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesPerRow: 5,

                }

            },

            {

                breakpoint: 992,

                settings: {

                    slidesPerRow: 4,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesPerRow: 3,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesPerRow: 2,

                }

            }

        ]

    });



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



        var popups_events = $(this).hasClass('btn-popups-events');

        if (popups_events) {

            $('.art-popups-events').addClass('active');

        }



        var popups_appointment = $(this).hasClass('btn-popups-appointment');

        if (popups_appointment) {

            $('.art-popups-appointments').addClass('active');

        }



        var popups_appointment = $(this).hasClass('btn-high-power-search');

        if (popups_appointment) {

            $('.art-popups-edit-search').addClass('active');

        }



        var popups_criterias = $(this).hasClass('btn-popups-criterias');

        if (popups_criterias) {

            $('.art-popups-criterias').addClass('active');

        }



        

    });

    ////////////////////

    var hg_pop = $('.art-popups-events .popups-content').height();

    var hg_win = $(window).height();

    if (hg_pop > hg_win) {

        $('.art-popups-events .popups-box').css({'top': '10px'});        

        $('.art-popups-events .popups-box').height(hg_win - 20);

    } else {

        $('.art-popups-events .popups-box').css({'top': 'auto'});        

        $('.art-popups-events .popups-box').height('auto');

    } 



    var hg_pop = $('.art-popups-appointments .popups-content').height();

    var hg_win = $(window).height();

    if (hg_pop > hg_win) {

        $('.art-popups-appointments .popups-box').css({'top': '10px'});        

        $('.art-popups-appointments .popups-box').height(hg_win - 20);

    } else {

        $('.art-popups-appointments .popups-box').css({'top': 'auto'});        

        $('.art-popups-appointments .popups-box').height('auto');

    } 



    var hg_pop = $('.art-popups-registration .popups-content').height();

    var hg_win = $(window).height();

    if (hg_pop > hg_win) {

        $('.art-popups-registration .popups-box').css({'top': '0'}); 

        $('.art-popups-registration .popups-content').css({'align-items': 'flex-start'});         

        $('.art-popups-registration .popups-box').height(hg_win);   

        $('.art-popups-registration .popups-content').css({'height': 'auto'});

    } else {

        $('.art-popups-registration .popups-box').css({'top': '0'});        

        $('.art-popups-registration .popups-box').height(hg_win);   

        $('.art-popups-registration .popups-content').css({'align-items': 'center'});    

        $('.art-popups-registration .popups-content').css({'height': '100%'});

    } 



    var hg_pop = $('.art-popups-edit-search .popups-content').height();

    var hg_win = $(window).height();

    if (hg_pop > hg_win) {

        $('.art-popups-edit-search .popups-box').css({'top': '10px'});        

        $('.art-popups-edit-search .popups-box').height(hg_win - 20);

    } else {

        $('.art-popups-edit-search .popups-box').css({'top': 'auto'});        

        $('.art-popups-edit-search .popups-box').height('auto');

    } 



    var hg_pop = $('.art-popups-criterias .popups-content').height();

    var hg_win = $(window).height();

    if (hg_pop > hg_win) {

        $('.art-popups-criterias .popups-box').css({'top': '10px'});        

        $('.art-popups-criterias .popups-box').height(hg_win - 20);

    } else {

        $('.art-popups-criterias .popups-box').css({'top': 'auto'});        

        $('.art-popups-criterias .popups-box').height('auto');

    } 

    ////////////////////

    $('.art-popups .popups-box').click(function(){

        $(this).parent().removeClass('active');

    });

    $('.art-popups-edit-search .popups-box').click(function(){

        $('.art-popups-edit-search').removeClass('active');

    });

    ////////////////////

    $('.art-popups .popups-content').click(function(e){

        e.stopPropagation();

    });

    // end popups

    $(window).resize(function(){

        // popups

        var hg_pop = $('.art-popups-events .popups-content').height();

        var hg_win = $(window).height();

        if (hg_pop > hg_win) {

            $('.art-popups-events .popups-box').css({'top': '10px'});        

            $('.art-popups-events .popups-box').height(hg_win - 20);

        } else {

            $('.art-popups-events .popups-box').css({'top': 'auto'});        

            $('.art-popups-events .popups-box').height('auto');

        } 



        var hg_pop = $('.art-popups-appointments .popups-content').height();

        var hg_win = $(window).height();

        if (hg_pop > hg_win) {

            $('.art-popups-appointments .popups-box').css({'top': '10px'});        

            $('.art-popups-appointments .popups-box').height(hg_win - 20);

        } else {

            $('.art-popups-appointments .popups-box').css({'top': 'auto'});        

            $('.art-popups-appointments .popups-box').height('auto');

        } 



        var hg_pop = $('.art-popups-registration .popups-content').height();

        var hg_win = $(window).height();

        if (hg_pop > hg_win) {

            $('.art-popups-registration .popups-box').css({'top': '0'}); 

            $('.art-popups-registration .popups-content').css({'align-items': 'flex-start'});         

            $('.art-popups-registration .popups-box').height(hg_win);   

            $('.art-popups-registration .popups-content').css({'height': 'auto'});

        } else {

            $('.art-popups-registration .popups-box').css({'top': '0'});    

            $('.art-popups-registration .popups-content').css({'align-items': 'center'});      

            $('.art-popups-registration .popups-box').height(hg_win);   

            $('.art-popups-registration .popups-content').css({'height': '100%'});

        } 



        var hg_pop = $('.art-popups-edit-search .popups-content').height();

        var hg_win = $(window).height();

        if (hg_pop > hg_win) {

            $('.art-popups-edit-search .popups-box').css({'top': '10px'});        

            $('.art-popups-edit-search .popups-box').height(hg_win - 20);

        } else {

            $('.art-popups-edit-search .popups-box').css({'top': 'auto'});        

            $('.art-popups-edit-search .popups-box').height('auto');

        } 

        var hg_pop = $('.art-popups-criterias .popups-content').height();

        var hg_win = $(window).height();

        if (hg_pop > hg_win) {

            $('.art-popups-criterias .popups-box').css({'top': '10px'});        

            $('.art-popups-criterias .popups-box').height(hg_win - 20);

        } else {

            $('.art-popups-criterias .popups-box').css({'top': 'auto'});        

            $('.art-popups-criterias .popups-box').height('auto');

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



            var natab = $(this).parent().parent().attr('class');



            $('.title-tab .' + natab + ' a').removeClass('active');

            $(this).addClass('active');

            $('.' + natab + ' .tab-content').removeClass('active');

            $('.' + natab + ' ' + clsnm).addClass('active');

        }

    });



    $('.languages-title').click(function(){

        $(this).parent().toggleClass('active');

    });



    var ftl = $('.footer-box').length;

    for (var i = 0; i < ftl; i++) {

        var wdft = $('.footer-box').eq(i).find('.title-footer').width();

        var wdfttl = $('.footer-box').eq(i).find('.title-footer .title').width();

        var wdsp = wdft - wdfttl - 15;

        $('.footer-box').eq(i).find('.title-footer .title span').css({'width': wdsp});

    }



    var wpau = $('.title-participating-units').width();

    var wpautl = $('.title-participating-units .title').width();

    var wdpau = wpau - wpautl - 45;

    $('.title-participating-units .title span').css({'width': wdpau});

    $('.partner-criteria-content .form-group input').click(function(){

        $(this).parent().toggleClass('active');

    });

    // $('.registration-box .button .btn-check-radio').click(function(e){

    //     e.preventDefault();

    //    var sThisVal = $('.registration-box .radio-control input:checked').attr('class');

    //    $('.art-group').removeClass('active')
    //    $('.art-' + sThisVal).addClass('active');
    // });

    $('.registration-box .radio-control input').click(function(){
       var sThisVal = $(this).attr('class');

       $('.art-group').removeClass('active')
       $('.art-' + sThisVal).addClass('active');
    });

});



jQuery(document).ready(function($) {

    var wh_win_old = $(window).width();



    $(window).resize(function(){

        var wh_win = $(window).width();

        if (wh_win > 991) {

            

        } else {

            

        }



        if (wh_win != wh_win_old) {

            wh_win_old = wh_win;



            var ftl = $('.footer-box').length;

            for (var i = 0; i < ftl; i++) {

                var wdft = $('.footer-box').eq(i).find('.title-footer').width();

                var wdfttl = $('.footer-box').eq(i).find('.title-footer .title').width();

                var wdsp = wdft - wdfttl - 15;

                $('.footer-box').eq(i).find('.title-footer .title span').css({'width': wdsp});

            }



            var wpau = $('.title-participating-units').width();

            var wpautl = $('.title-participating-units .title').width();

            var wdpau = wpau - wpautl - 45;

            $('.title-participating-units .title span').css({'width': wdpau});

        }

    });

});