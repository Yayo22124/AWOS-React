// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 07: Arreglos en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg3 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style4 = `background: ${bg3}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const style45 = `background: gray; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 07: Arreglos en JavaScript -----");

// Declaración de un Arreglo 
console.log("%#### Tarea Splice ###", style4);
console.log("%c1.- Declaración de un Arreglo", style4);
const meses = ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Perico", "Agosto", "Septiembre", "Octubre", "Noviembre"];

console.log(meses);
console.log(typeof (meses));

// Arreglo Mixto
let arregloMixto = ["String", 10, -58.9, false, Symbol(45), 'a', -19999999999999999999999999999999999999999999999999999999999, true, { prop1: 'valor', prop2: '2' }];
console.log('Arreglo usando console.log: ');
console.log(arregloMixto);
console.log('Arreglo usando console.table: ');
console.table(arregloMixto);
console.log(typeof (arregloMixto));

// Matriz / Arreglos Multidimensionales
let matriz = [
    [1, 2, 3, 4], ['a', 'b', 'c', 'd']
]
console.log(matriz);
console.log(typeof (matriz));

// Recuperar datos de un array
console.log("%c2.- Recuperar valores de los elementos de un arreglo", style4);
console.log(`Accediendo al elemento 8 del arreglo meses: ${meses[8]}, que en realidad es el noveno mes, pero los arreglas comienzan en 0`);
console.log(`Accediendo al elemento en la posicion 12 del arreglo mixto: ${arregloMixto[12]}`);


// Recuperar datos de un array
console.log("%c3.- Funciones de un Arreglo (Array Methods)", style4);

console.log("Para saber el total de elemnetos de un arreglo utilizaremos el método de: LENGTH")
console.log(`El arreglo mes tiene: ${meses.length} elementos`);
console.log(`El arreglo arregloMixto tiene: ${arregloMixto.length} elementos`);


/* Sirve para arreglar al final *//*Para agregar un elemento a la pocion Final */
console.log("Para agregar un elemento al arreglo en la posición final usaremos: PUSH")
meses.push("Gato");
console.table(meses)

/*Para agregar un elemento a la pocion Inicial */
console.log("Para agregar un elemento al arreglo en la posición Inicial: UNSHIFT")
meses.unshift("Perro");
console.table(meses)

/*Para agregar un elemento en una pocision cual sea */
console.log("Para agregar un elemento al arreglo en la posición cual sea usaremos: SPLICE()")
meses[270]="Bere";
meses[400]="Bere2";
console.table(meses)

/*Métodos que codifican el Arreglo Original */
console.log("Para eliminar el elemento en la última posición inicial usaremos el método de : POP")
console.log(`Eliminando el elemento en la última pocosión: ${meses[meses.lengt-1]}`)
meses.pop() /*Eliminar el incorrecto */
meses.push("Diciembre")
console.log(`El arreglo actual es: `)
meses.splice(1000,10,"Octavio")
console.table(meses)

console.log(`Eliminando el elemento en la primera posición: ${meses[0]}`)
meses.shift() /*Eliminar el incorrecto */
meses.unshift("Enero")
console.log(`El arreglo actual es:`)
console.table(meses);

console.log(`Dividir el arreglo original, sacar los primeros 3 elementos`);
/*meses.splice(3); */ /*Si no mando 2 parametros, elimina los restantes a su tamaño. */
meses.splice(7,1);
meses.splice(7,1,"Agosto");
console.table(meses)


console.log("%c4.- Método para manipulación de Arreglos, que no mutan al arreglo original ", style4);//Porcentaje vincular atributo dentro de la cadena que estoy concatenando
let signosZodiacales = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpión", "Sagitario", "Capricornio", "Acuario", "Picis"]
console.log(`El total de signos zodiacales es: ${signosZodiacales.length}`)

console.log("%c5.- Destrucción de los Arreglos ", style4);//Porcentaje vincular atributo dentro de la cadena que estoy concatenando
let [signo0, signo1, signo2, signo3, signo4, signo5, signo6, signo7] = signosZodiacales;
console.log(`El signo zodiacal en la posición [0] es: ${signo0}`)
console.log(`El signo zodiacal en la posición [7] es: ${signo7}`)

let [signo_0, , , , , , , signo_7] = signosZodiacales;
console.log(`El signo zodiacal en la posición [0] es: ${signo_0}`)
console.log(`El signo zodiacal en la posición [7] es: ${signo_7}`)

console.log("%c6.- Métodos de Arreglos que crean un nuevo arreglo, para no modificar el original ", style4);//Porcentaje vincular atributo dentro de la cadena que estoy concatenando

// Destructuración de arreglos
console.log("%c6.- Métodos de Arreglos que crean un nuevo arreglo, para no modificar el original", style4);
// ---- Filter ----
console.log("%c6.1.- Filter", style45);
console.log(`El arreglo original es: `);
console.log(signosZodiacales);
console.log(`Filtrando Datos........`);
let signosFiltrados = signosZodiacales.filter((signosZodiacales) => signosZodiacales.length > 6);
console.log("Filtrado terminado");
console.log("El arreglo resultante es: ");
console.log(signosFiltrados);

// ---- Map ----
console.log("%c6.1.- Map", style45);
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(numero => numero * 2);
console.log("El arreglo original es: ");
console.log(numeros);
console.log("El arreglo del doble de los elementos del original es: ");
console.log(dobles);

// ---- Reduce ----
console.log("%c6.1.- Reduce", style45);
const numeros2 = [1, 30, 25, 12, -5, 17.5]
const sumaTotal = numeros2.reduce((totalParcial, elemento) => totalParcial + elemento)
console.log("El arreglo de número original es: ");
console.log(numeros2);
console.log(`La suma de los elementos es: ${sumaTotal}`);