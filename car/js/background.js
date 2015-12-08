function bg(){
  this.Top=-19500;
  this.dy=5;
  element=document.createElement("div");
  this.element=element;

var create=function(){
    this.element.setAttribute("class",'bg');
    document.getElementsByClassName('main')[0].appendChild(this.element);
}
  

var move=function(){
      // debugger;
      this.Top=this.Top+this.dy;
      this.element.style.top=this.Top+'px';
  
}
this.create=create;
this.move=move;
}