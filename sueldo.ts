import * as readlineSync from "readline-sync";
let sueldo:number;
let aumento:number;
console.log("--------------------------------------------");
console.log("------Aumento Sueldo por Ingresos 15%-------");
console.log("--------------------------------------------");
sueldo = readlineSync.questionFloat("Ingrese el sueldo :  ");
console.log("\n");
console.log("\n");
if (sueldo >= 0 && sueldo <= 15000) 
                             {
                              aumento = (sueldo/100)*20;  
                              sueldo = sueldo + aumento;
                              console.log("El aumento de sueldo a aplicar es del 20% y son:",aumento);
                              console.log("El nuevo sueldo con aumento:                    ",sueldo);
                             }
                             else if (sueldo >= 15001 && sueldo <= 20000)
                                          {
                                            aumento = (sueldo/100)*10;  
                                            sueldo = sueldo + aumento;
                                            console.log("El aumento de sueldo a aplicar es del 10% y son:",aumento);
                                            console.log("El nuevo sueldo con aumento:                    ",sueldo);
                                          }
                                       else if (sueldo >= 20001 && sueldo <= 25000)
                                        {
                                          aumento = (sueldo/100)*5;  
                                          sueldo = sueldo + aumento;
                                          console.log("El aumento de sueldo a aplicar es del 5% y son:",aumento);
                                          console.log("El nuevo sueldo con aumento:                    ",sueldo);
                                        } else if (sueldo >= 25001)
                                            {
                                              console.log("El sueldo NO POSEE AUMENTO");
                                              console.log("El sueldo continua siendo:",sueldo);
                                            }
                                              else 
                                                {
                                                 console.log("Error al ingresar SUELDO");    
                                                }
                                                                         