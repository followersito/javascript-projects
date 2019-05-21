// Function declaration

// function saludar(nombre){
//     console.log(`Hola ${nombre}`);
// }
// saludar('Carlos');

// function sumar(a,b) {
//     console.log(a+b);
// }

// a = prompt('Ingrese número 1: ');
// b = prompt('Ingrese número 2: ')

// sumar(Number(a),Number(b));


// Funciones que retornan un valor
// function sumar(a,b){
//     return a+b;
// }

// let suma;

// suma = sumar(1,2);
// console.log(suma);

// function saludar(nombre = 'Anónimo'){
//     return `Hola ${nombre}`;
// }

// let saludo;
// saludo = saludar('Iván');
// console.log(saludo);

// Function expression

const suma = function(a,b){
    return a + b;
}

console.log(suma(1,2));
console.log(suma(5,78));

const saludar = function(nombre = 'Anónimo'){
    return `Hola ${nombre}`;
}
console.log(saludar());


