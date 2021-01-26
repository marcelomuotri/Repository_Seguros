  

  function Autos(marca, modelo , anio){//CREO EL CONSTRUCTOR
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    
    }
        
    //OBJETOS TIPO AUTO//
    var aniosAutos= ["1990" , "1991" , "1992" , "1993" , "1994"];
    primerAuto = new Autos ("Peugeot", ["206", "207", "208", "306" , "307" , "308"], aniosAutos);

    segundoAuto = new Autos ("Chevrolet", ["corsa" , "agile" , "onix" , "camaro"], aniosAutos);

    
    BaseDatosAuto = [primerAuto, segundoAuto];
    
    console.log(BaseDatosAuto[0].anio);   
   
    
    