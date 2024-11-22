// src/components/DietaAlimentacion.jsx
import React from 'react';

function DietaAlimentacion({ sumarPuntos }) {
    return (
        <div className="section">
            <h2 className="section-title">Dieta y Alimentación</h2>
            <div className="habito">
                <span className="habito-nombre">Almuerzo</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Cena</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Tomar gaseosa</span>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-10)}>-10 Puntos</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Comer harinas</span>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-2)}>-2 Puntos</button>
            </div>
        </div>
    );
}

export default DietaAlimentacion;
