
 
//animator.animate2({left: 500, top: 400}, 1000);

function Animator(element) {
	this.el = element;
	var that = this;
	var id;
	
	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		
		var initial = style.getPropertyValue(cssProperty);

		initial = parseInt(initial);

		var step = (value - initial) / (duration / 50);
		var counter = 0;
		 intervalId = setInterval(function() {
			counter++;
			//var current = step * counter;
		 	//element.innerHTML = current;
		 	temp=this.intervalId;
			element.style[cssProperty] =parseInt(style.getPropertyValue(cssProperty))+step+'px';
			
			if (counter >= duration/50)
				clearInterval(temp);
		}, 50);
		
	}



	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	this.stop = function() {
		//console.log("saml",intervalId);
		clearInterval(temp);	
		}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {
		console.log("ready");
		clearInterval(intervalId);
		




	}

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}
}