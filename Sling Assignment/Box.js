function Box() {
	this.element = document.createElement("div");
	var that = this;
	this.height= 0;
	this.width=0;
	this.dx=0;
	this.dy=0;
	this.x= 0;
	this.y= 0;

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.setClass = function(className){
		this.element.setAttribute('class', className);



	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	}

	// this.defineColor = function(color){
	// 	that.element.style.color=color;
	// }

	this.defineRandomPosition = function(boundaryWidth){
		that.x = Math.floor((Math.random() * boundaryWidth) + 10);
		that.y = Math.floor((Math.random() * boundaryWidth) + 10);

		that.element.style.left=this.x;
		that.element.style.top=this.y;
		return[this.x, this.y];
	}

	this.definePosition = function(x,y){
		that.element.style.left=x;
		that.element.style.top=y;
	}

	// defines random dx dy for an element
	this.defineD = function(d){
		that.dx = Math.floor((Math.random() * 1) + d);
		that.dy = Math.floor((Math.random() * 1) + d);
	}

	this.destReached = function(destx, desty){
		if((that.x>destx-5 && that.x<destx+5) && (that.y>desty-5 && that.y<desty+5)){
			console.log('destination reached');
			return true;
		}
	}

	//generates movement of the boxes
	this.generateRandomMovement = function(boundaryWidth){
			setInterval(function(){
			that.dx = (that.dx)*acc;
			that.dy = (that.dy)*acc;
			that.x += that.dx;
			that.y += that.dy;	
			that.element.style.left = that.x + 'px';
			that.element.style.top = that.y + 'px';
			if(that.x<10){
				that.dx *= -1;
				that.x += that.dx*colMul;
			}
			else if(that.x>boundaryWidth){
				that.dx = that.dx*-1;
				that.x += that.dx*colMul;
				//that.dy = that.dy*-1;;
			}

			if(that.y<10){
				that.dy *= -1;
				that.y += that.dy*colMul;
			}
			else if(that.y>boundaryWidth){
				//that.dx = that.dx*-1
				that.dy = that.dy*-1;
				that.y += that.dy*colMul;
			}
			},fps)
		}

	this.generateMovement = function(destx, desty, boundaryWidth){
		console.log('inside genereatemovement');
		that.x = that.element.offsetLeft;
		that.y = that.element.offsetTop;
		that.dx = -(that.x-destx)/50;
		that.dy = -(that.y-desty)/50;
		console.log('that.dx', that.dx);
		console.log('that.dy', that.dy);

		var movemementInterval = setInterval(function(){
			that.dx = (that.dx)*acc;
			that.dy = (that.dy)*acc;
			that.x +=that.dx;
			that.y +=that.dy;	
			that.element.style.left = that.x + 'px';
			that.element.style.top = that.y + 'px';
			if(that.x<10){
				that.dx *= -1;
				that.x += that.dx*colMul;
			}
			else if(that.x>boundaryWidth){
				that.dx = that.dx*-1;
				that.x += that.dx*colMul;
				//that.dy = that.dy*-1;;
			}

			if(that.y<10){
				that.dy *= -1;
				that.y += that.dy*colMul;
			}
			else if(that.y>boundaryWidth){
				//that.dx = that.dx*-1
				that.dy = that.dy*-1;
				that.y += that.dy*colMul;
			}

			if(that.destReached(destx,desty))clearInterval(movemementInterval);
			},fps)
	}



	this.hitTest = function(box) {
		var boxHeight = box.element.offsetHeight;
		var boxWidth = box.element.offsetWidth;
		var boxRadius = boxWidth/2;
		var directionx = that.dx*box.dx;
		var directiony = that.dy*box.dy;

		//collision detection and resolution for rectangular objects

		// if (this.x < box.x + box.width &&
		//    this.x + this.width > box.x &&
		//    this.y < box.y + box.height &&
		//    this.height + this.y > box.y){
		//		return true;
		// }


		//collision detection and resolution for circle objects

		if ( Math.sqrt( ( box.x-this.x ) * ( box.x-this.x )  + ( box.y-this.y ) * ( box.y-this.y ) ) < ( boxRadius + boxRadius ) ){
				console.log('hit');
			return true;
			}

		}


	this.moveAwayFrom = function(box){
		// var boxHeight = box.element.offsetHeight;
		// var boxWidth = box.element.offsetWidth;
		// var boxRadius = boxWidth/2;
		// var directionx = that.dx*box.dx;
		// var directiony = that.dy*box.dy;
		if(that.dx==0 && that.dy==0){
			that.dx= box.dx*-1;
			that.dy= box.dy*-1;
		}	

		if(box.dx==0 && box.dy==0){
			box.dx= that.dx*-1;
			box.dy= that.dy*-1;
			that.dx= that.dx*-1;
			that.dy= that.dy*-1;
		}

		if(that.dx<0 && box.dx>0) box.dx = that.dx*-1;
		if(that.dy<0 && box.dy>0) box.dy = that.dy*-1;

		if(that.dx>0 && box.dx>0) that.dx = that.dx*0.99;
		if(that.dy>0 && box.dy>0) that.dy = that.dy*0.99;


			that.dx = that.dx*-1;
			that.x += that.dx*colMul;

			box.dy = that.dy;
			box.y += that.dy*colMul;

			that.dy = that.dy*-1;
			that.y += that.dy*colMul;

			box.dx = that.dx;
			box.x += that.dx*colMul;
		}
		
	}
}