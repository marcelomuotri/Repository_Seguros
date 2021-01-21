/* 
function calcularEdad(anioNacimiento){

    var edadTotal = 2021 - anioNacimiento -1; 
    console.log(edadTotal);
    
    edadTotal =cumplio(edadTotal);
    return edadTotal;
}

function cumplio( edadTotal){
    var cumpliste = prompt("cumpliste aÑos?");
    if(cumpliste == "si"){
        edadTotal = edadTotal +1;
    } else{
        edadTotal = edadTotal;
    }
    console.log("tu edad es " + edadTotal);
    return edadTotal;
}

var edad = calcularEdad(parseInt(prompt("ingresa el aÑo en que naciste")));
console.log(edad); */

function pedirDatos(){
    var marca = prompt("ingresa la marca de tu auto");
    var modelo = prompt("ingresa el modelo de tu auto");
    var anio = prompt("ingresa el anio de tu auto");
    var PrimerAuto = new Autos(marca,modelo,anio);
    return PrimerAuto;
}
 function Autos (marca, modelo, anio){
     this.marca=marca;
     this.modelo=modelo;
     this.anio=anio;
     
     this.cambiarModelo = function(){
        var cambiarModelo =(prompt("queres cambiar el modelo SI/NO"))
            if( cambiarModelo == "si"){
            this.anio=(prompt("ingresa el nuevo modelo"))    
        }
    }

     this.cambiarAnio = function(){
        var cambioAnio =(prompt("queres cambiar el anio SI/NO"))
            if(cambioAnio == "si"){
            this.anio=(prompt("ingresa el nuevo anio"))    
        }
    }
}
 var PrimerAuto = pedirDatos();
 console.log(PrimerAuto);
 PrimerAuto.cambiarAnio();
 console.log(PrimerAuto);

