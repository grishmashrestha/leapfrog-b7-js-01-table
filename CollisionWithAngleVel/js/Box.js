function Box() {
  var that = this;
	this.element = document.createElement("div");
  //speed and current position for the element
  this.element.speedX = 2;
  this.element.speedY = 2;
  this.element.curPosX = 0;
  this.element.curPosY = 0;

  //function to append to the parent
	this.appendTo = function(parentElement) {
	 parentElement.appendChild(this.element);
	}
  //function to add class to the element
	this.addClass = function(className){
    //add the class property to the existing class
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
  }
  //here is the function to initialize the  initial Box
  this.initBoxPos = function(posLeft,posTop){
    this.element.style.left = posLeft + 'px';
    this.element.style.top = posTop + 'px';
    that.element.curPosX = parseInt(window.getComputedStyle(that.element).getPropertyValue('left')); 
    that.element.curPosY = parseInt(window.getComputedStyle(that.element).getPropertyValue('top'));   
  }
  //function to initialize the speed of the box
  this.initSpeed = function(speedX,speedY){
    that.element.speedX = speedX;
    that.element.speedY = speedY;
  }

  //function to move the Box
  this.moveBox = function(){
    that.element.curPosX += that.element.speedX;
    that.element.curPosY += that.element.speedY;
    that.element.style.left = that.element.curPosX + 'px';
    that.element.style.top = that.element.curPosY + 'px';
    //console.log("speedX:",that.element.speedX,"speedY",that.element.speedY);
  }
  //function to detect the wall collision
  this.detectWall = function(hSep,ySep,boxW,boxH){
    if ((that.element.curPosX <= 0) || (that.element.curPosX >= hSep - boxW)) that.element.speedX = -that.element.speedX;
    if ((that.element.curPosY <= 0) || (that.element.curPosY >= ySep - boxH)) that.element.speedY = -that.element.speedY;
  }
  //function to remove the class 
	this.removeClass = function(className) {
		
	}

  //function hitTest to test collision with other boxes
	this.hitTest = function(box,boxW,boxH) {
    var x = that.element.curPosX;
    var y = that.element.curPosY;
    var x1 = box.element.curPosX;
    var y1 = box.element.curPosY;
    var height1 = boxH;
    var width1 = boxW;
    var height = boxH;
    var width = boxW;
    if (x <x1 + width1 && x + width > x1 && y<(y1 + height1) && (height + y)>y1) {
      // collision detected!
      //console.log('collision');
      //checks collision from right side
      if((x+width)>=x1 && x<x1 && (y+height) > y1 && (y1+height1)>=y){
      //console.log('1');
        return 1;
      }
      //checks collision from bottom side
      else if((y+height)>=y1 && y<y1 && (x+width)>=x1 && x<(x1+width1)){
        //console.log('2');
        return 2;
      }
      //checks collision from top side
      else if((y1+height1)>=y && y1<y && (x+width)>=x1 && x<(x1+width1)){
      //console.log('3');
        return 3;
      }  
      //checks collision from left side   
      else if((x1+width1)>=x && x>x1 && y<(y1 + height1) && (height + y)>y1){
      //console.log('4');
        return 4;
      }
      else {
      // no collision
      //console.log('no collision');
      }   
    }
	}
  //function to reverse the direction
  this.reverseDir = function(){
    that.element.speedX = -that.element.speedX;
    that.element.speedY = -that.element.speedY;
  }
}