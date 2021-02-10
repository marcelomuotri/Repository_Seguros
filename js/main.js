
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
   new Cmodelo("CORSA", 5000, rango(1990, 2020)),
   new Cmodelo("AGILE", 6000, rango(2005, 2013)),
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
   new Cmodelo("DUNA", 8000, rango(2005, 2015)),
   new Cmodelo("SIENA", 9000, rango(1990, 2014)),
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

function buscarModelos() { //ESTA FUNCION RECORRE EL ARRAY MARCAS, BUSCANDO UNA COINCIDENCIA EN EL VALOR INGRESADO. CUANDO LO ENCUENTRA, ENVIA LA POSICION DEL ARRAY

   var buscarMarca = document.getElementById("exampleFormControlSelect1").value;

   for (i=0; i<BaseDatosAuto.length; i++){ // ESTE FOR , BUSCA UNA COINCIDENCIA ENTRE LAS 5 MARCAS Y LO QUE ESCRIBIO EL NUMERO, CUANDO LO ENCUENTRA, LO DEVUELVE A RECBIR MODELO
      if(buscarMarca == BaseDatosAuto[i].marca){
      recibirModelos(i);
      }
   }


}

function recibirModelos(numero){ //ESTA FUNCION RECIBE EL VALOR DE BUSCARMODELOS Y DEVUELVE LOS MODELOS CORRESPONDIENTES A ESA MARCA
   var select = document.getElementById("exampleFormControlSelect2"); //Seleccionamos el select padre
   select.innerHTML="" //VACIO EL SELECT
   var optionSeleccionar = document.createElement("option"); //Creamos la opcion
            optionSeleccionar.innerHTML = "SELECCIONAR"; //Metemos el texto en la opción
            select.appendChild(optionSeleccionar); //Metemos la opción en el select


    for (var i = 0; i < BaseDatosAuto[numero].modelo.length; i++) {
       var option = document.createElement("option"); //Creamos la opcion
       option.innerHTML = BaseDatosAuto[numero].modelo[i].modelo; //Metemos el texto en la opción
       select.appendChild(option); //Metemos la opción en el select
       }   
   }


///////////// funcion para tomar modelos y cargar anios




document.getElementById("exampleFormControlSelect2").addEventListener("change", buscarAnios);

function buscarAnios() { // ESTA FUNCION RECORRE TODOS LOS MODELOS Y CUANDO ENCUENTRA EL QUE COINCIDE CON EL TEXTO INGRESADO POR EL USUARIO, ENVIA LAS COORDENADAS A RECIBIRANIOS

   var buscarAnio = document.getElementById("exampleFormControlSelect2").value;

   //ESTE ES UN FOR DENTRO DE OTRO, EL DE AFUERA RECORRE UNA MARCA Y DENTRO RECORRE LOS MODELOS DE ESA MARCA, SI EL MODELO NO COINCIDE, EL FOR GRANDE PASA A LA SIGUIENTE MARCA Y ASI LOS VA BUSCANDO, CUANDO ENCUENTRA, DEVUELVE LAS COORDENADAS
   for(j=0; j<BaseDatosAuto.length; j++)   
      for (i=0; i<5; i++){ // TOTAL DE AUTOS
         if(buscarAnio == BaseDatosAuto[j].modelo[i].modelo){
         recibirAnios(j,i);
         }
      }
   }   

function recibirAnios(numeroModelo, numeroAnio){// ESTA FUNCION RECIBE 2 COORDENADAS PARA IR A BUSCAR LOS ANIOS DE LA MARCA Y MODELO QUE RECIBE
   
   var select = document.getElementById("exampleFormControlSelect3"); //Seleccionamos el select padre
        select.innerHTML="" //VACIO EL SELECT
        var optionSeleccionar = document.createElement("option"); //Creamos la opcion
            optionSeleccionar.innerHTML = "SELECCIONAR"; //Metemos el texto en la opción
            select.appendChild(optionSeleccionar); //Metemos la opción en el select


         for (var i = 0; i < BaseDatosAuto[numeroModelo].modelo[numeroAnio].anios.length; i++) {
            var option = document.createElement("option"); //Creamos la opcion
            option.innerHTML = BaseDatosAuto[numeroModelo].modelo[numeroAnio].anios[i]; //Metemos el texto en la opción
            select.appendChild(option); //Metemos la opción en el select
         }
   }


   

/////////////evento click para el boton
document.getElementById("botonCotizar").addEventListener("click", buscarModelosDos);

function guardarCompra(){

   
   
   marca = document.getElementById("exampleFormControlSelect1").value;
   modelo = document.getElementById("exampleFormControlSelect2").value;
   anio = document.getElementById("exampleFormControlSelect3").value;
   nombre = document.getElementById("nombre").value;
   apellido = document.getElementById("apellido").value;
   telefono = document.getElementById("telefono").value;
   email = document.getElementById("email").value;
   edad = document.getElementById("edad").value;

      function Carrito(nombre, productos){
         this.nombre = nombre;
         this.productos = productos;
      }
         var carrito = new Carrito ( apellido, [ marca, modelo, anio, nombre, apellido, telefono, email, edad ] )
         
         var carritoJSON = JSON.stringify(carrito)
      


   sessionStorage.setItem(apellido, carritoJSON)

}

function buscarModelosDos() { 
   guardarCompra();
   var buscarMarca = document.getElementById("exampleFormControlSelect1").value;

   for (i=0; i<BaseDatosAuto.length; i++){ // SON PARECIDAS A LAS FUNCIONES DE ARRIBA, ESTA ME VA A BUSCAR EL QUE POSICION DEL ARRAY ESTA LA MARCA
      if(buscarMarca == BaseDatosAuto[i].marca){      
         
         recibirModelosDos(i);
      
      }
   }
}

function recibirModelosDos(numero){ 

   var buscarModelo = document.getElementById("exampleFormControlSelect2").value;
   

    for (var i = 0; i < BaseDatosAuto[numero].modelo.length; i++) { // Y ESTA ME VA A BUSCAR EN QUE POSICION ESTA EL MODELO
          
       if (buscarModelo == BaseDatosAuto[numero].modelo[i].modelo){
       numeroCotizacion = (BaseDatosAuto[numero].modelo[i].valor);   
       realizarCotizacion(numeroCotizacion);
       }
       
      }
   
   }
function realizarCotizacion(cotizacion){
   console.log(cotizacion)
   var anioRecibido = document.getElementById("exampleFormControlSelect3").value;
   cotizacionTotal = (cotizacion/17) + (anioRecibido*0.4)
   console.log("El precio de tu seguro es " + cotizacionTotal);
/* 
   var parrafo = document.createElement("p");
   parrafo.innerHTML="El precio de tu seguro es " + cotizacionTotal.toFixed(2);
   document.body.appendChild(parrafo) */
   /* document.getElementById("botonCotizar").style.backgroundColor = "red"; */

   document.getElementById("contenedorPosition").style.position = "relative"
    var precioUno = document.getElementById("precioUno");
    var precioDos = document.getElementById("precioDos");
    var precioTres = document.getElementById("precioTres");
    
   precioUno.innerHTML="$ " + cotizacionTotal.toFixed(2);
   precioDos.innerHTML="$ " + (cotizacionTotal * 1.10).toFixed(2);
   precioTres.innerHTML="$ " + (cotizacionTotal * 1.20).toFixed(2);

   var cambiarTexto = document.getElementById("botonCotizar")
   if(cambiarTexto.innerHTML == "Cotizar"){
   cambiarTexto.innerHTML = "Volver"
   
   } else {
      cambiarTexto.innerHTML = "Cotizar"
      document.getElementById("contenedorPosition").style.position = "fixed"; 
   }
      ////ACA PODRIA HACER UN IF, PARA QUE VUELVA ATRAS Y SE PONGA FIXED DENUEVO    
}

document.getElementById("botonRecuperar").addEventListener("click", recuperarUsuario);

function recuperarUsuario(){
   var nombreCargar= prompt("que nombre queres cargar");
   var carritoGuardado = JSON.parse( sessionStorage.getItem(nombreCargar));
   console.log(carritoGuardado)
   console.log(carritoGuardado.productos[3])


   marca = document.getElementById("exampleFormControlSelect1");
   modelo = document.getElementById("exampleFormControlSelect2");
   anio = document.getElementById("exampleFormControlSelect3");
   nombre = document.getElementById("nombre");
   apellido = document.getElementById("apellido");
   telefono = document.getElementById("telefono");
   email = document.getElementById("email");
   edad = document.getElementById("edad");

   marca.value = carritoGuardado.productos[0];
   buscarModelos();
   modelo.value = carritoGuardado.productos[1];
   buscarAnios();
   anio.value = carritoGuardado.productos[2];
   nombre.value = carritoGuardado.productos[3];
   apellido.value = carritoGuardado.productos[4];
   telefono.value = carritoGuardado.productos[5];
   email.value = carritoGuardado.productos[6];
   edad.value = carritoGuardado.productos[7];
   
   
   
   
   
   
   

}