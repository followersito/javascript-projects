// Obtenemos todos los elementos por clase (HTML)
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

// Dos formas para remover elementos
// enlaces[0].remove();
// navegacion.removeChild(enlaces[0]);

const primerLi = document.querySelector('.enlace');
let elemento;

// Para obtener una clase de CSS de un elemento:
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList;

// Leer atributos de un elemento:
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');

elemento = primerLi;
console.log(elemento);
