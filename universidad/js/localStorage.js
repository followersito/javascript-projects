// Local Storage
localStorage.setItem('nombre', 'Ivan');

// Session Storage
sessionStorage.setItem('nombre', 'Ivan');

// Eliminar de local storage
localStorage.removeItem('nombre');
// Limpiar por completo el local storage
// localStorage.clear();

localStorage.setItem('nombre', 'Carlos');

const nombre = localStorage.getItem('nombre');
console.log(nombre);