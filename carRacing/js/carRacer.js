var counter = 200;
var creator = new Creator();

creator.createPlayer();

var mainIntervalId = setInterval(function(){
  gameloop();
}, 4);

var gameloop = function() {
  creator.moveBackground();
  if (counter == 200) {
    creator.createBaddie();
    counter = 0;
  }
  creator.moveBaddies();
  creator.movePlayer();
  creator.checkBaddies();
  counter ++;
}

addEventListener("keydown", creator.checkKeyPressed, false);

