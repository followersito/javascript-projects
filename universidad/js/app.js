let elemento;

elemento = document.head;
elemento = document.body;
elemento = document.characterSet;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[2];
elemento = document.images[4].getAttribute('src');
elemento = document.scripts[0];

let imagenes = document.images;

let imagenesArr = Array.from(imagenes);
imagenesArr.forEach(function (imagenes) {
    console.log(imagenes);
});

console.log(imagenesArr);

// // Eliminar de Local Storage
// localStorage.clear();