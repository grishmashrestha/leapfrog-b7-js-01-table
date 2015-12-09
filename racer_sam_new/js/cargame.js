
function CarGame()
{
	var container;
	var road;
	var that=this;
	var intervalId;
	var score=0;
	var moveY=0;
	var allObstacle=[];

	var car=new Car();
	var obstacle1=new Obstacle();

	this.init=function()
	{
		
		
		that.startGame();
		car.init();
		car.setInitialPos({posX:150,posY:490});
		obstacle1.init();
		
	}

	this.startGame=function()
	{
		//main loop
		document.addEventListener('keydown',this.moveCar);
		intervalId=setInterval(function()
		{
			score++;
			that.updatebackGround();
			obstacle1.update();
			that.createObstacle();
			that.updateObstacle();
			
			that.collisionDetect();

		},10);
	}

	this.updatebackGround=function()
	{
		road=document.getElementsByClassName("road")[0];
		moveY-=3;
		road.style.bottom=moveY+'px';
	}

	this.createObstacle=function()
	{
		if(moveY%250==0)
		{
			obstacle1.init(-moveY);
			allObstacle.push(obstacle1);
		}
	}


	this.updateObstacle=function()
	{
		var obs=allObstacle;
		for(i=0;i<obs.length;i++)
		{
			obs[i].update();
		}
	}


	this.moveCar=function(e)
	{
		if(e.keyCode=='37' && car.posX!=40)
		{
			car.moveCar(-110);
		}
		else if(e.keyCode=='39' && car.posX!=260)
		{
			car.moveCar(+110);
			
		}
	}

	this.collisionDetect=function()
	{
		var carX=car.posX;
		var carY=car.posY
		var obs=allObstacle;
		console.log("carx",carX);
		console.log("cary",carY);
		console.log("obs",obs);
		//debugger;
		for(var i=0;i<obs.length;i++)
		{
			if(obs[i].posX<=carX+100 && obs[i].posX+100>=carX && obs[i].posY<=carY+100  && obs[i].posY+100>=carY)
			{
				console.log("collision");
				that.gameOver();
			}	
		}

	}

	this.gameOver=function()
	{
		var gameOverScreen=document.getElementsByClassName("gameOver")[0];
		clearInterval(intervalId);
		gameOverScreen.style.display='block';
	}



}
var carGame=new CarGame();
carGame.init();
