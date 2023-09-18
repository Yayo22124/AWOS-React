import React, { useState } from 'react';
import '../assets/tailwind.css';
import { Link } from 'react-router-dom';
import { TerminalIcon, GiHubIcon, MailIcon, DownArrowIcon } from './Icons';

export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const dropdownStyles = {
        position: 'absolute',
        top: '100%',
        left: 0,
        display: isDropdownOpen ? 'block' : 'none',
    };

    return (
        <nav className='nv-container'>
            <Link to="/proyectos" className='nv-logo'>
                <TerminalIcon color="white" />
                <span>Yayo22124</span>
            </Link>

            <ul className='nv-menu'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <span onClick={toggleDropdown}>Prácticas</span>
                    <DownArrowIcon color={"white"} />
                    <ul className="dropdown-menu" style={dropdownStyles}>
                        <li><Link to="/proyectos/opcion1">Repaso</Link></li>
                        <li><Link to="/proyectos/opcion2">Calificaciones</Link></li>
                        {/* Agrega más opciones si es necesario */}
                    </ul>
                </li>
            </ul>

            <div className='nv-contact'>
                <a href="https://github.com/Yayo22124">
                    <GiHubIcon />
                </a>
                <a href="mailto:220087@utxicotepec.edu.mx">
                    <MailIcon />
                </a>
            </div>
        </nav>
    );
};
