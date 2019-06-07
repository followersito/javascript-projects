// Reemplazaremos Cursos en linea
const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado-nuevo';
// Agregando nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// Elemento anterior será reemplazado
const anterior = document.querySelector('#encabezado');
const elemPadre = document.querySelector('#lista-cursos');
elemPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);