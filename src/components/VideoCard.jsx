// src/components/VideoCard.jsx
import React from 'react';
import './VideoCard.css';

function VideoCard({ video, onDelete, onToggleComplete }) {
    return (
        <div
            className={`video-card ${video.completed ? 'completed' : ''}`}
        >
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.date}</p>
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={video.completed}
                    onChange={onToggleComplete} // Llama a toggleComplete de VideoList
                />
                Completado
            </label>
            <button onClick={onDelete} className="delete-button">Eliminar</button>
        </div>
    );
}

export default VideoCard;
