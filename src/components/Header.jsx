import React from 'react';
import "../assets/tailwind.css";

export const Header = (props) => {
    // Props
    const title = props.title || "Fundamentos de JavaScript";
    const author = !props.author || true;

    return (
        <header className="hd-container mb-6">
            <h1 className='mb-4 max-w-[70%] text-center leading-8'>{ props.title }</h1>
            {/* Condicion para Renderizar el Parrafo {condition && < Element />} */}
            {props.author && <p className='text-slate-300'>Elaborado por: <strong>Eli Haziel Ortiz Ramirez</strong></p>}
            {props.children}
        </header>
    )
}
