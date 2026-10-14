/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

const nombre = prompt("Nombre");
const edad = prompt("Edad");
const altura = prompt("Altura en metros");

console.log("Tipos originales:", typeof nombre, typeof edad, typeof altura);

const edadNum = Number(edad);
const alturaNum = Number(altura);

console.log("Tipos tras convertir:", typeof nombre, typeof edadNum, typeof alturaNum);
console.log("Datos convertidos:", nombre, edadNum, alturaNum);