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
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });    

    var hghdsck = $('.header-stick').outerHeight();
    $('.headers').outerHeight(hghdsck);

    $(window).resize(function(){
        var hghdsck = $('.header-stick').outerHeight();
        $('.headers').outerHeight(hghdsck);
    });
});

jQuery(document).ready(function($) {

    $(".slick-slidershow").slick({
        loop: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="fal fa-angle-left icon"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon"></i></a>',
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

});

// js popups
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
                $('.art-popups-reviews .popups-box').height(hg_win - 30);
            } else {    
                $('.art-popups-reviews .popups-box').height('auto');
            } 
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

// js tab
jQuery(document).ready(function($) {
    $('.title-tab a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var clnm = $(this).attr('class').replace('tab-title','');
            var clsnm = '.tab-content' + clnm;

            var natab = $(this).parent().parent().parent().attr('class');
            
            $('.' + natab + ' > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' > .tab-content').removeClass('active');
            $('.' + natab + ' > ' + clsnm).addClass('active');
        }
    });
});
// end js tab
