/*
function prompter () {
    var respuesta = prompt("Buenos días ¿Cómo te llamas?");
    alert("Es un gusto saludarte "+respuesta);
}
prompter();

function areaCuadrado (){
    var lado = prompt("¿Cuánto mide el lado?");
    alert ("El área del cuadrado es: " + (lado*lado));
}
areaCuadrado();
*/
function confirmacion(){
    var pregunta = confirm ("¿Quieres ver mis pepes?");
    if (pregunta){
        alert ("Vamos")
        window.location = "https://www.reddit.com/r/pepethefrog/"
    }
    else{
        alert ("K")
    }
}
function cambioColor(nuevoColor){
    var elem = document.getElementById("parrafo");
    elem.style.color = nuevoColor;
}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}
