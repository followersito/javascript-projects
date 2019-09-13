const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('blur', obtenerEvento);
// busqueda.addEventListener('copy', obtenerEvento);
// busqueda.addEventListener('cut', obtenerEvento);
// busqueda.addEventListener('paste', obtenerEvento);
busqueda.addEventListener('input', obtenerEvento);

function obtenerEvento(e) {
    // document.querySelector('#encabezado').innerText = busqueda.value;
    // console.log(busqueda.value);
    console.log(`EVENTO: ${e.type}`);
}