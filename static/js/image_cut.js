function cutImage(id, width, height){
	var img = document.getElementById( id);
	var ig = $(img).clone();
	var imgWidth = $(ig)[0].width
	var imgHeight = $(ig)[0].height
	
	console.log(img)
	console.log(imgWidth)
	console.log(imgHeight)
	console.log(width)
	console.log(height)
	
	if(width >= height){
		if(imgWidth >= imgHeight){
			$(id).css('width', width.toString() + 'px')
		}
		else{
			$(id).css('height', height.toString() + 'px')
		}
	}
	else{
		if(imgWidth >= imgHeight){
			$(id).css('width', height.toString() + 'px')
		}
		else{
			$(id).css('height', width.toString() + 'px')
		}
	}
}