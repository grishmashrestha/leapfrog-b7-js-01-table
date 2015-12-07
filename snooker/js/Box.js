function Box() {
	this.dx=0;
	this.dy=0;
	this.top;
	this.left;
	this.width=15;
	this.height=15;
	
  this.element=document.createElement('div') ;	
  
	this.createBox=function(className,l,t){        
  	this.element.setAttribute('class',className);
		this.element.style.left=l+'px';
  	this.element.style.top=t+'px';
		this.top=parseInt(this.element.style.top);
  	this.left=parseInt(this.element.style.left);
	}
			
		this.appendTo = function(parentElement) {
			parentElement.appendChild(this.element);
		}
		
		this.moveBox=function(){
        this.elementMain=document.getElementById('container');    
        var styleContainer = window.getComputedStyle(this.elementMain);
        var widthContainer = parseInt(styleContainer.getPropertyValue('width'));
        var heightContainer = parseInt(styleContainer.getPropertyValue('height'));
        if(this.left<=0 || this.left>(widthContainer-this.width)){
            this.dx=-this.dx;
        }
        if(this.top<=0 || this.top>(heightContainer-this.height)){
            this.dy=-this.dy;
        }
				this.left+=this.dx;
        this.top+=this.dy;
        this.element.style.left=this.left+'px';
        this.element.style.top=this.top+'px';
	   }
}