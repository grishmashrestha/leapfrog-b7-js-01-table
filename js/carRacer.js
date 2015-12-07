var counter = 800;
var creator = new Creator();

creator.createPlayer();
addEventListener("keydown", creator.checkKeyPressed, false);

setInterval(function(){
  gameloop();
}, 1);

var gameloop = function() {
  creator.moveBackground();
  if (counter == 800) {
    creator.createBaddies();
    counter = 0;
  }
  creator.moveBaddies();
  counter ++;
  // creator.checkPlayerForCollision();
}


