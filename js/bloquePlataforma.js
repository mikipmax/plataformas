function BloquePlataforma(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(800);
	this.setHeight(90);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	BloquePlataforma.prototype=Object.create(Kinetic.Rect.prototype);
	
 