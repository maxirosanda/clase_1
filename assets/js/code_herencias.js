
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
    class operacion2 extends operacion {
        constructor() {
            super (nombre,numero_1,numero_2)
           let multi;
          }
          sumar() {
            this.nombre = document.getElementById("nombre").value;
            this.numero_1 = parseInt(document.getElementById("numero_1").value , 10);
            this.numero_2 = parseInt(document.getElementById("numero_2").value, 10);
           this.multi = this.numero_1 * this.numero_2;
            return document.write( `${this.nombre} la suma le dio ${this.multi} `)
        } 
      get mostrar_resultado_2(){  
        return this.multiplicar();
      }
    
    
    }
    let obj = new operacion2();
    obj.monitorear("enviar");
    obj.mostrar_resultado_2;
    
    
