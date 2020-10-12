function Bala(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(20);
	this.setHeight(20);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	Bala.prototype=Object.create(Kinetic.Rect.prototype);
	
 