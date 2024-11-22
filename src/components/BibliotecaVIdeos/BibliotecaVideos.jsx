// src/components/BibliotecaVideos.jsx
import React, { useState } from 'react';
import './BibliotecaVideos.css';

function BibliotecaVideos({ onPointsIncrease }) {
    const [videos, setVideos] = useState([
        {
            id: 1,
            title: "TOPH: La CIEGA que VIO MÁS ALLÁ",
            date: "2024-10-28",
            thumbnail: "/ruta/a/tu/imagen.png", // Puedes dejar un enlace o dejar en blanco
            completed: false,
        },
    ]);

    const toggleComplete = (id) => {
        setVideos(videos.map(video => {
            if (video.id === id) {
                const newCompletedStatus = !video.completed;
                if (newCompletedStatus) {
                    onPointsIncrease(100);
                } else {
                    onPointsIncrease(-100);
                }
                return { ...video, completed: newCompletedStatus };
            }
            return video;
        }));
    };

    const addVideo = (title, date) => {
        const newVideo = {
            id: Date.now(),
            title,
            date,
            thumbnail: "/ruta/a/tu/imagen.png", // Puedes cambiar aquí o dejar en blanco
            completed: false,
        };
        setVideos([...videos, newVideo]);
    };

    return (
        <div className="biblioteca-videos-container">
            <h3 className="biblioteca-videos-title">Videos Biblioteca de Alejandría</h3>
            {/* Formulario para agregar nuevo video */}
            <div className="add-video-form">
                <input type="text" placeholder="Título del video" />
                <input type="text" placeholder="dd/mm/aaaa" />
                <button className="add-video-button">Agregar Video</button>
            </div>
            <div className="videos-list">
                {videos.map(video => (
                    <div key={video.id} className={`video-card ${video.completed ? 'completed' : ''}`}>
                        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                        <div className="video-info">
                            <h4>{video.title}</h4>
                            <p>{video.date}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={video.completed}
                            onChange={() => toggleComplete(video.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BibliotecaVideos;
