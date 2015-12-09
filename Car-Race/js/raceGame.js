function RaceAnimation(){
	var carWidth = 100;
	var carHeight = 200;
	var trackHeight = 640;
	var trackWrapper = document.getElementsByClassName('trackWrapper')[0];
	var track = document.getElementsByClassName('track')[0];
	var trackStyle = window.getComputedStyle(track);
	var trackMargin = parseInt(trackStyle.marginTop);
	var rivalXPositionArray = new Array(25, 175, 325);
	var rivalTop = -180;
	var gameSpeed = 50;
	var intervalId;

	this.initiate = function(){

		createPlayer();
		movePlayer();
		createRival();
		replay();
		intervalId = setInterval(animate, gameSpeed);

		console.log(gameSpeed);
		//setInterval(createRival,500);
	}

	var createPlayer = function(){
		this.player = new Car();
		player.addClass('playerCar');
		player.appendTo(document.getElementsByClassName('trackWrapper')[0]);
	}

	var createRival = function(){

		this.rival = new Car();
		rival.addClass('rivalCar');
		rival.appendTo(trackWrapper);
		rival.element.style.position = 'absolute';
		rival.element.style.left = rivalXPositionArray[getRivalXPosition()] + 'px';

		//this.style = window.getComputedStyle(track);
		//this.trackMargin = parseInt(this.style.marginTop);

		rival.element.style.top = rivalTop + 'px';
	}

	var animate = function(){
		
		trackMargin += 10;
		track.style.marginTop = trackMargin + 'px';

		//console.log(trackMargin);
		this.rival = document.getElementsByClassName('rivalCar')[0];
		var rivalStyle = window.getComputedStyle(this.rival);
		var rivalLeftStyle = parseInt(rivalStyle.left);
		
		
		this.player = document.getElementsByClassName('playerCar')[0];
		var playerStyle = window.getComputedStyle(this.player);
		var playerLeftStyle = parseInt(playerStyle.left);
		var playerTopStyle = parseInt(playerStyle.top);

		
		console.log(playerTopStyle);

		if(rivalTop < trackHeight){
			rivalTop+=10;
			rival.style.top = rivalTop + 'px';		

		}else{
			rivalTop = -180;
			rival.style.left = rivalXPositionArray[getRivalXPosition()] + 'px';
		}


		if((playerTopStyle - rivalTop) <= carHeight &&
			(playerLeftStyle == rivalLeftStyle)){
				clearInterval(intervalId);
			}
		
	}

	var movePlayer = function(){
		document.onkeydown = function(e) {

			this.player = document.getElementsByClassName('playerCar')[0];
			var playerStyle = window.getComputedStyle(this.player);
			var playerLeft = parseInt(playerStyle.left);

    		switch (e.keyCode) {
        		case 37:
            		if(playerLeft > 25){
            			this.player.style.left = (playerLeft - 150) + 'px';
            		}
            		
            		break;
        		case 38:
            		//alert('up');
            		break;
        		case 39:
            		if(playerLeft < 325){
            			this.player.style.left = (playerLeft + 150) + 'px';
            		}
            		break;
        		case 40:
            		//alert('down');
            		break;
    		}
		};
	}

	var getRivalXPosition = function(){
		return Math.floor((Math.random() * 3));
	}


	var replay = function(){
		var replayButton = document.getElementsByClassName('replayButton')[0];
		
		replayButton.addEventListener('click', function (event) {
					console.log('Button Clicked');
					rivalTop = -180;
     				intervalId = setInterval(animate, gameSpeed);
	 			});	
	}
	
}