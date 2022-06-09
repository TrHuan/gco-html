jQuery(document).ready(function($) {
	var categories = new Swiper('.swiper-categories', {
		loop: true,
		// pagination: {
		// 	el: '.paginations',
		// 	clickable: true,
		// },
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
        }
	});

    var products = new Swiper('.swiper-products-like', {
        loop: true,
        // pagination: {
        //  el: '.paginations',
        //  clickable: true,
        // },
        // navigation: {
        //     nextEl: '.button-next',
        //     prevEl: '.button-prev',
        // },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });

    var blogs = new Swiper('.swiper-blogs-like', {
        loop: true,
        // pagination: {
        //  el: '.paginations',
        //  clickable: true,
        // },
        // navigation: {
        //     nextEl: '.button-next',
        //     prevEl: '.button-prev',
        // },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        }
    });

    var galleryThumbs = new Swiper('.swiper-popup-product-image-thumbs', {
        spaceBetween: 0,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 4, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.swiper-popup-product-image-top', {
        spaceBetween: 0,
        loop: true,
        loopedSlides: 4, //looped slides should be the same
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});

jQuery(document).ready(function($) {
    $(window).on("scroll",function() {
    	var hb = $('header').height();
        if ($(this).scrollTop() > hb ) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
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

    $('.sidebar-site .sidebar-title').click(function(){
        var w_window = $(window).width();
        if (w_window < 992) {
            $(this).next().slideToggle('slow');
            $(this).toggleClass('active');
        }
    });

    $('.product-detail-content .active .short-tab-content').show();
    $('.short-tab-title').click(function(event){
        event.preventDefault();
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('active');
    });

    $('.product-actions .product-colors .color-check').click(function(){
        var clac = $(this).parent().hasClass('active');
        if (!clac) {
            $('.product-actions .product-colors li').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.product-actions .product-sizes li span').click(function(){
        var clac = $(this).parent().hasClass('active');
        if (!clac) {
            $('.product-actions .product-sizes li').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.product-detail-images .product-image').click(function(){
        $('.popup-product-image').addClass('active');
    });
    $('.popup').click(function(){
        $(this).removeClass('active');
    });
    $('.popup-content > div').click(function(e){
        e.stopPropagation();
    });

    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');

            $('.sidebar-site .sidebar-content').show('slow');
        } else {
            $('.sidebar-site .sidebar-content').hide('slow');
        }
    });
});