window.onload = function() {

		// get elemnt from HTML
	var canvas = document.getElementById("canvas"), 
		// reference to 2d drawing context
		// where we call the drawing functions
		context = canvas.getContext("2d"),
		// width and height of canvas, set as
		// the maximum allowed for the window
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	// fill screen with black
	//context.fillRect(0,0,width,height);

	for(var i = 0; i < 100; i += 1){
		context.beginPath();
		context.moveTo(Math.random() * width, Math.random() * height);
		context.lineTo(Math.random() * width, Math.random() * height);
		context.stroke();
	}
};