function Bloque3(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(10000);
	this.setHeight(29);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	Bloque3.prototype=Object.create(Kinetic.Rect.prototype);
	
 