import React from 'react'
import { Navbar } from "../components/Navbar";
import "../assets/tailwind.css"
import { Header } from '../components/Header';

// Arreglo Alumnos
let alumnos = [
  "Eli Haziel Ortiz Ramírez",
  "Ariadne Alvarado Peralta",
  "Irving Estrada",
  "Jeús Antonio Estrada Jímenez",
  "Mariano Fajardo Islas",
  "Alejandro Gónzalez Ramero",
  "Ángel Zacek Gutierrez",
  "Octavio López Martinez",
  "Jaime Vazquez Santiago",
  "Jóse Alejandro Briones Arroyo"
];

let materias = [
  "Formación Sociocultural IV",
  "Principios de IoT",
  "Apps. Orientadas a Servicios",
  "Estructura de Datos",
  "Inglés IV",
  "Cálculo Integral",
  "Probabilidad y Est.",
  "Ev. y Mejora del Software",
  "Est.y Métricas para el Desarrollo del Software",
  "Tutoria"
];

// Arreglo de arreglos para relacionar alumnos con materias (índices)
const calificaciones = [
  [8, 7, 6, 9, 7, 8, 9, 8, 7, 6],  // Calificaciones del Alumno1 para cada materia
  [7, 8, 9, 6, 7, 8, 6, 7, 8, 9],  // Calificaciones del Alumno2 para cada materia
  // ... otros alumnos y sus calificaciones
];

// Ejemplo de acceso a una calificación específica
const calificacion = calificaciones[0][1];  // Calificación del Alumno3 en la materia de índice 1 (Ciencias)

console.log(`La calificación del alumno 2 es: ${calificacion}`);

let indice_alumno = 0;

function PromedioAcumulado(calificacion) {
}

const CalificacionesDisponibles = calificacion.length;
console.log(CalificacionesDisponibles);

// function PromedioAcumulado(calificacionesAlumno) {
//   const totalCalificaciones = calificacionesAlumno.length;
//   const sumaCalificaciones = calificacionesAlumno.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
//   return totalCalificaciones === 0 ? 0 : sumaCalificaciones / totalCalificaciones;
// }

// const promediosAlumnos = calificaciones.map(calcularPromedio);

// console.log('Promedios de los alumnos:');
// nombresAlumnos.forEach((alumno, index) => {
//   console.log(`${alumno}: ${promediosAlumnos[index]}`);
// });


export function Calificaciones() {

  let calificaciones = [[...alumnos], [...materias]];


  console.log(calificaciones[1][2]);
  

  return (

    <div>
      <Navbar className="bg-stone-50" />
      <Header title='Sistema de Calificaciones' author={true}></Header>

    </div>
  )
}

