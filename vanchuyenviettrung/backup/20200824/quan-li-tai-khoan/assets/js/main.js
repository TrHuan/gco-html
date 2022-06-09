jQuery(document).ready(function($) {
    $('.use-block .use-title').click(function(){
        $(this).parent().toggleClass('active');
        $('body').toggleClass('active');
    });
    $('.main-site').click(function(){
        $('.use-block .use-box').removeClass('active');
        $('body').removeClass('active');
    });

    $('.recharges-content .title, .recharge-block li').click(function(){
    	var hac = $(this).hasClass('active');
    	if (!hac) {
    		$('.recharges-content .title, .recharge-block li').removeClass('active');
    		$(this).addClass('active');
    	}
    });

    $('.transport-setting .radio input').click(function(){
    	var hac = $(this).parent().hasClass('active');
    	if (!hac) {
    		$(this).parent().parent().children().removeClass('active');
    		$(this).parent().addClass('active');
    	}
    });

    $('.address-setting .radio input').click(function(){
    	var hac = $(this).parent().hasClass('active');
    	if (!hac) {
    		$(this).parent().parent().parent().parent().children().children().children().removeClass('active');
    		$(this).parent().addClass('active');
    	}
    });

    $('.purchase-orders .number .icon-minus').click(function(){
    	var vlms = $(this).parent().next().val();
    	
    	if (vlms != ' ' || vlms != '0') {
    		$(this).parent().next().val(vlms - 1);
    	}
    });

    $('.purchase-orders .number .icon-plus').click(function(){
    	var vlms = $(this).parent().prev().val();
    	if (vlms != ' ' || vlms != '0') {
    		valms = parseInt(vlms);
	    	$(this).parent().prev().val(valms + 1);
	    } else {
	    	$(this).parent().prev().val('1');
	    }
    });

	$( ".purchase-orders .number input" ).keyup(function() {
		var value = $( this ).val();
		$(this).val(value);
	}).keyup();

	$('.megamenu-mobile .icon').click(function(){
		$('.megamenu-block').toggleClass('active');
		// $(this).toggleClass('fa-bars');
		// $(this).toggleClass('fa-times');
	});

    var wh = $(window).height();
    var navh = $('.megamenu-block .nav').height();
    if (navh > wh) {
        $('.megamenu-block').css({'height':wh, 'overflow-y':'auto'});
    }
    $(window).resize(function(){
        var wh = $(window).height();
        var navh = $('.megamenu-block .nav').height();
        if (navh > wh) {
            $('.megamenu-block').css({'height':wh, 'overflow-y':'auto'});
        } else {
            $('.megamenu-block').css({'height':'100%'});
        }
    });
});