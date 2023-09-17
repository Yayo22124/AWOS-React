import React from 'react';
import "../assets/tailwind.css";

export function Header({ title = "Fundamentos de JavaScript", author = true }) {
    return (
        <header className="hd-container">
            <h1>{ title }</h1>
            {/* Condicion para Renderizar el Parrafo {condition && < Element />} */}
            {author && <p className='text-slate-300'>Elaborado por: <strong>Eli Haziel Ortiz Ramirez</strong></p>}
        </header>
    )
}
