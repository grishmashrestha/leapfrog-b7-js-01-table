function Player() {
  var ht = 50; 
  var wd = 100; 
  var left = 250; 
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
