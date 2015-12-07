function Box() {
	var xmax = 740;
	var ymax = 540;
	var xpos,ypos;
	var dx=0,dy=0;
	var isCollision = false;
	xpos = Math.floor((Math.random()*740)+0);
	ypos = Math.floor((Math.random()*540)+0);
  	var that = this;
  	this.isCollision = isCollision;
  	this.xpos = xpos;
  	this.ypos = ypos;
  	this.dx = dx;
  	this.dy = dy;
	this.element = document.createElement("div");
	this.element.style.left = xpos + 'px';
	this.element.style.top = ypos + 'px';
	
	this.appendTo = function(parentElement) {
	 parentElement.appendChild(this.element);
	}

	this.addClass = function(className){
    console.log("invoking addClass");
    //add the class property to the existing class
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
  }
  //function to move the class
  this.moveBox = function(){
	    if(that.xpos<=5 || that.xpos>=745)
	    	that.dx=-that.dx;
	    if(that.ypos<=5 || that.ypos>=545)
	    	that.dy=-that.dy;
	    if(that.isCollision==true){
	    	that.dx=-that.dx;
	    	that.dy=-that.dy;
	    	that.isCollision = false;
	    }

	    that.xpos+=that.dx;
	    that.ypos+=that.dy;
	    that.element.style.left = that.xpos + 'px';
	    that.element.style.top = that.ypos + 'px';
	    //this.xposition = xpos;
		//this.yposition = ypos;
  }
	this.removeClass = function(className) {
		
	}

	this.hitTest = function(box1) {
		//if(((that.moveBox.xposition-box1.moveBox.xposition)*(that.moveBox.xposition-box1.moveBox.xposition)+(that.moveBox.yposition-box1.moveBox.yposition)*(that.moveBox.yposition-box1.moveBox.yposition))<=5000)
		// if((box1.ypos+50)<=this.ypos)
		// 	//return false;
		// else if(box1.xpos >+ (that.xpos+50))
		// 	//return false;
		// else if(box1.ypos >= (that.ypos+50))
		// 	//return false;
		// else if((box1.xpos+50) <= that.xpos)
		// 	//return false;
		// else{

		//if(((that.xpos-box1.xpos)*(that.xpos-box1.xpos)+(that.ypos-box1.ypos)*(that.ypos-box1.ypos))<=5000){
		if((that.xpos < box1.xpos+50) && (that.xpos+50>box1.xpos)&&(that.ypos<box1.ypos+50)&&(50+that.ypos>box1.ypos)){
			if(that.dx != 0){
				box1.dx = that.dx;
				box1.dy = that.dy;
				that.isCollision=true;
			}
			else{
				that.dx = box1.dx;
				that.dy = box1.dy;
				box1.isCollision=true;
				that.isCollision=true;
			}
			//
		}
	}

}