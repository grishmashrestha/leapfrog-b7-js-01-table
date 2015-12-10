function Player() {
  var ht = 100; 
  var wd = 50; 
  var left = 250+ wd/2; 
  var top = 600;
  var player = document.createElement('div');
  var parent = document.getElementsByClassName('containerWrapper')[0];
  var divId = divId;

  this.create = function() {
    player.setAttribute('class', 'player');
    player.style.height =  ht +'px';
    player.style.width = wd +'px';
    player.style.top = top +'px';
    player.style.left = left +'px';
    this.appendTo(parent);
  }

  this.move = function() {
    if ((left < 0) || (left > (600-wd))) {      
    }
    else {
      player.style.left = left +'px';
    }
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(player);
  }

  this.addClass = function(className) {
    player.setAttribute("class", 
      player.getAttribute("class") + " " + className);
  }

  // getter and setter methods 
  this.getLeft = function() {
    return left;
  }

  this.getTop = function() {
    return top;
  }

  this.getWd = function() {
    return wd;
  }

  this.getHt = function() {
    return ht;
  }

  this.setLeft = function(l) {
    left = l;
  }


}
