import React, { useState, useEffect } from 'react';
import '../assets/tailwind.css'; // Ajusta la ruta según tu estructura de archivos

export const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); // Cierra la alerta después de 3 segundos (puedes ajustar este tiempo)
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="alert error">
      {message}
      <button onClick={onClose} className="close-button">
        Cerrar
      </button>
    </div>
  );
};
