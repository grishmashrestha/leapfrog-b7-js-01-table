function car(){
  this.Top=400;
  this.Left=0;
  element=document.createElement("div");
  this.element=element;
  
  var create=function(){

    this.element.setAttribute("class",'car');
    document.getElementsByClassName("main")[0].appendChild(this.element);
  // debugger
  }
  var move=function(){
     this.element.style.left=this.Left+'px';
  }
  
  this.create=create;
  this.move=move;
}