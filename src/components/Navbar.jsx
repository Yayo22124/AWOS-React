import React from 'react';
import "../assets/tailwind.css"
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className='nv-container'>
            <Link to="/proyectos" className='nv-logo'>
                <img  src='../../public/terminal.svg'/>
                <span>Yayo22124</span>
            </Link>

            <div className='nv-contact'>
                <a href="https://github.com/Yayo22124">
                    <img src="../../public/github.svg" alt="github"/>
                </a>
                <a href="mailto:220087@utxicotepec.edu.mx">
                    <img src="../../public/mail.svg" alt="mail"/>
                </a>
            </div>
            <ul className='nv-'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/proyectos">Proyectos</Link>
                </li>
            </ul>
        </nav>

    )
}