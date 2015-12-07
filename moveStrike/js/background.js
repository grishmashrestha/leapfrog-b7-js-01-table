function Background(){
	this.pos=1;
	this.top=-49400;
	this.element=document.getElementsByClassName('road')[0];
	
	this.slide=function(){
		this.top=this.top+this.pos;
		this.element.style.top=this.top+'px';
		
	}	
}