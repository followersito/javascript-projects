// Formas de crear variables: 
// var let const

// let usando = "Usando",
//     tecnologia = "JavaScript";

// console.log(`${usando} ${tecnologia}`);

let dato;
dato = Number("20");
dato = Number('25.455');
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number([1,2,3,4,5])

// ParseFloat y ParseInt
dato = parseInt('100');
dato = parseFloat('1512.20300');

// toFixed utiliza solo los decimales enviados en parámetros
dato = 1525.25287754; 
dato = '151258877.6655354745';

console.log(parseFloat(dato).toFixed(5));

