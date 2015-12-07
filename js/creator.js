function Creator() {
  var allBaddies = [];
  var player;
  var counterForBaddiesPosition = 0;

  this.moveBackground = function() {
    var container = document.getElementsByClassName('container')[0];
    var style = window.getComputedStyle(container);
    var initial = style.getPropertyValue("top");
    initial = parseInt(initial);
    initial++;
    container.style["top"] = initial + 'px'; 
  }

  this.createBaddies = function(){
    var noOfBaddies = Math.floor(Math.random() * 3) + 1;
    counterForBaddiesPosition++;
    console.log(noOfBaddies); 
    for (i=0; i<noOfBaddies; i++) {
      allBaddies[i] = new BadBlock(i,counterForBaddiesPosition);
      allBaddies[i].create();
    }
  }

  this.getAllBaddie = function() {
    return allBaddies;
  }

  this.createPlayer = function() {
    player = new Player();
    player.create();
  }

}