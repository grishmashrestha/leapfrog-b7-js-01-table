 function BoxMove()
 {
 var box=[];
 
var totbox=10;
console.log("p");
var divMain=document.getElementById("divMain");
var striker=new Box;
striker.element.setAttribute("class", "box green");
divMain.appendChild(striker.element);
striker.initBoxPos(10,550);
box[0]=striker;


 this.boxGen = function()
 {
	 
		for (var i=1; i<totbox; i++) {
			box[i] = new Box();
              box[i].element.setAttribute("class","box");
      
      //box[i].appendTo("divMain");
	  divMain.appendChild(box[i].element);
	   
	  var posx=Math.floor(Math.random()*650+5);
	  var posy=Math.floor(Math.random()*500+5);
       box[i].initBoxPos( posx,posy );
      
		}
	}
  var angle,vel;
  
  this.animate = function(angle,vel){
    //var vel=parseInt(document.getElementById("Velocity").value );
    var ang=parseInt(document.getElementById("Angle").value );
   
	var	xcomp=45/angle*vel;
	var	ycomp=vel*angle/45;
	
	
	
	
    striker.initSpeed(xcomp*1,-1*ycomp);
	console.log(vel);
	console.log(angle);
	function move(){
      for (var i = 0; i < totbox; i++) {
        box[i].detectWall();
        box[i].moveBox();
		
      };
      for (var i = 0; i < totbox; i++) {
          for (var j = i+1; j < totbox; j++) {
            if (box[i].hitTest(box[j]) == 1) {
              //box[i].reverseDir(); 
			  //box[j].initSpeed(-box[i].element.dx,-box[i].element.dy);
			  box[j].initSpeed(1*vel,box[i].element.dy);
			  box[i].initSpeed(-1*vel,-box[i].element.dy);
			};
			if (box[i].hitTest(box[j]) == 2) {
              //box[i].reverseDir(); 
			  //box[j].initSpeed(-box[i].element.dx,-box[i].element.dy);
			  box[j].initSpeed(box[i].element.dx,1*vel);
			  box[i].initSpeed(-box[i].element.dx,-1*vel);
			  
			};
			if (box[i].hitTest(box[j]) == 3) {
              //box[i].reverseDir(); 
			  //box[j].initSpeed(-box[i].element.dx,-box[i].element.dy);
			  box[j].initSpeed(box[i].element.dx,-1*vel);
			  box[i].initSpeed(-box[i].element.dx,1*vel);
			};
			if (box[i].hitTest(box[j]) == 4) {
              box[i].reverseDir(); 
			  //box[j].initSpeed(-box[i].element.dx,-box[i].element.dy);
			  box[j].initSpeed(-1*vel,box[i].element.dy);
			  box[i].initSpeed(1*vel,-box[i].element.dy);
			};
          };
      };
    }
    setInterval(move,10);
  }
 }  