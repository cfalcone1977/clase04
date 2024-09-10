import * as readlineSync from "readline-sync";
let precioU:number;
let cantidad:number;
let mes:number;
let total:number;
console.log("--------------------------------------------");
console.log("--------------Descuento 15%-----------------");
console.log("--------------------------------------------");
precioU = readlineSync.questionFloat("Ingrese el precio :  ");
cantidad = readlineSync.questionFloat("Ingrese la cantidad: ");
mes = readlineSync.questionInt("Ingrese el mes :     ");
console.log("\n");
console.log("\n");
total = precioU * cantidad;
if (mes == 11) {
                    total = total - ((total/100)*15);     
                    console.log("La compra posee descuento del 15%, TOTAL",total);
                  }
                  else {
                       console.log("La compra no posee descuento, TOTAL:",total);
                       }  
                       