jQuery(document).ready(function($) {
	$('.megamenu-mobile-content .item-sub > a span').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).parent().next().slideToggle('slow');
	});
});

// js tab
jQuery(document).ready(function($) {
    $('.title-tab a').click(function(e){
        e.preventDefault();

        var ac = $(this).hasClass('active');

        if (!ac) {
            var clnm = $(this).attr('class').replace('btn tab-title','');
            var clsnm = '.tab-content' + clnm;

            var natab = $(this).parent().parent().attr('class');

            $('.' + natab + ' > li > a').removeClass('active');
            $(this).addClass('active');
            $('.' + natab + ' > .tab-content').removeClass('active');
            $('.' + natab + ' > ' + clsnm).addClass('active');
        }
    });

    var hg = $('.megamenu-desktop .megamenu-dropdown').outerHeight();
    var hg2 = $('.megamenu-desktop .megamenu-dropdown .megamenu-dropdown').outerHeight();

    if (hg > hg2) {
        $('.megamenu-desktop .megamenu-dropdown').height(hg);
    } else {
        $('.megamenu-desktop .megamenu-dropdown').height(hg2);
    }

    $('.megamenu-desktop .item-full > .megamenu-dropdown > .container > ul > li.item-sub').mouseover(function() {
        var acdsb = $(this).hasClass('item-sub');

        if(acdsb) {
            $('.megamenu-desktop .item-full .megamenu-dropdown li.item-sub').removeClass('active');
            $(this).addClass('active');
        }
    // }) .mouseout(function() {
    //     $(this).removeClass('active');
    });

    $('.library-images .image').click(function(){
        var scrimg = $(this).find('img').attr('src');

        $('.popup-libraries-images .image img').removeAttr('src');
        $('.popup-libraries-images .image img').attr('src', scrimg);

        $('.popup-libraries-images').addClass('active');
    });
    $('.library-videos .image a').click(function(e){
        e.preventDefault();

        var scrimg = $(this).attr('href');

        $('.popup-libraries-videos iframe').removeAttr('src');
        $('.popup-libraries-videos iframe').attr('src', scrimg);

        $('.popup-libraries-videos').addClass('active');
    });
    $('.popup-libraries-images, .popup-libraries-videos').click(function(){
        $(this).removeClass('active');
    });

    $('.tab-member-units .content-box .title').click(function(){
        var hsmnsc = $(this).parent().parent().hasClass('active');

        if (!hsmnsc) {
            $('.tab-member-units .content-box').removeClass('active');
            $(this).parent().parent().addClass('active');
        }
    });
});
// end js tab

$(document).ready(function() {
    // Assign some jquery elements we'll need
    var $swiper = $(".slides-personnels");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".slides-personnels", {
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
        },
    });
});
