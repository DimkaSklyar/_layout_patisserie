$(document).ready(function(){
	
	$(function() {
		$('.skitter-large').skitter({
			navigation: true,
			dots: true
		});
	});
	
	$('#product-list-1').click(function () { 
		$('#product-1').addClass('product-active');
	});

});