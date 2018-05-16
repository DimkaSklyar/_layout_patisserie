$(document).ready(function(){
	
	$(function() {
		$('.skitter-large').skitter({
			navigation: true,
			dots: true
		});
	});
	
	$('#product-list-1').click(function () { 
		$('.product-week').removeClass('product-active');
		$('#product-1').addClass('product-active zoomIn');
		$('.top-week-product').find('figure').removeClass('active');
		$(this).find('figure').addClass('active');
		});

	$('#product-list-2').click(function () { 
		$('.product-week').removeClass('product-active');
		$('#product-2').addClass('product-active zoomIn');
		$('.top-week-product').find('figure').removeClass('active');
		$(this).find('figure').addClass('active');
	});

	$('#product-list-3').click(function () { 
		$('.product-week').removeClass('product-active');
		$('#product-3').addClass('product-active zoomIn');
		$('.top-week-product').find('figure').removeClass('active');
		$(this).find('figure').addClass('active');
	});

});