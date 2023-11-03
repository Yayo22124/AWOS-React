// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 10: Funciones como Expresiones en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg10 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style10 = `background: ${bg10}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto10 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle10 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 10: Funciones como Expresiones -----");

console.log("%c1.- Utilizando Function Expression ", style10);

const sumar = function (a = 0, b = 0) {
    return (a + b);
}

sumar(4, 8);
console.log(`El resultado de la suma de 8 + 4 es: ${sumar(4, 8)}`);

// Estraer vocales: Crear una funcion que dada una palabra extraiga todas las vocales incluso repetidas y las devuelva en una variable
let vocalesExtraidas = [];
console.log("%c Reto tres: Extraer vocales", reto10);
const ExtraerVocales = function (palabra) {

    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            vocalesExtraidas.push(palabra.charAt(i));
        }

    }
    return (vocalesExtraidas)
}
const palabra = 'antonio'
console.log(`Palabra: ${palabra}`);
console.log(`Vocales extraidas: ${ExtraerVocales(palabra)}`);
// ExtraerVocales("antonio")

// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 11: Funciones Anónimas o Flechas en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg11 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style11 = `background: ${bg11}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto11 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle11 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 11: Funciones Anónimas o Flecha -----");

console.log("%c1.- Funciones Flecha ", style11);

const saludoAnonimo = () => console.log("Hola, que tal");
console.log("Saludando desde una funcion flecha.....");
saludoAnonimo;
console.log("He terminado el saludo");

console.log("%c Reto cuatro: Convertir saludaHora", reto10);
const saludoHoraAnonima = (persona, hora = new Date(), saludo)  => {
    // console.log(`La hora actual es: ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
    let horas = hora.getHours(), minutos = hora.getMinutes(), segundos = hora.getSeconds();
    if (horas >= 6 && horas < 12) {
        saludo = "Buenos Días"
    } else if (horas > 12 && horas < 19) {
        saludo = "Buenas Tardes"
    } else {
        saludo = "Buenas Noches"
    }
    return [persona, hora, `${saludo}, ${persona}`]
}
console.table(saludoHoraAnonima("Haziel"))