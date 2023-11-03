// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 12: Funciones Anónimas o Flechas en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg12 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style12 = `background: ${bg12}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto12 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle12 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 12: Otros métodos útiles para arreglos -----");

console.log("%c1.- SOME (Algunos)", style12);
console.log("El método SOME busca dentro de un arreglo si uno de sus elementos cumple con la condición definida y retorna un valor booleano");
let Tecnologias = ["HTML", "JavaScript", "Python", "MySQL", "Angular", "Flutter", "React", "Django", "Flask", "Jira", "Git", "Swagger","HTML",12];
let Numeros = [50,17,-5,2.8, -3.1416,6,6,316.2005,-5442,9999,8];

console.log("Buscando sí existen números mayores de 0 dentro del arreglo Numeros");
let resultados = numeros.some((numero2) => numero2 > 0);
console.log(resultados);

console.log("%c2.- FIND - Encontrar", style12);
console.log("FIND devuelve el primer elemento que coincida con la condición");
console.log("Buscando en el arreglo Números uno mayor de 0");
resultados = Numeros.find((numero2) => numero2 > 0)
console.log(resultados);
console.log("Buscando en el arreglo Números uno mayor de 10000");
resultados = Numeros.find((numero2) => numero2 > 10000)
console.log(resultados);

console.log("%c2.- EVERY - Todos", style12);
console.log("EVERY retorna un booleano respecto a si todos los elementos cumplen una condición.");

resultados = Tecnologias.every((elemento) => typeof elemento == 'string');
console.log(resultados);