/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

const texto1 = prompt("Primer número");
const texto2 = prompt("Segundo número");

if (texto1 === null || texto2 === null) {
    console.log("Operación cancelada.");
} else if (texto1.trim() === "" || texto2.trim() === "") {
    console.log("Debes introducir dos valores.");
} else {
    const a = Number(texto1);
    const b = Number(texto2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log("Alguno de los valores no es un número válido.");
    } else {
        console.log("Suma:", a + b);
        console.log("Resta:", a - b);
        console.log("Multiplicación:", a * b);

        if (b === 0) {
            console.log("División: no se puede dividir entre 0.");
        } else {
            console.log("División:", a / b);
        }
    }
}