const persona = {
    nombre: 'Ivan',
    apellido: 'Melchor',
    profesion: 'Dev',
    email: 'ivanm@gmail.com',
    edad: 22,
    direccion: {
        ciudad: 'Guatemala',
        pais: 'Guatemala'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

// El punto sirve para acceder a los valores de un objeto
console.log(persona.nacimiento());