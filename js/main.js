/**
 * Checkeo de variable nombre, que lo ingresado sean letras.
 * @method Validar.
 * @param {string} Nombre - contiene el valor del nombre.
 * @returns {boolean}.
 */
function Validar(Nombre) {
    if (/^[A-Z]+$/i.test(Nombre)) {
        return true;
    } else {
        return false;
    }
} let name;

/**
 * Controla los ingresos del usuario en el formulario desplegable.
 * @method miFunc.
 * No recibe parametros.
 * No retorna valores.
 */

function miFunc (){

    let carrera, anio;
   carrera = document.getElementById("Carreras").value;
    anio=document.getElementById("Año").value;
     name=document.getElementById("nombre").value;
    if (carrera==0 && anio==0 && Validar(name)==false) {alert('Seleccione las opciones correspondientes')}
    else if (Validar(name)==false){
        document.getElementById("nombre").focus();
        alert('ingrese un nombre  valido');
    }
    else if(carrera==1 && Validar(name)){
      if(anio==1){
            window.open("Ing%20en%20computacion/ingcomputacion.html#"+name)
        } else if (anio==2) { window.open("ing%20computacion%202/ingcomputacion2.html#"+name)}
      else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if(carrera==2 && Validar(name)) {
        if(anio==1){window.open("ingelectronica/Ingelectronica1.html#"+name)}
        else if (anio==2){window.open("Ingelectronica%202/ingelectronica2.html#"+name)}
        else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if(carrera==3 && Validar(name)){
        if(anio==1){window.open("ingensistemas1/ingensistemas1.html#"+name)}
        else if (anio==2){window.open("ingensistemas2/ingensistemas2.html#"+name)}
        else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if (carrera!=1 && carrera != 2 && carrera!=3){alert('Seleccione la carrera porfavor')}

}

/**
 * Esta funcion se encarga de mostrar en otra pagina, el nombre ingresado previamente por el usuario.
 * @method cargarnombre.
 * No recibe paremtros.
 * devuelve mensaje en otra pantalla, con informacion adicional y variable del usuario (su nombre).
 */

function cargarnombre(){
    var urlcomp,nombre;
    urlcomp=window.location.href.split("/")[5];
    nombre=urlcomp.split("#")[1];

   document.getElementById("texto").innerHTML = "¡Buenos dias " + nombre + " bienvenido a la Universidad Nacional de los Nicos!";
}

/**
 * Se encarga de generar el canvas por defecto que aparecera en la pagina al abrirla.
 * @method cargarcanvas.
 * No recibe parametros
 * No retorna valores.
 */

function cargarcanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let alto = canvas.height;
    let ancho = canvas.width;

    var grid_size = 25;
    var x_axis_size = ancho;
    var y_axis_size = alto;
    var x_cero = 250;
    var y_cero = 200;

    ctx.beginPath();
    // Cuadriculas X
    for (var l=0; l<=ancho; l=l+grid_size){
        ctx.moveTo(l,0);
        ctx.lineTo(l,alto);
    }

    // Cuadrículas Y
    for (var t=0; t<=ancho; t=t+grid_size){
        ctx.moveTo(0,t);
        ctx.lineTo(ancho,t);
    }

    // Mueves el pencil y luego persistes con stroke
    ctx.strokeStyle = "#dcdcdc";
    ctx.lineWidth=1;
    ctx.stroke();

    // Eje x del 0
    ctx.beginPath();
    ctx.moveTo(x_cero-(x_axis_size/2),y_cero);
    ctx.lineTo(x_cero+(x_axis_size/2),y_cero);
// Eje y del 0
    ctx.moveTo(x_cero,y_cero-(y_axis_size/2));
    ctx.lineTo(x_cero,y_cero+(y_axis_size/2));
    ctx.strokeStyle = "#000";
    ctx.lineWidth=2;
    ctx.stroke();

    ctx.font = "bold 10px sans-serif";
// Los de Y
    let x = 0;
    while (x*grid_size <= (y_axis_size/2)) {
        ctx.textAlign = "end";
        ctx.fillText(x,x_cero-(grid_size/4),y_cero-(grid_size*x));
        x++;
    }
    x = 1;
    while (x*grid_size <= (y_axis_size/2)) {
        ctx.textAlign = "end";
        ctx.fillText(-x,x_cero-(grid_size/4),y_cero+(grid_size*x));
        x++;
    }
// Los de X
    x = 1;
    while (x*grid_size <= (x_axis_size/2)) {
        ctx.textAlign = "end";
        ctx.fillText(x,x_cero+(grid_size*x),y_cero+(grid_size/2));
        x++;
    }
    x = 1;
    while (x*grid_size <= (x_axis_size/2)) {
        ctx.textAlign = "end";
        ctx.fillText(-x,x_cero-(grid_size*x),y_cero+(grid_size/2));
        x++;
}}



function funcanva(){

    var x= document.getElementById("x").value;
    var y =document.getElementById("y").value;

    if (isNaN(x) || isNaN(y)){alert('Valor mal ingresado. Intentelo de nuevo')}
    else if (x=="" || y==""){alert('Campo no completado')}

    var canva=document.getElementById("myCanvas");
    var ctx= canva.getContext("2d");
    var altmax= canva.height;
    var anmax=canva.width;

    ctx.beginPath();
    ctx.moveTo(0,250-(y*25));
    ctx.lineTo(anmax,250+x*25);
    ctx.strokeStyle = "#030303";
    ctx.stroke();
    ctx.closePath();
}

//ctx.moveTo(0,x*25*(-250)+200-25*y);
//     ctx.lineTo(anmax,x*25*(anmax)+200-(25*y));
//(y/x)*25,y*25
//var x= document.getElementById("x").value;
//     var y =document.getElementById("y").value;
//
//     if (isNaN(x) || isNaN(y)){alert('Valor mal ingresado. Intentelo de nuevo')}
//     else if (x=="" || y==""){alert('Campo no completado')}
//
//     var canva=document.getElementById("myCanvas");
//     var ctx= canva.getContext("2d");
//     var altmax= canva.height;
//     var anmax=canva.width;
//
//     ctx.beginPath();
//     ctx.moveTo(0,250-(y*25));
//     ctx.lineTo(anmax,250+x*25);
//     ctx.strokeStyle = "#030303";
//     ctx.stroke();
//     ctx.closePath();