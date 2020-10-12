function Llave(x,y,img){
Kinetic.Image.call(this);
this.setWidth(30);
this.setHeight(40);
this.setX(x);
this.setY(y);
this.setImage(img);

}
Llave.prototype=Object.create(Kinetic.Image.prototype);