
class operacion {
    constructor (){
    let nombre;
    let numero_1;
    let numero_2;
    let suma;
    
    }
       
     sumar() {
        this.nombre = document.getElementById("nombre").value;
        this.numero_1 = parseInt(document.getElementById("numero_1").value , 10);
        this.numero_2 = parseInt(document.getElementById("numero_2").value, 10);
       this.suma = this.numero_1 + this.numero_2;
        return document.write( `${this.nombre} la suma le dio ${this.suma} `)
    }   
    monitorear(boton) { document.getElementById(boton).addEventListener('click',(e)=> this.sumar())}
    get mostrar_resultado() {
        return this.sumar();
      }
    }
    let obj = new operacion();
    obj.monitorear("enviar");
    obj.mostrar_resultado;
    
    
