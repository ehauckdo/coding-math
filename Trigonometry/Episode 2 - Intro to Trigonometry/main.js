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

	context.translate(0,  height / 2);
	// because of the inverted  y coordinate system
	// the sin wave will look reverserd
	// this can be used to flip the image vertically
	context.scale(1, -1)


	for(var angle = 0; angle < Math.PI * 2; angle += 0.05){
		console.log(Math.sin(angle))

			// x will be the x coordinate, going from 0*200 to 2*pi*200
		var x = angle * 200,
			// y will be the y coordinate,
			// going from 0*200 to 1*200 to -1*200 to 0
			y = Math.sin(angle) * 200;

			context.fillRect(x,y,5,5);
	}
};