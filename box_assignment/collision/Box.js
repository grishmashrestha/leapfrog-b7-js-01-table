function Box() {
	this.element = document.createElement("div");
	this.posx;
	this.posy;
	this.dirx;
	this.diry;
	this.boxWidth;
	this.boxHeight;
	this.identity;
	that = this;


	this.initializeValue = function(posx,posy,dirx,diry,boxWidth,boxHeight,identity){
		that.posx = posx;
		that.posy = posy;
		that.dirx = dirx;
		that.diry = diry;
		that.boxWidth = boxWidth;
		that.boxHeight = boxHeight;
		that.element.style.left = posx + 'px';
		that.element.style.top = posy + 'px';
		that.element.style.width = boxWidth + 'px';
		that.element.style.height = boxHeight + 'px'
		that.identity = identity;
	}

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}


	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	} 

	this.borderTest1 = function(){
   		if(this.posx<=0){
   			this.posx=0;
   			this.dirx*=-1;
   		}
   		else if(this.posx + this.boxWidth >= 1000){
   			this.posx= 1000-this.boxWidth;
   			this.dirx*=-1;
   		}
   		else{}

   		if(this.posy<=0){
   			this.posy=0;
   			this.diry*=-1;
   		}
   		else if(this.posy + this.boxHeight >= 500){
   			this.posy= 500-this.boxHeight;
   			this.diry*=-1;
   		}
   		else{}	
   	}
   this.moveBox1 = function(){
   		var xnew = this.posx + this.dirx;
		var ynew = this.posy + this.diry;
		this.element.style.left = xnew + 'px';
		this.element.style.top = ynew + 'px';
		this.posx = xnew;
		this.posy = ynew;

		if(this.posx<=0){
   			this.posx=0;
   			this.dirx*=-1;
   		}
   		else if(this.posx + this.boxWidth >= 1000){
   			//this.posx= 1000-this.boxWidth;
   			this.dirx*=-1;
   		}
   		else{}

   		if(this.posy<=0){
   			this.posy=0;
   			this.diry*=-1;
   		}
   		else if(this.posy + this.boxHeight >= 500){
   			//this.posy= 500-this.boxHeight;
   			this.diry*=-1;
   		}
   		else{}	
	}


	this.collisionTest = function(box){

		var x1 = box.posx;
        var y1 = box.posy;
        var width1 = box.boxWidth;
        var height1 = box.boxHeight;
        
		var x = this.posx;
        var y = this.posy;

        var width = this.boxWidth;
        var height = this.boxHeight;

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
	        return 0; //no collision;
	    }
		}
	}

