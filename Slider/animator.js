function Animator(element) {
	this.el = element;
	var that = this;
	// this.velo_x;
	// this.velo_y;
	var velox,veloy;
	var intervalid;

	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);


		var step = (value - initial) / (duration / 50);
		var counter = 0;
		intervalid = setInterval(function() {
			counter++;
			
			//var current = step * counter;
			// element.innerHTML = current;
			element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty))+step + 'px';
			
			if (counter >= duration/50)
				clearInterval(intervalid);
		}, 50);
	}

	this.init= function(){
		var l = parseInt(Math.random()*10);
		var t = parseInt(Math.random()*10);
		velox=l;
		veloy=t;
		var p = (parseInt(Math.random()*1000)%500);
		var q = (parseInt(Math.random()*1000)%500);
		element.style['left']=p+'px';
		element.style['top']=q+'px';
	}


	this.animateOne = function(propertyleft,propertytop){
		
		var x=element.offsetLeft;
		var y=element.offsetTop;
		if(x+element.offsetWidth>800 || x<0)
			velox*=-1;
		if(y+element.offsetHeight>500 || y<0)
			veloy*=-1;
		element.style[propertyleft] =x+ velox + 'px';
		element.style[propertytop] =y+ veloy + 'px';
			
			

	}
	this.animateBatch = function(properties) {
		for (var x in properties) {
			//console.log(x, properties[x]);
			var mar = parseInt(window.getComputedStyle(element).getPropertyValue('margin-left'));
			element.style[properties[x]] = mar+10 + 'px';
			
		}
	}

	// should stop the animation in current position
	this.stop = function() {
		clearInterval(intervalid);
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function(active,cssProperty) {
		clearInterval(intervalid);
		
		// var style = window.getComputedStyle(element);
		// element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty))+0*900 + 'px';
		// console.log(element.style[cssProperty]);


	}

	this.hitTest = function(singleElement) {
		//console.log("fronm hit test batch",singleElement);
		var x=element.offsetLeft;
		var y= element.offsetTop;
		var w1=element.offsetWidth;
		var h1=element.offsetHeight;


		var x2=singleElement.offsetLeft;
		var y2=singleElement.offsetTop;
		var w2=singleElement.offsetWidth;
		var h2=singleElement.offsetHeight;

		return checkCollision(x,y,w1,h1,x2,y2,w2,h2);
		//console.log(x,y);
		//console.log(x2,y2);
//			if(element.)

	}
	function checkCollision(ax,ay,aw,ah,bx,by,bw,bh){
		if(ay+ah < by) return false;
		else if( ay > by+bh ) return false; //if A is more to the right than B
  		else if ( ax+aw < bx ) return false; //if A is higher than B
  		else if ( ax > bx+bw ) return false; //if A is lower than B
  		return true;
	}

	this.hitTestBatch = function(subjectelement) {
			
	}
}