  

  function Autos(marca, modelo , anio){//CREO EL CONSTRUCTOR
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    
    }
        
    //OBJETOS TIPO AUTO//
     aniosAutos= ["1990" , "1991" , "1992" , "1993" , "1994", "1995","1996", "1997"];
    primerAuto = new Autos ("Peugeot", ["505" ,"206", "207", "208", "306" , "307" , "308"], aniosAutos);

    segundoAuto = new Autos ("Chevrolet", ["corsa" , "agile" , "onix" , "camaro"], aniosAutos);
    
    BaseDatosAuto = [primerAuto, segundoAuto];
       
   var select = document.getElementById("exampleFormControlSelect3"); //Seleccionamos el select
      
      for(var i=0; i < BaseDatosAuto[0].anio.length; i++){ 
          var option = document.createElement("option"); //Creamos la opcion
          option.innerHTML = BaseDatosAuto[0].anio[i]; //Metemos el texto en la opción
          select.appendChild(option); //Metemos la opción en el select
      }
  
     
   var select = document.getElementById("exampleFormControlSelect1"); //Seleccionamos el select
   
      for(var i=0; i < BaseDatosAuto.length; i++){ 
         var option = document.createElement("option"); //Creamos la opcion
         option.innerHTML = BaseDatosAuto[i].marca; //Metemos el texto en la opción
         select.appendChild(option); //Metemos la opción en el select
      }

   var select = document.getElementById("exampleFormControlSelect2"); //Seleccionamos el select
      
      for(var i=0; i < BaseDatosAuto[0].modelo.length; i++){ 
          var option = document.createElement("option"); //Creamos la opcion
          option.innerHTML = BaseDatosAuto[0].modelo[i]; //Metemos el texto en la opción
          select.appendChild(option); //Metemos la opción en el select
      }

    