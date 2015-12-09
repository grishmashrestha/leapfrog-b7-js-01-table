function BoxAnimation() {
	var maxWidth = 370;
	var maxHeight = 270;

	var whiteBox;
	var boxes = [];
	var noOfBoxes = 3;
	var counter = 0;

	this.init = function() {
		//createWhiteBox();

		for (var i=0; i<noOfBoxes; i++) {
			createBox(i);
		}

		animate();
	}


	var createBox = function(boxId) {
		boxes[counter] = new Box();
		boxes[counter].addClass('box');
		boxes[counter].addId(boxId);
		boxes[counter].appendTo(document.getElementsByClassName('canvas')[0]);
		counter++;
		
	}
/*
	var createWhiteBox = function(){
		whiteBox = new Box();
		whiteBox.addId('White');
		whiteBox.appendTo(document.getElementsByClassName('canvas')[0]);
	}
*/
	function animate(){
		var x = [];
		var y = [];

		var counterX = [];
		var counterY = [];

		var boxCurrentXPosition = [];
		var boxCurrentYPosition = [];

		var boxCurrentXPositionB = [];
		var boxCurrentYPositionB = [];

		for(var i=0;i<noOfBoxes;i++){
		//assign each boxes in array of canvass class
		

		//define initial position of boxes
		x[i] = initBallPosition();
		y[i] = initBallPosition();

		//define initial speed of boxes
		counterX[i] = 1;
		counterY[i] = 1;
		
		//scatterBoxes();
		//move();

		}

/*
		function scatterBoxes(){
			var count = 0; 
			while(count < noOfBoxes){
				boxes[count].element.style.left = x[count] + 'px';
				boxes[count].element.style.top = y[count] + 'px';

				count++;
			}
		}

		function move(){

			var canvas = document.getElementsByClassName('canvas')[0];

			canvas.addEventListener('click', function (event) {
     				
     				var xCord = event.clientX - canvas.getBoundingClientRect().left - 30;
     				var yCord = event.clientY - canvas.getBoundingClientRect().top - 30;
     				console.log('x: ' + xCord + '  y: ' + yCord);

     				//var intervalID = setInterval(shoot,5);

	 			});



			function shoot(){
				var count = 0; 
				while(count < noOfBoxes){
					boxes[count].element.style.left = x[count] + 'px';
					boxes[count].element.style.top = y[count] + 'px';
					x[count]+=counterX[count];
					y[count]+=counterY[count];

					if(x[count] >= maxWidth)
						counterX[count] = -1;
					if(x[count] <= 0)
						counterX[count] = 1;

					if(y[count] >= maxHeight)
						counterY[count] = -1;
					if(y[count] <= 0)
						counterY[count] = 1;			

					count++;
			}

			
		}


		

		}
	

	*/
		function bounce(){
			var count = 0; 
			while(count < noOfBoxes){
				boxes[count].element.style.left = x[count] + 'px';
				boxes[count].element.style.top = y[count] + 'px';
				x[count]+=counterX[count];
				y[count]+=counterY[count];

				if(x[count] >= maxWidth)
					counterX[count] = -1;
				if(x[count] <= 0)
					counterX[count] = 1;

				if(y[count] >= maxHeight)
					counterY[count] = -1;
				if(y[count] <= 0)
					counterY[count] = 1;			

				count++;
			}

		
			collide();		
		}


		var intervalID = setInterval(bounce,5);

		function collide(){
			for(var i=0; i<boxes.length; i++){
				boxCurrentXPosition[i] = parseInt(boxes[i].element.style.left);
				boxCurrentYPosition[i] = parseInt(boxes[i].element.style.top);

				for(var x=0; x<boxes.length; x++){
					boxCurrentXPositionB[x] = parseInt(boxes[x].element.style.left);
					boxCurrentYPositionB[x] = parseInt(boxes[x].element.style.top);

					if(i != x){

						if((Math.abs(boxCurrentXPosition[i] - boxCurrentXPositionB[x]) <= 30) && (Math.abs(boxCurrentYPosition[i] - boxCurrentYPositionB[x]) <= 30)){

							if(boxCurrentXPosition[i] > boxCurrentXPositionB[x]){
								console.log('Blue collided with Green')
								counterX[i] = 1;
								counterX[x] = -1;
							}


							if(boxCurrentXPositionB[x] > boxCurrentXPosition[i]){
								console.log('Green collided with Blue')
								counterX[i] = -1;
								counterX[x] = 1;	
							}

							if(boxCurrentYPosition[i] > boxCurrentYPositionB[x]){
								console.log('Blue collided with Green')
								counterY[i] = 1;
								counterY[x] = -1;	
							}

							if(boxCurrentYPositionB[x] > boxCurrentYPosition[i]){
								console.log('Green collided with Blue')
								counterY[i] = -1;;
								counterY[x] = 1;	
							}

						}


					}	
				}


			}
		}

	}

	function initBallPosition(){
		return Math.floor((Math.random() * 170) + 100);
	}
}