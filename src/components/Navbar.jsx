import React from 'react';
import "../assets/tailwind.css"
import { Link } from 'react-router-dom';
import { TerminalIcon, GiHubIcon, MailIcon} from "./Icons";

export function Navbar() {
    return (
        <nav className='nv-container'>
            <Link to="/proyectos" className='nv-logo'>
                <TerminalIcon 
                    color={"white"}
                />
                <span>Yayo22124</span>
            </Link>

            <ul className='nv-menu'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/proyectos">Proyectos</Link>
                </li>
            </ul>

            <div className='nv-contact'>
                <a href="https://github.com/Yayo22124">
                    <GiHubIcon/>
                </a>
                <a href="mailto:220087@utxicotepec.edu.mx">
                    <MailIcon/>
                </a>
            </div>
        </nav>

    )
}