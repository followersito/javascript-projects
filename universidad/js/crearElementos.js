// crear enlace

const enlace = document.createElement('a');

// Agregamos clase
enlace.className = 'enlace';
enlace.id = 'nuevo-id';
enlace.setAttribute('href', '#');

// Añadir texto:
// Cualquiera de estas dos formas está bien
enlace.textContent = 'Nuevo enlace';
//enlace.appendChild(document.createTextNode('Nuevo enlace'));

// Seleccionar donde queremos insertar nuestro objeto:
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);