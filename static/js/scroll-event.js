$(document).ready(function(){

	var heightStr = $('#coverViewPort').css('height');
	var lenOfHeight = heightStr.length;
	var heightLimit = parseInt(heightStr.substr(0, lenOfHeight - 2))
	var limitShift = 80;

	$(window).scroll(function(){
		if($(document).scrollTop() >= heightLimit + limitShift){
			$('.scrollFixed').css('top', $(document).scrollTop() - heightLimit - limitShift)
		}
		else{
			$('.scrollFixed').css('top', 0)
		}



	})
})