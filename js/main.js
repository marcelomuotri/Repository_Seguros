

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

   for (i=0; i< modelosDeAutos[0].length; i++){ // ESTE FOR , BUSCA UNA COINCIDENCIA ENTRE LAS MARCAS Y LO QUE ESCRIBIO EL NUMERO, CUANDO LO ENCUENTRA, LO DEVUELVE A RECBIR MODELO
      if(buscarMarca == modelosDeAutos[0][i].make){
          
               var option = document.createElement("option"); //Creamos la opcion
               option.innerHTML = modelosDeAutos[0][i].model; //Metemos el texto en la opción
               $(select).append(option); //Metemos la opción en el select
                     
            }

   }
   
}

function cargarImagenes() {
   modelo = $("#exampleFormControlSelect2").val();
   for (i=0; i< modelosDeAutos[0].length; i++){ // 
      if(modelo == modelosDeAutos[0][i].model){
         
          url = modelosDeAutos[0][i].img_url
          console.log(modelosDeAutos[0][i].img_url)
            }

   }
   
   $("#cuadradito").empty();
   $("#cuadradito").append('<img src= "'+ url + '" alt="..." class="img-thumbnail">'); 
   
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
   cargarImagenes();
   var buscarMarca = $("#exampleFormControlSelect2").val();

   for (i=0; i<modelosDeAutos[0].length; i++){ // SON PARECIDAS A LAS FUNCIONES DE ARRIBA, ESTA ME VA A BUSCAR EL QUE POSICION DEL ARRAY ESTA LA MARCA
      if(buscarMarca == modelosDeAutos[0][i].model){

         
      precioCotizacion = (modelosDeAutos[0][i].price)
      realizarCotizacion(precioCotizacion)
      mostrarValorAsegurado(precioCotizacion)
      }
   }
} 

////////////////////////////////////////////////////// HASTA ACA
const mostrarValorAsegurado = (cotizacion) => {
   
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })

   var valor = $("#agregarTexto");
   var nombre = $("#nombre").val();
   var apellido = $("#apellido").val();
   var edad = $("#edad").val();
   var marca = $("#exampleFormControlSelect1").val();
   var modelo = $("#exampleFormControlSelect2").val();
   var anio = $("#campoAnio").val();
   


   $("#agregarTexto").empty();

   var p = document.createElement("p"); //Creamos un p
   p.innerHTML =  marca.toUpperCase() + " " + modelo.toUpperCase() + " DEL AÑO " + anio;
   $(valor).append(p); //Lo metemos adentro del div

   var p = document.createElement("p"); //Creamos un p
   p.innerHTML = nombre.toUpperCase() + " " + apellido.toUpperCase() + " , " + edad + " AÑOS";
   $(valor).append(p); //Lo metemos adentro del div

   
   var p = document.createElement("p"); //Creamos un p
   p.innerHTML = "El valor asegurado de tu automovil es " + formatter.format(cotizacion); // le asignamos un valor al p 
   $(valor).append(p); //Lo metemos adentro del div

}
function realizarCotizacion(cotizacion){
   var anioRecibido = parseInt($("#campoAnio").val());
   
   cotizacionTotal = (cotizacion/17) + (anioRecibido)
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
   cargarBase()//estas 2 funciones las cargo para que se cargue la base de datos para que modelo pueda funcionar
   buscarModelos()

   modelo[0].value = carritoGuardado.productos[1];
   anio[0].value = carritoGuardado.productos[2];
   nombre[0].value = carritoGuardado.productos[3];
   apellido[0].value = carritoGuardado.productos[4];
   telefono[0].value = carritoGuardado.productos[5];
   email[0].value = carritoGuardado.productos[6];
   edad[0].value = carritoGuardado.productos[7];

}
////////////////////////////////

//VALIDACIONES


///////VALIDACION DE MARCA

$("#exampleFormControlSelect1").blur(function(){
   var marca = $("#exampleFormControlSelect1").val()
   if (marca == "SELECCIONAR"){
      $('#tooltipMarca').css('visibility' , 'visible')
   }else{
      $('#tooltipMarca').css('visibility' , 'hidden')
      }
   }   
 );


///////VALIDACION DE MODELO

$("#exampleFormControlSelect2").blur(function(){
   var modelo = $("#exampleFormControlSelect2").val()
   if (modelo == "SELECCIONAR"){
      $('#tooltipModelo').css('visibility' , 'visible')
   }else{
      $('#tooltipModelo').css('visibility' , 'hidden')
      }
   }   
 );

 //////////// VALIDACION DE ANIO

 $("#campoAnio").blur(function(){
   var anio = $("#campoAnio").val()
   if (anio == "" || anio >= 2020 || anio <= 1980) {
      $('#tooltipAnio').css('visibility' , 'visible')
   }else{
      $('#tooltipAnio').css('visibility' , 'hidden')
      }
   }   
 );


 $("#nombre").blur(function(){
   var nombre = $("#nombre").val()
   const maximo = 13;
   const pattern = new RegExp('^[A-Z]+$', 'i');
   if (nombre == "" || nombre.length > maximo || !pattern.test(nombre)) {
      $('#tooltipNombre').css('visibility' , 'visible')
   }else{
      $('#tooltipNombre').css('visibility' , 'hidden')
      }
   }   
 );

 $("#apellido").blur(function(){
   var apellido = $("#apellido").val()
   const maximo = 13;
   const pattern = new RegExp('^[A-Z]+$', 'i');
   if (apellido == "" || apellido.length > maximo || !pattern.test(apellido)) {
      $('#tooltipApellido').css('visibility' , 'visible')
   }else{
      $('#tooltipApellido').css('visibility' , 'hidden')
      }
   }   
 );

 $("#telefonoGuardado").blur(function(){
   var telefono = $("#telefonoGuardado").val()
   if (telefono == "" || telefono.length > 10) {
      $('#tooltipTelefono').css('visibility' , 'visible')
   }else{
      $('#tooltipTelefono').css('visibility' , 'hidden')
      }
   }   
 );
 

 $("#email").blur(function(){
   var email = $("#email").val()
  if(email.indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
      $('#tooltipEmail').css('visibility' , 'visible')
        return false;
   }else{
      $('#tooltipEmail').css('visibility' , 'hidden')
            }

 });

 $("#edad").blur(function(){
   var edad = $("#edad").val()
   if (edad == "" || edad.length > 2 || edad < 17) {
      $('#tooltipEdad').css('visibility' , 'visible')
   }else{
      $('#tooltipEdad').css('visibility' , 'hidden')
      }
   }   
 );