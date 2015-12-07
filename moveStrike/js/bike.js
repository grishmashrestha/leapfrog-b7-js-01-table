function Bike(){
	this.pos=1;
	this.left=200;
	this.top=49800;
//	this.dirX=5;
//	this.moveleft=0px;
//	this.moveright=0px;
	this.element=document.createElement('div');
	
	this.create=function(parentName,className){
		
	this.element.setAttribute('class',className);
	parentName.appendChild(this.element);	
	}
	this.ride=function(){
		
		this.top=this.top-this.pos;
//		this.left=this.left+this.dirX;
		this.element.style.top=this.top+'px';
		this.element.style.left=this.left+'px';	
	}
}

