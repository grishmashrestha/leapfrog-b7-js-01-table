function BoxAnimation() {
	var box = [];
	var noOfBoxes = 12;

	//create the main holder div
	var body = document.getElementsByTagName("body")[0];
	var mainDiv = document.createElement('DIV');
	mainDiv.setAttribute("class","mainDiv");

//for the mouse event
		mainDiv.setAttribute("onclick","runMouseClickEvent(event)");
		mainDiv.setAttribute("onmousedown","MouseDown()");
		mainDiv.setAttribute("onmouseup","MouseUp()");
		mainDiv.style.width = '1000px';
		mainDiv.style.height = '600px';
		mainDiv.style.border = '1px solid red';
		body.appendChild(mainDiv);

		var mainWidth = parseInt(window.getComputedStyle(mainDiv).getPropertyValue('width'));
		var mainHeight = parseInt(window.getComputedStyle(mainDiv).getPropertyValue('height'));

	this.init = function() {
		for (var i=0; i<noOfBoxes; i++) {
			box[i] = new Box();
			if (i == 0) {
				box[i].element.setAttribute("class","box striker");
				box[i].appendTo(document.getElementsByClassName("mainDiv")[0]);
				box[i].initBoxPos( 25,525);
			}
			else{
				box[i].element.setAttribute("class","box");
				box[i].appendTo(document.getElementsByClassName("mainDiv")[0]);
				box[i].initBoxPos( 70*(i + 1),(i * 40 - i*i ));
				box[i].initSpeed(0,0);
			}
		}
	}
	this.boxAnimate = function(vel,ang){	
		xIncrement = ( vel* Math.cos(ang * Math.PI/180 ));
		yIncrement = -(vel * Math.sin(ang * Math.PI/180));
		box[0].initSpeed(xIncrement,yIncrement);
		function move(){
			for (var i = 0; i < noOfBoxes; i++) {
				box[i].detectWall(mainWidth,mainHeight,25,25);
				box[i].moveBox();
			}
			for (var i = 0; i < noOfBoxes; i++) {
				for (var j = i+1; j < noOfBoxes; j++) {
					if (box[i].hitTest(box[j],25,25) == 1) {
						box[j].initSpeed(vel,box[i].element.speedY);
						box[i].initSpeed(-vel,-box[i].element.speedY);
					};
					if (box[i].hitTest(box[j]) == 2) {
						box[j].initSpeed(box[i].element.speedX,vel);
						box[i].initSpeed(-box[i].element.speedX,-vel);
					};
					if(box[i].hitTest(box[j]) == 3) {
						box[j].initSpeed(box[i].element.speedX,-vel);
						box[i].initSpeed(-box[i].element.speedX,vel);
					};
					if (box[i].hitTest(box[j]) == 4) { 
						box[j].initSpeed(-vel,box[i].element.speedY);
						box[i].initSpeed(vel,-box[i].element.speedY);
					};
				}
			}
		}  
		setInterval(move,10);
	}
}