function Block(){
	this.bottom=1000;
	this.left=50;
	this.element=document.getElementById('block');
	
	this.create=function(){
		this.element=document.createElement('div');
		this.element.setAttribute('id','block');
		this.element.setAttribute('class','block');
		document.getElementsByClassName('road')[0].appendChild(this.element);
		var l=Math.floor((Math.random() * 450) + 1);
		this.element.style.bottom=this.bottom+'px';
		if(this.left==50){
			this.left=350;			
		}else	if(this.left==350){
			this.left=50;
		}
		this.element.style.left=this.left+'px';
		this.bottom=this.bottom+1000;
		console.log(this.left);
		
		
	}
}