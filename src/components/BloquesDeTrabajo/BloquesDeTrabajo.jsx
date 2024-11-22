import React, { useState, useEffect } from 'react';
import './BloquesDeTrabajo.css';

function BloquesDeTrabajo() {
    const [bloques, setBloques] = useState(() => {
        const bloquesGuardados = localStorage.getItem('bloquesDeTrabajo');
        return bloquesGuardados
            ? JSON.parse(bloquesGuardados)
            : Array(8).fill({ titulo: "", descripcion: "", estado: "original" });
    });

    const [modalData, setModalData] = useState(null);
    const [isAdding, setIsAdding] = useState(false); // Nueva variable para determinar si se está agregando

    // Guardar los bloques en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem('bloquesDeTrabajo', JSON.stringify(bloques));
    }, [bloques]);

    const abrirModal = (index) => {
        setModalData({ ...bloques[index], index });
        setIsAdding(false); // No está agregando
    };

    const cerrarModal = () => {
        setModalData(null);
        setIsAdding(false);
    };

    const guardarDatos = () => {
        if (isAdding) {
            // Agregar nueva card
            setBloques((prev) => [
                ...prev,
                { titulo: modalData.titulo, descripcion: modalData.descripcion, estado: modalData.estado || "original" },
            ]);
        } else {
            // Editar card existente
            setBloques((prev) =>
                prev.map((bloque, i) =>
                    i === modalData.index
                        ? { titulo: modalData.titulo, descripcion: modalData.descripcion, estado: modalData.estado }
                        : bloque
                )
            );
        }
        cerrarModal();
    };

    const agregarNuevaCard = () => {
        setModalData({ titulo: "", descripcion: "", estado: "original" });
        setIsAdding(true); // Cambiar a estado de agregando
    };

    const actualizarEstado = (estado) => {
        setModalData((prev) => ({ ...prev, estado }));
    };

    return (
        <div className="bloques-container">
            <h2>Bloques de Trabajo</h2>
            <div className="bloques-grid">
                {bloques.map((bloque, index) => (
                    <div
                        key={index}
                        className={`bloque ${bloque.estado}`}
                        onClick={() => abrirModal(index)}
                    >
                        <h3>{bloque.titulo || `Bloque ${index + 1}`}</h3>
                        <p>{bloque.descripcion || "Sin descripción"}</p>
                    </div>
                ))}
                <div className="bloque agregar-card" onClick={agregarNuevaCard}>
                    <span>+</span>
                </div>
            </div>

            {modalData && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{isAdding ? "Agregar Bloque" : "Editar Bloque"}</h3>
                        <input
                            type="text"
                            placeholder="Título"
                            value={modalData.titulo}
                            onChange={(e) =>
                                setModalData((prev) => ({ ...prev, titulo: e.target.value }))
                            }
                        />
                        <textarea
                            placeholder="Descripción"
                            value={modalData.descripcion}
                            onChange={(e) =>
                                setModalData((prev) => ({ ...prev, descripcion: e.target.value }))
                            }
                        />
                        {!isAdding && (
                            <div className="estado-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="estado"
                                        checked={modalData.estado === "completado"}
                                        onChange={() => actualizarEstado("completado")}
                                    />
                                    Cumplido
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="estado"
                                        checked={modalData.estado === "en-curso"}
                                        onChange={() => actualizarEstado("en-curso")}
                                    />
                                    En Curso
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="estado"
                                        checked={modalData.estado === "fallido"}
                                        onChange={() => actualizarEstado("fallido")}
                                    />
                                    Fallido
                                </label>
                            </div>
                        )}
                        <div className="modal-buttons">
                            <button onClick={guardarDatos}>Guardar</button>
                            <button onClick={cerrarModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BloquesDeTrabajo;
