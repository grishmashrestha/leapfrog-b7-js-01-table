function Creator() {
  var allBaddies = [];
  var player;
  var counterForBaddiesPosition = 0;

  this.moveBackground = function() {
    var container = document.getElementsByClassName('container')[0];
    var style = window.getComputedStyle(container);
    var initial = style.getPropertyValue("top");
    initial = parseInt(initial);
    container.style["top"] = initial + 1 + 'px'; 
  }

  this.createBaddie = function(){
    var baddie = new BadBlock();
    baddie.create();
    allBaddies.push(baddie);
  }

  this.moveBaddies = function() {
    var len = allBaddies.length;
    for(var i=0; i<len; i++){
      var isKilled = false;
      isKilled = allBaddies[i].move();
      if (isKilled) {
        allBaddies.splice(i, 1);
      }
    }
  }

  this.checkKeyPressed = function(e) {
    var l = player.getLeft();
    if (e.keyCode == "37") {
      player.setLeft(l-200);
    }
    else if (e.keyCode == "39") {
      player.setLeft(l+200);
    }
  }

  this.getAllBaddie = function() {
    return allBaddies;
  }

  this.createPlayer = function() {
    player = new Player();
    player.create();
  }

  this.checkBaddies = function() {
    var detector = new CollisionDetector();
    var len = allBaddies.length;
    for(var i=0; i<len; i++){
      detector.check(allBaddies[i],player);
    }
  }

  this.movePlayer = function() {
    player.move();
  }

}