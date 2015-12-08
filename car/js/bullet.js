function bullet(){
  this.Top=400;
  this.Left=0;
  this.dy=0;
  element=document.createElement("div");
  this.element=element;
  
  var create=function(leftpos){

  this.element.setAttribute("class",'bullet');
  document.getElementsByClassName("main")[0].appendChild(this.element);
  this.element.style.top=400 + 'px';
  this.Top=400;
  this.Left=leftpos;
  this.element.style.left=this.Left+'px';
  console.log(this.element.style.left);
  // debugger
  }

  var move=function(){
    debugger
    this.dy=-15
    this.Top=this.Top + this.dy;
    console.log(this.Top);
    this.element.style.top=this.Top + 'px';
    console.log(this.element.style.top);
  }

  this.create=create;
  this.move=move;
}