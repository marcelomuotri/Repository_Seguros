function agregarAuto(){

function Autos(marca, modelo , anio){/* CREO EL CONSTRUCTOR */
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;

}
/* CREO LAS VARIABLES PARA AGREGAR */
var capturadorMarca = (prompt("pone tu marca"));
var capturadorModelo = (prompt("pone tu modelo"));
var capturadorAnio = (prompt("pone tu anio"));

PrimerAuto = new Autos (capturadorMarca, capturadorModelo, capturadorAnio);
console.log(PrimerAuto);
/* AGREGO LAS VARIABLES AL OBJETO */
agregar();
}

/* CREO LA BASE DE DATOS */

BaseDatosAuto = [];

/* AGREGO LAS COSAS DESDE EL OBJETO A LA BASE DE DATOS */

function agregar(){
    BaseDatosAuto.push(PrimerAuto);
    console.log(BaseDatosAuto)
}

agregarAuto();

/* PREGUNTO SI QUIERE AGREGAR OTRO AUTO */

otro = prompt("quiere agregar otro auto ? ")  ;
while ( otro == "si"){
    agregarAuto();
    otro = prompt("quiere agregar otro auto");
}
