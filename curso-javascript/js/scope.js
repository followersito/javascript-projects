// ¡Importante!
// Scope es la visibilidad que tiene un valor
// Scope de variables: 
// var: Disponible en todo el código (Excepto si pertenece a función)
// let y const: Disponibles sólamente entre las llaves en las que se incluyen
var a = 'a';
let b = 'b';
const c = 'c';

// Scope de una función
function funcionScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Funcion: ' + a, b, c);
}
funcionScope();

// Scope de bloque
if (true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('Bloque: ' + a, b, c);
}
// Scope en for
for (var a = 0; a < 10; a++) {
    console.log(a);
}

console.log('Globales: ' + a, b, c);