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