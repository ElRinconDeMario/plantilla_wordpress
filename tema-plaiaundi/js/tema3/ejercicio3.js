const alumnos = [
  { nombre: "Ane", nota: 8 },
  { nombre: "Iker", nota: 4 },
  { nombre: "June", nota: 7 }
];

function anadirAprobado(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
}
const resultado1 = alumnos.map(anadirAprobado);
console.log("3-1:", resultado1);

const anadirAprobadoExpresion = function (alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
};
const resultado2 = alumnos.map(anadirAprobadoExpresion);
console.log("3-2:", resultado2);

const anadirAprobadoFlecha = alumno => ({ ...alumno, aprobado: alumno.nota >= 5 });
const resultado3 = alumnos.map(anadirAprobadoFlecha);
console.log("3-3:", resultado3);

const resultado4 = alumnos.map(function (alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
});

console.log("3-4:", resultado4);

console.log("3-5:", resultado5);

console.log("Original intacto:", alumnos);