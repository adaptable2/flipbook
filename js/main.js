$(document).ready(function() {

	$('map').imageMapResize();

	var number_pages = $('.page').length;
	var nump = 0;

	$('.right').on('click',function(){
		nump = $('.active').attr('data-nump');
		if($(window).width() >= 768){
			if(nump == 1){
				$('button').removeClass('disabled')
				$('.active').next().addClass('active');
				$('.active').prev().removeClass('active');
			}else{
				$('button').removeClass('disabled')
				$('.active').next().next().addClass('active');
				$('.active').prev().prev().removeClass('active');
			}	   
			if(nump == number_pages){
				$('.right').addClass('disabled')
			} 		
		}else{
			if(nump == number_pages){
				$('.right').addClass('disabled')
			}else{
				$('button').removeClass('disabled')
				$('.active').next().addClass('active');
				$('.active').prev().removeClass('active');
			}
		}
	});

	$('.left').on('click',function(){
		nump = $('.active').attr('data-nump');
		if($(window).width() >= 768){
			if(nump == 2){
				$('button').removeClass('disabled')
				$('.active').prev().addClass('active')
				$('.active').next().removeClass('active')
			}else{
				$('button').removeClass('disabled')
				$('.active').prev().prev().addClass('active')
				$('.active').next().next().removeClass('active')
			}
			if(nump == 1){
				$('.left').addClass('disabled')
			}
		}else{
			if(nump == 1){
				$('.left').addClass('disabled')
			}else{
				$('button').removeClass('disabled')
				$('.active').prev().addClass('active')
				$('.active').next().removeClass('active')
			}
		}
		
	});
});