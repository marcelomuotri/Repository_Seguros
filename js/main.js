function rango(primerAnio, segundoAnio) {
   var primerAnio = primerAnio;
   var segundoAnio = segundoAnio;
   aniosAutos = []
   for (var i = primerAnio; i <= segundoAnio; i++) {
      aniosAutos.push(i);
   }
   return aniosAutos;
}

function Autos(marca, modelo) {//CREO EL CONSTRUCTOR
   this.marca = marca;
   this.modelo = modelo;

}
function Cmodelo(modelo, valor, anios) {
   this.modelo = modelo;
   this.valor = valor;
   this.anios = anios;

}
//OBJETOS TIPO MODELO\\
//OBJETOS TIPO AUTO///// CARGO MARCA, MODELO(OBJETO TIPO CMODELO(MODELO, VALOR) ,ANIO ), 
primerAuto = new Autos("PEUGEOT", [
   new Cmodelo("504", 5000, rango(1990, 1995)),
   new Cmodelo("206", 6000, rango(1998, 2012)),
   new Cmodelo("207", 7000, rango(2007, 2021)),
   new Cmodelo("208", 8000, rango(2015, 2021)),
   new Cmodelo("306", 9000, rango(1990, 2005)),
]);

segundoAuto = new Autos("CHEVROLET", [
   new Cmodelo("CORSA", 5000, rango(1990, 1995)),
   new Cmodelo("AGILE", 6000, rango(1998, 2012)),
   new Cmodelo("ONIX", 7000, rango(2007, 2021)),
   new Cmodelo("CAMARO", 8000, rango(2015, 2021)),
   new Cmodelo("ASTRA", 9000, rango(1990, 2005)),
]);

tercerAuto = new Autos("FORD", [
   new Cmodelo("FIESTA", 5000, rango(1990, 1995)),
   new Cmodelo("FOCUS", 6000, rango(1998, 2012)),
   new Cmodelo("KUGA", 7000, rango(2007, 2021)),
   new Cmodelo("MUSTANG", 8000, rango(2015, 2021)),
   new Cmodelo("NEW BEETLE", 9000, rango(1990, 2005)),
]);

cuartoAuto = new Autos("AUDI", [
   new Cmodelo("A1", 5000, rango(1990, 1995)),
   new Cmodelo("A2", 6000, rango(1998, 2012)),
   new Cmodelo("A3", 7000, rango(2007, 2021)),
   new Cmodelo("A4", 8000, rango(2015, 2021)),
   new Cmodelo("A5", 9000, rango(1990, 2005)),
]);

quintoAuto = new Autos("FIAT", [
   new Cmodelo("PUNTO", 5000, rango(1990, 1995)),
   new Cmodelo("UNO", 6000, rango(1998, 2012)),
   new Cmodelo("TIPO", 7000, rango(2007, 2021)),
   new Cmodelo("DUNA", 8000, rango(2015, 2021)),
   new Cmodelo("SIENA", 9000, rango(1990, 2005)),
]);

BaseDatosAuto = [primerAuto, segundoAuto, tercerAuto, cuartoAuto, quintoAuto];


var select = document.getElementById("exampleFormControlSelect1"); //Seleccionamos el select

for (var i = 0; i < BaseDatosAuto.length; i++) {
   var option = document.createElement("option"); //Creamos la opcion
   option.innerHTML = BaseDatosAuto[i].marca; //Metemos el texto en la opción
   select.appendChild(option); //Metemos la opción en el select
}




///////////// evento onchange para cargar marca y modelo



document.getElementById("exampleFormControlSelect1").addEventListener("change", buscarModelos);

function recibirModelos(numero){
   var select = document.getElementById("exampleFormControlSelect2"); //Seleccionamos el select padre
   select.innerHTML="" //VACIO EL SELECT

    for (var i = 0; i < BaseDatosAuto[numero].modelo.length; i++) {
       var option = document.createElement("option"); //Creamos la opcion
       option.innerHTML = BaseDatosAuto[numero].modelo[i].modelo; //Metemos el texto en la opción
       select.appendChild(option); //Metemos la opción en el select
       }   
   }
function buscarModelos() {

   var buscarMarca = document.getElementById("exampleFormControlSelect1").value;

   switch (buscarMarca) {
      case ("PEUGEOT" ):
         recibirModelos(0)
         break;

      case ("CHEVROLET"):
         recibirModelos(1)
         break;
      
      case ("FORD"):
         recibirModelos(2)
         break;
         
      case ("AUDI"):
         recibirModelos(3)
         break;  

      case ("FORD"):
         recibirModelos(4)
         break;
             
      case ("FIAT"):
         recibirModelos(5)
         break;    
      }
}




///////////// funcion para tomar modelos y cargar anios




document.getElementById("exampleFormControlSelect2").addEventListener("change", buscarAnios);

function buscarAnios() {

   var buscarAnio = document.getElementById("exampleFormControlSelect2").value;

   console.log(buscarAnio)
   switch (buscarAnio) {
      case ("504"):
         var select = document.getElementById("exampleFormControlSelect3"); //Seleccionamos el select padre
        select.innerHTML="" //VACIO EL SELECT

         for (var i = 0; i < BaseDatosAuto[0].modelo[0].anios.length; i++) {
            var option = document.createElement("option"); //Creamos la opcion
            option.innerHTML = BaseDatosAuto[0].modelo[0].anios[i]; //Metemos el texto en la opción
            select.appendChild(option); //Metemos la opción en el select
         }
         break;
      }
}   







/////////////evento click para el boton
document.getElementById("botonCotizar").addEventListener("click", tomarValores);

function tomarValores() {

   var tomarMarca = document.getElementById("exampleFormControlSelect1").value;
   var tomarModelo = document.getElementById("exampleFormControlSelect2").value;
   var tomaranio = document.getElementById("exampleFormControlSelect3").value;
   console.log(tomarMarca + "  " + tomarModelo + "  " + tomaranio);

}  