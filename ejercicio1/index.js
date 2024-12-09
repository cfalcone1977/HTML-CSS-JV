/*
En su página web, agregar un campo para llevar un
contador de X elemento que siempre arranque en 0
• En la página web se muestra la cantidad de X
• Hay un botón para incrementar la cantidad
• Hay un botón para decrementar la cantidad
*/


const suma = document.getElementById("incrementar");
const resta = document.getElementById("decrementar");
let resultado = document.getElementById("contador");
let contador = 0;

function sumando() {
    contador = contador + 1;
    resultado.innerText = contador;
}

function restando() {
    if (contador > 0) {
        contador = contador - 1;
        resultado.innerText = contador;
    }
}


suma.addEventListener("click", sumando);
resta.addEventListener("click", restando);