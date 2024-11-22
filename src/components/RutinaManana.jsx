// src/components/RutinaManana.jsx
import React from 'react';

function RutinaManana({ sumarPuntos }) {
    return (
        <div className="section">
            <h2 className="section-title">Rutina de la Mañana</h2>
            <div className="habito">
                <span className="habito-nombre">Despertarse a la hora indicada</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-2)}>-2 Puntos</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Ir a correr</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-2)}>-2 Puntos</button>
            </div>
            <div className="habito">
                <span className="habito-nombre">Bañarse con agua fría</span>
                <button className="habito-button" style={{ backgroundColor: '#4CAF50', marginLeft: 'auto' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
            </div>

            <h2 className="section-subtitle">Bloques de Trabajo</h2>
            {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                    <div className="habito">
                        <span className="habito-nombre">Bloque {i + 1}</span>
                        <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                        <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                    </div>
                    <div className="habito">
                        <span className="habito-nombre">Ejercicio</span>
                        <button className="habito-button" style={{ backgroundColor: '#4CAF50' }} onClick={() => sumarPuntos(1)}>+1 Punto</button>
                        <button className="habito-button" style={{ backgroundColor: '#f44336' }} onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default RutinaManana;
