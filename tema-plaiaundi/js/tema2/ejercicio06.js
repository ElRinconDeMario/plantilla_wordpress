/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

const importe = Number(prompt("Importe de la compra (€)"));

if (Number.isNaN(importe) || importe < 0) {
    console.log("Importe no válido.");
} else {
    let porcentaje = 0;

    if (importe >= 200) {
        porcentaje = 15;
    } else if (importe >= 100) {
        porcentaje = 10;
    } else if (importe >= 50) {
        porcentaje = 5;
    }

    const descuento = importe * porcentaje / 100;
    const precioFinal = importe - descuento;

    console.log("Importe inicial:", importe.toFixed(2), "€");
    console.log("Porcentaje aplicado:", porcentaje, "%");
    console.log("Cantidad descontada:", descuento.toFixed(2), "€");
    console.log("Precio final:", precioFinal.toFixed(2), "€");
}