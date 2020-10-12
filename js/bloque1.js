function Bloque1(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(20);
	this.setHeight(610);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	Bloque1.prototype=Object.create(Kinetic.Rect.prototype);
	
 