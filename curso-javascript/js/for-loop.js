// Loop for
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el 5`);
        // continue no ejecuta el for en esta linea y salta a la siguiente
        continue;
        // Break termina la ejecución del For
        // break;
    }
    console.log(`Numero: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`Soy ${i} y soy un número PAR`);
        continue;
    } else {
        console.log(`Soy ${i} y soy un número IMPAR`);
        continue;
    }
}

// Recorriendo un arreglo con un ciclo for
const arregloProductos = ['Camisa', 'Boleto', 'Disco'];

for (i = 0; i < arregloProductos.length; i++) {
    console.log(`Tu producto ${arregloProductos[i]} ha sido agregado`);
}