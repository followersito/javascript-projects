// Try catch
// Se ejecuta una funcion que no existe y no afecta el funcionamiento del programa
try {
    algo();
} catch (error) {
    console.log(error);
}   finally {
    console.log('No importa, ejecuta de todos modos');
}

obtenerClientes();

function obtenerClientes(){
    console.log('Descargando...');
    
    setTimeout(function(){
        console.log('Completo')
    }, 3000);
}