//Triangulo
function triangulo(){
    var base = 5;
    var altura= 10;
    var area = (base*altura)/2;
    alert("El area del triangulo es: " + area);
}
triangulo();
function circulo (radio, area){
    var radio = 4;
    var area = (3.1416)*(radio*radio);
    alert("El area del circulo es: " + area);
}
circulo();
function rectangulo (base, altura, area){
    var area = base*altura;
    alert("El area del rectangulo es: " + area);
}
rectangulo(5, 8);