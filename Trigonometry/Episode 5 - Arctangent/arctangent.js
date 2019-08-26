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

		arrowX = width /2,
		arrowY = height/2,
		dx= 0,
		dy = 0,
		angle = 0;

	render();

	function render(){
		context.clearRect(0,0,width,height);

		context.save();
		context.translate(arrowX, arrowY);
		context.rotate(angle);

		context.beginPath();
		context.moveTo(20,0);
		context.lineTo(-20,0);
		context.moveTo(20,0);
		context.lineTo(10,-10);
		context.moveTo(20,0);
		context.lineTo(10,10);
		context.stroke();

		context.restore();
		requestAnimationFrame(render);
	}

	document.body.addEventListener("mousemove", function(event) {
		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;

		// this atan does not know which quadrant the angle (the points) 
		// are so it limits the results to 2 quadrants only
		// causing the arrow never to point to the left side
		angle = Math.atan(dy/dx);

		// this will pass the two points instead of the angle
		// so it can make sure which quadrant the angle refers to
		angle = Math.atan2(dy, dx);
	});
};