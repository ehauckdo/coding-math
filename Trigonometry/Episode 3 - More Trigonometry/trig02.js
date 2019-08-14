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
		baseRadius = 100,
		baseAlpha = 0.5,
		offsetAlpha = 0.5,
		offset = 50,
		speed = 0.1,
		angle = 0;


	render();

	function render(){
		var y = centerY + Math.sin(angle) * offset;
		var x = centerX + Math.cos(angle) * offset;
		var radius = baseRadius + Math.sin(angle) * offset;

		var alpha = baseAlpha + Math.sin(angle) * offsetAlpha;
		context.fillStyle = "rgba(0,0,0, " + alpha + ")";

		context.clearRect(0,0, width, height);
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;

		requestAnimationFrame(render);
	}
};