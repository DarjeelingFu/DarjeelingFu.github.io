$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() >= 680){
			$('.scrollFixed').css('top', $(document).scrollTop() - 680)
		}
		else{
			$('.scrollFixed').css('top', 0)
		}



	})
})