// MAIN CLASS OF THE APPLICATION

function BoxCollider() {
  var boxes = []; 
  var container; 
  var totalBoxes = 6;

 
  var box;
  var boxAnimator;
  
  var that = this;

  this.start = function() {
    container = document.getElementsByClassName('container')[0];

   
    for (var i = 0; i < totalBoxes; i++) {
      box = new Box();
      box.addClass('box');
      box.setInitialPos();
      box.appendTo(container);
     
      boxes.push(box);
    }

    that.startBoxCollider();
  }

  this.startBoxCollider = function() {
    boxAnimator = new BoxAnimator(boxes);
    boxAnimator.animate(10);

  }
}

var boxCollider = new BoxCollider();
boxCollider.start();
