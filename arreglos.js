// Creacion de un arreglo
const numeros = [10,20,30,40,50];

// Arreglo de strings(método alternativo)
const meses = new Array('Enero','Febrero','Marzo','Abril');
meses[4] = "Mayo";
meses.push('Junio');

// Encontrar un elemento en el arreglo
// console.log(meses.indexOf('Abril'));

// Añade un elemento al inicio
meses.unshift('Mes 0');

// Elimina el ultimo elemento del arreglo
meses.pop();
meses.shift();

// Cuantos mas se quitan del arreglo a partir de la posicion
// dada por el primer elemento
meses.splice(2,1);

// Unir arreglos
let arreglo1=[1,2,3];
let arreglo2=['a','b','c'];
console.log(arreglo1.concat(arreglo2));

arreglo1 = [92,1,42,100,76,2,36];
// Se mejora la funcion de orden al regresar x - y
// para que ordene correctamente.
arreglo1.sort(function(x,y){
    return x - y;
});

// Verifica si es un array:
// console.log(Array.isArray(meses));
console.log(arreglo1);
