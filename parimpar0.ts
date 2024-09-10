import * as readlineSync from "readline-sync";
let nro:number;
let parimpar:number;
console.log("--------------------------------------------");
console.log("--------Determinar PAR IMPAR y CERO---------");
console.log("--------------------------------------------");
nro = readlineSync.questionFloat("Ingrese el numero : ");
parimpar = nro % 2;
if (nro == 0) {
                console.log("El numero ingresado es CERO");
              }
               else if (parimpar == 0) {
                                         console.log("El numero ingresado es PAR");   
                                       } 
                                       else  
                                           {
                                            console.log("El numero ingresado es IMPAR");   
                                           } 
