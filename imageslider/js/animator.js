function Animator(element) {
	this.el = element;
//    var imagePos=1;
	var that = this;
//    var value=0;

	this.animate = function(cssProperty, value, duration) {
//        imagePos++;
//        console.log('position of image',imagePos)
		var style = window.getComputedStyle(element);
		initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
//        var value=value;
//        console.log(value);
		var step = (value - initial) / (duration / 50);
		var counter = 0;

		var intervalId = setInterval(function() {
			counter++;
			var current = step * counter;
			// element.innerHTML = current;
			element.style[cssProperty] = initial+ current +'px';
			if (counter >= duration/50)
				clearInterval(intervalId);
		}, 20);
		
		this.intervalId;
//        this.style;
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function(cssProperty) {
//        initial = style.getPropertyValue(cssProperty);
//        console.log(initial);
		clearInterval(that.intervalId);
//        element.style[cssProperty]=(-value)+'px';
//		setTimeout(function(){},3000);
	}
}