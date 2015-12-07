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

  this.createBaddies = function(){
    var noOfBaddies = Math.floor(Math.random() * 3) + 1;
    counterForBaddiesPosition++;
    console.log(noOfBaddies); 
    for (var i=0; i<noOfBaddies; i++) {
      allBaddies[i] = new BadBlock(i,counterForBaddiesPosition);
      allBaddies[i].create();
    }
  }

  this.moveBaddies = function() {
    var len = allBaddies.length;
    for(var i=0; i<len; i++){
      allBaddies[i].move();
    }
  }

  this.checkKeyPressed = function(e) {
    var l = player.getLeft();
    if (e.keyCode == "37") {
      player.setLeft(l-4);
    }
    else if (e.keyCode == "39") {
      player.setLeft(l+4);
    }
    player.move();
  }

  this.getAllBaddie = function() {
    return allBaddies;
  }

  this.createPlayer = function() {
    player = new Player();
    player.create();
  }

}