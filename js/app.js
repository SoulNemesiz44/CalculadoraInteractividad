//Variables
var name = " ";
var operadora;
var operadorb;
var operacion = " ";
var p=0;
var resultado = document.getElementById("display");
 var dividir = document.getElementById("dividido");
 var t7 = document.getElementById("7");
 var t8 = document.getElementById("8");
 var t9 = document.getElementById("9");
 var multiplicar = document.getElementById("por");
 var t4 = document.getElementById("4");
 var t5 = document.getElementById("5");
 var t6 = document.getElementById("6");
 var restar = document.getElementById("menos");
 var t1 = document.getElementById("1");
 var t2 = document.getElementById("2");
 var t3 = document.getElementById("3");
 var t0 = document.getElementById("0");
var tigual = document.getElementById("igual");
 var sumar = document.getElementById("mas");
 var encender = document.getElementById("on")
 var punto = document.getElementById("punto")
 var calculadorageneral= document.getElementById("calculadoraFondo")
 var listaImg = document.querySelectorAll(".tecla")

//Controlar que la magnitud no supere los 8 digitos.
calculadorageneral.onclick = function(){
  controllength();
}

encender.onclick = function(){
  ResetCal();
}
//Proceso para hacer aparecer las teclas en la pantalla(Mouse)
punto.onclick = function(e){
controlarpunto();

}

 t7.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("7").style="width:70px";
   }reducirTamañoLetra()

   if (resultado.textContent==="0") {
     resultado.textContent= "7"
   }
     else {
       resultado.textContent += "7";
     }
   }
 t8.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("8").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "8"
   }
     else {
       resultado.textContent += "8";
     }
 }

 t9.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("9").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "9"
   }
     else {
       resultado.textContent += "9";
     }

 }
 t4.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("4").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "4"
   }
     else {
       resultado.textContent += "4";
     }

 }
 t5.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("5").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "5"
   }
     else {
       resultado.textContent += "5";
     }

 }
 t6.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("6").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "6"
   }
     else {
       resultado.textContent += "6";
     }

 }
 t1.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("1").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "1"
   }
     else {
       resultado.textContent += "1";
     }

 }
 t2.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("2").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "2"
   }
     else {
       resultado.textContent += "2";
     }

 }
 t3.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("3").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "3"
   }
     else {
       resultado.textContent += "3";

     }
 }
 t0.onclick = function(e){
   function reducirTamañoLetra(){
     document.getElementById("0").style="width:70px";
   }reducirTamañoLetra();
   if (resultado.textContent==="0") {
     resultado.textContent= "0"
   }
     else {
       resultado.textContent +="0";
     }
     reducirTamañoLetra();
 }
 //Operaciones Logicas

 sumar.onclick = function(e){
   operadora = resultado.textContent;
   operacion = "+";
   clear();
 }
 restar.onclick = function(e){
   operadora = resultado.textContent;
   operacion = "-";
   clear();
 }
 dividir.onclick = function(e){
   operadora = resultado.textContent;
   operacion = "/";
   clear();
 }
 multiplicar.onclick = function(e){
   operadora = resultado.textContent;
   operacion = "*";
   clear();
 }
 tigual.onclick = function(e){
   operadorb = resultado.textContent;
   procedimiento();
 }
//Saludo.
  function initCalculadora(){
    let name = prompt('!!Buen dia!!, antes comenzar... ¿Cuál es tu nombre?');
    alert('¡Hola ' + name + ', Bienvenido a mi primer proyecto en Js!');
 }
//Proceso para Limpiar Calculadora
function clear(){
  p=0;
  resultado.textContent = "";
}
//Proceso para reiniciar calculadora
function ResetCal(){
  p=0;
  resultado.textContent = "0";
  operadora=0;
  operadorb=0;
  operacion="";
}
function controllength(){
  if (resultado.textContent.length>=8){
    alert("No puedes digitar mas de 8 numeros en pantalla")
    ResetCal();

  }
}
function controlarpunto(){
  for(x=1;x<=2;x++){
    p+=1;
    if (p>=2) {
      resultado.textContent+="";
    }else {
      resultado.textContent+=".";
    }
  }
}

function procedimiento(){
    var respuesta = 0;
  switch (operacion) {
    case "+":
    respuesta = parseFloat(operadora) + parseFloat(operadorb);
    break;
    case "-":
    respuesta = parseFloat(operadora) - parseFloat(operadorb);
    break;
    case "/":
    respuesta = parseFloat(operadora) / parseFloat(operadorb);
    break;
    case "*":
    respuesta = parseFloat(operadora) * parseFloat(operadorb);
    break;

  }
  ResetCal();
  resultado.textContent = respuesta;
}
