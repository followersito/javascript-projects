const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

function obtenerEvento(e) {
    console.log(`EVENTO: ${e.type}`);

}

// Click
// boton.addEventListener('click', obtenerEvento);

// Doble click
// boton.addEventListener('dblclick', obtenerEvento);

// Mouse enter
// boton.addEventListener('mouseenter', obtenerEvento)

// Mouse leave
// boton.addEventListener('mouseleave', obtenerEvento)

// Mouse over
boton.addEventListener('mouseover', obtenerEvento)
encabezado.addEventListener('mousemove', obtenerEvento)