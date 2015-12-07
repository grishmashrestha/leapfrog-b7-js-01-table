function BoxAnimation(boxes){
	this.boxes = boxes;
	var intervalId;
	var that = this;

	this.animate = function(movement){
		intervalId = setInterval(function(){
			for (var i = 0; i<that.boxes.length;i++){
				that.checkBoxCollision(i);
				that.checkWallCollision(i);
				that.boxes[i].randomx += that.boxes[i].movex;
				that.boxes[i].randomy += that.boxes[i].movey;
				boxes[i].divi.style["left"] = that.boxes[i].randomx + 'px';
				boxes[i].divi.style["top"] = that.boxes[i].randomy + 'px';
			}
		},movement)
	}
	this.checkWallCollision = function(i){
		if(that.boxes[i].randomx>=(950)){
			that.boxes[i].movex = -3;
		}
		if(that.boxes[i].randomx<=0){
			that.boxes[i].movex=3;
		}
		if(that.boxes[i].randomy>=(350)){
			that.boxes[i].movey= -3;
		}
		if(that.boxes[i].randomy<=0){
		that.boxes[i].movey= 3;
		}
	}
	this.checkBoxCollision = function(i){
		if(i!=that.boxes.length-1){
			for(var j = i+1 ; j < that.boxes.length ; j++){
				positionXi = that.boxes[i].randomx;
				positionXj = that.boxes[j].randomx;
				positionYi = that.boxes[i].randomy;
				positionYj = that.boxes[j].randomy;
				if((positionXi < (positionXj+50)) && ((positionXi+50) >= positionXj) && (positionYi < (positionYj+50)) && ((positionYi+50) >= positionYj)){
				 //checks collision from right side
            if((positionXi+50)>=positionXj && positionXi<positionXj && (positionYi+50) > positionYj && (positionYj+50)>=positionYi){
//                console.log('1');
                that.boxes[i].movex =-2;
                that.boxes[j].movex =2;
            }
            
            //checks collision from bottom side
            else if((positionYi+50)>=positionYj && positionYi<positionYj && (positionXi+50)>=positionXj && positionXi<(positionXj+50)){
//                console.log('2');
                that.boxes[i].movey =-2;
                that.boxes[j].movey =2;
            }
            
            //checks collision from top side
            else if((positionYj+50)>=positionYi && positionYj<positionYi && (positionXi+50)>=positionXj && positionXi<(positionXj+50)){
//                console.log('3');
               that.boxes[i].movey =2;
                that.boxes[j].movey =-2;
            }
               
            //checks collision from left side   
            else if((positionXj+50)>=positionXi && positionXi>positionXj && positionYi<(positionYj + 50) && (50 + positionYi)>positionYj){
//                console.log('4');
                that.boxes[i].movex =2;
                that.boxes[j].movex =-2;
            }
	   		 } 
			}
		}
	}
}