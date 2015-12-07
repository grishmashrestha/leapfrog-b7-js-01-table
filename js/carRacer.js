var counter = 800;
var creator = new Creator();

creator.createPlayer();

var mainIntervalId = setInterval(function(){
  gameloop();
}, 1);

var gameloop = function() {
  creator.moveBackground();
  if (counter == 800) {
    creator.createBaddies();
    counter = 0;
  }
  creator.moveBaddies();
  creator.checkBaddies();
  creator.movePlayer();
  counter ++;
}

addEventListener("keydown", creator.checkKeyPressed, false);

