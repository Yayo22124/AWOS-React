import React from 'react';
import ReactDOM from 'react-dom/client';
import "../assets/tailwind.css"

// Components
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";


export function Home() {
    return (
        <div>
            <Navbar/>
            <Header 
                title='Aplicaciones Web Orientadas a Servicios'
                author={false}
            />
            <h1>Home</h1>
        </div>
    )
}