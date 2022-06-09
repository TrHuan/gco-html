jQuery(document).ready(function($){
  if($('.iframe').length){
    $(".iframe").fancybox({
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'type': 'iframe',
      'titlePosition' : 'inside',
      'speedIn'   : 600, 
      'speedOut'    : 200, 
      'overlayShow' : false
    });
  }
  

    /*if($('[data-fancybox="video"]').length) {
        $('[data-fancybox="video"]').fancybox({
            type: 'iframe'
        });
    }*/
    if($('header.top').length){
      $(window).scroll(function(){
        /*var anchor = $('header.top').offset().top;*/
        var anchor = $('header.top').offset().top;
        /*console.log(anchor);*/
        if(anchor >= 330){
            $('header.top').addClass('cmenu');
        }
        else{
            $('header.top').removeClass('cmenu');
        }
      });
    }
    

    new WOW().init();
    if($('.to-top').length){
      $('.to-top').on('click',function(event){
          event.preventDefault();
      $('body, html').stop().animate({scrollTop:0},800)});
      $(window).scroll(function(){
          var anchor=$('.to-top').offset().top;
          if(anchor>1000){
              $('.to-top').css('opacity','1')
          }
          else{
              $('.to-top').css('opacity','0')
          }
      });
    }
    
    
    $(".chk-pay-method:not(:first)").hide();
    $(".cart-pay-choice").on('click', function() {
        /*event.preventDefault();*/
        $('.cart-pay-choice').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.cart-pay-choice').find('input [type="radio"]').prop('checked', 'true');
        $accordion = $(this).next();
        h = $accordion.height();
        console.log(h);
        if ($accordion.is(':hidden') === true) {
            $(".chk-pay-method").slideUp();
            $accordion.slideDown();
            /*$accordion.css({
              height: h+'px',
              background: '#fff'
            });*/
            var w = $(window).width();
            if(w >= 1300) {
              $(this).parents('.cart-paymethod').css('padding-bottom', h+35+'px');
            }
            
        } 
        else {
            $accordion.slideUp();
        }
    });

    $('.add').on('click',function(){
        var $qty=$(this).closest('.pdetail-quan-wrap').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('.pdetail-quan-wrap').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
    $("#menu").mmenu({
        // options
        /*"offCanvas": {
                "position": "right"
            }*/
    }, {
        // configuration
        clone: true
    });

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

     /* nivoSlider */ 
    $("#slider").nivoSlider({ 
    effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 900,                   // Slide transition speed 
    pauseTime: 6000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: false,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: '<img src="images/left.png" alt="" title="">',   // Prev directionNav text 
    nextText: '<img src="images/right.png" alt="" title="">',  // Next directionNav text 
    randomStart: true,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
  });

    $('.bdetail-re-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});