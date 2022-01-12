function saludar (){
    alert("Hola todos")
}
saludar();

//Expresion de función
var cantar=function (){
    alert ("La cucaracha, la cucaracha...")
}
cantar ();
//Función sin parametros
function sumar(){
    var num1=100;
    var num2=6;
    var sum=num1+num2;
    alert("La suma de la función sin parametros es: " + sum )
}
sumar();
//Función con parametros
function restar (num1,num2,resta) {
    var num1 = 42;
    var num2 = 24;
    var resta = num1-num2;
    alert("La resta de la función es: " + resta);
}
restar();
//Parametros de nuevo
function cuadrado (cuadrado, resCuad){
    var resCuad = cuadrado*cuadrado;
    alert ("El resultado es: "+resCuad);
}
cuadrado(4);
//Calculadora
function calculadora (num1, num2, num3, sum, res, mul){
    var sum = num1+num2;
    var res = num2-num3;
    var mul = num1*num2*num3;
    alert ("Suma: " + sum + " Resta: " + res + " Multiplicación: " + mul)
}
calculadora(8,4,7)