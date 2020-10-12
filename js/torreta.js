function Torreta(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(20);
	this.setHeight(20);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	Torreta.prototype=Object.create(Kinetic.Image.prototype);
	
 