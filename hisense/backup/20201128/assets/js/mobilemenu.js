jQuery(document).ready(function($) {
    // When user clicks button, open Modal
    $('.menu-open').click(function(){
        $('.megamenu-mobile-content .menu-content').addClass('active');

        var h_wd = $(window).height();
        $('.megamenu-mobile-content .menu-content .modal-body').height(h_wd);
    });

    // When user clicks Close (x), close Modal
    $('.menu-close .close').click(function(){
        $('.megamenu-mobile-content .menu-content').removeClass('active');
    });
});