import React, { useState, useEffect } from 'react';
import './Proyectos.css';

function Proyectos() {
    const [proyectos, setProyectos] = useState(() => {
        const proyectosGuardados = localStorage.getItem('proyectos');
        return proyectosGuardados
            ? JSON.parse(proyectosGuardados)
            : Array(8).fill({ titulo: "", descripcion: "", estado: "original" });
    });

    const [modalData, setModalData] = useState(null);

    // Guardar los proyectos en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem('proyectos', JSON.stringify(proyectos));
    }, [proyectos]);

    const abrirModal = (index) => {
        setModalData({ ...proyectos[index], index });
    };

    const cerrarModal = () => {
        setModalData(null);
    };

    const guardarDatos = () => {
        setProyectos((prev) =>
            prev.map((proyecto, i) =>
                i === modalData.index
                    ? { titulo: modalData.titulo, descripcion: modalData.descripcion, estado: modalData.estado }
                    : proyecto
            )
        );
        cerrarModal();
    };

    const actualizarEstado = (estado) => {
        setModalData((prev) => ({ ...prev, estado }));
    };

    return (
        <div className="proyectos-container">
            <h2>Proyectos</h2>
            <div className="proyectos-grid">
                {proyectos.map((proyecto, index) => (
                    <div
                        key={index}
                        className={`proyecto ${proyecto.estado}`}
                        onClick={() => abrirModal(index)}
                    >
                        <h3>{proyecto.titulo || `Proyecto ${index + 1}`}</h3>
                        <p>{proyecto.descripcion || "Sin descripción"}</p>
                    </div>
                ))}
            </div>

            {modalData && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Editar Proyecto</h3>
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

export default Proyectos;
