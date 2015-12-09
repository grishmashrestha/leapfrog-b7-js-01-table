function Obstacle()
{	
	this.posX;
	this.posY=0;
	this.obstacle;
	var that=this;
	container=document.getElementsByClassName("container")[0];
	that.obstacle=document.createElement("div");
	
	this.init=function(posY)
	{
		that.obstacle.setAttribute("class","obstacle");
		container.appendChild(that.obstacle);


		that.posX=that.randomPos();
		that.posY=-100;
		that.obstacle.style.left=that.posX+'px';
		that.obstacle.style.top=that.posY+'px';
	}

	this.update=function()
	{
		that.posY+=1;
		that.obstacle.style.top=that.posY+'px';
		//console.log("obstacle.style.top",that.obstacle.style.top);
	}

	this.randomPos=function()
	{
		flag=Math.random();
		if(flag<=0.33)
		{
			return 40;
		}	
		else if(flag>0.33 & flag <=0.66)
		{
			return 150;
		} 
		else
		{
			return 260;
		}
	}

	this.deleteObstacle=function(container)
	{
		container.removeChild(that.obstacle);
	}
}