function Bullet(car){
	this.element = document.createElement('div');
	this.car = car;
	this.bulletX;
	this.bulletY;
	var that = this;

	this.create = function(container){
		that.element.className = 'bullet';
		that.bulletX = that.car.positionX;
		that.bulletY = that.car.positionY-50;
		that.element.style['top'] = that.bulletY +'px';
		that.element.style['left'] = that.bulletX + 'px';
		container.appendChild(that.element);
	}
	this.update = function(){
		that.bulletY -= 1;
		that.element.style['top'] = that.bulletY + 'px';
	}
	this.removeBullet = function(container){
		container.removeChild(that.element);
	}
}