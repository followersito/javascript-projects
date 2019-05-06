// En JavaScript existe un objeto llamado Date
const diaHoy = new Date();

// Fecha en específico
//let navidad2017 = new Date('12-25-2017');
let valor;

// Obtener el mes
valor = diaHoy.getMonth();
// Dia actual
valor = diaHoy.getDate();
// Representa el día de la semana
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
// Con set se modifica el valor
valor = diaHoy.setFullYear(2020);
valor = diaHoy.getFullYear();

console.log(valor);