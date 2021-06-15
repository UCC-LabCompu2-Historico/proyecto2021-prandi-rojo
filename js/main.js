function Validar(Nombre) {
    if (/^[A-Z]+$/i.test(Nombre)) {
        return true;
    } else {
        return false;
    }
} let name;

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
function cargarnombre(){
    var urlcomp,nombre;
    urlcomp=window.location.href.split("/")[5];
    nombre=urlcomp.split("#")[1];

   document.getElementById("texto").innerHTML = "¡Buenos dias " + nombre + " bienvenido a la Universidad Nacional de los Nicos!";
}

function cargarcanvas(){
    var canva=document.getElementById("myCanvas");
    var ctx= canva.getContext("2d");

    var altmax= canva.height;
    var anmax=canva.width;

    ctx.beginPath();
    for(var i=0;i<altmax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anmax,i);
        ctx.strokeStyle = "#bbb4b4";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();


    ctx.beginPath();
    for(var i=0;i<anmax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,altmax);
        ctx.strokeStyle = "#bbb4b4";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //eje X
    ctx.beginPath();
        ctx.moveTo(0,altmax/2);
        ctx.lineTo(anmax,altmax/2);
        ctx.strokeStyle = "#030303";
        ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(anmax/2,0);
    ctx.lineTo(anmax/2,altmax);
    ctx.strokeStyle = "#030303";
    ctx.stroke();
    ctx.closePath();


}
