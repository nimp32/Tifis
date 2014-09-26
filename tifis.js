var tablero, direccion;
var fondo = 
{
	imagenURL:"fondo.png",
	imagenOK: false
};
var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	Arriba: 87,
	Izquierda: 65,
	Abajo: 83,
	Derecha: 68
};

var tifis = 
{
     x: 100,
     y: 100,
     frenteURL: "frente.png",
     frenteOK: false,
     atrasURL: "atras.png",
     atrasOK: false,
     derURL: "derecha.png",
     derOK: false,
     izqURL: "izquierda.png",
     izqOK: false,
     velocidad: 20
 };

var liz = 
{
	x: 400,
	y: 200,
	lizyURL:"liz.png",
	lizyOK: false,
	velocidad: 20
};

function inicio ()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src= fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = confirmarFrente;

    tifis.atras = new Image();
    tifis.atras.src = tifis.atrasURL;
    tifis.atras.onload = confirmarAtras;

    tifis.der= new Image();
    tifis.der.src = tifis.derURL;
    tifis.der.onload = confirmarDer;

    tifis.izq = new Image();
    tifis.izq.src = tifis.izqURL;
    tifis.izq.onload = confirmarIzq;

    
    liz.lizy = new Image();
    liz.lizy.src = liz.lizyURL;
    liz.lizy.onload = confirmarLiz;

     document.addEventListener("keydown", teclado);
}  

function teclado(datos)
{
	var codigo = datos.keyCode;
	if(codigo == teclas.UP)
	{   
		if(tifis.y > 1)
		{
			tifis.y -= 20;
		}
	}
	if(codigo == teclas.DOWN)
	{
		if(tifis.y <300)
        {
			tifis.y += 20;
		}
	}
	if(codigo == teclas.RIGHT)
	{
		if(tifis.x < 450)
         {
				tifis.x += 20;
	     }	
	}
	if(codigo == teclas.LEFT)
	{
		if(tifis.x > 1)
		{
			tifis.x -= 20;
		}
	}
	if(codigo == teclas.Arriba)
	{   
		if(liz.y > 1)
		{
			liz.y -= 20;
		}
	}
	if(codigo == teclas.Abajo)
	{
		if(liz.y <300)
        {
			liz.y += 20;
		}
	}
	if(codigo == teclas.Derecha)
	{
		if(liz.x < 450)
         {
				liz.x += 20;
	     }	
	}
	if(codigo == teclas.Izquierda)
	{
		if(liz.x > 1)
		{
			liz.x -= 20;
		}
	}
	direccion = codigo;
	dibujar();
}

function confirmarLiz()
{
  liz.lizyOK = true;
  dibujar();
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}
function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}
function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function dibujar()
{
    if(fondo.imagenOK == true)
    {
    	tablero.drawImage(fondo.imagen, 0, 0);
    }
    var tifiDibujo = tifis.frente
    if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
    {
    	if(direccion == teclas.UP)
    	{
    		tifiDibujo = tifis.atras;
    	}
    	if(direccion == teclas.DOWN)
    	{
    		tifiDibujo = tifis.frente;
    	}
    	if(direccion == teclas.LEFT)
    	{
    		tifiDibujo = tifis.izq;
    	}
    	if(direccion == teclas.RIGHT)
    	{
    		tifiDibujo = tifis.der;
    	}
    	tablero.drawImage(tifiDibujo,tifis.x,tifis.y);
    }
    if(liz.lizyOK == true)
    {
    	tablero.drawImage(liz.lizy,liz.x,liz.y);
    }
}

























