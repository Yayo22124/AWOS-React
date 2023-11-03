import React from 'react'
import "../assets/tailwind.css"

export const PracticasContent = () => {
    return (
        <div className=' w-[95%] md:w-[90%] h-[60vh] flex flex-col items-center justify-center bg-white/10 text-slate-400 font-medium rounded-xl'>
            <h1 className='font-extrabold text-5xl mb-8 text-white text-center md:max-w-[95%] md:text-4xl'>Resultados de la Práctica</h1>

            <p className='text-center md:max-w-[60%] max-w-[90%]'>Presiona las teclas <span className='key'>ctrl</span> + <span className='key'>shift</span> + <span className='key'>C</span> para abrir la <strong className='font-extrabold'>consola</strong> del navegador y poder ver el resultado de mis prácticas realizadas.</p>

        </div>
    )
}
