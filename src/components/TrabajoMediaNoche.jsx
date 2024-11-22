// src/components/TrabajoMediaNoche.jsx
import React from 'react';

function TrabajoMediaNoche({ sumarPuntos }) {
    return (
        <div className="section">
            <h2 className="section-title">Trabajo Media Noche</h2>
            <div className="habito">
                <span className="habito-nombre">Bloque 5</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Ejercicio</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Bloque 6</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Ejercicio</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
            </div>
        </div>
    );
}

export default TrabajoMediaNoche;
