// src/components/Contador.jsx
import React, { useState, useEffect } from 'react';
import './Contador.css';
import Calendario from './Calendario';
import Objetivos from './Objetivos';
import BloquesDeTrabajo from './BloquesDeTrabajo'; // Importa el nuevo componente
import PersonajeNivel1 from '../assets/personaje-nivel1.png';
import PersonajeNivel2 from '../assets/personaje-nivel2.png';
import PersonajeNivel3 from '../assets/personaje-nivel3.png';

function Contador({ onPointsIncrease }) {
    const [puntos, setPuntos] = useState(0);
    const [vasosAgua, setVasosAgua] = useState(8);
    const [view, setView] = useState("rutina");

    // Solo llamar a onPointsIncrease cuando `puntos` cambie
    useEffect(() => {
        onPointsIncrease(puntos);
    }, [puntos, onPointsIncrease]);

    const sumarPuntos = (puntosHábito) => {
        setPuntos(prevPuntos => prevPuntos + puntosHábito);
    };

    const resetearNivelPersonaje = () => {
        setPuntos(0);
    };

    const disminuirVasosAgua = () => {
        setVasosAgua(prevVasos => (prevVasos > 0 ? prevVasos - 1 : 0));
    };

    const resetearVasosAgua = () => {
        setVasosAgua(8);
    };

    const obtenerPersonajeActual = () => {
        if (puntos >= 70) return PersonajeNivel3;
        if (puntos >= 30) return PersonajeNivel2;
        return PersonajeNivel1;
    };

    return (
        <div className="app-container">
            <h1 className="app-title">RPG de Vida</h1>
            <div className="main-container">
                <div className="left-column">
                    <div className="header-buttons">
                        <button className="nav-button" onClick={() => setView("rutina")}>Rutina</button>
                        <button className="nav-button" onClick={() => setView("objetivos")}>Objetivos</button>
                        <button className="nav-button" onClick={() => setView("calendario")}>Calendario</button>
                        <button className="nav-button" onClick={() => setView("bloques")}>Bloques de Trabajo</button>
                    </div>

                    {view === "rutina" && (
                        <>
                            <div className="section">
                                <h2>Rutina de la Mañana</h2>
                                <div className="activity">
                                    <span>Despertarse a la hora indicada</span>
                                    <button className="add-button" onClick={() => sumarPuntos(10)}>+10 Puntos</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-10)}>-10 Puntos</button>
                                </div>
                                <div className="activity">
                                    <span>Ir a correr</span>
                                    <button className="add-button" onClick={() => sumarPuntos(10)}>+10 Puntos</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-5)}>-5 Puntos</button>
                                </div>
                                <div className="activity">
                                    <span>Bañarse con agua fría</span>
                                    <button className="add-button" onClick={() => sumarPuntos(5)}>+5 Puntos</button>
                                </div>
                            </div>

                            <div className="section">
                                <h2>Bloques de Trabajo (Mañana)</h2>
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        <div className="activity">
                                            <span>Bloque {i + 1}</span>
                                            <button className="add-button" onClick={() => sumarPuntos(5)}>+5 Puntos</button>
                                            <button className="subtract-button" onClick={() => sumarPuntos(-5)}>-5 Puntos</button>
                                        </div>
                                        <div className="activity">
                                            <span>Ejercicio</span>
                                            <button className="add-button" onClick={() => sumarPuntos(5)}>+5 Puntos</button>
                                            <button className="subtract-button" onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="section">
                                <h2>Trabajo Media Tarde</h2>
                                <div className="activity">
                                    <span>Bloque 5</span>
                                    <button className="add-button" onClick={() => sumarPuntos(5)}>+5 Puntos</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                                </div>
                                <div className="activity">
                                    <span>Ejercicio</span>
                                    <button className="add-button" onClick={() => sumarPuntos(5)}>+5 Puntos</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                                </div>
                            </div>

                            <div className="section">
                                <h2>Dieta y Alimentación</h2>
                                <div className="activity">
                                    <span>Almuerzo</span>
                                    <button className="add-button" onClick={() => sumarPuntos(1)}>+1 Punto</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                                </div>
                                <div className="activity">
                                    <span>Cena</span>
                                    <button className="add-button" onClick={() => sumarPuntos(1)}>+1 Punto</button>
                                    <button className="subtract-button" onClick={() => sumarPuntos(-1)}>-1 Punto</button>
                                </div>
                            </div>
                        </>
                    )}

                    {view === "objetivos" && (
                        <Objetivos /> // Asegúrate de que el componente Objetivos esté correctamente importado
                    )}

                    {view === "calendario" && (
                        <Calendario /> // Muestra el componente solo en la pestaña de calendario
                    )}
                     {view === "bloques" && <BloquesDeTrabajo />}
                </div>

                <div className="right-column">
                    <img src={obtenerPersonajeActual()} alt="Personaje" className="personaje-image" />
                    <div className="counter">Nivel: {puntos}</div>
                    <button className="reset-nivel-button" onClick={resetearNivelPersonaje}>
                        Reiniciar Nivel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contador;
