import * as readlineSync from "readline-sync";
let nro1:number;
let nro2:number;
let nro3:number;
let primerNumero: boolean;
let segundoNumero: boolean;
let tercerNumero: boolean;
console.log("--------------------------------------------");
console.log("---------Determinar Numero Mayor------------");
console.log("--------------------------------------------");
nro1 = readlineSync.questionFloat("Ingrese el primer numero : ");
nro2 = readlineSync.questionFloat("Ingrese el segundo numero: ");
nro3 = readlineSync.questionFloat("Ingrese el tercer numero : ");
primerNumero = (nro1 > nro2) && (nro1 > nro3);
segundoNumero = (nro2 >nro1) && (nro2 > nro3);
tercerNumero = (nro3 > nro1) && (nro3 > nro2); //finalmente no es utilizada esta variable!!. No hace falta. 
console.log("\n");

if (primerNumero) {
                    console.log("El MAYOR numero es el primero:",nro1);
                  }
                  else if (segundoNumero) {
                                            console.log("El MAYOR numero es el segundo:",nro2);
                                          }  
                                          else {
                                                console.log("El MAYOR numero es el tercero:",nro3);
                                               }  
