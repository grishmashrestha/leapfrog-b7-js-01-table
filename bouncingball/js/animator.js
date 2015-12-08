function Animator(element) {
	this.el = element;
	var that = this;
	this.animate;
	
	this.animate = function(cssProperty,value, ball) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		var child = element.children;
		child[ball].style[cssProperty] = (value) + 'px';
					
	}
	this.animateBatch = function(cssProperties, ball) {
		var style = window.getComputedStyle(element);
		var propertyLeft = Object.keys(cssProperties)[0];
		var propertyTop = Object.keys(cssProperties)[1];
		var valueLeft = cssProperties[propertyLeft];
		var valueTop = cssProperties[propertyTop];
		var child = element.children;
		that.animate(propertyLeft,valueLeft,ball);
		that.animate(propertyTop,valueTop,ball);
	}
	// should stop the animation in current position
	this.stop = function() {
		
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {

	}
	this.randomGenerator = function(low,high){
		var randomgen = Math.floor((Math.random()*high)+low);
		return randomgen;
	}
	this.calculateDistance = function(x1,x2,y1,y2){
		this.distance = Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
		return this.distance;
	}
	this.hitTest = function(singleElement) {
	}

	this.hitTestBatch = function(elements) {

	}
}