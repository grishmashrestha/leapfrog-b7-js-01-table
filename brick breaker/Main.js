function Main(no) {
	this.boxes = [];
	this.noOfBoxes;
	var self = this;
	this.parentElement = document.getElementsByClassName("background")[0];
	this.ball;
	this.pad;
	this.checkWall = function(b){
		if(b.lft<5)
		{
			b.velocityX *= -1;
		}
		else if(b.lft+b.w>self.parentElement.offsetWidth-5)
		{
			b.velocityX *= -1;
			//console.log(b);
		}
		if(b.tp<5)
		{//console.log(b);
			b.velocityY *= -1;
		}
		else if(b.tp+b.h>self.parentElement.offsetHeight-5)
		{//console.log(b);
			b.velocityY *= -1;
		}
	}

	this.checkBottom = function(b){
		if(b.tp+b.h>self.parentElement.offsetHeight)
		{//console.log(b);
			console.log("coll @ bottom");
			return false;

		}
		return true;
	}

	this.putVelocity = function(speed){
		this.ball.velocityX = speed;
		this.ball.velocityY = speed;
		//console.log("velocity ",this.ball.velocityX, this.ball.velocityX)
	}

	this.play = function (){
		
		if( self.ball.checkCollision(self.pad) )
		{	
   			if(self.ball.tp + self.ball.h >= self.pad.tp && self.ball.tp < self.pad.tp + self.pad.h)
   			{
	  				self.ball.velocityY *= -1;
   			}
   		}
		//console.log("start game",self.ball.lft,self.ball.tp);
		self.ball.lft = self.ball.element.style.left = self.ball.lft + self.ball.velocityX;
		
		self.ball.tp = self.ball.element.style.top = self.ball.tp + self.ball.velocityY;

		self.checkWall(self.ball);
		
		var isPlaying=true;
		for(var i = 0 ; i < self.boxes.length ;i++)
		 {

		 	if(self.boxes[i].alive)
		 	{
				if(self.ball.checkCollision(self.boxes[i]))
				{
					if(self.ball.lft + self.ball.w >= self.boxes[i].lft && self.ball.lft < self.boxes[i].lft + self.boxes[i].w)
					{
						//self.boxes[i].velocityX = self.ball.velocityX;
		  				self.ball.velocityX*=-1;//self.ball.velocityX-self.ball.velocityX;
		  				//console.log(self.boxes[i].alive);
		  				
		  				//console.log(self.boxes[i].alive);
		   			}
		   			if(self.ball.tp + self.ball.h >= self.boxes[i].tp && self.ball.tp < self.boxes[i].tp + self.boxes[i].h)
		   			{
		   					//self.boxes[i].velocityY = self.ball.velocityY;
			  				self.ball.velocityY *= -1;
		   			}
		   			self.boxes[i].alive = false;
	  				document.getElementsByClassName('box')[i+2].style['display']='none';

				}
			}
			if(self.boxes[i].alive && self.checkBottom(self.ball)){isPlaying=false;}

		}
		
		return isPlaying;
	}
	this.movePadLeft =function(){
		if( self.pad.lft > 0 )
			self.pad.lft = self.pad.element.style.left = self.pad.lft - 8;

	}
	this.movePadRight =function(){
		//console.log(this.parentElement.offsetWidth);
		if( self.pad.lft + self.pad.w < this.parentElement.offsetWidth)
			self.pad.lft = self.pad.element.style.left = self.pad.lft + 8;
	}

	var createBox = function() {
		var box = new Box();
		box.init();
		self.boxes.push(box);
		box.appendTo(self.parentElement);
	}

	this.init = function(noOfBoxes) {
		self.pad = new Box();
		console.log(this.parentElement.offsetHeight);
		self.pad.putBox(100, this.parentElement.offsetHeight - 20, 150, 20);
		self.pad.addClass('green');
		self.pad.appendTo(this.parentElement);

		self.ball = new Box();
		self.ball.putBox(self.pad.lft,self.pad.tp-50,50,50);
		self.ball.addClass('red');
		self.ball.appendTo(this.parentElement);

		for (var i = 0; i < noOfBoxes; i++) {
			createBox();
		}
	}
	this.init(no);

}