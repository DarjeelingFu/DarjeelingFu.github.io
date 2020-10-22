function max(a, b){
	if(a > b)
		return a
	else
		return b
}

function cutImage(selector, width, height){
	var images = $(selector)
		
	for(let i  =0; i < images.length; i++){
		var img = new Image()
		img.src = images[i].src
		
		var imgWidth = img.width
		var imgHeight = img.height
		
		var scaleX = width / imgWidth
		var scaleY = height / imgHeight
		var scaleValue = max(scaleX, scaleY)
		var value = (imgWidth * scaleValue)
		images[i].width = value
	}
}

$(document).ready(function(){
	var imgCoverWidth = $('.articleCoverViewPort').css('width')
	var imgCoverHeight = $('.articleCoverViewPort').css('height')
	if(imgCoverHeight && imgCoverHeight){
		var width = parseFloat(imgCoverWidth.substr(0, imgCoverWidth.length - 2))
		var height = parseFloat(imgCoverHeight.substr(0, imgCoverHeight.length - 2))
		cutImage('.articleCover', width, height)
	}
	
	var imgCoverWidth = $('#postCoverViewPort').css('width')
	var imgCoverHeight = $('#postCoverViewPort').css('height')
	if(imgCoverWidth && imgCoverHeight){
		var width = parseFloat(imgCoverWidth.substr(0, imgCoverWidth.length - 2))
		var height = parseFloat(imgCoverHeight.substr(0, imgCoverHeight.length - 2))
		cutImage('#img', width, height)
	}
})