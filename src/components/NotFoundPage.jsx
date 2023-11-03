import React from 'react';

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-600/40">
            <div className='bg-gray-200/30 p-6 rounded-xl flex flex-col items-center justify-center text-gray-900'>
                <h1 className="text-6xl font-bold mb-4">Error 404</h1>
                <p className="text-2xl font-medium">Página no encontrada</p>
            </div>
        </div>
    );
};

