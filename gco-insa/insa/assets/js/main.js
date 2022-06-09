jQuery(document).ready(function($) {

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

    $('.form-login .form-group .form-control').click(function(){
        var ac = $(this).parent().hasClass('active');

        if (!ac) {
            $(this).parent().addClass('active');
        }        
    });
    $('.form-login .form-group .form-control').focusout(function() {
        var vl = $(this).val();
        if (vl == "") {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });

    $('.login-form .nation-title').click(function(){
        $(this).next().slideToggle( "slow" );
    });

    $('.login-form .nation-control li').click(function(){
        var crf = $(this).html();
        $( ".login-form .nation-title * " ).remove();
        $( ".login-form .nation-title" ).append(crf + '<i class="fal fa-angle-down icon icon-angle-down"></i>');
        $(this).parent().slideToggle( "slow" );
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