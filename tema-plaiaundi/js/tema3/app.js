// practica final

// ---------- Funciones ----------

// Devuelve un array con los nombres
function obtenerNombres(lista) {
  return lista.map(p => p.nombre);
}

// Devuelve los productos con stock mayor que 0
function obtenerDisponibles(lista) {
  return lista.filter(p => p.stock > 0);
}

// Devuelve el producto con ese id, o undefined si no existe
function buscarPorId(lista, id) {
  return lista.find(p => p.id === id);
}

// Devuelve la suma de precio × stock (0 si la lista está vacía)
function calcularValorStock(lista) {
  return lista.reduce((total, p) => total + p.precio * p.stock, 0);
}

// Combina selección (filter) y transformación (map)
function obtenerNombresDisponibles(lista) {
  return obtenerDisponibles(lista).map(p => p.nombre);
}

// ---------- Datos ----------

const catalogo = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
  { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

// Copia en texto para comprobar al final que el catálogo no cambia
const catalogoInicial = JSON.stringify(catalogo);

// ---------- Código que llama y muestra ----------

console.log("=== Catálogo completo ===");
const nombres = obtenerNombres(catalogo);
const disponibles = obtenerDisponibles(catalogo);
console.log("Nombres:", nombres, "->", nombres.length, "nombres");                 // 4
console.log("Disponibles:", disponibles, "->", disponibles.length, "productos");    // 3
console.log("Nombres disponibles:", obtenerNombresDisponibles(catalogo));           // Teclado, Monitor, Cable
console.log("Valor del stock:", calcularValorStock(catalogo));                      // 580

console.log("=== Búsqueda de id 2 (stock 0, pero existe) ===");
const raton = buscarPorId(catalogo, 2);
console.log(raton); // { id: 2, nombre: "Ratón", precio: 18, stock: 0 }

console.log("=== Búsqueda de id 99 (no existe) ===");
const inexistente = buscarPorId(catalogo, 99);
if (inexistente !== undefined) {
  console.log(inexistente.nombre);
} else {
  console.log("No existe ningún producto con id 99"); // sin acceder a propiedades
}

console.log("=== Array vacío ===");
const vacio = [];
console.log("Nombres:", obtenerNombres(vacio));                        // []
console.log("Disponibles:", obtenerDisponibles(vacio));                // []
console.log("Búsqueda id 1:", buscarPorId(vacio, 1));                  // undefined
console.log("Nombres disponibles:", obtenerNombresDisponibles(vacio)); // []
console.log("Valor del stock:", calcularValorStock(vacio));            // 0

console.log("=== Comprobación: el catálogo conserva sus datos ===");
console.log(JSON.stringify(catalogo) === catalogoInicial ? "OK, sin cambios" : "ERROR: el catálogo ha cambiado");