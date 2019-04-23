const producto1 = 'PC',
      precio1 = 3000,
      producto2 = 'Keyboard',
      precio2 = 400;

let html;

// Forma antigua, ya no se utiliza.
// html = '<ul>' + 
//        '<li>Orden: ' + producto1 + '</li>' + 
//        '<li>Precio: ' + precio1 + '</li>' + 
//        '<li>Orden: ' + producto2 + '</li>' + 
//        '<li>Precio: ' + precio2 + '</li>' +
//        '<li>Total: ' + (precio1 + precio2) + '</li>' +
//        '</ul>';

html = `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1} </li>
            <li>Orden: ${producto2} </li>
            <li>Precio: ${precio2} </li>
            <li>Total: ${total(precio1, precio2)} </li>
        </ul>
`;

function total(precio1, precio2){
    return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;
