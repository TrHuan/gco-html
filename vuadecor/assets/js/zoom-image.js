$(document).ready(function () {

	var lgimg = $('.slick-products-for .item').length;	

	for (var i = 1; i <= lgimg; i++) {
		$(".zoom-img-" + i).blowup({
			background : "#FCEBB6"
		});
	}	

})