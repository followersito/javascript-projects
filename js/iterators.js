const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

// Entries iterador
// Entries a las ciudades
// for (let ciudad of ciudades.entries()) {
//     console.log(ciudad);
// }
// Iterador Values
for (let ciudad of ciudades.values()) {
    console.log(ciudad);
}
for (let ciudad of ciudades.keys()) {
    console.log(ciudad);
}

// Entries para set
// for (let orden of ordenes.entries()) {
//     console.log(orden);
// }
// Values de orden
for (let orden of ordenes.values()) {
    console.log(orden);
}
for (let orden of ordenes.keys()) {
    console.log(orden);
}


// Entries para map
// for (let attr of datos.entries()){
//     console.log(attr);
// }
// Values de map "datos"
for (let attr of datos.values()){
    console.log(attr);
}
for (let attr of datos.keys()){
    console.log(attr);
}
