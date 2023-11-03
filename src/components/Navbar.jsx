import React, { useState } from 'react';
import '../assets/tailwind.css';
import { Link } from 'react-router-dom';
import { TerminalIcon, GiHubIcon, MailIcon, DownArrowIcon } from './Icons';

export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const dropdownStyles = {
        position: 'absolute',
        top: '100%',
        left: 0,
        display: isDropdownOpen ? 'block' : 'none',
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen(!isDropdownOpen2);
    };

    const dropdownStyles2 = {
        position: 'absolute',
        top: '100%',
        left: 0,
        display: isDropdownOpen2 ? 'block' : 'none',
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
                    <span onClick={toggleDropdown}>Repaso JavaScript</span>
                    <DownArrowIcon color={"white"} />
                    <ul className="dropdown-menu" style={dropdownStyles}>
                        <li><Link to="/practicas/practica3">Practica3</Link></li>
                        <li><Link to="/practicas/practica4">Practica4</Link></li>
                        <li><Link to="/practicas/practica5&6">Practica5 y 6</Link></li>
                    </ul>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen2(true)}
                    onMouseLeave={() => setIsDropdownOpen2(false)}
                >
                    <span onClick={toggleDropdown2}>Proyectos</span>
                    <DownArrowIcon color={"white"} />
                    <ul className="dropdown-menu" style={dropdownStyles2}>
                        <li><Link to="/calificaciones">Calificaciones</Link></li>
                        <li><Link to="/repaso-dom">Repaso DOM</Link></li>
                    </ul>
                </li>
            </ul>

            <div className='nv-contact'>
                <a href="https://github.com/Yayo22124">
                    <GiHubIcon className="shadow"/>
                </a>
                <a href="mailto:220087@utxicotepec.edu.mx">
                    <MailIcon/>
                </a>
            </div>
        </nav>
    );
};
