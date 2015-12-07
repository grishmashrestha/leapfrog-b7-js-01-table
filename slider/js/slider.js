var longSlider = document.getElementsByClassName("longImageWrapper")[0];
var animator = new Animator(longSlider);
var slides = longSlider.children;
longSlider.style.marginLeft = "0px";
var imageWidth = 1000;

var leftButton = document.getElementsByClassName("imageLeft")[0];
var rightButton = document.getElementsByClassName("imageRight")[0];
leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;

var bottomBullets = document.getElementsByClassName("bottom-bullets")[0];
var bullet = document.getElementsByClassName("bullet");
var counter = 0;
var slidePosition = 0;


function slide(){
	counter++;

	if(counter >= slides.length){
		//setTimeout(slide,2000);
		animator.animate("margin-left",(imageWidth*(slides.length-1)),1000);
		counter = 0;
		}
		else if(counter< 0){
			counter = 0;
		}
		else{
			animator.animate("margin-left",-imageWidth,1000);
		}	

		setTimeout(checkSlidePosition,1000);

}
var intervalId = setInterval(slide, 2000);

//function to add bullets

function addBullets(){
	for (var i = 0; i < slides.length;i++){
		var span = document.createElement('span');
		span.className = 'bullet';
		span.id = i;
		if(i==0){
			span.className +=' active';
		}
		bottomBullets.appendChild(span);
		console.log(span);
		bullet[i].addEventListener('click',bulletClick);
	}
}
addBullets();

//function to handle the bullet click
function bulletClick(){
	clearInterval(intervalId);
	slidePosition = parseInt(longSlider.style.marginLeft);
	if ((slidePosition % imageWidth) == 0){
		animator.animate("margin-left",(counter-this.id)*imageWidth,1000);
		counter = this.id;
	}
	intervalId = setInterval(slide,2000);
	checkSlidePosition();
}

//function to position the image and active state of bullets
function checkSlidePosition(){
	for(var i = 0 ; i< slides.length ; i++){
		bullet[i].className = 'bullet';
	}
	bullet[counter].className += ' active';
}
function moveLeft(){
	clearInterval(intervalId);
	var current = parseInt(longSlider.style.marginLeft);
	if((current%1000) == 0 && (current < 0 )){
		counter--;
		setTimeout(checkSlidePosition,1000);
		animator.animate("margin-left",1000,1000);
	}
	intervalId = setInterval(slide,2000);
	
}
function moveRight(){
	clearInterval(intervalId);
	var current = parseInt(longSlider.style.marginLeft);
	if((current%1000) == 0 && (current > -4000)){
		counter++;
		setTimeout(checkSlidePosition,1000);
		animator.animate("margin-left",-1000,1000);
	}
	intervalId = setInterval(slide,2000);
}
function leftMouseOver(){
leftButton.children[0].src ="images/slider-left.png";
}
function leftMouseOut(){
leftButton.children[0].src ="images/slider-lefto.png";
}
function rightMouseOver(){
rightButton.children[0].src ="images/slider-right.png";
}
function rightMouseOut(){
rightButton.children[0].src ="images/slider-righto.png";
}