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

		$('#small-dialog').find('#input-n-product').attr('value',name);
		$('#small-dialog').find('#input-cat-product').attr('value',cat);
		$('#small-dialog').find('#input-price-product').attr('value',price);

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

$('#question-form').submit(function(e){
	e.preventDefault();
	AjaxFormRequest('messegeResult-question','question-form','./feedback.php');
});

$('#form-order').submit(function(e){
	e.preventDefault();
	AjaxFormRequest('messegeResult-order','form-order','./order.php');
});

$('#subscribe').submit(function(e){
	e.preventDefault();
	AjaxFormRequest('messegeResult-sub','subscribe','./subscribe.php');
});

$('#contact-form').submit(function(e){
	e.preventDefault();
	AjaxFormRequest('messegeResult-contact-form','contact-form','./contact-form.php');
});

function AjaxFormRequest(result_id,formMain,url) { 
    jQuery.ajax({ 
        url: url, 
        type: "POST", 
        dataType: "html", 
        data: jQuery("#"+formMain).serialize(), 
        success: function(response) { 
            document.getElementById(result_id).innerHTML = response; 
            $(':input','#'+formMain) 
            .not(':button, :submit, :reset, :hidden') 
            .val('') 
            .removeAttr('checked') 
            .removeAttr('selected');
        }, 
        error: function(response) { 
            $('.m-0').remove();
            var par = document.getElementById(result_id);
            var error = document.createElement('p');
            error.classList.add("m-0");
            error.innerHTML = "Возникла ошибка :(";
            par.appendChild(error);
        }
    }); 
}

});

window.addEventListener("DOMContentLoaded", function() {
	function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
	}
    
	function mask(event) {
        var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
	};
    var input = document.querySelector("#order-tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});
