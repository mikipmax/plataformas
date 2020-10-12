function NaveEnemiga(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(400);
	this.setHeight(20);
	this.contador=0;
	this.setImage(imagen);
	this.setX(x);
	this.setY(y);
	
	//para crear balas prx
	this.aleatorio=function(inferior,superior){
		var posibilidades=superior-inferior;
		var random=Math.random()*posibilidades;
		random=Math.floor(random);
		return parseInt(inferior)+random;
	}
	this.mover=function(){
		this.contador++;
		this.setX(this.getX()+Math.sin(this.contador/1910)*-120);
		
		
		
	}
	}
	NaveEnemiga.prototype=Object.create(Kinetic.Image.prototype);
	


	