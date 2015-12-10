function BadBlock() {
  var ht = 100; 
  var wd = 70; 
  var left = (((Math.floor(Math.random() * 3) + 1) * 200) - 100 - (wd/2)); 
  var top = 10;
  var baddie = document.createElement('div');
  var parent = document.getElementsByClassName('containerWrapper')[0];

  this.create = function() {
    baddie.setAttribute('class', 'baddie');
    baddie.style.height =  ht +'px';
    baddie.style.width = wd +'px';
    baddie.style.top = top +'px';
    baddie.style.left = left +'px';
    this.appendTo(parent);
  }

  this.move = function() {
    var amIDead = false;

    if (top == 800){
      amIDead = removeBaddie();
    }
    else {
      top = top + 2;
      baddie.style.top = top + 'px';
    }
    return amIDead;
  }

  var removeBaddie = function() {
    parent.removeChild(baddie);
    return true;
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(baddie);
  }

  this.addClass = function(className) {
    baddie.setAttribute("class", 
      baddie.getAttribute("class") + " " + className);
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

}
