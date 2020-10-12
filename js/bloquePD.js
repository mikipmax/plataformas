function BloquePD(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(800);
	this.setHeight(140);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
	}
	BloquePD.prototype=Object.create(Kinetic.Rect.prototype);
	
 