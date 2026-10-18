function analizarNotas(notas) {
  let suma = 0;
  let aprobados = 0;

  for (const nota of notas) {
    suma += nota;
    if (nota >= 5) {
      aprobados++;
    }
  }

  // Evitamos dividir entre cero si el array esta vacio
  const media = notas.length === 0 ? 0 : suma / notas.length;

  return { suma, media, aprobados };
}

const notas = [5, 8, 3, 10, 6];
const resultado = analizarNotas(notas);
console.log("Notas:", notas);
console.log("Suma:", resultado.suma);          // 32
console.log("Media:", resultado.media);        // 6.4
console.log("Aprobados:", resultado.aprobados); // 4

// Prueba con array vacio
const vacio = analizarNotas([]);
console.log("Array vacio:", vacio); 