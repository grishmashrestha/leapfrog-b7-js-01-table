function Player() {
  var ht = 50; 
  var wd = 100; 
  var left = 250; 
  var bottom = 800;
  var player = document.createElement('div');
  var parent = document.getElementsByClassName('container')[0];
  var divId = divId;

  this.create = function() {
    debugger;
    player.setAttribute('class', 'player');
    player.style.height =  ht +'px';
    player.style.width = wd +'px';
    player.style.bottom = bottom +'px';
    player.style.left = left +'px';
    this.addClass('player'+divId);
    this.appendTo(parent);
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(player);
  }

  this.addClass = function(className) {
    player.setAttribute("class", 
      player.getAttribute("class") + " " + className);
  }

}
