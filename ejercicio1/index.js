const suma=document.getElementById("incrementar");
const resta=document.getElementById("decrementar");
let resultado=document.getElementById("contador");
let contador=0;

function sumando(){
    contador=contador+1;
    resultado.innerText=contador;
}

function restando(){
    if (contador>0){
            contador=contador-1;
            resultado.innerText=contador;
                   }
}


suma.addEventListener("click",sumando);
resta.addEventListener("click",restando);