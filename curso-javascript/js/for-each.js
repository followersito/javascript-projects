const pendientes = ['Tarea', 'PG', 'IS', 'Proyecto JS', 'Proyecto Django'];

pendientes.forEach(function (pendiente, index) {
    console.log(`${index} : ${pendiente}`);
});

// Map para recorrer un arreglo de objetos
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Teclado'},
    {id: 4, producto: 'Mouse'},
]

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})

console.log(nombreProducto);

// Recorriendo un objeto con for (Muy usada)
const automovil = {
    modelo: 'Golf',
    motor: 2.0,
    anio: 2010,
    marca: 'Volkswagen'
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}