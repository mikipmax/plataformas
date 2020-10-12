function EnemigoMover(imagen, animaciones){
	Kinetic.Sprite.call(this);
	this.setWidth(40);
	this.setHeight(70);
	this.attrs.image=imagen;
	this.setAnimations(animaciones);
	this.setAnimation("mover");
	
	this.vx=-8;
	this.vy=0;
	this.limiteDer=0;
	this.direccion=1;
	this.limiteTope=0;
	this.contador=0;
	this.attrs.frameRate=10;

	
		
}
EnemigoMover.prototype=Object.create(Kinetic.Sprite.prototype);