// src/components/FechasImportantes.jsx
import React, { useState, useEffect } from 'react';
import './FechasImportantes.css';

function FechasImportantes() {
    const [fechas, setFechas] = useState(() => {
        const fechasGuardadas = localStorage.getItem("fechasImportantes");
        return fechasGuardadas ? JSON.parse(fechasGuardadas) : [];
    });
    const [nuevaFecha, setNuevaFecha] = useState("");
    const [nuevoDescripcion, setNuevoDescripcion] = useState("");
    const [editandoId, setEditandoId] = useState(null);

    // Guardar fechas en localStorage cuando cambie la lista
    useEffect(() => {
        localStorage.setItem("fechasImportantes", JSON.stringify(fechas));
    }, [fechas]);

    const agregarFecha = () => {
        if (nuevaFecha.trim() && nuevoDescripcion.trim()) {
            const nuevaEntrada = {
                id: Date.now(),
                fecha: nuevaFecha,
                descripcion: nuevoDescripcion
            };
            setFechas([...fechas, nuevaEntrada]);
            setNuevaFecha("");
            setNuevoDescripcion("");
        }
    };

    const eliminarFecha = (id) => {
        setFechas(fechas.filter((fecha) => fecha.id !== id));
    };

    const iniciarEdicion = (id) => {
        const fecha = fechas.find((f) => f.id === id);
        setEditandoId(id);
        setNuevaFecha(fecha.fecha);
        setNuevoDescripcion(fecha.descripcion);
    };

    const guardarEdicion = () => {
        setFechas(
            fechas.map((fecha) =>
                fecha.id === editandoId
                    ? { ...fecha, fecha: nuevaFecha, descripcion: nuevoDescripcion }
                    : fecha
            )
        );
        setEditandoId(null);
        setNuevaFecha("");
        setNuevoDescripcion("");
    };

    return (
        <div className="fechas-importantes-container">
            <h3>Fechas importantes</h3>
            <div className="fechas-form">
                <input
                    type="date"
                    value={nuevaFecha}
                    onChange={(e) => setNuevaFecha(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={nuevoDescripcion}
                    onChange={(e) => setNuevoDescripcion(e.target.value)}
                />
                {editandoId ? (
                    <button onClick={guardarEdicion} className="save-button">Guardar</button>
                ) : (
                    <button onClick={agregarFecha} className="add-button">Agregar</button>
                )}
            </div>
            <ul className="fechas-list">
                {fechas.map((fecha) => (
                    <li key={fecha.id} className="fecha-item">
                        <div>
                            <span className="fecha-texto">{fecha.fecha}</span>
                            <p className="descripcion-texto">{fecha.descripcion}</p>
                        </div>
                        <div className="fecha-buttons">
                            <button onClick={() => iniciarEdicion(fecha.id)} className="edit-button">Editar</button>
                            <button onClick={() => eliminarFecha(fecha.id)} className="delete-button">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FechasImportantes;
