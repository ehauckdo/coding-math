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
		xRadius = 400,
		yRadius = 200,
		xSpeed = 0.1,
		ySpeed = 0.131,
		xAngle = 0,
		yAngle = 0,
		x, y;
		
		


	render();

	function render(){
		context.clearRect(0,0, width, height);

		y = centerY + Math.cos(xAngle) * xRadius;
		x = centerX + Math.sin(yAngle) * yRadius;
		
		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI * 2, false);
		context.fill();

		xAngle += xSpeed;
		yAngle += ySpeed;
		requestAnimationFrame(render);
	}
};