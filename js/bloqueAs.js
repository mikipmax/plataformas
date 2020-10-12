function BloqueAs(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(90);
	this.setHeight(120);
	this.contador=0;
	this.setFillPatternImage(imagen);
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
		this.setY(this.getY()+Math.sin(this.contador*Math.PI/22)*9);
		
	}
	}
	BloqueAs.prototype=Object.create(Kinetic.Image.prototype);
	
