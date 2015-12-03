var x = [600,800,520,820,180,240,360,300,560,420,600,480,540,600,660,710,770,830,890,945];
var y = [10,20,40,200,340,160,160,210,210,250,250,310,320,370,420,480,530,530,220,90];
var dx = [-1,2,1,2,3,4,-1,1,-1,-1,1,2,1,-1,-3,1,2,3,1,-2];
var dy = [-1,2,1,-1,-1,1,-1,1,1,-2,1,-3,2,-1,1,2,2,-2,3,4];
  function hitTest(xf,yf,xs,ys,w,h){
  	if ((ys+h) <= yf) return false;
  	else if(xs >= (xf+w)) return false;
  	else if(ys >= (yf+h)) return false;
  	else if((xs+w) <= xf) return false;
  	return true;
  }
  var divBox = document.getElementsByClassName('divBox');
  function bounceDiv() {
  	for(var i = 0; i < divBox.length; i++){
	  	if( x[i]<=0 || x[i]>=950) dx[i]=-dx[i]; 
	  	if( y[i]<=0 || y[i]>=550) dy[i]=-dy[i]; 
	  		x[i]+=dx[i]; 
	  		y[i]+=dy[i];
	  	divBox[i].style.left = x[i] + 'px';
	  	divBox[i].style.top = y[i] + 'px';
  	}
  	for (var i = 0; i < divBox.length; i++) {
  		for (var j = 0; j < divBox.length; j++) {
  			if(i != j)
  			{
  				if (hitTest(x[i],y[i],x[j],y[j],50,50) == true) {
  					dx[i] = -dx[i];
  					dx[j] = -dx[j];
  					dy[i] = -dy[i];
  					dy[j] = -dy[j];

  					x[i] += dx[i];
  					y[i] += dy[i];
  					x[j] += dx[j];
  					y[j] += dy[j];

  					divBox[i].style.left = x[i] + 'px';
  					divBox[i].style.top = y[i] + 'px';

  					divBox[j].style.left = x[j] + 'px';
  					divBox[j].style.top = y[j] + 'px';

  				}
  			}
  		}	
  	}
  }
  setInterval(bounceDiv, 50);