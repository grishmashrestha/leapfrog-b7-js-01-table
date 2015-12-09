function Car()
{
	var container;
	var car;
	this.posX;
	this.posY;
	var that=this;
	this.init=function()
	{
		container=document.getElementsByClassName("container")[0];
		console.log(container);
		car=document.createElement("div");
		car.setAttribute("class","car");
		container.appendChild(car);

	}

	this.setInitialPos=function(position)
	{
		that.posX=position.posX;
		that.posY=position.posY;
		/*console.log("posx:",that.posX);
		console.log("posy",that.posY);*/
		car.style.left=that.posX+'px';
		car.style.top=that.posY+'px';
		//debugger;
	}

	this.moveCar=function(posX)
	{
		that.posX+=posX;
		car.style.left=that.posX+'px';
	}


}
