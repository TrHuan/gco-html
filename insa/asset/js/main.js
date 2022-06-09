jQuery(document).ready(function($) {
    $(".slick-founder").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        // arrows: true,
        // asNavFor: 'abc'
    });

    $('.video-background').click(function(){
        $(this).parent().addClass('active');
    });
    $('.video-content .content').click(function(){
        $(this).parent().removeClass('active');
    });

    //token-distribution-chart
    var tdc = document.getElementById("token-distribution-chart").getContext('2d');
    var myLineChart = new Chart(tdc, {
        type: 'doughnut',
        data: {
            // labels: ["Red", "Green", "Yellow", "Grey"],
            datasets: [{
                data: [5, 60, 20, 15],
                backgroundColor: ["#f9327a", "#02c39a", "#fcc103", "#35bae9"],
                // hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
            }]
        },
        options: {
            responsive: true,
        }
    });

    //financial-distribution-chart
    var fdc = document.getElementById("financial-distribution-chart").getContext('2d');
    var myLineChart = new Chart(fdc, {
        type: 'doughnut',
        data: {
            // labels: ["Red", "Green", "Yellow", "Grey"],
            datasets: [{
                data: [5, 60, 20, 15],
                backgroundColor: ["#f9327a", "#02c39a", "#fcc103", "#35bae9"],
                // hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
            }]
        },
        options: {
            responsive: true,
        }
    });

    // $(".menu-box a").on('click', function(event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         var hash = this.hash;
    //         var targetST = $(hash).offset().top - 200;

    //         $('html, body').animate({
    //             scrollTop: targetST + 'px'
    //         }, 800, function(){
    //             window.location.hash = hash;
    //         });
    //     }
    // });
    $('.menu-box a').on('click', function(event) {
        if ($(this).attr('href')[0] === "#") {
            event.preventDefault();
            var targetID = $(this).attr('href');
            var targetST = $(targetID).offset().top - 90;
            $('body, html').animate({
                scrollTop: targetST + 'px'
            }, 300);
        }
    });
    
    $('.menu-box a, .menu-box').click(function(){
        var w_window = $(window).width();
        if (w_window < 992) {
            $('.adaptive-menu').removeClass('adaptive-menu--is-visible');
            $('.adaptive-menu__bg').removeClass('adaptive-menu__bg--is-visible');
            $('#open_menu').removeClass('adaptive-menu__open--is-hidden');   
        };
    });   

    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 120 ) {
            $('.header-site').addClass('active');
        } else {
            $('.header-site').removeClass('active');
        }
    });
    
    $('#open_menu').click(function(){
        var h_wd = $(window).height();
        $('.menu-box').height(h_wd);
    });
    $(window).resize(function(){
        var w_window = $(window).width();
        if (w_window >= 992) {
            $('.menu-box').height('100%');
        };
    });
});