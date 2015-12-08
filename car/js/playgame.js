function PlayGame(){
  this.mainWrapper;
	this.container;
  this.imageWrapper;
  var moveBackground = 0;
  var enemies =[];
  var bullets =[];
  var car;
  var intervalId;
  var that = this;
  this.init = function(){
  	that.mainWrapper = document.getElementsByClassName('mainWrapper')[0];
    that.container = document.createElement('div');
    that.container.className = 'container';
    that.imageWrapper = document.createElement('div');
    that.imageWrapper.className ='imageWrapper';
    that.mainWrapper.appendChild(that.container);
    that.container.appendChild(that.imageWrapper);

    car = new Car();
    car.addClass('car');
    car.setInitialPosition({positionX: 250,positionY:450});
    car.appendTo(that.container);
    that.startGame();
  }
  this.startGame = function(){
    document.addEventListener('keydown', that.moveCar);
    document.addEventListener('keydown',that.fireBullet);
    intervalId = setInterval(function(){
      that.updateBackground();
      that.createEnemy();
      that.updateEnemy();
      that.detectCollision();
      that.updateBullet();
    },5);
  }
  this.updateBackground = function(){
    moveBackground -=3;
    that.imageWrapper.style['bottom'] = moveBackground +'px';
  }
  this.createEnemy = function(){
    if(moveBackground%250==0){
      enemy = new Enemy(that.container);
      enemy.create(-moveBackground);
      enemies.push(enemy);
    }
  }
  this.updateEnemy = function(){
    for(var i = 0;i<enemies.length;i++){
      enemies[i].update();
    }
  }
  that.moveCar = function(e){
    if(e.keyCode == '37' && car.positionX!=50){
      if(car.positionX==250){
        car.movePosition(-200);
      }else if(car.positionX==425){
        car.movePosition(-175);
      }
    }
    if(e.keyCode == '39' && car.positionX!=425){
      if(car.positionX==50){
        car.movePosition(200);
      }else if(car.positionX == 250){
        car.movePosition(175);
      }
    }
    if(e.keyCode == '32'){
      var bullet = new Bullet(car);
      bullet.create(that.container);
      bullets.push(bullet);
      // bulletCounter--;
      // bulletFlag++;
    }
  }
  this.fireBullet = function(e){
     if(e.keyCode == '32'){
      var bullet = new Bullet(car);
      bullet.create(that.container);
      bullets.push(bullet);
    }
  }
  this.updateBullet = function(){
    for(var i = 0 ; i< bullets.length; i++){
      bullets[i].update();
      if(bullets[i].bulletY == 0){
        bullets[i].removeBullet(that.container);
        bullets.splice(i,1);
      }
    }
  }
  this.detectCollision = function(){
    var carPositionX = car.positionX;
    var carPositionY = car.positionY;
    for(var i = 0; i< enemies.length;i++){
      if(enemies[i].positionX <=carPositionX+75 && enemies[i].positionX+75>=carPositionX &&enemies[i].positionY <= carPositionY+100 && enemies[i].positionY+100>=carPositionY){
            that.endGame();
      }
      for(var j = 0; j< bullets.length;j++){
        if(enemies[i].positionX <= bullets[j].bulletX+100 && enemies[i].positionX + 100 >= bullets[j].bulletX && enemies[i].positionY <= bullets[j].bulletY+100 && enemies[i].positionY + 100 >= bullets[j].bulletY){
          bullets[j].removeBullet(that.container);
          bullets.splice(j,1);
          enemies[i].removeEnemy(that.container);
          enemies.splice(i,1);
          break;
        }
      }
    }
  }
  this.endGame = function(){
    var gameOverWrapper = document.createElement('div');
    gameOverWrapper.className = 'gameOver';
    that.mainWrapper.appendChild(gameOverWrapper);
    clearInterval(intervalId);
    gameOverWrapper.style.display = 'block';
  }
}
var play = new PlayGame();
play.init();