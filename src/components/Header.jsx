import React from 'react';
import ReactDOM from 'react-dom/client';
import "../assets/tailwind.css";

export function Header() {
    return (
        <header className="hd-container">
            <h1>Fundamentos de JavaScript</h1>
            <p>Elaborado por: <strong>Eli Haziel Ortiz Ramirez</strong></p>
        </header>
    )
}