// src/components/Objetivos.jsx
import React from 'react';
import FechasImportantes from './FechasImportantes';
import './Objetivos.css';

function Objetivos() {
    return (
        <div className="objetivos-container">
            <h2 className="objetivos-title">Objetivos</h2>
            {/* Aquí puedes agregar otros objetivos o secciones si es necesario */}
            <FechasImportantes />
        </div>
    );
}

export default Objetivos;
