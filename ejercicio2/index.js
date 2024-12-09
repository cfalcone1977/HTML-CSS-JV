const precios=document.getElementById("precios");
const lista=document.getElementById("lista");
const resultado=document.getElementById("resultado");
let acu=0;
function cargarprecios(evento){
     evento.preventDefault();
     const item=document.getElementById("item").value;
     if (item) {
                      const li= document.createElement("li");
                      li.innerText = item;
                      lista.appendChild(li);
                      acu= acu+ parseFloat(item);
                      precios.reset();
                      console.log(acu);
                      resultado.innerText=acu.toFixed(2);
                     }
}


precios.addEventListener("submit",cargarprecios);