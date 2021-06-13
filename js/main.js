function miFunc (){
    let carrera, anio;
   carrera = document.getElementById("carreras").value;
    anio=document.getElementById("Año").value;
    alert ('hola');


    if(carrera===1 && anio===1){
        window.open("Ing%20en%20computacion/ingcomputacion.html")
    }





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