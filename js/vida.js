function Vida(x,y,imagen){
Kinetic.Image.call(this);
this.setWidth(30);
this.setHeight(30);
this.setX(x);
this.setY(y);
this.setImage(imagen);
}
Vida.prototype=Object.create(Kinetic.Image.prototype);