function BadBlock(divId, position) {
  var ht = 70; 
  var wd = 50; 
  var left = Math.floor(Math.random() * 500) + 20; 
  var bottom = 800;
  var baddie = document.createElement('div');
  var parent = document.getElementsByClassName('containerWrapper')[0];
  var divId = divId;

  this.create = function() {
    if (divId == 0){
      var deadBaddies = document.getElementsByClassName('baddie');
      var len = deadBaddies.length;
      if (len > 0) {  
        for (i=(len); i >0; i--) {
          parent.removeChild(deadBaddies[i-1]);    
        }
      }
    }
    baddie.setAttribute('class', 'baddie');
    baddie.style.height =  ht +'px';
    baddie.style.width = wd +'px';
    baddie.style.bottom = bottom +'px';
    baddie.style.left = left +'px';
    this.addClass('baddie'+divId);
    this.appendTo(parent);
  }

  this.move = function() {
    bottom = bottom - 1;
    baddie.style.bottom = bottom + 'px';
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(baddie);
  }

  this.addClass = function(className) {
    baddie.setAttribute("class", 
      baddie.getAttribute("class") + " " + className);
  }

}
