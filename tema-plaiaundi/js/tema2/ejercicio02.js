/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

const resultados = [
    ['Number("25")', Number("25")],
    ['Number("25.7")', Number("25.7")],
    ['Number("25px")', Number("25px")],
    ['parseInt("25px")', parseInt("25px")],
    ['parseInt("25.7")', parseInt("25.7")],
    ['parseFloat("25.7kg")', parseFloat("25.7kg")],
    ['Number("")', Number("")],
    ['Number(" ")', Number(" ")]
];

for (const [expresion, valor] of resultados) {
    console.log(expresion, "->", valor, "| tipo:", typeof valor, "| NaN:", Number.isNaN(valor));
}