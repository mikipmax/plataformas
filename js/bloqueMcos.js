function BloqueMcos(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(400);
	this.setHeight(20);
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
		this.setY(this.getY()+Math.sin(this.contador*Math.PI/50)*9);

		
	}
	}
	BloqueMcos.prototype=Object.create(Kinetic.Image.prototype);
	


	