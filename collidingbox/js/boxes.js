function Boxes(){
	var box1 = [];
	var boxNumber = 5;
	this.element = document.getElementsByClassName('mainWrapper')[0];
	var that = this;
	this.init = function(){
		for(var i = 0; i< boxNumber; i++){
			var box = new Box(that.element);
			box.init();
			box1.push(box);
		}
		that.checkInitialCollision();
		that.moveBoxes();
	}
	this.checkInitialCollision = function(){
		for(var i = 0; i<boxNumber-1;i++){
			for(var j = i+1 ; j < boxNumber ; j++){
				box1[i].checkRandom(box1[j]);
			}
		}	
	}
	this.moveBoxes = function(){
		animateBox = new BoxAnimation(box1);
		animateBox.animate(10);
	}
}
var collidingBoxes = new Boxes();
collidingBoxes.init();