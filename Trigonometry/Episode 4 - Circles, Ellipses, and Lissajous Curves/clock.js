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

	var centerY = height * .5,
		centerX = width * .5,
		radius = 200,
		numObjects = 40,
		slice = Math.PI*2 / numObjects,
		x, y;


	for(var i = 0; i < numObjects; i++){
		angle = slice * i;
		x = centerX + Math.cos(angle) * radius;
		y = centerY + Math.sin(angle) * radius;

		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI * 2, false);
		context.fill();

	}
		
	
};