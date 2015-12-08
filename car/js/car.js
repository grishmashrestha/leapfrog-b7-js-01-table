function Car(){
  this.element=document.createElement("div");
  this.positionX;
  this.positionY;
  var that = this;
 
  this.addClass = function(className){
   that.element.className = className;
  }
  this.appendTo = function(parentElement){
   parentElement.appendChild(that.element);
  }
  this.setInitialPosition = function(position){
    that.positionX = position.positionX;
    that.positionY = position.positionY;

    that.element.style['left'] = that.positionX + 'px';
    that.element.style['top'] = that.positionY +'px';
  }
  this.movePosition = function(positionX){
    that.positionX += positionX;
    that.element.style['left'] = that.positionX + 'px'; 
  }
}