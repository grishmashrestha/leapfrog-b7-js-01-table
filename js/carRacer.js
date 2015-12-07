var counter = 801;
var creator = new Creator();

creator.createPlayer();
setInterval(function(){
  gameloop();
  
}, 5);

var gameloop = function() {
  creator.moveBackground();
  if (counter > 800) {
    creator.createBaddies();
    counter = 0;
  }
  counter ++;
  // creator.checkPlayerForCollision();
}

// function BadBlocks() {
//   var ht, wd, left, top;
//   var baddie = document.createElement('div');
//   wd = 50;

//   this.init = function() {

//   }

// }
