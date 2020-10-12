


var framesP = {
  estatico: [{
    x: 30,
        y: 0,
        width: 65,
        height: 79
  }],
    caminar: [{
        x: 30,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 109,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 0,
        width: 65,
    height: 79
  }, {
    x: 267,
    y: 0,
    width: 65,
    height: 79
  }, {
    x: 346,
    y: 0,
    width: 65,
    height: 79
  }, {
    x: 425,
    y: 0,
    width: 65,
    height: 79
  }],
    saltarFrames: [{
        x: 109,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 70,
        width: 65,
        height: 79
    },{
        x: 188,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 267,
        y: 70,
        width: 65,
    height: 79
  }, {
        x: 267,
        y: 70,
        width: 65,
    height: 79
  }, {
    x: 346,
    y: 70,
    width: 65,
    height: 79
  }, {
    x: 346,
    y: 70,
    width: 65,
    height: 79
  }, {
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  }]
};


var stage, fondo, grupoAssets,puntaje, imagenFondo, imagenFondo2;
var keyboard = {};
var intv;
var personaje;
var grav=3.58;
var val_reb=-0.2;
var b=false;
var juego=new Game();
var imgH=new Image();
imgH.src="imgs/Heroe.png";
var imgEn=new Image();
imgEn.src="imgs/enemy.png";
var imgMon=new Image();
imgMon.src="imgs/moneda.png";
var imgPlata=new Image();
imgPlata.src="imgs/pattern.png";
var imgPuer=new Image();
imgPuer.src="imgs/puerta.png";
var imgLla=new Image();
imgLla.src="imgs/llave.png";
var imgFon=new Image();
imgFon.src="imgs/fondo.jpg";

var imgN=new Image();
imgN.src="imgs/nebulosa.png";
var imgNE=new Image();
imgNE.src="imgs/naveE.png";
var imgT=new Image();
imgT.src="imgs/torreta.png";
var imgAs=new Image();
imgAs.src="imgs/blAs.png";
var imgE2=new Image();
imgE2.src="imgs/enemy2.png";
var imgRo=new Image();
imgRo.src="imgs/patternro.png";
var imgC=new Image();
imgC.src="imgs/corazon.png";

grupoAssets=new Kinetic.Group({
  x:0,
  y:0
});
stage = new Kinetic.Stage({
container:"game",
width:1366,
height:610
});
puntaje=new Kinetic.Text({
  text: "Puntaje: 0 ",
  height: 25,
  width:150,
  x:stage.getWidth()-150,
  y:15,
  fill:"#f7f7f7",
  fontFamily:"Arial",
  fontSize:20
});
imagenFondo=new Kinetic.Image({
x:0,
y:0,
image:imgFon,
width:stage.getWidth(),
height:stage.getHeight()
});


function nivelUno(){

  juego.puntaje=0;
 if(b) return;
 b=true;
  juego.llave=true;
  
	fondo=new Kinetic.Layer();


//pruebass e movimiento



var prueba=new BloqueM(100,stage.getHeight()-220,imgPlata);
//girar blqoues savedata.
/*function mover1(){
  prueba.rotate(Math.PI/2);
 
}

 setInterval(mover1, 6000);*/
prueba.setWidth(160);
prueba.setHeight(26);
grupoAssets.add(prueba);

// torreta
function disparar(){
  var nube2=new NaveEnemiga(4500,stage.getHeight()-550,imgNE);
nube2.setWidth(60);
nube2.setHeight(26);
grupoAssets.add(nube2);

}
function disparar1(){
 var nube3=new NaveEnemiga(4500,stage.getHeight()-150,imgNE);
nube3.setWidth(60);
nube3.setHeight(26);
grupoAssets.add(nube3);}


setTimeout(disparar,1000);
setTimeout(disparar1,14000);
setTimeout(disparar,22000);
setTimeout(disparar1,29000);
setTimeout(disparar,59000);


var plataformaE=new Plataforma(1480,stage.getHeight()-400,imgPlata);
plataformaE.setWidth(370);
plataformaE.setHeight(30);
grupoAssets.add(plataformaE);

//puerta
  grupoAssets.add(new Puerta(9430,stage.getHeight()-340,imgPuer));
//grupoAssets.add(new Puerta(130,stage.getHeight()-340,imgPuer));



var torr=new Torreta(9600,stage.getHeight()-230,imgT);
torr.setWidth(500);
torr.setHeight(187);
grupoAssets.add(torr);

var torr=new Torreta(9600,stage.getHeight()-590,imgT);
torr.setWidth(500);
torr.setHeight(187);
grupoAssets.add(torr);

grupoAssets.add(new Bloque3(0,stage.getHeight()-610,imgPlata));


//piso si toca mueree
var blF=new BloqueF(0, stage.getHeight()-40,imgRo);
blF.setWidth(8500);
blF.setHeight(60);
grupoAssets.add(blF);


 grupoAssets.add(new BloquePlataforma(0,stage.getHeight()-90,imgPlata));

var bl4 =  new BloqueM (1100, stage.getHeight()- 190, imgPlata);
bl4.setHeight(190 );
bl4.setWidth(80);
grupoAssets.add(bl4);
grupoAssets.add(new Bloque(-20,stage.getHeight()-618));
var bl5= new Plataforma (1700, stage.getHeight() -120, imgPlata);
bl5.setWidth(200);
bl5.setHeight(40);
grupoAssets.add(bl5);

var bl6 = new Plataforma (1650, stage.getHeight() -80, imgPlata);
bl6.setWidth(300);
bl6.setHeight(40);
grupoAssets.add(bl6);

var bl7 = new Plataforma (1600, stage.getHeight() - 40, imgPlata);
bl7.setWidth(400);
bl7.setHeight(40);
grupoAssets.add(bl7);

var  bl8 = new Plataforma (2200,   stage.getHeight() -200, imgPlata);
bl8.setWidth(40);
bl8.setHeight(200);grupoAssets.add(bl8)

var bl9 = new Plataforma( 2450, stage.getHeight() - 280 , imgPlata);
bl9.setHeight(40);
bl9.setWidth(300);
grupoAssets.add(bl9);

var bl10 = new Plataforma( 2450, stage.getHeight() - 380 , imgPlata);
bl10.setHeight(120);
bl10.setWidth(40);
grupoAssets.add(bl10);

var bl10a = new Bloque( 2465, stage.getHeight() - 360 );
bl10a.setHeight(100);
bl10a.setWidth(40);
grupoAssets.add(bl10a);

var bl10b = new Bloque1( 2448, stage.getHeight() - 380);
bl10b.setHeight(100);
bl10b.setWidth(40);
grupoAssets.add(bl10b);

var bl11 = new Plataforma( 2745, stage.getHeight() - 420 , imgPlata);
bl11.setHeight(180);
bl11.setWidth(40);
grupoAssets.add(bl11);

var bl11a = new Bloque1( 2745, stage.getHeight() - 400 , imgPlata);
bl11a.setHeight(160);
bl11a.setWidth(40);
grupoAssets.add(bl11a);


var bl12 = new Plataforma( 2950, stage.getHeight() - 80 , imgPlata);
bl12.setHeight(40);
bl12.setWidth(200);
grupoAssets.add(bl12);

var bl13 = new Plataforma( 2950, stage.getHeight() - 430 , imgPlata);
bl13.setHeight(40);
bl13.setWidth(200);
grupoAssets.add(bl13);

var bl14= new Plataforma( 4650, stage.getHeight() - 410 , imgPlata);
bl14.setHeight(40);
bl14.setWidth(200);
grupoAssets.add(bl14);

var bl15= new Plataforma( 500, stage.getHeight() - 385 , imgPlata);
bl15.setHeight(40);
bl15.setWidth(200);
grupoAssets.add(bl15);

var bl16= new Bloque1( 700, stage.getHeight() - 589 , imgPlata);
bl16.setHeight(244);
bl16.setWidth(40);
grupoAssets.add(bl16);

var bl17= new Plataforma( 3400, stage.getHeight() - 300 , imgPlata);
bl17.setHeight(40);
bl17.setWidth(400);
grupoAssets.add(bl17);
var bl17= new Bloque3( 3400, stage.getHeight() - 290 );
bl17.setHeight(40);
bl17.setWidth(400);
grupoAssets.add(bl17);



var bl18= new Plataforma( 8178, stage.getHeight() - 50 , imgPlata);
bl18.setHeight(60);
bl18.setWidth(60);
grupoAssets.add(bl18);
var bl18= new Plataforma( 8218, stage.getHeight() - 70 , imgPlata);
bl18.setHeight(60);
bl18.setWidth(60);
grupoAssets.add(bl18);
var bl19= new Plataforma( 8258, stage.getHeight() - 90 , imgPlata);
bl19.setHeight(60);
bl19.setWidth(60);
grupoAssets.add(bl19);
var bl20= new Plataforma( 8298, stage.getHeight() - 110 , imgPlata);
bl20.setHeight(60);
bl20.setWidth(60);
grupoAssets.add(bl20);
var bl21= new Plataforma( 8338, stage.getHeight() - 130 , imgPlata);
bl21.setHeight(60);
bl21.setWidth(60);
grupoAssets.add(bl21);
var bl22= new Plataforma( 8378, stage.getHeight() - 150 , imgPlata);
bl22.setHeight(60);
bl22.setWidth(60);
grupoAssets.add(bl22);
var bl23= new Plataforma( 8418, stage.getHeight() - 240 , imgPlata);
bl23.setHeight(40);
bl23.setWidth(40);
grupoAssets.add(bl23);

var bl23= new Bloque1( 8418, stage.getHeight() - 200 , imgPlata);
bl23.setHeight(80);
bl23.setWidth(40);
grupoAssets.add(bl23);

var bl23a= new Plataforma( 8458, stage.getHeight() - 260 , imgPlata);
bl23a.setHeight(40);
bl23a.setWidth(100);
grupoAssets.add(bl23a);

var bl23b= new Bloque1( 8558, stage.getHeight() -480 , imgPlata);
bl23b.setHeight(240);
bl23b.setWidth(40);
grupoAssets.add(bl23b);

var bl23b1= new Bloque( 8580, stage.getHeight() -480 );
bl23b1.setHeight(240);
bl23b1.setWidth(40);
grupoAssets.add(bl23b1);

var bl24= new BloqueMcos( 4000, stage.getHeight() - 460 , imgPlata);
bl24.setHeight(40);
bl24.setWidth(80);
grupoAssets.add(bl24);

var bl24= new BloqueM( 3730, stage.getHeight() - 100 , imgPlata);
bl24.setHeight(40);
bl24.setWidth(110);
grupoAssets.add(bl24);
var bl24= new Plataforma( 3580, stage.getHeight() - 100 , imgPlata);
bl24.setHeight(40);
bl24.setWidth(140);
grupoAssets.add(bl24);

var bl25= new BloqueMcos( 4250, stage.getHeight() - 320, imgPlata);
bl25.setHeight(40);
bl25.setWidth(40);
grupoAssets.add(bl25);
var bl26= new BloqueMcos( 4290, stage.getHeight() - 360 , imgPlata);
bl26.setHeight(40);
bl26.setWidth(40);
grupoAssets.add(bl26);
var bl27= new BloqueMcos( 4330, stage.getHeight() - 400, imgPlata);
bl27.setHeight(40);
bl27.setWidth(40);
grupoAssets.add(bl27);

var bl27a= new BloqueMcos( 4370, stage.getHeight() - 440 , imgPlata);
bl27a.setHeight(40);
bl27a.setWidth(40);
grupoAssets.add(bl27a);

var bl27a= new BloqueMcos( 4410, stage.getHeight() - 480 , imgPlata);
bl27a.setHeight(40);
bl27a.setWidth(40);
grupoAssets.add(bl27a);

var bl28= new Plataforma( 9600, stage.getHeight() - 40 , imgPlata);
bl28.setHeight(40);
bl28.setWidth(475);
grupoAssets.add(bl28);

var bl28= new Plataforma( 9360, stage.getHeight() -265 , imgPlata);
bl28.setHeight(40);
bl28.setWidth(720);
grupoAssets.add(bl28);

var bl28= new Bloque1( 9560, stage.getHeight() -360 , imgPlata);
bl28.setHeight(95);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9590, stage.getHeight() -358 , imgPlata);
bl28.setHeight(91);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9620, stage.getHeight() -356 , imgPlata);
bl28.setHeight(87);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9650, stage.getHeight() -354 , imgPlata);
bl28.setHeight(83);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9680, stage.getHeight() -352 , imgPlata);
bl28.setHeight(79);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9710, stage.getHeight() -350 , imgPlata);
bl28.setHeight(75);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9740, stage.getHeight() -348 , imgPlata);
bl28.setHeight(71);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9770, stage.getHeight() -346 , imgPlata);
bl28.setHeight(67);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9800, stage.getHeight() -344 , imgPlata);
bl28.setHeight(63);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9830, stage.getHeight() -342 , imgPlata);
bl28.setHeight(59);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9860, stage.getHeight() -340 , imgPlata);
bl28.setHeight(54);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9890, stage.getHeight() -338, imgPlata);
bl28.setHeight(50);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9920, stage.getHeight() -336 , imgPlata);
bl28.setHeight(46);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9950, stage.getHeight() -334 , imgPlata);
bl28.setHeight(42);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 9980, stage.getHeight() -332 , imgPlata);
bl28.setHeight(38);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 10010, stage.getHeight() -330 , imgPlata);
bl28.setHeight(34);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 10040, stage.getHeight() -328 , imgPlata);
bl28.setHeight(30);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 10070, stage.getHeight() -326 , imgPlata);
bl28.setHeight(26);
bl28.setWidth(30);
grupoAssets.add(bl28);
var bl28= new Bloque1( 10100, stage.getHeight() -324 , imgPlata);
bl28.setHeight(22);
bl28.setWidth(30);
grupoAssets.add(bl28);

var bl29= new Bloque1( 9560, stage.getHeight() - 115 , imgPlata);
bl29.setHeight(115);
bl29.setWidth(40);
grupoAssets.add(bl29);

var bl29a= new Bloque1( 9560, stage.getHeight() - 265 , imgPlata);
bl29a.setHeight(88);
bl29a.setWidth(40);
grupoAssets.add(bl29a);

var bl30= new Bloque( 10075, stage.getHeight() - 265, imgPlata);
bl30.setHeight(265);
bl30.setWidth(40);
grupoAssets.add(bl30);

var bl30a= new Bloque3( 9600, stage.getHeight() - 400 , imgPlata);
bl30a.setHeight(40);
bl30a.setWidth(475);
grupoAssets.add(bl30a);

var bl30b= new Plataforma( 9600, stage.getHeight() -625 , imgPlata);
bl30b.setHeight(40);
bl30b.setWidth(475);
grupoAssets.add(bl30b);

var bl30c= new Bloque1( 9560, stage.getHeight() - 475 , imgPlata);
bl30c.setHeight(115);
bl30c.setWidth(40);
grupoAssets.add(bl30c);

var bl30d= new Bloque1( 9560, stage.getHeight() - 625 , imgPlata);
bl30d.setHeight(78);
bl30d.setWidth(40);
grupoAssets.add(bl30d);

var bl30e= new Bloque( 10075, stage.getHeight() - 625, imgPlata);
bl30e.setHeight(265);
bl30e.setWidth(40);
grupoAssets.add(bl30e);

var bl31= new BloqueMcos( 5000, stage.getHeight() - 540 , imgPlata);
bl31.setHeight(40);
bl31.setWidth(310);
grupoAssets.add(bl31);

var bl35= new Plataforma( 5500, stage.getHeight() - 325 , imgPlata);
bl35.setHeight(325);
bl35.setWidth(40);
grupoAssets.add(bl35);
var bl36= new Plataforma( 5700, stage.getHeight() - 325 , imgPlata);
bl36.setHeight(325);
bl36.setWidth(40);
grupoAssets.add(bl36);

var bl36a= new Bloque( 5700, stage.getHeight() - 300 , imgPlata);
bl36a.setHeight(300);
bl36a.setWidth(40);
grupoAssets.add(bl36a);

var bl37a1= new Plataforma( 5784, stage.getHeight() -150 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(77);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 5788, stage.getHeight() -120 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(69);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 5792, stage.getHeight() -90 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(61);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 5796, stage.getHeight() -60 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(53);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 5800, stage.getHeight() -30 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(45);
grupoAssets.add(bl37a1);

var bl37= new Plataforma( 5900, stage.getHeight() - 325 , imgPlata);
bl37.setHeight(325);
bl37.setWidth(40);
grupoAssets.add(bl37);

var bl37ab= new Bloque1( 5900, stage.getHeight() - 300 , imgPlata);
bl37ab.setHeight(300);
bl37ab.setWidth(40);
grupoAssets.add(bl37ab);

var bl37b= new Plataforma( 6300, stage.getHeight() - 325 , imgPlata);
bl37b.setHeight(325);
bl37b.setWidth(40);
grupoAssets.add(bl37b);

var bl37c= new BloqueMcos( 6500, stage.getHeight() - 325 , imgPlata);
bl37c.setHeight(275);
bl37c.setWidth(40);
grupoAssets.add(bl37c);

var bl37a1= new Plataforma( 7270, stage.getHeight() -150 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(77);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 7274, stage.getHeight() -120 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(69);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 7278, stage.getHeight() -90 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(61);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 7282, stage.getHeight() -60 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(53);
grupoAssets.add(bl37a1);
var bl37a1= new Plataforma( 7286, stage.getHeight() -30 , imgPlata);
bl37a1.setHeight(30);
bl37a1.setWidth(45);
grupoAssets.add(bl37a1);

var bl37d= new Plataforma( 6700, stage.getHeight() - 180 , imgPlata);
bl37d.setHeight(180);
bl37d.setWidth(40);
grupoAssets.add(bl37d);
var bl37e= new Plataforma( 6900, stage.getHeight() - 300 , imgPlata);
bl37e.setHeight(300);
bl37e.setWidth(40);
grupoAssets.add(bl37e);
var bl37f= new BloqueMcos( 7200, stage.getHeight() - 325 , imgPlata);
bl37f.setHeight(623);
bl37f.setWidth(40);
grupoAssets.add(bl37f);

var bl37g= new BloqueM( 7450, stage.getHeight() - 180 , imgPlata);
bl37g.setHeight(40);
bl37g.setWidth(250);
grupoAssets.add(bl37g);

var bl38= new Plataforma( 8350, stage.getHeight() - 370 , imgPlata);
bl38.setHeight(40);
bl38.setWidth(40);
grupoAssets.add(bl38);

var bl38a= new Plataforma( 8310, stage.getHeight() - 380 , imgPlata);
bl38a.setHeight(40);
bl38a.setWidth(40);
grupoAssets.add(bl38a);

var bl38b= new Plataforma( 8270, stage.getHeight() - 390 , imgPlata);
bl38b.setHeight(40);
bl38b.setWidth(40);
grupoAssets.add(bl38b);

var bl38c= new Plataforma( 8230, stage.getHeight() - 400 , imgPlata);
bl38c.setHeight(40);
bl38c.setWidth(40);
grupoAssets.add(bl38c);

var bl38d= new Plataforma( 8190, stage.getHeight() - 410 , imgPlata);
bl38d.setHeight(40);
bl38d.setWidth(40);
grupoAssets.add(bl38d);

var bl38e= new Plataforma( 8150, stage.getHeight() - 420 , imgPlata);
bl38e.setHeight(40);
bl38e.setWidth(40);
grupoAssets.add(bl38e);

var bl38f= new Plataforma( 8110, stage.getHeight() - 430 , imgPlata);
bl38f.setHeight(40);
bl38f.setWidth(40);
grupoAssets.add(bl38f);

var bl38g= new Plataforma( 8070, stage.getHeight() - 440 , imgPlata);
bl38g.setHeight(40);
bl38g.setWidth(40);
grupoAssets.add(bl38g);

var bl38h= new Plataforma( 8030, stage.getHeight() - 450 , imgPlata);
bl38h.setHeight(40);
bl38h.setWidth(40);
grupoAssets.add(bl38h);

var bl38i= new Plataforma( 7990, stage.getHeight() - 460 , imgPlata);
bl38i.setHeight(40);
bl38i.setWidth(40);
grupoAssets.add(bl38i);

var bl38j= new Plataforma( 7950, stage.getHeight() - 470 , imgPlata);
bl38j.setHeight(40);
bl38j.setWidth(40);
grupoAssets.add(bl38j);

var bl38k= new Plataforma( 7910, stage.getHeight() - 480 , imgPlata);
bl38k.setHeight(40);
bl38k.setWidth(40);
grupoAssets.add(bl38k);

var bl39= new Bloque ( 7910, stage.getHeight() - 590 , imgPlata);
bl39.setHeight(160);
bl39.setWidth(40);
grupoAssets.add(bl39);

var bl40= new Plataforma ( 8100, stage.getHeight() - 535 , imgPlata);
bl40.setHeight(10);
bl40.setWidth(150);
grupoAssets.add(bl40);

var bl40a1= new Plataforma ( 8250, stage.getHeight() - 525 , imgPlata);
bl40a1.setHeight(10);
bl40a1.setWidth(150);
grupoAssets.add(bl40a1);

var bl40a2= new Plataforma ( 8400, stage.getHeight() - 515, imgPlata);
bl40a2.setHeight(10);
bl40a2.setWidth(150);
grupoAssets.add(bl40a2);

var bl40a3= new Plataforma ( 8550, stage.getHeight() - 505 , imgPlata);
bl40a3.setHeight(10);
bl40a3.setWidth(150);
grupoAssets.add(bl40a3);

var bl40a4= new Plataforma ( 8700, stage.getHeight() - 495 , imgPlata);
bl40a4.setHeight(10);
bl40a4.setWidth(150);
grupoAssets.add(bl40a4);
//new bloqes
var bl40a4= new Plataforma ( 8725, stage.getHeight() - 485, imgPlata);
bl40a4.setHeight(10);
bl40a4.setWidth(100);
grupoAssets.add(bl40a4);
var bl40a4= new Plataforma ( 8750, stage.getHeight() - 475, imgPlata);
bl40a4.setHeight(10);
bl40a4.setWidth(50);
grupoAssets.add(bl40a4);
var bl40a4= new Plataforma ( 8765, stage.getHeight() - 465, imgPlata);
bl40a4.setHeight(10);
bl40a4.setWidth(15);
grupoAssets.add(bl40a4);

var bl40b= new Bloque3 ( 8100, stage.getHeight() - 530 , imgPlata);
bl40b.setHeight(10);
bl40b.setWidth(150);
grupoAssets.add(bl40b);

var bl40b1= new Bloque3 ( 8250, stage.getHeight() - 520 , imgPlata);
bl40b1.setHeight(10);
bl40b1.setWidth(150);
grupoAssets.add(bl40b1);

var bl40b2= new Bloque3 ( 8400, stage.getHeight() - 510 , imgPlata);
bl40b2.setHeight(10);
bl40b2.setWidth(150);
grupoAssets.add(bl40b2);

var bl40b3= new Bloque3 ( 8550, stage.getHeight() - 500 , imgPlata);
bl40b3.setHeight(10);
bl40b3.setWidth(150);
grupoAssets.add(bl40b3);

var bl40b4= new Bloque3 ( 8700, stage.getHeight() - 490 , imgPlata);
bl40b4.setHeight(10);
bl40b4.setWidth(150);
grupoAssets.add(bl40b4);

var bl41= new BloqueM ( 8780, stage.getHeight() - 150 , imgPlata);
bl41.setHeight(40);
bl41.setWidth(250);
grupoAssets.add(bl41);

var pisoL=new Plataforma(-30, stage.getHeight()-623,imgPlata);
pisoL.setHeight(623);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-60, stage.getHeight()-623,imgPlata);
pisoL.setHeight(603);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-90, stage.getHeight()-623,imgPlata);
pisoL.setHeight(583);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-120, stage.getHeight()-623,imgPlata);
pisoL.setHeight(563);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-150, stage.getHeight()-623,imgPlata);
pisoL.setHeight(543);
pisoL.setWidth(30);
grupoAssets.add(pisoL);

var pisoL=new Plataforma(-180, stage.getHeight()-623,imgPlata);
pisoL.setHeight(523);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-210, stage.getHeight()-623,imgPlata);
pisoL.setHeight(503);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-240, stage.getHeight()-623,imgPlata);
pisoL.setHeight(483);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-270, stage.getHeight()-623,imgPlata);
pisoL.setHeight(463);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-300, stage.getHeight()-623,imgPlata);
pisoL.setHeight(443);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-330, stage.getHeight()-623,imgPlata);
pisoL.setHeight(423);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-340, stage.getHeight()-623,imgPlata);
pisoL.setHeight(403);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-370, stage.getHeight()-623,imgPlata);
pisoL.setHeight(383);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-400, stage.getHeight()-623,imgPlata);
pisoL.setHeight(363);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-430, stage.getHeight()-623,imgPlata);
pisoL.setHeight(343);
pisoL.setWidth(30);
grupoAssets.add(pisoL);

var pisoL=new Plataforma(-460, stage.getHeight()-623,imgPlata);
pisoL.setHeight(323);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-490, stage.getHeight()-623,imgPlata);
pisoL.setHeight(303);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-520, stage.getHeight()-623,imgPlata);
pisoL.setHeight(283);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-550, stage.getHeight()-623,imgPlata);
pisoL.setHeight(263);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-580, stage.getHeight()-623,imgPlata);
pisoL.setHeight(243);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-610, stage.getHeight()-623,imgPlata);
pisoL.setHeight(223);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-640, stage.getHeight()-623,imgPlata);
pisoL.setHeight(203);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-670, stage.getHeight()-623,imgPlata);
pisoL.setHeight(183);
pisoL.setWidth(30);
grupoAssets.add(pisoL);

var pisoL=new Plataforma(-700, stage.getHeight()-623,imgPlata);
pisoL.setHeight(163);
pisoL.setWidth(30);
grupoAssets.add(pisoL);
var pisoL=new Plataforma(-730, stage.getHeight()-623,imgPlata);
pisoL.setHeight(143);
pisoL.setWidth(30);
grupoAssets.add(pisoL);

  //monedas
  grupoAssets.add(new Moneda(640, stage.getHeight()-430,imgMon));
  grupoAssets.add(new Moneda(1750, stage.getHeight()-435,imgMon));
  grupoAssets.add(new Moneda(2700, stage.getHeight()-315,imgMon));
  grupoAssets.add(new Moneda(2970, stage.getHeight()-115,imgMon));
  grupoAssets.add(new Moneda(3630, stage.getHeight()-135,imgMon));
  grupoAssets.add(new Moneda(5250, stage.getHeight()-260,imgMon));
  grupoAssets.add(new Moneda(5800, stage.getHeight()-190,imgMon));
  grupoAssets.add(new Moneda(6530, stage.getHeight()-520,imgMon));
  grupoAssets.add(new Moneda(7330, stage.getHeight()-520,imgMon));
  grupoAssets.add(new Moneda(8510, stage.getHeight()-320,imgMon));
  grupoAssets.add(new Moneda(7990, stage.getHeight()-520,imgMon));

grupoAssets.add(new Vida(9380, stage.getHeight()-340,imgC));



//Enemigo 
var ene2=new Enemigo(1850,stage.getHeight()-480,imgE2);
ene2.setWidth(120);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo(2700,stage.getHeight()-355,imgE2);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo(3070,stage.getHeight()-155,imgE2);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo(3630,stage.getHeight()-455,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo1(5130,stage.getHeight()-455,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo2(5590,stage.getHeight()-555,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo2(6090,stage.getHeight()-555,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo2(7000,stage.getHeight()-555,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo(8400,stage.getHeight()-355,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);

var ene2=new Enemigo1(9000,stage.getHeight()-355,imgEn);
ene2.setWidth(80);
ene2.setHeight(80);
grupoAssets.add(ene2);



grupoAssets.add(new BloqueAs(610, stage.getHeight()-625, imgAs));

//inicializando personaje
  personaje=new Heroe(imgH,framesP);
	personaje.setX(29);
	personaje.setY(personaje.getHeight()+280);
  personaje.limiteDer=stage.getWidth()-personaje.getWidth();
  personaje.limiteTope=stage.getHeight();
	fondo.add(imagenFondo);
  fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  
  personaje.start();
	stage.add(fondo);
  intv=setInterval(frameLoop,30);
}
function nivelDos(){
  fondo=new Kinetic.Layer();
  juego.llave=true;

//escaleras 
 var es1=new Plataforma(1400, stage.getHeight()-70,imgPlata);
 es1.setWidth(40);
 es1.setHeight(40);
 grupoAssets.add(es1);


  

 var es2=new Plataforma(1440, stage.getHeight()-100,imgPlata);
 es2.setWidth(40);
 es2.setHeight(40);
 grupoAssets.add(es2);

 var es3=new Plataforma(1480, stage.getHeight()-130,imgPlata);
 es3.setWidth(40);
 es3.setHeight(40);
 grupoAssets.add(es3);

 var es4=new Plataforma(1520, stage.getHeight()-160,imgPlata);
 es4.setWidth(40);
 es4.setHeight(40);
 grupoAssets.add(es4);


var b1=new Plataforma(1620, stage.getHeight()-250,imgPlata);
 b1.setWidth(100);
 b1.setHeight(40);
 grupoAssets.add(b1);

 grupoAssets.add(new Moneda(1630, stage.getHeight()-292,imgMon));
 grupoAssets.add(new Moneda(1650, stage.getHeight()-410,imgMon));



 var b2=new Plataforma(1820, stage.getHeight()-150,imgPlata);
 b2.setWidth(100);
 b2.setHeight(40);
 grupoAssets.add(b2);


 var b3=new Plataforma(2120, stage.getHeight()-50,imgPlata);
 b3.setWidth(100);
 b3.setHeight(40);
 grupoAssets.add(b3);

 var b4=new Plataforma(2420, stage.getHeight()-200,imgPlata);
 b1.setWidth(100);
 b1.setHeight(40);
 grupoAssets.add(b4);


 var b5=new Plataforma(2620, stage.getHeight()-350,imgPlata);
 b5.setWidth(100);
 b5.setHeight(40);
 grupoAssets.add(b5);


 var b6=new Plataforma(2820, stage.getHeight()-450,imgPlata);
 b6.setWidth(100);
 b6.setHeight(40);
 grupoAssets.add(b6);



 var b7=new Plataforma(3020, stage.getHeight()-500,imgPlata);
 b7.setWidth(100);
 b7.setHeight(40);
 grupoAssets.add(b7);





 var b8=new Plataforma(3220, stage.getHeight()-350,imgPlata);
 b8.setWidth(100);
 b8.setHeight(40);
 grupoAssets.add(b8);



 var b9=new Plataforma(3420, stage.getHeight()-150,imgPlata);
 b9.setWidth(100);
 b9.setHeight(40);
 grupoAssets.add(b9);



 var b10=new Plataforma(3620, stage.getHeight()-100,imgPlata);
 b10.setWidth(100);
 b10.setHeight(40);
 grupoAssets.add(b10);


  var b11=new Plataforma(3820, stage.getHeight()-250,imgPlata);
 b11.setWidth(100);
 b11.setHeight(40);
 grupoAssets.add(b11);





 var b12=new Plataforma(4020, stage.getHeight()-350,imgPlata);
 b12.setWidth(100);
 b12.setHeight(40);
 grupoAssets.add(b12);


var b13=new Plataforma(4220, stage.getHeight()-450,imgPlata);
 b13.setWidth(100);
 b13.setHeight(40);
 grupoAssets.add(b13);

var b14=new Plataforma(4450, stage.getHeight()-350,imgPlata);
 b14.setWidth(40);
 b14.setHeight(350);
 grupoAssets.add(b14);

 var b15=new Plataforma(4650, stage.getHeight()-250,imgPlata);
 b15.setWidth(40);
 b15.setHeight(250);
 grupoAssets.add(b15);


var b16=new Plataforma(4850, stage.getHeight()-150,imgPlata);
 b16.setWidth(40);
 b16.setHeight(150);
 grupoAssets.add(b16);

var b16=new Plataforma(5150, stage.getHeight()-300,imgPlata);
 b16.setWidth(140);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Plataforma(5450, stage.getHeight()-400,imgPlata);
 b16.setWidth(140);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Plataforma(5750, stage.getHeight()-40,imgPlata);
 b16.setWidth(8240);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Bloque3(5950, stage.getHeight()-240,imgPlata);
 b16.setWidth(540);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Plataforma(5950, stage.getHeight()-250,imgPlata);
 b16.setWidth(540);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Plataforma(6625, stage.getHeight()-100,imgPlata);
 b16.setWidth(40);
 b16.setHeight(60);
 grupoAssets.add(b16);
var b16=new Bloque1(6615, stage.getHeight()-90);
 b16.setWidth(40);
 b16.setHeight(50);
 grupoAssets.add(b16);
var b16=new Bloque(6635, stage.getHeight()-90);
 b16.setWidth(40);
 b16.setHeight(50);
 grupoAssets.add(b16);

var b16=new Plataforma(6845, stage.getHeight()-195, imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);
var b16=new Bloque3(6845, stage.getHeight()-190, imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);

var b16=new Plataforma(7245, stage.getHeight()-340, imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);
var b16=new Bloque3(7245, stage.getHeight()-335,imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);


var b16=new Plataforma(7745, stage.getHeight()-225, imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);
var b16=new Bloque3(7745, stage.getHeight()-220,imgPlata);
 b16.setWidth(240);
 b16.setHeight(40);
 grupoAssets.add(b16);


var b17=new Plataforma(8100, stage.getHeight()-30, imgPlata);
b17.setWidth(40);
b17.setHeight(30);
grupoAssets.add(b17);
var b17=new Bloque1(8095, stage.getHeight()-30);
b17.setWidth(40);
b17.setHeight(30);
grupoAssets.add(b17);
var b17=new Plataforma(8140, stage.getHeight()-60, imgPlata);
b17.setWidth(40);
b17.setHeight(60);
grupoAssets.add(b17);
var b17=new Plataforma(8180, stage.getHeight()-90, imgPlata);
b17.setWidth(40);
b17.setHeight(90);
grupoAssets.add(b17);
var b17=new Plataforma(8220, stage.getHeight()-120, imgPlata);
b17.setWidth(40);
b17.setHeight(120);
grupoAssets.add(b17);
var b17=new Plataforma(8260, stage.getHeight()-150, imgPlata);
b17.setWidth(40);
b17.setHeight(150);
grupoAssets.add(b17);
var b17=new Plataforma(8300, stage.getHeight()-180, imgPlata);
b17.setWidth(40);
b17.setHeight(180);
grupoAssets.add(b17);
var b17=new Bloque(8305, stage.getHeight()-180);
b17.setWidth(40);
b17.setHeight(180);
grupoAssets.add(b17);


var b17=new Plataforma(8700, stage.getHeight()-180, imgPlata);
b17.setWidth(40);
b17.setHeight(180);
grupoAssets.add(b17);
var b17=new Bloque1(8695, stage.getHeight()-180);
b17.setWidth(40);
b17.setHeight(180);
grupoAssets.add(b17);
var b17=new Plataforma(8740, stage.getHeight()-150, imgPlata);
b17.setWidth(40);
b17.setHeight(150);
grupoAssets.add(b17);
var b17=new Plataforma(8780, stage.getHeight()-120, imgPlata);
b17.setWidth(40);
b17.setHeight(120);
grupoAssets.add(b17);
var b17=new Plataforma(8820, stage.getHeight()-90, imgPlata);
b17.setWidth(40);
b17.setHeight(90);
grupoAssets.add(b17);
var b17=new Plataforma(8860, stage.getHeight()-60, imgPlata);
b17.setWidth(40);
b17.setHeight(60);
grupoAssets.add(b17);
var b17=new Plataforma(8900, stage.getHeight()-30, imgPlata);
b17.setWidth(40);
b17.setHeight(30);
grupoAssets.add(b17);
var b17=new Bloque(8905, stage.getHeight()-30);
b17.setWidth(40);
b17.setHeight(30);
grupoAssets.add(b17);


















  var piso = new Plataforma(0,stage.getHeight()-35,imgPlata);
  piso.setWidth(100);
  grupoAssets.add(piso);

   


  grupoAssets.add(new Plataforma(20,stage.getHeight()/1.5,imgPlata));
  grupoAssets.add(new Plataforma(190,stage.getHeight()/3,imgPlata));
  grupoAssets.add(new Plataforma(510,stage.getHeight()/1.6,imgPlata));
  grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPlata));
  //llave
  grupoAssets.add(new Llave(850, stage.getHeight()/3.9-60,imgLla))
  //monedas
  grupoAssets.add(new Moneda(350, stage.getHeight()/3-130,imgMon));
  

  //puerta
  //grupoAssets.add(new Puerta(200,stage.getHeight()-85,imgPuer));
  
  //personaje
  personaje=new Heroe(imgH,framesP);
  personaje.setX(0);
  personaje.setY(stage.getHeight()-80);
  personaje.limiteDer=stage.getWidth()-personaje.getWidth();
  personaje.limiteTope=stage.getHeight();
  fondo.add(imagenFondo);
  fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  personaje.start();
  stage.add(fondo);
  intv=setInterval(frameLoop,30);

}

function nivelTres(){
 
  fondo=new Kinetic.Layer();
  juego.llave=true;

  //enemigos
  /*grupoAssets.add(new Enemigo(200,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(850, stage.getHeight()/3.9-60,imgEn));
  grupoAssets.add(new Enemigo(170, stage.getHeight()/3-60,imgEn));
  grupoAssets.add(new Enemigo(850, stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(1020, stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(1220, stage.getHeight()-75,imgEn));*/
  //plataforma
 /*var  plat1=new Bloque3(100, stage.getHeight()-200);
 plat1.setWidth(2000);
 plat1.setHeight(90);
 grupoAssets.add(plat1);*/

//escaleras 
 var es1=new Plataforma(1400, stage.getHeight()-70,imgPlata);
 es1.setWidth(40);
 es1.setHeight(40);
 grupoAssets.add(es1);

 var es2=new Plataforma(1440, stage.getHeight()-100,imgPlata);
 es2.setWidth(40);
 es2.setHeight(40);
 grupoAssets.add(es2);

 var es3=new Plataforma(1480, stage.getHeight()-130,imgPlata);
 es3.setWidth(40);
 es3.setHeight(40);
 grupoAssets.add(es3);

 var es4=new Plataforma(1520, stage.getHeight()-160,imgPlata);
 es4.setWidth(40);
 es4.setHeight(40);
 grupoAssets.add(es4);



  var piso = new Plataforma(0,stage.getHeight()-35,imgPlata);
  piso.setWidth(100);
  grupoAssets.add(piso);

   


  grupoAssets.add(new Plataforma(20,stage.getHeight()/1.5,imgPlata));
  grupoAssets.add(new Plataforma(190,stage.getHeight()/3,imgPlata));
  grupoAssets.add(new Plataforma(510,stage.getHeight()/1.6,imgPlata));
  grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPlata));
  //llave
  grupoAssets.add(new Llave(850, stage.getHeight()/3.9-60,imgLla))
  //monedas
  grupoAssets.add(new Moneda(350, stage.getHeight()/3-130,imgMon));
  

  //puerta
  //grupoAssets.add(new Puerta(200,stage.getHeight()-85,imgPuer));
  
  //personaje
  personaje=new Heroe(imgH,framesP);
  personaje.setX(0);
  personaje.setY(stage.getHeight()-80);
  personaje.limiteDer=stage.getWidth()-personaje.getWidth();
  personaje.limiteTope=stage.getHeight();
  fondo.add(imagenFondo);
  fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  personaje.start();
  stage.add(fondo);
  intv=setInterval(frameLoop,30);

}
function moverPersonaje(){
  if(personaje.getAnimation()!="caminar" && (keyboard[37]|| keyboard[39]))  {
    
    personaje.setAnimation("caminar");
    

  }
  if(keyboard[37]){
    personaje.retroceder();

  }
  if(keyboard[39]){
    personaje.caminar();

  }
  if (keyboard[38]&&personaje.contador<1){
    personaje.saltar();

  }
   if(keyboard[40]){
    personaje.caer();

  }

  /*  bug corregido savedata:  if (  !  ( ( ( keyboard[39]&&keyboard[38] ) || (( keyboard[38] ) &&keyboard[38] )) || ((keyboard[39] ) || (keyboard[38] ) || ( keyboard[37] )) ) 
     ) {
    personaje.setAnimation("estatico");
  }*/
  if (  !  ( ( ( keyboard[39]&&keyboard[38] ) || (( keyboard[37] ) &&keyboard[38] )) || ((keyboard[39] ) || (keyboard[38] ) || ( keyboard[37] )) ) 
     ) {
    personaje.setAnimation("estatico");
  }
}

function addKeyBoardEvents(){
addEvent(document,"keydown",function(e){
	keyboard[e.keyCode]=true;
});
addEvent(document, "keyup", function(e){
	keyboard[e.keyCode]=false;
});
function addEvent(element, eventName, func){
if(element.addEventListener){
	element.addEventListener(eventName,func,false);
}
else if(element.attachEvent){
	element.attachEvent(eventName,func);
		}
	}
}
function hit(a,b){
	var hit=false;
	//colisiones horizontales
	if(b.getX() + b.getWidth() >= a.getX()  && b.getX() < a.getX() + a.getWidth())
  {
   //colisiones verticales
   if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
    hit= true;
  }

 //colisiones de a con b
  if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth() )
  {
   
   if(b.getY() <= a.getY() &&  b.getY() +  b.getHeight() >= a.getY() + a.getHeight())
    hit= true;
  }

 //Colision b con a
  if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth() )
  {
   
   if(a.getY() <= b.getY() &&  a.getY() +  a.getHeight() >= b.getY() + b.getHeight())
    hit= true;
  }
  return hit;
}


function moverFondo(){
  //mover fondo hacia la izquierda
  if(personaje.getX()>(stage.getWidth()/2)&& (keyboard[39])){
    personaje.vx=-2;
    for(i in grupoAssets.children){
      var asset=grupoAssets.children[i];
      asset.move(-40,0);
      
      }
    }
  
  //mover fondo hacia la derecha
   else if(personaje.getX()<(stage.getWidth()/2)&& keyboard[37]) {
    personaje.vx=-2;
    for(i in grupoAssets.children){
      var asset=grupoAssets.children[i];
      asset.move(40,0);   

    }
  }
 /*
   else{
    personaje.vx=10;

  }
*/
 /*
  else if (personaje.getY()<(stage.getHeight()/6)) {
    personaje.vy=5;

     for(i in grupoAssets.children){
      var asset=grupoAssets.children[i];
      asset.move(0,5);

}
  }
  else if (personaje.getY()>(stage.getHeight()/1.4)){
    personaje.vy=5;
    for(i in grupoAssets.children){
      var asset=grupoAssets.children[i];
      asset.move(0,-10);
  }
  }*/
  else{
    personaje.vx=10;
  }

}
function aplicarFuerzas(){
  personaje.aplicarGravedad(grav,val_reb);
}
function moverEnemigos(){
  var enemigos=grupoAssets.children;
  for (i in enemigos){
    var enemigo=enemigos[i];
    if (enemigo instanceof Enemigo) {
      enemigo.mover();
    }
    if(enemigo instanceof Enemigo1){
        enemigo.mover();
        }  
       if(enemigo instanceof Enemigo2){
        enemigo.mover();
        }    
  }
}
  function moverBloqueM(){
  var enemigosb=grupoAssets.children;
  for (i in enemigosb){
    var enemigob=enemigosb[i];
    if (enemigob instanceof BloqueM) {
      
      enemigob.mover();

        }
      }
    }

      function moverBloqueAs(){
  var enemigosb=grupoAssets.children;
  for (i in enemigosb){
    var enemigob=enemigosb[i];
    if (enemigob instanceof BloqueAs) {
      
      enemigob.mover();

        }
      }
    }

      function moverBloqueMcos(){
  var enemigosb=grupoAssets.children;
  for (i in enemigosb){
    var enemigob=enemigosb[i];
    if (enemigob instanceof BloqueMcos) {
      
      enemigob.mover();

      }
    }
    }
     function moverNube(){
  var enemigosb=grupoAssets.children;
  for (i in enemigosb){
    var enemigob=enemigosb[i];
    if (enemigob instanceof Nube) {
      
      enemigob.mover();

      }
    }
    }
         function moverNaveE(){
  var enemigosb=grupoAssets.children;
  for (i in enemigosb){
    var enemigob=enemigosb[i];
    if (enemigob instanceof NaveEnemiga) {
      
      enemigob.mover();

      }
    }
    }
  /*function moverEnemigos(){
    var enemigos1=grupoAssets.children;
    for(i in enemigos1){
var enemigo1=enemigos1[i];
if(enemigo1 instanceof Enemigo1)
    enemigo1.mover(); 
      }
  }*/
function detectarColPlataformas(){
  var plataformas=grupoAssets.children;
  for(i in plataformas){
    var plataforma=plataformas[i];
    if(hit(plataforma,personaje)){
      if(plataforma instanceof Enemigo){

        if(personaje.vy>5 && personaje.getY()< plataforma.getY()){
          plataforma.remove();
          juego.puntaje+=5;
            
          
        }
        else {
            if (juego.nivel==2&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
        else {
            grupoAssets.removeChildren();
            stage.removeChildren();
          fondo.removeChildren();
          
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);

            
            setTimeout(nivelUno,1000);
            b=false;
          }
        }
      }
      if(plataforma instanceof Enemigo1){

        if(personaje.vy>2 && personaje.getY()<= plataforma.getY()){
          plataforma.remove();
          juego.puntaje+=7;
            
          
        }
        else{
            if (juego.nivel==2&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
         else{   
            grupoAssets.removeChildren();
            stage.removeChildren();
          fondo.removeChildren();
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);
          //cambie b
            setTimeout(nivelUno,1000);
              b=false;
          }
        }
      }

        if(plataforma instanceof Enemigo2){

        if(personaje.vy>2 && personaje.getY()<= plataforma.getY()){
          plataforma.remove();
          juego.puntaje+=7;
            
          
        }
        else{
             if (juego.nivel==2&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
        else{
            grupoAssets.removeChildren();
            stage.removeChildren();
          fondo.removeChildren();
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);
          //cambie b
            setTimeout(nivelUno,1000);
              b=false;
          }
        }
      }
      
      else if(plataforma instanceof BloqueF){
        
              if (juego.nivel==2&&juego.vidas>0) {
        juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
         juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
        else{
          grupoAssets.removeChildren();
        
          stage.removeChildren();
          fondo.removeChildren();
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);
           setTimeout(nivelUno,1000);
            b=false;

        }
      }

         else if(plataforma instanceof BloqueAs){
       if (juego.nivel==2&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
         juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
        else{
        grupoAssets.removeChildren();
        
          stage.removeChildren();
          fondo.removeChildren();
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);
           setTimeout(nivelUno,1000);
            b=false;
          }
      }

      else if(plataforma instanceof NaveEnemiga){
        
        if(personaje.vy>5 && personaje.getY()< plataforma.getY()){
          plataforma.remove();
        }
        else{

         if (juego.nivel==2&&juego.vidas>0) {
        juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
          setTimeout(nivelDos,1000);
          
          b=false;
        }
        else if (juego.nivel==3&&juego.vidas>0) {
          juego.vidas+=-1;
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="none";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
        else{
          grupoAssets.removeChildren();
        stage.removeChildren();
          fondo.removeChildren();
            document.querySelector("#lose").style.display="block";
            
            document.querySelector("#game").style.display="none";           
            window.clearInterval(intv);
            //cambie b
            setTimeout(nivelUno,1000);
b=false;
}
        }
        

      }
      else if(plataforma instanceof Plataforma &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
      personaje.vy*=val_reb;
      }
      else if(plataforma instanceof BloquePlataforma &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
      personaje.vy*=val_reb;
      }

      else if (plataforma instanceof Bloque ){
        //comportamient
      personaje.contador=0;
      personaje.setX(plataforma.getX()+21);

      personaje.vx*=val_reb;
      
    }
    //bloquepd
else if(plataforma instanceof BloquePD &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
      personaje.vy*=val_reb;
      }
         else if (plataforma instanceof BloquePD &&
        personaje.getX()<plataforma.getX()&&
        personaje.vx>=0){
        //comportamient
        personaje.contador=0;
      
      personaje.setX(-10);
      
   
      
    }


    //BloqueP limita de derecha a izquierda y el alto
      else if(plataforma instanceof BloqueP &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
      personaje.vy*=val_reb;
      }
         else if (plataforma instanceof BloqueP &&
        personaje.getX()<plataforma.getX()&&
        personaje.vx>=0){
        //comportamient
        personaje.contador=0;
        personaje.setX(plataforma.getX());
        personaje.vx*=val_reb;
      
    }
      //bloque1 savedata
      
       else if(plataforma instanceof Bloque1 && personaje.getX()<plataforma.getX()&&
       personaje.vx>=-50){
        //comportamiento
      personaje.contador=0;
      
      personaje.setX(plataforma.getX()-personaje.getWidth());

    
      personaje.vx*=val_reb;
      
      }
      
      //blooque 1 limita de izquiera a derecha 
      /*else if(plataforma instanceof Bloque1 ){
        //comportamiento
     
personaje.contador=0;
      
      //personaje.setX(-10);
      personaje.setX(plataforma.getX);
      
    
      
   }*/
            
      
        //bloque 3 limita de arriba abajo
         else if(plataforma instanceof Bloque3 &&
       personaje.getY()<plataforma.getY() &&personaje.vy<2){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY());
      personaje.vy*=val_reb;
      }

       else if(plataforma instanceof BloqueM &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
      
      if (!(keyboard[39]||keyboard[37])) {

        personaje.setX(plataforma.getX()+(plataforma.getWidth()*1/3));

      }
      else{
        personaje.vx=40;
      }
      personaje.vy*=val_reb;
      }

       else if(plataforma instanceof BloqueMcos &&
       personaje.getY()<plataforma.getY() &&personaje.vy>=0){
        //comportamiento
      personaje.contador=0;
      personaje.setY(plataforma.getY()-personaje.getHeight());
     
      personaje.vy*=val_reb;
      }
 
      else if(plataforma instanceof Moneda){
        plataforma.remove();
        juego.puntaje++;
         
      }
      else if(plataforma instanceof Llave){
        plataforma.remove();
        juego.llave=true;
        continue;
      }

          else if(plataforma instanceof Vida){
        plataforma.remove();
        juego.vidas++;
        console.log(juego.vidas);
      }

      else if(plataforma instanceof Puerta &&
        juego.llave){
        if(juego.nivel==1){
          grupoAssets.removeChildren();
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=2;
           setTimeout(nivelDos,1000);
        }
        else if (juego.nivel==2) {
          grupoAssets.removeChildren();
          
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          juego.nivel=3;
          setTimeout(nivelTres,1000);
          
          b=false;
        }
        else if (juego.nivel==3) {
          grupoAssets.removeChildren();
          document.querySelector("#win").style.display="block";
          document.querySelector("#game").style.display="none";
          document.querySelector("#score").innerHTML=juego.puntaje;
          window.clearInterval(intv);
          b=false;
        }
      }
    }
  }
}
function actualizarTexto(){
  puntaje.setText("Puntaje: "+juego.puntaje);

}

addKeyBoardEvents();


function frameLoop(){
aplicarFuerzas();
moverBloqueAs();
moverBloqueMcos();
actualizarTexto();
moverEnemigos();
moverBloqueM();
moverNube();
moverNaveE();
detectarColPlataformas();
moverFondo();
moverPersonaje();
stage.draw();
}
