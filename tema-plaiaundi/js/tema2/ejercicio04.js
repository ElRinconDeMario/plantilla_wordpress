/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

let litros = 100;        
const RETIRADA = 7;      
const OPERACIONES = 5;   

for (let i = 1; i <= OPERACIONES; i++) {
    litros = litros - RETIRADA;
    console.log("Operación " + i + ": quedan " + litros + " litros");
}