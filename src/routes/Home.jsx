import React from 'react';
import ReactDOM from 'react-dom/client';
import "../assets/tailwind.css"

// Components
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function Home() {
    return (
        <div>
            <Navbar />
            <Header title='Aplicaciones Web Orientadas a Servicios' author={false}>
                <img src='../../public/img/API.jpg' className='shadow-2xl shadow-blue-500/20  w-[20%] rounded-md mb-6' />
            </Header>
            <div className='flex flex-col items-center w-[80%] mx-auto text-white'>

                <h1 className='text-3xl font-extrabold text-slate-300 mb-3'>Introducción</h1>
                <p className='text-slate-300'>En esta plataforma, encontrarás un recorrido por el fascinante mundo de las Aplicaciones Web Orientadas a Servicios, una materia que nos introduce en el diseño, desarrollo y despliegue de aplicaciones web modernas y altamente funcionales.

                    A través de esta página, compartiré mis experiencias y prácticas en la construcción de aplicaciones web que se basan en la arquitectura orientada a servicios, utilizando tecnologías actuales y herramientas vanguardistas. Exploraremos conceptos clave como REST, API, interactividad dinámica y más, todo enfocado en crear aplicaciones web eficientes, escalables y de alto rendimiento.</p>
            </div>

        </div>
    )
}