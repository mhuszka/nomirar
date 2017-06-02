// JavaScript Document
$(document).ready(function(){
	// Determine position of mouse
	var currentMousePos = { x: -1, y: -1 };
	$(document).mousemove(function(event) {
		// Find width and height of browser
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		// Find X and Y coordinates of the mouse
		currentMousePos.x = event.pageX;
		currentMousePos.y = event.pageY;
		// Attach vertical line to X position and horizontal line Y position
		$('#verticalLine').css('left', event.pageX);
		$('#horizontalLine').css('top', event.clientY);
		// Get percentage of mouse position in relation to total width and height
		var mousePercentageX = currentMousePos.x / windowWidth * 100;
		var mousePercentageY = currentMousePos.y / windowHeight * 100;
		// Tilt Galaxy Type
		if ($('body').hasClass('galaxy')) {
			// Define Range
			var rangeX = mousePercentageX - 50 + 'deg';
			var rangeY = -(mousePercentageY - 50) + 'deg';
			// Define Perspective
			var perspective = windowWidth + 'px';
			var tilting = 'rotateY(' + rangeX + ') rotateX(' + rangeY + ')';
			$('#perspective').css('perspective', perspective);
			$('#tilter').css('transform', tilting);
		} else if ($('body').hasClass('clouds')) {
			// Define range
			var factor = 3;
			var rangeX = mousePercentageX / factor - (100 / (factor * 2)) + 'px';
			var rangeY = mousePercentageY / factor - (100 / (factor * 2)) + 'px';
			// Apply CSS
			$('.contactContent').css('margin-top',rangeY).css('margin-left',rangeX);
		}
	});
});