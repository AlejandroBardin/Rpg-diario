// src/components/Contador.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Contador.css";
import Calendario from "../Calendario/Calendario";
import Objetivos from "../Objetivos/Objetivos";
import BloquesDeTrabajo from "../BloquesDeTrabajo/BloquesDeTrabajo";
import Proyectos from "../Proyectos/Proyectos";
import PersonajeNivel1 from "../../assets/personaje-nivel1.png";
import PersonajeNivel2 from "../../assets/personaje-nivel2.png";
import PersonajeNivel3 from "../../assets/personaje-nivel3.png";
import lvlSound from "../../assets/lvl.mp3";

function Contador({ onPointsIncrease }) {
  const [puntos, setPuntos] = useState(0);
  const [vasosAgua, setVasosAgua] = useState(8);
  const [view, setView] = useState("rutina");
  const audioRef = useRef(new Audio(lvlSound)); // Referencia al audio
  const [nivelAnterior, setNivelAnterior] = useState(1); // Nivel previo del personaje

  useEffect(() => {  audioRef.current.volume = 0.1;
    onPointsIncrease(puntos);

    // Detectar el cambio de nivel directamente después de actualizar puntos
    const nuevoNivel = calcularNivel(puntos);
    if (nuevoNivel > nivelAnterior) {
      reproducirSonido();
      setNivelAnterior(nuevoNivel);
    }
  }, [puntos]);

  const calcularNivel = (puntos) => {
    if (puntos >= 70) return 3;
    if (puntos >= 30) return 2;
    return 1;
  };

  const sumarPuntos = (puntosHábito) => {
    setPuntos((prevPuntos) => prevPuntos + puntosHábito);
  };

  const resetearNivelPersonaje = () => {
    setPuntos(0);
    setNivelAnterior(1); // Reinicia el nivel previo
  };

  const disminuirVasosAgua = () => {
    setVasosAgua((prevVasos) => (prevVasos > 0 ? prevVasos - 1 : 0));
  };

  const resetearVasosAgua = () => {
    setVasosAgua(8);
  };

  const obtenerPersonajeActual = () => {
    if (puntos >= 70) return PersonajeNivel3;
    if (puntos >= 30) return PersonajeNivel2;
    return PersonajeNivel1;
  };

  const reproducirSonido = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reinicia el audio
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el sonido:", error);
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">RPG de Vida</h1>
      <div className="main-container">
        <div className="left-column">
          <div className="header-buttons">
            <button className="nav-button" onClick={() => setView("rutina")}>
              Rutina
            </button>
            <button className="nav-button" onClick={() => setView("objetivos")}>
              Objetivos
            </button>
            <button
              className="nav-button"
              onClick={() => setView("calendario")}
            >
              Calendario
            </button>
            <button className="nav-button" onClick={() => setView("bloques")}>
              Bloques de Trabajo
            </button>
            <button className="nav-button" onClick={() => setView("proyectos")}>
              Proyectos
            </button>
          </div>

          {view === "rutina" && (
            <>
              <div className="section">
                <h2>Rutina de la Mañana</h2>
                <div className="activity">
                  <span>Despertarse a la hora indicada</span>
                  <button
                    className="add-button"
                    onClick={() => sumarPuntos(10)}
                  >
                    +10 Puntos
                  </button>
                  <button
                    className="subtract-button"
                    onClick={() => sumarPuntos(-10)}
                  >
                    -10 Puntos
                  </button>
                </div>
                <div className="activity">
                  <span>Ir a correr</span>
                  <button
                    className="add-button"
                    onClick={() => sumarPuntos(10)}
                  >
                    +10 Puntos
                  </button>
                  <button
                    className="subtract-button"
                    onClick={() => sumarPuntos(-5)}
                  >
                    -5 Puntos
                  </button>
                </div>
                <div className="activity">
                  <span>Bañarse con agua fría</span>
                  <button
                    className="add-button"
                    onClick={() => sumarPuntos(5)}
                  >
                    +5 Puntos
                  </button>
                </div>
              </div>
            </>
          )}

          {view === "objetivos" && <Objetivos />}
          {view === "proyectos" && <Proyectos />}
          {view === "calendario" && <Calendario />}
          {view === "bloques" && <BloquesDeTrabajo />}
        </div>

        <div className="right-column">
          <img
            src={obtenerPersonajeActual()}
            alt="Personaje"
            className="personaje-image"
          />
          <div className="counter">Nivel: {puntos}</div>
          <button
            className="reset-nivel-button"
            onClick={resetearNivelPersonaje}
          >
            Reiniciar Nivel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contador;
