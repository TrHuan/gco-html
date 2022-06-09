jQuery(document).ready(function($) {
    // When user clicks button, open Modal
    $('.menu-open').click(function(){
        $(this).next().addClass('active');

        var h_wd = $(window).height();alert(h_wd);
        var h_cl = $('.menu-close').height(); alert(h_cl);
        var h_mn = h_wd - h_cl;
        $('.megamenu-mobile .menu-content .modal-body').height(h_mn);
    });

    // When user clicks Close (x), close Modal
    $('.menu-close .close').click(function(){
        $(this).parent().parent().parent().removeClass('active');
    });
});