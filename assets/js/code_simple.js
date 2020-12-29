


 sumar = () => {
    let nombre = document.getElementById("nombre").value;
    let numero_1 = parseInt(document.getElementById("numero_1").value , 10);
    let numero_2 = parseInt(document.getElementById("numero_2").value,10);
    let suma = numero_1 + numero_2;
    document.write( `${nombre} la suma le dio ${suma} `)
}
let resultado = document.getElementById("enviar").addEventListener('click',(e)=> sumar());
