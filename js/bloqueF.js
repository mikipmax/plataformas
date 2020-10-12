function BloqueF(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(100);
	this.setHeight(40);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	BloqueF.prototype=Object.create(Kinetic.Rect.prototype);
	
 