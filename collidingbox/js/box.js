function Box(element){
	this.randomx;
	this.randomy;
	this.movex =1;
	this.movey =1;
	this.element = element;
	this.divi = document.createElement('div');
	var that = this;
	
	this.randomGenerator = function(low,high){
		var randomgen = Math.floor((Math.random()*high)+low);
		return randomgen;
	}
	this.checkRandom = function(anotherBox){
		while(((that.randomx <= (anotherBox.randomx+50)) && ((that.randomx+50) >= anotherBox.randomx)) && ((that.randomy <= (anotherBox.randomy+50)) && ((that.randomy+50) >= anotherBox.randomy))){
			that.randomx = that.randomGenerator(1,950);
			that.randomy = that.randomGenerator(1,350);
			anotherBox.randomx =anotherBox.randomGenerator(1,950);
			anotherBox.randomy = anotherBox.randomGenerator(1,350);
			console.log("sadness");
		}
	}
	this.init = function(){
	    that.divi.className = "box";
        that.randomx = that.randomGenerator(1,950);
        that.randomy = that.randomGenerator(1,350);
        that.divi.style["left"] = that.randomx + 'px';
        that.divi.style["top"] = that.randomy + 'px';
        that.element.appendChild(that.divi);
	}
}