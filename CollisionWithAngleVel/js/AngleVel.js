boxAnimation = new BoxAnimation();
boxAnimation.init();
	  
var fun = function(){
  var vel = parseInt(document.getElementById("velocity").value);
  var ang = parseInt(document.getElementById("angle").value);
	boxAnimation.boxAnimate(vel,ang);
}
var startTime = 0;
var stopTime = 0;
//mousedown event handler
MouseDown = function(){
  startTime = +new Date();
  console.log("down maa",startTime);
}
//mouseup event handler
MouseUp = function(){
  stopTime = +new Date();
	console.log("up maa",stopTime);
}
//to run onclick mouse event
runMouseClickEvent = function(event){
	var totalTime = stopTime - startTime;
	console.log("TotalTime:",totalTime);
	var x  = event.clientX;
	var y = event.clientY;
	var vel = (4 * totalTime/500) > 10 ? 10:(4*totalTime/500) ;
	console.log(vel);
	var angle = (180/Math.PI)* Math.atan(Math.abs(y - 525)/Math.abs(x - 25));
	var showAng = document.getElementById('demo');
	showAng.innerHTML = "Angle:" + angle + "<br>" + "Velocity:" + vel;	  
	if (angle < 50) {
	 boxAnimation.boxAnimate(vel,angle);
	}
	else{
	 boxAnimation.boxAnimate(4,angle);
	}
}
