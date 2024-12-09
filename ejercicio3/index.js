const tirar=document.getElementById("botonTirar");
const mensaje=document.getElementById("mensaje");

function probarSuerte(){
 let dado1=0;
 let dado2=0;
 let sumaDados=0;
 contador=0;
 for (let i = 1; i <=10; i=i+1) {
            dado1=Math.ceil(Math.random()*6);
            dado2=Math.ceil(Math.random()*6);
            console.log(dado1," ",dado2);
            sumaDados=dado1+dado2;
            //mensaje.innerText=" MMM, sin suerte!!!, has sacado " + sumaDados;   
            if (dado1+dado2==7) {
                                contador=contador+1;
                                }
                               }
if (contador>0){
                mensaje.innerText=" BIEN!!!, usted saco 7:  "+contador+" veces.";
               } else {
                         mensaje.innerText=" MMM, sin suerte!!!, sigue probando...";
                      }
}

tirar.addEventListener("click",probarSuerte);



/*
 dado1=Math.ceil(Math.random()*6);
 dado2=Math.ceil(Math.random()*6);
 console.log(dado1," ",dado2);
 sumaDados=dado1+dado2;
 mensaje.innerText=" MMM, sin suerte!!!, has sacado " + sumaDados;
if (dado1+dado2==7) {
                      console.log("Usted tiene suerte, ha sacado 7");
                      mensaje.innerText=" BIEN!!!, ha sacado 7 ";
                     }
*/