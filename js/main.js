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
            window.open("Ing%20en%20computacion/ingcomputacion.html")
        } else if (anio==2) { window.open("ing%20computacion%202/ingcomputacion2.html")}
      else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if(carrera==2 && Validar(name)) {
        if(anio==1){window.open("ingelectronica/Ingelectronica1.html")}
        else if (anio==2){window.open("Ingelectronica%202/ingelectronica2.html")}
        else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if(carrera==3 && Validar(name)){
        if(anio==1){window.open("ingensistemas1/ingensistemas1.html")}
        else if (anio==2){window.open("ingensistemas2/ingensistemas2.html")}
        else if(anio!=1 || anio!=2) {alert('Seleccione el año porfavor')}
    }
    else if (carrera!=1 && carrera != 2 && carrera!=3){alert('Seleccione la carrera porfavor')}

}


window.onload= function mostrar(){
    document.getElementById("texto").innerHTML ="tetas";
}

window.onload=function draw() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    ctx.translate(250,200);
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    }



/**
function miFunc() {
    const carrera = document.getElementById("carreras");
    const  a=carrera.options[carrera.selectedIndex].value;
    const anio = document.getElementById("Año");
    const b=anio.options[anio.selectedIndex].value;
const carrera = document.getElementById("carreras").value;
     const anio = document.getElementById("Año").value;

    if (carrera===1 && anio===1){
        window.open("Ing%20en%20computacion/ingcomputacion.html", new.target);
    } else if (carrera===1 && anio===2){
        window.open("ing%20computacion%202/ingcomputacion2.html")
    }



}**/