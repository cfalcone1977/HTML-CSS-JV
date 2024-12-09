/*
Dado un form donde ingresar precios, ir sumándolos
y mostrando el valor total
*/


const precios = document.getElementById("precios");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");
let acu = 0;

function esNumero(cadena) {
     let numero = 1;
     for (let i = 0; i < cadena.length; i = i + 1) {
          if ((cadena[i] == "0") || (cadena[i] == "1") || (cadena[i] == "2") || (cadena[i] == "3") || (cadena[i] == "4") || (cadena[i] == "5") ||
               (cadena[i] == "6") || (cadena[i] == "7") || (cadena[i] == "8") || (cadena[i] == "9") || (cadena[i] == ".")) {
               numero = 1;
          } else {
               numero = 0;
          }
          numero = numero * numero;
          console.log(numero);
     }
     if (numero == 1) {
          return true;
     } else {
          return false;
     }
}


function cargarprecios(evento) {
     evento.preventDefault();
     const item = document.getElementById("item").value;
     if ((item) && (esNumero(item))) {
          const li = document.createElement("li");
          li.innerText = item;
          lista.appendChild(li);
          console.log(item);
          acu = acu + parseFloat(item);
          precios.reset();
          console.log(acu);
          resultado.innerText = acu.toFixed(2);
     }
}


precios.addEventListener("submit", cargarprecios);