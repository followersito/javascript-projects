// Query selector
// Se puede seleccionar por clase (sintaxis de CSS)
// Para devolver todos se usa querySelectorAll 
const encabezado = document.querySelector('.encabezado');

let enlace;

// Nesting (Seleccionamos un elemento padre y otro hijo)
enlace = document.querySelector('#principal a:first-child')

console.log(enlace);