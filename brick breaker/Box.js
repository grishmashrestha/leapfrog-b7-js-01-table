function Box() {
	this.element = document.createElement("div");
	this.element.setAttribute('class',"box");
	this.velocityX;
	this.velocityY;
	this.lft;
	this.tp;
	this.w;
	this.h;
	this.alive=true;
	var self = this;

this.startAnimate = function(){
		
		self.tp = self.element.style.top =  self.velocityY+self.tp;
		self.lft=self.element.style.left =  self.velocityX+self.lft;
	}
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}
	this.init= function(){
		self.velocityX = 0;
		self.velocityY = 0;
		self.lft = parseInt((Math.random()*500));
		self.tp = parseInt((Math.random()*500));
		self.w = self.h = 50;
		self.startAnimate();		
	}
	this.putBox = function(left,top,width,height){
		self.element.style.left = self.lft = left;
		self.element.style.top = self.tp = top;

		self.w = self.element.style.width = width;
		self.h = self.element.style.height = height;

		//console.log('at the putBall',self.lft);
		console.log("Ball initialized");
	}
	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
	
	this.checkCollision = function(box){
		if ( self.tp + self.h < box.tp ) return false; //if A is more to the left than B
		else if ( self.tp  > box.tp + box.h  ) return false; //if A is more to the right than B
		else if (self.lft +self.w <  box.lft  ) return false; //if A is higher than B
		else if ( self.lft >  box.lft + box.w  ) return false; //if A is lower than B

		return true; //console.log("inside the collision");
	}


	this.removeClass = function(className) {
		
	}

	this.hitTest = function(box) {

	}
}