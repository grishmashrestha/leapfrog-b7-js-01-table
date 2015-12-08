function Slingshot() {
	window.fps = 20;
	window.diffOffset = 0.003;
	window.colMul = 1.2; //collision Multiplier
	window.acc = 1; //differential Multiplier accelerator

	this.speed = 200;
	this.boxes = [];
	this.hitter = new Box();
	var that = this;
	var noOfBoxes = 8;
	var previousPositions=[];
	var newPosition;
	var found;
	var parent = document.getElementsByClassName('boundary')[0];
	var boundaryWidth = document.getElementsByClassName('boundary')[0].offsetWidth - 40;	
	var isHit=false;

	this.init = function() {
		// hitter = new Box();
		this.hitter.setClass('box');
		this.hitter.addClass('hitter');
		this.hitter.height=this.hitter.element.offsetHeight;
		this.hitter.width=this.hitter.element.offsetWidth;
		this.hitter.definePosition(10, 460);
		this.hitter.appendTo(parent);
		for (var i=0; i<noOfBoxes; i++) {
			that.boxes[i]=createBox();
			newPosition = that.boxes[i].defineRandomPosition(boundaryWidth);
			for(var j=0; j<previousPositions.length; j++){
				if(newPosition==previousPositions[j]){
					found = true; break;
				}
			}
			if(!found)previousPositions[previousPositions.length] = newPosition;
			testOverlapping();
		}
		testOverlapping();
		testCollision();  		//for random movement from initial
	}

	var createBox = function() {
		var box = new Box();
		box.setClass("box");
		//box.defineRandomPosition(boundaryWidth);
		box.defineD(0);
		box.appendTo(parent);
		box.height=box.element.offsetHeight;
		box.width=box.element.offsetWidth;
		box.generateRandomMovement(boundaryWidth);
		return box;
	}

	var testOverlapping = function(){
			for(var i = 0; i<that.boxes.length; i++){
				for(var j=i+1 ; j<that.boxes.length; j++){
					if(i!=j){
					if(that.boxes[i].hitTest(that.boxes[j])){
						isHit=true;
						that.boxes[i].defineRandomPosition(boundaryWidth);
					}
				}
			}
		}
	}

	var testCollision = function() {
		setInterval(function(){
			for(var i = 0; i<that.boxes.length; i++){
				for(var j=i+1 ; j<that.boxes.length; j++){
					if(i!=j){
					if(that.boxes[i].hitTest(that.boxes[j])){
						that.boxes[i].moveAwayFrom(that.boxes[j]);
					}
				}
			}
		}
		}, 10);
	}

	var hitterTestCollision = function(){
		setInterval(function(){
			for(var i = 0; i<that.boxes.length; i++){
				if(that.hitter.hitTest(that.boxes[i])){
					that.hitter.moveAwayFrom(that.boxes[i]);
				}
			}
		},10);
	}

	this.sling = function(destx, desty){
		that.hitter.generateMovement(destx, desty, boundaryWidth);
		hitterTestCollision();
	}


}