function Enemigo2(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(60);
	this.setHeight(90);
	this.contador=0;

	this.setImage(imagen);
	this.setX(x);
	this.setY(y);
	this.aleatorio=function(inferior,superior){
		var posibilidades=superior-inferior;
		var random=Math.random()*posibilidades;
		random=Math.floor(random);
		return parseInt(inferior)+random;
	}
	this.mover=function(){
		this.contador++;
		this.setY(this.getY()+Math.sin(this.contador*Math.PI/80)*9);
		

		
	}
	
}
Enemigo2.prototype=Object.create(Kinetic.Image.prototype);