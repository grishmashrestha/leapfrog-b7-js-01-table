function Enemy(container){
  this.element = document.createElement('div');
  this.container = container;
  this.positionX;
  this.positionY;
  var that = this;

  this.create = function(positionY){
    that.element.className = 'enemy';
    that.positionX = that.getRandomPosition();
    that.positionY = -100;
    that.element.style['left'] = that.positionX +'px';
    that.element.style['top'] = that.positionY + 'px';
    that.container.appendChild(that.element);
  }
  this.update = function(){
    that.positionY +=1;
    that.element.style['top'] = that.positionY +'px';
  }
  this.getRandomPosition = function(){
    var randomNumber = Math.random();
    if(randomNumber <=0.33){
      return 50;
    }else if(randomNumber > 0.33 && randomNumber <= 0.66){
      return 250;
    }else{
      return 425;
    }
  }
  this.removeEnemy = function(container){
    that.container.removeChild(that.element);
  }
}



