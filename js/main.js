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

var select = $("#exampleFormControlSelect1"); //Seleccionamos el select
 $.get( "https://private-anon-7b9f17a56e-carsapi1.apiary-mock.com/manufacturers",
function (data){
   DatosDeAutos = []
   for (i=0 ; i < data.length ; i++){
    

    DatosDeAutos.push(data[i].name);
    
   }
 
  


 for (var i = 0; i < DatosDeAutos.length; i++) {
   var option = document.createElement("option"); //Creamos la opcion
   option.innerHTML = DatosDeAutos[i]; //Metemos el texto en la opción
   $(select).append(option); //Metemos la opción en el select
} 
})



function cargarBase(){
   //ESTA FUNCION RECORRE EL ARRAY MARCAS, BUSCANDO UNA COINCIDENCIA EN EL VALOR INGRESADO. CUANDO LO ENCUENTRA, ENVIA LA POSICION DEL ARRAY


$.get( "https://private-anon-7b9f17a56e-carsapi1.apiary-mock.com/cars",
function (data){
   modelosDeAutos = []
    modelosDeAutos.push(data);
    return modelosDeAutos;
})}

function buscarModelos(){

   var buscarMarca = $("#exampleFormControlSelect1").val()
   var select = $("#exampleFormControlSelect2");

    select[0].innerHTML=""
         
         var optionSeleccionar = document.createElement("option"); //Creamos la opcion
                  optionSeleccionar.innerHTML = "SELECCIONAR"; //Metemos el texto en la opción
                  $(select).append(optionSeleccionar); //Metemos la opción en el select
           
    //VACIO EL SELECT

   for (i=0; i< modelosDeAutos[0].length; i++){ // ESTE FOR , BUSCA UNA COINCIDENCIA ENTRE LAS 5 MARCAS Y LO QUE ESCRIBIO EL NUMERO, CUANDO LO ENCUENTRA, LO DEVUELVE A RECBIR MODELO
      if(buscarMarca == modelosDeAutos[0][i].make){
          
               var option = document.createElement("option"); //Creamos la opcion
               option.innerHTML = modelosDeAutos[0][i].model; //Metemos el texto en la opción
               $(select).append(option); //Metemos la opción en el select
                     
            }

   }

}


cargarBase();///cargo la base de datos
$("#exampleFormControlSelect1").change ( buscarModelos)
   
   

/////////////evento click para el boton
$("#botonCotizar").click(buscarModelosDos);

function guardarCompra(){

   
   
   var marca = $("#exampleFormControlSelect1").val();
   var modelo = $("#exampleFormControlSelect2").val();
   var anio = $("#campoAnio").val();
   var nombre = $("#nombre").val();
   var apellido = $("#apellido").val();
   var telefono = $("#telefonoGuardado").val();
   var email = $("#email").val();
   var edad = $("#edad").val();

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
   var buscarMarca = $("#exampleFormControlSelect2").val();

   for (i=0; i<modelosDeAutos[0].length; i++){ // SON PARECIDAS A LAS FUNCIONES DE ARRIBA, ESTA ME VA A BUSCAR EL QUE POSICION DEL ARRAY ESTA LA MARCA
      if(buscarMarca == modelosDeAutos[0][i].model){
         
       
      precioCotizacion = (modelosDeAutos[0][i].price)   
      realizarCotizacion(precioCotizacion)
        
      }
   }
}

////////////////////////////////////////////////////// HASTA ACA
function realizarCotizacion(cotizacion){
   var anioRecibido = parseInt($("#campoAnio").val());
   console.log(anioRecibido)
   cotizacionTotal = (cotizacion/17) + (anioRecibido)
   console.log(cotizacion)
   console.log("El precio de tu seguro es " + cotizacionTotal);


   /* $("#contenedorPosition").css("position", "relative") */
    var precioUno = $("#precioUno");
    var precioDos = $("#precioDos");
    var precioTres = $("#precioTres");
    
   precioUno[0].innerHTML="$ " + cotizacionTotal.toFixed(2);
   precioDos[0].innerHTML="$ " + (cotizacionTotal * 1.10).toFixed(2);
   precioTres[0].innerHTML="$ " + (cotizacionTotal * 1.20).toFixed(2);

   var cambiarTexto = $("#botonCotizar")
   if(cambiarTexto[0].innerHTML == "Cotizar"){
   cambiarTexto[0].innerHTML = "Volver"
   
   } else {
      cambiarTexto[0].innerHTML = "Cotizar"
     
   }
   $("#contenedorPosition").slideToggle();
   
        $('html, body').animate({
           scrollTop: $(document).height()
        }, 1100);
        
        ///prueba API
        
    
    
}

$("#tablaSuperior").click(abrirTabla);

function abrirTabla(){
   $("#tablaInferior").slideToggle();

   $('html, body').animate({
      scrollTop: $(document).height()
   }, 1100);
   
       
}

$("#tablaSuperiorDos").click(abrirTablaDos);

function abrirTablaDos(){
   $("#tablaInferiorDos").slideToggle();

   $('html, body').animate({
      scrollTop: $(document).height()
   }, 1100);
   
       
}

$("#tablaSuperiorTres").click(abrirTablaTres);

function abrirTablaTres(){
   $("#tablaInferiorTres").slideToggle();

   $('html, body').animate({
      scrollTop: $(document).height()
   }, 1100);
   
       
}


function tiempo (){
   
}

$("#botonRecuperar").click(recuperarUsuario);
//con este boton recupero los datos guardados en el local Storage y lo cargo en los campos nuevamente
function recuperarUsuario(){
   
   var nombreCargar= $("#exampleModalLabel").val()
   $("#exampleModal").modal("toggle")


   var carritoGuardado = JSON.parse( sessionStorage.getItem(nombreCargar));
   

   var marca = $("#exampleFormControlSelect1");
   var modelo = $("#exampleFormControlSelect2");
   var anio = $("#campoAnio");
   var nombre = $("#nombre");
   var apellido = $("#apellido");
   var telefono = $("#telefonoGuardado");
   var email = $("#email");
   var edad = $("#edad");

   marca[0].value = carritoGuardado.productos[0];
   cargarBase()
   buscarModelos()
   
   modelo[0].value = carritoGuardado.productos[1]

   anio[0].value = carritoGuardado.productos[2];
   nombre[0].value = carritoGuardado.productos[3];
   apellido[0].value = carritoGuardado.productos[4];
   telefono[0].value = carritoGuardado.productos[5];
   email[0].value = carritoGuardado.productos[6];
   edad[0].value = carritoGuardado.productos[7];

   
}
