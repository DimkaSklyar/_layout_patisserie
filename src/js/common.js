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


	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
				0:{
						items:1
				}
		}
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('.popup-with-move-anim').click(function() {
		var name = $(this).next('.product-name').text();
		var cat = $(this).parent().find('.product-category').text();
		var price = $(this).parent().find('.product-price').text();
		var img = $(this).parent().prev().find('img').attr('src');
		$('#small-dialog').find('h1').text(name);
		$('#small-dialog').find('#cat').text(cat);
		$('#small-dialog').find('#prc').text(price);
		$('#small-dialog').find('img').attr('src', img);
	});


	$('a[href^="#b"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
 
		var target = this.hash,
		$target = $(target);
 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'swing', function () {
			window.location.hash = target;
		});
	});

});
