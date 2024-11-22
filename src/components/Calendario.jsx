// src/components/Calendario.jsx
import React, { useState } from 'react';
import './Calendario.css';

function Calendario() {
    // Estado para almacenar los días completados
    const [diasCompletados, setDiasCompletados] = useState({});

    // Maneja el click en un día para alternar su estado de completado
    const toggleDiaCompletado = (dia) => {
        setDiasCompletados((prevState) => ({
            ...prevState,
            [dia]: !prevState[dia],
        }));
    };

    // Renderiza el calendario con días que cambian de color si están completados
    const renderDias = () => {
        const dias = [];
        for (let i = 1; i <= 30; i++) { // Ejemplo de 30 días para un mes
            const isCompletado = diasCompletados[i];
            dias.push(
                <div
                    key={i}
                    className={`calendario-dia ${isCompletado ? 'completado' : ''}`}
                    onClick={() => toggleDiaCompletado(i)}
                >
                    {i}
                </div>
            );
        }
        return dias;
    };

    return (
        <div className="calendario-container">
            <h3 className="calendario-titulo">Noviembre 2024</h3>
            <div className="calendario-grid">
                {renderDias()}
            </div>
        </div>
    );
}

export default Calendario;
