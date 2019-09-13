// Event Listener de click al buscador
document.querySelector('#submit-buscador').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Buscando...');
});

// Otra forma de escribir el código de arriba 
// document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

// function ejecutarBoton(event) {
//     event.preventDefault();

//     console.log('Desde la funcion ejecutar boton');
// }


document.querySelector('#encabezado').addEventListener('click', function (evt) {
    evt.target.innerText = 'Nuevo encabezado'
    console.log(evt.target.innerText);
})