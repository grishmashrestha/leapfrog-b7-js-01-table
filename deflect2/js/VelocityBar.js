function VelocityBar(){
var element;
this.Height;
this.dy=1;
this.counter=0;
element=document.createElement('div');
this.element=element;

var create=function(){
    this.element.setAttribute("class",'velobar');
    document.getElementsByClassName("velocity")[0].appendChild(this.element);
    // this.Height=parseInt(this.element.style.height);
    this.Height=this.element.style.height;
    this.counter++;
    // this.element("here is the progress bar"+this.counter);
}

var calibrate=function(){
  this.counter+=.05;
  console.log('Height= '+ this.Height);
  this.Height=this.Height+this.dy;
  console.log('Height= '+ this.Height);
  this.element.style.height=this.Height;
  this.element.innerHTML=this.counter;
}
this.create=create;
this.calibrate=calibrate;
}