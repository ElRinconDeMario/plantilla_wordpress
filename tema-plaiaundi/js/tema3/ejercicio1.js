function esParDeclaracion(numero) {
  return numero % 2 === 0;
}

// Flecha con retorno implicito
const esParImplicito = numero => numero % 2 === 0;

// Flecha con llaves y return explicito
const esParConLlaves = (numero) => {
  return numero % 2 === 0;
};

// Comprobacion: las tres deben producir el mismo boolean
const pruebas = [0, 1, 2, 7, 10, -4, -3];
for (const n of pruebas) {
  const a = esParDeclaracion(n);
  const b = esParImplicito(n);
  const c = esParConLlaves(n);
  console.log(n, a, b, c, a === b && b === c ? "OK" : "DIFERENTE");
}