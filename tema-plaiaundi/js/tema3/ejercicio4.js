const productos = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
];

// Copia en texto para comprobar al final que no se han modificado los datos
const copiaOriginal = JSON.stringify(productos);

// Array con los precios
const precios = productos.map(p => p.precio);
console.log("Precios:", precios);

// Productos de menos de 40 €
const baratos = productos.filter(p => p.precio < 40);
console.log("Menos de 40 €:", baratos);

// Producto con id 2
const productoId2 = productos.find(p => p.id === 2);
console.log("Producto id 2:", productoId2);

console.log("Originales intactos:", JSON.stringify(productos) === copiaOriginal); // true