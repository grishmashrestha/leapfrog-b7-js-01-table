function Box()
 {
	var that=this; 
	this.element = document.createElement("div");
    
	 this.element.dx =0;
  this.element.dy =0;
  this.element.x = 0;
  this.element.y = 0;
 
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
		
	}
	 
	this.initBoxPos = function(posLeft,posTop){
    that.element.style.left = posLeft + 'px';
    that.element.style.top = posTop + 'px';
	that.element.x = parseInt(window.getComputedStyle(that.element).getPropertyValue('left')); 
    that.element.y = parseInt(window.getComputedStyle(that.element).getPropertyValue('top'));
	 }
     this.initSpeed = function(speedX,speedY){
    that.element.dx = speedX;
    that.element.dy = speedY;
     }

	  this.moveBox = function(){
		
    that.element.x += that.element.dx;
    that.element.y += that.element.dy;
    that.element.style.left = that.element.x + 'px';
    that.element.style.top = that.element.y + 'px';
    //console.log("speedX:",that.element.speedX,"speedY",that.element.speedY);
     }
     
	 this.detectWall = function(){
		 
     if(that.element.x<0 ||that.element.x>660) that.element.dx=-that.element.dx;
		if(that.element.y<0 ||that.element.y>560) that.element.dy=-that.element.dy;
	
	 }

	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	}
    
	this.reverseDir = function(){
    that.element.dx = -that.element.dx;
    that.element.dy = -that.element.dy;
    }

	 
    /* this.hitTest=function(box) {
	//var box1=this.element;

   if(that.element.x<=box.element.x+40 && 
   that.element.x+40>=box.element.x && 
   that.element.y<=box.elemen t.y+40 
   && that.element.y+40>=box.element.y)
 
 return true;
 
 else return false;
	
	}
	 */this.hitTest = function(box) {

        var x1 = box.element.x;
        var y1 = box.element.y;
        var width1 = 40;
        var height1 =40;
        
		var x = that.element.x;
        var y = that.element.y;
        var width = 40;
        var height = 40;

		if (x <x1 + width1 && x + width > x1 && y<(y1 + height1) && (height + y)>y1) {
            // collision detected!
//        	console.log('collision');
            
            //checks collision from right side
            if((x+width)>=x1 && x<x1 && (y+height) > y1 && (y1+height1)>=y){
//                console.log('1');
                return 1;
            }
            
            //checks collision from bottom side
            else if((y+height)>=y1 && y<y1 && (x+width)>=x1 && x<(x1+width1)){
//                console.log('2');
                return 2;
            }
            
            //checks collision from top side
            else if((y1+height1)>=y && y1<y && (x+width)>=x1 && x<(x1+width1)){
//                console.log('3');
                return 3;
            }
               
            //checks collision from left side   
            else if((x1+width1)>=x && x>x1 && y<(y1 + height1) && (height + y)>y1){
//                console.log('4');
                return 4;
            }
	    } else {
	        // no collision
//	         console.log('no collision');
	    }
		
	}
	
 } 
 	/* 
     this.move=setInterval(function()
	{   
	    	that.x+=that.dx;
		that.y+=that.dy;
		box.style.left=that.x+'px';
		box.style.top=that.y+'px';
	 */
		
		/* 
 
		 for(var i=0;i<boxes.length;i++)
    {			 
       for(j=0;j<boxes.length;j++)
	    {  
		   if(i!=j)
	        {	
		      if(boxarr[i].hitTest(j)==true)
                {	
					boxarr[j].dx=-that.dx;
					boxarr[j].dy=-that.dy;
					boxarr[i].dx=-that.dx;
					boxarr[i].dy=-that.dy;
					
				    that.x+=that.dx;
		            that.y+=that.dy;
		
				    boxes[i].style.left=that.x+'px'; 
					boxes[i].style.left=that.y+'px'; 
					boxes[j].style.left=that.y+'px'; 
					boxes[j].style.left=that.y+'px'; 
				 	
					 
		        }
            }
        }
	}       
	
	 		
			   
		       
		
						
		 
		
 	},20) 
	  */
 