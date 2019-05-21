// IIFE - Funciones que se declaran y se invocan inmediatamente
(function(tecnologia){
    console.log(`Creando un IIFE con ${tecnologia}`);
})('JavaScript');

// Métodos de propiedad
// Cuando una funcion se pone dentro de un objeto
const musica = {
    cancion: 'No song',
    reproducir: function(cancion){
        console.log(`Reproduciendo la canción ${this.cancion}`);
    },
    pausar: function(cancion){
        console.log(`Pausando la canción ${this.cancion}`);
    },
}

// Los métodos pueden guardarse / crearse fuera del objeto
musica.borrar = function(cancion){
    console.log(`Borrando la canción ${cancion}`);
}

musica.cancion = prompt("Escriba la canción que desee reproducir:");
musica.reproducir(musica.cancion);