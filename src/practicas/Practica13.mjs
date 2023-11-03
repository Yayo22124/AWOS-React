// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 12: Funciones Anónimas o Flechas en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg13 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style13 = `background: ${bg13}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto13 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle13 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 13: Sentencias de Control -----");

// ##### IF
console.log("%c1.- Sí (IF)", style13);
let mayorEdad2 = true;

if (mayorEdad2 == true) {
    console.log("Es mayor de Edad");
} 

// ##### IF ELSE
console.log("%c1.- Además (IF - ELSE)", style13);
if (mayorEdad2 == true) {
    console.log("Es mayor de Edad ");
} else {
    console.log("No es mayor de edad");
}

// ##### ELSE - IF
console.log("%c3.- Sí Además (ELSE - IF)", style13);
let Persona = {
    "nombre": "Haziel",
    "edad":18,
    "pais": "MX",
    "mayorEdadObj": true
}

if (Persona.pais == "MX") {
    console.log("mx");
    if (Persona.edad >= 18) {
        console.log("mayor");
        Persona.mayorEdadObj = true;
    } else {
        console.log("menor");
        Persona.mayorEdadObj = false;
    }
} else if(Persona.pais == "US") {
    console.log("us");
    if (Persona.edad >= 21) {
        console.log("mayor");
        Persona.mayorEdadObj = true;
    } else {
        console.log("menor");
        Persona.mayorEdadObj = false;
    }
}

console.log("Los datos del Objeto persona son: ");
console.log(Persona);

// ##### IF con Ternarios
console.log("%c4.- Operadores Ternarios ( ? : )", style13);

console.log("Verificando la mayoria de edad usando el ternario");

mayorEdad2 ? console.log("Es mayor de Edad.") : console.log("No es mayor de edad");


// Ternario If Else
console.log("Verificando la mayoría de edad en base a la nacionalidad y usando ternarios: ");
Persona.pais == "MX" ?
    Persona.edad >= 18 ?
        Persona.mayorEdadObj = true 
    :
        Persona.mayorEdadObj = false
: Persona.pais == "US" ?
    Persona.edad >= 21 ?
        Persona.mayorEdadObj = true
    :
        Persona.mayorEdadObj = false
: console.log("País No Válido");

console.log(`Nacionalidad: ${Persona.pais}, Mayoria Edad: ${Persona.mayorEdadObj}`);