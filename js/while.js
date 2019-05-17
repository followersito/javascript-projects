// Ciclo while / do while
// let i = 0;

// while (i < 10) {
//     console.log(`Número: ${i}`);
//     i++;
// }

const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];
let i = 0;

while (i < musica.length) {
    console.log(`Reproduciendo: ${musica[i]}`);
    i++;
}

// Do while recorre el código al menos una vez 

let j = 0;

do {
    console.log(`Número: ${j}`);
    j++;
} while (j < 10);