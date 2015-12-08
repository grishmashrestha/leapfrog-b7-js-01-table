function box(){
  
  var ClassName;
  var Height;
  var Width;
  var Top;
  var Left;
  var element;
  var dx=0;
  var dy=0; 
  
    element=document.createElement("div");

  this.Height=Height;
  this.Width=Width;
  this.Top=Top;
  this.Left=Left;
  this.element=element;
  this.dx=dx;
  this.dy=dy;


  var init=function(ParentClass,ClassName,Height,Width,T,L){
    this.element.setAttribute("class",ClassName);
    ParentClass.appendChild(this.element);
    element.style.border='4px solid white';
    element.style.top=T+'px';
    element.style.left=L+'px';
    element.style.height=Height+'px';
    element.style.width=Width+'px';
    this.Top=parseInt(element.style.top);
    this.Left=parseInt(element.style.left);
    // console.log(Top);
  }

  var move=function(){
    
    if(this.Top>=450)
    {
      this.dy=-this.dy;
    }
    if(this.Top<=0)
    {
      this.dy=-this.dy;
    }
    if(this.Left>=450)
    {
      this.dx=-this.dx;
    }
    if(this.Left<=0)
    {
      this.dx=-this.dx;
    }
    
    this.Left=this.Left+this.dx;
    this.Top=this.Top+this.dy;

    element.style.top=this.Top+'px';
    element.style.left=this.Left+'px';
  }

  
  var show=function()
  {
    console.log('Top='+this.dx);
    console.log('Left='+this.dy);
  }



  this.init=init;
  this.move=move;
  this.show=show;
}


