function Animator(element) {
	this.el = element;
	var that = this;
	var style = window.getComputedStyle(element);
	var cssProperty = "margin-left";


	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);

		var step = (value - initial) / (duration / 50);

		var counter = 0;
		var intervalId = setInterval(function() {
			counter++;
			var current = step * counter;
			element.style[cssProperty] = initial + current + 'px';
			
			if (counter >= duration/50)
				// element.style[cssProperty] = cssValue + 'px';
				clearInterval(intervalId);
		}, 50);
	}

	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	this.stop = function(cssProperty, value, intervalId) {
		alert('hello from stop');
		var style = window.getComputedStyle(element);
		var initial = parseInt(style.getPropertyValue(cssProperty));
		clearInterval(intervalId);
		element.style[cssProperty] = value + 'px';
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function(cssProperty, value, intervalId) {
		var initial = parseInt(style.getPropertyValue(cssProperty));
		clearInterval(intervalId);
		// element.style[cssProperty] = value + 'px';
		// debugger;
		this.animate(cssProperty, value, 500);
	}

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}
}