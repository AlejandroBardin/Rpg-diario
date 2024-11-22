// src/components/ContadorAgua.jsx
import React from 'react';

function ContadorAgua({ vasosAgua, disminuirVasosAgua, resetearVasosAgua }) {
    return (
        <div className="section">
            <h2 className="section-title">Contador de Vasos de Agua</h2>
            <div className="agua-container">
                <span className="agua-contador">Vasos restantes: {vasosAgua}</span>
                <button className="habito-button" style={{ backgroundColor: '#2196F3' }} onClick={disminuirVasosAgua}>
                    Beber un vaso
                </button>
                <button className="habito-button" style={{ backgroundColor: '#FF9800', marginLeft: '10px' }} onClick={resetearVasosAgua}>
                    Reiniciar contador
                </button>
            </div>
        </div>
    );
}

export default ContadorAgua;
